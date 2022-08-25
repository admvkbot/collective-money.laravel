"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_products_AddProduct_vue"],{

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScriptLoader": () => (/* binding */ ScriptLoader)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var createState = function () { return ({
    listeners: [],
    scriptId: (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.uuid)('tiny-script'),
    scriptLoaded: false
}); };
var CreateScriptLoader = function () {
    var state = createState();
    var injectScriptTag = function (scriptId, doc, url, callback) {
        var scriptTag = doc.createElement('script');
        scriptTag.referrerPolicy = 'origin';
        scriptTag.type = 'application/javascript';
        scriptTag.id = scriptId;
        scriptTag.src = url;
        var handler = function () {
            scriptTag.removeEventListener('load', handler);
            callback();
        };
        scriptTag.addEventListener('load', handler);
        if (doc.head) {
            doc.head.appendChild(scriptTag);
        }
    };
    var load = function (doc, url, callback) {
        if (state.scriptLoaded) {
            callback();
        }
        else {
            state.listeners.push(callback);
            if (!doc.getElementById(state.scriptId)) {
                injectScriptTag(state.scriptId, doc, url, function () {
                    state.listeners.forEach(function (fn) { return fn(); });
                    state.scriptLoaded = true;
                });
            }
        }
    };
    // Only to be used by tests.
    var reinitialize = function () {
        state = createState();
    };
    return {
        load: load,
        reinitialize: reinitialize
    };
};
var ScriptLoader = CreateScriptLoader();



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTinymce": () => (/* binding */ getTinymce)
/* harmony export */ });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var getGlobal = function () { return (typeof window !== 'undefined' ? window : __webpack_require__.g); };
var getTinymce = function () {
    var global = getGlobal();
    return global && global.tinymce ? global.tinymce : null;
};



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindHandlers": () => (/* binding */ bindHandlers),
/* harmony export */   "bindModelHandlers": () => (/* binding */ bindModelHandlers),
/* harmony export */   "initEditor": () => (/* binding */ initEditor),
/* harmony export */   "isNullOrUndefined": () => (/* binding */ isNullOrUndefined),
/* harmony export */   "isTextarea": () => (/* binding */ isTextarea),
/* harmony export */   "isValidKey": () => (/* binding */ isValidKey),
/* harmony export */   "mergePlugins": () => (/* binding */ mergePlugins),
/* harmony export */   "uuid": () => (/* binding */ uuid)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];
var isValidKey = function (key) {
    return validEvents.map(function (event) { return event.toLowerCase(); }).indexOf(key.toLowerCase()) !== -1;
};
var bindHandlers = function (initEvent, listeners, editor) {
    Object.keys(listeners)
        .filter(isValidKey)
        .forEach(function (key) {
        var handler = listeners[key];
        if (typeof handler === 'function') {
            if (key === 'onInit') {
                handler(initEvent, editor);
            }
            else {
                editor.on(key.substring(2), function (e) { return handler(e, editor); });
            }
        }
    });
};
var bindModelHandlers = function (props, ctx, editor, modelValue) {
    var modelEvents = props.modelEvents ? props.modelEvents : null;
    var normalizedEvents = Array.isArray(modelEvents) ? modelEvents.join(' ') : modelEvents;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(modelValue, function (val, prevVal) {
        if (editor && typeof val === 'string' && val !== prevVal && val !== editor.getContent({ format: props.outputFormat })) {
            editor.setContent(val);
        }
    });
    editor.on(normalizedEvents ? normalizedEvents : 'change input undo redo', function () {
        ctx.emit('update:modelValue', editor.getContent({ format: props.outputFormat }));
    });
};
var initEditor = function (initEvent, props, ctx, editor, modelValue, content) {
    editor.setContent(content());
    if (ctx.attrs['onUpdate:modelValue']) {
        bindModelHandlers(props, ctx, editor, modelValue);
    }
    bindHandlers(initEvent, ctx.attrs, editor);
};
var unique = 0;
var uuid = function (prefix) {
    var time = Date.now();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var isTextarea = function (element) {
    return element !== null && element.tagName.toLowerCase() === 'textarea';
};
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var mergePlugins = function (initPlugins, inputPlugins) {
    return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};
var isNullOrUndefined = function (value) {
    return value === null || value === undefined;
};



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Editor": () => (/* binding */ Editor)
/* harmony export */ });
/* harmony import */ var _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ScriptLoader */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js");
/* harmony import */ var _TinyMCE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TinyMCE */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js");
/* harmony import */ var _EditorPropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditorPropTypes */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
console.log('eeeeeee');
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





var renderInline = function (ce, id, elementRef, tagName) {
    return ce(tagName ? tagName : 'div', {
        id: id,
        ref: elementRef
    });
};
var renderIframe = function (ce, id, elementRef) {
    return ce('textarea', {
        id: id,
        visibility: 'hidden',
        ref: elementRef
    });
};
var Editor = (0,vue__WEBPACK_IMPORTED_MODULE_4__.defineComponent)({
    props: _EditorPropTypes__WEBPACK_IMPORTED_MODULE_3__.editorProps,
    setup: function (props, ctx) {
        var conf = props.init ? __assign({}, props.init) : {};
        var _a = (0,vue__WEBPACK_IMPORTED_MODULE_4__.toRefs)(props), disabled = _a.disabled, modelValue = _a.modelValue, tagName = _a.tagName;
        var element = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)(null);
        var vueEditor = null;
        var elementId = props.id || (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.uuid)('tiny-vue');
        var inlineEditor = (props.init && props.init.inline) || props.inline;
        var modelBind = !!ctx.attrs['onUpdate:modelValue'];
        var mounting = true;
        var initialValue = props.initialValue ? props.initialValue : '';
        var cache = '';
        var getContent = function (isMounting) { return modelBind ?
            function () { return ((modelValue === null || modelValue === void 0 ? void 0 : modelValue.value) ? modelValue.value : ''); } :
            function () { return isMounting ? initialValue : cache; }; };
        var initWrapper = function () {
            var content = getContent(mounting);
            var finalInit = __assign(__assign({}, conf), { readonly: props.disabled, selector: "#" + elementId, plugins: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.mergePlugins)(conf.plugins, props.plugins), toolbar: props.toolbar || (conf.toolbar), inline: inlineEditor, setup: function (editor) {
                    vueEditor = editor;
                    editor.on('init', function (e) { return (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.initEditor)(e, props, ctx, editor, modelValue, content); });
                    if (typeof conf.setup === 'function') {
                        conf.setup(editor);
                    }
                } });
            if ((0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isTextarea)(element.value)) {
                element.value.style.visibility = '';
            }
            (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)().init(finalInit);
            mounting = false;
        };
        (0,vue__WEBPACK_IMPORTED_MODULE_4__.watch)(disabled, function (disable) {
            var _a;
            if (vueEditor !== null) {
                if (typeof ((_a = vueEditor.mode) === null || _a === void 0 ? void 0 : _a.set) === 'function') {
                    vueEditor.mode.set(disable ? 'readonly' : 'design');
                }
                else {
                    vueEditor.setMode(disable ? 'readonly' : 'design');
                }
            }
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_4__.watch)(tagName, function (_) {
            var _a;
            if (!modelBind) {
                cache = vueEditor.getContent();
            }
            (_a = (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)()) === null || _a === void 0 ? void 0 : _a.remove(vueEditor);
            (0,vue__WEBPACK_IMPORTED_MODULE_4__.nextTick)(function () { return initWrapper(); });
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_4__.onMounted)(function () {
            if ((0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)() !== null) {
                initWrapper();
            }
            else if (element.value && element.value.ownerDocument) {
                var channel = props.cloudChannel ? props.cloudChannel : '6';
                var apiKey = props.apiKey ? props.apiKey : 'no-api-key';
                var scriptSrc = "/js/mce/tinymce.min.js";
                _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__.ScriptLoader.load(element.value.ownerDocument, scriptSrc, initWrapper);
            }
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_4__.onBeforeUnmount)(function () {
            if ((0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)() !== null) {
                (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)().remove(vueEditor);
            }
        });
        if (!inlineEditor) {
            (0,vue__WEBPACK_IMPORTED_MODULE_4__.onActivated)(function () {
                if (!mounting) {
                    initWrapper();
                }
            });
            (0,vue__WEBPACK_IMPORTED_MODULE_4__.onDeactivated)(function () {
                var _a;
                if (!modelBind) {
                    cache = vueEditor.getContent();
                }
                (_a = (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)()) === null || _a === void 0 ? void 0 : _a.remove(vueEditor);
            });
        }
        var rerender = function (init) {
            var _a;
            cache = vueEditor.getContent();
            (_a = (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)()) === null || _a === void 0 ? void 0 : _a.remove(vueEditor);
            conf = __assign(__assign({}, conf), init);
            (0,vue__WEBPACK_IMPORTED_MODULE_4__.nextTick)(function () { return initWrapper(); });
        };
        ctx.expose({
            rerender: rerender
        });
        return function () { return inlineEditor ?
            renderInline(vue__WEBPACK_IMPORTED_MODULE_4__.h, elementId, element, props.tagName) :
            renderIframe(vue__WEBPACK_IMPORTED_MODULE_4__.h, elementId, element); };
    }
});


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editorProps": () => (/* binding */ editorProps)
/* harmony export */ });
var editorProps = {
    apiKey: String,
    cloudChannel: String,
    id: String,
    init: Object,
    initialValue: String,
    inline: Boolean,
    modelEvents: [String, Array],
    plugins: [String, Array],
    tagName: String,
    toolbar: [String, Array],
    modelValue: String,
    disabled: Boolean,
    tinymceScriptSrc: String,
    outputFormat: {
        type: String,
        validator: function (prop) { return prop === 'html' || prop === 'text'; }
    },
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Editor */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_Editor__WEBPACK_IMPORTED_MODULE_0__.Editor);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudSelectGroup.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudSelectGroup.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-demi */ "./node_modules/vue-demi/lib/index.mjs");
/* harmony import */ var _VsudCheckbox_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VsudCheckbox.vue */ "./resources/js/components/VsudCheckbox.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    VsudCheckbox: _VsudCheckbox_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    options: {
      required: true,
      type: Object
    },
    selectedItems: {
      type: Array,
      "default": []
    }
  },
  emits: ["update:modelValue"],
  data: function data() {
    return {
      selected: [],
      ifFirst: true
    };
  },
  methods: {
    arrayRemove: function arrayRemove(arr, value) {
      return arr.filter(function (ele) {
        return ele != value;
      });
    },
    sendID: function sendID(event) {
      var r = parseInt(event.target.value);

      if (this.ifFirst === true) {
        this.selected = this.selectedItems;
        this.ifFirst = false;
      }

      if (!this.selected.find(function (data) {
        return data === r;
      })) this.selected.push(r);else this.selected = this.arrayRemove(this.selected, r);
      this.$emit("update:modelValue", this.selected);
    },
    checkSelected: function checkSelected(item) {
      if (this.selectedItems.length > 0) {
        if (this.selectedItems.find(function (data) {
          return data === item.id;
        })) {
          return true;
        }
      }

      return false;
    }
  }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ProductsTableModerator.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ProductsTableModerator.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_VsudProgressPlus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/VsudProgressPlus */ "./resources/js/components/VsudProgressPlus.vue");
/* harmony import */ var _components_VsudBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/VsudBadge */ "./resources/js/components/VsudBadge.vue");
/* harmony import */ var _components_Icon_Twitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Icon/Twitter */ "./resources/js/components/Icon/Twitter.vue");
/* harmony import */ var _components_Icon_Telegram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Icon/Telegram */ "./resources/js/components/Icon/Telegram.vue");
/* harmony import */ var _components_Icon_Discord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Icon/Discord */ "./resources/js/components/Icon/Discord.vue");
/* harmony import */ var _components_Icon_Medium__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Icon/Medium */ "./resources/js/components/Icon/Medium.vue");
/* harmony import */ var _components_Icon_Youtube__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Icon/Youtube */ "./resources/js/components/Icon/Youtube.vue");
/* harmony import */ var _Cards_PlaceHolderHorisontalCard_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Cards/PlaceHolderHorisontalCard.vue */ "./resources/js/Cards/PlaceHolderHorisontalCard.vue");
/* harmony import */ var _components_modal_confirmModal_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/modal/confirmModal.js */ "./resources/js/components/modal/confirmModal.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_11__);












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "moderate-products-table",
  components: {
    VsudProgressPlus: _components_VsudProgressPlus__WEBPACK_IMPORTED_MODULE_0__["default"],
    TwitterIcon: _components_Icon_Twitter__WEBPACK_IMPORTED_MODULE_2__["default"],
    TelegramIcon: _components_Icon_Telegram__WEBPACK_IMPORTED_MODULE_3__["default"],
    DiscordIcon: _components_Icon_Discord__WEBPACK_IMPORTED_MODULE_4__["default"],
    MediumIcon: _components_Icon_Medium__WEBPACK_IMPORTED_MODULE_5__["default"],
    YoutubeIcon: _components_Icon_Youtube__WEBPACK_IMPORTED_MODULE_6__["default"],
    FontAwesomeIcon: _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon,
    PlaceHolderHorisontalCard: _Cards_PlaceHolderHorisontalCard_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    confirmModal: _components_modal_confirmModal_js__WEBPACK_IMPORTED_MODULE_8__["default"],
    VsudBadge: _components_VsudBadge__WEBPACK_IMPORTED_MODULE_1__["default"]
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
    var searchTerm = (0,vue__WEBPACK_IMPORTED_MODULE_9__.ref)(""); // Search text
    // Fake data

    var data = (0,vue__WEBPACK_IMPORTED_MODULE_9__.reactive)({
      rows: []
    });
    var $loading = (0,vue_loading_overlay__WEBPACK_IMPORTED_MODULE_11__.useLoading)();
    var loader;

    var submit = function submit() {
      loader = $loading.show({});
    };
    /**
     * Get server data request
     */


    var myRequest = function myRequest(keyword, top) {
      submit();
      axios.post("/api/get-products/" + top, {
        filter: keyword
      }).then(function (r) {
        loader.hide(); //console.log(r.data);

        data.rows = r.data; //this.$emit("accountsReload");
      })["catch"](function (err) {
        loader.hide();
        console.log("Fetch error", err.response);
        var registerError = "Неизвестная ошибка при полученнии списка проектов";
        alert(registerError);
      });
    };

    var table = (0,vue__WEBPACK_IMPORTED_MODULE_9__.reactive)({
      list: (0,vue__WEBPACK_IMPORTED_MODULE_9__.computed)(function () {
        return data.rows;
      }),
      totalRecordCount: (0,vue__WEBPACK_IMPORTED_MODULE_9__.computed)(function () {
        return data.rows.length;
      })
    });

    if (props.is_liveSearch) {
      (0,vue__WEBPACK_IMPORTED_MODULE_9__.watch)(function () {
        return searchTerm.value;
      }, function (val) {
        myRequest(val, props.top);
      });
    } // Get data on first rendering


    myRequest("", props.top); //console.log(table);

    return {
      searchTerm: searchTerm,
      table: table,
      myRequest: myRequest
    };
  },
  data: function data() {
    return {
      confirmDelete: false
    };
  },
  methods: {
    confirm: function confirm(id, title, text) {
      this.confirmDelete = (0,_components_modal_confirmModal_js__WEBPACK_IMPORTED_MODULE_8__["default"])(id, title, text);
    },
    productsReload: function productsReload() {
      this.myRequest(this.searchTerm, this.top);
    },
    deleteProduct: function deleteProduct(id) {
      var _this = this;

      axios.get("/sanctum/csrf-cookie").then(function (response) {
        axios.get("/api/delete-product/" + id).then(function (r) {
          //this.$router.push({ name: "Products" });
          //this.$router.go()
          _this.productsReload();
        })["catch"](function (err) {
          console.log(err.response);
          var registerError = "Ошибка сохранения удаления проекта";
          alert(registerError);
        });
      });
    }
  },
  watch: {
    confirmDelete: function confirmDelete(newQuestion, oldQuestion) {
      if (newQuestion) {
        console.log('fff');
        this.deleteProduct(newQuestion);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/products/AddProduct.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/products/AddProduct.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_components_tables_ProductsTableModerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/components/tables/ProductsTableModerator */ "./resources/js/views/components/tables/ProductsTableModerator.vue");
/* harmony import */ var _views_components_tables_MessagesTableModerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/components/tables/MessagesTableModerator */ "./resources/js/views/components/tables/MessagesTableModerator.vue");
/* harmony import */ var _components_VsudSelectGroup_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/VsudSelectGroup.vue */ "./resources/js/components/VsudSelectGroup.vue");
/* harmony import */ var _components_VsudInput_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/VsudInput.vue */ "./resources/js/components/VsudInput.vue");
/* harmony import */ var _components_VsudTextarea_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/VsudTextarea.vue */ "./resources/js/components/VsudTextarea.vue");
/* harmony import */ var _components_VsudButton_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/VsudButton.vue */ "./resources/js/components/VsudButton.vue");
/* harmony import */ var _assets_js_getProductTypes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/js/getProductTypes.js */ "./resources/js/assets/js/getProductTypes.js");
/* harmony import */ var _components_Icon_Twitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Icon/Twitter */ "./resources/js/components/Icon/Twitter.vue");
/* harmony import */ var _components_Icon_Telegram__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Icon/Telegram */ "./resources/js/components/Icon/Telegram.vue");
/* harmony import */ var _components_Icon_Discord__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Icon/Discord */ "./resources/js/components/Icon/Discord.vue");
/* harmony import */ var _components_Icon_Medium__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Icon/Medium */ "./resources/js/components/Icon/Medium.vue");
/* harmony import */ var _components_Icon_Youtube__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/Icon/Youtube */ "./resources/js/components/Icon/Youtube.vue");
/* harmony import */ var _Cards_PlaceHolderHorisontalCard_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/Cards/PlaceHolderHorisontalCard.vue */ "./resources/js/Cards/PlaceHolderHorisontalCard.vue");
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "add-product",
  components: {
    ModerateProductsTable: _views_components_tables_ProductsTableModerator__WEBPACK_IMPORTED_MODULE_0__["default"],
    ModerateMessagesTable: _views_components_tables_MessagesTableModerator__WEBPACK_IMPORTED_MODULE_1__["default"],
    VsudInput: _components_VsudInput_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    VsudButton: _components_VsudButton_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    VsudTextarea: _components_VsudTextarea_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    getProductTypes: _assets_js_getProductTypes_js__WEBPACK_IMPORTED_MODULE_6__["default"],
    TwitterIcon: _components_Icon_Twitter__WEBPACK_IMPORTED_MODULE_7__["default"],
    TelegramIcon: _components_Icon_Telegram__WEBPACK_IMPORTED_MODULE_8__["default"],
    DiscordIcon: _components_Icon_Discord__WEBPACK_IMPORTED_MODULE_9__["default"],
    MediumIcon: _components_Icon_Medium__WEBPACK_IMPORTED_MODULE_10__["default"],
    YoutubeIcon: _components_Icon_Youtube__WEBPACK_IMPORTED_MODULE_11__["default"],
    PlaceHolderHorisontalCard: _Cards_PlaceHolderHorisontalCard_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    VsudSelectGroup: _components_VsudSelectGroup_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    editor: _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  data: function data() {
    return {
      selected: [],
      product: {
        name: "",
        type: 1,
        keys: "",
        url: "",
        twitter: "",
        discord: "",
        youtube: "",
        telegram: "",
        medium: "",
        description: "",
        init: 0
      }
    };
  },
  setup: function setup() {
    var types = (0,vue__WEBPACK_IMPORTED_MODULE_14__.ref)([]);
    types.value = (0,_assets_js_getProductTypes_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
    return {
      types: types
    };
  },
  mounted: function mounted() {
    this.init++;
  },
  methods: {
    getTypeName: function getTypeName(selected) {
      if (!this.types.value.length) {
        return null;
      }

      var obj = this.types.value.find(function (data) {
        return data.id == selected;
      }); //this.product.type = selected;

      return obj ? obj.name : null;
    },
    sendData: function sendData() {
      var _this = this;

      axios.post("/api/add-product", {
        name: this.product.name,

        /*type: this.product.type,*/
        type: this.selected,
        index: this.product.keys,
        url: this.product.url,
        twitter: this.product.twitter,
        discord: this.product.discord,
        youtube: this.product.youtube,
        telegram: this.product.telegram,
        medium: this.product.medium,
        description: this.description
      }).then(function (r) {
        _this.$router.push({
          name: "ProductsModerator"
        });
      })["catch"](function (err) {
        console.log(err.response);
        _this.registerError = "Ошибка сохранения проекта";
        alert(_this.registerError);
        return;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudSelectGroup.vue?vue&type=template&id=0fe9ee1c&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudSelectGroup.vue?vue&type=template&id=0fe9ee1c&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-0fe9ee1c"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "column"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_VsudCheckbox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("VsudCheckbox");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.options, function (option) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_VsudCheckbox, {
      key: option.id,
      id: option.id,
      checked: $options.checkSelected(option),
      onInput: $options.sendID
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.name), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["id", "checked", "onInput"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ProductsTableModerator.vue?vue&type=template&id=6891572b&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ProductsTableModerator.vue?vue&type=template&id=6891572b&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6891572b"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
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
  }, " Активности "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
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
  "class": "inline-flex"
};
var _hoisted_20 = {
  "class": "align-middle text-center"
};
var _hoisted_21 = {
  "class": "d-flex align-items-center justify-content-center"
};
var _hoisted_22 = {
  key: 0
};
var _hoisted_23 = {
  "class": "me-2 text-xs font-weight-bold"
};
var _hoisted_24 = {
  key: 1,
  "class": "me-2 text-xs font-weight-bold"
};
var _hoisted_25 = {
  "class": "align-middle text-center"
};
var _hoisted_26 = {
  "class": "text-sm font-weight-bold mb-0"
};
var _hoisted_27 = {
  "class": "align-middle text-center"
};
var _hoisted_28 = {
  "class": "inline-flex"
};
var _hoisted_29 = ["href"];
var _hoisted_30 = ["href"];
var _hoisted_31 = ["href"];
var _hoisted_32 = ["href"];
var _hoisted_33 = ["href"];
var _hoisted_34 = {
  "class": "align-middle"
};
var _hoisted_35 = ["id"];

var _hoisted_36 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-ellipsis-v text-xs",
    "aria-hidden": "true"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_37 = [_hoisted_36];
var _hoisted_38 = ["aria-labelledby"];

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Настроить");

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Изменить ключи");

var _hoisted_41 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_place_holder_horisontal_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("place-holder-horisontal-card");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_vsud_badge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vsud-badge");

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
    , _hoisted_16)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(item.badges, function (badge) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: badge.id,
        "class": "pr-1"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_badge, {
        color: badge.color,
        variant: "gradient",
        size: "sm"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(badge.badge_name), 1
          /* TEXT */
          )];
        }),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["color"])]);
    }), 128
    /* KEYED_FRAGMENT */
    ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [item.rating ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.rating) + "%", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_progress_plus, {
      variant: "gradient",
      percentage: item.rating
    }, null, 8
    /* PROPS */
    , ["percentage"])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_24, " Недостаточно данных "))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.num_tg_users), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [item.twitter ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 0,
      "class": "text-xs font-weight-bold",
      target: "_blank",
      href: item.twitter
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_twitter_icon, {
      size: "18px"
    })], 8
    /* PROPS */
    , _hoisted_29)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.discord ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 1,
      "class": "text-xs font-weight-bold",
      target: "_blank",
      href: item.discord
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_discord_icon, {
      size: "18px",
      "class": "ml-2"
    })], 8
    /* PROPS */
    , _hoisted_30)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.youtube ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 2,
      "class": "text-xs font-weight-bold",
      target: "_blank",
      href: item.youtube
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_youtube_icon, {
      size: "18px",
      "class": "ml-2"
    })], 8
    /* PROPS */
    , _hoisted_31)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.telegram ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 3,
      "class": "text-xs font-weight-bold",
      target: "_blank",
      href: item.telegram
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_telegram_icon, {
      size: "18px",
      "class": "ml-2"
    })], 8
    /* PROPS */
    , _hoisted_32)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.medium ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 4,
      "class": "text-xs font-weight-bold",
      target: "_blank",
      href: item.medium
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_medium_icon, {
      size: "18px",
      "class": "ml-2"
    })], 8
    /* PROPS */
    , _hoisted_33)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_34, [$props.is_liveSearch ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "btn btn-link text-secondary mb-0",
      "data-bs-toggle": "dropdown",
      "aria-expanded": "true",
      id: 'product-dropdown' + item.id
    }, _hoisted_37, 8
    /* PROPS */
    , _hoisted_35)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
      "class": "dropdown-menu px-2 py-3 ms-sm-n4 ms-n5",
      "aria-labelledby": 'product-dropdown' + item.id,
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
        return [_hoisted_39];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      "class": "dropdown-item border-radius-md",
      to: {
        name: 'Edit Product Key',
        params: {
          productId: item.id
        }
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_40];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      "class": "dropdown-item border-radius-md",
      href: "javascript:;",
      onClick: function onClick($event) {
        return $options.confirm(item.id, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C ".concat(item.name, "?"), 'Удаление проекта вместе с его статистикой, индексами и блоком timeline');
      }
    }, "Удалить", 8
    /* PROPS */
    , _hoisted_41)])], 8
    /* PROPS */
    , _hoisted_38)])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/products/AddProduct.vue?vue&type=template&id=1e9a150a":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/products/AddProduct.vue?vue&type=template&id=1e9a150a ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

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

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Настройки парсинга проекта")], -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "card-body pt-0"
};
var _hoisted_7 = {
  "class": "row"
};
var _hoisted_8 = {
  "class": "col-8"
};
var _hoisted_9 = {
  "class": "row"
};
var _hoisted_10 = {
  "class": "col-12"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Название", -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "row"
};
var _hoisted_13 = {
  "class": "col-12"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Ключевые фразы");

var _hoisted_15 = {
  "class": "row"
};
var _hoisted_16 = {
  "class": "col-12"
};
var _hoisted_17 = {
  "class": "form-group"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Дополнительная информация", -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "row mt-auto position-sticky top-100 pb-2"
};
var _hoisted_20 = {
  "class": "col-12 d-flex"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Назад ");

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Сохранить ");

var _hoisted_23 = {
  "class": "col-4"
};
var _hoisted_24 = {
  "class": "row"
};
var _hoisted_25 = {
  "class": "col-12 pb-3"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Типы, относящиеся к проекту", -1
/* HOISTED */
);

var _hoisted_27 = {
  "class": "form-group pt-3"
};
var _hoisted_28 = {
  "class": "row"
};
var _hoisted_29 = {
  "class": "col-12"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label"
}, "Официальный вебсайт", -1
/* HOISTED */
);

var _hoisted_31 = {
  "class": "row"
};
var _hoisted_32 = {
  "class": "col-12"
};
var _hoisted_33 = {
  "class": "form-label d-flex"
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Twitter ");

var _hoisted_35 = {
  "class": "row"
};
var _hoisted_36 = {
  "class": "col-12"
};
var _hoisted_37 = {
  "class": "form-label d-flex"
};

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Discord ");

var _hoisted_39 = {
  "class": "row"
};
var _hoisted_40 = {
  "class": "col-12"
};
var _hoisted_41 = {
  "class": "form-label d-flex"
};

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("YouTube ");

var _hoisted_43 = {
  "class": "row"
};
var _hoisted_44 = {
  "class": "col-12"
};
var _hoisted_45 = {
  "class": "form-label d-flex"
};

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Telegram ");

var _hoisted_47 = {
  "class": "row"
};
var _hoisted_48 = {
  "class": "col-12"
};
var _hoisted_49 = {
  "class": "form-label d-flex"
};

var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Medium ");

var _hoisted_51 = {
  "class": "row"
};
var _hoisted_52 = {
  "class": "col-12 pt-3"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  var _component_vsud_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vsud-input");

  var _component_vsud_textarea = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vsud-textarea");

  var _component_editor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("editor");

  var _component_vsud_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vsud-button");

  var _component_vsud_select_group = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vsud-select-group");

  var _component_twitter_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("twitter-icon");

  var _component_discord_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("discord-icon");

  var _component_youtube_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("youtube-icon");

  var _component_telegram_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("telegram-icon");

  var _component_medium_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("medium-icon");

  var _component_moderate_messages_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("moderate-messages-table");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "product-name",
    type: "text",
    placeholder: "Crypto Whitelist Pro",
    "aria-label": "Name",
    isRequired: true,
    active: true,
    value: "",
    disabled: false,
    onInputValue: _cache[0] || (_cache[0] = function (v) {
      return _this.product.name = v;
    })
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_textarea, {
    id: "product-keys",
    onTextareaValue: _cache[1] || (_cache[1] = function (v) {
      return _this.product.keys = v;
    }),
    placeholder: "key1\nkey2"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_14];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_editor, {
    "api-key": "no-api-key",
    key: _ctx.init,
    init: {
      plugins: 'preview searchreplace autolink directionality code visualblocks visualchars image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
      editimage_cors_hosts: ['picsum.photos'],
      menubar: 'edit view insert format tools table help',
      toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | preview  | image media template link anchor codesample',
      image_advtab: true,
      height: 600,
      image_caption: true,
      quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
      noneditable_class: 'mceNonEditable',
      toolbar_mode: 'sliding',
      contextmenu: 'link image table',
      skin: _ctx.useDarkMode ? 'oxide-dark' : 'oxide',
      content_css: _ctx.useDarkMode ? 'dark' : 'default',
      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
    },
    modelValue: _ctx.description,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return _ctx.description = $event;
    })
  }, null, 8
  /* PROPS */
  , ["init", "modelValue"]))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_button, {
    "class": "my-4 mb-2 mr-2",
    variant: "outline",
    color: "active",
    "full-width": "",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.$router.go(-1);
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_21];
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
      return [_hoisted_22];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_select_group, {
    options: $setup.types.value,
    modelValue: $data.selected,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.selected = $event;
    })
  }, null, 8
  /* PROPS */
  , ["options", "modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<select\n                      class=\"form-control\"\n                      name=\"choices-type-button\"\n                      id=\"choices-type\"\n                      placeholder=\"Выберите тип проекта\"\n                      v-model=\"product.type\"\n                    >\n                      <option\n                        v-for=\"item in types.value\"\n                        :value=\"item.id\"\n                        :key=\"item.id\"\n                      >\n                        {{ item.name }}\n                      </option>\n                    </select>")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "product-site-url",
    type: "text",
    placeholder: "https://product.website/",
    "aria-label": "product-site-url",
    isRequired: false,
    active: true,
    value: "",
    onInputValue: _cache[5] || (_cache[5] = function (v) {
      return _this.product.url = v;
    }),
    disabled: false
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_twitter_icon, {
    "class": "mt-1 mr-1"
  }), _hoisted_34]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "product-twitter",
    type: "text",
    placeholder: "https://twitter.com/xxxx",
    "aria-label": "product-twitter",
    isRequired: false,
    active: true,
    value: "",
    onInputValue: _cache[6] || (_cache[6] = function (v) {
      return _this.product.twitter = v;
    }),
    disabled: false
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_discord_icon, {
    "class": "mt-1 mr-1"
  }), _hoisted_38]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "product-discord",
    type: "text",
    placeholder: "https://discord.com/user/xxxx",
    "aria-label": "product-discord",
    isRequired: false,
    active: true,
    value: "",
    onInputValue: _cache[7] || (_cache[7] = function (v) {
      return _this.product.discord = v;
    }),
    disabled: false
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_youtube_icon, {
    "class": "mt-1 mr-1"
  }), _hoisted_42]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "product-youtube",
    type: "text",
    placeholder: "https://youtube.com/channel/xxxx",
    "aria-label": "product-youtube",
    isRequired: false,
    active: true,
    value: "",
    onInputValue: _cache[8] || (_cache[8] = function (v) {
      return _this.product.youtube = v;
    }),
    disabled: false
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_telegram_icon, {
    "class": "mt-1 mr-1"
  }), _hoisted_46]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "product-telegram",
    type: "text",
    placeholder: "https://t.me/xxxx",
    "aria-label": "product-telegram",
    isRequired: false,
    active: true,
    value: "",
    onInputValue: _cache[9] || (_cache[9] = function (v) {
      return _this.product.telegram = v;
    }),
    disabled: false
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_medium_icon, {
    "class": "mt-1 mr-1"
  }), _hoisted_50]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "product-medium",
    type: "text",
    placeholder: "https://medium.com/@xxxx",
    "aria-label": "product-medium",
    isRequired: false,
    active: true,
    value: "",
    onInputValue: _cache[10] || (_cache[10] = function (v) {
      return _this.product.medium = v;
    }),
    disabled: false
  })])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_moderate_messages_table)])])]);
}

/***/ }),

/***/ "./resources/js/assets/js/getProductTypes.js":
/*!***************************************************!*\
  !*** ./resources/js/assets/js/getProductTypes.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getProductTypes)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
//import { ref, onMounted, watch } from 'vue'

function getProductTypes() {
  var types = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]); //  const getUserRepositories = async () => {
  //    repositories.value = await fetchUserRepositories(user.value)
  //  }
  //const connectGetProductTypes = () => axios.get("/sanctum/csrf-cookie").then((response) => {
  //const connectGetProductTypes = () => {

  var connectGetProductTypes = function connectGetProductTypes() {
    return axios.get("/api/get-types", {}).then(function (r) {
      types.value = r.data;
    })["catch"](function (err) {
      console.log(err);
      var registerError = "Ошибка получеения типов проектов";
      alert(registerError);
    });
  }; //});
  //};
  //onMounted(connectGetAllAccounts)


  connectGetProductTypes(); //watch(user, getUserRepositories)

  return types;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudSelectGroup.vue?vue&type=style&index=0&id=0fe9ee1c&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudSelectGroup.vue?vue&type=style&index=0&id=0fe9ee1c&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.column[data-v-0fe9ee1c] {\r\n  -moz-column-width: 150px;\r\n  column-width: 150px;\r\n  -moz-column-count: 2;\r\n  column-count: 2;\r\n  -moz-column-gap: 30px;\r\n  column-gap: 30px;\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/components/VsudSelectGroup.vue"],"names":[],"mappings":";AAmEA;EAEE,wBAAwB;EACxB,mBAAmB;EAEnB,oBAAoB;EACpB,eAAe;EAEf,qBAAqB;EACrB,gBAAgB;AAClB","sourcesContent":["<template>\r\n  <div class=\"column\">\r\n    <VsudCheckbox\r\n      v-for=\"option in options\"\r\n      :key=\"option.id\"\r\n      :id=\"option.id\"\r\n      :checked=\"checkSelected(option)\"\r\n      @input=\"sendID\"\r\n    >\r\n      {{ option.name }}\r\n    </VsudCheckbox>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport { computed } from \"vue-demi\";\r\nimport VsudCheckbox from \"./VsudCheckbox.vue\";\r\n\r\nexport default {\r\n  components: {\r\n    VsudCheckbox,\r\n  },\r\n  props: {\r\n    options: {\r\n      required: true,\r\n      type: Object,\r\n    },\r\n    selectedItems: {\r\n      type: Array,\r\n      default: [],\r\n    },\r\n  },\r\n  emits: [\"update:modelValue\"],\r\n  data() {\r\n    return {\r\n      selected: [],\r\n      ifFirst: true,\r\n    };\r\n  },\r\n  methods: {\r\n    arrayRemove(arr, value) {\r\n      return arr.filter(function (ele) {\r\n        return ele != value;\r\n      });\r\n    },\r\n    sendID(event) {\r\n      const r = parseInt(event.target.value);\r\n      if (this.ifFirst === true) {\r\n        this.selected = this.selectedItems;\r\n        this.ifFirst = false;\r\n      }\r\n      if (!this.selected.find((data) => data === r)) this.selected.push(r);\r\n      else this.selected = this.arrayRemove(this.selected, r);\r\n      this.$emit(\"update:modelValue\", this.selected);\r\n    },\r\n    checkSelected(item) {\r\n      if (this.selectedItems.length > 0) {\r\n        if (this.selectedItems.find((data) => data === item.id)) {\r\n          return true;\r\n        }\r\n      }\r\n      return false;\r\n    },\r\n  },\r\n};\r\n</script>\r\n<style scoped>\r\n.column {\r\n  -webkit-column-width: 150px;\r\n  -moz-column-width: 150px;\r\n  column-width: 150px;\r\n  -webkit-column-count: 2;\r\n  -moz-column-count: 2;\r\n  column-count: 2;\r\n  -webkit-column-gap: 30px;\r\n  -moz-column-gap: 30px;\r\n  column-gap: 30px;\r\n}\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ProductsTableModerator.vue?vue&type=style&index=0&id=6891572b&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ProductsTableModerator.vue?vue&type=style&index=0&id=6891572b&scoped=true&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.dropdown-menu[data-v-6891572b],\n.dropend .dropdown-menu[data-v-6891572b] {\n  box-shadow: 0 8px 26px -4px rgb(20 20 20 / 15%),\n    0 8px 9px -5px rgb(20 20 20 / 6%);\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/views/components/tables/ProductsTableModerator.vue"],"names":[],"mappings":";AAgZA;;EAEE;qCACmC;EACnC,eAAe;AACjB","sourcesContent":["<template>\n  <div class=\"mb-4 col-xl-12 col-md-6 mb-xl-0 pb-4\">\n    <router-link :to=\"{ name: 'Add Product' }\">\n      <place-holder-horisontal-card\n        :title=\"{ text: 'Добавить проект', variant: 'h6' }\"\n      />\n    </router-link>\n  </div>\n\n  <div class=\"card mb-4\">\n    <div class=\"card-header pb-0\">\n      <h6>Криптопроекты</h6>\n    </div>\n    <div class=\"card-body px-0 pt-0 pb-2\">\n      <div class=\"row\" v-if=\"is_liveSearch\">\n        <div class=\"col-6\">\n          <label class=\"form-label pl-3\">Поиск проекта</label>\n          <div class=\"input-group pl-3\">\n            <input\n              id=\"liveSearchReferers\"\n              name=\"liveSearchReferers\"\n              class=\"form-control\"\n              type=\"text\"\n              placeholder=\"начните что-то писать...\"\n              v-model=\"searchTerm\"\n            />\n          </div>\n        </div>\n      </div>\n\n      <div class=\"table-responsive p-0\">\n        <table class=\"table align-items-center justify-content-center mb-0\">\n          <thead>\n            <tr>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                \"\n              >\n                Проект\n              </th>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                  ps-2\n                  text-center\n                \"\n              >\n                Активности\n              </th>\n\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                  ps-2\n                  text-center\n                \"\n              >\n                Рейтинг\n              </th>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                  ps-2\n                  text-center\n                \"\n              >\n                Пользовательский интерес\n              </th>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                  ps-2\n                  text-center\n                \"\n              >\n                Соцсети\n              </th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr v-for=\"item in table.list\" :key=\"item\">\n              <td>\n                <div class=\"d-flex px-2\">\n                  <div>\n                    <img\n                      :src=\"item.logo_url\"\n                      class=\"avatar avatar-sm rounded-circle me-2\"\n                      alt=\"spotify\"\n                      v-if=\"item.logo_url\"\n                    />\n                  </div>\n                  <div class=\"my-auto d-flex\">\n                    <h6 class=\"mb-0 text-sm\">\n                      {{ item.name }}\n                      <a\n                        :href=\"item.website_url\"\n                        traget=\"_blank\"\n                        :title=\"item.website_name\"\n                        ><i class=\"fas fa-link ml-2\" v-if=\"item.website_url\"></i\n                      ></a>\n                    </h6>\n                  </div>\n                </div>\n              </td>\n              <td class=\"align-middle text-center\">\n                <div class=\"inline-flex\">\n                  <div\n                    v-for=\"badge in item.badges\"\n                    :key=\"badge.id\"\n                    class=\"pr-1\"\n                  >\n                    <vsud-badge\n                      :color=\"badge.color\"\n                      variant=\"gradient\"\n                      size=\"sm\"\n                    >\n                      {{ badge.badge_name }}\n                    </vsud-badge>\n                  </div>\n                </div>\n              </td>\n\n              <td class=\"align-middle text-center\">\n                <div class=\"d-flex align-items-center justify-content-center\">\n                  <div v-if=\"item.rating\">\n                    <span class=\"me-2 text-xs font-weight-bold\"\n                      >{{ item.rating }}%</span\n                    >\n                    <vsud-progress-plus\n                      variant=\"gradient\"\n                      :percentage=\"item.rating\"\n                    />\n                  </div>\n                  <div v-else class=\"me-2 text-xs font-weight-bold\">\n                    Недостаточно данных\n                  </div>\n                </div>\n              </td>\n              <td class=\"align-middle text-center\">\n                <p class=\"text-sm font-weight-bold mb-0\">\n                  {{ item.num_tg_users }}\n                </p>\n              </td>\n              <td class=\"align-middle text-center\">\n                <div class=\"inline-flex\">\n                  <a\n                    class=\"text-xs font-weight-bold\"\n                    target=\"_blank\"\n                    :href=\"item.twitter\"\n                    v-if=\"item.twitter\"\n                  >\n                    <twitter-icon size=\"18px\"></twitter-icon>\n                  </a>\n                  <a\n                    class=\"text-xs font-weight-bold\"\n                    target=\"_blank\"\n                    :href=\"item.discord\"\n                    v-if=\"item.discord\"\n                  >\n                    <discord-icon size=\"18px\" class=\"ml-2\"></discord-icon>\n                  </a>\n                  <a\n                    class=\"text-xs font-weight-bold\"\n                    target=\"_blank\"\n                    :href=\"item.youtube\"\n                    v-if=\"item.youtube\"\n                  >\n                    <youtube-icon size=\"18px\" class=\"ml-2\"></youtube-icon>\n                  </a>\n                  <a\n                    class=\"text-xs font-weight-bold\"\n                    target=\"_blank\"\n                    :href=\"item.telegram\"\n                    v-if=\"item.telegram\"\n                  >\n                    <telegram-icon size=\"18px\" class=\"ml-2\"></telegram-icon>\n                  </a>\n                  <a\n                    class=\"text-xs font-weight-bold\"\n                    target=\"_blank\"\n                    :href=\"item.medium\"\n                    v-if=\"item.medium\"\n                  >\n                    <medium-icon size=\"18px\" class=\"ml-2\"></medium-icon>\n                  </a>\n                </div>\n              </td>\n              <td class=\"align-middle\">\n                <button\n                  class=\"btn btn-link text-secondary mb-0\"\n                  v-if=\"is_liveSearch\"\n                  data-bs-toggle=\"dropdown\"\n                  aria-expanded=\"true\"\n                  :id=\"'product-dropdown' + item.id\"\n                >\n                  <i class=\"fa fa-ellipsis-v text-xs\" aria-hidden=\"true\"></i>\n                </button>\n                <ul\n                  class=\"dropdown-menu px-2 py-3 ms-sm-n4 ms-n5\"\n                  :aria-labelledby=\"'product-dropdown' + item.id\"\n                  style=\"\"\n                >\n                  <li>\n                    <router-link\n                      class=\"dropdown-item border-radius-md\"\n                      :to=\"{\n                        name: 'Edit Product',\n                        params: { productId: item.id },\n                      }\"\n                      >Настроить</router-link\n                    >\n                  </li>\n                  <li>\n                    <router-link\n                      class=\"dropdown-item border-radius-md\"\n                      :to=\"{\n                        name: 'Edit Product Key',\n                        params: { productId: item.id },\n                      }\"\n                      >Изменить ключи</router-link\n                    >\n                  </li>\n                  <li>\n                    <a\n                      class=\"dropdown-item border-radius-md\"\n                      href=\"javascript:;\"\n                      @click=\"\n                        confirm(\n                          item.id,\n                          `Удалить ${item.name}?`,\n                          'Удаление проекта вместе с его статистикой, индексами и блоком timeline'\n                        )\n                      \"\n                      >Удалить</a\n                    >\n                  </li>\n                </ul>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport VsudProgressPlus from \"@/components/VsudProgressPlus\";\nimport VsudBadge from \"@/components/VsudBadge\";\nimport TwitterIcon from \"@/components/Icon/Twitter\";\nimport TelegramIcon from \"@/components/Icon/Telegram\";\nimport DiscordIcon from \"@/components/Icon/Discord\";\nimport MediumIcon from \"@/components/Icon/Medium\";\nimport YoutubeIcon from \"@/components/Icon/Youtube\";\nimport PlaceHolderHorisontalCard from \"@/Cards/PlaceHolderHorisontalCard.vue\";\n\nimport confirmModal from \"@/components/modal/confirmModal.js\";\n\nimport { reactive, ref, computed, watch } from \"vue\";\nimport { FontAwesomeIcon } from \"@fortawesome/vue-fontawesome\";\nimport { useLoading } from \"vue-loading-overlay\";\n\nexport default {\n  name: \"moderate-products-table\",\n  components: {\n    VsudProgressPlus,\n    TwitterIcon,\n    TelegramIcon,\n    DiscordIcon,\n    MediumIcon,\n    YoutubeIcon,\n    FontAwesomeIcon,\n    PlaceHolderHorisontalCard,\n    confirmModal,\n    VsudBadge,\n  },\n  props: {\n    is_liveSearch: {\n      type: Boolean,\n      default: true,\n    },\n    top: {\n      type: Number,\n      default: 0,\n    },\n  },\n  setup(props) {\n    const searchTerm = ref(\"\"); // Search text\n    // Fake data\n\n    const data = reactive({\n      rows: [],\n    });\n    const $loading = useLoading();\n    let loader;\n    const submit = () => {\n      loader = $loading.show({});\n    };\n    /**\n     * Get server data request\n     */\n    const myRequest = (keyword, top) => {\n      submit();\n      axios\n        .post(\"/api/get-products/\" + top, {\n          filter: keyword,\n        })\n        .then((r) => {\n          loader.hide();\n          //console.log(r.data);\n          data.rows = r.data;\n          //this.$emit(\"accountsReload\");\n        })\n        .catch((err) => {\n          loader.hide();\n          console.log(\"Fetch error\", err.response);\n          const registerError =\n            \"Неизвестная ошибка при полученнии списка проектов\";\n          alert(registerError);\n        });\n    };\n\n    const table = reactive({\n      list: computed(() => {\n        return data.rows;\n      }),\n      totalRecordCount: computed(() => {\n        return data.rows.length;\n      }),\n    });\n    if (props.is_liveSearch) {\n      watch(\n        () => searchTerm.value,\n        (val) => {\n          myRequest(val, props.top);\n        }\n      );\n    }\n    // Get data on first rendering\n    myRequest(\"\", props.top);\n    //console.log(table);\n    return {\n      searchTerm,\n      table,\n      myRequest,\n    };\n  },\n  data() {\n    return {\n      confirmDelete: false,\n    };\n  },\n  methods: {\n    confirm(id, title, text) {\n      this.confirmDelete = confirmModal(id, title, text);\n\n    },\n    productsReload() {\n      this.myRequest(this.searchTerm, this.top);\n    },\n    deleteProduct(id) {\n      axios.get(\"/sanctum/csrf-cookie\").then((response) => {\n        axios\n          .get(\"/api/delete-product/\" + id)\n          .then((r) => {\n            //this.$router.push({ name: \"Products\" });\n            //this.$router.go()\n            this.productsReload();\n          })\n          .catch((err) => {\n            console.log(err.response);\n            let registerError = \"Ошибка сохранения удаления проекта\";\n            alert(registerError);\n          });\n      });\n    },\n  },\n  watch: {\n    confirmDelete(newQuestion, oldQuestion) {\n      if (newQuestion) {\n         console.log('fff');\n        this.deleteProduct(newQuestion);\n      }\n    },\n  },\n};\n</script>\n<style scoped>\n.dropdown-menu,\n.dropend .dropdown-menu {\n  box-shadow: 0 8px 26px -4px rgb(20 20 20 / 15%),\n    0 8px 9px -5px rgb(20 20 20 / 6%);\n  cursor: pointer;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudSelectGroup.vue?vue&type=style&index=0&id=0fe9ee1c&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudSelectGroup.vue?vue&type=style&index=0&id=0fe9ee1c&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VsudSelectGroup_vue_vue_type_style_index_0_id_0fe9ee1c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VsudSelectGroup.vue?vue&type=style&index=0&id=0fe9ee1c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudSelectGroup.vue?vue&type=style&index=0&id=0fe9ee1c&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VsudSelectGroup_vue_vue_type_style_index_0_id_0fe9ee1c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VsudSelectGroup_vue_vue_type_style_index_0_id_0fe9ee1c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ProductsTableModerator.vue?vue&type=style&index=0&id=6891572b&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ProductsTableModerator.vue?vue&type=style&index=0&id=6891572b&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductsTableModerator_vue_vue_type_style_index_0_id_6891572b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductsTableModerator.vue?vue&type=style&index=0&id=6891572b&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ProductsTableModerator.vue?vue&type=style&index=0&id=6891572b&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductsTableModerator_vue_vue_type_style_index_0_id_6891572b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductsTableModerator_vue_vue_type_style_index_0_id_6891572b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/VsudSelectGroup.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/VsudSelectGroup.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VsudSelectGroup_vue_vue_type_template_id_0fe9ee1c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VsudSelectGroup.vue?vue&type=template&id=0fe9ee1c&scoped=true */ "./resources/js/components/VsudSelectGroup.vue?vue&type=template&id=0fe9ee1c&scoped=true");
/* harmony import */ var _VsudSelectGroup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VsudSelectGroup.vue?vue&type=script&lang=js */ "./resources/js/components/VsudSelectGroup.vue?vue&type=script&lang=js");
/* harmony import */ var _VsudSelectGroup_vue_vue_type_style_index_0_id_0fe9ee1c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VsudSelectGroup.vue?vue&type=style&index=0&id=0fe9ee1c&scoped=true&lang=css */ "./resources/js/components/VsudSelectGroup.vue?vue&type=style&index=0&id=0fe9ee1c&scoped=true&lang=css");
/* harmony import */ var d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_VsudSelectGroup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_VsudSelectGroup_vue_vue_type_template_id_0fe9ee1c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-0fe9ee1c"],['__file',"resources/js/components/VsudSelectGroup.vue"]])
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

/***/ "./resources/js/views/components/tables/ProductsTableModerator.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/views/components/tables/ProductsTableModerator.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductsTableModerator_vue_vue_type_template_id_6891572b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsTableModerator.vue?vue&type=template&id=6891572b&scoped=true */ "./resources/js/views/components/tables/ProductsTableModerator.vue?vue&type=template&id=6891572b&scoped=true");
/* harmony import */ var _ProductsTableModerator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsTableModerator.vue?vue&type=script&lang=js */ "./resources/js/views/components/tables/ProductsTableModerator.vue?vue&type=script&lang=js");
/* harmony import */ var _ProductsTableModerator_vue_vue_type_style_index_0_id_6891572b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductsTableModerator.vue?vue&type=style&index=0&id=6891572b&scoped=true&lang=css */ "./resources/js/views/components/tables/ProductsTableModerator.vue?vue&type=style&index=0&id=6891572b&scoped=true&lang=css");
/* harmony import */ var d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ProductsTableModerator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductsTableModerator_vue_vue_type_template_id_6891572b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-6891572b"],['__file',"resources/js/views/components/tables/ProductsTableModerator.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/products/AddProduct.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/products/AddProduct.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddProduct_vue_vue_type_template_id_1e9a150a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddProduct.vue?vue&type=template&id=1e9a150a */ "./resources/js/views/products/AddProduct.vue?vue&type=template&id=1e9a150a");
/* harmony import */ var _AddProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddProduct.vue?vue&type=script&lang=js */ "./resources/js/views/products/AddProduct.vue?vue&type=script&lang=js");
/* harmony import */ var d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AddProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AddProduct_vue_vue_type_template_id_1e9a150a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/products/AddProduct.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/VsudSelectGroup.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/VsudSelectGroup.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VsudSelectGroup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VsudSelectGroup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VsudSelectGroup.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudSelectGroup.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/views/components/tables/ProductsTableModerator.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/components/tables/ProductsTableModerator.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductsTableModerator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductsTableModerator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductsTableModerator.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ProductsTableModerator.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/products/AddProduct.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/views/products/AddProduct.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddProduct.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/products/AddProduct.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/VsudSelectGroup.vue?vue&type=template&id=0fe9ee1c&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/VsudSelectGroup.vue?vue&type=template&id=0fe9ee1c&scoped=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VsudSelectGroup_vue_vue_type_template_id_0fe9ee1c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VsudSelectGroup_vue_vue_type_template_id_0fe9ee1c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VsudSelectGroup.vue?vue&type=template&id=0fe9ee1c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudSelectGroup.vue?vue&type=template&id=0fe9ee1c&scoped=true");


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

/***/ "./resources/js/views/components/tables/ProductsTableModerator.vue?vue&type=template&id=6891572b&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/views/components/tables/ProductsTableModerator.vue?vue&type=template&id=6891572b&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductsTableModerator_vue_vue_type_template_id_6891572b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductsTableModerator_vue_vue_type_template_id_6891572b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductsTableModerator.vue?vue&type=template&id=6891572b&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ProductsTableModerator.vue?vue&type=template&id=6891572b&scoped=true");


/***/ }),

/***/ "./resources/js/views/products/AddProduct.vue?vue&type=template&id=1e9a150a":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/products/AddProduct.vue?vue&type=template&id=1e9a150a ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddProduct_vue_vue_type_template_id_1e9a150a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddProduct_vue_vue_type_template_id_1e9a150a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddProduct.vue?vue&type=template&id=1e9a150a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/products/AddProduct.vue?vue&type=template&id=1e9a150a");


/***/ }),

/***/ "./resources/js/components/VsudSelectGroup.vue?vue&type=style&index=0&id=0fe9ee1c&scoped=true&lang=css":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/VsudSelectGroup.vue?vue&type=style&index=0&id=0fe9ee1c&scoped=true&lang=css ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VsudSelectGroup_vue_vue_type_style_index_0_id_0fe9ee1c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VsudSelectGroup.vue?vue&type=style&index=0&id=0fe9ee1c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudSelectGroup.vue?vue&type=style&index=0&id=0fe9ee1c&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=style&index=0&id=12f55d13&scoped=true&lang=css":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=style&index=0&id=12f55d13&scoped=true&lang=css ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MessagesTableModerator_vue_vue_type_style_index_0_id_12f55d13_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MessagesTableModerator.vue?vue&type=style&index=0&id=12f55d13&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/MessagesTableModerator.vue?vue&type=style&index=0&id=12f55d13&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/components/tables/ProductsTableModerator.vue?vue&type=style&index=0&id=6891572b&scoped=true&lang=css":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/views/components/tables/ProductsTableModerator.vue?vue&type=style&index=0&id=6891572b&scoped=true&lang=css ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductsTableModerator_vue_vue_type_style_index_0_id_6891572b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductsTableModerator.vue?vue&type=style&index=0&id=6891572b&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/tables/ProductsTableModerator.vue?vue&type=style&index=0&id=6891572b&scoped=true&lang=css");


/***/ })

}]);
//# sourceMappingURL=resources_js_views_products_AddProduct_vue.js.map