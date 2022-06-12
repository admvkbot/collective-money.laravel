(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_CryptoModerator_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/CryptoModerator.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/CryptoModerator.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ModerateProjectsTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ModerateProjectsTable */ "./resources/js/views/components/ModerateProjectsTable.vue");
/* harmony import */ var _components_ModerateMessagesTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ModerateMessagesTable */ "./resources/js/views/components/ModerateMessagesTable.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "crypto-moderator",
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

"use strict";
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

"use strict";
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
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "moderate-projects-table",
  components: {
    VsudProgressPlus: _components_VsudProgressPlus__WEBPACK_IMPORTED_MODULE_0__["default"],
    TwitterIcon: _components_Icon_Twitter__WEBPACK_IMPORTED_MODULE_1__["default"],
    TelegramIcon: _components_Icon_Telegram__WEBPACK_IMPORTED_MODULE_2__["default"],
    DiscordIcon: _components_Icon_Discord__WEBPACK_IMPORTED_MODULE_3__["default"],
    MediumIcon: _components_Icon_Medium__WEBPACK_IMPORTED_MODULE_4__["default"],
    YoutubeIcon: _components_Icon_Youtube__WEBPACK_IMPORTED_MODULE_5__["default"],
    FontAwesomeIcon: _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon
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
    var searchTerm = (0,vue__WEBPACK_IMPORTED_MODULE_6__.ref)(""); // Search text
    // Fake data

    var data = (0,vue__WEBPACK_IMPORTED_MODULE_6__.reactive)({
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

    var table = (0,vue__WEBPACK_IMPORTED_MODULE_6__.reactive)({
      list: (0,vue__WEBPACK_IMPORTED_MODULE_6__.computed)(function () {
        return data.rows;
      }),
      totalRecordCount: (0,vue__WEBPACK_IMPORTED_MODULE_6__.computed)(function () {
        return data.rows.length;
      })
    });

    if (props.is_liveSearch) {
      (0,vue__WEBPACK_IMPORTED_MODULE_6__.watch)(function () {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/CryptoModerator.vue?vue&type=template&id=5e4e7316":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/CryptoModerator.vue?vue&type=template&id=5e4e7316 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
var _hoisted_2 = {
  "class": "card-header pb-0"
};

var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Необработанные сообщения из Telegram каналов", -1
  /* HOISTED */
  );
});

var _hoisted_4 = {
  "class": "card-body px-0 pt-0 pb-2"
};
var _hoisted_5 = {
  "class": "row"
};
var _hoisted_6 = {
  "class": "col-6"
};

var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "form-label pl-3"
  }, "Поиск сообщений", -1
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

var _hoisted_12 = {
  "class": "text-sm"
};
var _hoisted_13 = {
  "class": "text-sm"
};
var _hoisted_14 = {
  key: 0
};
var _hoisted_15 = {
  key: 1
};

var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
  /* HOISTED */
  );
});

var _hoisted_17 = ["href"];
var _hoisted_18 = ["href"];
var _hoisted_19 = {
  key: 1
};

var _hoisted_20 = /*#__PURE__*/_withScopeId(function () {
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
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Показано " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.table.totalRecordCount), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "liveSearchReferers",
    name: "liveSearchReferers",
    "class": "form-control",
    type: "text",
    placeholder: "текст сообщения или пользователь ",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.searchTerm = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.searchTerm]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.table.filteredList, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.message), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [item.first_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.first_name), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.last_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.last_name), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_16, item.username ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 2,
      href: 'https://t.me/' + item.username,
      "class": "text-sm font-weight-bold mb-0",
      target: "_blank"
    }, " @" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.username), 9
    /* TEXT, PROPS */
    , _hoisted_17)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [item.channel_username ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 0,
      href: 'https://t.me/' + item.channel_username,
      "class": "text-sm font-weight-bold mb-0",
      target: "_blank"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.channel_username), 9
    /* TEXT, PROPS */
    , _hoisted_18)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_19, "-"))]), _hoisted_20]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=template&id=a9d8c052":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=template&id=a9d8c052 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: d:\\projects\\laravel\\collective-money\\resources\\js\\views\\components\\ModerateProjectsTable.vue: Unexpected token (73:56)\n\n\u001b[0m \u001b[90m 71 |\u001b[39m   \u001b[36mreturn\u001b[39m (_openBlock()\u001b[33m,\u001b[39m _createElementBlock(_Fragment\u001b[33m,\u001b[39m \u001b[36mnull\u001b[39m\u001b[33m,\u001b[39m [\u001b[0m\n\u001b[0m \u001b[90m 72 |\u001b[39m     _createElementVNode(\u001b[32m\"div\"\u001b[39m\u001b[33m,\u001b[39m _hoisted_1\u001b[33m,\u001b[39m [\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 73 |\u001b[39m       _createVNode(_component_router_link\u001b[33m,\u001b[39m { to\u001b[33m:\u001b[39m {name\u001b[33m:\u001b[39m } }\u001b[33m,\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                                         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 74 |\u001b[39m         \u001b[36mdefault\u001b[39m\u001b[33m:\u001b[39m _withCtx(() \u001b[33m=>\u001b[39m [\u001b[0m\n\u001b[0m \u001b[90m 75 |\u001b[39m           _createVNode(_component_place_holder_horisontal_card\u001b[33m,\u001b[39m { title\u001b[33m:\u001b[39m { text\u001b[33m:\u001b[39m \u001b[32m'Добавить проект'\u001b[39m\u001b[33m,\u001b[39m variant\u001b[33m:\u001b[39m \u001b[32m'h6'\u001b[39m } })\u001b[0m\n\u001b[0m \u001b[90m 76 |\u001b[39m         ])\u001b[33m,\u001b[39m\u001b[0m\n    at Parser._raise (d:\\projects\\laravel\\collective-money\\node_modules\\@babel\\parser\\lib\\index.js:476:17)\n    at Parser.raiseWithData (d:\\projects\\laravel\\collective-money\\node_modules\\@babel\\parser\\lib\\index.js:469:17)\n    at Parser.raise (d:\\projects\\laravel\\collective-money\\node_modules\\@babel\\parser\\lib\\index.js:430:17)\n    at Parser.unexpected (d:\\projects\\laravel\\collective-money\\node_modules\\@babel\\parser\\lib\\index.js:3789:16)\n    at Parser.parseExprAtom (d:\\projects\\laravel\\collective-money\\node_modules\\@babel\\parser\\lib\\index.js:12622:22)\n    at Parser.parseExprSubscripts (d:\\projects\\laravel\\collective-money\\node_modules\\@babel\\parser\\lib\\index.js:12149:23)\n    at Parser.parseUpdate (d:\\projects\\laravel\\collective-money\\node_modules\\@babel\\parser\\lib\\index.js:12129:21)\n    at Parser.parseMaybeUnary (d:\\projects\\laravel\\collective-money\\node_modules\\@babel\\parser\\lib\\index.js:12104:23)\n    at Parser.parseMaybeUnaryOrPrivate (d:\\projects\\laravel\\collective-money\\node_modules\\@babel\\parser\\lib\\index.js:11901:61)\n    at Parser.parseExprOps (d:\\projects\\laravel\\collective-money\\node_modules\\@babel\\parser\\lib\\index.js:11908:23)");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateMessagesTable.vue?vue&type=style&index=0&id=483b8345&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateMessagesTable.vue?vue&type=style&index=0&id=483b8345&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.table td[data-v-483b8345],\n.table th[data-v-483b8345] {\n  white-space: normal !important;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/views/components/ModerateMessagesTable.vue"],"names":[],"mappings":";AAoLA;;EAEE,8BAA8B;AAChC","sourcesContent":["<template>\n  <div class=\"card mb-4\">\n    <div class=\"card-header pb-0\">\n      <h5>Необработанные сообщения из Telegram каналов</h5>\n      <span>Показано {{ table.totalRecordCount }}</span>\n    </div>\n    <div class=\"card-body px-0 pt-0 pb-2\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <label class=\"form-label pl-3\">Поиск сообщений</label>\n          <div class=\"input-group pl-3\">\n            <input\n              id=\"liveSearchReferers\"\n              name=\"liveSearchReferers\"\n              class=\"form-control\"\n              type=\"text\"\n              placeholder=\"текст сообщения или пользователь \"\n              v-model=\"searchTerm\"\n            />\n          </div>\n        </div>\n      </div>\n      <div class=\"table-responsive p-0\">\n        <table class=\"table align-items-center justify-content-center mb-0\">\n          <thead>\n            <tr>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                \"\n                style=\"width: 50%\"\n              >\n                Текст сообщения\n              </th>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                  ps-2\n                \"\n              >\n                Дата\n              </th>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                  ps-2\n                \"\n              >\n                Автор сообщения\n              </th>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                  ps-2\n                \"\n              >\n                OTC канал\n              </th>\n              <th>\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr v-for=\"item in table.filteredList\" :key=\"item\">\n              <td>\n                <div class=\"text-sm\">\n                  {{ item.message }}\n                </div>\n              </td>\n              <td>\n                <div class=\"text-sm\">\n                  {{ item.date }}\n                </div>\n              </td>\n              <td>\n                 <span v-if=\"item.first_name\">{{item.first_name}}</span>\n                 <span v-if=\"item.last_name\">{{item.last_name}}</span><br>\n                <a\n                  :href=\"'https://t.me/' + item.username\"\n                  class=\"text-sm font-weight-bold mb-0\"\n                  target=\"_blank\"\n                  v-if=\"item.username\"\n                >\n                  @{{ item.username }}\n                </a>\n              </td>\n              <td>\n                <a\n                  :href=\"'https://t.me/' + item.channel_username\"\n                  class=\"text-sm font-weight-bold mb-0\"\n                  target=\"_blank\"\n                  v-if=\"item.channel_username\"\n                >\n                  {{ item.channel_username }}\n                </a>\n                <span v-else>-</span>\n              </td>\n              <td class=\"align-middle\">\n                <button class=\"btn btn-link text-secondary mb-0\">\n                  <i class=\"fa fa-ellipsis-v text-xs\" aria-hidden=\"true\"></i>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { defineComponent, reactive, ref, computed, watch, inject } from \"vue\";\n\nexport default {\n  name: \"moderate-messages-table\",\n  components: {},\n  setup() {\n    const searchTerm = ref(\"\"); // Search text\n    // Fake data\n    const data = reactive({\n      rows: [],\n    });\n\n    /**\n     * Get server data request\n     */\n    const myRequest = (keyword) => {\n      axios.get(\"/sanctum/csrf-cookie\").then((response) => {\n        axios\n          .post(\"/api/get-messages-moderate\", {\n            filter: keyword,\n          })\n          .then((r) => {\n            console.log(r.data);\n            data.rows = r.data;\n            //this.$emit(\"accountsReload\");\n          })\n          .catch((err) => {\n            console.log(\"Fetch error\", err.response);\n            const registerError =\n              \"Неизвестная ошибка работы live filter messages\";\n            alert(registerError);\n          });\n      });\n    };\n\n    const table = reactive({\n      filteredList: computed(() => {\n        return data.rows;\n      }),\n      totalRecordCount: computed(() => {\n        return data.rows.length;\n      }),\n    });\n    let count;\n    watch(\n      () => searchTerm.value,\n      (val) => {\n        myRequest(val);\n      }\n    );\n    // Get data on first rendering\n    myRequest(\"\");\n\n    return {\n      searchTerm,\n      table,\n    };\n  },\n};\n</script>\n<style scoped>\n.table td,\n.table th {\n  white-space: normal !important;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateMessagesTable.vue?vue&type=style&index=0&id=483b8345&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateMessagesTable.vue?vue&type=style&index=0&id=483b8345&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/js/views/CryptoModerator.vue":
/*!************************************************!*\
  !*** ./resources/js/views/CryptoModerator.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CryptoModerator_vue_vue_type_template_id_5e4e7316__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CryptoModerator.vue?vue&type=template&id=5e4e7316 */ "./resources/js/views/CryptoModerator.vue?vue&type=template&id=5e4e7316");
/* harmony import */ var _CryptoModerator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CryptoModerator.vue?vue&type=script&lang=js */ "./resources/js/views/CryptoModerator.vue?vue&type=script&lang=js");
/* harmony import */ var d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CryptoModerator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CryptoModerator_vue_vue_type_template_id_5e4e7316__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/CryptoModerator.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/components/ModerateMessagesTable.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/components/ModerateMessagesTable.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModerateProjectsTable_vue_vue_type_template_id_a9d8c052__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModerateProjectsTable.vue?vue&type=template&id=a9d8c052 */ "./resources/js/views/components/ModerateProjectsTable.vue?vue&type=template&id=a9d8c052");
/* harmony import */ var _ModerateProjectsTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModerateProjectsTable.vue?vue&type=script&lang=js */ "./resources/js/views/components/ModerateProjectsTable.vue?vue&type=script&lang=js");
/* harmony import */ var d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ModerateProjectsTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ModerateProjectsTable_vue_vue_type_template_id_a9d8c052__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/components/ModerateProjectsTable.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/CryptoModerator.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/views/CryptoModerator.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CryptoModerator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CryptoModerator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CryptoModerator.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/CryptoModerator.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/components/ModerateMessagesTable.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/components/ModerateMessagesTable.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProjectsTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProjectsTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModerateProjectsTable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/CryptoModerator.vue?vue&type=template&id=5e4e7316":
/*!******************************************************************************!*\
  !*** ./resources/js/views/CryptoModerator.vue?vue&type=template&id=5e4e7316 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CryptoModerator_vue_vue_type_template_id_5e4e7316__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CryptoModerator_vue_vue_type_template_id_5e4e7316__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CryptoModerator.vue?vue&type=template&id=5e4e7316 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/CryptoModerator.vue?vue&type=template&id=5e4e7316");


/***/ }),

/***/ "./resources/js/views/components/ModerateMessagesTable.vue?vue&type=template&id=483b8345&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/components/ModerateMessagesTable.vue?vue&type=template&id=483b8345&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateMessagesTable_vue_vue_type_template_id_483b8345_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateMessagesTable_vue_vue_type_template_id_483b8345_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModerateMessagesTable.vue?vue&type=template&id=483b8345&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateMessagesTable.vue?vue&type=template&id=483b8345&scoped=true");


/***/ }),

/***/ "./resources/js/views/components/ModerateProjectsTable.vue?vue&type=template&id=a9d8c052":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/components/ModerateProjectsTable.vue?vue&type=template&id=a9d8c052 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProjectsTable_vue_vue_type_template_id_a9d8c052__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModerateProjectsTable.vue?vue&type=template&id=a9d8c052 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=template&id=a9d8c052");


/***/ }),

/***/ "./resources/js/views/components/ModerateMessagesTable.vue?vue&type=style&index=0&id=483b8345&scoped=true&lang=css":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/views/components/ModerateMessagesTable.vue?vue&type=style&index=0&id=483b8345&scoped=true&lang=css ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateMessagesTable_vue_vue_type_style_index_0_id_483b8345_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModerateMessagesTable.vue?vue&type=style&index=0&id=483b8345&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateMessagesTable.vue?vue&type=style&index=0&id=483b8345&scoped=true&lang=css");


/***/ })

}]);
//# sourceMappingURL=resources_js_views_CryptoModerator_vue.js.map