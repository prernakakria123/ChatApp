const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,(err)=>{
     if(!err){
         console.log('MongoDb connection established');
     }
     else{
         console.log(err);
     }
});

require('./user.model');