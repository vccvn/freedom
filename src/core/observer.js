
'use strict';

import {
  _instanceof,
  getType,
  isFunction,
  Str,
} from './utils.js';

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





var config = ({
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


/**
 * 
 * @param {*} value giá trị
 * @param {function(*):void} change 
 * @returns {function(*):*}
 */
function getPrimitiveValue(value, change) {
    return function Primitive(newValue) {
        var type = getType(newValue);
        value = newValue;
        if (typeof change == "function") {
            change(value);
        }
        return value;
    };

}


function getPrimitive(value, parent) {
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
            primitive = getPrimitiveValue(value, function change(v) {
                value = v;
            });
            break;
    }

    defConst(primitive, 'isPrimitive', true);
    defConst(primitive, 'is' + Str.ucfirst(getType(value)), true);


    defConst(primitive, '__toData__', function (fn) {
        if ((isObject(this) || isFunction(this)) && typeof this.__toData__ == "function") return this.__toData__();
        return value;
    });
    defConst(primitive, 'addParent', function (parent) {
        if ((isObject(this) || isFunction(this)) && typeof this.__toData__ == "function") return this.__toData__();
        return value;
    });

    defConst(primitive, 'toString', function (fn) {
        return this.__toData__();
    });

    primitive.parents = [];
    primitive.listeners = [];
    if (_instanceof(parent, Observer)) {
        primitive.parents.push(parent);
    }

    /**
     * thêm cha
     * @param {Observer} parent doi tuong cha
     */
    defConst(primitive, 'addParent', function addParent(parent) {
        if (_instanceof(parent, Observer) && this.indexOf(parent) == -1) {
            this.parents.push(parent);
            var self = this;
            const tasks = this.listeners;
            if (isArray(tasks)) {
                let keys = key.split(".");
                tasks.map(task => {
                    parent.onTransfer(self, keys, task);
                });
            }
        }
    })

    /**
     * lắng nghe sự kiện
     * @param {string} key key muốn theo dõi thay đổi
     * @param {function(*, *, string)} listen hàm xử lý
     */
    defConst(primitive, 'addEventListener', function (listen) {
        var self = this;
        if (this.parents.length == 0) {
            this.listeners.push(listen);
            return this
        }

        this.parents.map(function (parent) {
            parent.onTransfer(self, [], listen);
        });
        return this;
    })
    /**
     * Theo dõi thay đổi của giá trị
     * @param {function(newValue, oldValue, fulKey)} listen hàm xử lý
     */
    defConst(primitive, 'subscribe', function subscribe(listen) {
        return this.addEventListener.call(this, listen);
    });

    /**
     * Theo dõi thay đổi của giá trị
     * @param {function(newValue, oldValue, fulKey)} listen hàm xử lý
     */
    defConst(primitive, 'on', function on(listen) {
        return this.addEventListener.call(this, listen);
    });


    /**
     * Theo dõi thay đổi của giá trị
     * @param {any} value hàm xử lý
     * @param {any} old hàm xử lý
     */
    defConst(primitive, 'dispatch', function dispatch(value, old) {
        var t = target ? target : this;
        var self = this;
        if (!this.parents.length) {
            if (key === undefined) {
                key = obsDefaultKey;
                value = this.value;
                old = this.value;
                target = this.value;
            }

            if (typeof this.listeners != "undefined") {
                if (isArray(this.listeners)) {
                    for (let index = 0; index < this.listeners.length; index++) {
                        const fn = this.listeners[index];
                        if (typeof fn == "function") {
                            fn(value, old);
                        }
                    }
                }
            }
        }
        else {
            this.parents.map(function (parent) {
                parent.onDispatch([], self);
            });
            return this;
        }

    })


    /**
     * Theo dõi thay đổi của giá trị
     * @param {string} key key muốn theo dõi thay đổi
     * @param {any} value hàm xử lý
     * @param {any} old hàm xử lý
     */
    defConst(primitive, 'emit', function emit(value, old) {
        return this.addEventListener.call(this, value, old);
    });

    return primitive;
}

function parsePrimitive(value) {
    if ((isObject(value) && (value.isArrayData || value.isObjectData || value.isPrimitive)) || (isFunction(value) && value.isPrimitive)) return value;
    return getPrimitive(value);
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
    this.parents = _instanceof(parent, Observer) ? [parent] : [];
    this.listeners = {};
    this.indexKeys = [];
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
    this.indexKeys = keys;
    for (var i = 0; i < keys.length; i++) {
        defineReactive$$1.call(this, obj, keys[i]);
    }

};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray(items) {
    this.indexKeys = [];
    for (var i = 0, l = items.length; i < l; i++) {
        this.indexKeys.push(i);
        observe(items[i], this);
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


    if (this.parents.length == 0) {
        this.addEventListener(keys.join("."), listen);
    }
    else {
        var self = this;
        this.parents.map(function (parent) {
            parent.onTransfer(self, keys, listen);
        });

    }
    return this;
}
/**
 * thêm cha
 * @param {Observer} parent doi tuong cha
 */
Observer.prototype.addParent = function addParent(parent) {
    if (_instanceof(parent, Observer) && this.indexOf(parent) == -1) {
        this.parents.push(parent);
        var self = this;
        for (const key in this.listeners) {
            if (Object.hasOwnProperty.call(this.listeners, key)) {
                const tasks = this.listeners[key];
                if (isArray(tasks)) {
                    let keys = key.split(".");
                    tasks.map(task => {
                        parent.onTransfer(self, keys, task);
                    });
                }
            }
        }
    }
}

/**
 * lắng nghe sự kiện
 * @param {string} key key muốn theo dõi thay đổi
 * @param {function(*, *, string)} listen hàm xử lý
 */
Observer.prototype.addEventListener = function (key, listen) {
    var self = this;
    if (this.parents.length == 0) {
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
        this.parents.map(function (parent) {
            parent.onTransfer(self, [], listen);
        });
        return this
    }
    if (typeof listen != "function") return this;
    this.parents.map(function (parent) {
        parent.onTransfer(self, [key], listen);
    });


    return this

}
/**
 * Theo dõi thay đổi của giá trị
 * @param {string} key key muốn theo dõi thay đổi
 * @param {function(newValue, oldValue, fulKey)} listen hàm xử lý
 */
Observer.prototype.subscribe = function subscribe(key, listen) {
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

    var self = this;
    if (this.parents.length) {
        return this.parents.map(function (parent) {
            parent.onDispatch(changes, self);
        });
    }
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
    var self = this;
    if (!this.parents.length) {
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
            this.parents.map(function (parent) {
                parent.onDispatch([], self);
            });
            return this;
        }

        this.parents.map(function (parent) {
            parent.onDispatch([{
                key: key,
                value: value,
                old: old,
                target: t
            }], self);
        });

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
function observe(value, parent) {
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
    if (parent && ob.parents.indexOf(parent) == -1) {
        ob.addParent(parent);
    }
    return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1(obj, key, val, customSetter, shallow) {
    // var dep = new Dep();

    var self = this;
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

    var childOb = !shallow && observe(val, this);
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            var value = getter ? getter.call(obj) : val;
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
            childOb = !shallow && observe(newVal, self);
            obj.__ob__.dispatch(key, val, old, obj);
        }
    });
}

export { defConst, defProp, observe, parsePrimitive };