(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+VNo":function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"8+s/":function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}n("sc67"),n("AqHK"),n("pJf4"),n("pS08"),n("R48M");var o=n("q1tI"),i=r(o),a=r(n("Gytx"));function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,f=[];function T(){s=t(f.map((function(t){return t.props}))),l.canUseDOM?e(s):n&&(s=n(s))}var l=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=s;return s=void 0,f=[],t};var u=o.prototype;return u.shouldComponentUpdate=function(t){return!a(t,this.props)},u.componentWillMount=function(){f.push(this),T()},u.componentDidUpdate=function(){T()},u.componentWillUnmount=function(){var t=f.indexOf(this);f.splice(t,1),T()},u.render=function(){return i.createElement(r,this.props)},o}(o.Component);return u(l,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),u(l,"canUseDOM",c),l}}},C9fy:function(t,e,n){var r=Date.prototype,o=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("IYdN")(r,"toString",(function(){var t=i.call(this);return t==t?o.call(this):"Invalid Date"}))},"EU/P":function(t,e,n){var r=n("P8UN"),o=n("ap2Z"),i=n("96qb"),a=n("+VNo"),u="["+a+"]",c=RegExp("^"+u+u+"*"),s=RegExp(u+u+"*$"),f=function(t,e,n){var o={},u=i((function(){return!!a[t]()||"​"!="​"[t]()})),c=o[t]=u?e(T):a[t];n&&(o[n]=c),r(r.P+r.F*u,"String",o)},T=f.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(s,"")),t};t.exports=f},Gytx:function(t,e,n){n("n7j8"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(e),c=0;c<i.length;c++){var s=i[c];if(!u(s))return!1;var f=t[s],T=e[s];if(!1===(o=n?n.call(r,f,T,s):void 0)||void 0===o&&f!==T)return!1}return!0}},R48M:function(t,e,n){var r=n("P8UN");r(r.S+r.F*!n("QPJK"),"Object",{defineProperty:n("rjfK").f})},TJpk:function(t,e,n){n("MIFh"),n("wZFJ"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("JHok"),n("LagC"),n("pS08"),n("sc67"),n("R48M"),n("E5k/"),e.__esModule=!0,e.Helmet=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=T(n("q1tI")),a=T(n("17x9")),u=T(n("8+s/")),c=T(n("bmMU")),s=n("v1p5"),f=n("hFT/");function T(t){return t&&t.__esModule?t:{default:t}}function l(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var d,A,h,S=(0,u.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),y=(d=S,h=A=function(t){function e(){return p(this,e),E(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!(0,c.default)(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case f.TAG_NAMES.SCRIPT:case f.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case f.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,o=t.arrayTypeChildren,i=t.newChildProps,a=t.nestedChildren;return r({},o,((e={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,o=t.child,i=t.newProps,a=t.newChildProps,u=t.nestedChildren;switch(o.type){case f.TAG_NAMES.TITLE:return r({},i,((e={})[o.type]=u,e.titleAttributes=r({},a),e));case f.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case f.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=r({},e);return Object.keys(t).forEach((function(e){var o;n=r({},n,((o={})[e]=t[e],o))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return i.default.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=l(o,["children"]),u=(0,s.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(t,i),t.type){case f.TAG_NAMES.LINK:case f.TAG_NAMES.META:case f.TAG_NAMES.NOSCRIPT:case f.TAG_NAMES.SCRIPT:case f.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:u,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:u,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=l(t,["children"]),o=r({},n);return e&&(o=this.mapChildrenToProps(e,o)),i.default.createElement(d,o)},o(e,null,[{key:"canUseDOM",set:function(t){d.canUseDOM=t}}]),e}(i.default.Component),A.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},A.defaultProps={defer:!0,encodeSpecialCharacters:!0},A.peek=d.peek,A.rewind=function(){var t=d.rewind();return t||(t=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},h);y.renderStatic=y.rewind,e.Helmet=y,e.default=y},VgRq:function(t,e,n){},YBKJ:function(t,e,n){"use strict";var r=n("emib"),o=n("qDzq"),i=n("CCE/"),a=n("TUPI"),u=n("kxs/"),c=n("96qb"),s=n("chL8").f,f=n("Drra").f,T=n("rjfK").f,l=n("EU/P").trim,p=r.Number,E=p,d=p.prototype,A="Number"==i(n("nsRs")(d)),h="trim"in String.prototype,S=function(t){var e=u(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,i=(e=h?e.trim():l(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var a,c=e.slice(2),s=0,f=c.length;s<f;s++)if((a=c.charCodeAt(s))<48||a>o)return NaN;return parseInt(c,r)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(A?c((function(){d.valueOf.call(n)})):"Number"!=i(n))?a(new E(S(e)),n,p):S(e)};for(var y,m=n("QPJK")?s(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;m.length>_;_++)o(E,y=m[_])&&!o(p,y)&&T(p,y,f(E,y));p.prototype=d,d.constructor=p,n("IYdN")(r,"Number",p)}},bmMU:function(t,e,n){"use strict";n("pJf4"),n("Ll4R"),n("q8oJ"),n("C9fy"),n("klQ5"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("MIFh");var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){var u,c,s,f=r(e),T=r(n);if(f&&T){if((c=e.length)!=n.length)return!1;for(u=c;0!=u--;)if(!t(e[u],n[u]))return!1;return!0}if(f!=T)return!1;var l=e instanceof Date,p=n instanceof Date;if(l!=p)return!1;if(l&&p)return e.getTime()==n.getTime();var E=e instanceof RegExp,d=n instanceof RegExp;if(E!=d)return!1;if(E&&d)return e.toString()==n.toString();var A=o(e);if((c=A.length)!==o(n).length)return!1;for(u=c;0!=u--;)if(!i.call(n,A[u]))return!1;if(a&&e instanceof Element&&n instanceof Element)return e===n;for(u=c;0!=u--;)if(!("_owner"===(s=A[u])&&e.$$typeof||t(e[s],n[s])))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},gJjk:function(t,e,n){"use strict";var r=n("riK+"),o=n("q1tI"),i=n.n(o),a=n("TJpk");e.a=function(t){var e=r.data.site,n=t.description,o=void 0===n?e.siteMetadata.description:n,u=t.meta,c=void 0===u?[]:u,s=t.title,f=void 0===s?e.siteMetadata.title:s;return i.a.createElement(a.Helmet,{htmlAttributes:{lang:e.siteMetadata.locale},title:f,meta:[{name:"description",content:o},{property:"og:title",content:f},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:f},{name:"twitter:description",content:o}].concat(c)})}},"hFT/":function(t,e,n){n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK"),e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(e.VALID_TAG_NAMES=Object.keys(r).map((function(t){return r[t]})),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(o).reduce((function(t,e){return t[o[e]]=e,t}),{}),e.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},klQ5:function(t,e,n){var r=n("emib"),o=n("TUPI"),i=n("rjfK").f,a=n("chL8").f,u=n("mhTz"),c=n("lb9j"),s=r.RegExp,f=s,T=s.prototype,l=/a/g,p=/a/g,E=new s(l)!==l;if(n("QPJK")&&(!E||n("96qb")((function(){return p[n("sOol")("match")]=!1,s(l)!=l||s(p)==p||"/a/i"!=s(l,"i")})))){s=function(t,e){var n=this instanceof s,r=u(t),i=void 0===e;return!n&&r&&t.constructor===s&&i?t:o(E?new f(r&&!i?t.source:t,e):f((r=t instanceof s)?t.source:t,r&&i?c.call(t):e),n?this:T,s)};for(var d=function(t){t in s||i(s,t,{configurable:!0,get:function(){return f[t]},set:function(e){f[t]=e}})},A=a(f),h=0;A.length>h;)d(A[h++]);T.constructor=s,s.prototype=T,n("IYdN")(r,"RegExp",s)}n("to/b")("RegExp")},"riK+":function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"description":"Personal page of Matt Coker","locale":"en","title":"Matt Coker"}}}}')},v1p5:function(t,e,n){(function(t){n("wZFJ"),n("HQhv"),n("1dPr"),n("JHok"),n("MIFh"),n("sc67"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("OeI1"),n("AqHK"),n("U6Bt"),n("sC2a"),n("E5k/"),n("m210"),n("4DPX"),e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=c(n("q1tI")),a=c(n("MgzW")),u=n("hFT/");function c(t){return t&&t.__esModule?t:{default:t}}var s,f=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(t){var e=A(t,u.TAG_NAMES.TITLE),n=A(t,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,(function(){return e}));var r=A(t,u.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},l=function(t){return A(t,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return o({},t,e)}),{})},E=function(t,e){return e.filter((function(t){return void 0!==t[u.TAG_NAMES.BASE]})).map((function(t){return t[u.TAG_NAMES.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},d=function(t,e,n){var o={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&_("Helmet: "+t+' should be of type "Array". Instead found type "'+r(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var r={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===e.indexOf(s)||n===u.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||s===u.TAG_PROPERTIES.REL&&"stylesheet"===t[s].toLowerCase()||(n=s),-1===e.indexOf(c)||c!==u.TAG_PROPERTIES.INNER_HTML&&c!==u.TAG_PROPERTIES.CSS_TEXT&&c!==u.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!t[n])return!1;var f=t[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][f]&&(r[n][f]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(r),c=0;c<i.length;c++){var s=i[c],f=(0,a.default)({},o[s],r[s]);o[s]=f}return t}),[]).reverse()},A=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},h=(s=Date.now(),function(t){var e=Date.now();e-s>16?(s=e,t(e)):setTimeout((function(){h(t)}),0)}),S=function(t){return clearTimeout(t)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:t.requestAnimationFrame||h,m="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||S:t.cancelAnimationFrame||S,_=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},b=null,v=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,s=t.onChangeClientState,f=t.scriptTags,T=t.styleTags,l=t.title,p=t.titleAttributes;g(u.TAG_NAMES.BODY,r),g(u.TAG_NAMES.HTML,o),R(l,p);var E={baseTag:M(u.TAG_NAMES.BASE,n),linkTags:M(u.TAG_NAMES.LINK,i),metaTags:M(u.TAG_NAMES.META,a),noscriptTags:M(u.TAG_NAMES.NOSCRIPT,c),scriptTags:M(u.TAG_NAMES.SCRIPT,f),styleTags:M(u.TAG_NAMES.STYLE,T)},d={},A={};Object.keys(E).forEach((function(t){var e=E[t],n=e.newTags,r=e.oldTags;n.length&&(d[t]=n),r.length&&(A[t]=E[t].oldTags)})),e&&e(),s(t,d,A)},P=function(t){return Array.isArray(t)?t.join(""):t},R=function(t,e){void 0!==t&&document.title!==t&&(document.title=P(t)),g(u.TAG_NAMES.TITLE,e)},g=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),c=0;c<a.length;c++){var s=a[c],f=e[s]||"";n.getAttribute(s)!==f&&n.setAttribute(s,f),-1===o.indexOf(s)&&o.push(s);var T=i.indexOf(s);-1!==T&&i.splice(T,1)}for(var l=i.length-1;l>=0;l--)n.removeAttribute(i[l]);o.length===i.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,a.join(","))}},M=function(t,e){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},I=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},O=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[u.REACT_TAG_MAP[n]||n]=t[n],e}),e)},N=function(t,e,n){switch(t){case u.TAG_NAMES.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[u.HELMET_ATTRIBUTE]=!0,o=O(n,r),[i.default.createElement(u.TAG_NAMES.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=I(n),i=P(e);return o?"<"+t+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+f(i,r)+"</"+t+">":"<"+t+" "+u.HELMET_ATTRIBUTE+'="true">'+f(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return O(e)},toString:function(){return I(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach((function(t){var n=u.REACT_TAG_MAP[t]||t;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),i.default.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===u.TAG_PROPERTIES.INNER_HTML||t===u.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+f(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===u.SELF_CLOSING_TAGS.indexOf(t);return e+"<"+t+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}};e.convertReactPropstoHtmlAttributes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[u.HTML_TAG_MAP[n]||n]=t[n],e}),e)},e.handleClientStateChange=function(t){b&&m(b),t.defer?b=y((function(){v(t,(function(){b=null}))})):(v(t),b=null)},e.mapStateOnServer=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,s=t.scriptTags,f=t.styleTags,T=t.title,l=void 0===T?"":T,p=t.titleAttributes;return{base:N(u.TAG_NAMES.BASE,e,r),bodyAttributes:N(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:N(u.ATTRIBUTE_NAMES.HTML,o,r),link:N(u.TAG_NAMES.LINK,i,r),meta:N(u.TAG_NAMES.META,a,r),noscript:N(u.TAG_NAMES.NOSCRIPT,c,r),script:N(u.TAG_NAMES.SCRIPT,s,r),style:N(u.TAG_NAMES.STYLE,f,r),title:N(u.TAG_NAMES.TITLE,{title:l,titleAttributes:p},r)}},e.reducePropsToState=function(t){return{baseTag:E([u.TAG_PROPERTIES.HREF],t),bodyAttributes:p(u.ATTRIBUTE_NAMES.BODY,t),defer:A(t,u.HELMET_PROPS.DEFER),encode:A(t,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(u.ATTRIBUTE_NAMES.HTML,t),linkTags:d(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],t),metaTags:d(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:d(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:l(t),scriptTags:d(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],t),styleTags:d(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],t),title:T(t),titleAttributes:p(u.ATTRIBUTE_NAMES.TITLE,t)}},e.requestAnimationFrame=y,e.warn=_}).call(this,n("yLpj"))},wZFJ:function(t,e,n){"use strict";var r=n("P8UN"),o=n("Wadk")(3);r(r.P+r.F*!n("h/qr")([].some,!0),"Array",{some:function(t){return o(this,t,arguments[1])}})},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}t.exports=n}}]);
//# sourceMappingURL=commons-7e9f6ab54253fa936457.js.map