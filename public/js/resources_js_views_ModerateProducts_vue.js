"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_ModerateProducts_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ModerateProducts.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ModerateProducts.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ModerateProjectsTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ModerateProjectsTable */ "./resources/js/views/components/ModerateProjectsTable.vue");
/* harmony import */ var _components_ModerateMessagesTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ModerateMessagesTable */ "./resources/js/views/components/ModerateMessagesTable.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "moderate-products",
  components: {
    ModerateProjectsTable: _components_ModerateProjectsTable__WEBPACK_IMPORTED_MODULE_0__["default"],
    ModerateMessagesTable: _components_ModerateMessagesTable__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateMessagesTable.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateMessagesTable.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "moderate-messages-table",
  components: {},
  setup: function setup() {
    var searchTerm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(""); // Search text
    // Fake data

    var data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      rows: []
    });
    /**
     * Get server data request
     */

    var myRequest = function myRequest(keyword) {
      axios.get("/sanctum/csrf-cookie").then(function (response) {
        axios.post("/api/get-messages-moderate", {
          filter: keyword
        }).then(function (r) {
          console.log(r.data);
          data.rows = r.data; //this.$emit("accountsReload");
        })["catch"](function (err) {
          console.log("Fetch error", err.response);
          var registerError = "Неизвестная ошибка работы live filter messages";
          alert(registerError);
        });
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
    var count;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return searchTerm.value;
    }, function (val) {
      myRequest(val);
    }); // Get data on first rendering

    myRequest("");
    return {
      searchTerm: searchTerm,
      table: table
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_VsudProgressPlus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/VsudProgressPlus */ "./resources/js/components/VsudProgressPlus.vue");
/* harmony import */ var _components_Icon_Twitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Icon/Twitter */ "./resources/js/components/Icon/Twitter.vue");
/* harmony import */ var _components_Icon_Telegram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Icon/Telegram */ "./resources/js/components/Icon/Telegram.vue");
/* harmony import */ var _components_Icon_Discord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Icon/Discord */ "./resources/js/components/Icon/Discord.vue");
/* harmony import */ var _components_Icon_Medium__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Icon/Medium */ "./resources/js/components/Icon/Medium.vue");
/* harmony import */ var _components_Icon_Youtube__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Icon/Youtube */ "./resources/js/components/Icon/Youtube.vue");
/* harmony import */ var _Cards_PlaceHolderHorisontalCard_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Cards/PlaceHolderHorisontalCard.vue */ "./resources/js/Cards/PlaceHolderHorisontalCard.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "moderate-projects-table",
  components: {
    VsudProgressPlus: _components_VsudProgressPlus__WEBPACK_IMPORTED_MODULE_0__["default"],
    TwitterIcon: _components_Icon_Twitter__WEBPACK_IMPORTED_MODULE_1__["default"],
    TelegramIcon: _components_Icon_Telegram__WEBPACK_IMPORTED_MODULE_2__["default"],
    DiscordIcon: _components_Icon_Discord__WEBPACK_IMPORTED_MODULE_3__["default"],
    MediumIcon: _components_Icon_Medium__WEBPACK_IMPORTED_MODULE_4__["default"],
    YoutubeIcon: _components_Icon_Youtube__WEBPACK_IMPORTED_MODULE_5__["default"],
    FontAwesomeIcon: _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon,
    PlaceHolderHorisontalCard: _Cards_PlaceHolderHorisontalCard_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    is_liveSearch: {
      type: Boolean,
      "default": true
    },
    top: {
      type: Number,
      "default": 0
    }
  },
  setup: function setup(props) {
    var searchTerm = (0,vue__WEBPACK_IMPORTED_MODULE_7__.ref)(""); // Search text
    // Fake data

    var data = (0,vue__WEBPACK_IMPORTED_MODULE_7__.reactive)({
      rows: []
    });
    /**
     * Get server data request
     */

    var myRequest = function myRequest(keyword) {
      axios.get("/sanctum/csrf-cookie").then(function (response) {
        axios.post("/api/get-projects/" + props.top, {
          filter: keyword
        }).then(function (r) {
          console.log(r.data);
          data.rows = r.data; //this.$emit("accountsReload");
        })["catch"](function (err) {
          console.log("Fetch error", err.response);
          var registerError = "Неизвестная ошибка при полученнии списка проектов";
          alert(registerError);
        });
      });
    };

    var table = (0,vue__WEBPACK_IMPORTED_MODULE_7__.reactive)({
      list: (0,vue__WEBPACK_IMPORTED_MODULE_7__.computed)(function () {
        return data.rows;
      }),
      totalRecordCount: (0,vue__WEBPACK_IMPORTED_MODULE_7__.computed)(function () {
        return data.rows.length;
      })
    });

    if (props.is_liveSearch) {
      (0,vue__WEBPACK_IMPORTED_MODULE_7__.watch)(function () {
        return searchTerm.value;
      }, function (val) {
        myRequest(val);
      });
    } // Get data on first rendering


    myRequest("");
    console.log(table);
    return {
      searchTerm: searchTerm,
      table: table
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ModerateProducts.vue?vue&type=template&id=eaa01db4":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ModerateProducts.vue?vue&type=template&id=eaa01db4 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "row"
};
var _hoisted_3 = {
  "class": "col-12"
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "col-12"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_moderate_projects_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("moderate-projects-table");

  var _component_moderate_messages_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("moderate-messages-table");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_moderate_projects_table)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_moderate_messages_table)])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateMessagesTable.vue?vue&type=template&id=483b8345&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateMessagesTable.vue?vue&type=template&id=483b8345&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-483b8345"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "card mb-4"
};

var _hoisted_2 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-header pb-0"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Необработанные сообщения из Telegram каналов")], -1
  /* HOISTED */
  );
});

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
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "liveSearchReferers",
    name: "liveSearchReferers",
    "class": "form-control",
    type: "text",
    placeholder: "Вводите ключевые слова",
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=template&id=a9d8c052&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=template&id=a9d8c052&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-a9d8c052"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "mb-4 col-xl-12 col-md-6 mb-xl-0 pb-4"
};
var _hoisted_2 = {
  "class": "card mb-4"
};

var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-header pb-0"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Криптопроекты")], -1
  /* HOISTED */
  );
});

var _hoisted_4 = {
  "class": "card-body px-0 pt-0 pb-2"
};
var _hoisted_5 = {
  key: 0,
  "class": "row"
};
var _hoisted_6 = {
  "class": "col-6"
};

var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "form-label pl-3"
  }, "Поиск проекта", -1
  /* HOISTED */
  );
});

var _hoisted_8 = {
  "class": "input-group pl-3"
};
var _hoisted_9 = {
  "class": "table-responsive p-0"
};
var _hoisted_10 = {
  "class": "table align-items-center justify-content-center mb-0"
};

var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
  }, " Проект "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-center"
  }, " Рейтинг "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-center"
  }, " Пользовательский интерес "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-center"
  }, " Соцсети "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th")])], -1
  /* HOISTED */
  );
});

var _hoisted_12 = {
  "class": "d-flex px-2"
};
var _hoisted_13 = ["src"];
var _hoisted_14 = {
  "class": "my-auto d-flex"
};
var _hoisted_15 = {
  "class": "mb-0 text-sm"
};
var _hoisted_16 = ["href", "title"];
var _hoisted_17 = {
  key: 0,
  "class": "fas fa-link ml-2"
};
var _hoisted_18 = {
  "class": "align-middle text-center"
};
var _hoisted_19 = {
  "class": "d-flex align-items-center justify-content-center"
};
var _hoisted_20 = {
  "class": "me-2 text-xs font-weight-bold"
};
var _hoisted_21 = {
  "class": "align-middle text-center"
};
var _hoisted_22 = {
  "class": "text-sm font-weight-bold mb-0"
};
var _hoisted_23 = {
  "class": "align-middle text-center"
};
var _hoisted_24 = {
  "class": "inline-flex"
};
var _hoisted_25 = ["href"];
var _hoisted_26 = ["href"];
var _hoisted_27 = ["href"];
var _hoisted_28 = ["href"];
var _hoisted_29 = ["href"];
var _hoisted_30 = {
  "class": "align-middle"
};
var _hoisted_31 = ["id"];

var _hoisted_32 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-ellipsis-v text-xs",
    "aria-hidden": "true"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_33 = [_hoisted_32];
var _hoisted_34 = ["aria-labelledby"];

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Настроить");

var _hoisted_36 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-item border-radius-md",
    href: "javascript:;"
  }, "Изменить ключи")], -1
  /* HOISTED */
  );
});

var _hoisted_37 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-item border-radius-md",
    href: "javascript:;"
  }, "Удалить")], -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_place_holder_horisontal_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("place-holder-horisontal-card");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_vsud_progress_plus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vsud-progress-plus");

  var _component_twitter_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("twitter-icon");

  var _component_discord_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("discord-icon");

  var _component_youtube_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("youtube-icon");

  var _component_telegram_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("telegram-icon");

  var _component_medium_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("medium-icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'Add Product'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_place_holder_horisontal_card, {
        title: {
          text: 'Добавить проект',
          variant: 'h6'
        }
      })];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [$props.is_liveSearch ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "liveSearchReferers",
    name: "liveSearchReferers",
    "class": "form-control",
    type: "text",
    placeholder: "начните что-то писать...",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.searchTerm = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.searchTerm]])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.table.list, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [item.logo_url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
      key: 0,
      src: item.logo_url,
      "class": "avatar avatar-sm rounded-circle me-2",
      alt: "spotify"
    }, null, 8
    /* PROPS */
    , _hoisted_13)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name) + " ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: item.website_url,
      traget: "_blank",
      title: item.website_name
    }, [item.website_url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_17)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
    /* PROPS */
    , _hoisted_16)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.rating) + "%", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_progress_plus, {
      variant: "gradient",
      percentage: item.rating
    }, null, 8
    /* PROPS */
    , ["percentage"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.num_tg_users), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [item.twitter ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 0,
      "class": "text-xs font-weight-bold",
      target: "_blank",
      href: item.twitter
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_twitter_icon, {
      size: "18px"
    })], 8
    /* PROPS */
    , _hoisted_25)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.discord ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 1,
      "class": "text-xs font-weight-bold",
      target: "_blank",
      href: item.discord
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_discord_icon, {
      size: "18px",
      "class": "ml-2"
    })], 8
    /* PROPS */
    , _hoisted_26)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.youtube ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 2,
      "class": "text-xs font-weight-bold",
      target: "_blank",
      href: item.youtube
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_youtube_icon, {
      size: "18px",
      "class": "ml-2"
    })], 8
    /* PROPS */
    , _hoisted_27)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.telegram ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 3,
      "class": "text-xs font-weight-bold",
      target: "_blank",
      href: item.telegram
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_telegram_icon, {
      size: "18px",
      "class": "ml-2"
    })], 8
    /* PROPS */
    , _hoisted_28)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.medium ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 4,
      "class": "text-xs font-weight-bold",
      target: "_blank",
      href: item.medium
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_medium_icon, {
      size: "18px",
      "class": "ml-2"
    })], 8
    /* PROPS */
    , _hoisted_29)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_30, [$props.is_liveSearch ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "btn btn-link text-secondary mb-0",
      "data-bs-toggle": "dropdown",
      "aria-expanded": "true",
      id: 'project-dropdown' + item.id
    }, _hoisted_33, 8
    /* PROPS */
    , _hoisted_31)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
      "class": "dropdown-menu px-2 py-3 ms-sm-n4 ms-n5",
      "aria-labelledby": 'project-dropdown' + item.id,
      style: {}
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      "class": "dropdown-item border-radius-md",
      to: {
        name: 'Edit Product',
        params: {
          productId: item.id
        }
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_35];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"])]), _hoisted_36, _hoisted_37], 8
    /* PROPS */
    , _hoisted_34)])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateMessagesTable.vue?vue&type=style&index=0&id=483b8345&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateMessagesTable.vue?vue&type=style&index=0&id=483b8345&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.table td[data-v-483b8345] {\n  white-space: normal !important;\n  padding: 3px 5px 3px 5px !important;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/views/components/ModerateMessagesTable.vue"],"names":[],"mappings":";AAmLA;EACE,8BAA8B;EAC9B,mCAAmC;AACrC","sourcesContent":["<template>\n  <div class=\"card mb-4\">\n    <div class=\"card-header pb-0\">\n      <h5>Необработанные сообщения из Telegram каналов</h5>\n    </div>\n    <div class=\"card-body px-0 pt-0 pb-2\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <label class=\"form-label pl-3\">Поиск по сообщениям</label>\n          <div class=\"input-group pl-3\">\n            <input\n              id=\"liveSearchReferers\"\n              name=\"liveSearchReferers\"\n              class=\"form-control\"\n              type=\"text\"\n              placeholder=\"Вводите ключевые слова\"\n              v-model=\"searchTerm\"\n            />\n          </div>\n        </div>\n      </div>\n      <div class=\"table-responsive px-3\">\n        <table class=\"table align-items-center justify-content-center mb-0\">\n          <thead>\n            <tr>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                \"\n                style=\"width: 50%\"\n              >\n                Текст сообщения\n              </th>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                  ps-2\n                \"\n              >\n                Дата\n              </th>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                  ps-2\n                \"\n              >\n                Автор сообщения\n              </th>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                  ps-2\n                \"\n              >\n                OTC канал\n              </th>\n              <th>\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr v-for=\"item in table.filteredList\" :key=\"item\" class=\"my-0\">\n              <td>\n                <div class=\"text-sm\">\n                  {{ item.message }}\n                </div>\n              </td>\n              <td>\n                <div class=\"text-sm\">\n                  {{ item.date }}\n                </div>\n              </td>\n              <td>\n                 <span v-if=\"item.first_name\">{{item.first_name}}</span>\n                 <span v-if=\"item.last_name\">{{item.last_name}}</span><br>\n                <a\n                  :href=\"'https://t.me/' + item.username\"\n                  class=\"text-sm font-weight-bold mb-0\"\n                  target=\"_blank\"\n                  v-if=\"item.username\"\n                >\n                  @{{ item.username }}\n                </a>\n              </td>\n              <td>\n                <a\n                  :href=\"'https://t.me/' + item.channel_username\"\n                  class=\"text-sm font-weight-bold mb-0\"\n                  target=\"_blank\"\n                  v-if=\"item.channel_username\"\n                >\n                  {{ item.channel_username }}\n                </a>\n                <span v-else>-</span>\n              </td>\n              <td class=\"align-middle\">\n                <button class=\"btn btn-link text-secondary mb-0\">\n                  <i class=\"fa fa-ellipsis-v text-xs\" aria-hidden=\"true\"></i>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { defineComponent, reactive, ref, computed, watch, inject } from \"vue\";\n\nexport default {\n  name: \"moderate-messages-table\",\n  components: {},\n  setup() {\n    const searchTerm = ref(\"\"); // Search text\n    // Fake data\n    const data = reactive({\n      rows: [],\n    });\n\n    /**\n     * Get server data request\n     */\n    const myRequest = (keyword) => {\n      axios.get(\"/sanctum/csrf-cookie\").then((response) => {\n        axios\n          .post(\"/api/get-messages-moderate\", {\n            filter: keyword,\n          })\n          .then((r) => {\n            console.log(r.data);\n            data.rows = r.data;\n            //this.$emit(\"accountsReload\");\n          })\n          .catch((err) => {\n            console.log(\"Fetch error\", err.response);\n            const registerError =\n              \"Неизвестная ошибка работы live filter messages\";\n            alert(registerError);\n          });\n      });\n    };\n\n    const table = reactive({\n      filteredList: computed(() => {\n        return data.rows;\n      }),\n      totalRecordCount: computed(() => {\n        return data.rows.length;\n      }),\n    });\n    let count;\n    watch(\n      () => searchTerm.value,\n      (val) => {\n        myRequest(val);\n      }\n    );\n    // Get data on first rendering\n    myRequest(\"\");\n\n    return {\n      searchTerm,\n      table,\n    };\n  },\n};\n</script>\n<style scoped>\n.table td {\n  white-space: normal !important;\n  padding: 3px 5px 3px 5px !important; \n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.dropdown-menu[data-v-a9d8c052],\n.dropend .dropdown-menu[data-v-a9d8c052] {\n  box-shadow: 0 8px 26px -4px rgb(20 20 20 / 15%),\n    0 8px 9px -5px rgb(20 20 20 / 6%);\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/views/components/ModerateProjectsTable.vue"],"names":[],"mappings":";AAkTA;;EAEE;qCACmC;EACnC,eAAe;AACjB","sourcesContent":["<template>\n  <div class=\"mb-4 col-xl-12 col-md-6 mb-xl-0 pb-4\">\n    <router-link :to=\"{ name: 'Add Product' }\">\n      <place-holder-horisontal-card\n        :title=\"{ text: 'Добавить проект', variant: 'h6' }\"\n      />\n    </router-link>\n  </div>\n\n  <div class=\"card mb-4\">\n    <div class=\"card-header pb-0\">\n      <h6>Криптопроекты</h6>\n    </div>\n    <div class=\"card-body px-0 pt-0 pb-2\">\n      <div class=\"row\" v-if=\"is_liveSearch\">\n        <div class=\"col-6\">\n          <label class=\"form-label pl-3\">Поиск проекта</label>\n          <div class=\"input-group pl-3\">\n            <input\n              id=\"liveSearchReferers\"\n              name=\"liveSearchReferers\"\n              class=\"form-control\"\n              type=\"text\"\n              placeholder=\"начните что-то писать...\"\n              v-model=\"searchTerm\"\n            />\n          </div>\n        </div>\n      </div>\n\n      <div class=\"table-responsive p-0\">\n        <table class=\"table align-items-center justify-content-center mb-0\">\n          <thead>\n            <tr>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                \"\n              >\n                Проект\n              </th>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                  ps-2\n                  text-center\n                \"\n              >\n                Рейтинг\n              </th>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                  ps-2\n                  text-center\n                \"\n              >\n                Пользовательский интерес\n              </th>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                  ps-2\n                  text-center\n                \"\n              >\n                Соцсети\n              </th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr v-for=\"item in table.list\" :key=\"item\">\n              <td>\n                <div class=\"d-flex px-2\">\n                  <div>\n                    <img\n                      :src=\"item.logo_url\"\n                      class=\"avatar avatar-sm rounded-circle me-2\"\n                      alt=\"spotify\"\n                      v-if=\"item.logo_url\"\n                    />\n                  </div>\n                  <div class=\"my-auto d-flex\">\n                    <h6 class=\"mb-0 text-sm\">\n                      {{ item.name }}\n                      <a\n                        :href=\"item.website_url\"\n                        traget=\"_blank\"\n                        :title=\"item.website_name\"\n                        ><i class=\"fas fa-link ml-2\" v-if=\"item.website_url\"></i\n                      ></a>\n                    </h6>\n                  </div>\n                </div>\n              </td>\n              <td class=\"align-middle text-center\">\n                <div class=\"d-flex align-items-center justify-content-center\">\n                  <span class=\"me-2 text-xs font-weight-bold\"\n                    >{{ item.rating }}%</span\n                  >\n                  <div>\n                    <vsud-progress-plus\n                      variant=\"gradient\"\n                      :percentage=\"item.rating\"\n                    />\n                  </div>\n                </div>\n              </td>\n              <td class=\"align-middle text-center\">\n                <p class=\"text-sm font-weight-bold mb-0\">\n                  {{ item.num_tg_users }}\n                </p>\n              </td>\n              <td class=\"align-middle text-center\">\n                <div class=\"inline-flex\">\n                  <a\n                    class=\"text-xs font-weight-bold\"\n                    target=\"_blank\"\n                    :href=\"item.twitter\"\n                    v-if=\"item.twitter\"\n                  >\n                    <twitter-icon size=\"18px\"></twitter-icon>\n                  </a>\n                  <a\n                    class=\"text-xs font-weight-bold\"\n                    target=\"_blank\"\n                    :href=\"item.discord\"\n                    v-if=\"item.discord\"\n                  >\n                    <discord-icon size=\"18px\" class=\"ml-2\"></discord-icon>\n                  </a>\n                  <a\n                    class=\"text-xs font-weight-bold\"\n                    target=\"_blank\"\n                    :href=\"item.youtube\"\n                    v-if=\"item.youtube\"\n                  >\n                    <youtube-icon size=\"18px\" class=\"ml-2\"></youtube-icon>\n                  </a>\n                  <a\n                    class=\"text-xs font-weight-bold\"\n                    target=\"_blank\"\n                    :href=\"item.telegram\"\n                    v-if=\"item.telegram\"\n                  >\n                    <telegram-icon size=\"18px\" class=\"ml-2\"></telegram-icon>\n                  </a>\n                  <a\n                    class=\"text-xs font-weight-bold\"\n                    target=\"_blank\"\n                    :href=\"item.medium\"\n                    v-if=\"item.medium\"\n                  >\n                    <medium-icon size=\"18px\" class=\"ml-2\"></medium-icon>\n                  </a>\n                </div>\n              </td>\n              <td class=\"align-middle\">\n                <button\n                  class=\"btn btn-link text-secondary mb-0\"\n                  v-if=\"is_liveSearch\"\n                  data-bs-toggle=\"dropdown\"\n                  aria-expanded=\"true\"\n                  :id=\"'project-dropdown' + item.id\"\n                >\n                  <i class=\"fa fa-ellipsis-v text-xs\" aria-hidden=\"true\"></i>\n                </button>\n                <ul\n                  class=\"dropdown-menu px-2 py-3 ms-sm-n4 ms-n5\"\n                  :aria-labelledby=\"'project-dropdown' + item.id\"\n                  style=\"\"\n                >\n                  <li>\n                    <router-link\n                      class=\"dropdown-item border-radius-md\"\n                      :to=\"{\n                        name: 'Edit Product',\n                        params: { productId: item.id },\n                      }\"\n                      >Настроить</router-link\n                    >\n                  </li>\n                  <li>\n                    <a\n                      class=\"dropdown-item border-radius-md\"\n                      href=\"javascript:;\"\n                      >Изменить ключи</a\n                    >\n                  </li>\n                  <li>\n                    <a\n                      class=\"dropdown-item border-radius-md\"\n                      href=\"javascript:;\"\n                      >Удалить</a\n                    >\n                  </li>\n                </ul>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport VsudProgressPlus from \"../../components/VsudProgressPlus\";\nimport TwitterIcon from \"@/components/Icon/Twitter\";\nimport TelegramIcon from \"@/components/Icon/Telegram\";\nimport DiscordIcon from \"@/components/Icon/Discord\";\nimport MediumIcon from \"@/components/Icon/Medium\";\nimport YoutubeIcon from \"@/components/Icon/Youtube\";\nimport PlaceHolderHorisontalCard from \"@/Cards/PlaceHolderHorisontalCard.vue\";\n\nimport { reactive, ref, computed, watch } from \"vue\";\nimport { FontAwesomeIcon } from \"@fortawesome/vue-fontawesome\";\n\nexport default {\n  name: \"moderate-projects-table\",\n  components: {\n    VsudProgressPlus,\n    TwitterIcon,\n    TelegramIcon,\n    DiscordIcon,\n    MediumIcon,\n    YoutubeIcon,\n    FontAwesomeIcon,\n    PlaceHolderHorisontalCard,\n  },\n  props: {\n    is_liveSearch: {\n      type: Boolean,\n      default: true,\n    },\n    top: {\n      type: Number,\n      default: 0,\n    },\n  },\n  setup(props) {\n    const searchTerm = ref(\"\"); // Search text\n    // Fake data\n\n    const data = reactive({\n      rows: [],\n    });\n    /**\n     * Get server data request\n     */\n    const myRequest = (keyword) => {\n      axios.get(\"/sanctum/csrf-cookie\").then((response) => {\n        axios\n          .post(\"/api/get-projects/\" + props.top, {\n            filter: keyword,\n          })\n          .then((r) => {\n            console.log(r.data);\n            data.rows = r.data;\n            //this.$emit(\"accountsReload\");\n          })\n          .catch((err) => {\n            console.log(\"Fetch error\", err.response);\n            const registerError =\n              \"Неизвестная ошибка при полученнии списка проектов\";\n            alert(registerError);\n          });\n      });\n    };\n\n    const table = reactive({\n      list: computed(() => {\n        return data.rows;\n      }),\n      totalRecordCount: computed(() => {\n        return data.rows.length;\n      }),\n    });\n    if (props.is_liveSearch) {\n      watch(\n        () => searchTerm.value,\n        (val) => {\n          myRequest(val);\n        }\n      );\n    }\n    // Get data on first rendering\n    myRequest(\"\");\n    console.log(table);\n    return {\n      searchTerm,\n      table,\n    };\n  },\n};\n</script>\n<style scoped>\n.dropdown-menu,\n.dropend .dropdown-menu {\n  box-shadow: 0 8px 26px -4px rgb(20 20 20 / 15%),\n    0 8px 9px -5px rgb(20 20 20 / 6%);\n  cursor: pointer;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateMessagesTable.vue?vue&type=style&index=0&id=483b8345&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateMessagesTable.vue?vue&type=style&index=0&id=483b8345&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateMessagesTable_vue_vue_type_style_index_0_id_483b8345_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModerateMessagesTable.vue?vue&type=style&index=0&id=483b8345&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateMessagesTable.vue?vue&type=style&index=0&id=483b8345&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateMessagesTable_vue_vue_type_style_index_0_id_483b8345_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateMessagesTable_vue_vue_type_style_index_0_id_483b8345_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProjectsTable_vue_vue_type_style_index_0_id_a9d8c052_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProjectsTable_vue_vue_type_style_index_0_id_a9d8c052_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProjectsTable_vue_vue_type_style_index_0_id_a9d8c052_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/ModerateProducts.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/ModerateProducts.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModerateProducts_vue_vue_type_template_id_eaa01db4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModerateProducts.vue?vue&type=template&id=eaa01db4 */ "./resources/js/views/ModerateProducts.vue?vue&type=template&id=eaa01db4");
/* harmony import */ var _ModerateProducts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModerateProducts.vue?vue&type=script&lang=js */ "./resources/js/views/ModerateProducts.vue?vue&type=script&lang=js");
/* harmony import */ var d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ModerateProducts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ModerateProducts_vue_vue_type_template_id_eaa01db4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/ModerateProducts.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/components/ModerateMessagesTable.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/components/ModerateMessagesTable.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModerateMessagesTable_vue_vue_type_template_id_483b8345_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModerateMessagesTable.vue?vue&type=template&id=483b8345&scoped=true */ "./resources/js/views/components/ModerateMessagesTable.vue?vue&type=template&id=483b8345&scoped=true");
/* harmony import */ var _ModerateMessagesTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModerateMessagesTable.vue?vue&type=script&lang=js */ "./resources/js/views/components/ModerateMessagesTable.vue?vue&type=script&lang=js");
/* harmony import */ var _ModerateMessagesTable_vue_vue_type_style_index_0_id_483b8345_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModerateMessagesTable.vue?vue&type=style&index=0&id=483b8345&scoped=true&lang=css */ "./resources/js/views/components/ModerateMessagesTable.vue?vue&type=style&index=0&id=483b8345&scoped=true&lang=css");
/* harmony import */ var d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ModerateMessagesTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ModerateMessagesTable_vue_vue_type_template_id_483b8345_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-483b8345"],['__file',"resources/js/views/components/ModerateMessagesTable.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/components/ModerateProjectsTable.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/components/ModerateProjectsTable.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModerateProjectsTable_vue_vue_type_template_id_a9d8c052_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModerateProjectsTable.vue?vue&type=template&id=a9d8c052&scoped=true */ "./resources/js/views/components/ModerateProjectsTable.vue?vue&type=template&id=a9d8c052&scoped=true");
/* harmony import */ var _ModerateProjectsTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModerateProjectsTable.vue?vue&type=script&lang=js */ "./resources/js/views/components/ModerateProjectsTable.vue?vue&type=script&lang=js");
/* harmony import */ var _ModerateProjectsTable_vue_vue_type_style_index_0_id_a9d8c052_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css */ "./resources/js/views/components/ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css");
/* harmony import */ var d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ModerateProjectsTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ModerateProjectsTable_vue_vue_type_template_id_a9d8c052_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-a9d8c052"],['__file',"resources/js/views/components/ModerateProjectsTable.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/ModerateProducts.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/views/ModerateProducts.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProducts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProducts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModerateProducts.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ModerateProducts.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/components/ModerateMessagesTable.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/components/ModerateMessagesTable.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateMessagesTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateMessagesTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModerateMessagesTable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateMessagesTable.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/components/ModerateProjectsTable.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/components/ModerateProjectsTable.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProjectsTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProjectsTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModerateProjectsTable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/ModerateProducts.vue?vue&type=template&id=eaa01db4":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/ModerateProducts.vue?vue&type=template&id=eaa01db4 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProducts_vue_vue_type_template_id_eaa01db4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProducts_vue_vue_type_template_id_eaa01db4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModerateProducts.vue?vue&type=template&id=eaa01db4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ModerateProducts.vue?vue&type=template&id=eaa01db4");


/***/ }),

/***/ "./resources/js/views/components/ModerateMessagesTable.vue?vue&type=template&id=483b8345&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/components/ModerateMessagesTable.vue?vue&type=template&id=483b8345&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateMessagesTable_vue_vue_type_template_id_483b8345_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateMessagesTable_vue_vue_type_template_id_483b8345_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModerateMessagesTable.vue?vue&type=template&id=483b8345&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateMessagesTable.vue?vue&type=template&id=483b8345&scoped=true");


/***/ }),

/***/ "./resources/js/views/components/ModerateProjectsTable.vue?vue&type=template&id=a9d8c052&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/components/ModerateProjectsTable.vue?vue&type=template&id=a9d8c052&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProjectsTable_vue_vue_type_template_id_a9d8c052_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProjectsTable_vue_vue_type_template_id_a9d8c052_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModerateProjectsTable.vue?vue&type=template&id=a9d8c052&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=template&id=a9d8c052&scoped=true");


/***/ }),

/***/ "./resources/js/views/components/ModerateMessagesTable.vue?vue&type=style&index=0&id=483b8345&scoped=true&lang=css":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/views/components/ModerateMessagesTable.vue?vue&type=style&index=0&id=483b8345&scoped=true&lang=css ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateMessagesTable_vue_vue_type_style_index_0_id_483b8345_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModerateMessagesTable.vue?vue&type=style&index=0&id=483b8345&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateMessagesTable.vue?vue&type=style&index=0&id=483b8345&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/components/ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/views/components/ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProjectsTable_vue_vue_type_style_index_0_id_a9d8c052_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css");


/***/ })

}]);
//# sourceMappingURL=resources_js_views_ModerateProducts_vue.js.map