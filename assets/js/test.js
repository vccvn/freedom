var { _class, Dom, Html, isString, Component, app, Div, P, I, A, Span, H1, H2, H3, H4, observe, a, div, p, h2, h3, Loop, Str, Num, ForEach } = FreeDom;

var AppComponent = Component.maker("AppComponent", {
    $autoRender: true,
    data: {
        name: "Test",
        count: 0,
        users: [
            {
                name: "Doan",
                age: 30
            },
            {
                name: "Doan 2",
                age: 31
            },
            {
                name: "Doan 3",
                age: 32
            },
            {
                name: "abc",
                age: 21
            }
        ],
    },
    computed: {
        powOfCount() {
            return Math.pow(this.count, 3);
        },
        userCount(){
            return this.users.length;
        }
        
    },
    changeCount(e) {
        this.count++;
    },
    changeName(name) {
        this.name = name;
    },
    addRandomUser(){
        this.users.push({
            name: Str.rand(),
            age: Num.rand(10, 89)
        })
    },
    removeRandomUser(){
        var r = this.users.splice(Num.rand(0, this.users.length - 1), 1);
    },
    log(name){
        console.log(name);
    },
    reverseUserList(){
        this.users = this.users.reverse();
    },
    builder() {
        return Div('.app-main', [
            H2("Hello World"),
            P("Tên: {{name}}"),
            P("click: {{count}}"),
            P("pow: {{powOfCount}}"),

            P(A("#a[href=#a]", "Click Me", {
                onClick: "changeCount()",

            })),
            ForEach("users", "user", Div(".user", [
                H4(".name", "Họ tên: {{user.name}}", {
                    onClick: "log(user.name);alert(user.age)"
                }),
                P(".age", "Tuổi: {{user.age}}"),

            ])),
            P("user: {{userCount}}"),

            P(A("#a[href=#a]", "Add User", {
                onClick: "addRandomUser()",

            }), " | ", A("#a[href=#a]", "Remove User", {
                onClick: "removeRandomUser()",

            }), " | ", A("#a[href=#a]", "Reverse List", {
                onClick: "reverseUserList()",

            }))
            
        ]);
    }
});
var app = AppComponent();
document.body.appendChild(app.el);