module.exports=function(a){function e(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return a[n].call(t.exports,t,t.exports,e),t.l=!0,t.exports}var r={};return e.m=a,e.c=r,e.d=function(a,r,n){e.o(a,r)||Object.defineProperty(a,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(a){var r=a&&a.__esModule?function(){return a.default}:function(){return a};return e.d(r,"a",r),r},e.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},e.p="",e(e.s=3)}([function(a,e){a.exports=function(a,e,r,n,t,s){var o,i=a=a||{},l=typeof a.default;"object"!==l&&"function"!==l||(o=a,i=a.default);var c="function"==typeof i?i.options:i;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),r&&(c.functional=!0),t&&(c._scopeId=t);var u;if(s?(u=function(a){a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,a||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),n&&n.call(this,a),a&&a._registeredComponents&&a._registeredComponents.add(s)},c._ssrRegister=u):n&&(u=n),u){var d=c.functional,m=d?c.render:c.beforeCreate;d?(c._injectStyles=u,c.render=function(a,e){return u.call(e),m(a,e)}):c.beforeCreate=m?[].concat(m,u):[u]}return{esModule:o,exports:i,options:c}}},function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.MONTH_NAMES=["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],e.PORTRAIT_ROOT_URL="https://cdn.parlameter.si/v1/parlassets/img/people/square/",e.ICONS_ROOT_URL="https://cdn.parlameter.si/v1/parlassets/icons/",e.ORGS_ROOT_URL="https://glej.parlameter.si/wb/getWorkingBodies/",e.SEARCH_ROOT_URL="https://parlameter.si/seje/isci/filter?q=",e.RIPPLE_DURATION=600},function(a,e){a.exports={partyLink:{govori:"/govori/",base:"/poslanska-skupina/",pregled:"/pregled/",glasovanja:"/glasovanja/"},personLink:{govori:"/govori/",base:"/poslanec/",pregled:"/pregled/",glasovanja:"/glasovanja/"},sessionLink:{prisotnost:"/seja/prisotnost/",glasovanje:"/seja/glasovanje/",transkript:"/seja/transkript/",glasovanja:"/seja/glasovanja/"},person:{2:{slug:"anja-bah-zibert"},3:{slug:"urska-ban"},4:{slug:"roberto-battelli"},5:{slug:"julijana-bizjak-mlakar"},6:{slug:"srecko-blazic"},7:{slug:"mirjam-bon-klanjscek"},8:{slug:"tilen-bozic"},9:{slug:"alenka-bratusek"},10:{slug:"franc-breznik"},11:{slug:"milan-brglez"},12:{slug:"nada-brinovsek"},13:{slug:"miro-cerar"},14:{slug:"tanja-cink"},15:{slug:"andrej-cus"},16:{slug:"erika-dekleva"},17:{slug:"iva-dimic"},18:{slug:"bojan-dobovsek"},19:{slug:"marjan-dolinsek"},20:{slug:"karl-viktor-erjavec"},21:{slug:"marko-ferluga"},22:{slug:"tomaz-gantar"},23:{slug:"jelka-godec"},24:{slug:"laszlo-goncz"},25:{slug:"vinko-gorenak"},26:{slug:"branko-grims"},27:{slug:"irena-groselj-kosnik"},28:{slug:"margareta-gucek-zakosek"},29:{slug:"primoz-hainz"},30:{slug:"matjaz-han"},31:{slug:"matjaz-hanzek"},32:{slug:"jozef-horvat"},33:{slug:"mitja-horvat"},34:{slug:"ivan-hrsak"},35:{slug:"eva-irgl"},36:{slug:"janez-jansa"},37:{slug:"franc-jursa"},38:{slug:"andreja-katic"},39:{slug:"aleksander-kavcic"},40:{slug:"anita-kolesa"},41:{slug:"benedikt-kopmajer"},42:{slug:"miha-kordis"},43:{slug:"ksenija-korenjak-kramar"},44:{slug:"irena-kotnik"},45:{slug:"marjana-kotnik-poropat"},46:{slug:"lilijana-kozlovic"},47:{slug:"danijel-krivec"},48:{slug:"simona-kustec-lipicer"},49:{slug:"zvonko-lah"},50:{slug:"franc-laj"},51:{slug:"suzana-lep-simenko"},52:{slug:"marinka-levicar"},53:{slug:"tomaz-lisec"},54:{slug:"anze-logar"},55:{slug:"zan-mahnic"},56:{slug:"klavdija-markez"},57:{slug:"dragan-matic"},58:{slug:"luka-mesec"},59:{slug:"jani-moderndorfer"},60:{slug:"jasna-murgel"},61:{slug:"bojana-mursic"},62:{slug:"matjaz-nemec"},63:{slug:"ljudmila-novak"},64:{slug:"bojan-podkrajsek"},65:{slug:"marko-pogacnik"},66:{slug:"marijan-pojbic"},67:{slug:"andreja-potocnik"},68:{slug:"ivan-prelog"},69:{slug:"uros-prikl"},70:{slug:"branislav-rajic"},71:{slug:"danilo-anton-ranc"},72:{slug:"kamal-izidor-shaker"},73:{slug:"janja-sluga"},74:{slug:"vojka-sergan"},75:{slug:"andrej-sircelj"},76:{slug:"ivan-skodnik"},77:{slug:"marusa-skopac"},78:{slug:"joze-tanko"},79:{slug:"matej-tasner-vatovec"},80:{slug:"violeta-tomic"},81:{slug:"matej-tonin"},82:{slug:"franc-trcek"},83:{slug:"janko-veber"},84:{slug:"vesna-vervega"},85:{slug:"peter-vilfan"},86:{slug:"jernej-vrtovec"},87:{slug:"simon-zajc"},88:{slug:"igor-zorcic"},89:{slug:"branko-zorman"},90:{slug:"dejan-zidan"},91:{slug:"ljubo-znidar"},92:{slug:"dusan-verbic"},93:{slug:"franc-krizanic"},94:{slug:"jana-jenko"},95:{slug:"marija-bacic"},96:{slug:"marija-antonija-kovacic"},1329:{slug:"mateja-kozuh-novak"},1354:{slug:"bojan-krajnc"},1355:{slug:"sasa-tabakovic"},1356:{slug:"jan-skoberne"},1357:{slug:"dusan-radic"},2933:{slug:"teja-ljubic"},2934:{slug:"vlasta-pockaj"},3986:{slug:"balazic-dejan"}},base:"https://parlameter.si",party:{1:{acronym:"smc",realAcronym:"SMC",slug:"ps-stranka-modernega-centra"},2:{acronym:"imns",realAcronym:"IMNS",slug:"ps-italijanske-in-madzarske-narodne-skupnosti"},3:{acronym:"desus",realAcronym:"DeSUS",slug:"ps-demokratska-stranka-upokojencev-slovenije"},4:{acronym:"zaab",realAcronym:"ZAAB",slug:"ps-zaveznistvo-alenke-bratusek"},5:{acronym:"sds",realAcronym:"SDS",slug:"ps-slovenska-demokratska-stranka"},6:{acronym:"nsi",realAcronym:"NSI",slug:"ps-nova-slovenija"},7:{acronym:"sd",realAcronym:"SD",slug:"ps-socialni-demokrati"},8:{acronym:"levica",realAcronym:"Levica",slug:"ps-levica"},9:{acronym:"",realAcronym:"",slug:"kolegij-predsednika-drzavnega-zbora"},10:{acronym:"",realAcronym:"",slug:"komisija-za-nadzor-javnih-financ"},11:{acronym:"",realAcronym:"",slug:"komisija-za-narodni-skupnosti"},12:{acronym:"",realAcronym:"",slug:"komisija-za-odnose-s-slovenci-v-zamejstvu-in-po-svetu"},13:{acronym:"",realAcronym:"",slug:"komisija-za-peticije-ter-za-clovekove-pravice-in-enake-moznosti"},14:{acronym:"",realAcronym:"",slug:"komisija-za-poslovnik"},15:{acronym:"",realAcronym:"",slug:"mandatno-volilna-komisija"},16:{acronym:"",realAcronym:"",slug:"odbor-za-delo-druzino-socialne-zadeve-in-invalide"},17:{acronym:"",realAcronym:"",slug:"odbor-za-finance-in-monetarno-politiko"},18:{acronym:"",realAcronym:"",slug:"odbor-za-gospodarstvo"},19:{acronym:"",realAcronym:"",slug:"odbor-za-infrastrukturo-okolje-in-prostor"},20:{acronym:"",realAcronym:"",slug:"odbor-za-izobrazevanje-znanost-sport-in-mladino"},21:{acronym:"",realAcronym:"",slug:"odbor-za-kmetijstvo-gozdarstvo-in-prehrano"},22:{acronym:"",realAcronym:"",slug:"odbor-za-kulturo"},23:{acronym:"",realAcronym:"",slug:"odbor-za-notranje-zadeve-javno-upravo-in-lokalno-samoupravo"},24:{acronym:"",realAcronym:"",slug:"odbor-za-obrambo"},25:{acronym:"",realAcronym:"",slug:"odbor-za-pravosodje"},26:{acronym:"",realAcronym:"",slug:"odbor-za-zadeve-evropske-unije"},27:{acronym:"",realAcronym:"",slug:"odbor-za-zdravstvo"},28:{acronym:"",realAcronym:"",slug:"odbor-za-zunanjo-politiko"},29:{acronym:"",realAcronym:"",slug:"ustavna-komisija"},30:{acronym:"",realAcronym:"",slug:"delegacija-drzavnega-zbora-v-parlamentarni-skupscini-sveta-evrope"},31:{acronym:"",realAcronym:"",slug:"delegacija-drzavnega-zbora-v-parlamentarni-skupscini-nato"},32:{acronym:"",realAcronym:"",slug:"delegacija-drzavnega-zbora-v-parlamentarni-skupscini-organizacije-za-varnost-in-sodelovanje-v-evropi"},33:{acronym:"",realAcronym:"",slug:"delegacija-drzavnega-zbora-v-parlamentarni-dimenziji-srednjeevropske-pobude"},34:{acronym:"",realAcronym:"",slug:"delegacija-drzavnega-zbora-v-parlamentarni-skupscini-unije-za-sredozemlje"},35:{acronym:"",realAcronym:"",slug:"nacionalna-skupina-interparlamentarne-unije-v-drzavnem-zboru"},36:{acronym:"",realAcronym:"",slug:"delegacija-drzavnega-zbora-v-parlamentarni-skupscini-seecp"},37:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-argentino"},38:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-albanijo"},39:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-avstralijo"},40:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-avstrijo"},41:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-azerbajdzanom"},42:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-belgijo"},43:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-bolgarijo"},44:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-bosno-in-hercegovino"},45:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-brazilijo"},46:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-cesko"},47:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-crno-goro"},48:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-dansko"},49:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-estonijo"},50:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-finsko"},51:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-francijo"},52:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-grcijo"},53:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-hrvasko"},54:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-indijo"},55:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-italijo"},56:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-irsko"},57:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-izraelom"},58:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-japonsko"},59:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-kanado"},60:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-kitajsko"},61:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-kubo"},62:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-litvo"},63:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-madzarsko"},64:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-makedonijo"},65:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-malto"},66:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-mehiko"},67:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-nemcijo"},68:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-nizozemsko"},69:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-norvesko"},70:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-romunijo"},71:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-rusijo"},72:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-slovasko"},73:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-srbijo"},74:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-spanijo"},75:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-svedsko"},76:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-svico"},77:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-turcijo"},78:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-ukrajino"},79:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-veliko-britanijo"},80:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-zdruzenimi-drzavami-amerike"},81:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-iranom"},82:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-ciprom"},83:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-poljsko"},84:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-marokom"},85:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-islandijo"},86:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-liechtensteinom"},87:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-portugalsko"},88:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-luksemburgom"},89:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-egiptom"},90:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-kosovom"},91:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-latvijo"},92:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-gruzijo"},93:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-juzno-korejo"},94:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-kuvajtom"},95:{acronym:"dz",realAcronym:"DZ",slug:"drzavni-zbor"},96:{acronym:"",realAcronym:"",slug:"ostali"},97:{acronym:"ps-np",realAcronym:"PS NP",slug:"ps-nepovezanih-poslancev"},98:{acronym:"",realAcronym:"",slug:"preiskovalna-komisija-o-ugotavljanju-zlorab-v-slovenskem-bancnem-sistemu-ter-ugotavljanju-vzrokov-in-odgovornosti-za-ze-drugo-sanacijo-bancnega-sistema-v-samostojni-sloveniji"},100:{acronym:"nep-bd",realAcronym:"NeP - BD",slug:"nepovezani-poslanec-bojan-dobovsek"},101:{acronym:"",realAcronym:"",slug:"preiskovalna-komisija-za-ugotavljanje-politicne-odgovornosti-nosilcev-javnih-funkcij-pri-investiciji-v-blok-6-termoelektrarne-sostanj"},102:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-savdsko-arabijo"},103:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-turkmenistanom"},104:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-venezuelo"},105:{acronym:"",realAcronym:"",slug:"komisija-za-nadzor-obvescevalnih-in-varnostnih-sluzb"},106:{acronym:"",realAcronym:"",slug:"preiskovalna-komisija-o-ugotavljanju-zlorab-v-slovenskem-zdravstvenem-sistemu-na-podrocju-prodaje-in-nakupa-zilnih-opornic"},107:{acronym:"nep-mbk",realAcronym:"NeP - MBK",slug:"nepovezana-poslanka-mirjam-bon-klanjscek"},108:{acronym:"nep-ac",realAcronym:"NeP - AČ",slug:"nepovezani-poslanec-andrej-cus"},109:{acronym:"ps-np",realAcronym:"PS NP",slug:"ps-nepovezanih-poslancev"},110:{acronym:"nep-ab",realAcronym:"NeP - AB",slug:"nepovezana-poslanka-alenka-bratusek"},111:{acronym:"nep-zl",realAcronym:"NeP - ZL",slug:"nepovezani-poslanec-zvonko-lah"},112:{acronym:"nep-jm",realAcronym:"NeP - JM",slug:"nepovezani-poslanec-jani-moderndorfer"},113:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-alzirijo"},114:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-moldavijo"},115:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-armenijo"},116:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-belorusijo"},117:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-cilom"},118:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-kazahstanom"},119:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-novo-zelandijo"},120:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-palestino"},121:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-senegalom"},122:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-s-tunizijo"},123:{acronym:"",realAcronym:"",slug:"skupina-prijateljstva-z-zdruzenimi-arabskimi-emirati"},124:{acronym:"desus",realAcronym:"DeSUS",slug:"demokratska-stranka-upokojencev-slovenije"},125:{acronym:"smc",realAcronym:"SMC",slug:"stranka-modernega-centra"},126:{acronym:"vlada",realAcronym:"Vlada",slug:"vlada"},127:{acronym:"mddsz",realAcronym:"MDDSZ",slug:"ministrstvo-za-delo-druzino-socialne-zadeve-in-enake-moznosti"},128:{acronym:"mf",realAcronym:"MF",slug:"ministrstvo-za-finance"},129:{acronym:"mgrt",realAcronym:"MGRT",slug:"ministrstvo-za-gospodarski-razvoj-in-tehnologijo"},130:{acronym:"mzip",realAcronym:"MZIP",slug:"ministrstvo-za-infrastrukturo"},131:{acronym:"mizs",realAcronym:"MIZS",slug:"ministrstvo-za-izobrazevanje-znanost-in-sport"},132:{acronym:"mju",realAcronym:"MJU",slug:"ministrstvo-za-javno-upravo"},133:{acronym:"mk",realAcronym:"MK",slug:"ministrstvo-za-kulturo"},134:{acronym:"mkgp",realAcronym:"MKGP",slug:"ministrstvo-za-kmetijstvo-gozdarstvo-in-prehrano"},135:{acronym:"mnz",realAcronym:"MNZ",slug:"ministrstvo-za-notranje-zadeve"},136:{acronym:"mo",realAcronym:"MO",slug:"ministrstvo-za-obrambo"},137:{acronym:"mop",realAcronym:"MOP",slug:"ministrstvo-za-okolje-in-prostor"},138:{acronym:"mp",realAcronym:"MP",slug:"ministrstvo-za-pravosodje"},139:{acronym:"mz",realAcronym:"MZ",slug:"ministrstvo-za-zdravje"},140:{acronym:"mzz",realAcronym:"MZZ",slug:"ministrstvo-za-zunanje-zadeve"},141:{acronym:"svrk",realAcronym:"SVRK",slug:"sluzba-vlade-za-razvoj-in-evropsko-kohezijsko-politiko"},142:{acronym:"uszs",realAcronym:"USZS",slug:"urad-vlade-za-slovence-v-zamejstvu-in-po-svetu"},143:{acronym:"opoz",realAcronym:"opoz",slug:"opozicija"},144:{acronym:"koal",realAcronym:"koal",slug:"koalicija"},145:{acronym:"nep-mh",realAcronym:"NeP - MH",slug:"nepovezani-poslanec-matjaz-hanzek"},146:{acronym:"",realAcronym:"",slug:"preiskovalna-komisija-o-ugotavljanju-domnevnega-pranja-denarja-in-financiranja-terorizma-jedrske-proliferacije-ter-financiranja-aktivnosti-tujih-obvescevalno-varnostnih-sluzb-v-tujini-v-novi-ljubljanski-banki-d-d"},147:{acronym:"nep-jv",realAcronym:"NeP - JV",slug:"nepovezani-poslanec-janko-veber"},148:{acronym:"nep-zl",realAcronym:"NeP - ZL",slug:"nepovezani-poslanec-zvonko-lah"}}}},function(a,e,r){"use strict";function n(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(e,"__esModule",{value:!0});var t=r(4),s=n(t),o=r(5),i=n(o),l=r(6),c=n(l),u=r(9),d=n(u);global.$={getJSON:function(a,e){(0,i.default)(a,function(a,r,n){if(a)throw a;e(JSON.parse(n))})},get:function(a,e){(0,i.default)(a,function(a,r,n){if(a)throw a;e(n)})}},s.default.component("SearchDropdown",c.default),e.default=function(a){a.state={data:a.data,cardData:a.cardData,parlaState:a.parlaState};var e=new s.default(Object.assign({},d.default,{cardData:a}));return new Promise(function(a){return a(e)})}},function(a,e){a.exports=require("vue")},function(a,e){a.exports=require("request")},function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(7),t=r(8),s=r(0),o=s(n.a,t.a,!1,null,null,"24a94597");e.default=o.exports},function(a,e,r){"use strict";e.a={name:"SearchDropdown",data:function(){return{filter:"",active:!1,focused:-1}},watch:{filter:function(){this.focus(this.focused)}},computed:{filteredItems:function(){var a=this,e=function(e){return e.filter(function(e){return e.selected||e.label.toLowerCase().indexOf(a.filter.toLowerCase())>-1}).map(function(a,e){return a.sortIndex=e,a}).sort(function(e,r){if(!a.single){if(a.alphabetise&&Boolean(e.selected)===Boolean(r.selected))return e.label.localeCompare(r.label,"sl");if(e.selected&&!r.selected)return-1;if(!e.selected&&r.selected)return 1}return e.sortIndex<r.sortIndex?-1:e.sortIndex>r.sortIndex?1:0}).map(function(a){return delete a.sortIndex,a})};return this.groups?this.groups.map(function(r){var n=e(a.items.filter(function(a){return r.items.indexOf(a.id)>-1}));return n.forEach(function(a,e){a.groupLabel=0===e?r.label:null}),n}).reduce(function(a,e){return a.concat(e)},[]):e(this.items)},selectedIds:function(){return this.filteredItems.filter(function(a){return a.selected}).map(function(a){return a.id})},adjustedPlaceholder:function(){if(!this.single)return this.placeholder;var a=this.filteredItems.filter(function(a){return a.selected})[0];return a?a.label:this.placeholder}},directives:{clickOutside:{bind:function(a,e){var r=function(r){a.contains(r.target)||a===r.target||e.value(r)};a.vueClickOutside=r,document.addEventListener("click",r)},unbind:function(a){document.removeEventListener("click",a.vueClickOutside),a.vueClickOutside=null}}},props:{alphabetise:{type:Boolean,default:!0},groups:Array,items:{type:Array,required:!0},placeholder:{type:String,required:!0},selectCallback:Function,single:{type:Boolean,default:!1},small:{type:Boolean,default:!1}},methods:{selectItem:function(a){this.single?(this.clearSelection(),this.toggleItem(a),this.toggleDropdown(!1)):this.toggleItem(a),this.selectCallback&&this.selectCallback(a)},toggleItem:function(a){var e=this.items.filter(function(e){return e.id===a})[0];this.$set(e,"selected",!e.selected)},toggleDropdown:function(a){!1===a&&(this.filter=""),this.active=a},clearSelection:function(){this.selectedIds.forEach(this.toggleItem)},focus:function(a,e){if(this.focused=Math.max(Math.min(this.filteredItems.length-1,a),-1),e){var r=this.filteredItems.slice(0,this.focused+1).map(function(a){return a.groupLabel?1:0}).reduce(function(a,e){return a+e},0),n=this.$el.lastChild,t=23*(this.focused+r);t<n.scrollTop?n.scrollTop=t:t>n.scrollTop+207&&(n.scrollTop=t-207)}}}}},function(a,e,r){"use strict";var n=function(){var a=this,e=a.$createElement;return(a._self._c||e)("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:function(){a.toggleDropdown(!1)},expression:"function() { toggleDropdown(false) }"}],class:["search-dropdown",{small:a.small}]},[a._ssrNode((a.selectedIds.length>0?'<div class="search-dropdown-clear">×</div>':"\x3c!----\x3e")+' <input type="text"'+a._ssrAttr("placeholder",a.adjustedPlaceholder)+a._ssrAttr("value",a.filter)+' class="search-dropdown-input"> <ul'+a._ssrClass(null,["search-dropdown-options",{visible:this.active}])+">"+a._ssrList(a.filteredItems,function(e,r){return(e.groupLabel?'<li class="search-dropdown-group-label">'+a._ssrEscape("\n        "+a._s(e.groupLabel)+"\n      ")+"</li>":"\x3c!----\x3e")+" <li"+a._ssrClass(null,{selected:e.selected,focused:a.focused===r})+'><div class="search-dropdown-label">'+a._ssrEscape(a._s(e.label))+"</div> "+(e.count?"<div>"+a._ssrEscape(a._s(e.count))+"</div>":"\x3c!----\x3e")+"</li>"})+"</ul>")])},t=[],s={render:n,staticRenderFns:t};e.a=s},function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(10),t=r.n(n),s=r(41),o=r(0),i=o(t.a,s.a,!1,null,null,"6df0520f");e.default=i.exports},function(a,e,r){"use strict";function n(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(e,"__esModule",{value:!0});var t=r(11),s=n(t),o=r(35),i=r(36),l=r(37),c=n(l);e.default={components:{PersonList:c.default,memberOverview:o.memberOverview,memberTitle:i.memberTitle},mixins:[s.default],name:"NajveckratGlasujejoEnako",data:function(){var a=this.$options.cardData.data.results.map(function(a){var e=a.person;return e.score=""+a.ratio.toFixed(2).replace(".",","),e}),e=this.$options.cardData.data.person;return{data:this.$options.cardData.data,people:a,headerConfig:{alternative:"true"===this.$options.cardData.cardData.altHeader,title:this.$options.cardData.cardData.name,heading:e.name,subheading:e.party.acronym+" | "+(e.party.is_coalition?"koalicija":"opozicija"),circleImage:e.gov_id}}},computed:{generatedCardUrl:function(){return""+this.url+this.data.person.id+"?altHeader=true"}}}},function(a,e,r){"use strict";function n(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(e,"__esModule",{value:!0});var t=r(12),s=n(t),o=r(33),i=n(o),l=r(2),c=n(l),u=r(34),d=n(u);e.default={data:function(){return{slugs:c.default,vocabulary:d.default}},components:{CardWrapper:s.default},mixins:[i.default],created:function(){this.$root.$options.cardData.template={pageTitle:this.$root.$options.cardData.cardData.name,frameContainerClass:this.$root.$options.cardData.cardData.big?"col-md-12":"col-md-6 col-md-offset-3",embedContainerClass:(this.$root.$options.cardData.cardData.big?" big-card":"")+(this.$root.$options.cardData.cardData.high?" high-card":""),contextUrl:this.slugs.base}}}},function(a,e,r){"use strict";function n(a){var e;e=r(13),e.__inject__&&e.__inject__(a)}Object.defineProperty(e,"__esModule",{value:!0});var t=r(14),s=r.n(t),o=r(32),i=r(0),l=n,c=i(s.a,o.a,!1,l,"data-v-367a1ca0","49832a29");e.default=c.exports},function(a,e){},function(a,e,r){"use strict";function n(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(e,"__esModule",{value:!0});var t=r(1),s=r(15),o=n(s),i=r(18),l=n(i),c=r(22),u=n(c),d=r(25),m=n(d),p=r(28),v=n(p);e.default={name:"CardWrapper",components:{CardInfo:o.default,CardEmbed:l.default,CardShare:u.default,CardHeader:m.default,CardFooter:v.default},data:function(){return{currentBack:null,transitionClass:null,previousHeight:null}},props:{contentClass:[String,Object],contentFrontClass:[String,Object],cardUrl:String,headerConfig:Object,contentHeight:{type:String,default:"auto"},contentFrontScroll:String},methods:{toggleBack:function(a){var e=this,r=this.$el.querySelector(".card-content");this.currentBack!==a?(this.transitionClass=["covered","clicked-"+a],window.setTimeout(function(){e.previousHeight=r.offsetHeight,r.style.height=r.offsetHeight+"px",e.currentBack=a},t.RIPPLE_DURATION/2),window.setTimeout(function(){e.transitionClass=null},t.RIPPLE_DURATION)):(this.transitionClass=["revealed","clicked-"+a],window.setTimeout(function(){e.currentBack=null,r.style.height=e.previousHeight},t.RIPPLE_DURATION/2),window.setTimeout(function(){e.transitionClass=null},t.RIPPLE_DURATION))}},watch:{currentBack:function(a){this.$emit("backChange",a)}}}},function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(16),t=r.n(n),s=r(17),o=r(0),i=o(t.a,s.a,!1,null,null,"515f1c88");e.default=i.exports},function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardInfo"}},function(a,e,r){"use strict";var n=function(){var a=this,e=a.$createElement;return(a._self._c||e)("div",{staticClass:"card-content-info"},[a._ssrNode('<div class="card-back-content">',"</div>",[a._t("default")],2)])},t=[],s={render:n,staticRenderFns:t};e.a=s},function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(19),t=r.n(n),s=r(21),o=r(0),i=o(t.a,s.a,!1,null,null,"3fc068ef");e.default=i.exports},function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(20);e.default={name:"CardEmbed",computed:{embedCode:function(){var a=this.url;return this.refresh||(a=""+this.url.split("?")[0]+(0,n.format)(new Date,"D. M. YYYY")+"?"+this.url.split("?")[1]),"&#x3C;script&#x3E;(function(d,script){script=d.createElement(&#x27;script&#x27;);script.type=&#x27;text/javascript&#x27;;script.async=true;script.onload=function(){iFrameResize({log:true,checkOrigin:false})};script.src=&#x27;https://cdn.parlameter.si/v1/parlassets/js/iframeResizer.min.js&#x27;;d.getElementsByTagName(&#x27;head&#x27;)[0].appendChild(script);}(document));&#x3C;/script&#x3E;&#x3C;iframe frameborder=&#x22;0&#x22; width=&#x22;100%&#x22; src=&#x22;"+a+"&#x26;embed=true&#x22;&#x3E;&#x3C;/iframe&#x3E;"}},props:{url:String},data:function(){return{refresh:!0,copied:!1}},methods:{toggleEmbedSwitch:function(){this.refresh=!this.refresh},copyEmbedCode:function(){this.$refs.embedInput.select();var a=!1;try{a=document.execCommand("copy")}catch(a){return a}this.$refs.embedInput.blur(),this.copied=a}}}},function(a,e){a.exports=require("date-fns")},function(a,e,r){"use strict";var n=function(){var a=this,e=a.$createElement;return(a._self._c||e)("div",{staticClass:"card-content-embed"},[a._ssrNode('<div class="card-back-content"><div class="embed-content"><div class="embed-divider"></div> <div class="embed-switch-container"><div class="embed-label">Podatki naj se vedno osvežujejo</div> <div class="embed-switch-big-box"><div'+a._ssrClass(null,["embed-switch-box",{off:!this.refresh}])+'><div class="embed-switch"><div class="embed-switches"><div class="leftswitch">DA</div> <div class="rightswitch">NE</div></div></div></div> <div class="embed-switch-ball"></div></div></div> <div class="embed-divider"></div> <div class="embed-script"><textarea data-id'+a._ssrAttr("data-url",a.url)+' class="form-control">'+a._s(a.embedCode)+'</textarea> <button class="btn-parlameter btn-full-width btn-blue btn-copy-embed">'+a._ssrEscape(a._s(a.copied?"SKOPIRANO!":"KOPIRAJ"))+"</button></div></div></div>")])},t=[],s={render:n,staticRenderFns:t};e.a=s},function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(23),t=r.n(n),s=r(24),o=r(0),i=o(t.a,s.a,!1,null,null,"356f76f5");e.default=i.exports},function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardShare",data:function(){return{shortenedUrl:"",copied:!1}},props:{url:String},methods:{shortenUrl:function(){var a=this;return new Promise(function(){$.get("https://parla.me/shortner/generate?url="+encodeURIComponent(a.url+"&frame=true"),function(e){a.shortenedUrl=e,a.copied=!1,a.$nextTick(function(){a.$refs.urlInput.select()})})})},copyLink:function(){this.$refs.urlInput.focus(),this.$refs.urlInput.setSelectionRange(0,this.$refs.urlInput.value.length);var a=!1;try{a=document.execCommand("copy")}catch(a){return a}this.copied=a}},watch:{url:function(){this.shortenUrl()}},mounted:function(){this.shortenUrl()}}},function(a,e,r){"use strict";var n=function(){var a=this,e=a.$createElement;return(a._self._c||e)("div",{staticClass:"card-content-share"},[a._ssrNode('<div class="card-back-content"><div class="share-content"><label for="share-url">Neposredna povezava do kartice</label> <input type="url" id="share-url"'+a._ssrAttr("value",a.shortenedUrl)+' class="form-control share-url"> <button class="btn-parlameter btn-full-width btn-blue">'+a._ssrEscape(a._s(a.copied?"SKOPIRANO!":"KOPIRAJ"))+"</button></div></div>")])},t=[],s={render:n,staticRenderFns:t};e.a=s},function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(26),t=r.n(n),s=r(27),o=r(0),i=o(t.a,s.a,!1,null,null,"5b908a67");e.default=i.exports},function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={share:"Deli",embed:"Vdelaj",info:"Info"};e.default={name:"CardHeader",props:{config:Object,currentBack:String},computed:{title:function(){return null===this.currentBack?this.config.title:n[this.currentBack]}}}},function(a,e,r){"use strict";var n=function(){var a=this,e=a.$createElement;return(a._self._c||e)("div",{staticClass:"card-header"},[a._ssrNode(a.config.alternative?'<div class="alt-header-container"><div class="alt-header">'+(a.config.circleText?"<div"+a._ssrClass("media-object img-circle session-logo",a.config.circleClass)+"><b>"+a._ssrEscape(a._s(a.config.circleText))+"</b></div>":a.config.circleImage?"<img"+a._ssrAttr("src","https://cdn.parlameter.si/v1/parlassets/img/people/square/"+a.config.circleImage+".png")+' class="portrait column">':a.config.circleIcon?'<div class="icon-circle"><img'+a._ssrAttr("src","https://cdn.parlameter.si/v1/parlassets/icons/"+a.config.circleIcon+".svg")+"></div>":"\x3c!----\x3e")+' <div class="header-info-container"><h1>'+a._s(a.config.heading)+'</h1> <h2 class="partyinfo">'+a._ssrEscape(a._s(a.config.subheading))+'</h2> <h2 class="cardname">'+a._ssrEscape(a._s(a.config.title))+'</h2></div></div> <div class="alt-header-border"></div></div>':'<div class="card-header-border"></div> <h1>'+a._ssrEscape(a._s(a.title))+"</h1>")])},t=[],s={render:n,staticRenderFns:t};e.a=s},function(a,e,r){"use strict";function n(a){var e;e=r(29),e.__inject__&&e.__inject__(a)}Object.defineProperty(e,"__esModule",{value:!0});var t=r(30),s=r.n(t),o=r(31),i=r(0),l=n,c=i(s.a,o.a,!1,l,"data-v-628031ca","3a5e2675");e.default=c.exports},function(a,e){},function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(2),t=function(a){return a&&a.__esModule?a:{default:a}}(n),s=r(1);e.default={name:"CardFooter",data:function(){return{clicksDisabled:!1,currentBack:null,slugs:t.default,buttons:["share","embed","info"]}},methods:{toggleBack:function(a){var e=this;this.clicksDisabled||(this.$emit("toggleBack",a),this.currentBack=this.currentBack===a?null:a,this.clicksDisabled=!0,window.setTimeout(function(){e.clicksDisabled=!1},s.RIPPLE_DURATION))}}}},function(a,e,r){"use strict";var n=function(){var a=this,e=a.$createElement;return(a._self._c||e)("div",{staticClass:"card-footer"},[a._ssrNode('<div class="card-logo hidden" data-v-628031ca><a'+a._ssrAttr("href",a.slugs.base)+' data-v-628031ca><img src="https://cdn.parlameter.si/v1/parlassets/img/logo-parlameter.svg" alt="parlameter logo" data-v-628031ca></a></div> '+a._ssrList(a.buttons,function(e){return"<div"+a._ssrClass(null,["card-circle-button-vue","card-"+e,{"card-exit":a.currentBack===e}])+" data-v-628031ca></div>"}))])},t=[],s={render:n,staticRenderFns:t};e.a=s},function(a,e,r){"use strict";var n=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{class:["card-container",a.transitionClass]},[r("card-header",{attrs:{config:a.headerConfig,"current-back":a.currentBack}}),a._ssrNode(" "),a._ssrNode("<div"+a._ssrClass(null,["card-content",a.contentClass])+a._ssrStyle(null,{height:a.contentHeight},null)+" data-v-367a1ca0>","</div>",["info"===a.currentBack?r("card-info",[a._t("info")],2):"embed"===a.currentBack?r("card-embed",{attrs:{url:a.cardUrl}}):"share"===a.currentBack?r("card-share",{attrs:{url:a.cardUrl}}):r("div",{staticClass:"card-content-front",class:a.contentFrontClass,style:{"overflow-y":a.contentFrontScroll}},[a._t("default")],2)],1),a._ssrNode(" "),r("card-footer",{on:{toggleBack:a.toggleBack}})],2)},t=[],s={render:n,staticRenderFns:t};e.a=s},function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{url:function(){var a=this.$root.$options.cardData.cardData;return"https://glej.parlameter.si/"+a.group+"/"+a.method+"/"}},methods:{encodeQueryData:function(a){return"?"+Object.keys(a).reduce(function(e,r){return e.push(r+"="+encodeURIComponent(a[r])),e},[]).join("&")}}}},function(a,e){a.exports={biti:{m:"bil",f:"bila"},poslanec:{m:"poslanec",f:"poslanka"},glasovati:{m:"glasoval",f:"glasovala"},on:{m:"ga",f:"jo"},prisoten:{m:"prisotnega",f:"prisotno"},poslanca:{m:"poslančevih",f:"poslankinih"},izgovoriti:{m:"izgovoril",f:"izgovorila"},poslanca2:{m:"poslančeve",f:"poslankine"},govoriti:{m:"govoril",f:"govorila"},poslanca3:{m:"poslančevi",f:"poslankini"},poslanec2:{m:"poslanca",f:"poslanko"},vzdrzati:{m:"vzdržal",f:"vzdržala"},prisoten2:{m:"prisoten",f:"prisotna"},poslanca4:{m:"Poslančeve",f:"Poslankine"},poslanec3:{m:"poslanca",f:"poslanke"},aktiven:{m:"aktiven",f:"aktivna"},poslanca5:{m:"poslančeva",f:"poslankina"},postaviti:{m:"postavil",f:"postavila"},moral:{m:"moral",f:"morala"},izbrani:{m:"izbrani",f:"izbrana"},izbrani1:{m:"izbranega",f:"izbrane"},morati:{m:"moral",f:"morala"},imeti:{m:"imel",f:"imela"}}},function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.partyOverview={created:function(){var a=this.$root.$options.cardData.data.party||this.$root.$options.cardData.data.organization;this.$root.$options.cardData.template.contextUrl=this.slugs.base+"/poslanska-skupina/"+this.slugs.party[a.id].slug+this.slugs.partyLink.pregled}},e.partyVotes={created:function(){var a=this.$root.$options.cardData.data.party||this.$root.$options.cardData.data.organization;this.$root.$options.cardData.template.contextUrl=this.slugs.base+"/poslanska-skupina/"+this.slugs.party[a.id].slug+this.slugs.partyLink.glasovanja}},e.partySpeeches={created:function(){var a=this.$root.$options.cardData.data.party||this.$root.$options.cardData.data.organization;this.$root.$options.cardData.template.contextUrl=this.slugs.base+"/poslanska-skupina/"+this.slugs.party[a.id].slug+this.slugs.partyLink.govori}},e.memberOverview={created:function(){this.$root.$options.cardData.template.contextUrl=this.slugs.base+"/poslanec/"+this.slugs.person[this.$root.$options.cardData.data.person.id].slug+this.slugs.personLink.pregled}},e.memberVotes={created:function(){this.$root.$options.cardData.template.contextUrl=this.slugs.base+"/poslanec/"+this.slugs.person[this.$root.$options.cardData.data.person.id].slug+this.slugs.personLink.glasovanja}},e.memberSpeeches={created:function(){this.$root.$options.cardData.template.contextUrl=this.slugs.base+"/poslanec/"+this.slugs.person[this.$root.$options.cardData.data.person.id].slug+this.slugs.personLink.govori}}},function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.memberTitle={created:function(){var a=this.$root.$options.cardData;a.template.pageTitle=a.cardData.name+" - "+a.data.person.name}},e.partyTitle={created:function(){var a=this.$root.$options.cardData,e=a.data.party||a.data.organization,r=e.is_coalition?"koalicija":"opozicija";a.template.pageTitle=a.cardData.name+" - "+e.acronym+" | "+r}}},function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(38),t=r.n(n),s=r(40),o=r(0),i=o(t.a,s.a,!1,null,null,"23d26f08");e.default=i.exports},function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(39);e.default={props:{people:{type:Array,required:!0},showPartyLink:Boolean},methods:{getPersonPartyLink:n.getPersonPartyLink,getPersonLink:n.getPersonLink,getPersonPortrait:n.getPersonPortrait}}},function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getSearchTermLink=e.getSessionSpeechLink=e.getMemberPartyLink=e.getMemberPortrait=e.getMemberLink=e.getPersonPartyLink=e.getPartyLink=e.getPersonPortrait=e.getPersonLink=void 0;var n=r(2),t=function(a){return a&&a.__esModule?a:{default:a}}(n),s=r(1),o=e.getPersonLink=function(a){return t.default.base+t.default.personLink.base+(void 0!==t.default.person[a.id]?t.default.person[a.id].slug:"")+t.default.personLink.pregled},i=e.getPersonPortrait=function(a){return""+s.PORTRAIT_ROOT_URL+a.gov_id+".png"},l=e.getPartyLink=function(a){return a.acronym.indexOf("NeP")>-1?"":t.default.base+t.default.partyLink.base+t.default.party[a.id].acronym+t.default.partyLink.pregled},c=e.getPersonPartyLink=function(a){return l(a.party)};e.getMemberLink=function(a){return o(a.person)},e.getMemberPortrait=function(a){return i(a.person)},e.getMemberPartyLink=function(a){return c(a.person)},e.getSessionSpeechLink=function(a){return t.default.base+t.default.sessionLink.transkript+a.session_id+"#"+a.speech_id},e.getSearchTermLink=function(a){return s.SEARCH_ROOT_URL+encodeURIComponent('"'+a+'"')}},function(a,e,r){"use strict";var n=function(){var a=this,e=a.$createElement;return(a._self._c||e)("ul",{staticClass:"person-list"},[a._ssrNode(a._ssrList(a.people,function(e){return'<li class="person"><a'+a._ssrAttr("href",a.getPersonLink(e))+' class="portrait column"><img'+a._ssrAttr("src",a.getPersonPortrait(e))+'></a> <div class="column name"><a'+a._ssrAttr("href",a.getPersonLink(e))+' class="funblue-light-hover">'+a._ssrEscape("\n        "+a._s(e.name)+"\n      ")+"</a> "+(a.showPartyLink?"<br> "+(a.getPersonPartyLink(e)?"<a"+a._ssrAttr("href",a.getPersonPartyLink(e))+' class="funblue-light-hover">'+a._ssrEscape("\n          "+a._s(e.party.acronym)+"\n        ")+"</a>":"<span>"+a._ssrEscape("\n          "+a._s(e.party.acronym)+"\n        ")+"</span>"):"\x3c!----\x3e")+"</div> "+(e.score?'<div class="column large-number">'+a._ssrEscape("\n      "+a._s(e.score)+"\n    ")+"</div>":"\x3c!----\x3e")+"</li>"}))])},t=[],s={render:n,staticRenderFns:t};e.a=s},function(a,e,r){"use strict";var n=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("card-wrapper",{attrs:{contentHeight:"518px",id:a.$options.cardData.cardData._id,"card-url":a.generatedCardUrl,"header-config":a.headerConfig}},[r("div",{attrs:{slot:"info"},slot:"info"},[r("p",{staticClass:"info-text lead"},[a._v("\n      Seznam 5 poslancev, ki največkrat glasujejo enako kot "+a._s(a.vocabulary.izbrani[a.data.person.gender])+" "+a._s(a.vocabulary.poslanec[a.data.person.gender])+". Poslanci so razvrščeni glede na vrednosti od najmanjše proti največji. Manjša kot je vrednost, večje je ujemanje glasovanj.\n    ")]),a._v(" "),r("p",{staticClass:"info-text heading"},[a._v("METODOLOGIJA")]),a._v(" "),r("p",{staticClass:"info-text"},[a._v("\n      Izračunamo "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Euclidean_distance"}},[a._v("evklidsko razdaljo")]),a._v(" med rezultati "+a._s(a.vocabulary.poslanca[a.data.person.gender])+" glasovanj in rezultati vseh ostalih (pri čemer vrednosti glasov pretvorimo v številčne vrednosti med -1 in 1).\n    ")]),a._v(" "),r("p",{staticClass:"info-text"},[a._v('\n      Ko izračunamo "razdaljo" med vsemi poslanci, jih razvrstimo glede na rezultat in prikažemo prvih pet.\n    ')]),a._v(" "),r("div",{staticClass:"info-text"},[a._v("\n      Številčne vrednosti glasov\n      "),r("ul",{staticClass:"info-text"},[r("li",[a._v("-1: proti")]),a._v(" "),r("li",[a._v("0: vzdržan/-a ali ni prisoten/-na")]),a._v(" "),r("li",[a._v("1: za")])])])]),a._v(" "),r("person-list",{attrs:{people:a.people,"show-party-link":!0}})],1)},t=[],s={render:n,staticRenderFns:t};e.a=s}]);