import { ES5Class, ES5Instance } from "./es5-class";
type Fn = (...args:any[]) => any;
declare class App {
    constructor(parameters)
    containers: Array<{_class: (ES5Class|Fn), _args: Array<any>, _instance: ES5Instance}>

    /**
     * thêm dich vu
     * @param _class class ban muon binding
     * @returns boolean
     */
    add(_class: (ES5Class|Fn), _args: Array<any>): boolean
    /**
     * dang ky dich vu
     * @param _class class hoac function
     * @param _args tham so
     */
    register (_class: (ES5Class|Fn), _args: Array<any>): boolean
    /**
     * Xoa dich vu
     * @param _class 
     */
    remove(_class: (ES5Class|Fn)): boolean
    /**
     * kiem tra
     * @param _class
     */
    has(_class: (ES5Class|Fn)): boolean
    /**
     * lay ra instance cua class
     * @param _class class can lay instance
     * @param _args tham so
     */
    instance(_class: (ES5Class|Fn), _args?: Array<any>): ES5Instance
}

export interface _APP_ {
    containers: Array<{_class: (ES5Class|Fn), _args: Array<any>, _instance: ES5Instance}>
    (_class: (ES5Class|Fn), _args?: Array<any>): ES5Instance
    /**
     * thêm dich vu
     * @param _class class ban muon binding
     * @returns boolean
     */
    add(_class: (ES5Class|Fn), _args: Array<any>): boolean
    /**
     * dang ky dich vu
     * @param _class class hoac function
     * @param _args tham so
     */
    register (_class: (ES5Class|Fn), _args: Array<any>): boolean
    /**
     * Xoa dich vu
     * @param _class 
     */
    remove(_class: (ES5Class|Fn)): boolean
    /**
     * kiem tra
     * @param _class
     */
    has(_class: (ES5Class|Fn)): boolean
    /**
     * lay ra instance cua class
     * @param _class class can lay instance
     * @param _args tham so
     */
    instance(_class: (ES5Class|Fn), _args?: Array<any>): ES5Instance
}

export const app : _APP_;