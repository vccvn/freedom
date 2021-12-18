type EventEmit = {
    type: string,
    data?: any,
    [key: string]: any
}
type Listener = (event?: EventEmit) => any


type OnEventListener = {
    [event: string]: (Listener | string)
}




declare class EventService {
    [prop:string]: any;
    app: any;
    _listeners: {[event:string]: Listener[]};
    _dispatchedEvents: {[event:string]: any};
    __subServices: {
        [id:string]: EventService
    };
    constructor()

    sub(id:string): this

    addSub(id: string, sub?: EventService): void
    removeSub(id?:string): void
    onSub(id:string, type:any, listenner?:Listener, dispatch?:any): Listener
    offSub(id:string, type:any, listenner?:Listener):boolean
    addSubEvent(id:string, type:string, listenner?:Listener, dispatch?:any):this
    removeSubEvent(id:string, type:any, listenner?:Listener):boolean
    emitSub(id:string, type:any, listenner?:Listener, dispatch?:any):any
    


    /**
     * chuẩn hóa hàn lắng nghe sự kiện
     * @param {string|function} handler tên phương thức hoạc hàm handler
     * @returns function
     */

    parseEventHandler(handler: Listener): (...args: any[]) => any 

    /**
     * lắng nghe sự kiện
     * @param {string} type loại hoạc tên sự kiện
     * @param {function|string} handler hàm hoặc tên phương thức xử lý sự kiện
     * @param {boolean} dispatch Thực thi trên tất cả các sự kiện trước đó
     * @returns this
     */
    addEventListener(type: string, handler?: Listener, dispatch?: boolean) : Listener
    /**
     * Kiểm tra sự kiện có tồn tại hay không
     * @param {string} type tên sự kiện
     * @param {function} listener hàm xử lý
     * @returns {boolean}
     */
    hasEventListener(type: string, listener?: Listener): boolean 

    /**
     * Xóa / Gỡ sự kiện
     * @param {string} type tên sự kiện
     * @param {function} listener hàm xử lý
     * @returns {boolean}
     */
    removeEventListener(type: string, listener?: Listener): boolean 

    /**
     * Tạo, gọi ra một sự kiện
     * @param {string|object} event Tên hoặc sự kiện
     * @param {*} data dữ liệu
     * @param {boolean} log lưu lại du lieu khi emit
     * @returns {boolean}
     */
    dispatchEvent(event: (EventEmit | String), data?: any, log?: boolean): boolean 
    /**
     * lắng nghe sự kiện
     * @param {string} type loại hoạc tên sự kiện
     * @param {function|string} listener hàm hoặc tên phương thức xử lý sự kiện
     * @param {boolean} dispatch có cần cần gọi ham voi cac su kien truoc do hay ko
     * @returns this
     */
    on(type: (OnEventListener | string), listener?: Listener | boolean, dispatch?: boolean): any 
    /**
     * lắng nghe sự kiện
     * @param {string} type loại hoạc tên sự kiện
     * @param {function|string} listener hàm hoặc tên phương thức xử lý sự kiện
     * @param {boolean} dispatch có cần cần gọi ham voi cac su kien truoc do hay ko
     * @returns this
     */
    subcribe(type: (OnEventListener | string), listener?: Listener, dispatch?: boolean) : any

    off(type?: any, listener?: Listener):any
    /**
     * Tạo, gọi ra một sự kiện
     * @param {string|object} event Tên hoặc sự kiện
     * @param {*} data dữ liệu
     * @returns {boolean}
     */
    emit(event: (EventEmit | String), data?: any, log?: boolean): boolean 
    /**
     * Tạo, gọi ra một sự kiện
     * @param {string|object} event Tên hoặc sự kiện
     * @param {*} data dữ liệu
     * @returns {boolean}
     */
    trigger(event: (EventEmit | String), data?: any, log?: boolean): boolean

    addDispatchedEvent(event: EventEmit):this 

    handleDispatchedEvents(type: string, handler: Listener):boolean

}
