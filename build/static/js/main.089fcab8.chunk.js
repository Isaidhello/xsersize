(this.webpackJsonpxsersize=this.webpackJsonpxsersize||[]).push([[0],{74:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(1),i=n.n(r),a=n(28),o=n.n(a),s=(n(74),n(98)),j=n(104),l=n(100),d=n(101),b=n(10),u=Object(s.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function h(){var e=u();return Object(c.jsx)("div",{className:e.root,children:Object(c.jsx)(j.a,{position:"static",children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)(b.b,{to:"/kalender",children:Object(c.jsx)(d.a,{variant:"contained",children:"Kalender"})}),Object(c.jsx)(b.b,{to:"/gebruiker",children:Object(c.jsx)(d.a,{variant:"contained",children:"Mijn Account"})}),Object(c.jsx)(b.b,{to:"/",children:Object(c.jsx)(d.a,{variant:"contained",children:"Workouts"})})]})})})}var O=n(12),x=Object(s.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function v(){var e=x();return Object(c.jsx)("div",{className:e.root,children:Object(c.jsx)(j.a,{position:"static",children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)(b.b,{to:"/kalender",children:Object(c.jsx)(d.a,{variant:"contained",children:"Kalender"})}),Object(c.jsx)(b.b,{to:"/gebruiker",children:Object(c.jsx)(d.a,{variant:"contained",children:"Mijn Account"})}),Object(c.jsx)(b.b,{to:"/",children:Object(c.jsx)(d.a,{variant:"contained",children:"Workouts"})}),Object(c.jsx)(b.b,{to:"/oefeningpage",children:Object(c.jsx)(d.a,{variant:"contained",children:"Oefeningen"})})]})})})}var f=n(55),p=n(49);n(83);p.a.initializeApp({apiKey:"AIzaSyBVK4A_rmIzN9kotmgKpf6cKAk6RrtlkSk",authDomain:"xsersize-5658d.firebaseapp.com",projectId:"xsersize-5658d",storageBucket:"xsersize-5658d.appspot.com",messagingSenderId:"585696709656",appId:"1:585696709656:web:5e6701e2e8ea37bd3fc76d"});var g=p.a,w={OEFENING_ASC:{column:"titel",direction:"asc"},OEFENING_DESC:{column:"titel",direction:"desc"}};var m=function(){g.firestore()},k=function(){var e=Object(r.useState)("OEFENING_ASC"),t=Object(O.a)(e,2),n=t[0],i=t[1],a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"OEFENING_ASC",t=Object(r.useState)([]),n=Object(O.a)(t,2),c=n[0],i=n[1];return Object(r.useEffect)((function(){var t=g.firestore().collection("oefeningen").orderBy(w[e].column,w[e].direction).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(f.a)({id:e.id},e.data())}));i(t)}));return function(){return t()}}),[e]),c}(n);return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Oefeningen Lijst"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Sorteren:"})," ",Object(c.jsxs)("select",{value:n,onChange:function(e){return i(e.currentTarget.value)},children:[Object(c.jsx)("option",{disabled:!0,children:"---"}),Object(c.jsx)("option",{value:"OEFENING_ASC",children:"Naam (a-z)"}),Object(c.jsx)("option",{value:"OEFENING_DESC",children:"Naam (z-a)"})]})]}),Object(c.jsx)("ol",{children:a.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsxs)("div",{className:"oefening-toevoegen",children:[e.titel,Object(c.jsxs)("code",{className:"reps",children:[e.reps," reps "]}),Object(c.jsx)("button",{onClick:m,children:"Verwijder"})]})},e.id)}))})]})},S=function(){var e=Object(r.useState)(""),t=Object(O.a)(e,2),n=t[0],i=t[1],a=Object(r.useState)(""),o=Object(O.a)(a,2),s=o[0],j=o[1];return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g.firestore().collection("oefeningen").add({titel:n,reps:parseInt(s)}).then((function(){i(""),j("")}))},children:[Object(c.jsx)("h4",{children:"Voeg reps toe"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Titel"}),Object(c.jsx)("input",{type:"text",value:n,onChange:function(e){return i(e.currentTarget.value)}})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Reps"}),Object(c.jsx)("input",{type:"number",value:s,onChange:function(e){return j(e.currentTarget.value)}})]}),Object(c.jsx)("button",{children:"Voeg reps toe"})]})},N=Object(s.a)({root:{width:500}});function A(){N();var e=i.a.useState(0),t=Object(O.a)(e,2);t[0],t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Workouts"}),Object(c.jsx)(v,{}),Object(c.jsx)(k,{}),Object(c.jsx)(S,{})]})}var E=n.p+"static/media/kalender.d97dc83f.PNG",C=Object(s.a)({root:{width:500}});function y(){C();var e=i.a.useState(0),t=Object(O.a)(e,2);t[0],t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Kalender"}),Object(c.jsx)("img",{src:E,alt:"not found",width:"460",height:"460"}),Object(c.jsx)(v,{})]})}var z=n(102),I=n(103),W=n(53),G=n.n(W),B=n(54),K=n.n(B),R=n(52),F=n.n(R),_=Object(s.a)({root:{width:500}});function T(){var e=_(),t=i.a.useState("recents"),n=Object(O.a)(t,2),r=n[0],a=n[1];return Object(c.jsxs)(z.a,{value:r,onChange:function(e,t){a(t)},className:e.root,children:[Object(c.jsx)(I.a,{label:"Kalender",value:"kalender",icon:Object(c.jsx)(F.a,{})}),Object(c.jsx)(I.a,{label:"Favorites",value:"mijnaccout",icon:Object(c.jsx)(G.a,{})}),Object(c.jsx)(I.a,{label:"Workouts",value:"workouts",icon:Object(c.jsx)(K.a,{})})]})}var D=Object(s.a)({root:{width:500}});function L(){D();var e=i.a.useState(0),t=Object(O.a)(e,2);t[0],t[1];return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Nieuwe Routine"})})}var M=Object(s.a)({root:{width:500}});function V(){M();var e=i.a.useState(0),t=Object(O.a)(e,2);t[0],t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Mijn Account"}),"Naam: Adam Bye Leeftijd: 26",Object(c.jsx)(v,{})]})}var P=Object(s.a)({root:{width:500}});function U(){P();var e=i.a.useState(0),t=Object(O.a)(e,2);t[0],t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Oefeningen"}),Object(c.jsx)(v,{}),Object(c.jsx)(S,{}),Object(c.jsx)(k,{})]})}var J=n(7);Object(s.a)({root:{width:500}});function $(){return Object(c.jsx)(b.a,{basename:"/xsersize",children:Object(c.jsx)("div",{ClassName:"App",children:Object(c.jsxs)(J.c,{children:[Object(c.jsx)(J.a,{path:"/navbar",children:Object(c.jsx)(h,{})}),Object(c.jsx)(J.a,{exact:!0,path:"/",children:Object(c.jsx)(A,{})}),Object(c.jsx)(J.a,{path:"/kalender",children:Object(c.jsx)(y,{})}),Object(c.jsx)(J.a,{path:"/routine",children:Object(c.jsx)(T,{})}),Object(c.jsx)(J.a,{path:"/newroutine",children:Object(c.jsx)(L,{})}),Object(c.jsx)(J.a,{path:"/gebruiker",children:Object(c.jsx)(V,{})}),Object(c.jsx)(J.a,{path:"/oefeningpage",children:Object(c.jsx)(U,{})})]})})})}var q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(b.a,{children:Object(c.jsx)($,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/xsersize",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/xsersize","/service-worker.js");q?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):H(t,e)}))}}()}},[[81,1,2]]]);
//# sourceMappingURL=main.089fcab8.chunk.js.map