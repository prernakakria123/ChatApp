(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserProfileUserProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n    <a href=\"#\" class=\"navbar-brand \"><h1>CHATAPP</h1></a>\n    \n        <div class=\"navbar-nav ml-auto\">\n            <a href=\"#\" class=\"nav-item nav-link\"><h3><span class=\"glyphicon glyphicon-user\"></span>&nbsp;{{userDetails.fullName.split(' ')[0]}}</h3></a>\n            <a href=\"#\" class=\"nav-item nav-link\" (click)=\"onLogout()\" value=\"Logout\" ><h3><span class=\"glyphicon glyphicon-log-in\"></span >&nbsp;&nbsp;Logout</h3></a>\n        </div>\n</nav>\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\"\n        integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n    <title>My chat app</title>\n    <style>\n        #messages {\n            height: 300px;\n        }\n    </style>\n</head>\n\n<body>\n   \n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3 col-sm-12\">\n                <h1 class=\"text-center\">MongoChat\n                    <button id=\"clear\" class=\"btn btn-danger\">Clear</button>\n                </h1>\n                <div id=\"status\"></div>\n                <div id=\"chat\">\n                    <input type=\"text\" id=\"username\" class=\"form-control\" placeholder=\"Enter name..\">\n                    <br>\n                    <div class=\"card\">\n                        <div id=\"messages\" class=\"card-block\">\n\n                        </div>\n                    </div>\n                    <br>\n                    <textarea id=\"textarea\" class=\"form-control\" placeholder=\"Enter message...\"></textarea>\n                </div>\n            </div>\n        </div>\n    </div>\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <script>\n        (function () {\n\n            console.log(\"Collected Elements\");\n\n            var element = function (id) {\n                return document.getElementById(id);\n            }\n            //get elements\n            var status = element('status');\n            var messages = element('messages');\n            var textarea = element('textarea');\n            var username = element('username');\n            var clear = element('clear');\n\n            //set default status\n            var statusDefault = status.textContent;\n            var setStatus = function (s) {\n                //set status\n                status.textContent = s;\n                if (s !== statusDefault) {\n                    var delay = setTimeout(function () {\n                        setStatus(statusDefault);\n                    }, 4000);\n                }\n            }\n            //connect to socket.io\n            var socket = io.connect('http://localhost:27017');\n\n            //checking for connection\n            if (socket !== undefined) {\n                console.log('connected to socket');\n                socket.on('output', function (data) {\n                    console.log(data);\n                    if (data.length) {\n                        for (var x = 0; x < data.length; x++) {\n                            //build out message div\n                            var message = document.createElement('div');\n                            message.setAttribute('class', 'chat_message');\n                            message.textContent = data[x].name + \": \" + data[x].message;\n                            messages.appendChild(message);\n                            messages.insertBefore(message, messages.firstChild);\n                        }\n                    }\n                });\n                socket.on('status', function (data) {\n                    setStatus((typeof data === 'object') ? data.message : data);\n\n                    if (data.clear) {\n                        textarea.value = '';\n                    }\n                });\n\n                //handle input\n                textarea.addEventListener('keydown', function (event) {\n                    if (event.which === 13 && event.shiftKey == false) {\n                        socket.emit('input', {\n                            name: username.value,\n                            message: textarea.value\n\n                        });\n                        event.preventDefault();\n                    }\n                })\n                clear.addEventListener('click', function () {\n                    socket.emit('clear');\n                });\n\n                socket.on('cleared', function () {\n                    messages.textContent = '';\n                });\n            }\n        })();\n    </script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js\"></script>\n</body>\n\n</html>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/sign-in/sign-in.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/sign-in/sign-in.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserSignInSignInComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header nav-justified\">\n      <h3 style=\"color: beige;\">WELCOME TO CHATAPP</h3>\n    </div>\n  </div>\n</nav>\n<div>\n  <img src=\"assets/img/single_user.png\" id=\"icon\" alt=\"User Icon\" />\n</div>\n<form #signInForm=\"ngForm\" (ngSubmit)=\"signInForm.valid && onSubmit(signInForm)\">\n  <input type=\"text\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"model.email\" placeholder=\"Email\" [pattern]=\"emailRegex\" required\n    [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !email.valid }\">\n  <div *ngIf=\"signInForm.submitted && email.errors?.pattern\">\n    <label class=\"validation-message\">Invalid email address.</label>\n  </div>\n  <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"model.password\" placeholder=\"Password\" required minlength=\"4\"\n    [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !password.valid }\">\n  <div *ngIf=\"signInForm.submitted && password.errors?.minlength\">\n    <label class=\"validation-message\">Minimum 8 characters.</label>\n  </div>\n  <input type=\"submit\" value=\"Sign In\">\n</form>\n<!-- Error message -->\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\n  {{serverErrorMessages}}\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/sign-up/sign-up.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/sign-up/sign-up.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserSignUpSignUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header nav-justified\">\n      <h3 style=\"color: beige;\">WELCOME TO CHATAPP</h3>\n    </div>\n  </div>\n</nav>\n<div>\n  <img src=\"/assets/img/users.png\" id=\"icon\" alt=\"User Icon\" />\n</div>\n<form #signUpForm=\"ngForm\" (ngSubmit)=\"signUpForm.valid && onSubmit(signUpForm)\">\n  <input type=\"text\" #fullName=\"ngModel\" [(ngModel)]=\"userService.selectedUser.fullName\" name=\"fullName\" placeholder=\"Full Name\"\n  required  [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !fullName.valid }\">\n  <div *ngIf=\"signUpForm.submitted && !fullName.valid\">\n    <label class=\"validation-message\">This field is required.</label>\n  </div>\n  <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"userService.selectedUser.email\" name=\"email\" placeholder=\"Email\"\n  required [pattern]=\"emailRegex\"  [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !email.valid }\">\n  <div *ngIf=\"signUpForm.submitted && email.errors\">\n    <label *ngIf=\"email.errors.required\" class=\"validation-message\">This field is required.</label>\n    <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invalid email address.</label>\n  </div>\n  <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"userService.selectedUser.password\" name=\"password\" placeholder=\"Password\"\n  minlength=\"4\" required [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !password.valid }\">\n  <div *ngIf=\"signUpForm.submitted && password.errors\">\n    <label *ngIf=\"password.errors.required\" class=\"validation-message\">This field is required.</label>\n    <label *ngIf=\"password.errors.minlength\" class=\"validation-message\">Enter atleast 8 characters.</label>\n  </div>\n  <input type=\"submit\" value=\"Sign Up\">\n</form>\n\n<!-- Success message -->\n<div class=\"success\" *ngIf=\"showSucessMessage\">\n  Saved successfully\n</div>\n\n<!-- Error message -->\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\n  {{serverErrorMessages}}\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper fadeInDown\">\n  <div id=\"formContent\">\n    <h2 class=\"underlineHover\" routerLink=\"/login\" routerLinkActive=\"active\">Sign In </h2>\n    <h2 class=\"underlineHover\" routerLink=\"/signup\" routerLinkActive=\"active\">Sign Up </h2>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: routes, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user/sign-up/sign-up.component */
    "./src/app/user/sign-up/sign-up.component.ts");
    /* harmony import */


    var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user/sign-in/sign-in.component */
    "./src/app/user/sign-in/sign-in.component.ts");
    /* harmony import */


    var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-profile/user-profile.component */
    "./src/app/user-profile/user-profile.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");

    const routes = [{
      path: 'signup',
      component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
      children: [{
        path: '',
        component: _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]
      }]
    }, {
      path: 'login',
      component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
      children: [{
        path: '',
        component: _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"]
      }]
    }, {
      path: 'userprofile',
      component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n@import url('https://fonts.googleapis.com/css?family=Poppins');\n/* You can add global styles to this file, and also import other style files */\n/* BASIC */\nhtml {\r\n  background-color: #56baed;\r\n}\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  height: 100vh;\r\n}\na {\r\n  color: #92badd;\r\n  display:inline-block;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\nh2 {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  display:inline-block;\r\n  margin: 40px 8px 10px 8px;\r\n  color: #cccccc;\r\n}\n/* STRUCTURE */\n.wrapper {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  width: 100%;\r\n  padding: 20px;\r\n}\n#formContent {\r\n  border-radius: 10px 10px 10px 10px;\r\n  background: #fff;\r\n  padding: 30px;\r\n  width: 90%;\r\n  max-width: 450px;\r\n  position: relative;\r\n  padding: 0px;\r\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  text-align: center;\r\n}\n#formFooter {\r\n  background-color: #f6f6f6;\r\n  border-top: 1px solid #dce8f1;\r\n  padding: 25px;\r\n  text-align: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\n/* TABS */\nh2.inactive {\r\n  color: #cccccc;\r\n}\nh2.active {\r\n  color: #0d0d0d;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset]  {\r\n  cursor: pointer;\r\n  background-color: #56baed;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 80px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n  border-radius: 5px 5px 5px 5px;\r\n  margin: 5px 20px 40px 20px;\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n}\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\r\n  background-color: #39ace7;\r\n}\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\r\n  -webkit-transform: scale(0.95);\r\n  transform: scale(0.95);\r\n}\ninput[type=submit]:disabled{\r\n  background-color: grey;\r\n  color: white;\r\n}\ninput[type=text],input[type=password] {\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  border: 2px solid #f6f6f6;\r\n  -webkit-transition: all 0.5s ease-in-out;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\ninput[type=text]:focus,input[type=password]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\ninput[type=text]:placeholder {\r\n  color: #cccccc;\r\n}\ninput[type=text].invalid-textbox,input[type=password].invalid-textbox{\r\nborder-bottom: 2px solid #ed5558;\r\n}\nlabel.validation-message{\r\n  color:#ed5558;\r\n}\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\r\n  -webkit-animation-name: fadeInDown;\r\n  animation-name: fadeInDown;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\n@-webkit-keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\n@keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n.fadeIn {\r\n  opacity:0;\r\n  -webkit-animation:fadeIn ease-in 1;\r\n  animation:fadeIn ease-in 1;\r\n\r\n  -webkit-animation-fill-mode:forwards;\r\n  animation-fill-mode:forwards;\r\n\r\n  -webkit-animation-duration:1s;\r\n  animation-duration:1s;\r\n}\n.fadeIn.first {\r\n  -webkit-animation-delay: 0.4s;\r\n  animation-delay: 0.4s;\r\n}\n.fadeIn.second {\r\n  -webkit-animation-delay: 0.6s;\r\n  animation-delay: 0.6s;\r\n}\n.fadeIn.third {\r\n  -webkit-animation-delay: 0.8s;\r\n  animation-delay: 0.8s;\r\n}\n.fadeIn.fourth {\r\n  -webkit-animation-delay: 1s;\r\n  animation-delay: 1s;\r\n}\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\r\n  display: block;\r\n  left: 0;\r\n  bottom: -10px;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #56baed;\r\n  content: \"\";\r\n  -webkit-transition: width 0.2s;\r\n  transition: width 0.2s;\r\n}\n.underlineHover:hover {\r\n  color: #0d0d0d;\r\n}\n.underlineHover:hover:after{\r\n  width: 100%;\r\n}\n/* OTHERS */\n*:focus {\r\n    outline: none;\r\n}\n#icon {\r\n  width:50%;\r\n}\n* {\r\n  box-sizing: border-box;\r\n}\n.alert {\r\n  padding: 20px;\r\n  background-color: #f44336; /* Red */\r\n  color: white;\r\n  margin-bottom: 15px;\r\n}\n.success{\r\n  padding: 20px;\r\n  background-color:#249424; /* Green */\r\n  color: white;\r\n  margin-bottom: 15px;\r\n}\n/* Table Styles */\n.table-fill {\r\n  background: white;\r\n  border-radius:3px;\r\n  border-collapse: collapse;\r\n  height: 320px;\r\n  margin: auto;\r\n  max-width: 600px;\r\n  padding:5px;\r\n  width: 100%;\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\r\n  -webkit-animation: float 5s infinite;\r\n          animation: float 5s infinite;\r\n}\nth {\r\n  color:#D5DDE5;;\r\n  background:#1b1e24;\r\n  border-bottom:4px solid #9ea7af;\r\n  border-right: 1px solid #343a45;\r\n  font-size:23px;\r\n  font-weight: 100;\r\n  padding:24px;\r\n  text-align:left;\r\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  vertical-align:middle;\r\n}\nth:first-child {\r\n  border-top-left-radius:3px;\r\n}\nth:last-child {\r\n  border-top-right-radius:3px;\r\n  border-right:none;\r\n}\ntr {\r\n  border-top: 1px solid #C1C3D1;\r\n  border-bottom-: 1px solid #C1C3D1;\r\n  color:#666B85;\r\n  font-size:16px;\r\n  font-weight:normal;\r\n  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);\r\n}\ntr:first-child {\r\n  border-top:none;\r\n}\ntr:last-child {\r\n  border-bottom:none;\r\n}\ntr:nth-child(odd) td {\r\n  background:#EBEBEB;\r\n}\ntr:last-child td:first-child {\r\n  border-bottom-left-radius:3px;\r\n}\ntr:last-child td:last-child {\r\n  border-bottom-right-radius:3px;\r\n}\ntd {\r\n  background:#FFFFFF;\r\n  padding:20px;\r\n  text-align:left;\r\n  vertical-align:middle;\r\n  font-weight:300;\r\n  font-size:18px;\r\n  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\r\n  border-right: 1px solid #C1C3D1;\r\n}\ntd:last-child {\r\n  border-right: 0px;\r\n}\nth.text-left {\r\n  text-align: left;\r\n}\nth.text-center {\r\n  text-align: center;\r\n}\nth.text-right {\r\n  text-align: right;\r\n}\ntd.text-left {\r\n  text-align: left;\r\n}\ntd.text-center {\r\n  text-align: center;\r\n}\ntd.text-right {\r\n  text-align: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDhEQUE4RDtBQUQ5RCw4RUFBOEU7QUFHOUUsVUFBVTtBQUVWO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7QUFJQSxjQUFjO0FBRWQ7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUVBO0VBRUUsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUVaLHlDQUF5QztFQUN6QyxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGtCQUFrQjtFQUVsQiw0QkFBNEI7QUFDOUI7QUFJQSxTQUFTO0FBRVQ7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDO0FBQ2xDO0FBSUEsbUJBQW1CO0FBRW5CO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZUFBZTtFQUVmLDhDQUE4QztFQUU5Qyw4QkFBOEI7RUFDOUIsMEJB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QkFBNkI7RUFDN0IsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLCtDQUErQztBQUNqRDtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCw2Q0FBNkM7RUFDN0MsK0JBQStCO0FBQ2pDO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zJyk7XHJcblxyXG4vKiBCQVNJQyAqL1xyXG5cclxuaHRtbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjOTJiYWRkO1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDtcclxuICBjb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuXHJcblxyXG4vKiBTVFJVQ1RVUkUgKi9cclxuXHJcbi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4jZm9ybUNvbnRlbnQge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogNDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2Zvcm1Gb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLyogVEFCUyAqL1xyXG5cclxuaDIuaW5hY3RpdmUge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5oMi5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEZPUk0gVFlQT0dSQVBIWSovXHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE1cHggODBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgbWFyZ2luOiA1cHggMjBweCA0MHB4IDIwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGlucHV0W3R5cGU9cmVzZXRdOmhvdmVyICB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5YWNlNztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSwgaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlICB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c3VibWl0XTpkaXNhYmxlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSxpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogODUlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLmludmFsaWQtdGV4dGJveCxpbnB1dFt0eXBlPXBhc3N3b3JkXS5pbnZhbGlkLXRleHRib3h7XHJcbmJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWQ1NTU4O1xyXG59XHJcblxyXG5sYWJlbC52YWxpZGF0aW9uLW1lc3NhZ2V7XHJcbiAgY29sb3I6I2VkNTU1ODtcclxufVxyXG5cclxuXHJcblxyXG4vKiBBTklNQVRJT05TICovXHJcblxyXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluLWRvd24gQW5pbWF0aW9uICovXHJcbi5mYWRlSW5Eb3duIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbkBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcblxyXG4uZmFkZUluIHtcclxuICBvcGFjaXR5OjA7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICAtbW96LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gIGFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG5cclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxufVxyXG5cclxuLmZhZGVJbi5maXJzdCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcblxyXG4uZmFkZUluLnNlY29uZCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG59XHJcblxyXG4uZmFkZUluLnRoaXJkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbn1cclxuXHJcbi5mYWRlSW4uZm91cnRoIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbn1cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXHJcbi51bmRlcmxpbmVIb3ZlcjphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0xMHB4O1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xyXG59XHJcblxyXG4udW5kZXJsaW5lSG92ZXI6aG92ZXIge1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG59XHJcblxyXG4udW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLyogT1RIRVJTICovXHJcblxyXG4qOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiNpY29uIHtcclxuICB3aWR0aDo1MCU7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG4uYWxlcnQge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjsgLyogUmVkICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5zdWNjZXNze1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMjQ5NDI0OyAvKiBHcmVlbiAqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4vKiBUYWJsZSBTdHlsZXMgKi9cclxuLnRhYmxlLWZpbGwge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6M3B4O1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgaGVpZ2h0OiAzMjBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBwYWRkaW5nOjVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBhbmltYXRpb246IGZsb2F0IDVzIGluZmluaXRlO1xyXG59XHJcblxyXG50aCB7XHJcbiAgY29sb3I6I0Q1RERFNTs7XHJcbiAgYmFja2dyb3VuZDojMWIxZTI0O1xyXG4gIGJvcmRlci1ib3R0b206NHB4IHNvbGlkICM5ZWE3YWY7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzM0M2E0NTtcclxuICBmb250LXNpemU6MjNweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIHBhZGRpbmc6MjRweDtcclxuICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG59XHJcblxyXG50aDpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czozcHg7XHJcbn1cclxuXHJcbnRoOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjNweDtcclxuICBib3JkZXItcmlnaHQ6bm9uZTtcclxufVxyXG5cclxudHIge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQzFDM0QxO1xyXG4gIGJvcmRlci1ib3R0b20tOiAxcHggc29saWQgI0MxQzNEMTtcclxuICBjb2xvcjojNjY2Qjg1O1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMjU2LCAyNTYsIDI1NiwgMC4xKTtcclxufVxyXG5cclxudHI6Zmlyc3QtY2hpbGQge1xyXG4gIGJvcmRlci10b3A6bm9uZTtcclxufVxyXG5cclxudHI6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQob2RkKSB0ZCB7XHJcbiAgYmFja2dyb3VuZDojRUJFQkVCO1xyXG59XHJcblxyXG50cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweDtcclxufVxyXG5cclxudHI6bGFzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czozcHg7XHJcbn1cclxuXHJcbnRkIHtcclxuICBiYWNrZ3JvdW5kOiNGRkZGRkY7XHJcbiAgcGFkZGluZzoyMHB4O1xyXG4gIHRleHQtYWxpZ246bGVmdDtcclxuICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgZm9udC13ZWlnaHQ6MzAwO1xyXG4gIGZvbnQtc2l6ZToxOHB4O1xyXG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQzFDM0QxO1xyXG59XHJcblxyXG50ZDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItcmlnaHQ6IDBweDtcclxufVxyXG5cclxudGgudGV4dC1sZWZ0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG50aC50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50aC50ZXh0LXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxudGQudGV4dC1sZWZ0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG50ZC50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ZC50ZXh0LXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AppComponent = class AppComponent {
      constructor() {
        this.title = 'angular';
      }

    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user/sign-up/sign-up.component */
    "./src/app/user/sign-up/sign-up.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./user-profile/user-profile.component */
    "./src/app/user-profile/user-profile.component.ts");
    /* harmony import */


    var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./user/sign-in/sign-in.component */
    "./src/app/user/sign-in/sign-in.component.ts");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./auth/auth.interceptor */
    "./src/app/auth/auth.interceptor.ts");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"], _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"], _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__["SignInComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["routes"]), _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"],
        multi: true
      }, _shared_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");

    let AuthGuard = class AuthGuard {
      constructor(userService, router) {
        this.userService = userService;
        this.router = router;
      }

      canActivate(next, state) {
        if (!this.userService.isLoggedIn) {
          this.router.navigateByUrl('/login');
          this.userService.deleteToken();
          return false;
        }

        return true;
      }

    };

    AuthGuard.ctorParameters = () => [{
      type: _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/auth/auth.interceptor.ts":
  /*!******************************************!*\
    !*** ./src/app/auth/auth.interceptor.ts ***!
    \******************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppAuthAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");

    let AuthInterceptor = class AuthInterceptor {
      constructor(userService, router) {
        this.userService = userService;
        this.router = router;
      }

      intercept(req, next) {
        if (req.headers.get('noauth')) {
          return next.handle(req.clone());
        } else {
          const clonedreq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + this.userService.getToken())
          });
          return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(event => {}, err => {
            if (err.error.auth === false) {
              this.router.navigateByUrl('/login');
            }
          }));
        }
      }

    };

    AuthInterceptor.ctorParameters = () => [{
      type: _shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/shared/user.service.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/user.service.ts ***!
    \****************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppSharedUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    let UserService = class UserService {
      constructor(http) {
        this.http = http;
        this.selectedUser = {
          fullName: '',
          email: '',
          password: ''
        };
        this.noAuthHeader = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'NoAuth': 'True'
          })
        };
      } //HttpMethods


      postUser(user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/register', user, this.noAuthHeader);
      }

      login(authCredentials) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/authenticate', authCredentials, this.noAuthHeader);
      }

      getUserProfile() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/userProfile');
      } //Helper Methods


      setToken(token) {
        localStorage.setItem('token', token);
      }

      getToken() {
        return localStorage.getItem('token');
      }

      deleteToken() {
        localStorage.removeItem('token');
      }

      getUserPayload() {
        var token = this.getToken();

        if (token) {
          var userPayload = atob(token.split('.')[1]);
          return JSON.parse(userPayload);
        } else return null;
      }

      isLoggedIn() {
        var userPayload = this.getUserPayload();
        if (userPayload) return userPayload.exp > Date.now() / 1000;else return false;
      }

    };

    UserService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/user-profile/user-profile.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/user-profile/user-profile.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserProfileUserProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user-profile/user-profile.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/user-profile/user-profile.component.ts ***!
    \********************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let UserProfileComponent = class UserProfileComponent {
      constructor(userService, router) {
        this.userService = userService;
        this.router = router;
      }

      ngOnInit() {
        this.userService.getUserProfile().subscribe(res => {
          this.userDetails = res['user'];
        }, err => {
          console.log(err);
        });
      }

      onLogout() {
        this.userService.deleteToken();
        this.router.navigate(['/login']);
      }

    };

    UserProfileComponent.ctorParameters = () => [{
      type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-profile.component.css */
      "./src/app/user-profile/user-profile.component.css")).default]
    })], UserProfileComponent);
    /***/
  },

  /***/
  "./src/app/user/sign-in/sign-in.component.css":
  /*!****************************************************!*\
    !*** ./src/app/user/sign-in/sign-in.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserSignInSignInComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n@import url('https://fonts.googleapis.com/css?family=Poppins');\n/* You can add global styles to this file, and also import other style files */\n/* BASIC */\nhtml {\r\n  background-color: #56baed;\r\n}\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  height: 100vh;\r\n}\na {\r\n  color: #92badd;\r\n  display:inline-block;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\n.navbar-default{\r\n  background-color: #5BC0DE;\r\n}\nh2 {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  display:inline-block;\r\n  margin: 40px 8px 10px 8px;\r\n  color: #cccccc;\r\n}\n/* STRUCTURE */\n.wrapper {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  width: 100%;\r\n  padding: 20px;\r\n}\n#formContent {\r\n  border-radius: 10px 10px 10px 10px;\r\n  background: #fff;\r\n  padding: 30px;\r\n  width: 90%;\r\n  max-width: 450px;\r\n  position: relative;\r\n  padding: 0px;\r\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  text-align: center;\r\n}\n#formFooter {\r\n  background-color: #f6f6f6;\r\n  border-top: 1px solid #dce8f1;\r\n  padding: 25px;\r\n  text-align: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\n/* TABS */\nh2.inactive {\r\n  color: #cccccc;\r\n}\nh2.active {\r\n  color: #0d0d0d;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset]  {\r\n  cursor: pointer;\r\n  background-color: #56baed;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 80px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n  border-radius: 5px 5px 5px 5px;\r\n  margin: 5px 20px 40px 20px;\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n}\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\r\n  background-color: #39ace7;\r\n}\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\r\n  -webkit-transform: scale(0.95);\r\n  transform: scale(0.95);\r\n}\ninput[type=submit]:disabled{\r\n  background-color: grey;\r\n  color: white;\r\n}\ninput[type=text],input[type=password] {\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  border: 2px solid #f6f6f6;\r\n  -webkit-transition: all 0.5s ease-in-out;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\ninput[type=text]:focus,input[type=password]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\ninput[type=text]:placeholder {\r\n  color: #cccccc;\r\n}\ninput[type=text].invalid-textbox,input[type=password].invalid-textbox{\r\nborder-bottom: 2px solid #ed5558;\r\n}\nlabel.validation-message{\r\n  color:#ed5558;\r\n}\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\r\n  -webkit-animation-name: fadeInDown;\r\n  animation-name: fadeInDown;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\n@-webkit-keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\n@keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n.fadeIn {\r\n  opacity:0;\r\n  -webkit-animation:fadeIn ease-in 1;\r\n  animation:fadeIn ease-in 1;\r\n\r\n  -webkit-animation-fill-mode:forwards;\r\n  animation-fill-mode:forwards;\r\n\r\n  -webkit-animation-duration:1s;\r\n  animation-duration:1s;\r\n}\n.fadeIn.first {\r\n  -webkit-animation-delay: 0.4s;\r\n  animation-delay: 0.4s;\r\n}\n.fadeIn.second {\r\n  -webkit-animation-delay: 0.6s;\r\n  animation-delay: 0.6s;\r\n}\n.fadeIn.third {\r\n  -webkit-animation-delay: 0.8s;\r\n  animation-delay: 0.8s;\r\n}\n.fadeIn.fourth {\r\n  -webkit-animation-delay: 1s;\r\n  animation-delay: 1s;\r\n}\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\r\n  display: block;\r\n  left: 0;\r\n  bottom: -10px;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #56baed;\r\n  content: \"\";\r\n  -webkit-transition: width 0.2s;\r\n  transition: width 0.2s;\r\n}\n.underlineHover:hover {\r\n  color: #0d0d0d;\r\n}\n.underlineHover:hover:after{\r\n  width: 100%;\r\n}\n/* OTHERS */\n*:focus {\r\n    outline: none;\r\n}\n#icon {\r\n  width:50%;\r\n}\n* {\r\n  box-sizing: border-box;\r\n}\n.alert {\r\n  padding: 20px;\r\n  background-color: #f44336; /* Red */\r\n  color: white;\r\n  margin-bottom: 15px;\r\n}\n.success{\r\n  padding: 20px;\r\n  background-color:#249424; /* Green */\r\n  color: white;\r\n  margin-bottom: 15px;\r\n}\n/* Table Styles */\n.table-fill {\r\n  background: white;\r\n  border-radius:3px;\r\n  border-collapse: collapse;\r\n  height: 320px;\r\n  margin: auto;\r\n  max-width: 600px;\r\n  padding:5px;\r\n  width: 100%;\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\r\n  -webkit-animation: float 5s infinite;\r\n          animation: float 5s infinite;\r\n}\nth {\r\n  color:#D5DDE5;;\r\n  background:#1b1e24;\r\n  border-bottom:4px solid #9ea7af;\r\n  border-right: 1px solid #343a45;\r\n  font-size:23px;\r\n  font-weight: 100;\r\n  padding:24px;\r\n  text-align:left;\r\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  vertical-align:middle;\r\n}\nth:first-child {\r\n  border-top-left-radius:3px;\r\n}\nth:last-child {\r\n  border-top-right-radius:3px;\r\n  border-right:none;\r\n}\ntr {\r\n  border-top: 1px solid #C1C3D1;\r\n  border-bottom-: 1px solid #C1C3D1;\r\n  color:#666B85;\r\n  font-size:16px;\r\n  font-weight:normal;\r\n  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);\r\n}\ntr:first-child {\r\n  border-top:none;\r\n}\ntr:last-child {\r\n  border-bottom:none;\r\n}\ntr:nth-child(odd) td {\r\n  background:#EBEBEB;\r\n}\ntr:last-child td:first-child {\r\n  border-bottom-left-radius:3px;\r\n}\ntr:last-child td:last-child {\r\n  border-bottom-right-radius:3px;\r\n}\ntd {\r\n  background:#FFFFFF;\r\n  padding:20px;\r\n  text-align:left;\r\n  vertical-align:middle;\r\n  font-weight:300;\r\n  font-size:18px;\r\n  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\r\n  border-right: 1px solid #C1C3D1;\r\n}\ntd:last-child {\r\n  border-right: 0px;\r\n}\nth.text-left {\r\n  text-align: left;\r\n}\nth.text-center {\r\n  text-align: center;\r\n}\nth.text-right {\r\n  text-align: right;\r\n}\ntd.text-left {\r\n  text-align: left;\r\n}\ntd.text-center {\r\n  text-align: center;\r\n}\ntd.text-right {\r\n  text-align: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsOERBQThEO0FBRDlELDhFQUE4RTtBQUc5RSxVQUFVO0FBRVY7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCO0FBSUEsY0FBYztBQUVkO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7QUFFQTtFQUVFLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFFWix5Q0FBeUM7RUFDekMsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixrQkFBa0I7RUFFbEIsNEJBQTRCO0FBQzlCO0FBSUEsU0FBUztBQUVUO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGdDQUFnQztBQUNsQztBQUlBLG1CQUFtQjtBQUVuQjtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pC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Q0UsMkJBQTJCO0VBQzNCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiwrQ0FBK0M7QUFDakQ7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsNkNBQTZDO0VBQzdDLCtCQUErQjtBQUNqQztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zJyk7XHJcblxyXG4vKiBCQVNJQyAqL1xyXG5cclxuaHRtbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjOTJiYWRkO1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5uYXZiYXItZGVmYXVsdHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUJDMERFO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDtcclxuICBjb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuXHJcblxyXG4vKiBTVFJVQ1RVUkUgKi9cclxuXHJcbi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4jZm9ybUNvbnRlbnQge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogNDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2Zvcm1Gb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLyogVEFCUyAqL1xyXG5cclxuaDIuaW5hY3RpdmUge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5oMi5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEZPUk0gVFlQT0dSQVBIWSovXHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE1cHggODBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgbWFyZ2luOiA1cHggMjBweCA0MHB4IDIwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGlucHV0W3R5cGU9cmVzZXRdOmhvdmVyICB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5YWNlNztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSwgaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlICB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c3VibWl0XTpkaXNhYmxlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSxpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogODUlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLmludmFsaWQtdGV4dGJveCxpbnB1dFt0eXBlPXBhc3N3b3JkXS5pbnZhbGlkLXRleHRib3h7XHJcbmJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWQ1NTU4O1xyXG59XHJcblxyXG5sYWJlbC52YWxpZGF0aW9uLW1lc3NhZ2V7XHJcbiAgY29sb3I6I2VkNTU1ODtcclxufVxyXG5cclxuXHJcblxyXG4vKiBBTklNQVRJT05TICovXHJcblxyXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluLWRvd24gQW5pbWF0aW9uICovXHJcbi5mYWRlSW5Eb3duIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbkBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcblxyXG4uZmFkZUluIHtcclxuICBvcGFjaXR5OjA7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICAtbW96LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gIGFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG5cclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxufVxyXG5cclxuLmZhZGVJbi5maXJzdCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcblxyXG4uZmFkZUluLnNlY29uZCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG59XHJcblxyXG4uZmFkZUluLnRoaXJkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbn1cclxuXHJcbi5mYWRlSW4uZm91cnRoIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbn1cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXHJcbi51bmRlcmxpbmVIb3ZlcjphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0xMHB4O1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xyXG59XHJcblxyXG4udW5kZXJsaW5lSG92ZXI6aG92ZXIge1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG59XHJcblxyXG4udW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLyogT1RIRVJTICovXHJcblxyXG4qOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiNpY29uIHtcclxuICB3aWR0aDo1MCU7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG4uYWxlcnQge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjsgLyogUmVkICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5zdWNjZXNze1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMjQ5NDI0OyAvKiBHcmVlbiAqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4vKiBUYWJsZSBTdHlsZXMgKi9cclxuLnRhYmxlLWZpbGwge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6M3B4O1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgaGVpZ2h0OiAzMjBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBwYWRkaW5nOjVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBhbmltYXRpb246IGZsb2F0IDVzIGluZmluaXRlO1xyXG59XHJcblxyXG50aCB7XHJcbiAgY29sb3I6I0Q1RERFNTs7XHJcbiAgYmFja2dyb3VuZDojMWIxZTI0O1xyXG4gIGJvcmRlci1ib3R0b206NHB4IHNvbGlkICM5ZWE3YWY7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzM0M2E0NTtcclxuICBmb250LXNpemU6MjNweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIHBhZGRpbmc6MjRweDtcclxuICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG59XHJcblxyXG50aDpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czozcHg7XHJcbn1cclxuXHJcbnRoOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjNweDtcclxuICBib3JkZXItcmlnaHQ6bm9uZTtcclxufVxyXG5cclxudHIge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQzFDM0QxO1xyXG4gIGJvcmRlci1ib3R0b20tOiAxcHggc29saWQgI0MxQzNEMTtcclxuICBjb2xvcjojNjY2Qjg1O1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMjU2LCAyNTYsIDI1NiwgMC4xKTtcclxufVxyXG5cclxudHI6Zmlyc3QtY2hpbGQge1xyXG4gIGJvcmRlci10b3A6bm9uZTtcclxufVxyXG5cclxudHI6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQob2RkKSB0ZCB7XHJcbiAgYmFja2dyb3VuZDojRUJFQkVCO1xyXG59XHJcblxyXG50cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweDtcclxufVxyXG5cclxudHI6bGFzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czozcHg7XHJcbn1cclxuXHJcbnRkIHtcclxuICBiYWNrZ3JvdW5kOiNGRkZGRkY7XHJcbiAgcGFkZGluZzoyMHB4O1xyXG4gIHRleHQtYWxpZ246bGVmdDtcclxuICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgZm9udC13ZWlnaHQ6MzAwO1xyXG4gIGZvbnQtc2l6ZToxOHB4O1xyXG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQzFDM0QxO1xyXG59XHJcblxyXG50ZDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItcmlnaHQ6IDBweDtcclxufVxyXG5cclxudGgudGV4dC1sZWZ0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG50aC50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50aC50ZXh0LXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxudGQudGV4dC1sZWZ0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG50ZC50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ZC50ZXh0LXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/user/sign-in/sign-in.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/user/sign-in/sign-in.component.ts ***!
    \***************************************************/

  /*! exports provided: SignInComponent */

  /***/
  function srcAppUserSignInSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
      return SignInComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let SignInComponent = class SignInComponent {
      constructor(userService, router) {
        this.userService = userService;
        this.router = router; // tslint:disable-next-line: max-line-length

        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.model = {
          email: '',
          password: ''
        };
      }

      ngOnInit() {
        if (this.userService.isLoggedIn()) {
          this.router.navigateByUrl('/userprofile');
        }
      }

      onSubmit(form) {
        this.userService.login(form.value).subscribe(res => {
          this.userService.setToken(res['token']);
          this.router.navigateByUrl('/userprofile');
        }, err => {
          this.serverErrorMessages = err.error.message;
        });
      }

    };

    SignInComponent.ctorParameters = () => [{
      type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-in',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-in.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/sign-in/sign-in.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-in.component.css */
      "./src/app/user/sign-in/sign-in.component.css")).default]
    })], SignInComponent);
    /***/
  },

  /***/
  "./src/app/user/sign-up/sign-up.component.css":
  /*!****************************************************!*\
    !*** ./src/app/user/sign-up/sign-up.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserSignUpSignUpComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n@import url('https://fonts.googleapis.com/css?family=Poppins');\n/* You can add global styles to this file, and also import other style files */\n/* BASIC */\nhtml {\r\n  background-color: #56baed;\r\n}\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  height: 100vh;\r\n}\na {\r\n  color: #92badd;\r\n  display:inline-block;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\n.navbar-default{\r\n  background-color: #5BC0DE;\r\n}\nh2 {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  display:inline-block;\r\n  margin: 40px 8px 10px 8px;\r\n  color: #cccccc;\r\n}\n/* STRUCTURE */\n.wrapper {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  width: 100%;\r\n  padding: 20px;\r\n}\n#formContent {\r\n  border-radius: 10px 10px 10px 10px;\r\n  background: #fff;\r\n  padding: 30px;\r\n  width: 90%;\r\n  max-width: 450px;\r\n  position: relative;\r\n  padding: 0px;\r\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  text-align: center;\r\n}\n#formFooter {\r\n  background-color: #f6f6f6;\r\n  border-top: 1px solid #dce8f1;\r\n  padding: 25px;\r\n  text-align: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\n/* TABS */\nh2.inactive {\r\n  color: #cccccc;\r\n}\nh2.active {\r\n  color: #0d0d0d;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset]  {\r\n  cursor: pointer;\r\n  background-color: #56baed;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 80px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n  border-radius: 5px 5px 5px 5px;\r\n  margin: 5px 20px 40px 20px;\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n}\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\r\n  background-color: #39ace7;\r\n}\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\r\n  -webkit-transform: scale(0.95);\r\n  transform: scale(0.95);\r\n}\ninput[type=submit]:disabled{\r\n  background-color: grey;\r\n  color: white;\r\n}\ninput[type=text],input[type=password] {\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  border: 2px solid #f6f6f6;\r\n  -webkit-transition: all 0.5s ease-in-out;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\ninput[type=text]:focus,input[type=password]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\ninput[type=text]:placeholder {\r\n  color: #cccccc;\r\n}\ninput[type=text].invalid-textbox,input[type=password].invalid-textbox{\r\nborder-bottom: 2px solid #ed5558;\r\n}\nlabel.validation-message{\r\n  color:#ed5558;\r\n}\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\r\n  -webkit-animation-name: fadeInDown;\r\n  animation-name: fadeInDown;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\n@-webkit-keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\n@keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n.fadeIn {\r\n  opacity:0;\r\n  -webkit-animation:fadeIn ease-in 1;\r\n  animation:fadeIn ease-in 1;\r\n\r\n  -webkit-animation-fill-mode:forwards;\r\n  animation-fill-mode:forwards;\r\n\r\n  -webkit-animation-duration:1s;\r\n  animation-duration:1s;\r\n}\n.fadeIn.first {\r\n  -webkit-animation-delay: 0.4s;\r\n  animation-delay: 0.4s;\r\n}\n.fadeIn.second {\r\n  -webkit-animation-delay: 0.6s;\r\n  animation-delay: 0.6s;\r\n}\n.fadeIn.third {\r\n  -webkit-animation-delay: 0.8s;\r\n  animation-delay: 0.8s;\r\n}\n.fadeIn.fourth {\r\n  -webkit-animation-delay: 1s;\r\n  animation-delay: 1s;\r\n}\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\r\n  display: block;\r\n  left: 0;\r\n  bottom: -10px;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #56baed;\r\n  content: \"\";\r\n  -webkit-transition: width 0.2s;\r\n  transition: width 0.2s;\r\n}\n.underlineHover:hover {\r\n  color: #0d0d0d;\r\n}\n.underlineHover:hover:after{\r\n  width: 100%;\r\n}\n/* OTHERS */\n*:focus {\r\n    outline: none;\r\n}\n#icon {\r\n  width:50%;\r\n}\n* {\r\n  box-sizing: border-box;\r\n}\n.alert {\r\n  padding: 20px;\r\n  background-color: #f44336; /* Red */\r\n  color: white;\r\n  margin-bottom: 15px;\r\n}\n.success{\r\n  padding: 20px;\r\n  background-color:#249424; /* Green */\r\n  color: white;\r\n  margin-bottom: 15px;\r\n}\n/* Table Styles */\n.table-fill {\r\n  background: white;\r\n  border-radius:3px;\r\n  border-collapse: collapse;\r\n  height: 320px;\r\n  margin: auto;\r\n  max-width: 600px;\r\n  padding:5px;\r\n  width: 100%;\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\r\n  -webkit-animation: float 5s infinite;\r\n          animation: float 5s infinite;\r\n}\nth {\r\n  color:#D5DDE5;;\r\n  background:#1b1e24;\r\n  border-bottom:4px solid #9ea7af;\r\n  border-right: 1px solid #343a45;\r\n  font-size:23px;\r\n  font-weight: 100;\r\n  padding:24px;\r\n  text-align:left;\r\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  vertical-align:middle;\r\n}\nth:first-child {\r\n  border-top-left-radius:3px;\r\n}\nth:last-child {\r\n  border-top-right-radius:3px;\r\n  border-right:none;\r\n}\ntr {\r\n  border-top: 1px solid #C1C3D1;\r\n  border-bottom-: 1px solid #C1C3D1;\r\n  color:#666B85;\r\n  font-size:16px;\r\n  font-weight:normal;\r\n  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);\r\n}\ntr:first-child {\r\n  border-top:none;\r\n}\ntr:last-child {\r\n  border-bottom:none;\r\n}\ntr:nth-child(odd) td {\r\n  background:#EBEBEB;\r\n}\ntr:last-child td:first-child {\r\n  border-bottom-left-radius:3px;\r\n}\ntr:last-child td:last-child {\r\n  border-bottom-right-radius:3px;\r\n}\ntd {\r\n  background:#FFFFFF;\r\n  padding:20px;\r\n  text-align:left;\r\n  vertical-align:middle;\r\n  font-weight:300;\r\n  font-size:18px;\r\n  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\r\n  border-right: 1px solid #C1C3D1;\r\n}\ntd:last-child {\r\n  border-right: 0px;\r\n}\nth.text-left {\r\n  text-align: left;\r\n}\nth.text-center {\r\n  text-align: center;\r\n}\nth.text-right {\r\n  text-align: right;\r\n}\ntd.text-left {\r\n  text-align: left;\r\n}\ntd.text-center {\r\n  text-align: center;\r\n}\ntd.text-right {\r\n  text-align: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsOERBQThEO0FBRDlELDhFQUE4RTtBQUc5RSxVQUFVO0FBRVY7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCO0FBSUEsY0FBYztBQUVkO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7QUFFQTtFQUVFLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFFWix5Q0FBeUM7RUFDekMsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixrQkFBa0I7RUFFbEIsNEJBQTRCO0FBQzlCO0FBSUEsU0FBUztBQUVUO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGdDQUFnQztBQUNsQztBQUlBLG1CQUFtQjtBQUVuQjtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pC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Q0UsMkJBQTJCO0VBQzNCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiwrQ0FBK0M7QUFDakQ7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsNkNBQTZDO0VBQzdDLCtCQUErQjtBQUNqQztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zJyk7XHJcblxyXG4vKiBCQVNJQyAqL1xyXG5cclxuaHRtbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjOTJiYWRkO1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5uYXZiYXItZGVmYXVsdHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUJDMERFO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDtcclxuICBjb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuXHJcblxyXG4vKiBTVFJVQ1RVUkUgKi9cclxuXHJcbi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4jZm9ybUNvbnRlbnQge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogNDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2Zvcm1Gb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLyogVEFCUyAqL1xyXG5cclxuaDIuaW5hY3RpdmUge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5oMi5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEZPUk0gVFlQT0dSQVBIWSovXHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE1cHggODBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgbWFyZ2luOiA1cHggMjBweCA0MHB4IDIwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGlucHV0W3R5cGU9cmVzZXRdOmhvdmVyICB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5YWNlNztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSwgaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlICB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c3VibWl0XTpkaXNhYmxlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSxpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogODUlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLmludmFsaWQtdGV4dGJveCxpbnB1dFt0eXBlPXBhc3N3b3JkXS5pbnZhbGlkLXRleHRib3h7XHJcbmJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWQ1NTU4O1xyXG59XHJcblxyXG5sYWJlbC52YWxpZGF0aW9uLW1lc3NhZ2V7XHJcbiAgY29sb3I6I2VkNTU1ODtcclxufVxyXG5cclxuXHJcblxyXG4vKiBBTklNQVRJT05TICovXHJcblxyXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluLWRvd24gQW5pbWF0aW9uICovXHJcbi5mYWRlSW5Eb3duIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbkBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcblxyXG4uZmFkZUluIHtcclxuICBvcGFjaXR5OjA7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICAtbW96LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gIGFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG5cclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxufVxyXG5cclxuLmZhZGVJbi5maXJzdCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcblxyXG4uZmFkZUluLnNlY29uZCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG59XHJcblxyXG4uZmFkZUluLnRoaXJkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbn1cclxuXHJcbi5mYWRlSW4uZm91cnRoIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbn1cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXHJcbi51bmRlcmxpbmVIb3ZlcjphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0xMHB4O1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xyXG59XHJcblxyXG4udW5kZXJsaW5lSG92ZXI6aG92ZXIge1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG59XHJcblxyXG4udW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLyogT1RIRVJTICovXHJcblxyXG4qOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiNpY29uIHtcclxuICB3aWR0aDo1MCU7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG4uYWxlcnQge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjsgLyogUmVkICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5zdWNjZXNze1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMjQ5NDI0OyAvKiBHcmVlbiAqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4vKiBUYWJsZSBTdHlsZXMgKi9cclxuLnRhYmxlLWZpbGwge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6M3B4O1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgaGVpZ2h0OiAzMjBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBwYWRkaW5nOjVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBhbmltYXRpb246IGZsb2F0IDVzIGluZmluaXRlO1xyXG59XHJcblxyXG50aCB7XHJcbiAgY29sb3I6I0Q1RERFNTs7XHJcbiAgYmFja2dyb3VuZDojMWIxZTI0O1xyXG4gIGJvcmRlci1ib3R0b206NHB4IHNvbGlkICM5ZWE3YWY7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzM0M2E0NTtcclxuICBmb250LXNpemU6MjNweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIHBhZGRpbmc6MjRweDtcclxuICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG59XHJcblxyXG50aDpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czozcHg7XHJcbn1cclxuXHJcbnRoOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjNweDtcclxuICBib3JkZXItcmlnaHQ6bm9uZTtcclxufVxyXG5cclxudHIge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQzFDM0QxO1xyXG4gIGJvcmRlci1ib3R0b20tOiAxcHggc29saWQgI0MxQzNEMTtcclxuICBjb2xvcjojNjY2Qjg1O1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMjU2LCAyNTYsIDI1NiwgMC4xKTtcclxufVxyXG5cclxudHI6Zmlyc3QtY2hpbGQge1xyXG4gIGJvcmRlci10b3A6bm9uZTtcclxufVxyXG5cclxudHI6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQob2RkKSB0ZCB7XHJcbiAgYmFja2dyb3VuZDojRUJFQkVCO1xyXG59XHJcblxyXG50cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweDtcclxufVxyXG5cclxudHI6bGFzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czozcHg7XHJcbn1cclxuXHJcbnRkIHtcclxuICBiYWNrZ3JvdW5kOiNGRkZGRkY7XHJcbiAgcGFkZGluZzoyMHB4O1xyXG4gIHRleHQtYWxpZ246bGVmdDtcclxuICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgZm9udC13ZWlnaHQ6MzAwO1xyXG4gIGZvbnQtc2l6ZToxOHB4O1xyXG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQzFDM0QxO1xyXG59XHJcblxyXG50ZDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItcmlnaHQ6IDBweDtcclxufVxyXG5cclxudGgudGV4dC1sZWZ0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG50aC50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50aC50ZXh0LXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxudGQudGV4dC1sZWZ0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG50ZC50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ZC50ZXh0LXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/user/sign-up/sign-up.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/user/sign-up/sign-up.component.ts ***!
    \***************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppUserSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/user.service */
    "./src/app/shared/user.service.ts");

    let SignUpComponent = class SignUpComponent {
      constructor(userService) {
        this.userService = userService; // tslint:disable-next-line: max-line-length

        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      }

      ngOnInit() {}

      onSubmit(form) {
        this.userService.postUser(form.value).subscribe(res => {
          this.showSucessMessage = true;
          setTimeout(() => this.showSucessMessage = false, 4000);
          this.resetForm(form);
        }, err => {
          if (err.status === 422) {
            this.serverErrorMessages = err.error.join('<br/>');
          } else {
            this.serverErrorMessages = 'Something went wrong.Please contact admin.';
          }
        });
      }

      resetForm(form) {
        this.userService.selectedUser = {
          fullName: '',
          email: '',
          password: ''
        };
        form.resetForm();
        this.serverErrorMessages = '';
      }

    };

    SignUpComponent.ctorParameters = () => [{
      type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
    }];

    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/sign-up/sign-up.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-up.component.css */
      "./src/app/user/sign-up/sign-up.component.css")).default]
    })], SignUpComponent);
    /***/
  },

  /***/
  "./src/app/user/user.component.css":
  /*!*****************************************!*\
    !*** ./src/app/user/user.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n@import url('https://fonts.googleapis.com/css?family=Poppins');\n/* You can add global styles to this file, and also import other style files */\n/* BASIC */\nhtml {\r\n  background-color: #56baed;\r\n}\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  height: 100vh;\r\n}\na {\r\n  color: #92badd;\r\n  display:inline-block;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\nh2 {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  display:inline-block;\r\n  margin: 40px 8px 10px 8px;\r\n  color: #cccccc;\r\n}\n/* STRUCTURE */\n.wrapper {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  width: 100%;\r\n  padding: 20px;\r\n}\n#formContent {\r\n  border-radius: 10px 10px 10px 10px;\r\n  background: #fff;\r\n  padding: 30px;\r\n  width: 90%;\r\n  max-width: 450px;\r\n  position: relative;\r\n  padding: 0px;\r\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  text-align: center;\r\n}\n#formFooter {\r\n  background-color: #f6f6f6;\r\n  border-top: 1px solid #dce8f1;\r\n  padding: 25px;\r\n  text-align: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\n/* TABS */\nh2.inactive {\r\n  color: #cccccc;\r\n}\nh2.active {\r\n  color: #0d0d0d;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset]  {\r\n  cursor: pointer;\r\n  background-color: #56baed;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 80px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n  border-radius: 5px 5px 5px 5px;\r\n  margin: 5px 20px 40px 20px;\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n}\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\r\n  background-color: #39ace7;\r\n}\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\r\n  -webkit-transform: scale(0.95);\r\n  transform: scale(0.95);\r\n}\ninput[type=submit]:disabled{\r\n  background-color: grey;\r\n  color: white;\r\n}\ninput[type=text],input[type=password] {\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  border: 2px solid #f6f6f6;\r\n  -webkit-transition: all 0.5s ease-in-out;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\ninput[type=text]:focus,input[type=password]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\ninput[type=text]:placeholder {\r\n  color: #cccccc;\r\n}\ninput[type=text].invalid-textbox,input[type=password].invalid-textbox{\r\nborder-bottom: 2px solid #ed5558;\r\n}\nlabel.validation-message{\r\n  color:#ed5558;\r\n}\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\r\n  -webkit-animation-name: fadeInDown;\r\n  animation-name: fadeInDown;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\n@-webkit-keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\n@keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n.fadeIn {\r\n  opacity:0;\r\n  -webkit-animation:fadeIn ease-in 1;\r\n  animation:fadeIn ease-in 1;\r\n\r\n  -webkit-animation-fill-mode:forwards;\r\n  animation-fill-mode:forwards;\r\n\r\n  -webkit-animation-duration:1s;\r\n  animation-duration:1s;\r\n}\n.fadeIn.first {\r\n  -webkit-animation-delay: 0.4s;\r\n  animation-delay: 0.4s;\r\n}\n.fadeIn.second {\r\n  -webkit-animation-delay: 0.6s;\r\n  animation-delay: 0.6s;\r\n}\n.fadeIn.third {\r\n  -webkit-animation-delay: 0.8s;\r\n  animation-delay: 0.8s;\r\n}\n.fadeIn.fourth {\r\n  -webkit-animation-delay: 1s;\r\n  animation-delay: 1s;\r\n}\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\r\n  display: block;\r\n  left: 0;\r\n  bottom: -10px;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #56baed;\r\n  content: \"\";\r\n  -webkit-transition: width 0.2s;\r\n  transition: width 0.2s;\r\n}\n.underlineHover:hover {\r\n  color: #0d0d0d;\r\n}\n.underlineHover:hover:after{\r\n  width: 100%;\r\n}\n/* OTHERS */\n*:focus {\r\n    outline: none;\r\n}\n#icon {\r\n  width:50%;\r\n}\n* {\r\n  box-sizing: border-box;\r\n}\n.alert {\r\n  padding: 20px;\r\n  background-color: #f44336; /* Red */\r\n  color: white;\r\n  margin-bottom: 15px;\r\n}\n.success{\r\n  padding: 20px;\r\n  background-color:#249424; /* Green */\r\n  color: white;\r\n  margin-bottom: 15px;\r\n}\n/* Table Styles */\n.table-fill {\r\n  background: white;\r\n  border-radius:3px;\r\n  border-collapse: collapse;\r\n  height: 320px;\r\n  margin: auto;\r\n  max-width: 600px;\r\n  padding:5px;\r\n  width: 100%;\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\r\n  -webkit-animation: float 5s infinite;\r\n          animation: float 5s infinite;\r\n}\nth {\r\n  color:#D5DDE5;;\r\n  background:#1b1e24;\r\n  border-bottom:4px solid #9ea7af;\r\n  border-right: 1px solid #343a45;\r\n  font-size:23px;\r\n  font-weight: 100;\r\n  padding:24px;\r\n  text-align:left;\r\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  vertical-align:middle;\r\n}\nth:first-child {\r\n  border-top-left-radius:3px;\r\n}\nth:last-child {\r\n  border-top-right-radius:3px;\r\n  border-right:none;\r\n}\ntr {\r\n  border-top: 1px solid #C1C3D1;\r\n  border-bottom-: 1px solid #C1C3D1;\r\n  color:#666B85;\r\n  font-size:16px;\r\n  font-weight:normal;\r\n  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);\r\n}\ntr:first-child {\r\n  border-top:none;\r\n}\ntr:last-child {\r\n  border-bottom:none;\r\n}\ntr:nth-child(odd) td {\r\n  background:#EBEBEB;\r\n}\ntr:last-child td:first-child {\r\n  border-bottom-left-radius:3px;\r\n}\ntr:last-child td:last-child {\r\n  border-bottom-right-radius:3px;\r\n}\ntd {\r\n  background:#FFFFFF;\r\n  padding:20px;\r\n  text-align:left;\r\n  vertical-align:middle;\r\n  font-weight:300;\r\n  font-size:18px;\r\n  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\r\n  border-right: 1px solid #C1C3D1;\r\n}\ntd:last-child {\r\n  border-right: 0px;\r\n}\nth.text-left {\r\n  text-align: left;\r\n}\nth.text-center {\r\n  text-align: center;\r\n}\nth.text-right {\r\n  text-align: right;\r\n}\ntd.text-left {\r\n  text-align: left;\r\n}\ntd.text-center {\r\n  text-align: center;\r\n}\ntd.text-right {\r\n  text-align: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDhEQUE4RDtBQUQ5RCw4RUFBOEU7QUFHOUUsVUFBVTtBQUVWO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7QUFJQSxjQUFjO0FBRWQ7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUVBO0VBRUUsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUVaLHlDQUF5QztFQUN6QyxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGtCQUFrQjtFQUVsQiw0QkFBNEI7QUFDOUI7QUFJQSxTQUFTO0FBRVQ7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDO0FBQ2xDO0FBSUEsbUJBQW1CO0FBRW5CO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZUFBZTtFQUVmLDhDQUE4QztFQUU5Qyw4QkFBOEI7RUFD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RUFDRSw2QkFBNkI7RUFDN0IsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLCtDQUErQztBQUNqRDtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCw2Q0FBNkM7RUFDN0MsK0JBQStCO0FBQ2pDO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zJyk7XHJcblxyXG4vKiBCQVNJQyAqL1xyXG5cclxuaHRtbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjOTJiYWRkO1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDtcclxuICBjb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuXHJcblxyXG4vKiBTVFJVQ1RVUkUgKi9cclxuXHJcbi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4jZm9ybUNvbnRlbnQge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogNDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2Zvcm1Gb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLyogVEFCUyAqL1xyXG5cclxuaDIuaW5hY3RpdmUge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5oMi5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEZPUk0gVFlQT0dSQVBIWSovXHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE1cHggODBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgbWFyZ2luOiA1cHggMjBweCA0MHB4IDIwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGlucHV0W3R5cGU9cmVzZXRdOmhvdmVyICB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5YWNlNztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSwgaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlICB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c3VibWl0XTpkaXNhYmxlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSxpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogODUlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLmludmFsaWQtdGV4dGJveCxpbnB1dFt0eXBlPXBhc3N3b3JkXS5pbnZhbGlkLXRleHRib3h7XHJcbmJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWQ1NTU4O1xyXG59XHJcblxyXG5sYWJlbC52YWxpZGF0aW9uLW1lc3NhZ2V7XHJcbiAgY29sb3I6I2VkNTU1ODtcclxufVxyXG5cclxuXHJcblxyXG4vKiBBTklNQVRJT05TICovXHJcblxyXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluLWRvd24gQW5pbWF0aW9uICovXHJcbi5mYWRlSW5Eb3duIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbkBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcblxyXG4uZmFkZUluIHtcclxuICBvcGFjaXR5OjA7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICAtbW96LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gIGFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG5cclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxufVxyXG5cclxuLmZhZGVJbi5maXJzdCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcblxyXG4uZmFkZUluLnNlY29uZCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG59XHJcblxyXG4uZmFkZUluLnRoaXJkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbn1cclxuXHJcbi5mYWRlSW4uZm91cnRoIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbn1cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXHJcbi51bmRlcmxpbmVIb3ZlcjphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0xMHB4O1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xyXG59XHJcblxyXG4udW5kZXJsaW5lSG92ZXI6aG92ZXIge1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG59XHJcblxyXG4udW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLyogT1RIRVJTICovXHJcblxyXG4qOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiNpY29uIHtcclxuICB3aWR0aDo1MCU7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG4uYWxlcnQge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjsgLyogUmVkICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5zdWNjZXNze1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMjQ5NDI0OyAvKiBHcmVlbiAqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4vKiBUYWJsZSBTdHlsZXMgKi9cclxuLnRhYmxlLWZpbGwge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6M3B4O1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgaGVpZ2h0OiAzMjBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBwYWRkaW5nOjVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBhbmltYXRpb246IGZsb2F0IDVzIGluZmluaXRlO1xyXG59XHJcblxyXG50aCB7XHJcbiAgY29sb3I6I0Q1RERFNTs7XHJcbiAgYmFja2dyb3VuZDojMWIxZTI0O1xyXG4gIGJvcmRlci1ib3R0b206NHB4IHNvbGlkICM5ZWE3YWY7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzM0M2E0NTtcclxuICBmb250LXNpemU6MjNweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIHBhZGRpbmc6MjRweDtcclxuICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG59XHJcblxyXG50aDpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czozcHg7XHJcbn1cclxuXHJcbnRoOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjNweDtcclxuICBib3JkZXItcmlnaHQ6bm9uZTtcclxufVxyXG5cclxudHIge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQzFDM0QxO1xyXG4gIGJvcmRlci1ib3R0b20tOiAxcHggc29saWQgI0MxQzNEMTtcclxuICBjb2xvcjojNjY2Qjg1O1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMjU2LCAyNTYsIDI1NiwgMC4xKTtcclxufVxyXG5cclxudHI6Zmlyc3QtY2hpbGQge1xyXG4gIGJvcmRlci10b3A6bm9uZTtcclxufVxyXG5cclxudHI6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQob2RkKSB0ZCB7XHJcbiAgYmFja2dyb3VuZDojRUJFQkVCO1xyXG59XHJcblxyXG50cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweDtcclxufVxyXG5cclxudHI6bGFzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czozcHg7XHJcbn1cclxuXHJcbnRkIHtcclxuICBiYWNrZ3JvdW5kOiNGRkZGRkY7XHJcbiAgcGFkZGluZzoyMHB4O1xyXG4gIHRleHQtYWxpZ246bGVmdDtcclxuICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgZm9udC13ZWlnaHQ6MzAwO1xyXG4gIGZvbnQtc2l6ZToxOHB4O1xyXG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQzFDM0QxO1xyXG59XHJcblxyXG50ZDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItcmlnaHQ6IDBweDtcclxufVxyXG5cclxudGgudGV4dC1sZWZ0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG50aC50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50aC50ZXh0LXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxudGQudGV4dC1sZWZ0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG50ZC50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ZC50ZXh0LXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/user/user.component.ts":
  /*!****************************************!*\
    !*** ./src/app/user/user.component.ts ***!
    \****************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let UserComponent = class UserComponent {
      constructor() {}

      ngOnInit() {}

    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user.component.css */
      "./src/app/user/user.component.css")).default]
    })], UserComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false,
      apiBaseUrl: 'http://localhost:3000/api'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\College_Project\New ChatApp\angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map