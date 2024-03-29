import app from '../app.js';
import createClass, {
  _class,
  createInstance,
  getClassData,
} from '../es5-class.js';
import {
  defConst,
  observe,
} from '../observer.js';
import { stringAnalysis } from '../string-analysis.js';
import {
  _defineProperty,
  _instanceof,
  assignValue,
  date,
  forEach,
  getArguments,
  getEl,
  getObjectMethod,
  getType,
  inArray,
  isArray,
  isBoolean,
  isCallable,
  isEmpty,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isString,
  objectHasKey,
  setEl,
  Str,
} from '../utils.js';
import { isState } from './state.js';

const global = window;
const MS = date('ms');
const DEFAULT_VALUE = Str.rand(Str.rand(MS));

const SHOW = 'SHOW' + Str.rand(Str.rand(MS));
const PENDING_CHILDREN = 'PENDING_CHILDREN' + Str.rand(Str.rand(MS));
const PENDING_CONTENTS = 'PENDING_CONTENTS' + Str.rand(Str.rand(MS));
const PARENT_NODE = 'PARENT_NODE' + Str.rand(Str.rand(MS));
const MARK_COMMENT = 'MARK_COMMENT' + Str.rand(Str.rand(MS));
const DATA_TYPES = 'DATA_TYPES' + Str.rand(Str.rand(MS));
const SYNC_CHANGE = 'SYNC_CHANGE' + Str.rand(Str.rand(MS));
const DATA_SYNC = 'DATA_SYNC' + Str.rand(Str.rand(MS));
const DYNAMIC_SYNC = 'DYNAMIC_SYNC' + Str.rand(Str.rand(MS));
const DYNAMIC_ATTRS = 'DYNAMIC_ATTRS' + Str.rand(Str.rand(MS));
const DATA_CONTAINERS = 'DATA_CONTAINERS' + Str.rand(Str.rand(MS));
const COMPUTED_FUNCTS = 'COMPUTED_FUNCTS' + Str.rand(Str.rand(MS));
const FOREIGN_DATA = 'FOREIGN_DATA' + Str.rand(Str.rand(MS));
const BUILDER = 'BUILDER' + Str.rand(Str.rand(MS));
const IS_STARTED = 'IS_STARTED' + Str.rand(Str.rand(MS));
const LISTENNERS = 'LISTENNERS' + Str.rand(Str.rand(MS));
const DOM_LISTENNERS = 'DOM_LISTENNERS' + Str.rand(Str.rand(MS));

const TRANSMISTION_LISTENNERS = 'TRANSMISTION_LISTENNERS' + Str.rand(Str.rand(MS));
const TRANSMISTION_STATUS = 'TRANSMISTION_STATUS' + Str.rand(Str.rand(MS));
const IS_BUILDED = 'IS_BUILDED' + Str.rand(Str.rand(MS));
const CAN_SET_CHILDREN = 'CAN_SET_CHILDREN' + Str.rand(Str.rand(MS));

const DATA_SUBSCRIBERS = 'DATA_SUBSCRIBERS' + Str.rand(Str.rand(MS));

const DOM_BASE_OBJECT = 'DOM_BASE_OBJECT' + Str.rand(Str.rand(MS));

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
    if (isObject(selector)) {
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
    else if (isString(selector)) {
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
    let classes = getClassData(_class).parents.slice(0);
    classes.push(_class);
    classes.map(function (c) {
        dataContainers.map(function (container) {
            if (container._class == c) {
                if (isObject(container.data)) {
                    for (const scope in container.data) {
                        if (Object.prototype.hasOwnProperty.call(container.data, scope)) {
                            const d = container.data[scope];
                            if (!objectHasKey(bag, scope)) bag[scope] = {};
                            if (scope == 'data') {
                                assignValue(bag[scope], d);
                            }
                            else if (inArray(['args', 'arguments', 'params', 'attrs', 'oneWayBinding', 'twoWayBinding', 'classes', 'classBinding'], scope)) {
                                bag[scope] = d;
                            }
                            else if (isObject(d)) {
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

export class DomBag {
    domClass = null;
    args = [];
    isDomBag = true;
    constructor(_dom, args) {
        this.domClass = _dom;
        this.args = args;
    }
    make() {
        return createInstance(this.domClass, this.args);
    }
    withParent(parent) {
        let args = this.args.slice(0);
        args.push({ parent })
        return createInstance(this.domClass, args);
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
    if (data && isObject(data)) assignValue(DomClassData, instanceID, data);
}

function getDomDataValue(instanceID, key, value) {
    return typeof DomClassData[instanceID] == "object" ? getEl(DomClassData[instanceID], key, value) : value;
}
function setDomDataValue(instanceID, key, value) {
    if (typeof DomClassData[instanceID] == "undefined") DomClassData[instanceID] = {};
    if (isString(key)) {
        if (isObject(value)) {
            if (!objectHasKey(DomClassData[instanceID], key) || !isObject(DomClassData[instanceID][key]))
                DomClassData[instanceID][key] = value;
            else
                assignValue(DomClassData[instanceID][key], value)
        } else
            DomClassData[instanceID][key] = value;

    }
    else if (isObject(key)) assignValue(DomClassData, instanceID, key);
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

function BindingText(key) {
    this.key = String(key).trim();
    this.isBindingText = true;
    this.type = 'self';
}

/**
 * Class Dom
 * @param {string} selector css selewctor of element
 * @param {Dom|Dom[]} children Dom con
 * @param {{[key:string]:any}} attributes thuộc tính
 */
var Dom = function Dom(selector, children, attributes) {
    this.__instance__id__ = DEFAULT_VALUE;
};

function __set__(key, value) {
    setDomDataValue(this.__instance__id__, key, value);
    return this;
}
function __get__(key, value) {
    return getDomDataValue(this.__instance__id__, key, value);
}

Dom = _class("Dom")({
    static$isDomClass: true,
    $el: null,
    // const$isQuery: true,
    const$isDom: true,
    $tagName: null,
    $id: "",
    $className: "",

    $children: null,
    $parent: null,

    static$makeClass: function (name, props) {
        var wrapper = createClass(name).extends(this);
        return isObject(props) ? wrapper(props) : wrapper;
    },
    static$maker: function (name, props) {
        try {
            var wrapper = createClass(name).extends(this);
            return isObject(props) ? wrapper(props) : wrapper;
        } catch (error) {
            console.warn(error);
        }
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
        let data = {
            attrs: {},
            oneWayBinding: {},
            twoWayBinding: {},
            classes: [],
            classBinding: {},
            styles: {},
            inputs: {}
        };
        let p = {};
        function addData(key, value, bindType) {
            var vt = getType(value);
            var valType = isState(value) ? 'state' : vt;
            var $t = valType, $v = value;
            // var $text = vt == 'string'?parseTextData()
            var startlt = value.split("{{").length;
            if (isString(value) && !isNumber(value) && startlt > 1 && startlt == value.split("}}").length) {
                $t = 'proptext';
                $v = value;
            }

            if (bindType == "input") {
                data.oneWayBinding[key] = value;
            }

            else if (bindType == "sync") {
                data.twoWayBinding[key] = {
                    type: $t,
                    value: $v
                };
            } else if (bindType == "bind") {
                data.oneWayBinding[key] = {
                    type: $t,
                    value: $v
                };
            } else {
                if (valType == 'state') {
                    data.twoWayBinding[key] = {
                        type: $t,
                        value: $v
                    };
                } else {
                    data.oneWayBinding[key] = {
                        type: $t,
                        value: $v
                    };
                }

            }

        }
        for (const key in props) {
            if (Object.prototype.hasOwnProperty.call(props, key)) {
                const vl = props[key];
                let k = key.toLowerCase();
                let fs = key.split("$");
                let f = fs[0].toLowerCase();
                if (inArray(['data', 'services', 'params', 'args', 'computed'], k)) {
                    hasData = true;
                    data[k] = vl;
                    delete props[key];
                }
                else if (k == 'dynamiccreate') {
                    p.allowDynamicCreate = vl;
                    hasData = true;
                    delete props[key];
                }
                else if (k.substring(0, 2) == '$$') {
                    addData(key.substring(2), vl, 'sync');
                    delete props[key];
                }
                else if (fs.length == 2) {

                    if (f == "attr") {
                        data.attrs[key.substring(5)] = vl;
                        delete props[key];
                    }
                    else if (f == 'class') {
                        data.classBinding[fs[1]] = vl;
                        delete props[key];
                    }
                    else if (inArray(['sync', 'bind'], f)) {
                        addData(fs[1], vl, f);
                        delete props[key];
                    }
                    else if (inArray(['input', 'inp'], f)) {
                        addData(fs[1], vl, f);
                        delete props[key];
                    }
                    else {
                        p[key] = vl;
                    }

                }
                else if (inArray(['attr', 'attrs', 'attribute', 'attributes']) && isObject(vl)) {
                    Object.keys(vl).map(function (_key) {
                        let _k = key.toLowerCase();
                        let _fs = key.split("$");
                        let _f = _fs[0].toLowerCase();
                        let _vl = vl[_key];
                        if (_k.substring(0, 2) == '$$') {
                            addData(_key.substring(2), _vl, 'sync');
                        }
                        else if (_fs.length == 2) {
                            if (_f == 'class') {
                                data.classBinding[_fs[1]] = _vl;

                            }
                            else if (inArray(['sync', 'bind', ''], _f)) {
                                addData(_fs[1], _vl, _f);

                            }
                        }

                    });
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
                    assignValue(container.data, data);
                    return p;
                }

            }
            dataContainers.push({ _class: c, data: data })
        }
        return p;
    },

    __commit__: function (classData) {

        if (!classData.props.tagName && !classData.constants.tagName && !classData.accessors.tagName.value) {
            var s = Str.camelToSlug(this.__class__);
            if (s != 'dom' && s != "component") {
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
        __set__.call(this, TRANSMISTION_LISTENNERS, {
            fromChildren: {},
            fromParent: {},
            fromSiblings: {},
            events: {}
        });
        __set__.call(this, TRANSMISTION_STATUS, true);
        __set__.call(this, PENDING_CHILDREN, []);
        __set__.call(this, PENDING_CONTENTS, []);
        __set__.call(this, LISTENNERS, {});
        __set__.call(this, DOM_LISTENNERS, []);
        __set__.call(this, DATA_CONTAINERS, []);
        __set__.call(this, FOREIGN_DATA, {});
        __set__.call(this, PARENT_NODE, null);
        __set__.call(this, SHOW, false);
        __set__.call(this, MARK_COMMENT, null);
        __set__.call(this, CAN_SET_CHILDREN, true);
        __set__.call(this, DYNAMIC_ATTRS, {});
        __set__.call(this, DATA_TYPES, {});
        __set__.call(this, DATA_SUBSCRIBERS, {});
        __set__.call(this, SYNC_CHANGE, true);
        __set__.call(this, DATA_SYNC, true);
        __set__.call(this, COMPUTED_FUNCTS, {});



        this.children = [];

        __set__.call(this, CAN_SET_CHILDREN, false);
        var otd = oneTimeData[this.static.__CLASS_ID__];
        if (otd && isObject(otd) && !isEmpty(otd)) {
            var keys = Object.keys(otd);
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                const value = otd[key];
                if (key == '__dom__base__object__') {
                    if (value) {
                        __set__.call(this, DOM_BASE_OBJECT, value);
                    }
                } else {
                    this[key] = value;
                    // console.log(value)
                }

            }
            oneTimeData[this.static.__CLASS_ID__] = {};
        }
        bootData.apply(this);

        let bag = getDataBag(this.static);
        addBagData.apply(this, [bag]);
        ___assignDynamicProperties___.call(this);

    },

    __before__init__: function () {

    },

    __init__: function () {
        if (!this.el) {
            this.setup(this.getDefaultSelector());
        }

        this.__before__init__();
        if (typeof this.beforeInit == "function") {
            this.beforeInit();
        }
        var self = this;

        if (typeof this.onInit == "function") {
            this.onInit();
        }


        if (this.autoRender) {
            __buildChildren__.call(this);

        } else {
            __build__.call(this);
        }


        if (typeof this.onAferInit == "function") {
            this.onAferInit();
        }

        if (typeof this.aferInit == "function") {
            this.aferInit();
        }


        /**
         * lắng nghe sự kiện thay đổi thuộc tính html
         */
        this.on("change", function (event) {
            if (event.target == self.el) {
                self.dispatchEvent({
                    type: "attribute.changed",
                    event: event
                });
            }
        })

    },



    final$__onChangeProp__: function (key, value) {
        var subContainer = __get__.call(this, DATA_SUBSCRIBERS);
        if (!objectHasKey(subContainer, key) || !isArray(subContainer[key]) || !subContainer[key].length)
            return false;

        var self = this;
        return subContainer[key].map(function (fn) {
            fn.call(self, value);
        })
    },

    /**
     * Theo dỏi sự thay đổi của thuộc tính
     * @param {*} key thuộc tính cần theo dõi sự thay đổi
     * @param {function(any)} fn hàm xử lý khi có thay đổi
     */
    subscribe: function (key, fn) {
        var t = getType(key);
        if (t == 'string' || t == 'number') {
            var k = String(key).split("").shift();
            var f = isFunction(fn) ? fn : getObjectMethod(this, key);
            if (!isFunction(f)) return false;
            if (this.__ob__ && inArray(this.__ob__.indexKeys, k)) {
                this.__ob__.subscribe(key, f);
            } else {
                var subContainer = __get__.call(this, DATA_SUBSCRIBERS);
                if (!objectHasKey(subContainer, key) || !isArray(subContainer[key]) || !subContainer[key].length)
                    subContainer[key] = [];
                subContainer[key].push(f);
            }
            return true;
        }
        else if (t == 'object') {
            var self = this;
            Object.keys(key).map(function (k) {
                self.subscribe(k, fn);
            })
        }
    },

    constructor: function Dom() {
        this.__setElement__.apply(this, arguments);
        __build__.call(this);
        this.isDom = true;
    },

    __call__: function (...args) {
        return createInstance(this, args);
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
    clear: function () {
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
        var _pendingChildren = __get__.call(this, PENDING_CHILDREN);

        if (_pendingChildren.length) {
            while (_pendingChildren.length) {
                var a = _pendingChildren.shift();
                this.append(a);
            }
        }
        var _pendingContents = __get__.call(this, PENDING_CONTENTS);
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
        __set__.call(this, IS_BUILDED, true);
    },
    /**
     * thiết lập
     * @param {string|object}
     */
    __setElement__: function setElement(params) {
        var args = getArguments(arguments);
        return __setElement__.apply(this, args);
    },
    /**
     * giống element
     * @param {*} args thông tin element
     */
    final$setup: function setup(args) {
        return this.__setElement__.apply(this, getArguments(arguments));
    },

    const$getDefaultSelector: function () {
        if (this.selector) return this.selector;
        return "div#" + (
            this.id ? this.id : Str.rand()
        ) + "." + (
                this.className ? this.className.split(" ").map(function (v) {
                    return v.trim();
                }).filter(function (v) {
                    return v.length > 0;
                }).join('.') : 'dom-element'
            );
    },
    parseMethodArgs: function (event, params) {
        var args = [];
        if (isArray(params)) {
            for (let index = 0; index < params.length; index++) {
                const p = params[index];
                switch (p.type) {
                    case 'function':
                        args.push(this.__getInfinityMethod__(p.str).apply(this, this.parseMethodArgs(event, p.args)));
                        break;
                    case 'variable':
                        if (inArray(['$event', '$e'], p.str.toLowerCase())) {
                            args.push(event);
                        }
                        else {
                            args.push(this.__getDataOrDBOData__(p.str));
                        }

                        break;


                    default:
                        args.push(p.str);
                        break;
                }
            }
        }
        return args;
    },

    getHandlerActions: function (str) {
        var actions = stringAnalysis(str);
        var self = this;
        var handlers = [];
        for (let i = 0; i < actions.length; i++) {
            const fnData = actions[i];
            if (fnData.type == 'function') {
                handlers.push({
                    action: this.__getInfinityMethod__(fnData.str),
                    args: fnData.args
                });
            }
        }
        return function (event) {
            event.component = self;
            handlers.map(handler => {
                handler.action.apply(this, self.parseMethodArgs(event, handler.args));
            })
        }
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


            fnt = this.getHandlerActions(handler);

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

        var _listeners = __get__.call(this, LISTENNERS);
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
        var _listeners = __get__.call(this, LISTENNERS);
        if (_listeners === undefined || _listeners === null) return false;

        type = String(type).toLowerCase();
        return _listeners[type] !== undefined && _listeners[type].indexOf(listener) !== - 1;

    },

    removeEventListener: function (type, listener) {
        var _listeners = __get__.call(this, LISTENNERS);
        if (_listeners === undefined || _listeners === null) return;
        type = String(type).toLowerCase();
        if (isDomEvent(type)) return this.off.apply(getArguments(arguments));
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
        var _listeners = __get__.call(this, LISTENNERS);
        if (_listeners === undefined || _listeners === null) return;
        if (isDomEvent(event.type)) return this.trigger.apply(this, getArguments(arguments));
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
        const _domlisteners = __get__.call(this, DOM_LISTENNERS);
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
        const _domlisteners = __get__.call(this, DOM_LISTENNERS);
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
        var ev = isString(event) ? event : (event ? event.type : null);
        var e = !isObject(event) ? { type: ev } : event;
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
        const __transmissionEventListeners = __get__.call(this, TRANSMISTION_LISTENNERS);
        if (isString(event)) {
            var args = getArguments(arguments);
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
        else if (isArray(event)) {
            event.map(function (e) {
                self.on(e, handler);
            })
        }
        else if (isObject(event)) {
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
        if (!isString(method) || typeof self[method] != "function") return function (e) { console.log(e) };
        var args = getArguments(arguments);
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
        if (!isString(method)) return function (e) { console.log(e) };
        var args = getArguments(arguments);
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
            if (isObject(el)) {
                if (el.isDom) {
                    e = el.el;
                }
                else if (_instanceof(el, Element)) {
                    e = el;
                }
                else return false;
            }
            else if (isString(el)) {
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


        if (isString(selector)) {
            if (selector.length > 1 && selector.substring(0, 1) == ":") {
                var s = selector.substring(1);
                if (_instanceof(e, Element)) return (typeof e[s] != 'undefined' && e[s]) ? true : false;
                for (let i = 0; i < e.length; i++) {
                    const ell = e[i];
                    if (typeof ell[s] != 'undefined' && ell[s]) return true;
                }
                return false;
            }
            var elem = $document.querySelectorAll(selector);
            for (let i = 0; i < elem.length; i++) {
                const ele = elem[i];
                if (_instanceof(e, Element)) {
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
            if (_instanceof(e, Element)) {
                if (e == selector) return true;
            }
            else if (e.length) {
                for (let j = 0; j < e.length; j++) {
                    const ee = e[j];
                    if (ee == selector) return true;
                }
            }
        }
        if (isObject(selector) && selector.isDom) {
            if (_instanceof(e, Element)) {
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
            if (isString(prop)) prop = [prop];
            if (isArray(prop)) {
                prop.map(function (p) {
                    if (isString(p)) {
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
        return this.el ? this.el.getAttribute(Str.camelToSlug(attr)) : null;
    },
    setAttribute: function (attr, value) {
        Str.camelToSlug(attr)
        this.el.setAttribute(Str.camelToSlug(attr), value);
        return this;
    },
    attr: function attr(attr, value) {
        if (typeof attr == "undefined" || attr === null) {
            return this.el ? this.el.attributes : {};
        }
        else if ((typeof value == "undefined" || value === null) && typeof attr != "object") {
            return this.getAttribute(attr);
        }
        else if (typeof attr != "undefined" && getType(attr) == "object") {

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
                        var d = b.map(function (v) { return Str.ucfirst(v) });
                        var k = c + (d.length ? d.join("") : "");
                        data[k] = attr.value;
                    }
                }
            }
            _defineProperty(this, '__data', {
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
        if (isArray(key)) {
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
            if (isString(val)) {
                classlist.push(val);
            } else if (isArray(val)) {
                val.map(mapFunc);
            }
        };
        if (arguments.length) {
            for (var i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if (isString(arg)) {
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
            if (isString(val)) {
                classlist.push(val);
            } else if (isArray(val)) {
                val.map(mapFunc);
            }
        };
        var args = [];
        var self = this;
        if (arguments.length) {
            for (var i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if (isString(arg)) {
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
        else if (isString(prop) && isEmpty(value)) {
            var style = this.el.style;
            var p = Str.camelToSlug(prop, '-');
            var s = p[0].toLowerCase() + prop.substr(1);
            if (Object.hasOwnProperty.call(style, p)) return style[p];
            if (Object.hasOwnProperty.call(style, s)) return style[s];
            return "";
        }
        if (isString(prop)) {
            setCssProp(this.el, prop, value);
        } else if (isObject(prop)) {
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
    const$append: function (child, withKey, withValue, notSetParent) {
        if (typeof child == "undefined" || isNull(child) || simpleTags.indexOf(this.tagName) !== -1) return this;
        var self = this;
        if (isFunction(child) && child.isDomClass) {
            if (withKey) {
                if (isObject(withKey)) {
                    child = child.width(withKey);
                } else {
                    var a = {};
                    a[withKey] = withValue;
                    child = child.width(a);
                }
            } else {
                child = child('#inp-' + Str.rand());
            }
        }

        if (isArray(child)) {
            if (child.isDomComponentBag && child.Component) {
                var __dom__base__object__ = __get__.call(this, DOM_BASE_OBJECT);
                if (withKey) {
                    var extra = {};
                    if (isObject(withKey)) extra = withKey;
                    else extra[withKey] = withValue;
                    return this.append(child.Component.with(assignValue({
                        parent: this,
                        __dom__base__object__: __dom__base__object__ ? __dom__base__object__ : this
                    }, extra), child), false, false, true);
                } else {
                    return this.append(child.Component.with({
                        parent: this,
                        __dom__base__object__: __dom__base__object__ ? __dom__base__object__ : this
                    }, child), false, false, true);
                }

                return this;
            }
            for (var index = 0; index < child.length; index++) {
                this.append(child[index]);

            }
        }

        else if (isObject(child)) {
            if (child.isDom) {
                if (notSetParent !== true) {
                    child.parent = this;
                }

                this.el.appendChild(child.el);
                this.children.push(child);
                if (typeof child.becomeAChild == "function") {
                    child.becomeAChild(this);
                }
                return child;
            }
            else if (child.isDomQuery) {
                this.el.appendChild(child.el);
                this.children.push(child);
                if (typeof child.becomeAChild == "function") {
                    child.becomeAChild(this);
                }

                return child
            }
            else if (child.isDomBag) {
                let c = child.withParent(this);
                __build__.call(c);
                this.el.appendChild(c.el);
                this.children.push(c);
                if (typeof c.becomeAChild == "function") {
                    c.becomeAChild(this);
                }

                return c;
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
                return child;
            }
            else if (child instanceof Text) {
                this.el.appendChild(child);
                this.children.push(child);
                return child;
            }
            else if ((child instanceof BindingText) || child.isBindingText) {
                var key = child.key;
                var vld = key;
                var text = document.createTextNode(vld);
                this.el.appendChild(text);
                this.children.push(text);



                var vl = this.__getDataOrDBOData__(key, function (v) {
                    vld = isState(v) ? v.__toData__() : v;
                    text.nodeValue = vld;
                });
                text.nodeValue = vl;

                return text;
            }

        }
        else if (child instanceof Element) {
            this.el.appendChild(child);
            this.children.push(child);
            return child;
        }
        else if (child instanceof Text) {
            this.el.appendChild(child);
            this.children.push(child);
            return child;
        }
        else if ((child instanceof BindingText) || child.isBindingText) {
            var key = child.key;
            var vld = key;
            var text = document.createTextNode(vld);
            this.el.appendChild(text);
            this.children.push(text);


            var vl = this.__getDataOrDBOData__(key, function (v) {
                vld = isState(v) ? v.__toData__() : v;
                text.nodeValue = vld;
            });
            text.nodeValue = vl;

            return text;
        }
        else {
            var ts = parseTextData(self, child);
            if (isArray(ts) && ts.length) {
                ts.map(function (c) {
                    self.append(c);
                })
                return self;
            }
            else if (isFunction(ts)) {
                var textNode = document.createTextNode("");
                this.el.appendChild(textNode);
                this.children.push(textNode);
                textNode.nodeValue = ts(text => textNode.nodeValue = text);
                return text;

            }


            var c = parse(child);
            this.el.appendChild(c);
            this.children.push(c);
            return c;


        }

        return this;
    },
    /**
     * Thêm phần tử con vào Đầu danh sách phần tử con cvua3 element
     * @param {*} child 
     * @returns {Query|Dom}
     */
    const$before: function (child, childTarget, withKey, withValue, notSetParent) {
        if (typeof child == "undefined" || isNull(child) || simpleTags.indexOf(this.tagName) !== -1 || !childTarget) return this;
        // console.log(child, childTarget, withKey, withValue, notSetParent);
        if (isArray(child)) {
            if (child.isDomComponentBag && child.Component) {
                var __dom__base__object__ = __get__.call(this, DOM_BASE_OBJECT);

                if (withKey) {
                    var extra = {};
                    if (isObject(withKey)) extra = withKey;
                    else extra[withKey] = withValue;
                    return this.before(child.Component.with(assignValue({
                        parent: this,
                        __dom__base__object__: __dom__base__object__ ? __dom__base__object__ : this
                    }, extra), child), childTarget, false, false, true);
                } else {
                    return this.before(child.Component.with({
                        parent: this,
                        __dom__base__object__: __dom__base__object__ ? __dom__base__object__ : this
                    }, child), childTarget, false, false, true);
                }

            }
        }
        let index = 0;
        var target = null;
        var self = this;
        if (isFunction(child) && child.isDomClass) {
            if (withKey) {
                if (isObject(withKey)) {
                    child = child.width(withKey);
                } else {
                    var a = {};
                    a[withKey] = withValue;
                    child = child.width(a);
                }
            } else {
                child = child('#inp-' + Str.rand());
            }
        }


        var i = this.children.indexOf(childTarget);
        // console.log(childTarget, i)
        if (i !== -1) {
            index = i;
            target = childTarget.isDom ? childTarget.el : childTarget;
        }
        else {
            for (let j = 0; j < this.children.length; j++) {
                const c = this.children[j];
                if ((c.isDom && (c == childTarget || c.el == childTarget || c.el == childTarget.el)) || (childTarget.isDom && (childTarget.el == c || childTarget.el == c.el))) {
                    index = j;
                    target = childTarget.isDom ? childTarget.el : childTarget;
                }
            }
        }

        if (isObject(child)) {
            if (target) {
                if (child.isDom) {
                    if (notSetParent !== true) child.parent = self;
                    this.children.splice(index, 0, child);
                    this.el.insertBefore(child.el, target);
                    if (typeof child.becomeAChild == "function") {
                        child.becomeAChild(this);
                    }

                    return child;
                }
                else if (child.isDomBag) {
                    let c = child.withParent(this);
                    __build__.call(c);
                    this.children.splice(index, 0, c);
                    this.el.insertBefore(c.el, target);
                    if (typeof c.becomeAChild == "function") {
                        c.becomeAChild(this);
                    }

                    return c;
                }
                else if (child instanceof Element) {
                    this.children.splice(index, 0, child);
                    this.el.insertBefore(child, target);
                    return child;
                }
                else if ((child instanceof BindingText) || child.isBindingText) {
                    var key = child.key;

                    var vld = key;
                    var text = document.createTextNode(vld);
                    this.children.splice(index, 0, text);
                    this.el.insertBefore(text, target);


                    var vl = this.__getDataOrDBOData__(key, function (v) {
                        vld = isState(v) ? v.__toData__() : v;
                        text.nodeValue = vld;
                    });
                    text.nodeValue = vl;

                    return text;
                }

            }
            if (child.isDom) {
                child.parent = self;
                this.children.unshift(child);
                this.el.insertBefore(child.el, this.el.firstChild);
                return child;
            }
            else if (child.isDomBag) {
                let c = child.withParent(this);
                __build__.call(c);
                this.el.insertBefore(child.el, this.el.firstChild);
                this.children.unshift(child);
                return c;
            }
            else if (child instanceof Element) {
                this.el.insertBefore(child, this.el.firstChild);
                this.children.unshift(child);
                return child;
            }
            else if ((child instanceof BindingText) || child.isBindingText) {
                var key = child.key;


                var vld = key;
                var text = document.createTextNode(vld);
                this.children.splice(index, 0, text);
                this.el.insertBefore(text, target);

                var vl = this.__getDataOrDBOData__(key, function (v) {
                    vld = isState(v) ? v.__toData__() : v;
                    text.nodeValue = vld;
                });
                text.nodeValue = vl;

                return text;
            }
        }
        return this;
    },
    /**
     * Thêm phần tử con vào Đầu danh sách phần tử con cvua3 element
     * @param {*} child 
     * @returns {Query|Dom}
     */
    const$prepend: function (child, withKey, withValue, notSetParent) {
        if (typeof child == "undefined" || isNull(child) || simpleTags.indexOf(this.tagName) !== -1) return this;
        if (isArray(child)) {
            if (child.isDomComponentBag && child.Component) {
                var __dom__base__object__ = __get__.call(this, DOM_BASE_OBJECT);

                if (withKey) {
                    var extra = {};
                    if (isObject(withKey)) extra = withKey;
                    else extra[withKey] = withValue;
                    return this.prepend(child.Component.with(assignValue({
                        parent: this,
                        __dom__base__object__: __dom__base__object__ ? __dom__base__object__ : this
                    }, extra), child), false, false, true);
                } else {
                    return this.prepend(child.Component.with({
                        parent: this,
                        __dom__base__object__: __dom__base__object__ ? __dom__base__object__ : this
                    }, child), false, false, true);
                }

                return this;


            }
        }
        var self = this;
        if (isFunction(child) && child.isDomClass) {
            if (withKey) {
                if (isObject(withKey)) {
                    child = child.width(withKey);
                } else {
                    var a = {};
                    a[withKey] = withValue;
                    child = child.width(a);
                }
            } else {
                child = child('#inp-' + Str.rand());
            }
        }

        if (isObject(child)) {
            if (child.isDom) {
                if (!notSetParent) child.parent = self;
                this.children.unshift(child);
                this.el.insertBefore(child.el, this.el.firstChild);
                if (typeof child.becomeAChild == "function") {
                    child.becomeAChild(this);
                }
                return child;
            }
            else if (child.isDomBag) {
                let c = child.withParent(this);
                __build__.call(c);
                this.el.insertBefore(child.el, this.el.firstChild);
                this.children.unshift(child);
                if (typeof c.becomeAChild == "function") {
                    c.becomeAChild(this);
                }
                return c;
            }
            else if (child.isDomQuery) {
                this.el.insertBefore(child.el, this.el.firstChild);
                this.children.unshift(child);
                return child;
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
                return child;
            }
            else if ((child instanceof BindingText) || child.isBindingText) {
                var key = child.key;

                var vld = key;
                var text = document.createTextNode(vld);
                this.el.insertBefore(text, this.el.firstChild);
                this.children.unshift(text);


                var vl = this.__getDataOrDBOData__(key, function (v) {
                    vld = isState(v) ? v.__toData__() : v;
                    text.nodeValue = vld;
                });
                text.nodeValue = vl;


                return text;
            }

        } else {
            var ts = parseTextData(child);
            if (isArray(ts) && ts.length) {
                for (let index = ts.length - 1; index > -1; index--) {
                    const c = ts[index];
                    self.prepend(c);
                }
                return self;
            }
            else if (isFunction(ts)) {
                var textNode = document.createTextNode("");
                this.el.insertBefore(textNode, this.el.firstChild);
                this.children.unshift(textNode);
                textNode.nodeValue = ts(text => textNode.nodeValue = text);
                return textNode;
            }

            var c = parse(child);
            this.el.insertBefore(c, this.el.firstChild);
            this.children.unshift(c);
            return c;
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
            __set__.call(this, PARENT_NODE, parent);

        }
        else if (isString(parent)) {
            var domEl = $document.querySelector(parent);
            if (domEl && _instanceof(domEl, Element)) {
                domEl.appendChild(this.el);
                __set__.call(this, PARENT_NODE, domEl);
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
            __set__.call(this, PARENT_NODE, parent);
        } else if (isString(parent)) {
            var domEl = $document.querySelector(parent);
            if (domEl && _instanceof(domEl, Element)) {
                domEl.insertBefore(this.el, domEl.firstChild);
                __set__.call(this, PARENT_NODE, domEl);
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
        if (_instanceof(child, Element)) {
            if (this.el.children.length) {
                for (var index = 0; index < this.el.children.length; index++) {
                    var chl = this.el.children[index];
                    if (chl === child) return true;
                }
            }
        }
        return false;
    },
    hasNodeChild: function (child) {
        if (this.el.childNodes.length) {
            for (var index = 0; index < this.el.childNodes.length; index++) {
                var chl = this.el.childNodes[index];
                if (chl === child) return true;
            }
        }
        return false;
    },

    removeDomChild: function (child) {
        if (this.hasDomChild(child) || this.hasNodeChild(child)) {
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
        if (!isBoolean(removeDomEl)) removeDomEl = true;

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

            if (!isArray(this.children)) return this;

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
            if (!isArray(this.children)) return this;

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
        var children = getArguments(arguments);
        if (children.length) {
            var self = this;
            children.map(function (child) {
                self.removeChild(child);
            });
        }
        else if (this.parent) {
            this.parent.removeChild(this, true);
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
        __set__.call(this, TRANSMISTION_STATUS, false);
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
            var a = typeof args == "undefined" ? [] : (isArray(args) ? args : [args]);
            for (var i = 0; i < this.parent.children.length; i++) {
                var child = this.parent.children[i];
                if (isObject(child) && child != this && typeof child[method] == "function") {
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
            if (isString(vl)) {
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
        if (this.parent && isObject(this.parent) && this.parent.isDom) return this.parent.getRootElement();
        return this;
    },
    // dịch chuyển element trong dom
    final$moveTo: function (parent, pos) {
        if (!isObject(parent)) return false;
        if (_instanceof(parent, Element)) {
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
        if (!isObject(receiveDomEl)) return false;

        for (var index = 0; index < this.children.length; index++) {
            var ch = this.children[index];
            if (ch == child) {
                this.children.splice(index, 1);
                if (ch.isDom) {
                    ch.parent = null;
                    ch.moveTo(receiveDomEl, pos);

                }
                else if (_instanceof(ch, Element)) {
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
        if (isObject(child)) {
            var t;
            if ((isBoolean(pos) && pos === true) || inArray(['top', 'start', 'prepend'], pos)) t = true;
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
        var csc = __get__.call(this, CAN_SET_CHILDREN);
        if (!csc) console.warn("Bạn không thể set giá trị cho children");
        return csc;
    },
    get$children: function getChildren(value) {
        var returnValue = value;
        if (!isArray(value)) {
            returnValue = [];
            __set__.call(this, CAN_SET_CHILDREN, true);
            this.children = returnValue;
            __set__.call(this, CAN_SET_CHILDREN, false);
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
                __set__.call(this, PARENT_NODE, parent.el);

            }
        }

    },

    final$__getInfinityMethod__: function (keys) {
        var _key = keys.split(".").shift();
        var mr = keys.split(".");
        var self = this;
        var fn = typeof successOrChange == "function" ? successOrChange : function (v) {
            console.log.apply(console, arguments);
        };

        if (mr.length > 1) {
            var mt = mr.pop();
            var fk = mr.join(".");
            if (typeof this[_key] == "undefined") {
                var dbo = __get__.call(self, DOM_BASE_OBJECT);
                if (dbo) {
                    if (typeof dbo[_key] == "undefined") {
                        if (this.parent) {
                            return this.parent.__getInfinityMethod__(keys);
                        }
                    } else {
                        var ob = getEl(dbo, fk);
                        if (isObject(ob) && typeof ob[mt] == "undefined") {
                            return function () {
                                var args = getArguments(arguments);
                                ob[mt].apply(ob, args);
                            }
                        } else if (this.parent) {
                            if (this.parent) {
                                return this.parent.__getInfinityMethod__(keys);
                            }
                        }
                    }
                } else if (this.parent) {
                    return this.parent.__getInfinityMethod__(keys);
                }
                var ob = getEl(window, fk);
                if (isObject(ob) && typeof ob[mt] == "undefined") {
                    return function () {
                        var args = getArguments(arguments);
                        ob[mt].apply(ob, args);
                    }
                }
                return fn;
            }
            else {
                var ob = getEl(this, fk);
                if (isObject(ob) && typeof ob[mt] == "undefined") {
                    return function () {
                        var args = getArguments(arguments);
                        ob[mt].apply(ob, args);
                    }
                }
            }
            return fn;
        }
        // nếu không có __ob__ hoặc không tồn tại key và cũng ko có trong obj

        if (typeof this[_key] == "undefined") {
            var dbo = __get__.call(self, DOM_BASE_OBJECT);
            if (dbo) {
                if (typeof dbo[_key] != "function") {
                    if (this.parent) {
                        return this.parent.__getInfinityMethod__(keys);
                    }
                } else {
                    return function () {
                        var args = getArguments(arguments);
                        dbo[_key].apply(dbo, args);
                    }
                }
            } else if (this.parent) {
                return this.parent.__getInfinityMethod__(keys);
            }
            else if (typeof window[_key] == "function") {
                return function () {
                    var args = getArguments(arguments);
                    window[_key].apply(window, args);
                }
            }
            return null;
        }

        return function () {
            var args = getArguments(arguments);
            self[_key].apply(self, args);
        }

    },
    final$__getDataOrDBOData__: function (keys, successOrChange) {
        var _key = keys.split(".").shift();
        var self = this;
        // nếu không có __ob__ hoặc không tồn tại key và cũng ko có trong obj
        var fn = typeof successOrChange == "function" ? successOrChange : function (v) {
            // console.log(v);
        };

        if (!this.__ob__ || (!inArray(this.__ob__.indexKeys, _key) && typeof this[_key] == "undefined")) {
            var dbo = __get__.call(self, DOM_BASE_OBJECT);
            if (dbo) {
                dbo.__ob__.subscribe(keys, function (v) {
                    fn(getEl(dbo, keys));
                });
                if (!dbo.__ob__ || (!inArray(dbo.__ob__.indexKeys, _key) && typeof dbo[_key] == "undefined")) {
                    if (this.parent) {
                        return this.parent.__getDataOrDBOData__(keys, successOrChange);
                    }
                } else {
                    return getEl(dbo, keys);
                }
            } else if (this.parent) {
                return this.parent.__getDataOrDBOData__(keys, successOrChange);
            }
            return null;
        }
        else if (this.__ob__) {
            this.__ob__.subscribe(keys, function (v) {
                fn(getEl(self, keys));
            });
            return getEl(this, keys);
        }
        return null;
    },

    final$__onDataChange__: function (keys, success) {
        var _key = keys.split(".").shift();
        var self = this;
        // nếu không có __ob__ hoặc không tồn tại key và cũng ko có trong obj
        var fn = typeof success == "function" ? success : function (v) {
            console.log(v);
        };

        if (!this.__ob__ || (!inArray(this.__ob__.indexKeys, _key) && typeof this[_key] == "undefined")) {
            var dbo = __get__.call(self, DOM_BASE_OBJECT);
            if (dbo) {
                dbo.__ob__.subscribe(keys, function (v) {
                    fn(getEl(dbo, keys));
                });
                if (!dbo.__ob__ || (!inArray(dbo.__ob__.indexKeys, _key) && typeof dbo[_key] == "undefined")) {
                    if (this.parent) {
                        return this.parent.__onDataChange__(keys, success);
                    }
                }
            } else if (this.parent) {
                return this.parent.__onDataChange__(keys, success);
            }
            return null;
        }
        else if (this.__ob__) {
            this.__ob__.subscribe(keys, function (v) {
                fn(getEl(self, keys));
            })

        }
        return null;
    },

    static$toString: function () {
        var self = this;
        return createInstance(self, ['#' + Str.rand()]);
    },
    static$withParent: function (parent) {
        var self = this;
        if (!isObject(parent) || !parent.isDom) {
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
        return createInstance(self, params);
    },
    static$with: function (data, args) {
        var self = this;
        oneTimeData[self.__CLASS_ID__] = {};
        if (isObject(data)) {

            assignValue(oneTimeData[self.__CLASS_ID__], data);
            return createInstance(self, isArray(args) ? args : []);
        }
        if (isString(data)) {
            oneTimeData[self.__CLASS_ID__][data] = args;
            return createInstance(self, arguments.length == 3 ? (
                isArray(arguments[2]) ? arguments[2] : [arguments[2]]
            ) : (arguments.length > 3 ? getArguments(arguments, 2) : []));
        }
        return new self();
    }

    
    

    

});

function __setElement__(params) {
    var args = getArguments(arguments);
    if (args.length && typeof args[0] != "string") {
        args.unshift(this.getDefaultSelector());
    }

    var elem = create.apply(this, args);

    var el = elem.el;
    if (el) {
        if (!this.tagName && this.static.__class__ == "Dom") {
            this.tagName = elem.tag;
        }

        if (!el.id && this.id) el.id = this.id;
        if (!el.className && this.className) el.className = this.className;


        this.el = el;

        const FOREIGN = __get__.call(this, FOREIGN_DATA);
        addBagData.call(this, FOREIGN);

        var self = this;


        const COMPUTED = __get__.call(this, COMPUTED_FUNCTS);
        var keys = Object.keys(COMPUTED);

        keys.map(function (k) {
            var fn = COMPUTED[k];
            var first = fn.call(self);
            self[k] = first;
        });



        observe(self);
        Object.keys(self).map(function (k) {
            if (keys.indexOf(k) == -1) {
                self.__ob__.subscribe(k, function (v) {
                    keys.map(function (_k) {
                        var fn = COMPUTED[_k];
                        var vl = fn.call(self);
                        self[_k] = vl;
                    });

                })
            }
        })


        let bag = getDataBag(this.static);
        let oneWayBinding = {};
        assignValue(oneWayBinding, elem.oneWayBinding)
        assignValue(oneWayBinding, bag.oneWayBinding)
        if (!isEmpty(oneWayBinding)) {
            addOneWayBindingAttr.call(this, oneWayBinding);
        }
        let twoWayBinding = {};
        assignValue(twoWayBinding, elem.twoWayBinding)
        assignValue(twoWayBinding, bag.twoWayBinding)
        if (!isEmpty(twoWayBinding)) {
            addTwoWayBindingAttr.call(this, twoWayBinding);
        }


        if (!isEmpty(elem.dataTypeAttrs)) {
            for (const key in elem.dataTypeAttrs) {
                if (Object.hasOwnProperty.call(elem.dataTypeAttrs, key)) {
                    const vl = elem.dataTypeAttrs[key];
                    setDataTypeAttribute.call(this, key, vl);
                }
            }
        }
        if (elem.contents && elem.contents.length) {
            // this._pendingContents = elem.contents;
            var _pendingChildren = __get__.call(this, PENDING_CHILDREN);
            for (var index = 0; index < elem.contents.length; index++) {
                _pendingChildren.push(elem.contents[index]);

            }
        }
        if (!isEmpty(elem.events)) {
            this.on(elem.events);
        }
        if (elem.parent) {
            this.parent = elem.parent;
        }

        if (!isEmpty(elem.methods)) {
            for (var method in elem.methods) {
                if (Object.hasOwnProperty.call(elem.methods, method)) {
                    var fn = elem.methods[method];
                    // console.log(method, fn)
                    _defineProperty(this, method, fn);
                }
            }
        }

    }

    __set__.call(this, IS_STARTED, true);
    return this;
}

function __build_data_ref__(data) {
    if (isObject(data)) {
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
    self[key] = value;
    return;
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

    } else if (typeof this.build == "function") {
        if (typeof this.onBeforeBuild == "function") {
            this.onBeforeBuild();
        }
        this.emit("building");
        var children = this.build();
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
    __set__.call(this, IS_BUILDED, true);
}

function addBagData(bag) {
    let data = {};
    if (isObject(bag)) {
        var computed = null;
        for (const key in bag) {
            if (Object.prototype.hasOwnProperty.call(bag, key)) {
                const scopeData = bag[key];
                if (key == 'services') {
                    for (const k in scopeData) {
                        if (Object.prototype.hasOwnProperty.call(scopeData, k)) {
                            const sc = scopeData[k];
                            this[k] = app(sc);
                        }
                    }
                }
                else if (key == 'data') {
                    assignValue(data, scopeData);
                }
                else if (key == 'computed' && isObject(scopeData)) {
                    computed = scopeData;
                }
            }
        }
        if (isObject(computed)) {
            var self = this;
            var ckeys = Object.keys(computed);
            var COMPUTED = __get__.call(this, COMPUTED_FUNCTS);
            for (let index = 0; index < ckeys.length; index++) {
                const key = ckeys[index];
                var fn = computed[key];
                if (isFunction(fn)) {
                    COMPUTED[key] = fn;
                }
            }
        }
    }

    __build_data_ref__.call(this, data);


}

function bootData() {


    let data = {};
    const _data_containers = __get__.call(this, DATA_CONTAINERS);
    if (!isEmpty(_data_containers)) {
        for (const key in _data_containers) {
            if (Object.prototype.hasOwnProperty.call(_data_containers, key)) {
                const sc = _data_containers[key];
                if (key == 'servives') {
                    if (isObject(sc)) {
                        for (const k in sc) {
                            if (Object.prototype.hasOwnProperty.call(sc, k)) {
                                const s = sc[k];
                                if (!isObject(s)) {
                                    this[k] = app(s);
                                } else {
                                    this[k] = s;
                                }
                            }
                        }
                    }
                }
                else if (key == 'data') {
                    assignValue(data, sc);
                }
            }
        }
    }
    __build_data_ref__.call(this, data);
}



function __build__() {
    if (!this.autoRender && !__get__.call(this, IS_BUILDED)) {
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
    __set__.call(this, TRANSMISTION_STATUS, true);
    // truyền cho các thằng con
    if (this.children.length) {
        for (var i = 0; i < this.children.length; i++) {
            var child = this.children[i];

            if (child.isDom) {
                receiveFromParent.call(child, channel, data, sentId);
                if (__get__.call(this, TRANSMISTION_STATUS) === false) {
                    if (sentId != instanceID && this.parent) {
                        this.parent.stopTransmission();
                    }
                    break;
                }
            }
        }
    }
    __set__.call(this, TRANSMISTION_STATUS, true);
    return this;
}


/**
 * nhận dữ liệu giữ các component cha -> con
 * @param {string} channel tên sự kiện
 * @param {*} data dữ liệu bất kỳ
 */
function receiveFromParent(channel, data, sentId) {
    var __transmissionEventListeners = __get__.call(this, TRANSMISTION_LISTENNERS);
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
            var c = Str.replace(
                Str.ucword(
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
    __set__.call(this, TRANSMISTION_STATUS, true);

    const __transmissionEventListeners = __get__.call(this, TRANSMISTION_LISTENNERS);
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
            var c = Str.replace(
                Str.ucword(
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
    __set__.call(this, TRANSMISTION_STATUS, true);

}


/**
 * lsng81 nghe lời gọi hàm của thằng con
 * @param {string} method tên phương thức
 * @param {array} args tham số
 */
function onChildrenCallMethod(method, args) {
    if (typeof this[method] == "function") {
        var fn = this[method];
        return fn.apply(this, isArray(args) ? args : [args]);
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
            var res = fn.apply(self, isArray(args) ? args : [args]);
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
    const __transmissionEventListeners = __get__.call(this, TRANSMISTION_LISTENNERS);
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
        var c = Str.replace(
            Str.ucword(
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

    function next(args) {

        if (self.parent) {
            let index = self.parent.children.indexOf(self);
            var s = false;
            for (let i = index + 1; i < self.parent.children.length; i++) {
                const child = self.parent.children[i];
                if (isObject(args)) {
                    var a = true;
                    for (const key in args) {
                        if (Object.hasOwnProperty.call(args, key)) {
                            const value = args[key];
                            if (child[key] != value) a = false;
                        }
                    }
                    if (a) return child;
                }
                else if (isFunction(args) && args(child)) return child;
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
                if (isObject(args)) {
                    var a = true;
                    for (const key in args) {
                        if (Object.hasOwnProperty.call(args, key)) {
                            const value = args[key];
                            if (child[key] != value) a = false;
                        }
                    }
                    if (a) return child;
                }
                else if (isFunction(args) && args(child)) return child;
                else if (!args) return child;
            }
        }
        return null;
    }

    function show(time, callback) {

        // function _show() {
        if (__get__.call(self, SHOW)) return self;
        var t = isNumber(time) ? parseInt(time) : 0;
        var cb = isCallable(time) ? time : (isCallable(callback) ? callback : emptyFunc);

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
        var mc = __get__.call(self, MARK_COMMENT);
        if (mc) {
            mc.parentNode.insertBefore(self.el, mc);
            __set__.call(self, SHOW, true);
            _show();
        } else {
            var _next = next(function (el) { return el.isDom && el.__get__(SHOW) });
            if (_next) {
                _next.el.parentNode.insertBefore(self.el, _next.el);
                __set__.call(self, SHOW, true);
                _show();
            } else if (self.parent) {
                self.parent.el.appendChild(self.el);
                __set__.call(self, SHOW, true);
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
        var t = isNumber(time) ? parseInt(time) : 0;
        var cb = isCallable(time) ? time : (isCallable(callback) ? callback : emptyFunc);
        if (!self.el.parentNode) return self;
        if (!__get__.call(self, PARENT_NODE)) __set__.call(self, PARENT_NODE, self.el.parentNode);
        if (!__get__.call(self, MARK_COMMENT)) {
            __set__.call(self, MARK_COMMENT, document.createComment("/" + self.tagName + (self.el.id ? "#" + self.id : "") + (self.el.className ? "." + self.el.className.split(" ").map(function (t) { return t.trim(); }).filter(function (t) { return t.length > 0; }).join(".") : "")))
            __get__.call(self, PARENT_NODE).insertBefore(__get__.call(self, MARK_COMMENT), self.el);
        }
        __set__.call(self, SHOW, false);
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

    Object.defineProperties(show, {
        toString: {
            configurable: false,
            enumerable: false,
            value: function () {
                return __get__.call(self, SHOW);
            }
        },
        __toData__: {
            configurable: false,
            enumerable: false,
            value: function () {
                return __get__.call(self, SHOW);
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
                return !__get__.call(self, SHOW);
            }
        },
        __toData__: {
            configurable: false,
            enumerable: false,
            value: function () {
                return !__get__.call(self, SHOW);
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
                if (isBoolean(status)) {
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
                if (isBoolean(status)) {
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



/**
 * Thêm thuộc tính động
 * @param {string} attr tên thuộc tính
 * @param {string|number} value 
 * @returns this
 */
function addDynamicAttr(attr, value) {
    if (isString(attr)) {
        var self = this;
        if ((isObject(value) && (value.isObjectData || value.isArrayData) || value.isPrimitive) || (isFunction(value) && value.isPrimitive)) return setDataTypeAttribute.call(this, attr, value);
        this.attr(attr, value);
        var oneWayBinding = __get__.call(this, DYNAMIC_ATTRS);
        Object.defineProperty(this, attr, {
            configurable: true,
            set: function (val) {
                __set__.call(this, DYNAMIC_SYNC, false);
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
                    oneWayBinding[attr] = val;
                    this.attr(attr, val);

                }
                __set__.call(this, DYNAMIC_SYNC, true);
            },
            get: function () {
                return oneWayBinding[attr] || null;
            }
        })

    }
    else if (isObject(attr)) {
        for (var key in attr) {
            if (Object.hasOwnProperty.call(attr, key)) {
                addDynamicAttr.call(this, key, attr[key]);
            }
        }
    }
    return this;
}



/**
 * Thêm thuộc tính động
 * @param {string} attr tên thuộc tính
 * @param {string|number} value 
 * @returns this
 */
function addOneWayBindingAttr(attr, value, type) {
    var self = this;
    if (isString(attr)) {
        var key = String(attr).toLowerCase();
        if (type == 'state') {
            var vl = value.__toData__();
            if (key == 'value') {
                this.val(vl)
            } else {
                this.attr(attr, vl);
            }

            value.subscribe(function (v) {
                if (isState(v)) {
                    vl = vl.__toData__();

                } else {
                    vl = v;
                }
                if (key == 'value') {
                    self.val(vl)
                } else {
                    self.attr(attr, vl);
                }

            });
        }
        else if (type == 'binding' || (type == 'prop' && isFunction(value))) {
            if (key == 'value') {
                self.val(value(text => self.val(text)));

            } else {
                self.attr(value(text => self.attr(text)));
            }
        }
        else if (type == 'proptext') {
            var texts = parseTextData(self, value);
            if (isFunction(texts)) {
                if (key == 'value') {
                    self.val(texts(text => self.val(text)));

                } else {
                    self.attr(texts(text => self.attr(text)));
                }
            }
            else if (key == 'value') {
                self.val(value);

            } else {
                self.attr(value);
            }
        }
        else if (type == 'prop') {
            var vl = getEl(this, value);
            if (key == 'value') {
                this.val(vl)
            } else {
                this.attr(attr, vl);
            }

            if (value) {
                var _key = value.split(".").shift();
                // nếu không có __ob__ hoặc không tồn tại key và cũng ko có trong obj
                if (!this.__ob__ || (!inArray(this.__ob__.indexKeys, _key) && typeof this[_key] != "undefined")) {
                    var dbo = __get__.call(self, DOM_BASE_OBJECT);
                    if (dbo) {
                        if (!dbo.__ob__ || (!inArray(dbo.__ob__.indexKeys, _key) && typeof dbo[_key] != "undefined")) {

                        } else {
                            dbo.__ob__.subscribe(value, function (v) {
                                if (isState(v)) {
                                    vl = v.__toData__();

                                } else {
                                    vl = v;
                                }
                                if (key == 'value') {
                                    self.val(vl)
                                } else {
                                    self.attr(attr, vl);
                                }
                            })
                        }
                    }
                }
                else if (this.__ob__) {
                    this.__ob__.subscribe(value, function (v) {
                        if (isState(v)) {
                            vl = v.__toData__();

                        } else {
                            vl = v;
                        }
                        if (key == 'value') {
                            self.val(vl)
                        } else {
                            self.attr(attr, vl);
                        }
                    })
                }
            }
        } else {
            self.attr(attr, value);
            if (!objectHasKey(this, attr)) {
                Object.defineProperty(this, attr, {
                    configurable: true,
                    enumerable: true,
                    get: function () {
                        return value;
                    },
                    set: function (val) {
                        value = val;
                        if (key == 'value') {
                            self.val(value);
                        } else {
                            self.attr(attr, value);
                        }
                    }
                })
            }
        }

    }
    else if (isObject(attr)) {
        for (var key in attr) {
            if (Object.hasOwnProperty.call(attr, key)) {
                addOneWayBindingAttr.call(this, key, attr[key].value, attr[key].type);
            }
        }
    }
    return this;
}

var PropChangeStatus = {};

/**
 * Thêm thuộc tính động
 * @param {string} attr tên thuộc tính
 * @param {string|number} value 
 * @returns this
 */
function addTwoWayBindingAttr(attr, value, type) {
    var self = this;
    if (isString(attr)) {
        let attrKey = this.__instance__id__ + "_" + attr;
        PropChangeStatus[attrKey] = true;
        var key = String(attr).toLowerCase();
        if (type == 'state') {
            var domValue = value.__toData__();
            if (key == 'value') {
                this.val(domValue)
            } else {
                this.attr(attr, domValue);
            }

            value.subscribe(function (vl) {
                if (PropChangeStatus[attrKey]) {
                    if (isState(vl)) {
                        domValue = vl.__toData__();

                    } else {
                        domValue = vl;
                    }
                    if (key == 'value') {
                        self.val(domValue)
                    } else {
                        self.attr(attr, domValue);
                    }

                }
            });
            this.on("attribute.changed", function (event) {
                var old = key == 'value' ? this.val() : this.attr(attr);
                if (old != domValue) {
                    PropChangeStatus[attrKey] = false;
                    if (!objectHasKey(this, attr)) {
                        Object.defineProperty(this, attr, {
                            configurable: true,
                            enumerable: true,
                            get: function () {
                                return domValue;
                            },
                            set: function (val) {
                                domValue = val;
                                if (PropChangeStatus[attrKey]) {
                                    if (key == 'value') {
                                        self.val(val)
                                    } else {
                                        self.attr(attr, val);
                                    }
                                }

                            }
                        })
                    }
                    this[attr] = old;
                    PropChangeStatus[attrKey] = true;
                }
            })

        }
        else if (type == 'binding' || (type == 'prop' && isFunction(value))) {
            var vld = null;
            if (key == 'value') {
                vld = value(text => {
                    vld = text;
                    if (PropChangeStatus[attrKey]) self.val(text);
                });
                self.val(vld);

            } else {
                vld = value(text => {
                    vld = text;
                    if (PropChangeStatus[attrKey]) self.attr(text);
                });
                self.attr(vld);
            }

            this.on("attribute.changed", function (event) {
                var old = key == 'value' ? this.val() : this.attr(attr);
                if (old != vld && PropChangeStatus[attrKey]) {
                    vld = old;
                    PropChangeStatus[attrKey] = false;
                    setEl(value._dboKeys.length ? dbo : self, vld, old);
                    PropChangeStatus[attrKey] = true;
                }
            })

        }
        else if (type == 'proptext') {
            var texts = parseTextData(self, value);
            if (isFunction(texts)) {
                var vld = null;
                value = texts;
                if (key == 'value') {
                    vld = value(text => {
                        vld = text;
                        if (PropChangeStatus[attrKey]) self.val(text);
                    });
                    self.val(vld);

                } else {
                    vld = value(text => {
                        vld = text;
                        if (PropChangeStatus[attrKey]) self.attr(text);
                    });
                    self.attr(vld);
                }

                this.on("attribute.changed", function (event) {
                    var old = key == 'value' ? this.val() : this.attr(attr);
                    if (old != vld && PropChangeStatus[attrKey]) {
                        vld = old;
                        PropChangeStatus[attrKey] = false;
                        setEl(value._dboKeys.length ? dbo : self, vld, old);
                        PropChangeStatus[attrKey] = true;
                    }
                })
            }
            else if (key == 'value') {
                self.val(value);

            } else {
                self.attr(value);
            }
        }

        else if (type == 'prop') {
            var vl = getEl(this, value);
            var vld = isState(vl) ? vl.__toData__() : vl;
            if (key == 'value') {
                this.val(vld)
            } else {
                this.attr(attr, vld);
            }
            if (value) {
                var _key = value.split(".").shift();
                var dbo = __get__.call(self, DOM_BASE_OBJECT);
                if (this.__ob__ && inArray(this.__ob__.indexKeys, _key)) {
                    this.__ob__.subscribe(value, function (v) {

                        vld = isState(v) ? v.__toData__() : v;
                        if (PropChangeStatus[attrKey]) {
                            if (key == 'value') {
                                self.val(vld)
                            } else {
                                self.attr(attr, vld);
                            }

                        }
                    })
                }

                else if (dbo) {
                    if (!dbo.__ob__ || (!inArray(dbo.__ob__.indexKeys, _key) && typeof dbo[_key] != "undefined")) {

                    } else {
                        dbo.__ob__.subscribe(value, function (v) {
                            if (isState(v)) {
                                vl = v.__toData__();

                            } else {
                                vl = v;
                            }
                            if (key == 'value') {
                                self.val(vl)
                            } else {
                                self.attr(attr, vl);
                            }
                        })
                    }
                }

                this.on("attribute.changed", function (event) {
                    var old = key == 'value' ? this.val() : this.attr(attr);
                    if (old != vld && PropChangeStatus[attrKey]) {
                        vld = old;
                        PropChangeStatus[attrKey] = false;
                        setEl(dbo ? dbo : self, vld, old);
                        PropChangeStatus[attrKey] = true;
                    }
                })
            }
        } else {
            if (key == 'value') {
                this.val(value)
            } else {
                this.attr(attr, value);
            }
            if (!objectHasKey(this, attr)) {
                Object.defineProperty(this, attr, {
                    configurable: true,
                    enumerable: true,
                    get: function () {
                        return value;
                    },
                    set: function (v) {
                        value = isState(v) ? v.__toData__() : v;
                        if (PropChangeStatus[attrKey]) {
                            if (key == 'value') {
                                self.val(value)
                            } else {
                                self.attr(attr, value);
                            }
                        }

                    }
                })
            }
            else if (this.__ob__) {
                this.__ob__.subscribe(value, function (v) {
                    value = isState(v) ? v.__toData__() : v;
                    if (PropChangeStatus[attrKey]) {
                        if (key == 'value') {
                            self.val(value)
                        } else {
                            self.attr(attr, value);
                        }
                    }
                })
            }
            this.on("attribute.changed", function (event) {
                var old = key == 'value' ? self.val() : self.attr(attr);
                if (old != vld && PropChangeStatus[attrKey]) {
                    vld = old;
                    PropChangeStatus[attrKey] = false;
                    self[attr] = vld
                    PropChangeStatus[attrKey] = true;
                }
            })

        }

    }
    else if (isObject(attr)) {
        for (var key in attr) {
            if (Object.hasOwnProperty.call(attr, key)) {
                addTwoWayBindingAttr.call(this, key, attr[key].value, attr[key].type);
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
        oneWayBinding = {},
        twoWayBinding = {},
        data = {},
        parent = null,
        self = this
        ;

    function addAttrValue(k, vl) {
        var s = String(k).toLowerCase();
        var parts = s.split("$");
        var f = k.substring(0, 1);
        var n = k.substring(1);
        var f2 = k.substring(0, 2);
        var n2 = k.substring(2);
        var vt = getType(vl);
        var valType = isState(vl) ? 'state' : vt;
        var $t = valType, $v = vl;
        var $text = (vt == 'string') ? parseTextData(vl) : null;
        var isBindingText = isFunction($text);
        if (vt == 'string' && !isNumber(vl) && isBindingText && $text.texts.length == 1) {
            $t = 'prop';
            $v = $text;
        }

        if (f2 == '$$') {
            twoWayBinding[s.substring(2)] = {
                type: $t,
                value: $v
            };;
        }
        else if (parts.length > 1) {
            var key = k.substring(parts[0].length + 1);
            if (parts[0].length) {
                if (parts[0] == "sync") {
                    twoWayBinding[key] = {
                        type: $t,
                        value: $v
                    };
                } else if (parts[0] == "bind") {
                    oneWayBinding[key] = {
                        type: $t,
                        value: $v
                    };
                } else {
                    if (valType == 'state') {
                        twoWayBinding[key] = {
                            type: $t,
                            value: $v
                        };
                    } else {
                        oneWayBinding[key] = {
                            type: $t,
                            value: $v
                        };
                    }

                }

            }
            else if (parts[1] == 'parent' && ((isObject(vl) && vl.isDom) || vl instanceof Element)) {
                parent = val;
            }
            else {
                var key = k.substring(1);
                if (valType == 'state') {
                    twoWayBinding[key] = {
                        type: $t,
                        value: $v
                    };
                } else {
                    oneWayBinding[key] = {
                        type: $t,
                        value: $v
                    };
                }
            }
        }
        else if (k == 'parent' && ((vt == 'object' && vl.isDom) || vl instanceof Element)) {
            parent = val;

        }
        else if (inArray(['data', 'services', 'methods', 'computed'], k)) {
            if (isObject(vl)) {
                var container = {};
                container[k] = vl;
                __set__.call(self, FOREIGN_DATA, container);
            }
        }
        else if (inArray(['attr', 'attrs', 'attribute', 'attributes', 'prop', 'props'], k)) {
            if (isObject(vl)) {
                Object.keys(vl).map(function (_k) {
                    addAttrValue(_k, vl[_k]);
                });

            }
        }
        else if (inArray(['tag', 'tagname'], s)) {
            // tagName = vl;
        }
        else if (f2 == 'on' && isDomEvent(s.substring(2))) {
            events[s.substring(2)] = vl;
        }
        else if (f == '@' && isDomEvent(n)) {
            events[n] = vl;
        }
        else if (s == "on" && vt == 'object') {
            for (const v in vl) {
                if (Object.hasOwnProperty.call(vl, v)) {
                    const ev = vl[v];
                    events[v] = ev;
                }
            }

        }
        else if (inArray(["content", "children"], s)) {
            if (isArray(vl)) {
                for (var j = 0; j < vl.length; j++) {
                    contents.push(vl[j]);

                }
            } else {
                contents.push(vl);
            }
        }
        else if (vt == "function") {
            if (vl.isPrimitive) {
                oneWayBinding[k] = {
                    type: $t,
                    value: $v
                };;
            } else {
                methods[k] = vl;
            }
        }
        else if ($t == 'prop') {
            oneWayBinding[k] = {
                type: $t,
                value: $v
            };


        }
        else if (isFunction($text)) {
            oneWayBinding[k] = {
                type: 'binding',
                value: $text
            };
        }

        else {
            attrs[k] = vl;
        }
    }
    var isTagObject = isObject(tag);
    // kiểm tra tag xem có là query hay ko
    if (isTagObject) {
        if (tag.isQuery || tag.isDomQuery) contents.push(tag);
        else if (tag.isDom) contents.push(tag);
        else if (tag.isDomBag) contents.push(tag);
        else forEach(tag, function (vl, k) {
            var s = String(k).toLowerCase();
            if (inArray(['tag', 'tagname'], s)) {
                tagName = vl;
            }
            else if (inArray(["content", "children"], s)) {
                if (isArray(vl)) {
                    for (var j = 0; j < vl.length; j++) {
                        let cnt = vl[j];
                        let texts = parseTextData(self, cnt);
                        if (isArray(texts) && texts.length) {
                            texts.map(function (c) {
                                contents.push(c);
                            })
                        }

                        else {
                            contents.push(cnt);
                        }
                    }
                } else {
                    let texts = parseTextData(self, vl);
                    if (isArray(texts) && texts.length) {
                        texts.map(function (c) {
                            contents.push(c);
                        })
                    }
                    else {
                        contents.push(vl);
                    }
                }
            }
            else {
                addAttrValue(k, vl);
            }
        });


    }

    else if (isString(tag)) tagName = tag;


    for (let i = 1; i < arguments.length; i++) {
        const arg = arguments[i];
        let aType = getType(arg);
        if (aType == "object") {
            if (arg.isQuery || arg.isDomQuery || arg.isDom || arg.isDomBag || _instanceof(arg, Element)) {
                contents.push(arg);
            }
            else if (_instanceof(arg, Dom)) {
                contents.push(arg.el);
            }
            else if (isObject(arg)) {
                for (var k in arg) {
                    if (arg.hasOwnProperty(k)) {
                        addAttrValue(k, arg[k]);
                    }
                }

            }

        }
        else if (aType == "string") {
            isTwoContent = 0;
            let texts = parseTextData(self, arg);
            if (isArray(texts) && texts.length) {
                texts.map(function (c) {
                    contents.push(c);
                })
            }
            else {
                contents.push(arg);
            }
        } else if (aType == "array") {

            if (arg.isDomComponentBag && arg.Component) {
                contents.push(arg);

            }
            else {
                isArrayContent = true;
                for (let j = 0; j < arg.length; j++) {
                    let currentArg = arg[j];
                    if (isArray(currentArg) && currentArg.isDomComponentBag && currentArg.Component) {
                        contents.push(currentArg);
                    }
                    else {
                        let texts = parseTextData(self, currentArg);
                        if (isArray(texts) && texts.length) {
                            texts.map(function (c) {
                                contents.push(c);
                            })
                        }
                        else {
                            contents.push(currentArg);
                        }
                    }

                }
            }

        } else if (isFunction(arg) && arg.isDomClass) {
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
            if (!isEmpty(inf.attrs)) {
                for (var k in inf.attrs) {
                    if (Object.hasOwnProperty.call(inf.attrs, k)) {
                        addAttrValue(k, inf.attrs[k]);
                    }
                }
            }
            if (!isEmpty(inf.props)) {
                assignValue(props, inf.props);
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
    if (!isEmpty(attrs)) {

        var csk, v;
        var css = {};
        forEach(attrs, function (val, prop) {
            var key = prop.toLowerCase();
            var k = key;
            var f = k.substring(0, 1);
            var f2 = k.substring(0, 2);
            var isEvent = domEvents.indexOf(key) >= 0;
            if (inArray(['tag', 'tagname'], key)) {
                // tagName = vl;
            }
            else if (f == '$' && inArray(['string', 'number', 'boolean'], getType(val))) {
                twoWayBinding[k.substr(1)] = val;
            }
            else if (key == "style") {
                if (typeof val == "object") {
                    forEach(val, function (v, cssKey) {
                        css[cssKey] = v;
                    });
                    forEach(css, function (cv, ck) {
                        setCssProp(htmlObject, ck, cv);
                    });

                } else {
                    htmlObject.setAttribute(key, val);
                }
            }
            else if (isObject(val)) {
                if (val.isDom || val.isDomBag || val.isDomQuery || _instanceof(val, Element)) {
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
                    forEach(Str.convertTextObject({}, val, prop, '-'), function (v, ak) {
                        htmlObject.setAttribute(ak, v);
                    });
                }


            }
            else if (key == 'class' || key == 'classname') {
                htmlObject.className = val;
            }
            else if (typeof vl == "function") {
                methods[k] = vl;
            }
            else if (isBoolean(val)) {
                if (val === false) {
                    htmlObject.removeAttribute(key);

                } else {
                    htmlObject.setAttribute(key, key);
                }
            }
            else if (key != "content" || isSimple) {
                var slug = Str.camelToSlug(prop, '-');
                htmlObject.setAttribute(slug, val);
            }
        })
    }

    if (!isEmpty(props)) {
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
        oneWayBinding: oneWayBinding,
        twoWayBinding: twoWayBinding,
        dataTypeAttrs: dataTypeAttrs,
        events: events,
        methods: methods,
        tag: tagName,
        parent: parent
    };

}

function parseTextData(context, str) {
    if (!isString(str)) return str;
    var s = String(str);

    var a = /\{\{\s*[A-z0-9\._\$]+\s*\}\}/i.test(s);
    if (!a) return str;
    var texts = [
        ""
    ];
    var n = 0;
    var keys = [];
    var dboKeys = [];
    var dbo = __get__.call(context, DOM_BASE_OBJECT);
    var last = '';
    var isOpen = false;
    var currentKey = '';
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (isOpen) {
            if (c == '{') {
                if (last == '{') {
                    texts[n] += c;
                }
                else {
                    texts[n] += '{{' + currentKey + c;
                    isOpen = false;
                    currentKey = '';
                }
            }
            else if (c == '}') {
                if (last == '}') {
                    n++;
                    texts[n] = new BindingText(currentKey.trim());
                    let fk = currentKey.split(".").shift();
                    var y = false;
                    if (context.__ob__ && context.__ob__.indexKeys.indexOf(fk) != -1) {
                        if (keys.indexOf(currentKey) === -1) {
                            keys.push(currentKey);
                        }
                        y = true;
                    }
                    else if (dbo && dbo.__ob__ && dbo.__ob__.indexKeys.indexOf(fk) != -1) {
                        if (keys.indexOf(currentKey) === -1) {
                            dboKeys.push(currentKey);
                            texts[n].type = 'dbo';
                        }
                    }
                    currentKey = '';
                    n++;
                    last = '';
                    isOpen = false;
                    if (i < s.length - 1) texts[n] = '';
                }
            }
            else if (last == '}') {
                texts[n] += '{{' + currentKey + '}' + c;
                isOpen = false;
                currentKey = '';
            }
            else if (/[A-z0-9\._\$\s]/i.test(c)) {
                currentKey += c;
            }
            else {
                texts[n] += '{{' + currentKey + c;
                isOpen = false;
                currentKey = '';
            }
        }
        else if (c == '{') {
            if (last == '{') {
                isOpen = true;
                texts[n] = texts[n].substring(0, texts[n].length - 1);
            }
            else {
                texts[n] += c;
            }
        } else {
            texts[n] += c;
        }
        if (!i || last != '') last = c;
    }

    if (keys.length || dboKeys.length) {
        var fn = function (subscribe) {
            var _text_ = '';
            var getText = function () {
                _text_ = '';
                forEach(texts, function (value) {
                    if (value instanceof BindingText) {
                        let key = value.key;
                        let text = '';
                        if (value.type == 'dbo') {
                            let v = dbo.__getDataOrDBOData__(key);
                            text = isState(v) ? v.__toData__() : v;
                        } else {
                            let v = context.__getDataOrDBOData__(key);
                            text = isState(v) ? v.__toData__() : v;
                        }
                        if (texts.length == 1) _text_ = text;
                        else _text_ += text;




                    } else {
                        if (texts.length == 1) _text_ = value;
                        else _text_ += value;
                    }
                });
            }
            getText();

            if (subscribe && isFunction(subscribe)) {
                forEach(texts, function (value) {
                    if (value instanceof BindingText) {
                        let key = value.key;
                        if (value.type == 'dbo') {
                            dbo.__onDataChange__(key, function (v) {
                                getText();
                                subscribe(_text_);
                            })
                        } else {
                            context.__onDataChange__(key, function (v) {
                                getText();
                                subscribe(_text_);
                            })
                        }


                    }
                });
            }
            return _text_;
        }
        defConst(fn, 'isBindingFactory', true);
        defConst(fn, 'texts', texts);
        defConst(fn, '_dboKeys', dboKeys, {
            enumerable: false,
            configurable: false
        });
        defConst(fn, '_keys', keys, {
            enumerable: false,
            configurable: false
        });
        return fn;

    }
    if (texts[0] == '') {
        texts.shift();
    }
    return texts;
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
        oneWayBinding = {},
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
                    oneWayBinding[k.substr(1)] = vl;
                }
                else if (inArray(['tag', 'tagname'], s)) {
                    // tagName = vl;
                    if (changeTagName) {
                        tagName = vl;
                    }
                }
                else if (inArray(['init', 'boot'], s)) {
                    if (s == 'boot') boot = vl;
                    else init = vl;
                }
                else if (s.substr(0, 2) == 'on' && isDomEvent(s.substr(2))) {
                    events[s.substr(2)] = vl;
                }
                else if (s.substr(0, 1) == '@' && isDomEvent(s.substr(1))) {
                    events[s.substr(1)] = vl;
                }
                else if (inArray(["content", "content", "children", "child"], s)) {
                    if (isArray(vl)) {
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

    if ((isObject(tag) && (tag.isQuery || tag.isDomQuery))) {
        contents.push(tag);
    }
    else if (isObject(tag) && tag.isDom) {
        contents.push(tag.el);
    }
    else if (isObject(tag)) {
        parseAttrs(tag, true);
    }
    else if (isString(tag)) tagName = tag;
    var max = arguments.length > 3 ? 3 : arguments.length;
    for (var i = 1; i < max; i++) {
        var arg = arguments[i];
        if (isObject(arg) && arg.isDom) {
            contents.push(arg.el);
        }
        else if (_instanceof(arg, Element)) {
            contents.push(arg);
        }
        else if (_instanceof(arg, Dom)) {
            contents.push(arg.el);
        }
        else if (isObject(arg)) {
            parseAttrs(arg);
        }
        else if (isString(arg)) {
            contents.push(arg);
        } else if (isArray(arg)) {
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
            if (!isEmpty(inf.attrs)) {
                parseAttrs(inf.attrs);
            }
            if (!isEmpty(inf.props)) {
                assignValue(props, inf.props);
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
    if (!isEmpty(attrs)) {
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
                if (inArray(['tag', 'tagname'], key)) {
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
                        let attrObj = Str.convertTextObject({}, val, prop, '-');
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
                    var slug = Str.camelToSlug(prop, '-');
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
                    if (isObject(el) && el.isDom) {
                        htmlObject.appendChild(el.el);
                    }
                    else if (el instanceof Element) {
                        htmlObject.appendChild(el);
                    }
                    else if (isObject(el) || isString(el)) {
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


    if (!isEmpty(events)) {
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
    if (!str) {
        var a = document.createTextNode(str);
        return a;
    }
    if ((str instanceof Element)) return str;
    else if (typeof str == "object" && !isNull(str)) {
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
    div.innerHTML = isString(str) && !isNumber(str) ? String(str) : str;

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
                if (inArray(['"', "'"], attr[1][0]) && inArray(['"', "'"], attr[1][attr[1].length - 1])) {
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



/**
* them su kien cho element
* @param {Element} element dom element
* @param {string} event ten su kien
* @param {function} callback
* @param {string} data
* @return {boolean}
*/
function addEvent(element, event, callback, data) {
    if (!element || !event || (!(element instanceof Element) && !isGlobalOrRoot(element)) || !isString(event) || !callback || !isCallable(callback)) return false;
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
    if (!element || (!(element instanceof Element) && !isGlobalOrRoot(element)) || !isString(event)) {
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
                            if (callback && isFunction(callback)) {
                                if (evCallback.callback === callback) {
                                    removeEventListener(eventData.element, eventData.event, evCallback.callback);
                                    events[i].tasks.splice(j, 1);
                                    j--;
                                }
                            }
                        }
                    } else if (callback && isFunction(callback)) {
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
    if (!element || (!(element instanceof Element) && !isGlobalOrRoot(element)) || !isString(event)) {
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
                            if (callback && isFunction(callback)) {
                                if (evCallback.callback === callback) {
                                    removeEventListener(eventData.element, eventData.event, evCallback.callback);
                                    events[i].tasks.splice(j, 1);
                                    j--;
                                }
                            }
                        }
                    } else if (callback && isFunction(callback)) {
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


/**
 * kiểm tra xem có phải sự kiện dom hay ko
 * @param {string|string[]} eventName 
 * @returns {boolean}
 */
function isDomEvent(eventName) {
    var stt = false;
    if (isArray(eventName)) eventName.map(function (e) { if (allEvents.indexOf(String(e).toLowerCase()) != -1) stt = true; });
    else if (isString(eventName) && allEvents.indexOf(eventName.toLowerCase()) != -1) stt = true;
    return stt;
};



/**
 * 
 * @param {HTMLElement} element 
 * @param {string} prop 
 * @param {string} value 
 */
function setCssProp(element, prop, value) {
    if (element instanceof HTMLElement && isString(prop)) {
        try {
            var c = Str.slugToCamel(prop);
            var s = "element.style." + c + " = value;";
            eval(s);
        } catch (error) {
            element['style'][prop] = value;
        }
    }
}
function getCssProp(element, prop) {
    if (element instanceof Element && isString(prop)) {
        return typeof element['style'][prop] != "undefined" ? String(element['style'][prop]) : "";
    }
    return "";
}

function getParentNodes(elem, list, elementStop) {
    if (typeof elem == "undefined") return [];
    if (typeof list == "undefined" || !isArray(list)) {
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
    if (!isObject(obj)) return false;
    if (obj.isQuery || obj.isDomQuery) return true;
    return false;
}

function parseEventHandlerString(str) {
    var actions = [];
    var isOpenFunc = false;
    var isInFunctionName = false;
    var stringType = "", stringOpen = false;
    if (!isString(str)) return [];
    var t = str.length;
    for (let index = 0; index < t; index++) {
        const c = str[index];
        if (!isInFunctionName) {

        }

    }
}


function emptyFunc() { }

export default Dom;

export {
  create,
  createEl,
  Dom,
  DOM_BASE_OBJECT,
  domEvents,
  getDomInf,
  htmlTags,
  inputTags,
  inputTypes,
};
