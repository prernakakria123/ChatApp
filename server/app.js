require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');
var app = express();
const http = require('http').createServer(app);

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);

//error handler
app.use((err,req,res,next)=>{
   if(err.name === 'ValidationError' ){
       var valErrors = [];
       Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
       res.status(422).send(valErrors);
   }
});

//start server
http.listen(process.env.PORT, () => console.log(`server started at port number : ${process.env.PORT}`));

const mongo = require('mongodb').MongoClient;
const clients = require('socket.io').listen(27017).sockets;

//connecting to mongodb
const url = 'mongodb://localhost:27017';
mongo.connect(url,(err,client)=>{
         if(err){
             throw err;
         }
         console.log('connected');
          
         const db = client.db('mongochat');
         //connecting to socket.io
         clients.on('connection',(socket)=>{
              let chat = db.collection('chats');

              //function to send status
              sendStatus = function(s){
                  socket.emit('status',s);
              }

              //get chat from mongo collection
              chat.find().limit(100).sort({_id:1}).toArray((err,res)=>{
                     if(err){
                         throw err;
                     }
                     //emit message
                     socket.emit('output', res);
              });
              //handle input events
              socket.on('input', (data)=>{
                  let name=data.name;
                  let message=data.message;
                  if(name==''||message==''){
                      sendStatus('Please enter a name and a message');
                  }
                  else{
                      //insert in database
                      chat.insert({name: name,message:message},()=>{
                            clients.emit('output',[data]);

                            //send status object
                            sendStatus({
                               message: 'Message sent',
                               clear: true
                            });
                      });
                  }
              });
              //handle clear
              socket.on('clear',(data)=>{
                  //remove chat from collection
                       chat.remove({}, function(){
                              //emit cleared
                              socket.emit('cleared');
                       });
              });
         });
});
