var { _class, Dom, Html, isString, Component, app, Div, P, I, A } = FD;
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
                        receiveMessage: function (params) {
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
    }
})