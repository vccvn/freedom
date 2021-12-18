export type Callable = (...args:any[]) => void|any;
export type prepareFn = (props:{[x:string]:any}, scope?: string, resolve?:(...args:any[])=> any, reject?:(...args:any[])=> any) => any
export type prepareProp = (fn:prepareFn) => Wrapper
export interface ES5Class {
    (...args:any[]): ES5Instance
}
export declare class ES5Class implements ES5Class{
    __instance__id__: string
    constructor(...args)
    
    static __type__: string
    static __class__: string

    [x: string]: any

}

export interface ES5Instance {
    __instance__id__: string
    static: ES5Class
    [x: string]: any
}

export declare interface Wrapper {
    (props?: {
        __prepare__?:prepareFn
        [x: string]: any,
    }): ES5Class,
    new(...args: any[]): ES5Instance,
    /**
     * thực hiện khai báo và khóa các thuộc tính
     */
    prepare(fn:prepareFn): Wrapper
    commit(): ES5Class
    /**
     * kế thừa class
     * @param superClass Class cha
     * @param superClasses danh sách các class cha khá
     */
    extends(superClass: any, ...superClasses: any[]): Wrapper
    /**
     * Sử dụng các trait
     * @param trait đối tượng trait
     * @param traits cá trait khác
     */
    uses(trait: any, ...traits: any[]): Wrapper
    /**
     * khai báo thuộc tính và phương thức
     * @param props các thuộc tính và phương thức
     */
    assign(props: {
        constructor?: (...args: any) => void,
        boots?: string[],
        inits?: string[],
        __prepare__?:prepareFn
        [x: string]: any,
    }): ES5Class

    withData(key?: any, value?: any): ES5Instance
    static(key?: any, value?: any): Wrapper
    [x: string]: any

}


export declare function createClass(name:string, isGlobal?: boolean) : Wrapper
export declare function _class(name:string, isGlobal?: boolean) : Wrapper
