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
/* harmony import */ var _assets_js_getProjectData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/js/getProjectData.js */ "./resources/js/assets/js/getProjectData.js");
/* harmony import */ var _assets_js_getIndexes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/js/getIndexes.js */ "./resources/js/assets/js/getIndexes.js");
/* harmony import */ var _Cards_PlaceHolderHorisontalCard_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Cards/PlaceHolderHorisontalCard.vue */ "./resources/js/Cards/PlaceHolderHorisontalCard.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");





 //import confirmModal from "@/components/modal/confirmModal.js";
//import { Modal } from "bootstrap";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "edit-product-key",
  components: {
    VsudInput: _components_VsudInput_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    VsudButton: _components_VsudButton_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VsudTextarea: _components_VsudTextarea_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    getProjectData: _assets_js_getProjectData_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    getIndexesByProjectId: _assets_js_getIndexes_js__WEBPACK_IMPORTED_MODULE_4__["default"]
    /*confirmModal,
    PlaceHolderHorisontalCard,*/

  },
  data: function data() {
    return {
      /*openModalStatus: false,
      addModal: null,*/
    };
  },
  setup: function setup() {
    var route = (0,vue_router__WEBPACK_IMPORTED_MODULE_7__.useRoute)();
    var projectId = route.params.productId;
    var types = (0,vue__WEBPACK_IMPORTED_MODULE_6__.ref)([]);
    types.value = getProjectTypes();
    var projectIn = (0,vue__WEBPACK_IMPORTED_MODULE_6__.ref)([]);
    projectIn.value = (0,_assets_js_getProjectData_js__WEBPACK_IMPORTED_MODULE_3__["default"])(projectId);
    var index = (0,vue__WEBPACK_IMPORTED_MODULE_6__.ref)([]);
    index.value = (0,_assets_js_getIndexes_js__WEBPACK_IMPORTED_MODULE_4__["default"])(projectId);
    var blocks = (0,vue__WEBPACK_IMPORTED_MODULE_6__.ref)([]);
    blocks.value = getProjectBlocks(projectId);
    return {
      projectId: projectId,
      types: types,
      projectIn: projectIn,
      index: index,
      blocks: blocks
    };
  },
  methods: {
    setCookie: function setCookie(name, value, days) {
      var expires = "";

      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }

      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookie: function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");

      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }

      return "";
    },
    eraseCookie: function eraseCookie(name) {
      document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    },
    sendData: function sendData() {
      var _this = this;

      axios.get("/sanctum/csrf-cookie").then(function (response) {
        axios.post("/api/edit-project/" + _this.projectId, {
          name: _this.projectIn.value.name,
          type: _this.projectIn.value.project_type_id,
          url: _this.projectIn.value.website_url,
          twitter: _this.projectIn.value.twitter,
          discord: _this.projectIn.value.discord,
          youtube: _this.projectIn.value.youtube,
          telegram: _this.projectIn.value.telegram,
          medium: _this.projectIn.value.medium,
          description: _this.projectIn.value.description
        }).then(function (r) {
          _this.$router.push({
            name: "Products"
          }); //this.$router.go()
          //this.$emit("socialsReload");

        })["catch"](function (err) {
          console.log(err.response);
          _this.registerError = "Ошибка сохранения проекта";
          alert(_this.registerError);
        });
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
    projectReload: function projectReload() {
      this.blocks.value = getProjectBlocks(this.projectId);
    },
    getBlockIcon: function getBlockIcon(id) {
      return this.blockTypes[id - 1].icon;
    },
    getBlockColor: function getBlockColor(id) {
      return this.blockTypes[id - 1].color;
    },
    setFullDateElement: function setFullDateElement(dig) {
      return dig < 10 ? "0".concat(dig) : dig;
    },
    getPrintDate: function getPrintDate(date) {
      var tmpDate = new Date(date);
      var day = this.setFullDateElement(tmpDate.getDate());
      var month = this.setFullDateElement(tmpDate.getMonth() + 1);
      var year = tmpDate.getFullYear();
      return "".concat(day, ".").concat(month, ".").concat(year);
    },
    confirm: function confirm(id, title, text) {
      this.confirmBlockDelete = confirmModal(id, title, text);
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
    },
    deleteBlock: function deleteBlock(id) {
      var _this3 = this;

      axios.get("/sanctum/csrf-cookie").then(function (response) {
        axios.get("/api/delete-block/" + id).then(function (r) {
          //this.$router.push({ name: "Products" });
          //this.$router.go()
          _this3.projectReload();
        })["catch"](function (err) {
          console.log(err.response);
          _this3.registerError = "Ошибка сохранения удаления блока timeline";
          alert(_this3.registerError);
        });
      });
    }
  },
  computed: {
    tokenC: function tokenC() {
      this.setCookie("XSRF-TOKEN", "888888", 1);
      return this.token;
    }
    /*projectType(value) {
      this.project.type = value ? value : this.projectIn.value.project_type_id;
      console.log(1);
      console.log(this.project.type);
      return this.project.type;
    },*/

  },
  watch: {
    confirmBlockDelete: function confirmBlockDelete(newQuestion, oldQuestion) {
      if (newQuestion) {
        this.deleteBlock(newQuestion);
      }
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

var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-header"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Настройки парсинга проекта")], -1
  /* HOISTED */
  );
});

var _hoisted_6 = {
  "class": "card-body pt-0"
};
var _hoisted_7 = {
  "class": "row"
};
var _hoisted_8 = {
  "class": "col-6"
};
var _hoisted_9 = {
  "class": "row"
};
var _hoisted_10 = {
  "class": "col-3"
};
var _hoisted_11 = ["src"];

var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-9"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    action: "/file-upload",
    "class": "form-control dropzone",
    id: "dropzone"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "fallback"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    name: "file",
    type: "file",
    multiple: ""
  })])])], -1
  /* HOISTED */
  );
});

var _hoisted_13 = {
  "class": "row"
};
var _hoisted_14 = {
  "class": "col-12"
};

var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "form-label"
  }, "Название", -1
  /* HOISTED */
  );
});

var _hoisted_16 = {
  "class": "row"
};
var _hoisted_17 = {
  "class": "col-12"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Ключевые фразы");

var _hoisted_19 = {
  "class": "row"
};
var _hoisted_20 = {
  "class": "col-12"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Комментарий к проекту");

var _hoisted_22 = {
  "class": "row"
};
var _hoisted_23 = {
  "class": "col-12 pb-3"
};

var _hoisted_24 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "form-label"
  }, "Тип проекта", -1
  /* HOISTED */
  );
});

var _hoisted_25 = ["value"];
var _hoisted_26 = {
  "class": "row"
};
var _hoisted_27 = {
  "class": "col-12"
};

var _hoisted_28 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "form-label"
  }, "Официальный вебсайт", -1
  /* HOISTED */
  );
});

var _hoisted_29 = {
  "class": "row"
};
var _hoisted_30 = {
  "class": "col-12"
};
var _hoisted_31 = {
  "class": "form-label d-flex"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Twitter");

var _hoisted_33 = {
  "class": "row"
};
var _hoisted_34 = {
  "class": "col-12"
};
var _hoisted_35 = {
  "class": "form-label d-flex"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Discord");

var _hoisted_37 = {
  "class": "row"
};
var _hoisted_38 = {
  "class": "col-12"
};
var _hoisted_39 = {
  "class": "form-label d-flex"
};

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("YouTube");

var _hoisted_41 = {
  "class": "row"
};
var _hoisted_42 = {
  "class": "col-12"
};
var _hoisted_43 = {
  "class": "form-label d-flex"
};

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Telegram");

var _hoisted_45 = {
  "class": "row"
};
var _hoisted_46 = {
  "class": "col-12"
};
var _hoisted_47 = {
  "class": "form-label d-flex"
};

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Medium");

var _hoisted_49 = {
  "class": "row mt-auto position-sticky top-100 pb-2"
};
var _hoisted_50 = {
  "class": "col-12 d-flex"
};

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Назад ");

var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Сохранить ");

var _hoisted_53 = {
  "class": "col-lg-6 mt-4 mt-lg-0"
};
var _hoisted_54 = {
  "class": "card bg-gradient-dark"
};
var _hoisted_55 = {
  "class": "card-header bg-transparent pb-0"
};
var _hoisted_56 = {
  "class": "mb-4 col-xl-12 col-md-6 mb-xl-0 pb-4"
};

var _hoisted_57 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
    "class": "text-white"
  }, " Настройка стадий развития проекта ", -1
  /* HOISTED */
  );
});

var _hoisted_58 = {
  "class": "card-body p-3"
};
var _hoisted_59 = {
  "class": "timeline timeline-one-side",
  "data-timeline-axis-style": "dashed"
};
var _hoisted_60 = {
  key: 0
};
var _hoisted_61 = {
  "class": "timeline-step bg-dark"
};
var _hoisted_62 = {
  "class": "timeline-content"
};
var _hoisted_63 = {
  "class": "text-white text-sm font-weight-bold mb-0"
};
var _hoisted_64 = {
  "class": "float-right"
};
var _hoisted_65 = ["id"];

var _hoisted_66 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-ellipsis-v text-xs",
    "aria-hidden": "true"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_67 = [_hoisted_66];
var _hoisted_68 = ["aria-labelledby"];
var _hoisted_69 = ["onClick"];
var _hoisted_70 = ["onClick"];
var _hoisted_71 = {
  "class": "text-white text-xs mt-1 mb-0"
};
var _hoisted_72 = {
  "class": "text-secondary text-sm mt-3 mb-2"
};
var _hoisted_73 = {
  "class": "timeline-block mb-3"
};

var _hoisted_74 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "timeline-step bg-dark"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-question text-secondary"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_75 = {
  "class": "timeline-content"
};

var _hoisted_76 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
    "class": "text-white text-sm font-weight-bold mb-0"
  }, " Стадии проекта не описаны ", -1
  /* HOISTED */
  );
});

var _hoisted_77 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-secondary font-weight-bold text-xs mt-1 mb-0"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_78 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-secondary text-sm mt-3 mb-2"
  }, " Отсутствует описание стадий развития проекта. ", -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vsud_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vsud-input");

  var _component_vsud_textarea = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vsud-textarea");

  var _component_twitter_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("twitter-icon");

  var _component_discord_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("discord-icon");

  var _component_youtube_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("youtube-icon");

  var _component_telegram_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("telegram-icon");

  var _component_medium_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("medium-icon");

  var _component_vsud_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vsud-button");

  var _component_place_holder_horisontal_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("place-holder-horisontal-card");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $setup.projectIn.value.logo_url,
    "class": "m-2"
  }, null, 8
  /* PROPS */
  , _hoisted_11)]), _hoisted_12]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "project-name",
    type: "text",
    placeholder: "Crypto Whitelist Pro",
    "aria-label": "Name",
    isRequired: true,
    active: true,
    value: $setup.projectIn.value.name,
    disabled: false,
    onInputValue: _cache[0] || (_cache[0] = function (v) {
      return $setup.projectIn.value.name = v;
    })
  }, null, 8
  /* PROPS */
  , ["value"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_textarea, {
    id: "project-keys",
    value: $setup.index.value,
    onTextareaValue: _cache[1] || (_cache[1] = function (v) {
      return $setup.index.value = v;
    }),
    placeholder: "key1\r\nkey2"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_18];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_textarea, {
    id: "project-description",
    placeholder: "Любой текст",
    value: $setup.projectIn.value.description,
    onTextareaValue: _cache[2] || (_cache[2] = function (v) {
      return $setup.projectIn.value.description = v;
    }),
    rows: "7"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_21];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["value"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control",
    name: "choices-type-button",
    id: "choices-type",
    placeholder: "Выберите тип проекта",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.projectIn.value.project_type_id = $event;
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.types.value, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.id,
      key: item.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 9
    /* TEXT, PROPS */
    , _hoisted_25);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.projectIn.value.project_type_id]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "project-site-url",
    type: "text",
    placeholder: "https://project.website/",
    "aria-label": "project-site-url",
    isRequired: false,
    active: true,
    value: $setup.projectIn.value.website_url,
    onInputValue: _cache[4] || (_cache[4] = function (v) {
      return $setup.projectIn.value.website_url = v;
    }),
    disabled: false
  }, null, 8
  /* PROPS */
  , ["value"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_twitter_icon, {
    "class": "mt-1 mr-1"
  }), _hoisted_32]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "project-twitter",
    type: "text",
    placeholder: "https://twitter.com/xxxx",
    "aria-label": "project-twitter",
    isRequired: false,
    active: true,
    value: $setup.projectIn.value.twitter,
    onInputValue: _cache[5] || (_cache[5] = function (v) {
      return $setup.projectIn.value.twitter = v;
    }),
    disabled: false
  }, null, 8
  /* PROPS */
  , ["value"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_discord_icon, {
    "class": "mt-1 mr-1"
  }), _hoisted_36]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "project-discord",
    type: "text",
    placeholder: "https://discord.com/user/xxxx",
    "aria-label": "project-discord",
    isRequired: false,
    active: true,
    value: $setup.projectIn.value.discord,
    onInputValue: _cache[6] || (_cache[6] = function (v) {
      return $setup.projectIn.value.discord = v;
    }),
    disabled: false
  }, null, 8
  /* PROPS */
  , ["value"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_youtube_icon, {
    "class": "mt-1 mr-1"
  }), _hoisted_40]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "project-youtube",
    type: "text",
    placeholder: "https://youtube.com/channel/xxxx",
    "aria-label": "project-youtube",
    isRequired: false,
    active: true,
    value: $setup.projectIn.value.youtube,
    onInputValue: _cache[7] || (_cache[7] = function (v) {
      return $setup.projectIn.value.youtube = v;
    }),
    disabled: false
  }, null, 8
  /* PROPS */
  , ["value"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_telegram_icon, {
    "class": "mt-1 mr-1"
  }), _hoisted_44]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "project-telegram",
    type: "text",
    placeholder: "https://t.me/xxxx",
    "aria-label": "project-telegram",
    isRequired: false,
    active: true,
    value: $setup.projectIn.value.telegram,
    onInputValue: _cache[8] || (_cache[8] = function (v) {
      return $setup.projectIn.value.telegram = v;
    }),
    disabled: false
  }, null, 8
  /* PROPS */
  , ["value"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_medium_icon, {
    "class": "mt-1 mr-1"
  }), _hoisted_48]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "project-medium",
    type: "text",
    placeholder: "https://medium.com/@xxxx",
    "aria-label": "project-medium",
    isRequired: false,
    active: true,
    value: $setup.projectIn.value.medium,
    onInputValue: _cache[9] || (_cache[9] = function (v) {
      return $setup.projectIn.value.medium = v;
    }),
    disabled: false
  }, null, 8
  /* PROPS */
  , ["value"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_button, {
    "class": "my-4 mb-2 mr-2",
    variant: "outline",
    color: "active",
    "full-width": "",
    onClick: _cache[10] || (_cache[10] = function ($event) {
      return _ctx.$router.go(-1);
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_51];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_button, {
    "class": "my-4 mb-2 ml-2",
    variant: "gradient",
    color: "success",
    "full-width": "",
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($options.sendData, ["prevent"])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_52];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:;",
    onClick: _cache[11] || (_cache[11] = function () {
      return $options.showAddBlockModal && $options.showAddBlockModal.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_place_holder_horisontal_card, {
    title: {
      text: 'Добавить блок описания',
      variant: 'h6'
    }
  })])]), _hoisted_57]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [$setup.blocks.value.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_60, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.blocks.value, function (block) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "timeline-block mb-3",
      key: block.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.getBlockIcon(block.stage) + ' text-' + $options.getBlockColor(block.stage))
    }, null, 2
    /* CLASS */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(block.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-link text-secondary",
      "data-bs-toggle": "dropdown",
      "aria-expanded": "true",
      id: 'project-dropdown' + block.id
    }, _hoisted_67, 8
    /* PROPS */
    , _hoisted_65), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
      "class": "dropdown-menu px-2 py-3 ms-sm-n4 ms-n5",
      "aria-labelledby": 'timeline-block-dropdown' + block.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      "class": "dropdown-item border-radius-md",
      href: "javascript:;",
      onClick: function onClick($event) {
        return $options.showEditBlockModal(block.id, block.stage, block.name, block.date, block.description, block.buttons);
      }
    }, "Изменить", 8
    /* PROPS */
    , _hoisted_69)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      "class": "dropdown-item border-radius-md",
      href: "javascript:;",
      onClick: function onClick($event) {
        return $options.confirm(block.id, 'Удалить блок timeline?', 'Удаление этапа развития проекта');
      }
    }, "Удалить", 8
    /* PROPS */
    , _hoisted_70)])], 8
    /* PROPS */
    , _hoisted_68)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getPrintDate(block.date)), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(block.description), 1
    /* TEXT */
    ), block.button1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: 0,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["badge badge-sm", 'bg-gradient-' + _ctx.blockTypes[block.stage - 1].color])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(block.button1), 3
    /* TEXT, CLASS */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), block.button2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: 1,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["badge badge-sm ml-1", 'bg-gradient-' + _ctx.blockTypes[block.stage - 1].color])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(block.button2), 3
    /* TEXT, CLASS */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), block.button3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: 2,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["badge badge-sm ml-1", 'bg-gradient-' + _ctx.blockTypes[block.stage - 1].color])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(block.button3), 3
    /* TEXT, CLASS */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), block.button4 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: 3,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["badge badge-sm ml-1", 'bg-gradient-' + _ctx.blockTypes[block.stage - 1].color])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(block.button4), 3
    /* TEXT, CLASS */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), block.button5 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: 4,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["badge badge-sm ml-1", 'bg-gradient-' + _ctx.blockTypes[block.stage - 1].color])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(block.button5), 3
    /* TEXT, CLASS */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" far fa-baby-carriage "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [_hoisted_74, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [_hoisted_76, _hoisted_77, _hoisted_78, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "badge badge-sm bg-gradient-secondary",
    onClick: _cache[12] || (_cache[12] = function () {
      return $options.showAddBlockModal && $options.showAddBlockModal.apply($options, arguments);
    })
  }, " Настроить timeline проекта ")])])], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  ))])])])])])])])])])]);
}

/***/ }),

/***/ "./resources/js/assets/js/getIndexes.js":
/*!**********************************************!*\
  !*** ./resources/js/assets/js/getIndexes.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getIndexesByProjectId)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
//import { ref, onMounted, watch } from 'vue'

function getIndexesByProjectId(project_id) {
  var indexes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]); //  const getUserRepositories = async () => {
  //    repositories.value = await fetchUserRepositories(user.value)
  //  }
  //const connectGetIndexes = (project_id) => axios.get("/sanctum/csrf-cookie").then((response) => {

  var connectGetIndexes = function connectGetIndexes(project_id) {
    return axios.get("/api/get-indexes/" + project_id, {}).then(function (r) {
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


  connectGetIndexes(project_id);
  return indexes;
}

/***/ }),

/***/ "./resources/js/assets/js/getProjectData.js":
/*!**************************************************!*\
  !*** ./resources/js/assets/js/getProjectData.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getProjectData)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
//import { ref, onMounted, watch } from 'vue'

function getProjectData(projectId) {
  var project = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]); //  const getUserRepositories = async () => {
  //    repositories.value = await fetchUserRepositories(user.value)
  //  }
  //console.log(1);
  //const connectGetProject = () => axios.get("/sanctum/csrf-cookie").then((response) => {

  var connectGetProject = function connectGetProject() {
    return axios.get("/api/get-project/".concat(projectId), {}).then(function (r) {
      project.value = r.data;
    })["catch"](function (err) {
      console.log(err);
      var registerError = "Ошибка получеения данных проекта";
      alert(registerError);
    });
  }; //});
  //onMounted(connectGetAllAccounts)


  connectGetProject(); //watch(user, getUserRepositories)

  return project;
}

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
___CSS_LOADER_EXPORT___.push([module.id, "\n.dropdown-menu[data-v-f80286d4],\r\n.dropend .dropdown-menu[data-v-f80286d4] {\r\n  box-shadow: 0 8px 26px -4px rgb(20 20 20 / 15%),\r\n    0 8px 9px -5px rgb(20 20 20 / 6%);\r\n  cursor: pointer;\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/views/products/EditProductKey.vue"],"names":[],"mappings":";AAklBA;;EAEE;qCACmC;EACnC,eAAe;AACjB","sourcesContent":["<template>\r\n  <div class=\"container-fluid my-3 py-3\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 mb-lg-0 mb-4\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h5>Настройки парсинга проекта</h5>\r\n          </div>\r\n          <div class=\"card-body pt-0\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-3\">\r\n                    <img :src=\"projectIn.value.logo_url\" class=\"m-2\" />\r\n                  </div>\r\n                  <div class=\"col-9\">\r\n                    <form\r\n                      action=\"/file-upload\"\r\n                      class=\"form-control dropzone\"\r\n                      id=\"dropzone\"\r\n                    >\r\n                      <div class=\"fallback\">\r\n                        <input name=\"file\" type=\"file\" multiple />\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <label class=\"form-label\">Название</label>\r\n                    <vsud-input\r\n                      id=\"project-name\"\r\n                      type=\"text\"\r\n                      placeholder=\"Crypto Whitelist Pro\"\r\n                      aria-label=\"Name\"\r\n                      :isRequired=\"true\"\r\n                      :active=\"true\"\r\n                      :value=\"projectIn.value.name\"\r\n                      :disabled=\"false\"\r\n                      @input-value=\"(v) => (projectIn.value.name = v)\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <vsud-textarea\r\n                      id=\"project-keys\"\r\n                      :value=\"index.value\"\r\n                      @textarea-value=\"(v) => (index.value = v)\"\r\n                      placeholder=\"key1\r\nkey2\"\r\n                      >Ключевые фразы</vsud-textarea\r\n                    >\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <vsud-textarea\r\n                      id=\"project-description\"\r\n                      placeholder=\"Любой текст\"\r\n                      :value=\"projectIn.value.description\"\r\n                      @textarea-value=\"(v) => (projectIn.value.description = v)\"\r\n                      rows=\"7\"\r\n                      >Комментарий к проекту</vsud-textarea\r\n                    >\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 pb-3\">\r\n                    <label class=\"form-label\">Тип проекта</label>\r\n                    <select\r\n                      class=\"form-control\"\r\n                      name=\"choices-type-button\"\r\n                      id=\"choices-type\"\r\n                      placeholder=\"Выберите тип проекта\"\r\n                      v-model=\"projectIn.value.project_type_id\"\r\n                    >\r\n                      <option\r\n                        v-for=\"item in types.value\"\r\n                        :value=\"item.id\"\r\n                        :key=\"item.id\"\r\n                      >\r\n                        {{ item.name }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <label class=\"form-label\">Официальный вебсайт</label>\r\n                    <vsud-input\r\n                      id=\"project-site-url\"\r\n                      type=\"text\"\r\n                      placeholder=\"https://project.website/\"\r\n                      aria-label=\"project-site-url\"\r\n                      :isRequired=\"false\"\r\n                      :active=\"true\"\r\n                      :value=\"projectIn.value.website_url\"\r\n                      @input-value=\"(v) => (projectIn.value.website_url = v)\"\r\n                      :disabled=\"false\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <label class=\"form-label d-flex\"\r\n                      ><twitter-icon class=\"mt-1 mr-1\" />Twitter</label\r\n                    >\r\n                    <vsud-input\r\n                      id=\"project-twitter\"\r\n                      type=\"text\"\r\n                      placeholder=\"https://twitter.com/xxxx\"\r\n                      aria-label=\"project-twitter\"\r\n                      :isRequired=\"false\"\r\n                      :active=\"true\"\r\n                      :value=\"projectIn.value.twitter\"\r\n                      @input-value=\"(v) => (projectIn.value.twitter = v)\"\r\n                      :disabled=\"false\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <label class=\"form-label d-flex\"\r\n                      ><discord-icon class=\"mt-1 mr-1\" />Discord</label\r\n                    >\r\n                    <vsud-input\r\n                      id=\"project-discord\"\r\n                      type=\"text\"\r\n                      placeholder=\"https://discord.com/user/xxxx\"\r\n                      aria-label=\"project-discord\"\r\n                      :isRequired=\"false\"\r\n                      :active=\"true\"\r\n                      :value=\"projectIn.value.discord\"\r\n                      @input-value=\"(v) => (projectIn.value.discord = v)\"\r\n                      :disabled=\"false\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <label class=\"form-label d-flex\"\r\n                      ><youtube-icon class=\"mt-1 mr-1\" />YouTube</label\r\n                    >\r\n                    <vsud-input\r\n                      id=\"project-youtube\"\r\n                      type=\"text\"\r\n                      placeholder=\"https://youtube.com/channel/xxxx\"\r\n                      aria-label=\"project-youtube\"\r\n                      :isRequired=\"false\"\r\n                      :active=\"true\"\r\n                      :value=\"projectIn.value.youtube\"\r\n                      @input-value=\"(v) => (projectIn.value.youtube = v)\"\r\n                      :disabled=\"false\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <label class=\"form-label d-flex\"\r\n                      ><telegram-icon class=\"mt-1 mr-1\" />Telegram</label\r\n                    >\r\n                    <vsud-input\r\n                      id=\"project-telegram\"\r\n                      type=\"text\"\r\n                      placeholder=\"https://t.me/xxxx\"\r\n                      aria-label=\"project-telegram\"\r\n                      :isRequired=\"false\"\r\n                      :active=\"true\"\r\n                      :value=\"projectIn.value.telegram\"\r\n                      @input-value=\"(v) => (projectIn.value.telegram = v)\"\r\n                      :disabled=\"false\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <label class=\"form-label d-flex\"\r\n                      ><medium-icon class=\"mt-1 mr-1\" />Medium</label\r\n                    >\r\n                    <vsud-input\r\n                      id=\"project-medium\"\r\n                      type=\"text\"\r\n                      placeholder=\"https://medium.com/@xxxx\"\r\n                      aria-label=\"project-medium\"\r\n                      :isRequired=\"false\"\r\n                      :active=\"true\"\r\n                      :value=\"projectIn.value.medium\"\r\n                      @input-value=\"(v) => (projectIn.value.medium = v)\"\r\n                      :disabled=\"false\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row mt-auto position-sticky top-100 pb-2\">\r\n                  <div class=\"col-12 d-flex\">\r\n                    <vsud-button\r\n                      class=\"my-4 mb-2 mr-2\"\r\n                      variant=\"outline\"\r\n                      color=\"active\"\r\n                      full-width\r\n                      @click=\"$router.go(-1)\"\r\n                      >Назад\r\n                    </vsud-button>\r\n                    <vsud-button\r\n                      class=\"my-4 mb-2 ml-2\"\r\n                      variant=\"gradient\"\r\n                      color=\"success\"\r\n                      full-width\r\n                      @click.prevent=\"sendData\"\r\n                      >Сохранить\r\n                    </vsud-button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- -->\r\n              <div class=\"col-lg-6 mt-4 mt-lg-0\">\r\n                <div class=\"card bg-gradient-dark\">\r\n                  <div class=\"card-header bg-transparent pb-0\">\r\n                    <div class=\"mb-4 col-xl-12 col-md-6 mb-xl-0 pb-4\">\r\n                      <a href=\"javascript:;\" @click=\"showAddBlockModal\">\r\n                        <place-holder-horisontal-card\r\n                          :title=\"{\r\n                            text: 'Добавить блок описания',\r\n                            variant: 'h6',\r\n                          }\"\r\n                        />\r\n                      </a>\r\n                    </div>\r\n\r\n                    <h6 class=\"text-white\">\r\n                      Настройка стадий развития проекта\r\n                    </h6>\r\n                  </div>\r\n                  <div class=\"card-body p-3\">\r\n                    <div\r\n                      class=\"timeline timeline-one-side\"\r\n                      data-timeline-axis-style=\"dashed\"\r\n                    >\r\n                      <div v-if=\"blocks.value.length\">\r\n                        <div\r\n                          class=\"timeline-block mb-3\"\r\n                          v-for=\"block in blocks.value\"\r\n                          :key=\"block.id\"\r\n                        >\r\n                          <span class=\"timeline-step bg-dark\">\r\n                            <i\r\n                              :class=\"\r\n                                getBlockIcon(block.stage) +\r\n                                ' text-' +\r\n                                getBlockColor(block.stage)\r\n                              \"\r\n                            ></i>\r\n                          </span>\r\n                          <div class=\"timeline-content\">\r\n                            <h6\r\n                              class=\"text-white text-sm font-weight-bold mb-0\"\r\n                            >\r\n                              {{ block.name }}\r\n                            </h6>\r\n                            <div class=\"float-right\">\r\n                              <button\r\n                                class=\"btn btn-link text-secondary\"\r\n                                data-bs-toggle=\"dropdown\"\r\n                                aria-expanded=\"true\"\r\n                                :id=\"'project-dropdown' + block.id\"\r\n                              >\r\n                                <i\r\n                                  class=\"fa fa-ellipsis-v text-xs\"\r\n                                  aria-hidden=\"true\"\r\n                                ></i>\r\n                              </button>\r\n                              <ul\r\n                                class=\"dropdown-menu px-2 py-3 ms-sm-n4 ms-n5\"\r\n                                :aria-labelledby=\"\r\n                                  'timeline-block-dropdown' + block.id\r\n                                \"\r\n                              >\r\n                                <li>\r\n                                  <a\r\n                                    class=\"dropdown-item border-radius-md\"\r\n                                    href=\"javascript:;\"\r\n                                    @click=\"\r\n                                      showEditBlockModal(\r\n                                        block.id,\r\n                                        block.stage,\r\n                                        block.name,\r\n                                        block.date,\r\n                                        block.description,\r\n                                        block.buttons\r\n                                      )\r\n                                    \"\r\n                                    >Изменить</a\r\n                                  >\r\n                                </li>\r\n                                <li>\r\n                                  <a\r\n                                    class=\"dropdown-item border-radius-md\"\r\n                                    href=\"javascript:;\"\r\n                                    @click=\"\r\n                                      confirm(\r\n                                        block.id,\r\n                                        'Удалить блок timeline?',\r\n                                        'Удаление этапа развития проекта'\r\n                                      )\r\n                                    \"\r\n                                    >Удалить</a\r\n                                  >\r\n                                </li>\r\n                              </ul>\r\n                            </div>\r\n\r\n                            <p class=\"text-white text-xs mt-1 mb-0\">\r\n                              {{ getPrintDate(block.date) }}\r\n                            </p>\r\n                            <p class=\"text-secondary text-sm mt-3 mb-2\">\r\n                              {{ block.description }}\r\n                            </p>\r\n                            <span\r\n                              class=\"badge badge-sm\"\r\n                              :class=\"\r\n                                'bg-gradient-' +\r\n                                blockTypes[block.stage - 1].color\r\n                              \"\r\n                              v-if=\"block.button1\"\r\n                              >{{ block.button1 }}</span\r\n                            >\r\n                            <span\r\n                              class=\"badge badge-sm ml-1\"\r\n                              :class=\"\r\n                                'bg-gradient-' +\r\n                                blockTypes[block.stage - 1].color\r\n                              \"\r\n                              v-if=\"block.button2\"\r\n                              >{{ block.button2 }}</span\r\n                            >\r\n                            <span\r\n                              class=\"badge badge-sm ml-1\"\r\n                              :class=\"\r\n                                'bg-gradient-' +\r\n                                blockTypes[block.stage - 1].color\r\n                              \"\r\n                              v-if=\"block.button3\"\r\n                              >{{ block.button3 }}</span\r\n                            >\r\n                            <span\r\n                              class=\"badge badge-sm ml-1\"\r\n                              :class=\"\r\n                                'bg-gradient-' +\r\n                                blockTypes[block.stage - 1].color\r\n                              \"\r\n                              v-if=\"block.button4\"\r\n                              >{{ block.button4 }}</span\r\n                            >\r\n                            <span\r\n                              class=\"badge badge-sm ml-1\"\r\n                              :class=\"\r\n                                'bg-gradient-' +\r\n                                blockTypes[block.stage - 1].color\r\n                              \"\r\n                              v-if=\"block.button5\"\r\n                              >{{ block.button5 }}</span\r\n                            >\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <!-- far fa-baby-carriage -->\r\n                      <div v-else class=\"timeline-block mb-3\">\r\n                        <span class=\"timeline-step bg-dark\">\r\n                          <i class=\"fas fa-question text-secondary\"></i>\r\n                        </span>\r\n                        <div class=\"timeline-content\">\r\n                          <h6 class=\"text-white text-sm font-weight-bold mb-0\">\r\n                            Стадии проекта не описаны\r\n                          </h6>\r\n                          <p\r\n                            class=\"\r\n                              text-secondary\r\n                              font-weight-bold\r\n                              text-xs\r\n                              mt-1\r\n                              mb-0\r\n                            \"\r\n                          ></p>\r\n                          <p class=\"text-secondary text-sm mt-3 mb-2\">\r\n                            Отсутствует описание стадий развития проекта.\r\n                          </p>\r\n                          <button\r\n                            class=\"badge badge-sm bg-gradient-secondary\"\r\n                            @click=\"showAddBlockModal\"\r\n                          >\r\n                            Настроить timeline проекта\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport VsudInput from \"@/components/VsudInput.vue\";\r\nimport VsudTextarea from \"@/components/VsudTextarea.vue\";\r\nimport VsudButton from \"@/components/VsudButton.vue\";\r\nimport getProjectData from \"@/assets/js/getProjectData.js\";\r\nimport getIndexesByProjectId from \"@/assets/js/getIndexes.js\";\r\nimport PlaceHolderHorisontalCard from \"@/Cards/PlaceHolderHorisontalCard.vue\";\r\n\r\n//import confirmModal from \"@/components/modal/confirmModal.js\";\r\n//import { Modal } from \"bootstrap\";\r\nimport { ref } from \"vue\";\r\nimport { useRoute } from \"vue-router\";\r\n\r\nexport default {\r\n  name: \"edit-product-key\",\r\n  components: {\r\n    VsudInput,\r\n    VsudButton,\r\n    VsudTextarea,\r\n    getProjectData,\r\n    getIndexesByProjectId,\r\n    /*confirmModal,\r\n    PlaceHolderHorisontalCard,*/\r\n  },\r\n  data() {\r\n    return {\r\n      /*openModalStatus: false,\r\n      addModal: null,*/\r\n    };\r\n  },\r\n\r\n  setup() {\r\n    const route = useRoute();\r\n    const projectId = route.params.productId;\r\n    const types = ref([]);\r\n    types.value = getProjectTypes();\r\n    const projectIn = ref([]);\r\n    projectIn.value = getProjectData(projectId);\r\n    const index = ref([]);\r\n    index.value = getIndexesByProjectId(projectId);\r\n    const blocks = ref([]);\r\n    blocks.value = getProjectBlocks(projectId);\r\n    return { projectId, types, projectIn, index, blocks };\r\n  },\r\n  methods: {\r\n    setCookie(name, value, days) {\r\n      var expires = \"\";\r\n      if (days) {\r\n        var date = new Date();\r\n        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);\r\n        expires = \"; expires=\" + date.toUTCString();\r\n      }\r\n      document.cookie = name + \"=\" + (value || \"\") + expires + \"; path=/\";\r\n    },\r\n    getCookie(cname) {\r\n      let name = cname + \"=\";\r\n      let ca = document.cookie.split(\";\");\r\n      for (let i = 0; i < ca.length; i++) {\r\n        let c = ca[i];\r\n        while (c.charAt(0) == \" \") {\r\n          c = c.substring(1);\r\n        }\r\n        if (c.indexOf(name) == 0) {\r\n          return c.substring(name.length, c.length);\r\n        }\r\n      }\r\n      return \"\";\r\n    },\r\n    eraseCookie(name) {\r\n      document.cookie =\r\n        name + \"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;\";\r\n    },\r\n    sendData() {\r\n      axios.get(\"/sanctum/csrf-cookie\").then((response) => {\r\n        axios\r\n          .post(\"/api/edit-project/\" + this.projectId, {\r\n            name: this.projectIn.value.name,\r\n            type: this.projectIn.value.project_type_id,\r\n            url: this.projectIn.value.website_url,\r\n            twitter: this.projectIn.value.twitter,\r\n            discord: this.projectIn.value.discord,\r\n            youtube: this.projectIn.value.youtube,\r\n            telegram: this.projectIn.value.telegram,\r\n            medium: this.projectIn.value.medium,\r\n            description: this.projectIn.value.description,\r\n          })\r\n          .then((r) => {\r\n            this.$router.push({ name: \"Products\" });\r\n            //this.$router.go()\r\n            //this.$emit(\"socialsReload\");\r\n          })\r\n          .catch((err) => {\r\n            console.log(err.response);\r\n            this.registerError = \"Ошибка сохранения проекта\";\r\n            alert(this.registerError);\r\n          });\r\n      });\r\n    },\r\n    showBlockModal() {\r\n      this.openModalStatus = true;\r\n      this.addModal.show();\r\n      setTimeout(() => {\r\n        this.openModalStatus = false;\r\n      }, 500);\r\n    },\r\n    projectReload() {\r\n      this.blocks.value = getProjectBlocks(this.projectId);\r\n    },\r\n    getBlockIcon(id) {\r\n      return this.blockTypes[id - 1].icon;\r\n    },\r\n    getBlockColor(id) {\r\n      return this.blockTypes[id - 1].color;\r\n    },\r\n    setFullDateElement(dig) {\r\n      return dig < 10 ? `0${dig}` : dig;\r\n    },\r\n    getPrintDate(date) {\r\n      let tmpDate = new Date(date);\r\n      let day = this.setFullDateElement(tmpDate.getDate());\r\n      let month = this.setFullDateElement(tmpDate.getMonth() + 1);\r\n      let year = tmpDate.getFullYear();\r\n      return `${day}.${month}.${year}`;\r\n    },\r\n    confirm(id, title, text) {\r\n      this.confirmBlockDelete = confirmModal(id, title, text);\r\n    },\r\n    showAddBlockModal(id, type, name, date, text, buttons) {\r\n      this.blockData.id = null;\r\n      this.blockData.type = null;\r\n      this.blockData.name = null;\r\n      this.blockData.date = null;\r\n      this.blockData.text = null;\r\n      this.blockData.buttons = \"Пример\";\r\n      this.blockData.do = \"add\";\r\n      this.showBlockModal();\r\n    },\r\n    showEditBlockModal(id, type, name, date, text, buttons) {\r\n      this.blockData.id = id;\r\n      this.blockData.type = type;\r\n      this.blockData.name = name;\r\n      this.blockData.date = date;\r\n      this.blockData.text = text;\r\n      this.blockData.buttons = buttons;\r\n      this.blockData.do = \"edit\";\r\n      this.showBlockModal();\r\n    },\r\n    deleteBlock(id) {\r\n      axios.get(\"/sanctum/csrf-cookie\").then((response) => {\r\n        axios\r\n          .get(\"/api/delete-block/\" + id)\r\n          .then((r) => {\r\n            //this.$router.push({ name: \"Products\" });\r\n            //this.$router.go()\r\n            this.projectReload();\r\n          })\r\n          .catch((err) => {\r\n            console.log(err.response);\r\n            this.registerError = \"Ошибка сохранения удаления блока timeline\";\r\n            alert(this.registerError);\r\n          });\r\n      });\r\n    },\r\n  },\r\n  computed: {\r\n    tokenC() {\r\n      this.setCookie(\"XSRF-TOKEN\", \"888888\", 1);\r\n      return this.token;\r\n    },\r\n    /*projectType(value) {\r\n      this.project.type = value ? value : this.projectIn.value.project_type_id;\r\n      console.log(1);\r\n      console.log(this.project.type);\r\n      return this.project.type;\r\n    },*/\r\n  },\r\n  watch: {\r\n    confirmBlockDelete(newQuestion, oldQuestion) {\r\n      if (newQuestion) {\r\n        this.deleteBlock(newQuestion);\r\n      }\r\n    },\r\n  },\r\n};\r\n</script>\r\n<style scoped>\r\n.dropdown-menu,\r\n.dropend .dropdown-menu {\r\n  box-shadow: 0 8px 26px -4px rgb(20 20 20 / 15%),\r\n    0 8px 9px -5px rgb(20 20 20 / 6%);\r\n  cursor: pointer;\r\n}\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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