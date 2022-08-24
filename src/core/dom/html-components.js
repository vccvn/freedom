// import Dom, { $, Query, query } from './dom.js';
import createClass, { _class } from '../es5-class.js';
import {
  _defineProperty,
  _instanceof,
  assignValue,
  getArguments,
  getType,
  inArray,
  isArray,
  isBoolean,
  isEmpty,
  isFunction,
  isNumber,
  isObject,
  isString,
  objectKeys,
  Str,
} from '../utils.js';
import Dom, {
  create,
  createEl,
  getDomInf,
  inputTags,
  inputTypes,
} from './dom.js';

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
    if (isObject(properties)) {
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
        __call__: function (...args) {
            var Component = this;
            var arg = getArguments(arguments);
            Object.defineProperty(arg, 'isDomComponentBag', {
                value: true,
                enumerable: false,
                writable: false,
                configurable: false,
            })
            Object.defineProperty(arg, 'Component', {
                value: Component,
                enumerable: false,
                writable: false,
                configurable: false,
            })
            return arg;
        },
        constructor: function () {
            var args = getArguments(arguments);
            if (args.length && isString(args[0]) && !isNumber(args[0])) {
                if (args[0].match(/^(\.|\#|\[|\:)[A-Za-z_\-]+/i) !== null) {
                    var a = getDomInf(args[0]);
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
            this.__setElement__.apply(this, args);
        }
    };
    classProps['const$is' + Str.ucfirst(t)] = true;
    if (t == 'img') {
        assignValue(classProps, {
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
                var args = getArguments(arguments);
                var src = null;
                var createArgs = [];
                var attrs = {};
                var hasTag = false;
                for (var index = 0; index < args.length; index++) {
                    var vl = args[index];
                    if (index == 0) {
                        if (isString(vl)) {
                            if (checkImageURL(vl)) {
                                src = vl;
                                createArgs.unshift(this.tagName);
                            } else {
                                var a = getDomInf(vl);
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
                            assignValue(attrs, vl);
                        }
                    }
                    else {
                        if (isString(vl)) {
                            if (!src && checkImageURL(vl)) {
                                src = vl;
                            }
                            else {
                                attrs.alt = vl;
                            }

                        }
                        else if (isObject(vl)) {
                            assignValue(attrs, vl);
                        }
                    }
                }

                if (src && !attrs.src) attrs.src = src;
                createArgs.push(attrs);

                this.__setElement__.apply(this, createArgs);
            }
        });
    }
    else if (t == 'input') {
        assignValue(classProps, {
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
                var args = getArguments(arguments);
                // nếu nhập vào ("select", "name", "value", data)
                var createArgs = [];
                var domEls = [];
                if (args.length) {
                    if (isObject(args[0]) && !args[0].isDom) {

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

                            if (isString(vl)) {
                                var vlow = String(vl).toLowerCase();
                                if (!s) {
                                    var a = getDomInf(vl);
                                    if (inputTypes.indexOf(vlow) !== -1 || inputTags.indexOf(vlow) !== -1) {
                                        inputOptions.type = vlow;
                                        s++;
                                    }
                                    else if (a.isElement) {
                                        var tg = a.tagName.toLowerCase();
                                        if (inputTypes.indexOf(tg) !== -1) {
                                            inputOptions.type = tg;
                                        }
                                        else if (inputTags.indexOf(tg) != -1) {
                                            inputOptions.type = tg;
                                        }
                                        s++;
                                        if (!isEmpty(a.attrs)) {
                                            assignValue(inputOptions, a.attrs);
                                        };
                                        if (!isEmpty(a.props)) assignValue(inputOptions, a.props);
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
                                    if ((inputOptions.name && inputTypes.indexOf(vlow) !== -1 || inputTags.indexOf(vlow) !== -1) && !inputOptions.type) {
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
                            else if (isObject(vl)) {
                                if (vl.isDom) {
                                    domEls.push(vl);
                                }
                                else {
                                    assignValue(inputOptions, vl);
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
                        if (!isEmpty(elem.dynamicAttrs)) {
                            this.addDynamicAttr(elem.dynamicAttrs);
                        }
                        // console.log(this, args, elem.contents);
                        if (elem.tag == 'select' && !isEmpty(elem.contents)) {
                            this.setHtml(Dom('div', elem.contents).html());

                        }
                        if (!isEmpty(elem.events)) {
                            this.on(elem.events);
                        }

                        // DoanDepTrai
                        if (!isEmpty(elem.methods)) {
                            for (var method in elem.methods) {
                                if (Object.hasOwnProperty.call(elem.methods, method)) {
                                    var fn = elem.methods[method];
                                    // console.log(method, fn)
                                    _defineProperty(this, method, fn);
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

    return createClass(Str.ucfirst(tag), false).extends(Dom).uses(prop)(classProps);
}

/**
 * Tạo một lớp đối tượng
 * @param {string} tag tên thẻ bạn muốn khởi tạo
 * @returns {Html}
 */
function createDomElementClass(tag, properties) {
    var prop = {};
    if (isObject(properties)) {
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
            var args = getArguments(arguments);
            if (args.length && isString(args[0])) {
                if (args[0].match(/^(\.|\#|\[|\:)+[A-Za-z_\-]+/i) !== null) {
                    var a = getDomInf(args[0]);
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
                    // if (args[1].match(/^\{.*\}$/i) !== null) {
                    //     args[1] = args[1].substr(1, args[0].length - 2);
                    // }
                }

            }
            else {
                args.unshift(this.tagName);
            }
            this.setElement.apply(this, args);
        }
    };
    classProps['const$is' + Str.ucfirst(t)] = true;
    if (t == 'img') {
        assignValue(classProps, {
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
                var args = getArguments(arguments);
                var src = null;
                var createArgs = [];
                var attrs = {};
                var hasTag = false;
                for (var index = 0; index < args.length; index++) {
                    var vl = args[index];
                    if (index == 0) {
                        if (isString(vl)) {
                            if (checkImageURL(vl)) {
                                src = vl;
                                createArgs.unshift(this.tagName);
                            } else {
                                var a = getDomInf(vl);
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
                            assignValue(attrs, vl);
                        }
                    }
                    else {
                        if (isString(vl)) {
                            if (!src && checkImageURL(vl)) {
                                src = vl;
                            }
                            else {
                                attrs.alt = vl;
                            }

                        }
                        else if (isObject(vl)) {
                            assignValue(attrs, vl);
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
        assignValue(classProps, {
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
                var args = getArguments(arguments);
                // nếu nhập vào ("select", "name", "value", data)
                var createArgs = [];
                var domEls = [];
                if (args.length) {
                    if (isObject(args[0]) && !args[0].isDom) {

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

                            if (isString(vl)) {
                                var vlow = String(vl).toLowerCase();
                                if (!s) {
                                    var a = getDomInf(vl);
                                    if (inputTypes.indexOf(vlow) !== -1 || inputTags.indexOf(vlow) !== -1) {
                                        inputOptions.type = vlow;
                                        s++;
                                    }
                                    else if (a.isElement) {
                                        var tg = a.tagName.toLowerCase();
                                        if (inputTypes.indexOf(tg) !== -1) {
                                            inputOptions.type = tg;
                                        }
                                        else if (inputTags.indexOf(tg) != -1) {
                                            inputOptions.type = tg;
                                        }
                                        s++;
                                        if (!isEmpty(a.attrs)) {
                                            assignValue(inputOptions, a.attrs);
                                        };
                                        if (!isEmpty(a.props)) assignValue(inputOptions, a.props);
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
                                    if ((inputOptions.name && inputTypes.indexOf(vlow) !== -1 || inputTags.indexOf(vlow) !== -1) && !inputOptions.type) {
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
                            else if (isObject(vl)) {
                                if (vl.isDom) {
                                    domEls.push(vl);
                                }
                                else {
                                    assignValue(inputOptions, vl);
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
                        if (!isEmpty(elem.dynamicAttrs)) {
                            this.addDynamicAttr(elem.dynamicAttrs);
                        }
                        // console.log(this, args, elem.contents);
                        if (elem.tag == 'select' && !isEmpty(elem.contents)) {
                            this.setHtml(Dom('div', elem.contents).html());

                        }
                        if (!isEmpty(elem.events)) {
                            this.on(elem.events);
                        }

                        // DoanDepTrai
                        if (!isEmpty(elem.methods)) {
                            for (var method in elem.methods) {
                                if (Object.hasOwnProperty.call(elem.methods, method)) {
                                    var fn = elem.methods[method];
                                    // console.log(method, fn)
                                    _defineProperty(this, method, fn);
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

    return createClass(Str.ucfirst(tag), false).extends(Dom).uses(prop)(classProps);
}

/**
 * tạo hàm tạo tag
 * @param {string} tag tên thẻ HTML
 * @returns {function(...args):Element}
 */
function createHtmlElementFunction(tag) {
    var tagName = tag.toLowerCase();
    var fn = function (...args) {
        if (args.length && isString(args[0])) {
            if (args[0].match(/^(\.|\#|\[|\:)[A-Za-z_\-]+/i) !== null) {
                var a = getDomInf(args[0]);
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
        return createEl(...args);
    };
    if (tagName == "input") {
        fn = function (...args) {
            var createArgs = [];
            var domEls = [];
            if (args.length) {
                if (isObject(args[0]) && !args[0].isDom) {

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

                        if (isString(vl)) {
                            var vlow = String(vl).toLowerCase();
                            if (!s) {
                                var a = getDomInf(vl);
                                if (inputTypes.indexOf(vlow) !== -1 || inputTags.indexOf(vlow) !== -1) {
                                    inputOptions.type = vlow;
                                    s++;
                                }
                                else if (a.isElement) {
                                    var tg = a.tagName.toLowerCase();
                                    if (inputTypes.indexOf(tg) !== -1) {
                                        inputOptions.type = tg;
                                    }
                                    else if (inputTags.indexOf(tg) != -1) {
                                        inputOptions.type = tg;
                                    }
                                    s++;
                                    if (!isEmpty(a.attrs)) {
                                        assignValue(inputOptions, a.attrs);
                                    };
                                    if (!isEmpty(a.props)) assignValue(inputOptions, a.props);
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
                                if ((inputOptions.name && inputTypes.indexOf(vlow) !== -1 || inputTags.indexOf(vlow) !== -1) && !inputOptions.type) {
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
                        else if (isObject(vl)) {
                            if (vl.isDom) {
                                domEls.push(vl);
                            }
                            else {
                                assignValue(inputOptions, vl);
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
                    if (isString(vl)) {
                        if (checkImageURL(vl)) {
                            src = vl;
                            createArgs.unshift(tagName);
                        } else {
                            var a = getDomInf(vl);
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
                        assignValue(attrs, vl);
                    }
                }
                else {
                    if (isString(vl)) {
                        if (!src && checkImageURL(vl)) {
                            src = vl;
                        }
                        else {
                            attrs.alt = vl;
                        }

                    }
                    else if (isObject(vl)) {
                        assignValue(attrs, vl);
                    }
                }
            }

            if (src && !attrs.src) attrs.src = src;
            createArgs.push(attrs);

            return createEl(...args);
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
                        content.push(createEl('option', text, option));
                    }
                }
            }
        } else if (type == "textarea") {
            content = value;
        } else {
            content = attributes;
        }
        return create.call(this, tagName, attributes, content, boot, init);
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
                        content.push(createEl('option', text, option));
                    }
                }
            }
        } else if (type == "textarea") {
            content = value;
        } else {
            content = attributes;
        }
        return createEl(tagName, attributes, content, boot, init);
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



const Loop = createClass("Loop").extends(Dom)({
    // static$isDomClass: true,
    // $el: null,
    // const$isDom: true,
    $target: null,
    // $parent: null,
    $eachFn: null,
    $__children: null,
    $index: 0,
    $key: 0,
    $value: undefined,
    $object: null,
    $itemkey: "item",

    $isFirst: false,
    $isLast: false,

    $_object: null,

    $args: null,

    $inited: false,
    
    /**
     * ham khoi tao
     * @param {*} arrObj data đầu vào
     * @param 
     */
    constructor: function (arrObj, ...args) {
        this._object = arrObj;
        var args = getArguments(arguments, 1);
        if (args.length == 2 && isString(args[0])) {
            this.itemkey = args.shift();
        }
        this.args = args;

    },
    __boot__: function () {
        this.__children = [];
        this.el = document.createComment(this.static.__class__ + ' Wrapper Elememt');
        this.object = [];
    },
    __call__: function (...args) {
        var Component = this;
        var arg = getArguments(arguments);
        
        Object.defineProperty(arg, 'isDomComponentBag', {
            value: true,
            enumerable: false,
            writable: false,
            configurable: false,
        })
        Object.defineProperty(arg, 'Component', {
            value: Component,
            enumerable: false,
            writable: false,
            configurable: false,
        })
        return arg;
    },
    __init__: function () {
        this.inited = true;

    },
    __destroy__: function () {
        this.__removeChild();

    },
    __setElement__: function setElement(params) {
        // var args = getArguments(arguments);
        // return __setElement__.apply(this, args);
    },

    becomeAChild: function (parent) {
        if(this.inited){
            this.__render();
        }
        
    },

    __renderChild: function (arg, key, index, obj) {
        if (this.parent) {
            var widthData = {};
            widthData[this.itemkey] = obj;
            widthData.key = key;
            widthData.index = index;
            widthData.isLoopElement = true;
            if (isFunction(arg) && !arg.isDomClass) {
                var r = null;
                if (arg.length > 1) {
                    r = arg(key, obj);
                } else {
                    r = arg(obj);
                }
                if (r) {
                    this.__children.push(this.parent.before(r, this));
                }
            }
            else {
                var child = this.parent.before(arg, this, widthData);
                this.__children.push(child);
            }
        }
    },

    __renderChildren: function (obj, type) {
        this.__removeChild();
        var self = this;
        if (type == 'array') {
            for (let i = 0; i < obj.length; i++) {
                const v = obj[i];
                this.args.map(function (domArg) {
                    self.__renderChild(domArg, i, i, v);
                });
            }
        }
        else if (type == 'object') {
            var keys = objectKeys(obj);
            for (let i = 0; i < keys.length; i++) {
                const k = keys[i];
                const v = obj[k];
                this.args.map(function (domArg) {
                    self.__renderChild(domArg, k, i, v);
                });
            }
        }
    },


    __render: function () {
        
        var self = this;
        let arrObj = null;
        let mode = "null";
        var objType = getType(this._object);
        if (inArray(['object', 'array'], getType(objType))) {
            self.__renderChildren(this._object, objType);
        }
        else if (objType == 'string') {
            if (this.parent) {
                var objLength = 0;
                var first = null;
                var rs = this.parent.__getDataOrDBOData__(this._object, function (v) {
                    var t = getType(v);
                    if (inArray(['object', 'array'], t)) {
                        if (t == 'object') {
                            var ol = Object.keys(v).length;
                            if (ol != objLength) {
                                objLength = ol;
                                self.__renderChildren(v, t);
                            }
                        } else if (v.length != objLength || (v.length && v[0] != first)) {
                            if(v.length && v[0] != first){
                                first = v[0];
                            }
                            objLength = v.length;
                            self.__renderChildren(v, t);
                        }

                    }
                });
                var vtv1 = getType(rs);
                if (inArray(['object', 'array'], vtv1)) {
                    objLength = vtv1 == 'array' ? rs.length : Object.keys(rs).length;
                    if(vtv1 == 'array' && rs.length) first = rs[0];
                    self.__renderChildren(rs, vtv1);
                }
            }
        }

    },
    /**
     * xóa phần tử con
     * @param {Element|Dom|Dom|Dom.Query} child 
     * @param {boolean} removeDomEl Xóa dom el
     */
    final$__removeChild: function (child, removeDomEl) {
        if (typeof removeDomEl == "undefined" || !isBoolean(removeDomEl) || child === true) removeDomEl = true;

        if (child) {
            var self = this;
            let index = this.__children.indexOf(child);
            if (index != -1) {
                this.__children.splice(index, 1);
                if (child.isDom) {
                    child.remove(true);
                    child.__destroy__();
                }

            }
            else if (child instanceof Element) {
                for (let i = 0; i < this.__children.length; i++) {
                    const c = this.__children[i];
                    if (c.el == child) {
                        this.__children.splice(i, 1);
                        child.remove(true);
                        child.__destroy__();
                    }
                }
            }

        }
        else {
            if (!isArray(this.__children)) return this;
            while (this.__children.length > 0) {
                let child = this.__children.shift();
                child.remove();
            }
        }
        return this;

    },
    static$if: function (condition){

    },

    static$elseif: function (condition){

    },
    static$else: function (){

    },
    
    static$switch: function (_any){

    },
    static$case: function (value){

    },

    static$default: function (){
        
    },
});

const ForEach = _class("ForEach").extends(Loop)({
    // foreach
})

const ForDown = _class("ForDown").extends(Loop)({
    // foreach
    
    __renderChildren: function (obj, type) {
        this.__removeChild();
        var self = this;
        if (type == 'array') {
            for (let i = obj.length -1; i >= 0; i--) {
                const v = obj[i];
                this.args.map(function (domArg) {
                    self.__renderChild(domArg, i, i, v);
                });
            }
        }
        else if (type == 'object') {
            var keys = objectKeys(obj);
            for (let i = keys.length; i >= 0; i--) {
                const k = keys[i];
                const v = obj[k];
                this.args.map(function (domArg) {
                    self.__renderChild(domArg, k, i, v);
                });
            }
        }
    }
})


const a = createHtmlElementFunction("a"), abbr = createHtmlElementFunction("abbr"), acronym = createHtmlElementFunction("acronym"), address = createHtmlElementFunction("address"), applet = createHtmlElementFunction("applet"), area = createHtmlElementFunction("area"), article = createHtmlElementFunction("article"), aside = createHtmlElementFunction("aside"), audio = createHtmlElementFunction("audio"),
    b = createHtmlElementFunction("b"), base = createHtmlElementFunction("base"), basefont = createHtmlElementFunction("basefont"), bb = createHtmlElementFunction("bb"), bdo = createHtmlElementFunction("bdo"), big = createHtmlElementFunction("big"), blockquote = createHtmlElementFunction("blockquote"), body = createHtmlElementFunction("body"), br = createHtmlElementFunction("br"), button = createHtmlElementFunction("button"),
    canvas = createHtmlElementFunction("canvas"), caption = createHtmlElementFunction("caption"), center = createHtmlElementFunction("center"), cite = createHtmlElementFunction("cite"), code = createHtmlElementFunction("code"), col = createHtmlElementFunction("col"), colgroup = createHtmlElementFunction("colgroup"), command = createHtmlElementFunction("command"),
    datagrid = createHtmlElementFunction("datagrid"), datalist = createHtmlElementFunction("datalist"), dd = createHtmlElementFunction("dd"), del = createHtmlElementFunction("del"), details = createHtmlElementFunction("details"), dfn = createHtmlElementFunction("dfn"), dialog = createHtmlElementFunction("dialog"), dir = createHtmlElementFunction("dir"), div = createHtmlElementFunction("div"), dl = createHtmlElementFunction("dl"), dt = createHtmlElementFunction("dt"),
    em = createHtmlElementFunction("em"), embed = createHtmlElementFunction("embed"), eventsource = createHtmlElementFunction("eventsource"), fieldset = createHtmlElementFunction("fieldset"), figcaption = createHtmlElementFunction("figcaption"), figure = createHtmlElementFunction("figure"), font = createHtmlElementFunction("font"), footer = createHtmlElementFunction("footer"), form = createHtmlElementFunction("form"), frame = createHtmlElementFunction("frame"), frameset = createHtmlElementFunction("frameset"),
    h1 = createHtmlElementFunction("h1"), h2 = createHtmlElementFunction("h2"), h3 = createHtmlElementFunction("h3"), h4 = createHtmlElementFunction("h4"), h5 = createHtmlElementFunction("h5"), h6 = createHtmlElementFunction("h6"), head = createHtmlElementFunction("head"), header = createHtmlElementFunction("header"), hgroup = createHtmlElementFunction("hgroup"), hr = createHtmlElementFunction("hr"),
    i = createHtmlElementFunction("i"), iframe = createHtmlElementFunction("iframe"), img = createHtmlElementFunction("img"), input = createHtmlElementFunction("input"), ins = createHtmlElementFunction("ins"), isindex = createHtmlElementFunction("isindex"),
    kbd = createHtmlElementFunction("kbd"), keygen = createHtmlElementFunction("keygen"),
    label = createHtmlElementFunction("label"), legend = createHtmlElementFunction("legend"), li = createHtmlElementFunction("li"), link = createHtmlElementFunction("link"),
    map = createHtmlElementFunction("map"), mark = createHtmlElementFunction("mark"), menu = createHtmlElementFunction("menu"), meta = createHtmlElementFunction("meta"),
    meter = createHtmlElementFunction("meter"), nav = createHtmlElementFunction("nav"),
    noframes = createHtmlElementFunction("noframes"), noscript = createHtmlElementFunction("noscript"), ol = createHtmlElementFunction("ol"), optgroup = createHtmlElementFunction("optgroup"), option = createHtmlElementFunction("option"), output = createHtmlElementFunction("output"),
    p = createHtmlElementFunction("p"), param = createHtmlElementFunction("param"), pre = createHtmlElementFunction("pre"), progress = createHtmlElementFunction("progress"),
    q = createHtmlElementFunction("q"),
    rp = createHtmlElementFunction("rp"), rt = createHtmlElementFunction("rt"), ruby = createHtmlElementFunction("ruby"),
    s = createHtmlElementFunction("s"), samp = createHtmlElementFunction("samp"), script = createHtmlElementFunction("script"), section = createHtmlElementFunction("section"), select = createHtmlElementFunction("select"), small = createHtmlElementFunction("small"), source = createHtmlElementFunction("source"), span = createHtmlElementFunction("span"), strike = createHtmlElementFunction("strike"), strong = createHtmlElementFunction("strong"), style = createHtmlElementFunction("style"), sub = createHtmlElementFunction("sub"), sup = createHtmlElementFunction("sup"),
    table = createHtmlElementFunction("table"), tbody = createHtmlElementFunction("tbody"), td = createHtmlElementFunction("td"), textarea = createHtmlElementFunction("textarea"), tfoot = createHtmlElementFunction("tfoot"), th = createHtmlElementFunction("th"), thead = createHtmlElementFunction("thead"), time = createHtmlElementFunction("time"), title = createHtmlElementFunction("title"), tr = createHtmlElementFunction("tr"), track = createHtmlElementFunction("track"), tt = createHtmlElementFunction("tt"),
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


const Html = function () {
    var $class = _class("Html").extends(Dom)({
        const$isHtml: true,
        __call(...args) {
            return createEl(...args);
        }
    });
    return $class
}();

Html.static = function (props) {
    if (isObject(props)) {
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
    Loop: Loop, ForEach: ForEach, ForDown: ForDown,
    a: a, abbr: abbr, acronym: acronym, address: address, applet: applet, area: area, article: article, aside: aside, audio: audio,
    b: b, base: base, basefont: basefont, bb: bb, bdo: bdo, big: big, blockquote: blockquote, body: body, br: br, button: button,
    canvas: canvas, caption: caption, center: center, cite: cite, code: code, col: col, colgroup: colgroup, command: command,
    datagrid: datagrid, datalist: datalist, dd: dd, del: del, details: details, dfn: dfn, dialog: dialog, dir: dir, div: div, dl: dl, dt: dt,
    em: em, embed: embed, eventsource: eventsource, fieldset: fieldset, figcaption: figcaption, figure: figure, font: font, footer: footer, form: form, frame: frame, frameset: frameset,
    h1: h1, h2: h2, h3: h3, h4: h4, h5: h5, h6: h6, head: head, header: header, hgroup: hgroup, hr: hr,
    i: i, iframe: iframe, img: img, input: input, ins: ins, isindex: isindex,
    kbd: kbd, keygen: keygen,
    label: label, legend: legend, li: li, link: link,
    map: map, mark: mark, menu: menu, meta: meta,
    meter: meter, nav: nav,
    noframes: noframes, noscript: noscript, ol: ol, optgroup: optgroup, option: option, output: output,
    p: p, param: param, pre: pre, progress: progress,
    q: q,
    rp: rp, rt: rt, ruby: ruby,
    s: s, samp: samp, script: script, section: section, select: select, small: small, source: source, span: span, strike: strike, strong: strong, style: style, sub: sub, sup: sup,
    table: table, tbody: tbody, td: td, textarea: textarea, tfoot: tfoot, th: th, thead: thead, time: time, title: title, tr: tr, track: track, tt: tt,
    u: u, ul: ul,
    video: video,
    wbr: wbr,

});


export default Html;
export {
  a,
  A,
  abbr,
  Abbr,
  acronym,
  Acronym,
  address,
  Address,
  applet,
  Applet,
  area,
  Area,
  article,
  Article,
  aside,
  Aside,
  audio,
  Audio,
  b,
  B,
  base,
  Base,
  basefont,
  Basefont,
  bb,
  Bb,
  bdo,
  Bdo,
  big,
  Big,
  blockquote,
  Blockquote,
  body,
  Body,
  br,
  Br,
  button,
  Button,
  canvas,
  Canvas,
  caption,
  Caption,
  center,
  Center,
  cite,
  Cite,
  code,
  Code,
  col,
  Col,
  colgroup,
  Colgroup,
  command,
  Command,
  createElementClass,
  createHtmlElementFunction,
  datagrid,
  Datagrid,
  datalist,
  Datalist,
  dd,
  Dd,
  del,
  Del,
  details,
  Details,
  dfn,
  Dfn,
  dialog,
  Dialog,
  dir,
  Dir,
  div,
  Div,
  dl,
  Dl,
  dt,
  Dt,
  em,
  Em,
  embed,
  Embed,
  eventsource,
  Eventsource,
  fieldset,
  Fieldset,
  figcaption,
  Figcaption,
  figure,
  Figure,
  font,
  Font,
  footer,
  Footer,
  ForDown,
  ForEach,
  form,
  Form,
  frame,
  Frame,
  frameset,
  Frameset,
  h1,
  H1,
  h2,
  H2,
  h3,
  H3,
  h4,
  H4,
  h5,
  H5,
  h6,
  H6,
  head,
  Head,
  header,
  Header,
  hgroup,
  Hgroup,
  hr,
  Hr,
  Html,
  i,
  I,
  iframe,
  Iframe,
  img,
  Img,
  input,
  Input,
  ins,
  Ins,
  isindex,
  Isindex,
  kbd,
  Kbd,
  keygen,
  Keygen,
  label,
  Label,
  legend,
  Legend,
  li,
  Li,
  link,
  Link,
  Loop,
  map,
  Map,
  mark,
  Mark,
  menu,
  Menu,
  meta,
  Meta,
  meter,
  Meter,
  nav,
  Nav,
  noframes,
  Noframes,
  noscript,
  Noscript,
  ol,
  Ol,
  optgroup,
  Optgroup,
  option,
  Option,
  output,
  Output,
  p,
  P,
  param,
  Param,
  pre,
  Pre,
  progress,
  Progress,
  q,
  Q,
  rp,
  Rp,
  rt,
  Rt,
  ruby,
  Ruby,
  s,
  S,
  samp,
  Samp,
  script,
  Script,
  section,
  Section,
  select,
  Select,
  small,
  Small,
  source,
  Source,
  span,
  Span,
  strike,
  Strike,
  strong,
  Strong,
  style,
  Style,
  sub,
  Sub,
  sup,
  Sup,
  table,
  Table,
  tbody,
  Tbody,
  td,
  Td,
  textarea,
  Textarea,
  tfoot,
  Tfoot,
  th,
  Th,
  thead,
  Thead,
  time,
  Time,
  title,
  Title,
  tr,
  Tr,
  track,
  Track,
  tt,
  Tt,
  u,
  U,
  ul,
  Ul,
  video,
  Video,
  wbr,
  Wbr,
};