var { _class, Dom, Html, isString, Component, app, Div, P, I, A, Span, H1, H2, H3, H4, observe,a,div,p,h2,h3 } = FD;

var AppComponent = _class("AppComponent").extends(Component)({
    constructor(props) {
        this.props = props;
    },
    builder: function builder() {
        return [
            Div('.wrapper', {
                setTitle: function (title) {
                    this.attr(title);
                },
                children: [
                    P('#paragraph', 'Lorem'),
                    P('#paragraph', 'Lorem2'),
                    Div('.net', {
                        receiveMessage: function (message) {
                            this.callParent('receiveMessage', [this, message]);
                            return false;
                        },
                        children: ["Hello World ", I("haha")]
                    })
                ]
            }),
            Div('.footer', A("[href=#]", "Click Me", {
                onClick: function (e) {
                    e.preventDefault();
                    console.log("Click");
                    this.callParent('receiveMessage', [this, "Click A"]);
                }
            }))
        ]
    },
    receiveMessage: function (child, message) {
        console.log(child, message);
    },
});
var ac = AppComponent({name: "Doãn"});
ac.appendTo(document.body);

var div = Div('.test-div', {
    data: {
        source: 1,
        uuid: FD.Str.rand()
    },
    methods:{
        handle: function (event) {
            console.log(event);
        }
    },
    attrs:{
        $title: "{{uuid}}"
    },
    content: "Test"
});

document.body.appendChild(div.el)
var Demo = Component.maker('Demo', {
    $selector: "demo.dkm",
    $stack: 1,
    over: 10,
    bind$id: "{{demoID}}",
    sync$classData: '{{demoClass}}',
    data: {
        demoID: 'Doan',
        demoClass: 'test',
        name: "Doãn"
    },
    set$stack: function(val){
        console.log('set Stack', val);
    },
    constructor: function(data){
        this.data1 = data;
    },

    builder: function(){
        var self = this;
        return [
            "Tên: {{name}}",
            Div(".header", H3(".sub-title", "Tiêu đề")),
            Div(".container", Div(".main", P("Doãn Đẹp Trai"), P(".link", A(".link-item", {
                href: "#Doan",
                content: "Click Me {{{turn}}) {{pow}}",
                data: {
                    turn: 0,
                    pow: 0
                },
                onclick: function(e){
                    e.preventDefault();
                    this.turn++;
                    this.pow = Math.pow(this.turn, 2);
                    self.over++;
                }
            }))))
        ]
    }
});

var demo = Demo("demo");

document.body.appendChild(demo.el)

var Test = Component.maker("Test", {
    $selector: "test#dam.haha",
    $stack: 1,
    over: 10,
    bind$id: "{{demoID}}",
    sync$classData: '{{demoClass}}',
    data: {
        demoID: 'Doan',
        demoClass: 'test',
        name: "Doãn"
    },
    set$stack: function(val){
        console.log('set Stack', val);
    },
    constructor: function(data){
        this.data1 = data;
    },

    builder: function(){
        var self = this;
        return [
            "Tên: {{name}}",
            div(".header", h3(".sub-title", "Tiêu đề")),
            div(".container", div(".main", p("Doãn Đẹp Trai"), p(".link", a(".link-item", {
                href: "#Doan",
                content: "Click Me {{{turn}}) {{pow}}",
                data: {
                    turn: 0,
                    pow: 0
                },
                onclick: function(e){
                    e.preventDefault();
                    this.turn++;
                    this.pow = Math.pow(this.turn, 2);
                    self.over++;
                }
            }))))
        ]
    }
})

var test = Test("test");
document.body.appendChild(test.el)
