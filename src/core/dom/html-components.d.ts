import { DomElement, DomFactory } from "./dom";

interface HtmlCreator {
    (selector?: any, children?: any, attribute?: any, ...args: any[]): HTMLElement
}

export declare function HtmlCreator(selector?: any, children?: any, attribute?: any, ...args: any[]): HTMLElement

interface HTMLFactory extends DomFactory {


    /**
     * Tạo đối tượng dome element với 3 tham số:
     * @param {string} selector selector không băt buộc có dạng #id.class[attribute="value"]:prop tất caa3 cá thành phần đều không bắt buộc và có thể lặp lại nhiều lần tức là nhiều class hoặc thuộc tính. chỉ có id là duy nhất
     * @param {Element[]|DomElement[]|string[]} children Mảng các phần tử con
     * @param {object} attributes các thuộc tính
     * @returns {DomElement}
     */
    new(selector: string, children?: (DomElement | string | Element)[], attributes?: { [x: string]: any }, ...args:any[]): DomElement,
    new(children?: (DomElement | string | Element)[], attributes?: { [x: string]: any }, ...args:any[]): DomElement,
    new(attributes?: { [x: string]: any }, ...args:((DomElement | string | Element) | ((DomElement | string | Element))[] |any)[]): DomElement,
    new(selector?: string, children?: (DomElement | string | Element)[], attributes?: { [x: string]: any }, ...args:((DomElement | string | Element) | ((DomElement | string | Element))[] |any)[]): DomElement,
    
    (selector: string, children?: (DomElement | string | Element)[], attributes?: { [x: string]: any }, ...args: ((DomElement | string | Element) | ((DomElement | string | Element))[] |any)[]): HTMLElement,
    (children: (DomElement | string | Element)[], attributes?: { [x: string]: any }, ...args: ((DomElement | string | Element) | ((DomElement | string | Element))[] |any)[]): HTMLElement,
    (attributes?: { [x: string]: any }, ...args: ((DomElement | string | Element) | ((DomElement | string | Element))[] |any)[]): HTMLElement,
    (child: (DomElement | string | Element), attributes?: { [x: string]: any }, ...args: ((DomElement | string | Element) | ((DomElement | string | Element))[] |any)[]): HTMLElement,
    (): HTMLElement,
    
    
    a: HtmlCreator, abbr: HtmlCreator, acronym: HtmlCreator, address: HtmlCreator, applet: HtmlCreator, area: HtmlCreator, article: HtmlCreator, aside: HtmlCreator, audio: HtmlCreator,
    b: HtmlCreator, base: HtmlCreator, basefont: HtmlCreator, bb: HtmlCreator, bdo: HtmlCreator, big: HtmlCreator, blockquote: HtmlCreator, body: HtmlCreator, br: HtmlCreator, button: HtmlCreator,
    canvas: HtmlCreator, caption: HtmlCreator, center: HtmlCreator, cite: HtmlCreator, code: HtmlCreator, col: HtmlCreator, colgroup: HtmlCreator, command: HtmlCreator,
    datagrid: HtmlCreator, datalist: HtmlCreator, dd: HtmlCreator, del: HtmlCreator, details: HtmlCreator, dfn: HtmlCreator, dialog: HtmlCreator, dir: HtmlCreator, div: HtmlCreator, dl: HtmlCreator, dt: HtmlCreator,
    em: HtmlCreator, embed: HtmlCreator, eventsource: HtmlCreator,
    fieldset: HtmlCreator, figcaption: HtmlCreator, figure: HtmlCreator, font: HtmlCreator, footer: HtmlCreator, form: HtmlCreator, frame: HtmlCreator, frameset: HtmlCreator,
    h1: HtmlCreator, h2: HtmlCreator, h3: HtmlCreator, h4: HtmlCreator, h5: HtmlCreator, h6: HtmlCreator, head: HtmlCreator, header: HtmlCreator, hgroup: HtmlCreator, hr: HtmlCreator,
    i: HtmlCreator, iframe: HtmlCreator, img: HtmlCreator, input: HtmlCreator, ins: HtmlCreator, isindex: HtmlCreator,
    kbd: HtmlCreator, keygen: HtmlCreator,
    label: HtmlCreator, legend: HtmlCreator, li: HtmlCreator, link: HtmlCreator,
    map: HtmlCreator, mark: HtmlCreator, menu: HtmlCreator, meta: HtmlCreator, meter: HtmlCreator,
    nav: HtmlCreator, noframes: HtmlCreator, noscript: HtmlCreator,
    ol: HtmlCreator, optgroup: HtmlCreator, option: HtmlCreator, output: HtmlCreator,
    p: HtmlCreator, param: HtmlCreator, pre: HtmlCreator, progress: HtmlCreator,
    q: HtmlCreator,
    rp: HtmlCreator, rt: HtmlCreator, ruby: HtmlCreator,
    s: HtmlCreator, samp: HtmlCreator, script: HtmlCreator, section: HtmlCreator, select: HtmlCreator, small: HtmlCreator, source: HtmlCreator, span: HtmlCreator, strike: HtmlCreator, strong: HtmlCreator, style: HtmlCreator, sub: HtmlCreator, sup: HtmlCreator,
    table: HtmlCreator, tbody: HtmlCreator, td: HtmlCreator, textarea: HtmlCreator, tfoot: HtmlCreator, th: HtmlCreator, thead: HtmlCreator, time: HtmlCreator, title: HtmlCreator, tr: HtmlCreator, track: HtmlCreator, tt: HtmlCreator,
    u: HtmlCreator, ul: HtmlCreator,
    video: HtmlCreator,
    wbr: HtmlCreator,
    A: DomFactory, Abbr: DomFactory, Acronym: DomFactory, Address: DomFactory, Applet: DomFactory, Area: DomFactory, Article: DomFactory, Aside: DomFactory, Audio: DomFactory,
    B: DomFactory, Base: DomFactory, Basefont: DomFactory, Bb: DomFactory, Bdo: DomFactory, Big: DomFactory, Blockquote: DomFactory, Body: DomFactory, Br: DomFactory, Button: DomFactory,
    Canvas: DomFactory, Caption: DomFactory, Center: DomFactory, Cite: DomFactory, Code: DomFactory, Col: DomFactory, Colgroup: DomFactory, Command: DomFactory,
    Datagrid: DomFactory, Datalist: DomFactory, Dd: DomFactory, Del: DomFactory, Details: DomFactory, Dfn: DomFactory, Dialog: DomFactory, Dir: DomFactory, Div: DomFactory, Dl: DomFactory, Dt: DomFactory,
    Em: DomFactory, Embed: DomFactory, Eventsource: DomFactory,
    Fieldset: DomFactory, Figcaption: DomFactory, Figure: DomFactory, Font: DomFactory, Footer: DomFactory, Form: DomFactory, Frame: DomFactory, Frameset: DomFactory,
    H1: DomFactory, H2: DomFactory, H3: DomFactory, H4: DomFactory, H5: DomFactory, H6: DomFactory, Head: DomFactory, Header: DomFactory, Hgroup: DomFactory, Hr: DomFactory,
    I: DomFactory, Iframe: DomFactory, Img: DomFactory, Input: DomFactory, Ins: DomFactory, Isindex: DomFactory, Kbd: DomFactory, Keygen: DomFactory,
    Label: DomFactory, Legend: DomFactory, Li: DomFactory, Link: DomFactory,
    Map: DomFactory, Mark: DomFactory, Menu: DomFactory, Meta: DomFactory, Meter: DomFactory,
    Nav: DomFactory, Noframes: DomFactory, Noscript: DomFactory,
    Ol: DomFactory, Optgroup: DomFactory, Option: DomFactory, Output: DomFactory,
    P: DomFactory, Param: DomFactory, Pre: DomFactory, Progress: DomFactory,
    Q: DomFactory,
    Rp: DomFactory, Rt: DomFactory, Ruby: DomFactory,
    S: DomFactory, Samp: DomFactory, Script: DomFactory, Section: DomFactory, Select: DomFactory, Small: DomFactory, Source: DomFactory, Span: DomFactory, Strike: DomFactory, Strong: DomFactory, Style: DomFactory, Sub: DomFactory, Sup: DomFactory,
    Table: DomFactory, Tbody: DomFactory, Td: DomFactory, Textarea: DomFactory, Tfoot: DomFactory, Th: DomFactory, Thead: DomFactory, Time: DomFactory, Title: DomFactory, Tr: DomFactory, Track: DomFactory, Tt: DomFactory,
    U: DomFactory, Ul: DomFactory,
    Video: DomFactory,
    Wbr: DomFactory
}

declare function createElementClass(tag:string) : HTMLFactory
// declare function createHtmlElementFunction(tag:string) :  (...args) => Element
declare function createHtmlElementFunction(tag:string) : (...args) => Element

export interface A extends DomFactory{}
export interface Abbr extends DomFactory{}
export interface Acronym extends DomFactory{}
export interface Address extends DomFactory{}
export interface Applet extends DomFactory{}
export interface Area extends DomFactory{}
export interface Article extends DomFactory{}
export interface Aside extends DomFactory{}
export interface Audio extends DomFactory{}
export interface B extends DomFactory{}
export interface Base extends DomFactory{}
export interface Basefont extends DomFactory{}
export interface Bb extends DomFactory{}
export interface Bdo extends DomFactory{}
export interface Big extends DomFactory{}
export interface Blockquote extends DomFactory{}
export interface Body extends DomFactory{}
export interface Br extends DomFactory{}
export interface Button extends DomFactory{}
export interface Canvas extends DomFactory{}
export interface Caption extends DomFactory{}
export interface Center extends DomFactory{}
export interface Cite extends DomFactory{}
export interface Code extends DomFactory{}
export interface Col extends DomFactory{}
export interface Colgroup extends DomFactory{}
export interface Command extends DomFactory{}
export interface Datagrid extends DomFactory{}
export interface Datalist extends DomFactory{}
export interface Dd extends DomFactory{}
export interface Del extends DomFactory{}
export interface Details extends DomFactory{}
export interface Dfn extends DomFactory{}
export interface Dialog extends DomFactory{}
export interface Dir extends DomFactory{}
export interface Div extends DomFactory{}
export interface Dl extends DomFactory{}
export interface Dt extends DomFactory{}
export interface Em extends DomFactory{}
export interface Embed extends DomFactory{}
export interface Eventsource extends DomFactory{}
export interface Fieldset extends DomFactory{}
export interface Figcaption extends DomFactory{}
export interface Figure extends DomFactory{}
export interface Font extends DomFactory{}
export interface Footer extends DomFactory{}
export interface Form extends DomFactory{}
export interface Frame extends DomFactory{}
export interface Frameset extends DomFactory{}
export interface H1 extends DomFactory{}
export interface H2 extends DomFactory{}
export interface H3 extends DomFactory{}
export interface H4 extends DomFactory{}
export interface H5 extends DomFactory{}
export interface H6 extends DomFactory{}
export interface Head extends DomFactory{}
export interface Header extends DomFactory{}
export interface Hgroup extends DomFactory{}
export interface Hr extends DomFactory{}
export interface I extends DomFactory{}
export interface Iframe extends DomFactory{}
export interface Img extends DomFactory{}
export interface Input extends DomFactory{}
export interface Ins extends DomFactory{}
export interface Isindex extends DomFactory{}
export interface Kbd extends DomFactory{}
export interface Keygen extends DomFactory{}
export interface Label extends DomFactory{}
export interface Legend extends DomFactory{}
export interface Li extends DomFactory{}
export interface Link extends DomFactory{}
export interface Map extends DomFactory{}
export interface Mark extends DomFactory{}
export interface Menu extends DomFactory{}
export interface Meta extends DomFactory{}
export interface Meter extends DomFactory{}
export interface Nav extends DomFactory{}
export interface Noframes extends DomFactory{}
export interface Noscript extends DomFactory{}
export interface Ol extends DomFactory{}
export interface Optgroup extends DomFactory{}
export interface Option extends DomFactory{}
export interface Output extends DomFactory{}
export interface P extends DomFactory{}
export interface Param extends DomFactory{}
export interface Pre extends DomFactory{}
export interface Progress extends DomFactory{}
export interface Q extends DomFactory{}
export interface Rp extends DomFactory{}
export interface Rt extends DomFactory{}
export interface Ruby extends DomFactory{}
export interface S extends DomFactory{}
export interface Samp extends DomFactory{}
export interface Script extends DomFactory{}
export interface Section extends DomFactory{}
export interface Select extends DomFactory{}
export interface Small extends DomFactory{}
export interface Source extends DomFactory{}
export interface Span extends DomFactory{}
export interface Strike extends DomFactory{}
export interface Strong extends DomFactory{}
export interface Style extends DomFactory{}
export interface Sub extends DomFactory{}
export interface Sup extends DomFactory{}
export interface Table extends DomFactory{}
export interface Tbody extends DomFactory{}
export interface Td extends DomFactory{}
export interface Textarea extends DomFactory{}
export interface Tfoot extends DomFactory{}
export interface Th extends DomFactory{}
export interface Thead extends DomFactory{}
export interface Time extends DomFactory{}
export interface Title extends DomFactory{}
export interface Tr extends DomFactory{}
export interface Track extends DomFactory{}
export interface Tt extends DomFactory{}
export interface U extends DomFactory{}
export interface Ul extends DomFactory{}
export interface Video extends DomFactory{}
export interface Wbr extends DomFactory{}

export declare const A : DomFactory;
export declare const Abbr : DomFactory;
export declare const Acronym : DomFactory;
export declare const Address : DomFactory;
export declare const Applet : DomFactory;
export declare const Area : DomFactory;
export declare const Article : DomFactory;
export declare const Aside : DomFactory;
export declare const Audio : DomFactory;
export declare const B : DomFactory;
export declare const Base : DomFactory;
export declare const Basefont : DomFactory;
export declare const Bb : DomFactory;
export declare const Bdo : DomFactory;
export declare const Big : DomFactory;
export declare const Blockquote : DomFactory;
export declare const Body : DomFactory;
export declare const Br : DomFactory;
export declare const Button : DomFactory;
export declare const Canvas : DomFactory;
export declare const Caption : DomFactory;
export declare const Center : DomFactory;
export declare const Cite : DomFactory;
export declare const Code : DomFactory;
export declare const Col : DomFactory;
export declare const Colgroup : DomFactory;
export declare const Command : DomFactory;
export declare const Datagrid : DomFactory;
export declare const Datalist : DomFactory;
export declare const Dd : DomFactory;
export declare const Del : DomFactory;
export declare const Details : DomFactory;
export declare const Dfn : DomFactory;
export declare const Dialog : DomFactory;
export declare const Dir : DomFactory;
export declare const Div : DomFactory;
export declare const Dl : DomFactory;
export declare const Dt : DomFactory;
export declare const Em : DomFactory;
export declare const Embed : DomFactory;
export declare const Eventsource : DomFactory;
export declare const Fieldset : DomFactory;
export declare const Figcaption : DomFactory;
export declare const Figure : DomFactory;
export declare const Font : DomFactory;
export declare const Footer : DomFactory;
export declare const Form : DomFactory;
export declare const Frame : DomFactory;
export declare const Frameset : DomFactory;
export declare const H1 : DomFactory;
export declare const H2 : DomFactory;
export declare const H3 : DomFactory;
export declare const H4 : DomFactory;
export declare const H5 : DomFactory;
export declare const H6 : DomFactory;
export declare const Head : DomFactory;
export declare const Header : DomFactory;
export declare const Hgroup : DomFactory;
export declare const Hr : DomFactory;
export declare const I : DomFactory;
export declare const Iframe : DomFactory;
export declare const Img : DomFactory;
export declare const Input : DomFactory;
export declare const Ins : DomFactory;
export declare const Isindex : DomFactory;
export declare const Kbd : DomFactory;
export declare const Keygen : DomFactory;
export declare const Label : DomFactory;
export declare const Legend : DomFactory;
export declare const Li : DomFactory;
export declare const Link : DomFactory;
export declare const Map : DomFactory;
export declare const Mark : DomFactory;
export declare const Menu : DomFactory;
export declare const Meta : DomFactory;
export declare const Meter : DomFactory;
export declare const Nav : DomFactory;
export declare const Noframes : DomFactory;
export declare const Noscript : DomFactory;
export declare const Ol : DomFactory;
export declare const Optgroup : DomFactory;
export declare const Option : DomFactory;
export declare const Output : DomFactory;
export declare const P : DomFactory;
export declare const Param : DomFactory;
export declare const Pre : DomFactory;
export declare const Progress : DomFactory;
export declare const Q : DomFactory;
export declare const Rp : DomFactory;
export declare const Rt : DomFactory;
export declare const Ruby : DomFactory;
export declare const S : DomFactory;
export declare const Samp : DomFactory;
export declare const Script : DomFactory;
export declare const Section : DomFactory;
export declare const Select : DomFactory;
export declare const Small : DomFactory;
export declare const Source : DomFactory;
export declare const Span : DomFactory;
export declare const Strike : DomFactory;
export declare const Strong : DomFactory;
export declare const Style : DomFactory;
export declare const Sub : DomFactory;
export declare const Sup : DomFactory;
export declare const Table : DomFactory;
export declare const Tbody : DomFactory;
export declare const Td : DomFactory;
export declare const Textarea : DomFactory;
export declare const Tfoot : DomFactory;
export declare const Th : DomFactory;
export declare const Thead : DomFactory;
export declare const Time : DomFactory;
export declare const Title : DomFactory;
export declare const Tr : DomFactory;
export declare const Track : DomFactory;
export declare const Tt : DomFactory;
export declare const U : DomFactory;
export declare const Ul : DomFactory;
export declare const Video : DomFactory;
export declare const Wbr : DomFactory;


export declare const a: HtmlCreator
export declare const abbr: HtmlCreator
export declare const acronym: HtmlCreator
export declare const address: HtmlCreator
export declare const applet: HtmlCreator
export declare const area: HtmlCreator
export declare const article: HtmlCreator
export declare const aside: HtmlCreator
export declare const audio: HtmlCreator
export declare const b: HtmlCreator
export declare const base: HtmlCreator
export declare const basefont: HtmlCreator
export declare const bb: HtmlCreator
export declare const bdo: HtmlCreator
export declare const big: HtmlCreator
export declare const blockquote: HtmlCreator
export declare const body: HtmlCreator
export declare const br: HtmlCreator
export declare const button: HtmlCreator
export declare const canvas: HtmlCreator
export declare const caption: HtmlCreator
export declare const center: HtmlCreator
export declare const cite: HtmlCreator
export declare const code: HtmlCreator
export declare const col: HtmlCreator
export declare const colgroup: HtmlCreator
export declare const command: HtmlCreator
export declare const datagrid: HtmlCreator
export declare const datalist: HtmlCreator
export declare const dd: HtmlCreator
export declare const del: HtmlCreator
export declare const details: HtmlCreator
export declare const dfn: HtmlCreator
export declare const dialog: HtmlCreator
export declare const dir: HtmlCreator
export declare const div: HtmlCreator
export declare const dl: HtmlCreator
export declare const dt: HtmlCreator
export declare const em: HtmlCreator
export declare const embed: HtmlCreator
export declare const eventsource: HtmlCreator
export declare const fieldset: HtmlCreator
export declare const figcaption: HtmlCreator
export declare const figure: HtmlCreator
export declare const font: HtmlCreator
export declare const footer: HtmlCreator
export declare const form: HtmlCreator
export declare const frame: HtmlCreator
export declare const frameset: HtmlCreator
export declare const h1: HtmlCreator
export declare const h2: HtmlCreator
export declare const h3: HtmlCreator
export declare const h4: HtmlCreator
export declare const h5: HtmlCreator
export declare const h6: HtmlCreator
export declare const head: HtmlCreator
export declare const header: HtmlCreator
export declare const hgroup: HtmlCreator
export declare const hr: HtmlCreator
export declare const i: HtmlCreator
export declare const iframe: HtmlCreator
export declare const img: HtmlCreator
export declare const input: HtmlCreator
export declare const ins: HtmlCreator
export declare const isindex: HtmlCreator
export declare const kbd: HtmlCreator
export declare const keygen: HtmlCreator
export declare const label: HtmlCreator
export declare const legend: HtmlCreator
export declare const li: HtmlCreator
export declare const link: HtmlCreator
export declare const map: HtmlCreator
export declare const mark: HtmlCreator
export declare const menu: HtmlCreator
export declare const meta: HtmlCreator
export declare const meter: HtmlCreator
export declare const nav: HtmlCreator
export declare const noframes: HtmlCreator
export declare const noscript: HtmlCreator
export declare const ol: HtmlCreator
export declare const optgroup: HtmlCreator
export declare const option: HtmlCreator
export declare const output: HtmlCreator
export declare const p: HtmlCreator
export declare const param: HtmlCreator
export declare const pre: HtmlCreator
export declare const progress: HtmlCreator
export declare const q: HtmlCreator
export declare const rp: HtmlCreator
export declare const rt: HtmlCreator
export declare const ruby: HtmlCreator
export declare const s: HtmlCreator
export declare const samp: HtmlCreator
export declare const script: HtmlCreator
export declare const section: HtmlCreator
export declare const select: HtmlCreator
export declare const small: HtmlCreator
export declare const source: HtmlCreator
export declare const span: HtmlCreator
export declare const strike: HtmlCreator
export declare const strong: HtmlCreator
export declare const style: HtmlCreator
export declare const sub: HtmlCreator
export declare const sup: HtmlCreator
export declare const table: HtmlCreator
export declare const tbody: HtmlCreator
export declare const td: HtmlCreator
export declare const textarea: HtmlCreator
export declare const tfoot: HtmlCreator
export declare const th: HtmlCreator
export declare const thead: HtmlCreator
export declare const time: HtmlCreator
export declare const title: HtmlCreator
export declare const tr: HtmlCreator
export declare const track: HtmlCreator
export declare const tt: HtmlCreator
export declare const u: HtmlCreator
export declare const ul: HtmlCreator
export declare const video: HtmlCreator
export declare const wbr: HtmlCreator