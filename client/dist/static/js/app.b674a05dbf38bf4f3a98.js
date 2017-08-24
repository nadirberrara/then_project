webpackJsonp([0],[,,,,function(t,e,s){"use strict";function a(t){return u.post("/signup",t).then(function(t){return t.data})}function n(t,e,s){return u.post("/login",{username:t,password:e}).then(function(t){var e=t.data,a=e.token,n=e.name;return localStorage.setItem("jwtToken",a),localStorage.setItem("user.name",n),r(s),t.data})}function i(){return u.get("/secret").then(function(t){return t.data})}function r(t){var e=localStorage.jwtToken,s=localStorage["user.name"];e&&(l.a.defaults.headers.common.Authorization="Bearer "+e,t.$root.user={token:e,name:s})}function o(t){console.log("LOGOUT"),localStorage.removeItem("jwtToken"),delete l.a.defaults.headers.common.Authorization,t.$root.user=null}var c=s(2),l=s.n(c),u=l.a.create({baseURL:"/api"});e.a={signup:a,login:n,logout:o,secret:i,loadUser:r}},,,,,,,function(t,e,s){function a(t){s(42)}var n=s(1)(s(37),s(62),a,"data-v-535fafeb",null);t.exports=n.exports},function(t,e,s){"use strict";var a=s(5),n=s(65),i=s(54),r=s.n(i),o=s(55),c=s.n(o),l=s(56),u=s.n(l),v=s(57),d=s.n(v),p=s(53),_=s.n(p);a.a.use(n.a),e.a=new n.a({mode:"history",routes:[{path:"/epics/:epicId",name:"Epic",component:r.a},{path:"/",name:"Home",component:c.a},{path:"/login",name:"Login",component:u.a},{path:"/signup",name:"Signup",component:d.a},{path:"/create",name:"Create",component:_.a}]})},function(t,e,s){function a(t){s(43)}var n=s(1)(s(31),s(63),a,null,null);t.exports=n.exports},,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(4);e.default={name:"app",created:function(){a.a.loadUser(this)},methods:{logout:function(t){t.preventDefault(),a.a.logout(this)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),n=s.n(a),i=n.a.create({baseURL:"/api"});e.default={props:["stories","epicId"],data:function(){return{title:"",text:"",epic:"",bravo:!1,danger:!1}},methods:{createNewEpic:function(){var t=this;i.post("epics/",{mainStory:this.text,title:this.title}).then(function(e){t.title="",t.text="",t.bravo=!0,t.newEpic=e})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),n=s.n(a),i=s(11),r=s.n(i),o=n.a.create({baseURL:"/api"});e.default={name:"hello",data:function(){return{text:"",epic:{},story:{},allStories:[],edit:!1}},created:function(){var t=this;this.getEpic(this.$route.params.epicId).then(function(e){t.epic=e}),this.getStories().then(function(e){t.allStories=e})},methods:{addNext:function(t){this.epic.nextStories.push(t)},getEpic:function(t){return o.get("/epics/"+t).then(function(t){return t.data})},getStories:function(){return console.log("this.$route",this.$route),o.get("/epics/"+this.$route.params.epicId+"/stories").then(function(t){return t.data})},cancelEditing:function(){this.edit=!1},addNewStory:function(){this.edit=!0},submitNewStory:function(){var t=this;this.edit=!1,o.post("/epics/"+this.epic._id+"/stories",{text:this.text}).then(function(e){return t.getStories().then(function(e){t.allStories=e}),e.data}),this.text=""}},components:{tagStories:r.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),n=s.n(a);e.default={name:"hello",data:function(){return{msg:"WELCOME",epics:null}},created:function(){var t=this,e=n.a.create({baseURL:"/api"});(function(){return e.get("/epics/").then(function(t){return t.data})})().then(function(e){t.epics=e})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(4);e.default={data:function(){return{error:"",loading:!1,username:"",password:""}},computed:{buttonClasses:function(){return{"is-loading":this.loading}}},methods:{login:function(){var t=this;this.error="",this.loading=!0,a.a.login(this.username,this.password).then(function(e){t.$router.push("/")}).catch(function(e){t.error=e.message}).then(function(){t.loading=!1})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(4);e.default={data:function(){return{response:"",username:"",password:"",error:"",loginSignup:!0}},methods:{signup:function(){var t=this;this.error="",a.a.signup({username:this.username,password:this.password}).then(function(e){t.response=e}).catch(function(e){t.error=e.response.data})},login:function(){var t=this;a.a.login(this.username,this.password,this).then(function(e){t.response=e,t.$root.user={username:t.username,token:e.token}}).catch(function(e){t.error=e.response.data})},secret:function(){var t=this;a.a.secret().then(function(e){t.response=e}).catch(function(e){t.response=e})},loginFromSignup:function(){this.loginSignup=!1},SignupFromLogin:function(){this.loginSignup=!0}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),n=s.n(a),i=s(11),r=(s.n(i),n.a.create({baseURL:"/api"}));e.default={props:["stories","epicId"],data:function(){return{styles:{"word-break":"break-word"},like:null,story:null,userId:null}},methods:{likeStory:function(t){r.post("/epics/likes",{storyId:t._id}).then(function(t){})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(5),n=s(13),i=s.n(n),r=s(12);a.a.config.productionTip=!1,new a.a({el:"#app",router:r.a,data:{user:null},template:"<App/>",components:{App:i.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,s){t.exports=s.p+"static/img/logo-then2.9b06dc9.png"},function(t,e,s){t.exports=s.p+"static/img/logo3-copie2.162698b.png"},function(t,e,s){t.exports=s.p+"static/img/people2.9125c09.jpg"},function(t,e,s){t.exports=s.p+"static/img/IH-2.f4ae062.jpg"},function(t,e,s){t.exports=s.p+"static/img/IH-3.b92d12d.jpg"},function(t,e,s){t.exports=s.p+"static/img/IH.a8fafdc.jpg"},function(t,e,s){function a(t){s(44)}var n=s(1)(s(32),s(64),a,"data-v-793aa714",null);t.exports=n.exports},function(t,e,s){function a(t){s(39)}var n=s(1)(s(33),s(58),a,"data-v-03d656c6",null);t.exports=n.exports},function(t,e,s){function a(t){s(40)}var n=s(1)(s(34),s(59),a,"data-v-07c1b177",null);t.exports=n.exports},function(t,e,s){var a=s(1)(s(35),s(61),null,null,null);t.exports=a.exports},function(t,e,s){function a(t){s(41)}var n=s(1)(s(36),s(60),a,"data-v-092d0930",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero"},[s("div",{},[t.epic&&t.allStories?s("div",{staticClass:"epic"},[s("div",{staticClass:"titre"},[s("h3",{staticClass:"title"},[t._v(" "+t._s(t.epic.title)+" ")]),t._v(" "),s("p",[t._v("-")]),t._v(" "),s("p",[t._v(t._s(t.epic.mainStory))])]),t._v(" "),s("div",[s("div",{staticClass:"suite"},t._l(t.epic.nextStories,function(e){return s("p",[s("span",{staticClass:"blue"},[t._v("\n              then,\n            ")]),t._v(" "+t._s(e))])}))])]):t._e(),t._v(" "),t.edit?t._e():s("div",{staticClass:"is-white andThenButton"},[s("button",{staticClass:"button is-large",on:{click:function(e){t.addNewStory()}}},[t._v("my then")])]),t._v(" "),s("div",{staticClass:"column is-gapless"},[t.edit?s("div",{staticClass:"addStory"},[s("span",{staticClass:"tag is-medium"},[t._v("then,")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"textarea is-medium",attrs:{name:"newStory",cols:"80",rows:"3"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),s("span",{staticClass:"tag is-medium"},[t._v("then,")]),t._v(" "),s("br"),s("br"),t._v(" "),s("button",{staticClass:"button",attrs:{type:"submit"},on:{click:function(e){t.submitNewStory()}}},[t._v(" submit my story ")]),t._v(" "),s("button",{staticClass:"button",attrs:{type:"submit"},on:{click:function(e){t.cancelEditing()}}},[t._v(" cancel ")])]):s("div",[s("div",{staticClass:"stories"},[s("div",[s("tag-stories",{attrs:{stories:t.allStories,epicId:t.epic._id},on:{nextStory:t.addNext}})],1)])])])])])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{},[t._m(0),t._v(" "),s("div",{staticClass:"card"},[t._m(1),t._v(" "),t._m(2),t._v(" "),s("footer",{staticClass:"card-footer"},[s("router-link",{staticClass:"card-footer-item ",attrs:{to:"/signup"}},[t._v("Signup")]),t._v(" "),s("router-link",{staticClass:"card-footer-item ",attrs:{to:"/signup"}},[t._v("Login")])],1)]),t._v(" "),s("div",{staticClass:"hero "},[t._m(3),t._v(" "),t._l(t.epics,function(e){return s("li",[s("router-link",{attrs:{to:"/epics/"+e._id}},[t._v(t._s(e.title))])],1)}),t._v(" "),s("h1",{staticClass:"title "},[s("span",{staticClass:"fa fa-arrow-down "}),t._v(" "),s("p",[s("router-link",{attrs:{to:"/create"}},[t._v("Create your Story\n                ")])],1)])],2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns photos"},[a("div",{staticClass:"column"},[a("img",{staticStyle:{width:"500px"},attrs:{src:s(50)}})]),t._v(" "),a("div",{staticClass:"column"},[a("img",{staticStyle:{width:"500px"},attrs:{src:s(51)}})]),t._v(" "),a("div",{staticClass:"column"},[a("img",{staticStyle:{width:"500px"},attrs:{src:s(52)}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"card-header"},[s("p",{staticClass:"card-header-title"},[t._v("\n                Then...\n            ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-content"},[s("div",{staticClass:"content"},[s("h1",[t._v("Rules :")]),t._v(" "),s("li",[t._v("Login or Signup")]),t._v(" "),s("li",[t._v("Participate a Story : Read & Vote")]),t._v(" "),s("li",[t._v("Create your own story")]),t._v(" "),s("li",[t._v("Be there at 8 for updates")]),t._v(" "),s("li",[t._v("Share with friends")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"title "},[s("p",[t._v("Select a Story")]),t._v(" "),s("span",{staticClass:"fa fa-arrow-down icon is-large"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"columns"},[t.loginSignup?s("div",{staticClass:"column"},[s("h1",{staticClass:"title"},[t._v("Please Sign Up :")]),t._v(" "),s("hr"),t._v(" "),t.error?s("article",{staticClass:"message is-danger"},[s("div",{staticClass:"message-body"},[t._v(t._s(t.error))])]):t._e(),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Email :")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Password :")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),s("button",{staticClass:"button",on:{click:t.signup}},[t._v("Signup")]),t._v(" "),s("div",{staticClass:"already"},[s("p",[t._v("Already have an account?\n                ")]),t._v(" "),s("button",{staticClass:"button",on:{click:t.loginFromSignup}},[t._v("Log In")])])]):s("div",{staticClass:"column"},[s("h1",{staticClass:"title"},[t._v("Please Log In :")]),t._v(" "),s("hr"),t._v(" "),t.error?s("article",{staticClass:"message is-danger"},[s("div",{staticClass:"message-body"},[t._v(t._s(t.error))])]):t._e(),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Email :")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Password :")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),s("button",{staticClass:"button",on:{click:t.login}},[t._v("Login")]),t._v(" "),s("div",{staticClass:"already"},[s("p",[t._v("I need an account\n                ")]),t._v(" "),s("button",{staticClass:"button",on:{click:t.SignupFromLogin}},[t._v("Sign Up")])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Name :")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{staticClass:"input",attrs:{type:"text"}})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.error?s("b-notification",{attrs:{type:"is-danger",closable:!1}},[t._v(t._s(t.error))]):t._e(),t._v(" "),s("form",{on:{submit:function(e){e.preventDefault(),t.login(e)}}},[s("b-field",{attrs:{label:"Username"}},[s("b-input",{attrs:{type:"text",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),s("b-field",{attrs:{label:"Password"}},[s("b-input",{attrs:{type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),s("button",{staticClass:"button is-primary",class:t.buttonClasses},[t._v("Login")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"block scroll"},[t._l(t.stories,function(e){return s("table",{staticClass:"table"},[s("tbody",{style:t.styles},[s("tr",[s("strong"),t._v(" "),s("th",[t._v("then, "+t._s(e.text))]),t._v(" "),s("th",{staticClass:"is-pulled-right"},[s("button",{staticClass:"button is-right",on:{click:function(s){t.likeStory(e)}}},[s("span",{staticClass:"fa fa-thumbs-o-up"},[t._v(" "+t._s(e.likes.length))])])])])])])}),t._v(" "),s("button",{staticClass:"button",attrs:{type:"submit"},on:{click:function(e){t.selectRandomStory()}}},[t._v(" Select randomly a story ")])],2)])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"hero hero-head"},[s("header",{staticClass:"nav"},[s("div",{staticClass:"container"},[s("div",{staticClass:"nav-left"},[s("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[t._v("\n            HOME\n            ")])],1),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"nav-right nav-menu"},[s("router-link",{staticClass:"nav-item",attrs:{to:"/create"}},[t._v("\n            New Story\n          ")]),t._v(" "),t.$root.user?t._e():s("router-link",{staticClass:"nav-item",attrs:{to:"/signup"}},[t._v("Signup / Login")]),t._v(" "),t.$root.user?s("a",{staticClass:"nav-item",attrs:{href:""},on:{click:t.logout}},[t._v("Logout")]):t._e(),t._v(" "),s("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[t._v("About")])],1)])])]),t._v(" "),t._m(1),t._v(" "),s("hr"),t._v(" "),s("section",{},[s("div",{},[s("router-view"),t._v(" "),t._m(2),t._v(" "),s("hr"),t._v(" "),t._m(3)],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"nav-toggle"},[s("span"),t._v(" "),s("span"),t._v(" "),s("span")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logoThen"},[a("img",{staticStyle:{width:"500px"},attrs:{src:s(47)}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("div",{staticClass:"columns is-half is-narrow"},[a("div",{staticClass:"column "},[a("a",{staticClass:"fa fa-facebook",attrs:{href:"http://facebook.com",target:"_blank"}}),t._v(" "),a("a",{staticClass:"fa fa-google-plus",attrs:{href:"http://plus.google.com",target:"_blank"}}),t._v(" "),a("a",{staticClass:"fa fa-linkedin",attrs:{href:"http://linkedin.com",target:"_blank"}}),t._v(" "),a("a",{staticClass:"fa fa-twitter",attrs:{href:"http://twitter.com",target:"_blank"}})])]),t._v(" "),a("img",{staticStyle:{width:"200px"},attrs:{src:s(48)}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("footer",[t._v(" @ Nadir BERRARA / IH Jun17 ")])])}]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[t._v("\n        CREATE YOUR STORY\n    ")]),t._v(" "),t._m(0),t._v(" "),s("hr"),t._v(" "),t.bravo?s("div",{staticClass:"notification is-primary"},[t._v("\n        Your story was added successfully\n    ")]):t._e(),t._v(" "),t.danger?s("div",{staticClass:"notification is-danger"},[t._v("\n        Informations missing\n    ")]):t._e(),t._v(" "),s("div",[s("p",[t._v("Choose a title :")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"button is-large",attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"story"},[s("p",[t._v("Start your story:")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"textarea is-medium",attrs:{name:"",id:"",cols:"30",rows:"2",placeholder:""},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),t._v(" "),s("div",[s("button",{staticClass:"button submit",on:{click:function(e){t.createNewEpic()}}},[t._v("Submit my story")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column"},[a("img",{staticStyle:{width:"500px"},attrs:{src:s(49)}})])}]}}],[38]);
//# sourceMappingURL=app.b674a05dbf38bf4f3a98.js.map