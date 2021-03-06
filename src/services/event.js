
import { date, getArguments, isBoolean, isEmpty, isFunction, isObject, isString, objectHasKey, Str } from '../core/utils.js';
const DEFAULT_VALUE = Str.rand(Str.rand(date('ms')));


export class EventService {
    app = null;
    _listeners = {};
    _dispatchedEvents = {};
    __subServices = {};
    constructor() { }

    sub(id){
        if(objectHasKey(this.__subServices, id)) return this.__subServices[id];
        this.__subServices[id] = new (this.constructor);
        return this.__subServices[id];
    }

    addSub(id, sub){
        if(!sub){
            if(objectHasKey(this.__subServices, id)){
                this.__subServices[id].off();
            }
            this.__subServices[id] = new this.prototype.constructor();
        }else{
            if(objectHasKey(this.__subServices, id)){
                this.__subServices[id].off();
            }
            this.__subServices[id] = sub;
        }
    }
    removeSub(id){
        if(id!==undefined && String(id).length){
            if(objectHasKey(this.__subServices, id)){
                this.__subServices[id].off();
                delete this.__subServices[id];
            }
        }else if(!isEmpty(this.__subServices)){
            for (const key in this.__subServices) {
                if (Object.prototype.hasOwnProperty.call(this.__subServices, key)) {
                    this.removeSub(key);
                    
                }
            }
        }
    }
    onSub(id, type, listenner, dispatch){
        return this.sub(id).on(type, listenner, dispatch)
    }
    offSub(id, type, listenner){
        return this.sub(id).off(type, listenner)
    }
    addSubEvent(id, type, listenner, dispatch){
        return this.sub(id).addEventListener(type, listenner, dispatch);
    }
    removeSubEvent(id, type, listenner){
        return this.sub(id).removeEventListener(type, listenner);
    }
    emitSub(id, type, listenner, dispatch){
        return this.sub(id).emit(type, listenner, dispatch);
    }
    


    /**
     * chuẩn hóa hàn lắng nghe sự kiện
     * @param {function(...args)} handler tên phương thức hoạc hàm handler
     * @returns function
     */

    parseEventHandler(handler) {
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
    }

    /**
     * lắng nghe sự kiện
     * @param {string} type loại hoạc tên sự kiện
     * @param {function|string} handler hàm hoặc tên phương thức xử lý sự kiện
     * @param {boolean} dispatch Thực thi trên tất cả các sự kiện trước đó
     * @returns this
     */
    addEventListener(type, handler, dispatch) {
        var self = this;
        var listener = this.parseEventHandler(handler);
        if(this.hasEventListener(type, handler)) return;
        
        if (this._listeners === undefined || this._listeners === null) this._listeners = {};

        type = String(type).toLowerCase();



        // if (isDomEvent(type)) return this.addDomEvent(type, listener, DEFAULT_VALUE);
        const listeners = this._listeners;

        if (listeners[type] === undefined) {

            listeners[type] = [];

        }
        if (dispatch === true) {
            this.handleDispatchedEvents(type, listener);
        }

        if (listeners[type].indexOf(listener) === - 1) {
            listeners[type].push(listener);
        }
        return listener;
    }

    /**
     * Kiểm tra sự kiện có tồn tại hay không
     * @param {string} type tên sự kiện
     * @param {function} listener hàm xử lý
     * @returns {boolean}
     */
    hasEventListener(type, listener) {

        if (this._listeners === undefined || this._listeners === null) return false;

        const listeners = this._listeners;
        type = String(type).toLowerCase();
        return listeners[type] !== undefined && (listener ? listeners[type].indexOf(listener) !== - 1 : true);

    }

    /**
     * Xóa / Gỡ sự kiện
     * @param {string} type tên sự kiện
     * @param {function} listener hàm xử lý
     * @returns {boolean}
     */
    removeEventListener(type, listener) {
        if (this._listeners === undefined || this._listeners === null) return false;
        type = String(type).toLowerCase();
        const listeners = this._listeners;
        const listenerArray = listeners[type];
        if (listenerArray !== undefined) {
            if (!listener) {
                this._listeners[type].splice(0, this._listeners[type].length);
                return true;
            }
            const index = listenerArray.indexOf(listener);
            if (index !== - 1) {
                listenerArray.splice(index, 1);
                return true;
            }
        }
        return false;
    }


    /**
     * Tạo, gọi ra một sự kiện
     * @param {string|object} event Tên hoặc sự kiện
     * @param {*} data dữ liệu
     * @param {boolean} log lưu lại du lieu khi emit
     * @returns {boolean}
     */
    dispatchEvent(event, data, log) {
        if (this._listeners === undefined || this._listeners === null || !event) return null;

        var e = {};
        if (isString(event)) {
            e.type = event;
            if (data) {
                e.data = data;
            }
            // console.log(event, data);
        } else if (isObject(event)) {
            e = event;
            if (!e.type) return false;
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
        if(e.constructor === Object) e.type = String(e.type).toLowerCase();
        const listeners = this._listeners;
        const listenerArray = listeners[e.type];
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
            const array1 = listenerArray.slice(0);
            var rs = [];
            for (var i = 0, l = array1.length; i < l; i++) {
                let a = array1[i].call(this, e);
                if (!s) break;
                if (a !== undefined) {
                    rs.push(a)
                }

            }
            if (s && rs.length) {
                return rs.length == 1 && array1.length == 1 ? rs[0] : rs;
            }
            return s;
        }

    }
    /**
     * lắng nghe sự kiện
     * @param {string} type loại hoạc tên sự kiện
     * @param {function(envent)} listener hàm hoặc tên phương thức xử lý sự kiện
     * @param {boolean} dispatch có cần cần gọi ham voi cac su kien truoc do hay ko
     * @returns this
     */
    on(type, listener, dispatch) {
        if (isObject(type)) {
            var listeners = {};
            const events = type;
            var d = isBoolean(listener) ? listener : (isBoolean(dispatch) ? dispatch : false);
            for (const key in events) {
                if (Object.hasOwnProperty.call(events, key)) {
                    const fn = type[key];
                    if (isFunction(fn) || isString(fn)) {
                        const fnAdded = this.addEventListener(key, fn, d);
                        if (fnAdded) {
                            listeners[key] = fnAdded;
                        }
                    }
                }
            }
            return listeners;
        }
        return this.addEventListener(type, listener, dispatch);
    }
    /**
     * lắng nghe sự kiện
     * @param {string} type loại hoạc tên sự kiện
     * @param {function|string} listener hàm hoặc tên phương thức xử lý sự kiện
     * @param {boolean} dispatch có cần cần gọi ham voi cac su kien truoc do hay ko
     * @returns this
     */
    subcribe(type, listener, dispatch) {
        return this.on(type, listener, dispatch);
    }

    off(type, listener) {
        if(isObject(type)){
            for (const key in type) {
                if (Object.prototype.hasOwnProperty.call(type, key)) {
                    const fn = type[key];
                    this.removeEventListener(key,fn);
                }
            }
            return this;
        }
        return this.removeEventListener(type, listener);
    }
    /**
     * Tạo, gọi ra một sự kiện
     * @param {string|object} event Tên hoặc sự kiện
     * @param {*} data dữ liệu
     * @returns {boolean}
     */
    emit(event, data, log) {
        return this.dispatchEvent.apply(this, getArguments(arguments));
    }
    /**
     * Tạo, gọi ra một sự kiện
     * @param {string|object} event Tên hoặc sự kiện
     * @param {*} data dữ liệu
     * @returns {boolean}
     */
    trigger(event, data, log) {
        return this.dispatchEvent.apply(this, getArguments(arguments));
    }

    addDispatchedEvent(event) {
        if (this._dispatchedEvents[event.type] === undefined) this._dispatchedEvents[event.type] = [];
        this._dispatchedEvents[event.type].push(event);
        // console.log(event.type, this._pendingListeners[event.type])
        return this
    }

    handleDispatchedEvents(type, handler) {
        var listenerArray = this._dispatchedEvents[type];
        // console.log(type, this._pendingListeners[type], this);
        if (listenerArray !== undefined) {


            // console.log(type)
            // Make a copy, in case listeners are removed while iterating.
            const array = listenerArray.slice(0);

            for (var i = 0, l = array.length; i < l; i++) {
                // array[i].call(this, e);
                var s = handler.call(this, array[i]);
                if (s === false) {
                    return s;
                }

            }
        }
    }

}
