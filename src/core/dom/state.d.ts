export interface IState{
    /**
     * them su kien
     * @param fn ham xu ly
     */
     addEventListener(fn: (value?, old?)=>any): this
    /**
     * them su kien
     * @param fn ham xu ly
     */
    subcribe(fn: (value?, old?)=>any): this

    __toData__(): any

    isPrimitive: boolean
    isObject:boolean
    isString: boolean
    isState: boolean
}
/**
 * use state
 * @param value giá trị cho state
 */
export declare function useState(value: any) : [IState, (newValue: any) => IState]

/**
 * kiểm tra phải state hay ko
 * @param value giá trị cần kiểm tra
 */
export declare function isState(value: any) : boolean
