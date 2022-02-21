import {
  defConst,
  observe,
} from '../observer.js';
import { getType } from '../utils.js';

export const useState = value => {
    var type = getType(value),
        state,
        change = val => {
            if ((type == "object" && (value.isPrimitive || value.__ob__)) || (type == 'array' && value.__ob__) || (isFunction(value) && value.isPrimitive)) return state = val;
            else if (type == 'object' || type == 'array') {
                var ob = observe(val, null, true);
                state = val;

            } else {
                state = val;
            }
            if (!state.isDomState) {
                defConst(state, 'isDomState', true);
            }

        };
    change(value);
    return [state, change];
}

export const isState = (variable) => {
    var type = getType(variable);
    return (type == 'object' || type == 'array' || type == "function") && variable.isDomState;
}