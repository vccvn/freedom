import {
  ES5Class,
  Wrapper,
} from '../es5-class';

type subscribeHandle = (value: any, ...args: any[]) => any
type Subscribe = string | {[key:string]: subscribeHandle};
export interface DomBag{
    domClass: DomFactory 
    args:any[]
    isDomBag:boolean
    new(_dom, args:any[])
    make():DomElement
}
export interface DomElement {
    el: HTMLElement
    isDom: boolean
    tagName: string
    id: string
    className: string
    children: DomElement[]
    parent: DomElement
    setup: (...args: any[]) => this
    /**
     * thêm lang nghe su kien
     */
    addEventListener(type: string, handler: (event: Event) => any, passed?: any) : this
    hasEventListener(type: string, handler: (event: Event) => any): boolean
    removeEventListener(type: string, handler?: (event: Event) => any):  this
    dispatchEvent(event: any): this
    addDomEvent(event: any, handler?: (event: Event) => any, passed?: any):  this
    hasEvent(type: string, handler?: (event: Event) => any): boolean
    on(event: any, handler?: (event: Event) => any):  this
    off(events: any, handler?: (event: Event) => any): this
    trigger(event: any, data: any):  this
    subscribe(key: Subscribe, handler?: subscribeHandle):  this
    fn(method: any): (e: Event) => any
    is(selector: any, el: any):  boolean
    closest(selector: any, el: any):  any
    getProp(prop: any, all?: any): any
    setProp(prop: any, value?: any):  this
    removeProp(prop: any): this
    prop(prop: any, value?: any): this
    val(value?: any): any
    getHtml(): any
    setHtml(html?: any): any
    html(html?: any): string
    getAttribute(attr?: any): any
    setAttribute(attr: any, value?: any): this
    attr(attr?: any, value?: any): any
    attrData(key?: any): any
    addClass(className: any): this
    removeClass(classname?: any): this
    hasClass(classname: any): boolean
    css(prop: any, value?: any): any
    height(height?: any): number
    width(width?: any): number
    append(child: any, withKey?:string|{[prop:string]:any}, withValue?:any): this
    prepend(child: any, withKey?:string|{[prop:string]:any}, withValue?:any): this,
    before(child:Array<any>|DomElement, childTarget:Element|DomElement, withKey?:string|{[prop:string]:any}, withValue?:any): this,
    appendTo(parent: any): this,
    prependTo(parent: any): this,
    hasDomChild(child?: any): boolean,
    removeDomChild(child?: any): void,
    removeChild(child?: any, removeDomElement?: any): this,
    remove(): this,
    setContent(content: any): this,
    sendToChildren(channel: any, data: any): boolean,
    callParentMethod(method: any, args?: any[]): any,
    cpm(method: string, args?: any[]): any,
    callParent(method: string, args?: any[]): any,
    callChildrenMethod(method: string, args: any, className: any): any,
    ccm(method: string, args: any, className: any): any,
    callChildren(method: string, args: any, className: any): any,
    callSiblingMethod(method: string, args: any): any,
    callSiblings(method: string, args: any): any,
    csm(method: string, args: any): any,
    getRootElement(): DomElement,
    moveTo(parent: any, pos: any): any,
    moveChild(child: any, receiveDomElement: any, pos: any): any,
    moveIn(child: any, pos: any, oldparent: any): any
    [x: string]: any
}

export interface DomCreatorProps {
    autoRender?:boolean
    builder?(): DomElement|DomElement[]|string|string|Element|Element[]|void
    onBeforeBuild?():void
    building?():void
    onAfterBuild?():void
    built?():void
    
    onBeforeRender?():void
    rendering?():void
    onAfterRender?():void
    rendered?():void
    __boot__?():void
    __init__?():void
    
    boots?:any[]
    _inits?:any[]
    
    [key:string]:any
}

export interface DomFactory extends ES5Class {

    /**
     * Tạo đối tượng dome element với 3 tham số:
     * @param {string} selector selector không băt buộc có dạng #id.class[attribute="value"]:prop tất caa3 cá thành phần đều không bắt buộc và có thể lặp lại nhiều lần tức là nhiều class hoặc thuộc tính. chỉ có id là duy nhất
     * @param {Element[]|DomElement[]|string[]} children Mảng các phần tử con
     * @param {object} attributes các thuộc tính
     * @returns {DomElement}
     */
    new(selector: string, children?: (DomElement | string | Element)[], attributes?: { [x: string]: any }, ...args: any[]): DomElement,
    new(selector: string, attributes?: { [x: string]: any }, children?: (DomElement | string | Element)[], ...args: any[]): DomElement,
    new(selector?: string, children?: (DomElement | string | Element)[], attributes?: { [x: string]: any }, ...args: ((DomElement | string | Element) | ((DomElement | string | Element))[] | any)[]): DomElement,
    new(children?: (DomElement | string | Element)[], attributes?: { [x: string]: any }, ...args: any[]): DomElement,
    new(attributes?: { [x: string]: any }, children?: (DomElement | string | Element)[], ...args: ((DomElement | string | Element) | ((DomElement | string | Element))[] | any)[]): DomElement,
    new(attributes?: { [x: string]: any }, ...args: ((DomElement | string | Element) | ((DomElement | string | Element))[] | any)[]): DomElement,
    new(...args:any[]): DomElement,
    new(): DomElement,

    (selector: string, children?: (DomElement | string | Element)[], attributes?: { [x: string]: any }, ...args: ((DomElement | string | Element) | ((DomElement | string | Element))[] | any)[]): DomElement
    (children: (DomElement | string | Element)[], attributes?: { [x: string]: any }, ...args: ((DomElement | string | Element) | ((DomElement | string | Element))[] | any)[]): DomElement
    (attributes: { [x: string]: any }, ...args: ((DomElement | string | Element) | ((DomElement | string | Element))[] | any)[]): DomElement
    (child: (DomElement | string | Element), attributes?: { [x: string]: any }, ...args: ((DomElement | string | Element) | ((DomElement | string | Element))[] | any)[]): DomElement
    (attributes: { [x: string]: any }, child: (DomElement | string | Element), ...args: ((DomElement | string | Element) | ((DomElement | string | Element))[] | any)[]): DomElement
    (attributes: { [x: string]: any }, children?: (DomElement | string | Element)[], ...args: ((DomElement | string | Element) | ((DomElement | string | Element))[] | any)[]): DomElement
    (...args:any[]): DomElement,
    (): DomElement
    with(key:any, value?:any):DomElement,
    withParent(parent: DomElement): DomElement
    if(condition:any): (...args:any[]) => DomElement
    elseif(condition:any): (...args:any[]) => DomElement
    else(...args:any[]): (...args:any[]) => DomElement

    switch(_any:any): (...args) => DomElement
    case(condition:any): (...args:any[]) => DomElement
    default(...args:any[]): (...args:any[]) => DomElement
    

}
export interface DomWrapper extends Wrapper {
    new(...args:any[]): DomElement
    (...args:any[]): Dom
    uses(...traits:any[]): DomWrapper
    extends(superClass: any, ...superClasses:any[]): DomWrapper
    assign(propa: DomCreatorProps): Dom
    
}
export declare class Dom implements DomFactory {
    constructor(...args)
    withParent(parent: DomElement): DomElement
    static makeClass(name: string, props:DomCreatorProps) : Dom
    static makeClass(name: string) : DomWrapper
    static maker(name: string, props:DomCreatorProps) : Dom
    static maker(name: string) : DomWrapper
    
}
export interface Dom extends DomFactory{
    new(...args): DomElement
    (...args): DomElement
    withParent(parent: DomElement): DomElement
}


export default Dom;
