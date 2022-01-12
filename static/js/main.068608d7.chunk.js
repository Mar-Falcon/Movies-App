(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{103:function(e,t,n){},254:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(92),s=n.n(c),i=(n(103),n(104),n(105),n(7)),l=n(10),o=n(0),j=function(){return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:"",alt:""}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h4",{className:"card-title",children:"My title"}),Object(o.jsx)("p",{className:"card-text text-secundary",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vel natus quam repellat at commodi fuga aut, dolorum itaque eum eius atque quas veritatis consequatur rem excepturi aliquam ullam! Error."}),Object(o.jsx)("a",{href:"#!",className:"btn btn-outline-secondary",children:"Go to this website"})]})]})},u=function(){return Object(o.jsx)("div",{className:"container d-flex justify-content-center align-items-center h-100",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-md-4",children:Object(o.jsx)(j,{})})})})},d=n(9),b=n(2),m=n.n(b),h=n(5),x=n(17),O={name:"",lastName:"",email:"",password:"",birthdate:""},p=n(16),f="This field is required",v="Wrong format",g={EIGHT:"Must be at least 8 characters",CHARACTERS:"It must have uppercase, lowercase and numbers"},N=p.b().shape({email:p.c().email(v).required(f),password:p.c().required(f).min(8,g.EIGHT).matches(/^(?=.*[a-z])(?=.*\d)[a-z\d\w\W]{8,}$/,g.CHARACTERS),name:p.c().required(f),lastName:p.c().required(f),birthdate:p.a().required(f)}),w=n(44),y=n(8),k=n(96),S=n.n(k).a.create({baseURL:"https://todoapp-b6fb1-default-rtdb.firebaseio.com"}),U=function(e){var t=[];for(var n in e)t.push(Object(d.a)({id:n},e[n]));return t},C=function(){var e=Object(h.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/users.json");case 2:return t=e.sent,e.abrupt("return",U(t.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.post("/users.json",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.delete("/users/".concat(t,".json"));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q={getUsers:C,addUser:E,deleteUser:I},F=function(){var e=Object(a.useState)(),t=Object(y.a)(e,2),n=t[0],r=t[1],c=function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.addUser(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(h.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.getUsers();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("are you sure you want to delete this user?")){e.next=3;break}return e.next=3,q.deleteUser(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{addUser:c,getUsers:s,users:n,deleteUser:i}},A=Object(a.createContext)({currentUser:{},setCurrentUser:function(){}}),T=function(e){var t=e.children,n=Object(a.useState)({}),r=Object(y.a)(n,2),c=r[0],s=r[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(A.Provider,{value:{currentUser:c,setCurrentUser:s},children:t})})},L=function(){var e=function(){var e=Object(h.a)(m.a.mark((function e(n,a){var r,c,i,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.get("/users.json");case 3:if(r=e.sent,c=U(r.data),!(i=c.find((function(e){return e.email===n&&e.password===a})))){e.next=13;break}return e.next=9,b(i);case 9:(l=e.sent)&&(s(l),t(i)),e.next=14;break;case 13:throw new Error("El usuario no existe");case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t,n){return e.apply(this,arguments)}}(),t=Object(a.useContext)(A).setCurrentUser,n=Object(a.useState)(localStorage.getItem("user-token")||void 0),r=Object(y.a)(n,2),c=r[0],s=r[1],l=Object(a.useState)(),o=Object(y.a)(l,2),j=o[0],u=o[1],d=Object(i.f)().push;Object(a.useEffect)((function(){x()}),[]);var b=function(){var e=Object(h.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=Math.random().toString(36).substr(2),e.next=4,S.patch("/users/".concat(t.id,".json"),{sessionToken:n});case 4:return e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){c&&localStorage.setItem("user-token",c)}),[c]);var x=function(){var e=Object(h.a)(m.a.mark((function e(){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.get("/users.json");case 3:a=e.sent,r=U(a.data),c&&(n=r.find((function(e){return e.sessionToken===c}))),n?(t(n),u(!0)):u(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return{login:e,loginWithToken:x,logout:function(){localStorage.removeItem("user-token"),d("/login"),t(void 0)},hasUserLoggedIn:j}},H=function(){var e,t,n,a,r=F().addUser,c=Object(i.f)().push,s=Object(x.d)({defaultValues:O,resolver:Object(w.a)(N)}),j=s.handleSubmit,u=s.register,b=s.formState,p=function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r(t);case 3:c("/login"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("form",{action:"",onSubmit:j(p),className:"container row g-3",children:[Object(o.jsxs)("div",{className:"col-md-3",children:[Object(o.jsx)("label",{htmlFor:"",className:"form-label",children:"Name"}),Object(o.jsx)("input",Object(d.a)(Object(d.a)({type:"text"},u("name")),{},{className:"form-control"})),Object(o.jsx)("span",{className:"text-danger",children:null===(e=b.errors.name)||void 0===e?void 0:e.message})]}),Object(o.jsxs)("div",{className:"col-md-3",children:[Object(o.jsx)("label",{htmlFor:"",className:"form-label",children:"Lastname"}),Object(o.jsx)("input",Object(d.a)(Object(d.a)({type:"text"},u("lastName")),{},{className:"form-control"})),Object(o.jsx)("span",{className:"text-danger",children:null===(t=b.errors.name)||void 0===t?void 0:t.message})]}),Object(o.jsxs)("div",{className:"col-md-6",children:[Object(o.jsx)("label",{htmlFor:"",className:"form-label",children:"Birthdate"}),Object(o.jsx)("input",Object(d.a)(Object(d.a)({type:"Date"},u("birthdate")),{},{className:"form-control"})),Object(o.jsx)("span",{className:"text-danger",children:b.errors.birthdate})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"",className:"form-label",children:"E-mail"}),Object(o.jsx)("input",Object(d.a)(Object(d.a)({type:"email"},u("email")),{},{className:"form-control"})),Object(o.jsx)("span",{className:"text-danger",children:null===(n=b.errors.email)||void 0===n?void 0:n.message})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"",className:"form-label",children:"Password"}),Object(o.jsx)("input",Object(d.a)(Object(d.a)({type:"password"},u("password")),{},{className:"form-control"})),Object(o.jsx)("span",{className:"text-danger",children:null===(a=b.errors.password)||void 0===a?void 0:a.message})]}),Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)("button",{type:"submit",className:"btn btn-primary m-auto",children:"Create Account"})}),Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)(l.b,{to:"/login",className:"",children:"I have an account"})})]})},M={email:"",password:""},R=p.b().shape({email:p.c().email(v).required(f),password:p.c().required(f).min(8,g.EIGHT).matches(/^(?=.*[a-z])(?=.*\d)[a-z\d\w\W]{8,}$/)}),z=function(){var e,t,n=L().login,a=Object(i.f)().push,r=Object(x.d)({defaultValues:M,resolver:Object(w.a)(R)}),c=r.handleSubmit,s=r.register,j=r.formState,u=function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t.email,t.password);case 2:a("/");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("form",{action:"",onSubmit:c(u),className:"container row g-3",children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"",className:"form-label",children:"E-mail"}),Object(o.jsx)("input",Object(d.a)(Object(d.a)({id:"email",type:"email"},s("email")),{},{className:"form-control"})),Object(o.jsx)("span",{className:"text-white",children:null===(e=j.errors.email)||void 0===e?void 0:e.message})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"",className:"form-label",children:"Password"}),Object(o.jsx)("input",Object(d.a)(Object(d.a)({id:"pass",type:"password"},s("password")),{},{className:"form-control"})),Object(o.jsx)("span",{className:"text-white",children:null===(t=j.errors.password)||void 0===t?void 0:t.message})]}),Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)("button",{type:"submit",className:"btn btn-primary m-auto",children:"Login on"})}),Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)(l.b,{to:"/signup",className:"",children:"I don\xb4t have an account"})})]})},D=n(43),G=n(42),W=function(){var e=F(),t=e.users,n=e.getUsers,r=e.deleteUser;return Object(a.useEffect)((function(){n()}),[n,t]),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{className:"col",children:[Object(o.jsx)("th",{scope:"col",children:"Name"}),Object(o.jsx)("th",{scope:"col",children:"LastName"}),Object(o.jsx)("th",{scope:"col",children:"Email"}),Object(o.jsx)("th",{scope:"col",children:"Birthdate"})]})}),Object(o.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(o.jsxs)("tr",{className:"col",children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.lastName}),Object(o.jsx)("td",{children:e.email}),Object(o.jsx)("td",{children:(t=e.birthdate,new Intl.DateTimeFormat("es-AR").format(new Date(t)))}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{className:"btn btn-danger",onClick:function(){return r(e.id)},children:Object(o.jsx)(G.a,{icon:D.b})})})]});var t}))})]})})},B=function(){return Object(o.jsx)("div",{children:"Movies"})},P=function(){return Object(o.jsx)("div",{children:"Series"})},J=n(98),V=n.n(J),$=function(){var e=Object(a.useState)(),t=Object(y.a)(e,1)[0];return Object(o.jsx)("div",{style:{position:"fixed",top:0,right:0,bottom:0,left:0,display:"flex",alignItems:"center",justifyContent:"center"},children:Object(o.jsx)(V.a,{color:"#555",loading:t,size:60})})},K=function(){var e=L().logout;return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light p-3",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("div",{className:"navbar-brand text-white",children:Object(o.jsxs)("h1",{children:["Cinem",Object(o.jsx)("em",{children:"ADA"})]})}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)(G.a,{icon:D.a})}),Object(o.jsxs)("div",{className:"navbar-collapse collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{to:"/",className:"nav-link active",children:" Home "})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{to:"/signup",className:"nav-link active",children:" SignUp "})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{to:"/movies",className:"nav-link active",children:" Movies "})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{to:"/series",className:"nav-link active",children:" Series "})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{to:"/users",className:"nav-link active",children:" Users "})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{to:"/admin",className:"nav-link active",children:" Admin "})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{to:"/login",className:"nav-link active",children:" Login "})})]}),Object(o.jsx)("button",{className:"btn",onClick:e,children:" SignOff "})]})]})})},Q=function(){return Object(o.jsx)("header",{className:"header",children:Object(o.jsx)(K,{})})},X=function(e){var t=e.children,n=e.id;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("main",{id:n,className:"main",children:t})})},Y=function(e){var t=e.children,n=e.hideHeader,a=e.mainClass;return Object(o.jsxs)(o.Fragment,{children:[!n&&Object(o.jsx)(Q,{}),Object(o.jsx)(X,{id:a,children:t})]})},Z=["/login","/signup"],_=function(e){return function(){var t=Object(i.f)(),n=t.push,a=t.location,r=L().hasUserLoggedIn;return void 0===r?Object(o.jsx)($,{}):(r&&Z.includes(a.pathname)&&n("/"),!1!==r||Z.includes(a.pathname)||n("/login"),Object(o.jsx)(e,{}))}},ee=_((function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container d-flex justify-content-center align-items-center h-100",children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("h1",{className:"text-white d-flex justify-content-center",children:["Cinem",Object(o.jsx)("em",{children:"ADA"})]}),Object(o.jsx)(H,{})]})})})})),te=_((function(){return Object(o.jsx)(Y,{children:Object(o.jsx)("div",{children:"Admin"})})})),ne=_((function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(z,{})})})),ae=_((function(){return Object(o.jsx)(Y,{children:Object(o.jsx)(W,{})})})),re=_((function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(Y,{children:Object(o.jsx)(u,{})})})})),ce=_((function(){return Object(o.jsx)(Y,{children:Object(o.jsx)(B,{})})})),se=_((function(){return Object(o.jsx)(Y,{children:Object(o.jsx)(P,{})})})),ie=function(){return Object(o.jsx)(T,{children:Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(l.a,{children:Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{path:"/signup",component:ee}),Object(o.jsx)(i.a,{path:"/admin",component:te}),Object(o.jsx)(i.a,{path:"/movies",component:ce}),Object(o.jsx)(i.a,{path:"/series",component:se}),Object(o.jsx)(i.a,{path:"/login",component:ne}),Object(o.jsx)(i.a,{path:"/users",component:ae}),Object(o.jsx)(i.a,{path:"/",component:re})]})})})})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(ie,{})}),document.getElementById("root"))}},[[254,1,2]]]);
//# sourceMappingURL=main.068608d7.chunk.js.map