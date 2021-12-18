import { __read, __spreadArray } from "tslib";
import { assignValue, getArguments, isEmpty, isObject, isString, _defineProperty } from '../utils.js';
// import Dom, { $, Query, query } from './dom.js';
import createClass, { _class } from '../es5-class.js';
import Dom, { getDomInf, inputTypes, inputTags, createEl, create } from './dom.js';
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
                    if (typeof fn == "function")
                        prop.__constructor__ = fn;
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
                if (args[0].match(/^(\.|\#|\[|\:)[A-Za-z_\-]+/i) !== null) {
                    var a = getDomInf(args[0]);
                    if (a.isElement) {
                        if (a.isDefault) {
                            args[0] = tag.toLowerCase() + args[0];
                        }
                        else {
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
                if (this.srcSync)
                    this.attr('src', value);
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
                            }
                            else {
                                var a = getDomInf(vl);
                                if (a.isElement) {
                                    if (a.isDefault) {
                                        createArgs.push(tag.toLowerCase() + args[0]);
                                        hasTag = true;
                                    }
                                    else {
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
                if (src && !attrs.src)
                    attrs.src = src;
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
                if (this.valueSync)
                    this.val(value);
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
                        createArgs.push(args[0]);
                    }
                    else {
                        var inputOptions = {
                            type: "",
                            name: "",
                            value: "",
                            default: "",
                            data: {}
                        };
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
                                        }
                                        ;
                                        if (!isEmpty(a.props))
                                            assignValue(inputOptions, a.props);
                                        if (a.className) {
                                            inputOptions.className = a.className;
                                        }
                                        if (a.id) {
                                            inputOptions.id = a.id;
                                        }
                                    }
                                    else {
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
                        if (!inputOptions.type)
                            inputOptions.type = 'text';
                        createArgs.push(inputOptions);
                    }
                }
                if (createArgs.length) {
                    var elem = input1.apply(this, createArgs);
                    var el = elem.el;
                    if (el) {
                        if (!el.id && this.id)
                            el.id = this.id;
                        if (!el.className && this.className)
                            el.className = this.className;
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
function createHtmlElementFunction(tag) {
    var tagName = tag.toLowerCase();
    var fn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length && isString(args[0])) {
            if (args[0].match(/^(\.|\#|\[|\:)[A-Za-z_\-]+/i) !== null) {
                var a = getDomInf(args[0]);
                if (a.isElement) {
                    if (a.isDefault) {
                        args[0] = tag.toLowerCase() + args[0];
                    }
                    else {
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
        return createEl.apply(void 0, __spreadArray([], __read(args), false));
    };
    if (tagName == "input") {
        fn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var createArgs = [];
            var domEls = [];
            if (args.length) {
                if (isObject(args[0]) && !args[0].isDom) {
                    createArgs.push(args[0]);
                }
                else {
                    var inputOptions = {
                        type: "",
                        name: "",
                        value: "",
                        default: "",
                        data: {}
                    };
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
                                    }
                                    ;
                                    if (!isEmpty(a.props))
                                        assignValue(inputOptions, a.props);
                                    if (a.className) {
                                        inputOptions.className = a.className;
                                    }
                                    if (a.id) {
                                        inputOptions.id = a.id;
                                    }
                                }
                                else {
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
                    if (!inputOptions.type)
                        inputOptions.type = 'text';
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
    }
    else if (tagName == "img") {
        fn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
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
                        }
                        else {
                            var a = getDomInf(vl);
                            if (a.isElement) {
                                if (a.isDefault) {
                                    createArgs.push(tag.toLowerCase() + args[0]);
                                    hasTag = true;
                                }
                                else {
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
            if (src && !attrs.src)
                attrs.src = src;
            createArgs.push(attrs);
            return createEl.apply(void 0, __spreadArray([], __read(args), false));
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
        var boot = null, init = null;
        for (var prop in args) {
            if (args.hasOwnProperty(prop)) {
                var val = args[prop];
                var p_1 = prop.toLowerCase();
                if (p_1 == 'type') {
                    var v = (typeof val == 'string') ? val.toLowerCase() : 'text';
                    type = v;
                    if (v == 'textarea') {
                        tagName = v;
                        ignore.push("type", "value");
                    }
                    else if (v == "select") {
                        tagName = "select";
                        ignore.push("type", "value", "data");
                    }
                    else {
                        attrs[p_1] = v;
                    }
                }
                else if (ignore.indexOf(p_1) >= 0) {
                    // next
                }
                else if (p_1 == "init") {
                    init = val;
                }
                else if (p_1 == "boot") {
                    boot = val;
                }
                else {
                    attrs[prop] = val;
                }
                if (p_1 == 'value') {
                    value = val;
                }
                else if (p_1 == 'data') {
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
                }
                else {
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
                        var option_1 = { value: vl };
                        if (vl == value) {
                            option_1.selected = "selected";
                        }
                        content.push(createEl('option', text, option_1));
                    }
                }
            }
        }
        else if (type == "textarea") {
            content = value;
        }
        else {
            content = attributes;
        }
        return create.call(this, tagName, attributes, content, boot, init);
    }
    return null;
}
;
function input2(args) {
    if (typeof args == "object") {
        var tagName = 'input';
        var attrs = {};
        var content = null;
        var value = null;
        var type = "text";
        var ignore = [];
        var data = [];
        var boot = null, init = null;
        for (var prop in args) {
            if (args.hasOwnProperty(prop)) {
                var val = args[prop];
                var p_2 = prop.toLowerCase();
                if (p_2 == 'type') {
                    var v = (typeof val == 'string') ? val.toLowerCase() : 'text';
                    type = v;
                    if (v == 'textarea') {
                        tagName = v;
                        ignore.push("type", "value");
                    }
                    else if (v == "select") {
                        tagName = "select";
                        ignore.push("type", "value", "data");
                    }
                    else {
                        attrs[p_2] = v;
                    }
                }
                else if (ignore.indexOf(p_2) >= 0) {
                    // next
                }
                else if (p_2 == "init") {
                    init = val;
                }
                else if (p_2 == "boot") {
                    boot = val;
                }
                else {
                    attrs[prop] = val;
                }
                if (p_2 == 'value') {
                    value = val;
                }
                else if (p_2 == 'data') {
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
                }
                else {
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
                        var option_2 = { value: vl };
                        if (vl == value) {
                            option_2.selected = "selected";
                        }
                        content.push(createEl('option', text, option_2));
                    }
                }
            }
        }
        else if (type == "textarea") {
            content = value;
        }
        else {
            content = attributes;
        }
        return createEl(tagName, attributes, content, boot, init);
    }
    return null;
}
;
var A = createElementClass("a"), Abbr = createElementClass("abbr"), Acronym = createElementClass("acronym"), Address = createElementClass("address"), Applet = createElementClass("applet"), Area = createElementClass("area"), Article = createElementClass("article"), Aside = createElementClass("aside"), Audio = createElementClass("audio");
var B = createElementClass("b"), Base = createElementClass("base"), Basefont = createElementClass("basefont"), Bb = createElementClass("bb"), Bdo = createElementClass("bdo"), Big = createElementClass("big"), Blockquote = createElementClass("blockquote"), Body = createElementClass("body"), Br = createElementClass("br"), Button = createElementClass("button");
var Canvas = createElementClass("canvas"), Caption = createElementClass("caption"), Center = createElementClass("center"), Cite = createElementClass("cite"), Code = createElementClass("code"), Col = createElementClass("col"), Colgroup = createElementClass("colgroup"), Command = createElementClass("command");
var Datagrid = createElementClass("datagrid"), Datalist = createElementClass("datalist"), Dd = createElementClass("dd"), Del = createElementClass("del"), Details = createElementClass("details"), Dfn = createElementClass("dfn"), Dialog = createElementClass("dialog"), Dir = createElementClass("dir"), Div = createElementClass("div"), Dl = createElementClass("dl"), Dt = createElementClass("dt");
var Em = createElementClass("em"), Embed = createElementClass("embed"), Eventsource = createElementClass("eventsource");
var Fieldset = createElementClass("fieldset"), Figcaption = createElementClass("figcaption"), Figure = createElementClass("figure"), Font = createElementClass("font"), Footer = createElementClass("footer"), Form = createElementClass("form"), Frame = createElementClass("frame"), Frameset = createElementClass("frameset");
var H1 = createElementClass("h1"), H2 = createElementClass("h2"), H3 = createElementClass("h3"), H4 = createElementClass("h4"), H5 = createElementClass("h5"), H6 = createElementClass("h6"), Head = createElementClass("head"), Header = createElementClass("header"), Hgroup = createElementClass("hgroup"), Hr = createElementClass("hr");
var I = createElementClass("i"), Iframe = createElementClass("iframe"), Img = createElementClass("img"), Input = createElementClass("input"), Ins = createElementClass("ins"), Isindex = createElementClass("isindex");
var Kbd = createElementClass("kbd"), Keygen = createElementClass("keygen");
var Label = createElementClass("label"), Legend = createElementClass("legend"), Li = createElementClass("li"), Link = createElementClass("link");
var Map = createElementClass("map"), Mark = createElementClass("mark"), Menu = createElementClass("menu"), Meta = createElementClass("meta"), Meter = createElementClass("meter");
var Nav = createElementClass("nav"), Noframes = createElementClass("noframes"), Noscript = createElementClass("noscript");
var Ol = createElementClass("ol"), Optgroup = createElementClass("optgroup"), Option = createElementClass("option"), Output = createElementClass("output");
var P = createElementClass("p"), Param = createElementClass("param"), Pre = createElementClass("pre"), Progress = createElementClass("progress");
var Q = createElementClass("q");
var Rp = createElementClass("rp"), Rt = createElementClass("rt"), Ruby = createElementClass("ruby"), S = createElementClass("s");
var Samp = createElementClass("samp"), Script = createElementClass("script"), Section = createElementClass("section"), Select = createElementClass("select"), Small = createElementClass("small"), Source = createElementClass("source"), Span = createElementClass("span"), Strike = createElementClass("strike"), Strong = createElementClass("strong"), Style = createElementClass("style"), Sub = createElementClass("sub"), Sup = createElementClass("sup");
var Table = createElementClass("table"), Tbody = createElementClass("tbody"), Td = createElementClass("td"), Textarea = createElementClass("textarea"), Tfoot = createElementClass("tfoot"), Th = createElementClass("th"), Thead = createElementClass("thead"), Time = createElementClass("time"), Title = createElementClass("title"), Tr = createElementClass("tr"), Track = createElementClass("track"), Tt = createElementClass("tt");
var U = createElementClass("u"), Ul = createElementClass("ul");
var Video = createElementClass("video");
var Wbr = createElementClass("wbr");
var a = createHtmlElementFunction("a"), abbr = createHtmlElementFunction("abbr"), acronym = createHtmlElementFunction("acronym"), address = createHtmlElementFunction("address"), applet = createHtmlElementFunction("applet"), area = createHtmlElementFunction("area"), article = createHtmlElementFunction("article"), aside = createHtmlElementFunction("aside"), audio = createHtmlElementFunction("audio"), b = createHtmlElementFunction("b"), base = createHtmlElementFunction("base"), basefont = createHtmlElementFunction("basefont"), bb = createHtmlElementFunction("bb"), bdo = createHtmlElementFunction("bdo"), big = createHtmlElementFunction("big"), blockquote = createHtmlElementFunction("blockquote"), body = createHtmlElementFunction("body"), br = createHtmlElementFunction("br"), button = createHtmlElementFunction("button"), canvas = createHtmlElementFunction("canvas"), caption = createHtmlElementFunction("caption"), center = createHtmlElementFunction("center"), cite = createHtmlElementFunction("cite"), code = createHtmlElementFunction("code"), col = createHtmlElementFunction("col"), colgroup = createHtmlElementFunction("colgroup"), command = createHtmlElementFunction("command"), datagrid = createHtmlElementFunction("datagrid"), datalist = createHtmlElementFunction("datalist"), dd = createHtmlElementFunction("dd"), del = createHtmlElementFunction("del"), details = createHtmlElementFunction("details"), dfn = createHtmlElementFunction("dfn"), dialog = createHtmlElementFunction("dialog"), dir = createHtmlElementFunction("dir"), div = createHtmlElementFunction("div"), dl = createHtmlElementFunction("dl"), dt = createHtmlElementFunction("dt"), em = createHtmlElementFunction("em"), embed = createHtmlElementFunction("embed"), eventsource = createHtmlElementFunction("eventsource"), fieldset = createHtmlElementFunction("fieldset"), figcaption = createHtmlElementFunction("figcaption"), figure = createHtmlElementFunction("figure"), font = createHtmlElementFunction("font"), footer = createHtmlElementFunction("footer"), form = createHtmlElementFunction("form"), frame = createHtmlElementFunction("frame"), frameset = createHtmlElementFunction("frameset"), h1 = createHtmlElementFunction("h1"), h2 = createHtmlElementFunction("h2"), h3 = createHtmlElementFunction("h3"), h4 = createHtmlElementFunction("h4"), h5 = createHtmlElementFunction("h5"), h6 = createHtmlElementFunction("h6"), head = createHtmlElementFunction("head"), header = createHtmlElementFunction("header"), hgroup = createHtmlElementFunction("hgroup"), hr = createHtmlElementFunction("hr"), i = createHtmlElementFunction("i"), iframe = createHtmlElementFunction("iframe"), img = createHtmlElementFunction("img"), input = createHtmlElementFunction("input"), ins = createHtmlElementFunction("ins"), isindex = createHtmlElementFunction("isindex"), kbd = createHtmlElementFunction("kbd"), keygen = createHtmlElementFunction("keygen"), label = createHtmlElementFunction("label"), legend = createHtmlElementFunction("legend"), li = createHtmlElementFunction("li"), link = createHtmlElementFunction("link"), map = createHtmlElementFunction("map"), mark = createHtmlElementFunction("mark"), menu = createHtmlElementFunction("menu"), meta = createHtmlElementFunction("meta"), meter = createHtmlElementFunction("meter"), nav = createHtmlElementFunction("nav"), noframes = createHtmlElementFunction("noframes"), noscript = createHtmlElementFunction("noscript"), ol = createHtmlElementFunction("ol"), optgroup = createHtmlElementFunction("optgroup"), option = createHtmlElementFunction("option"), output = createHtmlElementFunction("output"), p = createHtmlElementFunction("p"), param = createHtmlElementFunction("param"), pre = createHtmlElementFunction("pre"), progress = createHtmlElementFunction("progress"), q = createHtmlElementFunction("q"), rp = createHtmlElementFunction("rp"), rt = createHtmlElementFunction("rt"), ruby = createHtmlElementFunction("ruby"), s = createHtmlElementFunction("s"), samp = createHtmlElementFunction("samp"), script = createHtmlElementFunction("script"), section = createHtmlElementFunction("section"), select = createHtmlElementFunction("select"), small = createHtmlElementFunction("small"), source = createHtmlElementFunction("source"), span = createHtmlElementFunction("span"), strike = createHtmlElementFunction("strike"), strong = createHtmlElementFunction("strong"), style = createHtmlElementFunction("style"), sub = createHtmlElementFunction("sub"), sup = createHtmlElementFunction("sup"), table = createHtmlElementFunction("table"), tbody = createHtmlElementFunction("tbody"), td = createHtmlElementFunction("td"), textarea = createHtmlElementFunction("textarea"), tfoot = createHtmlElementFunction("tfoot"), th = createHtmlElementFunction("th"), thead = createHtmlElementFunction("thead"), time = createHtmlElementFunction("time"), title = createHtmlElementFunction("title"), tr = createHtmlElementFunction("tr"), track = createHtmlElementFunction("track"), tt = createHtmlElementFunction("tt"), u = createHtmlElementFunction("u"), ul = createHtmlElementFunction("ul"), video = createHtmlElementFunction("video"), wbr = createHtmlElementFunction("wbr");
/**
 * Tạo đối tượng dom
 * @param {string|object} selector
 * @param {string|Element|string[]|Element[]} children
 * @param {object} attributes
 * @returns {DomFactory}
 * @note {string} Đoạn này thật ra không cần thiết. nhưng viết bào để trình soạn thảo sử dụng gợi ỳ
 */
var Html = function () {
    var $class = _class("Html").extends(Dom)({
        const$isHtml: true,
        __call: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return createEl.apply(void 0, __spreadArray([], __read(args), false));
        }
    });
    return $class;
}();
Html.static = function (props) {
    if (isObject(props)) {
        for (var key in props) {
            if (Object.hasOwnProperty.call(props, key)) {
                var vl = props[key];
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: true,
                    value: vl
                });
            }
        }
    }
};
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
export { createElementClass, Html, A, Abbr, Acronym, Address, Applet, Area, Article, Aside, Audio, B, Base, Basefont, Bb, Bdo, Big, Blockquote, Body, Br, Button, Canvas, Caption, Center, Cite, Code, Col, Colgroup, Command, Datagrid, Datalist, Dd, Del, Details, Dfn, Dialog, Dir, Div, Dl, Dt, Em, Embed, Eventsource, Fieldset, Figcaption, Figure, Font, Footer, Form, Frame, Frameset, H1, H2, H3, H4, H5, H6, Head, Header, Hgroup, Hr, I, Iframe, Img, Input, Ins, Isindex, Kbd, Keygen, Label, Legend, Li, Link, Map, Mark, Menu, Meta, Meter, Nav, Noframes, Noscript, Ol, Optgroup, Option, Output, P, Param, Pre, Progress, Q, Rp, Rt, Ruby, S, Samp, Script, Section, Select, Small, Source, Span, Strike, Strong, Style, Sub, Sup, Table, Tbody, Td, Textarea, Tfoot, Th, Thead, Time, Title, Tr, Track, Tt, U, Ul, Video, Wbr, a, abbr, acronym, address, applet, area, article, aside, audio, b, base, basefont, bb, bdo, big, blockquote, body, br, button, canvas, caption, center, cite, code, col, colgroup, command, datagrid, datalist, dd, del, details, dfn, dialog, dir, div, dl, dt, em, embed, eventsource, fieldset, figcaption, figure, font, footer, form, frame, frameset, h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, i, iframe, img, input, ins, isindex, kbd, keygen, label, legend, li, link, map, mark, menu, meta, meter, nav, noframes, noscript, ol, optgroup, option, output, p, param, pre, progress, q, rp, rt, ruby, s, samp, script, section, select, small, source, span, strike, strong, style, sub, sup, table, tbody, td, textarea, tfoot, th, thead, time, title, tr, track, tt, u, ul, video, wbr };
