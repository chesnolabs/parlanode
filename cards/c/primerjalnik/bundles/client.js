!function(t){function e(a){if(s[a])return s[a].exports;var i=s[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var s={};e.m=t,e.c=s,e.i=function(t){return t},e.d=function(t,s,a){e.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e){t.exports=function(t,e,s,a,i){var r,n=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(r=t,n=t.default);var o="function"==typeof n?n.options:n;e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),a&&(o._scopeId=a);var c;if(i?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},o._ssrRegister=c):s&&(c=s),c){var d=o.functional,u=d?o.render:o.beforeCreate;d?o.render=function(t,e){return c.call(e),u(t,e)}:o.beforeCreate=u?[].concat(u,c):[c]}return{esModule:r,exports:n,options:o}}},function(t,e){t.exports={_id:"random_id",name:"Primerjalnik glasovanj",dataUrl:"https://analize.parlameter.si/v1/p/getListOfMembersTickers/",type:"primerjalnik",lastUpdate:"2017-05-26T09:49:42.703Z",method:"primerjalnik",group:"c"}},function(t,e,s){function a(t){s(12),s(11)}var i=s(0)(s(10),s(22),a,"data-v-ba7957b8",null);t.exports=i.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){makeEmbedSwitch(),activateCopyButton(),addCardRippling()}}},function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=s(2),r=a(i),n=s(1),l=a(n);new Vue(Object.assign({},r.default,{cardData:window.__INITIAL_STATE__})).$mount("#"+l.default._id)},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardEmbed",computed:{embedCode:function(){return"&#x3C;script&#x3E;(function(d,script){script=d.createElement(&#x27;script&#x27;);script.type=&#x27;text/javascript&#x27;;script.async=true;script.onload=function(){iFrameResize({log:true,checkOrigin:false})};script.src=&#x27;https://cdn.parlameter.si/v1/parlassets/js/iframeResizer.min.js&#x27;;d.getElementsByTagName(&#x27;head&#x27;)[0].appendChild(script);}(document));&#x3C;/script&#x3E;&#x3C;iframe frameborder=&#x22;0&#x22; width=&#x22;100%&#x22; src=&#x22;"+this.url+"&#x26;embed=true&#x22;&#x3E;&#x3C;/iframe&#x3E;"}},props:{url:String}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardFooter",props:{link:String}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardHeader",props:{config:Object}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardInfo"}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardShare",props:{url:String}}},function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(16),r=a(i),n=s(13),l=a(n),o=s(17),c=a(o),d=s(15),u=a(d),f=s(14),v=a(f),p=s(3),_=a(p);e.default={components:{CardInfo:r.default,CardEmbed:l.default,CardShare:c.default,CardHeader:u.default,CardFooter:v.default},mixins:[_.default],name:"ImeKartice",data:function(){return{parties:[],samePeople:[],differentPeople:[],data:[],slugs:this.$options.cardData.urlsData,shortenedCardUrl:"",headerConfig:{circleIcon:"og-list",heading:"&nbsp;",subheading:"7. sklic parlamenta",alternative:"true"===this.$options.cardData.cardData.altHeader,title:this.$options.cardData.cardData.name}}},computed:{samePeoplePlaceholder:function(){return this.selectedSamePeople.length>0?"Izbranih: "+this.selectedSamePeople.length:"Izberi poslance"},differentPeoplePlaceholder:function(){return this.selectedDifferentPeople.length>0?"Izbranih: "+this.selectedDifferentPeople.length:"Izberi poslance"},generatedCardUrl:function(){return"https://glej.parlameter.si/group/method/"},filteredVotes:function(){return this.getFilteredVotes()},queryUrl:function(){return"http://127.0.0.1:8000/v1/s/getComparedVotes/?people_same="+this.selectedSamePeople.map(function(t){return t.id}).toString()+"&parties_same="+this.sameParties.map(function(t){return t.id}).toString()+"&people_different="+this.selectedDifferentPeople.map(function(t){return t.id}).toString()+"&parties_different="+this.differentParties.map(function(t){return t.id}).toString()},votes:function(){return this.data.map(function(t){var e=t.results.votes_for+t.results.against+t.results.abstain+t.results.not_present;return t.url="https://parlameter.si/seja/glasovanje/"+t.session.id+"/"+t.results.motion_id,t.accepted="accepted "+(!0===t.results.result?"aye":"nay"),t.accepted_glyph="glyphicon "+(!0===t.results.result?"glyphicon-ok":"glyphicon-remove"),t.percent_votes_for=Math.floor(t.results.votes_for/e*100),t.percent_against=Math.floor(t.results.against/e*100),t.percent_abstain=Math.floor(t.results.abstain/e*100),t.percent_not_present=Math.floor(t.results.not_present/e*100),t})},sameParties:function(){return this.parties.filter(function(t){return t.isSame})},differentParties:function(){return this.parties.filter(function(t){return t.isDifferent})},selectedSamePeople:function(){return this.samePeople.filter(function(t){return t.selected})},selectedDifferentPeople:function(){return this.differentPeople.filter(function(t){return t.selected})}},mounted:function(){var t=this;$.ajax({url:"https://data.parlameter.si/v1/getAllPGs/",method:"GET",success:function(e){var s=[];for(var a in e)s.push({id:e[a].id,acronym:e[a].acronym,is_coalition:e[a].is_coalition,name:e[a].name,isSame:!1,isDifferent:!1});t.parties=s},error:function(t){alert(JSON.stringify(t))}}),$.ajax({url:"https://data.parlameter.si/v1/getMPs/",method:"GET",success:function(e){var s=JSON.parse(JSON.stringify(e));t.samePeople=s.map(function(t){return t.selected=!1,t.label=t.name,t});var a=JSON.parse(JSON.stringify(e));t.differentPeople=a.map(function(t){return t.selected=!1,t.label=t.name,t})},error:function(t){alert(JSON.stringify(t))}})},methods:{togglePartySame:function(t){t.isDifferent=!1,t.isSame=!t.isSame},togglePartyDifferent:function(t){t.isDifferent=!t.isDifferent,t.isSame=!1},openModalSame:function(){$("#modal-primerjalnik-same").modal("show")},openModalDifferent:function(){$("#modal-primerjalnik-different").modal("show")},loadResults:function(){if(this.selectedSamePeople.length+this.sameParties.length>1){console.log("loading results"),console.log(this.queryUrl);var t=this;$.ajax({url:t.queryUrl,method:"GET",success:function(e){console.log("results loaded"),console.log(e),t.data=e.results,$(".modal").modal("hide")},error:function(t){alert(JSON.stringify(t))}})}else if(this.selectedSamePeople.length+this.sameParties.length===1&&this.selectedDifferentPeople.length+this.differentParties.length>0){console.log("loading results"),console.log(this.queryUrl);var e=this;$.ajax({url:e.queryUrl,method:"GET",success:function(t){console.log("results loaded"),console.log(t),e.data=t.results,$(".modal").modal("hide")},error:function(t){alert(JSON.stringify(t))}})}else alert("nimaš izbranih dovolj pogojev za primerjavo")},getFilteredVotes:function(){return this.votes},shortenUrl:function(t){var e=this;return new Promise(function(s){$.get("https://parla.me/shortner/generate?url="+window.encodeURIComponent(t+"&frame=true"),function(t){e.$el.querySelector(".card-content-share button").textContent="KOPIRAJ",s(t)})})},measurePiwik:function(t,e,s){"function"==typeof measure&&(""!==e?measure("s","session-sort",e+" "+s,""):""!==t&&measure("s","session-filter",t,""))}},watch:{generatedCardUrl:function(t){var e=this;this.shortenUrl(t).then(function(t){return e.shortenedCardUrl=t})},selectedSamePeople:function(t){var e=this;t.forEach(function(t){e.selectedDifferentPeople.filter(function(e){return e.id===t.id}).map(function(t){t.selected=!1})})},selectedDifferentPeople:function(t){var e=this;t.forEach(function(t){e.selectedSamePeople.filter(function(e){return e.id===t.id}).map(function(t){t.selected=!1})})}},beforeMount:function(){this.shortenUrl(this.generatedCardUrl)}}},function(t,e){},function(t,e){},function(t,e,s){var a=s(0)(s(5),s(20),null,null,null);t.exports=a.exports},function(t,e,s){var a=s(0)(s(6),s(21),null,null,null);t.exports=a.exports},function(t,e,s){var a=s(0)(s(7),s(18),null,null,null);t.exports=a.exports},function(t,e,s){var a=s(0)(s(8),s(23),null,null,null);t.exports=a.exports},function(t,e,s){var a=s(0)(s(9),s(19),null,null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-header"},[t.config.alternative?[s("div",{staticClass:"alt-header-container"},[s("div",{staticClass:"alt-header"},[t.config.circleText?s("div",{staticClass:"media-object img-circle session-logo",class:t.config.circleClass},[s("b",[t._v(t._s(t.config.circleText))])]):t.config.circleImage?s("img",{staticClass:"portrait column",attrs:{src:"https://cdn.parlameter.si/v1/parlassets/img/people/square/"+t.config.circleImage+".png"}}):t.config.circleIcon?s("div",{staticClass:"icon-circle"},[s("img",{attrs:{src:"https://cdn.parlameter.si/v1/parlassets/icons/"+t.config.circleIcon+".svg"}})]):t._e(),t._v(" "),s("div",{staticClass:"header-info-container"},[s("h1",{domProps:{innerHTML:t._s(t.config.heading)}}),t._v(" "),s("h2",{staticClass:"partyinfo"},[t._v(t._s(t.config.subheading))]),t._v(" "),s("h2",{staticClass:"cardname"},[t._v(t._s(t.config.title))])])]),t._v(" "),s("div",{staticClass:"alt-header-border"})])]:[s("div",{staticClass:"card-header-border"}),t._v(" "),s("h1",[t._v(t._s(t.config.title))])]],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-content-share hidden"},[s("div",{staticClass:"card-back-content"},[s("div",{staticClass:"share-content"},[s("label",{attrs:{for:"share-url"}},[t._v("Neposredna povezava do kartice")]),t._v(" "),s("input",{staticClass:"form-control share-url",attrs:{type:"url",id:"share-url"},domProps:{value:t.url}}),t._v(" "),s("button",{staticClass:"btn-parlameter btn-full-width btn-blue"},[t._v("KOPIRAJ")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-content-embed hidden"},[s("div",{staticClass:"card-back-content"},[s("div",{staticClass:"embed-content"},[s("div",{staticClass:"embed-divider"}),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"embed-divider"}),t._v(" "),s("div",{staticClass:"embed-script"},[s("textarea",{staticClass:"form-control",attrs:{"data-id":"","data-url":t.url},domProps:{innerHTML:t._s(t.embedCode)}}),t._v(" "),s("button",{staticClass:"btn-parlameter btn-full-width btn-blue btn-copy-embed"},[t._v("KOPIRAJ")])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"embed-switch-container"},[s("div",{staticClass:"embed-label"},[t._v("Podatki naj se vedno osvežujejo")]),t._v(" "),s("div",{staticClass:"embed-switch-big-box"},[s("div",{staticClass:"embed-switch-box"},[s("div",{staticClass:"embed-switch"},[s("div",{staticClass:"embed-switches"},[s("div",{staticClass:"leftswitch"},[t._v("DA")]),t._v(" "),s("div",{staticClass:"rightswitch"},[t._v("NE")])])])]),t._v(" "),s("div",{staticClass:"embed-switch-ball"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-footer"},[s("div",{staticClass:"card-logo hidden"},[s("a",{attrs:{href:t.link}},[s("img",{attrs:{src:"https://cdn.parlameter.si/v1/parlassets/img/logo-parlameter.svg",alt:"parlameter logo"}})])]),t._v(" "),s("div",{staticClass:"card-circle-button card-share",attrs:{"data-back":"share"}}),t._v(" "),s("div",{staticClass:"card-circle-button card-embed",attrs:{"data-back":"embed"}}),t._v(" "),s("div",{staticClass:"card-circle-button card-info",attrs:{"data-back":"info"}},[t._v("i")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-container card-halfling card-IME_KARTICE",attrs:{id:t.$options.cardData.cardData._id}},[s("card-header",{attrs:{config:t.headerConfig}}),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"card-content-front"},[s("div",{staticClass:"primerjalnik"},[t._v("\n        Zanima me, na katerih glasovanjih so "),s("span",{staticClass:"primerjalnik-for"},[t._l(t.sameParties,function(e){return s("span",[t._v(t._s(e.acronym)+" ")])}),t._l(t.selectedSamePeople,function(e){return s("span",[t._v(t._s(e.name)+" ")])}),s("span",{staticClass:"plus",on:{click:t.openModalSame}})],2),t._v(" glasovali enako, "),s("span",{staticClass:"primerjalnik-against"},[t._l(t.differentParties,function(e){return s("span",[t._v(t._s(e.acronym)+" ")])}),t._l(t.selectedDifferentPeople,function(e){return s("span",[t._v(t._s(e.name)+" ")])}),s("span",{staticClass:"plus",on:{click:t.openModalDifferent}})],2),t._v(" pa drugače od njih.\n      ")]),t._v(" "),s("div",[t._v("Število filtriranih glasovanj "+t._s(t.votes.length))]),t._v(" "),s("div",[t._v(t._s(t.queryUrl))]),t._v(" "),s("div",{staticClass:"tab"},[t._v("Seznam glasovanj")]),t._v(" "),s("div",{staticClass:"seznam-glasovanj-container"},[s("div",{staticClass:"date-list",attrs:{id:"votingCard"}},[s("div",{staticClass:"session_voting"},t._l(t.filteredVotes,function(e){return s("div",{staticClass:"clearfix single_voting"},[e.results.is_outlier?s("div",{staticClass:"fire-badge"}):t._e(),t._v(" "),e.results.has_outliers&&e.results.is_outlier?s("div",{staticClass:"lightning-badge"}):t._e(),t._v(" "),e.results.has_outliers&&!e.results.is_outlier?s("div",{staticClass:"lightning-badge",staticStyle:{left:"-7px"}}):t._e(),t._v(" "),s("a",{attrs:{href:e.url}},[s("div",{staticClass:" col-md-1 "},[s("div",{class:e.accepted},[s("p",[s("i",{class:e.accepted_glyph})])])]),t._v(" "),s("div",{staticClass:"col-md-11 border-left "},[s("div",{staticClass:"col-md-6 "},[s("div",{staticClass:"session_title "},[s("p",[t._v("\n                        "+t._s(e.results.text)+"\n                      ")])])]),t._v(" "),s("div",{staticClass:"col-md-6 "},[s("div",{staticClass:"session_votes "},[s("div",{staticClass:"progress smallbar "},[s("div",{staticClass:"progress-bar fontblue ",style:{width:e.percent_votes_for+"%"}},[s("span",{staticClass:"sr-only "},[t._v(t._s(e.percent_votes_for)+"% votes for")])]),t._v(" "),s("div",{staticClass:"progress-bar funblue ",style:{width:e.percent_against+"%"}},[s("span",{staticClass:"sr-only "},[t._v(t._s(e.percent_against)+"% votes for")])]),t._v(" "),s("div",{staticClass:"progress-bar ignoreblue ",style:{width:e.percent_abstain+"%"}},[s("span",{staticClass:"sr-only "},[t._v(t._s(e.percent_abstain)+"% votes for")])]),t._v(" "),s("div",{staticClass:"progress-bar noblue ",style:{width:e.percent_not_present+"%"}},[s("span",{staticClass:"sr-only "},[t._v(t._s(e.percent_not_present)+"% votes for")])])]),t._v(" "),s("div",{staticClass:"row "},[s("div",{staticClass:"col-xs-3 "},[t._v("\n                          "+t._s(e.results.votes_for)+"\n                          "),s("div",{staticClass:"type "},[t._v("Za")]),t._v(" "),s("div",{staticClass:"indicator aye "},[t._v(" ")])]),t._v(" "),s("div",{staticClass:"col-xs-3 "},[t._v("\n                          "+t._s(e.results.against)+"\n                          "),s("div",{staticClass:"type "},[t._v("Proti")]),t._v(" "),s("div",{staticClass:"indicator ney "},[t._v(" ")])]),t._v(" "),s("div",{staticClass:"col-xs-3 "},[t._v("\n                          "+t._s(e.results.abstain)+"\n                          "),s("div",{staticClass:"type "},[t._v("Vzdržan")]),t._v(" "),s("div",{staticClass:"indicator abstention "},[t._v(" ")])]),t._v(" "),s("div",{staticClass:"col-xs-3 "},[t._v("\n                          "+t._s(e.results.not_present)+"\n                          "),s("div",{staticClass:"type "},[t._v("Niso")]),t._v(" "),s("div",{staticClass:"indicator not "},[t._v(" ")])])])])])])])])}))])])]),t._v(" "),s("card-info",[s("p",{staticClass:"info-text lead"}),t._v(" "),s("p",{staticClass:"info-text heading"},[t._v("METODOLOGIJA")]),t._v(" "),s("p",{staticClass:"info-text"})]),t._v(" "),s("card-embed",{attrs:{url:t.generatedCardUrl}}),t._v(" "),s("card-share",{attrs:{url:t.shortenedCardUrl}})],1),t._v(" "),s("card-footer",{attrs:{link:t.slugs.base}}),t._v(" "),s("div",{staticClass:"modal fade",attrs:{tabindex:"1",role:"dialog",id:"modal-primerjalnik-same"}},[s("div",{staticClass:"modal-dialog modal-wide modal-center",attrs:{role:"document"}},[s("div",{staticClass:"modal-center-wrapper"},[s("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},t._l(t.parties,function(e){return s("span",{class:["primerjalnik-ps-switch",{on:e.isSame}],attrs:{"data-id":e.id,"data-acronym":e.acronym},on:{click:function(s){t.togglePartySame(e)}}},[t._v(t._s(e.acronym))])}))]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("search-dropdown",{attrs:{items:t.samePeople,placeholder:t.samePeoplePlaceholder}})],1)]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("button",{on:{click:t.loadResults}},[t._v("Naloadaj")])])])])])])])])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{tabindex:"1",role:"dialog",id:"modal-primerjalnik-different"}},[s("div",{staticClass:"modal-dialog modal-wide modal-center",attrs:{role:"document"}},[s("div",{staticClass:"modal-center-wrapper"},[s("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},t._l(t.parties,function(e){return s("span",{class:["primerjalnik-ps-switch",{on:e.isDifferent}],attrs:{"data-id":e.id,"data-acronym":e.acronym},on:{click:function(s){t.togglePartyDifferent(e)}}},[t._v(t._s(e.acronym))])}))]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("search-dropdown",{attrs:{items:t.differentPeople,placeholder:t.differentPeoplePlaceholder}})],1)]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("button",{on:{click:t.loadResults}},[t._v("Naloadaj")])])])])])])])])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("button",{staticClass:"close modal-close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),s("h4",{staticClass:"modal-title"},[t._v("Vklopi cele poslanske skupine ali poišči posamezne poslance.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("button",{staticClass:"close modal-close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),s("h4",{staticClass:"modal-title"},[t._v("Vklopi cele poslanske skupine ali poišči posamezne poslance.")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-content-info hidden"},[s("div",{staticClass:"card-back-content"},[t._t("default")],2)])},staticRenderFns:[]}}]);