// "use strict";
// var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
//     function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
//     return new (P || (P = Promise))(function (resolve, reject) {
//         function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
//         function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
//         function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
//         step((generator = generator.apply(thisArg, _arguments || [])).next());
//     });
// };
// var __generator = (this && this.__generator) || function (thisArg, body) {
//     var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
//     return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
//     function verb(n) { return function (v) { return step([n, v]); }; }
//     function step(op) {
//         if (f) throw new TypeError("Generator is already executing.");
//         while (_) try {
//             if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
//             if (y = 0, t) op = [op[0] & 2, t.value];
//             switch (op[0]) {
//                 case 0: case 1: t = op; break;
//                 case 4: _.label++; return { value: op[1], done: false };
//                 case 5: _.label++; y = op[1]; op = [0]; continue;
//                 case 7: op = _.ops.pop(); _.trys.pop(); continue;
//                 default:
//                     if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
//                     if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
//                     if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
//                     if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
//                     if (t[2]) _.ops.pop();
//                     _.trys.pop(); continue;
//             }
//             op = body.call(thisArg, _);
//         } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
//         if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
//     }
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// var request_promise_native_1 = require("request-promise-native");
// var crypto_1 = require("crypto");
// var query_string_1 = require("query-string");
// var Przelewy24 = /** @class */ (function () {
//     function Przelewy24(merchantId, posId, salt, testMode) {
//         if (testMode === void 0) { testMode = false; }
//         this.form = {
//             p24_merchant_id: merchantId,
//             p24_pos_id: posId,
//             p24_api_version: this.P24_VERSION
//         };
//         this.salt = salt;
//         this.testMode = testMode;
//         this.host = testMode ? this.HOST_DEMO : this.HOST_LIVE;
//         this.products = [];
//     }
//     Object.defineProperty(Przelewy24.prototype, "P24_VERSION", {
//         // Constants
//         get: function () {
//             return '3.2';
//         },
//         enumerable: false,
//         configurable: true
//     });
//     Object.defineProperty(Przelewy24.prototype, "HOST_LIVE", {
//         get: function () {
//             return 'https://secure.przelewy24.pl/';
//         },
//         enumerable: false,
//         configurable: true
//     });
//     Object.defineProperty(Przelewy24.prototype, "HOST_DEMO", {
//         get: function () {
//             return 'https://sandbox.przelewy24.pl/';
//         },
//         enumerable: false,
//         configurable: true
//     });
//     Object.defineProperty(Przelewy24.prototype, "REQUIRED_FIELDS_REGISTER", {
//         get: function () {
//             return ['p24_merchant_id', 'p24_pos_id', 'p24_session_id', 'p24_amount', 'p24_currency', 'p24_description', 'p24_email', 'p24_country', 'p24_url_return'];
//         },
//         enumerable: false,
//         configurable: true
//     });
//     Object.defineProperty(Przelewy24.prototype, "REQUIRED_FIELDS_VERIFY", {
//         get: function () {
//             return ['p24_merchant_id', 'p24_pos_id', 'p24_session_id', 'p24_amount', 'p24_currency', 'p24_order_id'];
//         },
//         enumerable: false,
//         configurable: true
//     });
//     // Field-filing methods
//     Przelewy24.prototype.setSessionId = function (value) {
//         if (value.length === 0 || value.length > 100) {
//             throw new Error('p24_session_id value must have from 0 to 100 characters.');
//         }
//         this.form.p24_session_id = value;
//     };
//     Przelewy24.prototype.setAmount = function (value) {
//         this.form.p24_amount = value;
//     };
//     Przelewy24.prototype.setCurrency = function (value) {
//         if (value.length !== 3) {
//             throw new Error('p24_currency value must have from 3 characters.');
//         }
//         this.form.p24_currency = value;
//     };
//     Przelewy24.prototype.setDescription = function (value) {
//         if (value.length === 0 || value.length > 1024) {
//             throw new Error('p24_description value must have from 0 to 1024 characters.');
//         }
//         this.form.p24_description = value;
//     };
//     Przelewy24.prototype.setEmail = function (value) {
//         if (value.length === 0 || value.length > 50) {
//             throw new Error('p24_email value must have from 0 to 50 characters.');
//         }
//         this.form.p24_email = value;
//     };
//     Przelewy24.prototype.setClient = function (value) {
//         if (value.length === 0 || value.length > 50) {
//             throw new Error('p24_client value must have from 0 to 50 characters.');
//         }
//         this.form.p24_client = value;
//     };
//     Przelewy24.prototype.setAddress = function (value) {
//         if (value.length === 0 || value.length > 80) {
//             throw new Error('p24_address value must have from 0 to 80 characters.');
//         }
//         this.form.p24_address = value;
//     };
//     Przelewy24.prototype.setZip = function (value) {
//         if (value.length === 0 || value.length > 10) {
//             throw new Error('p24_zip value must have from 0 to 10 characters.');
//         }
//         this.form.p24_zip = value;
//     };
//     Przelewy24.prototype.setCity = function (value) {
//         if (value.length === 0 || value.length > 50) {
//             throw new Error('p24_city value must have from 0 to 50 characters.');
//         }
//         this.form.p24_city = value;
//     };
//     Przelewy24.prototype.setCountry = function (value) {
//         if (value.length === 0 || value.length > 2) {
//             throw new Error('p24_country value must have from 0 to 2 characters.');
//         }
//         this.form.p24_country = value;
//     };
//     Przelewy24.prototype.setPhone = function (value) {
//         if (value.length === 0 || value.length > 12) {
//             throw new Error('p24_phone value must have from 0 to 12 characters.');
//         }
//         this.form.p24_phone = value;
//     };
//     Przelewy24.prototype.setLanguage = function (value) {
//         if (value.length !== 2) {
//             throw new Error('p24_language value must have from 2 characters.');
//         }
//         this.form.p24_language = value;
//     };
//     Przelewy24.prototype.setMethod = function (value) {
//         this.form.p24_method = value;
//     };
//     Przelewy24.prototype.setUrlReturn = function (value) {
//         if (value.length === 0 || value.length > 250) {
//             throw new Error('p24_url_return value must have from 0 to 250 characters.');
//         }
//         this.form.p24_url_return = value;
//     };
//     Przelewy24.prototype.setUrlStatus = function (value) {
//         if (value.length === 0 || value.length > 250) {
//             throw new Error('p24_url_status value must have from 0 to 250 characters.');
//         }
//         this.form.p24_url_status = value;
//     };
//     Przelewy24.prototype.setTimeLimit = function (value) {
//         this.form.p24_time_limit = value;
//     };
//     Przelewy24.prototype.setWaitForResult = function (value) {
//         this.form.p24_wait_for_result = value;
//     };
//     Przelewy24.prototype.setChannel = function (value) {
//         this.form.p24_channel = value;
//     };
//     Przelewy24.prototype.setShipping = function (value) {
//         this.form.p24_shipping = value;
//     };
//     Przelewy24.prototype.setTransferLabel = function (value) {
//         if (value.length === 0 || value.length > 20) {
//             throw new Error('p24_transfer_label value must have from 20 characters.');
//         }
//         this.form.p24_transfer_label = value;
//     };
//     Przelewy24.prototype.setOrderId = function (value) {
//         this.form.p24_order_id = value;
//     };
//     // Custom methods
//     Przelewy24.prototype.addProduct = function (name, description, quantity, price, number) {
//         if (number === void 0) { number = null; }
//         this.products.push({
//             name: name,
//             description: description,
//             quantity: quantity,
//             price: price,
//             number: number
//         });
//     };
//     Przelewy24.prototype.addProducts = function (products) {
//         this.products = this.products.concat(products);
//     };
//     Przelewy24.prototype.loadProductsToForm = function () {
//         for (var i = 0; i < this.products.length; i++) {
//             var product = this.products[i];
//             var id = i + 1;
//             this.form["p24_name_" + id] = product.name;
//             this.form["p24_quantity_" + id] = product.quantity;
//             this.form["p24_price_" + id] = product.price;
//             if (product.description !== null) {
//                 this.form["p24_description_" + id] = product.description;
//             }
//             if (product.number !== null) {
//                 this.form["p24_number_" + id] = product.number;
//             }
//         }
//     };
//     Przelewy24.prototype.getCrc = function () {
//         var data = this.form.p24_session_id + '|' + this.form.p24_pos_id + '|' + this.form.p24_amount + '|' + this.form.p24_currency + '|' + this.salt;
//         return crypto_1.default.createHash('md5').update(data).digest("hex");
//     };
//     // Main methods
//     Przelewy24.prototype.register = function () {
//         var _this = this;
//         return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
//             var _i, _a, field, rawResponse, res, e_1;
//             return __generator(this, function (_b) {
//                 switch (_b.label) {
//                     case 0:
//                         for (_i = 0, _a = this.REQUIRED_FIELDS_REGISTER; _i < _a.length; _i++) {
//                             field = _a[_i];
//                             if (this.form[field] === undefined) {
//                                 return [2 /*return*/, reject(new Error(field + ' field is missing.'))];
//                             }
//                         }
//                         this.form.p24_sign = this.getCrc();
//                         this.loadProductsToForm();
//                         _b.label = 1;
//                     case 1:
//                         _b.trys.push([1, 3, , 4]);
//                         return [4 /*yield*/, request_promise_native_1.default.post(this.host + "trnRegister", { form: this.form })];
//                     case 2:
//                         rawResponse = _b.sent();
//                         if (rawResponse) {
//                             res = query_string_1.default.parse(rawResponse);
//                             if (res.token) {
//                                 return [2 /*return*/, resolve(res.token)];
//                             }
//                             else {
//                                 throw new Error(res.errorMessage);
//                             }
//                         }
//                         else {
//                             throw new Error('Error happened while registering payment, please try again.');
//                         }
//                         return [3 /*break*/, 4];
//                     case 3:
//                         e_1 = _b.sent();
//                         return [2 /*return*/, reject(e_1)];
//                     case 4: return [2 /*return*/];
//                 }
//             });
//         }); });
//     };
//     Przelewy24.prototype.getPayByLinkUrl = function (token) {
//         return this.host + 'trnRequest/' + token;
//     };
//     Przelewy24.prototype.verify = function (sign) {
//         var _this = this;
//         return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
//             var _i, _a, field, rawResponse, res, e_2;
//             return __generator(this, function (_b) {
//                 switch (_b.label) {
//                     case 0:
//                         for (_i = 0, _a = this.REQUIRED_FIELDS_VERIFY; _i < _a.length; _i++) {
//                             field = _a[_i];
//                             if (this.form[field] === undefined) {
//                                 return [2 /*return*/, reject(new Error(field + ' field is missing.'))];
//                             }
//                         }
//                         this.form.p24_sign = sign;
//                         _b.label = 1;
//                     case 1:
//                         _b.trys.push([1, 3, , 4]);
//                         return [4 /*yield*/, request_promise_native_1.default.post(this.host + "trnVerify", { form: this.form })];
//                     case 2:
//                         rawResponse = _b.sent();
//                         if (rawResponse) {
//                             res = query_string_1.default.parse(rawResponse);
//                             if (res.error === '0') {
//                                 return [2 /*return*/, resolve()];
//                             }
//                             else {
//                                 throw new Error(res.errorMessage);
//                             }
//                         }
//                         else {
//                             throw new Error('Error happened while verifying payment, please try again.');
//                         }
//                         return [3 /*break*/, 4];
//                     case 3:
//                         e_2 = _b.sent();
//                         return [2 /*return*/, reject(e_2)];
//                     case 4: return [2 /*return*/];
//                 }
//             });
//         }); });
//     };
//     return Przelewy24;
// }());
// exports.default = Przelewy24;















































































































































// 'use strict';

// Object.defineProperty(exports, "__esModule", {
//     value: true
// });

// var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// var _requestPromiseNative = require('request-promise-native');

// var _requestPromiseNative2 = _interopRequireDefault(_requestPromiseNative);

// var _crypto = require('crypto');

// var _crypto2 = _interopRequireDefault(_crypto);

// var _queryString = require('query-string');

// var _queryString2 = _interopRequireDefault(_queryString);

// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// var Przelewy24 = function () {
//     function Przelewy24(merchantId, posId, salt) {
//         var testMode = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

//         _classCallCheck(this, Przelewy24);

//         this.form = {
//             p24_merchant_id: merchantId,
//             p24_pos_id: posId,
//             p24_api_version: this.P24_VERSION
//         };

//         this.salt = salt;
//         this.testMode = testMode;

//         this.host = testMode ? this.HOST_DEMO : this.HOST_LIVE;
//         this.products = [];
//     }

//     // Constants


//     _createClass(Przelewy24, [{
//         key: 'setSessionId',


//         // Field-filing methods
//         value: function setSessionId(value) {
//             if (value.length === 0 || value.length > 100) {
//                 throw new Error('p24_session_id value must have from 0 to 100 characters.');
//             }

//             this.form.p24_session_id = value;
//         }
//     }, {
//         key: 'setAmount',
//         value: function setAmount(value) {
//             this.form.p24_amount = value;
//         }
//     }, {
//         key: 'setCurrency',
//         value: function setCurrency(value) {
//             if (value.length !== 3) {
//                 throw new Error('p24_currency value must have from 3 characters.');
//             }

//             this.form.p24_currency = value;
//         }
//     }, {
//         key: 'setDescription',
//         value: function setDescription(value) {
//             if (value.length === 0 || value.length > 1024) {
//                 throw new Error('p24_description value must have from 0 to 1024 characters.');
//             }

//             this.form.p24_description = value;
//         }
//     }, {
//         key: 'setEmail',
//         value: function setEmail(value) {
//             if (value.length === 0 || value.length > 50) {
//                 throw new Error('p24_email value must have from 0 to 50 characters.');
//             }

//             this.form.p24_email = value;
//         }
//     }, {
//         key: 'setClient',
//         value: function setClient(value) {
//             if (value.length === 0 || value.length > 50) {
//                 throw new Error('p24_client value must have from 0 to 50 characters.');
//             }

//             this.form.p24_client = value;
//         }
//     }, {
//         key: 'setAddress',
//         value: function setAddress(value) {
//             if (value.length === 0 || value.length > 80) {
//                 throw new Error('p24_address value must have from 0 to 80 characters.');
//             }

//             this.form.p24_address = value;
//         }
//     }, {
//         key: 'setZip',
//         value: function setZip(value) {
//             if (value.length === 0 || value.length > 10) {
//                 throw new Error('p24_zip value must have from 0 to 10 characters.');
//             }

//             this.form.p24_zip = value;
//         }
//     }, {
//         key: 'setCity',
//         value: function setCity(value) {
//             if (value.length === 0 || value.length > 50) {
//                 throw new Error('p24_city value must have from 0 to 50 characters.');
//             }

//             this.form.p24_city = value;
//         }
//     }, {
//         key: 'setCountry',
//         value: function setCountry(value) {
//             if (value.length === 0 || value.length > 2) {
//                 throw new Error('p24_country value must have from 0 to 2 characters.');
//             }

//             this.form.p24_country = value;
//         }
//     }, {
//         key: 'setPhone',
//         value: function setPhone(value) {
//             if (value.length === 0 || value.length > 12) {
//                 throw new Error('p24_phone value must have from 0 to 12 characters.');
//             }

//             this.form.p24_phone = value;
//         }
//     }, {
//         key: 'setLanguage',
//         value: function setLanguage(value) {
//             if (value.length !== 2) {
//                 throw new Error('p24_language value must have from 2 characters.');
//             }

//             this.form.p24_language = value;
//         }
//     }, {
//         key: 'setMethod',
//         value: function setMethod(value) {
//             this.form.p24_method = value;
//         }
//     }, {
//         key: 'setUrlReturn',
//         value: function setUrlReturn(value) {
//             if (value.length === 0 || value.length > 250) {
//                 throw new Error('p24_url_return value must have from 0 to 250 characters.');
//             }

//             this.form.p24_url_return = value;
//         }
//     }, {
//         key: 'setUrlStatus',
//         value: function setUrlStatus(value) {
//             if (value.length === 0 || value.length > 250) {
//                 throw new Error('p24_url_status value must have from 0 to 250 characters.');
//             }

//             this.form.p24_url_status = value;
//         }
//     }, {
//         key: 'setTimeLimit',
//         value: function setTimeLimit(value) {
//             this.form.p24_time_limit = value;
//         }
//     }, {
//         key: 'setWaitForResult',
//         value: function setWaitForResult(value) {
//             this.form.p24_wait_for_result = value;
//         }
//     }, {
//         key: 'setChannel',
//         value: function setChannel(value) {
//             this.form.p24_channel = value;
//         }
//     }, {
//         key: 'setShipping',
//         value: function setShipping(value) {
//             this.form.p24_shipping = value;
//         }
//     }, {
//         key: 'setTransferLabel',
//         value: function setTransferLabel(value) {
//             if (value.length === 0 || value.length > 20) {
//                 throw new Error('p24_transfer_label value must have from 20 characters.');
//             }

//             this.form.p24_transfer_label = value;
//         }
//     }, {
//         key: 'setOrderId',
//         value: function setOrderId(value) {
//             this.form.p24_order_id = value;
//         }

//         // Custom methods

//     }, {
//         key: 'addProduct',
//         value: function addProduct(name, description, quantity, price) {
//             var number = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];

//             this.products.push({
//                 name: name,
//                 description: description,
//                 quantity: quantity,
//                 price: price,
//                 number: number
//             });
//         }
//     }, {
//         key: 'addProducts',
//         value: function addProducts(products) {
//             this.products = this.products.concat(products);
//         }
//     }, {
//         key: 'loadProductsToForm',
//         value: function loadProductsToForm() {
//             for (var i = 0; i < this.products.length; i++) {
//                 var product = this.products[i];
//                 var id = i + 1;

//                 this.form["p24_name_" + id] = product.name;
//                 this.form["p24_quantity_" + id] = product.quantity;
//                 this.form["p24_price_" + id] = product.price;

//                 if (product.description !== null) {
//                     this.form["p24_description_" + id] = product.description;
//                 }

//                 if (product.number !== null) {
//                     this.form["p24_number_" + id] = product.number;
//                 }
//             }
//         }
//     }, {
//         key: 'getCrc',
//         value: function getCrc() {
//             var data = this.form.p24_session_id + '|' + this.form.p24_pos_id + '|' + this.form.p24_amount + '|' + this.form.p24_currency + '|' + this.salt;

//             return _crypto2.default.createHash('md5').update(data).digest("hex");
//         }

//         // Main methods

//     }, {
//         key: 'register',
//         value: function register() {
//             var _this = this;

//             return new Promise(async function (resolve, reject) {
//                 var _iteratorNormalCompletion = true;
//                 var _didIteratorError = false;
//                 var _iteratorError = undefined;

//                 try {
//                     for (var _iterator = _this.REQUIRED_FIELDS_REGISTER[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
//                         var field = _step.value;

//                         if (_this.form[field] === undefined) {
//                             return reject(new Error(field + ' field is missing.'));
//                         }
//                     }
//                 } catch (err) {
//                     _didIteratorError = true;
//                     _iteratorError = err;
//                 } finally {
//                     try {
//                         if (!_iteratorNormalCompletion && _iterator.return) {
//                             _iterator.return();
//                         }
//                     } finally {
//                         if (_didIteratorError) {
//                             throw _iteratorError;
//                         }
//                     }
//                 }

//                 _this.form.p24_sign = _this.getCrc();
//                 _this.loadProductsToForm();

//                 try {
//                     var rawResponse = await _requestPromiseNative2.default.post(_this.host + "trnRegister", { form: _this.form });

//                     if (rawResponse) {
//                         var res = _queryString2.default.parse(rawResponse);

//                         if (res.token) {
//                             return resolve(res.token);
//                         } else {
//                             throw new Error(res.errorMessage);
//                         }
//                     } else {
//                         throw new Error('Error happened while registering payment, please try again.');
//                     }
//                 } catch (e) {
//                     return reject(e);
//                 }
//             });
//         }
//     }, {
//         key: 'getPayByLinkUrl',
//         value: function getPayByLinkUrl(token) {
//             return this.host + 'trnRequest/' + token;
//         }
//     }, {
//         key: 'verify',
//         value: function verify(sign) {
//             var _this2 = this;

//             return new Promise(async function (resolve, reject) {
//                 var _iteratorNormalCompletion2 = true;
//                 var _didIteratorError2 = false;
//                 var _iteratorError2 = undefined;

//                 try {
//                     for (var _iterator2 = _this2.REQUIRED_FIELDS_VERIFY[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
//                         var field = _step2.value;

//                         if (_this2.form[field] === undefined) {
//                             return reject(new Error(field + ' field is missing.'));
//                         }
//                     }
//                 } catch (err) {
//                     _didIteratorError2 = true;
//                     _iteratorError2 = err;
//                 } finally {
//                     try {
//                         if (!_iteratorNormalCompletion2 && _iterator2.return) {
//                             _iterator2.return();
//                         }
//                     } finally {
//                         if (_didIteratorError2) {
//                             throw _iteratorError2;
//                         }
//                     }
//                 }

//                 _this2.form.p24_sign = sign;

//                 try {
//                     var rawResponse = await _requestPromiseNative2.default.post(_this2.host + "trnVerify", { form: _this2.form });

//                     if (rawResponse) {
//                         var res = _queryString2.default.parse(rawResponse);

//                         if (res.error === '0') {
//                             return resolve();
//                         } else {
//                             throw new Error(res.errorMessage);
//                         }
//                     } else {
//                         throw new Error('Error happened while verifying payment, please try again.');
//                     }
//                 } catch (e) {
//                     return reject(e);
//                 }
//             });
//         }
//     }, {
//         key: 'P24_VERSION',
//         get: function get() {
//             return '3.2';
//         }
//     }, {
//         key: 'HOST_LIVE',
//         get: function get() {
//             return 'https://secure.przelewy24.pl/';
//         }
//     }, {
//         key: 'HOST_DEMO',
//         get: function get() {
//             return 'https://sandbox.przelewy24.pl/';
//         }
//     }, {
//         key: 'REQUIRED_FIELDS_REGISTER',
//         get: function get() {
//             return ['p24_merchant_id', 'p24_pos_id', 'p24_session_id', 'p24_amount', 'p24_currency', 'p24_description', 'p24_email', 'p24_country', 'p24_url_return'];
//         }
//     }, {
//         key: 'REQUIRED_FIELDS_VERIFY',
//         get: function get() {
//             return ['p24_merchant_id', 'p24_pos_id', 'p24_session_id', 'p24_amount', 'p24_currency', 'p24_order_id'];
//         }
//     }]);

//     return Przelewy24;
// }();

// exports.default = Przelewy24;
























































































































































// 'use strict';

// Object.defineProperty(exports, "__esModule", {
//     value: true
// });

// var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// var _requestPromiseNative = require('request-promise-native');

// var _requestPromiseNative2 = _interopRequireDefault(_requestPromiseNative);

// var _crypto = require('crypto');

// var _crypto2 = _interopRequireDefault(_crypto);

// var _queryString = require('query-string');

// var _queryString2 = _interopRequireDefault(_queryString);

// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// var Przelewy24 = function () {
//     function Przelewy24(merchantId, posId, salt) {
//         var testMode = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

//         _classCallCheck(this, Przelewy24);

//         this.form = {
//             p24_merchant_id: merchantId,
//             p24_pos_id: posId,
//             p24_api_version: this.P24_VERSION
//         };

//         this.salt = salt;
//         this.testMode = testMode;

//         this.host = testMode ? this.HOST_DEMO : this.HOST_LIVE;
//         this.products = [];
//     }

//     // Constants


//     _createClass(Przelewy24, [{
//         key: 'setSessionId',


//         // Field-filing methods
//         value: function setSessionId(value) {
//             if (value.length === 0 || value.length > 100) {
//                 throw new Error('p24_session_id value must have from 0 to 100 characters.');
//             }

//             this.form.p24_session_id = value;
//         }
//     }, {
//         key: 'setAmount',
//         value: function setAmount(value) {
//             this.form.p24_amount = value;
//         }
//     }, {
//         key: 'setCurrency',
//         value: function setCurrency(value) {
//             if (value.length !== 3) {
//                 throw new Error('p24_currency value must have from 3 characters.');
//             }

//             this.form.p24_currency = value;
//         }
//     }, {
//         key: 'setDescription',
//         value: function setDescription(value) {
//             if (value.length === 0 || value.length > 1024) {
//                 throw new Error('p24_description value must have from 0 to 1024 characters.');
//             }

//             this.form.p24_description = value;
//         }
//     }, {
//         key: 'setEmail',
//         value: function setEmail(value) {
//             if (value.length === 0 || value.length > 50) {
//                 throw new Error('p24_email value must have from 0 to 50 characters.');
//             }

//             this.form.p24_email = value;
//         }
//     }, {
//         key: 'setClient',
//         value: function setClient(value) {
//             if (value.length === 0 || value.length > 50) {
//                 throw new Error('p24_client value must have from 0 to 50 characters.');
//             }

//             this.form.p24_client = value;
//         }
//     }, {
//         key: 'setAddress',
//         value: function setAddress(value) {
//             if (value.length === 0 || value.length > 80) {
//                 throw new Error('p24_address value must have from 0 to 80 characters.');
//             }

//             this.form.p24_address = value;
//         }
//     }, {
//         key: 'setZip',
//         value: function setZip(value) {
//             if (value.length === 0 || value.length > 10) {
//                 throw new Error('p24_zip value must have from 0 to 10 characters.');
//             }

//             this.form.p24_zip = value;
//         }
//     }, {
//         key: 'setCity',
//         value: function setCity(value) {
//             if (value.length === 0 || value.length > 50) {
//                 throw new Error('p24_city value must have from 0 to 50 characters.');
//             }

//             this.form.p24_city = value;
//         }
//     }, {
//         key: 'setCountry',
//         value: function setCountry(value) {
//             if (value.length === 0 || value.length > 2) {
//                 throw new Error('p24_country value must have from 0 to 2 characters.');
//             }

//             this.form.p24_country = value;
//         }
//     }, {
//         key: 'setPhone',
//         value: function setPhone(value) {
//             if (value.length === 0 || value.length > 12) {
//                 throw new Error('p24_phone value must have from 0 to 12 characters.');
//             }

//             this.form.p24_phone = value;
//         }
//     }, {
//         key: 'setLanguage',
//         value: function setLanguage(value) {
//             if (value.length !== 2) {
//                 throw new Error('p24_language value must have from 2 characters.');
//             }

//             this.form.p24_language = value;
//         }
//     }, {
//         key: 'setMethod',
//         value: function setMethod(value) {
//             this.form.p24_method = value;
//         }
//     }, {
//         key: 'setUrlReturn',
//         value: function setUrlReturn(value) {
//             if (value.length === 0 || value.length > 250) {
//                 throw new Error('p24_url_return value must have from 0 to 250 characters.');
//             }

//             this.form.p24_url_return = value;
//         }
//     }, {
//         key: 'setUrlStatus',
//         value: function setUrlStatus(value) {
//             if (value.length === 0 || value.length > 250) {
//                 throw new Error('p24_url_status value must have from 0 to 250 characters.');
//             }

//             this.form.p24_url_status = value;
//         }
//     }, {
//         key: 'setTimeLimit',
//         value: function setTimeLimit(value) {
//             this.form.p24_time_limit = value;
//         }
//     }, {
//         key: 'setWaitForResult',
//         value: function setWaitForResult(value) {
//             this.form.p24_wait_for_result = value;
//         }
//     }, {
//         key: 'setChannel',
//         value: function setChannel(value) {
//             this.form.p24_channel = value;
//         }
//     }, {
//         key: 'setShipping',
//         value: function setShipping(value) {
//             this.form.p24_shipping = value;
//         }
//     }, {
//         key: 'setTransferLabel',
//         value: function setTransferLabel(value) {
//             if (value.length === 0 || value.length > 20) {
//                 throw new Error('p24_transfer_label value must have from 20 characters.');
//             }

//             this.form.p24_transfer_label = value;
//         }
//     }, {
//         key: 'setOrderId',
//         value: function setOrderId(value) {
//             this.form.p24_order_id = value;
//         }

//         // Custom methods

//     }, {
//         key: 'addProduct',
//         value: function addProduct(name, description, quantity, price) {
//             var number = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];

//             this.products.push({
//                 name: name,
//                 description: description,
//                 quantity: quantity,
//                 price: price,
//                 number: number
//             });
//         }
//     }, {
//         key: 'addProducts',
//         value: function addProducts(products) {
//             this.products = this.products.concat(products);
//         }
//     }, {
//         key: 'loadProductsToForm',
//         value: function loadProductsToForm() {
//             for (var i = 0; i < this.products.length; i++) {
//                 var product = this.products[i];
//                 var id = i + 1;

//                 this.form["p24_name_" + id] = product.name;
//                 this.form["p24_quantity_" + id] = product.quantity;
//                 this.form["p24_price_" + id] = product.price;

//                 if (product.description !== null) {
//                     this.form["p24_description_" + id] = product.description;
//                 }

//                 if (product.number !== null) {
//                     this.form["p24_number_" + id] = product.number;
//                 }
//             }
//         }
//     }, {
//         key: 'getCrc',
//         value: function getCrc() {
//             var data = this.form.p24_session_id + '|' + this.form.p24_pos_id + '|' + this.form.p24_amount + '|' + this.form.p24_currency + '|' + this.salt;

//             return _crypto2.default.createHash('md5').update(data).digest("hex");
//         }

//         // Main methods

//     }, {
//         key: 'register',
//         value: function register() {
//             var _this = this;

//             return new Promise(async function (resolve, reject) {
//                 var _iteratorNormalCompletion = true;
//                 var _didIteratorError = false;
//                 var _iteratorError = undefined;

//                 try {
//                     for (var _iterator = _this.REQUIRED_FIELDS_REGISTER[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
//                         var field = _step.value;

//                         if (_this.form[field] === undefined) {
//                             return reject(new Error(field + ' field is missing.'));
//                         }
//                     }
//                 } catch (err) {
//                     _didIteratorError = true;
//                     _iteratorError = err;
//                 } finally {
//                     try {
//                         if (!_iteratorNormalCompletion && _iterator.return) {
//                             _iterator.return();
//                         }
//                     } finally {
//                         if (_didIteratorError) {
//                             throw _iteratorError;
//                         }
//                     }
//                 }

//                 _this.form.p24_sign = _this.getCrc();
//                 _this.loadProductsToForm();

//                 try {
//                     var rawResponse = await _requestPromiseNative2.default.post(_this.host + "trnRegister", { form: _this.form });

//                     if (rawResponse) {
//                         var res = _queryString2.default.parse(rawResponse);

//                         if (res.token) {
//                             return resolve(res.token);
//                         } else {
//                             throw new Error(res.errorMessage);
//                         }
//                     } else {
//                         throw new Error('Error happened while registering payment, please try again.');
//                     }
//                 } catch (e) {
//                     return reject(e);
//                 }
//             });
//         }
//     }, {
//         key: 'getPayByLinkUrl',
//         value: function getPayByLinkUrl(token) {
//             return this.host + 'trnRequest/' + token;
//         }
//     }, {
//         key: 'verify',
//         value: function verify(sign) {
//             var _this2 = this;

//             return new Promise(async function (resolve, reject) {
//                 var _iteratorNormalCompletion2 = true;
//                 var _didIteratorError2 = false;
//                 var _iteratorError2 = undefined;

//                 try {
//                     for (var _iterator2 = _this2.REQUIRED_FIELDS_VERIFY[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
//                         var field = _step2.value;

//                         if (_this2.form[field] === undefined) {
//                             return reject(new Error(field + ' field is missing.'));
//                         }
//                     }
//                 } catch (err) {
//                     _didIteratorError2 = true;
//                     _iteratorError2 = err;
//                 } finally {
//                     try {
//                         if (!_iteratorNormalCompletion2 && _iterator2.return) {
//                             _iterator2.return();
//                         }
//                     } finally {
//                         if (_didIteratorError2) {
//                             throw _iteratorError2;
//                         }
//                     }
//                 }

//                 _this2.form.p24_sign = sign;

//                 try {
//                     var rawResponse = await _requestPromiseNative2.default.post(_this2.host + "trnVerify", { form: _this2.form });

//                     if (rawResponse) {
//                         var res = _queryString2.default.parse(rawResponse);

//                         if (res.error === '0') {
//                             return resolve();
//                         } else {
//                             throw new Error(res.errorMessage);
//                         }
//                     } else {
//                         throw new Error('Error happened while verifying payment, please try again.');
//                     }
//                 } catch (e) {
//                     return reject(e);
//                 }
//             });
//         }
//     }, {
//         key: 'P24_VERSION',
//         get: function get() {
//             return '3.2';
//         }
//     }, {
//         key: 'HOST_LIVE',
//         get: function get() {
//             return 'https://secure.przelewy24.pl/';
//         }
//     }, {
//         key: 'HOST_DEMO',
//         get: function get() {
//             return 'https://sandbox.przelewy24.pl/';
//         }
//     }, {
//         key: 'REQUIRED_FIELDS_REGISTER',
//         get: function get() {
//             return ['p24_merchant_id', 'p24_pos_id', 'p24_session_id', 'p24_amount', 'p24_currency', 'p24_description', 'p24_email', 'p24_country', 'p24_url_return'];
//         }
//     }, {
//         key: 'REQUIRED_FIELDS_VERIFY',
//         get: function get() {
//             return ['p24_merchant_id', 'p24_pos_id', 'p24_session_id', 'p24_amount', 'p24_currency', 'p24_order_id'];
//         }
//     }]);

//     return Przelewy24;
// }();

// exports.default = Przelewy24;










































































































































































// import request from 'request-promise-native'
// import crypto from 'crypto'
// import queryString from 'query-string'
var request = require('request-promise-native')
var crypto = require("crypto")
var queryString = require('query-string')


class Przelewy24 {
    constructor(merchantId, posId, salt, testMode = false) {
        this.form = {
            p24_merchant_id: merchantId,
            p24_pos_id: posId,
            p24_api_version: this.P24_VERSION
        }

        this.salt = salt
        this.testMode = testMode

        this.host = testMode ? this.HOST_DEMO : this.HOST_LIVE
        this.products = []
    }

    // Constants
    get P24_VERSION() {
        return '3.2'
    }

    get HOST_LIVE() {
        return 'https://secure.przelewy24.pl/'
    }

    get HOST_DEMO() {
        return 'https://sandbox.przelewy24.pl/'
    }

    get REQUIRED_FIELDS_REGISTER() {
        return ['p24_merchant_id', 'p24_pos_id', 'p24_session_id', 'p24_amount', 'p24_currency', 'p24_description', 'p24_email', 'p24_country', 'p24_url_return']
    }

    get REQUIRED_FIELDS_VERIFY() {
        return ['p24_merchant_id', 'p24_pos_id', 'p24_session_id', 'p24_amount', 'p24_currency', 'p24_order_id']
    }

    // Field-filing methods
    setSessionId(value) {
        if (value.length === 0 || value.length > 100) {
            throw new Error('p24_session_id value must have from 0 to 100 characters.')
        }

        this.form.p24_session_id = value
    }

    setAmount(value) {
        this.form.p24_amount = value
    }

    setCurrency(value) {
        if (value.length !== 3) {
            throw new Error('p24_currency value must have from 3 characters.')
        }

        this.form.p24_currency = value
    }

    setDescription(value) {
        if (value.length === 0 || value.length > 1024) {
            throw new Error('p24_description value must have from 0 to 1024 characters.')
        }

        this.form.p24_description = value
    }

    setEmail(value) {
        if (value.length === 0 || value.length > 50) {
            throw new Error('p24_email value must have from 0 to 50 characters.')
        }

        this.form.p24_email = value
    }

    setClient(value) {
        if (value.length === 0 || value.length > 50) {
            throw new Error('p24_client value must have from 0 to 50 characters.')
        }

        this.form.p24_client = value
    }

    setAddress(value) {
        if (value.length === 0 || value.length > 80) {
            throw new Error('p24_address value must have from 0 to 80 characters.')
        }

        this.form.p24_address = value
    }

    setZip(value) {
        if (value.length === 0 || value.length > 10) {
            throw new Error('p24_zip value must have from 0 to 10 characters.')
        }

        this.form.p24_zip = value
    }

    setCity(value) {
        if (value.length === 0 || value.length > 50) {
            throw new Error('p24_city value must have from 0 to 50 characters.')
        }

        this.form.p24_city = value
    }

    setCountry(value) {
        if (value.length === 0 || value.length > 2) {
            throw new Error('p24_country value must have from 0 to 2 characters.')
        }

        this.form.p24_country = value
    }

    setPhone(value) {
        if (value.length === 0 || value.length > 12) {
            throw new Error('p24_phone value must have from 0 to 12 characters.')
        }

        this.form.p24_phone = value
    }

    setLanguage(value) {
        if (value.length !== 2) {
            throw new Error('p24_language value must have from 2 characters.')
        }

        this.form.p24_language = value
    }

    setMethod(value) {
        this.form.p24_method = value
    }

    setUrlReturn(value) {
        if (value.length === 0 || value.length > 250) {
            throw new Error('p24_url_return value must have from 0 to 250 characters.')
        }

        this.form.p24_url_return = value
    }

    setUrlStatus(value) {
        if (value.length === 0 || value.length > 250) {
            throw new Error('p24_url_status value must have from 0 to 250 characters.')
        }

        this.form.p24_url_status = value
    }

    setTimeLimit(value) {
        this.form.p24_time_limit = value
    }

    setWaitForResult(value) {
        this.form.p24_wait_for_result = value
    }

    setChannel(value) {
        this.form.p24_channel = value
    }

    setShipping(value) {
        this.form.p24_shipping = value
    }

    setTransferLabel(value) {
        if (value.length === 0 || value.length > 20) {
            throw new Error('p24_transfer_label value must have from 20 characters.')
        }

        this.form.p24_transfer_label = value
    }

    setOrderId(value) {
        this.form.p24_order_id = value
    }

    // Custom methods
    addProduct(name, description, quantity, price, number = null) {
        this.products.push({
            name: name,
            description: description,
            quantity: quantity,
            price: price,
            number: number
        })
    }

    addProducts(products) {
        this.products = this.products.concat(products)
    }

    loadProductsToForm() {
        for (let i = 0; i < this.products.length; i++) {
            const product = this.products[i]
            const id = i + 1

            this.form["p24_name_" + id] = product.name
            this.form["p24_quantity_" + id] = product.quantity
            this.form["p24_price_" + id] = product.price

            if (product.description !== null) {
                this.form["p24_description_" + id] = product.description
            }

            if (product.number !== null) {
                this.form["p24_number_" + id] = product.number
            }
        }
    }

    getCrc() {
        const data = this.form.p24_session_id + '|' + this.form.p24_pos_id + '|' + this.form.p24_amount + '|' + this.form.p24_currency + '|' + this.salt

        return crypto.createHash('md5').update(data).digest("hex");
    }

    // Main methods
    register() {
        return new Promise(async (resolve, reject) => {
            for (const field of this.REQUIRED_FIELDS_REGISTER) {
                if (this.form[field] === undefined) {
                    return reject(new Error(field + ' field is missing.'))
                }
            }

            this.form.p24_sign = this.getCrc()
            this.loadProductsToForm()

            try {
                const rawResponse = await request.post(this.host + "trnRegister", { form: this.form })

                if (rawResponse) {
                    const res = queryString.parse(rawResponse)

                    if (res.token) {
                        return resolve(res.token)
                    } else {
                        throw new Error(res.errorMessage)
                    }
                } else {
                    throw new Error('Error happened while registering payment, please try again.')
                }
            } catch (e) {
                return reject(e)
            }
        })
    }

    getPayByLinkUrl(token) {
        return this.host + 'trnRequest/' + token
    }

    verify(sign) {
        return new Promise(async (resolve, reject) => {
            for (const field of this.REQUIRED_FIELDS_VERIFY) {
                if (this.form[field] === undefined) {
                    return reject(new Error(field + ' field is missing.'))
                }
            }

            this.form.p24_sign = sign

            try {
                const rawResponse = await request.post(this.host + "trnVerify", { form: this.form })

                if (rawResponse) {
                    const res = queryString.parse(rawResponse)

                    if (res.error === '0') {
                        return resolve()
                    } else {
                        throw new Error(res.errorMessage)
                    }
                } else {
                    throw new Error('Error happened while verifying payment, please try again.')
                }
            } catch (e) {
                return reject(e)
            }
        })
    }
}

module.exports = Przelewy24