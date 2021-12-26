(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FD"] = factory();
	else
		root["FD"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports app, App */
/* harmony import */ var _es5_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(170);


const App = (0,_es5_class_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)("App")({
    $containers: null,

    boot: function () {
        this.containers = [];
    },
    /**
     * thêm dich vu
     * @param _class class ban muon binding
     * @returns boolean
     */
    add: function (_class, args) {
        for (let i = 0; i < this.containers.length; i++) {
            const c = this.containers[i];
            if (c._class == _class) return true;
        }

        this.containers.push({
            _class,
            _args: isArray(args) ? args : [],
            _instance: null
        });
        return true;
    },
    register: function (_class, args) {
        return this.add(_class, isArray(args) ? args : []);
    },
    remove: function (_class) {
        for (let i = 0; i < this.containers.length; i++) {
            const c = this.containers[i];
            if (c._class == _class) {
                this.containers.splice(i, 1);
                return true;
            }
        }
        return false;
    },
    has: function (_class) {
        for (let i = 0; i < this.containers.length; i++) {
            const c = this.containers[i];
            if (c._class == _class) return true;
        }
        return false;
    },
    instance: function (_class, args) {
        for (let i = 0; i < this.containers.length; i++) {
            const c = this.containers[i];
            if (c._class == _class) {
                if (c._instance) {
                    if (!args || args.length == 0) {
                        return c._instance;
                    }
                    return (0,_es5_class_js__WEBPACK_IMPORTED_MODULE_0__/* .createInstance */ .Fs)(c._class, args);
                } else {
                    c._instance = (0,_es5_class_js__WEBPACK_IMPORTED_MODULE_0__/* .createInstance */ .Fs)(c._class, args);
                    return c._instance;
                }
            }
        }
        let _instance = (0,_es5_class_js__WEBPACK_IMPORTED_MODULE_0__/* .createInstance */ .Fs)(_class, args);
        this.containers.push({
            _class,
            _args: isArray(args) ? args : [],
            _instance
        });
        return _instance;
    }
});

const _app = new App();
/**
 * tạo đối tượng
 * @param {*} _class_ 
 * @param {array} args 
 * @returns 
 */
const app = function (_class_, args) {
    return _app.instance(_class_, args);
}

Object.defineProperty(app, "containers", {
    configurable: false,
    enumerable: false,
    get: function () {
        return _app.containers;
    },
    set: function (v) {

    }
})
app.add = function (...args) {
    return _app.add(...args);
};
app.register = function (...args) {
    return _app.register(...args);
};
app.has = function (...args) {
    return _app.has(...args);
};
app.remove = function (...args) {
    return _app.remove(...args);
};
app.instance = function (...args) {
    return _app.instance(...args);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ 809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RL": () => (/* binding */ DomBag),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ut": () => (/* binding */ createEl),
/* harmony export */   "Ue": () => (/* binding */ create),
/* harmony export */   "bM": () => (/* binding */ getDomInf),
/* harmony export */   "is": () => (/* binding */ Dom),
/* harmony export */   "Je": () => (/* binding */ inputTypes),
/* harmony export */   "oE": () => (/* binding */ inputTags),
/* harmony export */   "ck": () => (/* binding */ htmlTags),
/* harmony export */   "ek": () => (/* binding */ domEvents)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(499);
/* harmony import */ var _es5_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(170);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(544);




const global = window;
const MS = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .date */ .hT)('ms');
const DEFAULT_VALUE = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));

const SHOW = 'SHOW' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const PENDING_CHILDREN = 'PENDING_CHILDREN' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const PENDING_CONTENTS = 'PENDING_CONTENTS' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const PARENT_NODE = 'PARENT_NODE' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const MARK_COMMENT = 'MARK_COMMENT' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const DATA_TYPES = 'DATA_TYPES' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const SYNC_CHANGE = 'SYNC_CHANGE' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const DATA_SYNC = 'DATA_SYNC' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const DYNAMIC_SYNC = 'DYNAMIC_SYNC' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const DYNAMIC_ATTRS = 'DYNAMIC_ATTRS' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const DATA_CONTAINERS = 'DATA_CONTAINERS' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const BUILDER = 'BUILDER' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const IS_STARTED = 'IS_STARTED' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const LISTENNERS = 'LISTENNERS' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const DOM_LISTENNERS = 'DOM_LISTENNERS' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));

const TRANSMISTION_LISTENNERS = 'TRANSMISTION_LISTENNERS' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const TRANSMISTION_STATUS = 'TRANSMISTION_STATUS' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const IS_BUILDED = 'IS_BUILDED' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));
const CAN_SET_CHILDREN = 'CAN_SET_CHILDREN' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(MS));



var $document = window.document,
    div = $document.createElement("div"),
    simpleTags = ['img', 'meta', 'link', 'input', 'br', 'hr'],
    createElement = $document.createElement;

/**
 * thao tác với dom thông qua html query gần giống jquery nhưng ít chức năng hơn
 */
var domEvents = (
    "blur focus focusin focusout resize scroll click dblclick " +
    "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
    "change select submit keydown keypress keyup contextmenu load input"
).split(" ");
var allEvents = (
    "abort afterprint animationend animationiteration animationstart beforeprint beforeunload blur canplay canplaythrough " +
    "change click contextmenu copy cut dblclick drag dragend dragenter dragleave dragover dragstart drop durationchange " +
    "ended error focus focusin focusout fullscreenchange fullscreenerror hashchange input invalid keydown keypress keyup " +
    "load loadeddata loadedmetadata loadstart message " +
    "mousedown mouseenter mouseleave mousemove mouseover mouseout mouseup mousewheel pointerdown pointerup pointermove " +
    "offline online open pagehide pageshow paste pause play playing popstate progress ratechange resize reset scroll " +
    "search seeked seeking select show stalled storage submit suspend timeupdate toggle " +
    "touchcancel touchend touchmove touchstart transitionend unload volumechange waiting wheel"
).split(" ").filter(function (s) { return s.length > 0 });

// danh sách tag hợp lệ
var htmlTags = ("a abbr acronym address applet area article aside audio b base basefont bb bdo big blockquote body br button canvas caption center cite code col colgroup command datagrid datalist dd del details dfn dialog dir div dl dt em embed eventsource fieldset figcaption figure font footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr  html i iframe img input ins isindex kbd keygen label legend li link map mark menu meta meter nav noframes noscript object ol optgroup option output p param pre progress q rp rt ruby s samp script section select small source span strike strong style sub sup table tbody td textarea tfoot th thead time title tr track tt u ul var video wbr").split(" ");


/**
* mảng chứ các event sự kiện
* mỗi phần tử trong mảng chứa element, tên sự kiện, handle, và task
* task là một danh sách gồm callback và data
*/
var events = [];


var inputTypes = [
    "button", "submit", "image", "reset", "checkbox", "radio", // click

    "color", "range",
    "file", "hidden",

    "date", "datetime-local", "month", "time", "week",

    "text", "number", "email", "password", "search", "tel", "url"

];
var inputTags = ['input', 'textarea', 'select'];


var $window = null, $root = null;

var oneTimeData = {};

var isset = false;

/**
 * 
 */
var stopCallChildrenTask = {};

var curremtCallChildrenMethodID = null;
/**
 * các phương thức và thuộc tính của dom element
 */

/**
 * Lấy ra phần tử cha có kết quả trùng khớp
 * @param {Element} element
 * @param {string|Element|Query|Dom} selector 
 * @returns {Element}
 */
function closest(selector, element) {
    if (!element) return null;
    if (selector == undefined) return element ? element.parentNode || null : null;
    var finder = [];
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(selector)) {
        if (selector.isDom) {
            finder.push(selector.el);
        }
        else if (selector.isQuery) {
            for (var index = 0; index < selector.length; index++) {
                var el = selector[index];
                finder.push(el);
            }
        }
        else if (selector instanceof Element) {
            finder.push(selector);
        }
    }
    else if (selector instanceof Element) {
        finder.push(selector);
    }
    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(selector)) {
        var els = document.querySelectorAll(selector);
        if (els.length) {
            for (var index = 0; index < els.length; index++) {
                var el = els[index];
                finder.push(el);
            }
        }
    }
    var closestList = null;
    var findLength = finder.length;
    if (findLength) {
        var parents = getParentNodes(element);
        var parentLength = parents.length;
        var parent = undefined, find = undefined;

        for (let n = 0; n < parentLength; n++) {
            parent = parents[n];
            for (let m = 0; m < findLength; m++) {
                find = finder[m];
                if (parent == find) {
                    closestList = parent;

                    m += findLength;
                    n += parentLength;
                }
            }
        }

    }
    return closestList;
}


/**
 * Tạo đối tượng dom
 * @param {string|object} selector
 * @param {string|Element|string[]|Element[]} children
 * @param {object} attributes
 * @returns {DomEl}
 * @note {string} Đoạn này thật ra không cần thiết. nhưng viết bào để trình soạn thảo sử dụng gợi ỳ
 */
//  var Dom = function Dom(selector, children, attributes):DomEl {
//     this.setup.apply(this, getArguments(arguments));
//     this.isDom = true;
//     return this;
// };

var dataContainers = [];

function getDataBag(_class) {
    let bag = {};
    let classes = (0,_es5_class_js__WEBPACK_IMPORTED_MODULE_1__/* .getClassData */ .VG)(_class).parents.slice(0);
    classes.push(_class);
    classes.map(function (c) {
        dataContainers.map(function (container) {
            if (container._class == c) {
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(container.data)) {
                    for (const scope in container.data) {
                        if (Object.prototype.hasOwnProperty.call(container.data, scope)) {
                            const d = container.data[scope];
                            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .objectHasKey */ .aX)(bag, scope)) bag[scope] = {};
                            if (scope == 'data') {
                                (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(bag[scope], d);
                            }
                            else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['args', 'arguments', 'params'], scope)) {
                                bag[scope] = d;
                            }
                            else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(d)) {
                                for (const key in d) {
                                    if (Object.prototype.hasOwnProperty.call(d, key)) {
                                        const v = d[key];
                                        bag[scope][key] = v;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
    });
    return bag;
}

// Dom.prototype.isDom = true;

class DomBag {
    domClass = null;
    args = [];
    isDomBag = true;
    constructor(_dom, args) {
        this.domClass = _dom;
        this.args = args;
    }
    make() {
        return (0,_es5_class_js__WEBPACK_IMPORTED_MODULE_1__/* .createInstance */ .Fs)(this.domClass, this.args);
    }
    withParent(parent) {
        let args = this.args.slice(0);
        args.push({ parent })
        return (0,_es5_class_js__WEBPACK_IMPORTED_MODULE_1__/* .createInstance */ .Fs)(this.domClass, args);
    }
}

var DomClassData = {};
var DomPendingClassData = [];
/**
 * them dom data
 * @param {string} instanceID id cua doi tuong
 * @param {*} data 
 */
function addDomClassData(instanceID, data) {
    if (typeof DomClassData[instanceID] == "undefined") DomClassData[instanceID] = {};
    if (data && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(data)) (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(DomClassData, instanceID, data);
}

function getDomDataValue(instanceID, key, value) {
    return typeof DomClassData[instanceID] == "object" ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getEl */ .Gn)(DomClassData[instanceID], key, value) : value;
}
function setDomDataValue(instanceID, key, value) {
    if (typeof DomClassData[instanceID] == "undefined") DomClassData[instanceID] = {};
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(key)) DomClassData[instanceID][key] = value;
    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(key)) (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(DomClassData, instanceID, key);
}

function getDomClassPendingDAta(classCTX) {
    for (let index = 0; index < DomPendingClassData.length; index++) {
        const wrapper = DomPendingClassData[index];
        if (wrapper.$class == classCTX) return wrapper.data;
    }
    var w = {}
    DomPendingClassData.push({ $class: classCTX, data: w });
    return w;
}

function setDomClassPendingData(classCTX, key, value) {
    var wrap = getDomClassPendingDAta(classCTX);
    if (isString(key)) {
        wrap[key] = value;
    }
    else if (isObject(key)) {
        assignValue(wrap, key);
    }
}

function addPendingData(_classCtx, data) {

}
/**
 * Class Dom
 * @param {string} selector css selewctor of element
 * @param {Dom|Dom[]} children Dom con
 * @param {Object<key:value>} attributes thuộc tính
 */
var Dom = function Dom(selector, children, attributes){

    this.__instance__id__ = DEFAULT_VALUE;
};
Dom = (0,_es5_class_js__WEBPACK_IMPORTED_MODULE_1__/* ._class */ .nN)("Dom")({
    static$isDomClass: true,
    $el: null,
    // const$isQuery: true,
    const$isDom: true,
    $tagName: null,
    $id: "",
    $className: "",

    $children: null,
    $parent: null,

    static$makeClass: function(name, props){
        var wrapper = (0,_es5_class_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(name, isGlobal).extends(this);
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(props)?wrapper(props): wrapper;
    },
    static$maker: function(name, props){
        try {
            var wrapper = (0,_es5_class_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(name, isGlobal).extends(this);
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(props)?wrapper(props): wrapper;
        } catch (error) {
            console.warn(error);
        }
        // var wrapper = createClass(name, isGlobal).extends(this);
        // return isObject(props)?wrapper(props): wrapper;
    },
    /**
     * 
     * @param {*} props thuộc tính
     * @param {string} scope phạm vi thuộc tính
     * @param {function(*)} resolve 
     * @param {function(props)} reject đẩy ra
     * @param {function} classCTX 
     */
    __prepare__: function (props, scope, resolve, reject, classCTX) {
        let c = this;
        let hasData = false;
        let data = {};
        let p = {};
        for (const key in props) {
            if (Object.prototype.hasOwnProperty.call(props, key)) {
                const vl = props[key];
                let k = key.toLowerCase();
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['data', 'services', 'params', 'args'], k)) {
                    hasData = true;
                    data[k] = vl;
                    delete props[key];
                }
                else if (k == 'dynamiccreate') {
                    p.allowDynamicCreate = vl;
                    hasData = true;
                    delete props[key];
                }
                else {
                    p[key] = vl;
                }
            }
        }
        if (hasData) {
            for (let index = 0; index < dataContainers.length; index++) {
                const container = dataContainers[index];
                if (container._class == c) {
                    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(container.data, data);
                    return p;
                }

            }
            dataContainers.push({ _class: c, data: data })
        }
        return p;
    },

    __commit__: function (classData) {

        if (!classData.props.tagName && !classData.constants.tagName && !classData.accessors.tagName.value) {
            var s = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.camelToSlug */ .W3.camelToSlug(this.__class__);
            if (s != 'dom' && s!="component") {
                if (!classData.accessors.tagName)
                    classData.accessors.tagName = {
                        value: s
                    };
                else
                    classData.accessors.tagName.value = s;
            }

        }
    },
    __boot__: function () {
        addDomClassData(this.__instance__id__, {});
        this.__set__(TRANSMISTION_LISTENNERS, {
            fromChildren: {},
            fromParent: {},
            fromSiblings: {},
            events: {}
        })
            .__set__(TRANSMISTION_STATUS, true)
            .__set__(PENDING_CHILDREN, [])
            .__set__(PENDING_CONTENTS, [])
            .__set__(LISTENNERS, {})
            .__set__(DOM_LISTENNERS, [])
            .__set__(DATA_CONTAINERS, [])
            .__set__(PARENT_NODE, null)
            .__set__(SHOW, false)
            .__set__(MARK_COMMENT, null)
            .__set__(CAN_SET_CHILDREN, true)
            .__set__(DYNAMIC_ATTRS, {})
            .__set__(DATA_TYPES, {})
            .__set__(SYNC_CHANGE, true)
            .__set__(DATA_SYNC, true)


        this.children = [];

        this.__set__(CAN_SET_CHILDREN, false);
        bootData.apply(this, []);
        if (oneTimeData && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(oneTimeData) && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(oneTimeData)) {
            for (const key in oneTimeData) {
                if (Object.hasOwnProperty.call(oneTimeData, key)) {
                    const value = oneTimeData[key];
                    this[key] = value;
                }
            }
            oneTimeData = {};
        }
        ___assignDynamicProperties___.call(this);

    },

    __before__init__: function () {

    },

    __init__: function () {
        if (!this.el) {
            this.setup(this.getDefaultSelector());
            
        }

        this.__before__init__();
        var self = this;

        if (typeof this.onInit == "function") {
            this.onInit();
        }

        if (this.autoRender) {
            __buildChildren__.call(this);

        }else{
            __build__.call(this);
        }

        // bắt sự kiện change và thay đổi cá thuộc tính dộng cho nó dồng bộ
        this.on("change", function (event) {
            if (event.target == self.el) {
                if (this.__get__(DYNAMIC_SYNC)) {
                    var attrs = self.attr();
                    var __dynamicAttrs = this.__get__(DYNAMIC_ATTRS);
                    for (var key in __dynamicAttrs) {
                        if (Object.hasOwnProperty.call(dyna1micAttrs, key)) {
                            var val = __dynamicAttrs[key];
                            var camelKey = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.slugToCamel */ .W3.slugToCamel(key),
                                slugKey = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.camelToSlug */ .W3.camelToSlug(key);
                            var s = null;
                            var v = null;
                            if (Object.hasOwnProperty.call(attrs, key) && attrs[key] != val) {
                                __dynamicAttrs[key] = attrs[key]
                                s = key;
                                v = attrs[key];
                            }
                            else if (Object.hasOwnProperty.call(attrs, slugKey) && attrs[slugKey] != val) {
                                __dynamicAttrs[key] = attrs[slugKey];
                                s = camelKey;
                                v = attrs[slugKey];
                            }
                            else if (Object.hasOwnProperty.call(attrs, camelKey) && attrs[camelKey] != val) {
                                __dynamicAttrs[key] = attrs[camelKey];
                                s = slugKey;
                                v = attrs[camelKey];
                            }

                            if (s) {
                                self.trigger({
                                    type: "change.attr." + s,
                                    preventDefault: function () {
                                        // stt = false;
                                    },
                                    target: self.el,
                                    data: {
                                        attr: s,
                                        value: v
                                    }
                                });
                            } // end if status == true
                        } // end has prop
                    } // wnd for
                } // end if dynamic sync
            } // end if target == el
        }) // end call 

        if (typeof this.onAferInit == "function") {
            this.onAferInit();
        }

    },


    __set__: function (key, value) {
        setDomDataValue(this.__instance__id__, key, value);
        return this;
    },
    __get__: function (key, value) {
        return getDomDataValue(this.__instance__id__, key, value);
    },

    constructor: function Dom() {
        this.setElement.apply(this, arguments);
        __build__.call(this);
        this.__test__key__ = true;
    },



    __call__: function (...args) {
        return (0,_es5_class_js__WEBPACK_IMPORTED_MODULE_1__/* .createInstance */ .Fs)(this, args);
    },


    /**
     * thay thế / thêm nội dung cho thẻ
     * @param {Element|Dom|string|Element[]|Dom[]|string[]} content nội dung
     */
     final$render: function (content) {
        this.clear();
        if (typeof this.onBeforeRender == "function") {
            this.onBeforeRender();
        }
        this.emit("rendering");
        this.append(content);
        if (typeof this.onAfterRender == "function") {
            this.onAfterRender();
        }
        this.emit("rendered");
        
    },
    clear: function(){
        if (typeof this.onBeforeClear == "function") {
            this.onBeforeClear();
        }
        this.removeChild();
        if (typeof this.onAfterClear == "function") {
            this.onAfterClear();
        }
    },

    __destroy__: function destroy() {
        if (typeof this.onDestroy == "function") {
            this.onDestroy();
        }
        this.emit("destroy");
        this.off();
    },
    const$renderChildren: function () {

        this.removeChild();

        if (typeof this.onBeforeRenderChildren == "function") {
            this.onBeforeRenderChildren();
        }
        this.emit('children.rendering');
        var _pendingChildren = this.__get__(PENDING_CHILDREN);
        
        if (_pendingChildren.length) {
            while (_pendingChildren.length) {
                var a = _pendingChildren.shift();
                this.append(a);
            }
        }
        var _pendingContents = this.__get__(PENDING_CONTENTS);
        if (_pendingContents.length) {
            while (_pendingContents.length) {
                var a = _pendingContents.shift();
                this[a.key] = a.content;
                this.append(a.content);
            }
        }
        if (typeof this.onAfterRenderChildren == "function") {
            this.onAfterRenderChildren();
        }
        this.emit('children.rendered');
        this.__set__(IS_BUILDED, true);
    },
    /**
     * thiết lập
     * @param {string|object}
     */
    const$setElement: function setElement(params) {
        var args = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getArguments */ .Tu)(arguments);
        if (args.length && typeof args[0] != "string") {
            args.unshift(this.getDefaultSelector());
        }
        var elem = create.apply(this, args);

        var el = elem.el;
        if (el) {
            if(!this.tagName && this.static.__class__ == "DOM"){
                this.tagName = elem.tag;
            }
            
            if (!el.id && this.id) el.id = this.id;
            if (!el.className && this.className) el.className = this.className;

            this.el = el;
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(elem.__dynamicAttrs)) {
                addDynamicAttr.call(this, elem.__dynamicAttrs);
            }
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(elem.dataTypeAttrs)) {
                for (const key in elem.dataTypeAttrs) {
                    if (Object.hasOwnProperty.call(elem.dataTypeAttrs, key)) {
                        const vl = elem.dataTypeAttrs[key];
                        setDataTypeAttribute.call(this, key, vl);
                    }
                }
            }
            if (elem.contents && elem.contents.length) {
                // this._pendingContents = elem.contents;
                var _pendingChildren = this.__get__(PENDING_CHILDREN);
                for (var index = 0; index < elem.contents.length; index++) {
                    _pendingChildren.push(elem.contents[index]);

                }
            }
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(elem.events)) {
                this.on(elem.events);
            }
            if (elem.parent) {
                this.parent = elem.parent;
            }

            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(elem.methods)) {
                for (var method in elem.methods) {
                    if (Object.hasOwnProperty.call(elem.methods, method)) {
                        var fn = elem.methods[method];
                        // console.log(method, fn)
                        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._defineProperty */ .w2)(this, method, fn);
                    }
                }
            }

        }

        this.__set__(IS_STARTED, true);
        return this;
    },
    /**
     * giống element
     * @param {*} args thông tin element
     */
    final$setup: function setup(args) {
        return this.setElement.apply(this, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getArguments */ .Tu)(arguments));
    },

    const$getDefaultSelector: function () {
        if (this.selector) return this.selector;
        return "div#" + (
            this.id ? this.id : _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand()
        ) + "." + (
                this.className ? this.className.split(" ").map(function (v) {
                    return v.trim();
                }).filter(function (v) {
                    return v.length > 0;
                }).join('.') : 'dom-element'
            );
    },


    /**
     * chuẩn hóa hàn lắng nghe sự kiện
     * @param {string|function} handler tên phương thức hoạc hàm handler
     * @returns function
     */

    parseEventHandler: function (handler) {
        var self = this;
        var element = this.el;

        var fnt = handler ? handler : function (e) {
            console.log(e);
        };

        if (typeof handler == "string") {
            var instanceID = undefined;


            var handleInfo = handler.split(".");
            if (handleInfo.length == 2) {
                instanceID = handleInfo[0];
                handler = handleInfo[1];
            }
            var params = [];
            var handleParams = handler.split(":");
            if (handleParams.length == 2) {
                handler = handleParams[0];
                params = handleParams[1].split(",").map(function (s) { return s.trim(); });

            }

            if (this.parent && this.parent.isDom) {

                if (!instanceID) {
                    params.unshift(handler);
                    var fn = self.getTreeMethod.apply(self, params);
                    if (fn) {
                        fnt = fn;
                    }
                    else fnt = function (e) {
                        e.component = self;
                    };
                } else {
                    fnt = function (e) {
                        // e.preventDefault();
                        e.component = self;
                        var args = [e];

                        params.map(function (p) { args.push(p); });
                        if (!instanceID) {
                            params.unshift(handler);
                            var fn = self.getTreeMethod.apply(self, params);

                            if (typeof fn == "function") {
                                return fn.apply(self, args);
                            }
                        }

                        if (typeof self[handler] == "function") {
                            return self[handler].apply(self, args);
                        } else {
                            return self.callChildrenMethod(handler, args, instanceID);
                        }
                    };
                }
            }
            else {
                fnt = function (e) {
                    // e.preventDefault();
                    e.component = self;
                    var args = [e];
                    params.map(function (p) { args.push(p); });
                    if (!instanceID) {
                        params.unshift(handler);
                        var fn = self.getTreeMethod.apply(self, params);

                        if (typeof fn == "function") {
                            return fn.apply(self, args);
                        }
                    }

                    if (typeof self[handler] == "function") {
                        return self[handler].apply(self, args);
                    } else {
                        return self.callChildrenMethod(handler, args, instanceID);
                    }
                };
            }

        }
        else if (typeof handler == "function") {
            fnt = function (e) {
                return handler.call(self, e);
            };
        }

        return fnt;
    },

    /**
     * lắng nghe sự kiện
     * @param {string} type loại hoạc tên sự kiện
     * @param {function|string} handler hàm hoặc tên phương thức xử lý sự kiện
     * @param {boolean} passed tham số báo có cần kiểm tra hay ko
     * @returns this
     */
    addEventListener: function (type, handler, passed) {
        var self = this;
        var element = this.el;
        var listener = passed === DEFAULT_VALUE ? handler : this.parseEventHandler(handler);

        var _listeners = this.__get__(LISTENNERS);
        if (_listeners === undefined || _listeners === null) _listeners = {};

        type = String(type).toLowerCase();



        if (isDomEvent(type)) return this.addDomEvent(type, listener, DEFAULT_VALUE);
        const listeners = _listeners;

        if (listeners[type] === undefined) {

            listeners[type] = [];

        }

        if (listeners[type].indexOf(listener) === - 1) {

            listeners[type].push(listener);

        }

        return this;
    },

    hasEventListener: function (type, listener) {
        var _listeners = this.__get__(LISTENNERS);
        if (_listeners === undefined || _listeners === null) return false;

        type = String(type).toLowerCase();
        return _listeners[type] !== undefined && _listeners[type].indexOf(listener) !== - 1;

    },

    removeEventListener: function (type, listener) {
        var _listeners = this.__get__(LISTENNERS);
        if (_listeners === undefined || _listeners === null) return;
        type = String(type).toLowerCase();
        if (isDomEvent(type)) return this.off.apply((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getArguments */ .Tu)(arguments));
        const listeners = _listeners;
        const listenerArray = listeners[type];

        if (listenerArray !== undefined) {
            if (!type) {
                listenerArray.splice(0, listenerArray.length);
                return this;
            }
            const index = listenerArray.indexOf(listener);

            if (index !== - 1) {

                listenerArray.splice(index, 1);

            }

        }

        return this;
    },


    dispatchEvent: function (event) {

        var _listeners = this.__get__(LISTENNERS);
        if (_listeners === undefined || _listeners === null) return;

        if (isDomEvent(event.type)) return this.trigger.apply(this, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getArguments */ .Tu)(arguments));
        const listeners = _listeners;
        const listenerArray = listeners[event.type];

        if (listenerArray !== undefined) {

            var s = true;
            event.target = this.el;

            event.stopImmediatePropagation = function () {
                s = false;
            }
            // Make a copy, in case listeners are removed while iterating.
            const array = listenerArray.slice(0);

            for (var i = 0, l = array.length; i < l; i++) {

                array[i].call(this, event);
                if (!s) break;

            }
            return s;

        }

    },

    /**
     * lắng nghe sự kiện của dom
     * @param {string} type loại hoạc tên sự kiện
     * @param {function|string} handler hàm hoặc tên phương thức xử lý sự kiện
     * @param {boolean} passed tham số báo có cần kiểm tra hay ko
     * @returns this
     */
    addDomEvent: function (event, handler, passed) {
        var self = this;
        var element = this.el;
        var listener = passed === DEFAULT_VALUE ? handler : this.parseEventHandler(handler);


        if (!isDomEvent(event)) return this.addEventListener(event, listener, DEFAULT_VALUE);
        const _domlisteners = this.__get__(DOM_LISTENNERS);
        event.split(" ").filter(function (evt) { return (allEvents.indexOf(evt) >= 0); }).map(function (evt) {
            addEvent(element, evt, listener, null);
            if (_domlisteners.indexOf(evt) == -1) _domlisteners.push(evt);
        });
        return this;
    },
    hasEvent: function (event, listener) {
        return isDomEvent(event) ? hasEvent(this.el, event, listener) : this.hasEventListener(event, listener);
    },
    /**
     * Huỷ sự kiện 
     * @param {string} events Danh sách sự kiện
     * @param {function} handler 
     * @returns {Query|Dom}
     */
    off: function (events, handler) {
        handler = handler || null;
        const _domlisteners = this.__get__(DOM_LISTENNERS);
        if (this.el) {
            var evs = (events && events.length) ? events.split(" ") : domEvents;
            if (evs.length) {
                for (var j = 0; j < evs.length; j++) {
                    var ev = evs[j];
                    if (!isDomEvent(ev)) {
                        this.removeEventListener(ev, handler);
                    }
                    else {
                        removeEvent(this.el, ev, null, handler);
                        var ind = _domlisteners.indexOf(ev);
                        if (ind != -1) _domlisteners.splice(ind, 1);
                    }

                }

            } else {
                this.removeEventListener();
                removeEvent(this.el);
                _domlisteners.splice(0, _domlisteners.length);
            }
        }
        return this;
    },
    /**
     * Gán sự kiện
     * @param {string|Event} event sự kiện
     * @returns {Query|Dom}
     */
    trigger: function trigger(event, data) {
        var ev = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(event) ? event : (event ? event.type : null);
        var e = !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(event) ? { type: ev } : event;
        var el = this.el;
        if (!e.target) {
            e.target = el;
        }
        if (!e.data && data !== undefined) e.data = data;
        if (!isDomEvent(ev)) return this.dispatchEvent(e);

        triggerEvent(el, ev, e);
        return this;
    },

    emit: function () {
        return this.trigger.apply(this, arguments);
    },
    /**
     * Huỳ sự kiện
     */
    unbind: function () {
        this.off.apply(this, arguments);
        return this;
    },
    /**
     * lang nghe su kien
     * @param {string} event tên sự kiện
     * @param {function(Event)} handler hàm xử lý sự kiện
     * @returns {this}
     * 
     */
    on: function on(event, handler) {
        var self = this;
        const __transmissionEventListeners = this.__get__(TRANSMISTION_LISTENNERS);
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(event)) {
            var args = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getArguments */ .Tu)(arguments);
            if (isDomEvent(event)) {
                return self.addDomEvent.apply(this, args);
            }
            var s = event.toLowerCase().split(".");
            if (event == 'transmission' || (s.length > 1 && s[0] == 'transmission')) {
                event = event.toLowerCase();
                if (typeof handler != "function") return this;
                if (event != 'transmission') {
                    if (typeof __transmissionEventListeners.events[event] == "undefined") {
                        __transmissionEventListeners.events[event] = [];
                    }
                    __transmissionEventListeners.events[event].push(handler);
                } else {
                    if (typeof __transmissionEventListeners.events.transmission == "undefined") {
                        __transmissionEventListeners.events.transmission = [];
                    }
                    __transmissionEventListeners.events.transmission.push(handler);
                }
                return this;
            }
            else if (event.split(" ").length > 1) {
                return this.on(event.split(" ").filter(function (e) { return e.length > 0 }), handler);
            }
            else {
                this.addEventListener(event, handler);
            }

        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(event)) {
            event.map(function (e) {
                self.on(e, handler);
            })
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(event)) {
            for (var key in event) {
                if (Object.hasOwnProperty.call(event, key)) {
                    this.on(key, event[key]);
                }
            }
        }
        return this;
    },
    /**
     * lấy về một callback đến hàm hiện tại
     * @param {string} method tên phương thức
     * @returns {function(e)}
     */
    const$fn: function fn(method) {
        var self = this;
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(method) || typeof self[method] != "function") return function (e) { console.log(e) };
        var args = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getArguments */ .Tu)(arguments);
        var fn = self[method];
        return function (e) {
            e.component = this;
            args[0] = e;
            return fn.apply(self, args);
        };
    },


    /**
     * lấy về một callback đến hàm hiện tại
     * @param {string} method tên phương thức
     * @returns {function(Event)}
     */
    const$getTreeMethod: function getTreeMethod(method) {
        var self = this;
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(method)) return function (e) { console.log(e) };
        var args = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getArguments */ .Tu)(arguments);
        if (typeof self[method] != "function") {
            if (this.parent && typeof this.parent.getTreeMethod == "function") {
                return this.parent.getTreeMethod.apply(this.parent, args);
            }
            return null;
        }

        var fn = self[method];
        return function (e) {
            e.component = this;
            args[0] = e;
            return fn.apply(self, args);
        };
    },
    /**
     * Kiểm tra phần từ có trùng khớp với trạng thái hay phần tử đầu vào hay không
     * @param {string|Element} selector 
     * @returns {boolean}
     */
    is: function is(selector, el) {
        var e = null;
        if (el) {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(el)) {
                if (el.isDom) {
                    e = el.el;
                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(el, Element)) {
                    e = el;
                }
                else return false;
            }
            else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(el)) {
                var elm = $document.querySelectorAll(el);
                if (elm.length) {
                    e = elm;
                }
                else return false;
            }
            else return false;
        }
        else if (this.el) {
            e = this.el;
        }
        else {
            return false;
        }


        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(selector)) {
            if (selector.length > 1 && selector.substring(0, 1) == ":") {
                var s = selector.substring(1);
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(e, Element)) return (typeof e[s] != 'undefined' && e[s]) ? true : false;
                for (let i = 0; i < e.length; i++) {
                    const ell = e[i];
                    if (typeof ell[s] != 'undefined' && ell[s]) return true;
                }
                return false;
            }
            var elem = $document.querySelectorAll(selector);
            for (let i = 0; i < elem.length; i++) {
                const ele = elem[i];
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(e, Element)) {
                    if (e == ele) return true;
                }
                else if (e.length) {
                    for (let j = 0; j < e.length; j++) {
                        const ee = e[j];
                        if (ee == ele) return true;
                    }
                }
            }

        }
        if (selector instanceof Element) {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(e, Element)) {
                if (e == selector) return true;
            }
            else if (e.length) {
                for (let j = 0; j < e.length; j++) {
                    const ee = e[j];
                    if (ee == selector) return true;
                }
            }
        }
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(selector) && selector.isDom) {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(e, Element)) {
                if (e == selector.el) return true;
            }
            else if (e.length) {
                for (let j = 0; j < e.length; j++) {
                    const ee = e[j];
                    if (ee == selector.el) return true;
                }
            }
        }

        return false;
    },

    closest: function (selector, el) {
        if (!(el instanceof Element)) el = this.el;
        return closest(selector, el);
    },


    getProp: function (prop, all) {
        if (!this.el) return "";
        return (typeof this.el[prop] != "undefined") ? this.el[prop] : null;
    },
    setProp: function (prop, value) {
        if (!this.el) return this;
        var props = {};
        if (typeof prop == "object") {
            props = prop
        } else {
            props[prop] = value;
        }
        // var elements = this.getElements();
        for (var p in props) {
            if (props.hasOwnProperty(p)) {
                var val = props[p];
                this.el[prop] = val;
            }
        }

        return this;
    },

    removeProp: function (prop) {
        if (typeof prop != "undefined") {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(prop)) prop = [prop];
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(prop)) {
                prop.map(function (p) {
                    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(p)) {
                        delete this.el[p];
                    }
                })
            }
        }
        return this;
    },

    /**
     * 
     * @param {string|string{}} prop 
     * @param {*} value 
     */
    prop: function (prop, value) {
        if (!this.el) return this;
        if (prop) {
            if (typeof value != "undefined") {

                if (value === false) {
                    this.el[prop] = value;
                    delete this.el[prop];
                }
                else this.el[prop] = value;
                return this;
            } else {
                return this.el[prop] || null;
            }
        } else {
            var props = {};
            for (var key in this[0]) {
                if (this.el.hasOwnProperty(key)) {
                    var propVal = this.el[key];
                    props[key] = propVal;
                }
            }
            return props;
        }
    },
    val: function val(value) {
        if (typeof value == "undefined" || value === null) {
            var input = this.el;
            var tag = input.tagName.toLowerCase();
            var type = input.getAttribute("type");
            if (tag == "textarea" || type == "textarea") {
                return input.value || input.innerText;
            } else if (["radio", "checkbox"].indexOf(type) >= 0) {
                if (input.checked) {
                    if (input.value != undefined) {
                        return input.value;
                    } else {
                        return "on";
                    }
                }
                return null;
            }
            else {
                return input.value;
            }
        } else {
            var input = this.el;
            var tag = input.tagName.toLowerCase();
            if (tag == "textarea") {
                input.innerText = value
            } else {
                input.value = value;
            }
        }

        return this;
    },

    getHtml: function () {
        if (!this.el || isGlobalOrRoot(this.el)) return "";
        return this.el.innerHTML;
    },
    setHtml: function (html) {
        if (this.el) {
            this.removeChild();
            this.el.innerHTML = html;
        }
        return this;
    },
    html: function (str) {
        if (this.el) {
            if (typeof str == "undefined" || str === null) {
                return this.getHtml();
            } else {
                this.setContent(str)
            }
        }
        return this;
    },
    getAttribute: function (attr) {
        return this.el ? this.el.getAttribute(attr) : null;
    },
    setAttribute: function (attr, value) {
        this.el.setAttribute(attr, value);
        return this;
    },
    attr: function attr(attr, value) {
        if (typeof attr == "undefined" || attr === null) {
            return this.el ? this.el.attributes : {};
        }
        else if ((typeof value == "undefined" || value === null) && typeof attr != "object") {
            return this.getAttribute(attr);
        }
        else if (typeof attr != "undefined" && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getType */ .oL)(attr) == "object") {

            for (var key in attr) {
                if (attr.hasOwnProperty(key)) {
                    var ava = attr[key];
                    this.setAttribute(key, value)
                }
            }
        }

        return this.setAttribute(attr, value)
    },
    attrData: function (key) {
        if (!this.el) return null;
        if (!this.__data) {
            var data = {};
            var dataRaw = {};

            var attrs = this.el.attributes;
            if (attrs.length) {
                for (var i = 0; i < attrs.length; i++) {
                    var attr = attrs[i];
                    if (attr.name.toLowerCase().indexOf("data-") === 0) {
                        var a = attr.name.substring(5);
                        dataRaw[a] = attr.value;
                        var b = a.split("-");
                        var c = b.shift();
                        var d = b.map(function (v) { return _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.ucfirst */ .W3.ucfirst(v) });
                        var k = c + (d.length ? d.join("") : "");
                        data[k] = attr.value;
                    }
                }
            }
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._defineProperty */ .w2)(this, '__data', {
                raw: dataRaw,
                parse: data
            });
        }
        if (typeof key == "undefined" || key == null) {
            return this.__data.parse;
        }
        if (typeof key == "string") {
            return (typeof this.__data.raw[key] != "undefined") ? this.__data.raw[key] : null;
        }
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(key)) {
            var arrData = {};
            for (var i = 0; i < key.length; i++) {
                var kk = key[i];
                if (typeof this.__data.raw[kk] != "undefined") {
                    arrData[kk] = this.__data.raw[kk];
                }
            }
            return arrData;
        }
        return null;
    },
    /**
     * thêm class
     * @param {string} className 
     */
    addClass: function (className) {
        var classlist = [];
        var mapFunc = function (val) {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(val)) {
                classlist.push(val);
            } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(val)) {
                val.map(mapFunc);
            }
        };
        if (arguments.length) {
            for (var i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(arg)) {
                    mapFunc(arg.split(" ").map(function (v) {
                        return v.trim();
                    }).filter(function (v) { return v.length > 0 }));
                } else {
                    mapFunc(arg);
                }

            }

        }
        var self = this;
        classlist.map(function (str) {
            self.el.classList.add(str);
        });
        return this;
    },

    removeClass: function (classname) {
        var classlist = [];
        var mapFunc = function (val) {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(val)) {
                classlist.push(val);
            } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(val)) {
                val.map(mapFunc);
            }
        };
        var args = [];
        var self = this;
        if (arguments.length) {
            for (var i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(arg)) {
                    mapFunc(arg.split(" ").map(function (v) {
                        return v.trim();
                    }).filter(function (v) { return v.length > 0 }));
                } else {
                    mapFunc(arg);
                }
            }
            classlist.map(function (str) {
                self.el.classList.remove(str);
            });
        } else {
            self.el.className = "";
        }
        return this;
    },

    hasClass: function (classname) {
        if (this.el) {
            return this.el.classList.contains(classname);
        }
        return false;
    },

    css: function (prop, value) {
        var self = this;
        if (!this.el) {
            return {};
        }
        else if (!prop) {
            return this.el.style;
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(prop) && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(value)) {
            var style = this.el.style;
            var p = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.camelToSlug */ .W3.camelToSlug(prop, '-');
            var s = p[0].toLowerCase() + prop.substr(1);
            if (Object.hasOwnProperty.call(style, p)) return style[p];
            if (Object.hasOwnProperty.call(style, s)) return style[s];
            return "";
        }
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(prop)) {
            setCssProp(this.el, prop, value);
        } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(prop)) {
            for (var key in prop) {
                if (prop.hasOwnProperty(key)) {
                    var v = prop[key];
                    setCssProp(this.el, key, v);
                }
            }
        }
        return this;
    },

    height: function (height) {
        return typeof height == "undefined" ? (this.el ? (this.el.clientHeight || this.el.offsetHeight) : 0) : this.css({ height: height });
    },
    width: function (width) {
        return typeof width == "undefined" ? (this.el ? (this.el.clientWidth || this.el.offsetWidth) : 0) : this.css({ width: width });
    },
    /**
     * Thêm phần tử con vào cuối danh danh sách phần tử con của element
     * @param {*} child 
     * @returns {Dom}
     */
    const$append: function (child) {
        if (typeof child == "undefined" || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNull */ .Ft)(child) || simpleTags.indexOf(this.tagName) !== -1) return this;
        var self = this;
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(child) && child.isDomClass) child = child('#inp-' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand());
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(child)) {
            for (var index = 0; index < child.length; index++) {
                this.append(child[index]);

            }
        } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(child)) {
            if (child.isDom) {
                child.parent = this;
                this.el.appendChild(child.el);
                this.children.push(child);
            }
            else if (child.isDomQuery) {
                this.el.appendChild(child.el);
                this.children.push(child);
            }
            else if (child.isDomBag) {
                let c = child.withParent(this);
                __build__.call(c);
                this.el.appendChild(c.el);
                this.children.push(c);
            }
            else if (child.isQuery) {
                child.map(function (el) {
                    self.el.appendChild(el);
                });
                this.children.push(child);
            }
            else if (child instanceof Element) {
                this.el.appendChild(child);
                this.children.push(child);
            }
        }
        else if (child instanceof Element) {
            this.el.appendChild(child);
            this.children.push(child);
        }
        else {
            var c = parse(child);
            if (c) {
                this.el.appendChild(c);
                this.children.push(c);
            }


        }

        return this;
    },
    /**
     * Thêm phần tử con vào Đầu danh sách phần tử con cvua3 element
     * @param {*} child 
     * @returns {Query|Dom}
     */
    const$prepend: function (child) {
        if (typeof child == "undefined" || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNull */ .Ft)(child) || simpleTags.indexOf(this.tagName) !== -1) return this;

        var self = this;
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(child) && child.isDomClass) child = child('#inp-' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand());

        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(child)) {
            if (child.isDom) {
                child.parent = self;
                this.children.unshift(child);
                this.el.insertBefore(child.el, this.el.firstChild);
            }
            else if (child.isDomBag) {
                let c = child.withParent(this);
                __build__.call(c);
                this.el.insertBefore(child.el, this.el.firstChild);
                this.children.unshift(child);
            }
            else if (child.isDomQuery) {
                this.el.insertBefore(child.el, this.el.firstChild);
                this.children.unshift(child);
            }
            else if (child.isQuery) {
                for (var index = child.length - 1; index > -1; index--) {
                    const c = child[index];
                    this.el.insertBefore(c, this.el.firstChild);
                }
                this.children.unshift(child);
            }
            else if (child instanceof Element) {
                this.el.insertBefore(child, this.el.firstChild);
                this.children.unshift(child);
            }


        } else {
            var c = parse(child);
            this.el.insertBefore(c, this.el.firstChild);
            this.children.unshift(c);
        }

        return this;
    },

    /**
     * Thêm phần tử con vào cuối danh danh sách phần tử con cvua3 element
     * @param {*} parent 
     * @returns {Query|Dom}
     */

    const$appendTo: function (parent) {
        if (typeof parent == "undefined") return this;
        if (parent.isDom) {
            parent.append(this);
        } else if (parent instanceof Element) {
            parent.appendChild(this.el);
            this.__set__(PARENT_NODE, parent);

        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(parent)) {
            var domEl = $document.querySelector(parent);
            if (domEl && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(domEl, Element)) {
                domEl.appendChild(this.el);
                this.__set__(PARENT_NODE, domEl);
            }
        }
        return this;
    },
    const$prependTo: function (parent) {
        if (typeof parent == "undefined") return this;
        if (parent.isDom) {
            parent.prepend(this);
        } else if (parent instanceof Element) {
            parent.insertBefore(this.el, parent.firstChild);
            this.__set__(PARENT_NODE, parent);
        } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(parent)) {
            var domEl = $document.querySelector(parent);
            if (domEl && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(domEl, Element)) {
                domEl.insertBefore(this.el, domEl.firstChild);
                this.__set__(PARENT_NODE, domEl);
            }
        }



        return this;
    },

    /**
     * kiểm tra vó phần tử dom con của el hay không
     * @param {Element} child Dom Element - phàn tử html con cần kiểm tra
     * @returns {boolean}
     */
    hasDomChild: function (child) {
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(child, Element)) {
            if (this.el.children.length) {
                for (var index = 0; index < this.el.children.length; index++) {
                    var chl = this.el.children[index];
                    if (chl === child) return true;
                }
            }
        }
        return false;
    },

    removeDomChild: function (child) {
        if (this.hasDomChild(child)) {
            this.el.removeChild(child);
        }
    },


    /**
     * xóa phần tử con
     * @param {Element|Dom|Dom|Dom.Query} child 
     * @param {boolean} removeDomEl Xóa dom el
     */
    final$removeChild: function (child, removeDomEl) {
        if (typeof removeDomEl == "undefined") removeDomEl = true;
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isBoolean */ .jn)(removeDomEl)) removeDomEl = true;

        if (child) {
            var self = this;
            if (child.isDom || child.isDomQuery) {
                if (removeDomEl) {
                    this.removeDomChild(child.el);
                    child.__destroy__();
                }
            }
            else if (child.isQuery) {
                child.map(function (ch) {
                    try {
                        self.el.removeChild(ch)
                    } catch (error) {
                        if (ch.parentNode) {
                            ch.parentNode.removeChild(ch)
                        }
                    }

                });

            }
            else if (child instanceof Element) {
                this.removeDomChild(child);

            }

            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(this.children)) return this;

            for (var index = 0; index < this.children.length; index++) {
                const c = this.children[index];
                if (c == child) {
                    this.children.splice(index, 1);
                }
            }
            if (this.children.length == 0) {
                this.el.innerHTML = "";
            }
        }
        else {
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(this.children)) return this;

            while (this.children.length) {
                this.removeChild(this.children[0]);
            }
        }
        return this;

    },

    /**
     * Xóa
     */
    final$remove: function () {
        var children = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getArguments */ .Tu)(arguments);
        if (children.length) {
            var self = this;
            children.map(function (child) {
                self.removeChild(child);
            });
        }
        else if (this.parent) {
            this.parent.removeChild(this);
        }
        else if (this.el.parentNode) {
            this.el.parentNode.removeChild(this.el);
        }
        return this;
    },

    /**
     * thay thế / thêm nội dung cho thẻ
     * @param {Element|Dom|string|Element[]|Dom[]|string[]} content nội dung
     */
    final$setContent: function (content) {
        this.removeChild();
        return this.append(content);
    },







    final$stopTransmission: function () {
        this.__set__(TRANSMISTION_STATUS, false);
    },




    /**
     * tuyền dữ liệu giữ các component cha -> con
     * @param {string} channel tên sự kiện
     * @param {*} data dữ liệu bất kỳ
     */
    final$sendToChildren: function (channel, data) {
        return __sendToChildren__.call(this, channel, data);
    },









    /**
     * tuyền dữ liệu giữ các component con -> cha
     * @param {string} channel tên sự kiện
     * @param {*} data dữ liệu bất kỳ
     */
    final$sendToParent: function (channel, data) {
        if (this.parent && this.parent != this && this.parent.isDom) {
            receiveFromChildren.call(this.parent, channel, data);
        } else {
            console.warn("Không có đối tượng cha");
        }
        return this;
    },




    /**
     * gọi phương thức của cha, ngược cây phả hệ cho đến khi có tồn tại phương thức dược định nghĩa hoặc hết cây phả hệ
     * @param {string} method tên phuong thức của thằng cha
     * @param {array} args các tham số dưới dạng mảng
     * @returns {mixed}
     */
    final$callParentMethod: function (method, args) {
        if (this.parent && this.parent.isDom) {
            return onChildrenCallMethod.call(this.parent, method, args);
        }

        return null;

    },

    /**
     * gọi phương thức của cha, ngược cây phả hệ cho đến khi có tồn tại phương thức dược định nghĩa hoặc hết cây phả hệ
     * @param {string} method tên phuong thức của thằng cha
     * @param {array} args các tham số dưới dạng mảng
     * @returns {mixed}
     */
    final$callParent: function (method, args) {
        return this.callParentMethod.call(this, method, args);
    },

    /**
     * gọi phương thức của thang con trong cây phả hệ
     * @param {string} method phương thức
     * @param {array} args tham so
     */
    final$callChildrenMethod: function (method, args, className) {
        curremtCallChildrenMethodID = this.__instance__id__;
        return __callChildrenMethod__.call(this, method, args, className);
    },

    /**
     * gọi phương thức của thang con trong cây phả hệ
     * @param {string} method phương thức
     * @param {array} args tham so
     */
    final$ccm: function (method, args, className) {
        return this.callChildrenMethod(method, args, className);
    },

    /**
     * gọi phương thức của thang con trong cây phả hệ
     * @param {string} method phương thức
     * @param {array} args tham so
     */
    final$callChildren: function (method, args, className) {
        return this.callChildrenMethod(method, args, className);
    },

    final$stopCallChildrenMethod: function () {
        if (curremtCallChildrenMethodID) stopCallChildrenTask[curremtCallChildrenMethodID] = true;
    },

    /**
     * gui data cho dong bon
     * @param {string} cslug chuoi key
     * @param {*} data du lieu
     */
    final$sendToSiblings: function (slug, data) {
        if (this.parent && this.parent.children && this.parent.children.length > 1) {
            for (var index = 0; index < this.parent.children.length; index++) {
                var sibling = this.parent.children[index];
                if (typeof sibling == "object" && sibling != this && sibling.isDom) {
                    var s = onReceiveFromSiblings.call(sibling, slug, data)
                    if (s === false) break;
                }
            }
        }
    },

    /**
     * gọi hàm của dong bọn
     * @param {string} method tên phương thưc
     * @param {*[]} args tham số
     */
    final$callSiblingMethod: function (method, args) {
        if (this.parent && this.parent.children && this.parent.children.length > 1) {
            var a = typeof args == "undefined" ? [] : ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(args) ? args : [args]);
            for (var i = 0; i < this.parent.children.length; i++) {
                var child = this.parent.children[i];
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(child) && child != this && typeof child[method] == "function") {
                    var fn = child[method];
                    var r = fn.apply(child, a);
                    if (r !== undefined) return r;
                }
            }
        }
    },


    /**
     * gọi hàm của dong bọn
     * @param {string} method tên phương thưc
     * @param {*[]} args tham số
     */
    final$callSiblings: function (method, args) {
        return this.callSiblingMethod(method, args);
    },

    /**
     * gọi hàm của dong bọn
     * @param {string} method tên phương thưc
     * @param {*[]} args tham số
     */
    final$csm: function (method, args) {
        return this.callSiblingMethod(method, args);
    },



    getElementArgsData: function (args, rules) {
        // var rules = {

        // };
        var selector = '';
        var attrs = {};
        var data = [];
        var hasTag = false;
        // duyệt qua mảng tham so
        for (var index = 0; index < args.length; index++) {
            var vl = args[index];
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(vl)) {
                if (index == 0) {
                    var a = getDomInf(vl);
                    if (a.isElement) {
                        if (a.isDefault) {
                            selector = args[0];
                        } else {
                            selector = args[0].substr(a.tagName.length);
                        }
                    }
                }
            }
        }
    },

    /**
     * lấy về Element cha   
     * @returns {Dom}
     */
    final$getRootElement: function () {
        if (this.parent && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(this.parent) && this.parent.isDom) return this.parent.getRootElement();
        return this;
    },


    // dịch chuyển element trong dom
    final$moveTo: function (parent, pos) {
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(parent)) return false;
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(parent, Element)) {
            parent.appendChild(this.el);
            return this;
        }
        if (!pos) pos = 'bottom';
        if (parent.isDom) {
            parent.moveIn(this, pos, this.parent);
        }
    },

    /**
     * 
     * @param {DomeElement|Element} child doi tuong con
     * @param {DomeElement|Element} receiveDomEl 
     * @param {string} pos 
     * @returns {Dom}
     */
    final$moveChild: function moveChild(child, receiveDomEl, pos) {
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(receiveDomEl)) return false;

        for (var index = 0; index < this.children.length; index++) {
            var ch = this.children[index];
            if (ch == child) {
                this.children.splice(index, 1);
                if (ch.isDom) {
                    ch.parent = null;
                    ch.moveTo(receiveDomEl, pos);

                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(ch, Element)) {
                    if (receiveDomEl.isDom) {
                        receiveDomEl.moveIn(ch);
                    }
                }
            }

        }
        return this;
    },
    /**
     * 
     * @param {Dom} child 
     * @param {boolean} pos 
     */
    final$moveIn: function moveIn(child, pos, oldparent) {
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(child)) {
            var t;
            if (((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isBoolean */ .jn)(pos) && pos === true) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['top', 'start', 'prepend'], pos)) t = true;
            else t = false;
            var self = this;
            if (t) {
                if (child.isDom) {

                    this.children.unshift(child);
                    if (this.el.firstChild) this.el.insertBefore(child.el, this.el.firstChild);
                    else this.el.appendChild(child.el);

                    if (child.parent && child.parent.isDom) {
                        child.parent.removeChild(child, false);
                    }
                    child.parent = this;
                }
                else if (child.isDomQuery) {
                    this.el.insertBefore(child.el, this.el.firstChild);
                    this.children.unshift(child);
                }
                else if (child.isQuery) {
                    for (var index = child.length - 1; index > -1; index--) {
                        const c = child[index];
                        this.el.insertBefore(c, this.el.firstChild);
                    }
                    this.children.unshift(child);
                }
                else if (child instanceof Element) {
                    this.el.insertBefore(child, this.el.firstChild);
                    this.children.unshift(child);
                }

            } else {
                if (child.isDom) {
                    this.el.appendChild(child.el);
                    this.children.push(child);

                    if (child.parent && child.parent.isDom) {
                        child.parent.removeChild(child, false);
                    }
                    child.parent = this;

                }
                else if (child.isDomQuery) {
                    this.el.appendChild(child.el);
                    this.children.push(child);
                }
                else if (child.isQuery) {
                    child.map(function (el) {
                        self.el.appendChild(el);
                    });
                    this.children.push(child);
                }
                else if (child instanceof Element) {
                    this.el.appendChild(child);
                    this.children.push(child);
                }
            }

        }

    },


    /**
     * set id cho element khi set cho object
     * @param {string} id id của element
     */
    onSet$id: function (id) {
        this.attr('id', id);
    },
    onSet$className: function (className) {
        this.removeClass().addClass(className);
    },

    set$children: function onSetChildren(value) {
        var csc = this.__get__(CAN_SET_CHILDREN);
        if (!csc) console.warn("Bạn không thể set giá trị cho children");
        return csc;
    },
    get$children: function getChildren(value) {
        var returnValue = value;
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(value)) {
            returnValue = [];
            this.__set__(CAN_SET_CHILDREN, true);
            this.children = returnValue;
            this.__set__(CAN_SET_CHILDREN, false);
        }
        return returnValue;
    },

    set$parent: function onSetParent(parent) {
        if (!parent || !parent.isDom) {
            return false;
        }
        var s = this.dispatchEvent({
            type: "setparent",
            target: this.el,
            eventData: parent,
            parent: parent
        });
        if (s !== false) {
            if (typeof this.onSetParent == "function") {
                s = this.onSetParent(parent);
            }

            if (s !== false) {
                this.__set__(PARENT_NODE, parent.el);
                if (typeof this.becomeAChild == "function") {
                    this.becomeAChild(parent);
                }
            }
        }

    },

    static$toString: function () {
        var self = this;
        return self('#' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand());
    },
    static$withParent: function (parent) {
        var self = this;
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(parent) || !parent.isDom) {
            console.error("Parent must be instance of Dom");
            return false;
        }
        if (typeof self != "function") {
            console.error("The context of withParent Method mush be Dom or Dom's Children");
            return false;
        }
        var params = [];
        for (let i = 1; i < arguments.length; i++) {
            const arg = arguments[i];
            params.push(arg);
        }
        oneTimeData = {
            parent: parent
        };
        return self.apply(null, params);

    }


});


function __build_data_ref__(data) {
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(data)) {
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                const vl = data[key];
                __build_data_ref_item__.call(this, key, vl);
            }
        }
    }
}
function __build_data_ref_item__(key, value) {
    var self = this;
    var v = value;
    Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        set: function (val) {
            v = val;
            setTimeout(function () {
                __rebuild__.call(self);
            }, 10);
        },
        get: function () {
            return v;
        }

    })
}

function __rebuild__() {
    __buildChildren__.call(this);
}
function __buildChildren__() {
    if (typeof this.builder == "function") {
        if (typeof this.onBeforeBuild == "function") {
            this.onBeforeBuild();
        }
        this.emit("building");
        var children = this.builder();
        if (children) {
            this.render(children);
        }
        if (typeof this.onAfterBuild == "function") {
            this.onAfterBuild();
        }
        this.emit("built");

    } else {
        this.renderChildren();
    }
    this.__set__(IS_BUILDED, true);
}

function bootData() {
    let bag = getDataBag(this.static);
    let data = {};
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(bag)) {
        for (const key in bag) {
            if (Object.prototype.hasOwnProperty.call(bag, key)) {
                const scopeData = bag[key];
                if (key == 'services') {
                    for (const k in scopeData) {
                        if (Object.prototype.hasOwnProperty.call(scopeData, k)) {
                            const sc = scopeData[k];
                            this[k] = (0,_app_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(sc);
                        }
                    }
                }
                else if (key == 'data') {
                    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(data, scopeData);
                }
            }
        }
    }

    const _data_containers = this.__get__(DATA_CONTAINERS);
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(_data_containers)) {
        for (const key in _data_containers) {
            if (Object.prototype.hasOwnProperty.call(_data_containers, key)) {
                const sc = _data_containers[key];
                if (key == 'servives') {
                    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(sc)) {
                        for (const k in sc) {
                            if (Object.prototype.hasOwnProperty.call(sc, k)) {
                                const s = sc[k];
                                if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(s)) {
                                    this[k] = (0,_app_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(s);
                                } else {
                                    this[k] = s;
                                }
                            }
                        }
                    }
                }
                else if (key == 'data') {
                    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(data, sc);
                }
            }
        }
    }
    __build_data_ref__.call(this, data);
}



function __build__() {
    if (!this.autoRender && !this.__get__(IS_BUILDED)) {
        this.renderChildren();
    }
}

/**
 * tuyền dữ liệu giữ các component cha -> con
 * @param {string} channel tên sự kiện
 * @param {*} data dữ liệu bất kỳ
 * @param {string} sentId id của class gửi
 */
function __sendToChildren__(channel, data, sentId) {
    var instanceID = this.__instance__id__;
    if (!sentId) sentId = instanceID;
    this.__set__(TRANSMISTION_STATUS, true);
    // truyền cho các thằng con
    if (this.children.length) {
        for (var i = 0; i < this.children.length; i++) {
            var child = this.children[i];

            if (child.isDom) {
                receiveFromParent.call(child, channel, data, sentId);
                if (this.__get__(TRANSMISTION_STATUS) === false) {
                    if (sentId != instanceID && this.parent) {
                        this.parent.stopTransmission();
                    }
                    break;
                }
            }
        }
    }
    this.__set__(TRANSMISTION_STATUS, true);
    return this;
}


/**
 * nhận dữ liệu giữ các component cha -> con
 * @param {string} channel tên sự kiện
 * @param {*} data dữ liệu bất kỳ
 */
function receiveFromParent(channel, data, sentId) {
    var __transmissionEventListeners = this.__get__(TRANSMISTION_LISTENNERS);
    var next = true;
    var self = this;
    var a = 0;
    var stop = false;
    var arr, fn, s = undefined;
    var eventData = {
        type: "",
        preventDefault: function () {
            next = false;
            a++;
        },
        stopTransmission: function () {
            next = false;
            self.stopTransmission();
            a++;
        },
        stopPropagation: function stopPropagation() {
            self.stopTransmission();
            next = false;
            a++;
        },
        data: data
    };

    if (Object.hasOwnProperty.call(__transmissionEventListeners.fromParent, channel)) {
        arr = __transmissionEventListeners.fromParent[channel];
        try {
            if (arr.length) {
                for (var index = 0; index < arr.length; index++) {
                    fn = arr[index];
                    if (typeof fn == "function") {
                        a++;
                        s = fn.call(this, data);
                        if (s === false) {
                            next = false;
                            self.parent.stopTransmission();
                            break;
                        }
                    }

                }
            }

        } catch (error) {
            console.log(error);
        }
    }
    if (next) {
        if (!a) {
            var c = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.replace */ .W3.replace(
                _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.ucword */ .W3.ucword(
                    channel.split("-").join(" ")
                ),
                " ",
                ""
            );
            var listFn = [
                "onReceive" + c + "FromParent",
                "on" + c + "FromParent",
                "onReceive" + c + "Data",
                "onReceive" + c,
                "onParent" + c + "Data"
            ];
            var mt = "";
            for (var i = 0; i < listFn.length; i++) {
                mt = listFn[i];
                if (next && typeof self[mt] == "function") {
                    var stt = self[mt].call(self, data);
                    if (stt === false) {
                        next = false;
                        self.parent.stopTransmission();
                        break;
                    }
                }
            }
        }
    }
    if (next) {
        var slug = channel.toLowerCase();
        var mtfs = ["transmission.fromparent." + slug, "transmission.fromparent", "transmission"];
        var mt = "";
        for (var n = 0; n < mtfs.length; n++) {
            mt = mtfs[n];
            if (next && Object.hasOwnProperty.call(__transmissionEventListeners.events, mt)) {
                eventData.type = mt;
                arr = __transmissionEventListeners.events[mt];
                if (arr.length) {
                    for (var index = 0; index < arr.length; index++) {
                        fn = arr[index];
                        if (typeof fn == "function") {
                            // a++;
                            s = fn.call(self, eventData);
                            if (s === false || !next) {
                                next = false;
                                self.parent.stopTransmission();
                                index += arr.length;
                            }
                        }

                    }
                }
            }
            if (!next) break;

        }
    }
    // truyền cho các thằng con
    if (next) {
        __sendToChildren__.call(this, channel, data, sentId);
    }
}



/**
 * tuyền dữ liệu giữ các component con -> cha
 * @param {string} channel tên sự kiện
 * @param {*} data dữ liệu bất kỳ
 */
function receiveFromChildren(channel, data) {
    var self = this;
    var next = true;
    var a = 0;
    var arr, fn, s = undefined;
    this.__set__(TRANSMISTION_STATUS, true);

    const __transmissionEventListeners = this.__get__(TRANSMISTION_LISTENNERS);
    if (Object.hasOwnProperty.call(__transmissionEventListeners.fromChildren, channel)) {
        arr = __transmissionEventListeners.fromChildren[channel];
        if (arr.length) {
            for (var index = 0; index < arr.length; index++) {
                fn = arr[index];
                if (typeof fn == "function") {
                    a++;
                    s = fn.call(this, data);
                    if (s === false) {
                        next = false;
                        break;
                    }
                }

            }
        }
    }
    if (next) {
        if (!a) {
            var c = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.replace */ .W3.replace(
                _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.ucword */ .W3.ucword(
                    channel.split("-").join(" ")
                ),
                " ",
                ""
            );

            var fnList = ["onReceive" + c + "FromChildren", "on" + c + "FromChildren", "onChildren" + c + "Data", "onReceive" + c, "onReceive" + c + "Data"];
            fnList.map(function (mt, i) {
                if (next && typeof self[mt] == "function") {

                    var stt = self[mt].call(self, data);
                    if (stt === false) {
                        next = false
                    }
                }
            });

        }

    }
    if (next) {
        var eventData = {
            type: "",
            preventDefault: function () {
                next = false;
                a++;
            },
            stopTransmission: function () {
                next = false;
                self.stopTransmission();
                a++;
            },
            stopPropagation: function stopPropagation() {
                self.stopTransmission();
                next = false;
                a++;
            },
            data: data
        }

        var slug = channel.toLowerCase();
        ["transmission.fromchildren." + slug, "transmission.fromchildren", "transmission"].map(function (mt) {
            if (next && Object.hasOwnProperty.call(__transmissionEventListeners.events, mt)) {
                eventData.type = mt;
                arr = __transmissionEventListeners.events[mt];

                if (arr.length) {
                    for (var index = 0; index < arr.length; index++) {
                        fn = arr[index];
                        if (typeof fn == "function") {
                            // a++;
                            s = fn.call(self, eventData);
                            if (s === false || !next) {
                                next = false;
                                self.parent.stopTransmission();
                                break;
                            }
                        }

                    }
                }
            }

        });



    }
    // truyền cho các thằng con
    if (next && this.parent) {

        this.sendToParent(channel, data);
    }
    this.__set__(TRANSMISTION_STATUS, true);

}


/**
 * lsng81 nghe lời gọi hàm của thằng con
 * @param {string} method tên phương thức
 * @param {array} args tham số
 */
function onChildrenCallMethod(method, args) {
    if (typeof this[method] == "function") {
        var fn = this[method];
        return fn.apply(this, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(args) ? args : [args]);
    }
    return this.callParentMethod(method, args);
}



/**
 * lắng nghe sự kiện từ parent
 * @param {string} method phương thức 
 * @param {array} args mảng tham số
 * @param {string} className Tên claass cuối
 */
function onCallMethodFromParent(method, args, className) {
    var self = this;
    function f() {
        if (typeof self[method] == "function") {
            var fn = self[method];
            var res = fn.apply(self, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(args) ? args : [args]);
            if (typeof res != "undefined") stopCallChildrenTask[curremtCallChildrenMethodID] = true;
            return res;
        }
        return DEFAULT_VALUE;

    }
    if (className) {
        return f();
    }
    var r = f();
    return r != DEFAULT_VALUE ? r : __callChildrenMethod__.call(this, method, args);
}

/**
 * gọi phương thức của thang con trong cây phả hệ
 * @param {string} method phương thức
 * @param {array} args tham so
 */

function __callChildrenMethod__(method, args, className) {
    var instanceId = this.__instance__id__;
    if (!curremtCallChildrenMethodID) curremtCallChildrenMethodID = instanceId;
    stopCallChildrenTask[instanceId] = false;
    var result = DEFAULT_VALUE;
    if (this.children.length) {
        for (var index = 0; index < this.children.length; index++) {
            var child = this.children[index];
            if (child && child.isDom && child.isDom) {
                var r = onCallMethodFromParent.call(child, method, args, className);
                if (r !== DEFAULT_VALUE && typeof r != "undefined") {
                    result = r;
                    break;
                } else if (stopCallChildrenTask[curremtCallChildrenMethodID]) {
                    result = undefined;
                    break;
                }
            }

        }
    }
    stopCallChildrenTask[instanceId] = false;

    if (instanceId == curremtCallChildrenMethodID) {
        stopCallChildrenTask[curremtCallChildrenMethodID] = false;
        curremtCallChildrenMethodID = null;
        if (result == DEFAULT_VALUE) {
            return undefined;
        }
    }
    return result;
}


/**
 * nhan du liieu tu dong bon
 * @param {string} slug chuoi khoa
 * @param {*} data du lieu
 */
function onReceiveFromSiblings(channel, data) {
    const __transmissionEventListeners = this.__get__(TRANSMISTION_LISTENNERS);
    var self = this;
    var next = true;
    var a = 0;
    var arr, fn, s = undefined;
    var eventData = {
        type: "",
        preventDefault: function () {
            next = false;
            a++;
        },
        stopTransmission: function () {
            next = false;
            a++;
        },
        stopPropagation: function stopPropagation() {
            next = false;
            a++;
        },
        data: data
    };

    if (Object.hasOwnProperty.call(__transmissionEventListeners.fromSiblings, channel)) {
        arr = __transmissionEventListeners.fromSiblings[channel];
        try {
            if (arr.length) {
                for (var index = 0; index < arr.length; index++) {
                    fn = arr[index];
                    if (typeof fn == "function") {
                        a++;
                        s = fn.call(this, data);
                        if (s === false) {
                            return false;
                        }
                    }

                }
            }

        } catch (error) {
            console.log(error);
        }
    }
    if (!a) {
        var c = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.replace */ .W3.replace(
            _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.ucword */ .W3.ucword(
                channel.split("-").join(" ")
            ),
            " ",
            ""
        );
        var listFn = [
            "onReceive" + c + "fromSiblings",
            "onReceive" + c
        ];
        var mt = "";
        for (var i = 0; i < listFn.length; i++) {
            mt = listFn[i];
            if (typeof self[mt] == "function") {
                var stt = self[mt].call(self, data);
                if (stt === false) {
                    return false;
                }
            }
        }
    }
    var slug = channel.toLowerCase();
    var mtfs = ["transmission.fromsiblings." + slug, "transmission.fromsiblings", "transmission"];
    var mt = "";
    for (var n = 0; n < mtfs.length; n++) {
        mt = mtfs[n];
        if (Object.hasOwnProperty.call(__transmissionEventListeners.events, mt)) {
            eventData.type = mt;
            arr = __transmissionEventListeners.events[mt];
            if (arr.length) {
                for (var index = 0; index < arr.length; index++) {
                    fn = arr[index];
                    if (typeof fn == "function") {
                        // a++;
                        s = fn.call(self, eventData);
                        if (s === false || !next) {
                            return false;
                        }
                    }

                }
            }
        }
    }
}


function ___assignDynamicProperties___() {
    var self = this;
    function show(time, callback) {

        // function _show() {
        if (self.__get__(SHOW)) return self;
        var t = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(time) ? parseInt(time) : 0;
        var cb = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isCallable */ .GV)(time) ? time : ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isCallable */ .GV)(callback) ? callback : emptyFunc);

        function _show() {
            var e = self.el;
            if (t > 0) {
                var vpt = 1 / time;
                var opc = 0;

                var opacity = getCssProp(e, "opacity");

                if (opacity == "1") {
                    setTimeout(function () {
                        cb.call(e);
                    }, t);
                    return;
                }
                self.setCssProp(e, "opacity", 0);
                for (var i = 0; i < t; i++) {
                    setTimeout(function () {
                        opc += vpt;
                        setCssProp(e, "opacity", opc);
                    }, i + 1);
                }
                setTimeout(function () {
                    setCssProp(e, "opacity", 1);
                    cb.call(e);
                }, t);
            } else {
                var opacity = getCssProp(e, "opacity");
                if (opacity == "1") {
                    cb.call(e);
                    return;
                }
                setCssProp(e, "opacity", 1);
                cb.call(e);
            }

        }

        // if(!_show()) return this;
        var mc = self.__get__(MARK_COMMENT);
        if (mc) {
            mc.parentNode.insertBefore(self.el, mc);
            self.__set__(SHOW, true);
            _show();
        } else {
            var next = next(function (el) { return el.isDom && el.__set__(SHOW) });
            if (next) {
                next.el.parentNode.insertBefore(self.el, next.el);
                self.__set__(SHOW, true);
                _show();
            } else if (self.parent) {
                self.parent.el.appendChild(self.el);
                self.__set__(SHOW, true);
                _show();
            }
        }


        return self;
    }

    /**
     * 
     * @param {int} time thời gian tinh bang ms
     * @param {function} callback làm gì đó sau khi hoàn thành
     */
    function hide(time = 0, callback) {
        var e = self.el;
        var t = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(time) ? parseInt(time) : 0;
        var cb = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isCallable */ .GV)(time) ? time : ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isCallable */ .GV)(callback) ? callback : emptyFunc);
        if (!self.el.parentNode) return self;
        if (!self.__get__(PARENT_NODE)) self.__set__(PARENT_NODE, self.el.parentNode);
        if (!self.__get__(MARK_COMMENT)) {
            self.__set__(MARK_COMMENT, document.createComment("/" + self.tagName + (self.el.id ? "#" + self.id : "") + (self.el.className ? "." + self.el.className.split(" ").map(function (t) { return t.trim(); }).filter(function (t) { return t.length > 0; }).join(".") : "")))
            self.__get__(PARENT_NODE).insertBefore(self.__get__(MARK_COMMENT), self.el);
        }
        self.__set__(SHOW, false);
        if (t > 0) {
            var vpt = 1 / time;
            var opc = 1;
            var opacity = getCssProp(e, "opacity");
            if (opacity == "0" || opacity == "") {
                setTimeout(function () {
                    self.el.parentNode.removeChild(self.el);
                    cb.call(e);

                }, t);
                return;
            }
            for (var i = 0; i < t; i++) {
                setTimeout(function () {
                    opc -= vpt;
                    setCssProp(e, "opacity", opc);
                }, i + 1);
            }
            setTimeout(function () {
                setCssProp(e, "opacity", 0);
                self.el.parentNode.removeChild(self.el);
                cb.call(e);
            }, t);
        } else {
            setCssProp(e, "opacity", 0);
            self.el.parentNode.removeChild(self.el);
            cb.call(e);
        }

        return self;
    }

    function next(args) {

        if (self.parent) {
            let index = self.parent.children.indexOf(self);
            var s = false;
            for (let i = index + 1; i < self.parent.children.length; i++) {
                const child = self.parent.children[i];
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(args)) {
                    var a = true;
                    for (const key in args) {
                        if (Object.hasOwnProperty.call(args, key)) {
                            const value = args[key];
                            if (child[key] != value) a = false;
                        }
                    }
                    if (a) return child;
                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(args) && args(child)) return child;
                else if (!args) return child;

            }
        }
        return null;
    }

    function previous(args) {
        if (self.parent) {
            let index = self.parent.children.indexOf(self);
            for (let i = index - 1; i > -1; i--) {
                const child = self.parent.children[i];
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(args)) {
                    var a = true;
                    for (const key in args) {
                        if (Object.hasOwnProperty.call(args, key)) {
                            const value = args[key];
                            if (child[key] != value) a = false;
                        }
                    }
                    if (a) return child;
                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(args) && args(child)) return child;
                else if (!args) return child;
            }
        }
        return null;
    }
    Object.defineProperties(show, {
        toString: {
            configurable: false,
            enumerable: false,
            value: function () {
                return self.__get__(SHOW);
            }
        },
        __toData__: {
            configurable: false,
            enumerable: false,
            value: function () {
                return self.__get__(SHOW);
            }
        },
        isBoolean: {
            value: true,
            writable: false,
            configurable: false,
            enumerable: false
        }
    })
    Object.defineProperties(hide, {
        toString: {
            configurable: false,
            enumerable: false,
            value: function () {
                return !self.__get__(SHOW);
            }
        },
        __toData__: {
            configurable: false,
            enumerable: false,
            value: function () {
                return !self.__get__(SHOW);
            }
        },
        isBoolean: {
            value: true,
            writable: false,
            configurable: false,
            enumerable: false
        }
    })

    Object.defineProperties(this, {
        show: {
            configurable: false,
            enumerable: false,
            set: function (status) {
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isBoolean */ .jn)(status)) {
                    if (status) show();
                    else hide();
                }
            },
            get: function () {
                return show;
            }
        },
        hide: {
            configurable: false,
            enumerable: false,
            set: function (status) {
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isBoolean */ .jn)(status)) {
                    if (status) hide();
                    else show();
                }
            },
            get: function () {
                return hide;
            }
        },
        next: {
            configurable: false,
            enumerable: false,
            set: function (value) {
                // lam gi do
            },
            get: function () {
                return next();
            }
        },
        previous: {
            configurable: false,
            enumerable: false,
            set: function (value) {
                // lam gi do
            },
            get: function () {
                return previous();
            }
        }

    });

}

function setDataTypeAttribute(key, value, sync) {
    if (!(((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(value) && (value.isObjectData || value.isArrayData) || value.isPrimitive) || ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(value) && value.isPrimitive))) return sync ? this.addDynamicAttr(key, value) : this.setAttribute(key, value);
    this.__set__(DATA_SYNC, false);
    this.setAttribute(key, value.__toData__());
    var vl = value;
    var __dataTypes__ = this.__get__(DATA_TYPES);
    if (__dataTypes__[key] === undefined) {
        var self = this;
        __dataTypes__[key] = value;
        value.__addChangeEvent__(function (e) {
            self.__set__(DATA_SYNC, false);
            self.__set__(SYNC_CHANGE, false);
            vl = e.value;
            this.setAttribute(key, e.value.__toData__());
            self.__set__(DATA_SYNC, true);
            self.__set__(SYNC_CHANGE, true);

        });
        Object.defineProperty(this, key, {
            configurable: true,
            enumerable: true,
            get: function () {
                return vl;
            },
            set: function (value2) {
                if (vl.__PARENT__) {
                    var key = vl.__PARENT__.keyOf(vl);
                    if (key !== undefined) {
                        self.__set__(DATA_SYNC, false);
                        self.__set__(SYNC_CHANGE, false);
                        vl.__PARENT__[key] = value2;
                        self.__set__(DATA_SYNC, true);
                        self.__set__(SYNC_CHANGE, true);

                    }
                }
            }
        })
        if (sync) {
            this.on("change", function (e) {
                if (e.target == self.el) {
                    var vlchange = self.attr(key);
                    if (vlchange != vl.__toData__() && self.__get__(SYNC_CHANGE)) {
                        self.__set__(SYNC_CHANGE, false);
                        self[key] = vlchange;
                        self.__set__(SYNC_CHANGE, true);

                    }
                }
            })
        }
    }
}

/**
 * Thêm thuộc tính động
 * @param {string} attr tên thuộc tính
 * @param {string|number} value 
 * @returns this
 */
function addDynamicAttr(attr, value) {
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(attr)) {
        var self = this;
        if (((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(value) && (value.isObjectData || value.isArrayData) || value.isPrimitive) || ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(value) && value.isPrimitive)) return setDataTypeAttribute.call(this, attr, value);
        this.attr(attr, value);
        var __dynamicAttrs = this.__get__(DYNAMIC_ATTRS);
        Object.defineProperty(this, attr, {
            configurable: true,
            set: function (val) {
                this.__set__(DYNAMIC_SYNC, false);
                var stt = true;
                this.trigger({
                    type: "change.attr." + attr,
                    preventDefault: function () {
                        stt = false;
                    },
                    target: this.el,
                    data: {
                        attr: attr,
                        value: val
                    }
                });

                if (stt) {
                    __dynamicAttrs[attr] = val;
                    this.attr(attr, val);

                }
                this.__set__(DYNAMIC_SYNC, true);
            },
            get: function () {
                return __dynamicAttrs[attr] || null;
            }
        })

    }
    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(attr)) {
        for (var key in attr) {
            if (Object.hasOwnProperty.call(attr, key)) {
                addDynamicAttr.call(this, key, attr[key]);
            }
        }
    }
    return this;
}



/**
 * Tạo đối tượng dom
 * @param {string|object} tag ten the hoặc tất cả các thông tin của thẻ
 */
function create(tag, children, attributes) {
    var tagName = 'div',
        id = '',
        className = '',
        attrs = {},
        __dynamicAttrs = {},
        events = {},
        props = {},
        methods = {},
        contents = [],
        contentf = "",
        inf = { isElement: false },
        isSimple = false,
        isArrayContent = false,
        isTwoContent = 0,
        dataTypeAttrs = {},
        bindingAttrs = {},
        data = {},
        parent = null
        ;

    function addAttrValue(k, vl) {

        var s = String(k).toLowerCase();
        if (s.substr(0, 1) == '$') {
            if (s == '$parent' && (((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(vl) && vl.isDom) || vl instanceof Element)) {
                parent = val;
            }
            else {
                __dynamicAttrs[k.substr(1)] = vl;
            }
            //fafdhfhdf
        }


        else if (k == 'parent' && (((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(vl) && vl.isDom) || vl instanceof Element)) {
            parent = val;

        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['data', 'services'], k)) {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(vl)) {
                var container = {};
                container[k] = vl;
                this.__set__(DATA_CONTAINERS, container);
            }
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['tag', 'tagname'], s)) {
            // tagName = vl;
        }
        else if (s.substr(0, 2) == 'on' && isDomEvent(s.substr(2))) {
            events[s.substr(2)] = vl;
        }
        else if (s.substr(0, 1) == '@' && isDomEvent(s.substr(1))) {
            events[s.substr(1)] = vl;
        }
        else if (s == "on" && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(vl)) {
            for (const v in vl) {
                if (Object.hasOwnProperty.call(vl, v)) {
                    const ev = vl[v];
                    events[v] = ev;
                }
            }

        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(["content", "children"], s)) {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(vl)) {
                for (var j = 0; j < vl.length; j++) {
                    contents.push(vl[j]);
                }
            } else {
                contents.push(vl);
            }
        }
        else if (typeof vl == "function") {
            if (vl.isPrimitive) {
                dataTypeAttrs[k] = vl;
            } else {
                methods[k] = vl;
            }
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(vl) && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(vl) && vl.substr(0, 2) == '{{' && vl.substr(vl, length - 2) == '}}') {
            bindingAttrs[k] = vl.substr(2, vl, length - 4).trim();
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(vl) && (vl.isArrayData || vl.isObjectData)) {
            dataTypeAttrs[k] = vl;
        }
        else {
            attrs[k] = vl;
        }
    }
    if (((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(tag) && (tag.isQuery || tag.isDomQuery))) {
        contents.push(tag);
    }
    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(tag) && tag.isDom) {
        contents.push(tag);
    }
    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(tag) && tag.isDomBag) {
        contents.push(tag);
    }

    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(tag)) {
        for (var k in tag) {
            if (tag.hasOwnProperty(k)) {
                var vl = tag[k];
                var s = String(k).toLowerCase();
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['tag', 'tagname'], s)) {
                    tagName = vl;
                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(["content", "children"], s)) {
                    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(vl)) {
                        for (var j = 0; j < vl.length; j++) {
                            var cnt = vl[j];
                            contents.push(cnt);
                        }
                    } else {
                        contents.push(vl);
                    }
                }
                else {
                    addAttrValue(k, vl);
                }
            }
        }
    }

    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(tag)) tagName = tag;


    for (let i = 1; i < arguments.length; i++) {
        const arg = arguments[i];
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(arg) && (arg.isQuery || arg.isDomQuery)) {
            contents.push(arg);
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(arg) && arg.isDom) {
            contents.push(arg);
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(arg) && arg.isDomBag) {
            contents.push(arg);
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(arg, Element)) {
            contents.push(arg);
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(arg, Dom)) {
            contents.push(arg.el);
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(arg)) {
            for (var k in arg) {
                if (arg.hasOwnProperty(k)) {
                    addAttrValue(k, arg[k]);
                }
            }

        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(arg)) {
            isTwoContent = 0;
            contents.push(arg);
        } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(arg)) {
            isArrayContent = true;
            for (var j = 0; j < arg.length; j++) {
                contents.push(arg[j]);
            }
        } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(arg) && arg.isDomClass) {
            contents.push(arg);
        }
    }

    inf = getDomInf(tagName);

    if (inf.isElement) {
        if (tagName != inf.tagName) {
            tagName = inf.tagName;
            isSimple = simpleTags.indexOf(tagName.toLowerCase()) >= 0;
            if (inf.id) {
                id = inf.id;
            }
            if (inf.className) {
                className = inf.className;
            }
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(inf.attrs)) {
                for (var k in inf.attrs) {
                    if (Object.hasOwnProperty.call(inf.attrs, k)) {
                        addAttrValue(k, inf.attrs[k]);
                    }
                }
            }
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(inf.props)) {
                (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(props, inf.props);
            }
            if (inf.content) {
                if (!isSimple) {
                    contentf = inf.content;
                }
                // else if (typeof attrs.content == "undefined") attrs.content = inf.content;
            }
        }
    }
    if (id) {
        if (typeof attrs.id == "undefined") {
            attrs.id = id;
        }
    }

    if (this && this.tagName && this.tagName != tagName && tagName == 'div') {
        tagName = this.tagName;
    }

    isSimple = simpleTags.indexOf(tagName.toLowerCase()) >= 0;
    var htmlObject = $document.createElement(tagName);
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(attrs)) {

        var csk, v;
        var css = {};
        for (var prop in attrs) {
            if (Object.prototype.hasOwnProperty.call(attrs, prop)) {
                var val = attrs[prop];
                var key = prop.toLowerCase();
                var k = key;
                var f = k.substring(0, 1);
                var f2 = k.substring(0, 2);
                var isEvent = domEvents.indexOf(key) >= 0;
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['tag', 'tagname'], s)) {
                    // tagName = vl;
                }
                else if (f == '$' && ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(vl) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(vl) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getType */ .oL)(vl) == "boolean")) {
                    __dynamicAttrs[k.substr(1)] = vl;
                }
                else if (key == "style") {

                    if (typeof val == "object") {
                        for (var cssKey in val) {
                            if (Object.prototype.hasOwnProperty.call(val, cssKey)) {
                                v = val[cssKey];
                                css[cssKey] = v;
                            }
                        }

                        for (var ck in css) {
                            if (css.hasOwnProperty(ck)) {
                                var cv = css[ck];
                                // htmlObject.style[ck] = cv;
                                // console.log(`htmlObject.style['${ck}'] = ${cv};`)
                                setCssProp(htmlObject, ck, cv);
                            }
                        }
                    } else {
                        htmlObject.setAttribute(key, val);
                    }
                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(val)) {
                    if (val.isDom || val.isDomBag || val.isDomQuery || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(val, Element)) {
                        if (key == 'parent' || key == '@parent' || key == '$parent') {
                            parent = val;
                        }
                        else {
                            this._pendingContents.push({ key: key, content: val });
                        }

                    }
                    else if (val.constructor != Object) {
                        this[key] = val;
                    }
                    else {
                        var attrObj = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.convertTextObject */ .W3.convertTextObject({}, val, prop, '-');
                        for (var ak in attrObj) {
                            if (attrObj.hasOwnProperty(ak)) {
                                var v = attrObj[ak];
                                htmlObject.setAttribute(ak, v);
                            }
                        }
                    }


                }
                else if (key == 'class' || key == 'classname') {
                    htmlObject.className = val;
                }
                else if (typeof vl == "function") {
                    methods[k] = vl;
                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isBoolean */ .jn)(val)) {
                    if (val === false) {
                        htmlObject.removeAttribute(key);

                    } else {
                        htmlObject.setAttribute(key, key);
                    }
                }
                else if (key != "content" || isSimple) {
                    var slug = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.camelToSlug */ .W3.camelToSlug(prop, '-');
                    htmlObject.setAttribute(slug, val);
                }
            }
        }
    }

    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(props)) {
        for (const key in props) {
            if (Object.hasOwnProperty.call(props, key)) {
                const value = props[key];
                htmlObject[key] = value;
            }
        }
    }
    var childrenContents = [];
    if (!isSimple) {
        var cnt = null;
        var tn = tagName.toLowerCase();
        if (contents.length) {
            if (tn == 'textarea') {
                htmlObject.innerText = contents[0];
                if (contentf) {
                    htmlObject.innerText += contentf;
                }
            }
            else if (tn == 'a' && !attrs.hasOwnProperty('href') && isTwoContent == 2 && !isArrayContent && contents.length == 2) {
                attrs.href = contents[0];
                childrenContents[0] = contents[1];
            }
            else {
                childrenContents = contents.slice(0);

            }
        }
        else if (contentf) {
            if (tagName.toLowerCase() == 'textarea') {
                htmlObject.innerText += contentf;
                childrenContents = [];
            } else {
                childrenContents.unshift(parse(contentf));

            }

        }
    }
    else if (tagName == 'img') {
        if (!attrs.hasOwnProperty('src')) {
            if (contents.length) {
                htmlObject['src'] = contents[0];
            }
            else if (contentf) {
                htmlObject['src'] = contentf;
            }
        }
    }

    else if (contentf && !attrs.hasOwnProperty('content')) {
        htmlObject.setAttribute('content', contentf);
    }
    if (className) {
        className.split(" ").filter(function (str) {
            return str.length > 0;
        }).map(function (str) {
            htmlObject.classList.add(str);
        })

    }

    return {
        el: htmlObject,
        contents: childrenContents,
        __dynamicAttrs: __dynamicAttrs,
        bindingAttrs: bindingAttrs,
        dataTypeAttrs: dataTypeAttrs,
        events: events,
        methods: methods,
        tag: tagName,
        parent: parent
    };

}


/**
 * Tạo đối tượng dom
 * @param {string|object} tag ten the hoặc tất cả các thông tin của thẻ
 * @returns {Element}
 */
var createEl = function createEl(tag, ...args) {
    var tagName = 'div',
        id = '',
        className = '',
        attrs = {},
        __dynamicAttrs = {},
        events = {},
        props = {},
        contents = [],
        contentf = "",
        inf = { isElement: false },
        isSimple = false,
        boot = null,
        init = null;

    /**
     * phan tich objec chưa cac thuoc tinh
     * @param {object} object doi tuong thuoc tinh
     * @param {boolean} changeTagName 
     */
    var parseAttrs = function (object, changeTagName) {
        for (var k in object) {
            if (object.hasOwnProperty(k)) {
                var vl = object[k];
                var s = String(k).toLowerCase();
                if (s.substr(0, 1) == '$') {
                    __dynamicAttrs[k.substr(1)] = vl;
                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['tag', 'tagname'], s)) {
                    // tagName = vl;
                    if (changeTagName) {
                        tagName = vl;
                    }
                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['init', 'boot'], s)) {
                    if (s == 'boot') boot = vl;
                    else init = vl;
                }
                else if (s.substr(0, 2) == 'on' && isDomEvent(s.substr(2))) {
                    events[s.substr(2)] = vl;
                }
                else if (s.substr(0, 1) == '@' && isDomEvent(s.substr(1))) {
                    events[s.substr(1)] = vl;
                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(["content", "content", "children"], s)) {
                    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(vl)) {
                        for (var j = 0; j < vl.length; j++) {
                            var cnt = vl[j];
                            contents.push(cnt);
                        }
                    } else {
                        contents.push(vl);
                    }
                }
                else {
                    attrs[k] = vl;
                }
            }
        }
    }

    if (((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(tag) && (tag.isQuery || tag.isDomQuery))) {
        contents.push(tag);
    }
    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(tag) && tag.isDom) {
        contents.push(tag.el);
    }
    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(tag)) {
        parseAttrs(tag, true);
    }
    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(tag)) tagName = tag;
    var max = arguments.length > 3 ? 3 : arguments.length;
    for (var i = 1; i < max; i++) {
        var arg = arguments[i];
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(arg) && arg.isDom) {
            contents.push(arg.el);
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(arg, Element)) {
            contents.push(arg);
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH)(arg, Dom)) {
            contents.push(arg.el);
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(arg)) {
            parseAttrs(arg);
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(arg)) {
            contents.push(arg);
        } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(arg)) {
            for (var j = 0; j < arg.length; j++) {
                var cnt = arg[j];
                contents.push(cnt);
            }
        }
    }

    // lọc xong tất cả content va attr


    inf = getDomInf(tagName);
    if (inf.isElement) {

        if (tagName != inf.tagName) {

            tagName = inf.tagName;
            isSimple = simpleTags.indexOf(tagName.toLowerCase()) >= 0;
            if (inf.id) {
                id = inf.id;
            }
            if (inf.className) {
                className = inf.className;
            }
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(inf.attrs)) {
                parseAttrs(inf.attrs);
            }
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(inf.props)) {
                (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(props, inf.props);
            }
            if (inf.content) {
                if (!isSimple) {
                    contentf = inf.content;
                }
                // else if (typeof attrs.content == "undefined") attrs.content = inf.content;
            }
        }
    }
    if (id) {
        if (typeof attrs.id == "undefined") {
            attrs.id = id;
        }
    }

    isSimple = simpleTags.indexOf(tagName.toLowerCase()) >= 0;
    /**
     * 
     */
    var htmlObject = document.createElement(tagName);
    if (typeof boot == "function") boot.call(htmlObject, attrs, events);
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(attrs)) {
        var csk, v;
        var css = {};
        for (var prop in attrs) {
            if (attrs.hasOwnProperty(prop)) {
                var val = attrs[prop];
                var key = prop.toLowerCase();
                var k = key;
                var f = k.substring(0, 1);
                var f2 = k.substring(0, 2);
                var isEvent = isDomEvent(key)
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['tag', 'tagname'], key)) {
                    // tagName = vl;
                }
                else if (key == "style") {
                    if (typeof val == "object") {
                        for (var cssKey in val) {
                            if (val.hasOwnProperty(cssKey)) {
                                v = val[cssKey];
                                css[cssKey] = v;
                            }
                        }

                        for (var ck in css) {
                            if (css.hasOwnProperty(ck)) {
                                var cv = css[ck];
                                htmlObject.style[ck] = cv;
                            }
                        }
                    } else {
                        htmlObject.setAttribute(key, val);
                    }
                }
                else if (typeof val == 'object') {
                    if (val.isQuery || val.isDomQuery || val.isDom) {

                    } else {
                        let attrObj = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.convertTextObject */ .W3.convertTextObject({}, val, prop, '-');
                        for (var ak in attrObj) {
                            if (attrObj.hasOwnProperty(ak)) {
                                var v = attrObj[ak];
                                htmlObject.setAttribute(ak, v);
                            }
                        }
                    }

                } else if (key == 'class' || key == 'classname') {
                    htmlObject.className = val;
                }
                else if (key != "content" || isSimple) {
                    var slug = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.camelToSlug */ .W3.camelToSlug(prop, '-');
                    htmlObject.setAttribute(slug, val);
                }
            }
        }
    }

    if (!isSimple) {
        if (contents.length) {
            if (tagName.toLowerCase() == 'textarea') {
                htmlObject.innerText = contents[0];
                if (contentf) {
                    htmlObject.innerText += contentf;
                }
            } else {
                for (var i = 0; i < contents.length; i++) {
                    var el = contents[i];
                    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(el) && el.isDom) {
                        htmlObject.appendChild(el.el);
                    }
                    else if (el instanceof Element) {
                        htmlObject.appendChild(el);
                    }
                    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(el) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(el)) {
                        var a = parse(el);
                        if (a) htmlObject.appendChild(a);
                    }
                }

            }
        }
        else if (contentf) {
            if (tagName.toLowerCase() == 'textarea') {
                htmlObject.innerText += contentf;
            } else {
                htmlObject.appendChild(parse(contentf));

            }

        }

    }
    else if (contentf && !attrs.hasOwnProperty('content')) {
        htmlObject.setAttribute('content', contentf);
        contents = [];
    }

    if (className) {
        className.split(" ").filter(function (str) {
            return str.length > 0;
        }).map(function (str) {
            htmlObject.classList.add(str);
        })

    }

    var addEv = function (ev, fn) {
        var cb = (typeof fn == "function") ? fn : function (e) {

        };
        if (htmlObject.addEventListener) {
            htmlObject.addEventListener(ev, cb);
        }
    };


    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(events)) {
        for (var key in events) {
            if (Object.hasOwnProperty.call(events, key)) {
                var fn = events[key];
                addEv(key, fn);
            }
        }


    }
    if (typeof init == "function") {
        init.call(htmlObject);
    }

    return htmlObject;

}
/**
 * lấy ra đối tượng dom từ tham số đầu vào
 * @param {*} str giá trị bất kì
 * @returns {Element}
 */
function parse(str) {
    var div = document.createElement('div');
    if ((str instanceof Element)) return str;
    else if (typeof str == "object" && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNull */ .Ft)(str)) {
        if (isQuery(str)) {
            if (str.length > 0) {
                return str[0];
            } else {
                return div;
            }
        }
        else if (str instanceof Dom || str.constructor == Dom) {
            return str.el;
        }
        else if (str.isDom) {
            return str.el;
        }

        else {
            return createEl(str);
        }
    }
    div.innerHTML = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(str) && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(str) ? String(str).trim() : str;

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
}


/**
 * gán sự kiện cho đối tượng dom
 * @param {Element} el đối tượng dom
 * @param {string} event sự kiện
 * @param {dunction} handler hàm xử lý sự kiện
 */
function addEventListener(el, event, handler) {
    if (!(el instanceof Element) && el != document && el != window) return false;
    var cb = (typeof handler == "function") ? handler : function (e) {
        // func.call(handler, [e.target]);
    };
    if (el.addEventListener) {
        el.addEventListener(event, cb);
    } else if (el.attachEvent) {
        el.attachEvent(event, cb);
    }
}
/**
 * Hủy một sự kiện trong dom
 * @param {Element} el
 * @param {string} event
 * @param {function} callback
 */
function removeEventListener(el, event, callback) {
    if (!(el instanceof Element) && el != document) return false;
    var cb = (typeof callback == "function") ? callback : function (e) {
        // func.call(callback, [e.target]);
    };
    if (el.removeEventListener) {
        el.removeEventListener(event, cb);
    }
}
function documentReady() {
    if (document.readyState !== 'complete') return;
    return true;

}

function isGlobalOrRoot(obj) {
    return obj == global || obj == document;
}



/**
 * lấy thông tin thẻ từ chuỗi đầu vào có dạng css selector
 * @param {string} s css selector
 */
function getDomInf(s) {
    var obj = { tagName: "", id: "", className: "", props: "", attrs: "", content: "", other: "" };
    var a = String(s).split("");
    var m = "tagName";
    // số lượng các cổng đang mở 
    var contentMode = 0;
    var attrMode = 0;

    var isDefault = false;
    var status = false;
    var fail = false;
    // lặp qua từng ký tự để tách chuỗi thông qua việc đêm các ký tự đặc biệt
    for (var i = 0; i < a.length; i++) {
        var c = a[i];
        // nếu nội dung dang được kích hoạt
        if (c == " ") {
            if (!obj.id && !obj.className && !obj.props && !obj.attrs && !obj.content) fail = true;
        }
        if (contentMode > 0) {
            if (c == "{") {
                contentMode++;
            }
            else if (c == "}") {
                contentMode--;
            }
            if (contentMode) {
                obj[m] += "" + c;
            }
            else {
                m = "other";
                obj.other += " ";
            }

        }
        // bắt đầu đọc thuộc tính có giá trị
        else if (attrMode > 0) {
            if (c == "[") {
                attrMode++;
            }
            else if (c == "]") {
                attrMode--;
            }
            if (attrMode) {
                obj[m] += "" + c;
            } else {
                m = "other";
                obj.other += " ";
            }

        }

        // bắt đầu dặc id
        else if (c == "#") {
            m = "id";
        }
        // bắt đầu dọc class
        else if (c == ".") {
            m = "className";
            obj.className += " ";
        }
        // bắt đầu đọc thuộc tính trạng thái
        else if (c == ":") {
            m = "props";
            obj.props += " ";
        }
        // bắt đầu đọc thuộc tính có giá trị
        else if (c == "[") {
            m = "attrs";
            attrMode++;
            obj.attrs += "\n";
        }
        // kết thúc việc đọc
        else if (c == "]") {
            attrMode--;
            m = "other";
            obj.other += " ";

        }
        // dọc nội dung
        else if (c == "{") {
            m = "content";
            // obj.content+= "";
            contentMode++;
        }
        // kết thúc đọc nội dung
        else if (c == "}") {
            m = "other";
            obj.other += " ";
            contentMode--;
        }
        // đang làm việc gì tiếp tục làm việc đó
        else {
            obj[m] += "" + c;
        }
    }
    var obj2 = { tagName: "", id: "", className: "", props: {}, attrs: {}, other: "", content: '', isElement: false };
    var tagName = obj.tagName.trim();
    var id = obj.id.trim();
    var className = obj.className.trim();
    var props = obj.props.trim();
    var attrs = obj.attrs.trim();
    var content = obj.content.trim();

    if (tagName) {
        obj2.tagName = tagName;
        status = true;
    } else if (s) {
        obj2.tagName = "div";
        isDefault = true;
    }

    if (id) {
        obj2.id = id;
        status = true;
    }

    if (className) {
        obj2.className = className;
        status = true;
    }

    if (props) {
        var p = props.split(" ");
        for (var i = 0; i < p.length; i++) {
            var prop = p[i];
            obj2.props[prop] = true;
            status = true;
        }
    }
    if (attrs) {
        var p = attrs.split("\n");
        for (var i = 0; i < p.length; i++) {
            var attr = p[i].split("=");
            if (attr.length == 2) {
                status = true;
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['"', "'"], attr[1][0]) && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['"', "'"], attr[1][attr[1].length - 1])) {
                    obj2.attrs[attr[0]] = attr[1].substr(1, attr[1].length - 2);
                }
                else {
                    obj2.attrs[attr[0]] = attr[1];
                }
            }

        }
    }

    if (content) {
        obj2.content = content;
    }

    if (!obj.id && !obj.className && !obj.props && !obj.attrs && !obj.content && fail && (tagName.split(" ").length > 1 || htmlTags.indexOf(tagName) == -1)) {
        return { tagName: "", id: "", className: "", props: {}, attrs: {}, other: "", content: '', isElement: false };
    }

    obj2.isDefault = isDefault;

    obj2.isElement = status;

    obj2.isHtmlTag = htmlTags.indexOf(obj2.tagName.toLowerCase()) !== -1;
    return obj2;

}



function make(tag, attributes, content) {
    return Dom(tag, attributes, content);
}


function eventHandler(e) {
    console.log(e.target);
}


/**
* them su kien cho element
* @param {Element} element dom element
* @param {string} event ten su kien
* @param {function} callback
* @param {string} data
* @return {boolean}
*/
function addEvent(element, event, callback, data) {
    if (!element || !event || (!(element instanceof Element) && !isGlobalOrRoot(element)) || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(event) || !callback || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isCallable */ .GV)(callback)) return false;
    event = event.toLowerCase();
    data = data || null;

    // tìm trong danh sách sự kiện có tồn tại sự kiện này chưa
    for (var i = 0; i < events.length; i++) {
        var eventData = events[i];
        // một cặp element và event là key của một bản ghi dom event
        if (eventData.element === element && eventData.event === event) {
            for (var j = 0; j < eventData.tasks.length; j++) {
                var evCallback = eventData.tasks[j];
                if (data) {
                    if (data == evCallback.data && evCallback.callback === callback) return true;
                } else if (evCallback.callback === callback) return true;
            }
            addEventListener(element, event, callback);
            events[i].tasks.push({
                callback: callback,
                data: data
            });


            return true;
        }
    }
    addEventListener(element, event, callback);
    events.push({
        element: element,
        event: event,
        data: data,
        tasks: [
            {
                callback: callback,
                data: data
            }
        ]
    });
    return true;
}

/**
* them su kien cho element
* @param {Element} element dom element
* @param {string} event ten su kien
* @param {function} callback
* @param {string} data
* @return {boolean}
*/
function removeEvent(element, event, callback, data) {
    // trưởng hợp không gửi element nào thì xóa tất cả
    if (!element || (!(element instanceof Element) && !isGlobalOrRoot(element)) || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(event)) {
        for (var i = 0; i < events.length; i++) {
            var eventData = events[i];
            if (eventData.tasks.length) {
                eventData.tasks.map(function (task) {
                    removeEventListener(eventData.element, eventData.event, task.callback);
                });
            }

        }
        events = [];

        //
        return false;
    }
    event = event ? event.toLowerCase() : null;
    data = data || null;
    // duyệt mảng để tím element và event phù hợp
    for (var i = 0; i < events.length; i++) {
        var eventData = events[i];
        if (eventData.element === element) {
            if (!event) {
                if (eventData.tasks.length) {
                    eventData.tasks.map(function (task) {
                        removeEventListener(eventData.element, eventData.event, task.callback);
                    });
                }
                events.splice(i, 1);
                i--;
            }
            else if (eventData.event === event) {
                for (var j = 0; j < eventData.tasks.length; j++) {
                    var evCallback = eventData.tasks[j];
                    if (data) {
                        if (data == evCallback.data) {
                            if (callback && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(callback)) {
                                if (evCallback.callback === callback) {
                                    removeEventListener(eventData.element, eventData.event, evCallback.callback);
                                    events[i].tasks.splice(j, 1);
                                    j--;
                                }
                            }
                        }
                    } else if (callback && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(callback)) {
                        if (evCallback.callback === callback) {
                            removeEventListener(eventData.element, eventData.event, evCallback.callback);
                            events[i].tasks.splice(j, 1);
                            j--;
                        }
                    } else {
                        removeEventListener(eventData.element, eventData.event, evCallback.callback);
                        events[i].tasks.splice(j, 1);
                        j--;
                    }
                }
                if (!events[i].tasks.length) {
                    // removeEventListener(eventData.element, eventData.event, eventData.handle);
                    events.splice(i, 1);
                    i--;
                }
            }
        }
    }
}

function getEvents(element, event, data) {
    event = event || null;
    element = element || null;
    data = data || null;
    var list = [];
    if (!element && !event) return events;
    for (var i = 0; i < events.length; i++) {
        var eventData = events[i];
        if ((!element || element == eventData.element) && (!event || event == eventData.event)) {
            list.push(eventData);
        }
    }
    return list;
}

/**
* kiem tra su kien cua element
* @param {Element} element dom element
* @param {string} event ten su kien
* @param {function} callback
* @param {string} data
* @return {boolean}
*/
function hasEvent(element, event, callback, data) {
    // trưởng hợp không gửi element nào thì xóa tất cả
    if (!element || (!(element instanceof Element) && !isGlobalOrRoot(element)) || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(event)) {
        return false;
    }
    event = event ? event.toLowerCase() : null;
    data = data || null;
    // duyệt mảng để tím element và event phù hợp
    for (var i = 0; i < events.length; i++) {
        var eventData = events[i];
        if (eventData.element === element) {
            if (eventData.event === event) {
                for (var j = 0; j < eventData.tasks.length; j++) {
                    var evCallback = eventData.tasks[j];
                    if (data) {
                        if (data == evCallback.data) {
                            if (callback && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(callback)) {
                                if (evCallback.callback === callback) {
                                    removeEventListener(eventData.element, eventData.event, evCallback.callback);
                                    events[i].tasks.splice(j, 1);
                                    j--;
                                }
                            }
                        }
                    } else if (callback && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(callback)) {
                        if (evCallback.callback === callback) {
                            removeEventListener(eventData.element, eventData.event, evCallback.callback);
                            events[i].tasks.splice(j, 1);
                            j--;
                        }
                    } else {
                        removeEventListener(eventData.element, eventData.event, evCallback.callback);
                        events[i].tasks.splice(j, 1);
                        j--;
                    }
                }
                if (!events[i].tasks.length) {
                    // removeEventListener(eventData.element, eventData.event, eventData.handle);
                    events.splice(i, 1);
                    i--;
                }
            }
        }
    }
}

function triggerEvent(element, event, data) {
    event = event || null;
    element = element || null;
    data = data || null;
    if (!element && !event) return events;
    for (var i = 0; i < events.length; i++) {
        var eventData = events[i];
        if (element == eventData.element && event == eventData.event) {
            if (eventData.tasks.length) {
                eventData.tasks.map(function (task) {
                    // removeEventListener(eventData.element, eventData.event,);
                    if (typeof task.callback == "function") {
                        task.callback.apply(eventData.element, data)
                    }
                });
            }
        }
    }
}
function getEventData(element, event, data) {
    event = event || null;
    element = element || null;
    data = data || null;
    if (!element && !event) return null;
    for (var i = 0; i < events.length; i++) {
        var eventData = events[i];
        if ((!element || element == eventData.element) && (!event || event == eventData.event)) {
            return eventData;
        }
    }
    return null;
}

/**
 * kiểm tra xem có phải sự kiện dom hay ko
 * @param {string|string[]} eventName 
 * @returns {boolean}
 */
function isDomEvent(eventName) {
    var stt = false;
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(eventName)) eventName.map(function (e) { if (allEvents.indexOf(String(e).toLowerCase()) != -1) stt = true; });
    else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(eventName) && allEvents.indexOf(eventName.toLowerCase()) != -1) stt = true;
    return stt;
};


/**
 * kiểm tra xem có phải sự kiện dom hay ko
 * @param {string|string[]} eventName 
 * @returns {boolean}
 */
function isDomBasicEvent(eventName) {
    var stt = false;
    if (isArray(eventName)) eventName.map(function (e) { if (domEvents.indexOf(String(e).toLowerCase()) != -1) stt = true; });
    else if (isString(eventName) && domEvents.indexOf(eventName.toLowerCase()) != -1) stt = true;
    return stt;
};


/**
 * 
 * @param {HTMLElement} element 
 * @param {string} prop 
 * @param {string} value 
 */
function setCssProp(element, prop, value) {
    if (element instanceof HTMLElement && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(prop)) {
        try {
            var c = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.slugToCamel */ .W3.slugToCamel(prop);
            var s = "element.style." + c + " = value;";
            eval(s);
        } catch (error) {
            element['style'][prop] = value;
        }
    }
}
function getCssProp(element, prop) {
    if (element instanceof Element && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(prop)) {
        return typeof element['style'][prop] != "undefined" ? String(element['style'][prop]) : "";
    }
    return "";
}

function getTree(elem, list) {
    if (typeof elem == "undefined") return [];
    if (typeof list == "undefined" || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(list)) {
        list = [];
    }
    if (elem instanceof Element) {
        var self = this;
        if (!elem.children.length) return list;
        for (var i = 0; i < elem.children.length; i++) {
            var child = elem.children[i];
            list.push(child);
            if (child.children.length) {
                list = getTree(child, list);
            }
        }
    }
    return list;
}
function getParentNodes(elem, list, elementStop) {
    if (typeof elem == "undefined") return [];
    if (typeof list == "undefined" || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(list)) {
        list = [];
    }
    if (elem instanceof Element) {
        if (!elem.parentNode || (elementStop && elementStop == elem)) return list;
        list.push(elem.parentNode);
        list = getParentNodes(elem.parentNode, list, elementStop);
    }
    return list;
}

function isQuery(obj) {
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(obj)) return false;
    if (obj.isQuery || obj.isDomQuery) return true;
    return false;
}

function isHTML(str) {
    return isString(str) ? (
        /<(?=.*? .*?\/*>|br|hr|input|!--|wbr)[a-z\-_\:]+.*?>|<([a-z\-_\:]+).*?<\/\1>/i.test(str)
    ) :
        _instanceof(str, Element);
}


function checkHtmlStr(str) {
    return !(str || '')
        // replace html tag with content
        .replace(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/ig, '')
        // remove remaining self closing tags
        .replace(/(<([^>]+)>)/ig, '')
        // remove extra space at start and end
        .trim();
}

function emptyFunc() { }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dom);




/***/ }),

/***/ 170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qH": () => (/* binding */ createClass),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Fs": () => (/* binding */ createInstance),
/* harmony export */   "VG": () => (/* binding */ getClassData),
/* harmony export */   "nN": () => (/* binding */ _class)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(499);


const NORETURN_VALUE = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .date */ .hT)('time') + '-' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .date */ .hT)('ms') + "-" + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Num.rand */ .Cq.rand(0, 999999)));
const getArgs = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getArguments */ .Tu;

function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { }));
        return true;
    } catch (e) {
        return false;
    }
}

const DynamicCreateKeys = [
    'dynamicCreate', 'allowCreateByCaller', 'dynamicCreateMode', 'allowDynamicCreate'
]

const _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; };
function setPrototypeOf(o, p) {
    return _setPrototypeOf(o, p);
}

const _construct = _isNativeReflectConstruct() ? Reflect.construct : function _construct(Parent, args, Class) {
    var a = [null];
    a.push.apply(a, args);
    var Constructor = Function.bind.apply(Parent, a);
    var instance = new Constructor();
    if (Class) setPrototypeOf(instance, Class.prototype);
    return instance;
};
function createInstance(Parent, args, Class) {
    return _construct.apply(null, arguments);
}

const classContainers = [];

const classInstanceData = {};

function addClass($class) {
    for (let i = 0; i < classContainers.length; i++) {
        if (classContainers[i].$class == $class) {
            return classContainers[i];
        }
    }
    classContainers.push({
        $class: $class
    });
    Object.defineProperty($class.prototype, '__isES5ClassInstance__', {
        configurable: false,
        writable: false,
        enumerable: false,
        value: true
    });
    Object.defineProperty($class, '__isES5ClassInstance__', {
        configurable: false,
        writable: false,
        enumerable: false,
        value: true
    });
    Object.defineProperty($class.prototype, '__dispose__', {
        configurable: false,
        writable: false,
        enumerable: true,
        value: function () {
            removeClassInstance(this.__instance__id__, typeof this.destructor == "function" ? this.destructor() : false);
        }
    })
    return classContainers[classContainers.length - 1];
}
function getClassIndex($class) {
    for (let i = 0; i < classContainers.length; i++) {
        if (classContainers[i].$class == $class) {
            return i;
        }
    }
    return -1;

}

function addClassData($class, key, value) {
    if (isString(key)) {
        addClass($class)[key] = value;
        return true;
    }
    if (isObject(key)) {
        var index = getClassIndex($class);
        if (index == -1) {
            addClass($class);
            index = classContainers[classContainers.length - 1];
        }
        assignValue(classContainers[index], key);
        return true;
    }
    return false;
}

function getClassData($class) {
    for (let i = 0; i < classContainers.length; i++) {
        const classData = classContainers[i];
        if (classData.$class == $class) {
            return classData;
        }
    }
    return false;
}

/**
 * thêm instance
 * @param {int|function(...args)} $class class hoặc class index
 * @param {string} instanceID id của instance
 * @param {ES5Class} instance indtance
 * @returns instanceData
 */

function addClassInstance(instanceID, instance) {
    if (typeof classInstanceData[instanceID] == "undefined") {
        classInstanceData[instanceID] = {
            instance: instance,
            data: {}
        };
    }
    return false

}



/**
 * Xóa instance
 * @param {string} instanceID id của instance
 * @returns {Boolean}
 */

function removeClassInstance(instanceID) {
    if (typeof classInstanceData[instanceID] != "undefined") {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .destroyObject */ .yp)(classInstanceData[instanceID]);
        delete classInstanceData[instanceID];
        return true;
    }
    return false

}

/**
 * Xóa instance
 * @param {string} instanceID id của instance
 * @returns {Boolean}
 */

function destroyInstance(instanceID) {
    return isObject(instanceID);
    if (typeof classInstanceData[instanceID] != "undefined") {
        destroyObject(classInstanceData[instanceID]);
        delete classInstanceData[instanceID];
        return true;
    }
    return false

}


/**
 * thêm instance
 * @param {int|function(...args)} $class class hoặc class index
 * @param {string} instanceID id của instance
 * @returns instanceData
 */

function getClassInstanceWrapper(instanceID) {
    if (instanceID) {
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(instanceID)) {
            for (const key in classInstanceData) {
                if (Object.hasOwnProperty.call(classInstanceData, key)) {
                    const instanceData = classInstanceData[key];
                    if (instanceData.instance == instanceID) return instanceData;
                }
            }
        }
        else if (typeof classInstanceData[instanceID] == "undefined") {
            return false;
        }

        return classInstanceData[instanceID];
    }
    return false

}



/**
 * thêm instance data
 * @param {string} instanceID id của instance
 * @param {string} key key
 * @param {*} value giá trị
 * 
 * @returns instanceData
 */

function addClassInstanceData(instanceID, key, value) {
    let instanceData = getClassInstanceWrapper(instanceID);
    if (instanceData) {
        let data = instanceData.data;
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(key) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(key)) {
            data[key] = value;
        }
        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(key) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(key)) {
            for (const k in key) {
                if (Object.hasOwnProperty.call(key, k)) {
                    const v = key[k];
                    data[k] = v;
                }
            }
        }
        return data;
    }
    return false;
}


/**
 * lấy instance data
 * @param {int|function(...args)} $class class hoặc class index
 * @param {string} instanceID id của instance
 * @param {string} key keyị
 * 
 * @returns {*}
 */

function getClassInstanceData(instanceID, key) {
    let instanceData = getClassInstanceWrapper(instanceID);
    if (instanceData) {
        let data = instanceData.data;
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(key) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(key)) {
            return data[key];
        }
        return data;
    }
    return undefined;
}



function Es5(...args) {
    /**
     * 
     * @param {Es5} superClass class cha
     * @param  {...any} superClasses class cha khác
     * @returns {Es5}
     */
    this.extends = function (superClass, ...superClasses) { return this };
    /**
     * 
     * @param {object} trait thuộc tính hoặc phương thức
     * @param  {...any} traits 
     * @returns 
     */
    this.uses = function (trait, ...traits) { return this };
    this.assign = function (props) { return this };
    this.static = function (props) { return Es5 };
    this.commit = function () { return this };
}

Object.assign(Es5, {
    __type__: "class",
    __class__: "ES5Class"
});

/**
 * 
 * @param {string} name tên class
 * @param {function(...args)} checkFn 
 * @returns {Es5}
 */
function createConstructor(name, checkFn) {
    var esc = null;
    var s = "try {" +
        "var " + name + " = function " + name + "(){" +
        "var classChecked = checkFn.call(this, getArgs(arguments));" +
        "if(classChecked!==NORETURN_VALUE) return classChecked;" +
        "};" +
        "esc = " + name + ";" +
        "} catch (error) {" +
        "console.log(\"lỗi\");" +
        "console.error(error);" +
        "}";
    eval(s);
    return esc;
}

function definePropertyGroup(target, groupConfig) {
    var configurable = groupConfig.configurable || false,
        enumerable = groupConfig.enumerable || false,
        writable = groupConfig.writable || false;
    for (const key in groupConfig.props) {
        if (Object.prototype.hasOwnProperty.call(groupConfig.props, key)) {
            const value = groupConfig.props[key];
            Object.defineProperty(target, key, {
                configurable: configurable,
                enumerable: enumerable,
                writable: writable,
                value: value
            });
        }
    }
}


const createClass = function (className, makeGlobal) {
    return function _Class() {
        var $className = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(className) ? _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.replace */ .W3.replace(_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.clearUnicode */ .W3.clearUnicode(className), [' ', '-', '+'], '') : ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(className) ? className.name : ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(makeGlobal) && makeGlobal.name ? makeGlobal.name : "Class" + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand().substr(4, 4)));
        var hasClassName = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(className) && className.length;
        var commited = false;
        // khai báo  class
        /**
         * Class dang es5
         * @param {...any} args
         * @var {class}
         */
        var ES5Class = function ES5Class(...args) {
            this.a = 0;
            var checked = checkConstructorCalled.call(this, getArgs(arguments));
            if (checked !== NORETURN_VALUE) return checked;
        };


        /**
         * @var {class}
         */

        function stdParent(instance, cn, scope) {
            this.__instance = instance;
            const self = this;

        }

        var iof = _utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._instanceof */ .lH;


        // hàm gọi trong construct

        if (hasClassName) {
            try {
                let esc = createConstructor($className, checkConstructorCalled);
                if (esc !== null) {
                    ES5Class = esc;
                }
            } catch (error) {
                console.log("lỗi")
                console.error(error);
            }
        }
        Object.defineProperty(ES5Class, "__type__", {
            enumerable: false,
            configurable: false,
            writable: false,
            value: 'class'
        });
        Object.defineProperty(ES5Class, "__class__", {
            enumerable: false,
            configurable: false,
            writable: false,
            value: $className
        });

        addClass(ES5Class);

        var classIndex = classContainers.length - 1;
        var classData = classContainers[classIndex];
        classData.parentMap = {};
        classData.parents = [];
        classData.extends = {
            props: {},
            methods: {},
            accessors: {}
        };
        classData.constructs = [];
        classData.construct = null;
        classData.supers = {};
        classData.uses = {}; // {editable:boolean, type: method|prop|data|accessor|static, value: any}
        classData.props = {};// {editable:boolean, type: method|prop|data|accessor|static, value: any}
        classData.methods = {};// {editable:boolean, type: method|prop|data|accessor|static, value: any}
        classData.accessors = {};// {value, set,get}
        classData.static = {};
        classData.constants = {};
        classData.boots = [];
        classData.inits = [];
        classData.prepare = [];
        classData.calls = [];
        classData.commits = [];
        classData.aftercommits = [];

        classData.pendingProps = {};
        classData.dynamicCreateMode = false;


        Object.assign(ES5Class.prototype, {
            constructor: ES5Class,
            noReturn: NORETURN_VALUE,
            static: ES5Class,

            __callStatic: function __callStatic(name, args) {
                if (typeof ES5Class[name] == "function") {
                    return ES5Class[name].apply(ES5Class, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(args) ? args : []);
                }
                return false;
            }
        })


        /**
         * trả về Wrapper
         * @returns {ES5Class}
         */
        function Wrapper() {
            var args = getArgs(arguments);
            if (!iof(this, Wrapper)) {
                if (commited) {
                    if (classData.calls.length) {
                        const caller = classData.calls[classData.calls.length - 1];
                        if (typeof caller == "function") {
                            return caller.apply(ES5Class, args);
                        }
                    }
                    if (checkCreateNewInstanceByStaticConstructorCall()) {
                        return newInstance(args);
                    }

                }
                // let a = Wrapper.assign(...args);

                return Wrapper.assign(...args);
            }
            else {
                return newInstance(args);
            }
            this.$class = ES5Class;
            return ES5Class;
        }

        /**
             * cập nhật thuộc tính
             * @param {boolean} override ghi ghi đè
             */
        function updateProperties(override) {
            for (var key in classData.pendingProps) {
                if (Object.prototype.hasOwnProperty.call(classData.pendingProps, key)) {
                    var val = classData.pendingProps[key];
                    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._defineProperty */ .w2)(this, key, val);
                }
            }
        }

        /**
         * ke thua
         * @param {ES5Class|function(...args)} superClass class cha
         */
        function _inherit(superClass) {
            if (commited) {
                throw new Error("Không thể gọi hàm inherit sau khi đã khai báo phương thức cho class");
            }

            if (superClass) {
                var cn;
                var _parent = {};
                if (superClass.__type__ == 'class') {// trường hợp là std class
                    cn = superClass.__class__;
                    _parent.__class__ = superClass;
                    var superData = getClassData(superClass);

                    superData.constructs.slice(0).map(function (fn) {
                        if (classData.constructs.indexOf(fn) == -1) {
                            classData.constructs.push(fn);
                        }

                    })

                    if (superData.construct && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(superData.construct)) {
                        if (classData.constructs.indexOf(superData.construct) == -1) {
                            classData.constructs.push(superData.construct);
                        }
                        classData.supers[cn] = superData.construct;
                    }


                    var superExtends = superData.extends;
                    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(superExtends)) {
                        // ke thua
                        for (var cln in superExtends) {
                            if (superExtends.hasOwnProperty(cln)) {
                                var exts = superExtends[cln];
                                for (var k in exts) {
                                    if (exts.hasOwnProperty(k)) {
                                        var p = exts[k];
                                        classData.extends[cln][k] = p;
                                    }
                                }
                            }
                        }
                    }
                    var superBoots = superData.boots.slice(0);
                    if (superBoots.length) superBoots.map(function (f) { classData.boots.push(f); });
                    var superInits = superData.inits.slice(0);
                    if (superInits.length) superInits.map(function (f) { classData.inits.push(f); });

                    var superContants = superData.constants;
                    for (const key in superContants) {
                        if (Object.hasOwnProperty.call(superContants, key)) {
                            const value = superContants[key];
                            if (!isConst(key)) {
                                classData.constants[key] = superContants[key];
                            } else {
                                throwConstError(superClass.__class__, key, superContants[key])
                            }
                            classData.constants[key] = value;
                        }
                    }
                    var superUses = superData.uses;
                    for (const key in superUses) {
                        if (Object.hasOwnProperty.call(superUses, key)) {
                            const vl = superUses[key];
                            _parent[key] = vl;

                            if (isConst(key)) {
                                throwConstError(superClass.__class__, key, vl)
                            }
                            else if (typeof vl == "function") {
                                classData.extends.methods[key] = vl;
                            }
                            else {
                                classData.extends.props[key] = vl;
                            }

                        }
                    }

                    var superProps = superData.props;
                    for (var key in superProps) {
                        if (superProps.hasOwnProperty(key)) {
                            var vl = superProps[key];

                            if (isConst(key)) {
                                throwConstError(superClass.__class__, key, vl)
                            }
                            classData.extends.props[key] = vl;
                            if (!superExtends || !superExtends.props || !superExtends.props[key]) {
                                _parent[key] = vl;
                            }
                        }
                    }

                    var superMethods = superData.methods;
                    for (var key in superMethods) {
                        if (superMethods.hasOwnProperty(key)) {
                            var vl = superMethods[key];

                            if (isConst(key)) {
                                throwConstError(superClass.__class__, key, vl)
                            }
                            if (key != "constructor") {
                                classData.extends.methods[key] = vl;
                                _parent[key] = vl;
                            }
                            if (!superExtends || !superExtends.methods || !superExtends.methods[key] || key == "constructor") {
                                _parent[key] = vl;
                            }

                        }
                    }


                    var superAccessors = superData.accessors;
                    for (var key in superAccessors) {
                        if (superAccessors.hasOwnProperty(key)) {
                            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(classData.extends.accessors, key, superAccessors[key]);
                            _parent[key] = superAccessors[key];
                            if (typeof classData.accessors[key] == "undefined") {
                                classData.accessors[key] = {}
                            }
                            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(classData.accessors[key], superAccessors[key]);

                        }
                    }


                    superData.parents.slice(0).map(function (p) { classData.parents.push(p); });


                    var superPrepare = superData.prepare;
                    for (const key in superPrepare) {
                        if (Object.hasOwnProperty.call(superPrepare, key)) {
                            const fn = superPrepare[key];
                            classData.prepare[key] = fn;
                        }
                    }
                    var superCommits = superData.commits;
                    for (const key in superCommits) {
                        if (Object.hasOwnProperty.call(superCommits, key)) {
                            const fn = superCommits[key];
                            classData.commits[key] = fn;
                        }
                    }

                    var superaftercommits = superData.aftercommits;
                    for (const key in superaftercommits) {
                        if (Object.hasOwnProperty.call(superaftercommits, key)) {
                            const fn = superaftercommits[key];
                            classData.aftercommits[key] = fn;
                        }
                    }

                    var superStatic = superData.static;
                    for (const key in superStatic) {
                        if (Object.hasOwnProperty.call(superStatic, key)) {
                            const fn = superStatic[key];
                            classData.static[key] = fn;
                        }
                    }


                    superData.calls.map(function (g) { classData.calls.push(g) });

                    if (!classData.dynamicCreateMode && superData.dynamicCreateMode) {
                        classData.dynamicCreateMode = superData.dynamicCreateMode;
                    }

                }
                else if (typeof superClass == "function" && typeof superClass.prototype == "object") {
                    cn = superClass.name || "parent_" + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand(8);
                    if (typeof superClass.prototype.constructor == "function") {
                        _parent.constructor = superClass.prototype.constructor;
                        _parent[cn] = superClass.prototype.constructor;
                        classData.methods[cn] = superClass.prototype.constructor;
                        classData.constructs.push(superClass.prototype.constructor);
                        classData.supers[cn] = superClass.prototype.constructor;
                    }
                    for (let mt in superClass.prototype) {
                        if (superClass.prototype.hasOwnProperty(mt)) {
                            var method = superClass.prototype[mt];
                            if (isConst(key)) {
                                throwConstError(superClass.__class__, key, vl)
                            }
                            if (mt == "constructor") {
                                _parent.constructor = method;
                                _parent[cn] = method;
                                classData.methods[cn] = method;
                                classData.constructs.push(method);
                                classData.supers[cn] = method;
                            }
                            else if (typeof method == "function") {
                                classData.extends.methods[mt] = method;
                            }
                            else {
                                classData.extends.props[mt] = method;
                            }
                            _parent[mt] = method;
                        }
                    }
                    classData.parents.push(superClass);

                }

                if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(_parent) && cn) {
                    // if (typeof $classData.parents[ES5Class.__class] == "undefined") {
                    //     classData.parentMap = {};
                    // }
                    _parent.__class__ = cn;
                    classData.parentMap[cn] = _parent;
                }
            }
        }


        Object.assign(Wrapper.prototype, {
            constructor: Wrapper,
            refClass: ES5Class

        });

        Wrapper.__type = "wrapper";
        /**
         * kế thừa
         * @param {ES5Class|function(...args)}
         */
        Wrapper.extends = function (superClass) {
            if (commited) {
                throw new Error("Không thể gọi hàm extends sau khi đã khai báo phương thức cho class");
            }

            for (var index = 0; index < arguments.length; index++) {
                var arg = arguments[index];
                _inherit(arg);
            }
            return this
        };

        /**
         * kế thừa các trait
         * @param {object} trait các thuộc tính và phương thức
         * @returns {ES5Class}
         */
        Wrapper.uses = function (...traits) {
            if (commited) {
                throw new Error("Không thể gọi hàm uses sau khi đã khai báo phương thức cho class");
            }

            function assignUses(props) {
                let prop1 = prepare(parsePrepare(props), 'uses');
                for (var key in prop1) {
                    if (prop1.hasOwnProperty(key)) {
                        var lk = String(key).toLowerCase();
                        var el = prop1[key];

                        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['constructor', ES5Class.__class__], key)) {

                        }
                        else if (isConst(key)) {
                            throwConstError("trait", key, el)
                        }

                        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['boots', 'bootmethods', 'boot', '__boot__'], lk)) {
                            addBootMethod(el);
                        }

                        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['inits', 'initmethods', 'init', '__init__'], lk)) {
                            addInitMethod(el);
                        }

                        else {
                            assignPropMethod('uses', key, el);
                        }
                    }
                }
            }
            var prototype = {};
            for (var index = 0; index < arguments.length; index++) {
                var props = arguments[index];
                if (typeof props == "object") {
                    assignUses(props);
                } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(props)) {
                    if (objectKeys(props.prototype).length > 1) {
                        Object.assign(prototype, props.prototype);
                    }
                }

            }

            assignUses(prototype);

            return Wrapper;
        };


        // khai báo

        /**
         * khai báo thuộc tính hoặc phương thức
         * @param {object} props thuộc tính hoặc phuong thức
         * @returns {ES5Class}
         */
        Wrapper.assign = function (props) {
            if (typeof props == "object") {
                let prop1 = prepare(parsePrepare(props), 'assign');
                for (var key in prop1) {
                    if (prop1.hasOwnProperty(key)) {
                        let el = prop1[key];

                        if (isConst(key)) {
                            throwConstError(ES5Class.__class__, key, el)
                        }

                        else if ((key == "constructor" || key == ES5Class.__class__) && !isConst(key)) {
                            if (typeof el == "function") addConstructor(el);
                        }

                        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['boots', 'bootmethods', 'boot', '__boot__'], String(key).toLowerCase())) {
                            addBootMethod(el);
                        }

                        else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['inits', 'initmethods', 'init', '__init__'], String(key).toLowerCase())) {
                            addInitMethod(el);
                        }

                        else if (typeof el == "function") {
                            assignPropMethod('methods', key, el);
                            // $classData.methods[key] = el;
                        }

                        else {
                            assignPropMethod('props', key, el);
                            // $classData.props[key] = el;
                        }
                    }
                }
            }
            _commit(ES5Class);
            return ES5Class;
        };


        /**
         * khai báo static
         * @param {string|object} props
         * @param {mixed} value
         * @returns {Wrapper}
         */
        Wrapper.static = function (props, value) {

            if (typeof props == "object") {
                let prop1 = prepare(parsePrepare(props), 'assign');
                for (var key in prop1) {
                    if (prop1.hasOwnProperty(key)) {
                        var el = prop1[key];

                        classData.static[key] = el;
                        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._defineProperty */ .w2)(ES5Class, key, el);

                    }
                }
            }
            else if (typeof props == "string") {
                var key = props;
                classData.static[key] = value;
                (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._defineProperty */ .w2)(ES5Class, key, el);

            }
            return Wrapper;
        };

        /**
         * 
         * @param {function(props, scope, resolve, reject, classCtx)} fn 
         * @returns {Wrapper}
         */
        Wrapper.prepare = function (fn) {
            if (typeof fn == "function") {
                classData.prepare.push(fn);
            }
            return Wrapper;
        };
        /**
         * Cập nhật các thuộc tính mới
         */
        Wrapper.commit = function () {
            return _commit(ES5Class);
        };


        definePropertyGroup(Wrapper, {
            configurable: false,
            writable: false,
            enumerable: true,
            props: {
                // inherit: 
            }
        })




        function prepare(props, scope, baseClass) {
            let p = {};
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(props)) {
                for (const key in props) {
                    if (Object.prototype.hasOwnProperty.call(props, key)) {
                        const val = props[key];
                        p[key] = val;
                    }
                }
            }
            if (classData.prepare.length) {
                const _classCtx = baseClass && baseClass.__type && baseClass.__type == 'class' ? baseClass : ES5Class;
                let passed = true;
                let resolved = false;
                const resolve = function (prop) {
                    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(prop)) {
                        p = prop;
                        resolved = true;
                    };

                };
                const reject = function (msg) {
                    passed = false;
                    console.log(msg);
                }
                for (let index = 0; index < classData.prepare.length; index++) {
                    if (!passed) {
                        p = {};
                        break;
                    }
                    const f = classData.prepare[index];
                    if (typeof f == "function") {

                        const rs = f.apply(_classCtx, [props, scope, resolve, reject, _classCtx]);
                        if (!passed) {
                            p = {};
                            break;
                        }
                        if (!resolved && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(rs)) {
                            p = rs;
                        }

                    }
                }
            }
            return p;
        }


        function onCommit(baseClass) {
            let passed = true;

            if (classData.commits.length) {
                const _classCtx = baseClass && baseClass.__type && baseClass.__type == 'class' ? baseClass : ES5Class;

                let resolved = false;
                const resolve = function () {
                    resolved = true;

                };
                const reject = function (msg) {
                    passed = false;
                }
                for (let index = 0; index < classData.commits.length; index++) {
                    if (!passed) {
                        break;
                    }
                    const f = classData.commits[index];
                    if (typeof f == "function") {

                        const rs = f.apply(_classCtx, [classData, resolve, reject, _classCtx]);
                        if (!passed) {
                            break;
                        }
                        else if (rs === false) {
                            passed = false;
                        }
                    }
                }
            }
            return passed;
        }
        function onAfterCommit(baseClass) {
            let passed = true;

            if (classData.aftercommits.length) {
                const _classCtx = baseClass && baseClass.__type && baseClass.__type == 'class' ? baseClass : ES5Class;
                let resolved = false;
                const resolve = function () {
                    resolved = true;

                };
                const reject = function (msg) {
                    passed = false;
                }
                for (let index = 0; index < classData.aftercommits.length; index++) {
                    if (!passed) {
                        break;
                    }
                    const f = classData.aftercommits[index];
                    if (typeof f == "function") {

                        const rs = f.apply(_classCtx, [classData, resolve, reject, _classCtx]);
                        if (!passed) {
                            break;
                        }
                        else if (rs === false) {
                            passed = false;
                        }
                    }
                }
            }
            return passed;
        }

        function parsePrepare(props) {
            let p = {};
            let hp = false;
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(props)) {
                for (const key in props) {
                    if (Object.prototype.hasOwnProperty.call(props, key)) {
                        const val = props[key];
                        const s = key.toLowerCase();
                        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['__prepare', 'const$__prepare', 'finazl$__prepare', '__prepare__'], s)) {
                            if (typeof val == "function") {
                                classData.prepare.push(val);
                                hp = true;
                            }
                        } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['__commit', 'const$__commit', 'finazl$__commit', '__commit__'], s)) {
                            if (typeof val == "function") {
                                classData.commits.push(val);
                                hp = true;
                            }
                        } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['__commit_after', 'const$__commit_after', 'finazl$__commit_after', '__commit_after__', '__after_commit__', '__aftercommit__', 'aftercommit'], s)) {
                            if (typeof val == "function") {
                                classData.aftercommits.push(val);
                                hp = true;
                            }
                        } else {
                            p[key] = val;
                        }
                    }
                }
            }
            return hp ? p : props;
        }





        function checkConstructorCalled(args) {
            if (!iof(this, ES5Class)) {
                if (commited) {
                    if (classData.calls.length) {
                        const caller = classData.calls[classData.calls.length - 1];
                        if (typeof caller == "function") {
                            return caller.apply(ES5Class, args);
                        }
                    }
                    if (checkCreateNewInstanceByStaticConstructorCall()) {
                        return newInstance(args);
                    }
                }
                return Wrapper.assign.apply(null, args);
            }
            else {
                classConstructor.apply(this, args);
            }
            return NORETURN_VALUE;
        }


        /**
         * ham dc goi trong constructor
         */
        function classConstructor() {

            if (!commited) {
                _commit();
            }
            var instanceID = $className + "_" + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.rand */ .W3.rand() + "_" + (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .date */ .hT)("time");
            Object.defineProperty(this, '__instance__id__', {
                value: instanceID,
                enumerable: false,
                configurable: false,
                writable: false
            });
            Object.defineProperty(this, '__test__key__', {
                enumerable: false,
                configurable: false,
                set: function (value) { return value },
                get: function () { return true; }
            });

            updateProperties.call(this, true);

            addClassInstance(instanceID, this);


            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(classData.accessors)) {
                for (var key in classData.accessors) {
                    if (Object.hasOwnProperty.call(classData.accessors, key)) {
                        var val = classData.accessors[key].value;
                        addAccessorValue(instanceID, key, val);
                    }
                }
            }

            addParent(this);

            // if (!isEmpty($classData.parent)) {
            //     for (var key in $classData.parent) {
            //         if ($classData.parent.hasOwnProperty(key)) {
            //             var parentOpt = $classData.parent[key];
            //             __addAccessorValue(instanceID, "__parent",
            //                 new stdParent(this, key)
            //             );
            //         }
            //     }
            // }


            // if (oneTimeData && isObject(oneTimeData) && !isEmpty(oneTimeData)) {
            //     for (const key in oneTimeData) {
            //         if (Object.hasOwnProperty.call(oneTimeData, key)) {
            //             const value = oneTimeData[key];
            //             this[key] = value;
            //         }
            //     }
            //     oneTimeData = {};
            // }








            for (let i = 0; i < classData.boots.length; i++) {
                const f = classData.boots[i];
                if (typeof f == "function") {
                    f.call(this);
                }
                else if (typeof this[f] == "function") {
                    this[key].apply(this, []);
                }
            }
            if (typeof this.boot == "function") {
                this.boot();
                // this.boot = function () {
                //     console.warn(ES5Class.__class + " boot đã được gọi khi khởi tạo");
                // };
            }

            __construct.apply(this, arguments);

            for (let i = 0; i < classData.inits.length; i++) {
                const f = classData.inits[i];
                if (typeof f == "function") {
                    f.call(this);
                }
                else if (typeof this[f] == "function") {
                    this[key].apply(this, []);
                }
            }

            if (typeof this.init == "function") {
                this.init();
                // this.boot = function () {
                //     console.warn(ES5Class.__class + " boot đã được gọi khi khởi tạo");
                // };
            }



        };


        function addBootMethod(method) {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(method) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(method)) {
                if (classData.boots.indexOf(method) == -1) classData.boots.push(method);
            } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(method)) {
                method.map(function (mt) {
                    if (classData.boots.indexOf(mt) == -1) classData.boots.push(mt);
                });
            }
        }

        function addInitMethod(method) {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(method) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(method)) {
                if (classData.inits.indexOf(method) == -1) classData.inits.push(method);
            } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(method)) {
                method.map(function (mt) {
                    if (classData.inits.indexOf(mt) == -1) classData.inits.push(mt);
                });
            }

        }

        /**
         * khai bao thuoc tinh hoac phuong thuc
         * @param {string} scope 
         * @param {string} key 
         * @param {*} value 
         */
        function assignPropMethod(scope, key, value) {
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(key)) return false;
            var a = String(key).split("$");
            if (a.length == 2) {
                if (a[0].length) {
                    var s = a[0].toLowerCase();
                    if (s == "const" || s == "final") {
                        if (!isConst(a[1])) {
                            if (a[1] == "constructor") {
                                if (typeof value == 'function') {
                                    addConstructor(value)
                                }
                            }

                            if (typeof value == "function" && (a[1] == "call" || a[1] == "caller" || a[1] == "__call" || a[1] == "__call__")) {
                                classData.calls.push(value);
                                classData.constants[a[1]] = NORETURN_VALUE;
                            }
                            else {
                                classData.constants[a[1]] = value;
                            }

                        } else {
                            throw new Error("Bạn không thể ghi đè một Hằng");
                        }
                    }
                    else if (s == 'onset' || s == 'set') {
                        if (typeof value == "function") {
                            if (typeof classData.accessors[a[1]] == "undefined") {
                                classData.accessors[a[1]] = {};
                            }
                            classData.accessors[a[1]].set = value;
                        }

                    }
                    else if (s == 'onget' || s == 'get') {
                        if (typeof value == "function") {
                            if (typeof classData.accessors[a[1]] == "undefined") {
                                classData.accessors[a[1]] = {};
                            }
                            classData.accessors[a[1]].get = value;
                        }
                    }
                    else if (s == 'static') {
                        classData.static[a[1]] = value;
                    }
                    else if (!isConst(a[1])) {
                        classData.constants[a[1]] = value;
                        if (typeof value == "function" && (a[1] == "call" || a[1] == "caller" || a[1] == "__call" || a[1] == "__call__")) {
                            classData.calls.push(value);
                        }
                        else if (typeof classData[scope] == "object") {
                            if (typeof classData.uses[key] != "undefined") delete classData.uses[key];
                            if (typeof classData.methods[key] != "undefined") delete classData.methods[key];
                            if (typeof classData.props[key] != "undefined") delete classData.props[key];
                            classData[scope][key] = value;
                        }
                    }
                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(DynamicCreateKeys, a[1])) {
                    classData.dynamicCreateMode = value;
                }
                else if (a[1] && !isConst(a[1])) {
                    addAccessorData(a[1], value);
                }

            }
            else if (!isConst(key)) {
                let kl = String(key).toLowerCase();
                if (typeof value == "function" && (kl == "call" || kl == "caller" || kl == "__call" || kl == "__call__")) {
                    classData.calls.push(value);
                }
                // else if(a[1]){
                //     classData.accessors[a[1]] = value;
                // }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(DynamicCreateKeys, key)) {
                    classData.dynamicCreateMode = value;
                }

                else if (typeof classData[scope] == "object") {
                    if (typeof classData.uses[key] != "undefined") delete classData.uses[key];
                    if (typeof classData.methods[key] != "undefined") delete classData.methods[key];
                    if (typeof classData.props[key] != "undefined") delete classData.props[key];
                    classData[scope][key] = value;
                }
            }
        }

        function addAccessorValue(instanceID, key, val) {
            addClassInstanceData(instanceID, key, val);
        }

        function addAccessorData(key, value) {
            let acData = classData.accessors;
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(key)) {
                if (typeof acData[key] == "undefined") {
                    acData[key] = {}
                }
                acData[key].value = value;
            }
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(key)) {
                for (const k in key) {
                    if (Object.hasOwnProperty.call(key, k)) {
                        const v = key[k];
                        if (typeof acData[k] == "undefined") {
                            acData[k] = {}
                        }
                        acData[k].value = value;
                    }
                }
            }
        }


        function addAccessorKey(key) {
            
            if(ES5Class.prototype[key] !== undefined) return false;
            try {
                var g, s;
                if (typeof classData.accessors[key] == "object") {
                    if (typeof classData.accessors[key].get == "function")
                        g = classData.accessors[key].get;
                    if (typeof classData.accessors[key].set == "function")
                        s = classData.accessors[key].set;
                }

                Object.defineProperty(ES5Class.prototype, key, {
                    get: function get() {
                        var value = getClassInstanceData(this.__instance__id__, key);
                        var f = 'get' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.ucfirst */ .W3.ucfirst(key);
                        if (typeof this[f] == "function") {
                            var r = this[f].call(this, value);
                            if (typeof r != "undefined") return r;
                        }
                        var f2 = 'onGet' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.ucfirst */ .W3.ucfirst(key);
                        if (typeof this[f2] == "function") {
                            var r2 = this[f2].call(this, value);
                            if (typeof r2 != "undefined") return r2;
                        }
                        if (g) {
                            var r3 = g.apply(this, [value]);
                            if (typeof r3 != "undefined") return r3;
                        }
                        return value;
                    },
                    set: function set(value) {
                        var stt = true;
                        var data = getClassInstanceData(this.__instance__id__);
                        var oldVal = data[key];
                        var f = 'onSet' + _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .Str.ucfirst */ .W3.ucfirst(key);
                        if (typeof this[f] == "function") {
                            var r2 = this[f].call(this, value, oldVal);
                            if (typeof r2 != "undefined") return r2;
                        }

                        if (s) {
                            var a = s.call(this, value, oldVal);
                            if (a === false) stt = false;
                        }

                        if (stt) data[key] = value;
                        return data[key];
                    }
                });
            } catch (error) {
                console.log(ES5Class.__class__);
                console.warn(error);
            }

        }


        var __constructs = [];
        var copyConstructs = [];
        var commitProps = {};
        function _commit(BaseClass) {

            if (commited) {
                return ES5Class;
            }
            onCommit(ES5Class);
            for (var key in classData.constants) {
                if (Object.hasOwnProperty.call(classData.constants, key)) {
                    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['constructor', ES5Class.__class__], key)) {
                        Object.defineProperty(ES5Class.prototype, key, {
                            value: classData.constants[key],
                            enumerable: true,
                            configurable: false,
                            writable: false
                        })
                    }
                }
            }
            // console.log(classData);
            var methods = {};
            var props = {};
            if (classData.extends) {
                for (var scope in classData.extends) {
                    if (classData.extends.hasOwnProperty(scope)) {
                        var _extends = classData.extends[scope];
                        if (scope == 'methods') {
                            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(methods, _extends);
                        }
                        else if (scope == 'props') {
                            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)(props, _extends);
                        }
                    }
                }
            }

            if (classData.uses) {
                for (var key in classData.uses) {
                    if (classData.uses.hasOwnProperty(key)) {
                        var val = classData.uses[key];
                        if (typeof val == "function") {
                            methods[key] = val;
                        }
                        else {
                            props[key] = val;
                        }
                    }
                }
            }



            for (var method in classData.methods) {
                if (classData.methods.hasOwnProperty(method)) {
                    var cb = classData.methods[method];
                    methods[method] = cb;
                }
            }

            var mts = {};
            Object.assign(mts, methods);
            for (var key in mts) {
                if (mts.hasOwnProperty(key) && key != "constructor") {
                    var mt = mts[key];
                    __addMethod(key, mt);
                }
            }

            commited = true;

            commitProps = props;

            // if (classData.constructs) {
            //     for (var fn in classData.constructs) {
            //         if (classData.constructs.hasOwnProperty(fn)) {
            //             __constructs.push(classData.constructs[fn]);
            //         }
            //     }
            // }



            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmpty */ .xb)(classData.accessors)) {
                for (let key in classData.accessors) {
                    if (Object.hasOwnProperty.call(classData.accessors, key)) {
                        // var val = classData.accessors[key];
                        addAccessorKey(key);
                    }
                }
            }


            parseDataProps();

            onAfterCommit(ES5Class);

            return ES5Class;
        }

        function __addMethod(name, handle) {
            if (name.length > 6) {
                var pre = name.substr(0, 6).toLowerCase();
                var n = name.substr(6, 1).toLowerCase() + (name.length > 7 ? name.substr(7) : '');
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['$onset', 'onset$'], pre)) {
                    if (typeof classData.accessors[n] == "undefined") {
                        classData.accessors[n] = {};
                    }
                    classData.accessors[n].set = handle;
                    return;
                }
                else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .inArray */ .d3)(['$onget', 'onget$'], pre)) {
                    if (typeof classData.accessors[n] == "undefined") {
                        classData.accessors[n] = {};
                    }
                    classData.accessors[n].get = handle;
                    return;
                }
            }
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* ._defineProperty */ .w2)(ES5Class.prototype, name, handle);

        }

        function parseDataProps() {
            var props = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .assignValue */ .MP)({}, commitProps);
            for (var prop in classData.props) {
                if (classData.props.hasOwnProperty(prop)) {
                    var cb = classData.props[prop];
                    props[prop] = cb;
                    // if ((!override && typeof this[prop] == "undefined") || override == true) {
                    //     $props[prop] = cb;
                    // }
                }
            }

            for (var key in props) {
                if (props.hasOwnProperty(key)) {
                    var val = props[key];
                    if (key.substr(0, 1) == '$') {
                        var ks = key.substr(1);
                        // addAccessorValue(this, ks, val);

                        addAccessorKey(ks);

                    }
                    else {
                        classData.pendingProps[key] = val;
                        // _defineProperty(this, key, val);
                    }
                }
            }

        }


        // hàm khởi tạo
        function __construct() {
            var self = this;
            copyConstructs = classData.constructs.slice(0);
            return (typeof this[$className] == "function" ? this[$className] : (
                typeof classData.construct == "function" ? classData.construct : (
                    copyConstructs.length ? copyConstructs.pop() : function () { }
                )
            )).apply(this, arguments);

        }

        function addParent(instance) {


        }

        /**
         * them ham khoi tao
         * @param {function(...args)} constructor ham khoi tao
         */
        function addConstructor(constructor) {

            classData.methods.constructor = classData.methods[$className] = classData.construct = function Constructor() {
                if (copyConstructs.length) {
                    copyConstructs = classData.constructs.slice(0);
                    Object.defineProperty(this, "super", {
                        value: function parentConstructor() {
                            var args1 = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .getArguments */ .Tu)(arguments);
                            var pConstructor = copyConstructs.pop();
                            pConstructor.apply(this, args1);
                        },
                        enumerable: false

                    })
                }
                constructor.apply(this, arguments);
            }
        }

        function newInstance(args) {
            return createInstance(ES5Class, args);
        }

        function checkCreateNewInstanceByStaticConstructorCall() {
            if (commited && classData.dynamicCreateMode) {
                return true;
            }
            return false;
        }

        function isConst(key) {
            return Object.hasOwnProperty.call(classData.constants, key);
        }

        function throwConstError(className, key, value) {
            throw new Error("Không thể kế thừa " + (typeof value == "function" ? "phương thức" : "thuộc tính") + " [" + key + "] từ class [" + className + "] do trùng vời hàng số đã được khai báo");
        }

        return Wrapper;

    }();
};
const _class = createClass;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createClass);



/***/ }),

/***/ 499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lH": () => (/* binding */ _instanceof),
/* harmony export */   "Pm": () => (/* binding */ _defineProperties),
/* harmony export */   "TD": () => (/* binding */ _createClass),
/* harmony export */   "w2": () => (/* binding */ _defineProperty),
/* harmony export */   "sN": () => (/* binding */ addToGlobal),
/* harmony export */   "oL": () => (/* binding */ getType),
/* harmony export */   "$1": () => (/* binding */ checkType),
/* harmony export */   "kJ": () => (/* binding */ isArray),
/* harmony export */   "jn": () => (/* binding */ isBoolean),
/* harmony export */   "Kn": () => (/* binding */ isObject),
/* harmony export */   "HD": () => (/* binding */ isString),
/* harmony export */   "hj": () => (/* binding */ isNumber),
/* harmony export */   "U": () => (/* binding */ isInteger),
/* harmony export */   "Jh": () => (/* binding */ isEmail),
/* harmony export */   "Ft": () => (/* binding */ isNull),
/* harmony export */   "hp": () => (/* binding */ isFormData),
/* harmony export */   "xb": () => (/* binding */ isEmpty),
/* harmony export */   "GV": () => (/* binding */ isCallable),
/* harmony export */   "mf": () => (/* binding */ isFunction),
/* harmony export */   "IC": () => (/* binding */ isProperty),
/* harmony export */   "A": () => (/* binding */ isMethod),
/* harmony export */   "Uh": () => (/* binding */ hasValue),
/* harmony export */   "d3": () => (/* binding */ inArray),
/* harmony export */   "rj": () => (/* binding */ cutWithout),
/* harmony export */   "qV": () => (/* binding */ copyWithout),
/* harmony export */   "$3": () => (/* binding */ copyArray),
/* harmony export */   "Yd": () => (/* binding */ objectKeys),
/* harmony export */   "TT": () => (/* binding */ objectValues),
/* harmony export */   "TS": () => (/* binding */ merge),
/* harmony export */   "$e": () => (/* binding */ combine),
/* harmony export */   "KA": () => (/* binding */ arrayJoin),
/* harmony export */   "aX": () => (/* binding */ objectHasKey),
/* harmony export */   "o8": () => (/* binding */ objectHasProperty),
/* harmony export */   "yp": () => (/* binding */ destroyObject),
/* harmony export */   "zH": () => (/* binding */ assignOneValue),
/* harmony export */   "Cq": () => (/* binding */ Num),
/* harmony export */   "W3": () => (/* binding */ Str),
/* harmony export */   "hT": () => (/* binding */ date),
/* harmony export */   "Gn": () => (/* binding */ getEl),
/* harmony export */   "MP": () => (/* binding */ assignValue),
/* harmony export */   "bg": () => (/* binding */ assignWithout),
/* harmony export */   "_W": () => (/* binding */ assignIfNotExists),
/* harmony export */   "wB": () => (/* binding */ objectAssign),
/* harmony export */   "hq": () => (/* binding */ colorToHex),
/* harmony export */   "R8": () => (/* binding */ invertHexColor),
/* harmony export */   "Y9": () => (/* binding */ minOf),
/* harmony export */   "yZ": () => (/* binding */ maxOf),
/* harmony export */   "GE": () => (/* binding */ copyByList),
/* harmony export */   "Q7": () => (/* binding */ isFloat),
/* harmony export */   "ci": () => (/* binding */ Queue),
/* harmony export */   "kg": () => (/* binding */ queueTask),
/* harmony export */   "E2": () => (/* binding */ combineElenentsToArrList),
/* harmony export */   "Ss": () => (/* binding */ combineElenentsJoinStringList),
/* harmony export */   "Tu": () => (/* binding */ getArguments),
/* harmony export */   "dj": () => (/* binding */ JsonToBase64),
/* harmony export */   "Mi": () => (/* binding */ b64toBlob),
/* harmony export */   "tg": () => (/* binding */ resizeImage),
/* harmony export */   "dg": () => (/* binding */ getTimeStamp),
/* harmony export */   "S3": () => (/* binding */ degreeToRadians),
/* harmony export */   "DR": () => (/* binding */ radianToDegrees),
/* harmony export */   "tr": () => (/* binding */ newObj),
/* harmony export */   "FD": () => (/* binding */ emptyObject),
/* harmony export */   "Sk": () => (/* binding */ getInputCfg),
/* harmony export */   "X5": () => (/* binding */ getFirstValueInList),
/* harmony export */   "Ic": () => (/* binding */ EMPTY_VALUE)
/* harmony export */ });




// var Helper;
var global = undefined || window;
function addToGlobal(name, value) {
    global[name] = value;
}



// mang
var arr = [];

var document = window.document;

var div = document.createElement("div");

// var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var createElement = document.createElement;


// var $$;
if (typeof Object.assign != 'function') {

    Object.assign = function (target, varArgs) { // .length của function là 2
        'use strict';
        if (target == null) { // TypeError nếu undefined hoặc null
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];

            if (nextSource != null) { // Bỏ qua nếu undefined hoặc null
                for (var nextKey in nextSource) {
                    // Avoid bugs when hasOwnProperty is shadowed
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
        }
        return to;
    };
}


var isFunction = function isFunction(obj) {

    return typeof obj === "function" && typeof obj.nodeType !== "number";
};

var isCallable = function (variable) {
    return typeof variable === "function";
};

/**
 * lấy kiểu giá trị của biến
 * @param {*} obj
 * @return {string}
 */
var getType = function (obj) {
    var t = 'null';
    var type = typeof obj;
    if (type == 'object') {
        if (obj === null) {
            t = 'null';
        } else if (obj.constructor == FormData) {
            t = 'formdata';
        } else if (obj.constructor == Array) {
            t = 'array';
        } else if (obj.constructor == Object) {
            t = 'object';
        } else if (obj.constructor == Number) {
            t = 'number';
        } else {
            t = 'object';
        }
    } else {
        t = type;
    }
    return t;
};
/**
 * kiềm tra có phải chuỗi
 * @param {*} variable biến bất kỳ
 */
var isString = function isString(variable) {
    var type = getType(variable);
    return type == "string" || (type == "number" && !isNaN(variable));
}
/**
 * kiềm tra có phải null
 * @param {*} variable biến bất kỳ
 */
var isNull = function isNull(variable) {
    return getType(variable) == "null";
}
/**
 * kiềm tra có phải array
 * @param {*} variable biến bất kỳ
 */
var isArray = function isArray(variable) {
    return getType(variable) == "array" || Array.isArray(variable);
}
/**
 * kiềm tra có phải object
 * @param {*} variable biến bất kỳ
 */
var isObject = function isObject(variable) {
    return getType(variable) == "object";
}
/**
 * kiềm tra có phải number
 * @param {*} variable biến bất kỳ
 */
var isNumber = function isNumber(variable) {
    var type = getType(variable);
    return (type === "number" || type === "string") && !isNaN(variable - parseFloat(variable));
}
/**
 * kiềm tra có phải loat
 * @param {*} variable biến bất kỳ
 */
var isFloat = function isFloat(variable) {
    var type = getType(variable);
    return (type === "number" || type === "string") && !isNaN(variable - parseFloat(variable));
}

/**
 * kiềm tra có phải number
 * @param {*} variable biến bất kỳ
 */
var isInteger = function isInteger(variable) {
    return isNumber(variable) && String(parseInt(variable)) == String(variable);
}


/**
 * kiềm tra có phải boolean
 * @param {*} variable biến bất kỳ
 */
var isBoolean = function isBoolean(variable) {
    return getType(variable) == "boolean";
}

/**
 * kiềm tra có phải Formdata
 * @param {*} variable biến bất kỳ
 */
var isFormData = function isFormData(variable) {
    return getType(variable) == "formdata";
}

/**
 * kiềm tra có phải chuỗi
 * @param {*} variable biến bất kỳ
 */
var isEmail = function isEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

var isEmpty = function (obj) {

    if (typeof obj == "undefined") return true;

    // console.log(any.constructor)
    var type = getType(obj);

    if (type == "object") {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    else if (type == "array" || type == 'string') {
        return obj.length == 0;
    }
    else return !obj;
}
var emptyFunc = function () { };

var newObj = (obj) => {
    var d = isObject(obj) ? obj : {};
    var a = Object.create(d);
    for (const key in d) {
        if (Object.prototype.hasOwnProperty.call(d, key)) {
            const v = d[key];
            a[key] = v;
        }
    }
    return a;
}
var emptyObject = function () {
    return Object.create({});
}
/**
 *
 * @param {object} dst
 * @param {object} src
 * @returns {object}
 */
var merge = function (dst, src) {
    if (!dst || !isObject(dst)) dst = {};
    var to = Object(dst);
    var srclength = arguments.length;
    for (var i = 1; i < srclength; i++) {
        var srcObj = arguments[i];
        if (isObject(srcObj)) {
            for (var key in srcObj) {
                if (srcObj.hasOwnProperty(key)) {
                    var val = srcObj[key];
                    if ((isObject(val) || isArray(val)) && !isFormData(val) && val.constructor != Promise) {
                        var d = {};
                        to[key] = merge(d, val);
                    } else {
                        to[key] = val;
                    }
                }
            }
        }
    }
    return dst;
}

/**
 * sao chep gia tri trong mang
 * @param {array|object} src mang doi tuong  can sao chep
 */
var copyArray = function (src) {
    var arr = [];
    var t = getType(src);
    if (t == 'object' || t == 'array') {
        if (src.length) {
            for (var index = 0; index < src.length; index++) {
                if (typeof src[index] != "undefined") {
                    arr.push(src[index]);
                }
            }
        } else if (t == 'object') {
            for (var key in src) {
                if (src.hasOwnProperty(key)) {
                    var item = src[key];
                    arr.push(item);
                }
            }
        }
    }
    return arr;
};


var combine = function combine(list) {
    var sth = function (lst, i) {
        if (!i) i = 0;
        var ls = [];
        if (lst.length <= i) return [];
        var arr = lst[i];
        arr.map(function (c) {
            var s = c;
            if (i < lst.length - 1) {
                var tl = sth(lst, i + 1);
                if (tl.length) {
                    tl.map(function (t) {
                        ls.push(c + "" + t);
                    });
                } else {
                    ls.push(c);
                }
            } else {
                ls.push(c);
            }
        });
        return ls;
    };
    return sth(list);
};


var objectKeys = function (obj) {
    var keys = [];
    if (isArray(obj) || isObject(obj)) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
    }
    return keys;
};
var objectValues = function (obj) {
    const values = Object.values(obj);
    // var values = [];
    // obj.a = 0;
    // if (isArray(obj) || isObject(obj)) {
    //     for (var key in obj) {
    //         if (obj.hasOwnProperty(key)) {
    //             values.push(obj[key]);
    //         }
    //     }
    // }
    return values;
};

var isProperty = function isProperty(obj, key) {
    return Object.hasOwnProperty.call(obj, key);
}
var isMethod = function isisMethod(obj, key) {
    var a = false;
    eval("a = typeof obj[key] == 'function'");
    return a;
}

/**
 * kiểm tra giá trị có trong mảng / object hay không
 * @param {array} arr mảng
 * @param {*} value
 * @returns {boolean}
 */
var hasValue = function hasValue(arr, value, checkType) {
    if (typeof arr == "undefined") return false;
    var t = getType(arr);
    if (t == 'array') {
        if (checkType == true) {
            for (var index = 0; index < arr.length; index++) {
                var v = arr[index];
                if (v === value) return true;
            }
        } else {
            return arr.indexOf(value) >= 0;
        }
    } else if (t == 'object') {
        if (checkType) {
            for (var key in arr) {
                if (arr.hasOwnProperty(key)) {
                    var v = arr[key];
                    if (v === value) {
                        return true;
                    }
                }
            }
        } else {
            for (var key in arr) {
                if (arr.hasOwnProperty(key)) {
                    var v = arr[key];
                    if (v == value) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

/**
 * kiểm tra giá trị có trong mảng / object hay không
 * @param {array} arr mảng
 * @param {*} value
 * @returns {boolean}
 */
var inArray = function inArray(arr, value, checkType) {
    if (typeof arr == "undefined") return false;
    var t = getType(arr);
    if (t != "array" && t != "object" && (isArray(value) || isObject(value))) {
        var c = arr;
        arr = value;
        value = c;
        t = getType(arr);
    }
    if (t == 'array') {
        if (checkType == true) {
            for (var index = 0; index < arr.length; index++) {
                var v = arr[index];
                if (v === value) return true;
            }
        } else {
            return arr.indexOf(value) >= 0;
        }
    } else if (t == 'object') {
        if (checkType) {
            for (var key in arr) {
                if (arr.hasOwnProperty(key)) {
                    var v = arr[key];
                    if (v === value) {
                        return true;
                    }
                }
            }
        } else {
            for (var key in arr) {
                if (arr.hasOwnProperty(key)) {
                    var v = arr[key];
                    if (v == value) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
};


var cutWithout = function cutWithout(obj, keys) {
    var newObj = Object.create({});
    var oldObj = Object.create(obj);
    if (isArray(obj) || isObject(obj)) {
        var list = [];
        if (isArray(keys)) list = keys;
        else if (isObject(keys)) {
            for (var key in keys) {
                if (keys.hasOwnProperty(key)) {
                    list.push(keys[key]);
                }
            }
        }

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (!inArray(list, key)) {
                    newObj[key] = oldObj[key];
                }
            }
        }
    }
    return newObj;
}

var copyWithout = function copyWithout(obj, keys) {
    var newObj = Object.create({});
    var oldObj = Object.create(obj);

    if (isArray(obj) || isObject(obj)) {
        var list = [];
        if (isArray(keys)) list = keys;
        else if (isObject(keys)) {
            for (var key in keys) {
                if (keys.hasOwnProperty(key)) {
                    list.push(keys[key]);
                }
            }
        }

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (!inArray(list, key)) {
                    newObj[key] = oldObj[key];
                }
            }
        }
    }
    return newObj;
};


var copyByList = function copyByList(obj, keys) {
    var newObj = {};
    var oldObj = Object.create(obj);
    if (isArray(obj) || isObject(obj)) {
        var list = [];
        if (isArray(keys)) list = keys;
        else if (isObject(keys)) {
            for (var key in keys) {
                if (keys.hasOwnProperty(key)) {
                    var v = keys[key];
                    list.push(key);
                }
            }
        }

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (inArray(list, key)) {
                    newObj[key] = oldObj[key];
                }
            }
        }
    }
    return newObj;
};

/**
 * kiểm tra toàn bộ kiểu dử liệu của các phần tử con
 * @param {string} type kiểu dử liệu
 * @param {array} object đối tượng cần kiểm tra
 */
var checkAllElementType = function checkAllElementType(type, object) {
    if (!(isString(type) || isArray(type)) || !(isArray(object) || isObject(object))) {
        return false;
    }
    var types = [];
    if (!isArray(type)) types = [type];
    else types = type.slice(0);
    var checked = false;
    if (isArray(object)) {
        let temp = Object.values(object);
        return temp.length && temp.length == temp.filter(function (value) { return types.indexOf(getType(value)) >= 0; }).length;
    }
    var nO = Object.create(object);
    for (var key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            if (types.indexOf(getType(nO[key])) < 0) return false;
            checked = true;
        }
    }
    return checked;

}
/**
 * trổn 2 mảng thành mảng kết hợp mới
 * @param {array[]} arrayArr mảng chứa các phần tử con là 1 mảng
 * @param {any[]} arrayAny mảng chứa các phần tử con có kiểu dử liệu là string hoặc number
 * @returns {array[]}
 */
var combineTwoArray = function combineTwoArray(arrayArr, arrayAny) {
    var newArr = [];
    for (var i = 0; i < arrayArr.length; i++) {
        var arr = arrayArr[i];

        for (var j = 0; j < arrayAny.length; j++) {
            var any = arrayAny[j];
            var v = arr.slice(0);
            v.push(any);
            newArr.push(v);
        }
    }
    return newArr;
};


/**
 * lấy tổ hợp các các phần từ com
 * @param {array} arr1 
 * @param {array} arr2 
 */
var combineElenentsToArrList = function combineElenentsToArrList() {
    var arrayList = [];
    for (var index = 0; index < arguments.length; index++) {
        var arg = arguments[index];
        if (!isArray(arg) || !checkAllElementType(['string', 'number'], arg)) return [];

        arrayList.push(arg);
    }
    if (arrayList.length < 2) return arrayList[0];
    var results = [];
    arrayList[0].map(function (str) {
        results.push([str]);
    });
    for (var i = 1; i < arrayList.length; i++) {
        var arr = arrayList[i];
        results = combineTwoArray(results, arr);
    }

    return results;
};

/**
 * trộn 2 hoặc nhiều mảng thành mảng tổ hợp các phần tử dược nối với nhau bằng delimiter
 * @param {string} deliniter ký tự nối
 * @param {string[]} arr1 mảng 1
 * @param {string[]} arr2 mảng 2
 * @param {string[]} ...arrN mảng 2
 * 
 * @returns {string[]}
 */
var combineElenentsJoinStringList = function combineElenentsJoinStringList(deliniter, arr1, arr2) {
    var arrayList = [];
    for (var index = 1; index < arguments.length; index++) {
        var arg = arguments[index];

        if (!isArray(arg) || !checkAllElementType(['string', 'number'], arg)) return [];

        arrayList.push(arg);
    }
    if (arrayList.length < 2) return arr1;
    var results = combineElenentsToArrList(...arrayList);
    if (!isString(deliniter)) deliniter = '';
    return results.map(function (arr) {
        return arr.join(deliniter);
    });
}


/**
 * lay ra gia tri nho nhat
 * @param {array|object} obj doi tuong mang chua cac gia tri 
 */
var minOf = function minOf(obj) {
    var min = NaN;
    if (arguments.length > 1 && !(isArray(obj) || isObject(obj))) {
        obj = copyArray(arguments);
    }
    if (isArray(obj)) {
        for (var index = 0; index < obj.length; index++) {
            if (!isNumber(obj[index])) continue;
            var n = Number(obj[index]);

            if (isNaN(min) || !index)
                min = n;
            else if (n < min) min = n;
        }
    }
    else if (isObject(obj)) {
        var index = 0;
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (!isNumber(obj[index])) continue;
                else {
                    var n = Number(obj[index]);
                    if (isNaN(min) || !index) min = n;
                    else if (n < min) min = n;
                }
                index++;
            }
        }
    }
    return min;
};

/**
 * lay ra gia tri lon nhat
 * @param {array|object} obj doi tuong mang chua cac gia tri 
 */
var maxOf = function maxOf(obj) {
    var min = NaN;
    if (arguments.length > 1 && !(isArray(obj) || isObject(obj))) {
        obj = copyArray(arguments);
    }
    if (isArray(obj)) {
        for (var index = 0; index < obj.length; index++) {
            if (!isNumber(obj[index])) continue;
            else {
                var n = Number(obj[index]);
                if (isNaN(min) || !index) min = n;
                else if (n > min) min = n;
            }
        }
    }
    else if (isObject(obj)) {
        var index = 0;
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (!isNumber(obj[index])) continue;
                else {
                    var n = Number(obj[index]);
                    if (isNaN(min) || !index) min = n;
                    else if (n > min) min = n;
                }
                index++;
            }
        }
    }
    return min;
};

function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
};

function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};

function _defineProperties(target, props) {
    if (isArray(props)) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    else if (isObject(props)) {
        for (var key in props) {
            if (Object.hasOwnProperty.call(props, key)) {
                var val = props[key];
                Object.defineProperty(target, key, val);
            }
        }
    }

};

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
};

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
};

var checkType = function checkType(type, value, absolultely) {
    if (typeof type !== "string" || !type) return false;
    var tl = type.toLowerCase();
    if (tl == "float") tl = 'number';
    if (tl == 'mixed') return true;
    var t = type.substr(0, 1).toUpperCase() + type.substr(1).toLowerCase();
    var t2 = getType(value);
    return absolultely ? t2 === tl : t2 == tl;
};

/**
 * Kiểm tra tồn tại key hay ko?
 * @param {object|array} obj doi tuong can kiem tra
 * @param {string} key 
 * @returns {boolean}
 */
function objectHasKey(obj, key) {
    return (isObject(obj) && isString(key) && Object.hasOwnProperty.call(obj, key));
}

/**
 * kiểm tra sự tồn tại của thuộc tinh thông qua key và kiểu giá trị
 * @param {any} obj doi tuong can kiem tra
 * @param {string} key danh sach key kem kiey gia tri
 * @param {string} type kieu gia tri
 * @returns {boolean}
 */
var objectHasProperty = function objectHasProperty(obj, key, type) {
    if (!isObject(obj) || isEmpty(obj) || typeof key == "undefined" || (!isString(key) && !isArray(key))) return false;
    var keys = isArray(key) ? key : [key + (isString(type) ? ":" + type : "")];
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var ks = k.split(':');
        var kv = ks[0];
        if (!objectHasKey(obj, kv)) return false;
        if (ks.length == 2) {
            var b = ks[1].split('|').map(function (t) { return t.trim(); }).filter(function (vl) { return vl.length > 0; });
            if (b.length && !inArray(b, getType(obj[kv]))) return false;
        }
    }
    return true;
}

/**
 * joi các mảng vào làm một
 * @param {string[]|number[]} target mảng đầu vào cần join
 * @returns {array}
 */
function arrayJoin(target) {
    if (!isArray(target)) target = [];
    function addToTarget(arr) {
        arr.map(function (vl) {
            if (target.indexOf(vl) === -1) {
                target.push(vl);
            }
        })
    }
    var args = getArguments(arguments, 1);
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (isArray(arg)) addToTarget(arg);
        else if (isObject(arg)) addToTarget(objectValues(arg));
        else addToTarget(arg);
    }
    return target;
}







/**
 * 
 * @param obj 
 * @param key 
 * @param delimiter 
 * @returns 
 */
var getEl = function (obj, key, defaultValue, delimiter) {
    if (typeof obj == 'undefined') {
        return null;
    }
    if (typeof key == 'undefined') {
        return obj;
    }
    var tpo = getType(obj);
    var tpk = getType(key);
    if (tpo == 'array') {
        var k = NaN;
        if (tpk == 'number') {
            k = key;
        } else if (parseInt(key) != NaN) {
            k = parseInt(key);
        }
        if (!isNaN(k)) {
            if (typeof obj[k] != 'undefined') {
                return obj[k];
            }
        }
    }
    else if(tpo == "object"){
        var c = obj;
        var d = isString(delimiter)?delimiter:'.';
        var ks = String(key).split(d);
        for (let index = 0; index < ks.length; index++) {
            const e = ks[index];
            if(objectHasKey(c, e)) {
                c = c[e];
            }else{
                c = defaultValue;
            }
            if(index < ks.length -1 && (!isObject(c) && !isArray(c))) return defaultValue;
        }
        return c;

    }
    return defaultValue;
};

var Num = {
    rand: function (from, to) {
        if (!from) from = 0;
        if (!to) to = 0;
        if (from == 0) to++;
        var rand = Math.floor(Math.random() * to) + from;
        return rand;
    },
    currency: function (x) {
        return x.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1\.");
    }
};

var convertedArray = [];

var Str = {
    html_char_raw: ['%', '&', '=', '?', '#', '+', ':', '/', ' ', '\n', '{', '}'],
    html_char_enc: ['%25', '%26', '%3D', '%3F', '%23', '%2B', '%3A', '%2F', '+', '%0D%0A', '%7B', '%7D'],
    urlcode: { '%': '%25', '&': '%26', '=': '%3D', '?': '%3F', '#': '%23', '+': '%2B', ':': '%3A', '/': '%2F', ' ': '%20', '\n': '%0D%0A', '{': '%7B', '}': '%7D' },
    unicode: {
        js: ["\\u00e0", "\\u00e1", "\\u1ea1", "\\u1ea3", "\\u00e3", "\\u00e2", "\\u1ea7", "\\u1ea5", "\\u1ead", "\\u1ea9", "\\u1eab", "\\u0103", "\\u1eb1", "\\u1eaf", "\\u1eb7", "\\u1eb3", "\\u1eb5", "\\u00e8", "\\u00e9", "\\u1eb9", "\\u1ebb", "\\u1ebd", "\\u00ea", "\\u1ec1", "\\u1ebf", "\\u1ec7", "\\u1ec3", "\\u1ec5", "\\u00ec", "\\u00ed", "\\u1ecb", "\\u1ec9", "\\u0129", "\\u00f2", "\\u00f3", "\\u1ecd", "\\u1ecf", "\\u00f5", "\\u00f4", "\\u1ed3", "\\u1ed1", "\\u1ed9", "\\u1ed5", "\\u1ed7", "\\u01a1", "\\u1edd", "\\u1edb", "\\u1ee3", "\\u1edf", "\\u1ee1", "\\u00f9", "\\u00fa", "\\u1ee5", "\\u1ee7", "\\u0169", "\\u01b0", "\\u1eeb", "\\u1ee9", "\\u1ef1", "\\u1eed", "\\u1eef", "\\u1ef3", "\\u00fd", "\\u1ef5", "\\u1ef7", "\\u1ef9", "\\u0111", "\\u00c0", "\\u00c1", "\\u1ea0", "\\u1ea2", "\\u00c3", "\\u00c2", "\\u1ea6", "\\u1ea4", "\\u1eac", "\\u1ea8", "\\u1eaa", "\\u0102", "\\u1eb0", "\\u1eae", "\\u1eb6", "\\u1eb2", "\\u1eb4", "\\u00c8", "\\u00c9", "\\u1eb8", "\\u1eba", "\\u1ebc", "\\u00ca", "\\u1ec0", "\\u1ebe", "\\u1ec6", "\\u1ec2", "\\u1ec4", "\\u00cc", "\\u00cd", "\\u1eca", "\\u1ec8", "\\u0128", "\\u00d2", "\\u00d3", "\\u1ecc", "\\u1ece", "\\u00d5", "\\u00d4", "\\u1ed2", "\\u1ed0", "\\u1ed8", "\\u1ed4", "\\u1ed6", "\\u01a0", "\\u1edc", "\\u1eda", "\\u1ee2", "\\u1ede", "\\u1ee0", "\\u00d9", "\\u00da", "\\u1ee4", "\\u1ee6", "\\u0168", "\\u01af", "\\u1eea", "\\u1ee8", "\\u1ef0", "\\u1eec", "\\u1eee", "\\u1ef2", "\\u00dd", "\\u1ef4", "\\u1ef6", "\\u1ef8", "\\u0110"],
        vi: ["\u00e0", "\u00e1", "\u1ea1", "\u1ea3", "\u00e3", "\u00e2", "\u1ea7", "\u1ea5", "\u1ead", "\u1ea9", "\u1eab", "\u0103", "\u1eb1", "\u1eaf", "\u1eb7", "\u1eb3", "\u1eb5", "\u00e8", "\u00e9", "\u1eb9", "\u1ebb", "\u1ebd", "\u00ea", "\u1ec1", "\u1ebf", "\u1ec7", "\u1ec3", "\u1ec5", "\u00ec", "\u00ed", "\u1ecb", "\u1ec9", "\u0129", "\u00f2", "\u00f3", "\u1ecd", "\u1ecf", "\u00f5", "\u00f4", "\u1ed3", "\u1ed1", "\u1ed9", "\u1ed5", "\u1ed7", "\u01a1", "\u1edd", "\u1edb", "\u1ee3", "\u1edf", "\u1ee1", "\u00f9", "\u00fa", "\u1ee5", "\u1ee7", "\u0169", "\u01b0", "\u1eeb", "\u1ee9", "\u1ef1", "\u1eed", "\u1eef", "\u1ef3", "\u00fd", "\u1ef5", "\u1ef7", "\u1ef9", "\u0111", "\u00c0", "\u00c1", "\u1ea0", "\u1ea2", "\u00c3", "\u00c2", "\u1ea6", "\u1ea4", "\u1eac", "\u1ea8", "\u1eaa", "\u0102", "\u1eb0", "\u1eae", "\u1eb6", "\u1eb2", "\u1eb4", "\u00c8", "\u00c9", "\u1eb8", "\u1eba", "\u1ebc", "\u00ca", "\u1ec0", "\u1ebe", "\u1ec6", "\u1ec2", "\u1ec4", "\u00cc", "\u00cd", "\u1eca", "\u1ec8", "\u0128", "\u00d2", "\u00d3", "\u1ecc", "\u1ece", "\u00d5", "\u00d4", "\u1ed2", "\u1ed0", "\u1ed8", "\u1ed4", "\u1ed6", "\u01a0", "\u1edc", "\u1eda", "\u1ee2", "\u1ede", "\u1ee0", "\u00d9", "\u00da", "\u1ee4", "\u1ee6", "\u0168", "\u01af", "\u1eea", "\u1ee8", "\u1ef0", "\u1eec", "\u1eee", "\u1ef2", "\u00dd", "\u1ef4", "\u1ef6", "\u1ef8", "\u0110"],
        en: ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "i", "i", "i", "i", "i", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "u", "u", "u", "u", "u", "u", "u", "u", "u", "u", "u", "y", "y", "y", "y", "y", "d", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "I", "I", "I", "I", "I", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "Y", "Y", "Y", "Y", "Y", "D"],
        upper: ["À", "Á", "Ạ", "Ả", "Ã", "Â", "Ầ", "Ấ", "Ậ", "Ẩ", "Ẫ", "Ă", "Ằ", "Ắ", "Ặ", "Ẳ", "Ẵ", "È", "É", "Ẹ", "Ẻ", "Ẽ", "Ê", "Ề", "Ế", "Ệ", "Ể", "Ễ", "Ì", "Í", "Ị", "Ỉ", "Ĩ", "Ò", "Ó", "Ọ", "Ỏ", "Õ", "Ô", "Ồ", "Ố", "Ộ", "Ổ", "Ỗ", "Ơ", "Ờ", "Ớ", "Ợ", "Ở", "Ỡ", "Ù", "Ú", "Ụ", "Ủ", "Ũ", "Ư", "Ừ", "Ứ", "Ự", "Ử", "Ữ", "Ỳ", "Ý", "Ỵ", "Ỷ", "Ỹ", "Đ"],
        lower: ["à", "á", "ạ", "ả", "ã", "â", "ầ", "ấ", "ậ", "ẩ", "ẫ", "ă", "ằ", "ắ", "ặ", "ẳ", "ẵ", "è", "é", "ẹ", "ẻ", "ẽ", "ê", "ề", "ế", "ệ", "ể", "ễ", "ì", "í", "ị", "ỉ", "ĩ", "ò", "ó", "ọ", "ỏ", "õ", "ô", "ồ", "ố", "ộ", "ổ", "ỗ", "ơ", "ờ", "ớ", "ợ", "ở", "ỡ", "ù", "ú", "ụ", "ủ", "ũ", "ư", "ừ", "ứ", "ự", "ử", "ữ", "ỳ", "ý", "ỵ", "ỷ", "ỹ", "đ"]
    },
    clearUnicode: function (str) {
        return this.replace(str, this.unicode.vi, this.unicode.en);
    },
    isSN: function (str) {
        if (typeof str == 'undefined') return null;
        var t = getType(str);
        if (t == 'string' || t == 'number') return true;
        return false;
    },
    /**
     * thay the chuoi trong chuoi bang mot chuoi =)))))
     * @param {string} str  chuoi dau vao
     * @param {string|object|array} find  tham so tim kiem
     * @param {string|object|array} replace  tham so thay the
     */
    replace: function () {
        var a = getArguments(arguments);
        var t = a.length;
        if (t == 0) return '';
        if (typeof a[0] != 'string' || t < 2) {
            return a[0];
        }
        var str = a[0];

        var b = getType(a[1]);
        if (this.isSN(a[1])) {
            if (t >= 3 && this.isSN(a[2])) {
                var obj = Object.create({});
                obj[a[1]] = a[2];
                str = this.replaceByObj(str, obj);
            }
        } else if (b == 'array') {
            if (t >= 3 && getType(a[2]) == 'array') {
                str = this.replaceByArr(str, a[1], a[2]);
            } else if (t >= 3 && getType(a[2]) == 'string') {
                var obj = Object.create({}),
                    val = a[2];
                var d = a[1];
                for (var k in d) {
                    obj[d[k]] = val;
                }
                str = this.replaceByObj(str, obj);
            }
        } else if (b == 'object') {
            str = this.replaceByObj(str, a[1]);
        }
        return str;
    },
    replaceByArr: function () {
        var a = getArguments(arguments);
        var t = a.length;
        if (t == 0) return '';
        if (typeof a[0] != 'string' || t < 2) {
            return a[0];
        }
        var str = a[0];
        var b = getType(a[1]);
        if (b == 'object') {
            str = this.replaceByObj(str, a[1]);
        } else if (b == 'array') {
            var obj = emptyObject();
            if (t >= 3) {
                var f = getType(a[2]);
                if (f == 'string') {
                    for (var k in a[1]) {
                        obj[a[1][k]] = a[2];
                    }
                } else if (f == 'array') {
                    var e = a[1].length,
                        g = a[2].length;
                    var max = (e > g) ? e : g;
                    for (var i = 0; i < max; i++) {
                        obj[a[1][i]] = a[2][i];
                    }
                }
            }
            str = this.replaceByObj(str, obj);
        }
        return str;
    },
    replaceByObj: function () {
        var a = getArguments(arguments);
        // var a = arguments;
        var t = a.length;
        if (t == 0) return '';
        if (typeof a[0] != 'string' || t < 2) {
            return a[0];
        }
        var str = a[0];
        var b = getType(a[1]);
        if (b == 'object') {
            var max = null;
            if (typeof a[2] == 'number') {
                max = a[2];
            }
            var i = 1;
            var sts = a[1];
            for (var key in sts) {
                var txt = sts[key];
                str = this.preg_replace(key, txt, str);
                if (max && i >= max) break;
                i++;
            }
        }
        return str;
    },
    escapeRegExp: function (str) {
        var s = "" + str + "";
        return s.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    },

    preg_replace: function (find, replace, str) {
        var str = "" + str + "";
        return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
    },

    /**
     * Tạo một chuỗi random Ngẫu nhiên
     * @param {string} charList chuỗi ký tự bổ xung
     * @returns {string}
     */
    rand: function (charList) {
        var st = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        if (charList && isString(charList)) st = st + String(charList);
        var sp = st.split('');
        var l = sp.length - 1;
        var s = '';
        for (var i = 0; i < 32; i++) {
            s += sp[Num.rand(0, l)];
        }
        return s;
    },
    /**
     * biến đổ chuỗi thành slug
     * @param {string} str chuỗi đầu vào
     * @param {string} joinKey ký tự nối
     * @returns {string}
     */
    camelToSlug: function (str, joinKey) {
        // if(typeof str == "undefined") str = "";
        var st = 'BCDEFGHIJKLMNOPQRSTUVWXYZ';
        var sp = st.split('');
        var l = sp.length - 1;
        var s = '';
        var find = [];
        var replace = [];
        var k = isString(joinKey) ? joinKey : "-";
        sp.map(function (c) {
            find.push(c);
            replace.push(k + c.toLowerCase());
        });
        return this.replace(str[0].toLowerCase()+""+str.substr(1), find, replace);
    },
    upperToWord: function (str) {
        var st = 'abcdefghijklmnopqrstuvwxyz';
        var sp = st.split('');
        var l = sp.length - 1;
        var s = this.clearUnicode(String(str));
        var find = [];
        var replace = "";
        sp.map(function (c) {
            find.push(c);
        });

        return this.lower(s.substr(0, 1)) + this.lower(this.replace(s.substr(1), find, replace));
    },


    urlencode: function (str) {
        var t = this.html_char_raw.length;
        for (var i = 0; i < t; i++) str = this.replace(str, this.html_char_raw[i], this.html_char_enc[i]);
        return str;
    },
    urldecode: function (str) {
        var t = this.html_char_raw.length;
        for (var i = t - 1; i >= 0; i--) str = this.replace(str, this.html_char_enc[i], this.html_char_raw[i]);
        return str;
    },
    eval: function (template, data) {
        var t = typeof data;
        var tpl = template;
        if (t == 'object' || t == "array") {
            data = this.convertTextObject({}, data);
            for (var k in data) {
                var val = data[k];
                if (val === null) val = '';
                var f = "\{\$" + k + "\}";
                tpl = this.replace(tpl, f, val);
            }
        }
        return tpl;
    },
    convertTextObject: function (root, object, name, joinKey) {

        if (inArray(convertedArray, object)) return root;

        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                if (typeof joinKey != "string") joinKey = ".";
                var val = object[key];
                var t = typeof val;
                var k = (typeof name != "undefined" && ("" + name).length) ? name + joinKey + key : key;
                if (val != null && (t == 'object' || t == "array")) {
                    root = this.convertTextObject(root, val, k, joinKey);
                } else {
                    root[k] = val;
                }
            }
        }
        convertedArray.push(object);
        return root;
    },
    upper: function (str) {
        if (typeof str == "undefined") return null;
        if (isString(str)) {
            var s = str.toUpperCase();
            return this.replace(s, this.unicode.lower, this.unicode.upper);
        }
        else if ((isObject(str) && typeof str.length != "undefined") || isArray(str)) {
            for (var i = 0; i < str.length; i++) {
                str[i] = this.upper(str[i]);
            }
            return str;
        }
        else if (isObject(str)) {
            for (var key in str) {
                if (str.hasOwnProperty(key)) {
                    var st = str[key];
                    str[key] = this.upper(st);
                }
            }
            return str;

        }
    },
    lower: function (str) {
        if (typeof str == "undefined") return null;
        if (isString(str)) {
            var s = str.toLowerCase();
            str = this.replace(s, this.unicode.upper, this.unicode.lower);
        }
        else if ((isObject(str) && typeof str.length != "undefined") || isArray(str)) {
            for (var i = 0; i < str.length; i++) {
                str[i] = this.upper(str[i]);
            }
        }
        else if (isObject(str)) {
            for (var key in str) {
                if (str.hasOwnProperty(key)) {
                    var st = str[key];
                    str[key] = this.upper(st);
                }
            }
        }

        return str;
    },
    ucfirst: function (str) {
        if (isString(str)) {
            if (str.length) {
                var first = str.substring(0, 1);
                str = this.upper(first) + str.substring(1);
            }
        }
        else if ((isObject(str) && typeof str.length != "undefined") || isArray(str)) {
            for (var i = 0; i < str.length; i++) {
                str[i] = this.ucfirst(str[i]);
            }
        }
        else if (isObject(str)) {
            for (var key in str) {
                if (str.hasOwnProperty(key)) {
                    str[key] = this.ucfirst(str[key]);
                }
            }
        }
        return str;
    },
    ucword: function (str) {
        var self = this;
        if (isString(str)) {
            if (str.length) {
                str = str.split(" ").map(function (s) { return self.ucfirst(s) }).join(" ");
            }
        }
        else if ((isObject(str) && typeof str.length != "undefined") || isArray(str)) {
            for (var i = 0; i < str.length; i++) {
                str[i] = this.ucword(str[i]);
            }
        }
        else if (isObject(str)) {
            for (var key in str) {
                if (str.hasOwnProperty(key)) {
                    str[key] = this.ucword(str[key]);
                }
            }
        }
        return str;
    },

    htmlentities: function (str) {
        return this.eval(str, {
            "<": "&lt;",
            ">": "&gt;",
            "\"": "&quote;",
            "&": "&amp;"
        });
    },
    formSlug: function (str) {
        return typeof str != "string" ? str : this.replace(this.replace(str, "[]", '.*'), { "[": ".", "]": "" });
    },
    slug: function (str, key) {
        if (!key) key = '-';
        var s = String(str);
        var l = 'BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var list = [];
        var n = 0;
        var t = this.replace(this.replace(
            this.clearUnicode(this.lower(s)),
            "[]{}();:'\"\\|,./?~!@#$%^&*+=".split(""),
            "-"
        ), '--', '-');
        for (var i = 0; i < t.length; i++) {
            var st = t[i];
            if (l.indexOf(st) == -1) {
                if (typeof list[n] != "undefined") {
                    if (l.indexOf(t[i - 1]) >= 0) n++;
                }
            } else {
                if (typeof list[n] == "undefined") {
                    list[n] = st;
                } else {
                    list[n] += st;
                }
            }
        };
        return list.join(key);
    },
    slugToCamel: function (str) {
        if (isString(str)) {
            var self = this;
            var t = this.replace(
                this.replace(
                    this.clearUnicode(str),
                    "[]{}();:'\"\\|,./?~!@#$%^&*+=".split(""),
                    "-"
                ),
                '--',
                '-'
            ).split("-")
                .map(s => s.trim())
                .filter(s => s.length > 0)
                .map((s, i) => i > 0 ? self.ucfirst(s) : s)
                .join("");
            str = t;


        }
        return str;
    },
    objectKey: function (str, key) {
        if (!key) key = '_';
        var s = String(str);
        var l = '$ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var list = [];
        var n = 0;
        var t = this.replace(this.replace(
            this.clearUnicode(s),
            "[]{}();:'\"\\|,./?~!@#$%^&*+=".split(""),
            "-"
        ), '--', '-');
        for (var i = 0; i < t.length; i++) {
            var st = t[i];
            if (l.indexOf(st) == -1) {
                if (typeof list[n] != "undefined") {
                    if (l.indexOf(t[i - 1]) >= 0) n++;
                }
            } else {
                if (typeof list[n] == "undefined") {
                    list[n] = st;
                } else {
                    list[n] += st;
                }
            }
        };
        return list.join(key);
    },
    orderCharList: [
        " ", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@",
        "A", "À", "Á", "Ạ", "Ả", "Ã", "Â", "Ầ", "Ấ", "Ậ", "Ẩ", "Ẫ", "Ă", "Ằ", "Ắ", "Ặ", "Ẳ", "Ẵ",
        "B", "C", "D", "Đ",
        "E", "È", "É", "Ẹ", "Ẻ", "Ẽ", "Ê", "Ề", "Ế", "Ệ", "Ể", "Ễ",
        "F", "G", "H",
        "I", "Ì", "Í", "Ị", "Ỉ", "Ĩ",
        "K", "L", "M", "N",
        "O", "Ò", "Ó", "Ọ", "Ỏ", "Õ", "Ô", "Ồ", "Ố", "Ộ", "Ổ", "Ỗ", "Ơ", "Ờ", "Ớ", "Ợ", "Ở", "Ỡ",
        "P", "Q", "R", "S", "T",
        "U", "Ù", "Ú", "Ụ", "Ủ", "Ũ", "Ư", "Ừ", "Ứ", "Ự", "Ử", "Ữ",
        "V", "W", "X",
        "Y", "Ỳ", "Ý", "Ỵ", "Ỷ", "Ỹ",
        "z",
        "[", "\\", "]", "^", "_",
        "a", "à", "á", "ạ", "ả", "ã", "â", "ầ", "ấ", "ậ", "ẩ", "ẫ", "ă", "ằ", "ắ", "ặ", "ẳ", "ẵ",
        "b", "c",
        "d", "d",
        "e", "è", "é", "ẹ", "ẻ", "ẽ", "ê", "ề", "ế", "ệ", "ể", "ễ",
        "f", "g", "h",
        "i", "ì", "í", "ị", "ỉ", "ĩ",
        "k", "l", "m", "n",
        "o", "ò", "ó", "ọ", "ỏ", "õ", "ô", "ồ", "ố", "ộ", "ổ", "ỗ", "ơ", "ờ", "ớ", "ợ", "ở", "ỡ",
        "p", "q", "r", "s", "t",
        "u", "ù", "ú", "ụ", "ủ", "ũ", "ư", "ừ", "ứ", "ự", "ử", "ữ",
        "v", "w", "x", "y", "ỳ", "ý", "ỵ", "ỷ", "ỹ",
        "z"
    ],
    compare: function (str1, str2) {
        var i1n = isNumber(str1)
        var i2n = isNumber(str2);
        if (i1n && i2n) {
            return str1 > str2 ? 1 : (str1 == str2 ? 0 : -1)

        }
        str1 = String(str1);
        str2 = String(str2);
        var s1l = str1.length, s2l = str2.length;
        var max = s1l < s2l ? s1l : s2l;
        for (var i = 0; i < max; i++) {
            var c1 = this.orderCharList.indexOf(str1[i]);
            var c2 = this.orderCharList.indexOf(str2[i]);

            if (c2 == -1 || c1 > c2) return 1;
            if (c1 == -1 || c1 < c2) return -1;

        }
        return s1l > s2l ? 1 : (s1l < s2l ? -1 : 0);

    }

};





var date = function (format, lang) {
    var offset = 0;
    var d = new Date();
    var t = emptyObject();
    var l = String(lang).toLowerCase() != 'en' ? 'vi' : 'en';

    var dl = newObj({
        en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        vi: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']
    });
    var ml = {
        en: ["", "Jan"]
    };


    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    d = new Date(utc + (3600000 * offset));



    t.ms = d.getMilliseconds();
    t.Y = d.getFullYear();
    t.y = d.getFullYear() - 1900;
    t.H = d.getHours();
    t.i = d.getMinutes();
    t.m = d.getMonth() + 1;
    t.s = d.getSeconds();
    t.time = d.getTime();
    t.d = d.getDate();
    t.w = dl[l][d.getDay()];
    if (!format) return t;
    var f = getType(format);
    if (f == 'string') {
        var txt = format;
        txt = Str.replace(txt, 'ms', t.ms);
        txt = Str.replace(txt, 'time', t.time);
        txt = Str.replace(txt, t);
        return txt;
    }
    return null;
};
var getTimeStamp = function () {
    var offset = 0;
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    d = new Date(utc + (3600000 * offset));



    return d.getTime();
};


/**
 * 
 * @param {object} target đối  tượng cần gán thuộc tính
 * @param {object|string} key key hoặc object thuộc tính
 * @param {*} value giá trị
 * @returns {object}
 */
 const assignValue =  function(target, key, value) {
    if (!isArray(target) && !isObject(target)) return target;
    if (isObject(key)) {
        let objData = key;
        if (isArray(target)) {
            console.warn("Target khong cung kieu voi object");
            var a = target;
            target = assignValue({}, a);
        }
        for (var k in objData) {
            if (objData.hasOwnProperty(k)) {

                
                    var v = objData[k];
                    assignValue(target, k, v);
                


            }
        }
    } else if (isArray(key)) {
        let arrData = key;
        for (let i = 0; i < arrData.length; i++) {
            const vl = arrData[i];
            assignValue(target, i, vl);
        }
    }
    else if ((isString(key) || isNumber(key)) && String(key).length) {
        let sk = String(key);
        let ak = key;
        if (String(key).substr(0, 1) == '@') {
            var f = sk.substr(1);
            if (typeof target[f] == "function") {
                target[f].apply(target, isArray(value) ? value : [value]);
            }
        }
        else if (isObject(value)) {
            if (value.constructor == Object) {
                if (typeof target[ak] != "object") target[ak] = {};
                assignValue(target[ak], value);
            }
            else {
                target[ak] = value;
            }
        }
        else if (isArray(value)) {
            if (typeof target[ak] == "undefined" || !isArray(target[ak])) {
                target[ak] = [];
                assignValue(target[ak], value);
            } else {
                assignValue(target[ak], value);
            }
        }
        else {
            target[ak] = value;
        }
    }
    return target;
};




/**
 * 
 * @param {object} target đối  tượng cần gán thuộc tính
 * @param {*} value giá trị
 * @returns {object}
 */
 const assignOneValue = function(target, value) {
    if (!isArray(target) && !isObject(target)) return target;
    if (isObject(target)) {
        if(target.constructor == Object){
            for (const key in target) {
                if (Object.hasOwnProperty.call(target, key)) {
                    const vl = target[key];
                    if(isObject(vl) && vl.constructor == Object){
                        assignOneValue(vl, value);
                    }
                    target[key] = value;
                }
            }
        }
    } else if (isArray(target)) {
        let arrData = target;
        for (let i = 0; i < arrData.length; i++) {
            const vl = arrData[i];
            if(isObject(vl) && vl.constructor == Object){
                assignOneValue(vl, value);
            }
            arrData[i] = value;
        }
    }
    return target;
};
/**
 * hủy object
 * @param {object|array} target đối tượng cần gán thuộc tính
 * @returns {object}
 */
const destroyObject = function(target) {
    if (!isArray(target) && !isObject(target)) return target;
    if (isObject(target)) {
        if(target.constructor == Object){
            for (const key in target) {
                if (Object.hasOwnProperty.call(target, key)) {
                    const vl = target[key];
                    if(isObject(vl) && vl.constructor == Object){
                        destroyObject(vl);
                    }
                    target[key] = null;
                    delete target[key]
                }
            }
        }
    } else if (isArray(target)) {
        for (let i = 0; i < target.length; i++) {
            const vl = target[i];
            if(isObject(vl) && vl.constructor == Object){
                destroyObject(vl);
            }
            target[i] = null;
        }
        target.splice(0);
    }
    return target;
};

/**
 * khai báo ngoại trừ   
 * @param {*} target đầu vào chịu ảnh hưởng
 * @param {*} source nguồn
 * @returns object
 */
var assignWithout = function (target, source) {
    if (typeof target != "object" || typeof source != "object") return target;
    var il = [];
    var ignore = getArguments(arguments, 2);
    for (var index = 0; index < ignore.length; index++) {
        var list = ignore[index];
        if (isArray(list)) {
            for (var i = 0; i < list.length; i++) {
                let field = list[i];
                il.push(field);
            }
        } else if (isObject(list)) {
            for (var field in list) {
                if (list.hasOwnProperty(field)) {
                    var val = list[field];
                    il.push(field);
                }
            }
        }else{
            il.push(list)
        }
    }
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            var val = source[key];
            if (!inArray(il, key)) {
                assignValue(target, key, val);
            }
        }
    }
    return target;
};


/**
 * 
 * @param {object} target đối  tượng cần gán thuộc tính
 * @param {object|string} key key hoặc object thuộc tính
 * @param {*} value giá trị
 * @returns {object}
 */
 const assignIfNotExists = (target, key, value) => {
    if (!isArray(target) && !isObject(target)) return target;
    if (isObject(key)) {
        let objData = key;
        if (isArray(target)) {
            console.warn("Target khong cung kieu voi object");
            var a = target;
            target = assignIfNotExists({}, a);
        }
        for (var k in objData) {
            if (Object.prototype.hasOwnProperty.call(objData, k)) {
                var v = objData[k];
                assignIfNotExists(target, k, v);


            }
        }
    } else if (isArray(key)) {
        let arrData = key;
        for (let i = 0; i < arrData.length; i++) {
            const vl = arrData[i];
            assignIfNotExists(target, i, vl);
        }
    }
    else if ((isString(key) || isNumber(key)) && String(key).length) {
        let sk = String(key);
        let ak = key;
        if (String(key).substr(0, 1) == '@') {
            var f = sk.substr(1);
            if (typeof target[f] == "function") {
                target[f].apply(target, isArray(value) ? value : [value]);
            }
        }
        else if (isObject(value)) {
            if (value.constructor == Object) {
                if (typeof target[ak] != "object") target[ak] = {};
                assignIfNotExists(target[ak], value);
            }
            else if(!objectHasKey(target, sk)){

                target[ak] = value;
            }
        }
        else if (isArray(value)) {
            if (typeof target[ak] == "undefined" || !isArray(target[ak])) {
                target[ak] = [];
                assignIfNotExists(target[ak], value);
            } else {
                assignIfNotExists(target[ak], value);
            }
        }
        else if(!objectHasKey(target, sk)){
            target[ak] = value;
        }
    }
    return target;
};


const objectAssignKeyValue = (target, key, value, filter) => {
    let stt = true;
    let resolveValue = value;
    let resolveStt = false;
    const resolve = (val) => {
        resolveValue = val;
        resolveStt = true;
        return val;
    };
    const reject = (_any) => {
        stt = false;
    }
    if(typeof filter == "function"){
        let rs = filter(key, value, resolve, reject);
        if(resolveStt){
            target[key] = resolveValue;
        }else if(stt){
            if(isBoolean(rs)){
                if(isBoolean(value)) target[key] = rs;
                else if(rs === true) target[key] = value;
            }else if(typeof rs != "undefined") target[key] = value;
        }
    }else if(isString(filter)){
        if(getType(value) == filter){
            target[key] = value;
        }
    }else{
        target[key] = value;
    }
    return value;
};
const objectAssign = (target, obj, filter) => {
    if (!isArray(target) && !isObject(target)) return target;
    if (isObject(obj)) {
        let objData = obj;
        if (isArray(target)) {
            console.warn("Target khong cung kieu voi object");
            var a = target;
            target = assignValue({}, a);
        }
        for (var k in objData) {
            if (objData.hasOwnProperty(k)) {

                var v = objData[k];
                objectAssignKeyValue(target, k, v, filter);
                


            }
        }
    } else if (isArray(obj)) {
        let arrData = obj;
        for (let i = 0; i < arrData.length; i++) {
            const vl = arrData[i];
            objectAssignKeyValue(target, i, vl, filter);
        }
    }
    return target;
};
var rgbToHex = function (rgb) {
    var hex = parseInt(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};
var colorToHex = function (r, g, b) {
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return "#" + red + green + blue;
};

var invertHexColor = function invertHexColor(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1); // remove #
    color = parseInt(color, 16); // convert to integer
    color = 0xFFFFFF ^ color; // invert three bytes
    color = color.toString(16); // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color; // prepend #
    return color;
}

/**
 * xửu lý hàng đợi
 * @param {function} work hàm thục thi công việc
 * @param {Number} delay thời gian giữa 2 lần chạy task
 * @param {Number} step số lần thực hiện công việc nếu chưa bị reject hay resolve
 */
class Queue {
    status = "";
    result;

    e=null;
    
    constructor(work, delay, step) {
        if (typeof work == "undefined") return this;
        this.status = "pending";
        this.result = null;
        var d = (typeof delay == "undefined" || !isNumber(delay) || delay < 1) ? 10 : delay;
        var s = (typeof step == "undefined" || !isNumber(step) || step < 0) ? -1 : step;
        var self = this;
        var properties = newObj({
            timeDelay: d,
            stepCount: s,
            resolved: false,
            rejected: false,
            cancelled: false,
            stopped: false,
            status: "pending",
            timeId: null,
            turn: 1,
            count: 1
        });
        var methods = newObj({
            then: function (rs) {
                // App.log(rs);
            },
            catch: function (err) {
                console.log(err);
            },
            clear: function () {
                if (properties.timeId) {
                    clearTimeout(properties.timeId);
                    self.status = properties.status;
                }

            },
            run: function () {
                var comtext = this;
                var time = properties.timeDelay || 10;
                var stop = properties.stepCount;
                var resolve = function (rs) {
                    properties.resolved = rs;
                    if (properties.status == "pending") {
                        properties.status = "resolved";
                        self.result = rs;
                        comtext.clear();
                        return comtext.then(rs);
                    }
                    comtext.clear();
                    return true;

                };
                var reject = function (err) {
                    properties.rejected = err;
                    if (properties.status == "pending") {
                        properties.status = "rejected";
                        self.result = err;
                        comtext.catch(err);
                    }
                    comtext.clear();
                    return err;

                };
                var runtask = function () {

                    var id = setTimeout(() => {
                        if (properties.stepCount > -1 && properties.turn > properties.stepCount) {
                            properties.status = "stoped";
                            properties.stopped = "time out";
                            comtext.clear();
                            return false;
                        } else if (properties.status != "pending") {
                            return false;
                        } else {
                            try {
                                var stt = work(resolve, reject, properties.turn);
                                if (stt !== undefined) {
                                    if (properties.status == "pending") {
                                        comtext.stop();
                                        return false;
                                    }
                                }
                                properties.turn++;
                            } catch (error) {
                                comtext.stop();
                                comtext.catch(error);
                                return false;
                            }
                        }

                        properties.count++;
                        runtask();
                        return true;
                    }, time);
                    properties.timeId = id;
                };
                runtask();
            },
            stop: function () {
                properties.stepCount = 0;
                properties.status = "stopped";
                this.clear();
            },
            delay: function (delay) {
                if (typeof delay == "undefined" || !isNumber(delay) || delay < 1) return;
                properties.timeDelay = delay;
                this.clear();
                this.run();
            },
            step: function (step) {
                if (typeof step == "undefined" || !isNumber(step) || step < -1 || step == 0) return;
                properties.stepCount = step;
                this.clear();
                this.run();
            },
            restart: function () {
                this.clear();
                properties.turn = 1;
                this.run();
            },
            addThen: function (fn) {
                if (typeof fn == "function") {
                    this.then = fn;
                }
            },
            addCatch: function (fn) {
                if (typeof fn == "function") {
                    this.catch = fn;
                }
            },
            getData: function () {
                return properties;
            }
        });
        this.e = function (...args) {
            if (!args.length || typeof args[0] != "string") return null;
            var method = args[0];
            var r = null;
            if (typeof methods[method] == "function") {
                var args2 = [];
                for (var i = 1; i < args.length; i++) {
                    var arg = args[i];
                    args2.push(arg);
                }

                r = methods[method].apply(methods, args2);
            }
            return r;
        };
        setTimeout(function () {
            methods.run();
        }, 1);
    }

    delay(delay) {
        if (typeof delay == "undefined" || !isNumber(delay) || delay < 1) return;
        this.e("delay", delay);
        return this;
    }
    step(step) {
        if (typeof step == "undefined" || !isNumber(step) || step < -1 || step == 0) return;
        this.e("step", step);
        return this;
    }
    try(step) {
        if (typeof step == "undefined" || !isNumber(step) || step < -1 || step == 0) return;
        this.e("step", step);
        return this;
    }
    restart() {
        this.e("restart");
        return this;
    }
    then(fn) {
        if (typeof fn == "function") {
            this.e("addThen", fn);
        }
        return this;
    }
    catch(fn){
        if (typeof fn == "function") {
            this.e("addCatch", fn);
        }
        return this;
    }
}
/**
 * xửu lý hàng đợi
 * @param {function} work hàm thục thi công việc
 * @param {Number} delay thời gian giữa 2 lần chạy task
 * @param {Number} step số lần thực hiện công việc nếu chưa bị reject hay resolve
 */
function queueTask(work, delay, step) {
    return new Queue(work, delay, step);
}



/**
 * lấy danh sách tham số nội hàm khi dược gọi
 * @param {Arguments} args tham số nội hàm
 * @param {integer} start vị trí bắt đầu lấy tham số
 * @returns {mixed[]}
 */
function getArguments(args, start) {
    var a = [];
    if (!isNumber(start) || start < 0) start = 0;
    if (args && args.length) {
        for (let i = start; i < args.length; i++) {
            const arg = args[i];
            a.push(arg);
        }
    }
    return a;
}


function JsonToBase64(data) {
    return "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
}


function b64toBlob(b64Data, contentType, sliceSize) {
    if (!contentType) contentType = '';
    if (!sliceSize) sliceSize = 512;
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
}





/**
 * resize anh
 * @param {string|Element} img anh
 * @param {int} resizeWidth do rong 
 * @param {int} resizeHeight chieu cao
 * @param {function} callback ham call back
 */
function resizeImage(img, resizeWidth, resizeHeight, callback) {
    function fn(imgTag) {
        var canvas = document.createElement('canvas');
        canvas.setAttribute('width', resizeWidth);
        canvas.setAttribute('height', resizeHeight);


        var ctx = canvas.getContext("2d");

        var imageWidth = imgTag.width;
        var imageHeight = imgTag.height;

        var zoomWidth = imageWidth, zoomHeight = imageHeight;
        var imageRatio = imageWidth / imageHeight;
        var resizeRatio = resizeWidth / resizeHeight;
        // tỉ lệ là dài trên cao

        if (imageRatio < resizeRatio) { // Nếu rỉ lệ của ảnh nhỏ hơn tỷ lệ resize thì sẽ zoom ảnh theo chiều rộng resize
            zoomWidth = resizeWidth;
            zoomHeight = zoomWidth / imageRatio;
        } else { // nhược lại sẽ zoom ảnh theo chiều cao resize
            zoomHeight = resizeHeight;
            zoomWidth = zoomHeight * imageRatio;
        }

        // var image = new Image();
        // image.src = imgTag.src;
        // console.log(imageWidth, imageHeight, zoomWidth, zoomHeight, (resizeWidth - zoomWidth) / 2, (resizeHeight - zoomHeight) / 2);
        ctx.drawImage(imgTag, (resizeWidth - zoomWidth) / 2, (resizeHeight - zoomHeight) / 2, zoomWidth, zoomHeight);
        // console.log(canvas)
        var url = canvas.toDataURL("image/png");
        callback(url);

    }
    return isString(img) ? function () {
        var el = document.createElement('img');
        el.crossOrigin = "anonymous";
        el.onload = function () {
            // window['img00'] = el
            fn(el);

        }
        el.src = img;
        return el;
    }() :
        img instanceof Element ? fn(img) : null;
}

var degreeToRadians = function (degrees) {
    if (!isNumber(degrees) || isNaN(degrees) || degrees == "") degrees = 0;
    return degrees * Math.PI / 180;
};
var radianToDegrees = function (radians) {
    if (!isNumber(radians) || isNaN(radians) || radians == '') radians = 0;
    return radians * 180 / Math.PI;
}


/**
 * 
 * @param type loại input
 * @param name tên input
 * @param value gia tri
 * @param options option
 */
function getInputCfg ( type, name, value, options ) {
    var t = Str.lower(type);
    return inArray([
        'text', 'number', 'select', 'range', 'radio', 'checkbox', 'switch', 
        'textarea', 'texteditor', 'vector2', 'vector3', 'vector4', 'texture', 
        'imagesurl', 'color' 
    ], t)? assignValue({
        type: t,
        name: name,
        value: value
    }, options) : null ;
}


const EMPTY_VALUE = "<EMPTY>" + Str.rand(getTimeStamp()) + "</EMPTY>";


var getFirstValueInList = function(list, key, checkFn){
    var val = EMPTY_VALUE;
    if(isArray(list) && isString(key)){
        if(isFunction(checkFn)){
            for (let index = 0; index < list.length; index++) {
                const currentObject = list[index];
                if(isObject(currentObject)){
                    if(Object.hasOwnProperty.call(currentObject, key)){
                        if(checkFn(currentObject[key])){
                            return currentObject[key];
                        }
                    }
                }
            }
        }else{
            for (let index = 0; index < list.length; index++) {
                const currentObject = list[index];
                if(isObject(currentObject)){
                    if(Object.hasOwnProperty.call(currentObject, key)){
                        if(currentObject[key] !== "" && currentObject[key]!== null && currentObject[key] !== undefined) return currentObject[key];
                    }
                }
            }
        }
    }
    return val;
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* reexport */ A),
  "Abbr": () => (/* reexport */ Abbr),
  "Acronym": () => (/* reexport */ Acronym),
  "Address": () => (/* reexport */ Address),
  "Applet": () => (/* reexport */ Applet),
  "Area": () => (/* reexport */ Area),
  "Article": () => (/* reexport */ Article),
  "Aside": () => (/* reexport */ Aside),
  "Audio": () => (/* reexport */ Audio),
  "B": () => (/* reexport */ B),
  "Base": () => (/* reexport */ Base),
  "Basefont": () => (/* reexport */ Basefont),
  "Bb": () => (/* reexport */ Bb),
  "Bdo": () => (/* reexport */ Bdo),
  "Big": () => (/* reexport */ Big),
  "Blockquote": () => (/* reexport */ Blockquote),
  "Body": () => (/* reexport */ Body),
  "Br": () => (/* reexport */ Br),
  "Button": () => (/* reexport */ Button),
  "Canvas": () => (/* reexport */ Canvas),
  "Caption": () => (/* reexport */ Caption),
  "Center": () => (/* reexport */ Center),
  "Cite": () => (/* reexport */ Cite),
  "Code": () => (/* reexport */ Code),
  "Col": () => (/* reexport */ Col),
  "Colgroup": () => (/* reexport */ Colgroup),
  "Command": () => (/* reexport */ Command),
  "Component": () => (/* reexport */ Component),
  "Datagrid": () => (/* reexport */ Datagrid),
  "Datalist": () => (/* reexport */ Datalist),
  "Dd": () => (/* reexport */ Dd),
  "Del": () => (/* reexport */ Del),
  "Details": () => (/* reexport */ Details),
  "Dfn": () => (/* reexport */ Dfn),
  "Dialog": () => (/* reexport */ Dialog),
  "Dir": () => (/* reexport */ Dir),
  "Div": () => (/* reexport */ Div),
  "Dl": () => (/* reexport */ Dl),
  "Dom": () => (/* reexport */ dom/* Dom */.is),
  "DomBag": () => (/* reexport */ dom/* DomBag */.RL),
  "Dt": () => (/* reexport */ Dt),
  "EMPTY_VALUE": () => (/* reexport */ utils/* EMPTY_VALUE */.Ic),
  "Em": () => (/* reexport */ Em),
  "Embed": () => (/* reexport */ Embed),
  "Eventsource": () => (/* reexport */ Eventsource),
  "Fieldset": () => (/* reexport */ Fieldset),
  "Figcaption": () => (/* reexport */ Figcaption),
  "Figure": () => (/* reexport */ Figure),
  "Font": () => (/* reexport */ Font),
  "Footer": () => (/* reexport */ Footer),
  "Form": () => (/* reexport */ Form),
  "Frame": () => (/* reexport */ Frame),
  "Frameset": () => (/* reexport */ Frameset),
  "H1": () => (/* reexport */ H1),
  "H2": () => (/* reexport */ H2),
  "H3": () => (/* reexport */ H3),
  "H4": () => (/* reexport */ H4),
  "H5": () => (/* reexport */ H5),
  "H6": () => (/* reexport */ H6),
  "Head": () => (/* reexport */ Head),
  "Header": () => (/* reexport */ Header),
  "Hgroup": () => (/* reexport */ Hgroup),
  "Hr": () => (/* reexport */ Hr),
  "Html": () => (/* reexport */ Html),
  "I": () => (/* reexport */ I),
  "Iframe": () => (/* reexport */ Iframe),
  "Img": () => (/* reexport */ Img),
  "Input": () => (/* reexport */ Input),
  "Ins": () => (/* reexport */ Ins),
  "Isindex": () => (/* reexport */ Isindex),
  "JsonToBase64": () => (/* reexport */ utils/* JsonToBase64 */.dj),
  "Kbd": () => (/* reexport */ Kbd),
  "Keygen": () => (/* reexport */ Keygen),
  "Label": () => (/* reexport */ Label),
  "Legend": () => (/* reexport */ Legend),
  "Li": () => (/* reexport */ Li),
  "Link": () => (/* reexport */ Link),
  "Map": () => (/* reexport */ Map),
  "Mark": () => (/* reexport */ Mark),
  "Menu": () => (/* reexport */ Menu),
  "Meta": () => (/* reexport */ Meta),
  "Meter": () => (/* reexport */ Meter),
  "Nav": () => (/* reexport */ Nav),
  "Noframes": () => (/* reexport */ Noframes),
  "Noscript": () => (/* reexport */ Noscript),
  "Num": () => (/* reexport */ utils/* Num */.Cq),
  "Ol": () => (/* reexport */ Ol),
  "Optgroup": () => (/* reexport */ Optgroup),
  "Option": () => (/* reexport */ Option),
  "Output": () => (/* reexport */ Output),
  "P": () => (/* reexport */ P),
  "Param": () => (/* reexport */ Param),
  "Pre": () => (/* reexport */ Pre),
  "Progress": () => (/* reexport */ Progress),
  "Q": () => (/* reexport */ Q),
  "Queue": () => (/* reexport */ utils/* Queue */.ci),
  "Rp": () => (/* reexport */ Rp),
  "Rt": () => (/* reexport */ Rt),
  "Ruby": () => (/* reexport */ Ruby),
  "S": () => (/* reexport */ S),
  "Samp": () => (/* reexport */ Samp),
  "Script": () => (/* reexport */ Script),
  "Section": () => (/* reexport */ Section),
  "Select": () => (/* reexport */ Select),
  "Small": () => (/* reexport */ Small),
  "Source": () => (/* reexport */ Source),
  "Span": () => (/* reexport */ Span),
  "Str": () => (/* reexport */ utils/* Str */.W3),
  "Strike": () => (/* reexport */ Strike),
  "Strong": () => (/* reexport */ Strong),
  "Style": () => (/* reexport */ Style),
  "Sub": () => (/* reexport */ Sub),
  "Sup": () => (/* reexport */ Sup),
  "Table": () => (/* reexport */ Table),
  "Tbody": () => (/* reexport */ Tbody),
  "Td": () => (/* reexport */ Td),
  "Textarea": () => (/* reexport */ Textarea),
  "Tfoot": () => (/* reexport */ Tfoot),
  "Th": () => (/* reexport */ Th),
  "Thead": () => (/* reexport */ Thead),
  "Time": () => (/* reexport */ Time),
  "Title": () => (/* reexport */ Title),
  "Tr": () => (/* reexport */ Tr),
  "Track": () => (/* reexport */ Track),
  "Tt": () => (/* reexport */ Tt),
  "U": () => (/* reexport */ U),
  "Ul": () => (/* reexport */ Ul),
  "Video": () => (/* reexport */ Video),
  "Wbr": () => (/* reexport */ Wbr),
  "_class": () => (/* reexport */ es5_class/* _class */.nN),
  "_createClass": () => (/* reexport */ utils/* _createClass */.TD),
  "_defineProperties": () => (/* reexport */ utils/* _defineProperties */.Pm),
  "_defineProperty": () => (/* reexport */ utils/* _defineProperty */.w2),
  "_instanceof": () => (/* reexport */ utils/* _instanceof */.lH),
  "a": () => (/* reexport */ a),
  "abbr": () => (/* reexport */ abbr),
  "acronym": () => (/* reexport */ acronym),
  "addToGlobal": () => (/* reexport */ utils/* addToGlobal */.sN),
  "address": () => (/* reexport */ address),
  "applet": () => (/* reexport */ applet),
  "area": () => (/* reexport */ html_components_area),
  "arrayJoin": () => (/* reexport */ utils/* arrayJoin */.KA),
  "article": () => (/* reexport */ article),
  "aside": () => (/* reexport */ aside),
  "assignIfNotExists": () => (/* reexport */ utils/* assignIfNotExists */._W),
  "assignOneValue": () => (/* reexport */ utils/* assignOneValue */.zH),
  "assignValue": () => (/* reexport */ utils/* assignValue */.MP),
  "assignWithout": () => (/* reexport */ utils/* assignWithout */.bg),
  "audio": () => (/* reexport */ audio),
  "b": () => (/* reexport */ b),
  "b64toBlob": () => (/* reexport */ utils/* b64toBlob */.Mi),
  "base": () => (/* reexport */ base),
  "basefont": () => (/* reexport */ basefont),
  "bb": () => (/* reexport */ bb),
  "bdo": () => (/* reexport */ bdo),
  "big": () => (/* reexport */ big),
  "blockquote": () => (/* reexport */ blockquote),
  "body": () => (/* reexport */ body),
  "br": () => (/* reexport */ br),
  "button": () => (/* reexport */ html_components_button),
  "canvas": () => (/* reexport */ canvas),
  "caption": () => (/* reexport */ caption),
  "center": () => (/* reexport */ center),
  "checkType": () => (/* reexport */ utils/* checkType */.$1),
  "cite": () => (/* reexport */ cite),
  "code": () => (/* reexport */ code),
  "col": () => (/* reexport */ col),
  "colgroup": () => (/* reexport */ colgroup),
  "colorToHex": () => (/* reexport */ utils/* colorToHex */.hq),
  "combine": () => (/* reexport */ utils/* combine */.$e),
  "combineElenentsJoinStringList": () => (/* reexport */ utils/* combineElenentsJoinStringList */.Ss),
  "combineElenentsToArrList": () => (/* reexport */ utils/* combineElenentsToArrList */.E2),
  "command": () => (/* reexport */ command),
  "copyArray": () => (/* reexport */ utils/* copyArray */.$3),
  "copyByList": () => (/* reexport */ utils/* copyByList */.GE),
  "copyWithout": () => (/* reexport */ utils/* copyWithout */.qV),
  "create": () => (/* reexport */ dom/* create */.Ue),
  "createClass": () => (/* reexport */ es5_class/* createClass */.qH),
  "createEl": () => (/* reexport */ dom/* createEl */.ut),
  "createElementClass": () => (/* reexport */ createElementClass),
  "createInstance": () => (/* reexport */ es5_class/* createInstance */.Fs),
  "cutWithout": () => (/* reexport */ utils/* cutWithout */.rj),
  "datagrid": () => (/* reexport */ datagrid),
  "datalist": () => (/* reexport */ datalist),
  "date": () => (/* reexport */ utils/* date */.hT),
  "dd": () => (/* reexport */ dd),
  "degreeToRadians": () => (/* reexport */ utils/* degreeToRadians */.S3),
  "del": () => (/* reexport */ del),
  "destroyObject": () => (/* reexport */ utils/* destroyObject */.yp),
  "details": () => (/* reexport */ details),
  "dfn": () => (/* reexport */ dfn),
  "dialog": () => (/* reexport */ dialog),
  "dir": () => (/* reexport */ dir),
  "div": () => (/* reexport */ div),
  "dl": () => (/* reexport */ dl),
  "domEvents": () => (/* reexport */ dom/* domEvents */.ek),
  "dt": () => (/* reexport */ dt),
  "em": () => (/* reexport */ em),
  "embed": () => (/* reexport */ html_components_embed),
  "emptyObject": () => (/* reexport */ utils/* emptyObject */.FD),
  "eventsource": () => (/* reexport */ eventsource),
  "fieldset": () => (/* reexport */ fieldset),
  "figcaption": () => (/* reexport */ figcaption),
  "figure": () => (/* reexport */ figure),
  "font": () => (/* reexport */ font),
  "footer": () => (/* reexport */ footer),
  "form": () => (/* reexport */ html_components_form),
  "frame": () => (/* reexport */ html_components_frame),
  "frameset": () => (/* reexport */ frameset),
  "getArguments": () => (/* reexport */ utils/* getArguments */.Tu),
  "getClassData": () => (/* reexport */ es5_class/* getClassData */.VG),
  "getDomInf": () => (/* reexport */ dom/* getDomInf */.bM),
  "getEl": () => (/* reexport */ utils/* getEl */.Gn),
  "getFirstValueInList": () => (/* reexport */ utils/* getFirstValueInList */.X5),
  "getInputCfg": () => (/* reexport */ utils/* getInputCfg */.Sk),
  "getTimeStamp": () => (/* reexport */ utils/* getTimeStamp */.dg),
  "getType": () => (/* reexport */ utils/* getType */.oL),
  "h1": () => (/* reexport */ h1),
  "h2": () => (/* reexport */ h2),
  "h3": () => (/* reexport */ h3),
  "h4": () => (/* reexport */ h4),
  "h5": () => (/* reexport */ h5),
  "h6": () => (/* reexport */ h6),
  "hasValue": () => (/* reexport */ utils/* hasValue */.Uh),
  "head": () => (/* reexport */ head),
  "header": () => (/* reexport */ header),
  "hgroup": () => (/* reexport */ hgroup),
  "hr": () => (/* reexport */ hr),
  "htmlTags": () => (/* reexport */ dom/* htmlTags */.ck),
  "i": () => (/* reexport */ i),
  "iframe": () => (/* reexport */ iframe),
  "img": () => (/* reexport */ img),
  "inArray": () => (/* reexport */ utils/* inArray */.d3),
  "input": () => (/* reexport */ input),
  "inputTags": () => (/* reexport */ dom/* inputTags */.oE),
  "inputTypes": () => (/* reexport */ dom/* inputTypes */.Je),
  "ins": () => (/* reexport */ ins),
  "invertHexColor": () => (/* reexport */ utils/* invertHexColor */.R8),
  "isArray": () => (/* reexport */ utils/* isArray */.kJ),
  "isBoolean": () => (/* reexport */ utils/* isBoolean */.jn),
  "isCallable": () => (/* reexport */ utils/* isCallable */.GV),
  "isEmail": () => (/* reexport */ utils/* isEmail */.Jh),
  "isEmpty": () => (/* reexport */ utils/* isEmpty */.xb),
  "isFloat": () => (/* reexport */ utils/* isFloat */.Q7),
  "isFormData": () => (/* reexport */ utils/* isFormData */.hp),
  "isFunction": () => (/* reexport */ utils/* isFunction */.mf),
  "isInteger": () => (/* reexport */ utils/* isInteger */.U),
  "isMethod": () => (/* reexport */ utils/* isMethod */.A),
  "isNull": () => (/* reexport */ utils/* isNull */.Ft),
  "isNumber": () => (/* reexport */ utils/* isNumber */.hj),
  "isObject": () => (/* reexport */ utils/* isObject */.Kn),
  "isProperty": () => (/* reexport */ utils/* isProperty */.IC),
  "isString": () => (/* reexport */ utils/* isString */.HD),
  "isindex": () => (/* reexport */ isindex),
  "kbd": () => (/* reexport */ kbd),
  "keygen": () => (/* reexport */ keygen),
  "label": () => (/* reexport */ label),
  "legend": () => (/* reexport */ legend),
  "li": () => (/* reexport */ li),
  "link": () => (/* reexport */ html_components_link),
  "map": () => (/* reexport */ map),
  "mark": () => (/* reexport */ mark),
  "maxOf": () => (/* reexport */ utils/* maxOf */.yZ),
  "menu": () => (/* reexport */ menu),
  "merge": () => (/* reexport */ utils/* merge */.TS),
  "meta": () => (/* reexport */ meta),
  "meter": () => (/* reexport */ meter),
  "minOf": () => (/* reexport */ utils/* minOf */.Y9),
  "nav": () => (/* reexport */ nav),
  "newObj": () => (/* reexport */ utils/* newObj */.tr),
  "noframes": () => (/* reexport */ noframes),
  "noscript": () => (/* reexport */ noscript),
  "objectAssign": () => (/* reexport */ utils/* objectAssign */.wB),
  "objectHasKey": () => (/* reexport */ utils/* objectHasKey */.aX),
  "objectHasProperty": () => (/* reexport */ utils/* objectHasProperty */.o8),
  "objectKeys": () => (/* reexport */ utils/* objectKeys */.Yd),
  "objectValues": () => (/* reexport */ utils/* objectValues */.TT),
  "observe": () => (/* reexport */ observe),
  "ol": () => (/* reexport */ ol),
  "optgroup": () => (/* reexport */ optgroup),
  "option": () => (/* reexport */ html_components_option),
  "output": () => (/* reexport */ output),
  "p": () => (/* reexport */ p),
  "param": () => (/* reexport */ param),
  "pre": () => (/* reexport */ pre),
  "progress": () => (/* reexport */ progress),
  "q": () => (/* reexport */ q),
  "queueTask": () => (/* reexport */ utils/* queueTask */.kg),
  "radianToDegrees": () => (/* reexport */ utils/* radianToDegrees */.DR),
  "resizeImage": () => (/* reexport */ utils/* resizeImage */.tg),
  "rp": () => (/* reexport */ rp),
  "rt": () => (/* reexport */ rt),
  "ruby": () => (/* reexport */ ruby),
  "s": () => (/* reexport */ s),
  "samp": () => (/* reexport */ samp),
  "script": () => (/* reexport */ script),
  "section": () => (/* reexport */ section),
  "select": () => (/* reexport */ html_components_select),
  "small": () => (/* reexport */ small),
  "source": () => (/* reexport */ source),
  "span": () => (/* reexport */ span),
  "strike": () => (/* reexport */ strike),
  "strong": () => (/* reexport */ strong),
  "style": () => (/* reexport */ style),
  "sub": () => (/* reexport */ sub),
  "sup": () => (/* reexport */ sup),
  "table": () => (/* reexport */ table),
  "tbody": () => (/* reexport */ tbody),
  "td": () => (/* reexport */ td),
  "textarea": () => (/* reexport */ html_components_textarea),
  "tfoot": () => (/* reexport */ tfoot),
  "th": () => (/* reexport */ th),
  "thead": () => (/* reexport */ thead),
  "time": () => (/* reexport */ time),
  "title": () => (/* reexport */ title),
  "tr": () => (/* reexport */ tr),
  "track": () => (/* reexport */ track),
  "tt": () => (/* reexport */ tt),
  "u": () => (/* reexport */ u),
  "ul": () => (/* reexport */ ul),
  "video": () => (/* reexport */ video),
  "wbr": () => (/* reexport */ wbr)
});

// EXTERNAL MODULE: ./src/core/utils.js
var utils = __webpack_require__(499);
// EXTERNAL MODULE: ./src/core/es5-class.js
var es5_class = __webpack_require__(170);
;// CONCATENATED MODULE: ./src/core/observer.js





// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef(v) {
    return v === undefined || v === null
}

function isDef(v) {
    return v !== undefined && v !== null
}


/**
 * Check if value is primitive.
 */
function isPrimitive(value) {
    return (
        typeof value === 'string' ||
        typeof value === 'number' ||
        // $flow-disable-line
        typeof value === 'symbol' ||
        typeof value === 'boolean'
    )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject(obj) {
    return obj !== null && typeof obj === 'object'
}

function isArray(variable) {
    return getType(variable) == "array" || Array.isArray(variable);
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType(value) {
    return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]'
}



/**
 * Remove an item from an array.
 */
function remove(arr, item) {
    if (arr.length) {
        var index = arr.indexOf(item);
        if (index > -1) {
            return arr.splice(index, 1)
        }
    }
}

/**
 * Check whether an object has the property.
 */
var observer_hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
    return observer_hasOwnProperty.call(obj, key)
}





var config = ({
    /**
     * Whether to enable devtools
     */

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

});


/**
 * Define a property.
 */
function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    });
}

function defConst(obj, key, value, options) {
    var opt = {
        enumerable: false,
        configurable: false
    };
    if (isObject(options)) {
        if (options.enumerable) {
            opt.enumerable = true;
        }
        if (typeof options.get == "function") {
            opt.get = options.get;
            // if(options.writable){
            //     opt.writable = true;
            // }
        }
        else {
            opt.value = Object.hasOwnProperty(options, 'value') ? options.value : value;
        }
    } else {
        opt.value = value;
    }
    Object.defineProperty(obj, key, opt);
}

function defProp(obj, key, value, options) {
    var opt = {
        enumerable: true,
        configurable: true
    };
    if (isObject(options)) {
        if (options.enumerable !== undefined) {
            opt.enumerable = options.enumerable ? true : false;
        }
        if (typeof options.get == "function") {
            opt.get = options.get;
            if (typeof options.set == "function") {
                opt.set = options.set;
            }
        }
        else {
            opt.value = Object.hasOwnProperty(options, 'value') ? options.value : value;
            if (options.writable) {
                opt.writable = true;
            }
        }
    } else {
        opt.value = value;
    }
    Object.defineProperty(obj, key, opt);
}

function getPrimitiveValue(value, parent) {
    var Primitive = function Primitive() { 
        this.args = getArguments(arguments); 
    };
    Primitive = function Primitive(newValue) {
        var type = getType(newValue);
        value = newValue;
        if (inArray(['array', 'object'])) {
            // changeValue(newValue);
            changeType(type);
        }
        else {
            changeValue(newValue);
        }

    };
    var t = getType(value);
    defConst(Primitive, 'type', Str.ucfirst(t));
    defConst(Primitive, 'is'+Str.ucfirst(t), true);
    
    




    defConst(Primitive, '__onChangeType__', function (fn) {
        if (typeof fn == "function") events.type.push(fn);
    });

    defConst(Primitive, '__toData__', function (fn) {
        if ((isObject(value) || isFunction(value)) && typeof value.__toData__ == "function") return value.__toData__();
        return value;
    });

    defConst(Primitive, 'toString', function (fn) {
        return this.__toData__();
    });


    defConst(Primitive, '__setParent__', function (parent) {
        if (isObject(parent)) {
            parents.push(parent);
        }
    });


    function changeType(type) {
        if (events.type.length) events.type.map(function (fn) {
            fn(type, value);
        });
    }
    function changeValue(valu) {
        if (events.value.length) events.value.map(function (fn) {
            fn(valu);
        });
    }

    return Primitive;
}

function getPrimitive(value) {
    var type = getType(value);
    var primitive = null;
    switch (type) {
        case 'number':
            primitive = new Number(value);
            break;
        case 'string':
            primitive = new String(value);
            break;
        case 'boolean':
            primitive = new Boolean(value);
            break;

        

        default:
            return getPrimitiveValue(value);
            break;
    }
    var events = {
        value: [],
        type: []
    };
    var parents = [];
    
    defConst(primitive, 'isPrimitive', true);
    defConst(primitive, 'is'+Str.ucfirst(getType(value)), true);

    
    defConst(primitive, '__toData__', function (fn) {
        if ((isObject(value) || isFunction(value)) && typeof value.__toData__ == "function") return value.__toData__();
        return value;
    });

    defConst(primitive, 'toString', function (fn) {
        return this.__toData__();
    });


    defConst(primitive, '__setParent__', function (parent) {
        if (isObject(parent) && (parent.isArrayData || parent.isObjectData)) {
            parents.push(parent);
        }
    });


    function changeType(type) {
        if (events.type.length) events.type.map(function (fn) {
            fn(type, value);
        });
    }
    function changeValue(valu) {
        if (events.value.length) events.value.map(function (fn) {
            fn(valu);
        });
    }

    return primitive;
}

function parseValue(value) {
    if ((isObject(value) && (value.isArrayData || value.isObjectData || value.isPrimitiveData)) || (isFunction(value) && value.isPrimitiveData)) return value;
    return isArray(value) ? (new ArrayData(value)) : (isObject(value) && value.constructor == Object ? (new ObjectData(value)) : getPrimitive(value));
}


/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';


var supportsPassive = false;
if (inBrowser) {
    try {
        var opts = {};
        Object.defineProperty(opts, 'passive', ({
            get: function get() {
                /* istanbul ignore next */
                supportsPassive = true;
            }
        })); // https://github.com/facebook/flow/issues/285
        window.addEventListener('test-passive', null, opts);
    } catch (e) { }
}



/* istanbul ignore next */
function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}
var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
} else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /*@__PURE__*/(function () {
        function Set() {
            this.set = Object.create(null);
        }
        Set.prototype.has = function has(key) {
            return this.set[key] === true
        };
        Set.prototype.add = function add(key) {
            this.set[key] = true;
        };
        Set.prototype.clear = function clear() {
            this.set = Object.create(null);
        };

        return Set;
    }());
}




var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep() {
    this.id = uid++;
    this.subs = [];

};

Dep.prototype.addSub = function addSub(sub) {
    this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub(sub) {
    remove(this.subs, sub);
};

Dep.prototype.depend = function depend() {
    if (Dep.target) {
        Dep.target.addDep(this);
    }
};

Dep.prototype.notify = function notify() {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    if (!config.async) {
        // subs aren't sorted in scheduler if not running async
        // we need to sort them now to make sure they fire in correct
        // order
        subs.sort(function (a, b) { return a.id - b.id; });
    }
    for (var i = 0, l = subs.length; i < l; i++) {
        subs[i].update();
    }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;


/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];

        var result = original.apply(this, args);
        var ob = this.__ob__;
        var inserted;
        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args;
                break
            case 'splice':
                inserted = args.slice(2);
                break
        }
        if (inserted) { ob.observeArray(inserted); }
        // notify change
        ob.dispatch()
        return result
    });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

var obsDefaultKey = '___OBSERVER_DEFAULT_KEY___';

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 * @property {Observer} parent
 * @param {*} value 
 * @param {Observer} parent đối tượng cha
 */
var Observer = function Observer(value, parent) {
    this.value = value;
    // this.dep = new Dep();
    this.parent = parent;
    this.listeners = [];
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
        if (hasProto) {
            protoAugment(value, arrayMethods);
        } else {
            copyAugment(value, arrayMethods, arrayKeys);
        }
        this.observeArray(value);
    } else {
        this.walk(value);
    }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk(obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
        defineReactive$$1.call(this, obj, keys[i]);
    }
    
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray(items) {
    for (var i = 0, l = items.length; i < l; i++) {
        observe(items[i], undefined, this);
        // defineReactive$$1.call(this, items, i, items[i]);
    }

    // defineReactive$i1(items, items.length);

};

function resetArrayAccessors(){

}

function defineReactive$i1(obj, key, val){
    var val = undefined;
    var isset = false;
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            var value = val;
            return value
        },
        set: function reactiveSetter(newVal) {
            var value = val;
            /* eslint-disable no-self-compare */
            var old = val;
            if(!isset){
                isset = true;

                val = newVal;
                childOb = !shallow && observe(newVal, undefined, this);
                obj.__ob__.dispatch(key, val, old, obj);
                defineReactive$i1(obj, key+1);
            }
            if (newVal === value || (newVal !== newVal && value !== value)) {
                return
            }
            // #7981: for accessor properties without setter
            val = newVal;
            childOb = !shallow && observe(newVal, undefined, this);
            obj.__ob__.dispatch(key, val, old, obj);
        }
    });
}


/**
 * lắng nghe sự kiện
 * @param {Observer} child đối tượng muốn gửi
 * @param {string[]} keys key muốn theo dõi thay đổi
 * @param {function(*, *, string)} listen hàm xử lý
 */
Observer.prototype.onTransfer = function (child, keys, listen) {
    var key = null;
    if (isArray(this.value)) {
        for (let index = 0; index < this.value.length; index++) {
            const vl = this.value[index];
            if (vl == child.value) {
                key = String(index);
                break;
            }
        }
    }
    else {
        for (const k in this.value) {
            if (Object.hasOwnProperty.call(this.value, k)) {
                const vl = this.value[k];
                if (vl == child.value) {
                    key = k;
                    break;
                }
            }
        }
    }

    keys.unshift(key);

    if (!this.parent) {
        this.addEventListener(keys.join("."), listen);
    }
    else {
        this.parent.onTransfer(this, keys, listen);
    }
    return this;
}

/**
 * lắng nghe sự kiện
 * @param {string} key key muốn theo dõi thay đổi
 * @param {function(*, *, string)} listen hàm xử lý
 */
Observer.prototype.addEventListener = function (key, listen) {
    if (!this.parent) {
        if (typeof key == "function") {
            listen = key;
            key = obsDefaultKey;
        }

        if (typeof this.listeners[key] == "undefined") this.listeners[key] = [];
        this.listeners[key].push(listen);
        return this
    }

    if (typeof key == "function") {
        listen = key;
        key = obsDefaultKey;
        this.parent.onTransfer(this, [], listen);
        return this
    }
    if (typeof listen != "function") return this;
    this.parent.onTransfer(this, [key], listen);

    return this

}
/**
 * Theo dõi thay đổi của giá trị
 * @param {string} key key muốn theo dõi thay đổi
 * @param {function(newValue, oldValue, fulKey)} listen hàm xử lý
 */
Observer.prototype.subcribe = function subcribe(key, listen) {
    return this.addEventListener.call(this, key, listen);
};

/**
 * Theo dõi thay đổi của giá trị
 * @param {string} key key muốn theo dõi thay đổi
 * @param {function(newValue, oldValue, fulKey)} listen hàm xử lý
 */
Observer.prototype.on = function on(key, listen) {
    return this.addEventListener.call(this, key, listen);
};

/**
 * Nhận thay doi tu con
 * @param {*[]} key key muốn theo dõi thay đổi
 */
Observer.prototype.onDispatch = function onDispatch(changes, child) {
    var key = null;
    if (isArray(this.value)) {
        for (let index = 0; index < this.value.length; index++) {
            const vl = this.value[index];
            if (vl == child.value) {
                key = String(index);
                break;
            }
        }
    }
    else {
        for (const k in this.value) {
            if (Object.hasOwnProperty.call(this.value, k)) {
                const vl = this.value[k];
                if (vl == child.value) {
                    key = k;
                    break;
                }
            }
        }
    }
    for (let i = 0; i < changes.length; i++) {
        changes[i].key = key + "." + changes[i].key;
    }
    changes.push({
        key: key,
        value: this.value,
        old: this.value,
        target: child.value
    })

    if (this.parent) return this.parent.onDispatch(changes, this);
    for (let index = 0; index < changes.length; index++) {
        const change = changes[index];
        this.dispatch(change.key, change.value, change.old, change.target);
    }

};

/**
 * Theo dõi thay đổi của giá trị
 * @param {string} key key muốn theo dõi thay đổi
 * @param {any} value hàm xử lý
 * @param {any} old hàm xử lý
 */
Observer.prototype.dispatch = function dispatch(key, value, old, target) {
    var t = target ? target : this.value;
    if (!this.parent) {
        if (key === undefined) {
            key = obsDefaultKey;
            value = this.value;
            old = this.value;
            target = this.value;
        }

        if (typeof this.listeners[key] != "undefined") {
            if (isArray(this.listeners[key])) {
                for (let index = 0; index < this.listeners[key].length; index++) {
                    const fn = this.listeners[key][index];
                    if (typeof fn == "function") {
                        fn(value, old, key);
                    }
                }
            }
        }
    }
    else {
        if (key === undefined) {
            this.parent.onDispatch([], this);
            return this;
        }

        this.parent.onDispatch([{
            key: key,
            value: value,
            old: old,
            target: t
        }], this);

    }

};


/**
 * Theo dõi thay đổi của giá trị
 * @param {string} key key muốn theo dõi thay đổi
 * @param {any} value hàm xử lý
 * @param {any} old hàm xử lý
 */
Observer.prototype.emit = function emit(key, value, old) {
    return this.addEventListener.call(this, key, value, old);
};


// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment(target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment(target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
        var key = keys[i];
        def(target, key, src[key]);
    }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe(value, asRootData, parent) {
    if (!isObject(value)) {
        return
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
        ob = value.__ob__;
    } else if (
        (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value)
    ) {
        ob = new Observer(value, parent);
    }
    if (asRootData && ob) {
        ob.vmCount++;
    }
    return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1(obj, key, val, customSetter, shallow) {
    // var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
        return
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) && arguments.length === 2) {
        val = obj[key];
    }

    var childOb = !shallow && observe(val, undefined, this);
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            var value = getter ? getter.call(obj) : val;
            // if (Dep.target) {
            //     dep.depend();
            //     if (childOb) {
            //         childOb.dep.depend();
            //         if (Array.isArray(value)) {
            //             dependArray(value);
            //         }
            //     }
            // }
            return value
        },
        set: function reactiveSetter(newVal) {
            var value = getter ? getter.call(obj) : val;
            /* eslint-disable no-self-compare */
            var old = val;
            if (newVal === value || (newVal !== newVal && value !== value)) {
                return
            }
            /* eslint-enable no-self-compare */
            if (customSetter) {
                customSetter();
            }
            // #7981: for accessor properties without setter
            if (getter && !setter) { return }
            if (setter) {
                setter.call(obj, newVal);
            } else {
                val = newVal;
            }
            childOb = !shallow && observe(newVal, undefined, this);
            console.log(key, val);
            obj.__ob__.dispatch(key, val, old, obj);
        }
    });
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray(value) {
    for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
        e = value[i];
        e && e.__ob__ && e.__ob__.dep.depend();
        if (Array.isArray(e)) {
            dependArray(e);
        }
    }
}



// EXTERNAL MODULE: ./src/core/dom/dom.js
var dom = __webpack_require__(809);
;// CONCATENATED MODULE: ./src/core/dom/html-components.js

// import Dom, { $, Query, query } from './dom.js';




function checkImageURL(url) {
    return (url.match(/\.(jpeg|jpg|gif|png|svg)$/) != null || url.match(/^(http|https)\:\/\//) != null);
}
/**
 * Tạo một lớp đối tượng
 * @param {string} tag tên thẻ bạn muốn khởi tạo
 * @returns {Html}
 */
function createElementClass(tag, properties) {
    var prop = {};
    if ((0,utils/* isObject */.Kn)(properties)) {
        for (var key in properties) {
            if (Object.hasOwnProperty.call(properties, key)) {
                var fn = properties[key];
                if (key == "constructor") {
                    if (typeof fn == "function") prop.__constructor__ = fn;
                }
                else {
                    prop[key] = fn;
                }
            }
        }
    }
    var t = tag.toLowerCase();
    var classProps = {
        
        const$tagName: tag,
        constructor: function () {
            var args = (0,utils/* getArguments */.Tu)(arguments);
            if (args.length && (0,utils/* isString */.HD)(args[0])) {
                if (args[0].match(/^(\.|\#|\[|\:)[A-Za-z_\-]+/i) !== null) {
                    var a = (0,dom/* getDomInf */.bM)(args[0]);
                    if (a.isElement) {
                        if (a.isDefault) {
                            args[0] = tag.toLowerCase() + args[0];
                        } else {
                            args[0] = this.tagName + args[0].substr(a.tagName.length);
                        }
                    }
                    else {
                        args.unshift(this.tagName);
                    }
                }
                else {
                    args.unshift(this.tagName);
                    if (args[0].match(/^\{.*\}$/i) !== null) {
                        args[0] = args[0].substr(1, args[0].length - 2);
                    }
                }

            }
            else {
                args.unshift(this.tagName);
            }
            this.setElement.apply(this, args);
        }
    };
    classProps['const$is' + utils/* Str.ucfirst */.W3.ucfirst(t)] = true;
    if (t == 'img') {
        (0,utils/* assignValue */.MP)(classProps, {
            $isImage: true,
            $srcSync: false,
            $src: null,
            inits: '__src_init__',
            get$src: function (value) {
                // return this.val();
            },
            set$src: function (value) {
                if (this.srcSync) this.attr('src', value);
            },
            __src_init__: function () {
                this.src = this.attr('src');
                var self = this;
                this.on('change', function (e) {
                    var value = this.attr('src');
                    if (value != self.src) {
                        self.valueSync = false;
                        self.src = value;
                        self.srcSync = true;
                    }
                });
                this.srcSync = true;
            },
            constructor: function constructor() {
                var args = (0,utils/* getArguments */.Tu)(arguments);
                var src = null;
                var createArgs = [];
                var attrs = {};
                var hasTag = false;
                for (var index = 0; index < args.length; index++) {
                    var vl = args[index];
                    if (index == 0) {
                        if ((0,utils/* isString */.HD)(vl)) {
                            if (checkImageURL(vl)) {
                                src = vl;
                                createArgs.unshift(this.tagName);
                            } else {
                                var a = (0,dom/* getDomInf */.bM)(vl);
                                if (a.isElement) {
                                    if (a.isDefault) {
                                        createArgs.push(tag.toLowerCase() + args[0]);
                                        hasTag = true;
                                    } else {
                                        createArgs.push(this.tagName + args[0].substr(a.tagName.length));
                                        hasTag = true;
                                    }
                                }
                                else {
                                    createArgs.unshift(this.tagName);
                                }
                            }

                        }
                        else {
                            createArgs.unshift(this.tagName);
                            (0,utils/* assignValue */.MP)(attrs, vl);
                        }
                    }
                    else {
                        if ((0,utils/* isString */.HD)(vl)) {
                            if (!src && checkImageURL(vl)) {
                                src = vl;
                            }
                            else {
                                attrs.alt = vl;
                            }

                        }
                        else if ((0,utils/* isObject */.Kn)(vl)) {
                            (0,utils/* assignValue */.MP)(attrs, vl);
                        }
                    }
                }

                if (src && !attrs.src) attrs.src = src;
                createArgs.push(attrs);

                this.setElement.apply(this, createArgs);
            }
        });
    }
    else if (t == 'input') {
        (0,utils/* assignValue */.MP)(classProps, {
            $valueSync: false,
            $value: null,
            inits: '__value_init__',
            onGet$Value: function (value) {
                // return this.val();
            },
            onset$value: function (value) {
                if (this.valueSync) this.val(value);
            },
            __value_init__: function () {
                this.value = this.val();
                var self = this;
                this.on('change', function (e) {
                    var value = this.val();
                    if (value != self.value) {
                        self.valueSync = false;
                        self.value = value;
                        self.valueSync = true;
                    }
                });
                this.valueSync = true;
            },
            constructor: function constructor() {
                var args = (0,utils/* getArguments */.Tu)(arguments);
                // nếu nhập vào ("select", "name", "value", data)
                var createArgs = [];
                var domEls = [];
                if (args.length) {
                    if ((0,utils/* isObject */.Kn)(args[0]) && !args[0].isDom) {

                        createArgs.push(args[0])

                    }
                    else {
                        var inputOptions = {
                            type: "",
                            name: "",
                            value: "",
                            default: "",
                            data: {}
                        }
                        var s = 0;
                        var domEls = [];
                        for (var index = 0; index < args.length; index++) {
                            var vl = args[index];

                            if ((0,utils/* isString */.HD)(vl)) {
                                var vlow = String(vl).toLowerCase();
                                if (!s) {
                                    var a = (0,dom/* getDomInf */.bM)(vl);
                                    if (dom/* inputTypes.indexOf */.Je.indexOf(vlow) !== -1 || dom/* inputTags.indexOf */.oE.indexOf(vlow) !== -1) {
                                        inputOptions.type = vlow;
                                        s++;
                                    }
                                    else if (a.isElement) {
                                        var tg = a.tagName.toLowerCase();
                                        if (dom/* inputTypes.indexOf */.Je.indexOf(tg) !== -1) {
                                            inputOptions.type = tg;
                                        }
                                        else if (dom/* inputTags.indexOf */.oE.indexOf(tg) != -1) {
                                            inputOptions.type = tg;
                                        }
                                        s++;
                                        if (!(0,utils/* isEmpty */.xb)(a.attrs)) {
                                            (0,utils/* assignValue */.MP)(inputOptions, a.attrs);
                                        };
                                        if (!(0,utils/* isEmpty */.xb)(a.props)) (0,utils/* assignValue */.MP)(inputOptions, a.props);
                                        if (a.className) {
                                            inputOptions.className = a.className;
                                        }
                                        if (a.id) {
                                            inputOptions.id = a.id;
                                        }

                                    } else {
                                        inputOptions.name = vl;
                                        s++;
                                    }

                                }
                                else if (index < 3) {
                                    if ((inputOptions.name && dom/* inputTypes.indexOf */.Je.indexOf(vlow) !== -1 || dom/* inputTags.indexOf */.oE.indexOf(vlow) !== -1) && !inputOptions.type) {
                                        inputOptions.type = vlow;
                                    }
                                    else if (!inputOptions.name && vl.match(/^[A-z_]+[A-z_\[\]0-9\.\-]*$/i) != null) {
                                        inputOptions.name = vl;
                                    }
                                    else {
                                        inputOptions.value = vl;
                                    }
                                }
                            }
                            else if ((0,utils/* isObject */.Kn)(vl)) {
                                if (vl.isDom) {
                                    domEls.push(vl);
                                }
                                else {
                                    (0,utils/* assignValue */.MP)(inputOptions, vl);
                                }

                            }


                        }
                        if (!inputOptions.type) inputOptions.type = 'text';
                        createArgs.push(inputOptions);
                    }
                }
                if (createArgs.length) {
                    var elem = input1.apply(this, createArgs);
                    var el = elem.el;
                    if (el) {

                        if (!el.id && this.id) el.id = this.id;
                        if (!el.className && this.className) el.className = this.className;

                        this.el = el;
                        if (!(0,utils/* isEmpty */.xb)(elem.dynamicAttrs)) {
                            this.addDynamicAttr(elem.dynamicAttrs);
                        }
                        // console.log(this, args, elem.contents);
                        if (elem.tag == 'select' && !(0,utils/* isEmpty */.xb)(elem.contents)) {
                            this.setHtml((0,dom/* default */.ZP)('div', elem.contents).html());

                        }
                        if (!(0,utils/* isEmpty */.xb)(elem.events)) {
                            this.on(elem.events);
                        }

                        // DoanDepTrai
                        if (!(0,utils/* isEmpty */.xb)(elem.methods)) {
                            for (var method in elem.methods) {
                                if (Object.hasOwnProperty.call(elem.methods, method)) {
                                    var fn = elem.methods[method];
                                    // console.log(method, fn)
                                    (0,utils/* _defineProperty */.w2)(this, method, fn);
                                }
                            }
                        }
                        if (this._pendingContents.length) {
                            while (this._pendingContents.length) {
                                var a = this._pendingContents.shift();
                                this[a.key] = a.content;
                                this.append(a.content);
                            }
                        }
                    }
                }

            }
        });
    }

    return (0,es5_class/* default */.ZP)(utils/* Str.ucfirst */.W3.ucfirst(tag), false).extends(dom/* default */.ZP).uses(prop)(classProps);
}

function createHtmlElementFunction(tag) {
    var tagName = tag.toLowerCase();
    var fn = function (...args) {
        if (args.length && (0,utils/* isString */.HD)(args[0])) {
            if (args[0].match(/^(\.|\#|\[|\:)[A-Za-z_\-]+/i) !== null) {
                var a = (0,dom/* getDomInf */.bM)(args[0]);
                if (a.isElement) {
                    if (a.isDefault) {
                        args[0] = tag.toLowerCase() + args[0];
                    } else {
                        args[0] = tagName + args[0].substr(a.tagName.length);
                    }
                }
                else {
                    args.unshift(tagName);
                }
            }
            else {
                args.unshift(tagName);
                if (args[0].match(/^\{.*\}$/i) !== null) {
                    args[0] = args[0].substr(1, args[0].length - 2);
                }
            }

        }
        else {
            args.unshift(tagName);
        }
        return (0,dom/* createEl */.ut)(...args);
    };
    if (tagName == "input") {
        fn = function (...args) {
            var createArgs = [];
            var domEls = [];
            if (args.length) {
                if ((0,utils/* isObject */.Kn)(args[0]) && !args[0].isDom) {

                    createArgs.push(args[0])

                }
                else {
                    var inputOptions = {
                        type: "",
                        name: "",
                        value: "",
                        default: "",
                        data: {}
                    }
                    var s = 0;
                    var domEls = [];
                    for (var index = 0; index < args.length; index++) {
                        var vl = args[index];

                        if ((0,utils/* isString */.HD)(vl)) {
                            var vlow = String(vl).toLowerCase();
                            if (!s) {
                                var a = (0,dom/* getDomInf */.bM)(vl);
                                if (dom/* inputTypes.indexOf */.Je.indexOf(vlow) !== -1 || dom/* inputTags.indexOf */.oE.indexOf(vlow) !== -1) {
                                    inputOptions.type = vlow;
                                    s++;
                                }
                                else if (a.isElement) {
                                    var tg = a.tagName.toLowerCase();
                                    if (dom/* inputTypes.indexOf */.Je.indexOf(tg) !== -1) {
                                        inputOptions.type = tg;
                                    }
                                    else if (dom/* inputTags.indexOf */.oE.indexOf(tg) != -1) {
                                        inputOptions.type = tg;
                                    }
                                    s++;
                                    if (!(0,utils/* isEmpty */.xb)(a.attrs)) {
                                        (0,utils/* assignValue */.MP)(inputOptions, a.attrs);
                                    };
                                    if (!(0,utils/* isEmpty */.xb)(a.props)) (0,utils/* assignValue */.MP)(inputOptions, a.props);
                                    if (a.className) {
                                        inputOptions.className = a.className;
                                    }
                                    if (a.id) {
                                        inputOptions.id = a.id;
                                    }

                                } else {
                                    inputOptions.name = vl;
                                    s++;
                                }

                            }
                            else if (index < 3) {
                                if ((inputOptions.name && dom/* inputTypes.indexOf */.Je.indexOf(vlow) !== -1 || dom/* inputTags.indexOf */.oE.indexOf(vlow) !== -1) && !inputOptions.type) {
                                    inputOptions.type = vlow;
                                }
                                else if (!inputOptions.name && vl.match(/^[A-z_]+[A-z_\[\]0-9\.\-]*$/i) != null) {
                                    inputOptions.name = vl;
                                }
                                else {
                                    inputOptions.value = vl;
                                }
                            }
                        }
                        else if ((0,utils/* isObject */.Kn)(vl)) {
                            if (vl.isDom) {
                                domEls.push(vl);
                            }
                            else {
                                (0,utils/* assignValue */.MP)(inputOptions, vl);
                            }

                        }


                    }
                    if (!inputOptions.type) inputOptions.type = 'text';
                    createArgs.push(inputOptions);
                }
            }
            if (createArgs.length) {
                return input2(createArgs);

            }
            else {
                return input2({
                    type: "text"
                });
            }
        };


    } else if (tagName == "img") {
        fn = function (...args) {
            var src = null;
            var createArgs = [];
            var attrs = {};
            var hasTag = false;
            for (var index = 0; index < args.length; index++) {
                var vl = args[index];
                if (index == 0) {
                    if ((0,utils/* isString */.HD)(vl)) {
                        if (checkImageURL(vl)) {
                            src = vl;
                            createArgs.unshift(tagName);
                        } else {
                            var a = (0,dom/* getDomInf */.bM)(vl);
                            if (a.isElement) {
                                if (a.isDefault) {
                                    createArgs.push(tag.toLowerCase() + args[0]);
                                    hasTag = true;
                                } else {
                                    createArgs.push(tagName + args[0].substr(a.tagName.length));
                                    hasTag = true;
                                }
                            }
                            else {
                                createArgs.unshift(tagName);
                            }
                        }

                    }
                    else {
                        createArgs.unshift(tagName);
                        (0,utils/* assignValue */.MP)(attrs, vl);
                    }
                }
                else {
                    if ((0,utils/* isString */.HD)(vl)) {
                        if (!src && checkImageURL(vl)) {
                            src = vl;
                        }
                        else {
                            attrs.alt = vl;
                        }

                    }
                    else if ((0,utils/* isObject */.Kn)(vl)) {
                        (0,utils/* assignValue */.MP)(attrs, vl);
                    }
                }
            }

            if (src && !attrs.src) attrs.src = src;
            createArgs.push(attrs);

            return (0,dom/* createEl */.ut)(...args);
        };

    }

    return fn;


}




function input1(args) {
    if (typeof args == "object") {
        var tagName = 'input';
        var attrs = {};
        var content = null;
        var value = null;
        var type = "text";
        var ignore = [];
        var data = [];
        var boot = null,
            init = null;
        for (var prop in args) {
            if (args.hasOwnProperty(prop)) {
                var val = args[prop];
                let p = prop.toLowerCase();
                if (p == 'type') {
                    let v = (typeof val == 'string') ? val.toLowerCase() : 'text';
                    type = v;
                    if (v == 'textarea') {
                        tagName = v;
                        ignore.push("type", "value");
                    } else if (v == "select") {
                        tagName = "select";
                        ignore.push("type", "value", "data");
                    } else {
                        attrs[p] = v;
                    }
                } else if (ignore.indexOf(p) >= 0) {
                    // next
                } else if (p == "init") {
                    init = val;
                } else if (p == "boot") {
                    boot = val;
                } else {
                    attrs[prop] = val;
                }

                if (p == 'value') {
                    value = val;
                } else if (p == 'data') {
                    data = val;
                }
            }
        }
        var attributes = {};
        for (var key in attrs) {
            if (attrs.hasOwnProperty(key)) {
                var va = attrs[key];
                if (ignore.indexOf(key.toLowerCase()) >= 0) {
                    // next
                } else {
                    attributes[key] = va;
                }
            }
        }
        if (type == 'select') {
            content = [];
            if (typeof data == "object") {
                for (var vl in data) {
                    if (data.hasOwnProperty(vl)) {
                        var text = data[vl];
                        let option = { value: vl };
                        if (vl == value) {
                            option.selected = "selected";
                        }
                        content.push((0,dom/* createEl */.ut)('option', text, option));
                    }
                }
            }
        } else if (type == "textarea") {
            content = value;
        } else {
            content = attributes;
        }
        return dom/* create.call */.Ue.call(this, tagName, attributes, content, boot, init);
    }
    return null;
};

function input2(args) {
    if (typeof args == "object") {
        var tagName = 'input';
        var attrs = {};
        var content = null;
        var value = null;
        var type = "text";
        var ignore = [];
        var data = [];
        var boot = null,
            init = null;
        for (var prop in args) {
            if (args.hasOwnProperty(prop)) {
                var val = args[prop];
                let p = prop.toLowerCase();
                if (p == 'type') {
                    let v = (typeof val == 'string') ? val.toLowerCase() : 'text';
                    type = v;
                    if (v == 'textarea') {
                        tagName = v;
                        ignore.push("type", "value");
                    } else if (v == "select") {
                        tagName = "select";
                        ignore.push("type", "value", "data");
                    } else {
                        attrs[p] = v;
                    }
                } else if (ignore.indexOf(p) >= 0) {
                    // next
                } else if (p == "init") {
                    init = val;
                } else if (p == "boot") {
                    boot = val;
                } else {
                    attrs[prop] = val;
                }

                if (p == 'value') {
                    value = val;
                } else if (p == 'data') {
                    data = val;
                }
            }
        }
        var attributes = {};
        for (var key in attrs) {
            if (attrs.hasOwnProperty(key)) {
                var va = attrs[key];
                if (ignore.indexOf(key.toLowerCase()) >= 0) {
                    // next
                } else {
                    attributes[key] = va;
                }
            }
        }
        if (type == 'select') {
            content = [];
            if (typeof data == "object") {
                for (var vl in data) {
                    if (data.hasOwnProperty(vl)) {
                        var text = data[vl];
                        let option = { value: vl };
                        if (vl == value) {
                            option.selected = "selected";
                        }
                        content.push((0,dom/* createEl */.ut)('option', text, option));
                    }
                }
            }
        } else if (type == "textarea") {
            content = value;
        } else {
            content = attributes;
        }
        return (0,dom/* createEl */.ut)(tagName, attributes, content, boot, init);
    }
    return null;
};



const A = createElementClass("a"), Abbr = createElementClass("abbr"), Acronym = createElementClass("acronym"), Address = createElementClass("address"), Applet = createElementClass("applet"), Area = createElementClass("area"), Article = createElementClass("article"), Aside = createElementClass("aside"), Audio = createElementClass("audio");
const B = createElementClass("b"), Base = createElementClass("base"), Basefont = createElementClass("basefont"), Bb = createElementClass("bb"), Bdo = createElementClass("bdo"), Big = createElementClass("big"), Blockquote = createElementClass("blockquote"), Body = createElementClass("body"), Br = createElementClass("br"), Button = createElementClass("button");
const Canvas = createElementClass("canvas"), Caption = createElementClass("caption"), Center = createElementClass("center"), Cite = createElementClass("cite"), Code = createElementClass("code"), Col = createElementClass("col"), Colgroup = createElementClass("colgroup"), Command = createElementClass("command");
const Datagrid = createElementClass("datagrid"), Datalist = createElementClass("datalist"), Dd = createElementClass("dd"), Del = createElementClass("del"), Details = createElementClass("details"), Dfn = createElementClass("dfn"), Dialog = createElementClass("dialog"), Dir = createElementClass("dir"), Div = createElementClass("div"), Dl = createElementClass("dl"), Dt = createElementClass("dt");
const Em = createElementClass("em"), Embed = createElementClass("embed"), Eventsource = createElementClass("eventsource");
const Fieldset = createElementClass("fieldset"), Figcaption = createElementClass("figcaption"), Figure = createElementClass("figure"), Font = createElementClass("font"), Footer = createElementClass("footer"), Form = createElementClass("form"), Frame = createElementClass("frame"), Frameset = createElementClass("frameset");
const H1 = createElementClass("h1"), H2 = createElementClass("h2"), H3 = createElementClass("h3"), H4 = createElementClass("h4"), H5 = createElementClass("h5"), H6 = createElementClass("h6"), Head = createElementClass("head"), Header = createElementClass("header"), Hgroup = createElementClass("hgroup"), Hr = createElementClass("hr");
const I = createElementClass("i"), Iframe = createElementClass("iframe"), Img = createElementClass("img"), Input = createElementClass("input"), Ins = createElementClass("ins"), Isindex = createElementClass("isindex");
const Kbd = createElementClass("kbd"), Keygen = createElementClass("keygen");
const Label = createElementClass("label"), Legend = createElementClass("legend"), Li = createElementClass("li"), Link = createElementClass("link");
const Map = createElementClass("map"), Mark = createElementClass("mark"), Menu = createElementClass("menu"), Meta = createElementClass("meta"), Meter = createElementClass("meter");
const Nav = createElementClass("nav"), Noframes = createElementClass("noframes"), Noscript = createElementClass("noscript");
const Ol = createElementClass("ol"), Optgroup = createElementClass("optgroup"), Option = createElementClass("option"), Output = createElementClass("output");
const P = createElementClass("p"), Param = createElementClass("param"), Pre = createElementClass("pre"), Progress = createElementClass("progress");
const Q = createElementClass("q");
const Rp = createElementClass("rp"), Rt = createElementClass("rt"), Ruby = createElementClass("ruby"), S = createElementClass("s");
const Samp = createElementClass("samp"), Script = createElementClass("script"), Section = createElementClass("section"), Select = createElementClass("select"), Small = createElementClass("small"), Source = createElementClass("source"), Span = createElementClass("span"), Strike = createElementClass("strike"), Strong = createElementClass("strong"), Style = createElementClass("style"), Sub = createElementClass("sub"), Sup = createElementClass("sup");
const Table = createElementClass("table"), Tbody = createElementClass("tbody"), Td = createElementClass("td"), Textarea = createElementClass("textarea"), Tfoot = createElementClass("tfoot"), Th = createElementClass("th"), Thead = createElementClass("thead"), Time = createElementClass("time"), Title = createElementClass("title"), Tr = createElementClass("tr"), Track = createElementClass("track"), Tt = createElementClass("tt");
const U = createElementClass("u"), Ul = createElementClass("ul");
const Video = createElementClass("video");
const Wbr = createElementClass("wbr");

const a = createHtmlElementFunction("a"), abbr = createHtmlElementFunction("abbr"), acronym = createHtmlElementFunction("acronym"), address = createHtmlElementFunction("address"), applet = createHtmlElementFunction("applet"), html_components_area = createHtmlElementFunction("area"), article = createHtmlElementFunction("article"), aside = createHtmlElementFunction("aside"), audio = createHtmlElementFunction("audio"),
    b = createHtmlElementFunction("b"), base = createHtmlElementFunction("base"), basefont = createHtmlElementFunction("basefont"), bb = createHtmlElementFunction("bb"), bdo = createHtmlElementFunction("bdo"), big = createHtmlElementFunction("big"), blockquote = createHtmlElementFunction("blockquote"), body = createHtmlElementFunction("body"), br = createHtmlElementFunction("br"), html_components_button = createHtmlElementFunction("button"),
    canvas = createHtmlElementFunction("canvas"), caption = createHtmlElementFunction("caption"), center = createHtmlElementFunction("center"), cite = createHtmlElementFunction("cite"), code = createHtmlElementFunction("code"), col = createHtmlElementFunction("col"), colgroup = createHtmlElementFunction("colgroup"), command = createHtmlElementFunction("command"),
    datagrid = createHtmlElementFunction("datagrid"), datalist = createHtmlElementFunction("datalist"), dd = createHtmlElementFunction("dd"), del = createHtmlElementFunction("del"), details = createHtmlElementFunction("details"), dfn = createHtmlElementFunction("dfn"), dialog = createHtmlElementFunction("dialog"), dir = createHtmlElementFunction("dir"), div = createHtmlElementFunction("div"), dl = createHtmlElementFunction("dl"), dt = createHtmlElementFunction("dt"),
    em = createHtmlElementFunction("em"), html_components_embed = createHtmlElementFunction("embed"), eventsource = createHtmlElementFunction("eventsource"), fieldset = createHtmlElementFunction("fieldset"), figcaption = createHtmlElementFunction("figcaption"), figure = createHtmlElementFunction("figure"), font = createHtmlElementFunction("font"), footer = createHtmlElementFunction("footer"), html_components_form = createHtmlElementFunction("form"), html_components_frame = createHtmlElementFunction("frame"), frameset = createHtmlElementFunction("frameset"),
    h1 = createHtmlElementFunction("h1"), h2 = createHtmlElementFunction("h2"), h3 = createHtmlElementFunction("h3"), h4 = createHtmlElementFunction("h4"), h5 = createHtmlElementFunction("h5"), h6 = createHtmlElementFunction("h6"), head = createHtmlElementFunction("head"), header = createHtmlElementFunction("header"), hgroup = createHtmlElementFunction("hgroup"), hr = createHtmlElementFunction("hr"),
    i = createHtmlElementFunction("i"), iframe = createHtmlElementFunction("iframe"), img = createHtmlElementFunction("img"), input = createHtmlElementFunction("input"), ins = createHtmlElementFunction("ins"), isindex = createHtmlElementFunction("isindex"),
    kbd = createHtmlElementFunction("kbd"), keygen = createHtmlElementFunction("keygen"),
    label = createHtmlElementFunction("label"), legend = createHtmlElementFunction("legend"), li = createHtmlElementFunction("li"), html_components_link = createHtmlElementFunction("link"),
    map = createHtmlElementFunction("map"), mark = createHtmlElementFunction("mark"), menu = createHtmlElementFunction("menu"), meta = createHtmlElementFunction("meta"),
    meter = createHtmlElementFunction("meter"), nav = createHtmlElementFunction("nav"),
    noframes = createHtmlElementFunction("noframes"), noscript = createHtmlElementFunction("noscript"), ol = createHtmlElementFunction("ol"), optgroup = createHtmlElementFunction("optgroup"), html_components_option = createHtmlElementFunction("option"), output = createHtmlElementFunction("output"),
    p = createHtmlElementFunction("p"), param = createHtmlElementFunction("param"), pre = createHtmlElementFunction("pre"), progress = createHtmlElementFunction("progress"),
    q = createHtmlElementFunction("q"),
    rp = createHtmlElementFunction("rp"), rt = createHtmlElementFunction("rt"), ruby = createHtmlElementFunction("ruby"),
    s = createHtmlElementFunction("s"), samp = createHtmlElementFunction("samp"), script = createHtmlElementFunction("script"), section = createHtmlElementFunction("section"), html_components_select = createHtmlElementFunction("select"), small = createHtmlElementFunction("small"), source = createHtmlElementFunction("source"), span = createHtmlElementFunction("span"), strike = createHtmlElementFunction("strike"), strong = createHtmlElementFunction("strong"), style = createHtmlElementFunction("style"), sub = createHtmlElementFunction("sub"), sup = createHtmlElementFunction("sup"),
    table = createHtmlElementFunction("table"), tbody = createHtmlElementFunction("tbody"), td = createHtmlElementFunction("td"), html_components_textarea = createHtmlElementFunction("textarea"), tfoot = createHtmlElementFunction("tfoot"), th = createHtmlElementFunction("th"), thead = createHtmlElementFunction("thead"), time = createHtmlElementFunction("time"), title = createHtmlElementFunction("title"), tr = createHtmlElementFunction("tr"), track = createHtmlElementFunction("track"), tt = createHtmlElementFunction("tt"),
    u = createHtmlElementFunction("u"), ul = createHtmlElementFunction("ul"),
    video = createHtmlElementFunction("video"),
    wbr = createHtmlElementFunction("wbr");



/**
 * Tạo đối tượng dom
 * @param {string|object} selector
 * @param {string|Element|string[]|Element[]} children
 * @param {object} attributes
 * @returns {DomFactory}
 * @note {string} Đoạn này thật ra không cần thiết. nhưng viết bào để trình soạn thảo sử dụng gợi ỳ
 */


var Html = function () {
    var $class = (0,es5_class/* _class */.nN)("Html").extends(dom/* default */.ZP)({
        const$isHtml: true,
        __call(...args) {
            return (0,dom/* createEl */.ut)(...args);
        }
    });
    return $class
}();

Html.static = function(props){
    if((0,utils/* isObject */.Kn)(props)){
        for (const key in props) {
            if (Object.hasOwnProperty.call(props, key)) {
                const vl = props[key];
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: true,
                    value: vl
                })
            }
        }
    }
}
Html.static({
    A: A, Abbr: Abbr, Acronym: Acronym, Address: Address, Applet: Applet, Area: Area, Article: Article, Aside: Aside, Audio: Audio,
    B: B, Base: Base, Basefont: Basefont, Bb: Bb, Bdo: Bdo, Big: Big, Blockquote: Blockquote, Body: Body, Br: Br, Button: Button,
    Canvas: Canvas, Caption: Caption, Center: Center, Cite: Cite, Code: Code, Col: Col, Colgroup: Colgroup, Command: Command,
    Datagrid: Datagrid, Datalist: Datalist, Dd: Dd, Del: Del, Details: Details, Dfn: Dfn, Dialog: Dialog, Dir: Dir, Div: Div, Dl: Dl, Dt: Dt,
    Em: Em, Embed: Embed, Eventsource: Eventsource, Fieldset: Fieldset, Figcaption: Figcaption, Figure: Figure, Font: Font, Footer: Footer, Form: Form, Frame: Frame, Frameset: Frameset,
    H1: H1, H2: H2, H3: H3, H4: H4, H5: H5, H6: H6, Head: Head, Header: Header, Hgroup: Hgroup, Hr: Hr,
    I: I, Iframe: Iframe, Img: Img, Input: Input, Ins: Ins, Isindex: Isindex,
    Kbd: Kbd, Keygen: Keygen,
    Label: Label, Legend: Legend, Li: Li, Link: Link,
    Map: Map, Mark: Mark, Menu: Menu, Meta: Meta, Meter: Meter,
    Nav: Nav, Noframes: Noframes, Noscript: Noscript,
    Ol: Ol, Optgroup: Optgroup, Option: Option, Output: Output,
    P: P, Param: Param, Pre: Pre, Progress: Progress,
    Q: Q, Rp: Rp, Rt: Rt, Ruby: Ruby,
    S: S, Samp: Samp, Script: Script, Section: Section, Select: Select, Small: Small, Source: Source, Span: Span, Strike: Strike, Strong: Strong, Style: Style, Sub: Sub, Sup: Sup,
    Table: Table, Tbody: Tbody, Td: Td, Textarea: Textarea, Tfoot: Tfoot, Th: Th, Thead: Thead, Time: Time, Title: Title, Tr: Tr, Track: Track, Tt: Tt,
    U: U, Ul: Ul,
    Video: Video, Wbr: Wbr,
    a: a, abbr: abbr, acronym: acronym, address: address, applet: applet, area: html_components_area, article: article, aside: aside, audio: audio,
    b: b, base: base, basefont: basefont, bb: bb, bdo: bdo, big: big, blockquote: blockquote, body: body, br: br, button: html_components_button,
    canvas: canvas, caption: caption, center: center, cite: cite, code: code, col: col, colgroup: colgroup, command: command,
    datagrid: datagrid, datalist: datalist, dd: dd, del: del, details: details, dfn: dfn, dialog: dialog, dir: dir, div: div, dl: dl, dt: dt,
    em: em, embed: html_components_embed, eventsource: eventsource, fieldset: fieldset, figcaption: figcaption, figure: figure, font: font, footer: footer, form: html_components_form, frame: html_components_frame, frameset: frameset,
    h1: h1, h2: h2, h3: h3, h4: h4, h5: h5, h6: h6, head: head, header: header, hgroup: hgroup, hr: hr,
    i: i, iframe: iframe, img: img, input: input, ins: ins, isindex: isindex,
    kbd: kbd, keygen: keygen,
    label: label, legend: legend, li: li, link: html_components_link,
    map: map, mark: mark, menu: menu, meta: meta,
    meter: meter, nav: nav,
    noframes: noframes, noscript: noscript, ol: ol, optgroup: optgroup, option: html_components_option, output: output,
    p: p, param: param, pre: pre, progress: progress,
    q: q,
    rp: rp, rt: rt, ruby: ruby,
    s: s, samp: samp, script: script, section: section, select: html_components_select, small: small, source: source, span: span, strike: strike, strong: strong, style: style, sub: sub, sup: sup,
    table: table, tbody: tbody, td: td, textarea: html_components_textarea, tfoot: tfoot, th: th, thead: thead, time: time, title: title, tr: tr, track: track, tt: tt,
    u: u, ul: ul,
    video: video,
    wbr: wbr,

});


/* harmony default export */ const html_components = ((/* unused pure expression or super */ null && (Html)));

;// CONCATENATED MODULE: ./src/core/dom/component.js



const Component = (0,es5_class/* _class */.nN)("Component").extends(dom/* default */.ZP)({
    static$isComponentClass: true,
    const$isComponent: true,
    autoRender: true,
    constructor: function(args){

    },
    builder: function(){
        return null;
    }
});
;// CONCATENATED MODULE: ./src/main.ts







})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});