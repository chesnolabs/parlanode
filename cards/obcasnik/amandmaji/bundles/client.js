!function(t){function e(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var a={};e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,r){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(t,e){t.exports=function(t,e,a,r,n){var s,i=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(s=t,i=t.default);var o="function"==typeof i?i.options:i;e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),r&&(o._scopeId=r);var d;if(n?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},o._ssrRegister=d):a&&(d=a),d){var l=o.functional,u=l?o.render:o.beforeCreate;l?o.render=function(t,e){return d.call(e),u(t,e)}:o.beforeCreate=u?[].concat(u,d):[d]}return{esModule:s,exports:i,options:o}}},function(t,e){t.exports={_id:"random_id",name:"Amandmaji poslanskih skupin",dataUrl:"https://data.parlameter.si/v1/getAmendments",type:"amandmaji",lastUpdate:"2017-07-07T11:26:47.286Z",method:"amandmaji",group:"obcasnik"}},function(t,e,a){function r(t){a(13)}var n=a(0)(a(12),a(25),r,"data-v-312dfb7e",null);t.exports=n.exports},function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(19),s=r(n),i=a(16),c=r(i),o=a(20),d=r(o),l=a(18),u=r(l),f=a(17),p=r(f),v=a(4),m=r(v);e.default={components:{CardInfo:s.default,CardEmbed:c.default,CardShare:d.default,CardHeader:u.default,CardFooter:p.default},mixins:[m.default]}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){makeEmbedSwitch(),activateCopyButton(),addCardRippling()}}},function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var n=a(2),s=r(n),i=a(1),c=r(i);new Vue(Object.assign({},s.default,{cardData:window.__INITIAL_STATE__})).$mount("#"+c.default._id)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"BarChart",props:{data:Array},computed:{rows:function(){var t=JSON.parse(JSON.stringify(this.data)),e=this.data.reduce(function(t,e){return Math.max(t,e.value)},0),a=this.data.reduce(function(t,e){return t+e.value},0);return t.map(function(t){return{name:t.label,value:t.value,widthPercentage:t.value/e*80,percentage:(t.value/a*100).toFixed(2)}}).sort(function(t,e){return e.value-t.value})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardEmbed",computed:{embedCode:function(){return"&#x3C;script&#x3E;(function(d,script){script=d.createElement(&#x27;script&#x27;);script.type=&#x27;text/javascript&#x27;;script.async=true;script.onload=function(){iFrameResize({log:true,checkOrigin:false})};script.src=&#x27;https://cdn.parlameter.si/v1/parlassets/js/iframeResizer.min.js&#x27;;d.getElementsByTagName(&#x27;head&#x27;)[0].appendChild(script);}(document));&#x3C;/script&#x3E;&#x3C;iframe frameborder=&#x22;0&#x22; width=&#x22;100%&#x22; src=&#x22;"+this.url+"&#x26;embed=true&#x22;&#x3E;&#x3C;/iframe&#x3E;"}},props:{url:String}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardFooter",props:{link:String}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardHeader",props:{config:Object}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardInfo"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardShare",props:{url:String}}},function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(3),s=r(n),i=a(15),c=r(i);e.default={components:{BarChart:c.default},mixins:[s.default],name:"ImeKartice",data:function(){return{data:this.$options.cardData.data.data,slugs:this.$options.cardData.urlsData,shortenedCardUrl:"",url:"https://glej.parlameter.si/obcasnik/amandmaji/?customUrl=https%3A%2F%2Fcdn.parlameter.si%2Fv1%2Fdata%2Famandmaji.json",headerConfig:{circleIcon:"og-list",heading:"&nbsp;",subheading:"7. sklic parlamenta",alternative:"true"===this.$options.cardData.cardData.altHeader,title:this.$options.cardData.cardData.name},generatedCardUrl:"https://glej.parlameter.si/obcasnik/amandmaji/?customUrl=https%3A%2F%2Fcdn.parlameter.si%2Fv1%2Fdata%2Famandmaji.json"}},computed:{seatCountData:function(){return this.data.map(function(t){return{label:t.party.acronym,value:t.results.seat_count}})},amandmajiData:function(){return this.data.map(function(t){return{label:t.party.acronym,value:t.results.amandmaji}})},amandmajiNaPoslancaData:function(){return this.data.map(function(t){return{label:t.party.acronym,value:t.results.amandmaji_na_poslanca}})}},methods:{shortenUrl:function(){var t=this;return new Promise(function(e){$.get("https://parla.me/shortner/generate?url="+window.encodeURIComponent(t.url+"&frame=true"),function(a){t.$el.querySelector(".card-content-share button").textContent="KOPIRAJ",e(a)})})},measurePiwik:function(t,e,a){"function"==typeof measure&&(""!==e?measure("s","session-sort",e+" "+a,""):""!==t&&measure("s","session-filter",t,""))},focusTab:function(){return!0}},mounted:function(){var t=this;this.shortenUrl().then(function(e){t.$el.querySelector(".card-content-share button").textContent="KOPIRAJ",t.shortenedCardUrl=e})}}},function(t,e){},function(t,e){},function(t,e,a){function r(t){a(14)}var n=a(0)(a(6),a(26),r,null,null);t.exports=n.exports},function(t,e,a){var r=a(0)(a(7),a(23),null,null,null);t.exports=r.exports},function(t,e,a){var r=a(0)(a(8),a(24),null,null,null);t.exports=r.exports},function(t,e,a){var r=a(0)(a(9),a(21),null,null,null);t.exports=r.exports},function(t,e,a){var r=a(0)(a(10),a(27),null,null,null);t.exports=r.exports},function(t,e,a){var r=a(0)(a(11),a(22),null,null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[t.config.alternative?[a("div",{staticClass:"alt-header-container"},[a("div",{staticClass:"alt-header"},[t.config.circleText?a("div",{staticClass:"media-object img-circle session-logo",class:t.config.circleClass},[a("b",[t._v(t._s(t.config.circleText))])]):t.config.circleImage?a("img",{staticClass:"portrait column",attrs:{src:"https://cdn.parlameter.si/v1/parlassets/img/people/square/"+t.config.circleImage+".png"}}):t.config.circleIcon?a("div",{staticClass:"icon-circle"},[a("img",{attrs:{src:"https://cdn.parlameter.si/v1/parlassets/icons/"+t.config.circleIcon+".svg"}})]):t._e(),t._v(" "),a("div",{staticClass:"header-info-container"},[a("h1",{domProps:{innerHTML:t._s(t.config.heading)}}),t._v(" "),a("h2",{staticClass:"partyinfo"},[t._v(t._s(t.config.subheading))]),t._v(" "),a("h2",{staticClass:"cardname"},[t._v(t._s(t.config.title))])])]),t._v(" "),a("div",{staticClass:"alt-header-border"})])]:[a("div",{staticClass:"card-header-border"}),t._v(" "),a("h1",[t._v(t._s(t.config.title))])]],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-content-share hidden"},[a("div",{staticClass:"card-back-content"},[a("div",{staticClass:"share-content"},[a("label",{attrs:{for:"share-url"}},[t._v("Neposredna povezava do kartice")]),t._v(" "),a("input",{staticClass:"form-control share-url",attrs:{type:"url",id:"share-url"},domProps:{value:t.url}}),t._v(" "),a("button",{staticClass:"btn-parlameter btn-full-width btn-blue"},[t._v("KOPIRAJ")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-content-embed hidden"},[a("div",{staticClass:"card-back-content"},[a("div",{staticClass:"embed-content"},[a("div",{staticClass:"embed-divider"}),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"embed-divider"}),t._v(" "),a("div",{staticClass:"embed-script"},[a("textarea",{staticClass:"form-control",attrs:{"data-id":"","data-url":t.url},domProps:{innerHTML:t._s(t.embedCode)}}),t._v(" "),a("button",{staticClass:"btn-parlameter btn-full-width btn-blue btn-copy-embed"},[t._v("KOPIRAJ")])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"embed-switch-container"},[a("div",{staticClass:"embed-label"},[t._v("Podatki naj se vedno osvežujejo")]),t._v(" "),a("div",{staticClass:"embed-switch-big-box"},[a("div",{staticClass:"embed-switch-box"},[a("div",{staticClass:"embed-switch"},[a("div",{staticClass:"embed-switches"},[a("div",{staticClass:"leftswitch"},[t._v("DA")]),t._v(" "),a("div",{staticClass:"rightswitch"},[t._v("NE")])])])]),t._v(" "),a("div",{staticClass:"embed-switch-ball"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-footer"},[a("div",{staticClass:"card-logo hidden"},[a("a",{attrs:{href:t.link}},[a("img",{attrs:{src:"https://cdn.parlameter.si/v1/parlassets/img/logo-parlameter.svg",alt:"parlameter logo"}})])]),t._v(" "),a("div",{staticClass:"card-circle-button card-share",attrs:{"data-back":"share"}}),t._v(" "),a("div",{staticClass:"card-circle-button card-embed",attrs:{"data-back":"embed"}}),t._v(" "),a("div",{staticClass:"card-circle-button card-info",attrs:{"data-back":"info"}},[t._v("i")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-container card-halfling card-IME_KARTICE",attrs:{id:t.$options.cardData.cardData._id}},[a("card-header",{attrs:{config:t.headerConfig}}),t._v(" "),a("div",{staticClass:"card-content"},[a("div",{staticClass:"card-content-front"},[a("tabs",{attrs:{dark:"","switch-callback":t.focusTab}},[a("tab",{attrs:{header:"Št. članov PS"}},[a("bar-chart",{attrs:{data:t.seatCountData}})],1),t._v(" "),a("tab",{attrs:{header:"Št. vloženih amandmajev"}},[a("bar-chart",{attrs:{data:t.amandmajiData}})],1),t._v(" "),a("tab",{attrs:{header:"Št. vloženih amandmajev na poslanca"}},[a("bar-chart",{attrs:{data:t.amandmajiNaPoslancaData}})],1)],1)],1),t._v(" "),a("card-info",[a("p",{staticClass:"info-text lead"}),t._v(" "),a("p",{staticClass:"info-text heading"},[t._v("METODOLOGIJA")]),t._v(" "),a("p",{staticClass:"info-text"},[t._v("Glasovanja o amandmajih objavljena na spletnem mestu "),a("a",{attrs:{href:"http://www.dz-rs.si"}},[t._v("DZ RS")]),t._v(" imajo ime zapisano po vnaprej določeni strukturi:")]),t._v(" "),a("div",{staticClass:"info-text"},[a("pre",[t._v("{ime zakona} - Amandma: {K X. členu} {datum} [{kratica poslanske skupine} - {ime poslanske skupine}]")])]),t._v(" "),a("p",{staticClass:"info-text"},[t._v("Število amandmajev, ki jih vložila posamezna poslanska skupina dobimo tako, da preštejemo vsa glasovanja, v imenu katerih se pojavi beseda amandma. Med preštetimi glasovanji poiščemo tista, katerih ime vsebije kratico poslanske skupine. Ta amandma prištejemo k tej poslanski skupini.")])]),t._v(" "),a("card-embed",{attrs:{url:t.generatedCardUrl}}),t._v(" "),a("card-share",{attrs:{url:t.shortenedCardUrl}})],1),t._v(" "),a("card-footer",{attrs:{link:t.slugs.base}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"party-list"},t._l(t.rows,function(e,r){return a("li",{key:r,staticClass:"labeled-chart"},[a("div",{staticClass:"column chart-label"},[t._v("\n      "+t._s(e.name)+"\n    ")]),t._v(" "),a("div",{staticClass:"column chart"},[a("div",{staticClass:"progress hugebar"},[a("div",{staticClass:"progress-bar funblue",style:{width:e.widthPercentage+"%"}}),t._v(" "),a("div",{staticClass:"progress_number"},[t._v("\n              "+t._s(e.value+" | "+e.percentage)+" %\n            ")])])])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-content-info hidden"},[a("div",{staticClass:"card-back-content"},[t._t("default")],2)])},staticRenderFns:[]}}]);