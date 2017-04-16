!function(t){function e(s){if(r[s])return r[s].exports;var n=r[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,s){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(t,e){t.exports=function(t,e,r,s){var n,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(n=t,i=t.default);var o="function"==typeof i?i.options:i;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),r&&(o._scopeId=r),s){var c=Object.create(o.computed||null);Object.keys(s).forEach(function(t){var e=s[t];c[t]=function(){return e}}),o.computed=c}return{esModule:n,exports:i,options:o}}},function(t,e){function r(t){return t}t.exports=r},function(t,e){t.exports={_id:"s_seznam_sej",name:"Seznam sej",dataUrl:"https://analize.parlameter.si/v1/s/getSessionsList",type:"seznam_sej",lastUpdate:"2017-04-02T20:51:51.189Z",method:"seznam-sej",group:"s"}},function(t,e,r){var s=r(0)(r(11),r(36),null,null);t.exports=s.exports},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){makeEmbedSwitch(),activateCopyButton(),addCardRippling()}}},function(t,e,r){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var n=r(3),i=s(n),a=r(2),o=s(a);new Vue(Object.assign({},i.default,{cardData:window.__INITIAL_STATE__})).$mount("#"+o.default._id)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardEmbed",computed:{embedCode:function(){return"&#x3C;script&#x3E;(function(d,script){script=d.createElement(&#x27;script&#x27;);script.type=&#x27;text/javascript&#x27;;script.async=true;script.onload=function(){iFrameResize({log:true,checkOrigin:false})};script.src=&#x27;https://cdn.parlameter.si/v1/parlassets/js/iframeResizer.min.js&#x27;;d.getElementsByTagName(&#x27;head&#x27;)[0].appendChild(script);}(document));&#x3C;/script&#x3E;&#x3C;iframe frameborder=&#x22;0&#x22; width=&#x22;100%&#x22; src=&#x22;"+this.url+"&#x26;embed=true&#x22;&#x3E;&#x3C;/iframe&#x3E;"}},props:{url:String}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardFooter",props:{link:String}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardHeader",props:{config:Object}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardInfo"}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardShare",props:{url:String}}},function(t,e,r){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=r(17),i=s(n),a=r(30),o=s(a);e.default={components:{InnerCard:o.default},name:"SeznamSej",data:function(){return{sessions:this.$options.cardData.data.sessions,workingBodies:[],slugs:this.$options.cardData.urlsData,filters:["Seje DZ","Seje kolegija predsednika DZ","Seje delovnih teles"],currentSort:"date",currentSortOrder:"desc",currentFilters:this.$options.cardData.state.filters||[],justFive:this.$options.cardData.state.justFive||!1,shortenedCardUrl:"",headerConfig:{circleIcon:"og-list",heading:"&nbsp;",subheading:"7. sklic parlamenta",alternative:"true"===this.$options.cardData.cardData.altHeader,title:this.$options.cardData.cardData.name}}},computed:{columns:function(){return[{id:"name",label:"Ime",additionalClass:"wider"},{id:"date",label:"Začetek"},{id:"updated",label:"Sprememba",additionalClass:"optional"},{id:"workingBody",label:"Organizacija",additionalClass:"wider optional"}]},currentAnalysisData:function(){return(0,i.default)(this.analyses,{id:this.currentAnalysis})},currentWorkingBodies:function(){return this.workingBodies.filter(function(t){return t.selected}).map(function(t){return t.id})},currentWorkingBodyNames:function(){return this.workingBodies.filter(function(t){return t.selected}).map(function(t){return t.label})},inputPlaceholder:function(){return this.currentWorkingBodies.length?"izbranih delovnih teles: "+this.currentWorkingBodies.length:"izberi delovno telo"},processedSessions:function(){var t=this,e=this.sessions.filter(function(e){if(0===t.currentFilters.length)return!0;var r=!1;return t.currentFilters.indexOf("Seje DZ")>-1&&(r=r||e.orgs.filter(function(t){return 95===t.id}).length>0),t.currentFilters.indexOf("Seje kolegija predsednika DZ")>-1&&(r=r||e.orgs.filter(function(t){return 9===t.id}).length>0),t.currentFilters.indexOf("Seje delovnih teles")>-1&&(0===t.currentWorkingBodies.length?e.orgs.forEach(function(e){r=r||t.organisationIsWorkingBody(e.id)}):e.orgs.forEach(function(e){r=r||t.currentWorkingBodies.indexOf(e.id)>-1})),r}).sort(function(e,r){switch(t.currentSort){case"name":var s=e.name,n=r.name;return alphanumCase(s,n);case"date":var s=e.date_ts,n=r.date_ts;return s<n?-1:s>n?1:0;case"updated":var s=e.updated_at_ts,n=r.updated_at_ts;return s<n?-1:s>n?1:0;case"workingBody":var s=e.orgs[0].name,n=r.orgs[0].name;return s.localeCompare(n,"sl")}});return"desc"===this.currentSortOrder&&e.reverse(),this.justFive&&(e=e.slice(0,5)),e},generatedCardUrl:function(){var t={};return this.currentFilters.length>0&&(t.filters=this.currentFilters),this.currentWorkingBodies.length>0&&(t.workingBodies=this.currentWorkingBodies),this.justFive&&(t.justFive=!0),"https://glej.parlameter.si/s/seznam-sej/?customUrl="+encodeURIComponent(this.$options.cardData.cardData.dataUrl)+(Object.keys(t).length>0?"&state="+encodeURIComponent(JSON.stringify(t)):"")},infoText:function(){var t=this.currentFilters.join(", ")+(this.currentWorkingBodies.length>0?": ":""),e=this.currentWorkingBodyNames.join(", "),r=Boolean(t||e)?" ("+t+e+")":"",s={name:"imenu seje",date:"datumu začetka seje",updated:"datumu zadnje spremembe podatkov o seji",workingBody:"imenu organizacije"},n=this.justFive?", izpis pa omejen samo na zgornjih pet sej":"";return"Seznam vseh sej tega sklica DZ, ki ustrezajo uporabniškemu vnosu"+r+". Seznam je sortiran po "+s[this.currentSort]+n+"."}},created:function(){var t=this;$.getJSON("https://analize.parlameter.si/v1/s/getWorkingBodies/",function(e){var r=t.$options.cardData.state.workingBodies||[];t.workingBodies=e.map(function(t){return{id:t.id,label:t.name,selected:r.indexOf(t.id)>-1}})})},methods:{organisationIsWorkingBody:function(t){return[9,95].indexOf(t)===-1},selectSort:function(t){this.currentSort===t?this.currentSortOrder="asc"===this.currentSortOrder?"desc":"asc":(this.currentSort=t,this.currentSortOrder="asc"),this.measurePiwik("",t,this.currentSortOrder)},selectFilter:function(t){this.currentFilters.indexOf(t)>-1?this.currentFilters.splice(this.currentFilters.indexOf(t),1):this.currentFilters.push(t),this.measurePiwik(t,"","")},getWorkingBodyUrl:function(t){return"https://glej.parlameter.si/wb/getWorkingBodies/"+t+"?frame=true&altHeader=true"},shortenUrl:function(t){var e=this;$.get("https://parla.me/shortner/generate?url="+window.encodeURIComponent(t+"&frame=true"),function(t){e.shortenedCardUrl=t,e.$el.querySelector(".card-content-share button").textContent="KOPIRAJ"})},measurePiwik:function(t,e,r){"function"==typeof measure&&(""!==e?measure("s","session-sort",e+" "+r,""):""!==t&&measure("s","session-filter",t,""))}},watch:{generatedCardUrl:function(t){this.shortenUrl(t)},currentFilters:function(t){t.indexOf("Seje delovnih teles")===-1&&this.workingBodies.forEach(function(t){t.selected=!1})},currentWorkingBodies:function(t,e){0!==t.length&&this.currentFilters.indexOf("Seje delovnih teles")===-1&&this.currentFilters.push("Seje delovnih teles")}}}},function(t,e,r){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=r(28),i=s(n),a=r(25),o=s(a),c=r(29),d=s(c),l=r(27),u=s(l),f=r(26),v=s(f),p=r(4),h=s(p);e.default={components:{CardInfo:i.default,CardEmbed:o.default,CardShare:d.default,CardHeader:u.default,CardFooter:v.default},mixins:[h.default],name:"SeznamSejKartica",props:{headerConfig:Object,columns:Array,currentSort:String,currentSortOrder:String,selectSort:Function,slugs:Object,processedSessions:Array,organisationIsWorkingBody:Function,infoText:String,generatedCardUrl:String,shortenedCardUrl:String},methods:{getSessionUrl:function(t){return this.slugs?this.slugs.base+this.slugs.sessionLink[t.votes?"glasovanja":"transkript"]+t.id:""},formatDate:function(t){var e=new Date(t);return e.getDate()+". "+(e.getMonth()+1)+". "+e.getFullYear()}}}},function(t,e){function r(t,e,r,s){for(var n=t.length,i=r+(s?1:-1);s?i--:++i<n;)if(e(t[i],i,t))return i;return-1}t.exports=r},function(t,e){function r(t){return n.call(t)}var s=Object.prototype,n=s.toString;t.exports=r},function(t,e,r){function s(t){return function(e,r,s){var o=Object(e);if(!i(e)){var c=n(r,3);e=a(e),r=function(t){return c(o[t],t,o)}}var d=t(e,r,s);return d>-1?o[c?e[d]:d]:void 0}}var n=r(1),i=r(19),a=r(23);t.exports=s},function(t,e){function r(t,e){return function(r){return t(e(r))}}t.exports=r},function(t,e,r){var s=r(15),n=r(18),i=s(n);t.exports=i},function(t,e,r){function s(t,e,r){var s=null==t?0:t.length;if(!s)return-1;var c=null==r?0:a(r);return c<0&&(c=o(s+c,0)),n(t,i(e,3),c)}var n=r(13),i=r(1),a=r(24),o=Math.max;t.exports=s},function(t,e,r){function s(t){return null!=t&&i(t.length)&&!n(t)}var n=r(20),i=r(21);t.exports=s},function(t,e,r){function s(t){if(!i(t))return!1;var e=n(t);return e==o||e==c||e==a||e==d}var n=r(14),i=r(22),a="[object AsyncFunction]",o="[object Function]",c="[object GeneratorFunction]",d="[object Proxy]";t.exports=s},function(t,e){function r(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=s}var s=9007199254740991;t.exports=r},function(t,e){function r(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=r},function(t,e,r){var s=r(16),n=s(Object.keys,Object);t.exports=n},function(t,e){function r(t){return t}t.exports=r},function(t,e,r){var s=r(0)(r(6),r(34),null,null);t.exports=s.exports},function(t,e,r){var s=r(0)(r(7),r(35),null,null);t.exports=s.exports},function(t,e,r){var s=r(0)(r(8),r(32),null,null);t.exports=s.exports},function(t,e,r){var s=r(0)(r(9),r(37),null,null);t.exports=s.exports},function(t,e,r){var s=r(0)(r(10),r(33),null,null);t.exports=s.exports},function(t,e,r){var s=r(0)(r(12),r(31),null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-container card-halfling card-seznam-sej"},[r("card-header",{attrs:{config:t.headerConfig}}),t._v(" "),r("div",{staticClass:"card-content"},[r("div",{staticClass:"card-content-front"},[r("ul",{staticClass:"session-list"},[r("li",{staticClass:"headers"},t._l(t.columns,function(e){return r("div",{class:["column",e.additionalClass,{sort:t.currentSort===e.id},{reverse:"desc"===t.currentSortOrder}],on:{click:function(r){t.selectSort(e.id)}}},[t._v("\n            "+t._s(e.label)+"\n          ")])})),t._v(" "),0===t.processedSessions.length?r("div",{staticClass:"no-results"},[t._v("Brez rezultatov.")]):t._e(),t._v(" "),t._l(t.processedSessions,function(e){return r("li",{staticClass:"item"},[r("a",{staticClass:"column image",attrs:{href:t.getSessionUrl(e)}},[r("img",{attrs:{src:"https://cdn.parlameter.si/v1/parlassets/icons/seja-"+e.name.split(" ")[1]+".svg"}})]),t._v(" "),r("div",{staticClass:"column wider name"},[r("a",{staticClass:"funblue-light-hover",attrs:{href:t.getSessionUrl(e)}},[t._v(t._s(e.name))])]),t._v(" "),r("div",{staticClass:"column"},[t._v(t._s(t.formatDate(e.date_ts)))]),t._v(" "),r("div",{staticClass:"column optional"},[t._v(t._s(t.formatDate(e.updated_at_ts)))]),t._v(" "),r("div",{staticClass:"column wider optional"},[t._l(e.orgs,function(s,n){return[t.organisationIsWorkingBody(s.id)?[r("a",{staticClass:"funblue-light-hover",attrs:{href:"https://glej.parlameter.si/wb/getWorkingBodies/"+s.id+"?frame=true&altHeader=true"}},[t._v(t._s(s.name))]),t._v(t._s(n<e.orgs.length-1?", ":"")+"\n              ")]:[r("span",[t._v(t._s(s.name))]),t._v(t._s(n<e.orgs.length-1?", ":"")+"\n              ")]]})],2)])})],2)]),t._v(" "),r("card-info",[r("p",{staticClass:"info-text lead"},[t._v(t._s(t.infoText))]),t._v(" "),r("p",{staticClass:"info-text heading"},[t._v("METODOLOGIJA")]),t._v(" "),r("p",{staticClass:"info-text"},[t._v("Podatke o sejah pridobivamo iz spletnega mesta DZ RS, natančneje od "),r("a",{attrs:{href:"https://www.dz-rs.si/wps/portal/Home/deloDZ/seje/sejeDt/poDatumu/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zivT39gy2dDB0N3F0NXQw8DX09PTz9HI0M3E30w9EUBJkYARV4W4b4-PoYGnib6UdRot8dXT-G8Wj6_S0N3Qw8Q43dTYx9QwwMfI2I02-AAzgakGg_pgej8BtfkBsKAooAQ6b9bA!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/"}},[t._v("tu")]),t._v(", "),r("a",{attrs:{href:"https://www.dz-rs.si/wps/portal/Home/deloDZ/seje/sejeDrzavnegaZbora/PoDatumuSeje/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zivT39gy2dDB0N3INMjAw8Db0tQ3x8fQwNvM30wwkpiAJKG-AAjgYE9LtD9BNvv7-loZuBZ6ixu4mxb4iBga8RcfrxOJCA_oLcUCBwVAQAGc0QlQ!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/"}},[t._v("tu")]),t._v(" in "),r("a",{attrs:{href:"https://www.dz-rs.si/wps/portal/Home/deloDZ/seje/sejeDt/poDatumu/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zivT39gy2dDB0N3F0NXQw8DX09PTz9HI0M3E30w9EUBJkYARV4W4b4-PoYGnib6UdRot8dXT-G8Wj6_S0N3Qw8Q43dTYx9QwwMfI2I02-AAzgakGg_pgej8BtfkBsKAooAQ6b9bA!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/."}},[t._v("tu.")])])]),t._v(" "),r("card-embed",{attrs:{url:t.generatedCardUrl}}),t._v(" "),r("card-share",{attrs:{url:t.shortenedCardUrl}})],1),t._v(" "),r("card-footer",{attrs:{link:t.slugs.base}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-header"},[t.config.alternative?[r("div",{staticClass:"alt-header-container"},[r("div",{staticClass:"alt-header"},[t.config.circleText?r("div",{staticClass:"media-object img-circle session-logo",class:t.config.circleClass},[r("b",[t._v(t._s(t.config.circleText))])]):t.config.circleImage?r("img",{staticClass:"portrait column",attrs:{src:"https://cdn.parlameter.si/v1/parlassets/img/people/square/"+t.config.circleImage+".png"}}):t.config.circleIcon?r("div",{staticClass:"icon-circle"},[r("img",{attrs:{src:"https://cdn.parlameter.si/v1/parlassets/icons/"+t.config.circleIcon+".svg"}})]):t._e(),t._v(" "),r("div",{staticClass:"header-info-container"},[r("h1",{domProps:{innerHTML:t._s(t.config.heading)}}),t._v(" "),r("h2",{staticClass:"partyinfo"},[t._v(t._s(t.config.subheading))]),t._v(" "),r("h2",{staticClass:"cardname"},[t._v(t._s(t.config.title))])])]),t._v(" "),r("div",{staticClass:"alt-header-border"})])]:[r("div",{staticClass:"card-header-border"}),t._v(" "),r("h1",[t._v(t._s(t.config.title))])]],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-content-share hidden"},[r("div",{staticClass:"card-back-content"},[r("div",{staticClass:"share-content"},[r("label",{attrs:{for:"share-url"}},[t._v("Neposredna povezava do kartice")]),t._v(" "),r("input",{staticClass:"form-control share-url",attrs:{type:"url",id:"share-url"},domProps:{value:t.url}}),t._v(" "),r("button",{staticClass:"btn-parlameter btn-full-width btn-blue"},[t._v("KOPIRAJ")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-content-embed hidden"},[r("div",{staticClass:"card-back-content"},[r("div",{staticClass:"embed-content"},[r("div",{staticClass:"embed-divider"}),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"embed-divider"}),t._v(" "),r("div",{staticClass:"embed-script"},[r("textarea",{staticClass:"form-control",attrs:{"data-id":"","data-url":t.url},domProps:{innerHTML:t._s(t.embedCode)}}),t._v(" "),r("button",{staticClass:"btn-parlameter btn-full-width btn-blue btn-copy-embed"},[t._v("KOPIRAJ")])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"embed-switch-container"},[r("div",{staticClass:"embed-label"},[t._v("Podatki naj se vedno osvežujejo")]),t._v(" "),r("div",{staticClass:"embed-switch-big-box"},[r("div",{staticClass:"embed-switch-box"},[r("div",{staticClass:"embed-switch"},[r("div",{staticClass:"embed-switches"},[r("div",{staticClass:"leftswitch"},[t._v("DA")]),t._v(" "),r("div",{staticClass:"rightswitch"},[t._v("NE")])])])]),t._v(" "),r("div",{staticClass:"embed-switch-ball"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-footer"},[r("div",{staticClass:"card-logo hidden"},[r("a",{attrs:{href:t.link}},[r("img",{attrs:{src:"https://cdn.parlameter.si/v1/parlassets/img/logo-parlameter.svg",alt:"parlameter logo"}})])]),t._v(" "),r("div",{staticClass:"card-circle-button card-share",attrs:{"data-back":"share"}}),t._v(" "),r("div",{staticClass:"card-circle-button card-embed",attrs:{"data-back":"embed"}}),t._v(" "),r("div",{staticClass:"card-circle-button card-info",attrs:{"data-back":"info"}},[t._v("i")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$options.cardData.state.generator?r("div",{attrs:{id:t.$options.cardData.cardData._id}},[r("div",{staticClass:"session-list-generator"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 filters"},[r("ul",{staticClass:"button-filters"},t._l(t.filters,function(e){return r("li",{staticClass:"party-button sds sds-hover",class:[{selected:t.currentFilters.indexOf(e)>-1}],on:{click:function(r){t.selectFilter(e)}}},[t._v("\n            "+t._s(e)+"\n          ")])})),t._v(" "),r("search-dropdown",{staticClass:"dropdown-filter",attrs:{items:t.workingBodies,placeholder:t.inputPlaceholder}}),t._v(" "),r("div",{staticClass:"align-checkbox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.justFive,expression:"justFive"}],staticClass:"checkbox",attrs:{id:"justFive",type:"checkbox"},domProps:{checked:Array.isArray(t.justFive)?t._i(t.justFive,null)>-1:t.justFive},on:{__c:function(e){var r=t.justFive,s=e.target,n=!!s.checked;if(Array.isArray(r)){var i=t._i(r,null);n?i<0&&(t.justFive=r.concat(null)):i>-1&&(t.justFive=r.slice(0,i).concat(r.slice(i+1)))}else t.justFive=n}}}),t._v(" "),r("label",{attrs:{for:"justFive"}},[t._v("Samo zadnjih 5")])])],1)]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("inner-card",{attrs:{"header-config":t.headerConfig,columns:t.columns,"current-sort":t.currentSort,"current-sort-order":t.currentSortOrder,"select-sort":t.selectSort,slugs:t.slugs,"processed-sessions":t.processedSessions,"organisation-is-working-body":t.organisationIsWorkingBody,"info-text":t.infoText,"generated-card-url":t.generatedCardUrl,"shortened-card-url":t.shortenedCardUrl}})],1)])])]):r("inner-card",{attrs:{id:t.$options.cardData.cardData._id,"header-config":t.headerConfig,columns:t.columns,"current-sort":t.currentSort,"current-sort-order":t.currentSortOrder,"select-sort":t.selectSort,slugs:t.slugs,"processed-sessions":t.processedSessions,"organisation-is-working-body":t.organisationIsWorkingBody,"info-text":t.infoText,"generated-card-url":t.generatedCardUrl,"shortened-card-url":t.shortenedCardUrl}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-content-info hidden"},[r("div",{staticClass:"card-back-content"},[t._t("default")],2)])},staticRenderFns:[]}}]);