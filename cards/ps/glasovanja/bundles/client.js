!function(t){function e(r){if(a[r])return a[r].exports;var s=a[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var a={};e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,r){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(t,e){t.exports=function(t,e,a,r){var s,n=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(s=t,n=t.default);var o="function"==typeof n?n.options:n;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),a&&(o._scopeId=a),r){var c=Object.create(o.computed||null);Object.keys(r).forEach(function(t){var e=r[t];c[t]=function(){return e}}),o.computed=c}return{esModule:s,exports:n,options:o}}},function(t,e){function a(){return!1}t.exports=a},function(t,e){function a(t){return t}t.exports=a},function(t,e){t.exports={_id:"ps_glasovanja",name:"Glasovanja - poslanska skupina",dataUrl:"https://analize.parlameter.si/v1/pg/getTaggedBallots",type:"poslanska_skupina",lastUpdate:"2017-04-02T19:21:14.510Z",method:"glasovanja",group:"ps"}},function(t,e,a){var r=a(0)(a(14),a(34),null,null);t.exports=r.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.MONTH_NAMES=["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"]},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){makeEmbedSwitch(),activateCopyButton(),addCardRippling()}}},function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var s=a(4),n=r(s),i=a(3),o=r(i);new Vue(Object.assign({},n.default,{cardData:window.__INITIAL_STATE__})).$mount("#"+o.default._id)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardEmbed",computed:{embedCode:function(){return"&#x3C;script&#x3E;(function(d,script){script=d.createElement(&#x27;script&#x27;);script.type=&#x27;text/javascript&#x27;;script.async=true;script.onload=function(){iFrameResize({log:true,checkOrigin:false})};script.src=&#x27;https://cdn.parlameter.si/v1/parlassets/js/iframeResizer.min.js&#x27;;d.getElementsByTagName(&#x27;head&#x27;)[0].appendChild(script);}(document));&#x3C;/script&#x3E;&#x3C;iframe frameborder=&#x22;0&#x22; width=&#x22;100%&#x22; src=&#x22;"+this.url+"&#x26;embed=true&#x22;&#x3E;&#x3C;/iframe&#x3E;"}},props:{url:String}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardFooter",props:{link:String}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardHeader",props:{config:Object}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardInfo"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardShare",props:{url:String}}},function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=a(22),n=r(s),i=function(){function t(t,e){var a=[],r=!0,s=!1,n=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done)&&(a.push(i.value),!e||a.length!==e);r=!0);}catch(t){s=!0,n=t}finally{try{!r&&o.return&&o.return()}finally{if(s)throw n}}return a}return function(e,a){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=a(5),c=a(27),l=r(c),d=a(24),u=r(d),f=a(28),p=r(f),v=a(26),h=r(v),m=a(25),g=r(m),_=a(6),b=r(_);e.default={components:{CardInfo:l.default,CardEmbed:u.default,CardShare:p.default,CardHeader:h.default,CardFooter:g.default},mixins:[b.default],computed:{tagPlaceholder:function(){return this.selectedTags.length>0?"Izbranih: "+this.selectedTags.length:"Izberi"},monthPlaceholder:function(){return this.selectedMonths.length>0?"Izbranih: "+this.selectedMonths.length:"Izberi"},dropdownItems:function(){var t=[],e=[];return this.getFilteredVotingDays(!0).forEach(function(a){var r=a.date.split(" ").map(function(t){return parseInt(t,10)}),s=i(r,3),n=s[1],o=s[2],c=o+"-"+n;e.indexOf(c)===-1&&e.push(c),a.ballots.forEach(function(e){e.tags.forEach(function(e){t.indexOf(e)===-1&&t.push(e)})})}),{tags:this.allTags.filter(function(e){return t.indexOf(e.id)>-1}),months:this.allMonths.filter(function(t){return e.indexOf(t.id)>-1})}},selectedTags:function(){return this.allTags.filter(function(t){return t.selected}).map(function(t){return t.id})},selectedMonths:function(){return this.allMonths.filter(function(t){return t.selected})},selectedOptions:function(){return this.allOptions.filter(function(t){return t.selected}).map(function(t){return t.id})},filteredVotingDays:function(){return this.getFilteredVotingDays()},cardUrl:function(){var t={};return this.selectedTags.length>0&&(t.tags=this.selectedTags),this.selectedMonths.length>0&&(t.months=this.selectedMonths.map(function(t){return t.id})),this.textFilter.length>0&&(t.text=this.textFilter),this.selectedOptions.length>0&&(t.options=this.selectedOptions),"https://glej.parlameter.si/"+this.cardGroup+"/"+this.cardMethod+"/"+this[this.type].id+"/?state="+encodeURIComponent(JSON.stringify(t))+"&altHeader=true"},headerConfig:function(){var t=void 0;return t="person"===this.type?{heading:this.person.name,subheading:this.person.party.acronym+" | "+(this.person.party.is_coalition?"koalicija":"opozicija"),circleImage:this.person.gov_id}:{heading:this.party.name,subheading:this.party.acronym+" | "+(this.party.is_coalition?"koalicija":"opozicija"),circleText:this.party.acronym,circleClass:this.party.acronym.replace(/ /g,"_").toLowerCase()+"-background"},Object.assign({},t,{alternative:!!this.cardData.cardData.altHeader&&JSON.parse(this.cardData.cardData.altHeader),title:this.cardData.cardData.name})}},data:function(){var t=function(t,e){return t.map(function(t){return Object.assign({},t,{selected:e.indexOf(t.id)>-1})})},e=[];[2017,2016,2015,2014,2013].forEach(function(t){for(var a=1;a<=12;a++)e.push({id:t+"-"+a,label:o.MONTH_NAMES[a-1]+" "+t,month:a,year:t,selected:!1})});var a=[{id:"za",class:"for",label:"ZA",selected:!1},{id:"proti",class:"against",label:"PROTI",selected:!1},{id:"kvorum",class:"kvorum",label:"person"===this.type?"VZDRŽAN":"VZDRŽANI",selected:!1},{id:"ni",class:"ni",label:"person"===this.type?"NI":"NISO",selected:!1}],r=this.cardData.data.all_tags.map(function(t){return{id:t,label:t,selected:!1}}),s="";return this.cardData.state&&(this.cardData.state.text&&(s=this.cardData.state.text),this.cardData.state.months&&(e=t(e,this.cardData.state.months)),this.cardData.state.options&&(a=t(a,this.cardData.state.options)),this.cardData.state.tags&&(r=t(r,this.cardData.state.tags))),{cardMethod:this.cardData.cardData.method,cardGroup:this.cardData.cardData.group,vocabulary:this.cardData.vocab,votingDays:this.cardData.data.results,allMonths:e,allOptions:a,allTags:r,textFilter:s,shortenedCardUrl:""}},methods:{toggleOption:function(t){var e=this.allOptions.filter(function(e){return e.id===t})[0];e.selected=!e.selected},getFilteredVotingDays:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=function(a){var r=e||0===t.selectedTags.length||a.tags.filter(function(e){return t.selectedTags.indexOf(e)>-1}).length>0,s=""===t.textFilter||a.motion.toLowerCase().indexOf(t.textFilter.toLowerCase())>-1,n=e||0===t.selectedOptions.length||t.selectedOptions.indexOf(a.option)>-1;return r&&s&&n},r=function(a){if(e||0===t.selectedMonths.length)return!0;var r=a.date.split(" ").map(function(t){return parseInt(t,10)}),s=i(r,3),n=s[1],o=s[2];return t.selectedMonths.filter(function(t){return t.month===n&&t.year===o}).length>0};return this.votingDays.map(function(e){return{date:e.date,ballots:e.ballots.filter(a).map(function(e){var a=JSON.parse(JSON.stringify(e));return"ni"===e.option?a.label="person"===t.type?"Ni "+t.vocabulary.glasovati[t.person.gender]+" o":"Niso glasovali o":a.label="person"===t.type?(0,n.default)(t.vocabulary.glasovati[t.person.gender])+" "+e.option.toUpperCase():"Glasovali "+e.option.toUpperCase(),"none"!==e.result&&(a.outcome=e.result===!0?"Predlog sprejet":"Predlog zavrnjen"),a})}}).filter(function(t){return t.ballots.length>0}).filter(r)},shortenUrl:function(t){var e=this;$.get("https://parla.me/shortner/generate?url="+encodeURIComponent(t+"&frame=true"),function(t){e.shortenedCardUrl=t,e.$el.querySelector(".card-content-share button, .btn-copy-embed").textContent="KOPIRAJ"})}},props:{cardData:{type:Object,required:!0},type:{type:String,required:!0,validator:function(t){return["person","party"].indexOf(t)>-1}},person:Object,party:Object},watch:{cardUrl:function(t){this.shortenUrl(t)}},beforeMount:function(){this.shortenUrl(this.cardUrl)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(29),s=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default={name:"GlasovanjaPoslanskeSkupine",components:{Glasovanja:s.default}}},function(t,e){},function(t,e){function a(t){return t.split("")}t.exports=a},function(t,e){function a(t,e,a){var r=-1,s=t.length;e<0&&(e=-e>s?0:s+e),a=a>s?s:a,a<0&&(a+=s),s=e>a?0:a-e>>>0,e>>>=0;for(var n=Array(s);++r<s;)n[r]=t[r+e];return n}t.exports=a},function(t,e,a){function r(t,e,a){var r=t.length;return a=void 0===a?r:a,!e&&a>=r?t:s(t,e,a)}var s=a(17);t.exports=r},function(t,e,a){function r(t){return function(e){e=o(e);var a=n(e)?i(e):void 0,r=a?a[0]:e.charAt(0),c=a?s(a,1).join(""):e.slice(1);return r[t]()+c}}var s=a(18),n=a(1),i=a(20),o=a(2);t.exports=r},function(t,e,a){function r(t){return n(t)?i(t):s(t)}var s=a(16),n=a(1),i=a(21);t.exports=r},function(t,e){function a(t){return t.split("")}t.exports=a},function(t,e,a){function r(t){return n(s(t).toLowerCase())}var s=a(2),n=a(23);t.exports=r},function(t,e,a){var r=a(19),s=r("toUpperCase");t.exports=s},function(t,e,a){var r=a(0)(a(8),a(32),null,null);t.exports=r.exports},function(t,e,a){var r=a(0)(a(9),a(33),null,null);t.exports=r.exports},function(t,e,a){var r=a(0)(a(10),a(30),null,null);t.exports=r.exports},function(t,e,a){var r=a(0)(a(11),a(36),null,null);t.exports=r.exports},function(t,e,a){var r=a(0)(a(12),a(31),null,null);t.exports=r.exports},function(t,e,a){a(15);var r=a(0)(a(13),a(35),"data-v-3a33926d",null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[t.config.alternative?[a("div",{staticClass:"alt-header-container"},[a("div",{staticClass:"alt-header"},[t.config.circleText?a("div",{staticClass:"media-object img-circle session-logo",class:t.config.circleClass},[a("b",[t._v(t._s(t.config.circleText))])]):t.config.circleImage?a("img",{staticClass:"portrait column",attrs:{src:"https://cdn.parlameter.si/v1/parlassets/img/people/square/"+t.config.circleImage+".png"}}):t.config.circleIcon?a("div",{staticClass:"icon-circle"},[a("img",{attrs:{src:"https://cdn.parlameter.si/v1/parlassets/icons/"+t.config.circleIcon+".svg"}})]):t._e(),t._v(" "),a("div",{staticClass:"header-info-container"},[a("h1",{domProps:{innerHTML:t._s(t.config.heading)}}),t._v(" "),a("h2",{staticClass:"partyinfo"},[t._v(t._s(t.config.subheading))]),t._v(" "),a("h2",{staticClass:"cardname"},[t._v(t._s(t.config.title))])])]),t._v(" "),a("div",{staticClass:"alt-header-border"})])]:[a("div",{staticClass:"card-header-border"}),t._v(" "),a("h1",[t._v(t._s(t.config.title))])]],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-content-share hidden"},[a("div",{staticClass:"card-back-content"},[a("div",{staticClass:"share-content"},[a("label",{attrs:{for:"share-url"}},[t._v("Neposredna povezava do kartice")]),t._v(" "),a("input",{staticClass:"form-control share-url",attrs:{type:"url",id:"share-url"},domProps:{value:t.url}}),t._v(" "),a("button",{staticClass:"btn-parlameter btn-full-width btn-blue"},[t._v("KOPIRAJ")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-content-embed hidden"},[a("div",{staticClass:"card-back-content"},[a("div",{staticClass:"embed-content"},[a("div",{staticClass:"embed-divider"}),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"embed-divider"}),t._v(" "),a("div",{staticClass:"embed-script"},[a("textarea",{staticClass:"form-control",attrs:{"data-id":"","data-url":t.url},domProps:{innerHTML:t._s(t.embedCode)}}),t._v(" "),a("button",{staticClass:"btn-parlameter btn-full-width btn-blue btn-copy-embed"},[t._v("KOPIRAJ")])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"embed-switch-container"},[a("div",{staticClass:"embed-label"},[t._v("Podatki naj se vedno osvežujejo")]),t._v(" "),a("div",{staticClass:"embed-switch-big-box"},[a("div",{staticClass:"embed-switch-box"},[a("div",{staticClass:"embed-switch"},[a("div",{staticClass:"embed-switches"},[a("div",{staticClass:"leftswitch"},[t._v("DA")]),t._v(" "),a("div",{staticClass:"rightswitch"},[t._v("NE")])])])]),t._v(" "),a("div",{staticClass:"embed-switch-ball"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-footer"},[a("div",{staticClass:"card-logo hidden"},[a("a",{attrs:{href:t.link}},[a("img",{attrs:{src:"https://cdn.parlameter.si/v1/parlassets/img/logo-parlameter.svg",alt:"parlameter logo"}})])]),t._v(" "),a("div",{staticClass:"card-circle-button card-share",attrs:{"data-back":"share"}}),t._v(" "),a("div",{staticClass:"card-circle-button card-embed",attrs:{"data-back":"embed"}}),t._v(" "),a("div",{staticClass:"card-circle-button card-info",attrs:{"data-back":"info"}},[t._v("i")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("glasovanja",{attrs:{"card-data":t.$options.cardData,type:"party",party:t.$options.cardData.data.party}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-container",attrs:{id:t.cardData.cardData._id,"data-id":t.cardGroup+"/"+t.cardMethod}},[a("card-header",{attrs:{config:t.headerConfig}}),t._v(" "),a("div",{staticClass:"card-content full"},[a("div",{staticClass:"card-content-front"},[a("div",{staticClass:"filters"},[a("div",{staticClass:"filter text-filter"},[a("div",{staticClass:"filter-label"},[t._v("Išči po naslovu glasovanja")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.textFilter,expression:"textFilter"}],staticClass:"text-filter-input",attrs:{type:"text"},domProps:{value:t.textFilter},on:{input:function(e){e.target.composing||(t.textFilter=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"filter tag-dropdown"},[a("div",{staticClass:"filter-label"},[t._v("Matično delovno telo")]),t._v(" "),a("search-dropdown",{attrs:{items:t.dropdownItems.tags,placeholder:t.tagPlaceholder}})],1),t._v(" "),a("div",{staticClass:"filter month-dropdown"},[a("div",{staticClass:"filter-label"},[t._v("Časovno obdobje")]),t._v(" "),a("search-dropdown",{attrs:{items:t.dropdownItems.months,placeholder:t.monthPlaceholder,alphabetise:!1}})],1),t._v(" "),a("div",{staticClass:"filter option-party-buttons"},t._l(t.allOptions,function(e){return a("div",{class:["party-button",e.class,{selected:t.selectedOptions.indexOf(e.id)>-1}],on:{click:function(a){t.toggleOption(e.id)}}},[t._v(t._s(e.label))])}))]),t._v(" "),a("div",{staticClass:"votes stickinme date-list"},[t._l(t.filteredVotingDays,function(e){return[a("div",{staticClass:"date"},[t._v(t._s(e.date))]),t._v(" "),a("ul",t._l(e.ballots,function(e){return a("li",[a("div",{class:["icon",e.option]}),t._v(" "),a("div",{staticClass:"motion"},[t._v(t._s(e.label)+" "),a("a",{staticClass:"funblue-light-hover",attrs:{href:t.cardData.urlsData.base+"/seja/glasovanje/"+e.session_id+"/"+e.vote_id}},[t._v(t._s(e.motion))])]),t._v(" "),a("div",{staticClass:"outcome"},[t._v(t._s(e.outcome||"Ni podatkov"))])])}))]})],2)]),t._v(" "),a("card-info",[a("p",{staticClass:"info-text lead"},[t._v("Pregled vseh glasovanj, ki so se zgodila na seji.")]),t._v(" "),a("p",{staticClass:"info-text heading"},[t._v("METODOLOGIJA")]),t._v(" "),a("p",{staticClass:"info-text"},[t._v("Za vsa glasovanja na posamezni seji preštejemo vse glasove (ZA, PROTI, VZDRŽAN/-A) in število poslancev, ki niso glasovali, ter izpišemo rezultate.")]),t._v(" "),a("p",{staticClass:"info-text"},[t._v("Nabor glasovanj pridobimo s spletnega mesta "),a("a",{staticClass:"funblue-light-hover",attrs:{href:"https://www.dz-rs.si/wps/portal/Home/deloDZ/seje/sejeDrzavnegaZbora/PoDatumuSeje",target:"_blank"}},[t._v("DZ RS")]),t._v(".")])]),t._v(" "),a("card-embed",{attrs:{url:t.cardUrl}}),t._v(" "),a("card-share",{attrs:{url:t.shortenedCardUrl}})],1),t._v(" "),a("card-footer",{attrs:{link:t.cardData.urlsData.base}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-content-info hidden"},[a("div",{staticClass:"card-back-content"},[t._t("default")],2)])},staticRenderFns:[]}}]);