var { _class, Dom, Html, isString, Component, app, Div, P, I, A, observe } = FD;
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
                            this.callParent('reciveMessage', [this, message]);
                            return false;
                        },
                        children: ["Hello World ", I("haha")]
                    })
                ]
            }),
            Div('.footer', A("[href=#]", "Click Me", {
                onCllick: function (e) {
                    console.log("Click");
                    this.callParent('reciveMessage', [this, "Click A"]);
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