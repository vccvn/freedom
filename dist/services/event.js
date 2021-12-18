import { date, getArguments, isBoolean, isEmpty, isFunction, isObject, isString, objectHasKey } from '../core/utils.js';
var DEFAULT_VALUE = Str.rand(Str.rand(date('ms')));
var EventService = /** @class */ (function () {
    function EventService() {
        this.app = null;
        this._listeners = {};
        this._dispatchedEvents = {};
        this.__subServices = {};
    }
    EventService.prototype.sub = function (id) {
        if (objectHasKey(this.__subServices, id))
            return this.__subServices[id];
        this.__subServices[id] = new (this.constructor);
        return this.__subServices[id];
    };
    EventService.prototype.addSub = function (id, sub) {
        if (!sub) {
            if (objectHasKey(this.__subServices, id)) {
                this.__subServices[id].off();
            }
            this.__subServices[id] = new this.prototype.constructor();
        }
        else {
            if (objectHasKey(this.__subServices, id)) {
                this.__subServices[id].off();
            }
            this.__subServices[id] = sub;
        }
    };
    EventService.prototype.removeSub = function (id) {
        if (id !== undefined && String(id).length) {
            if (objectHasKey(this.__subServices, id)) {
                this.__subServices[id].off();
                delete this.__subServices[id];
            }
        }
        else if (!isEmpty(this.__subServices)) {
            for (var key in this.__subServices) {
                if (Object.prototype.hasOwnProperty.call(this.__subServices, key)) {
                    this.removeSub(key);
                }
            }
        }
    };
    EventService.prototype.onSub = function (id, type, listenner, dispatch) {
        return this.sub(id).on(type, listenner, dispatch);
    };
    EventService.prototype.offSub = function (id, type, listenner) {
        return this.sub(id).off(type, listenner);
    };
    EventService.prototype.addSubEvent = function (id, type, listenner, dispatch) {
        return this.sub(id).addEventListener(type, listenner, dispatch);
    };
    EventService.prototype.removeSubEvent = function (id, type, listenner) {
        return this.sub(id).removeEventListener(type, listenner);
    };
    EventService.prototype.emitSub = function (id, type, listenner, dispatch) {
        return this.sub(id).emit(type, listenner, dispatch);
    };
    /**
     * chuẩn hóa hàn lắng nghe sự kiện
     * @param {function(...args)} handler tên phương thức hoạc hàm handler
     * @returns function
     */
    EventService.prototype.parseEventHandler = function (handler) {
        var self = this;
        if (typeof handler == "function") {
            return handler;
        }
        var fnt = handler ? handler : function (e) {
            console.log(e);
        };
        if (typeof handler == "string") {
            var params = [];
            var handleParams = handler.split(":");
            if (handleParams.length == 2) {
                handler = handleParams[0];
                params = handleParams[1].split(",").map(function (s) { return s.trim(); });
            }
            fnt = function (e) {
                var args = [e];
                params.map(function (p) { args.push(p); });
                if (typeof self[handler] == "function") {
                    return self[handler].apply(self, args);
                }
            };
        }
        return fnt;
    };
    /**
     * lắng nghe sự kiện
     * @param {string} type loại hoạc tên sự kiện
     * @param {function|string} handler hàm hoặc tên phương thức xử lý sự kiện
     * @param {boolean} dispatch Thực thi trên tất cả các sự kiện trước đó
     * @returns this
     */
    EventService.prototype.addEventListener = function (type, handler, dispatch) {
        var self = this;
        var listener = this.parseEventHandler(handler);
        if (this.hasEventListener(type, handler))
            return;
        if (this._listeners === undefined || this._listeners === null)
            this._listeners = {};
        type = String(type).toLowerCase();
        // if (isDomEvent(type)) return this.addDomEvent(type, listener, DEFAULT_VALUE);
        var listeners = this._listeners;
        if (listeners[type] === undefined) {
            listeners[type] = [];
        }
        if (dispatch === true) {
            this.handleDispatchedEvents(type, listener);
        }
        if (listeners[type].indexOf(listener) === -1) {
            listeners[type].push(listener);
        }
        return listener;
    };
    /**
     * Kiểm tra sự kiện có tồn tại hay không
     * @param {string} type tên sự kiện
     * @param {function} listener hàm xử lý
     * @returns {boolean}
     */
    EventService.prototype.hasEventListener = function (type, listener) {
        if (this._listeners === undefined || this._listeners === null)
            return false;
        var listeners = this._listeners;
        type = String(type).toLowerCase();
        return listeners[type] !== undefined && (listener ? listeners[type].indexOf(listener) !== -1 : true);
    };
    /**
     * Xóa / Gỡ sự kiện
     * @param {string} type tên sự kiện
     * @param {function} listener hàm xử lý
     * @returns {boolean}
     */
    EventService.prototype.removeEventListener = function (type, listener) {
        if (this._listeners === undefined || this._listeners === null)
            return false;
        type = String(type).toLowerCase();
        var listeners = this._listeners;
        var listenerArray = listeners[type];
        if (listenerArray !== undefined) {
            if (!listener) {
                this._listeners[type].splice(0, this._listeners[type].length);
                return true;
            }
            var index = listenerArray.indexOf(listener);
            if (index !== -1) {
                listenerArray.splice(index, 1);
                return true;
            }
        }
        return false;
    };
    /**
     * Tạo, gọi ra một sự kiện
     * @param {string|object} event Tên hoặc sự kiện
     * @param {*} data dữ liệu
     * @param {boolean} log lưu lại du lieu khi emit
     * @returns {boolean}
     */
    EventService.prototype.dispatchEvent = function (event, data, log) {
        if (this._listeners === undefined || this._listeners === null || !event)
            return null;
        var e = {};
        if (isString(event)) {
            e.type = event;
            if (data) {
                e.data = data;
            }
            // console.log(event, data);
        }
        else if (isObject(event)) {
            e = event;
            if (!e.type)
                return false;
            if (!e.data && data) {
                e.data = data;
            }
            if (isBoolean(data) && typeof log == "undefined") {
                log = data;
            }
        }
        else {
            return false;
        }
        if (e.constructor === Object)
            e.type = String(e.type).toLowerCase();
        var listeners = this._listeners;
        var listenerArray = listeners[e.type];
        var s = true;
        if (!e.target) {
            e.target = this;
        }
        if (!e.stopImmediatePropagation)
            e.stopImmediatePropagation = function () {
                s = false;
            };
        if (log === true) {
            this.addDispatchedEvent(e);
        }
        if (listenerArray !== undefined) {
            // Make a copy, in case listeners are removed while iterating.
            var array1 = listenerArray.slice(0);
            var rs = [];
            for (var i = 0, l = array1.length; i < l; i++) {
                var a = array1[i].call(this, e);
                if (!s)
                    break;
                if (a !== undefined) {
                    rs.push(a);
                }
            }
            if (s && rs.length) {
                return rs.length == 1 && array1.length == 1 ? rs[0] : rs;
            }
            return s;
        }
    };
    /**
     * lắng nghe sự kiện
     * @param {string} type loại hoạc tên sự kiện
     * @param {function(envent)} listener hàm hoặc tên phương thức xử lý sự kiện
     * @param {boolean} dispatch có cần cần gọi ham voi cac su kien truoc do hay ko
     * @returns this
     */
    EventService.prototype.on = function (type, listener, dispatch) {
        if (isObject(type)) {
            var listeners = {};
            var events = type;
            var d = isBoolean(listener) ? listener : (isBoolean(dispatch) ? dispatch : false);
            for (var key in events) {
                if (Object.hasOwnProperty.call(events, key)) {
                    var fn = type[key];
                    if (isFunction(fn) || isString(fn)) {
                        var fnAdded = this.addEventListener(key, fn, d);
                        if (fnAdded) {
                            listeners[key] = fnAdded;
                        }
                    }
                }
            }
            return listeners;
        }
        return this.addEventListener(type, listener, dispatch);
    };
    /**
     * lắng nghe sự kiện
     * @param {string} type loại hoạc tên sự kiện
     * @param {function|string} listener hàm hoặc tên phương thức xử lý sự kiện
     * @param {boolean} dispatch có cần cần gọi ham voi cac su kien truoc do hay ko
     * @returns this
     */
    EventService.prototype.subcribe = function (type, listener, dispatch) {
        return this.on(type, listener, dispatch);
    };
    EventService.prototype.off = function (type, listener) {
        if (isObject(type)) {
            for (var key in type) {
                if (Object.prototype.hasOwnProperty.call(type, key)) {
                    var fn = type[key];
                    this.removeEventListener(key, fn);
                }
            }
            return this;
        }
        return this.removeEventListener(type, listener);
    };
    /**
     * Tạo, gọi ra một sự kiện
     * @param {string|object} event Tên hoặc sự kiện
     * @param {*} data dữ liệu
     * @returns {boolean}
     */
    EventService.prototype.emit = function (event, data, log) {
        return this.dispatchEvent.apply(this, getArguments(arguments));
    };
    /**
     * Tạo, gọi ra một sự kiện
     * @param {string|object} event Tên hoặc sự kiện
     * @param {*} data dữ liệu
     * @returns {boolean}
     */
    EventService.prototype.trigger = function (event, data, log) {
        return this.dispatchEvent.apply(this, getArguments(arguments));
    };
    EventService.prototype.addDispatchedEvent = function (event) {
        if (this._dispatchedEvents[event.type] === undefined)
            this._dispatchedEvents[event.type] = [];
        this._dispatchedEvents[event.type].push(event);
        // console.log(event.type, this._pendingListeners[event.type])
        return this;
    };
    EventService.prototype.handleDispatchedEvents = function (type, handler) {
        var listenerArray = this._dispatchedEvents[type];
        // console.log(type, this._pendingListeners[type], this);
        if (listenerArray !== undefined) {
            // console.log(type)
            // Make a copy, in case listeners are removed while iterating.
            var array = listenerArray.slice(0);
            for (var i = 0, l = array.length; i < l; i++) {
                // array[i].call(this, e);
                var s = handler.call(this, array[i]);
                if (s === false) {
                    return s;
                }
            }
        }
    };
    return EventService;
}());
export { EventService };
