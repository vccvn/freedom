type subscribeHandler = (value?: any, old?:any, key?:string) => any
export declare class Observer {
    constructor(obj:{[x:string]:any})
    subscribe(key:string, handler: subscribeHandler)
    subscribe(handler: subscribeHandler)
    readonly parent: Observer|null
    
}
export declare function observer(obj:{[x:string]:any}) : Observer
export declare function defConst<T>(obj: {[x:string]:any}, key: string, value: any, options?:{
    enumerable?: boolean
    configurable?: boolean
    get?():any
    value?:any

}): {[x:string]:any}
export declare function defProp<T>(obj: {[x:string]:any}, key: string, value: any, options?:{
    enumerable?: boolean
    configurable?: boolean
    get?():any
    set?(value:any):any
    
    value?:any
}): {[x:string]:any}