(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{RNiq:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return x}));var r=e("o0o1"),a=e.n(r),c=e("HaE+"),o=e("1OyB"),i=e("vuIU"),u=e("Ji7U"),s=e("md7G"),f=e("foSv"),l=e("q1tI"),p=e.n(l),d=(e("LpSC"),e("5Yp1")),h=e("m6+U"),m=p.a.createElement;function v(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=Object(f.a)(t);if(n){var a=Object(f.a)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return Object(s.a)(this,e)}}var x=function(t){Object(u.a)(e,t);var n=v(e);function e(){return Object(o.a)(this,e),n.apply(this,arguments)}return Object(i.a)(e,[{key:"render",value:function(){var t=this.props.channels;return m(d.a,{title:"Podcasts"},m(h.a,{channels:t}))}}],[{key:"getInitialProps",value:function(){var t=Object(c.a)(a.a.mark((function t(){var n,e,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.audioboom.com/channels/recommended");case 2:return n=t.sent,t.next=5,n.json();case 5:return e=t.sent,r=e.body,t.abrupt("return",{channels:r});case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}]),e}(p.a.Component)},"m6+U":function(t,n,e){"use strict";e.d(n,"a",(function(){return v}));var r=e("1OyB"),a=e("vuIU"),c=e("Ji7U"),o=e("md7G"),i=e("foSv"),u=e("MX0m"),s=e.n(u),f=e("q1tI"),l=e.n(f),p=e("YFqc"),d=e.n(p),h=l.a.createElement;function m(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=Object(i.a)(t);if(n){var a=Object(i.a)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return Object(o.a)(this,e)}}var v=function(t){Object(c.a)(e,t);var n=m(e);function e(){return Object(r.a)(this,e),n.apply(this,arguments)}return Object(a.a)(e,[{key:"render",value:function(){var t=this.props.channels;return h("div",{className:"jsx-717556532 channels"},t.map((function(t){return h(d.a,{href:"/channel?id=".concat(t.id),prefetch:!0,key:t.id},h("a",{className:"jsx-717556532 channel"},h("img",{src:t.urls.logo_image.original,alt:"",className:"jsx-717556532"}),h("h2",{className:"jsx-717556532"},t.title)))})),h(s.a,{id:"717556532"},[".channels.jsx-717556532{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}",".channel.jsx-717556532{display:block;margin-bottom:0.5em;color:#333;-webkit-text-decoration:none;text-decoration:none;}",".channel.jsx-717556532 img.jsx-717556532{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}","h2.jsx-717556532{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}"]))}}]),e}(l.a.Component)},vlRD:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("RNiq")}])}},[["vlRD",0,2,1,3]]]);