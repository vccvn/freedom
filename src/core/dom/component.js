import { _class } from "../es5-class.js";
import Dom from "./dom.js";

export const Component = _class("Component").extends(Dom)({
    static$isComponentClass: true,
    const$isComponent: true,
    autoRender: true,
    constructor: function(args){

    },
    builder: function(){
        return null;
    }
});