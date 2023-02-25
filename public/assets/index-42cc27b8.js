(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Lc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Mc(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Fe(s)?ny(s):Mc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Fe(t))return t;if(Ce(t))return t}}const Zm=/;(?![^(]*\))/g,ey=/:([^]+)/,ty=/\/\*.*?\*\//gs;function ny(t){const e={};return t.replace(ty,"").split(Zm).forEach(n=>{if(n){const s=n.split(ey);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Uc(t){let e="";if(Fe(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const s=Uc(t[n]);s&&(e+=s+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const sy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ry=Lc(sy);function Od(t){return!!t||t===""}const Kt=t=>Fe(t)?t:t==null?"":Q(t)||Ce(t)&&(t.toString===Ld||!Y(t.toString))?JSON.stringify(t,Pd,2):String(t),Pd=(t,e)=>e&&e.__v_isRef?Pd(t,e.value):ws(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:xd(e)?{[`Set(${e.size})`]:[...e.values()]}:Ce(e)&&!Q(e)&&!Md(e)?String(e):e,be={},_s=[],Lt=()=>{},iy=()=>!1,oy=/^on[^a-z]/,fo=t=>oy.test(t),Fc=t=>t.startsWith("onUpdate:"),nt=Object.assign,Bc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ay=Object.prototype.hasOwnProperty,oe=(t,e)=>ay.call(t,e),Q=Array.isArray,ws=t=>po(t)==="[object Map]",xd=t=>po(t)==="[object Set]",Y=t=>typeof t=="function",Fe=t=>typeof t=="string",$c=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",Vc=t=>Ce(t)&&Y(t.then)&&Y(t.catch),Ld=Object.prototype.toString,po=t=>Ld.call(t),cy=t=>po(t).slice(8,-1),Md=t=>po(t)==="[object Object]",jc=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ni=Lc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),go=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ly=/-(\w)/g,Qt=go(t=>t.replace(ly,(e,n)=>n?n.toUpperCase():"")),uy=/\B([A-Z])/g,Vs=go(t=>t.replace(uy,"-$1").toLowerCase()),mo=go(t=>t.charAt(0).toUpperCase()+t.slice(1)),ca=go(t=>t?`on${mo(t)}`:""),br=(t,e)=>!Object.is(t,e),Di=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ji=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Fa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},hy=t=>{const e=Fe(t)?Number(t):NaN;return isNaN(e)?t:e};let yu;const dy=()=>yu||(yu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Dt;class fy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Dt,!e&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Dt;try{return Dt=this,e()}finally{Dt=n}}}on(){Dt=this}off(){Dt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function py(t,e=Dt){e&&e.active&&e.effects.push(t)}function gy(){return Dt}const qc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ud=t=>(t.w&Rn)>0,Fd=t=>(t.n&Rn)>0,my=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Rn},yy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Ud(r)&&!Fd(r)?r.delete(t):e[n++]=r,r.w&=~Rn,r.n&=~Rn}e.length=n}},Ba=new WeakMap;let ir=0,Rn=1;const $a=30;let Pt;const Qn=Symbol(""),Va=Symbol("");class Hc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,py(this,s)}run(){if(!this.active)return this.fn();let e=Pt,n=Tn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Pt,Pt=this,Tn=!0,Rn=1<<++ir,ir<=$a?my(this):vu(this),this.fn()}finally{ir<=$a&&yy(this),Rn=1<<--ir,Pt=this.parent,Tn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pt===this?this.deferStop=!0:this.active&&(vu(this),this.onStop&&this.onStop(),this.active=!1)}}function vu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Tn=!0;const Bd=[];function js(){Bd.push(Tn),Tn=!1}function qs(){const t=Bd.pop();Tn=t===void 0?!0:t}function mt(t,e,n){if(Tn&&Pt){let s=Ba.get(t);s||Ba.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=qc()),$d(r)}}function $d(t,e){let n=!1;ir<=$a?Fd(t)||(t.n|=Rn,n=!Ud(t)):n=!t.has(Pt),n&&(t.add(Pt),Pt.deps.push(t))}function on(t,e,n,s,r,i){const o=Ba.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?jc(n)&&a.push(o.get("length")):(a.push(o.get(Qn)),ws(t)&&a.push(o.get(Va)));break;case"delete":Q(t)||(a.push(o.get(Qn)),ws(t)&&a.push(o.get(Va)));break;case"set":ws(t)&&a.push(o.get(Qn));break}if(a.length===1)a[0]&&ja(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ja(qc(c))}}function ja(t,e){const n=Q(t)?t:[...t];for(const s of n)s.computed&&_u(s);for(const s of n)s.computed||_u(s)}function _u(t,e){(t!==Pt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const vy=Lc("__proto__,__v_isRef,__isVue"),Vd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($c)),_y=Kc(),wy=Kc(!1,!0),Ey=Kc(!0),wu=Ty();function Ty(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=le(this);for(let i=0,o=this.length;i<o;i++)mt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(le)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){js();const s=le(this)[e].apply(this,n);return qs(),s}}),t}function by(t){const e=le(this);return mt(e,"has",t),e.hasOwnProperty(t)}function Kc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?By:zd:e?Kd:Hd).get(s))return s;const o=Q(s);if(!t){if(o&&oe(wu,r))return Reflect.get(wu,r,i);if(r==="hasOwnProperty")return by}const a=Reflect.get(s,r,i);return($c(r)?Vd.has(r):vy(r))||(t||mt(s,"get",r),e)?a:He(a)?o&&jc(r)?a:a.value:Ce(a)?t?Wd(a):Hr(a):a}}const Iy=jd(),Cy=jd(!0);function jd(t=!1){return function(n,s,r,i){let o=n[s];if(Ns(o)&&He(o)&&!He(r))return!1;if(!t&&(!qi(r)&&!Ns(r)&&(o=le(o),r=le(r)),!Q(n)&&He(o)&&!He(r)))return o.value=r,!0;const a=Q(n)&&jc(s)?Number(s)<n.length:oe(n,s),c=Reflect.set(n,s,r,i);return n===le(i)&&(a?br(r,o)&&on(n,"set",s,r):on(n,"add",s,r)),c}}function Sy(t,e){const n=oe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&on(t,"delete",e,void 0),s}function Ay(t,e){const n=Reflect.has(t,e);return(!$c(e)||!Vd.has(e))&&mt(t,"has",e),n}function Ry(t){return mt(t,"iterate",Q(t)?"length":Qn),Reflect.ownKeys(t)}const qd={get:_y,set:Iy,deleteProperty:Sy,has:Ay,ownKeys:Ry},ky={get:Ey,set(t,e){return!0},deleteProperty(t,e){return!0}},Ny=nt({},qd,{get:wy,set:Cy}),zc=t=>t,yo=t=>Reflect.getPrototypeOf(t);function pi(t,e,n=!1,s=!1){t=t.__v_raw;const r=le(t),i=le(e);n||(e!==i&&mt(r,"get",e),mt(r,"get",i));const{has:o}=yo(r),a=s?zc:n?Qc:Ir;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function gi(t,e=!1){const n=this.__v_raw,s=le(n),r=le(t);return e||(t!==r&&mt(s,"has",t),mt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function mi(t,e=!1){return t=t.__v_raw,!e&&mt(le(t),"iterate",Qn),Reflect.get(t,"size",t)}function Eu(t){t=le(t);const e=le(this);return yo(e).has.call(e,t)||(e.add(t),on(e,"add",t,t)),this}function Tu(t,e){e=le(e);const n=le(this),{has:s,get:r}=yo(n);let i=s.call(n,t);i||(t=le(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?br(e,o)&&on(n,"set",t,e):on(n,"add",t,e),this}function bu(t){const e=le(this),{has:n,get:s}=yo(e);let r=n.call(e,t);r||(t=le(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&on(e,"delete",t,void 0),i}function Iu(){const t=le(this),e=t.size!==0,n=t.clear();return e&&on(t,"clear",void 0,void 0),n}function yi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=le(o),c=e?zc:t?Qc:Ir;return!t&&mt(a,"iterate",Qn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function vi(t,e,n){return function(...s){const r=this.__v_raw,i=le(r),o=ws(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?zc:e?Qc:Ir;return!e&&mt(i,"iterate",c?Va:Qn),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function dn(t){return function(...e){return t==="delete"?!1:this}}function Dy(){const t={get(i){return pi(this,i)},get size(){return mi(this)},has:gi,add:Eu,set:Tu,delete:bu,clear:Iu,forEach:yi(!1,!1)},e={get(i){return pi(this,i,!1,!0)},get size(){return mi(this)},has:gi,add:Eu,set:Tu,delete:bu,clear:Iu,forEach:yi(!1,!0)},n={get(i){return pi(this,i,!0)},get size(){return mi(this,!0)},has(i){return gi.call(this,i,!0)},add:dn("add"),set:dn("set"),delete:dn("delete"),clear:dn("clear"),forEach:yi(!0,!1)},s={get(i){return pi(this,i,!0,!0)},get size(){return mi(this,!0)},has(i){return gi.call(this,i,!0)},add:dn("add"),set:dn("set"),delete:dn("delete"),clear:dn("clear"),forEach:yi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=vi(i,!1,!1),n[i]=vi(i,!0,!1),e[i]=vi(i,!1,!0),s[i]=vi(i,!0,!0)}),[t,n,e,s]}const[Oy,Py,xy,Ly]=Dy();function Wc(t,e){const n=e?t?Ly:xy:t?Py:Oy;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(oe(n,r)&&r in s?n:s,r,i)}const My={get:Wc(!1,!1)},Uy={get:Wc(!1,!0)},Fy={get:Wc(!0,!1)},Hd=new WeakMap,Kd=new WeakMap,zd=new WeakMap,By=new WeakMap;function $y(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vy(t){return t.__v_skip||!Object.isExtensible(t)?0:$y(cy(t))}function Hr(t){return Ns(t)?t:Gc(t,!1,qd,My,Hd)}function jy(t){return Gc(t,!1,Ny,Uy,Kd)}function Wd(t){return Gc(t,!0,ky,Fy,zd)}function Gc(t,e,n,s,r){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Vy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Es(t){return Ns(t)?Es(t.__v_raw):!!(t&&t.__v_isReactive)}function Ns(t){return!!(t&&t.__v_isReadonly)}function qi(t){return!!(t&&t.__v_isShallow)}function Gd(t){return Es(t)||Ns(t)}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function Qd(t){return ji(t,"__v_skip",!0),t}const Ir=t=>Ce(t)?Hr(t):t,Qc=t=>Ce(t)?Wd(t):t;function Xd(t){Tn&&Pt&&(t=le(t),$d(t.dep||(t.dep=qc())))}function Yd(t,e){t=le(t);const n=t.dep;n&&ja(n)}function He(t){return!!(t&&t.__v_isRef===!0)}function ns(t){return Jd(t,!1)}function qy(t){return Jd(t,!0)}function Jd(t,e){return He(t)?t:new Hy(t,e)}class Hy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:Ir(e)}get value(){return Xd(this),this._value}set value(e){const n=this.__v_isShallow||qi(e)||Ns(e);e=n?e:le(e),br(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ir(e),Yd(this))}}function ct(t){return He(t)?t.value:t}const Ky={get:(t,e,n)=>ct(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return He(r)&&!He(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Zd(t){return Es(t)?t:new Proxy(t,Ky)}var ef;class zy{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ef]=!1,this._dirty=!0,this.effect=new Hc(e,()=>{this._dirty||(this._dirty=!0,Yd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=le(this);return Xd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ef="__v_isReadonly";function Wy(t,e,n=!1){let s,r;const i=Y(t);return i?(s=t,r=Lt):(s=t.get,r=t.set),new zy(s,r,i||!r,n)}function bn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Kr(i,e,n)}return r}function St(t,e,n,s){if(Y(t)){const i=bn(t,e,n,s);return i&&Vc(i)&&i.catch(o=>{Kr(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(St(t[i],e,n,s));return r}function Kr(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){bn(c,null,10,[t,o,a]);return}}Gy(t,n,r,s)}function Gy(t,e,n,s=!0){console.error(t)}let Cr=!1,qa=!1;const Ze=[];let Bt=0;const Ts=[];let en=null,jn=0;const tf=Promise.resolve();let Xc=null;function nf(t){const e=Xc||tf;return t?e.then(this?t.bind(this):t):e}function Qy(t){let e=Bt+1,n=Ze.length;for(;e<n;){const s=e+n>>>1;Sr(Ze[s])<t?e=s+1:n=s}return e}function Yc(t){(!Ze.length||!Ze.includes(t,Cr&&t.allowRecurse?Bt+1:Bt))&&(t.id==null?Ze.push(t):Ze.splice(Qy(t.id),0,t),sf())}function sf(){!Cr&&!qa&&(qa=!0,Xc=tf.then(af))}function Xy(t){const e=Ze.indexOf(t);e>Bt&&Ze.splice(e,1)}function rf(t){Q(t)?Ts.push(...t):(!en||!en.includes(t,t.allowRecurse?jn+1:jn))&&Ts.push(t),sf()}function Cu(t,e=Cr?Bt+1:0){for(;e<Ze.length;e++){const n=Ze[e];n&&n.pre&&(Ze.splice(e,1),e--,n())}}function of(t){if(Ts.length){const e=[...new Set(Ts)];if(Ts.length=0,en){en.push(...e);return}for(en=e,en.sort((n,s)=>Sr(n)-Sr(s)),jn=0;jn<en.length;jn++)en[jn]();en=null,jn=0}}const Sr=t=>t.id==null?1/0:t.id,Yy=(t,e)=>{const n=Sr(t)-Sr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function af(t){qa=!1,Cr=!0,Ze.sort(Yy);const e=Lt;try{for(Bt=0;Bt<Ze.length;Bt++){const n=Ze[Bt];n&&n.active!==!1&&bn(n,null,14)}}finally{Bt=0,Ze.length=0,of(),Cr=!1,Xc=null,(Ze.length||Ts.length)&&af()}}function Jy(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||be;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||be;d&&(r=n.map(g=>Fe(g)?g.trim():g)),h&&(r=n.map(Fa))}let a,c=s[a=ca(e)]||s[a=ca(Qt(e))];!c&&i&&(c=s[a=ca(Vs(e))]),c&&St(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,St(l,t,6,r)}}function cf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=l=>{const u=cf(l,e,!0);u&&(a=!0,nt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ce(t)&&s.set(t,null),null):(Q(i)?i.forEach(c=>o[c]=null):nt(o,i),Ce(t)&&s.set(t,o),o)}function vo(t,e){return!t||!fo(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,Vs(e))||oe(t,e))}let We=null,_o=null;function Hi(t){const e=We;return We=t,_o=t&&t.type.__scopeId||null,e}function Jc(t){_o=t}function Zc(){_o=null}function ge(t,e=We,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Fu(-1);const i=Hi(e);let o;try{o=t(...r)}finally{Hi(i),s._d&&Fu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function la(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:m,inheritAttrs:_}=t;let S,A;const w=Hi(t);try{if(n.shapeFlag&4){const P=r||s;S=Ot(u.call(P,P,h,i,g,d,m)),A=c}else{const P=e;S=Ot(P.length>1?P(i,{attrs:c,slots:a,emit:l}):P(i,null)),A=e.props?c:ev(c)}}catch(P){fr.length=0,Kr(P,t,1),S=_e(pt)}let T=S;if(A&&_!==!1){const P=Object.keys(A),{shapeFlag:H}=T;P.length&&H&7&&(o&&P.some(Fc)&&(A=tv(A,o)),T=kn(T,A))}return n.dirs&&(T=kn(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),S=T,Hi(w),S}function Zy(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(Rr(s)){if(s.type!==pt||s.children==="v-if"){if(e)return;e=s}}else return}return e}const ev=t=>{let e;for(const n in t)(n==="class"||n==="style"||fo(n))&&((e||(e={}))[n]=t[n]);return e},tv=(t,e)=>{const n={};for(const s in t)(!Fc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function nv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Su(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!vo(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Su(s,o,l):!0:!!o;return!1}function Su(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!vo(n,i))return!0}return!1}function el({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const sv=t=>t.__isSuspense,rv={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,l){t==null?ov(e,n,s,r,i,o,a,c,l):av(t,e,n,s,r,o,a,c,l)},hydrate:cv,create:tl,normalize:lv},iv=rv;function Ar(t,e){const n=t.props&&t.props[e];Y(n)&&n()}function ov(t,e,n,s,r,i,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),d=t.suspense=tl(t,r,s,e,h,n,i,o,a,c);l(null,d.pendingBranch=t.ssContent,h,null,s,d,i,o),d.deps>0?(Ar(t,"onPending"),Ar(t,"onFallback"),l(null,t.ssFallback,e,n,s,null,i,o),bs(d,t.ssFallback)):d.resolve()}function av(t,e,n,s,r,i,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const d=e.ssContent,g=e.ssFallback,{activeBranch:m,pendingBranch:_,isInFallback:S,isHydrating:A}=h;if(_)h.pendingBranch=d,Vt(d,_)?(c(_,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():S&&(c(m,g,n,s,r,null,i,o,a),bs(h,g))):(h.pendingId++,A?(h.isHydrating=!1,h.activeBranch=_):l(_,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),S?(c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(c(m,g,n,s,r,null,i,o,a),bs(h,g))):m&&Vt(d,m)?(c(m,d,n,s,r,h,i,o,a),h.resolve(!0)):(c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(m&&Vt(d,m))c(m,d,n,s,r,h,i,o,a),bs(h,d);else if(Ar(e,"onPending"),h.pendingBranch=d,h.pendingId++,c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:w,pendingId:T}=h;w>0?setTimeout(()=>{h.pendingId===T&&h.fallback(g)},w):w===0&&h.fallback(g)}}function tl(t,e,n,s,r,i,o,a,c,l,u=!1){const{p:h,m:d,um:g,n:m,o:{parentNode:_,remove:S}}=l,A=t.props?hy(t.props.timeout):void 0,w={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof A=="number"?A:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(T=!1){const{vnode:P,activeBranch:H,pendingBranch:Z,pendingId:de,effects:V,parentComponent:ce,container:re}=w;if(w.isHydrating)w.isHydrating=!1;else if(!T){const ut=H&&Z.transition&&Z.transition.mode==="out-in";ut&&(H.transition.afterLeave=()=>{de===w.pendingId&&d(Z,re,vt,0)});let{anchor:vt}=w;H&&(vt=m(H),g(H,ce,w,!0)),ut||d(Z,re,vt,0)}bs(w,Z),w.pendingBranch=null,w.isInFallback=!1;let Te=w.parent,Be=!1;for(;Te;){if(Te.pendingBranch){Te.effects.push(...V),Be=!0;break}Te=Te.parent}Be||rf(V),w.effects=[],Ar(P,"onResolve")},fallback(T){if(!w.pendingBranch)return;const{vnode:P,activeBranch:H,parentComponent:Z,container:de,isSVG:V}=w;Ar(P,"onFallback");const ce=m(H),re=()=>{w.isInFallback&&(h(null,T,de,ce,Z,null,V,a,c),bs(w,T))},Te=T.transition&&T.transition.mode==="out-in";Te&&(H.transition.afterLeave=re),w.isInFallback=!0,g(H,Z,null,!0),Te||re()},move(T,P,H){w.activeBranch&&d(w.activeBranch,T,P,H),w.container=T},next(){return w.activeBranch&&m(w.activeBranch)},registerDep(T,P){const H=!!w.pendingBranch;H&&w.deps++;const Z=T.vnode.el;T.asyncDep.catch(de=>{Kr(de,T,0)}).then(de=>{if(T.isUnmounted||w.isUnmounted||w.pendingId!==T.suspenseId)return;T.asyncResolved=!0;const{vnode:V}=T;Ya(T,de,!1),Z&&(V.el=Z);const ce=!Z&&T.subTree.el;P(T,V,_(Z||T.subTree.el),Z?null:m(T.subTree),w,o,c),ce&&S(ce),el(T,V.el),H&&--w.deps===0&&w.resolve()})},unmount(T,P){w.isUnmounted=!0,w.activeBranch&&g(w.activeBranch,n,T,P),w.pendingBranch&&g(w.pendingBranch,n,T,P)}};return w}function cv(t,e,n,s,r,i,o,a,c){const l=e.suspense=tl(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(),u}function lv(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=Au(s?n.default:n),t.ssFallback=s?Au(n.fallback):_e(pt)}function Au(t){let e;if(Y(t)){const n=Ds&&t._c;n&&(t._d=!1,ve()),t=t(),n&&(t._d=!0,e=It,Af())}return Q(t)&&(t=Zy(t)),t=Ot(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function uv(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):rf(t)}function bs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,el(s,r))}function Oi(t,e){if(Oe){let n=Oe.provides;const s=Oe.parent&&Oe.parent.provides;s===n&&(n=Oe.provides=Object.create(s)),n[t]=e}}function rn(t,e,n=!1){const s=Oe||We;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(s.proxy):e}}const _i={};function Pi(t,e,n){return lf(t,e,n)}function lf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=be){const a=gy()===(Oe==null?void 0:Oe.scope)?Oe:null;let c,l=!1,u=!1;if(He(t)?(c=()=>t.value,l=qi(t)):Es(t)?(c=()=>t,s=!0):Q(t)?(u=!0,l=t.some(T=>Es(T)||qi(T)),c=()=>t.map(T=>{if(He(T))return T.value;if(Es(T))return Hn(T);if(Y(T))return bn(T,a,2)})):Y(t)?e?c=()=>bn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),St(t,a,3,[d])}:c=Lt,e&&s){const T=c;c=()=>Hn(T())}let h,d=T=>{h=A.onStop=()=>{bn(T,a,4)}},g;if(kr)if(d=Lt,e?n&&St(e,a,3,[c(),u?[]:void 0,d]):c(),r==="sync"){const T=s_();g=T.__watcherHandles||(T.__watcherHandles=[])}else return Lt;let m=u?new Array(t.length).fill(_i):_i;const _=()=>{if(A.active)if(e){const T=A.run();(s||l||(u?T.some((P,H)=>br(P,m[H])):br(T,m)))&&(h&&h(),St(e,a,3,[T,m===_i?void 0:u&&m[0]===_i?[]:m,d]),m=T)}else A.run()};_.allowRecurse=!!e;let S;r==="sync"?S=_:r==="post"?S=()=>dt(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),S=()=>Yc(_));const A=new Hc(c,S);e?n?_():m=A.run():r==="post"?dt(A.run.bind(A),a&&a.suspense):A.run();const w=()=>{A.stop(),a&&a.scope&&Bc(a.scope.effects,A)};return g&&g.push(w),w}function hv(t,e,n){const s=this.proxy,r=Fe(t)?t.includes(".")?uf(s,t):()=>s[t]:t.bind(s,s);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Oe;Nn(this);const a=lf(r,i.bind(s),n);return o?Nn(o):In(),a}function uf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Hn(t,e){if(!Ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),He(t))Hn(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)Hn(t[n],e);else if(xd(t)||ws(t))t.forEach(n=>{Hn(n,e)});else if(Md(t))for(const n in t)Hn(t[n],e);return t}function dv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return nl(()=>{t.isMounted=!0}),gf(()=>{t.isUnmounting=!0}),t}const Tt=[Function,Array],fv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Tt,onEnter:Tt,onAfterEnter:Tt,onEnterCancelled:Tt,onBeforeLeave:Tt,onLeave:Tt,onAfterLeave:Tt,onLeaveCancelled:Tt,onBeforeAppear:Tt,onAppear:Tt,onAfterAppear:Tt,onAppearCancelled:Tt},setup(t,{slots:e}){const n=Nf(),s=dv();let r;return()=>{const i=e.default&&df(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const _ of i)if(_.type!==pt){o=_;break}}const a=le(t),{mode:c}=a;if(s.isLeaving)return ua(o);const l=Ru(o);if(!l)return ua(o);const u=Ha(l,a,s,n);Ka(l,u);const h=n.subTree,d=h&&Ru(h);let g=!1;const{getTransitionKey:m}=l.type;if(m){const _=m();r===void 0?r=_:_!==r&&(r=_,g=!0)}if(d&&d.type!==pt&&(!Vt(l,d)||g)){const _=Ha(d,a,s,n);if(Ka(d,_),c==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ua(o);c==="in-out"&&l.type!==pt&&(_.delayLeave=(S,A,w)=>{const T=hf(s,d);T[String(d.key)]=d,S._leaveCb=()=>{A(),S._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=w})}return o}}},pv=fv;function hf(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ha(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:_,onAppear:S,onAfterAppear:A,onAppearCancelled:w}=e,T=String(t.key),P=hf(n,t),H=(V,ce)=>{V&&St(V,s,9,ce)},Z=(V,ce)=>{const re=ce[1];H(V,ce),Q(V)?V.every(Te=>Te.length<=1)&&re():V.length<=1&&re()},de={mode:i,persisted:o,beforeEnter(V){let ce=a;if(!n.isMounted)if(r)ce=_||a;else return;V._leaveCb&&V._leaveCb(!0);const re=P[T];re&&Vt(t,re)&&re.el._leaveCb&&re.el._leaveCb(),H(ce,[V])},enter(V){let ce=c,re=l,Te=u;if(!n.isMounted)if(r)ce=S||c,re=A||l,Te=w||u;else return;let Be=!1;const ut=V._enterCb=vt=>{Be||(Be=!0,vt?H(Te,[V]):H(re,[V]),de.delayedLeave&&de.delayedLeave(),V._enterCb=void 0)};ce?Z(ce,[V,ut]):ut()},leave(V,ce){const re=String(t.key);if(V._enterCb&&V._enterCb(!0),n.isUnmounting)return ce();H(h,[V]);let Te=!1;const Be=V._leaveCb=ut=>{Te||(Te=!0,ce(),ut?H(m,[V]):H(g,[V]),V._leaveCb=void 0,P[re]===t&&delete P[re])};P[re]=t,d?Z(d,[V,Be]):Be()},clone(V){return Ha(V,e,n,s)}};return de}function ua(t){if(wo(t))return t=kn(t),t.children=null,t}function Ru(t){return wo(t)?t.children?t.children[0]:void 0:t}function Ka(t,e){t.shapeFlag&6&&t.component?Ka(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function df(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===$e?(o.patchFlag&128&&r++,s=s.concat(df(o.children,e,a))):(e||o.type!==pt)&&s.push(a!=null?kn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function ff(t){return Y(t)?{setup:t,name:t.name}:t}const hr=t=>!!t.type.__asyncLoader,wo=t=>t.type.__isKeepAlive;function gv(t,e){pf(t,"a",e)}function mv(t,e){pf(t,"da",e)}function pf(t,e,n=Oe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Eo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)wo(r.parent.vnode)&&yv(s,e,n,r),r=r.parent}}function yv(t,e,n,s){const r=Eo(e,t,s,!0);mf(()=>{Bc(s[e],r)},n)}function Eo(t,e,n=Oe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;js(),Nn(n);const a=St(e,n,t,o);return In(),qs(),a});return s?r.unshift(i):r.push(i),i}}const hn=t=>(e,n=Oe)=>(!kr||t==="sp")&&Eo(t,(...s)=>e(...s),n),vv=hn("bm"),nl=hn("m"),_v=hn("bu"),wv=hn("u"),gf=hn("bum"),mf=hn("um"),Ev=hn("sp"),Tv=hn("rtg"),bv=hn("rtc");function Iv(t,e=Oe){Eo("ec",t,e)}function ku(t,e){const n=We;if(n===null)return t;const s=Io(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=be]=e[i];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&Hn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Fn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(js(),St(c,n,8,[t.el,a,t,e]),qs())}}const yf="components";function Nu(t,e){return Sv(yf,t,!0,e)||t}const Cv=Symbol();function Sv(t,e,n=!0,s=!1){const r=We||Oe;if(r){const i=r.type;if(t===yf){const a=e_(i,!1);if(a&&(a===e||a===Qt(e)||a===mo(Qt(e))))return i}const o=Du(r[t]||i[t],e)||Du(r.appContext[t],e);return!o&&s?i:o}}function Du(t,e){return t&&(t[e]||t[Qt(e)]||t[mo(Qt(e))])}function sl(t,e,n,s){let r;const i=n&&n[s];if(Q(t)||Fe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ce(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function $t(t,e,n={},s,r){if(We.isCE||We.parent&&hr(We.parent)&&We.parent.isCE)return e!=="default"&&(n.name=e),_e("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),ve();const o=i&&vf(i(n)),a=Ct($e,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function vf(t){return t.some(e=>Rr(e)?!(e.type===pt||e.type===$e&&!vf(e.children)):!0)?t:null}const za=t=>t?Df(t)?Io(t)||t.proxy:za(t.parent):null,dr=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>za(t.parent),$root:t=>za(t.root),$emit:t=>t.emit,$options:t=>rl(t),$forceUpdate:t=>t.f||(t.f=()=>Yc(t.update)),$nextTick:t=>t.n||(t.n=nf.bind(t.proxy)),$watch:t=>hv.bind(t)}),ha=(t,e)=>t!==be&&!t.__isScriptSetup&&oe(t,e),Av={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ha(s,e))return o[e]=1,s[e];if(r!==be&&oe(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&oe(l,e))return o[e]=3,i[e];if(n!==be&&oe(n,e))return o[e]=4,n[e];Wa&&(o[e]=0)}}const u=dr[e];let h,d;if(u)return e==="$attrs"&&mt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==be&&oe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,oe(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ha(r,e)?(r[e]=n,!0):s!==be&&oe(s,e)?(s[e]=n,!0):oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==be&&oe(t,o)||ha(e,o)||(a=i[0])&&oe(a,o)||oe(s,o)||oe(dr,o)||oe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Wa=!0;function Rv(t){const e=rl(t),n=t.proxy,s=t.ctx;Wa=!1,e.beforeCreate&&Ou(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:m,activated:_,deactivated:S,beforeDestroy:A,beforeUnmount:w,destroyed:T,unmounted:P,render:H,renderTracked:Z,renderTriggered:de,errorCaptured:V,serverPrefetch:ce,expose:re,inheritAttrs:Te,components:Be,directives:ut,filters:vt}=e;if(l&&kv(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const we in o){const me=o[we];Y(me)&&(s[we]=me.bind(n))}if(r){const we=r.call(n,n);Ce(we)&&(t.data=Hr(we))}if(Wa=!0,i)for(const we in i){const me=i[we],Rt=Y(me)?me.bind(n,n):Y(me.get)?me.get.bind(n,n):Lt,Un=!Y(me)&&Y(me.set)?me.set.bind(n):Lt,kt=bt({get:Rt,set:Un});Object.defineProperty(s,we,{enumerable:!0,configurable:!0,get:()=>kt.value,set:ht=>kt.value=ht})}if(a)for(const we in a)_f(a[we],s,n,we);if(c){const we=Y(c)?c.call(n):c;Reflect.ownKeys(we).forEach(me=>{Oi(me,we[me])})}u&&Ou(u,t,"c");function Pe(we,me){Q(me)?me.forEach(Rt=>we(Rt.bind(n))):me&&we(me.bind(n))}if(Pe(vv,h),Pe(nl,d),Pe(_v,g),Pe(wv,m),Pe(gv,_),Pe(mv,S),Pe(Iv,V),Pe(bv,Z),Pe(Tv,de),Pe(gf,w),Pe(mf,P),Pe(Ev,ce),Q(re))if(re.length){const we=t.exposed||(t.exposed={});re.forEach(me=>{Object.defineProperty(we,me,{get:()=>n[me],set:Rt=>n[me]=Rt})})}else t.exposed||(t.exposed={});H&&t.render===Lt&&(t.render=H),Te!=null&&(t.inheritAttrs=Te),Be&&(t.components=Be),ut&&(t.directives=ut)}function kv(t,e,n=Lt,s=!1){Q(t)&&(t=Ga(t));for(const r in t){const i=t[r];let o;Ce(i)?"default"in i?o=rn(i.from||r,i.default,!0):o=rn(i.from||r):o=rn(i),He(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Ou(t,e,n){St(Q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function _f(t,e,n,s){const r=s.includes(".")?uf(n,s):()=>n[s];if(Fe(t)){const i=e[t];Y(i)&&Pi(r,i)}else if(Y(t))Pi(r,t.bind(n));else if(Ce(t))if(Q(t))t.forEach(i=>_f(i,e,n,s));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&Pi(r,i,t)}}function rl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Ki(c,l,o,!0)),Ki(c,e,o)),Ce(e)&&i.set(e,c),c}function Ki(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ki(t,i,n,!0),r&&r.forEach(o=>Ki(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Nv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Nv={data:Pu,props:$n,emits:$n,methods:$n,computed:$n,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:$n,directives:$n,watch:Ov,provide:Pu,inject:Dv};function Pu(t,e){return e?t?function(){return nt(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function Dv(t,e){return $n(Ga(t),Ga(e))}function Ga(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ot(t,e){return t?[...new Set([].concat(t,e))]:e}function $n(t,e){return t?nt(nt(Object.create(null),t),e):e}function Ov(t,e){if(!t)return e;if(!e)return t;const n=nt(Object.create(null),t);for(const s in e)n[s]=ot(t[s],e[s]);return n}function Pv(t,e,n,s=!1){const r={},i={};ji(i,bo,1),t.propsDefaults=Object.create(null),wf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:jy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function xv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=le(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(vo(t.emitsOptions,d))continue;const g=e[d];if(c)if(oe(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const m=Qt(d);r[m]=Qa(c,a,m,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{wf(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!oe(e,h)&&((u=Vs(h))===h||!oe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Qa(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!oe(e,h))&&(delete i[h],l=!0)}l&&on(t,"set","$attrs")}function wf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ni(c))continue;const l=e[c];let u;r&&oe(r,u=Qt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:vo(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=le(n),l=a||be;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Qa(r,c,h,l[h],t,!oe(l,h))}}return o}function Qa(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=oe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Y(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Nn(r),s=l[n]=c.call(null,e),In())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Vs(n))&&(s=!0))}return s}function Ef(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const u=h=>{c=!0;const[d,g]=Ef(h,e,!0);nt(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ce(t)&&s.set(t,_s),_s;if(Q(i))for(let u=0;u<i.length;u++){const h=Qt(i[u]);xu(h)&&(o[h]=be)}else if(i)for(const u in i){const h=Qt(u);if(xu(h)){const d=i[u],g=o[h]=Q(d)||Y(d)?{type:d}:Object.assign({},d);if(g){const m=Uu(Boolean,g.type),_=Uu(String,g.type);g[0]=m>-1,g[1]=_<0||m<_,(m>-1||oe(g,"default"))&&a.push(h)}}}const l=[o,a];return Ce(t)&&s.set(t,l),l}function xu(t){return t[0]!=="$"}function Lu(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Mu(t,e){return Lu(t)===Lu(e)}function Uu(t,e){return Q(e)?e.findIndex(n=>Mu(n,t)):Y(e)&&Mu(e,t)?0:-1}const Tf=t=>t[0]==="_"||t==="$stable",il=t=>Q(t)?t.map(Ot):[Ot(t)],Lv=(t,e,n)=>{if(e._n)return e;const s=ge((...r)=>il(e(...r)),n);return s._c=!1,s},bf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Tf(r))continue;const i=t[r];if(Y(i))e[r]=Lv(r,i,s);else if(i!=null){const o=il(i);e[r]=()=>o}}},If=(t,e)=>{const n=il(e);t.slots.default=()=>n},Mv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=le(e),ji(e,"_",n)):bf(e,t.slots={})}else t.slots={},e&&If(t,e);ji(t.slots,bo,1)},Uv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=be;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(nt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,bf(e,r)),o=e}else e&&(If(t,e),o={default:1});if(i)for(const a in r)!Tf(a)&&!(a in o)&&delete r[a]};function Cf(){return{app:null,config:{isNativeTag:iy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fv=0;function Bv(t,e){return function(s,r=null){Y(s)||(s=Object.assign({},s)),r!=null&&!Ce(r)&&(r=null);const i=Cf(),o=new Set;let a=!1;const c=i.app={_uid:Fv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:r_,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Y(l.install)?(o.add(l),l.install(c,...u)):Y(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=_e(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Io(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Xa(t,e,n,s,r=!1){if(Q(t)){t.forEach((d,g)=>Xa(d,e&&(Q(e)?e[g]:e),n,s,r));return}if(hr(s)&&!r)return;const i=s.shapeFlag&4?Io(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===be?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Fe(l)?(u[l]=null,oe(h,l)&&(h[l]=null)):He(l)&&(l.value=null)),Y(c))bn(c,a,12,[o,u]);else{const d=Fe(c),g=He(c);if(d||g){const m=()=>{if(t.f){const _=d?oe(h,c)?h[c]:u[c]:c.value;r?Q(_)&&Bc(_,i):Q(_)?_.includes(i)||_.push(i):d?(u[c]=[i],oe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,oe(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,dt(m,n)):m()}}}const dt=uv;function $v(t){return Vv(t)}function Vv(t,e){const n=dy();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=Lt,insertStaticContent:m}=t,_=(f,p,y,v=null,b=null,k=null,x=!1,R=null,N=!!p.dynamicChildren)=>{if(f===p)return;f&&!Vt(f,p)&&(v=D(f),ht(f,b,k,!0),f=null),p.patchFlag===-2&&(N=!1,p.dynamicChildren=null);const{type:I,ref:j,shapeFlag:M}=p;switch(I){case To:S(f,p,y,v);break;case pt:A(f,p,y,v);break;case da:f==null&&w(p,y,v,x);break;case $e:Be(f,p,y,v,b,k,x,R,N);break;default:M&1?H(f,p,y,v,b,k,x,R,N):M&6?ut(f,p,y,v,b,k,x,R,N):(M&64||M&128)&&I.process(f,p,y,v,b,k,x,R,N,ie)}j!=null&&b&&Xa(j,f&&f.ref,k,p||f,!p)},S=(f,p,y,v)=>{if(f==null)s(p.el=a(p.children),y,v);else{const b=p.el=f.el;p.children!==f.children&&l(b,p.children)}},A=(f,p,y,v)=>{f==null?s(p.el=c(p.children||""),y,v):p.el=f.el},w=(f,p,y,v)=>{[f.el,f.anchor]=m(f.children,p,y,v,f.el,f.anchor)},T=({el:f,anchor:p},y,v)=>{let b;for(;f&&f!==p;)b=d(f),s(f,y,v),f=b;s(p,y,v)},P=({el:f,anchor:p})=>{let y;for(;f&&f!==p;)y=d(f),r(f),f=y;r(p)},H=(f,p,y,v,b,k,x,R,N)=>{x=x||p.type==="svg",f==null?Z(p,y,v,b,k,x,R,N):ce(f,p,b,k,x,R,N)},Z=(f,p,y,v,b,k,x,R)=>{let N,I;const{type:j,props:M,shapeFlag:q,transition:X,dirs:ne}=f;if(N=f.el=o(f.type,k,M&&M.is,M),q&8?u(N,f.children):q&16&&V(f.children,N,null,v,b,k&&j!=="foreignObject",x,R),ne&&Fn(f,null,v,"created"),de(N,f,f.scopeId,x,v),M){for(const ye in M)ye!=="value"&&!Ni(ye)&&i(N,ye,null,M[ye],k,f.children,v,b,L);"value"in M&&i(N,"value",null,M.value),(I=M.onVnodeBeforeMount)&&Ft(I,v,f)}ne&&Fn(f,null,v,"beforeMount");const Ee=(!b||b&&!b.pendingBranch)&&X&&!X.persisted;Ee&&X.beforeEnter(N),s(N,p,y),((I=M&&M.onVnodeMounted)||Ee||ne)&&dt(()=>{I&&Ft(I,v,f),Ee&&X.enter(N),ne&&Fn(f,null,v,"mounted")},b)},de=(f,p,y,v,b)=>{if(y&&g(f,y),v)for(let k=0;k<v.length;k++)g(f,v[k]);if(b){let k=b.subTree;if(p===k){const x=b.vnode;de(f,x,x.scopeId,x.slotScopeIds,b.parent)}}},V=(f,p,y,v,b,k,x,R,N=0)=>{for(let I=N;I<f.length;I++){const j=f[I]=R?gn(f[I]):Ot(f[I]);_(null,j,p,y,v,b,k,x,R)}},ce=(f,p,y,v,b,k,x)=>{const R=p.el=f.el;let{patchFlag:N,dynamicChildren:I,dirs:j}=p;N|=f.patchFlag&16;const M=f.props||be,q=p.props||be;let X;y&&Bn(y,!1),(X=q.onVnodeBeforeUpdate)&&Ft(X,y,p,f),j&&Fn(p,f,y,"beforeUpdate"),y&&Bn(y,!0);const ne=b&&p.type!=="foreignObject";if(I?re(f.dynamicChildren,I,R,y,v,ne,k):x||me(f,p,R,null,y,v,ne,k,!1),N>0){if(N&16)Te(R,p,M,q,y,v,b);else if(N&2&&M.class!==q.class&&i(R,"class",null,q.class,b),N&4&&i(R,"style",M.style,q.style,b),N&8){const Ee=p.dynamicProps;for(let ye=0;ye<Ee.length;ye++){const xe=Ee[ye],Nt=M[xe],ds=q[xe];(ds!==Nt||xe==="value")&&i(R,xe,Nt,ds,b,f.children,y,v,L)}}N&1&&f.children!==p.children&&u(R,p.children)}else!x&&I==null&&Te(R,p,M,q,y,v,b);((X=q.onVnodeUpdated)||j)&&dt(()=>{X&&Ft(X,y,p,f),j&&Fn(p,f,y,"updated")},v)},re=(f,p,y,v,b,k,x)=>{for(let R=0;R<p.length;R++){const N=f[R],I=p[R],j=N.el&&(N.type===$e||!Vt(N,I)||N.shapeFlag&70)?h(N.el):y;_(N,I,j,null,v,b,k,x,!0)}},Te=(f,p,y,v,b,k,x)=>{if(y!==v){if(y!==be)for(const R in y)!Ni(R)&&!(R in v)&&i(f,R,y[R],null,x,p.children,b,k,L);for(const R in v){if(Ni(R))continue;const N=v[R],I=y[R];N!==I&&R!=="value"&&i(f,R,I,N,x,p.children,b,k,L)}"value"in v&&i(f,"value",y.value,v.value)}},Be=(f,p,y,v,b,k,x,R,N)=>{const I=p.el=f?f.el:a(""),j=p.anchor=f?f.anchor:a("");let{patchFlag:M,dynamicChildren:q,slotScopeIds:X}=p;X&&(R=R?R.concat(X):X),f==null?(s(I,y,v),s(j,y,v),V(p.children,y,j,b,k,x,R,N)):M>0&&M&64&&q&&f.dynamicChildren?(re(f.dynamicChildren,q,y,b,k,x,R),(p.key!=null||b&&p===b.subTree)&&Sf(f,p,!0)):me(f,p,y,j,b,k,x,R,N)},ut=(f,p,y,v,b,k,x,R,N)=>{p.slotScopeIds=R,f==null?p.shapeFlag&512?b.ctx.activate(p,y,v,x,N):vt(p,y,v,b,k,x,N):er(f,p,N)},vt=(f,p,y,v,b,k,x)=>{const R=f.component=Qv(f,v,b);if(wo(f)&&(R.ctx.renderer=ie),Xv(R),R.asyncDep){if(b&&b.registerDep(R,Pe),!f.el){const N=R.subTree=_e(pt);A(null,N,p,y)}return}Pe(R,f,p,y,b,k,x)},er=(f,p,y)=>{const v=p.component=f.component;if(nv(f,p,y))if(v.asyncDep&&!v.asyncResolved){we(v,p,y);return}else v.next=p,Xy(v.update),v.update();else p.el=f.el,v.vnode=p},Pe=(f,p,y,v,b,k,x)=>{const R=()=>{if(f.isMounted){let{next:j,bu:M,u:q,parent:X,vnode:ne}=f,Ee=j,ye;Bn(f,!1),j?(j.el=ne.el,we(f,j,x)):j=ne,M&&Di(M),(ye=j.props&&j.props.onVnodeBeforeUpdate)&&Ft(ye,X,j,ne),Bn(f,!0);const xe=la(f),Nt=f.subTree;f.subTree=xe,_(Nt,xe,h(Nt.el),D(Nt),f,b,k),j.el=xe.el,Ee===null&&el(f,xe.el),q&&dt(q,b),(ye=j.props&&j.props.onVnodeUpdated)&&dt(()=>Ft(ye,X,j,ne),b)}else{let j;const{el:M,props:q}=p,{bm:X,m:ne,parent:Ee}=f,ye=hr(p);if(Bn(f,!1),X&&Di(X),!ye&&(j=q&&q.onVnodeBeforeMount)&&Ft(j,Ee,p),Bn(f,!0),M&&te){const xe=()=>{f.subTree=la(f),te(M,f.subTree,f,b,null)};ye?p.type.__asyncLoader().then(()=>!f.isUnmounted&&xe()):xe()}else{const xe=f.subTree=la(f);_(null,xe,y,v,f,b,k),p.el=xe.el}if(ne&&dt(ne,b),!ye&&(j=q&&q.onVnodeMounted)){const xe=p;dt(()=>Ft(j,Ee,xe),b)}(p.shapeFlag&256||Ee&&hr(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&f.a&&dt(f.a,b),f.isMounted=!0,p=y=v=null}},N=f.effect=new Hc(R,()=>Yc(I),f.scope),I=f.update=()=>N.run();I.id=f.uid,Bn(f,!0),I()},we=(f,p,y)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,xv(f,p.props,v,y),Uv(f,p.children,y),js(),Cu(),qs()},me=(f,p,y,v,b,k,x,R,N=!1)=>{const I=f&&f.children,j=f?f.shapeFlag:0,M=p.children,{patchFlag:q,shapeFlag:X}=p;if(q>0){if(q&128){Un(I,M,y,v,b,k,x,R,N);return}else if(q&256){Rt(I,M,y,v,b,k,x,R,N);return}}X&8?(j&16&&L(I,b,k),M!==I&&u(y,M)):j&16?X&16?Un(I,M,y,v,b,k,x,R,N):L(I,b,k,!0):(j&8&&u(y,""),X&16&&V(M,y,v,b,k,x,R,N))},Rt=(f,p,y,v,b,k,x,R,N)=>{f=f||_s,p=p||_s;const I=f.length,j=p.length,M=Math.min(I,j);let q;for(q=0;q<M;q++){const X=p[q]=N?gn(p[q]):Ot(p[q]);_(f[q],X,y,null,b,k,x,R,N)}I>j?L(f,b,k,!0,!1,M):V(p,y,v,b,k,x,R,N,M)},Un=(f,p,y,v,b,k,x,R,N)=>{let I=0;const j=p.length;let M=f.length-1,q=j-1;for(;I<=M&&I<=q;){const X=f[I],ne=p[I]=N?gn(p[I]):Ot(p[I]);if(Vt(X,ne))_(X,ne,y,null,b,k,x,R,N);else break;I++}for(;I<=M&&I<=q;){const X=f[M],ne=p[q]=N?gn(p[q]):Ot(p[q]);if(Vt(X,ne))_(X,ne,y,null,b,k,x,R,N);else break;M--,q--}if(I>M){if(I<=q){const X=q+1,ne=X<j?p[X].el:v;for(;I<=q;)_(null,p[I]=N?gn(p[I]):Ot(p[I]),y,ne,b,k,x,R,N),I++}}else if(I>q)for(;I<=M;)ht(f[I],b,k,!0),I++;else{const X=I,ne=I,Ee=new Map;for(I=ne;I<=q;I++){const _t=p[I]=N?gn(p[I]):Ot(p[I]);_t.key!=null&&Ee.set(_t.key,I)}let ye,xe=0;const Nt=q-ne+1;let ds=!1,pu=0;const tr=new Array(Nt);for(I=0;I<Nt;I++)tr[I]=0;for(I=X;I<=M;I++){const _t=f[I];if(xe>=Nt){ht(_t,b,k,!0);continue}let Ut;if(_t.key!=null)Ut=Ee.get(_t.key);else for(ye=ne;ye<=q;ye++)if(tr[ye-ne]===0&&Vt(_t,p[ye])){Ut=ye;break}Ut===void 0?ht(_t,b,k,!0):(tr[Ut-ne]=I+1,Ut>=pu?pu=Ut:ds=!0,_(_t,p[Ut],y,null,b,k,x,R,N),xe++)}const gu=ds?jv(tr):_s;for(ye=gu.length-1,I=Nt-1;I>=0;I--){const _t=ne+I,Ut=p[_t],mu=_t+1<j?p[_t+1].el:v;tr[I]===0?_(null,Ut,y,mu,b,k,x,R,N):ds&&(ye<0||I!==gu[ye]?kt(Ut,y,mu,2):ye--)}}},kt=(f,p,y,v,b=null)=>{const{el:k,type:x,transition:R,children:N,shapeFlag:I}=f;if(I&6){kt(f.component.subTree,p,y,v);return}if(I&128){f.suspense.move(p,y,v);return}if(I&64){x.move(f,p,y,ie);return}if(x===$e){s(k,p,y);for(let M=0;M<N.length;M++)kt(N[M],p,y,v);s(f.anchor,p,y);return}if(x===da){T(f,p,y);return}if(v!==2&&I&1&&R)if(v===0)R.beforeEnter(k),s(k,p,y),dt(()=>R.enter(k),b);else{const{leave:M,delayLeave:q,afterLeave:X}=R,ne=()=>s(k,p,y),Ee=()=>{M(k,()=>{ne(),X&&X()})};q?q(k,ne,Ee):Ee()}else s(k,p,y)},ht=(f,p,y,v=!1,b=!1)=>{const{type:k,props:x,ref:R,children:N,dynamicChildren:I,shapeFlag:j,patchFlag:M,dirs:q}=f;if(R!=null&&Xa(R,null,y,f,!0),j&256){p.ctx.deactivate(f);return}const X=j&1&&q,ne=!hr(f);let Ee;if(ne&&(Ee=x&&x.onVnodeBeforeUnmount)&&Ft(Ee,p,f),j&6)E(f.component,y,v);else{if(j&128){f.suspense.unmount(y,v);return}X&&Fn(f,null,p,"beforeUnmount"),j&64?f.type.remove(f,p,y,b,ie,v):I&&(k!==$e||M>0&&M&64)?L(I,p,y,!1,!0):(k===$e&&M&384||!b&&j&16)&&L(N,p,y),v&&hs(f)}(ne&&(Ee=x&&x.onVnodeUnmounted)||X)&&dt(()=>{Ee&&Ft(Ee,p,f),X&&Fn(f,null,p,"unmounted")},y)},hs=f=>{const{type:p,el:y,anchor:v,transition:b}=f;if(p===$e){fi(y,v);return}if(p===da){P(f);return}const k=()=>{r(y),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:x,delayLeave:R}=b,N=()=>x(y,k);R?R(f.el,k,N):N()}else k()},fi=(f,p)=>{let y;for(;f!==p;)y=d(f),r(f),f=y;r(p)},E=(f,p,y)=>{const{bum:v,scope:b,update:k,subTree:x,um:R}=f;v&&Di(v),b.stop(),k&&(k.active=!1,ht(x,f,p,y)),R&&dt(R,p),dt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},L=(f,p,y,v=!1,b=!1,k=0)=>{for(let x=k;x<f.length;x++)ht(f[x],p,y,v,b)},D=f=>f.shapeFlag&6?D(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),$=(f,p,y)=>{f==null?p._vnode&&ht(p._vnode,null,null,!0):_(p._vnode||null,f,p,null,null,null,y),Cu(),of(),p._vnode=f},ie={p:_,um:ht,m:kt,r:hs,mt:vt,mc:V,pc:me,pbc:re,n:D,o:t};let Se,te;return e&&([Se,te]=e(ie)),{render:$,hydrate:Se,createApp:Bv($,Se)}}function Bn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Sf(t,e,n=!1){const s=t.children,r=e.children;if(Q(s)&&Q(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=gn(r[i]),a.el=o.el),n||Sf(o,a)),a.type===To&&(a.el=o.el)}}function jv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const qv=t=>t.__isTeleport,$e=Symbol(void 0),To=Symbol(void 0),pt=Symbol(void 0),da=Symbol(void 0),fr=[];let It=null;function ve(t=!1){fr.push(It=t?null:[])}function Af(){fr.pop(),It=fr[fr.length-1]||null}let Ds=1;function Fu(t){Ds+=t}function Rf(t){return t.dynamicChildren=Ds>0?It||_s:null,Af(),Ds>0&&It&&It.push(t),t}function lt(t,e,n,s,r,i){return Rf(F(t,e,n,s,r,i,!0))}function Ct(t,e,n,s,r){return Rf(_e(t,e,n,s,r,!0))}function Rr(t){return t?t.__v_isVNode===!0:!1}function Vt(t,e){return t.type===e.type&&t.key===e.key}const bo="__vInternal",kf=({key:t})=>t??null,xi=({ref:t,ref_key:e,ref_for:n})=>t!=null?Fe(t)||He(t)||Y(t)?{i:We,r:t,k:e,f:!!n}:t:null;function F(t,e=null,n=null,s=0,r=null,i=t===$e?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&kf(e),ref:e&&xi(e),scopeId:_o,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:We};return a?(al(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Fe(n)?8:16),Ds>0&&!o&&It&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&It.push(c),c}const _e=Hv;function Hv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Cv)&&(t=pt),Rr(t)){const a=kn(t,e,!0);return n&&al(a,n),Ds>0&&!i&&It&&(a.shapeFlag&6?It[It.indexOf(t)]=a:It.push(a)),a.patchFlag|=-2,a}if(t_(t)&&(t=t.__vccOpts),e){e=Kv(e);let{class:a,style:c}=e;a&&!Fe(a)&&(e.class=Uc(a)),Ce(c)&&(Gd(c)&&!Q(c)&&(c=nt({},c)),e.style=Mc(c))}const o=Fe(t)?1:sv(t)?128:qv(t)?64:Ce(t)?4:Y(t)?2:0;return F(t,e,n,s,r,o,i,!0)}function Kv(t){return t?Gd(t)||bo in t?nt({},t):t:null}function kn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?zv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&kf(a),ref:e&&e.ref?n&&r?Q(r)?r.concat(xi(e)):[r,xi(e)]:xi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$e?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&kn(t.ssContent),ssFallback:t.ssFallback&&kn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Re(t=" ",e=0){return _e(To,null,t,e)}function ol(t="",e=!1){return e?(ve(),Ct(pt,null,t)):_e(pt,null,t)}function Ot(t){return t==null||typeof t=="boolean"?_e(pt):Q(t)?_e($e,null,t.slice()):typeof t=="object"?gn(t):_e(To,null,String(t))}function gn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:kn(t)}function al(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),al(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(bo in e)?e._ctx=We:r===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:We},n=32):(e=String(e),s&64?(n=16,e=[Re(e)]):n=8);t.children=e,t.shapeFlag|=n}function zv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Uc([e.class,s.class]));else if(r==="style")e.style=Mc([e.style,s.style]);else if(fo(r)){const i=e[r],o=s[r];o&&i!==o&&!(Q(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ft(t,e,n,s=null){St(t,e,7,[n,s])}const Wv=Cf();let Gv=0;function Qv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Wv,i={uid:Gv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new fy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ef(s,r),emitsOptions:cf(s,r),emit:null,emitted:null,propsDefaults:be,inheritAttrs:s.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Jy.bind(null,i),t.ce&&t.ce(i),i}let Oe=null;const Nf=()=>Oe||We,Nn=t=>{Oe=t,t.scope.on()},In=()=>{Oe&&Oe.scope.off(),Oe=null};function Df(t){return t.vnode.shapeFlag&4}let kr=!1;function Xv(t,e=!1){kr=e;const{props:n,children:s}=t.vnode,r=Df(t);Pv(t,n,r,e),Mv(t,s);const i=r?Yv(t,e):void 0;return kr=!1,i}function Yv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Qd(new Proxy(t.ctx,Av));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Zv(t):null;Nn(t),js();const i=bn(s,t,0,[t.props,r]);if(qs(),In(),Vc(i)){if(i.then(In,In),e)return i.then(o=>{Ya(t,o,e)}).catch(o=>{Kr(o,t,0)});t.asyncDep=i}else Ya(t,i,e)}else Of(t,e)}function Ya(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=Zd(e)),Of(t,n)}let Bu;function Of(t,e,n){const s=t.type;if(!t.render){if(!e&&Bu&&!s.render){const r=s.template||rl(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=nt(nt({isCustomElement:i,delimiters:a},o),c);s.render=Bu(r,l)}}t.render=s.render||Lt}Nn(t),js(),Rv(t),qs(),In()}function Jv(t){return new Proxy(t.attrs,{get(e,n){return mt(t,"get","$attrs"),e[n]}})}function Zv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Jv(t))},slots:t.slots,emit:t.emit,expose:e}}function Io(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Zd(Qd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in dr)return dr[n](t)},has(e,n){return n in e||n in dr}}))}function e_(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function t_(t){return Y(t)&&"__vccOpts"in t}const bt=(t,e)=>Wy(t,e,kr);function Co(t){const e=Nf();let n=t();return In(),Vc(n)&&(n=n.catch(s=>{throw Nn(e),s})),[n,()=>Nn(e)]}function Pf(t,e,n){const s=arguments.length;return s===2?Ce(e)&&!Q(e)?Rr(e)?_e(t,null,[e]):_e(t,e):_e(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Rr(n)&&(n=[n]),_e(t,e,n))}const n_=Symbol(""),s_=()=>rn(n_),r_="3.2.47",i_="http://www.w3.org/2000/svg",qn=typeof document<"u"?document:null,$u=qn&&qn.createElement("template"),o_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?qn.createElementNS(i_,t):qn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>qn.createTextNode(t),createComment:t=>qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{$u.innerHTML=s?`<svg>${t}</svg>`:t;const a=$u.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function a_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function c_(t,e,n){const s=t.style,r=Fe(n);if(n&&!r){if(e&&!Fe(e))for(const i in e)n[i]==null&&Ja(s,i,"");for(const i in n)Ja(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Vu=/\s*!important$/;function Ja(t,e,n){if(Q(n))n.forEach(s=>Ja(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=l_(t,e);Vu.test(n)?t.setProperty(Vs(s),n.replace(Vu,""),"important"):t[s]=n}}const ju=["Webkit","Moz","ms"],fa={};function l_(t,e){const n=fa[e];if(n)return n;let s=Qt(e);if(s!=="filter"&&s in t)return fa[e]=s;s=mo(s);for(let r=0;r<ju.length;r++){const i=ju[r]+s;if(i in t)return fa[e]=i}return e}const qu="http://www.w3.org/1999/xlink";function u_(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(qu,e.slice(6,e.length)):t.setAttributeNS(qu,e,n);else{const i=ry(e);n==null||i&&!Od(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function h_(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Od(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ps(t,e,n,s){t.addEventListener(e,n,s)}function d_(t,e,n,s){t.removeEventListener(e,n,s)}function f_(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=p_(e);if(s){const l=i[e]=y_(s,r);ps(t,a,l,c)}else o&&(d_(t,a,o,c),i[e]=void 0)}}const Hu=/(?:Once|Passive|Capture)$/;function p_(t){let e;if(Hu.test(t)){e={};let s;for(;s=t.match(Hu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Vs(t.slice(2)),e]}let pa=0;const g_=Promise.resolve(),m_=()=>pa||(g_.then(()=>pa=0),pa=Date.now());function y_(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;St(v_(s,n.value),e,5,[s])};return n.value=t,n.attached=m_(),n}function v_(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Ku=/^on[a-z]/,__=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?a_(t,s,r):e==="style"?c_(t,n,s):fo(e)?Fc(e)||f_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):w_(t,e,s,r))?h_(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),u_(t,e,s,r))};function w_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ku.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ku.test(e)&&Fe(n)?!1:e in t}const E_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};pv.props;const zu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Q(e)?n=>Di(e,n):e};function T_(t){t.target.composing=!0}function Wu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gu={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=zu(r);const i=s||r.props&&r.props.type==="number";ps(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Fa(a)),t._assign(a)}),n&&ps(t,"change",()=>{t.value=t.value.trim()}),e||(ps(t,"compositionstart",T_),ps(t,"compositionend",Wu),ps(t,"change",Wu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=zu(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Fa(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},b_=nt({patchProp:__},o_);let Qu;function I_(){return Qu||(Qu=$v(b_))}const C_=(...t)=>{const e=I_().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=S_(s);if(!r)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function S_(t){return Fe(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},A_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Lf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):A_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},R_=function(t){const e=xf(t);return Lf.encodeByteArray(e,!0)},zi=function(t){return R_(t).replace(/\./g,"")},Mf=function(t){try{return Lf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=()=>k_().__FIREBASE_DEFAULTS__,D_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},O_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Mf(t[1]);return e&&JSON.parse(e)},So=()=>{try{return N_()||D_()||O_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Uf=t=>{var e,n;return(n=(e=So())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ff=t=>{const e=Uf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},P_=()=>{var t;return(t=So())===null||t===void 0?void 0:t.config},Bf=t=>{var e;return(e=So())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[zi(JSON.stringify(n)),zi(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function L_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function M_(){var t;const e=(t=So())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function U_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function F_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function B_(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $_(){try{return typeof indexedDB=="object"}catch{return!1}}function V_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="FirebaseError";class Jt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=j_,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zr.prototype.create)}}class zr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?q_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Jt(r,a,s)}}function q_(t,e){return t.replace(H_,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const H_=/\{\$([^}]+)}/g;function K_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Xu(i)&&Xu(o)){if(!Wi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Xu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function or(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function ar(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function z_(t,e){const n=new W_(t,e);return n.subscribe.bind(n)}class W_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");G_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=ga),r.error===void 0&&(r.error=ga),r.complete===void 0&&(r.complete=ga);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function G_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ga(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t){return t&&t._delegate?t._delegate:t}class Dn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new x_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Y_(e))try{this.getOrInitializeService({instanceIdentifier:Vn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vn){return this.instances.has(e)}getOptions(e=Vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:X_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Vn){return this.component?this.component.multipleInstances?e:Vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function X_(t){return t===Vn?void 0:t}function Y_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Q_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const Z_={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},ew=he.INFO,tw={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},nw=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=tw[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cl{constructor(e){this.name=e,this._logLevel=ew,this._logHandler=nw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Z_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const sw=(t,e)=>e.some(n=>t instanceof n);let Yu,Ju;function rw(){return Yu||(Yu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iw(){return Ju||(Ju=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vf=new WeakMap,Za=new WeakMap,jf=new WeakMap,ma=new WeakMap,ll=new WeakMap;function ow(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Cn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vf.set(n,t)}).catch(()=>{}),ll.set(e,t),e}function aw(t){if(Za.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Za.set(t,e)}let ec={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Za.get(t);if(e==="objectStoreNames")return t.objectStoreNames||jf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cw(t){ec=t(ec)}function lw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ya(this),e,...n);return jf.set(s,e.sort?e.sort():[e]),Cn(s)}:iw().includes(t)?function(...e){return t.apply(ya(this),e),Cn(Vf.get(this))}:function(...e){return Cn(t.apply(ya(this),e))}}function uw(t){return typeof t=="function"?lw(t):(t instanceof IDBTransaction&&aw(t),sw(t,rw())?new Proxy(t,ec):t)}function Cn(t){if(t instanceof IDBRequest)return ow(t);if(ma.has(t))return ma.get(t);const e=uw(t);return e!==t&&(ma.set(t,e),ll.set(e,t)),e}const ya=t=>ll.get(t);function hw(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Cn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Cn(o.result),c.oldVersion,c.newVersion,Cn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const dw=["get","getKey","getAll","getAllKeys","count"],fw=["put","add","delete","clear"],va=new Map;function Zu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(va.get(e))return va.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=fw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||dw.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return va.set(e,i),i}cw(t=>({...t,get:(e,n,s)=>Zu(e,n)||t.get(e,n,s),has:(e,n)=>!!Zu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function gw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tc="@firebase/app",eh="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new cl("@firebase/app"),mw="@firebase/app-compat",yw="@firebase/analytics-compat",vw="@firebase/analytics",_w="@firebase/app-check-compat",ww="@firebase/app-check",Ew="@firebase/auth",Tw="@firebase/auth-compat",bw="@firebase/database",Iw="@firebase/database-compat",Cw="@firebase/functions",Sw="@firebase/functions-compat",Aw="@firebase/installations",Rw="@firebase/installations-compat",kw="@firebase/messaging",Nw="@firebase/messaging-compat",Dw="@firebase/performance",Ow="@firebase/performance-compat",Pw="@firebase/remote-config",xw="@firebase/remote-config-compat",Lw="@firebase/storage",Mw="@firebase/storage-compat",Uw="@firebase/firestore",Fw="@firebase/firestore-compat",Bw="firebase",$w="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="[DEFAULT]",Vw={[tc]:"fire-core",[mw]:"fire-core-compat",[vw]:"fire-analytics",[yw]:"fire-analytics-compat",[ww]:"fire-app-check",[_w]:"fire-app-check-compat",[Ew]:"fire-auth",[Tw]:"fire-auth-compat",[bw]:"fire-rtdb",[Iw]:"fire-rtdb-compat",[Cw]:"fire-fn",[Sw]:"fire-fn-compat",[Aw]:"fire-iid",[Rw]:"fire-iid-compat",[kw]:"fire-fcm",[Nw]:"fire-fcm-compat",[Dw]:"fire-perf",[Ow]:"fire-perf-compat",[Pw]:"fire-rc",[xw]:"fire-rc-compat",[Lw]:"fire-gcs",[Mw]:"fire-gcs-compat",[Uw]:"fire-fst",[Fw]:"fire-fst-compat","fire-js":"fire-js",[Bw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new Map,sc=new Map;function jw(t,e){try{t.container.addComponent(e)}catch(n){ss.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rs(t){const e=t.name;if(sc.has(e))return ss.debug(`There were multiple attempts to register component ${e}.`),!1;sc.set(e,t);for(const n of Gi.values())jw(n,t);return!0}function Ao(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Sn=new zr("app","Firebase",qw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=$w;function qf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:nc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Sn.create("bad-app-name",{appName:String(r)});if(n||(n=P_()),!n)throw Sn.create("no-options");const i=Gi.get(r);if(i){if(Wi(n,i.options)&&Wi(s,i.config))return i;throw Sn.create("duplicate-app",{appName:r})}const o=new J_(r);for(const c of sc.values())o.addComponent(c);const a=new Hw(n,s,o);return Gi.set(r,a),a}function ul(t=nc){const e=Gi.get(t);if(!e&&t===nc)return qf();if(!e)throw Sn.create("no-app",{appName:t});return e}function zt(t,e,n){var s;let r=(s=Vw[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ss.warn(a.join(" "));return}rs(new Dn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw="firebase-heartbeat-database",zw=1,Nr="firebase-heartbeat-store";let _a=null;function Hf(){return _a||(_a=hw(Kw,zw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Nr)}}}).catch(t=>{throw Sn.create("idb-open",{originalErrorMessage:t.message})})),_a}async function Ww(t){try{return(await Hf()).transaction(Nr).objectStore(Nr).get(Kf(t))}catch(e){if(e instanceof Jt)ss.warn(e.message);else{const n=Sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ss.warn(n.message)}}}async function th(t,e){try{const s=(await Hf()).transaction(Nr,"readwrite");return await s.objectStore(Nr).put(e,Kf(t)),s.done}catch(n){if(n instanceof Jt)ss.warn(n.message);else{const s=Sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ss.warn(s.message)}}}function Kf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=1024,Qw=30*24*60*60*1e3;class Xw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Qw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nh(),{heartbeatsToSend:n,unsentEntries:s}=Yw(this._heartbeatsCache.heartbeats),r=zi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function nh(){return new Date().toISOString().substring(0,10)}function Yw(t,e=Gw){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),sh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),sh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Jw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $_()?V_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ww(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return th(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return th(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function sh(t){return zi(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(t){rs(new Dn("platform-logger",e=>new pw(e),"PRIVATE")),rs(new Dn("heartbeat",e=>new Xw(e),"PRIVATE")),zt(tc,eh,t),zt(tc,eh,"esm2017"),zt("fire-js","")}Zw("");function hl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function zf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eE=zf,Wf=new zr("auth","Firebase",zf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=new cl("@firebase/auth");function Li(t,...e){rh.logLevel<=he.ERROR&&rh.error(`Auth (${Hs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,...e){throw dl(t,...e)}function Wt(t,...e){return dl(t,...e)}function Gf(t,e,n){const s=Object.assign(Object.assign({},eE()),{[e]:n});return new zr("auth","Firebase",s).create(e,{appName:t.name})}function tE(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&At(t,"argument-error"),Gf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function dl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Wf.create(t,...e)}function z(t,e,...n){if(!t)throw dl(e,...n)}function tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Li(e),new Error(e)}function an(t,e){t||tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=new Map;function nn(t){an(t instanceof Function,"Expected a class definition");let e=ih.get(t);return e?(an(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ih.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(t,e){const n=Ao(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Wi(i,e??{}))return r;At(r,"already-initialized")}return n.initialize({options:e})}function sE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rE(){return oh()==="http:"||oh()==="https:"}function oh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rE()||U_()||"connection"in navigator)?navigator.onLine:!0}function oE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n){this.shortDelay=e,this.longDelay=n,an(n>e,"Short delay should be less than long delay!"),this.isMobile=L_()||F_()}get(){return iE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t,e){an(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=new Gr(3e4,6e4);function Qr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xr(t,e,n,s,r={}){return Xf(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Wr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Qf.fetch()(Yf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Xf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},aE),e);try{const r=new lE(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw wi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw wi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw wi(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Gf(t,u,l);At(t,u)}}catch(r){if(r instanceof Jt)throw r;At(t,"network-request-failed")}}async function Yr(t,e,n,s,r={}){const i=await Xr(t,e,n,s,r);return"mfaPendingCredential"in i&&At(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Yf(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?fl(t.config,r):`${t.config.apiScheme}://${r}`}class lE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Wt(this.auth,"network-request-failed")),cE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Wt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uE(t,e){return Xr(t,"POST","/v1/accounts:delete",e)}async function hE(t,e){return Xr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dE(t,e=!1){const n=yt(t),s=await n.getIdToken(e),r=pl(s);z(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:pr(wa(r.auth_time)),issuedAtTime:pr(wa(r.iat)),expirationTime:pr(wa(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wa(t){return Number(t)*1e3}function pl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Li("JWT malformed, contained fewer than 3 sections"),null;try{const r=Mf(n);return r?JSON.parse(r):(Li("Failed to decode base64 JWT payload"),null)}catch(r){return Li("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function fE(t){const e=pl(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Jt&&pE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function pE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pr(this.lastLoginAt),this.creationTime=pr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qi(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Dr(t,hE(n,{idToken:s}));z(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?vE(i.providerUserInfo):[],a=yE(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Jf(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function mE(t){const e=yt(t);await Qi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yE(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function vE(t){return t.map(e=>{var{providerId:n}=e,s=hl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _E(t,e){const n=await Xf(t,{},async()=>{const s=Wr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Yf(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await _E(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Or;return s&&(z(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(z(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Or,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=hl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Jf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Dr(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dE(this,e)}reload(){return mE(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Qi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Dr(this,uE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:P,isAnonymous:H,providerData:Z,stsTokenManager:de}=n;z(T&&de,e,"internal-error");const V=Or.fromJSON(this.name,de);z(typeof T=="string",e,"internal-error"),fn(h,e.name),fn(d,e.name),z(typeof P=="boolean",e,"internal-error"),z(typeof H=="boolean",e,"internal-error"),fn(g,e.name),fn(m,e.name),fn(_,e.name),fn(S,e.name),fn(A,e.name),fn(w,e.name);const ce=new Xn({uid:T,auth:e,email:d,emailVerified:P,displayName:h,isAnonymous:H,photoURL:m,phoneNumber:g,tenantId:_,stsTokenManager:V,createdAt:A,lastLoginAt:w});return Z&&Array.isArray(Z)&&(ce.providerData=Z.map(re=>Object.assign({},re))),S&&(ce._redirectEventId=S),ce}static async _fromIdTokenResponse(e,n,s=!1){const r=new Or;r.updateFromServerResponse(n);const i=new Xn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Qi(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zf.type="NONE";const ah=Zf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t,e,n){return`firebase:${t}:${e}:${n}`}class Is{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Mi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Mi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Is(nn(ah),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||nn(ah);const o=Mi(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Xn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Is(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Is(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(np(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ep(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rp(e))return"Blackberry";if(ip(e))return"Webos";if(gl(e))return"Safari";if((e.includes("chrome/")||tp(e))&&!e.includes("edge/"))return"Chrome";if(sp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ep(t=st()){return/firefox\//i.test(t)}function gl(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tp(t=st()){return/crios\//i.test(t)}function np(t=st()){return/iemobile/i.test(t)}function sp(t=st()){return/android/i.test(t)}function rp(t=st()){return/blackberry/i.test(t)}function ip(t=st()){return/webos/i.test(t)}function Ro(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wE(t=st()){var e;return Ro(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function EE(){return B_()&&document.documentMode===10}function op(t=st()){return Ro(t)||sp(t)||ip(t)||rp(t)||/windows phone/i.test(t)||np(t)}function TE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(t,e=[]){let n;switch(t){case"Browser":n=ch(st());break;case"Worker":n=`${ch(st())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lh(this),this.idTokenSubscription=new lh(this),this.beforeStateQueue=new bE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Is.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?yt(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Is.create(this,[nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ap(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Ks(t){return yt(t)}class lh{constructor(e){this.auth=e,this.observer=null,this.addObserver=z_(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function CE(t,e,n){const s=Ks(t);z(s._canInitEmulator,s,"emulator-config-failed"),z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=cp(e),{host:o,port:a}=SE(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||AE()}function cp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function SE(t){const e=cp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:uh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:uh(o)}}}function uh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function AE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tn("not implemented")}_getIdTokenResponse(e){return tn("not implemented")}_linkToIdToken(e,n){return tn("not implemented")}_getReauthenticationResolver(e){return tn("not implemented")}}async function RE(t,e){return Xr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kE(t,e){return Yr(t,"POST","/v1/accounts:signInWithPassword",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NE(t,e){return Yr(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}async function DE(t,e){return Yr(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends ml{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Pr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Pr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return kE(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return NE(e,{email:this._email,oobCode:this._password});default:At(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return RE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return DE(e,{idToken:n,email:this._email,oobCode:this._password});default:At(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(t,e){return Yr(t,"POST","/v1/accounts:signInWithIdp",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="http://localhost";class is extends ml{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):At("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=hl(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new is(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Cs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cs(e,n)}buildRequest(){const e={requestUri:OE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xE(t){const e=or(ar(t)).link,n=e?or(ar(e)).deep_link_id:null,s=or(ar(t)).deep_link_id;return(s?or(ar(s)).link:null)||s||n||e||t}class yl{constructor(e){var n,s,r,i,o,a;const c=or(ar(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=PE((r=c.mode)!==null&&r!==void 0?r:null);z(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=xE(e);try{return new yl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.providerId=zs.PROVIDER_ID}static credential(e,n){return Pr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=yl.parseLink(n);return z(s,"argument-error"),Pr._fromEmailAndCode(e,s.code,s.tenantId)}}zs.PROVIDER_ID="password";zs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends vl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Jr{constructor(){super("facebook.com")}static credential(e){return is._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Jr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return is._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return xt.credential(n,s)}catch{return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com";xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Jr{constructor(){super("github.com")}static credential(e){return is._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.GITHUB_SIGN_IN_METHOD="github.com";vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Jr{constructor(){super("twitter.com")}static credential(e,n){return is._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return _n.credential(n,s)}catch{return null}}}_n.TWITTER_SIGN_IN_METHOD="twitter.com";_n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LE(t,e){return Yr(t,"POST","/v1/accounts:signUp",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Xn._fromIdTokenResponse(e,s,r),o=hh(s);return new os({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=hh(s);return new os({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function hh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends Jt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Xi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Xi(e,n,s,r)}}function lp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xi._fromErrorAndOperation(t,i,e,s):i})}async function ME(t,e,n=!1){const s=await Dr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return os._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UE(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Dr(t,lp(s,r,e,t),n);z(i.idToken,s,"internal-error");const o=pl(i.idToken);z(o,s,"internal-error");const{sub:a}=o;return z(t.uid===a,s,"user-mismatch"),os._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&At(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function up(t,e,n=!1){const s="signIn",r=await lp(t,s,e),i=await os._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function FE(t,e){return up(Ks(t),e)}async function BE(t,e,n){const s=Ks(t),r=await LE(s,{returnSecureToken:!0,email:e,password:n}),i=await os._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function $E(t,e,n){return FE(yt(t),zs.credential(e,n))}function VE(t,e,n,s){return yt(t).onIdTokenChanged(e,n,s)}function jE(t,e,n){return yt(t).beforeAuthStateChanged(e,n)}function ko(t,e,n,s){return yt(t).onAuthStateChanged(e,n,s)}function qE(t){return yt(t).signOut()}const Yi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yi,"1"),this.storage.removeItem(Yi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(){const t=st();return gl(t)||Ro(t)}const KE=1e3,zE=10;class dp extends hp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=HE()&&TE(),this.fallbackToPolling=op(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);EE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,zE):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},KE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dp.type="LOCAL";const WE=dp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp extends hp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fp.type="SESSION";const pp=fp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new No(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await GE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}No.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=_l("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}function XE(t){Gt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function YE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ZE(){return gp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="firebaseLocalStorageDb",e0=1,Ji="firebaseLocalStorage",yp="fbase_key";class Zr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Do(t,e){return t.transaction([Ji],e?"readwrite":"readonly").objectStore(Ji)}function t0(){const t=indexedDB.deleteDatabase(mp);return new Zr(t).toPromise()}function ic(){const t=indexedDB.open(mp,e0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ji,{keyPath:yp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ji)?e(s):(s.close(),await t0(),e(await ic()))})})}async function dh(t,e,n){const s=Do(t,!0).put({[yp]:e,value:n});return new Zr(s).toPromise()}async function n0(t,e){const n=Do(t,!1).get(e),s=await new Zr(n).toPromise();return s===void 0?null:s.value}function fh(t,e){const n=Do(t,!0).delete(e);return new Zr(n).toPromise()}const s0=800,r0=3;class vp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ic(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>r0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=No._getInstance(ZE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await YE(),!this.activeServiceWorker)return;this.sender=new QE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ic();return await dh(e,Yi,"1"),await fh(e,Yi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>dh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>n0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Do(r,!1).getAll();return new Zr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),s0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vp.type="LOCAL";const i0=vp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function a0(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Wt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",o0().appendChild(s)})}function c0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Gr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(t,e){return e?nn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl extends ml{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function l0(t){return up(t.auth,new wl(t),t.bypassAuthState)}function u0(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),UE(n,new wl(t),t.bypassAuthState)}async function h0(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),ME(n,new wl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return l0;case"linkViaPopup":case"linkViaRedirect":return h0;case"reauthViaPopup":case"reauthViaRedirect":return u0;default:At(this.auth,"internal-error")}}resolve(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=new Gr(2e3,1e4);async function f0(t,e,n){const s=Ks(t);tE(t,e,vl);const r=_p(s,n);return new Kn(s,"signInViaPopup",e,r).executeNotNull()}class Kn extends wp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Kn.currentPopupAction&&Kn.currentPopupAction.cancel(),Kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const e=_l();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,d0.get())};e()}}Kn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0="pendingRedirect",Ui=new Map;class g0 extends wp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ui.get(this.auth._key());if(!e){try{const s=await m0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ui.set(this.auth._key(),e)}return this.bypassAuthState||Ui.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function m0(t,e){const n=_0(e),s=v0(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function y0(t,e){Ui.set(t._key(),e)}function v0(t){return nn(t._redirectPersistence)}function _0(t){return Mi(p0,t.config.apiKey,t.name)}async function w0(t,e,n=!1){const s=Ks(t),r=_p(s,e),o=await new g0(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=10*60*1e3;class T0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!b0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ep(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Wt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=E0&&this.cachedEventUids.clear(),this.cachedEventUids.has(ph(e))}saveEventToCache(e){this.cachedEventUids.add(ph(e)),this.lastProcessedEventTime=Date.now()}}function ph(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ep({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function b0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ep(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I0(t,e={}){return Xr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,S0=/^https?/;async function A0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await I0(t);for(const n of e)try{if(R0(n))return}catch{}At(t,"unauthorized-domain")}function R0(t){const e=rc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!S0.test(n))return!1;if(C0.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=new Gr(3e4,6e4);function gh(){const t=Gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function N0(t){return new Promise((e,n)=>{var s,r,i;function o(){gh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gh(),n(Wt(t,"network-request-failed"))},timeout:k0.get()})}if(!((r=(s=Gt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Gt().gapi)===null||i===void 0)&&i.load)o();else{const a=c0("iframefcb");return Gt()[a]=()=>{gapi.load?o():n(Wt(t,"network-request-failed"))},a0(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Fi=null,e})}let Fi=null;function D0(t){return Fi=Fi||N0(t),Fi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0=new Gr(5e3,15e3),P0="__/auth/iframe",x0="emulator/auth/iframe",L0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},M0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function U0(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fl(e,x0):`https://${t.config.authDomain}/${P0}`,s={apiKey:e.apiKey,appName:t.name,v:Hs},r=M0.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Wr(s).slice(1)}`}async function F0(t){const e=await D0(t),n=Gt().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:U0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:L0,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Wt(t,"network-request-failed"),a=Gt().setTimeout(()=>{i(o)},O0.get());function c(){Gt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$0=500,V0=600,j0="_blank",q0="http://localhost";class mh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function H0(t,e,n,s=$0,r=V0){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},B0),{width:s.toString(),height:r.toString(),top:i,left:o}),l=st().toLowerCase();n&&(a=tp(l)?j0:n),ep(l)&&(e=e||q0,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,m])=>`${d}${g}=${m},`,"");if(wE(l)&&a!=="_self")return K0(e||"",a),new mh(null);const h=window.open(e||"",a,u);z(h,t,"popup-blocked");try{h.focus()}catch{}return new mh(h)}function K0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="__/auth/handler",W0="emulator/auth/handler";function yh(t,e,n,s,r,i){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Hs,eventId:r};if(e instanceof vl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",K_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Jr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${G0(t)}?${Wr(a).slice(1)}`}function G0({config:t}){return t.emulator?fl(t,W0):`https://${t.authDomain}/${z0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="webStorageSupport";class Q0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pp,this._completeRedirectFn=w0,this._overrideRedirectResult=y0}async _openPopup(e,n,s,r){var i;an((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=yh(e,n,s,rc(),r);return H0(e,o,_l())}async _openRedirect(e,n,s,r){return await this._originValidation(e),XE(yh(e,n,s,rc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(an(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await F0(e),s=new T0(e);return n.register("authEvent",r=>(z(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ea,{type:Ea},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ea];o!==void 0&&n(!!o),At(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=A0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return op()||gl()||Ro()}}const X0=Q0;var vh="@firebase/auth",_h="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Z0(t){rs(new Dn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{z(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),z(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ap(t)},u=new IE(a,c,l);return sE(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),rs(new Dn("auth-internal",e=>{const n=Ks(e.getProvider("auth").getImmediate());return(s=>new Y0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(vh,_h,J0(t)),zt(vh,_h,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=5*60,tT=Bf("authIdTokenMaxAge")||eT;let wh=null;const nT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>tT)return;const r=n==null?void 0:n.token;wh!==r&&(wh=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function sT(t=ul()){const e=Ao(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nE(t,{popupRedirectResolver:X0,persistence:[i0,WE,pp]}),s=Bf("authTokenSyncURL");if(s){const i=nT(s);jE(n,i,()=>i(n.currentUser)),VE(n,o=>i(o))}const r=Uf("auth");return r&&CE(n,`http://${r}`),n}Z0("Browser");var rT="firebase",iT="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt(rT,iT,"app");var oT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,El=El||{},G=oT||self;function Zi(){}function Oo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ei(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function aT(t){return Object.prototype.hasOwnProperty.call(t,Ta)&&t[Ta]||(t[Ta]=++cT)}var Ta="closure_uid_"+(1e9*Math.random()>>>0),cT=0;function lT(t,e,n){return t.call.apply(t.bind,arguments)}function uT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=lT:et=uT,et.apply(null,arguments)}function Ei(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Xe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Ln(){this.s=this.s,this.o=this.o}var hT=0;Ln.prototype.s=!1;Ln.prototype.na=function(){!this.s&&(this.s=!0,this.M(),hT!=0)&&aT(this)};Ln.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Tp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Tl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Eh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Oo(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var dT=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",Zi,e),G.removeEventListener("test",Zi,e)}catch{}return t}();function eo(t){return/^[\s\xa0]*$/.test(t)}var Th=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ba(t,e){return t<e?-1:t>e?1:0}function Po(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function jt(t){return Po().indexOf(t)!=-1}function bl(t){return bl[" "](t),t}bl[" "]=Zi;function fT(t){var e=mT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var pT=jt("Opera"),Os=jt("Trident")||jt("MSIE"),bp=jt("Edge"),oc=bp||Os,Ip=jt("Gecko")&&!(Po().toLowerCase().indexOf("webkit")!=-1&&!jt("Edge"))&&!(jt("Trident")||jt("MSIE"))&&!jt("Edge"),gT=Po().toLowerCase().indexOf("webkit")!=-1&&!jt("Edge");function Cp(){var t=G.document;return t?t.documentMode:void 0}var to;e:{var Ia="",Ca=function(){var t=Po();if(Ip)return/rv:([^\);]+)(\)|;)/.exec(t);if(bp)return/Edge\/([\d\.]+)/.exec(t);if(Os)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(gT)return/WebKit\/(\S+)/.exec(t);if(pT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ca&&(Ia=Ca?Ca[1]:""),Os){var Sa=Cp();if(Sa!=null&&Sa>parseFloat(Ia)){to=String(Sa);break e}}to=Ia}var mT={};function yT(){return fT(function(){let t=0;const e=Th(String(to)).split("."),n=Th("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=ba(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||ba(r[2].length==0,i[2].length==0)||ba(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var ac;if(G.document&&Os){var bh=Cp();ac=bh||parseInt(to,10)||void 0}else ac=void 0;var vT=ac;function xr(t,e){if(tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ip){e:{try{bl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:_T[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&xr.X.h.call(this)}}Xe(xr,tt);var _T={2:"touch",3:"pen",4:"mouse"};xr.prototype.h=function(){xr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ti="closure_listenable_"+(1e6*Math.random()|0),wT=0;function ET(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++wT,this.ba=this.ea=!1}function xo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Il(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Sp(t){const e={};for(const n in t)e[n]=t[n];return e}const Ih="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ap(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Ih.length;i++)n=Ih[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Lo(t){this.src=t,this.g={},this.h=0}Lo.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=lc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new ET(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function cc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Tp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(xo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function lc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Cl="closure_lm_"+(1e6*Math.random()|0),Aa={};function Rp(t,e,n,s,r){if(s&&s.once)return Np(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Rp(t,e[i],n,s,r);return null}return n=Rl(n),t&&t[ti]?t.N(e,n,ei(s)?!!s.capture:!!s,r):kp(t,e,n,!1,s,r)}function kp(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=ei(r)?!!r.capture:!!r,a=Al(t);if(a||(t[Cl]=a=new Lo(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=TT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)dT||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Op(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function TT(){function t(n){return e.call(t.src,t.listener,n)}const e=bT;return t}function Np(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Np(t,e[i],n,s,r);return null}return n=Rl(n),t&&t[ti]?t.O(e,n,ei(s)?!!s.capture:!!s,r):kp(t,e,n,!0,s,r)}function Dp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Dp(t,e[i],n,s,r);else s=ei(s)?!!s.capture:!!s,n=Rl(n),t&&t[ti]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=lc(i,n,s,r),-1<n&&(xo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Al(t))&&(e=t.g[e.toString()],t=-1,e&&(t=lc(e,n,s,r)),(n=-1<t?e[t]:null)&&Sl(n))}function Sl(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ti])cc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Op(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Al(e))?(cc(n,t),n.h==0&&(n.src=null,e[Cl]=null)):xo(t)}}}function Op(t){return t in Aa?Aa[t]:Aa[t]="on"+t}function bT(t,e){if(t.ba)t=!0;else{e=new xr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Sl(t),t=n.call(s,e)}return t}function Al(t){return t=t[Cl],t instanceof Lo?t:null}var Ra="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rl(t){return typeof t=="function"?t:(t[Ra]||(t[Ra]=function(e){return t.handleEvent(e)}),t[Ra])}function Ke(){Ln.call(this),this.i=new Lo(this),this.P=this,this.I=null}Xe(Ke,Ln);Ke.prototype[ti]=!0;Ke.prototype.removeEventListener=function(t,e,n,s){Dp(this,t,e,n,s)};function Ge(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new tt(e,t);else if(e instanceof tt)e.target=e.target||t;else{var r=e;e=new tt(s,t),Ap(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ti(o,s,!0,e)&&r}if(o=e.g=t,r=Ti(o,s,!0,e)&&r,r=Ti(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Ti(o,s,!1,e)&&r}Ke.prototype.M=function(){if(Ke.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)xo(n[s]);delete t.g[e],t.h--}}this.I=null};Ke.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ke.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ti(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&cc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var kl=G.JSON.stringify;function IT(){var t=Lp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class CT{constructor(){this.h=this.g=null}add(e,n){const s=Pp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Pp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new ST,t=>t.reset());class ST{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function AT(t){G.setTimeout(()=>{throw t},0)}function xp(t,e){uc||RT(),hc||(uc(),hc=!0),Lp.add(t,e)}var uc;function RT(){var t=G.Promise.resolve(void 0);uc=function(){t.then(kT)}}var hc=!1,Lp=new CT;function kT(){for(var t;t=IT();){try{t.h.call(t.g)}catch(n){AT(n)}var e=Pp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}hc=!1}function Mo(t,e){Ke.call(this),this.h=t||1,this.g=e||G,this.j=et(this.lb,this),this.l=Date.now()}Xe(Mo,Ke);U=Mo.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ge(this,"tick"),this.ca&&(Nl(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Nl(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){Mo.X.M.call(this),Nl(this),delete this.g};function Dl(t,e,n){if(typeof t=="function")n&&(t=et(t,n));else if(t&&typeof t.handleEvent=="function")t=et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function Mp(t){t.g=Dl(()=>{t.g=null,t.i&&(t.i=!1,Mp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class NT extends Ln{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Mp(this)}M(){super.M(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lr(t){Ln.call(this),this.h=t,this.g={}}Xe(Lr,Ln);var Ch=[];function Up(t,e,n,s){Array.isArray(n)||(n&&(Ch[0]=n.toString()),n=Ch);for(var r=0;r<n.length;r++){var i=Rp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Fp(t){Il(t.g,function(e,n){this.g.hasOwnProperty(n)&&Sl(e)},t),t.g={}}Lr.prototype.M=function(){Lr.X.M.call(this),Fp(this)};Lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Uo(){this.g=!0}Uo.prototype.Aa=function(){this.g=!1};function DT(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function OT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function vs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+xT(t,n)+(s?" "+s:"")})}function PT(t,e){t.info(function(){return"TIMEOUT: "+e})}Uo.prototype.info=function(){};function xT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return kl(n)}catch{return e}}var us={},Sh=null;function Fo(){return Sh=Sh||new Ke}us.Pa="serverreachability";function Bp(t){tt.call(this,us.Pa,t)}Xe(Bp,tt);function Mr(t){const e=Fo();Ge(e,new Bp(e))}us.STAT_EVENT="statevent";function $p(t,e){tt.call(this,us.STAT_EVENT,t),this.stat=e}Xe($p,tt);function at(t){const e=Fo();Ge(e,new $p(e,t))}us.Qa="timingevent";function Vp(t,e){tt.call(this,us.Qa,t),this.size=e}Xe(Vp,tt);function ni(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var Bo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},jp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ol(){}Ol.prototype.h=null;function Ah(t){return t.h||(t.h=t.i())}function qp(){}var si={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Pl(){tt.call(this,"d")}Xe(Pl,tt);function xl(){tt.call(this,"c")}Xe(xl,tt);var dc;function $o(){}Xe($o,Ol);$o.prototype.g=function(){return new XMLHttpRequest};$o.prototype.i=function(){return{}};dc=new $o;function ri(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Lr(this),this.O=LT,t=oc?125:void 0,this.T=new Mo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Hp}function Hp(){this.i=null,this.g="",this.h=!1}var LT=45e3,fc={},no={};U=ri.prototype;U.setTimeout=function(t){this.O=t};function pc(t,e,n){t.K=1,t.v=jo(cn(e)),t.s=n,t.P=!0,Kp(t,null)}function Kp(t,e){t.F=Date.now(),ii(t),t.A=cn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Zp(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Hp,t.g=wg(t.l,n?e:null,!t.s),0<t.N&&(t.L=new NT(et(t.La,t,t.g),t.N)),Up(t.S,t.g,"readystatechange",t.ib),e=t.H?Sp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Mr(),DT(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&sn(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const u=sn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||oc||this.g&&(this.h.h||this.g.fa()||Dh(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Mr(3):Mr(2)),Vo(this);var n=this.g.aa();this.Y=n;t:if(zp(this)){var s=Dh(this.g);t="";var r=s.length,i=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zn(this),gr(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,OT(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!eo(a)){var l=a;break t}}l=null}if(n=l)vs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,gc(this,n);else{this.i=!1,this.o=3,at(12),zn(this),gr(this);break e}}this.P?(Wp(this,u,o),oc&&this.i&&u==3&&(Up(this.S,this.T,"tick",this.hb),this.T.start())):(vs(this.j,this.m,o,null),gc(this,o)),u==4&&zn(this),this.i&&!this.I&&(u==4?mg(this.l,this):(this.i=!1,ii(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),zn(this),gr(this)}}}catch{}finally{}};function zp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Wp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=MT(t,n),r==no){e==4&&(t.o=4,at(14),s=!1),vs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==fc){t.o=4,at(15),vs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else vs(t.j,t.m,r,null),gc(t,r);zp(t)&&r!=no&&r!=fc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,at(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vl(e),e.K=!0,at(11))):(vs(t.j,t.m,n,"[Invalid Chunked Response]"),zn(t),gr(t))}U.hb=function(){if(this.g){var t=sn(this.g),e=this.g.fa();this.C<e.length&&(Vo(this),Wp(this,t,e),this.i&&t!=4&&ii(this))}};function MT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?no:(n=Number(e.substring(n,s)),isNaN(n)?fc:(s+=1,s+n>e.length?no:(e=e.substr(s,n),t.C=s+n,e)))}U.cancel=function(){this.I=!0,zn(this)};function ii(t){t.V=Date.now()+t.O,Gp(t,t.O)}function Gp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ni(et(t.gb,t),e)}function Vo(t){t.B&&(G.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(PT(this.j,this.A),this.K!=2&&(Mr(),at(17)),zn(this),this.o=2,gr(this)):Gp(this,this.V-t)};function gr(t){t.l.G==0||t.I||mg(t.l,t)}function zn(t){Vo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Nl(t.T),Fp(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function gc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||mc(n.h,t))){if(!t.J&&mc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)io(n),Ko(n);else break e;$l(n),at(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=ni(et(n.cb,n),6e3));if(1>=ng(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Wn(n,11)}else if((t.J||n.g==t)&&io(n),!eo(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ll(i,i.h),i.h=null))}if(s.D){const _=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,Ie(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=_g(s,s.H?s.ka:null,s.V),o.J){sg(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Vo(a),ii(a)),s.g=o}else pg(s);0<n.i.length&&zo(n)}else l[0]!="stop"&&l[0]!="close"||Wn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Wn(n,7):Bl(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Mr(4)}catch{}}function UT(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Oo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function FT(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Oo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Qp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Oo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=FT(t),s=UT(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Xp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function BT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Yn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Yn){this.h=e!==void 0?e:t.h,so(this,t.j),this.s=t.s,this.g=t.g,ro(this,t.m),this.l=t.l,e=t.i;var n=new Ur;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Rh(this,n),this.o=t.o}else t&&(n=String(t).match(Xp))?(this.h=!!e,so(this,n[1]||"",!0),this.s=cr(n[2]||""),this.g=cr(n[3]||"",!0),ro(this,n[4]),this.l=cr(n[5]||"",!0),Rh(this,n[6]||"",!0),this.o=cr(n[7]||"")):(this.h=!!e,this.i=new Ur(null,this.h))}Yn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(lr(e,kh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(lr(e,kh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(lr(n,n.charAt(0)=="/"?jT:VT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",lr(n,HT)),t.join("")};function cn(t){return new Yn(t)}function so(t,e,n){t.j=n?cr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ro(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Rh(t,e,n){e instanceof Ur?(t.i=e,KT(t.i,t.h)):(n||(e=lr(e,qT)),t.i=new Ur(e,t.h))}function Ie(t,e,n){t.i.set(e,n)}function jo(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function cr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function lr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,$T),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function $T(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var kh=/[#\/\?@]/g,VT=/[#\?:]/g,jT=/[#\?]/g,qT=/[#\?@]/g,HT=/#/g;function Ur(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Mn(t){t.g||(t.g=new Map,t.h=0,t.i&&BT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Ur.prototype;U.add=function(t,e){Mn(this),this.i=null,t=Ws(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Yp(t,e){Mn(t),e=Ws(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Jp(t,e){return Mn(t),e=Ws(t,e),t.g.has(e)}U.forEach=function(t,e){Mn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};U.oa=function(){Mn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};U.W=function(t){Mn(this);let e=[];if(typeof t=="string")Jp(this,t)&&(e=e.concat(this.g.get(Ws(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Mn(this),this.i=null,t=Ws(this,t),Jp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Zp(t,e,n){Yp(t,e),0<n.length&&(t.i=null,t.g.set(Ws(t,e),Tl(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Ws(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function KT(t,e){e&&!t.j&&(Mn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Yp(this,s),Zp(this,r,n))},t)),t.j=e}var zT=class{constructor(t,e){this.h=t,this.g=e}};function eg(t){this.l=t||WT,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ga&&G.g.Ga()&&G.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var WT=10;function tg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ng(t){return t.h?1:t.g?t.g.size:0}function mc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ll(t,e){t.g?t.g.add(e):t.h=e}function sg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}eg.prototype.cancel=function(){if(this.i=rg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function rg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Tl(t.i)}function Ml(){}Ml.prototype.stringify=function(t){return G.JSON.stringify(t,void 0)};Ml.prototype.parse=function(t){return G.JSON.parse(t,void 0)};function GT(){this.g=new Ml}function QT(t,e,n){const s=n||"";try{Qp(t,function(r,i){let o=r;ei(r)&&(o=kl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function XT(t,e){const n=new Uo;if(G.Image){const s=new Image;s.onload=Ei(bi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ei(bi,n,s,"TestLoadImage: error",!1,e),s.onabort=Ei(bi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ei(bi,n,s,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function bi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function oi(t){this.l=t.ac||null,this.j=t.jb||!1}Xe(oi,Ol);oi.prototype.g=function(){return new qo(this.l,this.j)};oi.prototype.i=function(t){return function(){return t}}({});function qo(t,e){Ke.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ul,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xe(qo,Ke);var Ul=0;U=qo.prototype;U.open=function(t,e){if(this.readyState!=Ul)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Fr(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||G).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ai(this)),this.readyState=Ul};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Fr(this)),this.g&&(this.readyState=3,Fr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ig(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function ig(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ai(this):Fr(this),this.readyState==3&&ig(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,ai(this))};U.Ua=function(t){this.g&&(this.response=t,ai(this))};U.ga=function(){this.g&&ai(this)};function ai(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Fr(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Fr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var YT=G.JSON.parse;function ke(t){Ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=og,this.K=this.L=!1}Xe(ke,Ke);var og="",JT=/^https?$/i,ZT=["POST","PUT"];U=ke.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():dc.g(),this.C=this.u?Ah(this.u):Ah(dc),this.g.onreadystatechange=et(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Nh(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=G.FormData&&t instanceof G.FormData,!(0<=Tp(ZT,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{lg(this),0<this.B&&((this.K=eb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.qa,this)):this.A=Dl(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Nh(this,i)}};function eb(t){return Os&&yT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof El<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))};function Nh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ag(t),Ho(t)}function ag(t){t.D||(t.D=!0,Ge(t,"complete"),Ge(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ge(this,"complete"),Ge(this,"abort"),Ho(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ho(this,!0)),ke.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?cg(this):this.fb())};U.fb=function(){cg(this)};function cg(t){if(t.h&&typeof El<"u"&&(!t.C[1]||sn(t)!=4||t.aa()!=2)){if(t.v&&sn(t)==4)Dl(t.Ha,0,t);else if(Ge(t,"readystatechange"),sn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Xp)[1]||null;if(!r&&G.self&&G.self.location){var i=G.self.location.protocol;r=i.substr(0,i.length-1)}s=!JT.test(r?r.toLowerCase():"")}n=s}if(n)Ge(t,"complete"),Ge(t,"success");else{t.m=6;try{var o=2<sn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",ag(t)}}finally{Ho(t)}}}}function Ho(t,e){if(t.g){lg(t);const n=t.g,s=t.C[0]?Zi:null;t.g=null,t.C=null,e||Ge(t,"ready");try{n.onreadystatechange=s}catch{}}}function lg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}function sn(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),YT(e)}};function Dh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case og:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ug(t){let e="";return Il(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Fl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=ug(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ie(t,e,n))}function nr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function hg(t){this.Ca=0,this.i=[],this.j=new Uo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=nr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=nr("baseRetryDelayMs",5e3,t),this.bb=nr("retryDelaySeedMs",1e4,t),this.$a=nr("forwardChannelMaxRetries",2,t),this.ta=nr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new eg(t&&t.concurrentRequestLimit),this.Fa=new GT,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=hg.prototype;U.ma=8;U.G=1;function Bl(t){if(dg(t),t.G==3){var e=t.U++,n=cn(t.F);Ie(n,"SID",t.I),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),ci(t,n),e=new ri(t,t.j,e,void 0),e.K=2,e.v=jo(cn(n)),n=!1,G.navigator&&G.navigator.sendBeacon&&(n=G.navigator.sendBeacon(e.v.toString(),"")),!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=wg(e.l,null),e.g.da(e.v)),e.F=Date.now(),ii(e)}vg(t)}function Ko(t){t.g&&(Vl(t),t.g.cancel(),t.g=null)}function dg(t){Ko(t),t.u&&(G.clearTimeout(t.u),t.u=null),io(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function zo(t){tg(t.h)||t.m||(t.m=!0,xp(t.Ja,t),t.C=0)}function tb(t,e){return ng(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ni(et(t.Ja,t,e),yg(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new ri(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Sp(i),Ap(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=fg(this,r,e),n=cn(this.F),Ie(n,"RID",t),Ie(n,"CVER",22),this.D&&Ie(n,"X-HTTP-Session-Id",this.D),ci(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(ug(i)))+"&"+e:this.o&&Fl(n,this.o,i)),Ll(this.h,r),this.Ya&&Ie(n,"TYPE","init"),this.O?(Ie(n,"$req",e),Ie(n,"SID","null"),r.Z=!0,pc(r,n,null)):pc(r,n,e),this.G=2}}else this.G==3&&(t?Oh(this,t):this.i.length==0||tg(this.h)||Oh(this))};function Oh(t,e){var n;e?n=e.m:n=t.U++;const s=cn(t.F);Ie(s,"SID",t.I),Ie(s,"RID",n),Ie(s,"AID",t.T),ci(t,s),t.o&&t.s&&Fl(s,t.o,t.s),n=new ri(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=fg(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ll(t.h,n),pc(n,s,e)}function ci(t,e){t.ia&&Il(t.ia,function(n,s){Ie(e,s,n)}),t.l&&Qp({},function(n,s){Ie(e,s,n)})}function fg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?et(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{QT(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function pg(t){t.g||t.u||(t.Z=1,xp(t.Ia,t),t.A=0)}function $l(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ni(et(t.Ia,t),yg(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,gg(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ni(et(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,at(10),Ko(this),gg(this))};function Vl(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function gg(t){t.g=new ri(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=cn(t.sa);Ie(e,"RID","rpc"),Ie(e,"SID",t.I),Ie(e,"CI",t.L?"0":"1"),Ie(e,"AID",t.T),Ie(e,"TYPE","xmlhttp"),ci(t,e),t.o&&t.s&&Fl(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=jo(cn(e)),n.s=null,n.P=!0,Kp(n,t)}U.cb=function(){this.v!=null&&(this.v=null,Ko(this),$l(this),at(19))};function io(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function mg(t,e){var n=null;if(t.g==e){io(t),Vl(t),t.g=null;var s=2}else if(mc(t.h,e))n=e.D,sg(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Fo(),Ge(s,new Vp(s,n)),zo(t)}else pg(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&tb(t,e)||s==2&&$l(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Wn(t,5);break;case 4:Wn(t,10);break;case 3:Wn(t,6);break;default:Wn(t,2)}}}function yg(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Wn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=et(t.kb,t);n||(n=new Yn("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||so(n,"https"),jo(n)),XT(n.toString(),s)}else at(2);t.G=0,t.l&&t.l.va(e),vg(t),dg(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function vg(t){if(t.G=0,t.la=[],t.l){const e=rg(t.h);(e.length!=0||t.i.length!=0)&&(Eh(t.la,e),Eh(t.la,t.i),t.h.i.length=0,Tl(t.i),t.i.length=0),t.l.ua()}}function _g(t,e,n){var s=n instanceof Yn?cn(n):new Yn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),ro(s,s.m);else{var r=G.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Yn(null,void 0);s&&so(i,s),e&&(i.g=e),r&&ro(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Ie(s,n,e),Ie(s,"VER",t.ma),ci(t,s),s}function wg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ke(new oi({jb:!0})):new ke(t.ra),e.Ka(t.H),e}function Eg(){}U=Eg.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function oo(){if(Os&&!(10<=Number(vT)))throw Error("Environmental error: no available transport.")}oo.prototype.g=function(t,e){return new Et(t,e)};function Et(t,e){Ke.call(this),this.g=new hg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!eo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!eo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Gs(this)}Xe(Et,Ke);Et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;at(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=_g(t,null,t.V),zo(t)};Et.prototype.close=function(){Bl(this.g)};Et.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=kl(t),t=n);e.i.push(new zT(e.ab++,t)),e.G==3&&zo(e)};Et.prototype.M=function(){this.g.l=null,delete this.j,Bl(this.g),delete this.g,Et.X.M.call(this)};function Tg(t){Pl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Xe(Tg,Pl);function bg(){xl.call(this),this.status=1}Xe(bg,xl);function Gs(t){this.g=t}Xe(Gs,Eg);Gs.prototype.xa=function(){Ge(this.g,"a")};Gs.prototype.wa=function(t){Ge(this.g,new Tg(t))};Gs.prototype.va=function(t){Ge(this.g,new bg)};Gs.prototype.ua=function(){Ge(this.g,"b")};oo.prototype.createWebChannel=oo.prototype.g;Et.prototype.send=Et.prototype.u;Et.prototype.open=Et.prototype.m;Et.prototype.close=Et.prototype.close;Bo.NO_ERROR=0;Bo.TIMEOUT=8;Bo.HTTP_ERROR=6;jp.COMPLETE="complete";qp.EventType=si;si.OPEN="a";si.CLOSE="b";si.ERROR="c";si.MESSAGE="d";Ke.prototype.listen=Ke.prototype.N;ke.prototype.listenOnce=ke.prototype.O;ke.prototype.getLastError=ke.prototype.Oa;ke.prototype.getLastErrorCode=ke.prototype.Ea;ke.prototype.getStatus=ke.prototype.aa;ke.prototype.getResponseJson=ke.prototype.Sa;ke.prototype.getResponseText=ke.prototype.fa;ke.prototype.send=ke.prototype.da;ke.prototype.setWithCredentials=ke.prototype.Ka;var nb=function(){return new oo},sb=function(){return Fo()},ka=Bo,rb=jp,ib=us,Ph={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ob=oi,Ii=qp,ab=ke;const xh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new cl("@firebase/firestore");function Lh(){return as.logLevel}function B(t,...e){if(as.logLevel<=he.DEBUG){const n=e.map(jl);as.debug(`Firestore (${Qs}): ${t}`,...n)}}function ln(t,...e){if(as.logLevel<=he.ERROR){const n=e.map(jl);as.error(`Firestore (${Qs}): ${t}`,...n)}}function yc(t,...e){if(as.logLevel<=he.WARN){const n=e.map(jl);as.warn(`Firestore (${Qs}): ${t}`,...n)}}function jl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Qs}) INTERNAL ASSERTION FAILED: `+t;throw ln(e),new Error(e)}function Ue(t,e){t||ee()}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class lb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ub{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Jn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string"),new Ig(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new Ye(e)}}class hb{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ue(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class db{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new hb(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pb{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ue(typeof n.token=="string"),this.A=n.token,new fb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=gb(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function pe(t,e){return t<e?-1:t>e?1:0}function Ps(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new gt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new gt(0,0))}static max(){return new J(new gt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n,s){n===void 0?n=0:n>e.length&&ee(),s===void 0?s=e.length-n:s>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Br.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Br?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends Br{construct(e,n,s){return new Ae(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new W(O.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const yb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Br{construct(e,n,s){return new ft(e,n,s)}static isValidIdentifier(e){return yb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new W(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new W(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new W(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new W(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ae.fromString(e))}static fromName(e){return new K(Ae.fromString(e).popFirst(5))}static empty(){return new K(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ae(e.slice()))}}function vb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=J.fromTimestamp(s===1e9?new gt(n+1,0):new gt(n,s));return new On(r,K.empty(),e)}function _b(t){return new On(t.readTime,t.key,-1)}class On{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new On(J.min(),K.empty(),-1)}static max(){return new On(J.max(),K.empty(),-1)}}function wb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Tb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ql(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==Eb)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,s)=>{n(e)})}static reject(e){return new C((n,s)=>{s(e)})}static waitFor(e){return new C((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=C.resolve(!1);for(const s of e)n=n.next(r=>r?C.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new C((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new C((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function li(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Hl.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class $r{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $r("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $r&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ib(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t){return t==null}function vc(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new rt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const Cb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pn(t){if(Ue(!!t),typeof t=="string"){let e=0;const n=Cb.exec(t);if(Ue(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xs(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sg(t){const e=t.mapValue.fields.__previous_value__;return Cg(e)?Sg(e):e}function Vr(t){const e=Pn(t.mapValue.fields.__local_write_time__.timestampValue);return new gt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function cs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cg(t)?4:Sb(t)?9007199254740991:10:ee()}function Xt(t,e){if(t===e)return!0;const n=cs(t);if(n!==cs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vr(t).isEqual(Vr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Pn(s.timestampValue),o=Pn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return xs(s.bytesValue).isEqual(xs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Me(s.geoPointValue.latitude)===Me(r.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Me(s.integerValue)===Me(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Me(s.doubleValue),o=Me(r.doubleValue);return i===o?vc(i)===vc(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ps(t.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Mh(i)!==Mh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Xt(i[a],o[a])))return!1;return!0}(t,e);default:return ee()}}function jr(t,e){return(t.values||[]).find(n=>Xt(n,e))!==void 0}function Ls(t,e){if(t===e)return 0;const n=cs(t),s=cs(e);if(n!==s)return pe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Me(r.integerValue||r.doubleValue),a=Me(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Uh(t.timestampValue,e.timestampValue);case 4:return Uh(Vr(t),Vr(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(r,i){const o=xs(r),a=xs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=pe(o[c],a[c]);if(l!==0)return l}return pe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=pe(Me(r.latitude),Me(i.latitude));return o!==0?o:pe(Me(r.longitude),Me(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Ls(o[c],a[c]);if(l)return l}return pe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ci.mapValue&&i===Ci.mapValue)return 0;if(r===Ci.mapValue)return 1;if(i===Ci.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=pe(a[u],l[u]);if(h!==0)return h;const d=Ls(o[a[u]],c[l[u]]);if(d!==0)return d}return pe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw ee()}}function Uh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=Pn(t),s=Pn(e),r=pe(n.seconds,s.seconds);return r!==0?r:pe(n.nanos,s.nanos)}function Ms(t){return _c(t)}function _c(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Pn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?xs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,K.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=_c(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${_c(s.fields[a])}`;return i+"}"}(t.mapValue):ee();var e,n}function wc(t){return!!t&&"integerValue"in t}function Kl(t){return!!t&&"arrayValue"in t}function Fh(t){return!!t&&"nullValue"in t}function Bh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Na(t){return!!t&&"mapValue"in t}function mr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Wo(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=mr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Sb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n){this.position=e,this.inclusive=n}}function $h(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=K.comparator(K.fromName(o.referenceValue),n.key):s=Ls(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Vh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{}class Ve extends Ag{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Rb(e,n,s):n==="array-contains"?new Db(e,s):n==="in"?new Ob(e,s):n==="not-in"?new Pb(e,s):n==="array-contains-any"?new xb(e,s):new Ve(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new kb(e,s):new Nb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ls(n,this.value)):n!==null&&cs(this.value)===cs(n)&&this.matchesComparison(Ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Yt extends Ag{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Yt(e,n)}matches(e){return Rg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Rg(t){return t.op==="and"}function kg(t){return Ab(t)&&Rg(t)}function Ab(t){for(const e of t.filters)if(e instanceof Yt)return!1;return!0}function Ec(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if(kg(t))return t.filters.map(e=>Ec(e)).join(",");{const e=t.filters.map(n=>Ec(n)).join(",");return`${t.op}(${e})`}}function Ng(t,e){return t instanceof Ve?function(n,s){return s instanceof Ve&&n.op===s.op&&n.field.isEqual(s.field)&&Xt(n.value,s.value)}(t,e):t instanceof Yt?function(n,s){return s instanceof Yt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Ng(i,s.filters[o]),!0):!1}(t,e):void ee()}function Dg(t){return t instanceof Ve?function(e){return`${e.field.canonicalString()} ${e.op} ${Ms(e.value)}`}(t):t instanceof Yt?function(e){return e.op.toString()+" {"+e.getFilters().map(Dg).join(" ,")+"}"}(t):"Filter"}class Rb extends Ve{constructor(e,n,s){super(e,n,s),this.key=K.fromName(s.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class kb extends Ve{constructor(e,n){super(e,"in",n),this.keys=Og("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Nb extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=Og("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Og(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>K.fromName(s.referenceValue))}class Db extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kl(n)&&jr(n.arrayValue,this.value)}}class Ob extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&jr(this.value.arrayValue,n)}}class Pb extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(jr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!jr(this.value.arrayValue,n)}}class xb extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>jr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n="asc"){this.field=e,this.dir=n}}function Lb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Si(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Si(this.root,e,this.comparator,!1)}getReverseIterator(){return new Si(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Si(this.root,e,this.comparator,!0)}}class Si{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ze.RED,this.left=r??ze.EMPTY,this.right=i??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ze(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ze.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(t,e,n,s,r){return this}insert(t,e,n){return new ze(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jh(this.data.getIterator())}getIteratorFrom(e){return new jh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class jh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new En([])}unionWith(e){let n=new je(ft.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new En(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ps(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.value=e}static empty(){return new qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Na(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mr(n)}setAll(e){let n=ft.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=mr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Na(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Na(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Wo(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new qt(mr(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Je(e,0,J.min(),J.min(),J.min(),qt.empty(),0)}static newFoundDocument(e,n,s,r){return new Je(e,1,n,J.min(),s,r,0)}static newNoDocument(e,n){return new Je(e,2,n,J.min(),J.min(),qt.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,J.min(),J.min(),qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function qh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Mb(t,e,n,s,r,i,o)}function zl(t){const e=ue(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Ec(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Go(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ms(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ms(s)).join(",")),e.ft=n}return e.ft}function Wl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Lb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ng(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vh(t.startAt,e.startAt)&&Vh(t.endAt,e.endAt)}function Tc(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function Ub(t,e,n,s,r,i,o,a){return new Qo(t,e,n,s,r,i,o,a)}function Pg(t){return new Qo(t)}function Hh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Fb(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Bb(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function $b(t){return t.collectionGroup!==null}function Ss(t){const e=ue(t);if(e.dt===null){e.dt=[];const n=Bb(e),s=Fb(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new yr(n)),e.dt.push(new yr(ft.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new yr(ft.keyField(),i))}}}return e.dt}function un(t){const e=ue(t);if(!e._t)if(e.limitType==="F")e._t=qh(e.path,e.collectionGroup,Ss(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ss(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new yr(i.field,o))}const s=e.endAt?new ao(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ao(e.startAt.position,e.startAt.inclusive):null;e._t=qh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function bc(t,e,n){return new Qo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xo(t,e){return Wl(un(t),un(e))&&t.limitType===e.limitType}function xg(t){return`${zl(un(t))}|lt:${t.limitType}`}function Ic(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Dg(s)).join(", ")}]`),Go(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ms(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ms(s)).join(",")),`Target(${n})`}(un(t))}; limitType=${t.limitType})`}function Yo(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):K.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Ss(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=$h(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Ss(n),s)||n.endAt&&!function(r,i,o){const a=$h(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Ss(n),s))}(t,e)}function Vb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Lg(t){return(e,n)=>{let s=!1;for(const r of Ss(t)){const i=jb(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function jb(t,e,n){const s=t.field.isKeyField()?K.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ls(a,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vc(e)?"-0":e}}function Hb(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(){this._=void 0}}function Kb(t,e,n){return t instanceof Cc?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof co?Mg(t,e):t instanceof lo?Ug(t,e):function(s,r){const i=Wb(s,r),o=Kh(i)+Kh(s.gt);return wc(i)&&wc(s.gt)?Hb(o):qb(s.yt,o)}(t,e)}function zb(t,e,n){return t instanceof co?Mg(t,e):t instanceof lo?Ug(t,e):n}function Wb(t,e){return t instanceof Sc?wc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Cc extends Jo{}class co extends Jo{constructor(e){super(),this.elements=e}}function Mg(t,e){const n=Fg(e);for(const s of t.elements)n.some(r=>Xt(r,s))||n.push(s);return{arrayValue:{values:n}}}class lo extends Jo{constructor(e){super(),this.elements=e}}function Ug(t,e){let n=Fg(e);for(const s of t.elements)n=n.filter(r=>!Xt(r,s));return{arrayValue:{values:n}}}class Sc extends Jo{constructor(e,n){super(),this.yt=e,this.gt=n}}function Kh(t){return Me(t.integerValue||t.doubleValue)}function Fg(t){return Kl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Gb(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof co&&s instanceof co||n instanceof lo&&s instanceof lo?Ps(n.elements,s.elements,Xt):n instanceof Sc&&s instanceof Sc?Xt(n.gt,s.gt):n instanceof Cc&&s instanceof Cc}(t.transform,e.transform)}class Zn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zn}static exists(e){return new Zn(void 0,e)}static updateTime(e){return new Zn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gl{}function Bg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xb(t.key,Zn.none()):new Ql(t.key,t.data,Zn.none());{const n=t.data,s=qt.empty();let r=new je(ft.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Zo(t.key,s,new En(r.toArray()),Zn.none())}}function Qb(t,e,n){t instanceof Ql?function(s,r,i){const o=s.value.clone(),a=Wh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Zo?function(s,r,i){if(!Bi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Wh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll($g(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function vr(t,e,n,s){return t instanceof Ql?function(r,i,o,a){if(!Bi(r.precondition,i))return o;const c=r.value.clone(),l=Gh(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Zo?function(r,i,o,a){if(!Bi(r.precondition,i))return o;const c=Gh(r.fieldTransforms,a,i),l=i.data;return l.setAll($g(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Bi(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function zh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ps(n,s,(r,i)=>Gb(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ql extends Gl{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Zo extends Gl{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $g(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Wh(t,e,n){const s=new Map;Ue(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,zb(o,a,n[r]))}return s}function Gh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Kb(i,o,e))}return s}class Xb extends Gl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,se;function Vg(t){if(t===void 0)return ln("GRPC error has no .code"),O.UNKNOWN;switch(t){case Le.OK:return O.OK;case Le.CANCELLED:return O.CANCELLED;case Le.UNKNOWN:return O.UNKNOWN;case Le.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Le.INTERNAL:return O.INTERNAL;case Le.UNAVAILABLE:return O.UNAVAILABLE;case Le.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Le.NOT_FOUND:return O.NOT_FOUND;case Le.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Le.ABORTED:return O.ABORTED;case Le.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Le.DATA_LOSS:return O.DATA_LOSS;default:return ee()}}(se=Le||(Le={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Wo(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Ib(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=new Qe(K.comparator);function xn(){return Jb}const jg=new Qe(K.comparator);function ur(...t){let e=jg;for(const n of t)e=e.insert(n.key,n);return e}function Zb(t){let e=jg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Gn(){return _r()}function qg(){return _r()}function _r(){return new Xs(t=>t.toString(),(t,e)=>t.isEqual(e))}const eI=new je(K.comparator);function ae(...t){let e=eI;for(const n of t)e=e.add(n);return e}const tI=new je(pe);function Hg(){return tI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ui.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ea(J.min(),r,Hg(),xn(),ae())}}class ui{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ui(s,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Kg{constructor(e,n){this.targetId=e,this.Et=n}}class zg{constructor(e,n,s=rt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Qh{constructor(){this.At=0,this.Rt=Yh(),this.bt=rt.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ae(),n=ae(),s=ae();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ee()}}),new ui(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Yh()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class nI{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=xn(),this.qt=Xh(),this.Ut=new je(pe)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Tc(i))if(s===0){const o=new K(i.path);this.Qt(n,o,Je.newNoDocument(o,J.min()))}else Ue(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Tc(a.target)){const c=new K(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Je.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=ae();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new ea(e,n,this.Ut,this.Lt,s);return this.Lt=xn(),this.qt=Xh(),this.Ut=new je(pe),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Qh,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new je(pe),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Qh),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Xh(){return new Qe(K.comparator)}function Yh(){return new Qe(K.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),rI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),iI=(()=>({and:"AND",or:"OR"}))();class oI{constructor(e,n){this.databaseId=e,this.wt=n}}function aI(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cI(t,e){return t.wt?e.toBase64():e.toUint8Array()}function As(t){return Ue(!!t),J.fromTimestamp(function(e){const n=Pn(e);return new gt(n.seconds,n.nanos)}(t))}function lI(t,e){return function(n){return new Ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Wg(t){const e=Ae.fromString(t);return Ue(Yg(e)),e}function Da(t,e){const n=Wg(e);if(n.get(1)!==t.databaseId.projectId)throw new W(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Gg(n))}function Ac(t,e){return lI(t.databaseId,e)}function uI(t){const e=Wg(t);return e.length===4?Ae.emptyPath():Gg(e)}function Jh(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Gg(t){return Ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function hI(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.wt?(Ue(l===void 0||typeof l=="string"),rt.fromBase64String(l||"")):(Ue(l===void 0||l instanceof Uint8Array),rt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?O.UNKNOWN:Vg(c.code);return new W(l,c.message||"")}(o);n=new zg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Da(t,s.document.name),i=As(s.document.updateTime),o=s.document.createTime?As(s.document.createTime):J.min(),a=new qt({mapValue:{fields:s.document.fields}}),c=Je.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new $i(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Da(t,s.document),i=s.readTime?As(s.readTime):J.min(),o=Je.newNoDocument(r,i),a=s.removedTargetIds||[];n=new $i([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Da(t,s.document),i=s.removedTargetIds||[];n=new $i([],i,r,null)}else{if(!("filter"in e))return ee();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Yb(r),o=s.targetId;n=new Kg(o,i)}}return n}function dI(t,e){return{documents:[Ac(t,e.path)]}}function fI(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ac(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ac(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Xg(Yt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:gs(u.field),direction:mI(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.wt||Go(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function pI(t){let e=uI(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ue(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Qg(u);return h instanceof Yt&&kg(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new yr(ms(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Go(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new ao(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new ao(d,h)}(n.endAt)),Ub(e,r,o,i,a,"F",c,l)}function gI(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ee()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Qg(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ms(e.unaryFilter.field);return Ve.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ms(e.unaryFilter.field);return Ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ms(e.unaryFilter.field);return Ve.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ms(e.unaryFilter.field);return Ve.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(e){return Ve.create(ms(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Yt.create(e.compositeFilter.filters.map(n=>Qg(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return ee()}}(e.compositeFilter.op))}(t):ee()}function mI(t){return sI[t]}function yI(t){return rI[t]}function vI(t){return iI[t]}function gs(t){return{fieldPath:t.canonicalString()}}function ms(t){return ft.fromServerFormat(t.fieldPath)}function Xg(t){return t instanceof Ve?function(e){if(e.op==="=="){if(Bh(e.value))return{unaryFilter:{field:gs(e.field),op:"IS_NAN"}};if(Fh(e.value))return{unaryFilter:{field:gs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Bh(e.value))return{unaryFilter:{field:gs(e.field),op:"IS_NOT_NAN"}};if(Fh(e.value))return{unaryFilter:{field:gs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gs(e.field),op:yI(e.op),value:e.value}}}(t):t instanceof Yt?function(e){const n=e.getFilters().map(s=>Xg(s));return n.length===1?n[0]:{compositeFilter:{op:vI(e.op),filters:n}}}(t):ee()}function Yg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Qb(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=vr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=vr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=qg();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Bg(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&Ps(this.mutations,e.mutations,(n,s)=>zh(n,s))&&Ps(this.baseMutations,e.baseMutations,(n,s)=>zh(n,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n,s,r,i=J.min(),o=J.min(),a=rt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new es(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new es(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e){this.ie=e}}function TI(t){const e=pI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(){this.Je=new II}addToCollectionParentIndex(e,n){return this.Je.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(On.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(On.min())}updateCollectionGroup(e,n,s){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class II{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new je(Ae.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new je(Ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Us(0)}static vn(){return new Us(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(){this.changes=new Xs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?C.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&vr(s.mutation,r,En.empty(),gt.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ae()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ae()){const r=Gn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=ur();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Gn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ae()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=xn();const o=_r(),a=_r();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Zo)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),vr(u.mutation,l,u.mutation.getFieldMask(),gt.now())):o.set(l.key,En.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new SI(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=_r();let r=new Qe((o,a)=>o-a),i=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||En.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ae()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=qg();u.forEach(d=>{if(!i.has(d)){const g=Bg(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return C.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return K.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$b(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):C.resolve(Gn());let a=-1,c=i;return o.next(l=>C.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?C.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ae())).next(u=>({batchId:a,changes:Zb(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(s=>{let r=ur();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=ur();return this.indexManager.getCollectionParents(e,r).next(o=>C.forEach(o,a=>{const c=function(l,u){return new Qo(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Je.newInvalidDocument(l)))});let o=ur();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&vr(l.mutation,c,En.empty(),gt.now()),Yo(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return C.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:As(s.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:TI(s.bundledQuery),readTime:As(s.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(){this.overlays=new Qe(K.comparator),this.es=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Gn();return C.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),C.resolve()}getOverlaysForCollection(e,n,s){const r=Gn(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return C.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Qe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Gn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Gn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return C.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new wI(n,s));let i=this.es.get(n);i===void 0&&(i=ae(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this.ns=new je(qe.ss),this.rs=new je(qe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new qe(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new qe(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new K(new Ae([])),s=new qe(n,e),r=new qe(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new K(new Ae([])),s=new qe(n,e),r=new qe(n,e+1);let i=ae();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new qe(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class qe{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return K.comparator(e.key,n.key)||pe(e._s,n._s)}static os(e,n){return pe(e._s,n._s)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new je(qe.ss)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _I(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new qe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new qe(n,0),r=new qe(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new je(pe);return n.forEach(r=>{const i=new qe(r,0),o=new qe(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),C.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;K.isDocumentKey(i)||(i=i.child(""));const o=new qe(new K(i),0);let a=new je(pe);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),C.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ue(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return C.forEach(n.mutations,r=>{const i=new qe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new qe(n,0),r=this.gs.firstAfterOrEqual(s);return C.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.Es=e,this.docs=new Qe(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return C.resolve(s?s.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let s=xn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Je.newInvalidDocument(r))}),C.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=xn();const o=n.path,a=new K(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||wb(_b(u),s)<=0||(r.has(u.key)||Yo(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,n,s,r){ee()}As(e,n){return C.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new OI(this)}getSize(e){return C.resolve(this.size)}}class OI extends CI{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),C.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.persistence=e,this.Rs=new Xs(n=>zl(n),Wl),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Xl,this.targetCount=0,this.vs=Us.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),C.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Us(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.Dn(n),C.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),C.waitFor(i).next(()=>r)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return C.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),C.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),C.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return C.resolve(s)}containsKey(e,n){return C.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Hl(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new PI(this),this.indexManager=new bI,this.remoteDocumentCache=function(s){return new DI(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new EI(n),this.Ns=new RI(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new kI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new NI(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){B("MemoryPersistence","Starting transaction:",e);const r=new LI(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return C.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class LI extends Tb{constructor(e){super(),this.currentSequenceNumber=e}}class Yl{constructor(e){this.persistence=e,this.Fs=new Xl,this.$s=null}static Bs(e){return new Yl(e)}get Ls(){if(this.$s)return this.$s;throw ee()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),C.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),C.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Ls,s=>{const r=K.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,J.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return C.or([()=>C.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=ae(),r=ae();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Jl(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Hh(n))return C.resolve(null);let s=un(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=bc(n,null,"F"),s=un(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ae(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,bc(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,s,r){return Hh(n)||r.isEqual(J.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(Lh()<=he.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ic(n)),this.Bi(e,o,n,vb(r,-1)))})}Fi(e,n){let s=new je(Lg(e));return n.forEach((r,i)=>{Yo(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return Lh()<=he.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Ic(n)),this.Ni.getDocumentsMatchingQuery(e,n,On.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new Qe(pe),this.Ui=new Xs(i=>zl(i),Wl),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AI(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function FI(t,e,n,s){return new UI(t,e,n,s)}async function Jg(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ae();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function Zg(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function BI(t,e){const n=ue(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(rt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(m,_,S){return m.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,g,u)&&a.push(n.Cs.updateTargetData(i,g))});let c=xn(),l=ae();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push($I(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(J.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.qi=r,i))}function $I(t,e,n){let s=ae(),r=ae();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=xn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function VI(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,C.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new es(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function Rc(t,e,n){const s=ue(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!li(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function Zh(t,e,n){const s=ue(t);let r=J.min(),i=ae();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ue(a),h=u.Ui.get(l);return h!==void 0?C.resolve(u.qi.get(h)):u.Cs.getTargetData(c,l)}(s,o,un(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:J.min(),n?i:ae())).next(a=>(jI(s,Vb(e),a),{documents:a,Hi:i})))}function jI(t,e,n){let s=t.Ki.get(e)||J.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class ed{constructor(){this.activeTargetIds=Hg()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qI{constructor(){this.Lr=new ed,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new ed,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);B("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(B("RestConnection","Received: ",c),c),c=>{throw yc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Qs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=KI[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new ab;a.setWithCredentials(!0),a.listenOnce(rb.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ka.NO_ERROR:const l=a.getResponseJson();B("Connection","XHR received:",JSON.stringify(l)),i(l);break;case ka.TIMEOUT:B("Connection",'RPC "'+e+'" timed out'),o(new W(O.DEADLINE_EXCEEDED,"Request time out"));break;case ka.HTTP_ERROR:const u=a.getStatus();if(B("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const g=function(m){const _=m.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(_)>=0?_:O.UNKNOWN}(d.status);o(new W(g,d.message))}else o(new W(O.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new W(O.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{B("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=nb(),o=sb(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new ob({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");B("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new zI({Hr:m=>{h?B("Connection","Not sending because WebChannel is closed:",m):(u||(B("Connection","Opening WebChannel transport."),l.open(),u=!0),B("Connection","WebChannel sending:",m),l.send(m))},Jr:()=>l.close()}),g=(m,_,S)=>{m.listen(_,A=>{try{S(A)}catch(w){setTimeout(()=>{throw w},0)}})};return g(l,Ii.EventType.OPEN,()=>{h||B("Connection","WebChannel transport opened.")}),g(l,Ii.EventType.CLOSE,()=>{h||(h=!0,B("Connection","WebChannel transport closed"),d.io())}),g(l,Ii.EventType.ERROR,m=>{h||(h=!0,yc("Connection","WebChannel transport errored:",m),d.io(new W(O.UNAVAILABLE,"The operation could not be completed")))}),g(l,Ii.EventType.MESSAGE,m=>{var _;if(!h){const S=m.data[0];Ue(!!S);const A=S,w=A.error||((_=A[0])===null||_===void 0?void 0:_.error);if(w){B("Connection","WebChannel received error:",w);const T=w.status;let P=function(Z){const de=Le[Z];if(de!==void 0)return Vg(de)}(T),H=w.message;P===void 0&&(P=O.INTERNAL,H="Unknown error status: "+T+" with message "+w.message),h=!0,d.io(new W(P,H)),l.close()}else B("Connection","WebChannel received:",S),d.ro(S)}}),g(o,ib.STAT_EVENT,m=>{m.stat===Ph.PROXY?B("Connection","Detected buffering proxy"):m.stat===Ph.NOPROXY&&B("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Oa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t){return new oI(t,!0)}class tm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&B("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new tm(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(ln(n.toString()),ln("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new W(O.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class QI extends GI{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=hI(this.yt,e),s=function(r){if(!("targetChange"in r))return J.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?J.min():i.readTime?As(i.readTime):J.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Jh(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Tc(a)?{documents:dI(r,a)}:{query:fI(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=cI(r,i.resumeToken):i.snapshotVersion.compareTo(J.min())>0&&(o.readTime=aI(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=gI(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Jh(this.yt),n.removeTarget=e,this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new W(O.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new W(O.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(O.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class YI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(ln(n),this.ou=!1):B("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{di(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ue(a);c._u.add(4),await hi(c),c.gu.set("Unknown"),c._u.delete(4),await ta(c)}(this))})}),this.gu=new YI(s,r)}}async function ta(t){if(di(t))for(const e of t.wu)await e(!0)}async function hi(t){for(const e of t.wu)await e(!1)}function nm(t,e){const n=ue(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),tu(n)?eu(n):Ys(n).ko()&&Zl(n,e))}function sm(t,e){const n=ue(t),s=Ys(n);n.du.delete(e),s.ko()&&rm(n,e),n.du.size===0&&(s.ko()?s.Fo():di(n)&&n.gu.set("Unknown"))}function Zl(t,e){t.yu.Ot(e.targetId),Ys(t).zo(e)}function rm(t,e){t.yu.Ot(e),Ys(t).Ho(e)}function eu(t){t.yu=new nI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Ys(t).start(),t.gu.uu()}function tu(t){return di(t)&&!Ys(t).No()&&t.du.size>0}function di(t){return ue(t)._u.size===0}function im(t){t.yu=void 0}async function ZI(t){t.du.forEach((e,n)=>{Zl(t,e)})}async function eC(t,e){im(t),tu(t)?(t.gu.hu(e),eu(t)):t.gu.set("Unknown")}async function tC(t,e,n){if(t.gu.set("Online"),e instanceof zg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await nd(t,s)}else if(e instanceof $i?t.yu.Kt(e):e instanceof Kg?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(J.min()))try{const s=await Zg(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(rt.EMPTY_BYTE_STRING,c.snapshotVersion)),rm(r,a);const l=new es(c.target,a,1,c.sequenceNumber);Zl(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){B("RemoteStore","Failed to raise snapshot:",s),await nd(t,s)}}async function nd(t,e,n){if(!li(e))throw e;t._u.add(1),await hi(t),t.gu.set("Offline"),n||(n=()=>Zg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await ta(t)})}async function sd(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const s=di(n);n._u.add(3),await hi(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await ta(n)}async function nC(t,e){const n=ue(t);e?(n._u.delete(2),await ta(n)):e||(n._u.add(2),await hi(n),n.gu.set("Unknown"))}function Ys(t){return t.pu||(t.pu=function(e,n,s){const r=ue(e);return r.su(),new QI(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:ZI.bind(null,t),Zr:eC.bind(null,t),Wo:tC.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),tu(t)?eu(t):t.gu.set("Unknown")):(await t.pu.stop(),im(t))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new nu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function om(t,e){if(ln("AsyncQueue",`${e}: ${t}`),li(t))return new W(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||K.comparator(n.key,s.key):(n,s)=>K.comparator(n.key,s.key),this.keyedMap=ur(),this.sortedSet=new Qe(this.comparator)}static emptySet(e){return new Rs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Rs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(){this.Tu=new Qe(K.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):ee():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Fs{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Fs(e,n,Rs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(){this.Au=void 0,this.listeners=[]}}class rC{constructor(){this.queries=new Xs(e=>xg(e),Xo),this.onlineState="Unknown",this.Ru=new Set}}async function iC(t,e){const n=ue(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new sC),r)try{i.Au=await n.onListen(s)}catch(o){const a=om(o,`Initialization of query '${Ic(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&su(n)}async function oC(t,e){const n=ue(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function aC(t,e){const n=ue(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&su(n)}function cC(t,e,n){const s=ue(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function su(t){t.Ru.forEach(e=>{e.next()})}class lC{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Fs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e){this.key=e}}class cm{constructor(e){this.key=e}}class uC{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ae(),this.mutatedKeys=ae(),this.Gu=Lg(e),this.Qu=new Rs(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new rd,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=Yo(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),_=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;d&&g?d.data.isEqual(g.data)?m!==_&&(s.track({type:3,doc:g}),S=!0):this.Hu(d,g)||(s.track({type:2,doc:g}),S=!0,(c&&this.Gu(g,c)>0||l&&this.Gu(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),S=!0):d&&!g&&(s.track({type:1,doc:d}),S=!0,(c||l)&&(a=!0)),S&&(g?(o=o.add(g),i=_?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(h,d){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return g(h)-g(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new Fs(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new rd,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ae(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new cm(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new am(s))}),n}tc(e){this.qu=e.Hi,this.Ku=ae();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Fs.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class hC{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class dC{constructor(e){this.key=e,this.nc=!1}}class fC{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Xs(a=>xg(a),Xo),this.rc=new Map,this.oc=new Set,this.uc=new Qe(K.comparator),this.cc=new Map,this.ac=new Xl,this.hc={},this.lc=new Map,this.fc=Us.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function pC(t,e){const n=EC(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await VI(n.localStore,un(e));n.isPrimaryClient&&nm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await gC(n,e,s,a==="current",o.resumeToken)}return r}async function gC(t,e,n,s,r){t._c=(h,d,g)=>async function(m,_,S,A){let w=_.view.Wu(S);w.$i&&(w=await Zh(m.localStore,_.query,!1).then(({documents:H})=>_.view.Wu(H,w)));const T=A&&A.targetChanges.get(_.targetId),P=_.view.applyChanges(w,m.isPrimaryClient,T);return od(m,_.targetId,P.Xu),P.snapshot}(t,h,d,g);const i=await Zh(t.localStore,e,!0),o=new uC(e,i.Hi),a=o.Wu(i.documents),c=ui.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);od(t,n,l.Xu);const u=new hC(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function mC(t,e){const n=ue(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Xo(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Rc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),sm(n.remoteStore,s.targetId),kc(n,s.targetId)}).catch(ql)):(kc(n,s.targetId),await Rc(n.localStore,s.targetId,!0))}async function lm(t,e){const n=ue(t);try{const s=await BI(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(Ue(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?Ue(o.nc):r.removedDocuments.size>0&&(Ue(o.nc),o.nc=!1))}),await hm(n,s,e)}catch(s){await ql(s)}}function id(t,e,n){const s=ue(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=ue(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&su(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function yC(t,e,n){const s=ue(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Qe(K.comparator);o=o.insert(i,Je.newNoDocument(i,J.min()));const a=ae().add(i),c=new ea(J.min(),new Map,new je(pe),o,a);await lm(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),ru(s)}else await Rc(s.localStore,e,!1).then(()=>kc(s,e,n)).catch(ql)}function kc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||um(t,s)})}function um(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(sm(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),ru(t))}function od(t,e,n){for(const s of n)s instanceof am?(t.ac.addReference(s.key,e),vC(t,s)):s instanceof cm?(B("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||um(t,s.key)):ee()}function vC(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(B("SyncEngine","New document in limbo: "+n),t.oc.add(s),ru(t))}function ru(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new K(Ae.fromString(e)),s=t.fc.next();t.cc.set(s,new dC(n)),t.uc=t.uc.insert(n,s),nm(t.remoteStore,new es(un(Pg(n.path)),s,2,Hl.at))}}async function hm(t,e,n){const s=ue(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Jl.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const l=ue(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>C.forEach(c,h=>C.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>C.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!li(u))throw u;B("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.qi.get(h),g=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(g);l.qi=l.qi.insert(h,m)}}}(s.localStore,i))}async function _C(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const s=await Jg(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new W(O.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await hm(n,s.ji)}}function wC(t,e){const n=ue(t),s=n.cc.get(e);if(s&&s.nc)return ae().add(s.key);{let r=ae();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function EC(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=lm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yC.bind(null,e),e.sc.Wo=aC.bind(null,e.eventManager),e.sc.wc=cC.bind(null,e.eventManager),e}class TC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=em(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return FI(this.persistence,new MI,e.initialUser,this.yt)}yc(e){return new xI(Yl.Bs,this.yt)}gc(e){return new qI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class bC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>id(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=_C.bind(null,this.syncEngine),await nC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rC}createDatastore(e){const n=em(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new WI(r));var r;return function(i,o,a,c){return new XI(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>id(this.syncEngine,a,0),o=td.C()?new td:new HI,new JI(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new fC(s,r,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ue(e);B("RemoteStore","RemoteStore shutting down."),n._u.add(5),await hi(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t,e,n){if(!n)throw new W(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function CC(t,e,n,s){if(e===!0&&s===!0)throw new W(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ad(t){if(K.isDocumentKey(t))throw new W(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function SC(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Nc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=SC(t);throw new W(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=new Map;class ld{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new W(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,CC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ld({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ld(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new cb;switch(n.type){case"gapi":const s=n.client;return new db(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new W(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=cd.get(e);n&&(B("ComponentProvider","Removing Datastore"),cd.delete(e),n.terminate())}(this),Promise.resolve()}}function AC(t,e,n,s={}){var r;const i=(t=Nc(t,iu))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&yc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ye.MOCK_USER;else{o=$f(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new W(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ye(c)}t._authCredentials=new lb(new Ig(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ks(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Js(this.firestore,e,this._key)}}class na{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new na(this.firestore,e,this._query)}}class ks extends na{constructor(e,n,s){super(e,n,Pg(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Js(this.firestore,null,new K(e))}withConverter(e){return new ks(this.firestore,e,this._path)}}function sa(t,e,...n){if(t=yt(t),IC("collection","path",e),t instanceof iu){const s=Ae.fromString(e,...n);return ad(s),new ks(t,null,s)}{if(!(t instanceof Js||t instanceof ks))throw new W(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ae.fromString(e,...n));return ad(s),new ks(t.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):ln("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ye.UNAUTHENTICATED,this.clientId=mb.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{B("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(B("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=om(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function NC(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Jg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function DC(t,e){t.asyncQueue.verifyOperationInProgress();const n=await OC(t);B("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>sd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>sd(e.remoteStore,i)),t.onlineComponents=e}async function OC(t){return t.offlineComponents||(B("FirestoreClient","Using default OfflineComponentProvider"),await NC(t,new TC)),t.offlineComponents}async function PC(t){return t.onlineComponents||(B("FirestoreClient","Using default OnlineComponentProvider"),await DC(t,new bC)),t.onlineComponents}async function xC(t){const e=await PC(t),n=e.eventManager;return n.onListen=pC.bind(null,e.syncEngine),n.onUnlisten=mC.bind(null,e.syncEngine),n}function LC(t,e,n={}){const s=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new RC({next:h=>{i.enqueueAndForget(()=>oC(r,u)),h.fromCache&&a.source==="server"?c.reject(new W(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new lC(o,l,{includeMetadataChanges:!0,Nu:!0});return iC(r,u)}(await xC(t),t.asyncQueue,e,n,s)),s.promise}class MC{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new tm(this,"async_queue_retry"),this.Wc=()=>{const n=Oa();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Oa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Oa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Jn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!li(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw ln("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=nu.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&ee()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class dm extends iu{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new MC,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fm(this),this._firestoreClient.terminate()}}function UC(t,e){const n=typeof t=="object"?t:ul(),s=typeof t=="string"?t:e||"(default)",r=Ao(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Ff("firestore");i&&AC(r,...i)}return r}function FC(t){return t._firestoreClient||fm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function fm(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new bb(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new kC(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new uo(rt.fromBase64String(e))}catch(n){throw new W(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new uo(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}const $C=new RegExp("[~\\*/\\[\\]]");function VC(t,e,n){if(e.search($C)>=0)throw ud(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pm(...e.split("."))._internalPath}catch{throw ud(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ud(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new W(O.INVALID_ARGUMENT,a+t+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Js(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jC extends gm{data(){return super.data()}}function mm(t,e){return typeof e=="string"?VC(t,e):e instanceof pm?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class HC{convertValue(e,n="none"){switch(cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){const s={};return Wo(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new BC(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Sg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Vr(e));default:return null}}convertTimestamp(e){const n=Pn(e);return new gt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ae.fromString(e);Ue(Yg(s));const r=new $r(s.get(1),s.get(3)),i=new K(s.popFirst(5));return r.isEqual(n)||ln(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class KC extends gm{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Vi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(mm("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Vi extends KC{data(e={}){return super.data(e)}}class zC{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ai(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Vi(this._firestore,this._userDataWriter,s.key,s,new Ai(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Vi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ai(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Vi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ai(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:WC(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function WC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}class GC extends HC{constructor(e){super(),this.firestore=e}convertBytes(e){return new uo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Js(this.firestore,null,n)}}function ra(t){t=Nc(t,na);const e=Nc(t.firestore,dm),n=FC(e),s=new GC(e);return qC(t._query),LC(n,t._query).then(r=>new zC(e,s,t,r))}(function(t,e=!0){(function(n){Qs=n})(Hs),rs(new Dn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new dm(new ub(n.getProvider("auth-internal")),new pb(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new W(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $r(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),zt(xh,"3.8.3",t),zt(xh,"3.8.3","esm2017")})();const ym=qf({apiKey:"AIzaSyDZ4MMbVH5GTWWU_QIcnImnBisdtkDEZ4Q",authDomain:"autentificacion-6e56f.firebaseapp.com",projectId:"autentificacion-6e56f",storageBucket:"autentificacion-6e56f.appspot.com",messagingSenderId:"986000935330",appId:"1:986000935330:web:551d625a52738d7e3fcafb"}),An=sT(ym),ia=UC(ym);const Zs=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},vm=t=>(Jc("data-v-b1607e99"),t=t(),Zc(),t),QC=vm(()=>F("fieldset",null,"Iniciar Sesión",-1)),XC=vm(()=>F("fieldset",null,"Cerrar Sesión",-1)),YC={__name:"cabecera",setup(t){let e=ns("");ko(An,s=>{e.value=!!s});function n(){qE(An).then(()=>{console.log("Sesion cerrada")}).catch(s=>{console.log(s)})}return(s,r)=>{const i=Nu("router-link"),o=Nu("router-view");return ve(),lt($e,null,[F("header",null,[F("nav",null,[_e(i,{to:"/"},{default:ge(()=>[Re("Inicio")]),_:1}),_e(i,{to:"/ofimatica"},{default:ge(()=>[Re("Ofimática")]),_:1}),_e(i,{to:"/programacion"},{default:ge(()=>[Re("Programación")]),_:1}),_e(i,{to:"/sos"},{default:ge(()=>[Re("SOs")]),_:1}),ct(e)?(ve(),Ct(i,{key:0,to:"/admin"},{default:ge(()=>[Re("Administración")]),_:1})):ol("",!0),ct(e)?(ve(),Ct(i,{key:2,to:"/registro",onClick:n},{default:ge(()=>[XC]),_:1})):(ve(),Ct(i,{key:1,to:"/registro"},{default:ge(()=>[QC]),_:1}))])]),F("main",null,[(ve(),Ct(iv,null,{default:ge(()=>[_e(o)]),_:1}))])],64)}}},JC=Zs(YC,[["__scopeId","data-v-b1607e99"]]);const ZC={},_m=t=>(Jc("data-v-63d6b3e6"),t=t(),Zc(),t),eS=_m(()=>F("div",{class:"copy"},[F("p",null,[F("a",{href:"https://github.com/DavNotDab"},"© DavNotDab"),Re(" - Todos los derechos reservados")])],-1)),tS=_m(()=>F("div",{class:"privacy"},[F("p",null,"A través de este sitio web no se recaban datos de carácter personal de las personas usuarias sin su conocimiento, ni se ceden a terceros."),F("p",null,"Contacto: +34 657 889 123 | help.cursos@vue.com")],-1)),nS=[eS,tS];function sS(t,e){return ve(),lt("footer",null,nS)}const rS=Zs(ZC,[["render",sS],["__scopeId","data-v-63d6b3e6"]]);const iS=t=>(Jc("data-v-882ac9b4"),t=t(),Zc(),t),oS={key:0},aS=iS(()=>F("div",{class:"preload"},null,-1)),cS=[aS],lS={__name:"App",setup(t){return nl(()=>{setTimeout(()=>{window=!1},2e3)}),(e,n)=>(ve(),lt($e,null,[_e(JC),e.window?(ve(),lt("div",oS,cS)):ol("",!0),_e(rS)],64))}},uS=Zs(lS,[["__scopeId","data-v-882ac9b4"]]),hS="/assets/bienvenida2-ed4b03c9.png";const dS={},fS={class:"item"},pS={class:"details"};function gS(t,e){return ve(),lt("div",fS,[F("i",null,[$t(t.$slots,"icon",{},void 0,!0)]),F("div",pS,[F("h3",null,[$t(t.$slots,"heading",{},void 0,!0)]),$t(t.$slots,"default",{},void 0,!0)])])}const mS=Zs(dS,[["render",gS],["__scopeId","data-v-f1b0f727"]]),yS={},vS={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},_S=F("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),wS=[_S];function ES(t,e){return ve(),lt("svg",vS,wS)}const TS=Zs(yS,[["render",ES]]);const bS=F("h1",null,"Bienvenido",-1),IS=F("div",{class:"bienvenida"},[F("section",{class:"texto"},[F("article",null,[F("h2",null,"Esta es una web de cursos online"),F("p",null,"Te enseñamos cosas relacionadas con la informática para que desarrolles tu carrera tecnológica.")]),F("p",null,"Este es un proyecto de Vue realizado para la asignatura de Desarrollo Web en Entorno Cliente."),F("p",null,"Aquí debemos mostrar que sabemos hacer algo con Vue. Aunque sea muy simple.")]),F("section",{class:"imagen"},[F("img",{src:hS,alt:"Logo-Bienvenida"})])],-1),CS={__name:"Bienvenida",setup(t){return(e,n)=>(ve(),lt($e,null,[_e(mS,null,{icon:ge(()=>[_e(TS)]),heading:ge(()=>[bS]),_:1}),IS],64))}},SS=F("h1",null,"Registro",-1),AS=F("label",{for:"usuario"},"Usuario: ",-1),RS=F("br",null,null,-1),kS=F("label",{for:"password"},"Password: ",-1),NS=F("br",null,null,-1),DS={__name:"registro",setup(t){let e=ns(""),n=ns("");const s=new xt;function r(){BE(An,e.value,n.value).then(a=>{const c=a.user;console.log(c)}).catch(a=>{const c=a.code,l=a.message;console.log(c,l)})}function i(){$E(An,e.value,n.value).then(a=>{const c=a.user;console.log(c)}).catch(a=>{const c=a.code,l=a.message;console.log(c,l)})}function o(){f0(An,s).then(a=>{xt.credentialFromResult(a).accessToken,a.user}).catch(a=>{a.code,a.message,a.customData.email,xt.credentialFromError(a)})}return(a,c)=>(ve(),lt("div",null,[SS,AS,ku(F("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=l=>He(e)?e.value=l:e=l),placeholder:"usuario",id:"usuario",name:"usuario"},null,512),[[Gu,ct(e)]]),Re(),RS,kS,ku(F("input",{type:"password","onUpdate:modelValue":c[1]||(c[1]=l=>He(n)?n.value=l:n=l),placeholder:"password",id:"password",name:"password"},null,512),[[Gu,ct(n)]]),Re(),NS,F("button",{onClick:r},"Registrar"),F("button",{onClick:i},"Iniciar Sesión"),F("button",{onClick:o},"Login Google")]))}};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ys=typeof window<"u";function OS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const fe=Object.assign;function Pa(t,e){const n={};for(const s in e){const r=e[s];n[s]=Mt(r)?r.map(t):t(r)}return n}const wr=()=>{},Mt=Array.isArray,PS=/\/$/,xS=t=>t.replace(PS,"");function xa(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=FS(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function LS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function hd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function MS(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Bs(e.matched[s],n.matched[r])&&wm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Bs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function wm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!US(t[n],e[n]))return!1;return!0}function US(t,e){return Mt(t)?dd(t,e):Mt(e)?dd(e,t):t===e}function dd(t,e){return Mt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function FS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var qr;(function(t){t.pop="pop",t.push="push"})(qr||(qr={}));var Er;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Er||(Er={}));function BS(t){if(!t)if(ys){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),xS(t)}const $S=/^[^#]+#/;function VS(t,e){return t.replace($S,"#")+e}function jS(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const oa=()=>({left:window.pageXOffset,top:window.pageYOffset});function qS(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=jS(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function fd(t,e){return(history.state?history.state.position-e:-1)+t}const Dc=new Map;function HS(t,e){Dc.set(t,e)}function KS(t){const e=Dc.get(t);return Dc.delete(t),e}let zS=()=>location.protocol+"//"+location.host;function Em(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),hd(c,"")}return hd(n,t)+s+r}function WS(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=Em(t,location),m=n.value,_=e.value;let S=0;if(d){if(n.value=g,e.value=d,o&&o===m){o=null;return}S=_?d.position-_.position:0}else s(g);r.forEach(A=>{A(n.value,m,{delta:S,type:qr.pop,direction:S?S>0?Er.forward:Er.back:Er.unknown})})};function c(){o=n.value}function l(d){r.push(d);const g=()=>{const m=r.indexOf(d);m>-1&&r.splice(m,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(fe({},d.state,{scroll:oa()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function pd(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?oa():null}}function GS(t){const{history:e,location:n}=window,s={value:Em(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:zS()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=fe({},e.state,pd(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=fe({},r.value,e.state,{forward:c,scroll:oa()});i(u.current,u,!0);const h=fe({},pd(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function QS(t){t=BS(t);const e=GS(t),n=WS(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=fe({location:"",base:t,go:s,createHref:VS.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function XS(t){return typeof t=="string"||t&&typeof t=="object"}function Tm(t){return typeof t=="string"||typeof t=="symbol"}const pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},bm=Symbol("");var gd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(gd||(gd={}));function $s(t,e){return fe(new Error,{type:t,[bm]:!0},e)}function Zt(t,e){return t instanceof Error&&bm in t&&(e==null||!!(t.type&e))}const md="[^/]+?",YS={sensitive:!1,strict:!1,start:!0,end:!0},JS=/[.+*?^${}()[\]/\\]/g;function ZS(t,e){const n=fe({},YS,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(JS,"\\$&"),g+=40;else if(d.type===1){const{value:m,repeatable:_,optional:S,regexp:A}=d;i.push({name:m,repeatable:_,optional:S});const w=A||md;if(w!==md){g+=10;try{new RegExp(`(${w})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${m}" (${w}): `+P.message)}}let T=_?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(T=S&&l.length<2?`(?:/${T})`:"/"+T),S&&(T+="?"),r+=T,g+=20,S&&(g+=-8),_&&(g+=-20),w===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",m=i[d-1];h[m.name]=g&&m.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:m,repeatable:_,optional:S}=g,A=m in l?l[m]:"";if(Mt(A)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const w=Mt(A)?A.join("/"):A;if(!w)if(S)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=w}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function eA(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function tA(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=eA(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(yd(s))return 1;if(yd(r))return-1}return r.length-s.length}function yd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const nA={type:0,value:""},sA=/[a-zA-Z0-9_]/;function rA(t){if(!t)return[[]];if(t==="/")return[[nA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:sA.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function iA(t,e,n){const s=ZS(rA(t.path),n),r=fe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function oA(t,e){const n=[],s=new Map;e=wd({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const g=!d,m=aA(u);m.aliasOf=d&&d.record;const _=wd(e,u),S=[m];if("alias"in u){const T=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of T)S.push(fe({},m,{components:d?d.record.components:m.components,path:P,aliasOf:d?d.record:m}))}let A,w;for(const T of S){const{path:P}=T;if(h&&P[0]!=="/"){const H=h.record.path,Z=H[H.length-1]==="/"?"":"/";T.path=h.record.path+(P&&Z+P)}if(A=iA(T,h,_),d?d.alias.push(A):(w=w||A,w!==A&&w.alias.push(A),g&&u.name&&!_d(A)&&o(u.name)),m.children){const H=m.children;for(let Z=0;Z<H.length;Z++)i(H[Z],A,d&&d.children[Z])}d=d||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return w?()=>{o(w)}:wr}function o(u){if(Tm(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&tA(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Im(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!_d(u)&&s.set(u.record.name,u)}function l(u,h){let d,g={},m,_;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw $s(1,{location:u});_=d.record.name,g=fe(vd(h.params,d.keys.filter(w=>!w.optional).map(w=>w.name)),u.params&&vd(u.params,d.keys.map(w=>w.name))),m=d.stringify(g)}else if("path"in u)m=u.path,d=n.find(w=>w.re.test(m)),d&&(g=d.parse(m),_=d.record.name);else{if(d=h.name?s.get(h.name):n.find(w=>w.re.test(h.path)),!d)throw $s(1,{location:u,currentLocation:h});_=d.record.name,g=fe({},h.params,u.params),m=d.stringify(g)}const S=[];let A=d;for(;A;)S.unshift(A.record),A=A.parent;return{name:_,path:m,params:g,matched:S,meta:lA(S)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function vd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function aA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:cA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function cA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function _d(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lA(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function wd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Im(t,e){return e.children.some(n=>n===t||Im(t,n))}const Cm=/#/g,uA=/&/g,hA=/\//g,dA=/=/g,fA=/\?/g,Sm=/\+/g,pA=/%5B/g,gA=/%5D/g,Am=/%5E/g,mA=/%60/g,Rm=/%7B/g,yA=/%7C/g,km=/%7D/g,vA=/%20/g;function ou(t){return encodeURI(""+t).replace(yA,"|").replace(pA,"[").replace(gA,"]")}function _A(t){return ou(t).replace(Rm,"{").replace(km,"}").replace(Am,"^")}function Oc(t){return ou(t).replace(Sm,"%2B").replace(vA,"+").replace(Cm,"%23").replace(uA,"%26").replace(mA,"`").replace(Rm,"{").replace(km,"}").replace(Am,"^")}function wA(t){return Oc(t).replace(dA,"%3D")}function EA(t){return ou(t).replace(Cm,"%23").replace(fA,"%3F")}function TA(t){return t==null?"":EA(t).replace(hA,"%2F")}function ho(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function bA(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Sm," "),o=i.indexOf("="),a=ho(o<0?i:i.slice(0,o)),c=o<0?null:ho(i.slice(o+1));if(a in e){let l=e[a];Mt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Ed(t){let e="";for(let n in t){const s=t[n];if(n=wA(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Mt(s)?s.map(i=>i&&Oc(i)):[s&&Oc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function IA(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Mt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const CA=Symbol(""),Td=Symbol(""),au=Symbol(""),Nm=Symbol(""),Pc=Symbol("");function sr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function mn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a($s(4,{from:n,to:e})):h instanceof Error?a(h):XS(h)?a($s(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function La(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(SA(a)){const l=(a.__vccOpts||a)[e];l&&r.push(mn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=OS(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&mn(d,n,s,i,o)()}))}}return r}function SA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function bd(t){const e=rn(au),n=rn(Nm),s=bt(()=>e.resolve(ct(t.to))),r=bt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Bs.bind(null,u));if(d>-1)return d;const g=Id(c[l-2]);return l>1&&Id(u)===g&&h[h.length-1].path!==g?h.findIndex(Bs.bind(null,c[l-2])):d}),i=bt(()=>r.value>-1&&NA(n.params,s.value.params)),o=bt(()=>r.value>-1&&r.value===n.matched.length-1&&wm(n.params,s.value.params));function a(c={}){return kA(c)?e[ct(t.replace)?"replace":"push"](ct(t.to)).catch(wr):Promise.resolve()}return{route:s,href:bt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const AA=ff({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bd,setup(t,{slots:e}){const n=Hr(bd(t)),{options:s}=rn(au),r=bt(()=>({[Cd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Cd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Pf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),RA=AA;function kA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function NA(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Mt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Id(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Cd=(t,e,n)=>t??e??n,DA=ff({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=rn(Pc),r=bt(()=>t.route||s.value),i=rn(Td,0),o=bt(()=>{let l=ct(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=bt(()=>r.value.matched[o.value]);Oi(Td,bt(()=>o.value+1)),Oi(CA,a),Oi(Pc,r);const c=ns();return Pi(()=>[c.value,a.value,t.name],([l,u,h],[d,g,m])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Bs(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Sd(n.default,{Component:d,route:l});const g=h.props[u],m=g?g===!0?l.params:typeof g=="function"?g(l):g:null,S=Pf(d,fe({},m,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Sd(n.default,{Component:S,route:l})||S}}});function Sd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const OA=DA;function PA(t){const e=oA(t.routes,t),n=t.parseQuery||bA,s=t.stringifyQuery||Ed,r=t.history,i=sr(),o=sr(),a=sr(),c=qy(pn);let l=pn;ys&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Pa.bind(null,E=>""+E),h=Pa.bind(null,TA),d=Pa.bind(null,ho);function g(E,L){let D,$;return Tm(E)?(D=e.getRecordMatcher(E),$=L):$=E,e.addRoute($,D)}function m(E){const L=e.getRecordMatcher(E);L&&e.removeRoute(L)}function _(){return e.getRoutes().map(E=>E.record)}function S(E){return!!e.getRecordMatcher(E)}function A(E,L){if(L=fe({},L||c.value),typeof E=="string"){const f=xa(n,E,L.path),p=e.resolve({path:f.path},L),y=r.createHref(f.fullPath);return fe(f,p,{params:d(p.params),hash:ho(f.hash),redirectedFrom:void 0,href:y})}let D;if("path"in E)D=fe({},E,{path:xa(n,E.path,L.path).path});else{const f=fe({},E.params);for(const p in f)f[p]==null&&delete f[p];D=fe({},E,{params:h(E.params)}),L.params=h(L.params)}const $=e.resolve(D,L),ie=E.hash||"";$.params=u(d($.params));const Se=LS(s,fe({},E,{hash:_A(ie),path:$.path})),te=r.createHref(Se);return fe({fullPath:Se,hash:ie,query:s===Ed?IA(E.query):E.query||{}},$,{redirectedFrom:void 0,href:te})}function w(E){return typeof E=="string"?xa(n,E,c.value.path):fe({},E)}function T(E,L){if(l!==E)return $s(8,{from:L,to:E})}function P(E){return de(E)}function H(E){return P(fe(w(E),{replace:!0}))}function Z(E){const L=E.matched[E.matched.length-1];if(L&&L.redirect){const{redirect:D}=L;let $=typeof D=="function"?D(E):D;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=w($):{path:$},$.params={}),fe({query:E.query,hash:E.hash,params:"path"in $?{}:E.params},$)}}function de(E,L){const D=l=A(E),$=c.value,ie=E.state,Se=E.force,te=E.replace===!0,f=Z(D);if(f)return de(fe(w(f),{state:typeof f=="object"?fe({},ie,f.state):ie,force:Se,replace:te}),L||D);const p=D;p.redirectedFrom=L;let y;return!Se&&MS(s,$,D)&&(y=$s(16,{to:p,from:$}),Un($,$,!0,!1)),(y?Promise.resolve(y):ce(p,$)).catch(v=>Zt(v)?Zt(v,2)?v:Rt(v):we(v,p,$)).then(v=>{if(v){if(Zt(v,2))return de(fe({replace:te},w(v.to),{state:typeof v.to=="object"?fe({},ie,v.to.state):ie,force:Se}),L||p)}else v=Te(p,$,!0,te,ie);return re(p,$,v),v})}function V(E,L){const D=T(E,L);return D?Promise.reject(D):Promise.resolve()}function ce(E,L){let D;const[$,ie,Se]=xA(E,L);D=La($.reverse(),"beforeRouteLeave",E,L);for(const f of $)f.leaveGuards.forEach(p=>{D.push(mn(p,E,L))});const te=V.bind(null,E,L);return D.push(te),fs(D).then(()=>{D=[];for(const f of i.list())D.push(mn(f,E,L));return D.push(te),fs(D)}).then(()=>{D=La(ie,"beforeRouteUpdate",E,L);for(const f of ie)f.updateGuards.forEach(p=>{D.push(mn(p,E,L))});return D.push(te),fs(D)}).then(()=>{D=[];for(const f of E.matched)if(f.beforeEnter&&!L.matched.includes(f))if(Mt(f.beforeEnter))for(const p of f.beforeEnter)D.push(mn(p,E,L));else D.push(mn(f.beforeEnter,E,L));return D.push(te),fs(D)}).then(()=>(E.matched.forEach(f=>f.enterCallbacks={}),D=La(Se,"beforeRouteEnter",E,L),D.push(te),fs(D))).then(()=>{D=[];for(const f of o.list())D.push(mn(f,E,L));return D.push(te),fs(D)}).catch(f=>Zt(f,8)?f:Promise.reject(f))}function re(E,L,D){for(const $ of a.list())$(E,L,D)}function Te(E,L,D,$,ie){const Se=T(E,L);if(Se)return Se;const te=L===pn,f=ys?history.state:{};D&&($||te?r.replace(E.fullPath,fe({scroll:te&&f&&f.scroll},ie)):r.push(E.fullPath,ie)),c.value=E,Un(E,L,D,te),Rt()}let Be;function ut(){Be||(Be=r.listen((E,L,D)=>{if(!fi.listening)return;const $=A(E),ie=Z($);if(ie){de(fe(ie,{replace:!0}),$).catch(wr);return}l=$;const Se=c.value;ys&&HS(fd(Se.fullPath,D.delta),oa()),ce($,Se).catch(te=>Zt(te,12)?te:Zt(te,2)?(de(te.to,$).then(f=>{Zt(f,20)&&!D.delta&&D.type===qr.pop&&r.go(-1,!1)}).catch(wr),Promise.reject()):(D.delta&&r.go(-D.delta,!1),we(te,$,Se))).then(te=>{te=te||Te($,Se,!1),te&&(D.delta&&!Zt(te,8)?r.go(-D.delta,!1):D.type===qr.pop&&Zt(te,20)&&r.go(-1,!1)),re($,Se,te)}).catch(wr)}))}let vt=sr(),er=sr(),Pe;function we(E,L,D){Rt(E);const $=er.list();return $.length?$.forEach(ie=>ie(E,L,D)):console.error(E),Promise.reject(E)}function me(){return Pe&&c.value!==pn?Promise.resolve():new Promise((E,L)=>{vt.add([E,L])})}function Rt(E){return Pe||(Pe=!E,ut(),vt.list().forEach(([L,D])=>E?D(E):L()),vt.reset()),E}function Un(E,L,D,$){const{scrollBehavior:ie}=t;if(!ys||!ie)return Promise.resolve();const Se=!D&&KS(fd(E.fullPath,0))||($||!D)&&history.state&&history.state.scroll||null;return nf().then(()=>ie(E,L,Se)).then(te=>te&&qS(te)).catch(te=>we(te,E,L))}const kt=E=>r.go(E);let ht;const hs=new Set,fi={currentRoute:c,listening:!0,addRoute:g,removeRoute:m,hasRoute:S,getRoutes:_,resolve:A,options:t,push:P,replace:H,go:kt,back:()=>kt(-1),forward:()=>kt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:er.add,isReady:me,install(E){const L=this;E.component("RouterLink",RA),E.component("RouterView",OA),E.config.globalProperties.$router=L,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>ct(c)}),ys&&!ht&&c.value===pn&&(ht=!0,P(r.location).catch(ie=>{}));const D={};for(const ie in pn)D[ie]=bt(()=>c.value[ie]);E.provide(au,L),E.provide(Nm,Hr(D)),E.provide(Pc,c);const $=E.unmount;hs.add(E),E.unmount=function(){hs.delete(E),hs.size<1&&(l=pn,Be&&Be(),Be=null,c.value=pn,ht=!1,Pe=!1),$()}}};return fi}function fs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function xA(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Bs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Bs(l,c))||r.push(c))}return[n,s,r]}const LA={class:"curso-content"},MA={class:"curso-img"},UA={class:"curso-name"},FA={class:"curso-descripcion"},BA={class:"curso-duracion"},$A={key:0},VA={__name:"curso",setup(t){let e=ns("");ko(An,s=>{e.value=!!s});function n(){console.log("Curso")}return(s,r)=>(ve(),lt("fieldset",{onClick:r[0]||(r[0]=i=>n())},[F("section",LA,[$t(s.$slots,"curso",{},void 0,!0),F("div",MA,[$t(s.$slots,"curso-img",{},void 0,!0)]),F("h2",UA,[$t(s.$slots,"curso-name",{},void 0,!0)]),F("p",FA,[$t(s.$slots,"curso-descripcion",{},void 0,!0)]),F("p",BA,[Re(" Duración: "),F("b",null,[$t(s.$slots,"curso-duracion",{},void 0,!0)])]),ct(e)?(ve(),lt("button",$A,"Apúntate")):ol("",!0)])]))}},aa=Zs(VA,[["__scopeId","data-v-cf7e472c"]]);const jA={class:"body-content"},qA={class:"titulo"},HA={class:"cursos"},cu={__name:"cursos",setup(t){return(e,n)=>(ve(),lt("div",jA,[F("h1",qA,[$t(e.$slots,"titulo")]),F("div",HA,[$t(e.$slots,"default",{},()=>[_e(aa)])])]))}},KA=["src"],Dm={__name:"ofimatica",async setup(t){let e,n,s;return([e,n]=Co(()=>ra(sa(ia,"cursos"))),e=await e,n(),e).forEach(i=>{s=i.data().ofimatica}),console.log(s),(i,o)=>(ve(),Ct(cu,null,{titulo:ge(()=>[Re(" Cursos de ofimática ")]),default:ge(()=>[(ve(!0),lt($e,null,sl(ct(s),a=>(ve(),Ct(aa,null,{"curso-img":ge(()=>[F("img",{src:"../src/media/"+a.imagen,alt:"curso-icon"},null,8,KA)]),"curso-name":ge(()=>[Re(Kt(a.nombre),1)]),"curso-descripcion":ge(()=>[Re(Kt(a.descripcion),1)]),"curso-duracion":ge(()=>[Re(Kt(a.duracion),1)]),_:2},1024))),256))]),_:1}))}},zA=["src"],Om={__name:"programacion",async setup(t){let e,n,s;return([e,n]=Co(()=>ra(sa(ia,"cursos"))),e=await e,n(),e).forEach(i=>{s=i.data().programacion}),console.log(s),(i,o)=>(ve(),Ct(cu,null,{titulo:ge(()=>[Re(" Cursos de ofimática ")]),default:ge(()=>[(ve(!0),lt($e,null,sl(ct(s),a=>(ve(),Ct(aa,null,{"curso-img":ge(()=>[F("img",{src:"../src/media/"+a.imagen,alt:"curso-icon"},null,8,zA)]),"curso-name":ge(()=>[Re(Kt(a.nombre),1)]),"curso-descripcion":ge(()=>[Re(Kt(a.descripcion),1)]),"curso-duracion":ge(()=>[Re(Kt(a.duracion),1)]),_:2},1024))),256))]),_:1}))}},WA=["src"],Pm={__name:"sistemas",async setup(t){let e,n,s;return([e,n]=Co(()=>ra(sa(ia,"cursos"))),e=await e,n(),e).forEach(i=>{s=i.data().sistemas}),console.log(s),(i,o)=>(ve(),Ct(cu,null,{titulo:ge(()=>[Re(" Cursos de ofimática ")]),default:ge(()=>[(ve(!0),lt($e,null,sl(ct(s),a=>(ve(),Ct(aa,null,{"curso-img":ge(()=>[F("img",{src:"../src/media/"+a.imagen,alt:"curso-icon"},null,8,WA)]),"curso-name":ge(()=>[Re(Kt(a.nombre),1)]),"curso-descripcion":ge(()=>[Re(Kt(a.descripcion),1)]),"curso-duracion":ge(()=>[Re(Kt(a.duracion),1)]),_:2},1024))),256))]),_:1}))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="firebasestorage.googleapis.com",Lm="storageBucket",GA=2*60*1e3,QA=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends Jt{constructor(e,n,s=0){super(Ma(e),`Firebase Storage: ${n} (${Ma(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,De.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ma(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ne;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ne||(Ne={}));function Ma(t){return"storage/"+t}function lu(){const t="An unknown error occurred, please check the error payload for server response.";return new De(Ne.UNKNOWN,t)}function XA(t){return new De(Ne.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function YA(t){return new De(Ne.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function JA(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new De(Ne.UNAUTHENTICATED,t)}function ZA(){return new De(Ne.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function eR(t){return new De(Ne.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function tR(){return new De(Ne.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function nR(){return new De(Ne.CANCELED,"User canceled the upload/download.")}function sR(t){return new De(Ne.INVALID_URL,"Invalid URL '"+t+"'.")}function rR(t){return new De(Ne.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function iR(){return new De(Ne.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Lm+"' property when initializing the app?")}function oR(){return new De(Ne.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function aR(){return new De(Ne.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function cR(t){return new De(Ne.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function xc(t){return new De(Ne.INVALID_ARGUMENT,t)}function Mm(){return new De(Ne.APP_DELETED,"The Firebase app was deleted.")}function lR(t){return new De(Ne.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Tr(t,e){return new De(Ne.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function rr(t){throw new De(Ne.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=wt.makeFromUrl(e,n)}catch{return new wt(e,"")}if(s.path==="")return s;throw rR(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(P){P.path_=decodeURIComponent(P.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),m={bucket:1,path:3},_=n===xm?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",A=new RegExp(`^https?://${_}/${r}/${S}`,"i"),T=[{regex:a,indices:c,postModify:i},{regex:g,indices:m,postModify:l},{regex:A,indices:{bucket:1,path:2},postModify:l}];for(let P=0;P<T.length;P++){const H=T[P],Z=H.regex.exec(e);if(Z){const de=Z[H.indices.bucket];let V=Z[H.indices.path];V||(V=""),s=new wt(de,V),H.postModify(s);break}}if(s==null)throw sR(e);return s}}class uR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...S){l||(l=!0,e.apply(null,S))}function h(S){r=setTimeout(()=>{r=null,t(g,c())},S)}function d(){i&&clearTimeout(i)}function g(S,...A){if(l){d();return}if(S){d(),u.call(null,S,...A);return}if(c()||o){d(),u.call(null,S,...A);return}s<64&&(s*=2);let T;a===1?(a=2,T=0):T=(s+Math.random())*1e3,h(T)}let m=!1;function _(S){m||(m=!0,d(),!l&&(r!==null?(S||(a=2),clearTimeout(r),h(0)):S||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,_(!0)},n),_}function dR(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(t){return t!==void 0}function pR(t){return typeof t=="object"&&!Array.isArray(t)}function uu(t){return typeof t=="string"||t instanceof String}function Ad(t){return hu()&&t instanceof Blob}function hu(){return typeof Blob<"u"&&!M_()}function Rd(t,e,n,s){if(s<e)throw xc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw xc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Um(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ts;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ts||(ts={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e,n,s,r,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,m)=>{this.resolve_=g,this.reject_=m,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Ri(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ts.NO_ERROR,c=i.getStatus();if(!a||gR(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===ts.ABORT;s(!1,new Ri(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new Ri(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());fR(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=lu();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Mm():nR();o(c)}else{const c=tR();o(c)}};this.canceled_?n(!1,new Ri(!1,null,!0)):this.backoffId_=hR(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&dR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ri{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function yR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function vR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _R(t,e){e&&(t["X-Firebase-GMPID"]=e)}function wR(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ER(t,e,n,s,r,i,o=!0){const a=Um(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return _R(l,e),yR(l,n),vR(l,i),wR(l,s),new mR(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function bR(...t){const e=TR();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(hu())return new Blob(t);throw new De(Ne.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function IR(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CR(t){if(typeof atob>"u")throw cR("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ua{constructor(e,n){this.data=e,this.contentType=n||null}}function SR(t,e){switch(t){case Ht.RAW:return new Ua(Fm(e));case Ht.BASE64:case Ht.BASE64URL:return new Ua(Bm(t,e));case Ht.DATA_URL:return new Ua(RR(e),kR(e))}throw lu()}function Fm(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function AR(t){let e;try{e=decodeURIComponent(t)}catch{throw Tr(Ht.DATA_URL,"Malformed data URL.")}return Fm(e)}function Bm(t,e){switch(t){case Ht.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Tr(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Ht.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Tr(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=CR(e)}catch(r){throw r.message.includes("polyfill")?r:Tr(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class $m{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Tr(Ht.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=NR(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function RR(t){const e=new $m(t);return e.base64?Bm(Ht.BASE64,e.rest):AR(e.rest)}function kR(t){return new $m(t).contentType}function NR(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,n){let s=0,r="";Ad(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ad(this.data_)){const s=this.data_,r=IR(s,e,n);return r===null?null:new wn(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new wn(s,!0)}}static getBlob(...e){if(hu()){const n=e.map(s=>s instanceof wn?s.data_:s);return new wn(bR.apply(null,n))}else{const n=e.map(o=>uu(o)?SR(Ht.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new wn(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t){let e;try{e=JSON.parse(t)}catch{return null}return pR(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function OR(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function jm(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(t,e){return e}class it{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||PR}}let ki=null;function xR(t){return!uu(t)||t.length<2?t:jm(t)}function qm(){if(ki)return ki;const t=[];t.push(new it("bucket")),t.push(new it("generation")),t.push(new it("metageneration")),t.push(new it("name","fullPath",!0));function e(i,o){return xR(o)}const n=new it("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new it("size");return r.xform=s,t.push(r),t.push(new it("timeCreated")),t.push(new it("updated")),t.push(new it("md5Hash",null,!0)),t.push(new it("cacheControl",null,!0)),t.push(new it("contentDisposition",null,!0)),t.push(new it("contentEncoding",null,!0)),t.push(new it("contentLanguage",null,!0)),t.push(new it("contentType",null,!0)),t.push(new it("metadata","customMetadata",!0)),ki=t,ki}function LR(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new wt(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function MR(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return LR(s,t),s}function Hm(t,e,n){const s=Vm(e);return s===null?null:MR(t,s,n)}function UR(t,e,n,s){const r=Vm(e);if(r===null||!uu(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),g=du(d,n,s),m=Um({alt:"media",token:l});return g+m})[0]}function FR(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Km{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(t){if(!t)throw lu()}function BR(t,e){function n(s,r){const i=Hm(t,r,e);return zm(i!==null),i}return n}function $R(t,e){function n(s,r){const i=Hm(t,r,e);return zm(i!==null),UR(i,r,t.host,t._protocol)}return n}function Wm(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=ZA():r=JA():n.getStatus()===402?r=YA(t.bucket):n.getStatus()===403?r=eR(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function VR(t){const e=Wm(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=XA(t.path)),i.serverResponse=r.serverResponse,i}return n}function jR(t,e,n){const s=e.fullServerUrl(),r=du(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Km(r,i,$R(t,n),o);return a.errorHandler=VR(e),a}function qR(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function HR(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=qR(null,e)),s}function KR(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let T="";for(let P=0;P<2;P++)T=T+Math.random().toString().slice(2);return T}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=HR(e,s,r),u=FR(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",g=wn.getBlob(h,s,d);if(g===null)throw oR();const m={name:l.fullPath},_=du(i,t.host,t._protocol),S="POST",A=t.maxUploadRetryTime,w=new Km(_,S,BR(t,n),A);return w.urlParams=m,w.headers=o,w.body=g.uploadData(),w.errorHandler=Wm(e),w}class zR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ts.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ts.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ts.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw rr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw rr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw rr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw rr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw rr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class WR extends zR{initXhr(){this.xhr_.responseType="text"}}function Gm(){return new WR}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n){this._service=e,n instanceof wt?this._location=n:this._location=wt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ls(e,n)}get root(){const e=new wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return jm(this._location.path)}get storage(){return this._service}get parent(){const e=DR(this._location.path);if(e===null)return null;const n=new wt(this._location.bucket,e);return new ls(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw lR(e)}}function GR(t,e,n){t._throwIfRoot("uploadBytes");const s=KR(t.storage,t._location,qm(),new wn(e,!0),n);return t.storage.makeRequestWithTokens(s,Gm).then(r=>({metadata:r,ref:t}))}function QR(t){t._throwIfRoot("getDownloadURL");const e=jR(t.storage,t._location,qm());return t.storage.makeRequestWithTokens(e,Gm).then(n=>{if(n===null)throw aR();return n})}function XR(t,e){const n=OR(t._location.path,e),s=new wt(t._location.bucket,n);return new ls(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(t){return/^[A-Za-z]+:\/\//.test(t)}function JR(t,e){return new ls(t,e)}function Qm(t,e){if(t instanceof fu){const n=t;if(n._bucket==null)throw iR();const s=new ls(n,n._bucket);return e!=null?Qm(s,e):s}else return e!==void 0?XR(t,e):t}function ZR(t,e){if(e&&YR(e)){if(t instanceof fu)return JR(t,e);throw xc("To use ref(service, url), the first argument must be a Storage instance.")}else return Qm(t,e)}function kd(t,e){const n=e==null?void 0:e[Lm];return n==null?null:wt.makeFromBucketSpec(n,t)}function ek(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:$f(r,t.app.options.projectId))}class fu{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=xm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=GA,this._maxUploadRetryTime=QA,this._requests=new Set,r!=null?this._bucket=wt.makeFromBucketSpec(r,this._host):this._bucket=kd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=wt.makeFromBucketSpec(this._url,e):this._bucket=kd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Rd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Rd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ls(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new uR(Mm());{const o=ER(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Nd="@firebase/storage",Dd="0.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm="storage";function tk(t,e,n){return t=yt(t),GR(t,e,n)}function nk(t){return t=yt(t),QR(t)}function sk(t,e){return t=yt(t),ZR(t,e)}function rk(t=ul(),e){t=yt(t);const s=Ao(t,Xm).getImmediate({identifier:e}),r=Ff("storage");return r&&ik(s,...r),s}function ik(t,e,n,s={}){ek(t,e,n,s)}function ok(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new fu(n,s,r,e,Hs)}function ak(){rs(new Dn(Xm,ok,"PUBLIC").setMultipleInstances(!0)),zt(Nd,Dd,""),zt(Nd,Dd,"esm2017")}ak();const ck={class:"header"},lk=F("h1",null,"Area privada",-1),uk={class:"main"},hk={class:"cursos"},dk={class:"cursos-ofimatica"},fk={class:"cursos-programacion"},pk={class:"cursos-sistemas"},gk={__name:"admin",async setup(t){let e,n,s=ns("");ko(An,a=>{a&&(s.value=a.email)});let r=ns("");function i(){const a=rk(),c=sk(a,r.value.files[0].name);tk(c,r.value.files[0]).then(()=>{console.log("Uploaded a blob or file!"),nk(c).then(l=>{console.log(l)})})}return([e,n]=Co(()=>ra(sa(ia,"cursos"))),e=await e,n(),e).forEach(a=>{console.log(a.data())}),(a,c)=>(ve(),lt($e,null,[F("div",ck,[lk,F("h3",null,"Bienvenido "+Kt(ct(s)),1),F("p",null,[F("input",{type:"file",name:"file",id:"file",ref_key:"file",ref:r,onChange:i},null,544)])]),F("div",uk,[F("div",hk,[F("section",dk,[_e(Dm)]),F("section",fk,[_e(Om)]),F("section",pk,[_e(Pm)])])])],64))}},mk=[{path:"/",name:"Home",component:CS},{path:"/ofimatica",name:"Ofimatica",component:Dm},{path:"/programacion",name:"Programacion",component:Om},{path:"/sos",name:"SOs",component:Pm},{path:"/registro",name:"Registro",component:DS},{path:"/admin",name:"Administración",component:gk,meta:{autenticado:!0}}],Ym=PA({history:QS(),routes:mk});ko(An,t=>{t?t.uid:Ym.push("/")});const Jm=C_(uS);Jm.use(Ym);Jm.mount("#app");
