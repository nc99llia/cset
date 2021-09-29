/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-fontface-borderradius-boxshadow-flexbox-flexbox_legacy-hsla-multiplebgs-opacity-rgba-textshadow-generatedcontent-cssgradients-input-inputtypes-mq-cssclasses-addtest-teststyles-testprop-testallprops-prefixes-domprefixes
 */
;window.Modernizr=function(a,b,c){function B(a){j.cssText=a}function C(a,b){return B(n.join(a+";")+(b||""))}function D(a,b){return typeof a===b}function E(a,b){return!!~(""+a).indexOf(b)}function F(a,b){for(var d in a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function G(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:D(f,"function")?f.bind(d||b):f}return!1}function H(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+p.join(d+" ")+d).split(" ");return D(b,"string")||D(b,"undefined")?F(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),G(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)t[c[d]]=c[d]in k;return t.list&&(t.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(k),g.offsetWidth,e=k.value!=l,g.removeChild(k)):e=k.value!=l)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.5.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),k.appendChild(j);return f=["&#173;","<style>",a,"</style>"].join(""),k.id=h,(l?k:m).innerHTML+=f,m.appendChild(k),l||(m.style.background="",g.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},y=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return x("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},z={}.hasOwnProperty,A;!D(z,"undefined")&&!D(z.call,"undefined")?A=function(a,b){return z.call(a,b)}:A=function(a,b){return b in a&&D(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e});var I=function(a,c){var d=a.join(""),f=c.length;x(d,function(a,c){var d=b.styleSheets[b.styleSheets.length-1],g=d?d.cssRules&&d.cssRules[0]?d.cssRules[0].cssText:d.cssText||"":"",h=a.childNodes,i={};while(f--)i[h[f].id]=h[f];e.generatedcontent=(i.generatedcontent&&i.generatedcontent.offsetHeight)>=1,e.fontface=/src/i.test(g)&&g.indexOf(c.split(" ")[0])===0},f,c)}(['@font-face {font-family:"font";src:url("https://")}',['#generatedcontent:after{content:"',l,'";visibility:hidden}'].join("")],["fontface","generatedcontent"]);r.flexbox=function(){return H("flexOrder")},r["flexbox-legacy"]=function(){return H("boxDirection")},r.rgba=function(){return B("background-color:rgba(150,255,150,.5)"),E(j.backgroundColor,"rgba")},r.hsla=function(){return B("background-color:hsla(120,40%,100%,.5)"),E(j.backgroundColor,"rgba")||E(j.backgroundColor,"hsla")},r.multiplebgs=function(){return B("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},r.borderradius=function(){return H("borderRadius")},r.boxshadow=function(){return H("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){return C("opacity:.55"),/^0.55$/.test(j.opacity)},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return B((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),E(j.backgroundImage,"gradient")},r.fontface=function(){return e.fontface},r.generatedcontent=function(){return e.generatedcontent};for(var K in r)A(r,K)&&(w=K.toLowerCase(),e[w]=r[K](),u.push((e[w]?"":"no-")+w));return e.input||J(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)A(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,g.className+=" "+(b?"":"no-")+a,e[a]=b}return e},B(""),i=k=null,e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=y,e.testProp=function(a){return F([a])},e.testAllProps=H,e.testStyles=x,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document);
;Modernizr.addTest("quirks", function(){
       return (document.compatMode != "CSS1Compat");
});



function is_touch_device()
{
    return !!('ontouchstart' in window) // works on most browsers 
    //  || !!('onmsgesturechange' in window) // works on ie10, but not on desktop IE10
    ;
    // AT: this does not work in Opera mini
};

var alertFallback = true;
   if (typeof console === "undefined" || typeof console.log === "undefined") {
     console = {};
     if (alertFallback) {
         console.log = function(msg) {
             //alert(msg);
         };
     } else {
         console.log = function() {};
     }
   }
/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);
$.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());


var JSON;if(!JSON){JSON={};}
(function(){'use strict';function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());


//     Underscore.js 1.5.1
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
!function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,v=e.reduce,h=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,w=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.1";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(j.has(n,a)&&t.call(e,n[a],a,n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduce===v)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduceRight===h)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e};var F=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=F(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var k=function(n,t,r,e){var u={},i=F(null==t?j.identity:t);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};j.groupBy=function(n,t,r){return k(n,t,r,function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)})},j.countBy=function(n,t,r){return k(n,t,r,function(n,t){j.has(n,t)||(n[t]=0),n[t]++})},j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:F(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var R=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return R(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var M=function(){};j.bind=function(n,t){var r,e;if(w&&n.bind===w)return w.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));M.prototype=n.prototype;var u=new M;M.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u=null;return function(){var i=this,a=arguments,o=function(){u=null,r||(e=n.apply(i,a))},c=r&&!u;return clearTimeout(u),u=setTimeout(o,t),c&&(e=n.apply(i,a)),e}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){var t=[];for(var r in n)j.has(n,r)&&t.push(n[r]);return t},j.pairs=function(n){var t=[];for(var r in n)j.has(n,r)&&t.push([r,n[r]]);return t},j.invert=function(n){var t={};for(var r in n)j.has(n,r)&&(t[n[r]]=r);return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n"," ":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}.call(this);


// Backbone.js 0.9.2

// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function(){var l=this,y=l.Backbone,z=Array.prototype.slice,A=Array.prototype.splice,g;g="undefined"!==typeof exports?exports:l.Backbone={};g.VERSION="0.9.2";var f=l._;!f&&"undefined"!==typeof require&&(f=require("underscore"));var i=l.jQuery||l.Zepto||l.ender;g.setDomLibrary=function(a){i=a};g.noConflict=function(){l.Backbone=y;return this};g.emulateHTTP=!1;g.emulateJSON=!1;var p=/\s+/,k=g.Events={on:function(a,b,c){var d,e,f,g,j;if(!b)return this;a=a.split(p);for(d=this._callbacks||(this._callbacks=
{});e=a.shift();)f=(j=d[e])?j.tail:{},f.next=g={},f.context=c,f.callback=b,d[e]={tail:g,next:j?j.next:f};return this},off:function(a,b,c){var d,e,h,g,j,q;if(e=this._callbacks){if(!a&&!b&&!c)return delete this._callbacks,this;for(a=a?a.split(p):f.keys(e);d=a.shift();)if(h=e[d],delete e[d],h&&(b||c))for(g=h.tail;(h=h.next)!==g;)if(j=h.callback,q=h.context,b&&j!==b||c&&q!==c)this.on(d,j,q);return this}},trigger:function(a){var b,c,d,e,f,g;if(!(d=this._callbacks))return this;f=d.all;a=a.split(p);for(g=
z.call(arguments,1);b=a.shift();){if(c=d[b])for(e=c.tail;(c=c.next)!==e;)c.callback.apply(c.context||this,g);if(c=f){e=c.tail;for(b=[b].concat(g);(c=c.next)!==e;)c.callback.apply(c.context||this,b)}}return this}};k.bind=k.on;k.unbind=k.off;var o=g.Model=function(a,b){var c;a||(a={});b&&b.parse&&(a=this.parse(a));if(c=n(this,"defaults"))a=f.extend({},c,a);b&&b.collection&&(this.collection=b.collection);this.attributes={};this._escapedAttributes={};this.cid=f.uniqueId("c");this.changed={};this._silent=
{};this._pending={};this.set(a,{silent:!0});this.changed={};this._silent={};this._pending={};this._previousAttributes=f.clone(this.attributes);this.initialize.apply(this,arguments)};f.extend(o.prototype,k,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(){return f.clone(this.attributes)},get:function(a){return this.attributes[a]},escape:function(a){var b;if(b=this._escapedAttributes[a])return b;b=this.get(a);return this._escapedAttributes[a]=f.escape(null==
b?"":""+b)},has:function(a){return null!=this.get(a)},set:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c||(c={});if(!d)return this;d instanceof o&&(d=d.attributes);if(c.unset)for(e in d)d[e]=void 0;if(!this._validate(d,c))return!1;this.idAttribute in d&&(this.id=d[this.idAttribute]);var b=c.changes={},h=this.attributes,g=this._escapedAttributes,j=this._previousAttributes||{};for(e in d){a=d[e];if(!f.isEqual(h[e],a)||c.unset&&f.has(h,e))delete g[e],(c.silent?this._silent:
b)[e]=!0;c.unset?delete h[e]:h[e]=a;!f.isEqual(j[e],a)||f.has(h,e)!=f.has(j,e)?(this.changed[e]=a,c.silent||(this._pending[e]=!0)):(delete this.changed[e],delete this._pending[e])}c.silent||this.change(c);return this},unset:function(a,b){(b||(b={})).unset=!0;return this.set(a,null,b)},clear:function(a){(a||(a={})).unset=!0;return this.set(f.clone(this.attributes),a)},fetch:function(a){var a=a?f.clone(a):{},b=this,c=a.success;a.success=function(d,e,f){if(!b.set(b.parse(d,f),a))return!1;c&&c(b,d)};
a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},save:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c=c?f.clone(c):{};if(c.wait){if(!this._validate(d,c))return!1;e=f.clone(this.attributes)}a=f.extend({},c,{silent:!0});if(d&&!this.set(d,c.wait?a:c))return!1;var h=this,i=c.success;c.success=function(a,b,e){b=h.parse(a,e);if(c.wait){delete c.wait;b=f.extend(d||{},b)}if(!h.set(b,c))return false;i?i(h,a):h.trigger("sync",h,a,c)};c.error=g.wrapError(c.error,
h,c);b=this.isNew()?"create":"update";b=(this.sync||g.sync).call(this,b,this,c);c.wait&&this.set(e,a);return b},destroy:function(a){var a=a?f.clone(a):{},b=this,c=a.success,d=function(){b.trigger("destroy",b,b.collection,a)};if(this.isNew())return d(),!1;a.success=function(e){a.wait&&d();c?c(b,e):b.trigger("sync",b,e,a)};a.error=g.wrapError(a.error,b,a);var e=(this.sync||g.sync).call(this,"delete",this,a);a.wait||d();return e},url:function(){var a=n(this,"urlRoot")||n(this.collection,"url")||t();
return this.isNew()?a:a+("/"==a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(a){a||(a={});var b=this._changing;this._changing=!0;for(var c in this._silent)this._pending[c]=!0;var d=f.extend({},a.changes,this._silent);this._silent={};for(c in d)this.trigger("change:"+c,this,this.get(c),a);if(b)return this;for(;!f.isEmpty(this._pending);){this._pending=
{};this.trigger("change",this,a);for(c in this.changed)!this._pending[c]&&!this._silent[c]&&delete this.changed[c];this._previousAttributes=f.clone(this.attributes)}this._changing=!1;return this},hasChanged:function(a){return!arguments.length?!f.isEmpty(this.changed):f.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?f.clone(this.changed):!1;var b,c=!1,d=this._previousAttributes,e;for(e in a)if(!f.isEqual(d[e],b=a[e]))(c||(c={}))[e]=b;return c},previous:function(a){return!arguments.length||
!this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return f.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(a,b){if(b.silent||!this.validate)return!0;var a=f.extend({},this.attributes,a),c=this.validate(a,b);if(!c)return!0;b&&b.error?b.error(this,c,b):this.trigger("error",this,c,b);return!1}});var r=g.Collection=function(a,b){b||(b={});b.model&&(this.model=b.model);b.comparator&&(this.comparator=b.comparator);
this._reset();this.initialize.apply(this,arguments);a&&this.reset(a,{silent:!0,parse:b.parse})};f.extend(r.prototype,k,{model:o,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},add:function(a,b){var c,d,e,g,i,j={},k={},l=[];b||(b={});a=f.isArray(a)?a.slice():[a];c=0;for(d=a.length;c<d;c++){if(!(e=a[c]=this._prepareModel(a[c],b)))throw Error("Can't add an invalid model to a collection");g=e.cid;i=e.id;j[g]||this._byCid[g]||null!=i&&(k[i]||this._byId[i])?
l.push(c):j[g]=k[i]=e}for(c=l.length;c--;)a.splice(l[c],1);c=0;for(d=a.length;c<d;c++)(e=a[c]).on("all",this._onModelEvent,this),this._byCid[e.cid]=e,null!=e.id&&(this._byId[e.id]=e);this.length+=d;A.apply(this.models,[null!=b.at?b.at:this.models.length,0].concat(a));this.comparator&&this.sort({silent:!0});if(b.silent)return this;c=0;for(d=this.models.length;c<d;c++)if(j[(e=this.models[c]).cid])b.index=c,e.trigger("add",e,this,b);return this},remove:function(a,b){var c,d,e,g;b||(b={});a=f.isArray(a)?
a.slice():[a];c=0;for(d=a.length;c<d;c++)if(g=this.getByCid(a[c])||this.get(a[c]))delete this._byId[g.id],delete this._byCid[g.cid],e=this.indexOf(g),this.models.splice(e,1),this.length--,b.silent||(b.index=e,g.trigger("remove",g,this,b)),this._removeReference(g);return this},push:function(a,b){a=this._prepareModel(a,b);this.add(a,b);return a},pop:function(a){var b=this.at(this.length-1);this.remove(b,a);return b},unshift:function(a,b){a=this._prepareModel(a,b);this.add(a,f.extend({at:0},b));return a},
shift:function(a){var b=this.at(0);this.remove(b,a);return b},get:function(a){return null==a?void 0:this._byId[null!=a.id?a.id:a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},where:function(a){return f.isEmpty(a)?[]:this.filter(function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},sort:function(a){a||(a={});if(!this.comparator)throw Error("Cannot sort a set without a comparator");var b=f.bind(this.comparator,this);1==this.comparator.length?
this.models=this.sortBy(b):this.models.sort(b);a.silent||this.trigger("reset",this,a);return this},pluck:function(a){return f.map(this.models,function(b){return b.get(a)})},reset:function(a,b){a||(a=[]);b||(b={});for(var c=0,d=this.models.length;c<d;c++)this._removeReference(this.models[c]);this._reset();this.add(a,f.extend({silent:!0},b));b.silent||this.trigger("reset",this,b);return this},fetch:function(a){a=a?f.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=this,c=a.success;a.success=function(d,
e,f){b[a.add?"add":"reset"](b.parse(d,f),a);c&&c(b,d)};a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},create:function(a,b){var c=this,b=b?f.clone(b):{},a=this._prepareModel(a,b);if(!a)return!1;b.wait||c.add(a,b);var d=b.success;b.success=function(e,f){b.wait&&c.add(e,b);d?d(e,f):e.trigger("sync",a,f,b)};a.save(null,b);return a},parse:function(a){return a},chain:function(){return f(this.models).chain()},_reset:function(){this.length=0;this.models=[];this._byId=
{};this._byCid={}},_prepareModel:function(a,b){b||(b={});a instanceof o?a.collection||(a.collection=this):(b.collection=this,a=new this.model(a,b),a._validate(a.attributes,b)||(a=!1));return a},_removeReference:function(a){this==a.collection&&delete a.collection;a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"==a||"remove"==a)&&c!=this||("destroy"==a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],this._byId[b.id]=b),this.trigger.apply(this,
arguments))}});f.each("forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(","),function(a){r.prototype[a]=function(){return f[a].apply(f,[this.models].concat(f.toArray(arguments)))}});var u=g.Router=function(a){a||(a={});a.routes&&(this.routes=a.routes);this._bindRoutes();this.initialize.apply(this,arguments)},B=/:\w+/g,
C=/\*\w+/g,D=/[-[\]{}()+?.,\\^$|#\s]/g;f.extend(u.prototype,k,{initialize:function(){},route:function(a,b,c){g.history||(g.history=new m);f.isRegExp(a)||(a=this._routeToRegExp(a));c||(c=this[b]);g.history.route(a,f.bind(function(d){d=this._extractParameters(a,d);c&&c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d));g.history.trigger("route",this,b,d)},this));return this},navigate:function(a,b){g.history.navigate(a,b)},_bindRoutes:function(){if(this.routes){var a=[],b;for(b in this.routes)a.unshift([b,
this.routes[b]]);b=0;for(var c=a.length;b<c;b++)this.route(a[b][0],a[b][1],this[a[b][1]])}},_routeToRegExp:function(a){a=a.replace(D,"\\$&").replace(B,"([^/]+)").replace(C,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});var m=g.History=function(){this.handlers=[];f.bindAll(this,"checkUrl")},s=/^[#\/]/,E=/msie [\w.]+/;m.started=!1;f.extend(m.prototype,k,{interval:50,getHash:function(a){return(a=(a?a.location:window.location).href.match(/#(.*)$/))?a[1]:
""},getFragment:function(a,b){if(null==a)if(this._hasPushState||b){var a=window.location.pathname,c=window.location.search;c&&(a+=c)}else a=this.getHash();a.indexOf(this.options.root)||(a=a.substr(this.options.root.length));return a.replace(s,"")},start:function(a){if(m.started)throw Error("Backbone.history has already been started");m.started=!0;this.options=f.extend({},{root:"/"},this.options,a);this._wantsHashChange=!1!==this.options.hashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=
!(!this.options.pushState||!window.history||!window.history.pushState);var a=this.getFragment(),b=document.documentMode;if(b=E.exec(navigator.userAgent.toLowerCase())&&(!b||7>=b))this.iframe=i('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a);this._hasPushState?i(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!b?i(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,
this.interval));this.fragment=a;a=window.location;b=a.pathname==this.options.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!b)return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&b&&a.hash&&(this.fragment=this.getHash().replace(s,""),window.history.replaceState({},document.title,a.protocol+"//"+a.host+this.options.root+this.fragment));if(!this.options.silent)return this.loadUrl()},
stop:function(){i(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);m.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a==this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe)));if(a==this.fragment)return!1;this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(a){var b=this.fragment=this.getFragment(a);return f.any(this.handlers,
function(a){if(a.route.test(b))return a.callback(b),!0})},navigate:function(a,b){if(!m.started)return!1;if(!b||!0===b)b={trigger:b};var c=(a||"").replace(s,"");this.fragment!=c&&(this._hasPushState?(0!=c.indexOf(this.options.root)&&(c=this.options.root+c),this.fragment=c,window.history[b.replace?"replaceState":"pushState"]({},document.title,c)):this._wantsHashChange?(this.fragment=c,this._updateHash(window.location,c,b.replace),this.iframe&&c!=this.getFragment(this.getHash(this.iframe))&&(b.replace||
this.iframe.document.open().close(),this._updateHash(this.iframe.location,c,b.replace))):window.location.assign(this.options.root+a),b.trigger&&this.loadUrl(a))},_updateHash:function(a,b,c){c?a.replace(a.toString().replace(/(javascript:|#).*$/,"")+"#"+b):a.hash=b}});var v=g.View=function(a){this.cid=f.uniqueId("view");this._configure(a||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()},F=/^(\S+)\s*(.*)$/,w="model,collection,el,id,attributes,className,tagName".split(",");
f.extend(v.prototype,k,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();return this},make:function(a,b,c){a=document.createElement(a);b&&i(a).attr(b);c&&i(a).html(c);return a},setElement:function(a,b){this.$el&&this.undelegateEvents();this.$el=a instanceof i?a:i(a);this.el=this.$el[0];!1!==b&&this.delegateEvents();return this},delegateEvents:function(a){if(a||(a=n(this,"events"))){this.undelegateEvents();
for(var b in a){var c=a[b];f.isFunction(c)||(c=this[a[b]]);if(!c)throw Error('Method "'+a[b]+'" does not exist');var d=b.match(F),e=d[1],d=d[2],c=f.bind(c,this),e=e+(".delegateEvents"+this.cid);""===d?this.$el.bind(e,c):this.$el.delegate(d,e,c)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=f.extend({},this.options,a));for(var b=0,c=w.length;b<c;b++){var d=w[b];a[d]&&(this[d]=a[d])}this.options=a},_ensureElement:function(){if(this.el)this.setElement(this.el,
!1);else{var a=n(this,"attributes")||{};this.id&&(a.id=this.id);this.className&&(a["class"]=this.className);this.setElement(this.make(this.tagName,a),!1)}}});o.extend=r.extend=u.extend=v.extend=function(a,b){var c=G(this,a,b);c.extend=this.extend;return c};var H={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};g.sync=function(a,b,c){var d=H[a];c||(c={});var e={type:d,dataType:"json"};c.url||(e.url=n(b,"url")||t());if(!c.data&&b&&("create"==a||"update"==a))e.contentType="application/json",
e.data=JSON.stringify(b.toJSON());g.emulateJSON&&(e.contentType="application/x-www-form-urlencoded",e.data=e.data?{model:e.data}:{});if(g.emulateHTTP&&("PUT"===d||"DELETE"===d))g.emulateJSON&&(e.data._method=d),e.type="POST",e.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",d)};"GET"!==e.type&&!g.emulateJSON&&(e.processData=!1);return i.ajax(f.extend(e,c))};g.wrapError=function(a,b,c){return function(d,e){e=d===b?e:d;a?a(b,e,c):b.trigger("error",b,e,c)}};var x=function(){},G=function(a,
b,c){var d;d=b&&b.hasOwnProperty("constructor")?b.constructor:function(){a.apply(this,arguments)};f.extend(d,a);x.prototype=a.prototype;d.prototype=new x;b&&f.extend(d.prototype,b);c&&f.extend(d,c);d.prototype.constructor=d;d.__super__=a.prototype;return d},n=function(a,b){return!a||!a[b]?null:f.isFunction(a[b])?a[b]():a[b]},t=function(){throw Error('A "url" property or function must be specified');}}).call(this);


/*!
 * OverlayScrollbars
 * https://github.com/KingSora/OverlayScrollbars
 *
 * Version: 1.10.2
 *
 * Copyright KingSora | Rene Haas.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 * Date: 30.12.2019
 */
!function(t,r){"function"==typeof define&&define.amd?define(["jquery"],function(n){return r(t,t.document,undefined,n)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=r(t,t.document,undefined,require("jquery")):r(t,t.document,undefined,t.jQuery)}("undefined"!=typeof window?window:this,function(pt,bt,xi,n){"use strict";var o,f,c,a,gt="object",mt="function",yt="array",wt="string",xt="boolean",_t="number",t="null",St="class",_i="style",zt="id",Si="length",Tt="prototype",zi="offsetHeight",Ti="clientHeight",ki="scrollHeight",Oi="offsetWidth",Ci="clientWidth",Ai="scrollWidth",kt="hasOwnProperty",Hi="getBoundingClientRect",Ot=(o={},f={},{e:c=["-webkit-","-moz-","-o-","-ms-"],o:a=["WebKit","Moz","O","MS"],u:function(n){var t=f[n];if(f[kt](n))return t;for(var r,e,i,o=l(n),a=bt.createElement("div")[_i],u=0;u<c.length;u++)for(i=c[u].replace(/-/g,""),r=[n,c[u]+n,i+o,l(i)+o],e=0;e<r[Si];e++)if(a[r[e]]!==xi){t=r[e];break}return f[n]=t},s:function(n,t,r){var e=0,i=o[n];if(!o[kt](n)){for(i=pt[n];e<a[Si];e++)i=i||pt[(t?a[e]:a[e].toLowerCase())+l(n)];o[n]=i}return i||r}});function l(n){return n.charAt(0).toUpperCase()+n.slice(1)}var Ni={wW:e(r,0,!0),wH:e(r,0),mO:e(Ot.s,0,"MutationObserver",!0),rO:e(Ot.s,0,"ResizeObserver",!0),rAF:e(Ot.s,0,"requestAnimationFrame",!1,function(n){return pt.setTimeout(n,1e3/60)}),cAF:e(Ot.s,0,"cancelAnimationFrame",!1,function(n){return pt.clearTimeout(n)}),now:function(){return Date.now&&Date.now()||(new Date).getTime()},stpP:function(n){n.stopPropagation?n.stopPropagation():n.cancelBubble=!0},prvD:function(n){n.preventDefault&&n.cancelable?n.preventDefault():n.returnValue=!1},page:function(n){var t="page",r="client",e="X",i=((n=n.originalEvent||n).target||n.srcElement||bt).ownerDocument||bt,o=i.documentElement,a=i.body;if(n.touches===xi)return!n[t+e]&&n[r+e]&&null!=n[r+e]?{x:n[r+e]+(o&&o.scrollLeft||a&&a.scrollLeft||0)-(o&&o.clientLeft||a&&a.clientLeft||0),y:n[r+"Y"]+(o&&o.scrollTop||a&&a.scrollTop||0)-(o&&o.clientTop||a&&a.clientTop||0)}:{x:n[t+e],y:n.pageY};var u=n.touches[0];return{x:u[t+e],y:u.pageY}},mBtn:function(n){var t=n.button;return n.which||t===xi?n.which:1&t?1:2&t?3:4&t?2:0},inA:function(n,t){for(var r=0;r<t[Si];r++)try{if(t[r]===n)return r}catch(e){}return-1},isA:function(n){var t=Array.isArray;return t?t(n):this.type(n)==yt},type:function(n){return n===xi?n+"":null===n?n+"":Object[Tt].toString.call(n).replace(/^\[object (.+)\]$/,"$1").toLowerCase()},bind:e};function r(n){return n?pt.innerWidth||bt.documentElement[Ci]||bt.body[Ci]:pt.innerHeight||bt.documentElement[Ti]||bt.body[Ti]}function e(n,t){if(typeof n!=mt)throw"Can't bind function!";function r(){}function e(){return n.apply(this instanceof r?this:t,o.concat(Array[i].slice.call(arguments)))}var i=Tt,o=Array[i].slice.call(arguments,2);return n[i]&&(r[i]=n[i]),e[i]=new r,e}var i,u,Ct,s,v,L,R,d,h,p,b,g,m,Li,Ri=Math,Di=n,Ii=(n.easing,n),Mi=(i=[],u="__overlayScrollbars__",function(n,t){var r=arguments[Si];if(r<1)return i;if(t)n[u]=t,i.push(n);else{var e=Ni.inA(n,i);if(-1<e){if(!(1<r))return i[e][u];delete n[u],i.splice(e,1)}}}),y=(m=[],L=Ni.type,g={className:["os-theme-dark",[t,wt]],resize:["none","n:none b:both h:horizontal v:vertical"],sizeAutoCapable:d=[!0,xt],clipAlways:d,normalizeRTL:d,paddingAbsolute:h=[!(R=[xt,_t,wt,yt,gt,mt,t]),xt],autoUpdate:[null,[t,xt]],autoUpdateInterval:[33,_t],nativeScrollbarsOverlaid:{showNativeScrollbars:h,initialize:d},overflowBehavior:{x:["scroll",b="v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden"],y:["scroll",b]},scrollbars:{visibility:["auto","v:visible h:hidden a:auto"],autoHide:["never","n:never s:scroll l:leave m:move"],autoHideDelay:[800,_t],dragScrolling:d,clickScrolling:h,touchSupport:d,snapHandle:h},textarea:{dynWidth:h,dynHeight:h,inheritedAttrs:[["style","class"],[wt,yt,t]]},callbacks:{onInitialized:p=[null,[t,mt]],onInitializationWithdrawn:p,onDestroyed:p,onScrollStart:p,onScroll:p,onScrollStop:p,onOverflowChanged:p,onOverflowAmountChanged:p,onDirectionChanged:p,onContentSizeChanged:p,onHostSizeChanged:p,onUpdated:p}},Li={v:w(),d:w(!0),p:function(n,t,C,r){var e={},i={},o=Ii.extend(!0,{},n),A=Ii.inArray,H=Ii.isEmptyObject,N=function(n,t,r,e,i,o){for(var a in t)if(t[kt](a)&&n[kt](a)){var u,f,c,l,s,v,d,h,p=!1,b=!1,g=t[a],m=L(g),y=m==gt,w=L(g)!=yt?[g]:g,x=r[a],_=n[a],S=L(_),z=o?o+".":"",T='The option "'+z+a+"\" wasn't set, because",k=[],O=[];if(x=x===xi?{}:x,y&&S==gt)e[a]={},i[a]={},N(_,g,x,e[a],i[a],z+a),Ii.each([n,e,i],function(n,t){H(t[a])&&delete t[a]});else if(!y){for(v=0;v<w[Si];v++)if(s=w[v],c=(m=L(s))==wt&&-1===A(s,R))for(k.push(wt),u=s.split(" "),O=O.concat(u),d=0;d<u[Si];d++){for(l=(f=u[d].split(":"))[0],h=0;h<f[Si];h++)if(_===f[h]){p=!0;break}if(p)break}else if(k.push(s),S===s){p=!0;break}p?((b=_!==x)&&(e[a]=_),(c?A(x,f)<0:b)&&(i[a]=c?l:_)):C&&console.warn(T+" it doesn't accept the type [ "+S.toUpperCase()+' ] with the value of "'+_+'".\r\nAccepted types are: [ '+k.join(", ").toUpperCase()+" ]."+(0<O[length]?"\r\nValid strings are: [ "+O.join(", ").split(":").join(", ")+" ].":"")),delete n[a]}}};return N(o,t,r||{},e,i),!H(o)&&C&&console.warn("The following options are discarded due to invalidity:\r\n"+pt.JSON.stringify(o,null,2)),{g:e,m:i}}},(Ct=pt.OverlayScrollbars=function(n,r,e){if(0===arguments[Si])return this;var i,t,o=[],a=Ii.isPlainObject(r);return n?(n=n[Si]!=xi?n:[n[0]||n],x(),0<n[Si]&&(a?Ii.each(n,function(n,t){(i=t)!==xi&&o.push(z(i,r,e,s,v))}):Ii.each(n,function(n,t){i=Mi(t),"!"===r&&Ct.valid(i)||Ni.type(r)==mt&&r(t,i)?o.push(i):r===xi&&o.push(i)}),t=1===o[Si]?o[0]:o),t):a||!r?t:o}).globals=function(){x();var n=Ii.extend(!0,{},s);return delete n.msie,n},Ct.defaultOptions=function(n){x();var t=s.defaultOptions;if(n===xi)return Ii.extend(!0,{},t);s.defaultOptions=Ii.extend(!0,{},t,Li.p(n,Li.d,!0,t).g)},Ct.valid=function(n){return n instanceof Ct&&!n.getState().destroyed},Ct.extension=function(n,t,r){var e=Ni.type(n)==wt,i=arguments[Si],o=0;if(i<1||!e)return Ii.extend(!0,{length:m[Si]},m);if(e)if(Ni.type(t)==mt)m.push({name:n,extensionFactory:t,defaultOptions:r});else for(;o<m[Si];o++)if(m[o].name===n){if(!(1<i))return Ii.extend(!0,{},m[o]);m.splice(o,1)}},Ct);function w(i){var o=function(n){var t,r,e;for(t in n)n[kt](t)&&(r=n[t],(e=L(r))==yt?n[t]=r[i?1:0]:e==gt&&(n[t]=o(r)));return n};return o(Ii.extend(!0,{},g))}function x(){s=s||new _(Li.v),v=v||new S(s)}function _(n){var _=this,i="overflow",S=Ii("body"),z=Ii('<div id="os-dummy-scrollbar-size"><div></div></div>'),o=z[0],e=Ii(z.children("div").eq(0));S.append(z),z.hide().show();var t,r,a,u,f,c,l,s,v,d=T(o),h={x:0===d.x,y:0===d.y},p=(r=pt.navigator.userAgent,u="substring",f=r[a="indexOf"]("MSIE "),c=r[a]("Trident/"),l=r[a]("Edge/"),s=r[a]("rv:"),v=parseInt,0<f?t=v(r[u](f+5,r[a](".",f)),10):0<c?t=v(r[u](s+3,r[a](".",s)),10):0<l&&(t=v(r[u](l+5,r[a](".",l)),10)),t);function T(n){return{x:n[zi]-n[Ti],y:n[Oi]-n[Ci]}}Ii.extend(_,{defaultOptions:n,msie:p,autoUpdateLoop:!1,autoUpdateRecommended:!Ni.mO(),nativeScrollbarSize:d,nativeScrollbarIsOverlaid:h,nativeScrollbarStyling:function(){var n=!1;z.addClass("os-viewport-native-scrollbars-invisible");try{n="none"===z.css("scrollbar-width")&&(9<p||!p)||"none"===pt.getComputedStyle(o,"::-webkit-scrollbar").getPropertyValue("display")}catch(t){}return n}(),overlayScrollbarDummySize:{x:30,y:30},cssCalc:function(){for(var n,t=bt.createElement("div")[_i],r=-1;r<Ot.e[Si];r++)if(n=r<0?"calc":Ot.e[r]+"calc",t.cssText="width:"+n+"(1px);",t[Si])return n;return null}(),restrictedMeasuring:function(){z.css(i,"hidden");var n=o[Ai],t=o[ki];z.css(i,"visible");var r=o[Ai],e=o[ki];return n-r!=0||t-e!=0}(),rtlScrollBehavior:function(){z.css({"overflow-y":"hidden","overflow-x":"scroll",direction:"rtl"}).scrollLeft(0);var n=z.offset(),t=e.offset();z.scrollLeft(999);var r=e.offset();return{i:n.left===t.left,n:t.left-r.left==0}}(),supportTransform:Ot.u("transform")!==xi,supportTransition:Ot.u("transition")!==xi,supportPassiveEvents:function(){var n=!1;try{pt.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){n=!0}}))}catch(t){}return n}(),supportResizeObserver:!!Ni.rO(),supportMutationObserver:!!Ni.mO()}),z.removeAttr(_i).remove(),function(){if(!h.x||!h.y){var g=Ri.abs,m=Ni.wW(),y=Ni.wH(),w=x();Ii(pt).on("resize",function(){if(0<Mi().length){var n=Ni.wW(),t=Ni.wH(),r=n-m,e=t-y;if(0==r&&0==e)return;var i,o=Ri.round(n/(m/100)),a=Ri.round(t/(y/100)),u=g(r),f=g(e),c=g(o),l=g(a),s=x(),v=2<u&&2<f,d=!function b(n,t){var r=g(n),e=g(t);return!(r===e||r+1===e||r-1===e)}(c,l),h=v&&d&&(s!==w&&0<w),p=_.nativeScrollbarSize;h&&(S.append(z),i=_.nativeScrollbarSize=T(z[0]),z.remove(),p.x===i.x&&p.y===i.y||Ii.each(Mi(),function(){Mi(this)&&Mi(this).update("zoom")})),m=n,y=t,w=s}})}function x(){var n=pt.screen.deviceXDPI||0,t=pt.screen.logicalXDPI||1;return pt.devicePixelRatio||n/t}}()}function S(r){var c,e=Ii.inArray,l=Ni.now,s="autoUpdate",v=Si,d=[],h=[],p=!1,b=33,g=l(),m=function(){if(0<d[v]&&p){c=Ni.rAF()(function(){m()});var n,t,r,e,i,o,a=l(),u=a-g;if(b<u){g=a-u%b,n=33;for(var f=0;f<d[v];f++)(t=d[f])!==xi&&(e=(r=t.options())[s],i=Ri.max(1,r.autoUpdateInterval),o=l(),(!0===e||null===e)&&o-h[f]>i&&(t.update("auto"),h[f]=new Date(o+=i)),n=Ri.max(1,Ri.min(n,i)));b=n}}else b=33};this.add=function(n){-1===e(n,d)&&(d.push(n),h.push(l()),0<d[v]&&!p&&(p=!0,r.autoUpdateLoop=p,m()))},this.remove=function(n){var t=e(n,d);-1<t&&(h.splice(t,1),d.splice(t,1),0===d[v]&&p&&(p=!1,r.autoUpdateLoop=p,c!==xi&&(Ni.cAF()(c),c=-1)))}}function z(r,n,t,At,Ht){var ln=Ni.type,sn=Ii.inArray,c=Ii.each,Nt=new Ct,e=Ii[Tt];if(ft(r)){if(Mi(r)){var i=Mi(r);return i.options(n),i}var Lt,Rt,Dt,It,Mt,Wt,Et,jt,I,vn,m,A,s,Ft,Pt,Ut,qt,Bt,y,v,Vt,Xt,Yt,$t,Kt,Gt,Jt,Qt,Zt,nr,o,a,tr,rr,er,u,M,d,W,ir,or,ar,ur,fr,cr,lr,sr,vr,dr,hr,f,l,h,p,b,g,w,H,pr,br,gr,N,mr,yr,wr,xr,_r,Sr,zr,Tr,kr,Or,Cr,Ar,Hr,Nr,Lr,Rr,L,Dr,Ir,Mr,Wr,Er,jr,Fr,Pr,x,_,Ur,qr,Br,Vr,Xr,Yr,$r,Kr,Gr,Jr,Qr,Zr,ne,te,S,re,z,T,k,O,ee,ie,C,R,oe,ae,ue,fe,ce,E,j,le,se,ve,de,he={},dn={},hn={},pe={},be={},D="-hidden",ge="margin-",me="padding-",ye="border-",we="top",xe="right",_e="bottom",Se="left",ze="min-",Te="max-",ke="width",Oe="height",Ce="float",Ae="",He="auto",pn="sync",Ne="scroll",Le="100%",bn="x",gn="y",F=".",Re=" ",P="scrollbar",U="-horizontal",q="-vertical",De=Ne+"Left",Ie=Ne+"Top",B="mousedown touchstart",V="mouseup touchend touchcancel",X="mousemove touchmove",Y="mouseenter",$="mouseleave",K="keydown",G="keyup",J="selectstart",Q="transitionend webkitTransitionEnd oTransitionEnd",Z="__overlayScrollbarsRO__",nn="os-",tn="os-html",rn="os-host",en=rn+"-textarea",on=rn+"-"+P+U+D,an=rn+"-"+P+q+D,un=rn+"-transition",Me=rn+"-rtl",We=rn+"-resize-disabled",Ee=rn+"-scrolling",je=rn+"-overflow",Fe=je+"-x",Pe=je+"-y",fn="os-textarea",cn=fn+"-cover",mn="os-padding",yn="os-viewport",Ue=yn+"-native-scrollbars-invisible",wn=yn+"-native-scrollbars-overlaid",xn="os-content",qe="os-content-arrange",Be="os-content-glue",Ve="os-size-auto-observer",_n="os-resize-observer",Sn="os-resize-observer-item",zn=Sn+"-final",Tn="os-text-inherit",kn=nn+P,On=kn+"-track",Cn=On+"-off",An=kn+"-handle",Hn=An+"-off",Nn=kn+"-unusable",Ln=kn+"-"+He+D,Rn=kn+"-corner",Xe=Rn+"-resize",Ye=Xe+"-both",$e=Xe+U,Ke=Xe+q,Dn=kn+U,In=kn+q,Mn="os-dragging",Ge="os-theme-none",Wn=[Ue,wn,Cn,Hn,Nn,Ln,Xe,Ye,$e,Ke,Mn].join(Re),En=[],jn={},Je={},Qe=42,Fn=[],Pn={},Un=["wrap","cols","rows"],qn=[zt,St,_i,"open"],Bn=[];return Nt.sleep=function(){nr=!0},Nt.update=function(n){if(!Ut){var t,r,e,i,o,a=ln(n)==wt;return a?n===He?(t=function u(){if(!nr&&!ee){var r,e,i,o,n=[{_:or,S:qn.concat(":visible")},{_:qt?ir:xi,S:Un}];return c(n,function(n,t){(e=t._)&&c(t.S,function(n,t){i=":"===t.charAt(0)?e.is(t):e.attr(t),o=Pn[t],r=r||gi(i,o),Pn[t]=i})}),r}}(),r=function l(){if(nr)return!1;var n,t,r,e,i,o=pi(),a=qt&&kr&&!Gr?ir.val().length:0,u=!ee&&kr&&!qt,f={},c={};return Ft&&(f={x:yr[Ai],y:yr[ki]}),u&&(n=lr.css(Ce),c[Ce]=Zt?xe:Se,c[ke]=He,lr.css(c)),i={w:o[Ai]+a,h:o[ki]+a},u&&(c[Ce]=n,c[ke]=Le,lr.css(c)),t=ei(),r=gi(i,x),e=gi(f,S),x=i,S=f,r||t||e}(),(e=t||r)&&oi({z:r,T:Pt?xi:tr})):n===pn?ee?(i=k(z.takeRecords()),o=O(T.takeRecords())):i=Nt.update(He):"zoom"===n&&oi({k:!0,z:!0}):(n=nr||n,nr=!1,Nt.update(pn)&&!n||oi({O:n})),qt||lr.find("img").each(function(n,t){-1===Ni.inA(t,Fn)&&Ii(t).off("load",Zn).on("load",Zn)}),e||i||o}},Nt.options=function(n,t){var r,e={};if(Ii.isEmptyObject(n)||!Ii.isPlainObject(n)){if(ln(n)!=wt)return a;if(!(1<arguments.length))return st(a,n);!function f(n,t,r){for(var e=t.split(F),i=e.length,o=0,a={},u=a;o<i;o++)a=a[e[o]]=o+1<i?{}:r;Ii.extend(n,u,!0)}(e,n,t),r=tt(e)}else r=tt(n);Ii.isEmptyObject(r)||oi({T:r})},Nt.destroy=function(){if(!Ut){for(var n in Ht.remove(Nt),ti(),Ze(ur),Ze(ar),jn)Nt.removeExt(n);for(;0<Bn[Si];)Bn.pop()();ri(!0),vr&&vt(vr),sr&&vt(sr),Xt&&vt(ar),it(!0),at(!0),rt(!0);for(var t=0;t<Fn[Si];t++)Ii(Fn[t]).off("load",Zn);Fn=xi,nr=Ut=!0,Mi(r,0),vi("onDestroyed")}},Nt.scroll=function(n,t,r,e){if(0===arguments.length||n===xi){var i=dn,o=hn,a=Yr&&Zt&&Dt.i,u=Yr&&Zt&&Dt.n,f=i.C,c=i.A,l=i.H;return c=a?1-c:c,f=a?l-f:f,l*=u?-1:1,{position:{x:f*=u?-1:1,y:o.C},ratio:{x:c,y:o.A},max:{x:l,y:o.H},handleOffset:{x:i.N,y:o.N},handleLength:{x:i.L,y:o.L},handleLengthRatio:{x:i.R,y:o.R},trackLength:{x:i.D,y:o.D},snappedHandleOffset:{x:i.I,y:o.I},isRTL:Zt,isRTLNormalized:Yr}}Nt.update(pn);var s,v,d,h,p,m,y,b,g,w=Yr,x=[bn,Se,"l"],_=[gn,we,"t"],S=["+=","-=","*=","/="],z=ln(t)==gt,T=z?t.complete:e,k={},O={},C="begin",A="nearest",H="never",N="ifneeded",L=Si,R=[bn,gn,"xy","yx"],D=[C,"end","center",A],I=["always",H,N],M=n[kt]("el"),W=M?n.el:n,E=!!(W instanceof Ii||Di)&&W instanceof Di,j=!E&&ft(W),F=ln(T)!=mt?xi:function(){v&&ci(!0),d&&ci(!1),T()};function P(n,t){for(s=0;s<t[L];s++)if(n===t[s])return!0;return!1}function U(n,t){var r=n?x:_;if(t=ln(t)==wt||ln(t)==_t?[t,t]:t,ln(t)==yt)return n?t[0]:t[1];if(ln(t)==gt)for(s=0;s<r[L];s++)if(r[s]in t)return t[r[s]]}function q(n,t){var r,e,i,o,a=ln(t)==wt,u=n?dn:hn,f=u.C,c=u.H,l=Zt&&n,s=l&&Dt.n&&!w,v="replace",d=eval;if((e=a?(2<t[L]&&(o=t.substr(0,2),-1<sn(o,S)&&(r=o)),t=(t=r?t.substr(2):t)[v](/min/g,0)[v](/</g,0)[v](/max/g,(s?"-":Ae)+Le)[v](/>/g,(s?"-":Ae)+Le)[v](/px/g,Ae)[v](/%/g," * "+c*(l&&Dt.n?-1:1)/100)[v](/vw/g," * "+pe.w)[v](/vh/g," * "+pe.h),hi(isNaN(t)?hi(d(t),!0).toFixed():t)):t)!==xi&&!isNaN(e)&&ln(e)==_t){var h=w&&l,p=f*(h&&Dt.n?-1:1),b=h&&Dt.i,g=h&&Dt.n;switch(p=b?c-p:p,r){case"+=":i=p+e;break;case"-=":i=p-e;break;case"*=":i=p*e;break;case"/=":i=p/e;break;default:i=e}i=b?c-i:i,i*=g?-1:1,i=l&&Dt.n?Ri.min(0,Ri.max(c,i)):Ri.max(0,Ri.min(c,i))}return i===f?xi:i}function B(n,t,r,e){var i,o,a=[r,r],u=ln(n);if(u==t)n=[n,n];else if(u==yt){if(2<(i=n[L])||i<1)n=a;else for(1===i&&(n[1]=r),s=0;s<i;s++)if(o=n[s],ln(o)!=t||!P(o,e)){n=a;break}}else n=u==gt?[n[bn]||r,n[gn]||r]:a;return{x:n[0],y:n[1]}}function V(n){var t,r,e=[],i=[we,xe,_e,Se];for(s=0;s<n[L]&&s!==i[L];s++)t=n[s],(r=ln(t))==xt?e.push(t?hi(g.css(ge+i[s])):0):e.push(r==_t?t:0);return e}if(E||j){var X,Y=M?n.margin:0,$=M?n.axis:0,K=M?n.scroll:0,G=M?n.block:0,J=[0,0,0,0],Q=ln(Y);if(0<(g=E?W:Ii(W))[L]){Y=Q==_t||Q==xt?V([Y,Y,Y,Y]):Q==yt?2===(X=Y[L])?V([Y[0],Y[1],Y[0],Y[1]]):4<=X?V(Y):J:Q==gt?V([Y[we],Y[xe],Y[_e],Y[Se]]):J,p=P($,R)?$:"xy",m=B(K,wt,"always",I),y=B(G,wt,C,D),b=Y;var Z=dn.C,nn=hn.C,tn=fr.offset(),rn=g.offset(),en={x:m.x==H||p==gn,y:m.y==H||p==bn};rn[we]-=b[0],rn[Se]-=b[3];var on={x:Ri.round(rn[Se]-tn[Se]+Z),y:Ri.round(rn[we]-tn[we]+nn)};if(Zt&&(Dt.n||Dt.i||(on.x=Ri.round(tn[Se]-rn[Se]+Z)),Dt.n&&w&&(on.x*=-1),Dt.i&&w&&(on.x=Ri.round(tn[Se]-rn[Se]+(dn.H-Z)))),y.x!=C||y.y!=C||m.x==N||m.y==N||Zt){var an=g[0],un=vn?an[Hi]():{width:an[Oi],height:an[zi]},fn={w:un[ke]+b[3]+b[1],h:un[Oe]+b[0]+b[2]},cn=function(n){var t=si(n),r=t.M,e=t.W,i=t.j,o=y[i]==(n&&Zt?C:"end"),a="center"==y[i],u=y[i]==A,f=m[i]==H,c=m[i]==N,l=pe[r],s=tn[e],v=fn[r],d=rn[e],h=a?2:1,p=d+v/2,b=s+l/2,g=v<=l&&s<=d&&d+v<=s+l;f?en[i]=!0:en[i]||((u||c)&&(en[i]=c&&g,o=v<l?b<p:p<b),on[i]-=o||a?(l/h-v/h)*(n&&Zt&&w?-1:1):0)};cn(!0),cn(!1)}en.y&&delete on.y,en.x&&delete on.x,n=on}}k[De]=q(!0,U(!0,n)),k[Ie]=q(!1,U(!1,n)),v=k[De]!==xi,d=k[Ie]!==xi,(v||d)&&(0<t||z)?z?(t.complete=F,cr.animate(k,t)):(h={duration:t,complete:F},ln(r)==yt||Ii.isPlainObject(r)?(O[De]=r[0]||r.x,O[Ie]=r[1]||r.y,h.specialEasing=O):h.easing=r,cr.animate(k,h)):(v&&cr[De](k[De]),d&&cr[Ie](k[Ie]))},Nt.scrollStop=function(n,t,r){return cr.stop(n,t,r),Nt},Nt.getElements=function(n){var t={target:pr,host:br,padding:mr,viewport:yr,content:wr,scrollbarHorizontal:{scrollbar:f[0],track:l[0],handle:h[0]},scrollbarVertical:{scrollbar:p[0],track:b[0],handle:g[0]},scrollbarCorner:hr[0]};return ln(n)==wt?st(t,n):t},Nt.getState=function(n){function t(n){if(!Ii.isPlainObject(n))return n;function t(n,t){r[kt](n)&&(r[t]=r[n],delete r[n])}var r=mi({},n);return t("w",ke),t("h",Oe),delete r.c,r}var r={destroyed:!!t(Ut),sleeping:!!t(nr),autoUpdate:t(!ee),widthAuto:t(kr),heightAuto:t(Or),padding:t(Hr),overflowAmount:t(Er),hideOverflow:t(Tr),hasOverflow:t(zr),contentScrollSize:t(_r),viewportSize:t(pe),hostSize:t(xr),documentMixed:t(y)};return ln(n)==wt?st(r,n):r},Nt.ext=function(n){var t,r="added removed on contract".split(" "),e=0;if(ln(n)==wt){if(jn[kt](n))for(t=mi({},jn[n]);e<r.length;e++)delete t[r[e]]}else for(e in t={},jn)t[e]=mi({},Nt.ext(e));return t},Nt.addExt=function(n,t){var r,e,i,o,a=Ct.extension(n),u=!0;if(a){if(jn[kt](n))return Nt.ext(n);if((r=a.extensionFactory.call(Nt,mi({},a.defaultOptions),Ii,Ni))&&(i=r.contract,ln(i)==mt&&(o=i(pt),u=ln(o)==xt?o:u),u))return e=(jn[n]=r).added,ln(e)==mt&&e(t),Nt.ext(n)}else console.warn('A extension with the name "'+n+"\" isn't registered.")},Nt.removeExt=function(n){var t,r=jn[n];return!!r&&(delete jn[n],t=r.removed,ln(t)==mt&&t(),!0)},Ct.valid(function ht(n,t,r){var e,i;return o=At.defaultOptions,Wt=At.nativeScrollbarStyling,jt=mi({},At.nativeScrollbarSize),Lt=mi({},At.nativeScrollbarIsOverlaid),Rt=mi({},At.overlayScrollbarDummySize),Dt=mi({},At.rtlScrollBehavior),tt(mi({},o,t)),Et=At.cssCalc,Mt=At.msie,It=At.autoUpdateRecommended,I=At.supportTransition,vn=At.supportTransform,m=At.supportPassiveEvents,A=At.supportResizeObserver,s=At.supportMutationObserver,Ft=At.restrictedMeasuring,M=Ii(n.ownerDocument),H=M[0],u=Ii(H.defaultView||H.parentWindow),w=u[0],d=dt(M,"html"),W=dt(d,"body"),ir=Ii(n),pr=ir[0],qt=ir.is("textarea"),Bt=ir.is("body"),y=H!==bt,v=qt?ir.hasClass(fn)&&ir.parent().hasClass(xn):ir.hasClass(rn)&&ir.children(F+mn)[Si],Lt.x&&Lt.y&&!tr.nativeScrollbarsOverlaid.initialize?(vi("onInitializationWithdrawn"),v&&(rt(!0),it(!0),at(!0)),nr=Ut=!0):(Bt&&((e={}).l=Ri.max(ir[De](),d[De](),u[De]()),e.t=Ri.max(ir[Ie](),d[Ie](),u[Ie]()),i=function(){cr.removeAttr("tabindex"),Vn(cr,B,i,!0,!0)}),rt(),it(),at(),et(),ot(!0),ot(!1),function l(){var r,t=w.top!==w,e={},i={},o={};function a(n){if(f(n)){var t=c(n),r={};(ve||se)&&(r[ke]=i.w+(t.x-e.x)*o.x),(de||se)&&(r[Oe]=i.h+(t.y-e.y)*o.y),or.css(r),Ni.stpP(n)}else u(n)}function u(n){var t=n!==xi;Vn(M,[J,X,V],[Qn,a,u],!0),wi(W,Mn),hr.releaseCapture&&hr.releaseCapture(),t&&(r&&ni(),Nt.update(He)),r=!1}function f(n){var t=(n.originalEvent||n).touches!==xi;return!nr&&!Ut&&(1===Ni.mBtn(n)||t)}function c(n){return Mt&&t?{x:n.screenX,y:n.screenY}:Ni.page(n)}Xn(hr,B,function(n){f(n)&&!le&&(ee&&(r=!0,ti()),e=c(n),i.w=br[Oi]-(Vt?0:Yt),i.h=br[zi]-(Vt?0:$t),o=ut(),Vn(M,[J,X,V],[Qn,a,u]),yi(W,Mn),hr.setCapture&&hr.setCapture(),Ni.prvD(n),Ni.stpP(n))})}(),Yn(),Ze(ur,$n),Bt&&(cr[De](e.l)[Ie](e.t),bt.activeElement==n&&yr.focus&&(cr.attr("tabindex","-1"),yr.focus(),Vn(cr,B,i,!1,!0))),Nt.update(He),Pt=!0,vi("onInitialized"),c(En,function(n,t){vi(t.n,t.a)}),En=[],ln(r)==wt&&(r=[r]),Ni.isA(r)?c(r,function(n,t){Nt.addExt(t)}):Ii.isPlainObject(r)&&c(r,function(n,t){Nt.addExt(n,t)}),setTimeout(function(){I&&!Ut&&yi(or,un)},333)),Nt}(r,n,t))&&Mi(r,Nt),Nt}function Vn(n,t,r,e,i){var o=ln(t)==yt&&ln(r)==yt,a=e?"removeEventListener":"addEventListener",u=e?"off":"on",f=!o&&t.split(Re),c=0;if(o)for(;c<t[Si];c++)Vn(n,t[c],r[c],e);else for(;c<f[Si];c++)m?n[0][a](f[c],r,{passive:i||!1}):n[u](f[c],r)}function Xn(n,t,r,e){Vn(n,t,r,!1,e),Bn.push(Ni.bind(Vn,0,n,t,r,!0,e))}function Ze(n,t){if(n){var r=Ni.rO(),e="animationstart mozAnimationStart webkitAnimationStart MSAnimationStart",i="childNodes",o=3333333,a=function(){n[Ie](o)[De](Zt?Dt.n?-o:Dt.i?0:o:o),t()};if(t){if(A)((O=n.append(bi(_n+" observed")).contents()[0])[Z]=new r(a)).observe(O);else if(9<Mt||!It){n.prepend(bi(_n,bi({c:Sn,dir:"ltr"},bi(Sn,bi(zn))+bi(Sn,bi({c:zn,style:"width: 200%; height: 200%"})))));var u,f,c,l,s=n[0][i][0][i][0],v=Ii(s[i][1]),d=Ii(s[i][0]),h=Ii(d[0][i][0]),p=s[Oi],b=s[zi],g=At.nativeScrollbarSize,m=function(){d[De](o)[Ie](o),v[De](o)[Ie](o)},y=function(){f=0,u&&(p=c,b=l,a())},w=function(n){return c=s[Oi],l=s[zi],u=c!=p||l!=b,n&&u&&!f?(Ni.cAF()(f),f=Ni.rAF()(y)):n||y(),m(),n&&(Ni.prvD(n),Ni.stpP(n)),!1},x={},_={};di(_,Ae,[-2*(g.y+1),-2*g.x,-2*g.y,-2*(g.x+1)]),Ii(s).css(_),d.on(Ne,w),v.on(Ne,w),n.on(e,function(){w(!1)}),x[ke]=o,x[Oe]=o,h.css(x),m()}else{var S=H.attachEvent,z=Mt!==xi;if(S)n.prepend(bi(_n)),dt(n,F+_n)[0].attachEvent("onresize",a);else{var T=H.createElement(gt);T.setAttribute("tabindex","-1"),T.setAttribute(St,_n),T.onload=function(){var n=this.contentDocument.defaultView;n.addEventListener("resize",a),n.document.documentElement.style.display="none"},T.type="text/html",z&&n.prepend(T),T.data="about:blank",z||n.prepend(T),n.on(e,a)}}if(n[0]===N){var k=function(){var n=or.css("direction"),t={},r=0,e=!1;return n!==L&&(r="ltr"===n?(t[Se]=0,t[xe]=He,o):(t[Se]=He,t[xe]=0,Dt.n?-o:Dt.i?0:o),ur.children().eq(0).css(t),ur[De](r)[Ie](o),L=n,e=!0),e};k(),Xn(n,Ne,function(n){return k()&&oi(),Ni.prvD(n),Ni.stpP(n),!1})}}else if(A){var O,C=(O=n.contents()[0])[Z];C&&(C.disconnect(),delete O[Z])}else vt(n.children(F+_n).eq(0))}}function Yn(){if(s){var e,i,r,o,a,u,n=Ni.mO(),f=Ni.now();O=function(n){var t=!1;return Pt&&!nr&&(c(n,function(){return!(t=function o(n){var t=n.attributeName,r=n.target,e=n.type,i="closest";if(r===wr)return null===t;if("attributes"===e&&(t===St||t===_i)&&!qt){if(t===St&&Ii(r).hasClass(rn))return nt(n.oldValue,r.getAttribute(St));if(typeof r[i]!=mt)return!0;if(null!==r[i](F+_n)||null!==r[i](F+kn)||null!==r[i](F+Rn))return!1}return!0}(this))}),t&&(o=Ni.now(),a=Or||kr,u=function(){Ut||(f=o,qt&&ii(),a?oi():Nt.update(He))},clearTimeout(r),11<o-f||!a?u():r=setTimeout(u,11))),t},z=new n(k=function(n){var t,r=!1;return Pt&&!nr&&(c(n,function(){if(e=(t=this).target,i=t.attributeName,r=i===St?nt(t.oldValue,e.className):i!==_i||t.oldValue!==e[_i].cssText)return!1}),r&&Nt.update(He)),r}),T=new n(O)}}function ni(){s&&!ee&&(z.observe(br,{attributes:!0,attributeOldValue:!0,attributeFilter:qn}),T.observe(qt?pr:wr,{attributes:!0,attributeOldValue:!0,subtree:!qt,childList:!qt,characterData:!qt,attributeFilter:qt?Un:qn}),ee=!0)}function ti(){s&&ee&&(z.disconnect(),T.disconnect(),ee=!1)}function $n(){if(!nr){var n,t={w:N[Ai],h:N[ki]};n=gi(t,_),_=t,n&&oi({k:!0})}}function Kn(){ce&&ui(!0)}function Gn(){ce&&!W.hasClass(Mn)&&ui(!1)}function Jn(){fe&&(ui(!0),clearTimeout(R),R=setTimeout(function(){fe&&!Ut&&ui(!1)},100))}function Qn(n){return Ni.prvD(n),!1}function Zn(){oi({z:!0})}function ri(n){Vn(or,X,Jn,!fe||n,!0),Vn(or,[Y,$],[Kn,Gn],!!fe||n,!0),Pt||n||or.one("mouseover",Kn)}function ei(){var n={};return Bt&&sr&&(n.w=hi(sr.css(ze+ke)),n.h=hi(sr.css(ze+Oe)),n.c=gi(n,te),n.f=!0),!!(te=n).c}function nt(n,t){var r=t!==xi&&null!==t?t.split(Re):Ae,e=n!==xi&&null!==n?n.split(Re):Ae;if(r===Ae&&e===Ae)return!1;var i,o,a,u,f,c=function h(n,t){var r,e,i=[],o=[];for(r=0;r<n.length;r++)i[n[r]]=!0;for(r=0;r<t.length;r++)i[t[r]]?delete i[t[r]]:i[t[r]]=!0;for(e in i)o.push(e);return o}(e,r),l=!1,s=Kr!==xi&&null!==Kr?Kr.split(Re):[Ae],v=$r!==xi&&null!==$r?$r.split(Re):[Ae],d=sn(Ge,c);for(-1<d&&c.splice(d,1),o=0;o<c.length;o++)if(0!==(i=c[o]).indexOf(rn)){for(f=u=!0,a=0;a<s.length;a++)if(i===s[a]){u=!1;break}for(a=0;a<v.length;a++)if(i===v[a]){f=!1;break}if(u&&f){l=!0;break}}return l}function ii(){if(!nr){var n,t,r,e,i=!Gr,o=pe.w,a=pe.h,u={},f=kr||i;return u[ze+ke]=Ae,u[ze+Oe]=Ae,u[ke]=He,ir.css(u),n=pr[Oi],t=f?Ri.max(n,pr[Ai]-1):1,u[ke]=kr?He:Le,u[ze+ke]=Le,u[Oe]=He,ir.css(u),r=pr[zi],e=Ri.max(r,pr[ki]-1),u[ke]=t,u[Oe]=e,dr.css(u),u[ze+ke]=o,u[ze+Oe]=a,ir.css(u),{F:n,P:r,U:t,q:e}}}function oi(n){clearTimeout(er),n=n||{},Je.k|=n.k,Je.z|=n.z,Je.O|=n.O;var t,r=Ni.now(),e=!!Je.k,i=!!Je.z,o=!!Je.O,a=n.T,u=0<Qe&&Pt&&!Ut&&!o&&!a&&r-rr<Qe&&!Or&&!kr;if(u&&(er=setTimeout(oi,Qe)),!(Ut||u||nr&&!a||Pt&&!o&&(t=or.is(":hidden"))||"inline"===or.css("display"))){rr=r,Je={},!Wt||Lt.x&&Lt.y?jt=mi({},At.nativeScrollbarSize):(jt.x=0,jt.y=0),be={x:3*(jt.x+(Lt.x?0:3)),y:3*(jt.y+(Lt.y?0:3))};var f=function(){return gi.apply(this,[].slice.call(arguments).concat([o]))},c={x:cr[De](),y:cr[Ie]()},l=tr.scrollbars,s=tr.textarea,v=l.visibility,d=f(v,Ur),h=l.autoHide,p=f(h,qr),b=l.clickScrolling,g=f(b,Br),m=l.dragScrolling,y=f(m,Vr),w=tr.className,x=f(w,$r),_=tr.resize,S=f(_,Xr)&&!Bt,z=tr.paddingAbsolute,T=f(z,Dr),k=tr.clipAlways,O=f(k,Ir),C=tr.sizeAutoCapable&&!Bt,A=f(C,Pr),H=tr.nativeScrollbarsOverlaid.showNativeScrollbars,N=f(H,jr),L=tr.autoUpdate,R=f(L,Fr),D=tr.overflowBehavior,I=f(D,Wr,o),M=s.dynWidth,W=f(ne,M),E=s.dynHeight,j=f(Zr,E);if(ae="n"===h,ue="s"===h,fe="m"===h,ce="l"===h,oe=l.autoHideDelay,Kr=$r,le="n"===_,se="b"===_,ve="h"===_,de="v"===_,Yr=tr.normalizeRTL,H=H&&Lt.x&&Lt.y,Ur=v,qr=h,Br=b,Vr=m,$r=w,Xr=_,Dr=z,Ir=k,Pr=C,jr=H,Fr=L,Wr=mi({},D),ne=M,Zr=E,zr=zr||{x:!1,y:!1},x&&(wi(or,Kr+Re+Ge),yi(or,w!==xi&&null!==w&&0<w.length?w:Ge)),R&&(!0===L?(ti(),Ht.add(Nt)):null===L&&It?(ti(),Ht.add(Nt)):(Ht.remove(Nt),ni())),A)if(C)if(vr?vr.show():(vr=Ii(bi(Be)),fr.before(vr)),Xt)ar.show();else{ar=Ii(bi(Ve)),gr=ar[0],vr.before(ar);var F={w:-1,h:-1};Ze(ar,function(){var n={w:gr[Oi],h:gr[zi]};gi(n,F)&&(Pt&&Or&&0<n.h||kr&&0<n.w?oi():(Pt&&!Or&&0===n.h||!kr&&0===n.w)&&oi()),F=n}),Xt=!0,null!==Et&&ar.css(Oe,Et+"(100% + 1px)")}else Xt&&ar.hide(),vr&&vr.hide();o&&(ur.find("*").trigger(Ne),Xt&&ar.find("*").trigger(Ne));var P,U=f(t=t===xi?or.is(":hidden"):t,re),q=!!qt&&"off"!==ir.attr("wrap"),B=f(q,Gr),V=or.css("direction"),X=f(V,Rr),Y=or.css("box-sizing"),$=f(Y,Ar),K={c:o,t:hi(or.css(me+we)),r:hi(or.css(me+xe)),b:hi(or.css(me+_e)),l:hi(or.css(me+Se))};try{P=Xt?gr[Hi]():null}catch(Ot){return}Vt="border-box"===Y;var G=(Zt="rtl"===V)?Se:xe,J=Zt?xe:Se,Q=!1,Z=!(!Xt||"none"===or.css(Ce))&&(0===Ri.round(P.right-P.left)&&(!!z||0<br[Ci]-Yt));if(C&&!Z){var nn=br[Oi],tn=vr.css(ke);vr.css(ke,He);var rn=br[Oi];vr.css(ke,tn),(Q=nn!==rn)||(vr.css(ke,nn+1),rn=br[Oi],vr.css(ke,tn),Q=nn!==rn)}var en=(Z||Q)&&C&&!t,on=f(en,kr),an=!en&&kr,un=!(!Xt||!C||t)&&0===Ri.round(P.bottom-P.top),fn=f(un,Or),cn=!un&&Or,ln="-"+ke,sn=en&&Vt||!Vt,vn=un&&Vt||!Vt,dn={c:o,t:vn?hi(or.css(ye+we+ln),!0):0,r:sn?hi(or.css(ye+xe+ln),!0):0,b:vn?hi(or.css(ye+_e+ln),!0):0,l:sn?hi(or.css(ye+Se+ln),!0):0},hn={c:o,t:hi(or.css(ge+we)),r:hi(or.css(ge+xe)),b:hi(or.css(ge+_e)),l:hi(or.css(ge+Se))},pn={h:String(or.css(Te+Oe)),w:String(or.css(Te+ke))},bn={},gn={},mn=function(){return{w:br[Ci],h:br[Ti]}},yn=function(){return{w:mr[Oi]+Ri.max(0,wr[Ci]-wr[Ai]),h:mr[zi]+Ri.max(0,wr[Ti]-wr[ki])}},wn=Yt=K.l+K.r,xn=$t=K.t+K.b;if(wn*=z?1:0,xn*=z?1:0,K.c=f(K,Hr),Kt=dn.l+dn.r,Gt=dn.t+dn.b,dn.c=f(dn,Nr),Jt=hn.l+hn.r,Qt=hn.t+hn.b,hn.c=f(hn,Lr),pn.ih=hi(pn.h),pn.iw=hi(pn.w),pn.ch=-1<pn.h.indexOf("px"),pn.cw=-1<pn.w.indexOf("px"),pn.c=f(pn,Cr),re=t,Gr=q,Rr=V,Ar=Y,kr=en,Or=un,Hr=K,Nr=dn,Lr=hn,Cr=pn,X&&Xt&&ar.css(Ce,J),K.c||X||T||on||fn||$||A){var _n={},Sn={};di(gn,ge,[-K.t,-K.r,-K.b,-K.l]),z?(di(_n,Ae,[K.t,K.r,K.b,K.l]),di(qt?Sn:bn,me)):(di(_n,Ae),di(qt?Sn:bn,me,[K.t,K.r,K.b,K.l])),fr.css(_n),ir.css(Sn)}pe=yn();var zn=!!qt&&ii(),Tn=qt&&f(zn,Qr),kn=qt&&zn?{w:M?zn.U:zn.F,h:E?zn.q:zn.P}:{};if(Qr=zn,un&&(fn||T||$||pn.c||K.c||dn.c)?bn[Oe]=He:(fn||T)&&(bn[Te+Oe]=Ae,bn[Oe]=Le),en&&(on||T||$||pn.c||K.c||dn.c||X)?(bn[ke]=He,gn[Te+ke]=Le):(on||T)&&(bn[Te+ke]=Ae,bn[ke]=Le,bn[Ce]=Ae,gn[Te+ke]=Ae),en?(pn.cw||(bn[Te+ke]=Ae),gn[ke]=He,bn[ke]=He,bn[Ce]=J):gn[ke]=Ae,un?(pn.ch||(bn[Te+Oe]=Ae),gn[Oe]=kn.h||wr[Ti]):gn[Oe]=Ae,C&&vr.css(gn),lr.css(bn),bn={},gn={},e||i||Tn||X||$||T||on||en||fn||un||pn.c||N||I||O||S||d||p||y||g||W||j||B){var On="overflow",Cn=On+"-x",An=On+"-y",Hn=Ft?Lt.x||Lt.y||pe.w<be.y||pe.h<be.x||un||U:un,Nn={},Ln=zr.y&&Tr.ys&&!H&&!Wt?Lt.y?cr.css(G):-jt.y:0,Rn=zr.x&&Tr.xs&&!H&&!Wt?Lt.x?cr.css(_e):-jt.x:0;di(Nn,Ae),cr.css(Nn),Mt!==xi&&(Hn=!1),Hn&&lr.css(On,"hidden");var Dn=pi(),In=Ft&&!Hn?yr:Dn,Mn={w:kn.w||Dn[Ci],h:kn.h||Dn[Ti]},Wn=Ri.max(Dn[Ai],In[Ai]),En=Ri.max(Dn[ki],In[ki]);Nn[_e]=cn?Ae:Rn,Nn[G]=an?Ae:Ln,cr.css(Nn),pe=yn();var jn=mn(),Fn={w:Ri.max((en?Mn.w:Wn)+wn,jn.w),h:Ri.max((un?Mn.h:En)+xn,jn.h)};if(Fn.c=f(Fn,Mr),Mr=Fn,C){(Fn.c||un||en)&&(gn[ke]=Fn.w,gn[Oe]=Fn.h,qt||(Mn={w:Dn[Ci],h:Dn[Ti]}));var Pn={},Un=function(n){var t=si(n),r=t.M,e=t.B,i=n?en:un,o=n?Kt:Gt,a=n?Yt:$t,u=n?Jt:Qt,f=gn[e]+(Vt?o:-a);i&&(i||!dn.c)||(gn[e]=jn[r]-(Vt?0:a+o)-1-u),i&&pn["c"+r]&&pn["i"+r]===f&&(gn[e]=f+(Vt?0:a)+1),!(i&&Mn[r]<pe[r])||n&&qt&&q||(qt&&(Pn[e]=hi(dr.css(e))-1),gn[e]-=1),0<Mn[r]&&(gn[e]=Ri.max(1,gn[e]))};Un(!0),Un(!1),qt&&dr.css(Pn),vr.css(gn)}en&&(bn[ke]=Le),!en||Vt||ee||(bn[Ce]="none"),lr.css(bn),bn={};var qn={w:Ri.max(Dn[Ai],In[Ai]),h:Ri.max(Dn[ki],In[ki])};qn.c=i=f(qn,_r),_r=qn,Hn&&lr.css(On,Ae),pe=yn(),e=f(jn=mn(),xr),xr=jn;var Bn=qt&&(0===pe.w||0===pe.h),Vn=Er,Xn={},Yn={},$n={},Kn={},Gn={},Jn={},Qn={},Zn=mr[Hi](),nt=function(n){var t=si(n),r=si(!n).j,e=t.j,i=t.M,o=t.B,a=Ne+t.V+"Max",u=Zn[o]?Ri.abs(Zn[o]-pe[i]):0,f=Vn&&0<Vn[e]&&0===yr[a];Xn[e]="v-s"===D[e],Yn[e]="v-h"===D[e],$n[e]="s"===D[e],Kn[e]=Ri.max(0,Ri.round(100*(qn[i]-pe[i]))/100),Kn[e]*=Bn||f&&0<u&&u<1?0:1,Gn[e]=0<Kn[e],Jn[e]=Xn[e]||Yn[e]?Gn[r]&&!Xn[r]&&!Yn[r]:Gn[e],Jn[e+"s"]=!!Jn[e]&&($n[e]||Xn[e]),Qn[e]=Gn[e]&&Jn[e+"s"]};if(nt(!0),nt(!1),Kn.c=f(Kn,Er),Er=Kn,Gn.c=f(Gn,zr),zr=Gn,Jn.c=f(Jn,Tr),Tr=Jn,Lt.x||Lt.y){var tt,rt={},et={},it=o;(Gn.x||Gn.y)&&(et.w=Lt.y&&Gn.y?qn.w+Rt.y:Ae,et.h=Lt.x&&Gn.x?qn.h+Rt.x:Ae,it=f(et,Sr),Sr=et),(Gn.c||Jn.c||qn.c||X||on||fn||en||un||N)&&(bn[ge+J]=bn[ye+J]=Ae,tt=function(n){var t=si(n),r=si(!n),e=t.j,i=n?_e:G,o=n?un:en;Lt[e]&&Gn[e]&&Jn[e+"s"]?(bn[ge+i]=o?H?Ae:Rt[e]:Ae,bn[ye+i]=n&&o||H?Ae:Rt[e]+"px solid transparent"):(et[r.M]=bn[ge+i]=bn[ye+i]=Ae,it=!0)},Wt?H?wi(cr,Ue):yi(cr,Ue):(tt(!0),tt(!1))),H&&(et.w=et.h=Ae,it=!0),it&&!Wt&&(rt[ke]=Jn.y?et.w:Ae,rt[Oe]=Jn.x?et.h:Ae,sr||(sr=Ii(bi(qe)),cr.prepend(sr)),sr.css(rt)),lr.css(bn)}var ot,at={};_n={};if((e||Gn.c||Jn.c||qn.c||I||$||N||X||O||fn)&&(at[J]=Ae,(ot=function(n){function t(){at[a]=Ae,he[e.M]=0}var r=si(n),e=si(!n),i=r.j,o=r.X,a=n?_e:G;Gn[i]&&Jn[i+"s"]?(at[On+o]=Ne,H||Wt?t():(at[a]=-(Lt[i]?Rt[i]:jt[i]),he[e.M]=Lt[i]?Rt[e.j]:0)):(at[On+o]=Ae,t())})(!0),ot(!1),!Wt&&(pe.h<be.x||pe.w<be.y)&&(Gn.x&&Jn.x&&!Lt.x||Gn.y&&Jn.y&&!Lt.y)?(at[me+we]=be.x,at[ge+we]=-be.x,at[me+J]=be.y,at[ge+J]=-be.y):at[me+we]=at[ge+we]=at[me+J]=at[ge+J]=Ae,at[me+G]=at[ge+G]=Ae,Gn.x&&Jn.x||Gn.y&&Jn.y||Bn?qt&&Bn&&(_n[Cn]=_n[An]="hidden"):(!k||Yn.x||Xn.x||Yn.y||Xn.y)&&(qt&&(_n[Cn]=_n[An]=Ae),at[Cn]=at[An]="visible"),fr.css(_n),cr.css(at),at={},(Gn.c||$||on||fn)&&(!Lt.x||!Lt.y))){var ut=wr[_i];ut.webkitTransform="scale(1)",ut.display="run-in",wr[zi],ut.display=Ae,ut.webkitTransform=Ae}if(bn={},X||on||fn)if(Zt&&en){var ft=lr.css(Ce),ct=Ri.round(lr.css(Ce,Ae).css(Se,Ae).position().left);lr.css(Ce,ft),ct!==Ri.round(lr.position().left)&&(bn[Se]=ct)}else bn[Se]=Ae;if(lr.css(bn),qt&&i){var lt=function Ct(){var n=pr.selectionStart;if(n===xi)return;var t,r,e=ir.val(),i=e[Si],o=e.split("\n"),a=o[Si],u=e.substr(0,n).split("\n"),f=0,c=0,l=u[Si],s=u[u[Si]-1][Si];for(r=0;r<o[Si];r++)t=o[r][Si],c<t&&(f=r+1,c=t);return{Y:l,$:s,K:a,G:c,J:f,Q:n,Z:i}}();if(lt){var st=Jr===xi||lt.K!==Jr.K,vt=lt.Y,dt=lt.$,ht=lt.J,pt=lt.K,bt=lt.G,gt=lt.Q,mt=lt.Z<=gt&&ie,yt={x:q||dt!==bt||vt!==ht?-1:Er.x,y:(q?mt||st&&Vn&&c.y===Vn.y:(mt||st)&&vt===pt)?Er.y:-1};c.x=-1<yt.x?Zt&&Yr&&Dt.i?0:yt.x:c.x,c.y=-1<yt.y?yt.y:c.y}Jr=lt}Zt&&Dt.i&&Lt.y&&Gn.x&&Yr&&(c.x+=he.w||0),en&&or[De](0),un&&or[Ie](0),cr[De](c.x)[Ie](c.y);var wt="v"===v,xt="h"===v,_t="a"===v,St=Ni.bind(ai,0,!0,!0,Qn.x),zt=Ni.bind(ai,0,!1,!0,Qn.y),Tt=Ni.bind(ai,0,!0,!1,Qn.x),kt=Ni.bind(ai,0,!1,!1,Qn.y);Jn.x||Jn.y?yi(or,je):wi(or,je),Jn.x?yi(or,Fe):wi(or,Fe),Jn.y?yi(or,Pe):wi(or,Pe),X&&(Zt?yi(or,Me):wi(or,Me)),Bt&&yi(or,We),S&&(wi(hr,[Xe,Ye,$e,Ke].join(Re)),le?yi(or,We):(wi(or,We),yi(hr,Xe),se?yi(hr,Ye):ve?yi(hr,$e):de&&yi(hr,Ke))),(d||I||Jn.c||Gn.c||N)&&(H?N&&(wi(or,Ee),H&&(Tt(),kt())):_t?(Qn.x?St():Tt(),Qn.y?zt():kt()):wt?(St(),zt()):xt&&(Tt(),kt())),(p||N)&&(ce||fe?(ri(!0),ri()):ri(!0),ae?ui(!0):ui(!1,!0)),(e||Kn.c||fn||on||S||$||T||N||X)&&(fi(!0),ci(!0),fi(!1),ci(!1)),g&&li(!0,b),y&&li(!1,m),X&&vi("onDirectionChanged",{isRTL:Zt,dir:V}),e&&vi("onHostSizeChanged",{width:xr.w,height:xr.h}),i&&vi("onContentSizeChanged",{width:_r.w,height:_r.h}),(Gn.c||Jn.c)&&vi("onOverflowChanged",{x:Gn.x,y:Gn.y,xScrollable:Jn.xs,yScrollable:Jn.ys,clipped:Jn.x||Jn.y}),Kn.c&&vi("onOverflowAmountChanged",{x:Kn.x,y:Kn.y})}Bt&&te&&(zr.c||te.c)&&(te.f||ei(),Lt.y&&zr.x&&lr.css(ze+ke,te.w+Rt.y),Lt.x&&zr.y&&lr.css(ze+Oe,te.h+Rt.x),te.c=!1),vi("onUpdated",{forced:o})}}function tt(n){var t=Li.p(n,Li.d,!0,a);return a=mi({},a,t.g),tr=mi({},tr,t.m),t.m}function rt(e){function n(){var r=e?ir:or;c(a,function(n,t){ln(t)==wt&&(n==St?r.addClass(t):r.attr(n,t))})}var t="parent",r=fn+Re+Tn,i=qt?Re+Tn:Ae,o=tr.textarea.inheritedAttrs,a={},u=[rn,en,We,Me,on,an,un,Ee,je,Fe,Pe,Ge,fn,Tn,$r].join(Re),f={};or=or||(qt?v?ir[t]()[t]()[t]()[t]():Ii(bi(en)):ir),lr=lr||lt(xn+i),cr=cr||lt(yn+i),fr=fr||lt(mn+i),ur=ur||lt("os-resize-observer-host"),dr=dr||(qt?lt(cn):xi),e&&wi(or,u),o=ln(o)==wt?o.split(Re):o,ln(o)==yt&&qt&&c(o,function(n,t){ln(t)==wt&&(a[t]=e?or.attr(t):ir.attr(t))}),e?(v&&Pt?(ur.children().remove(),c([fr,cr,lr,dr],function(n,t){t&&wi(t.removeAttr(_i),Wn)}),yi(or,qt?en:rn)):(vt(ur),lr.contents().unwrap().unwrap().unwrap(),qt&&(ir.unwrap(),vt(or),vt(dr),n())),qt&&ir.removeAttr(_i),Bt&&wi(d,tn)):(qt&&(tr.sizeAutoCapable||(f[ke]=ir.css(ke),f[Oe]=ir.css(Oe)),v||ir.addClass(Tn).wrap(or),or=ir[t]().css(f)),v||(yi(ir,qt?r:rn),or.wrapInner(lr).wrapInner(cr).wrapInner(fr).prepend(ur),lr=dt(or,F+xn),cr=dt(or,F+yn),fr=dt(or,F+mn),qt&&(lr.prepend(dr),n())),Wt&&yi(cr,Ue),Lt.x&&Lt.y&&yi(cr,wn),Bt&&yi(d,tn),N=ur[0],br=or[0],mr=fr[0],yr=cr[0],wr=lr[0])}function et(){var r,t,e=[112,113,114,115,116,117,118,119,120,121,123,33,34,37,38,39,40,16,17,18,19,20,144],i=[],n="focus";function o(n){ii(),Nt.update(He),n&&It&&clearInterval(r)}qt?(9<Mt||!It?Xn(ir,"input",o):Xn(ir,[K,G],[function a(n){var t=n.keyCode;sn(t,e)<0&&(i[Si]||(o(),r=setInterval(o,1e3/60)),sn(t,i)<0&&i.push(t))},function u(n){var t=n.keyCode,r=sn(t,i);sn(t,e)<0&&(-1<r&&i.splice(r,1),i[Si]||o(!0))}]),Xn(ir,[Ne,"drop",n,n+"out"],[function f(n){return ir[De](Dt.i&&Yr?9999999:0),ir[Ie](0),Ni.prvD(n),Ni.stpP(n),!1},function c(n){setTimeout(function(){Ut||o()},50)},function l(){ie=!0,yi(or,n)},function s(){ie=!1,i=[],wi(or,n),o(!0)}])):Xn(lr,Q,function v(n){!0!==Fr&&function s(n){if(!Pt)return!0;function t(n,t){for(var r=0;r<n[Si];r++)if(n[r]===t)return!0;return!1}var r="flex-grow",e="flex-shrink",i="flex-basis",o=[ke,ze+ke,Te+ke,ge+Se,ge+xe,Se,xe,"font-weight","word-spacing",r,e,i],a=[me+Se,me+xe,ye+Se+ke,ye+xe+ke],u=[Oe,ze+Oe,Te+Oe,ge+we,ge+_e,we,_e,"line-height",r,e,i],f=[me+we,me+_e,ye+we+ke,ye+_e+ke],c="s"===Wr.x||"v-s"===Wr.x,l=!1;return("s"===Wr.y||"v-s"===Wr.y)&&((l=t(u,n))||Vt||(l=t(f,n))),c&&!l&&((l=t(o,n))||Vt||(l=t(a,n))),l}((n=n.originalEvent||n).propertyName)&&Nt.update(He)}),Xn(cr,Ne,function d(n){nr||(t!==xi?clearTimeout(t):((ue||fe)&&ui(!0),ct()||yi(or,Ee),vi("onScrollStart",n)),j||(ci(!0),ci(!1)),vi("onScroll",n),t=setTimeout(function(){Ut||(clearTimeout(t),t=xi,(ue||fe)&&ui(!1),ct()||wi(or,Ee),vi("onScrollStop",n))},175))},!0)}function it(i){function o(n){var t=lt(kn+Re+(n?Dn:In),!0),r=lt(On,t),e=lt(An,t);return v||i||(t.append(r),r.append(e)),{nn:t,tn:r,rn:e}}var n,t;function r(n){var t=si(n),r=t.nn,e=t.tn,i=t.rn;v&&Pt?c([r,e,i],function(n,t){wi(t.removeAttr(_i),Wn)}):vt(r||o(n).nn)}i?(r(!0),r()):(n=o(!0),t=o(),f=n.nn,l=n.tn,h=n.rn,p=t.nn,b=t.tn,g=t.rn,v||(fr.after(p),fr.after(f)))}function ot(_){var S,i,z,T,r=si(_),k=r.en,t=w.top!==w,O=r.j,e=r.X,C=Ne+r.V,o="active",a="snapHandle",A=1,u=[16,17];function f(n){return Mt&&t?n["screen"+e]:Ni.page(n)[O]}function c(n){return tr.scrollbars[n]}function l(){A=.5}function s(){A=1}function v(n){-1<sn(n.keyCode,u)&&l()}function H(n){-1<sn(n.keyCode,u)&&s()}function N(n){var t=(n.originalEvent||n).touches!==xi;return!(nr||Ut||ct()||!Vr||t&&!c("touchSupport"))&&(1===Ni.mBtn(n)||t)}function d(n){if(N(n)){var t=k.D,r=k.L,e=k.H*((f(n)-z)*T/(t-r));e=isFinite(e)?e:0,Zt&&_&&!Dt.i&&(e*=-1),cr[C](Ri.round(i+e)),j&&ci(_,i+e),m||Ni.prvD(n)}else L(n)}function L(n){if(n=n||n.originalEvent,Vn(M,[X,V,K,G,J],[d,L,v,H,Qn],!0),j&&ci(_,!0),j=!1,wi(W,Mn),wi(r.rn,o),wi(r.tn,o),wi(r.nn,o),z=i=xi,T=1,s(),S!==xi&&(Nt.scrollStop(),clearTimeout(S),S=xi),n){var t=br[Hi]();n.clientX>=t.left&&n.clientX<=t.right&&n.clientY>=t.top&&n.clientY<=t.bottom||Gn(),(ue||fe)&&ui(!1)}}function R(n){i=cr[C](),i=isNaN(i)?0:i,(Zt&&_&&!Dt.n||!Zt)&&(i=i<0?0:i),T=ut()[O],z=f(n),j=!c(a),yi(W,Mn),yi(r.rn,o),yi(r.nn,o),Vn(M,[X,V,J],[d,L,Qn]),!Mt&&y||Ni.prvD(n),Ni.stpP(n)}Xn(r.rn,B,function h(n){N(n)&&R(n)}),Xn(r.tn,[B,Y,$],[function D(n){if(N(n)){var d,h=Ri.round(pe[r.M]),p=r.tn.offset()[r.W],t=n.ctrlKey,b=n.shiftKey,g=b&&t,m=!0,y=function(n){j&&ci(_,n)},w=function(){y(),R(n)},x=function(){if(!Ut){var n=(z-p)*T,t=k.N,r=k.D,e=k.L,i=k.H,o=k.C,a=270*A,u=m?Ri.max(400,a):a,f=i*((n-e/2)/(r-e)),c=Zt&&_&&(!Dt.i&&!Dt.n||Yr),l=c?t<n:n<t,s={},v={easing:"linear",step:function(n){j&&(cr[C](n),ci(_,n))}};f=isFinite(f)?f:0,f=Zt&&_&&!Dt.i?i-f:f,b?(cr[C](f),g?(f=cr[C](),cr[C](o),f=c&&Dt.i?i-f:f,f=c&&Dt.n?-f:f,s[O]=f,Nt.scroll(s,mi(v,{duration:130,complete:w}))):w()):(d=m?l:d,(c?d?n<=t+e:t<=n:d?t<=n:n<=t+e)?(clearTimeout(S),Nt.scrollStop(),S=xi,y(!0)):(S=setTimeout(x,u),s[O]=(d?"-=":"+=")+h,Nt.scroll(s,mi(v,{duration:a}))),m=!1)}};t&&l(),T=ut()[O],z=Ni.page(n)[O],j=!c(a),yi(W,Mn),yi(r.tn,o),yi(r.nn,o),Vn(M,[V,K,G,J],[L,v,H,Qn]),x(),Ni.prvD(n),Ni.stpP(n)}},function p(n){E=!0,(ue||fe)&&ui(!0)},function b(n){E=!1,(ue||fe)&&ui(!1)}]),Xn(r.nn,B,function g(n){Ni.stpP(n)}),I&&Xn(r.nn,Q,function(n){n.target===r.nn[0]&&(fi(_),ci(_))})}function ai(n,t,r){var e=n?on:an,i=n?f:p;t?wi(or,e):yi(or,e),r?wi(i,Nn):yi(i,Nn)}function ui(n,t){if(clearTimeout(C),n)wi(f,Ln),wi(p,Ln);else{var r,e=function(){E||Ut||(!(r=h.hasClass("active")||g.hasClass("active"))&&(ue||fe||ce)&&yi(f,Ln),!r&&(ue||fe||ce)&&yi(p,Ln))};0<oe&&!0!==t?C=setTimeout(e,oe):e()}}function fi(n){var t={},r=si(n),e=r.en,i=Ri.min(1,(xr[r.M]-(Dr?n?Yt:$t:0))/_r[r.M]);t[r.B]=Ri.floor(100*i*1e6)/1e6+"%",ct()||r.rn.css(t),e.L=r.rn[0]["offset"+r["in"]],e.R=i}function ci(n,t){function r(n){return isNaN(n/y)?0:Ri.max(0,Ri.min(1,n/y))}function e(n){var t=g*n;return t=isNaN(t)?0:t,t=u&&!Dt.i?b-p-t:t,t=Ri.max(0,t)}var i,o,a=ln(t)==xt,u=Zt&&n,f=si(n),c=f.en,l="translate(",s=Ot.u("transform"),v=Ot.u("transition"),d=n?cr[De]():cr[Ie](),h=t===xi||a?d:t,p=c.L,b=f.tn[0]["offset"+f["in"]],g=b-p,m={},y=(yr[Ne+f["in"]]-yr["client"+f["in"]])*(Dt.n&&u?-1:1),w=r(d),x=e(r(h)),_=e(w);c.H=y,c.C=d,c.A=w,vn?(i=u?-(b-p-x):x,o=n?l+i+"px, 0)":l+"0, "+i+"px)",m[s]=o,I&&(m[v]=a&&1<Ri.abs(x-c.N)?function S(n){var t=Ot.u("transition"),r=n.css(t);if(r)return r;for(var e,i,o,a="\\s*(([^,(]+(\\(.+?\\))?)+)[\\s,]*",u=new RegExp(a),f=new RegExp("^("+a+")+$"),c="property duration timing-function delay".split(" "),l=[],s=0,v=function(n){if(e=[],!n.match(f))return n;for(;n.match(u);)e.push(RegExp.$1),n=n.replace(u,Ae);return e};s<c[Si];s++)for(i=v(n.css(t+"-"+c[s])),o=0;o<i[Si];o++)l[o]=(l[o]?l[o]+Re:Ae)+i[o];return l.join(", ")}(f.rn)+", "+(s+Re+250)+"ms":Ae)):m[f.W]=x,ct()||(f.rn.css(m),vn&&I&&a&&f.rn.one(Q,function(){Ut||f.rn.css(v,Ae)})),c.N=x,c.I=_,c.D=b}function li(n,t){var r=t?"removeClass":"addClass",e=n?b:g,i=n?Cn:Hn;(n?l:h)[r](i),e[r](i)}function si(n){return{B:n?ke:Oe,"in":n?"Width":"Height",W:n?Se:we,V:n?"Left":"Top",j:n?bn:gn,X:n?"X":"Y",M:n?"w":"h",an:n?"l":"t",tn:n?l:b,rn:n?h:g,nn:n?f:p,en:n?dn:hn}}function at(n){hr=hr||lt(Rn,!0),n?v&&Pt?wi(hr.removeAttr(_i),Wn):vt(hr):v||or.append(hr)}function vi(n,t){if(Pt){var r,e=tr.callbacks[n],i=n;"on"===i.substr(0,2)&&(i=i.substr(2,1).toLowerCase()+i.substr(3)),ln(e)==mt&&e.call(Nt,t),c(jn,function(){ln((r=this).on)==mt&&r.on(i,t)})}else Ut||En.push({n:n,a:t})}function di(n,t,r){r===xi&&(r=[Ae,Ae,Ae,Ae]),n[t+we]=r[0],n[t+xe]=r[1],n[t+_e]=r[2],n[t+Se]=r[3]}function ut(){var n=mr[Hi]();return{x:vn&&1/(Ri.round(n.width)/mr[Oi])||1,y:vn&&1/(Ri.round(n.height)/mr[zi])||1}}function ft(n){var t="ownerDocument",r="HTMLElement",e=n&&n[t]&&n[t].parentWindow||pt;return typeof e[r]==gt?n instanceof e[r]:n&&typeof n==gt&&null!==n&&1===n.nodeType&&typeof n.nodeName==wt}function hi(n,t){var r=t?parseFloat(n):parseInt(n,10);return isNaN(r)?0:r}function ct(){return jr&&Lt.x&&Lt.y}function pi(){return qt?dr[0]:wr}function bi(r,n){return"<div "+(r?ln(r)==wt?'class="'+r+'"':function(){var n,t=Ae;if(Ii.isPlainObject(r))for(n in r)t+=("c"===n?"class":n)+'="'+r[n]+'" ';return t}():Ae)+">"+(n||Ae)+"</div>"}function lt(n,t){var r=ln(t)==xt,e=r?or:t||or;return v&&!e[Si]?null:v?e[r?"children":"find"](F+n.replace(/\s/g,F)).eq(0):Ii(bi(n))}function st(n,t){for(var r,e=t.split(F),i=0;i<e.length;i++){if(!n[kt](e[i]))return;r=n[e[i]],i<e.length&&ln(r)==gt&&(n=r)}return r}function gi(n,t,r){if(r)return r;if(ln(n)!=gt||ln(t)!=gt)return n!==t;for(var e in n)if("c"!==e){if(!n[kt](e)||!t[kt](e))return!0;if(gi(n[e],t[e]))return!0}return!1}function mi(){return Ii.extend.apply(this,[!0].concat([].slice.call(arguments)))}function yi(n,t){return e.addClass.call(n,t)}function wi(n,t){return e.removeClass.call(n,t)}function vt(n){return e.remove.call(n)}function dt(n,t){return e.find.call(n,t).eq(0)}}return Di&&Di.fn&&(Di.fn.overlayScrollbars=function(n,t){return Di.isPlainObject(n)?(Di.each(this,function(){y(this,n,t)}),this):y(this,n)}),y});

$(function() {
    $('.b-tabs__wrapperItemInner').overlayScrollbars({ callbacks: { onOverflowChanged: function (args) {
        var tree_item = $(this.getElements().content).find('div.b-tree');
        if (args.xScrollable)
            tree_item.addClass('hscroll');
        else
            tree_item.removeClass('hscroll');
        if (args.yScrollable)
            tree_item.addClass('vscroll');
        else
            tree_item.removeClass('vscroll');
    }}});
    $('.b-article__wrapper').overlayScrollbars({ callbacks: { onOverflowChanged: function (args) {
        var article_item = $(this.getElements().content).find('div.b-article__innerWrapper');
        if (1 == 0 || is_touch_device())
            article_item = $(this.getElements().content).find('table.b-article__footerLayout');
        if (args.xScrollable)
            article_item.addClass('hscroll');
        else
            article_item.removeClass('hscroll');
        if (args.yScrollable)
            $(this.getElements().padding).addClass('vscroll');
        else
            $(this.getElements().padding).removeClass('vscroll');
    }}});
});

/*js/libs/jquery.disable.text.select.js*/
(function($){if($.browser.mozilla){$.fn.disableTextSelect=function(){return this.each(function(){$(this).css({'MozUserSelect':'none'});});};$.fn.enableTextSelect=function(){return this.each(function(){$(this).css({'MozUserSelect':''});});};}else if($.browser.msie){$.fn.disableTextSelect=function(){return this.each(function(){$(this).bind('selectstart.disableTextSelect',function(){return false;});});};$.fn.enableTextSelect=function(){return this.each(function(){$(this).unbind('selectstart.disableTextSelect');});};}else{$.fn.disableTextSelect=function(){return this.each(function(){$(this).bind('mousedown.disableTextSelect',function(){return false;});});};$.fn.enableTextSelect=function(){return this.each(function(){$(this).unbind('mousedown.disableTextSelect');});};}})(jQuery);
/*js/libs/getscrollbarwidth.js*/
/*! Copyright (c) 2008 Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 */

/**
 * Gets the width of the OS scrollbar
 */
(function($) {
    var scrollbarWidth = 0;
    $.getScrollbarWidth = function() {
        if ( !scrollbarWidth ) {
            if ( $.browser.msie ) {
                var $textarea1 = $('<textarea cols="10" rows="2"></textarea>')
                        .css({ position: 'absolute', top: -1000, left: -1000 }).appendTo('body'),
                    $textarea2 = $('<textarea cols="10" rows="2" style="overflow: hidden;"></textarea>')
                        .css({ position: 'absolute', top: -1000, left: -1000 }).appendTo('body');
                scrollbarWidth = $textarea1.width() - $textarea2.width();
                $textarea1.add($textarea2).remove();
            } else {
                var $div = $('<div />')
                    .css({ width: 100, height: 100, overflow: 'auto', position: 'absolute', top: -1000, left: -1000 })
                    .prependTo('body').append('<div />').find('div')
                        .css({ width: '100%', height: 200 });
                scrollbarWidth = 100 - $div.width();
                $div.parent().remove();
            }
        }
        return scrollbarWidth;
    };
})(jQuery);
/*js/libs/jquery.highlight-3.yui.js*/
jQuery.fn.highlight=function(b){function a(e,j){if ($(e).hasClass("drex_highlight"))return 0;var l=0;if(e.nodeType==3){var k=e.data.toUpperCase().indexOf(j);if(k>=0){var h=document.createElement("span");h.className="drex_highlight";var f=e.splitText(k);var c=f.splitText(j.length);var d=f.cloneNode(true);h.appendChild(d);f.parentNode.replaceChild(h,f);l=1}}else{if(e.nodeType==1&&e.childNodes&&!/(script|style)/i.test(e.tagName)){for(var g=0;g<e.childNodes.length;++g){g+=a(e.childNodes[g],j)}}}return l}return this.each(function(){a(this,b.toUpperCase())})};jQuery.fn.removeHighlight=function(){return this.find("span.drex_highlight").each(function(){this.parentNode.firstChild.nodeName;with(this.parentNode){replaceChild(this.firstChild,this);normalize()}}).end()};

/*js/custom-button.js*/
function CustomButton( $submit ){
    this.$submit = $submit;
}


CustomButton.prototype = {
    constructor: CustomButton,

    CLASS_HOVERED: "m-button__hovered",
    CLASS_HOVERED_YES: "m-button__hovered__yes",
    CLASS_PRESSED: "m-button__pressed",
    CLASS_DISABLED: "m-button__disabled",

    $button: null,
    $submit: null,
    $text: null,

    run: function() {
        this.doSetDomCached();
        this.disableSelection();
        this.flipButtonText();
        this.doBindEvents();
    },

    doSetDomCached: function() {
        this.$button = this.$submit.closest( ".b-button" );
        this.$text = this.$button.find( ".b-button__text" );
    },

    disableSelection: function() {
        this.$button.disableTextSelect();
    },

    flipButtonText: function() {
        this.$text.text( this.$submit.prop( "value" ) );
        this.$submit.prop( "value", "" );
    },

    doBindEvents: function() {
        var that = this;

        this.$submit.on( "disable", function() {
            $( this ).prop( "disabled", "disabled" );
            that.$button.addClass( that.CLASS_DISABLED );
        });

        this.$submit.on( "enable", function() {
            $( this ).prop( "disabled", "" );
            that.$button.removeClass( that.CLASS_DISABLED );
        });


        this.$button.hover(
            function() {
                $( this ).addClass( that.CLASS_HOVERED_YES );

                if ( !$( this ).hasClass( that.CLASS_DISABLED ) ) {
                    if ( !$( this ).hasClass( that.CLASS_PRESSED ) ) {
                        $( this ).addClass( that.CLASS_HOVERED );
                    }
                }


            },

            function() {
                $( this ).removeClass( that.CLASS_HOVERED_YES );
                $( this ).removeClass( that.CLASS_HOVERED );
            }
        );

        $( this.$button ).on( "mousedown", function() {
            if ( !$( this ).hasClass( that.CLASS_DISABLED ) ) {
                $( this ).addClass( that.CLASS_PRESSED );
                $( this ).removeClass( that.CLASS_HOVERED );
            }

        });

        $( document ).on( "mouseup", function() {
            $( that.$button ).removeClass( that.CLASS_PRESSED );
            if ( that.$button.hasClass( that.CLASS_HOVERED_YES ) ) {
                that.$button.trigger( "mouseenter" );
            }
        });

        $( this.$button ).on( "click", function( e ) {
            if ( !$( e.target).hasClass( "b-button__submit" ) ) {
                if ( !that.$submit.is( ":disabled" ) ) {
                    that.$submit.trigger( "click" );
                }

            }
        });
    }

};
var DR_EXPLAIN = DR_EXPLAIN || {};
DR_EXPLAIN.namespace = function( ns_string ) {
    var parts = ns_string.split('.'),
        parent = DR_EXPLAIN,
        pl, i;
    if (parts[0] == "DR_EXPLAIN") {
        parts = parts.slice(1);
    }
    pl = parts.length;
    for (i = 0; i < pl; i += 1 ) {
        //create a property if it doesnt exist
        if (typeof parent[parts[i]] === 'undefined') {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};


    window.NavTree__ItemNode_Model = Backbone.Model.extend({
        defaults: {
            link: null,
            title: "",
            parent: null,
            childs: null,
            nodeIndex: null,
            isVisible: true,
            isSelected: false
        },
        
        hasParent: function() {
            if ( this.get( "parent" ) !== null ) {
                return true;
            }
            else {
                return false;
            }
        },

        hasChilds: function() {
            if ( this.get( "childs" ) !== null ) {
                return true;
            }
            else {
                return false;
            }
        },

        hasPrevItem: function() {
            var currIndex = this.collection.indexOf( this );
            var prevItem = this.collection.at( currIndex - 1 );
            if ( prevItem !== undefined ) {
                return true;
            }
            else {
                return false;
            }
        },

        hasNextItem: function() {
            var len = this.collection.length;
            if (len == 0)
                return false;
            var lastItem = this.collection.at(len - 1);
            if (lastItem !== this) {
                return true;
            }
            else {
                return false;
            }
        },
        
        getChildsCollection: function() {
            return this.get( "childs" );
        }
    });


    window.NavTree__ItemKeyword_Model = Backbone.Model.extend({
        defaults: {
            title: "",
            childs: null,
            links: null,
            keywordIndex: null,
            isVisible: true,
            isContextMenuVisible: false,
            isSelected: false
        },

        hasChilds: function() {
            if ( this.get( "childs" ) !== null ) {
                return true;
            }
            else {
                return false;
            }
        },

        hasOneLink: function() {
            if ( this.get( "links" ).length === 1 ) {
                return true;
            }
            else {
                return false;
            }
        },

        hasManyLinks: function() {
            if ( this.get( "links" ).length > 1 ) {
                return true;
            }
            else {
                return false;
            }
        },

        hasLinks: function() {
            if ( this.get( "links" ).length > 0 ) {
                return true;
            }
            else {
                return false;
            }
        },


        getChildsCollection: function() {
            return this.get( "childs" );
        }
    });


    window.NavTree__ItemsNodes_Collection = Backbone.Collection.extend({
        model: NavTree__ItemNode_Model,

        initialize: function( models, options ) {

        }
    });


    window.NavTree__ItemsKeywords_Collection = Backbone.Collection.extend({
        model: NavTree__ItemKeyword_Model,

        initialize: function( models, options ) {

        }
    });


    window.NavTree__ItemDecoration_Keyword_View =
    Backbone.View.extend({
        tagName: "span",
        className: "b-tree__spacer",
        template: null,

        html_root: '<span class="b-tree__spacer"></span>',

        html_index_item_folder: '<span class="b-tree__i_indexitem"><span class="b-tree__i_indexitem_inner"></span></span>',
        html_index_item_article: '<span class="b-tree__i_indexitem"><span class="b-tree__i_indexitem_inner"></span></span>',

        initialize: function( options ) {
            this.isRoot = options.isRoot;
            this.isFolder = this.model.hasManyLinks();
            this.isArticle = !this.isFolder;
        },

        render: function() {
            if ( this.isRoot ) {
                if ( this.isFolder ) {
                    $output = this.renderFolder();
                }
                else {
                    $output = this.renderArticle();
                }
            }
            else {
                $output = this.renderChilds(); 
            }

            return $output;
        },


        
        renderFolder: function() {
            return this.renderFolderIcon();
        },

        renderFolderExpander: function() {
            var $output = $( this.html_root );

            return $output;
        },

        renderFolderIcon: function() {
            var $output = $( this.html_root );

            $output.append( $( this.html_index_item_folder ) );
            return $output;
        },

        renderArticle: function() {
            var $output = $( this.html_root );
            $output = $output.append( $( this.html_index_item_article ) );

            return $output;
        },

        renderChilds: function( ) {
            var $output = $( this.html_root );

            return $output;
        }
    });


    window.NavTree__ItemDecoration_Search_View = Backbone.View.extend({
    
        tagName: "span",
        className: "b-tree__spacer",
        template: null,

        html_root: '<span class="b-tree__spacer"></span>',
        html_folder_closed: '<span class="b-tree__i_folder_closed"><span class="b-tree__i_folder_closed_inner"></span></span>',
        html_article: '<span class="b-tree__i_article"><span class="b-tree__i_article_inner"></span></span>',
    
        initialize: function( options ) {
            this.isRoot = options.isRoot;
            this.isFolder = this.model.hasChilds();
            this.isArticle = !this.isFolder;
        },

        render: function() {
            if ( this.isRoot ) {
                if ( this.isFolder ) {
                    $output = this.renderFolder();
                }
                else {
                    $output = this.renderArticle();
                }
            }
            else {
                $output = this.renderChilds(); 
            }

            return $output;
        },
    
    
        renderFolder: function() {
            return this.renderFolderIcon();
        },

        renderFolderExpander: function() {
            var $output = $( this.html_root );

            return $output;
        },

        renderFolderIcon: function() {
            var $output = $( this.html_root );

            $output.append( $( this.html_folder_closed ) );
            return $output;
        },

        renderArticle: function() {
            var $output = $( this.html_root );
            $output = $output.append( $( this.html_article ) );
            
            return $output;
        },

        renderChilds: function( ) {
            var $output = $( this.html_root );

            return $output;
        }
    });


    window.NavTree__Item_View = Backbone.View.extend({
        tagName: "li",
        className: "b-tree__item",
        template: null,
        itemDecorationView: null,


        initialize: function( options ) {
            this.dataManager = DR_EXPLAIN.dataManager;
        },


        render: function( childsOutput ) {
            var tpl = '<div class="b-tree__itemContent" title="<%- title %>"><span class="b-tree__itemText"><a href="<%- link %>" class="b-tree__itemLink"><%- title %></a></span></div>';
            var tplSelected = '<div class="b-tree__itemContent m-tree__itemContent__selected" title="<%- title %>"><span class="b-tree__itemText m-tree__itemText__selected"><%- title %></span></div>';
            if ( this.model.get( "isSelected" ) ) {
                this.template = _.template( tplSelected );
            }
            else {
                this.template = _.template( tpl );
            }

            $(this.el).html(this.template(this.model.toJSON()));
            
            var decoration = this.getDecoration( );
            $( this.el ).children( ".b-tree__itemContent" ).prepend( decoration );
            
            return this;
        }
    });


    window.NavTree__ItemKeyword_View = Backbone.View.extend({
        tagName: "li",
        className: "b-tree__item",
        template: null,
        itemDecorationView: null,


        initialize: function( options ) {

        },

        toggleFolder: function() {
            if ( this.model.get( "isContextMenuVisible" ) ) {
                this.showFolder();
            }
            else {
                this.hideFolder();
            }
        },

        showFolder: function(  ) {
            var $content = this.$el.children( "div" );
            var $folder = $content.find( ".b-tree__i_folder_closed" );
            this.toggleClasses( $folder );
        },

        hideFolder: function(  ) {
            var $content = this.$el.children( "div" );
            var $folder = $content.find( ".b-tree__i_folder_opened" );
            this.toggleClasses( $folder );
        },

        toggleClasses: function( $folder ) {
            $folder.toggleClass( "b-tree__i_folder_opened b-tree__i_folder_closed" );
            $folder.children( "span" ).toggleClass( "b-tree__i_folder_opened_inner b-tree__i_folder_closed_inner" );
        },

        render: function( childsOutput ) {
            var tpl = '';

            if ( this.model.hasOneLink() ) {
                var nodeModel = this.model.get( "links" ).at(0);
                this.model.set({ link: nodeModel.get( "link" ) });
                tpl = '<div class="b-tree__itemContent" title="<%- title %>"><span class="b-tree__itemText"><a href="<%- link %>" class="b-tree__itemLink"><%- title %></a></span></div>';
            }
            else {
                tpl = '<div class="b-tree__itemContent" title="<%- title %>"><span class="b-tree__itemText"><span class="b-tree__itemLink"><%- title %></span></span></div>';
            }

            this.template = _.template( tpl );
            $(this.el).html(this.template(this.model.toJSON()));
            if ( childsOutput !== null ) {
                $( this.el ).append( $( childsOutput ) );

            }
            this.bindEvents();
            var decoration = this.getDecoration( );
            $( this.el ).children( ".b-tree__itemContent" ).prepend( decoration );
            $( this.el ).prop( "id", "treeElement_" + this.model.cid );

            if ( !this.model.get( "isVisible" ) ) {
                this.hideExpander();
            }

            return this;
        },

        bindEvents: function() {
            var that = this;

            if ( this.model.hasManyLinks() ) {
                this.$el.children( "div" ).on( "click", function(e){
                    var currContextMenuVisibleStatus = that.model.get( "isContextMenuVisible" );
                    that.model.set({ "isContextMenuVisible": !currContextMenuVisibleStatus });
                    e.stopPropagation();
                });

                this.model.on(
                    "change:isContextMenuVisible",
                    this.toggleFolder,
                    this
                );
            }
        },


        getDecoration: function( ) {
            var $output = null;

            var currModel = this.model;
            var isRoot = true;
            do {
                var itemDecorationView = new NavTree__ItemDecoration_Keyword_View({
                    model: currModel,
                    isRoot: isRoot
                });
                if ( $output === null ) {
                    $output = itemDecorationView.render();
                }
                else {
                    $output = ( itemDecorationView.render() ).add( $output );
                }

                currModel = currModel.get( "parent" );
                isRoot = false;

            } while ( currModel !== null );

            return $output;
        }
    });


    window.NavTree__ItemSearch_View = NavTree__Item_View.extend({

        getDecoration: function( ) {
            var $output = null;

            var currModel = this.model;
            var isRoot = true;
            do {
                var itemDecorationView = new NavTree__ItemDecoration_Search_View({
                    model: currModel,
                    isRoot: isRoot
                });
                if ( $output === null ) {
                    $output = itemDecorationView.render();
                }
                else {
                    $output = ( itemDecorationView.render() ).add( $output );
                }

                currModel = currModel.get( "parent" );
                isRoot = false;

            } while ( currModel !== null );

            return $output;
        }
    });


    window.NavTree__Items_View = Backbone.View.extend({
        tagName: "ul",
        className: "b-tree__items",

        itemsViewArr: null,

        initialize: function( options ) {
            this.itemsViewArr = options.itemsViewArr;
        },

        render: function() {
            for ( var cid in this.itemsViewArr ) {
                var itemView = this.itemsViewArr[ cid ];
                var childsOutput = null;
                if ( itemView.model.hasChilds() ) {
                    childsOutput = itemView.model.getChildsCollection().itemsView.render().el;
                }
                $( this.el ).append( itemView.render( childsOutput ).el );
            }
            return this;
        },


        getViewByModel: function( model ) {
            return this.itemsViewArr[ model.cid ];
        },

        reRenderItems: function() {
            for ( var index = 0; index < this.itemsViewArr.length; index += 1 ) {
                var itemView = this.itemsViewArr[ index ];
                itemView.reRender();
            }
            return this;
        }
    });


    window.NavTree__Menu_Item_View = NavTree__Item_View.extend({
    
        render: function( childsOutput ) {
            var bVisible = this.model.get( "isVisible" );
            var decoration = this.getDecoration(bVisible);
            var title = this.model.get("title");
            var link = this.model.get("link");
            var elHtml = '';
            if ( this.model.get( "isSelected" ) )
            {
                var div = document.createElement("div");
                div.className = "b-tree__itemContent m-tree__itemContent__selected";
                div.title = title;
                for (var i = 0; i < decoration.length; ++i)
                  div.appendChild(decoration[i]);
                
                var span = document.createElement("span");
                span.className = "b-tree__itemText m-tree__itemText__selected";
                span.appendChild(document.createTextNode(title));
                div.appendChild(span);
                this.el.appendChild(div);
            }
            else
            {
                var div = document.createElement("div");
                div.className = "b-tree__itemContent";
                div.title = title;
                for (var i = 0; i < decoration.length; ++i)
                  div.appendChild(decoration[i]);

                var span = document.createElement("span");
                span.className = "b-tree__itemText";
                var aEl = document.createElement("a");
                aEl.href = link;
                aEl.className = "b-tree__itemLink";
                aEl.appendChild(document.createTextNode(title));
                span.appendChild(aEl);
                div.appendChild(span);
                this.el.appendChild(div);
            }

            
            if ( childsOutput !== null ) {
                $( this.el ).append( $( childsOutput ) );
                this.bindEvents();
            }
            
            if ( !bVisible ) {
                this.$el.children( "ul" ).hide();
                this.model.set({ "isVisible": 0 });
            }
            return this;
        }
    });

    window.NavTree__View = Backbone.View.extend({

        tagName: "div",
        className: "b-tree",
        models: [],
        itemsViewArr: [],

        initialize: function( options ) {
            this.models = [];
            this.$navTree = options.$navTree;
            this.doCreateItemsViewArr();
        },

        doCreateItemsViewArr: function() {
            if (this.collection)
                this.fillItemsViewArrWithCollection( this.collection );
        },

        fillItemsViewArrWithCollection: function( collection ) {
            var that = this;
            var itemsViewArr = {};
            collection.each(function( concreteModel, index  ){
                var itemView = that.createNavTreeItemView( concreteModel );
                itemsViewArr[ concreteModel.cid ] = itemView;
                if ( concreteModel.hasChilds() ) {
                    that.fillItemsViewArrWithCollection( concreteModel.get( "childs" ) );
                }

                that.models.push( concreteModel );
                that.itemsViewArr[ concreteModel.cid ] = itemView;
            });

            collection.itemsView = new NavTree__Items_View({
                itemsViewArr: itemsViewArr
            });
        },

        render: function() {
            var $navTree = this.$navTree.find( ".b-tree" );
            $( this.el ).append( '<table class="b-tree__layout" cellspacing="0"><tr><td class="b-tree__layoutSide" />' );
            if (this.collection)
                $( this.el ).find( "td" ).append( this.collection.itemsView.render().el );

            $navTree.empty();
            $navTree.append( this.$el.children( "*" ) );

        },

        createNavTreeItemView: function( model ) {
            return new NavTree__Menu_Item_View({
                model: model
            });
        }
    });


    window.NavTree__Keywords_View = NavTree__View.extend({

        initialize: function( options ) {
            this.models = [];
            this.$navTree = options.$navTree;
            this.doCreateItemsViewArr();

            this.contextMenuView = null;
            this.bindContextMenuEvents();
        },

        createNavTreeItemView: function( model ) {
            return new NavTree__ItemKeyword_View({
                model: model
            });
        },

        bindContextMenuEvents: function() {
            var flatCollection = new NavTree__ItemsKeywords_Collection( this.models );
            flatCollection.on(
                "change:isContextMenuVisible",
                this.onContextMenuVisibleChange,
                this
            );

            $( document ).on( "click", function() {
                var openedFolderModels = flatCollection.where({ isContextMenuVisible: true });
                if ( openedFolderModels.length > 0 ) {
                    for ( var index = 0; index < openedFolderModels.length; index += 1 ) {
                        openedFolderModels[ index ].set({ isContextMenuVisible: false });
                    }
                }

            });
        },

        onContextMenuVisibleChange: function( model, showContextMenu ) {
            var view = this.getViewByModel( model );

            if ( showContextMenu ) {
                if ( this.contextMenuView === null ) {
                    this.contextMenuView = new NavTree__ContextMenu_View();
                    this.contextMenuView.setView( view );

                    var app = DR_EXPLAIN;
                    app.urlEncoder.doBindOpenNextPageWithEncodedStringToLinksInKeywordContextMenu();
                }

                if ( this.contextMenuView.model !== model ) {
                    this.contextMenuView.hideOld();
                }

                this.contextMenuView.setView( view );
                this.contextMenuView.show();
            }
            else {
                this.contextMenuView.hide();
            }
        },

        getViewByModel: function( model ) {
            return this.itemsViewArr[ model.cid ];
        }
    });


    window.NavTree__Search_View = NavTree__View.extend({

        createNavTreeItemView: function( model ) {
            return new NavTree__ItemSearch_View({
                model: model
            });
        }
    });


    window.NavTree__ContextMenu_View = Backbone.View.extend({

        tagName: "div",
        className: "b-tree",
        models: [],

        initialize: function( options ) {
            this.$el = $( "#keywordContextMenu" );
        },

        show: function() {
            var that = this;

            var tpl = '<li class="b-tree__item" title="<%- title %>"><div class="b-tree__itemContent"><span class="b-tree__spacer"><span class="b-tree__i_article"><span class="b-tree__i_article_inner"></span></span></span><span class="b-tree__itemText"><a href="<%- link %>" class="b-tree__itemLink"><%- title %></a></span></div></li>';
            this.template = _.template( tpl );

            var $container = $( '<ul class="b-tree__items"></ul>' );

            this.$el.find( "td" ).empty();
            this.model.get( "links" ).each(function( concreteModel, index ) {
                $container.append(that.template(concreteModel.toJSON()));
            });

            var $elemInTree = this.view.$el.children( "div" ).children( ".b-tree__itemText" );
            var elemInTreePos = $elemInTree.offset();

            var styleOptions = {
                top: elemInTreePos.top + $elemInTree.height() + "px"
            };

            if ($('html').attr('dir') === 'rtl') {
                styleOptions.right = $(window).width() - (elemInTreePos.left + $elemInTree.outerWidth());
            } else {
                styleOptions.left = elemInTreePos.left + "px";
            }

            this.$el.css(styleOptions);

            this.$el.find( "td" ).append( $container );

            this.$el.show();
            this.$el.addClass( "m-tree__contextMenu__visible" );

            this.$el.trigger( "show", [ $elemInTree ] );
        },

        hide: function() {

            this.$el.hide();
            this.$el.removeClass( "m-tree__contextMenu__visible" );
        },

        hideOld: function() {
            this.model.set({ "isContextMenuVisible": false });
        },

        setView: function( view ) {
            this.view = view;
            this.model = view.model;
        }
    });


DR_EXPLAIN.namespace('DR_EXPLAIN.utils.base64');DR_EXPLAIN.utils.base64={encString:'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',encStringS:'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',encode:function(inp,uc,safe){if(arguments.length<1)return null;var readBuf=new Array();if(arguments.length>=3&&safe!=true&&safe!=false)return null;var enc=(arguments.length>=3&&safe)?this.encStringS:this.encString;var b=(typeof inp=="string");if(!b&&(typeof inp!="object")&&!(inp instanceof Array))return null;if(arguments.length<2){uc=true;}
if(uc!=true&&uc!=false)return null;var n=(!b||!uc)?1:2;var out='';var c=0;var j=1;var l=0;var s=0;for(var i=0;i<inp.length;i++){c=(b)?inp.charCodeAt(i):inp[i];for(var k=n-1;k>=0;k--){readBuf[k]=c&0xff;c>>=8;}
for(var m=0;m<n;m++){l=((l<<8)&0xff00)|readBuf[m];s=(0x3f<<(2*j))&l;l-=s;out+=enc.charAt(s>>(2*j));j++;if(j==4){out+=enc.charAt(l&0x3f);j=1;}}}
switch(j){case 2:s=0x3f&(16*l);out+=enc.charAt(s);out+='==';break;case 3:s=0x3f&(4*l);out+=enc.charAt(s);out+='=';break;default:break;}
return out;},decode:function(inp,outType,safe,lax){if(arguments.length<1)return null;if(arguments.length<2)outType=0;if(outType!=0&&outType!=1&&outType!=2)return null;if(arguments.length>=3&&safe!=true&&safe!=false)return null;var sEnc=(arguments.length>=3&&safe)?this.encStringS:this.encString;if(arguments.length>=4&&lax!=true&&lax!=false)return null;var aDec=new Object();for(var p=0;p<sEnc.length;p++){aDec[sEnc.charAt(p)]=p;}
var out=(outType==0)?new Array():'';lax=(arguments.length==4&&lax);var l=0;var i=0;var j=0;var c=0;var k=0;var end=inp.length;var C='';if(lax){var inpS='';var ignore=false;var cnt=0;for(var p=1;p<=inp.length;p++){c=inp.charAt(end-p);if(c=='='){if(!ignore){if(++cnt>1)ignore=true;}else{continue;}}else if(undefined!=aDec[c]){if(!ignore)ignore=true;inpS=c+inpS;}}
for(var p=0;p<=cnt;p++){if(p==2)return null;if((inpS.length+cnt)%4==0)break;}
if(inpS.length%4==1)return null;inp=inpS;end=inp.length;}else{if(inp.length%4>0)return null;for(var p=0;p<2;p++){if(inp.charAt(end-1)=='='){end--;}else{break;}}}
for(i=0;i<end;i++){l<<=6;if(undefined==(c=aDec[inp.charAt(i)]))return null;l|=(c&0x3f);if(j==0){j++;continue;}
if(outType==2){if(k==1){out+=String.fromCharCode(l>>(2*(3-j)));l&=~(0xffff<<(2*(3-j)));}
k=++k%2;}else{if(outType==0){out.push(l>>(2*(3-j)));}else{out+=String.fromCharCode(l>>(2*(3-j)));}
l&=~(0xff<<(2*(3-j)));}
j=++j%4;}
if(outType==2&&k==1)return null;return out;}};


DR_EXPLAIN.namespace('DR_EXPLAIN.utils.utf8');DR_EXPLAIN.utils.utf8={encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+1);c3=utftext.charCodeAt(i+2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}};


DR_EXPLAIN.namespace('DR_EXPLAIN.utils');DR_EXPLAIN.utils={base64:DR_EXPLAIN.utils.base64,utf8:DR_EXPLAIN.utils.utf8,escapeUrl:function(oldUrl)
{var result=oldUrl.replace(/%/g,"%25");result=result.replace(/'/g,"%27");result=result.replace(/;/g,"%3b");return result;},escapeXml:function(str)
{var result=str.replace(/</g,"&lt;");result=result.replace(/>/g,"&gt;");result=result.replace(/&/g,"&amp;");return result;},str2ar:function(str)
{var retVal=new Array();for(var i=0;i<str.length;++i)
retVal.push(str.charCodeAt(i));return retVal;},ar2str:function(arr)
{var str="";for(var i=0;i<arr.length;++i)
str+=String.fromCharCode(arr[i]);return str;},bitsToByte:function(bits,cnt)
{var result=new Array();while(bits.length%cnt)
bits.push(0);var MyByte=0;for(var i=0;i<bits.length;++i){MyByte+=(bits[i]<<(i%cnt));if((i%cnt)==cnt-1){result.push(MyByte);MyByte=0;}}
return result;},byteToBits:function(bytes,cnt)
{var result=new Array();for(var i=0;i<bytes.length;i++){for(var j=0;j<cnt;++j){result.push((bytes[i]&(1<<j))>>>j);}}
return result;},intDiv:function(nom,denom)
{nom+=denom-1-(nom%denom);return Math.floor(nom/denom);},encodingPrefixLen:function(bitsLen,cnt)
{var bytesLen=this.intDiv(bitsLen+cnt-1,cnt);return this.intDiv(bytesLen+cnt-1,cnt);}};



/*js/placeholder.js*/
function InputPlaceholder( $input, $label, useNativePlaceholderIfPossible ) {
    this.$input = $input;
    this.$label = $label;

    if ( ( useNativePlaceholderIfPossible !== true) && ( useNativePlaceholderIfPossible !== false ) ) {
        this.useNativePlaceholderIfPossible = true;
    }
    else {
        this.useNativePlaceholderIfPossible = useNativePlaceholderIfPossible;
    }


}

InputPlaceholder.prototype = {
    constructor: InputPlaceholder,

    isNativePlaceholderSupport: false,
    useNativePlaceholderIfPossible: false,

    $input: null,
    $label: null,

    doDefineNativePlaceholderSupport: function() {
        if ( Modernizr.input.placeholder ) {
            this.isNativePlaceholderSupport = false;
        }
    },

    run: function() {
        this.doDefineNativePlaceholderSupport();

        if ( this.useNativePlaceholderIfPossible && this.isNativePlaceholderSupport ) {
            this.HideLabel();
            this.doInsertNativePlaceholderProp();
        }
        else {
            this.doBindCustomPlaceholderEvents();
            this.changeLabelVisibilityState();
        }
    },

    doInsertNativePlaceholderProp: function() {
        this.$input.prop( "placeholder", this.$label.text() );
    },

    ShowLabel: function() {
        this.$label.show();
    },

    HideLabel: function() {
        this.$label.hide();
    },

    doBindCustomPlaceholderEvents: function() {
        var that = this;
        this.$input.on( "keypress keydown keyup click blur focus paste keypressSync", function()
        {
            that.changeLabelVisibilityState();
        }
        );
    },

    changeLabelVisibilityState: function() {
        if ( this.isEmptyInputValue() ) {
            this.ShowLabel();
        }
        else {
            this.HideLabel();
        }
    },

    getInputValue: function() {
        return this.$input.prop( "value" );
    },

    isEmptyInputValue: function() {
        if ( this.getInputValue() === "" ) {
            return true;
        }
        else {
            return false;
        }
    }
};
/*js/input-sync.js*/
function InputSync( $inputArr ) {
    this.$inputArr = $inputArr;
}

InputSync.prototype ={
    constructor: InputSync,

    run: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        var that = this;
        this.$inputArr.on( 'keypress keydown keyup click blur focus paste', function(){
            that.sync( $( this ) );
        });
    },

    sync: function( $sourceInput ) {
        var inputText = $sourceInput.prop( "value" );
        this.$inputArr.not( $sourceInput ).prop( "value", inputText ).trigger( "keypressSync" );
    }
};
DR_EXPLAIN.namespace( 'DR_EXPLAIN.data_menu' );
DR_EXPLAIN.data_menu = {
    // menu
    DREX_NODE_NAMES: ["CSET Help","Table of Contents","Introduction to CSET","System Basics","Title Bar","Operation Menus","Main CSET Window Sections","Initiation Scenarios","Glossary","Frequently Asked Questions (FAQs)","CSET Revision History","Introduction","Overview","Disclaimer","System Requirements","Installation Procedure","Evaluation Preparation","Register a User Account","Import/Export a CSET Assessment","CSET Navigation","Tools Menu","Resource Library","User Profile","Help Menu","Preparation Menu","Assessments Menu","Results Menu","Prepare Section","Diagram Screen","Assessment Section","Results Section","Standalone Install","Enterprise Install","Importing a .csetw File","Importing a .cset File","Exporting a CSET Assessment","Assessment Documents","Parameter Editor","Protected Features","Export to Excel","Import Module","Module Builder","Trend and Compare Multiple Assessments (Aggregation)","Search Screen","Browse Screen","User Profile","Change Password","Accessibility Document","Keyboard Shortcuts","Terms of Use","About CSET","Advisory","Diagram","CSET Landing Page","Assessment Configuration","Assessment Information","CSET Security Assurance Level (SAL) Selection","Cybersecurity Standard Selection","Maturity Model Selection","Cybersecurity Framework Description","Mode Selection","Diagram Section","Diagram Screen Layout","Diagram Inventory","Drawing the Network Diagram","Home  Menu Options","Format Menu Options","Assessment Screen","Analysis Screen","Reports Section","Submit Feedback","Share Data with DHS","Using the Stand-alone","Create a New Module","Add Requirements","Add Questions","Manage Documents","Work with Multiple Assessments","Trend","Compare","Contacts Management","Sector and Demographic Information Screen","Simple SAL Selection","General SAL Selection","FIPS 199 SAL Selection","CSET Standards and Groupings","C2M2 Maturity Indicator Levels","CFATS Tiers","Framework Implementation Tiers","Assessment Modes","Adding Links","Adding Text","Adding Symbols","Adding Zones","Using the Multiple Services Component (MSC)","Component Types","Home- File Menu","Home- Edit Menu","Home- View Menu","Home- Arrange Menu","Home- Extras Menu","Home- Help Menu","Network Deficiency","Maturity Assessment Screen","Assessment Modes","Assessment Categories","Question Details, Resources, and Comments","Component Information","Dashboard in Questions/Requirements Mode","Control Priorities","Standards Analysis","Category Rankings","Components Summary","Executive Summary, Overview, and Comments Screen","Report Builder","Executive Summary Report","Site Summary Report","Site Detail Report","Site Cyber Security Plan","Observation Tear Out Sheets","Clone Module","General SAL – Injury","General SAL - Hospital","General SAL - Death","General SAL - Capital Assets","General SAL - Economic Impact","General SAL - Environmental Cleanup","General SAL Considerations","AWWA","Diagram Keyboard Shortcuts","Network Analysis Rules","Assessment Screen Questions Mode","Assessment Screen Requirements Mode","Details Section Question Mode","Supplemental Section","Comments Section","Documents Section","References Section","Observations Section","Feedback Section","Question Filter","Network Component Overrides","Standards Summary","Ranked Categories","Results By Category Single Standard","Ranked Categories","Results by Category","Component Type","Network Warnings","Details Section Requirements Mode","Question Observations","Results by Category Multiple Standards"],
    DREX_NODE_LINKS: ["index.htm","table_of_contents.htm","introduction_to_cset.htm","system_basics.htm","title_bar.htm","operation_menus.htm","main_cset_window_sections.htm","initiation_scenarios.htm","glossary.htm","frequently_asked_questions__faqs_.htm","cset_revision_history.htm","introduction.htm","overview.htm","disclaimer.htm","system_requirements.htm","installation_procedure.htm","evaluation_preparation.htm","register_a_user_account.htm","import_export_a_cset_assessment.htm","cset_navigation.htm","tools_menu.htm","resource_library_window.htm","user_profile_1.htm","help_menu.htm","preparation_menu.htm","assessments_menu.htm","results_menu.htm","prepare_section.htm","diagram_screen.htm","assessment_section.htm","results_section.htm","standalone_install.htm","enterprise_install.htm","importing_a__csetw_file.htm","importing_a__cset_file.htm","exporting_a_cset_assessment.htm","document_manager_window.htm","parameter_editor_window.htm","protected_features_window.htm","export_to_excel.htm","import_module.htm","module_builder.htm","trend_and_compare_multiple_assessments__aggregation_.htm","search_screen.htm","browse_screen.htm","user_profile_2.htm","change_password.htm","accessibility_document.htm","keyboard_shortcuts.htm","terms_of_use.htm","about_cset.htm","advisory.htm","diagram.htm","prepare_start_new_assessment.htm","prepare_assessment_info.htm","assessment_information.htm","prepare_sal_selection.htm","prepare_standard_selection.htm","maturity_model_selection.htm","cybersecurity_framework_description.htm","prepare_mode_selection.htm","diagram_section.htm","diagram_screen_layout.htm","diagram_inventory.htm","drawing_the_network_diagram.htm","home__menu_options.htm","format_menu_options.htm","questions_screen.htm","analysis_screen.htm","reports_screen.htm","submit_feedback.htm","share_data_with_dhs.htm","using_the_stand_alone.htm","create_a_new_module.htm","add_requirements.htm","add_questions.htm","manage_documents.htm","work_with_multiple_assessments.htm","trend.htm","compare.htm","contacts_management.htm","prepare_demographics_selection.htm","sal_window_simple_selection.htm","sal_window_general_selection.htm","sal_window_fips_selection.htm","cset_standards_and_groupings.htm","c2m2_maturity_indicator_levels.htm","cfats_tiers.htm","framework_implementation_tiers.htm","assessment_modes_1.htm","adding_links.htm","adding_text.htm","adding_symbols.htm","adding_zones.htm","using_the_multiple_services_component__msc_.htm","component_types.htm","home__file_menu.htm","home__edit_menu.htm","home__view_menu.htm","home__arrange_menu.htm","home__extras_menu.htm","home__help_menu.htm","network_deficiency.htm","maturity_assessment_screen.htm","assessment_modes_2.htm","assessment_categories.htm","question_details__resources__and_comments.htm","component_information.htm","dashboard_in_questions_requirements_mode.htm","results_ranked_questions_screen.htm","standards_analysis.htm","category_rankings.htm","components_summary.htm","executive_summary__overview__and_comments_screen.htm","report_builder.htm","executive_summary_report.htm","site_summary_report.htm","site_detail_report.htm","site_cyber_security_plan.htm","observation_tear_out_sheets.htm","clone_module.htm","general_sal___injury.htm","general_sal___hospital.htm","general_sal___death.htm","general_sal___capital_assets.htm","general_sal___economic_impact.htm","general_sal___environmental_cleanup.htm","general_sal_considerations.htm","awwa.htm","diagram_keyboard_shortcuts.htm","network_analysis_rules.htm","assessment_screen_questions_mode.htm","assessment_screen_requirements_mode.htm","details_section_question_mode.htm","supplemental_section.htm","comments_section.htm","documents_section.htm","references_section.htm","observations_section.htm","feedback_section.htm","question_filter.htm","component_type_override.htm","results_standards_summary_screen.htm","results_standards_ranked_categories_screen.htm","results_standards_results_by_category_screen.htm","ranked_categories.htm","results_by_category.htm","component_type.htm","network_warnings.htm","details_section_requirements_mode.htm","questions_discoveries_window.htm","results_by_category_multiple_standards.htm"],
    DREX_NODE_CHILD_START: [1,11,11,14,20,24,27,31,31,31,31,31,31,31,31,31,33,33,33,36,36,43,45,47,52,52,53,53,61,67,68,72,73,73,73,73,73,73,73,73,73,73,77,80,80,80,80,80,80,80,80,80,80,80,80,80,82,85,88,88,89,90,90,90,90,96,102,103,108,113,120,120,120,120,121,121,121,121,121,121,121,121,121,121,128,128,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,130,131,131,133,133,141,142,142,142,145,145,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,150,150,150,150,150,151,151,151,151,151,151,152,152,152,152,152,152,152],
    DREX_NODE_CHILD_END: [11,11,14,20,24,27,31,31,31,31,31,31,31,31,31,33,33,33,36,36,43,45,47,52,52,53,53,61,67,68,72,73,73,73,73,73,73,73,73,73,73,77,80,80,80,80,80,80,80,80,80,80,80,80,80,82,85,88,88,89,90,90,90,90,96,102,103,108,113,120,120,120,120,121,121,121,121,121,121,121,121,121,121,128,128,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,130,131,131,133,133,141,142,142,142,145,145,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,150,150,150,150,150,151,151,151,151,151,151,152,152,152,152,152,152,152,152],
    DREX_MENU_TYPE: 1,
    DREX_HAS_ROOT_NODE: 0};


/*js/drexplain/drexplain.data.index.js*/
/*loaded separately*/
DR_EXPLAIN.namespace( 'DR_EXPLAIN.data_search' );
DR_EXPLAIN.data_search = {

    DREXPLAIN_NOT_FOUND: "Nothing was found",
    DREXPLAIN_EMPTY_STRING: "Please enter text for search",
    DREXPLAIN_IN_PROGRESS: "Searching...",
    DREXPLAIN_PREVIEW_MODE_SEARCH_IS_DISABLED_NOTICE : "In the preview mode the search is disabled.",
    DREXPLAIN_ERROR_LOCAL_SEARCH : "Unable to download search index files. Please, upload HTML files to a web server and access them via URL starting with https:// or http:// .",
    DREXPLAIN_ERROR_REMOTE_SEARCH : "Unable to download search index files. Please, ask your web server administrator to enable the downloading of files with .json extension or contact help@drexplain.com. Error code: {0}"

};


DR_EXPLAIN.namespace( 'DR_EXPLAIN.data_resize' );
DR_EXPLAIN.data_resize = {

    DREXPLAIN_FIT_HEIGHT_TO_WINDOW: 1,
    DREX_INITIAL_MENU_WIDTH: "240px"

};



