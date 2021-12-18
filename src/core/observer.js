
'use strict';

/**
 * lấy kiểu giá trị của biến
 * @param {*} obj
 * @return {string}
 */
function getType(obj) {
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
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key)
}
/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind(fn, ctx) {
    function boundFn(a) {
        var l = arguments.length;
        return l
            ? l > 1
                ? fn.apply(ctx, arguments)
                : fn.call(ctx, a)
            : fn.call(ctx)
    }

    boundFn._length = fn.length;
    return boundFn
}


/**
 * Mix properties into target object.
 */
function extend(to, _from) {
    for (var key in _from) {
        to[key] = _from[key];
    }
    return to
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop(a, b, c) { }

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys(modules) {
    return modules.reduce(function (keys, m) {
        return keys.concat(m.staticKeys || [])
    }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual(a, b) {
    if (a === b) { return true }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
        try {
            var isArrayA = Array.isArray(a);
            var isArrayB = Array.isArray(b);
            if (isArrayA && isArrayB) {
                return a.length === b.length && a.every(function (e, i) {
                    return looseEqual(e, b[i])
                })
            } else if (a instanceof Date && b instanceof Date) {
                return a.getTime() === b.getTime()
            } else if (!isArrayA && !isArrayB) {
                var keysA = Object.keys(a);
                var keysB = Object.keys(b);
                return keysA.length === keysB.length && keysA.every(function (key) {
                    return looseEqual(a[key], b[key])
                })
            } else {
                /* istanbul ignore next */
                return false
            }
        } catch (e) {
            /* istanbul ignore next */
            return false
        }
    } else if (!isObjectA && !isObjectB) {
        return String(a) === String(b)
    } else {
        return false
    }
}
/*  */



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
    }
};


/**
 * lắng nghe sự kiện
 * @param {Observer} child đối tượng muốn gửi
 * @param {string[]} keys key muốn theo dõi thay đổi
 * @param {function(*, *, string)} listen hàm xử lý
 */
Observer.prototype.onTransfer = function (child, keys, listen) {
    var key = null;
    if(isArray(this.value)){
        for (let index = 0; index < this.value.length; index++) {
            const vl = this.value[index];
            if(vl == child.value) {
                key = String(index);
                break;
            }
        }
    }
    else {
        for (const k in this.value) {
            if (Object.hasOwnProperty.call(this.value, k)) {
                const vl = this.value[k];
                if(vl == child.value){
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
    else{
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
        if(typeof key == "function"){
            listen = key;
            key = obsDefaultKey;
        }
        
        if(typeof this.listeners[key] == "undefined") this.listeners[key] = [];
        this.listeners[key].push(listen);
        return this
    }
    
    if(typeof key == "function"){
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
    if(isArray(this.value)){
        for (let index = 0; index < this.value.length; index++) {
            const vl = this.value[index];
            if(vl == child.value) {
                key = String(index);
                break;
            }
        }
    }
    else {
        for (const k in this.value) {
            if (Object.hasOwnProperty.call(this.value, k)) {
                const vl = this.value[k];
                if(vl == child.value){
                    key = k;
                    break;
                }
            }
        }
    }
    for (let i = 0; i < changes.length; i++) {
        changes[i].key = key+"."+changes[i].key;
    }
    changes.push({
        key: key,
        value: this.value,
        old: this.value,
        target: child.value
    })

    if(this.parent) return this.parent.onDispatch(changes, this);
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
    if(!this.parent){
        if(!key) {
            key = obsDefaultKey;
            value = this.value;
            old = this.value;
            target = this.value;
        }
        
        if(typeof this.listeners[key] != "undefined"){
            if(isArray(this.listeners[key])){
                for (let index = 0; index < this.listeners[key].length; index++) {
                    const fn = this.listeners[key][index];
                    if(typeof fn == "function"){
                        fn(value, old, key);
                    }
                }
            }
        }
    }
    else{
        if(!key) {
            this.onDispatch([], this);
            return this;
        }
        
        this.onDispatch([{
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

    var childOb = !shallow && observe(val);
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


export { observe }