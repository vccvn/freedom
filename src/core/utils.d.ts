


declare function isFunction(obj: any): boolean
declare function isCallable(variable: any): boolean

/**
 * lấy kiểu giá trị của biến
 * @param {*} obj
 * @return {string}
 */
declare function getType(obj: any): boolean
/**
 * kiềm tra có phải chuỗi
 * @param {*} variable biến bất kỳ
 */
declare function isString(variable: any): boolean
/**
 * kiềm tra có phải null
 * @param {*} variable biến bất kỳ
 */
declare function isNull(variable: any): boolean
/**
 * kiềm tra có phải array
 * @param {*} variable biến bất kỳ
 */
declare function isArray(variable: any): boolean
/**
 * kiềm tra có phải object
 * @param {*} variable biến bất kỳ
 */
declare function isObject(variable: any): boolean
/**
 * kiềm tra có phải number
 * @param {*} variable biến bất kỳ
 */
declare function isNumber(variable: any): boolean
/**
 * kiềm tra có phải loat
 * @param {*} variable biến bất kỳ
 */
declare function isFloat(variable: any): boolean
/**
 * kiềm tra có phải number
 * @param {*} variable biến bất kỳ
 */
declare function isInteger(variable: any): boolean


/**
 * kiềm tra có phải boolean
 * @param {*} variable biến bất kỳ
 */
declare function isBoolean(variable: any): boolean

/**
 * kiềm tra có phải Formdata
 * @param {*} variable biến bất kỳ
 */
declare function isFormData(variable: any): boolean

/**
 * kiềm tra có phải chuỗi
 * @param {*} variable biến bất kỳ
 */
declare function isEmail(email: any): boolean

declare function isEmpty(obj: any): boolean
declare function emptyFunc(): void

declare function newObj(obj?: any): any
declare function emptyObject(): any
/**
 *
 * @param {object} dst
 * @param {object} src
 * @returns {object}
 */
declare function merge(dst: {[prop: string]: any }, src: {[prop: string]: any }): { [prop: string]: any }

/**
 * sao chep gia tri trong mang
 * @param {array|object} src mang doi tuong  can sao chep
 */
declare function copyArray(src: any): any[]
declare function combine(list: any): any[]


declare function objectKeys(obj: object): string[]
declare function objectValues(obj: {[prop: string]: any }): any[]

declare function isProperty(obj: any, key: any): boolean
declare function isisMethod(obj: {[prop: string]: any }, key?: string): boolean 
/**
 * kiểm tra giá trị có trong mảng / object hay không
 * @param {array} arr mảng
 * @param {*} value
 * @returns {boolean}
 */
declare function hasValue(arr: Array<any>, value: any, checkType: boolean): boolean
/**
 * kiểm tra giá trị có trong mảng / object hay không
 * @param {array} arr mảng
 * @param {*} value
 * @returns {boolean}
 */
declare function inArray(arr: any[], value: any, checkType?: boolean): boolean;

declare function cutWithout(obj: {[prop: string]: any }, keys: any): { [key: string]: any }

declare function copyWithout(obj: {[prop: string]: any }, keys: any): { [key: string]: any }

declare function copyByList(obj: any, keys?: any): { [key: string]: any }

/**
 * kiểm tra toàn bộ kiểu dử liệu của các phần tử con
 * @param {string} type kiểu dử liệu
 * @param {array} object đối tượng cần kiểm tra
 */
declare function checkAllElementType(type: any, object: {[p:string]:any}): boolean

/**
 * trổn 2 mảng thành mảng kết hợp mới
 * @param {array[]} arrayArr mảng chứa các phần tử con là 1 mảng
 * @param {any[]} arrayAny mảng chứa các phần tử con có kiểu dử liệu là string hoặc number
 * @returns {array[]}
 */
declare function combineTwoArray(arrayArr: Array<any>, arrayAny: Array<any>): any[]

/**
 * lấy tổ hợp các các phần từ com
 * @param {array} arr1 
 * @param {array} arr2 
 */
declare function combineElenentsToArrList(...arrayList: any[]): any[]

/**
 * trộn 2 hoặc nhiều mảng thành mảng tổ hợp các phần tử dược nối với nhau bằng delimiter
 * @param {string} deliniter ký tự nối
 * @param {string[]} arr1 mảng 1
 * @param {string[]} arr2 mảng 2
 * @param {string[]} ...arrN mảng 2
 * 
 * @returns {string[]}
 */
declare function combineElenentsJoinStringList(deliniter: string, arr1: Array<any>, arr2: Array<any>): any


/**
 * lay ra gia tri nho nhat
 * @param {array|object} obj doi tuong mang chua cac gia tri 
 */
declare function minOf(obj: any): number
/**
 * lay ra gia tri lon nhat
 * @param {array|object} obj doi tuong mang chua cac gia tri 
 */
declare function maxOf(obj: any, ...abc: any): number
declare function _instanceof(left: any, right: any): boolean

declare function _classCallCheck(instance: any, Constructor: any): any

declare function _defineProperties(target: any, props: any): void

declare function _createClass(Constructor: Function, protoProps: any, staticProps: any): Function

declare function _defineProperty(obj: any, key: string, value: any): any

declare function checkType(type: string, value: any, absolultely?: boolean): boolean

/**
 * Kiểm tra tồn tại key hay ko?
 * @param {object|array} obj doi tuong can kiem tra
 * @param {string} key 
 * @returns {boolean}
 */
declare function objectHasKey(obj: any, key: any): boolean

/**
 * kiểm tra sự tồn tại của thuộc tinh thông qua key và kiểu giá trị
 * @param {any} obj doi tuong can kiem tra
 * @param {string} key danh sach key kem kiey gia tri
 * @param {string} type kieu gia tri
 * @returns {boolean}
 */
declare function objectHasProperty(obj: any, key: any, type?: any): boolean

/**
 * joi các mảng vào làm một
 * @param {string[]|number[]} target mảng đầu vào cần join
 * @returns {array}
 */
declare function arrayJoin(target: Array<any>, ...args: any) : any[]




/**
 * 
 * @param obj 
 * @param key 
 * @param delimiter 
 * @returns 
 */
declare function getEl(obj: any, key?: any, delimiter?: string): any
export interface Num {
    rand(from: number, to: number): number
    currency(x: string): string
}
export interface Str {
    clearUnicode(str: string): string
    isSN(str: any): boolean,
    /**
     * thay the chuoi trong chuoi bang mot chuoi =)))))
     * @param {string} str  chuoi dau vao
     * @param {string|object|array} find  tham so tim kiem
     * @param {string|object|array} replace  tham so thay the
     */
    replace(...a: any): string
    replaceByArr(...a: any): string
    replaceByObj(...a: any): string
    escapeRegExp(str: any): string

    preg_replace(find: string, replace: string, str: string): string

    /**
     * Tạo một chuỗi random Ngẫu nhiên
     * @param {string} charList chuỗi ký tự bổ xung
     * @returns {string}
     */
    rand(charList: any): string
    /**
     * biến đổ chuỗi thành slug
     * @param {string} str chuỗi đầu vào
     * @param {string} joinKey ký tự nối
     * @returns {string}
     */
    camelToSlug(str: string, joinKey: string): string
    upperToWord(str: any): string
    urlencode(str: any): string
    urldecode(str: any): string
    eval(template: any, data: any): string
    convertTextObject(root: any, object: any, name: string, joinKey?: any): any
    upper(str?: any): string
    lower(str?: any): string
    ucfirst(str?: any): string
    ucword(str?: any): string

    htmlentities(str?: any): string
    formSlug(str?: any): string
    slug(str: any, key?: any): string
    slugToCamel(str?: any): string
    objectKey(str: string, key?: string): string
    compare(str1, str2): number
}






declare function date(format?: any, lang?: any): string
declare function getTimeStamp(): number

/**
 * 
 * @param {object} target đối  tượng cần gán thuộc tính
 * @param {object|string} key key hoặc object thuộc tính
 * @param {*} value giá trị
 * @returns {object}
 */
declare function assignValue(target: (Array<any> | { [x: string]: any } | any), key?: (string | number | Array<any> | { [x: string]: any }), value?: any): (Array<any> | { [x: string]: any })


declare function assignWithout(target: any, source?: any, ...ignore: any[]): any
/**
 * 
 * @param {object} target đối  tượng cần gán thuộc tính
 * @param {object|string} key key hoặc object thuộc tính
 * @param {*} value giá trị
 * @returns {object}
 */
declare function assignIfNotExists(target: (Array<any> | { [x: string]: any } | any), key?: (string | number | Array<any> | { [x: string]: any }), value?: any): any

declare function rgbToHex(rgb?: any): string
declare function colorToHex(r?: any, g?: any, b?: any): string

declare function invertHexColor(hexTripletColor: any): string
/**
 * xửu lý hàng đợi
 * @param {function} work hàm thục thi công việc
 * @param {Number} delay thời gian giữa 2 lần chạy task
 * @param {Number} step số lần thực hiện công việc nếu chưa bị reject hay resolve
 */
declare class Queue {
    status: string;
    result: any;

    e: (...args: any[]) => any;

    constructor(work: (resolve?: (...args: any[]) => any, rejected?: (...args: any[]) => any, turn?: number) => any, delay?: number, step?: number)

    delay(delay?: number): this
    step(step: number): this
    try(step: number): this
    restart(): Queue
    then(fn: (...args: any[]) => any): this
    catch(fn: (...args: any[]) => any): this
}
/**
 * xửu lý hàng đợi
 * @param {function} work hàm thục thi công việc
 * @param {Number} delay thời gian giữa 2 lần chạy task
 * @param {Number} step số lần thực hiện công việc nếu chưa bị reject hay resolve
 */
declare function queueTask(work: (resolve?: (...args: any[]) => any, rejected?: (...args: any[]) => any, turn?: number) => any, delay?: number, step?: number): Queue



/**
 * lấy danh sách tham số nội hàm khi dược gọi
 * @param {Arguments} args tham số nội hàm
 * @param {integer} start vị trí bắt đầu lấy tham số
 * @returns {mixed[]}
 */
declare function getArguments(args: any, start?: any): any[]


declare function JsonToBase64(data: any): string


declare function b64toBlob(b64Data: any, contentType?: string, sliceSize?: number): Blob


/**
 * resize anh
 * @param {string|Element} img anh
 * @param {int} resizeWidth do rong 
 * @param {int} resizeHeight chieu cao
 * @param {function} callback ham call back
 */
declare function resizeImage(img: string | Element, resizeWidth?: number, resizeHeight?: number, callback?: (img) => any): () => any

declare function degreeToRadians(degrees: number): number
declare function radianToDegrees(radians: number): number


/**
 * 
 * @param type loại input
 * @param name tên input
 * @param value gia tri
 * @param options option
 */
 declare function getInputCfg(
    type: string,
    name: string,
    value: (string | number | boolean | { [x: string]: any }),
    options?: any
): {type: string,
    name: string,
    value: (string | number | boolean | { [x: string]: any }),
    options?: any};

declare function createInstance(_classRef, args?: any[]): any
