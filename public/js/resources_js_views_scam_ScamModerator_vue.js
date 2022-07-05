"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_scam_ScamModerator_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modal/AddScamModal.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modal/AddScamModal.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _VsudInput_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../VsudInput.vue */ "./resources/js/components/VsudInput.vue");
/* harmony import */ var _VsudButton_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VsudButton.vue */ "./resources/js/components/VsudButton.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AddScamModal",
  emits: ["reload"],
  props: {
    messageId: {
      type: Number,
      require: true
    },
    rawString: {
      type: String,
      "default": ""
    },
    modal: {
      type: Object,
      "default": function _default() {}
    },
    tgUserData: {
      type: Object,
      require: true,
      "default": {
        id: null,
        username: ""
      }
    },
    product: {
      type: Object,
      require: true
    }
  },
  data: function data() {
    return {};
  },
  components: {
    VsudInput: _VsudInput_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    VsudButton: _VsudButton_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    strToTgUsername: function strToTgUsername(str) {
      return "@".concat(str);
    },
    sendIgnoreData: function sendIgnoreData(messageId) {
      var _this = this;

      axios.get("/api/scam-tg-message-ignore/" + messageId, {}).then(function (r) {
        _this.closeModal();

        _this.$emit("mesagesReload");
      })["catch"](function (err) {
        console.log(err.response);
        _this.registerError = "Ошибка запроса на игнор сообщения о скаме";
        alert(_this.registerError);
      });
    },
    sendSetScamUserStatusData: function sendSetScamUserStatusData(messageId) {
      var _this2 = this;

      axios.post("/api/pre-scam-tg-user/" + messageId, {
        tgUsername: this.tgUserData.username,
        tgUserId: this.tgUserData.id,
        productId: this.product.id
      }).then(function (r) {
        _this2.closeModal();

        _this2.$emit("mesagesReload");
      })["catch"](function (err) {
        console.log(err.response);
        _this2.registerError = "Ошибка запроса становку статуса Scam";
        alert(_this2.registerError);
      });
    },
    sendSetScamProductStatusData: function sendSetScamProductStatusData(messageId) {
      var _this3 = this;

      axios.post("/api/pre-scam-product/" + messageId, {
        tgUsername: this.tgUserData.username,
        tgUserId: this.tgUserData.id,
        productId: this.product.id
      }).then(function (r) {
        _this3.closeModal();

        _this3.$emit("mesagesReload");
      })["catch"](function (err) {
        console.log(err.response);
        _this3.registerError = "Ошибка запроса становку статуса Scam";
        alert(_this3.registerError);
      });
    },
    closeModal: function closeModal() {
      this.modal.hide();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ScamMessagesTable.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ScamMessagesTable.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_js_convertDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/js/convertDate.js */ "./resources/js/assets/js/convertDate.js");
/* harmony import */ var _components_modal_AddScamModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/modal/AddScamModal.vue */ "./resources/js/components/modal/AddScamModal.vue");
/* harmony import */ var _assets_js_searchTgUsername_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/js/searchTgUsername.js */ "./resources/js/assets/js/searchTgUsername.js");
/* harmony import */ var _assets_js_searchProduct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/js/searchProduct.js */ "./resources/js/assets/js/searchProduct.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







 //import "vue-good-table/dist/vue-good-table.css";
//const VueGoodTable = require("vue-good-table");
//import { VueGoodTable } from "vue-good-table";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "scam-messages-table",
  components: {
    AddScamModal: _components_modal_AddScamModal_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    searchTgUsername: _assets_js_searchTgUsername_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    searchProduct: _assets_js_searchProduct_js__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    title: {
      type: String,
      "default": "Сообщения Telegram"
    }
  },
  setup: function setup(props) {
    var searchTerm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(""); // Search text
    // Fake data

    var data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      rows: []
    });
    var $loading = (0,vue_loading_overlay__WEBPACK_IMPORTED_MODULE_5__.useLoading)();
    var loader;

    var submit = function submit() {
      loader = $loading.show({// Optional parameters

        /*container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,*/
      }); // simulate AJAX

      /*setTimeout(() => {
        loader.hide();
      }, 5000);*/
    };
    /**
     * Get server data request
     */


    var myRequest = function myRequest(keyword) {
      submit();
      axios.post("/api/scam-messages", {
        filter: keyword
      }).then(function (r) {
        //console.log(r.data);
        data.rows = r.data;
        loader.hide(); //this.$emit("accountsReload");
      })["catch"](function (err) {
        loader.hide();
        console.log("Fetch error", err.response);
        var registerError = "Неизвестная ошибка работы live filter scam messages";
        alert(registerError);
      });
    };

    var table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      filteredList: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return data.rows;
      }),
      totalRecordCount: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
        return data.rows.length;
      })
    });
    var timeout = null;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return searchTerm.value;
    }, function (val) {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(function () {
        myRequest(val);
      }, 500);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(table, function (val) {
      console.log(val);
    }); // Get data on first rendering

    myRequest("");
    return {
      searchTerm: searchTerm,
      table: table
    };
  },
  data: function data() {
    return {
      messageId: null,
      selected: [],
      allSelected: false,
      actions: [{
        id: 0,
        name: "Игнорировать"
      }, {
        id: 1,
        name: "Применить к пользователю"
      }, {
        id: 2,
        name: "Применить к проекту"
      }],
      rawString: "",
      theModal: null,
      tgUserData: {
        id: null,
        username: ""
      },
      product: {
        id: null,
        name: ""
      },
      fullPage: false
    };
  },
  mounted: function mounted() {
    this.theModal = new bootstrap__WEBPACK_IMPORTED_MODULE_6__.Modal(document.getElementById("addScamMessage")); //this.submit();
  },
  methods: {
    checkString: function checkString(string) {
      string = string.trim();
      var regexp = /^@[\w_]+$/gi;
      var regexp2 = /^[\w_]+$/gi;
      var regexp3 = /^[\w_.'\s-]+$/gi;

      if (string.match(regexp)) {
        var username = string.slice(1);
        this.tgUserData = (0,_assets_js_searchTgUsername_js__WEBPACK_IMPORTED_MODULE_3__["default"])(username, true);
        this.product = {
          id: null,
          name: ""
        };
      } else if (string.match(regexp2)) {
        this.tgUserData = (0,_assets_js_searchTgUsername_js__WEBPACK_IMPORTED_MODULE_3__["default"])(string, false);
        this.product = (0,_assets_js_searchProduct_js__WEBPACK_IMPORTED_MODULE_4__["default"])(string);
      } else if (string.match(regexp3)) {
        this.tgUserData = {
          id: null,
          username: ""
        };
        this.product = (0,_assets_js_searchProduct_js__WEBPACK_IMPORTED_MODULE_4__["default"])(string);
      } else {
        this.tgUserData = {
          id: null,
          username: ""
        };
        this.product = {
          id: null,
          name: ""
        };
        return false;
      }

      return true;
    },
    handleEvent: function handleEvent(v) {
      var handleEventData = {
        messageId: v.path[0].id,
        string: ""
      };
      var txt = "";

      if (window.getSelection) {
        txt = window.getSelection();
      } else if (window.document.getSelection) {
        txt = window.document.getSelection();
      } else if (window.document.selection) {
        txt = window.document.selection.createRange().text;
      }

      handleEventData.string = txt;
      this.messageId = handleEventData.messageId;
      this.rawString = handleEventData.string + "";

      if (this.rawString && this.checkString(this.rawString)) {
        this.showModal();
      }
    },
    selectAll: function selectAll() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var selected;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.allSelected) {
                  selected = _this.table.filteredList.map(function (u) {
                    return u.id;
                  });
                  _this.selected = selected;
                } else {
                  _this.selected = [];
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    convertDate: function convertDate(date) {
      return (0,_assets_js_convertDate_js__WEBPACK_IMPORTED_MODULE_1__.convertMessageTableDate)(date);
    },
    showModal: function showModal() {
      this.theModal.show();
    },
    mesagesReload: function mesagesReload() {
      alert("Reload");
    }
    /*createRows() {
      const rows = [];
      let i = 0;
      this.table.filteredList.forEach((item) => {
        const username = item.username
          ? `<a href="https://t.me/${item.username}" class="text-sm font-weight-bold mb-0" target="_blank">@${item.username}</a><br />`
          : "";
        const firstName = item.first_name
          ? `<span>${item.first_name}</span>`
          : "";
        const lastName = item.last_name ? `<span>${item.last_name}</span>` : "";
        const channelUsername = item.channel_username
          ? `<a href="https://t.me/${item.channel_username}" class="text-sm font-weight-bold mb-0" target="_blank">${item.channel_username}</a>`
          : "-";
        const row = {
          id: i,
          message: `<div class="text-sm">${item.message}</div>`,
          date:
            '<div class="text-sm">' +
            this.convertDate(item.date).date +
            "<br />" +
            this.convertDate(item.date).time +
            "</div>",
          username: `${username}${firstName}${lastName}`,
          channelUsername: channelUsername,
        };
        rows.push(row);
        i += 1;
      });
      return rows;
    },*/

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/scam/ScamModerator.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/scam/ScamModerator.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_components_tables_ScamMessagesTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/components/tables/ScamMessagesTable */ "./resources/js/views/components/tables/ScamMessagesTable.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "scam-moderator",
  components: {
    ScamMessagesTable: _views_components_tables_ScamMessagesTable__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modal/AddScamModal.vue?vue&type=template&id=dc48c286":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modal/AddScamModal.vue?vue&type=template&id=dc48c286 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "modal fade",
  id: "addScamMessage",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "addScamMessageTitle",
  "aria-hidden": "true"
};
var _hoisted_2 = {
  "class": "modal-dialog modal-dialog-centered",
  role: "document"
};
var _hoisted_3 = {
  "class": "modal-content"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "modal-title",
  id: "ModalLabel"
}, "Добавление скама в базу"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn-close text-dark",
  "data-bs-dismiss": "modal",
  "aria-label": "Close"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "aria-hidden": "true"
}, "×")])], -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "modal-body"
};
var _hoisted_6 = {
  key: 0
};
var _hoisted_7 = {
  key: 0,
  "class": "form-group"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Telegram username", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "row"
};
var _hoisted_10 = {
  "class": "col-12 col-sm-8"
};
var _hoisted_11 = {
  "class": "col-12 col-sm-4 mt-3 mt-sm-0"
};
var _hoisted_12 = {
  key: 1,
  "class": "form-group"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Проект", -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "row"
};
var _hoisted_15 = {
  "class": "col-12 col-sm-8"
};
var _hoisted_16 = {
  "class": "col-12 col-sm-4 mt-3 mt-sm-0"
};
var _hoisted_17 = {
  key: 1
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Данные не найдены", -1
/* HOISTED */
);

var _hoisted_19 = [_hoisted_18];
var _hoisted_20 = {
  "class": "modal-footer"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn bg-gradient-secondary",
  "data-bs-dismiss": "modal"
}, " Закрыть ", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vsud_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vsud-input");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", null, [$props.tgUserData.username || $props.product.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [$props.tgUserData.username ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "tg-user-name",
    type: "text",
    placeholder: "@user_name",
    "aria-label": "tg-user-name",
    isRequired: false,
    value: '@' + $props.tgUserData.username,
    onInputValue: _cache[0] || (_cache[0] = function (v) {
      return $props.tgUserData.username = v;
    })
  }, null, 8
  /* PROPS */
  , ["value"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn bg-gradient-primary",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.sendSetScamUserStatusData($props.messageId);
    }, ["prevent"]))
  }, " Подтвердить ")])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.product.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "product-name",
    type: "text",
    placeholder: "Название проекта",
    "aria-label": "product-name",
    isRequired: false,
    value: $props.product.name,
    onInputValue: _cache[2] || (_cache[2] = function (v) {
      return $props.product.name = v;
    })
  }, null, 8
  /* PROPS */
  , ["value"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn bg-gradient-primary",
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.sendSetScamProductStatusData($props.messageId);
    }, ["prevent"]))
  }, " Подтвердить ")])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, _hoisted_19))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn bg-gradient-success",
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.sendIgnoreData($props.messageId);
    }, ["prevent"]))
  }, " Игнорировать ")])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ScamMessagesTable.vue?vue&type=template&id=3288c2b4&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ScamMessagesTable.vue?vue&type=template&id=3288c2b4&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-3288c2b4"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "card mb-4"
};
var _hoisted_2 = {
  "class": "card-header pb-0"
};
var _hoisted_3 = {
  "class": "card-body px-0 pt-0 pb-2"
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "col-6"
};

var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "form-label pl-3"
  }, "Поиск по сообщениям", -1
  /* HOISTED */
  );
});

var _hoisted_7 = {
  "class": "input-group pl-3"
};
var _hoisted_8 = {
  "class": "col-6"
};

var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "form-label pl-3"
  }, "Действия", -1
  /* HOISTED */
  );
});

var _hoisted_10 = {
  "class": "row"
};
var _hoisted_11 = {
  "class": "col-8"
};
var _hoisted_12 = {
  "class": "form-group"
};
var _hoisted_13 = ["value"];
var _hoisted_14 = {
  "class": "col-4 mt-3 mt-sm-0"
};
var _hoisted_15 = {
  "class": "form-group"
};
var _hoisted_16 = {
  "class": "table align-items-center justify-content-center mb-0"
};
var _hoisted_17 = {
  "class": "d-flex align-items-center justify-content-center"
};

var _hoisted_18 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7",
    style: {
      "width": "50%"
    }
  }, " Текст сообщения ", -1
  /* HOISTED */
  );
});

var _hoisted_19 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
  }, " Дата ", -1
  /* HOISTED */
  );
});

var _hoisted_20 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
  }, " Автор сообщения ", -1
  /* HOISTED */
  );
});

var _hoisted_21 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
  }, " OTC канал ", -1
  /* HOISTED */
  );
});

var _hoisted_22 = {
  "class": "d-flex align-items-center justify-content-center"
};
var _hoisted_23 = ["value"];
var _hoisted_24 = ["id"];
var _hoisted_25 = {
  "class": "text-sm"
};

var _hoisted_26 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
  /* HOISTED */
  );
});

var _hoisted_27 = ["href"];

var _hoisted_28 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
  /* HOISTED */
  );
});

var _hoisted_29 = {
  key: 1
};
var _hoisted_30 = {
  key: 2
};
var _hoisted_31 = ["href"];
var _hoisted_32 = {
  key: 1
};
var _hoisted_33 = {
  key: 1,
  "class": "row"
};

var _hoisted_34 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-12"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "form-label p-3"
  }, "Нет новых сообщений")], -1
  /* HOISTED */
  );
});

var _hoisted_35 = [_hoisted_34];
var _hoisted_36 = {
  "class": "row"
};
var _hoisted_37 = {
  "class": "col-md-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_add_scam_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("add-scam-modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "liveSearchReferers",
    name: "liveSearchReferers",
    "class": "form-control",
    type: "text",
    placeholder: "Вводите ключевое слово",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.searchTerm = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.searchTerm]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control",
    name: "choices-button",
    id: "choices-button",
    placeholder: "Выберите соцсеть",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.selectedAction = $event;
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.actions, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.id,
      key: item.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 9
    /* TEXT, PROPS */
    , _hoisted_13);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.selectedAction]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [$data.selected ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    type: "button",
    "class": "btn bg-gradient-primary",
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return _ctx.sendAction && _ctx.sendAction.apply(_ctx, arguments);
    }, ["prevent"]))
  }, " Применить ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), $setup.table.filteredList.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "table-responsive px-3 pt-3",
    onMouseup: _cache[6] || (_cache[6] = function (v) {
      return $options.handleEvent(v);
    }),
    ref: "formContainer"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.allSelected = $event;
    }),
    onChange: _cache[4] || (_cache[4] = function () {
      return $options.selectAll && $options.selectAll.apply($options, arguments);
    })
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.allSelected]])])]), _hoisted_18, _hoisted_19, _hoisted_20, _hoisted_21])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.table.filteredList, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item,
      "class": "my-0"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "checkbox",
      "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
        return $data.selected = $event;
      }),
      value: item.id,
      number: ""
    }, null, 8
    /* PROPS */
    , _hoisted_23), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.selected]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "text-sm",
      id: item.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.message), 9
    /* TEXT, PROPS */
    , _hoisted_24)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertDate(item.date).date), 1
    /* TEXT */
    ), _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertDate(item.date).time), 1
    /* TEXT */
    )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [item.username ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 0,
      href: 'https://t.me/' + item.username,
      "class": "text-sm font-weight-bold mb-0",
      target: "_blank"
    }, " @" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.username), 9
    /* TEXT, PROPS */
    , _hoisted_27)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_28, item.first_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.first_name), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.last_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.last_name), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [item.channel_username ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 0,
      href: 'https://t.me/' + item.channel_username,
      "class": "text-sm font-weight-bold mb-0",
      target: "_blank"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.channel_username), 9
    /* TEXT, PROPS */
    , _hoisted_31)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_32, "-"))])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_33, _hoisted_35))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_add_scam_modal, {
    modal: $data.theModal,
    rawString: $data.rawString,
    tgUserData: $data.tgUserData,
    product: $data.product,
    messageId: $data.messageId,
    onMesagesReload: $options.mesagesReload
  }, null, 8
  /* PROPS */
  , ["modal", "rawString", "tgUserData", "product", "messageId", "onMesagesReload"])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/scam/ScamModerator.vue?vue&type=template&id=2347a896":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/scam/ScamModerator.vue?vue&type=template&id=2347a896 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "py-4 container-fluid"
};
var _hoisted_2 = {
  "class": "row pt-3"
};
var _hoisted_3 = {
  "class": "col-12"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_scam_messages_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("scam-messages-table");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_scam_messages_table, {
    title: "Новые сoобщения Telegram о scam"
  })])])]);
}

/***/ }),

/***/ "./resources/js/assets/js/convertDate.js":
/*!***********************************************!*\
  !*** ./resources/js/assets/js/convertDate.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertMessageTableDate": () => (/* binding */ convertMessageTableDate)
/* harmony export */ });
function convertMessageTableDate(dateRaw) {
  var date = new Date(dateRaw);
  var dateString = date.toLocaleDateString();
  var timeString = date.toLocaleTimeString();
  return {
    date: dateString,
    time: timeString
  };
}

/***/ }),

/***/ "./resources/js/assets/js/searchProduct.js":
/*!*************************************************!*\
  !*** ./resources/js/assets/js/searchProduct.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchProduct)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function searchProduct(query) {
  var product = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);

  var connectSearchProduct = function connectSearchProduct(query) {
    return axios.post("/api/search-product", {
      query: query
    }).then(function (r) {
      if (r.data) {
        product.value = {
          id: r.data.id,
          name: r.data.name
        };
      } else {
        product.value = {
          id: null,
          name: ''
        };
      }
    })["catch"](function (err) {
      console.log(err);
      var registerError = "Ошибка получения результатов поиска проекта";
      alert(registerError);
    });
  }; //});
  //};
  //onMounted(connectGetAllAccounts)


  connectSearchProduct(query); //watch(user, getUserRepositories)

  return product;
}

/***/ }),

/***/ "./resources/js/assets/js/searchTgUsername.js":
/*!****************************************************!*\
  !*** ./resources/js/assets/js/searchTgUsername.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchTgUsername)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function searchTgUsername(query, toOut) {
  var tgUser = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);

  var connectSearchTgUsername = function connectSearchTgUsername(query, toOut) {
    return axios.post("/api/search-tg-username", {
      query: query
    }).then(function (r) {
      if (r.data && !toOut) {
        tgUser.value = {
          id: r.data.id,
          username: r.data.username
        };
      } else if (toOut) {
        tgUser.value = {
          id: null,
          username: query
        };
      } else {
        tgUser.value = {
          id: null,
          username: ''
        };
      }
    })["catch"](function (err) {
      console.log(err);
      var registerError = "Ошибка получения результатов поиска Tg пользователя";
      alert(registerError);
    });
  };

  connectSearchTgUsername(query, toOut);
  return tgUser;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ScamMessagesTable.vue?vue&type=style&index=0&id=3288c2b4&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ScamMessagesTable.vue?vue&type=style&index=0&id=3288c2b4&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.table td[data-v-3288c2b4] {\n  white-space: normal !important;\n  padding: 3px 5px 3px 5px !important;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/views/components/tables/ScamMessagesTable.vue"],"names":[],"mappings":";AA+aA;EACE,8BAA8B;EAC9B,mCAAmC;AACrC","sourcesContent":["<template>\n  <div class=\"card mb-4\">\n    <div class=\"card-header pb-0\">\n      <h5>{{ title }}</h5>\n    </div>\n    <div class=\"card-body px-0 pt-0 pb-2\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <label class=\"form-label pl-3\">Поиск по сообщениям</label>\n          <div class=\"input-group pl-3\">\n            <input\n              id=\"liveSearchReferers\"\n              name=\"liveSearchReferers\"\n              class=\"form-control\"\n              type=\"text\"\n              placeholder=\"Вводите ключевое слово\"\n              v-model=\"searchTerm\"\n            />\n          </div>\n        </div>\n        <div class=\"col-6\">\n          <label class=\"form-label pl-3\">Действия</label>\n          <div class=\"row\">\n            <div class=\"col-8\">\n              <div class=\"form-group\">\n                <select\n                  class=\"form-control\"\n                  name=\"choices-button\"\n                  id=\"choices-button\"\n                  placeholder=\"Выберите соцсеть\"\n                  v-model=\"selectedAction\"\n                >\n                  <option\n                    v-for=\"item in actions\"\n                    :value=\"item.id\"\n                    :key=\"item.id\"\n                  >\n                    {{ item.name }}\n                  </option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-4 mt-3 mt-sm-0\">\n              <div class=\"form-group\">\n                <button\n                  type=\"button\"\n                  class=\"btn bg-gradient-primary\"\n                  @click.prevent=\"sendAction\"\n                  v-if=\"selected\"\n                >\n                  Применить\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"table-responsive px-3 pt-3\"\n        @mouseup=\"(v) => handleEvent(v)\"\n        ref=\"formContainer\"\n        v-if=\"table.filteredList.length\"\n      >\n        <table class=\"table align-items-center justify-content-center mb-0\">\n          <thead>\n            <tr>\n              <th>\n                <div class=\"d-flex align-items-center justify-content-center\">\n                  <input\n                    type=\"checkbox\"\n                    v-model=\"allSelected\"\n                    @change=\"selectAll\"\n                  />\n                </div>\n              </th>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                \"\n                style=\"width: 50%\"\n              >\n                Текст сообщения\n              </th>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                  ps-2\n                \"\n              >\n                Дата\n              </th>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                  ps-2\n                \"\n              >\n                Автор сообщения\n              </th>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                  ps-2\n                \"\n              >\n                OTC канал\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr v-for=\"item in table.filteredList\" :key=\"item\" class=\"my-0\">\n              <td>\n                <div class=\"d-flex align-items-center justify-content-center\">\n                  <input\n                    type=\"checkbox\"\n                    v-model=\"selected\"\n                    :value=\"item.id\"\n                    number\n                  />\n                </div>\n              </td>\n              <td>\n                <div class=\"text-sm\" :id=\"item.id\">\n                  {{ item.message }}\n                </div>\n              </td>\n              <td>\n                <div class=\"text-sm\">\n                  {{ convertDate(item.date).date }}<br />{{\n                    convertDate(item.date).time\n                  }}\n                </div>\n              </td>\n              <td>\n                <a\n                  :href=\"'https://t.me/' + item.username\"\n                  class=\"text-sm font-weight-bold mb-0\"\n                  target=\"_blank\"\n                  v-if=\"item.username\"\n                >\n                  @{{ item.username }} </a\n                ><br />\n                <span v-if=\"item.first_name\">{{ item.first_name }}</span>\n                <span v-if=\"item.last_name\">{{ item.last_name }}</span>\n              </td>\n              <td>\n                <a\n                  :href=\"'https://t.me/' + item.channel_username\"\n                  class=\"text-sm font-weight-bold mb-0\"\n                  target=\"_blank\"\n                  v-if=\"item.channel_username\"\n                >\n                  {{ item.channel_username }}\n                </a>\n                <span v-else>-</span>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"row\" v-else>\n        <div class=\"col-12\">\n          <div class=\"form-label p-3\">Нет новых сообщений</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Modal -->\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <add-scam-modal\n        :modal=\"theModal\"\n        :rawString=\"rawString\"\n        :tgUserData=\"tgUserData\"\n        :product=\"product\"\n        :messageId=\"messageId\"\n        @mesages-reload=\"mesagesReload\"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { defineComponent, reactive, ref, computed, watch, inject } from \"vue\";\nimport { convertMessageTableDate } from \"@/assets/js/convertDate.js\";\nimport AddScamModal from \"@/components/modal/AddScamModal.vue\";\nimport searchTgUsername from \"@/assets/js/searchTgUsername.js\";\nimport searchProduct from \"@/assets/js/searchProduct.js\";\nimport { useLoading } from \"vue-loading-overlay\";\n\nimport { Modal } from \"bootstrap\";\n\n//import \"vue-good-table/dist/vue-good-table.css\";\n//const VueGoodTable = require(\"vue-good-table\");\n//import { VueGoodTable } from \"vue-good-table\";\n\nexport default {\n  name: \"scam-messages-table\",\n  components: {\n    AddScamModal,\n    searchTgUsername,\n    searchProduct,\n  },\n  props: {\n    title: {\n      type: String,\n      default: \"Сообщения Telegram\",\n    },\n  },\n  setup(props) {\n    const searchTerm = ref(\"\"); // Search text\n    // Fake data\n    const data = reactive({\n      rows: [],\n    });\n    const $loading = useLoading();\n    let loader;\n    const submit = () => {\n      loader = $loading.show({\n        // Optional parameters\n        /*container: this.fullPage ? null : this.$refs.formContainer,\n        canCancel: true,\n        onCancel: this.onCancel,*/\n      });\n      // simulate AJAX\n      /*setTimeout(() => {\n        loader.hide();\n      }, 5000);*/\n    };\n\n    /**\n     * Get server data request\n     */\n    const myRequest = (keyword) => {\n      submit();\n      axios\n        .post(\"/api/scam-messages\", {\n          filter: keyword,\n        })\n        .then((r) => {\n          //console.log(r.data);\n          data.rows = r.data;\n          loader.hide();\n          //this.$emit(\"accountsReload\");\n        })\n        .catch((err) => {\n          loader.hide();\n          console.log(\"Fetch error\", err.response);\n          const registerError =\n            \"Неизвестная ошибка работы live filter scam messages\";\n          alert(registerError);\n        });\n    };\n\n    const table = reactive({\n      filteredList: computed(() => {\n        return data.rows;\n      }),\n      totalRecordCount: computed(() => {\n        return data.rows.length;\n      }),\n    });\n\n    let timeout = null;\n    watch(\n      () => searchTerm.value,\n      (val) => {\n        if (timeout) {\n          clearTimeout(timeout);\n        }\n        timeout = setTimeout(() => {\n          myRequest(val);\n        }, 500);\n      }\n    );\n\n    watch(table, (val) => {\n      console.log(val);\n    });\n    // Get data on first rendering\n    myRequest(\"\");\n\n    return {\n      searchTerm,\n      table,\n    };\n  },\n  data() {\n    return {\n      messageId: null,\n      selected: [],\n      allSelected: false,\n      actions: [\n        { id: 0, name: \"Игнорировать\" },\n        { id: 1, name: \"Применить к пользователю\" },\n        { id: 2, name: \"Применить к проекту\" },\n      ],\n      rawString: \"\",\n      theModal: null,\n      tgUserData: {\n        id: null,\n        username: \"\",\n      },\n      product: {\n        id: null,\n        name: \"\",\n      },\n      fullPage: false,\n    };\n  },\n  mounted() {\n    this.theModal = new Modal(document.getElementById(\"addScamMessage\"));\n    //this.submit();\n  },\n\n  methods: {\n    checkString(string) {\n      string = string.trim();\n      const regexp = /^@[\\w_]+$/gi;\n      const regexp2 = /^[\\w_]+$/gi;\n      const regexp3 = /^[\\w_.'\\s-]+$/gi;\n      if (string.match(regexp)) {\n        const username = string.slice(1);\n        this.tgUserData = searchTgUsername(username, true);\n        this.product = {\n          id: null,\n          name: \"\",\n        };\n      } else if (string.match(regexp2)) {\n        this.tgUserData = searchTgUsername(string, false);\n        this.product = searchProduct(string);\n      } else if (string.match(regexp3)) {\n        this.tgUserData = {\n          id: null,\n          username: \"\",\n        };\n        this.product = searchProduct(string);\n      } else {\n        this.tgUserData = {\n          id: null,\n          username: \"\",\n        };\n        this.product = {\n          id: null,\n          name: \"\",\n        };\n        return false;\n      }\n      return true;\n    },\n\n    handleEvent(v) {\n      const handleEventData = {\n        messageId: v.path[0].id,\n        string: \"\",\n      };\n      let txt = \"\";\n      if (window.getSelection) {\n        txt = window.getSelection();\n      } else if (window.document.getSelection) {\n        txt = window.document.getSelection();\n      } else if (window.document.selection) {\n        txt = window.document.selection.createRange().text;\n      }\n      handleEventData.string = txt;\n      this.messageId = handleEventData.messageId;\n      this.rawString = handleEventData.string + \"\";\n      if (this.rawString && this.checkString(this.rawString)) {\n        this.showModal();\n      }\n    },\n    async selectAll() {\n      if (this.allSelected) {\n        const selected = this.table.filteredList.map((u) => u.id);\n        this.selected = selected;\n      } else {\n        this.selected = [];\n      }\n    },\n    convertDate(date) {\n      return convertMessageTableDate(date);\n    },\n    showModal() {\n      this.theModal.show();\n    },\n    mesagesReload() {\n      alert(\"Reload\");\n    },\n    /*createRows() {\n      const rows = [];\n      let i = 0;\n      this.table.filteredList.forEach((item) => {\n        const username = item.username\n          ? `<a href=\"https://t.me/${item.username}\" class=\"text-sm font-weight-bold mb-0\" target=\"_blank\">@${item.username}</a><br />`\n          : \"\";\n        const firstName = item.first_name\n          ? `<span>${item.first_name}</span>`\n          : \"\";\n        const lastName = item.last_name ? `<span>${item.last_name}</span>` : \"\";\n        const channelUsername = item.channel_username\n          ? `<a href=\"https://t.me/${item.channel_username}\" class=\"text-sm font-weight-bold mb-0\" target=\"_blank\">${item.channel_username}</a>`\n          : \"-\";\n        const row = {\n          id: i,\n          message: `<div class=\"text-sm\">${item.message}</div>`,\n          date:\n            '<div class=\"text-sm\">' +\n            this.convertDate(item.date).date +\n            \"<br />\" +\n            this.convertDate(item.date).time +\n            \"</div>\",\n          username: `${username}${firstName}${lastName}`,\n          channelUsername: channelUsername,\n        };\n        rows.push(row);\n        i += 1;\n      });\n      return rows;\n    },*/\n  },\n};\n</script>\n<style scoped>\n.table td {\n  white-space: normal !important;\n  padding: 3px 5px 3px 5px !important;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ScamMessagesTable.vue?vue&type=style&index=0&id=3288c2b4&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ScamMessagesTable.vue?vue&type=style&index=0&id=3288c2b4&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScamMessagesTable_vue_vue_type_style_index_0_id_3288c2b4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ScamMessagesTable.vue?vue&type=style&index=0&id=3288c2b4&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ScamMessagesTable.vue?vue&type=style&index=0&id=3288c2b4&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScamMessagesTable_vue_vue_type_style_index_0_id_3288c2b4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScamMessagesTable_vue_vue_type_style_index_0_id_3288c2b4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/modal/AddScamModal.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/modal/AddScamModal.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddScamModal_vue_vue_type_template_id_dc48c286__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddScamModal.vue?vue&type=template&id=dc48c286 */ "./resources/js/components/modal/AddScamModal.vue?vue&type=template&id=dc48c286");
/* harmony import */ var _AddScamModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddScamModal.vue?vue&type=script&lang=js */ "./resources/js/components/modal/AddScamModal.vue?vue&type=script&lang=js");
/* harmony import */ var d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AddScamModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AddScamModal_vue_vue_type_template_id_dc48c286__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/modal/AddScamModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/components/tables/ScamMessagesTable.vue":
/*!********************************************************************!*\
  !*** ./resources/js/views/components/tables/ScamMessagesTable.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScamMessagesTable_vue_vue_type_template_id_3288c2b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScamMessagesTable.vue?vue&type=template&id=3288c2b4&scoped=true */ "./resources/js/views/components/tables/ScamMessagesTable.vue?vue&type=template&id=3288c2b4&scoped=true");
/* harmony import */ var _ScamMessagesTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScamMessagesTable.vue?vue&type=script&lang=js */ "./resources/js/views/components/tables/ScamMessagesTable.vue?vue&type=script&lang=js");
/* harmony import */ var _ScamMessagesTable_vue_vue_type_style_index_0_id_3288c2b4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScamMessagesTable.vue?vue&type=style&index=0&id=3288c2b4&scoped=true&lang=css */ "./resources/js/views/components/tables/ScamMessagesTable.vue?vue&type=style&index=0&id=3288c2b4&scoped=true&lang=css");
/* harmony import */ var d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ScamMessagesTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ScamMessagesTable_vue_vue_type_template_id_3288c2b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-3288c2b4"],['__file',"resources/js/views/components/tables/ScamMessagesTable.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/scam/ScamModerator.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/scam/ScamModerator.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScamModerator_vue_vue_type_template_id_2347a896__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScamModerator.vue?vue&type=template&id=2347a896 */ "./resources/js/views/scam/ScamModerator.vue?vue&type=template&id=2347a896");
/* harmony import */ var _ScamModerator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScamModerator.vue?vue&type=script&lang=js */ "./resources/js/views/scam/ScamModerator.vue?vue&type=script&lang=js");
/* harmony import */ var d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ScamModerator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ScamModerator_vue_vue_type_template_id_2347a896__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/scam/ScamModerator.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/modal/AddScamModal.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/modal/AddScamModal.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddScamModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddScamModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddScamModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modal/AddScamModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/components/tables/ScamMessagesTable.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/components/tables/ScamMessagesTable.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScamMessagesTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScamMessagesTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ScamMessagesTable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ScamMessagesTable.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/scam/ScamModerator.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/views/scam/ScamModerator.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScamModerator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScamModerator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ScamModerator.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/scam/ScamModerator.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/modal/AddScamModal.vue?vue&type=template&id=dc48c286":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/modal/AddScamModal.vue?vue&type=template&id=dc48c286 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddScamModal_vue_vue_type_template_id_dc48c286__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddScamModal_vue_vue_type_template_id_dc48c286__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddScamModal.vue?vue&type=template&id=dc48c286 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modal/AddScamModal.vue?vue&type=template&id=dc48c286");


/***/ }),

/***/ "./resources/js/views/components/tables/ScamMessagesTable.vue?vue&type=template&id=3288c2b4&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/views/components/tables/ScamMessagesTable.vue?vue&type=template&id=3288c2b4&scoped=true ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScamMessagesTable_vue_vue_type_template_id_3288c2b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScamMessagesTable_vue_vue_type_template_id_3288c2b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ScamMessagesTable.vue?vue&type=template&id=3288c2b4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ScamMessagesTable.vue?vue&type=template&id=3288c2b4&scoped=true");


/***/ }),

/***/ "./resources/js/views/scam/ScamModerator.vue?vue&type=template&id=2347a896":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/scam/ScamModerator.vue?vue&type=template&id=2347a896 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScamModerator_vue_vue_type_template_id_2347a896__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScamModerator_vue_vue_type_template_id_2347a896__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ScamModerator.vue?vue&type=template&id=2347a896 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/scam/ScamModerator.vue?vue&type=template&id=2347a896");


/***/ }),

/***/ "./resources/js/views/components/tables/ScamMessagesTable.vue?vue&type=style&index=0&id=3288c2b4&scoped=true&lang=css":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/views/components/tables/ScamMessagesTable.vue?vue&type=style&index=0&id=3288c2b4&scoped=true&lang=css ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScamMessagesTable_vue_vue_type_style_index_0_id_3288c2b4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ScamMessagesTable.vue?vue&type=style&index=0&id=3288c2b4&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ScamMessagesTable.vue?vue&type=style&index=0&id=3288c2b4&scoped=true&lang=css");


/***/ })

}]);
//# sourceMappingURL=resources_js_views_scam_ScamModerator_vue.js.map