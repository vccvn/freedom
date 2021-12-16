import createClass, { createInstance } from "./es5-class.js";

const App = createClass("App")({
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
                    return createInstance(c._class, args);
                } else {
                    c._instance = createInstance(c._class, args);
                    return c._instance;
                }
            }
        }
        let _instance = createInstance(_class, args);
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
export { app, App };
export default app;