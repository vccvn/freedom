type subcribeHandler = (value?: any, old?:any, key?:string) => any
export declare class Observer {
    constructor(obj:{[x:string]:any})
    subcribe(key:string, handler: subcribeHandler)
    subcribe(handler: subcribeHandler)
    
}
export declare function observer(obj:{[x:string]:any}) : Observer