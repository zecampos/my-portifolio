(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"/0+H":function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=i(n("q1tI")),a=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,i=e.hybrid,r=void 0!==i&&i,a=e.hasQuery;return n||r&&(void 0!==a&&a)}t.isInAmpMode=o,t.useAmp=function(){return o(r.default.useContext(a.AmpStateContext))}},"7W2i":function(e,t,n){var i=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}},"8Kt/":function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=i(n("q1tI")),a=i(n("Xuae")),o=n("lwAK"),c=n("FYa8"),s=n("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var u=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,i={};return function(r){var a=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var o=r.key.slice(r.key.indexOf("$")+1);e.has(o)?a=!1:e.add(o)}switch(r.type){case"title":case"base":t.has(r.type)?a=!1:t.add(r.type);break;case"meta":for(var c=0,s=u.length;c<s;c++){var l=u[c];if(r.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var d=r.props[l],f=i[l]||new Set;f.has(d)?a=!1:(f.add(d),i[l]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var m=a.default();function p(e){var t=e.children;return r.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(m,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:s.isInAmpMode(e)},t)}))}))}p.rewind=m.rewind,t.default=p},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var r=i(n("q1tI"));t.HeadManagerContext=r.createContext(null)},IcFA:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return p}));var i=n("rePB"),r=n("vOnD");n("q1tI");function a(e){if(e)return"width: ".concat(e/12*100,"%")}var o=r.b.div.withConfig({displayName:"Grid__Row",componentId:"jjcy8g-0"})(['&::after{content:"";clear:both;display:table;}']),c=r.b.div.withConfig({displayName:"Grid__Column",componentId:"jjcy8g-1"})(["float:left;@media only screen and (min-width:40em) and (max-width:52em){","}@media only screen and (min-width:52em) and (max-width:64em){","}@media only screen and (min-width:64em){","}"],(function(e){var t=e.sm;return t&&a(t)}),(function(e){var t=e.md;return t&&a(t)}),(function(e){var t=e.lg;return t&&a(t)})),s={xs:"@media screen and (max-width: 40em)",sm:"@media screen and (min-width: 40em) and (max-width: 52em)",md:"@media screen and (min-width: 52em) and (max-width: 64em)",lg:"@media screen and (min-width: 64em)"},l=function(e){return function(t){return t[e]?Object(i.a)({},s[e],{display:"none"}):null}},d=l("xs"),u=l("sm"),f=l("md"),m=l("lg"),p=r.b.div.withConfig({displayName:"Grid__Hide",componentId:"jjcy8g-2"})([],d,u,f,m)},Ijbi:function(e,t,n){var i=n("WkPL");e.exports=function(e){if(Array.isArray(e))return i(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},"R/WZ":function(e,t,n){"use strict";var i=n("wx14"),r=n("RD7I"),a=n("cNwE");t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.a)(e,Object(i.a)({defaultTheme:a.a},t))}},RIqP:function(e,t,n){var i=n("Ijbi"),r=n("EbDI"),a=n("ZhPi"),o=n("Bnag");e.exports=function(e){return i(e)||r(e)||a(e)||o()}},SksO:function(e,t){function n(t,i){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,i)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}e.exports=function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}},Xuae:function(e,t,n){"use strict";var i=n("lwsE"),r=n("PJYZ"),a=n("W8MJ"),o=n("7W2i"),c=n("a1gu"),s=n("Nsbk"),l=n("RIqP");function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return c(this,n)}}Object.defineProperty(t,"__esModule",{value:!0});var u=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(c){o(l,c);var s=d(l);function l(e){var a;return i(this,l),a=s.call(this,e),f&&(t.add(r(a)),n(r(a))),a}return a(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(u.Component))}},ZhPi:function(e,t,n){var i=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}},a1gu:function(e,t,n){var i=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?r(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},gDgk:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),r=n.n(i),a=(n("8Kt/"),n("R/WZ")),o=n("1NhI"),c=n("wx14"),s=n("Ff2n"),l=n("rePB"),d=(n("17x9"),n("iuhU")),u=n("H2TA"),f=n("NqtD"),m=i.forwardRef((function(e,t){var n=e.classes,r=e.className,a=e.component,o=void 0===a?"div":a,l=e.disableGutters,u=void 0!==l&&l,m=e.fixed,p=void 0!==m&&m,x=e.maxWidth,g=void 0===x?"lg":x,h=Object(s.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return(i.createElement(o,Object(c.a)({className:Object(d.a)(n.root,r,p&&n.fixed,u&&n.disableGutters,!1!==g&&n["maxWidth".concat(Object(f.a)(String(g)))]),ref:t},h)))})),p=Object(u.a)((function(e){return{root:Object(l.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,n){var i=e.breakpoints.values[n];return 0!==i&&(t[e.breakpoints.up(n)]={maxWidth:i}),t}),{}),maxWidthXs:Object(l.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(l.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(l.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(l.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(l.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(m),x=n("tRbT"),g=n("kKAo"),h=i.forwardRef((function(e,t){var n=e.classes,r=e.className,a=e.raised,o=void 0!==a&&a,l=Object(s.a)(e,["classes","className","raised"]);return(i.createElement(g.a,Object(c.a)({className:Object(d.a)(n.root,r),elevation:o?8:1,ref:t},l)))})),v=Object(u.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(h),b=["video","audio","picture","iframe","img"],y=i.forwardRef((function(e,t){var n=e.children,r=e.classes,a=e.className,o=e.component,l=void 0===o?"div":o,u=e.image,f=e.src,m=e.style,p=Object(s.a)(e,["children","classes","className","component","image","src","style"]),x=-1!==b.indexOf(l),g=!x&&u?Object(c.a)({backgroundImage:'url("'.concat(u,'")')},m):m;return i.createElement(l,Object(c.a)({className:Object(d.a)(r.root,a,x&&r.media,-1!=="picture img".indexOf(l)&&r.img),ref:t,style:g,src:x?u||f:void 0},p),n)})),w=Object(u.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(y),j=n("vOnD"),_=(j.b.div.withConfig({displayName:"Home__Container",componentId:"sc-7d5u0o-0"})(["display:flex;width:100%;flex-direction:column;"]),j.b.div.withConfig({displayName:"Home__Content",componentId:"sc-7d5u0o-1"})(["max-width:950px;width:100%;align-self:center;"]),j.b.p.withConfig({displayName:"Home__TextMyDescription",componentId:"sc-7d5u0o-2"})(['font-size:1.2em;font-family:"Gilroy-Medium";text-align:center;width:100%;'])),O=n("2x5v"),C=(j.b.div.withConfig({displayName:"styles__Container",componentId:"sc-9etw09-0"})(["display:flex;flex-direction:row;margin-top:30px;flex-wrap:wrap;width:100%;"]),j.b.div.withConfig({displayName:"styles__Content",componentId:"sc-9etw09-1"})(["display:flex;flex-direction:column;width:100%;margin-top:10px;min-height:150px;justify-content:center;align-items:center;"])),k=j.b.h1.withConfig({displayName:"styles__TextName",componentId:"sc-9etw09-2"})(['font-size:48px;font-family:"Gilroy-Bold",serif;font-weight:normal;width:100%;padding:0px;margin:0px;']),S=j.b.div.withConfig({displayName:"styles__ContentMiddle",componentId:"sc-9etw09-3"})(["display:flex;flex-direction:column;width:100%;margin-top:10px;min-height:150px;justify-content:center;align-items:center;"]),I=j.b.p.withConfig({displayName:"styles__TextMyDescription",componentId:"sc-9etw09-4"})(["font-size:18px;"]),N=j.b.div.withConfig({displayName:"styles__ContentLast",componentId:"sc-9etw09-5"})(["display:flex;flex-direction:column;width:100%;margin-top:10px;min-height:150px;justify-content:flex-end;align-items:flex-end;"]),M=j.b.p.withConfig({displayName:"styles__TextVertical",componentId:"sc-9etw09-6"})(["font-size:16px;margin-right:-40px;transform-origin:0 0;transform:rotate(270deg);"]),W=j.b.img.withConfig({displayName:"styles__MyImage",componentId:"sc-9etw09-7"})(["display:block;margin-left:auto;margin-right:auto;width:100%;object-fit:cover;"]),P=(n("IcFA"),r.a.createElement);function E(){return P(x.a,{style:{paddingLeft:"10%",paddingRight:"10%"},container:!0},P(x.a,{item:!0,xs:12,sm:12,md:4,lg:4,xl:4},P(C,null,P(k,null,P(O.a,{type:"left",mode:"smooth",onEnd:function(e){}},"Jose"),P(O.a,{type:"left",mode:"smooth",onEnd:function(e){}},"Campos")))),P(x.a,{item:!0,xs:12,sm:12,md:4,lg:4,xl:4},P(S,null,P(I,null,"JavaScript Developer",P("br",null),"34 years old",P("br",null),"Ribeirao Preto - Brazil"))),P(x.a,{item:!0,xs:12,sm:12,md:4,lg:4,xl:4},P(N,null,P(M,null,"PT | ENG"))),P(x.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},P(W,{src:"/images/me.svg",alt:"Jose Campos"})))}var R=r.a.createElement,A=Object(a.a)({root:{maxWidth:345},media:{height:400}});t.default=function(){var e=A();return R(r.a.Fragment,null,R(o.a,{mdUp:!0},R(p,null,R(x.a,{justify:"center",alignItems:"center",alignContent:"center",container:!0},R(x.a,{style:{marginBottom:10},xs:12,sm:12,md:12,item:!0},R(_,null,"JavaScript Developer"),R(_,null,"34 years old, Ribeir\xe3o Preto - Brazil")),R(x.a,{xs:12,sm:12,md:12,item:!0},R(v,{square:!0},R(w,{className:e.media,image:"/images/me_mobile.jpeg"})))))),R(o.a,{smDown:!0},R(E,null)))}},kJbl:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("gDgk")}])},kKAo:function(e,t,n){"use strict";var i=n("Ff2n"),r=n("wx14"),a=n("q1tI"),o=(n("17x9"),n("iuhU")),c=n("H2TA"),s=a.forwardRef((function(e,t){var n=e.classes,c=e.className,s=e.component,l=void 0===s?"div":s,d=e.square,u=void 0!==d&&d,f=e.elevation,m=void 0===f?1:f,p=e.variant,x=void 0===p?"elevation":p,g=Object(i.a)(e,["classes","className","component","square","elevation","variant"]);return(a.createElement(l,Object(r.a)({className:Object(o.a)(n.root,c,"outlined"===x?n.outlined:n["elevation".concat(m)],!u&&n.rounded),ref:t},g)))}));t.a=Object(c.a)((function(e){var t={};return e.shadows.forEach((function(e,n){t["elevation".concat(n)]={boxShadow:e}})),Object(r.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(s)},lwAK:function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var r=i(n("q1tI"));t.AmpStateContext=r.createContext({})},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},tRbT:function(e,t,n){"use strict";var i=n("Ff2n"),r=n("wx14"),a=n("q1tI"),o=(n("17x9"),n("iuhU")),c=n("H2TA"),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var u=a.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,u=e.className,f=e.component,m=void 0===f?"div":f,p=e.container,x=void 0!==p&&p,g=e.direction,h=void 0===g?"row":g,v=e.item,b=void 0!==v&&v,y=e.justify,w=void 0===y?"flex-start":y,j=e.lg,_=void 0!==j&&j,O=e.md,C=void 0!==O&&O,k=e.sm,S=void 0!==k&&k,I=e.spacing,N=void 0===I?0:I,M=e.wrap,W=void 0===M?"wrap":M,P=e.xl,E=void 0!==P&&P,R=e.xs,A=void 0!==R&&R,D=e.zeroMinWidth,T=void 0!==D&&D,q=Object(i.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),z=Object(o.a)(d.root,u,x&&[d.container,0!==N&&d["spacing-xs-".concat(String(N))]],b&&d.item,T&&d.zeroMinWidth,"row"!==h&&d["direction-xs-".concat(String(h))],"wrap"!==W&&d["wrap-xs-".concat(String(W))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==w&&d["justify-xs-".concat(String(w))],!1!==A&&d["grid-xs-".concat(String(A))],!1!==S&&d["grid-sm-".concat(String(S))],!1!==C&&d["grid-md-".concat(String(C))],!1!==_&&d["grid-lg-".concat(String(_))],!1!==E&&d["grid-xl-".concat(String(E))]);return a.createElement(m,Object(r.a)({className:z,ref:t},q))})),f=Object(c.a)((function(e){return Object(r.a)(Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(i){var r=e.spacing(i);0!==r&&(n["spacing-".concat(t,"-").concat(i)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),n}(e,"xs")),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var i={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");i[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else i[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else i[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(r.a)(e,i):e[t.breakpoints.up(n)]=i}(t,e,n),t}),{}))}),{name:"MuiGrid"})(u);t.a=f}},[["kJbl",0,1,2,3,5]]]);