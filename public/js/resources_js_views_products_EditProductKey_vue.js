"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_products_EditProductKey_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudTextarea.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudTextarea.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "VsudTextarea",
  props: {
    id: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true,
      "default": ""
    },
    placeholder: {
      type: String,
      "default": "Your text here..."
    },
    rows: {
      type: Number,
      "default": 5
    }
  },
  emits: ['textareaValue']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "moderate-messages-table",
  components: {},
  props: {
    product: {
      type: Number,
      "default": null
    },
    title: {
      type: String,
      "default": "Сообщения Telegram"
    },
    withTags: {
      type: Boolean,
      "default": false
    }
  },
  setup: function setup(props) {
    var searchTerm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(""); // Search text
    // Fake data

    var data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      rows: []
    });
    var $loading = (0,vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1__.useLoading)();
    var loader;

    var submit = function submit() {
      loader = $loading.show({});
    };
    /**
     * Get server data request
     */


    var myRequest = function myRequest(keyword) {
      submit();
      axios.post("/api/get-messages-moderate/" + props.product, {
        filter: keyword,
        with_tags: props.withTags
      }).then(function (r) {
        //console.log(r.data);
        data.rows = r.data; //this.$emit("accountsReload");

        loader.hide();
      })["catch"](function (err) {
        loader.hide();
        console.log("Fetch error", err.response);
        var registerError = "Неизвестная ошибка работы live filter messages";
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
    }); // Get data on first rendering

    myRequest("");
    return {
      searchTerm: searchTerm,
      table: table
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/products/EditProductKey.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/products/EditProductKey.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_VsudInput_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/VsudInput.vue */ "./resources/js/components/VsudInput.vue");
/* harmony import */ var _components_VsudTextarea_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/VsudTextarea.vue */ "./resources/js/components/VsudTextarea.vue");
/* harmony import */ var _components_VsudButton_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/VsudButton.vue */ "./resources/js/components/VsudButton.vue");
/* harmony import */ var _assets_js_getProductData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/js/getProductData.js */ "./resources/js/assets/js/getProductData.js");
/* harmony import */ var _assets_js_getIndexes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/js/getIndexes.js */ "./resources/js/assets/js/getIndexes.js");
/* harmony import */ var _views_components_tables_MessagesTableModerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/components/tables/MessagesTableModerator */ "./resources/js/views/components/tables/MessagesTableModerator.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");





 //import PlaceHolderHorisontalCard from "@/Cards/PlaceHolderHorisontalCard.vue";
//import confirmModal from "@/components/modal/confirmModal.js";
//import { Modal } from "bootstrap";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "edit-product-key",
  components: {
    VsudInput: _components_VsudInput_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    VsudButton: _components_VsudButton_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VsudTextarea: _components_VsudTextarea_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    getProductData: _assets_js_getProductData_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    getIndexesByProductId: _assets_js_getIndexes_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    ModerateMessagesTable: _views_components_tables_MessagesTableModerator__WEBPACK_IMPORTED_MODULE_5__["default"]
    /*confirmModal,
    PlaceHolderHorisontalCard,*/

  },
  data: function data() {
    return {
      indexes: []
    };
  },
  setup: function setup() {
    var route = (0,vue_router__WEBPACK_IMPORTED_MODULE_7__.useRoute)();
    var productId = route.params.productId;
    var productIn = (0,vue__WEBPACK_IMPORTED_MODULE_6__.ref)([]);
    productIn.value = (0,_assets_js_getProductData_js__WEBPACK_IMPORTED_MODULE_3__["default"])(productId);
    var index = (0,vue__WEBPACK_IMPORTED_MODULE_6__.ref)([]);
    index.value = (0,_assets_js_getIndexes_js__WEBPACK_IMPORTED_MODULE_4__["default"])(productId);
    return {
      productId: productId,
      productIn: productIn,
      index: index
    };
  },
  methods: {
    sendData: function sendData() {
      var _this = this;

      axios.post("/api/edit-product-key", {
        product_id: this.productId,
        index: this.index.value
      }).then(function (r) {
        _this.indexes = _this.getIndexesFromStr(_this.index.value); //this.$router.push({ name: "Products" });
      })["catch"](function (err) {
        console.log(err.response);
        _this.registerError = "Ошибка сохранения Indexes";
        alert(_this.registerError);
      });
    },
    getIndexesFromStr: function getIndexesFromStr(str) {
      return str.split("\n").filter(function (element) {
        return element;
      });
    },
    showBlockModal: function showBlockModal() {
      var _this2 = this;

      this.openModalStatus = true;
      this.addModal.show();
      setTimeout(function () {
        _this2.openModalStatus = false;
      }, 500);
    },
    showAddBlockModal: function showAddBlockModal(id, type, name, date, text, buttons) {
      this.blockData.id = null;
      this.blockData.type = null;
      this.blockData.name = null;
      this.blockData.date = null;
      this.blockData.text = null;
      this.blockData.buttons = "Пример";
      this.blockData["do"] = "add";
      this.showBlockModal();
    },
    showEditBlockModal: function showEditBlockModal(id, type, name, date, text, buttons) {
      this.blockData.id = id;
      this.blockData.type = type;
      this.blockData.name = name;
      this.blockData.date = date;
      this.blockData.text = text;
      this.blockData.buttons = buttons;
      this.blockData["do"] = "edit";
      this.showBlockModal();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudTextarea.vue?vue&type=template&id=8c6dfb5e":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudTextarea.vue?vue&type=template&id=8c6dfb5e ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "form-group"
};
var _hoisted_2 = ["for"];
var _hoisted_3 = ["id", "rows", "value", "placeholder"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": $props.id
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 8
  /* PROPS */
  , _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    id: $props.id,
    "class": "form-control",
    rows: $props.rows,
    value: $props.value,
    placeholder: $props.placeholder,
    onBlur: _cache[0] || (_cache[0] = function ($event) {
      return _this.$emit('textareaValue', $event.target.value);
    })
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_3)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=template&id=12f55d13&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=template&id=12f55d13&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-12f55d13"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
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
  "class": "table-responsive px-3"
};
var _hoisted_9 = {
  "class": "table align-items-center justify-content-center mb-0"
};

var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7",
    style: {
      "width": "50%"
    }
  }, " Текст сообщения "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
  }, " Дата "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
  }, " Автор сообщения "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
  }, " OTC канал "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th")])], -1
  /* HOISTED */
  );
});

var _hoisted_11 = {
  "class": "text-sm"
};
var _hoisted_12 = {
  "class": "text-sm"
};
var _hoisted_13 = {
  key: 0
};
var _hoisted_14 = {
  key: 1
};

var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
  /* HOISTED */
  );
});

var _hoisted_16 = ["href"];
var _hoisted_17 = ["href"];
var _hoisted_18 = {
  key: 1
};

var _hoisted_19 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "align-middle"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-link text-secondary mb-0"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-ellipsis-v text-xs",
    "aria-hidden": "true"
  })])], -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
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
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.searchTerm]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.table.filteredList, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item,
      "class": "my-0"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.message), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [item.first_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.first_name), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.last_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.last_name), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_15, item.username ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 2,
      href: 'https://t.me/' + item.username,
      "class": "text-sm font-weight-bold mb-0",
      target: "_blank"
    }, " @" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.username), 9
    /* TEXT, PROPS */
    , _hoisted_16)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [item.channel_username ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 0,
      href: 'https://t.me/' + item.channel_username,
      "class": "text-sm font-weight-bold mb-0",
      target: "_blank"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.channel_username), 9
    /* TEXT, PROPS */
    , _hoisted_17)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_18, "-"))]), _hoisted_19]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/products/EditProductKey.vue?vue&type=template&id=f80286d4&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/products/EditProductKey.vue?vue&type=template&id=f80286d4&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-f80286d4"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "container-fluid my-3 py-3"
};
var _hoisted_2 = {
  "class": "row"
};
var _hoisted_3 = {
  "class": "col-lg-12 mb-lg-0 mb-4"
};
var _hoisted_4 = {
  "class": "card"
};
var _hoisted_5 = {
  "class": "card-header"
};
var _hoisted_6 = {
  "class": "card-body pt-0"
};
var _hoisted_7 = {
  "class": "row"
};
var _hoisted_8 = {
  "class": "col-12"
};
var _hoisted_9 = {
  "class": "row"
};
var _hoisted_10 = {
  "class": "col-12"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Ключевые фразы");

var _hoisted_12 = {
  "class": "row mt-auto position-sticky top-100 pb-2"
};

var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-9"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_14 = {
  "class": "col-3 d-flex"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Обновить ");

var _hoisted_16 = {
  "class": "row"
};
var _hoisted_17 = {
  "class": "col-12 pt-3"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vsud_textarea = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vsud-textarea");

  var _component_vsud_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vsud-button");

  var _component_moderate_messages_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("moderate-messages-table");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Настройки ключей парсинга проекта " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.productIn.value.name), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_textarea, {
    id: "product-keys",
    value: $setup.index.value,
    onTextareaValue: _cache[0] || (_cache[0] = function (v) {
      return $setup.index.value = v;
    }),
    placeholder: "key1\r\nkey2"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_11];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_button, {
    "class": "my-4 mb-2 ml-2",
    variant: "gradient",
    color: "success",
    "full-width": "",
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($options.sendData, ["prevent"])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_15];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ")])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_moderate_messages_table, {
    "product-id": $setup.productId,
    title: "Сообщения Telegram, не прикреплённые с проектам",
    key: $data.indexes
  }, null, 8
  /* PROPS */
  , ["product-id"]))])])]);
}

/***/ }),

/***/ "./resources/js/assets/js/getIndexes.js":
/*!**********************************************!*\
  !*** ./resources/js/assets/js/getIndexes.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getIndexesByProductId)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
//import { ref, onMounted, watch } from 'vue'

function getIndexesByProductId(product_id) {
  var indexes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]); //  const getUserRepositories = async () => {
  //    repositories.value = await fetchUserRepositories(user.value)
  //  }
  //const connectGetIndexes = (product_id) => axios.get("/sanctum/csrf-cookie").then((response) => {

  var connectGetIndexes = function connectGetIndexes(product_id) {
    return axios.get("/api/get-indexes/" + product_id, {}).then(function (r) {
      var str = '';
      r.data.forEach(function (element) {
        str += "".concat(element.field, "\n");
      });
      indexes.value = str;
    })["catch"](function (err) {
      console.log(err);
      var registerError = "Ошибка получеения индексов";
      alert(registerError);
    });
  }; //});


  connectGetIndexes(product_id);
  return indexes;
}

/***/ }),

/***/ "./resources/js/assets/js/getProductData.js":
/*!**************************************************!*\
  !*** ./resources/js/assets/js/getProductData.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getProductData)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
//import { ref, onMounted, watch } from 'vue'

function getProductData(productId) {
  var product = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]); //  const getUserRepositories = async () => {
  //    repositories.value = await fetchUserRepositories(user.value)
  //  }
  //console.log(1);
  //const connectGetProduct = () => axios.get("/sanctum/csrf-cookie").then((response) => {

  var connectGetProduct = function connectGetProduct() {
    return axios.get("/api/product-moderator/".concat(productId), {}).then(function (r) {
      product.value = r.data;
    })["catch"](function (err) {
      console.log(err);
      var registerError = "Ошибка получеения данных проекта";
      alert(registerError);
    });
  }; //});
  //onMounted(connectGetAllAccounts)


  connectGetProduct(); //watch(user, getUserRepositories)

  return product;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=style&index=0&id=12f55d13&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=style&index=0&id=12f55d13&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.table td[data-v-12f55d13] {\n  white-space: normal !important;\n  padding: 3px 5px 3px 5px !important;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/views/components/tables/MessagesTableModerator.vue"],"names":[],"mappings":";AA2MA;EACE,8BAA8B;EAC9B,mCAAmC;AACrC","sourcesContent":["<template>\n  <div class=\"card mb-4\">\n    <div class=\"card-header pb-0\">\n      <h5>{{ title }}</h5>\n    </div>\n    <div class=\"card-body px-0 pt-0 pb-2\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <label class=\"form-label pl-3\">Поиск по сообщениям</label>\n          <div class=\"input-group pl-3\">\n            <input\n              id=\"liveSearchReferers\"\n              name=\"liveSearchReferers\"\n              class=\"form-control\"\n              type=\"text\"\n              placeholder=\"Вводите ключевое слово\"\n              v-model=\"searchTerm\"\n            />\n          </div>\n        </div>\n      </div>\n      <div class=\"table-responsive px-3\">\n        <table class=\"table align-items-center justify-content-center mb-0\">\n          <thead>\n            <tr>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                \"\n                style=\"width: 50%\"\n              >\n                Текст сообщения\n              </th>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                  ps-2\n                \"\n              >\n                Дата\n              </th>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                  ps-2\n                \"\n              >\n                Автор сообщения\n              </th>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                  ps-2\n                \"\n              >\n                OTC канал\n              </th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr v-for=\"item in table.filteredList\" :key=\"item\" class=\"my-0\">\n              <td>\n                <div class=\"text-sm\">\n                  {{ item.message }}\n                </div>\n              </td>\n              <td>\n                <div class=\"text-sm\">\n                  {{ item.date }}\n                </div>\n              </td>\n              <td>\n                <span v-if=\"item.first_name\">{{ item.first_name }}</span>\n                <span v-if=\"item.last_name\">{{ item.last_name }}</span\n                ><br />\n                <a\n                  :href=\"'https://t.me/' + item.username\"\n                  class=\"text-sm font-weight-bold mb-0\"\n                  target=\"_blank\"\n                  v-if=\"item.username\"\n                >\n                  @{{ item.username }}\n                </a>\n              </td>\n              <td>\n                <a\n                  :href=\"'https://t.me/' + item.channel_username\"\n                  class=\"text-sm font-weight-bold mb-0\"\n                  target=\"_blank\"\n                  v-if=\"item.channel_username\"\n                >\n                  {{ item.channel_username }}\n                </a>\n                <span v-else>-</span>\n              </td>\n              <td class=\"align-middle\">\n                <button class=\"btn btn-link text-secondary mb-0\">\n                  <i class=\"fa fa-ellipsis-v text-xs\" aria-hidden=\"true\"></i>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { defineComponent, reactive, ref, computed, watch, inject } from \"vue\";\nimport { useLoading } from \"vue-loading-overlay\";\n\nexport default {\n  name: \"moderate-messages-table\",\n  components: {},\n  props: {\n    product: { type: Number, default: null },\n    title: {\n      type: String,\n      default: \"Сообщения Telegram\",\n    },\n    withTags: {\n      type: Boolean,\n      default: false,\n    },\n  },\n  setup(props) {\n    const searchTerm = ref(\"\"); // Search text\n    // Fake data\n    const data = reactive({\n      rows: [],\n    });\n    const $loading = useLoading();\n    let loader;\n    const submit = () => {\n      loader = $loading.show({});\n    };\n\n    /**\n     * Get server data request\n     */\n    const myRequest = (keyword) => {\n      submit();\n      axios\n        .post(\"/api/get-messages-moderate/\" + props.product, {\n          filter: keyword,\n          with_tags: props.withTags,\n        })\n        .then((r) => {\n          //console.log(r.data);\n          data.rows = r.data;\n          //this.$emit(\"accountsReload\");\n          loader.hide();\n        })\n        .catch((err) => {\n          loader.hide();\n          console.log(\"Fetch error\", err.response);\n          const registerError =\n            \"Неизвестная ошибка работы live filter messages\";\n          alert(registerError);\n        });\n    };\n\n    const table = reactive({\n      filteredList: computed(() => {\n        return data.rows;\n      }),\n      totalRecordCount: computed(() => {\n        return data.rows.length;\n      }),\n    });\n    let timeout = null;\n    watch(\n      () => searchTerm.value,\n      (val) => {\n        if (timeout) {\n          clearTimeout(timeout);\n        }\n        timeout = setTimeout(() => {\n          myRequest(val);\n        }, 500);\n      }\n    );\n    // Get data on first rendering\n    myRequest(\"\");\n\n    return {\n      searchTerm,\n      table,\n    };\n  },\n};\n</script>\n<style scoped>\n.table td {\n  white-space: normal !important;\n  padding: 3px 5px 3px 5px !important;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/products/EditProductKey.vue?vue&type=style&index=0&id=f80286d4&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/products/EditProductKey.vue?vue&type=style&index=0&id=f80286d4&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.dropdown-menu[data-v-f80286d4],\r\n.dropend .dropdown-menu[data-v-f80286d4] {\r\n  box-shadow: 0 8px 26px -4px rgb(20 20 20 / 15%),\r\n    0 8px 9px -5px rgb(20 20 20 / 6%);\r\n  cursor: pointer;\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/views/products/EditProductKey.vue"],"names":[],"mappings":";AAgJA;;EAEE;qCACmC;EACnC,eAAe;AACjB","sourcesContent":["<template>\r\n  <div class=\"container-fluid my-3 py-3\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 mb-lg-0 mb-4\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h5>Настройки ключей парсинга проекта {{ productIn.value.name }}</h5>\r\n          </div>\r\n          <div class=\"card-body pt-0\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <vsud-textarea\r\n                      id=\"product-keys\"\r\n                      :value=\"index.value\"\r\n                      @textarea-value=\"(v) => (index.value = v)\"\r\n                      placeholder=\"key1\r\nkey2\"\r\n                      >Ключевые фразы</vsud-textarea\r\n                    >\r\n                  </div>\r\n                </div>\r\n                <div class=\"row mt-auto position-sticky top-100 pb-2\">\r\n                  <div class=\"col-9\"></div>\r\n                  <div class=\"col-3 d-flex\">\r\n                    <vsud-button\r\n                      class=\"my-4 mb-2 ml-2\"\r\n                      variant=\"gradient\"\r\n                      color=\"success\"\r\n                      full-width\r\n                      @click.prevent=\"sendData\"\r\n                      >Обновить\r\n                    </vsud-button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-12 pt-3\">\r\n        <moderate-messages-table :product-id=\"productId\" title=\"Сообщения Telegram, не прикреплённые с проектам\" :key=\"indexes\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport VsudInput from \"@/components/VsudInput.vue\";\r\nimport VsudTextarea from \"@/components/VsudTextarea.vue\";\r\nimport VsudButton from \"@/components/VsudButton.vue\";\r\nimport getProductData from \"@/assets/js/getProductData.js\";\r\nimport getIndexesByProductId from \"@/assets/js/getIndexes.js\";\r\nimport ModerateMessagesTable from \"@/views/components/tables/MessagesTableModerator\";\r\n//import PlaceHolderHorisontalCard from \"@/Cards/PlaceHolderHorisontalCard.vue\";\r\n\r\n//import confirmModal from \"@/components/modal/confirmModal.js\";\r\n//import { Modal } from \"bootstrap\";\r\nimport { ref } from \"vue\";\r\nimport { useRoute } from \"vue-router\";\r\n\r\nexport default {\r\n  name: \"edit-product-key\",\r\n  components: {\r\n    VsudInput,\r\n    VsudButton,\r\n    VsudTextarea,\r\n    getProductData,\r\n    getIndexesByProductId,\r\n    ModerateMessagesTable,\r\n    /*confirmModal,\r\n    PlaceHolderHorisontalCard,*/\r\n  },\r\n  data() {\r\n    return {\r\n      indexes: [],\r\n    };\r\n  },\r\n\r\n  setup() {\r\n    const route = useRoute();\r\n    const productId = route.params.productId;\r\n    const productIn = ref([]);\r\n    productIn.value = getProductData(productId);\r\n    const index = ref([]);\r\n    index.value = getIndexesByProductId(productId);\r\n    return { productId, productIn, index };\r\n  },\r\n  methods: {\r\n    sendData() {\r\n      axios\r\n        .post(\"/api/edit-product-key\", {\r\n          product_id: this.productId,\r\n          index: this.index.value,\r\n        })\r\n        .then((r) => {\r\n          this.indexes = this.getIndexesFromStr(this.index.value);\r\n          //this.$router.push({ name: \"Products\" });\r\n        })\r\n        .catch((err) => {\r\n          console.log(err.response);\r\n          this.registerError = \"Ошибка сохранения Indexes\";\r\n          alert(this.registerError);\r\n        });\r\n    },\r\n    getIndexesFromStr(str) {\r\n      return str.split(\"\\n\").filter((element) => element);\r\n    },\r\n    showBlockModal() {\r\n      this.openModalStatus = true;\r\n      this.addModal.show();\r\n      setTimeout(() => {\r\n        this.openModalStatus = false;\r\n      }, 500);\r\n    },\r\n    showAddBlockModal(id, type, name, date, text, buttons) {\r\n      this.blockData.id = null;\r\n      this.blockData.type = null;\r\n      this.blockData.name = null;\r\n      this.blockData.date = null;\r\n      this.blockData.text = null;\r\n      this.blockData.buttons = \"Пример\";\r\n      this.blockData.do = \"add\";\r\n      this.showBlockModal();\r\n    },\r\n    showEditBlockModal(id, type, name, date, text, buttons) {\r\n      this.blockData.id = id;\r\n      this.blockData.type = type;\r\n      this.blockData.name = name;\r\n      this.blockData.date = date;\r\n      this.blockData.text = text;\r\n      this.blockData.buttons = buttons;\r\n      this.blockData.do = \"edit\";\r\n      this.showBlockModal();\r\n    },\r\n  },\r\n};\r\n</script>\r\n<style scoped>\r\n.dropdown-menu,\r\n.dropend .dropdown-menu {\r\n  box-shadow: 0 8px 26px -4px rgb(20 20 20 / 15%),\r\n    0 8px 9px -5px rgb(20 20 20 / 6%);\r\n  cursor: pointer;\r\n}\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=style&index=0&id=12f55d13&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=style&index=0&id=12f55d13&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MessagesTableModerator_vue_vue_type_style_index_0_id_12f55d13_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MessagesTableModerator.vue?vue&type=style&index=0&id=12f55d13&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=style&index=0&id=12f55d13&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MessagesTableModerator_vue_vue_type_style_index_0_id_12f55d13_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MessagesTableModerator_vue_vue_type_style_index_0_id_12f55d13_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/products/EditProductKey.vue?vue&type=style&index=0&id=f80286d4&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/products/EditProductKey.vue?vue&type=style&index=0&id=f80286d4&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditProductKey_vue_vue_type_style_index_0_id_f80286d4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditProductKey.vue?vue&type=style&index=0&id=f80286d4&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/products/EditProductKey.vue?vue&type=style&index=0&id=f80286d4&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditProductKey_vue_vue_type_style_index_0_id_f80286d4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditProductKey_vue_vue_type_style_index_0_id_f80286d4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/VsudTextarea.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/VsudTextarea.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VsudTextarea_vue_vue_type_template_id_8c6dfb5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VsudTextarea.vue?vue&type=template&id=8c6dfb5e */ "./resources/js/components/VsudTextarea.vue?vue&type=template&id=8c6dfb5e");
/* harmony import */ var _VsudTextarea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VsudTextarea.vue?vue&type=script&lang=js */ "./resources/js/components/VsudTextarea.vue?vue&type=script&lang=js");
/* harmony import */ var d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_VsudTextarea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_VsudTextarea_vue_vue_type_template_id_8c6dfb5e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/VsudTextarea.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/components/tables/MessagesTableModerator.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/views/components/tables/MessagesTableModerator.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MessagesTableModerator_vue_vue_type_template_id_12f55d13_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessagesTableModerator.vue?vue&type=template&id=12f55d13&scoped=true */ "./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=template&id=12f55d13&scoped=true");
/* harmony import */ var _MessagesTableModerator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessagesTableModerator.vue?vue&type=script&lang=js */ "./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=script&lang=js");
/* harmony import */ var _MessagesTableModerator_vue_vue_type_style_index_0_id_12f55d13_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessagesTableModerator.vue?vue&type=style&index=0&id=12f55d13&scoped=true&lang=css */ "./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=style&index=0&id=12f55d13&scoped=true&lang=css");
/* harmony import */ var d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_MessagesTableModerator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MessagesTableModerator_vue_vue_type_template_id_12f55d13_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-12f55d13"],['__file',"resources/js/views/components/tables/MessagesTableModerator.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/products/EditProductKey.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/products/EditProductKey.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditProductKey_vue_vue_type_template_id_f80286d4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditProductKey.vue?vue&type=template&id=f80286d4&scoped=true */ "./resources/js/views/products/EditProductKey.vue?vue&type=template&id=f80286d4&scoped=true");
/* harmony import */ var _EditProductKey_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProductKey.vue?vue&type=script&lang=js */ "./resources/js/views/products/EditProductKey.vue?vue&type=script&lang=js");
/* harmony import */ var _EditProductKey_vue_vue_type_style_index_0_id_f80286d4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditProductKey.vue?vue&type=style&index=0&id=f80286d4&scoped=true&lang=css */ "./resources/js/views/products/EditProductKey.vue?vue&type=style&index=0&id=f80286d4&scoped=true&lang=css");
/* harmony import */ var d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_EditProductKey_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_EditProductKey_vue_vue_type_template_id_f80286d4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-f80286d4"],['__file',"resources/js/views/products/EditProductKey.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/VsudTextarea.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/VsudTextarea.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VsudTextarea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VsudTextarea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VsudTextarea.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudTextarea.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MessagesTableModerator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MessagesTableModerator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MessagesTableModerator.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/products/EditProductKey.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/views/products/EditProductKey.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditProductKey_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditProductKey_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditProductKey.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/products/EditProductKey.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/VsudTextarea.vue?vue&type=template&id=8c6dfb5e":
/*!********************************************************************************!*\
  !*** ./resources/js/components/VsudTextarea.vue?vue&type=template&id=8c6dfb5e ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VsudTextarea_vue_vue_type_template_id_8c6dfb5e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VsudTextarea_vue_vue_type_template_id_8c6dfb5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VsudTextarea.vue?vue&type=template&id=8c6dfb5e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudTextarea.vue?vue&type=template&id=8c6dfb5e");


/***/ }),

/***/ "./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=template&id=12f55d13&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=template&id=12f55d13&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MessagesTableModerator_vue_vue_type_template_id_12f55d13_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MessagesTableModerator_vue_vue_type_template_id_12f55d13_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MessagesTableModerator.vue?vue&type=template&id=12f55d13&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=template&id=12f55d13&scoped=true");


/***/ }),

/***/ "./resources/js/views/products/EditProductKey.vue?vue&type=template&id=f80286d4&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/products/EditProductKey.vue?vue&type=template&id=f80286d4&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditProductKey_vue_vue_type_template_id_f80286d4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditProductKey_vue_vue_type_template_id_f80286d4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditProductKey.vue?vue&type=template&id=f80286d4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/products/EditProductKey.vue?vue&type=template&id=f80286d4&scoped=true");


/***/ }),

/***/ "./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=style&index=0&id=12f55d13&scoped=true&lang=css":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=style&index=0&id=12f55d13&scoped=true&lang=css ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MessagesTableModerator_vue_vue_type_style_index_0_id_12f55d13_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MessagesTableModerator.vue?vue&type=style&index=0&id=12f55d13&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=style&index=0&id=12f55d13&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/products/EditProductKey.vue?vue&type=style&index=0&id=f80286d4&scoped=true&lang=css":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/views/products/EditProductKey.vue?vue&type=style&index=0&id=f80286d4&scoped=true&lang=css ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditProductKey_vue_vue_type_style_index_0_id_f80286d4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditProductKey.vue?vue&type=style&index=0&id=f80286d4&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/products/EditProductKey.vue?vue&type=style&index=0&id=f80286d4&scoped=true&lang=css");


/***/ })

}]);
//# sourceMappingURL=resources_js_views_products_EditProductKey_vue.js.map