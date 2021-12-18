import { __read, __spreadArray } from "tslib";
import createClass, { createInstance } from "./es5-class.js";
var App = createClass("App")({
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
        for (var i = 0; i < this.containers.length; i++) {
            var c = this.containers[i];
            if (c._class == _class)
                return true;
        }
        this.containers.push({
            _class: _class,
            _args: isArray(args) ? args : [],
            _instance: null
        });
        return true;
    },
    register: function (_class, args) {
        return this.add(_class, isArray(args) ? args : []);
    },
    remove: function (_class) {
        for (var i = 0; i < this.containers.length; i++) {
            var c = this.containers[i];
            if (c._class == _class) {
                this.containers.splice(i, 1);
                return true;
            }
        }
        return false;
    },
    has: function (_class) {
        for (var i = 0; i < this.containers.length; i++) {
            var c = this.containers[i];
            if (c._class == _class)
                return true;
        }
        return false;
    },
    instance: function (_class, args) {
        for (var i = 0; i < this.containers.length; i++) {
            var c = this.containers[i];
            if (c._class == _class) {
                if (c._instance) {
                    if (!args || args.length == 0) {
                        return c._instance;
                    }
                    return createInstance(c._class, args);
                }
                else {
                    c._instance = createInstance(c._class, args);
                    return c._instance;
                }
            }
        }
        var _instance = createInstance(_class, args);
        this.containers.push({
            _class: _class,
            _args: isArray(args) ? args : [],
            _instance: _instance
        });
        return _instance;
    }
});
var _app = new App();
/**
 * tạo đối tượng
 * @param {*} _class_
 * @param {array} args
 * @returns
 */
var app = function (_class_, args) {
    return _app.instance(_class_, args);
};
Object.defineProperty(app, "containers", {
    configurable: false,
    enumerable: false,
    get: function () {
        return _app.containers;
    },
    set: function (v) {
    }
});
app.add = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return _app.add.apply(_app, __spreadArray([], __read(args), false));
};
app.register = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return _app.register.apply(_app, __spreadArray([], __read(args), false));
};
app.has = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return _app.has.apply(_app, __spreadArray([], __read(args), false));
};
app.remove = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return _app.remove.apply(_app, __spreadArray([], __read(args), false));
};
app.instance = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return _app.instance.apply(_app, __spreadArray([], __read(args), false));
};
export { app, App };
export default app;
