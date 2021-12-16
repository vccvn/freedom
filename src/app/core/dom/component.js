import { _class } from "../es5-class.js";
import Dom from "./dom.js";

export const Component = _class("Component").extends(Dom)({
    static$isComponentClass: true,
    const$isComponentClass: true,
    autoRender: false,
    constructor: function(args){

    },
    bulder: function(){
        return null;
    }
});