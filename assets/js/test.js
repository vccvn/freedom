var { _class, Dom, Html, isString, Component, app, Div, P, I, A, Span, H1, H2, H3, H4, observe,a,div,p,h2,h3 } = FD;

var AppComponent = Component.maker("AppComponent", {
    $autoRender: true,
    data: {
        name: "Test",
        count: 0
    },
    computed: {
        powOfCount: function(){
            return Math.pow(this.count, 3);
        }
    },
    changeCount: function(e){
        this.count++;
    },
    changeName: function(name){
        this.name = name;
    },
    builder: function(){
        var _a = Div('.app-main', [
            H2("Hello World"),
            P("Tên: {{name}}"),
            P("click: {{count}}"),
            P("pow: {{powOfCount}}"),
            
            P(A("#a[href=#a]", "Click Me", {
                onClick: "changeCount",
                
            }))
        ]);
        return _a;
    }
});
var app = AppComponent();
document.body.appendChild(app.el);