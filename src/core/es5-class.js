import { assignValue, date, inArray, isArray, isEmpty, isFunction, isNumber, isObject, isString, Num, Str, getArguments, _defineProperty, _instanceof, destroyObject } from "./utils.js";

const NORETURN_VALUE = date('time') + '-' + Str.rand(Str.rand(date('ms') + "-" + Num.rand(0, 999999)));
const getArgs = getArguments;

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

const classContainers = {};

const classInstanceData = {};

function addClass($class) {
    for (const key in classContainers) {
        if (Object.hasOwnProperty.call(classContainers, key)) {
            const classData = classContainers[key];
            if(classData.$class == $class) return classData;
            
        }
    }
    let classIndexKey = Str.rand(Date.now());
    
    classContainers[classIndexKey] = {
        $class: $class,
        id : classIndexKey
    };
    Object.defineProperty($class.prototype, '__CLASS_ID__', {
        configurable: false,
        writable: false,
        enumerable: false,
        value: classIndexKey
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
    return classContainers[classIndexKey];
}
function getClassIndex($class) {
    for (const key in classContainers) {
        if (Object.hasOwnProperty.call(classContainers, key)) {
            const classData = classContainers[key];
            if(classData.$class == $class) return key;
            
        }
    }
    return -1
    

}

function addClassData($class, key, value) {
    if (isString(key)) {
        addClass($class)[key] = value;
        return true;
    }
    if (isObject(key)) {
        var index = getClassIndex($class);
        if (index == -1) {
            var cd = addClass($class);
            index = cd.id;
        }
        assignValue(classContainers[index], key);
        return true;
    }
    return false;
}

function getClassData($class) {
    if(isString($class)) return Object.hasOwnProperty.call(classContainers, $class) ? classContainers[key]: false;
    for (const key in classContainers) {
        if (Object.hasOwnProperty.call(classContainers, key)) {
            const classData = classContainers[key];
            if(classData.$class == $class) return classData;
            
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
        destroyObject(classInstanceData[instanceID]);
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
        if (!isString(instanceID)) {
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
        if (isString(key) || isNumber(key)) {
            data[key] = value;
        }
        else if (isObject(key) || isArray(key)) {
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
        if (isString(key) || isNumber(key)) {
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


export const createClass = function (className, makeGlobal) {
    return function _Class() {
        var $className = isString(className) ? Str.replace(Str.clearUnicode(className), [' ', '-', '+'], '') : (isFunction(className) ? className.name : (isFunction(makeGlobal) && makeGlobal.name ? makeGlobal.name : "Class" + Str.rand().substr(4, 4)));
        var hasClassName = isString(className) && className.length;
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

        var iof = _instanceof;


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

        
        var classData = addClass(ES5Class);
        
        var classIndex = classData.id;
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
                    return ES5Class[name].apply(ES5Class, isArray(args) ? args : []);
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
                    _defineProperty(this, key, val);
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

                    if (superData.construct && isFunction(superData.construct)) {
                        if (classData.constructs.indexOf(superData.construct) == -1) {
                            classData.constructs.push(superData.construct);
                        }
                        classData.supers[cn] = superData.construct;
                    }


                    var superExtends = superData.extends;
                    if (!isEmpty(superExtends)) {
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
                            assignValue(classData.extends.accessors, key, superAccessors[key]);
                            _parent[key] = superAccessors[key];
                            if (typeof classData.accessors[key] == "undefined") {
                                classData.accessors[key] = {}
                            }
                            assignValue(classData.accessors[key], superAccessors[key]);

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
                    cn = superClass.name || "parent_" + Str.rand(8);
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

                if (!isEmpty(_parent) && cn) {
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

                        if (inArray(['constructor', ES5Class.__class__], key)) {

                        }
                        else if (isConst(key)) {
                            throwConstError("trait", key, el)
                        }

                        else if (inArray(['boots', 'bootmethods', 'boot', '__boot__'], lk)) {
                            addBootMethod(el);
                        }

                        else if (inArray(['inits', 'initmethods', 'init', '__init__'], lk)) {
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
                } else if (isFunction(props)) {
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

                        else if (inArray(['boots', 'bootmethods', 'boot', '__boot__'], String(key).toLowerCase())) {
                            addBootMethod(el);
                        }

                        else if (inArray(['inits', 'initmethods', 'init', '__init__'], String(key).toLowerCase())) {
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
                        _defineProperty(ES5Class, key, el);

                    }
                }
            }
            else if (typeof props == "string") {
                var key = props;
                classData.static[key] = value;
                _defineProperty(ES5Class, key, el);

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
            if (isObject(props)) {
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
                    if (isObject(prop)) {
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
                        if (!resolved && isObject(rs)) {
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
            if (isObject(props)) {
                for (const key in props) {
                    if (Object.prototype.hasOwnProperty.call(props, key)) {
                        const val = props[key];
                        const s = key.toLowerCase();
                        if (inArray(['__prepare', 'const$__prepare', 'finazl$__prepare', '__prepare__'], s)) {
                            if (typeof val == "function") {
                                classData.prepare.push(val);
                                hp = true;
                            }
                        } else if (inArray(['__commit', 'const$__commit', 'finazl$__commit', '__commit__'], s)) {
                            if (typeof val == "function") {
                                classData.commits.push(val);
                                hp = true;
                            }
                        } else if (inArray(['__commit_after', 'const$__commit_after', 'finazl$__commit_after', '__commit_after__', '__after_commit__', '__aftercommit__', 'aftercommit'], s)) {
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
            var instanceID = $className + "_" + Str.rand() + "_" + date("time");
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


            if (!isEmpty(classData.accessors)) {
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
            if (isString(method) || isFunction(method)) {
                if (classData.boots.indexOf(method) == -1) classData.boots.push(method);
            } else if (isArray(method)) {
                method.map(function (mt) {
                    if (classData.boots.indexOf(mt) == -1) classData.boots.push(mt);
                });
            }
        }

        function addInitMethod(method) {
            if (isString(method) || isFunction(method)) {
                if (classData.inits.indexOf(method) == -1) classData.inits.push(method);
            } else if (isArray(method)) {
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
            if (!isString(key)) return false;
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
                    else if (s == 'onafterset' || s == 'setted' || s == 'afterset') {
                        if (typeof value == "function") {
                            if (typeof classData.accessors[a[1]] == "undefined") {
                                classData.accessors[a[1]] = {};
                            }
                            classData.accessors[a[1]].afterSet = value;
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
                else if (inArray(DynamicCreateKeys, a[1])) {
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
                else if (inArray(DynamicCreateKeys, key)) {
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
            if (isString(key)) {
                if (typeof acData[key] == "undefined") {
                    acData[key] = {}
                }
                acData[key].value = value;
            }
            if (isObject(key)) {
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

            if (ES5Class.prototype[key] !== undefined) return false;
            try {
                var g, s, afs;
                if (typeof classData.accessors[key] == "object") {
                    if (typeof classData.accessors[key].get == "function")
                        g = classData.accessors[key].get;
                    if (typeof classData.accessors[key].set == "function")
                        s = classData.accessors[key].set;
                    if (typeof classData.accessors[key].afterSet == "function")
                        afs = classData.accessors[key].afterSet;
                }

                Object.defineProperty(ES5Class.prototype, key, {
                    get: function get() {
                        var value = getClassInstanceData(this.__instance__id__, key);
                        var f = 'get' + Str.ucfirst(key);
                        if (typeof this[f] == "function") {
                            var r = this[f].call(this, value);
                            if (typeof r != "undefined") return r;
                        }
                        var f2 = 'onGet' + Str.ucfirst(key);
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
                        var f = 'onSet' + Str.ucfirst(key);
                        if (typeof this[f] == "function") {
                            var r2 = this[f].call(this, value, oldVal);
                            if (typeof r2 != "undefined") return r2;
                        }

                        if (s) {
                            var a = s.call(this, value, oldVal);
                            if (a === false) stt = false;
                        }

                        if (stt) {
                            data[key] = value;
                            if(afs) afs.call(this, value);
                        }
                        if(typeof this.__onChangeProp__ == "function"){
                            this.__onChangeProp__(key, value);
                        }
                        
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
                    if (!inArray(['constructor', ES5Class.__class__], key)) {
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
                            assignValue(methods, _extends);
                        }
                        else if (scope == 'props') {
                            assignValue(props, _extends);
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



            if (!isEmpty(classData.accessors)) {
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
                if (inArray(['$onset', 'onset$'], pre)) {
                    if (typeof classData.accessors[n] == "undefined") {
                        classData.accessors[n] = {};
                    }
                    classData.accessors[n].set = handle;
                    return;
                }
                else if (inArray(['$onget', 'onget$'], pre)) {
                    if (typeof classData.accessors[n] == "undefined") {
                        classData.accessors[n] = {};
                    }
                    classData.accessors[n].get = handle;
                    return;
                }
            }
            _defineProperty(ES5Class.prototype, name, handle);

        }

        function parseDataProps() {
            var props = assignValue({}, commitProps);
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
                            var args1 = getArguments(arguments);
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
export default createClass;
export { createInstance, getClassData, _class }
