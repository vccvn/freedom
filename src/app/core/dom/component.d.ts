import { ES5Class } from "../es5-class";
import { DomElement, DomFactory, Dom, DomWrapper, DomCreatorProps } from "./dom";
export interface ComponentInstance extends DomElement{}
export interface ComponentWrapper extends DomWrapper {
    new(...args:any[]): ComponentInstance
    (props: DomCreatorProps): Component
    uses(...traits:any[]): ComponentWrapper
    extends(superClass: any, ...superClasses:any[]): ComponentWrapper
    assign(propa: DomCreatorProps): Component
    
}
export interface Component extends DomFactory {
    new(...args:any[]): ComponentInstance
    (...args:any[]): ComponentInstance
}
export declare class Cpmponent extends Dom {
    constructor(...args: any[])
    static makeClass(name: string, props: DomCreatorProps): Component;
    static makeClass(name: string): ComponentWrapper;
    static maker(name: string, props: DomCreatorProps): Component;
    static maker(name: string): ComponentWrapper
}