(this["webpackJsonpmobile-login-project"]=this["webpackJsonpmobile-login-project"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),i=n(8),c=n.n(i),r=(n(13),n(2)),o=n(3),l=n(5),d=n(4),h=(n(14),n.p+"static/media/Rectangle 1.b47d0b06.png"),u=(n(15),n(0)),m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"base-container",ref:this.props.containerRef,children:[Object(u.jsx)("div",{className:"header",children:"Login"}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("div",{className:"image",children:Object(u.jsx)("img",{src:h})}),Object(u.jsxs)("div",{className:"form",children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"username",children:"Username"}),Object(u.jsx)("input",{type:"text",name:"username",placeholder:"username"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{type:"password",name:"password",placeholder:"password"})]})]})]}),Object(u.jsx)("div",{className:"footer",children:Object(u.jsx)("button",{className:"btn",type:"submit",children:"Login"})})]})}}]),n}(s.Component),j=n(6),b=(s.Component,function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).onChangeName=s.onChangeName.bind(Object(j.a)(s)),s.onChangeEmail=s.onChangeEmail.bind(Object(j.a)(s)),s.onChangePassword=s.onChangePassword.bind(Object(j.a)(s)),s.onSubmit=s.onSubmit.bind(Object(j.a)(s)),s.state={username:"",email:"",phone:""},s}return Object(o.a)(n,[{key:"onChangeName",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault()}},{key:"componentDidMount",value:function(){this.userData=JSON.parse(localStorage.getItem("username")),localStorage.getItem("username")?this.setState({username:this.userData.name,email:this.userData.email,password:this.userData.password}):this.setState({username:"",email:"",password:""})}},{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("username",JSON.stringify(t))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"base-container",ref:this.props.containerRef,children:[Object(u.jsx)("div",{className:"header",children:"Register"}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("div",{className:"image",children:Object(u.jsx)("img",{src:h})}),Object(u.jsxs)("div",{onSubmit:this.onSubmit,className:"form",children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"username",children:"Username"}),Object(u.jsx)("input",{type:"text",name:"username",placeholder:"username",value:this.state.username,onChange:this.onChangeName})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"email",children:"Email"}),Object(u.jsx)("input",{type:"email",name:"email",placeholder:"email",value:this.state.email,onChange:this.onChangeEmail})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{type:"password",name:"password",placeholder:"password",value:this.state.password,onChange:this.onChangePassword})]})]})]}),Object(u.jsx)("div",{className:"footer",children:Object(u.jsx)("button",{className:"btn",type:"submit",children:"Register"})})]})}}]),n}(s.Component)),g=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={isLogginActive:!0},s}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.rightSide.classList.add("right")}},{key:"changeState",value:function(){this.state.isLogginActive?(this.rightSide.classList.remove("right"),this.rightSide.classList.add("left")):(this.rightSide.classList.remove("left"),this.rightSide.classList.add("right")),this.setState((function(e){return{isLogginActive:!e.isLogginActive}}))}},{key:"render",value:function(){var e=this,t=this.state.isLogginActive,n=t?"Register":"Login",s=t?"login":"register";return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"login",children:[Object(u.jsxs)("div",{className:"container",ref:function(t){return e.container=t},children:[t&&Object(u.jsx)(m,{containerRef:function(t){return e.current=t}}),!t&&Object(u.jsx)(b,{containerRef:function(t){return e.current=t}})]}),Object(u.jsx)(p,{current:n,currentActive:s,containerRef:function(t){return e.rightSide=t},onClick:this.changeState.bind(this)})]})})}}]),n}(a.a.Component),p=function(e){return Object(u.jsx)("div",{className:"right-side",ref:e.containerRef,onClick:e.onClick,children:Object(u.jsx)("div",{className:"inner-container",children:Object(u.jsx)("div",{className:"text",children:e.current})})})},O=g,v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),v()}},[[17,1,2]]]);
//# sourceMappingURL=main.0171e14a.chunk.js.map