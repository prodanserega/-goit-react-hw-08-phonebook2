(this["webpackJsonp-goit-react-hw-08-phonebook2"]=this["webpackJsonp-goit-react-hw-08-phonebook2"]||[]).push([[3],{116:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(25),o=n.n(a),u=n(17),s=n(9),i=n(52),b=n(26),l=n(27),j=n(30),O=n(29),d=(n(68),n(7)),f=n(40),h=function(t){return t.auth.isAuthenticated},g=function(t){return t.auth.user.name},p=n(1),v={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"rgb(0,0,220)"}},x=Object(s.b)((function(t){return{isAuthenticated:h(t)}}),null)((function(t){var e=t.isAuthenticated;return Object(p.jsxs)("nav",{children:[Object(p.jsx)(u.b,{to:"/",exact:!0,style:v.link,activeStyle:v.activeLink,children:"Home"}),e&&Object(p.jsx)(u.b,{to:"/contacts",exact:!0,style:v.link,activeStyle:v.activeLink,children:"Contact"})]})})),C=n(28),k=n(34),m=n.n(k),y={onLogout:C.a.logOut},S=Object(s.b)((function(t){return{name:g(t)}}),y)((function(t){t.avatar;var e=t.name,n=t.onLogout;return Object(p.jsxs)("div",{className:m.a.wrapper,children:[Object(p.jsxs)("span",{className:m.a.name,children:["Welcome, ",e]}),Object(p.jsx)("button",{className:m.a.button,type:"button",onClick:n,children:"Go out"})]})})),E={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"rgb(0,0,220)"}};function U(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(u.b,{to:"/register",exact:!0,style:E.link,activeStyle:E.activeLink,children:"Sign Up"}),Object(p.jsx)(u.b,{to:"/login",exact:!0,style:E.link,activeStyle:E.activeLink,children:"Log in"})]})}var q,R,w,A,_,L,T,z={header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #2A363B"}},M=Object(s.b)((function(t){return{isAuthenticated:h(t)}}),null)((function(t){var e=t.isAuthenticated;return Object(p.jsxs)("header",{style:z.header,children:[Object(p.jsx)(x,{}),e?Object(p.jsx)(S,{}):Object(p.jsx)(U,{})]})})),B=n(21),G=n(33),I=["component","isAuthenticated","redirectTo"],N=Object(s.b)((function(t){return{isAuthenticated:h(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(G.a)(t,I);return Object(p.jsx)(d.b,Object(B.a)(Object(B.a)({},c),{},{render:function(t){return n?Object(p.jsx)(e,Object(B.a)({},t)):Object(p.jsx)(d.a,{to:r})}}))})),D=["component","isAuthenticated","redirectTo"],F=Object(s.b)((function(t){return{isAuthenticated:h(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(G.a)(t,D);return Object(p.jsx)(d.b,Object(B.a)(Object(B.a)({},c),{},{render:function(t){return n&&c.restricted?Object(p.jsx)(d.a,{to:r}):Object(p.jsx)(e,Object(B.a)({},t))}}))})),W=n(49),J=Object(r.lazy)((function(){return n.e(2).then(n.bind(null,209))})),P=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,210))})),H=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,220))})),Q=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,224))})),X=function(t){Object(j.a)(n,t);var e=Object(O.a)(n);function n(){return Object(b.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurretnUser()}},{key:"render",value:function(){return Object(p.jsxs)(f.a,{children:[Object(p.jsx)(M,{}),Object(p.jsx)(d.d,{children:Object(p.jsxs)(r.Suspense,{fallback:Object(p.jsx)(W.a,{}),children:[Object(p.jsx)(F,{exact:!0,path:"/",component:J}),Object(p.jsx)(F,{path:"/register",restricted:!0,redirectTo:"/contacts",component:P}),Object(p.jsx)(F,{path:"/login",restricted:!0,redirectTo:"/contacts",component:H}),Object(p.jsx)(N,{path:"/contacts",redirectTo:"/login",component:Q})]})})]})}}]),n}(r.Component),Z={onGetCurretnUser:C.a.getCurrentUser},K=Object(s.b)(null,Z)(X),V=n(32),Y=n(3),$=n(20),tt=n(58),et=n.n(tt),nt=n(2),rt=n(8),ct=n(15),at=ct.a.fetchContactsRequest,ot=ct.a.fetchContactsSuccess,ut=ct.a.fetchContactsError,st=ct.a.addContactRequest,it=ct.a.addContactSuccess,bt=ct.a.addContactError,lt=ct.a.deleteContactRequest,jt=ct.a.deleteContactSuccess,Ot=ct.a.deleteContactError,dt=ct.a.changeFilter,ft=ct.a.clearError,ht=[],gt="",pt=!1,vt=null,xt=Object(Y.c)(ht,(q={},Object(nt.a)(q,ot,(function(t,e){return e.payload})),Object(nt.a)(q,it,(function(t,e){var n=e.payload;return[].concat(Object(V.a)(t),[n])})),Object(nt.a)(q,jt,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),q)),Ct=Object(Y.c)(gt,Object(nt.a)({},dt,(function(t,e){return e.payload}))),kt=function(t,e){return e.payload},mt=Object(Y.c)(pt,(R={},Object(nt.a)(R,at,(function(){return!0})),Object(nt.a)(R,ot,(function(){return!1})),Object(nt.a)(R,ut,(function(){return!1})),Object(nt.a)(R,st,(function(){return!0})),Object(nt.a)(R,it,(function(){return!1})),Object(nt.a)(R,bt,(function(){return!1})),Object(nt.a)(R,lt,(function(){return!0})),Object(nt.a)(R,jt,(function(){return!1})),Object(nt.a)(R,Ot,(function(){return!1})),R)),yt=Object(Y.c)(vt,(w={},Object(nt.a)(w,ut,kt),Object(nt.a)(w,bt,kt),Object(nt.a)(w,Ot,kt),Object(nt.a)(w,ft,(function(){return null})),w)),St=Object(rt.b)({items:xt,filter:Ct,loading:mt,error:yt}),Et=n(4),Ut=Object(Y.c)({name:null,email:null},(A={},Object(nt.a)(A,Et.a.registerSuccess,(function(t,e){return e.payload.user})),Object(nt.a)(A,Et.a.loginSuccess,(function(t,e){return e.payload.user})),Object(nt.a)(A,Et.a.logoutSuccess,(function(){return null})),Object(nt.a)(A,Et.a.getCurrentUserSuccess,(function(t,e){return e.payload})),A)),qt=Object(Y.c)(null,(_={},Object(nt.a)(_,Et.a.registerSuccess,(function(t,e){return e.payload.token})),Object(nt.a)(_,Et.a.loginSuccess,(function(t,e){return e.payload.token})),Object(nt.a)(_,Et.a.logoutSuccess,(function(){return null})),_)),Rt=function(t,e){return e.payload},wt=Object(Y.c)(!1,(L={},Object(nt.a)(L,Et.a.registerSuccess,(function(){return!0})),Object(nt.a)(L,Et.a.loginSuccess,(function(){return!0})),Object(nt.a)(L,Et.a.getCurrentUserSuccess,(function(){return!0})),Object(nt.a)(L,Et.a.registerError,(function(){return!1})),Object(nt.a)(L,Et.a.loginError,(function(){return!1})),Object(nt.a)(L,Et.a.getCurrentUserError,(function(){return!1})),Object(nt.a)(L,Et.a.logoutSuccess,(function(){return!1})),L)),At=Object(Y.c)(null,(T={},Object(nt.a)(T,Et.a.registerError,Rt),Object(nt.a)(T,Et.a.loginError,Rt),Object(nt.a)(T,Et.a.logoutError,Rt),Object(nt.a)(T,Et.a.getCurrentUserError,Rt),Object(nt.a)(T,Et.a.clearError,(function(){return null})),T)),_t=Object(rt.b)({user:Ut,isAuthenticated:wt,token:qt,error:At}),Lt=Object(V.a)(Object(Y.d)({serializableCheck:{ignoredActions:[$.a,$.f,$.b,$.c,$.d,$.e]}})),Tt={key:"auth",storage:et.a,whitelist:["token"]},zt=Object(Y.a)({reducer:{auth:Object($.g)(Tt,_t),contacts:St},middleware:Lt,devTools:!1}),Mt={store:zt,persistor:Object($.h)(zt)};n(115);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(s.a,{store:Mt.store,children:Object(p.jsx)(i.a,{loading:null,persistor:Mt.persistor,children:Object(p.jsx)(u.a,{children:Object(p.jsx)(K,{})})})})}),document.getElementById("root"))},15:function(t,e,n){"use strict";var r=n(3),c=Object(r.b)("contacts/fetchContactsRequest"),a=Object(r.b)("contacts/fetchContactsSuccess"),o=Object(r.b)("contacts/fetchContactsError"),u=Object(r.b)("contacts/addContactRequest"),s=Object(r.b)("contacts/addContactSuccess"),i=Object(r.b)("contacts/addContactError"),b=Object(r.b)("contacts/deleteContactRequest"),l=Object(r.b)("contacts/deleteContactSuccess"),j=Object(r.b)("contacts/deleteContactError"),O=Object(r.b)("contacts/changeFilter"),d=Object(r.b)("contacts/clearError");e.a={fetchContactsRequest:c,fetchContactsSuccess:a,fetchContactsError:o,addContactRequest:u,addContactSuccess:s,addContactError:i,deleteContactRequest:b,deleteContactSuccess:l,deleteContactError:j,changeFilter:O,clearError:d}},19:function(t,e,n){"use strict";var r=n(16),c=n.n(r);c.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var a={set:function(t){c.a.defaults.headers.common.Authorization="Bearer ".concat(t)},unset:function(){c.a.defaults.headers.common.Authorization=""}};e.a={token:a,signUp:function(t){return c.a.post("/users/signup",t)},logIn:function(t){return c.a.post("/users/login",t)},logOut:function(){return c.a.post("/users/logout")},getCurrentUser:function(){return c.a.get("/users/current")},fetchContacts:function(){return c.a.get("/contacts")},addContact:function(t){return c.a.post("/contacts",t)},deleteContact:function(t){return c.a.delete("/contacts/".concat(t))}}},28:function(t,e,n){"use strict";var r=n(18),c=n.n(r),a=n(23),o=n(4),u=n(19);e.a={register:function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(o.a.registerRequest()),e.prev=1,e.next=4,u.a.signUp(t);case 4:r=e.sent,a=r.data,u.a.token.set(a.token),n(o.a.registerSuccess(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n(o.a.registerError(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(o.a.loginRequest()),e.prev=1,e.next=4,u.a.logIn(t);case 4:r=e.sent,a=r.data,u.a.token.set(a.token),n(o.a.loginSuccess(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n(o.a.loginError(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(o.a.logoutRequest()),t.prev=1,t.next=4,u.a.logOut();case 4:u.a.token.unset(),e(o.a.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(o.a.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,s,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),a=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return u.a.token.set(a),e(o.a.getCurrentUserRequest()),t.prev=5,t.next=8,u.a.getCurrentUser();case 8:s=t.sent,i=s.data,e(o.a.getCurrentUserSuccess(i)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),e(o.a.getCurrentUserError(t.t0.message));case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}()}}},34:function(t,e,n){t.exports={wrapper:"UserMenu_wrapper__1Xxcm",avatar:"UserMenu_avatar__1zjZa",name:"UserMenu_name__1M7_G",button:"UserMenu_button__1LGtT"}},4:function(t,e,n){"use strict";var r=n(3),c=Object(r.b)("auth/registerRequest"),a=Object(r.b)("auth/registerSuccess"),o=Object(r.b)("auth/registerError"),u=Object(r.b)("auth/loginRequest"),s=Object(r.b)("auth/loginSuccess"),i=Object(r.b)("auth/loginError"),b=Object(r.b)("auth/logoutRequest"),l=Object(r.b)("auth/logoutSuccess"),j=Object(r.b)("auth/logoutError"),O=Object(r.b)("auth/getCurrentUserRequest"),d=Object(r.b)("auth/getCurrentUserSuccess"),f=Object(r.b)("auth/getCurrentUserError"),h=Object(r.b)("auth/clearError");e.a={registerRequest:c,registerSuccess:a,registerError:o,logoutRequest:b,logoutSuccess:l,logoutError:j,loginRequest:u,loginSuccess:s,loginError:i,getCurrentUserRequest:O,getCurrentUserSuccess:d,getCurrentUserError:f,clearError:h}},40:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(53),c=n.n(r),a=n(1);function o(t){var e=t.children;return Object(a.jsx)("div",{className:c.a.container,children:e})}},49:function(t,e,n){"use strict";var r=n(26),c=n(27),a=n(30),o=n(29),u=n(0),s=n(56),i=n.n(s),b=(n(112),n(57)),l=n.n(b),j=n(1),O=function(t){Object(a.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={},t}return Object(c.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:l.a.loader,children:Object(j.jsx)(i.a,{type:"Circles",color:"#099110",height:80,width:80})})}}]),n}(u.Component);e.a=O},53:function(t,e,n){t.exports={container:"Container_container__2Acq8"}},57:function(t,e,n){t.exports={loader:"Loader_loader__21Qjb"}},68:function(t,e,n){}},[[116,6,7]]]);
//# sourceMappingURL=main.b9fc0695.chunk.js.map