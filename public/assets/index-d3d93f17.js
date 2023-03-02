(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function sl(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function rl(t){if(X(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ve(s)?Xy(s):rl(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ve(t))return t;if(ke(t))return t}}const Wy=/;(?![^(]*\))/g,Gy=/:([^]+)/,Qy=/\/\*.*?\*\//gs;function Xy(t){const e={};return t.replace(Qy,"").split(Wy).forEach(n=>{if(n){const s=n.split(Gy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function il(t){let e="";if(Ve(t))e=t;else if(X(t))for(let n=0;n<t.length;n++){const s=il(t[n]);s&&(e+=s+" ")}else if(ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Yy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jy=sl(Yy);function nf(t){return!!t||t===""}const Wt=t=>Ve(t)?t:t==null?"":X(t)||ke(t)&&(t.toString===of||!Z(t.toString))?JSON.stringify(t,sf,2):String(t),sf=(t,e)=>e&&e.__v_isRef?sf(t,e.value):ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:rf(e)?{[`Set(${e.size})`]:[...e.values()]}:ke(e)&&!X(e)&&!af(e)?String(e):e,Ie={},As=[],Ft=()=>{},Zy=()=>!1,ev=/^on[^a-z]/,Oo=t=>ev.test(t),ol=t=>t.startsWith("onUpdate:"),at=Object.assign,al=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},tv=Object.prototype.hasOwnProperty,le=(t,e)=>tv.call(t,e),X=Array.isArray,ks=t=>Po(t)==="[object Map]",rf=t=>Po(t)==="[object Set]",Z=t=>typeof t=="function",Ve=t=>typeof t=="string",cl=t=>typeof t=="symbol",ke=t=>t!==null&&typeof t=="object",ll=t=>ke(t)&&Z(t.then)&&Z(t.catch),of=Object.prototype.toString,Po=t=>of.call(t),nv=t=>Po(t).slice(8,-1),af=t=>Po(t)==="[object Object]",ul=t=>Ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hi=sl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},sv=/-(\w)/g,Zt=xo(t=>t.replace(sv,(e,n)=>n?n.toUpperCase():"")),rv=/\B([A-Z])/g,Qs=xo(t=>t.replace(rv,"-$1").toLowerCase()),Lo=xo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Oa=xo(t=>t?`on${Lo(t)}`:""),Dr=(t,e)=>!Object.is(t,e),Ki=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ro=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},oc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},iv=t=>{const e=Ve(t)?Number(t):NaN;return isNaN(e)?t:e};let Vu;const ov=()=>Vu||(Vu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let xt;class av{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function cv(t,e=xt){e&&e.active&&e.effects.push(t)}function lv(){return xt}const hl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},cf=t=>(t.w&Ln)>0,lf=t=>(t.n&Ln)>0,uv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ln},hv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];cf(r)&&!lf(r)?r.delete(t):e[n++]=r,r.w&=~Ln,r.n&=~Ln}e.length=n}},ac=new WeakMap;let dr=0,Ln=1;const cc=30;let Mt;const ss=Symbol(""),lc=Symbol("");class dl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,cv(this,s)}run(){if(!this.active)return this.fn();let e=Mt,n=An;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Mt,Mt=this,An=!0,Ln=1<<++dr,dr<=cc?uv(this):ju(this),this.fn()}finally{dr<=cc&&hv(this),Ln=1<<--dr,Mt=this.parent,An=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Mt===this?this.deferStop=!0:this.active&&(ju(this),this.onStop&&this.onStop(),this.active=!1)}}function ju(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let An=!0;const uf=[];function Xs(){uf.push(An),An=!1}function Ys(){const t=uf.pop();An=t===void 0?!0:t}function vt(t,e,n){if(An&&Mt){let s=ac.get(t);s||ac.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=hl()),hf(r)}}function hf(t,e){let n=!1;dr<=cc?lf(t)||(t.n|=Ln,n=!cf(t)):n=!t.has(Mt),n&&(t.add(Mt),Mt.deps.push(t))}function hn(t,e,n,s,r,i){const o=ac.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&X(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":X(t)?ul(n)&&a.push(o.get("length")):(a.push(o.get(ss)),ks(t)&&a.push(o.get(lc)));break;case"delete":X(t)||(a.push(o.get(ss)),ks(t)&&a.push(o.get(lc)));break;case"set":ks(t)&&a.push(o.get(ss));break}if(a.length===1)a[0]&&uc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);uc(hl(c))}}function uc(t,e){const n=X(t)?t:[...t];for(const s of n)s.computed&&qu(s);for(const s of n)s.computed||qu(s)}function qu(t,e){(t!==Mt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const dv=sl("__proto__,__v_isRef,__isVue"),df=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(cl)),fv=fl(),pv=fl(!1,!0),gv=fl(!0),Hu=mv();function mv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=de(this);for(let i=0,o=this.length;i<o;i++)vt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(de)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Xs();const s=de(this)[e].apply(this,n);return Ys(),s}}),t}function yv(t){const e=de(this);return vt(e,"has",t),e.hasOwnProperty(t)}function fl(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Pv:yf:e?mf:gf).get(s))return s;const o=X(s);if(!t){if(o&&le(Hu,r))return Reflect.get(Hu,r,i);if(r==="hasOwnProperty")return yv}const a=Reflect.get(s,r,i);return(cl(r)?df.has(r):dv(r))||(t||vt(s,"get",r),e)?a:Ke(a)?o&&ul(r)?a:a.value:ke(a)?t?vf(a):Zr(a):a}}const vv=ff(),_v=ff(!0);function ff(t=!1){return function(n,s,r,i){let o=n[s];if(Ms(o)&&Ke(o)&&!Ke(r))return!1;if(!t&&(!io(r)&&!Ms(r)&&(o=de(o),r=de(r)),!X(n)&&Ke(o)&&!Ke(r)))return o.value=r,!0;const a=X(n)&&ul(s)?Number(s)<n.length:le(n,s),c=Reflect.set(n,s,r,i);return n===de(i)&&(a?Dr(r,o)&&hn(n,"set",s,r):hn(n,"add",s,r)),c}}function wv(t,e){const n=le(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&hn(t,"delete",e,void 0),s}function Ev(t,e){const n=Reflect.has(t,e);return(!cl(e)||!df.has(e))&&vt(t,"has",e),n}function bv(t){return vt(t,"iterate",X(t)?"length":ss),Reflect.ownKeys(t)}const pf={get:fv,set:vv,deleteProperty:wv,has:Ev,ownKeys:bv},Tv={get:gv,set(t,e){return!0},deleteProperty(t,e){return!0}},Iv=at({},pf,{get:pv,set:_v}),pl=t=>t,Mo=t=>Reflect.getPrototypeOf(t);function ki(t,e,n=!1,s=!1){t=t.__v_raw;const r=de(t),i=de(e);n||(e!==i&&vt(r,"get",e),vt(r,"get",i));const{has:o}=Mo(r),a=s?pl:n?yl:Nr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Ri(t,e=!1){const n=this.__v_raw,s=de(n),r=de(t);return e||(t!==r&&vt(s,"has",t),vt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Di(t,e=!1){return t=t.__v_raw,!e&&vt(de(t),"iterate",ss),Reflect.get(t,"size",t)}function Ku(t){t=de(t);const e=de(this);return Mo(e).has.call(e,t)||(e.add(t),hn(e,"add",t,t)),this}function zu(t,e){e=de(e);const n=de(this),{has:s,get:r}=Mo(n);let i=s.call(n,t);i||(t=de(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Dr(e,o)&&hn(n,"set",t,e):hn(n,"add",t,e),this}function Wu(t){const e=de(this),{has:n,get:s}=Mo(e);let r=n.call(e,t);r||(t=de(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&hn(e,"delete",t,void 0),i}function Gu(){const t=de(this),e=t.size!==0,n=t.clear();return e&&hn(t,"clear",void 0,void 0),n}function Ni(t,e){return function(s,r){const i=this,o=i.__v_raw,a=de(o),c=e?pl:t?yl:Nr;return!t&&vt(a,"iterate",ss),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Oi(t,e,n){return function(...s){const r=this.__v_raw,i=de(r),o=ks(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?pl:e?yl:Nr;return!e&&vt(i,"iterate",c?lc:ss),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function vn(t){return function(...e){return t==="delete"?!1:this}}function Cv(){const t={get(i){return ki(this,i)},get size(){return Di(this)},has:Ri,add:Ku,set:zu,delete:Wu,clear:Gu,forEach:Ni(!1,!1)},e={get(i){return ki(this,i,!1,!0)},get size(){return Di(this)},has:Ri,add:Ku,set:zu,delete:Wu,clear:Gu,forEach:Ni(!1,!0)},n={get(i){return ki(this,i,!0)},get size(){return Di(this,!0)},has(i){return Ri.call(this,i,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Ni(!0,!1)},s={get(i){return ki(this,i,!0,!0)},get size(){return Di(this,!0)},has(i){return Ri.call(this,i,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Ni(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Oi(i,!1,!1),n[i]=Oi(i,!0,!1),e[i]=Oi(i,!1,!0),s[i]=Oi(i,!0,!0)}),[t,n,e,s]}const[Sv,Av,kv,Rv]=Cv();function gl(t,e){const n=e?t?Rv:kv:t?Av:Sv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(le(n,r)&&r in s?n:s,r,i)}const Dv={get:gl(!1,!1)},Nv={get:gl(!1,!0)},Ov={get:gl(!0,!1)},gf=new WeakMap,mf=new WeakMap,yf=new WeakMap,Pv=new WeakMap;function xv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lv(t){return t.__v_skip||!Object.isExtensible(t)?0:xv(nv(t))}function Zr(t){return Ms(t)?t:ml(t,!1,pf,Dv,gf)}function Mv(t){return ml(t,!1,Iv,Nv,mf)}function vf(t){return ml(t,!0,Tv,Ov,yf)}function ml(t,e,n,s,r){if(!ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Lv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Rs(t){return Ms(t)?Rs(t.__v_raw):!!(t&&t.__v_isReactive)}function Ms(t){return!!(t&&t.__v_isReadonly)}function io(t){return!!(t&&t.__v_isShallow)}function _f(t){return Rs(t)||Ms(t)}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function wf(t){return ro(t,"__v_skip",!0),t}const Nr=t=>ke(t)?Zr(t):t,yl=t=>ke(t)?vf(t):t;function Ef(t){An&&Mt&&(t=de(t),hf(t.dep||(t.dep=hl())))}function bf(t,e){t=de(t);const n=t.dep;n&&uc(n)}function Ke(t){return!!(t&&t.__v_isRef===!0)}function Rt(t){return Tf(t,!1)}function Uv(t){return Tf(t,!0)}function Tf(t,e){return Ke(t)?t:new Fv(t,e)}class Fv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:de(e),this._value=n?e:Nr(e)}get value(){return Ef(this),this._value}set value(e){const n=this.__v_isShallow||io(e)||Ms(e);e=n?e:de(e),Dr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Nr(e),bf(this))}}function $e(t){return Ke(t)?t.value:t}const Bv={get:(t,e,n)=>$e(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ke(r)&&!Ke(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function If(t){return Rs(t)?t:new Proxy(t,Bv)}var Cf;class $v{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Cf]=!1,this._dirty=!0,this.effect=new dl(e,()=>{this._dirty||(this._dirty=!0,bf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=de(this);return Ef(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Cf="__v_isReadonly";function Vv(t,e,n=!1){let s,r;const i=Z(t);return i?(s=t,r=Ft):(s=t.get,r=t.set),new $v(s,r,i||!r,n)}function kn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){ei(i,e,n)}return r}function At(t,e,n,s){if(Z(t)){const i=kn(t,e,n,s);return i&&ll(i)&&i.catch(o=>{ei(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(At(t[i],e,n,s));return r}function ei(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){kn(c,null,10,[t,o,a]);return}}jv(t,n,r,s)}function jv(t,e,n,s=!0){console.error(t)}let Or=!1,hc=!1;const st=[];let jt=0;const Ds=[];let rn=null,Xn=0;const Sf=Promise.resolve();let vl=null;function Af(t){const e=vl||Sf;return t?e.then(this?t.bind(this):t):e}function qv(t){let e=jt+1,n=st.length;for(;e<n;){const s=e+n>>>1;Pr(st[s])<t?e=s+1:n=s}return e}function _l(t){(!st.length||!st.includes(t,Or&&t.allowRecurse?jt+1:jt))&&(t.id==null?st.push(t):st.splice(qv(t.id),0,t),kf())}function kf(){!Or&&!hc&&(hc=!0,vl=Sf.then(Nf))}function Hv(t){const e=st.indexOf(t);e>jt&&st.splice(e,1)}function Rf(t){X(t)?Ds.push(...t):(!rn||!rn.includes(t,t.allowRecurse?Xn+1:Xn))&&Ds.push(t),kf()}function Qu(t,e=Or?jt+1:0){for(;e<st.length;e++){const n=st[e];n&&n.pre&&(st.splice(e,1),e--,n())}}function Df(t){if(Ds.length){const e=[...new Set(Ds)];if(Ds.length=0,rn){rn.push(...e);return}for(rn=e,rn.sort((n,s)=>Pr(n)-Pr(s)),Xn=0;Xn<rn.length;Xn++)rn[Xn]();rn=null,Xn=0}}const Pr=t=>t.id==null?1/0:t.id,Kv=(t,e)=>{const n=Pr(t)-Pr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Nf(t){hc=!1,Or=!0,st.sort(Kv);const e=Ft;try{for(jt=0;jt<st.length;jt++){const n=st[jt];n&&n.active!==!1&&kn(n,null,14)}}finally{jt=0,st.length=0,Df(),Or=!1,vl=null,(st.length||Ds.length)&&Nf()}}function zv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ie;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Ie;d&&(r=n.map(g=>Ve(g)?g.trim():g)),h&&(r=n.map(oc))}let a,c=s[a=Oa(e)]||s[a=Oa(Zt(e))];!c&&i&&(c=s[a=Oa(Qs(e))]),c&&At(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,At(l,t,6,r)}}function Of(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Z(t)){const c=l=>{const u=Of(l,e,!0);u&&(a=!0,at(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ke(t)&&s.set(t,null),null):(X(i)?i.forEach(c=>o[c]=null):at(o,i),ke(t)&&s.set(t,o),o)}function Uo(t,e){return!t||!Oo(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,Qs(e))||le(t,e))}let Je=null,Fo=null;function oo(t){const e=Je;return Je=t,Fo=t&&t.type.__scopeId||null,e}function Bo(t){Fo=t}function $o(){Fo=null}function ye(t,e=Je,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&ch(-1);const i=oo(e);let o;try{o=t(...r)}finally{oo(i),s._d&&ch(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Pa(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:m,inheritAttrs:v}=t;let I,k;const w=oo(t);try{if(n.shapeFlag&4){const P=r||s;I=Lt(u.call(P,P,h,i,g,d,m)),k=c}else{const P=e;I=Lt(P.length>1?P(i,{attrs:c,slots:a,emit:l}):P(i,null)),k=e.props?c:Gv(c)}}catch(P){wr.length=0,ei(P,t,1),I=ue(yt)}let b=I;if(k&&v!==!1){const P=Object.keys(k),{shapeFlag:H}=b;P.length&&H&7&&(o&&P.some(ol)&&(k=Qv(k,o)),b=Mn(b,k))}return n.dirs&&(b=Mn(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),I=b,oo(w),I}function Wv(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(Lr(s)){if(s.type!==yt||s.children==="v-if"){if(e)return;e=s}}else return}return e}const Gv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Oo(n))&&((e||(e={}))[n]=t[n]);return e},Qv=(t,e)=>{const n={};for(const s in t)(!ol(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Xv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Xu(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Uo(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Xu(s,o,l):!0:!!o;return!1}function Xu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Uo(n,i))return!0}return!1}function wl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Yv=t=>t.__isSuspense,Jv={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,l){t==null?e_(e,n,s,r,i,o,a,c,l):t_(t,e,n,s,r,o,a,c,l)},hydrate:n_,create:El,normalize:s_},Zv=Jv;function xr(t,e){const n=t.props&&t.props[e];Z(n)&&n()}function e_(t,e,n,s,r,i,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),d=t.suspense=El(t,r,s,e,h,n,i,o,a,c);l(null,d.pendingBranch=t.ssContent,h,null,s,d,i,o),d.deps>0?(xr(t,"onPending"),xr(t,"onFallback"),l(null,t.ssFallback,e,n,s,null,i,o),Ns(d,t.ssFallback)):d.resolve()}function t_(t,e,n,s,r,i,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const d=e.ssContent,g=e.ssFallback,{activeBranch:m,pendingBranch:v,isInFallback:I,isHydrating:k}=h;if(v)h.pendingBranch=d,Ht(d,v)?(c(v,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():I&&(c(m,g,n,s,r,null,i,o,a),Ns(h,g))):(h.pendingId++,k?(h.isHydrating=!1,h.activeBranch=v):l(v,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),I?(c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(c(m,g,n,s,r,null,i,o,a),Ns(h,g))):m&&Ht(d,m)?(c(m,d,n,s,r,h,i,o,a),h.resolve(!0)):(c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(m&&Ht(d,m))c(m,d,n,s,r,h,i,o,a),Ns(h,d);else if(xr(e,"onPending"),h.pendingBranch=d,h.pendingId++,c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:w,pendingId:b}=h;w>0?setTimeout(()=>{h.pendingId===b&&h.fallback(g)},w):w===0&&h.fallback(g)}}function El(t,e,n,s,r,i,o,a,c,l,u=!1){const{p:h,m:d,um:g,n:m,o:{parentNode:v,remove:I}}=l,k=t.props?iv(t.props.timeout):void 0,w={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof k=="number"?k:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(b=!1){const{vnode:P,activeBranch:H,pendingBranch:te,pendingId:pe,effects:V,parentComponent:he,container:ae}=w;if(w.isHydrating)w.isHydrating=!1;else if(!b){const ft=H&&te.transition&&te.transition.mode==="out-in";ft&&(H.transition.afterLeave=()=>{pe===w.pendingId&&d(te,ae,_t,0)});let{anchor:_t}=w;H&&(_t=m(H),g(H,he,w,!0)),ft||d(te,ae,_t,0)}Ns(w,te),w.pendingBranch=null,w.isInFallback=!1;let Te=w.parent,je=!1;for(;Te;){if(Te.pendingBranch){Te.effects.push(...V),je=!0;break}Te=Te.parent}je||Rf(V),w.effects=[],xr(P,"onResolve")},fallback(b){if(!w.pendingBranch)return;const{vnode:P,activeBranch:H,parentComponent:te,container:pe,isSVG:V}=w;xr(P,"onFallback");const he=m(H),ae=()=>{w.isInFallback&&(h(null,b,pe,he,te,null,V,a,c),Ns(w,b))},Te=b.transition&&b.transition.mode==="out-in";Te&&(H.transition.afterLeave=ae),w.isInFallback=!0,g(H,te,null,!0),Te||ae()},move(b,P,H){w.activeBranch&&d(w.activeBranch,b,P,H),w.container=b},next(){return w.activeBranch&&m(w.activeBranch)},registerDep(b,P){const H=!!w.pendingBranch;H&&w.deps++;const te=b.vnode.el;b.asyncDep.catch(pe=>{ei(pe,b,0)}).then(pe=>{if(b.isUnmounted||w.isUnmounted||w.pendingId!==b.suspenseId)return;b.asyncResolved=!0;const{vnode:V}=b;_c(b,pe,!1),te&&(V.el=te);const he=!te&&b.subTree.el;P(b,V,v(te||b.subTree.el),te?null:m(b.subTree),w,o,c),he&&I(he),wl(b,V.el),H&&--w.deps===0&&w.resolve()})},unmount(b,P){w.isUnmounted=!0,w.activeBranch&&g(w.activeBranch,n,b,P),w.pendingBranch&&g(w.pendingBranch,n,b,P)}};return w}function n_(t,e,n,s,r,i,o,a,c){const l=e.suspense=El(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(),u}function s_(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=Yu(s?n.default:n),t.ssFallback=s?Yu(n.fallback):ue(yt)}function Yu(t){let e;if(Z(t)){const n=Us&&t._c;n&&(t._d=!1,ie()),t=t(),n&&(t._d=!0,e=St,Jf())}return X(t)&&(t=Wv(t)),t=Lt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function r_(t,e){e&&e.pendingBranch?X(t)?e.effects.push(...t):e.effects.push(t):Rf(t)}function Ns(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,wl(s,r))}function zi(t,e){if(xe){let n=xe.provides;const s=xe.parent&&xe.parent.provides;s===n&&(n=xe.provides=Object.create(s)),n[t]=e}}function un(t,e,n=!1){const s=xe||Je;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Z(e)?e.call(s.proxy):e}}const Pi={};function Wi(t,e,n){return Pf(t,e,n)}function Pf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Ie){const a=lv()===(xe==null?void 0:xe.scope)?xe:null;let c,l=!1,u=!1;if(Ke(t)?(c=()=>t.value,l=io(t)):Rs(t)?(c=()=>t,s=!0):X(t)?(u=!0,l=t.some(b=>Rs(b)||io(b)),c=()=>t.map(b=>{if(Ke(b))return b.value;if(Rs(b))return Jn(b);if(Z(b))return kn(b,a,2)})):Z(t)?e?c=()=>kn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),At(t,a,3,[d])}:c=Ft,e&&s){const b=c;c=()=>Jn(b())}let h,d=b=>{h=k.onStop=()=>{kn(b,a,4)}},g;if(Mr)if(d=Ft,e?n&&At(e,a,3,[c(),u?[]:void 0,d]):c(),r==="sync"){const b=J_();g=b.__watcherHandles||(b.__watcherHandles=[])}else return Ft;let m=u?new Array(t.length).fill(Pi):Pi;const v=()=>{if(k.active)if(e){const b=k.run();(s||l||(u?b.some((P,H)=>Dr(P,m[H])):Dr(b,m)))&&(h&&h(),At(e,a,3,[b,m===Pi?void 0:u&&m[0]===Pi?[]:m,d]),m=b)}else k.run()};v.allowRecurse=!!e;let I;r==="sync"?I=v:r==="post"?I=()=>gt(v,a&&a.suspense):(v.pre=!0,a&&(v.id=a.uid),I=()=>_l(v));const k=new dl(c,I);e?n?v():m=k.run():r==="post"?gt(k.run.bind(k),a&&a.suspense):k.run();const w=()=>{k.stop(),a&&a.scope&&al(a.scope.effects,k)};return g&&g.push(w),w}function i_(t,e,n){const s=this.proxy,r=Ve(t)?t.includes(".")?xf(s,t):()=>s[t]:t.bind(s,s);let i;Z(e)?i=e:(i=e.handler,n=e);const o=xe;Un(this);const a=Pf(r,i.bind(s),n);return o?Un(o):Rn(),a}function xf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Jn(t,e){if(!ke(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ke(t))Jn(t.value,e);else if(X(t))for(let n=0;n<t.length;n++)Jn(t[n],e);else if(rf(t)||ks(t))t.forEach(n=>{Jn(n,e)});else if(af(t))for(const n in t)Jn(t[n],e);return t}function o_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Bf(()=>{t.isMounted=!0}),$f(()=>{t.isUnmounting=!0}),t}const It=[Function,Array],a_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:It,onEnter:It,onAfterEnter:It,onEnterCancelled:It,onBeforeLeave:It,onLeave:It,onAfterLeave:It,onLeaveCancelled:It,onBeforeAppear:It,onAppear:It,onAfterAppear:It,onAppearCancelled:It},setup(t,{slots:e}){const n=np(),s=o_();let r;return()=>{const i=e.default&&Mf(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==yt){o=v;break}}const a=de(t),{mode:c}=a;if(s.isLeaving)return xa(o);const l=Ju(o);if(!l)return xa(o);const u=dc(l,a,s,n);fc(l,u);const h=n.subTree,d=h&&Ju(h);let g=!1;const{getTransitionKey:m}=l.type;if(m){const v=m();r===void 0?r=v:v!==r&&(r=v,g=!0)}if(d&&d.type!==yt&&(!Ht(l,d)||g)){const v=dc(d,a,s,n);if(fc(d,v),c==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},xa(o);c==="in-out"&&l.type!==yt&&(v.delayLeave=(I,k,w)=>{const b=Lf(s,d);b[String(d.key)]=d,I._leaveCb=()=>{k(),I._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=w})}return o}}},c_=a_;function Lf(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function dc(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:v,onAppear:I,onAfterAppear:k,onAppearCancelled:w}=e,b=String(t.key),P=Lf(n,t),H=(V,he)=>{V&&At(V,s,9,he)},te=(V,he)=>{const ae=he[1];H(V,he),X(V)?V.every(Te=>Te.length<=1)&&ae():V.length<=1&&ae()},pe={mode:i,persisted:o,beforeEnter(V){let he=a;if(!n.isMounted)if(r)he=v||a;else return;V._leaveCb&&V._leaveCb(!0);const ae=P[b];ae&&Ht(t,ae)&&ae.el._leaveCb&&ae.el._leaveCb(),H(he,[V])},enter(V){let he=c,ae=l,Te=u;if(!n.isMounted)if(r)he=I||c,ae=k||l,Te=w||u;else return;let je=!1;const ft=V._enterCb=_t=>{je||(je=!0,_t?H(Te,[V]):H(ae,[V]),pe.delayedLeave&&pe.delayedLeave(),V._enterCb=void 0)};he?te(he,[V,ft]):ft()},leave(V,he){const ae=String(t.key);if(V._enterCb&&V._enterCb(!0),n.isUnmounting)return he();H(h,[V]);let Te=!1;const je=V._leaveCb=ft=>{Te||(Te=!0,he(),ft?H(m,[V]):H(g,[V]),V._leaveCb=void 0,P[ae]===t&&delete P[ae])};P[ae]=t,d?te(d,[V,je]):je()},clone(V){return dc(V,e,n,s)}};return pe}function xa(t){if(Vo(t))return t=Mn(t),t.children=null,t}function Ju(t){return Vo(t)?t.children?t.children[0]:void 0:t}function fc(t,e){t.shapeFlag&6&&t.component?fc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Mf(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===qe?(o.patchFlag&128&&r++,s=s.concat(Mf(o.children,e,a))):(e||o.type!==yt)&&s.push(a!=null?Mn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Uf(t){return Z(t)?{setup:t,name:t.name}:t}const vr=t=>!!t.type.__asyncLoader,Vo=t=>t.type.__isKeepAlive;function l_(t,e){Ff(t,"a",e)}function u_(t,e){Ff(t,"da",e)}function Ff(t,e,n=xe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(jo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Vo(r.parent.vnode)&&h_(s,e,n,r),r=r.parent}}function h_(t,e,n,s){const r=jo(e,t,s,!0);Vf(()=>{al(s[e],r)},n)}function jo(t,e,n=xe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Xs(),Un(n);const a=At(e,n,t,o);return Rn(),Ys(),a});return s?r.unshift(i):r.push(i),i}}const yn=t=>(e,n=xe)=>(!Mr||t==="sp")&&jo(t,(...s)=>e(...s),n),d_=yn("bm"),Bf=yn("m"),f_=yn("bu"),p_=yn("u"),$f=yn("bum"),Vf=yn("um"),g_=yn("sp"),m_=yn("rtg"),y_=yn("rtc");function v_(t,e=xe){jo("ec",t,e)}function Zu(t,e){const n=Je;if(n===null)return t;const s=Ko(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ie]=e[i];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&Jn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function zn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Xs(),At(c,n,8,[t.el,a,t,e]),Ys())}}const jf="components";function eh(t,e){return w_(jf,t,!0,e)||t}const __=Symbol();function w_(t,e,n=!0,s=!1){const r=Je||xe;if(r){const i=r.type;if(t===jf){const a=Q_(i,!1);if(a&&(a===e||a===Zt(e)||a===Lo(Zt(e))))return i}const o=th(r[t]||i[t],e)||th(r.appContext[t],e);return!o&&s?i:o}}function th(t,e){return t&&(t[e]||t[Zt(e)]||t[Lo(Zt(e))])}function bl(t,e,n,s){let r;const i=n&&n[s];if(X(t)||Ve(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ke(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function qt(t,e,n={},s,r){if(Je.isCE||Je.parent&&vr(Je.parent)&&Je.parent.isCE)return e!=="default"&&(n.name=e),ue("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),ie();const o=i&&qf(i(n)),a=on(qe,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function qf(t){return t.some(e=>Lr(e)?!(e.type===yt||e.type===qe&&!qf(e.children)):!0)?t:null}const pc=t=>t?sp(t)?Ko(t)||t.proxy:pc(t.parent):null,_r=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>pc(t.parent),$root:t=>pc(t.root),$emit:t=>t.emit,$options:t=>Tl(t),$forceUpdate:t=>t.f||(t.f=()=>_l(t.update)),$nextTick:t=>t.n||(t.n=Af.bind(t.proxy)),$watch:t=>i_.bind(t)}),La=(t,e)=>t!==Ie&&!t.__isScriptSetup&&le(t,e),E_={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(La(s,e))return o[e]=1,s[e];if(r!==Ie&&le(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&le(l,e))return o[e]=3,i[e];if(n!==Ie&&le(n,e))return o[e]=4,n[e];gc&&(o[e]=0)}}const u=_r[e];let h,d;if(u)return e==="$attrs"&&vt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ie&&le(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,le(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return La(r,e)?(r[e]=n,!0):s!==Ie&&le(s,e)?(s[e]=n,!0):le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ie&&le(t,o)||La(e,o)||(a=i[0])&&le(a,o)||le(s,o)||le(_r,o)||le(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let gc=!0;function b_(t){const e=Tl(t),n=t.proxy,s=t.ctx;gc=!1,e.beforeCreate&&nh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:m,activated:v,deactivated:I,beforeDestroy:k,beforeUnmount:w,destroyed:b,unmounted:P,render:H,renderTracked:te,renderTriggered:pe,errorCaptured:V,serverPrefetch:he,expose:ae,inheritAttrs:Te,components:je,directives:ft,filters:_t}=e;if(l&&T_(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const we in o){const ve=o[we];Z(ve)&&(s[we]=ve.bind(n))}if(r){const we=r.call(n,n);ke(we)&&(t.data=Zr(we))}if(gc=!0,i)for(const we in i){const ve=i[we],Nt=Z(ve)?ve.bind(n,n):Z(ve.get)?ve.get.bind(n,n):Ft,Kn=!Z(ve)&&Z(ve.set)?ve.set.bind(n):Ft,Ot=Ct({get:Nt,set:Kn});Object.defineProperty(s,we,{enumerable:!0,configurable:!0,get:()=>Ot.value,set:pt=>Ot.value=pt})}if(a)for(const we in a)Hf(a[we],s,n,we);if(c){const we=Z(c)?c.call(n):c;Reflect.ownKeys(we).forEach(ve=>{zi(ve,we[ve])})}u&&nh(u,t,"c");function Me(we,ve){X(ve)?ve.forEach(Nt=>we(Nt.bind(n))):ve&&we(ve.bind(n))}if(Me(d_,h),Me(Bf,d),Me(f_,g),Me(p_,m),Me(l_,v),Me(u_,I),Me(v_,V),Me(y_,te),Me(m_,pe),Me($f,w),Me(Vf,P),Me(g_,he),X(ae))if(ae.length){const we=t.exposed||(t.exposed={});ae.forEach(ve=>{Object.defineProperty(we,ve,{get:()=>n[ve],set:Nt=>n[ve]=Nt})})}else t.exposed||(t.exposed={});H&&t.render===Ft&&(t.render=H),Te!=null&&(t.inheritAttrs=Te),je&&(t.components=je),ft&&(t.directives=ft)}function T_(t,e,n=Ft,s=!1){X(t)&&(t=mc(t));for(const r in t){const i=t[r];let o;ke(i)?"default"in i?o=un(i.from||r,i.default,!0):o=un(i.from||r):o=un(i),Ke(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function nh(t,e,n){At(X(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hf(t,e,n,s){const r=s.includes(".")?xf(n,s):()=>n[s];if(Ve(t)){const i=e[t];Z(i)&&Wi(r,i)}else if(Z(t))Wi(r,t.bind(n));else if(ke(t))if(X(t))t.forEach(i=>Hf(i,e,n,s));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&Wi(r,i,t)}}function Tl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>ao(c,l,o,!0)),ao(c,e,o)),ke(e)&&i.set(e,c),c}function ao(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&ao(t,i,n,!0),r&&r.forEach(o=>ao(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=I_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const I_={data:sh,props:Gn,emits:Gn,methods:Gn,computed:Gn,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:Gn,directives:Gn,watch:S_,provide:sh,inject:C_};function sh(t,e){return e?t?function(){return at(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function C_(t,e){return Gn(mc(t),mc(e))}function mc(t){if(X(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ht(t,e){return t?[...new Set([].concat(t,e))]:e}function Gn(t,e){return t?at(at(Object.create(null),t),e):e}function S_(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const s in e)n[s]=ht(t[s],e[s]);return n}function A_(t,e,n,s=!1){const r={},i={};ro(i,Ho,1),t.propsDefaults=Object.create(null),Kf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Mv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function k_(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=de(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Uo(t.emitsOptions,d))continue;const g=e[d];if(c)if(le(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const m=Zt(d);r[m]=yc(c,a,m,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{Kf(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!le(e,h)&&((u=Qs(h))===h||!le(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=yc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!le(e,h))&&(delete i[h],l=!0)}l&&hn(t,"set","$attrs")}function Kf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Hi(c))continue;const l=e[c];let u;r&&le(r,u=Zt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Uo(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=de(n),l=a||Ie;for(let u=0;u<i.length;u++){const h=i[u];n[h]=yc(r,c,h,l[h],t,!le(l,h))}}return o}function yc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Z(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Un(r),s=l[n]=c.call(null,e),Rn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Qs(n))&&(s=!0))}return s}function zf(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Z(t)){const u=h=>{c=!0;const[d,g]=zf(h,e,!0);at(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ke(t)&&s.set(t,As),As;if(X(i))for(let u=0;u<i.length;u++){const h=Zt(i[u]);rh(h)&&(o[h]=Ie)}else if(i)for(const u in i){const h=Zt(u);if(rh(h)){const d=i[u],g=o[h]=X(d)||Z(d)?{type:d}:Object.assign({},d);if(g){const m=ah(Boolean,g.type),v=ah(String,g.type);g[0]=m>-1,g[1]=v<0||m<v,(m>-1||le(g,"default"))&&a.push(h)}}}const l=[o,a];return ke(t)&&s.set(t,l),l}function rh(t){return t[0]!=="$"}function ih(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function oh(t,e){return ih(t)===ih(e)}function ah(t,e){return X(e)?e.findIndex(n=>oh(n,t)):Z(e)&&oh(e,t)?0:-1}const Wf=t=>t[0]==="_"||t==="$stable",Il=t=>X(t)?t.map(Lt):[Lt(t)],R_=(t,e,n)=>{if(e._n)return e;const s=ye((...r)=>Il(e(...r)),n);return s._c=!1,s},Gf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Wf(r))continue;const i=t[r];if(Z(i))e[r]=R_(r,i,s);else if(i!=null){const o=Il(i);e[r]=()=>o}}},Qf=(t,e)=>{const n=Il(e);t.slots.default=()=>n},D_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=de(e),ro(e,"_",n)):Gf(e,t.slots={})}else t.slots={},e&&Qf(t,e);ro(t.slots,Ho,1)},N_=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ie;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(at(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Gf(e,r)),o=e}else e&&(Qf(t,e),o={default:1});if(i)for(const a in r)!Wf(a)&&!(a in o)&&delete r[a]};function Xf(){return{app:null,config:{isNativeTag:Zy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let O_=0;function P_(t,e){return function(s,r=null){Z(s)||(s=Object.assign({},s)),r!=null&&!ke(r)&&(r=null);const i=Xf(),o=new Set;let a=!1;const c=i.app={_uid:O_++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Z_,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Z(l.install)?(o.add(l),l.install(c,...u)):Z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=ue(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Ko(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function vc(t,e,n,s,r=!1){if(X(t)){t.forEach((d,g)=>vc(d,e&&(X(e)?e[g]:e),n,s,r));return}if(vr(s)&&!r)return;const i=s.shapeFlag&4?Ko(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ie?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ve(l)?(u[l]=null,le(h,l)&&(h[l]=null)):Ke(l)&&(l.value=null)),Z(c))kn(c,a,12,[o,u]);else{const d=Ve(c),g=Ke(c);if(d||g){const m=()=>{if(t.f){const v=d?le(h,c)?h[c]:u[c]:c.value;r?X(v)&&al(v,i):X(v)?v.includes(i)||v.push(i):d?(u[c]=[i],le(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,le(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,gt(m,n)):m()}}}const gt=r_;function x_(t){return L_(t)}function L_(t,e){const n=ov();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=Ft,insertStaticContent:m}=t,v=(f,p,y,_=null,T=null,D=null,x=!1,R=null,N=!!p.dynamicChildren)=>{if(f===p)return;f&&!Ht(f,p)&&(_=O(f),pt(f,T,D,!0),f=null),p.patchFlag===-2&&(N=!1,p.dynamicChildren=null);const{type:C,ref:j,shapeFlag:U}=p;switch(C){case qo:I(f,p,y,_);break;case yt:k(f,p,y,_);break;case Gi:f==null&&w(p,y,_,x);break;case qe:je(f,p,y,_,T,D,x,R,N);break;default:U&1?H(f,p,y,_,T,D,x,R,N):U&6?ft(f,p,y,_,T,D,x,R,N):(U&64||U&128)&&C.process(f,p,y,_,T,D,x,R,N,ce)}j!=null&&T&&vc(j,f&&f.ref,D,p||f,!p)},I=(f,p,y,_)=>{if(f==null)s(p.el=a(p.children),y,_);else{const T=p.el=f.el;p.children!==f.children&&l(T,p.children)}},k=(f,p,y,_)=>{f==null?s(p.el=c(p.children||""),y,_):p.el=f.el},w=(f,p,y,_)=>{[f.el,f.anchor]=m(f.children,p,y,_,f.el,f.anchor)},b=({el:f,anchor:p},y,_)=>{let T;for(;f&&f!==p;)T=d(f),s(f,y,_),f=T;s(p,y,_)},P=({el:f,anchor:p})=>{let y;for(;f&&f!==p;)y=d(f),r(f),f=y;r(p)},H=(f,p,y,_,T,D,x,R,N)=>{x=x||p.type==="svg",f==null?te(p,y,_,T,D,x,R,N):he(f,p,T,D,x,R,N)},te=(f,p,y,_,T,D,x,R)=>{let N,C;const{type:j,props:U,shapeFlag:q,transition:Y,dirs:se}=f;if(N=f.el=o(f.type,D,U&&U.is,U),q&8?u(N,f.children):q&16&&V(f.children,N,null,_,T,D&&j!=="foreignObject",x,R),se&&zn(f,null,_,"created"),pe(N,f,f.scopeId,x,_),U){for(const _e in U)_e!=="value"&&!Hi(_e)&&i(N,_e,null,U[_e],D,f.children,_,T,M);"value"in U&&i(N,"value",null,U.value),(C=U.onVnodeBeforeMount)&&Vt(C,_,f)}se&&zn(f,null,_,"beforeMount");const Ee=(!T||T&&!T.pendingBranch)&&Y&&!Y.persisted;Ee&&Y.beforeEnter(N),s(N,p,y),((C=U&&U.onVnodeMounted)||Ee||se)&&gt(()=>{C&&Vt(C,_,f),Ee&&Y.enter(N),se&&zn(f,null,_,"mounted")},T)},pe=(f,p,y,_,T)=>{if(y&&g(f,y),_)for(let D=0;D<_.length;D++)g(f,_[D]);if(T){let D=T.subTree;if(p===D){const x=T.vnode;pe(f,x,x.scopeId,x.slotScopeIds,T.parent)}}},V=(f,p,y,_,T,D,x,R,N=0)=>{for(let C=N;C<f.length;C++){const j=f[C]=R?En(f[C]):Lt(f[C]);v(null,j,p,y,_,T,D,x,R)}},he=(f,p,y,_,T,D,x)=>{const R=p.el=f.el;let{patchFlag:N,dynamicChildren:C,dirs:j}=p;N|=f.patchFlag&16;const U=f.props||Ie,q=p.props||Ie;let Y;y&&Wn(y,!1),(Y=q.onVnodeBeforeUpdate)&&Vt(Y,y,p,f),j&&zn(p,f,y,"beforeUpdate"),y&&Wn(y,!0);const se=T&&p.type!=="foreignObject";if(C?ae(f.dynamicChildren,C,R,y,_,se,D):x||ve(f,p,R,null,y,_,se,D,!1),N>0){if(N&16)Te(R,p,U,q,y,_,T);else if(N&2&&U.class!==q.class&&i(R,"class",null,q.class,T),N&4&&i(R,"style",U.style,q.style,T),N&8){const Ee=p.dynamicProps;for(let _e=0;_e<Ee.length;_e++){const Ue=Ee[_e],Pt=U[Ue],ws=q[Ue];(ws!==Pt||Ue==="value")&&i(R,Ue,Pt,ws,T,f.children,y,_,M)}}N&1&&f.children!==p.children&&u(R,p.children)}else!x&&C==null&&Te(R,p,U,q,y,_,T);((Y=q.onVnodeUpdated)||j)&&gt(()=>{Y&&Vt(Y,y,p,f),j&&zn(p,f,y,"updated")},_)},ae=(f,p,y,_,T,D,x)=>{for(let R=0;R<p.length;R++){const N=f[R],C=p[R],j=N.el&&(N.type===qe||!Ht(N,C)||N.shapeFlag&70)?h(N.el):y;v(N,C,j,null,_,T,D,x,!0)}},Te=(f,p,y,_,T,D,x)=>{if(y!==_){if(y!==Ie)for(const R in y)!Hi(R)&&!(R in _)&&i(f,R,y[R],null,x,p.children,T,D,M);for(const R in _){if(Hi(R))continue;const N=_[R],C=y[R];N!==C&&R!=="value"&&i(f,R,C,N,x,p.children,T,D,M)}"value"in _&&i(f,"value",y.value,_.value)}},je=(f,p,y,_,T,D,x,R,N)=>{const C=p.el=f?f.el:a(""),j=p.anchor=f?f.anchor:a("");let{patchFlag:U,dynamicChildren:q,slotScopeIds:Y}=p;Y&&(R=R?R.concat(Y):Y),f==null?(s(C,y,_),s(j,y,_),V(p.children,y,j,T,D,x,R,N)):U>0&&U&64&&q&&f.dynamicChildren?(ae(f.dynamicChildren,q,y,T,D,x,R),(p.key!=null||T&&p===T.subTree)&&Yf(f,p,!0)):ve(f,p,y,j,T,D,x,R,N)},ft=(f,p,y,_,T,D,x,R,N)=>{p.slotScopeIds=R,f==null?p.shapeFlag&512?T.ctx.activate(p,y,_,x,N):_t(p,y,_,T,D,x,N):ar(f,p,N)},_t=(f,p,y,_,T,D,x)=>{const R=f.component=H_(f,_,T);if(Vo(f)&&(R.ctx.renderer=ce),K_(R),R.asyncDep){if(T&&T.registerDep(R,Me),!f.el){const N=R.subTree=ue(yt);k(null,N,p,y)}return}Me(R,f,p,y,T,D,x)},ar=(f,p,y)=>{const _=p.component=f.component;if(Xv(f,p,y))if(_.asyncDep&&!_.asyncResolved){we(_,p,y);return}else _.next=p,Hv(_.update),_.update();else p.el=f.el,_.vnode=p},Me=(f,p,y,_,T,D,x)=>{const R=()=>{if(f.isMounted){let{next:j,bu:U,u:q,parent:Y,vnode:se}=f,Ee=j,_e;Wn(f,!1),j?(j.el=se.el,we(f,j,x)):j=se,U&&Ki(U),(_e=j.props&&j.props.onVnodeBeforeUpdate)&&Vt(_e,Y,j,se),Wn(f,!0);const Ue=Pa(f),Pt=f.subTree;f.subTree=Ue,v(Pt,Ue,h(Pt.el),O(Pt),f,T,D),j.el=Ue.el,Ee===null&&wl(f,Ue.el),q&&gt(q,T),(_e=j.props&&j.props.onVnodeUpdated)&&gt(()=>Vt(_e,Y,j,se),T)}else{let j;const{el:U,props:q}=p,{bm:Y,m:se,parent:Ee}=f,_e=vr(p);if(Wn(f,!1),Y&&Ki(Y),!_e&&(j=q&&q.onVnodeBeforeMount)&&Vt(j,Ee,p),Wn(f,!0),U&&ne){const Ue=()=>{f.subTree=Pa(f),ne(U,f.subTree,f,T,null)};_e?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ue()):Ue()}else{const Ue=f.subTree=Pa(f);v(null,Ue,y,_,f,T,D),p.el=Ue.el}if(se&&gt(se,T),!_e&&(j=q&&q.onVnodeMounted)){const Ue=p;gt(()=>Vt(j,Ee,Ue),T)}(p.shapeFlag&256||Ee&&vr(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&f.a&&gt(f.a,T),f.isMounted=!0,p=y=_=null}},N=f.effect=new dl(R,()=>_l(C),f.scope),C=f.update=()=>N.run();C.id=f.uid,Wn(f,!0),C()},we=(f,p,y)=>{p.component=f;const _=f.vnode.props;f.vnode=p,f.next=null,k_(f,p.props,_,y),N_(f,p.children,y),Xs(),Qu(),Ys()},ve=(f,p,y,_,T,D,x,R,N=!1)=>{const C=f&&f.children,j=f?f.shapeFlag:0,U=p.children,{patchFlag:q,shapeFlag:Y}=p;if(q>0){if(q&128){Kn(C,U,y,_,T,D,x,R,N);return}else if(q&256){Nt(C,U,y,_,T,D,x,R,N);return}}Y&8?(j&16&&M(C,T,D),U!==C&&u(y,U)):j&16?Y&16?Kn(C,U,y,_,T,D,x,R,N):M(C,T,D,!0):(j&8&&u(y,""),Y&16&&V(U,y,_,T,D,x,R,N))},Nt=(f,p,y,_,T,D,x,R,N)=>{f=f||As,p=p||As;const C=f.length,j=p.length,U=Math.min(C,j);let q;for(q=0;q<U;q++){const Y=p[q]=N?En(p[q]):Lt(p[q]);v(f[q],Y,y,null,T,D,x,R,N)}C>j?M(f,T,D,!0,!1,U):V(p,y,_,T,D,x,R,N,U)},Kn=(f,p,y,_,T,D,x,R,N)=>{let C=0;const j=p.length;let U=f.length-1,q=j-1;for(;C<=U&&C<=q;){const Y=f[C],se=p[C]=N?En(p[C]):Lt(p[C]);if(Ht(Y,se))v(Y,se,y,null,T,D,x,R,N);else break;C++}for(;C<=U&&C<=q;){const Y=f[U],se=p[q]=N?En(p[q]):Lt(p[q]);if(Ht(Y,se))v(Y,se,y,null,T,D,x,R,N);else break;U--,q--}if(C>U){if(C<=q){const Y=q+1,se=Y<j?p[Y].el:_;for(;C<=q;)v(null,p[C]=N?En(p[C]):Lt(p[C]),y,se,T,D,x,R,N),C++}}else if(C>q)for(;C<=U;)pt(f[C],T,D,!0),C++;else{const Y=C,se=C,Ee=new Map;for(C=se;C<=q;C++){const wt=p[C]=N?En(p[C]):Lt(p[C]);wt.key!=null&&Ee.set(wt.key,C)}let _e,Ue=0;const Pt=q-se+1;let ws=!1,Fu=0;const cr=new Array(Pt);for(C=0;C<Pt;C++)cr[C]=0;for(C=Y;C<=U;C++){const wt=f[C];if(Ue>=Pt){pt(wt,T,D,!0);continue}let $t;if(wt.key!=null)$t=Ee.get(wt.key);else for(_e=se;_e<=q;_e++)if(cr[_e-se]===0&&Ht(wt,p[_e])){$t=_e;break}$t===void 0?pt(wt,T,D,!0):(cr[$t-se]=C+1,$t>=Fu?Fu=$t:ws=!0,v(wt,p[$t],y,null,T,D,x,R,N),Ue++)}const Bu=ws?M_(cr):As;for(_e=Bu.length-1,C=Pt-1;C>=0;C--){const wt=se+C,$t=p[wt],$u=wt+1<j?p[wt+1].el:_;cr[C]===0?v(null,$t,y,$u,T,D,x,R,N):ws&&(_e<0||C!==Bu[_e]?Ot($t,y,$u,2):_e--)}}},Ot=(f,p,y,_,T=null)=>{const{el:D,type:x,transition:R,children:N,shapeFlag:C}=f;if(C&6){Ot(f.component.subTree,p,y,_);return}if(C&128){f.suspense.move(p,y,_);return}if(C&64){x.move(f,p,y,ce);return}if(x===qe){s(D,p,y);for(let U=0;U<N.length;U++)Ot(N[U],p,y,_);s(f.anchor,p,y);return}if(x===Gi){b(f,p,y);return}if(_!==2&&C&1&&R)if(_===0)R.beforeEnter(D),s(D,p,y),gt(()=>R.enter(D),T);else{const{leave:U,delayLeave:q,afterLeave:Y}=R,se=()=>s(D,p,y),Ee=()=>{U(D,()=>{se(),Y&&Y()})};q?q(D,se,Ee):Ee()}else s(D,p,y)},pt=(f,p,y,_=!1,T=!1)=>{const{type:D,props:x,ref:R,children:N,dynamicChildren:C,shapeFlag:j,patchFlag:U,dirs:q}=f;if(R!=null&&vc(R,null,y,f,!0),j&256){p.ctx.deactivate(f);return}const Y=j&1&&q,se=!vr(f);let Ee;if(se&&(Ee=x&&x.onVnodeBeforeUnmount)&&Vt(Ee,p,f),j&6)E(f.component,y,_);else{if(j&128){f.suspense.unmount(y,_);return}Y&&zn(f,null,p,"beforeUnmount"),j&64?f.type.remove(f,p,y,T,ce,_):C&&(D!==qe||U>0&&U&64)?M(C,p,y,!1,!0):(D===qe&&U&384||!T&&j&16)&&M(N,p,y),_&&_s(f)}(se&&(Ee=x&&x.onVnodeUnmounted)||Y)&&gt(()=>{Ee&&Vt(Ee,p,f),Y&&zn(f,null,p,"unmounted")},y)},_s=f=>{const{type:p,el:y,anchor:_,transition:T}=f;if(p===qe){Ai(y,_);return}if(p===Gi){P(f);return}const D=()=>{r(y),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(f.shapeFlag&1&&T&&!T.persisted){const{leave:x,delayLeave:R}=T,N=()=>x(y,D);R?R(f.el,D,N):N()}else D()},Ai=(f,p)=>{let y;for(;f!==p;)y=d(f),r(f),f=y;r(p)},E=(f,p,y)=>{const{bum:_,scope:T,update:D,subTree:x,um:R}=f;_&&Ki(_),T.stop(),D&&(D.active=!1,pt(x,f,p,y)),R&&gt(R,p),gt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},M=(f,p,y,_=!1,T=!1,D=0)=>{for(let x=D;x<f.length;x++)pt(f[x],p,y,_,T)},O=f=>f.shapeFlag&6?O(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),$=(f,p,y)=>{f==null?p._vnode&&pt(p._vnode,null,null,!0):v(p._vnode||null,f,p,null,null,null,y),Qu(),Df(),p._vnode=f},ce={p:v,um:pt,m:Ot,r:_s,mt:_t,mc:V,pc:ve,pbc:ae,n:O,o:t};let Re,ne;return e&&([Re,ne]=e(ce)),{render:$,hydrate:Re,createApp:P_($,Re)}}function Wn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Yf(t,e,n=!1){const s=t.children,r=e.children;if(X(s)&&X(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=En(r[i]),a.el=o.el),n||Yf(o,a)),a.type===qo&&(a.el=o.el)}}function M_(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const U_=t=>t.__isTeleport,qe=Symbol(void 0),qo=Symbol(void 0),yt=Symbol(void 0),Gi=Symbol(void 0),wr=[];let St=null;function ie(t=!1){wr.push(St=t?null:[])}function Jf(){wr.pop(),St=wr[wr.length-1]||null}let Us=1;function ch(t){Us+=t}function Zf(t){return t.dynamicChildren=Us>0?St||As:null,Jf(),Us>0&&St&&St.push(t),t}function Ce(t,e,n,s,r,i){return Zf(L(t,e,n,s,r,i,!0))}function on(t,e,n,s,r){return Zf(ue(t,e,n,s,r,!0))}function Lr(t){return t?t.__v_isVNode===!0:!1}function Ht(t,e){return t.type===e.type&&t.key===e.key}const Ho="__vInternal",ep=({key:t})=>t??null,Qi=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ve(t)||Ke(t)||Z(t)?{i:Je,r:t,k:e,f:!!n}:t:null;function L(t,e=null,n=null,s=0,r=null,i=t===qe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ep(e),ref:e&&Qi(e),scopeId:Fo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Je};return a?(Cl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ve(n)?8:16),Us>0&&!o&&St&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&St.push(c),c}const ue=F_;function F_(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===__)&&(t=yt),Lr(t)){const a=Mn(t,e,!0);return n&&Cl(a,n),Us>0&&!i&&St&&(a.shapeFlag&6?St[St.indexOf(t)]=a:St.push(a)),a.patchFlag|=-2,a}if(X_(t)&&(t=t.__vccOpts),e){e=B_(e);let{class:a,style:c}=e;a&&!Ve(a)&&(e.class=il(a)),ke(c)&&(_f(c)&&!X(c)&&(c=at({},c)),e.style=rl(c))}const o=Ve(t)?1:Yv(t)?128:U_(t)?64:ke(t)?4:Z(t)?2:0;return L(t,e,n,s,r,o,i,!0)}function B_(t){return t?_f(t)||Ho in t?at({},t):t:null}function Mn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?V_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ep(a),ref:e&&e.ref?n&&r?X(r)?r.concat(Qi(e)):[r,Qi(e)]:Qi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mn(t.ssContent),ssFallback:t.ssFallback&&Mn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function De(t=" ",e=0){return ue(qo,null,t,e)}function $_(t,e){const n=ue(Gi,null,t);return n.staticCount=e,n}function tp(t="",e=!1){return e?(ie(),on(yt,null,t)):ue(yt,null,t)}function Lt(t){return t==null||typeof t=="boolean"?ue(yt):X(t)?ue(qe,null,t.slice()):typeof t=="object"?En(t):ue(qo,null,String(t))}function En(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Mn(t)}function Cl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(X(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Cl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Ho in e)?e._ctx=Je:r===3&&Je&&(Je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:Je},n=32):(e=String(e),s&64?(n=16,e=[De(e)]):n=8);t.children=e,t.shapeFlag|=n}function V_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=il([e.class,s.class]));else if(r==="style")e.style=rl([e.style,s.style]);else if(Oo(r)){const i=e[r],o=s[r];o&&i!==o&&!(X(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Vt(t,e,n,s=null){At(t,e,7,[n,s])}const j_=Xf();let q_=0;function H_(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||j_,i={uid:q_++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new av(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zf(s,r),emitsOptions:Of(s,r),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:s.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=zv.bind(null,i),t.ce&&t.ce(i),i}let xe=null;const np=()=>xe||Je,Un=t=>{xe=t,t.scope.on()},Rn=()=>{xe&&xe.scope.off(),xe=null};function sp(t){return t.vnode.shapeFlag&4}let Mr=!1;function K_(t,e=!1){Mr=e;const{props:n,children:s}=t.vnode,r=sp(t);A_(t,n,r,e),D_(t,s);const i=r?z_(t,e):void 0;return Mr=!1,i}function z_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=wf(new Proxy(t.ctx,E_));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?G_(t):null;Un(t),Xs();const i=kn(s,t,0,[t.props,r]);if(Ys(),Rn(),ll(i)){if(i.then(Rn,Rn),e)return i.then(o=>{_c(t,o,e)}).catch(o=>{ei(o,t,0)});t.asyncDep=i}else _c(t,i,e)}else rp(t,e)}function _c(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ke(e)&&(t.setupState=If(e)),rp(t,n)}let lh;function rp(t,e,n){const s=t.type;if(!t.render){if(!e&&lh&&!s.render){const r=s.template||Tl(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=at(at({isCustomElement:i,delimiters:a},o),c);s.render=lh(r,l)}}t.render=s.render||Ft}Un(t),Xs(),b_(t),Ys(),Rn()}function W_(t){return new Proxy(t.attrs,{get(e,n){return vt(t,"get","$attrs"),e[n]}})}function G_(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=W_(t))},slots:t.slots,emit:t.emit,expose:e}}function Ko(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(If(wf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _r)return _r[n](t)},has(e,n){return n in e||n in _r}}))}function Q_(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function X_(t){return Z(t)&&"__vccOpts"in t}const Ct=(t,e)=>Vv(t,e,Mr);function zo(t){const e=np();let n=t();return Rn(),ll(n)&&(n=n.catch(s=>{throw Un(e),s})),[n,()=>Un(e)]}function ip(t,e,n){const s=arguments.length;return s===2?ke(e)&&!X(e)?Lr(e)?ue(t,null,[e]):ue(t,e):ue(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Lr(n)&&(n=[n]),ue(t,e,n))}const Y_=Symbol(""),J_=()=>un(Y_),Z_="3.2.47",ew="http://www.w3.org/2000/svg",Yn=typeof document<"u"?document:null,uh=Yn&&Yn.createElement("template"),tw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Yn.createElementNS(ew,t):Yn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Yn.createTextNode(t),createComment:t=>Yn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Yn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{uh.innerHTML=s?`<svg>${t}</svg>`:t;const a=uh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function nw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function sw(t,e,n){const s=t.style,r=Ve(n);if(n&&!r){if(e&&!Ve(e))for(const i in e)n[i]==null&&wc(s,i,"");for(const i in n)wc(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const hh=/\s*!important$/;function wc(t,e,n){if(X(n))n.forEach(s=>wc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=rw(t,e);hh.test(n)?t.setProperty(Qs(s),n.replace(hh,""),"important"):t[s]=n}}const dh=["Webkit","Moz","ms"],Ma={};function rw(t,e){const n=Ma[e];if(n)return n;let s=Zt(e);if(s!=="filter"&&s in t)return Ma[e]=s;s=Lo(s);for(let r=0;r<dh.length;r++){const i=dh[r]+s;if(i in t)return Ma[e]=i}return e}const fh="http://www.w3.org/1999/xlink";function iw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(fh,e.slice(6,e.length)):t.setAttributeNS(fh,e,n);else{const i=Jy(e);n==null||i&&!nf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function ow(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=nf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function bs(t,e,n,s){t.addEventListener(e,n,s)}function aw(t,e,n,s){t.removeEventListener(e,n,s)}function cw(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=lw(e);if(s){const l=i[e]=dw(s,r);bs(t,a,l,c)}else o&&(aw(t,a,o,c),i[e]=void 0)}}const ph=/(?:Once|Passive|Capture)$/;function lw(t){let e;if(ph.test(t)){e={};let s;for(;s=t.match(ph);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qs(t.slice(2)),e]}let Ua=0;const uw=Promise.resolve(),hw=()=>Ua||(uw.then(()=>Ua=0),Ua=Date.now());function dw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;At(fw(s,n.value),e,5,[s])};return n.value=t,n.attached=hw(),n}function fw(t,e){if(X(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const gh=/^on[a-z]/,pw=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?nw(t,s,r):e==="style"?sw(t,n,s):Oo(e)?ol(e)||cw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gw(t,e,s,r))?ow(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),iw(t,e,s,r))};function gw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&gh.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||gh.test(e)&&Ve(n)?!1:e in t}const mw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};c_.props;const mh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return X(e)?n=>Ki(e,n):e};function yw(t){t.target.composing=!0}function yh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const vh={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=mh(r);const i=s||r.props&&r.props.type==="number";bs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=oc(a)),t._assign(a)}),n&&bs(t,"change",()=>{t.value=t.value.trim()}),e||(bs(t,"compositionstart",yw),bs(t,"compositionend",yh),bs(t,"change",yh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=mh(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&oc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},vw=at({patchProp:pw},tw);let _h;function _w(){return _h||(_h=x_(vw))}const ww=(...t)=>{const e=_w().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Ew(s);if(!r)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Ew(t){return Ve(t)?document.querySelector(t):t}/**
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
 */const op=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},bw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ap={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(op(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Tw=function(t){const e=op(t);return ap.encodeByteArray(e,!0)},co=function(t){return Tw(t).replace(/\./g,"")},cp=function(t){try{return ap.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Iw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cw=()=>Iw().__FIREBASE_DEFAULTS__,Sw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Aw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cp(t[1]);return e&&JSON.parse(e)},Wo=()=>{try{return Cw()||Sw()||Aw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lp=t=>{var e,n;return(n=(e=Wo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},up=t=>{const e=lp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},kw=()=>{var t;return(t=Wo())===null||t===void 0?void 0:t.config},hp=t=>{var e;return(e=Wo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Rw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function dp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[co(JSON.stringify(n)),co(JSON.stringify(o)),a].join(".")}/**
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
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function Nw(){var t;const e=(t=Wo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ow(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Pw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xw(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Lw(){try{return typeof indexedDB=="object"}catch{return!1}}function Mw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Uw="FirebaseError";class nn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Uw,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ti.prototype.create)}}class ti{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Fw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new nn(r,a,s)}}function Fw(t,e){return t.replace(Bw,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Bw=/\{\$([^}]+)}/g;function $w(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(wh(i)&&wh(o)){if(!lo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function wh(t){return t!==null&&typeof t=="object"}/**
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
 */function ni(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function fr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function pr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Vw(t,e){const n=new jw(t,e);return n.subscribe.bind(n)}class jw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");qw(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Fa),r.error===void 0&&(r.error=Fa),r.complete===void 0&&(r.complete=Fa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fa(){}/**
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
 */function Le(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qn="[DEFAULT]";/**
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
 */class Hw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Rw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zw(e))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qn){return this.instances.has(e)}getOptions(e=Qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Kw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qn){return this.component?this.component.multipleInstances?e:Qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kw(t){return t===Qn?void 0:t}function zw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ww{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Hw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const Gw={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},Qw=fe.INFO,Xw={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},Yw=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Xw[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sl{constructor(e){this.name=e,this._logLevel=Qw,this._logHandler=Yw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const Jw=(t,e)=>e.some(n=>t instanceof n);let Eh,bh;function Zw(){return Eh||(Eh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eE(){return bh||(bh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fp=new WeakMap,Ec=new WeakMap,pp=new WeakMap,Ba=new WeakMap,Al=new WeakMap;function tE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Dn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fp.set(n,t)}).catch(()=>{}),Al.set(e,t),e}function nE(t){if(Ec.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ec.set(t,e)}let bc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ec.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sE(t){bc=t(bc)}function rE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call($a(this),e,...n);return pp.set(s,e.sort?e.sort():[e]),Dn(s)}:eE().includes(t)?function(...e){return t.apply($a(this),e),Dn(fp.get(this))}:function(...e){return Dn(t.apply($a(this),e))}}function iE(t){return typeof t=="function"?rE(t):(t instanceof IDBTransaction&&nE(t),Jw(t,Zw())?new Proxy(t,bc):t)}function Dn(t){if(t instanceof IDBRequest)return tE(t);if(Ba.has(t))return Ba.get(t);const e=iE(t);return e!==t&&(Ba.set(t,e),Al.set(e,t)),e}const $a=t=>Al.get(t);function oE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Dn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Dn(o.result),c.oldVersion,c.newVersion,Dn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const aE=["get","getKey","getAll","getAllKeys","count"],cE=["put","add","delete","clear"],Va=new Map;function Th(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Va.get(e))return Va.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=cE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||aE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Va.set(e,i),i}sE(t=>({...t,get:(e,n,s)=>Th(e,n)||t.get(e,n,s),has:(e,n)=>!!Th(e,n)||t.has(e,n)}));/**
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
 */class lE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function uE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tc="@firebase/app",Ih="0.9.3";/**
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
 */const ls=new Sl("@firebase/app"),hE="@firebase/app-compat",dE="@firebase/analytics-compat",fE="@firebase/analytics",pE="@firebase/app-check-compat",gE="@firebase/app-check",mE="@firebase/auth",yE="@firebase/auth-compat",vE="@firebase/database",_E="@firebase/database-compat",wE="@firebase/functions",EE="@firebase/functions-compat",bE="@firebase/installations",TE="@firebase/installations-compat",IE="@firebase/messaging",CE="@firebase/messaging-compat",SE="@firebase/performance",AE="@firebase/performance-compat",kE="@firebase/remote-config",RE="@firebase/remote-config-compat",DE="@firebase/storage",NE="@firebase/storage-compat",OE="@firebase/firestore",PE="@firebase/firestore-compat",xE="firebase",LE="9.17.1";/**
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
 */const Ic="[DEFAULT]",ME={[Tc]:"fire-core",[hE]:"fire-core-compat",[fE]:"fire-analytics",[dE]:"fire-analytics-compat",[gE]:"fire-app-check",[pE]:"fire-app-check-compat",[mE]:"fire-auth",[yE]:"fire-auth-compat",[vE]:"fire-rtdb",[_E]:"fire-rtdb-compat",[wE]:"fire-fn",[EE]:"fire-fn-compat",[bE]:"fire-iid",[TE]:"fire-iid-compat",[IE]:"fire-fcm",[CE]:"fire-fcm-compat",[SE]:"fire-perf",[AE]:"fire-perf-compat",[kE]:"fire-rc",[RE]:"fire-rc-compat",[DE]:"fire-gcs",[NE]:"fire-gcs-compat",[OE]:"fire-fst",[PE]:"fire-fst-compat","fire-js":"fire-js",[xE]:"fire-js-all"};/**
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
 */const uo=new Map,Cc=new Map;function UE(t,e){try{t.container.addComponent(e)}catch(n){ls.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function us(t){const e=t.name;if(Cc.has(e))return ls.debug(`There were multiple attempts to register component ${e}.`),!1;Cc.set(e,t);for(const n of uo.values())UE(n,t);return!0}function Go(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const FE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Nn=new ti("app","Firebase",FE);/**
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
 */class BE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
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
 */const Js=LE;function gp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ic,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Nn.create("bad-app-name",{appName:String(r)});if(n||(n=kw()),!n)throw Nn.create("no-options");const i=uo.get(r);if(i){if(lo(n,i.options)&&lo(s,i.config))return i;throw Nn.create("duplicate-app",{appName:r})}const o=new Ww(r);for(const c of Cc.values())o.addComponent(c);const a=new BE(n,s,o);return uo.set(r,a),a}function kl(t=Ic){const e=uo.get(t);if(!e&&t===Ic)return gp();if(!e)throw Nn.create("no-app",{appName:t});return e}function Gt(t,e,n){var s;let r=(s=ME[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ls.warn(a.join(" "));return}us(new Fn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const $E="firebase-heartbeat-database",VE=1,Ur="firebase-heartbeat-store";let ja=null;function mp(){return ja||(ja=oE($E,VE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ur)}}}).catch(t=>{throw Nn.create("idb-open",{originalErrorMessage:t.message})})),ja}async function jE(t){try{return(await mp()).transaction(Ur).objectStore(Ur).get(yp(t))}catch(e){if(e instanceof nn)ls.warn(e.message);else{const n=Nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ls.warn(n.message)}}}async function Ch(t,e){try{const s=(await mp()).transaction(Ur,"readwrite");return await s.objectStore(Ur).put(e,yp(t)),s.done}catch(n){if(n instanceof nn)ls.warn(n.message);else{const s=Nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ls.warn(s.message)}}}function yp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const qE=1024,HE=30*24*60*60*1e3;class KE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new WE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=HE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Sh(),{heartbeatsToSend:n,unsentEntries:s}=zE(this._heartbeatsCache.heartbeats),r=co(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Sh(){return new Date().toISOString().substring(0,10)}function zE(t,e=qE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ah(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ah(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class WE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lw()?Mw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await jE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ch(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ch(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ah(t){return co(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function GE(t){us(new Fn("platform-logger",e=>new lE(e),"PRIVATE")),us(new Fn("heartbeat",e=>new KE(e),"PRIVATE")),Gt(Tc,Ih,t),Gt(Tc,Ih,"esm2017"),Gt("fire-js","")}GE("");function Rl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function vp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QE=vp,_p=new ti("auth","Firebase",vp());/**
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
 */const kh=new Sl("@firebase/auth");function Xi(t,...e){kh.logLevel<=fe.ERROR&&kh.error(`Auth (${Js}): ${t}`,...e)}/**
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
 */function Dt(t,...e){throw Dl(t,...e)}function Qt(t,...e){return Dl(t,...e)}function wp(t,e,n){const s=Object.assign(Object.assign({},QE()),{[e]:n});return new ti("auth","Firebase",s).create(e,{appName:t.name})}function XE(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Dt(t,"argument-error"),wp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return _p.create(t,...e)}function W(t,e,...n){if(!t)throw Dl(e,...n)}function an(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xi(e),new Error(e)}function dn(t,e){t||an(e)}/**
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
 */const Rh=new Map;function cn(t){dn(t instanceof Function,"Expected a class definition");let e=Rh.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rh.set(t,e),e)}/**
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
 */function YE(t,e){const n=Go(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(lo(i,e??{}))return r;Dt(r,"already-initialized")}return n.initialize({options:e})}function JE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Sc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ZE(){return Dh()==="http:"||Dh()==="https:"}function Dh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function eb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZE()||Ow()||"connection"in navigator)?navigator.onLine:!0}function tb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class si{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=Dw()||Pw()}get(){return eb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nl(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ep{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;an("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;an("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;an("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const nb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const sb=new si(3e4,6e4);function ri(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ii(t,e,n,s,r={}){return bp(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ni(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ep.fetch()(Tp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function bp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},nb),e);try{const r=new rb(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw xi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw xi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw xi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw xi(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw wp(t,u,l);Dt(t,u)}}catch(r){if(r instanceof nn)throw r;Dt(t,"network-request-failed")}}async function oi(t,e,n,s,r={}){const i=await ii(t,e,n,s,r);return"mfaPendingCredential"in i&&Dt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Tp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Nl(t.config,r):`${t.config.apiScheme}://${r}`}class rb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Qt(this.auth,"network-request-failed")),sb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Qt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function ib(t,e){return ii(t,"POST","/v1/accounts:delete",e)}async function ob(t,e){return ii(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Er(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ab(t,e=!1){const n=Le(t),s=await n.getIdToken(e),r=Ol(s);W(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Er(qa(r.auth_time)),issuedAtTime:Er(qa(r.iat)),expirationTime:Er(qa(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function qa(t){return Number(t)*1e3}function Ol(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Xi("JWT malformed, contained fewer than 3 sections"),null;try{const r=cp(n);return r?JSON.parse(r):(Xi("Failed to decode base64 JWT payload"),null)}catch(r){return Xi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function cb(t){const e=Ol(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof nn&&lb(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function lb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ub{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ip{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Er(this.lastLoginAt),this.creationTime=Er(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ho(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Fr(t,ob(n,{idToken:s}));W(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?fb(i.providerUserInfo):[],a=db(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ip(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function hb(t){const e=Le(t);await ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function db(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function fb(t){return t.map(e=>{var{providerId:n}=e,s=Rl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function pb(t,e){const n=await bp(t,{},async()=>{const s=ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Tp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ep.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await pb(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Br;return s&&(W(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(W(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Br,this.toJSON())}_performRefresh(){return an("not implemented")}}/**
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
 */function _n(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rs{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Rl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ub(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ip(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Fr(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ab(this,e)}reload(){return hb(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new rs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ho(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Fr(this,ib(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:P,isAnonymous:H,providerData:te,stsTokenManager:pe}=n;W(b&&pe,e,"internal-error");const V=Br.fromJSON(this.name,pe);W(typeof b=="string",e,"internal-error"),_n(h,e.name),_n(d,e.name),W(typeof P=="boolean",e,"internal-error"),W(typeof H=="boolean",e,"internal-error"),_n(g,e.name),_n(m,e.name),_n(v,e.name),_n(I,e.name),_n(k,e.name),_n(w,e.name);const he=new rs({uid:b,auth:e,email:d,emailVerified:P,displayName:h,isAnonymous:H,photoURL:m,phoneNumber:g,tenantId:v,stsTokenManager:V,createdAt:k,lastLoginAt:w});return te&&Array.isArray(te)&&(he.providerData=te.map(ae=>Object.assign({},ae))),I&&(he._redirectEventId=I),he}static async _fromIdTokenResponse(e,n,s=!1){const r=new Br;r.updateFromServerResponse(n);const i=new rs({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ho(i),i}}/**
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
 */class Cp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Cp.type="NONE";const Nh=Cp;/**
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
 */function Yi(t,e,n){return`firebase:${t}:${e}:${n}`}class Os{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Yi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Yi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Os(cn(Nh),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||cn(Nh);const o=Yi(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=rs._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Os(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Os(i,e,s))}}/**
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
 */function Oh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dp(e))return"Blackberry";if(Np(e))return"Webos";if(Pl(e))return"Safari";if((e.includes("chrome/")||Ap(e))&&!e.includes("edge/"))return"Chrome";if(Rp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Sp(t=ct()){return/firefox\//i.test(t)}function Pl(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ap(t=ct()){return/crios\//i.test(t)}function kp(t=ct()){return/iemobile/i.test(t)}function Rp(t=ct()){return/android/i.test(t)}function Dp(t=ct()){return/blackberry/i.test(t)}function Np(t=ct()){return/webos/i.test(t)}function Qo(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gb(t=ct()){var e;return Qo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mb(){return xw()&&document.documentMode===10}function Op(t=ct()){return Qo(t)||Rp(t)||Np(t)||Dp(t)||/windows phone/i.test(t)||kp(t)}function yb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Pp(t,e=[]){let n;switch(t){case"Browser":n=Oh(ct());break;case"Worker":n=`${Oh(ct())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Js}/${s}`}/**
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
 */class vb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class _b{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ph(this),this.idTokenSubscription=new Ph(this),this.beforeStateQueue=new vb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Os.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ho(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Le(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ti("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Os.create(this,[cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Zs(t){return Le(t)}class Ph{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vw(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function wb(t,e,n){const s=Zs(t);W(s._canInitEmulator,s,"emulator-config-failed"),W(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=xp(e),{host:o,port:a}=Eb(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||bb()}function xp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Eb(t){const e=xp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:xh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:xh(o)}}}function xh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class xl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return an("not implemented")}_getIdTokenResponse(e){return an("not implemented")}_linkToIdToken(e,n){return an("not implemented")}_getReauthenticationResolver(e){return an("not implemented")}}async function Tb(t,e){return ii(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ib(t,e){return oi(t,"POST","/v1/accounts:signInWithPassword",ri(t,e))}/**
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
 */async function Cb(t,e){return oi(t,"POST","/v1/accounts:signInWithEmailLink",ri(t,e))}async function Sb(t,e){return oi(t,"POST","/v1/accounts:signInWithEmailLink",ri(t,e))}/**
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
 */class $r extends xl{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new $r(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new $r(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ib(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Cb(e,{email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Tb(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Sb(e,{idToken:n,email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ps(t,e){return oi(t,"POST","/v1/accounts:signInWithIdp",ri(t,e))}/**
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
 */const Ab="http://localhost";class hs extends xl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Rl(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new hs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ps(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ps(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ps(e,n)}buildRequest(){const e={requestUri:Ab,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ni(n)}return e}}/**
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
 */function kb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Rb(t){const e=fr(pr(t)).link,n=e?fr(pr(e)).deep_link_id:null,s=fr(pr(t)).deep_link_id;return(s?fr(pr(s)).link:null)||s||n||e||t}class Ll{constructor(e){var n,s,r,i,o,a;const c=fr(pr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=kb((r=c.mode)!==null&&r!==void 0?r:null);W(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Rb(e);try{return new Ll(n)}catch{return null}}}/**
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
 */class er{constructor(){this.providerId=er.PROVIDER_ID}static credential(e,n){return $r._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ll.parseLink(n);return W(s,"argument-error"),$r._fromEmailAndCode(e,s.code,s.tenantId)}}er.PROVIDER_ID="password";er.EMAIL_PASSWORD_SIGN_IN_METHOD="password";er.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ml{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ai extends Ml{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Tn extends ai{constructor(){super("facebook.com")}static credential(e){return hs._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tn.PROVIDER_ID="facebook.com";/**
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
 */class Ut extends ai{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hs._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ut.credential(n,s)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
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
 */class In extends ai{constructor(){super("github.com")}static credential(e){return hs._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
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
 */class Cn extends ai{constructor(){super("twitter.com")}static credential(e,n){return hs._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Cn.credential(n,s)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
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
 */async function Db(t,e){return oi(t,"POST","/v1/accounts:signUp",ri(t,e))}/**
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
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await rs._fromIdTokenResponse(e,s,r),o=Lh(s);return new ds({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Lh(s);return new ds({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Lh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class fo extends nn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,fo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new fo(e,n,s,r)}}function Lp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?fo._fromErrorAndOperation(t,i,e,s):i})}async function Nb(t,e,n=!1){const s=await Fr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ds._forOperation(t,"link",s)}/**
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
 */async function Ob(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Fr(t,Lp(s,r,e,t),n);W(i.idToken,s,"internal-error");const o=Ol(i.idToken);W(o,s,"internal-error");const{sub:a}=o;return W(t.uid===a,s,"user-mismatch"),ds._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Dt(s,"user-mismatch"),i}}/**
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
 */async function Mp(t,e,n=!1){const s="signIn",r=await Lp(t,s,e),i=await ds._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Pb(t,e){return Mp(Zs(t),e)}async function xb(t,e,n){const s=Zs(t),r=await Db(s,{returnSecureToken:!0,email:e,password:n}),i=await ds._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function Lb(t,e,n){return Pb(Le(t),er.credential(e,n))}function Mb(t,e,n,s){return Le(t).onIdTokenChanged(e,n,s)}function Ub(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function Xo(t,e,n,s){return Le(t).onAuthStateChanged(e,n,s)}function Fb(t){return Le(t).signOut()}const po="__sak";/**
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
 */class Up{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(po,"1"),this.storage.removeItem(po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Bb(){const t=ct();return Pl(t)||Qo(t)}const $b=1e3,Vb=10;class Fp extends Up{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Bb()&&yb(),this.fallbackToPolling=Op(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);mb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Vb):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},$b)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fp.type="LOCAL";const jb=Fp;/**
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
 */class Bp extends Up{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bp.type="SESSION";const $p=Bp;/**
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
 */function qb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Yo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Yo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await qb(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yo.receivers=[];/**
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
 */function Ul(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Hb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ul("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Xt(){return window}function Kb(t){Xt().location.href=t}/**
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
 */function Vp(){return typeof Xt().WorkerGlobalScope<"u"&&typeof Xt().importScripts=="function"}async function zb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Gb(){return Vp()?self:null}/**
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
 */const jp="firebaseLocalStorageDb",Qb=1,go="firebaseLocalStorage",qp="fbase_key";class ci{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jo(t,e){return t.transaction([go],e?"readwrite":"readonly").objectStore(go)}function Xb(){const t=indexedDB.deleteDatabase(jp);return new ci(t).toPromise()}function Ac(){const t=indexedDB.open(jp,Qb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(go,{keyPath:qp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(go)?e(s):(s.close(),await Xb(),e(await Ac()))})})}async function Mh(t,e,n){const s=Jo(t,!0).put({[qp]:e,value:n});return new ci(s).toPromise()}async function Yb(t,e){const n=Jo(t,!1).get(e),s=await new ci(n).toPromise();return s===void 0?null:s.value}function Uh(t,e){const n=Jo(t,!0).delete(e);return new ci(n).toPromise()}const Jb=800,Zb=3;class Hp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ac(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Zb)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yo._getInstance(Gb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zb(),!this.activeServiceWorker)return;this.sender=new Hb(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ac();return await Mh(e,po,"1"),await Uh(e,po),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Mh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Yb(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Jo(r,!1).getAll();return new ci(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hp.type="LOCAL";const e0=Hp;/**
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
 */function t0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function n0(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Qt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",t0().appendChild(s)})}function s0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new si(3e4,6e4);/**
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
 */function Kp(t,e){return e?cn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Fl extends xl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function r0(t){return Mp(t.auth,new Fl(t),t.bypassAuthState)}function i0(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),Ob(n,new Fl(t),t.bypassAuthState)}async function o0(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),Nb(n,new Fl(t),t.bypassAuthState)}/**
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
 */class zp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return r0;case"linkViaPopup":case"linkViaRedirect":return o0;case"reauthViaPopup":case"reauthViaRedirect":return i0;default:Dt(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const a0=new si(2e3,1e4);async function c0(t,e,n){const s=Zs(t);XE(t,e,Ml);const r=Kp(s,n);return new Zn(s,"signInViaPopup",e,r).executeNotNull()}class Zn extends zp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Zn.currentPopupAction&&Zn.currentPopupAction.cancel(),Zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=Ul();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,a0.get())};e()}}Zn.currentPopupAction=null;/**
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
 */const l0="pendingRedirect",Ji=new Map;class u0 extends zp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ji.get(this.auth._key());if(!e){try{const s=await h0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ji.set(this.auth._key(),e)}return this.bypassAuthState||Ji.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function h0(t,e){const n=p0(e),s=f0(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function d0(t,e){Ji.set(t._key(),e)}function f0(t){return cn(t._redirectPersistence)}function p0(t){return Yi(l0,t.config.apiKey,t.name)}async function g0(t,e,n=!1){const s=Zs(t),r=Kp(s,e),o=await new u0(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const m0=10*60*1e3;class y0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!v0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Wp(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=m0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fh(e))}saveEventToCache(e){this.cachedEventUids.add(Fh(e)),this.lastProcessedEventTime=Date.now()}}function Fh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function v0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wp(t);default:return!1}}/**
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
 */async function _0(t,e={}){return ii(t,"GET","/v1/projects",e)}/**
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
 */const w0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,E0=/^https?/;async function b0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _0(t);for(const n of e)try{if(T0(n))return}catch{}Dt(t,"unauthorized-domain")}function T0(t){const e=Sc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!E0.test(n))return!1;if(w0.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const I0=new si(3e4,6e4);function Bh(){const t=Xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function C0(t){return new Promise((e,n)=>{var s,r,i;function o(){Bh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bh(),n(Qt(t,"network-request-failed"))},timeout:I0.get()})}if(!((r=(s=Xt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Xt().gapi)===null||i===void 0)&&i.load)o();else{const a=s0("iframefcb");return Xt()[a]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},n0(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Zi=null,e})}let Zi=null;function S0(t){return Zi=Zi||C0(t),Zi}/**
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
 */const A0=new si(5e3,15e3),k0="__/auth/iframe",R0="emulator/auth/iframe",D0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},N0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function O0(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nl(e,R0):`https://${t.config.authDomain}/${k0}`,s={apiKey:e.apiKey,appName:t.name,v:Js},r=N0.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ni(s).slice(1)}`}async function P0(t){const e=await S0(t),n=Xt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:O0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:D0,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),a=Xt().setTimeout(()=>{i(o)},A0.get());function c(){Xt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const x0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},L0=500,M0=600,U0="_blank",F0="http://localhost";class $h{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function B0(t,e,n,s=L0,r=M0){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},x0),{width:s.toString(),height:r.toString(),top:i,left:o}),l=ct().toLowerCase();n&&(a=Ap(l)?U0:n),Sp(l)&&(e=e||F0,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,m])=>`${d}${g}=${m},`,"");if(gb(l)&&a!=="_self")return $0(e||"",a),new $h(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new $h(h)}function $0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const V0="__/auth/handler",j0="emulator/auth/handler";function Vh(t,e,n,s,r,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Js,eventId:r};if(e instanceof Ml){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$w(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof ai){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${q0(t)}?${ni(a).slice(1)}`}function q0({config:t}){return t.emulator?Nl(t,j0):`https://${t.authDomain}/${V0}`}/**
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
 */const Ha="webStorageSupport";class H0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$p,this._completeRedirectFn=g0,this._overrideRedirectResult=d0}async _openPopup(e,n,s,r){var i;dn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Vh(e,n,s,Sc(),r);return B0(e,o,Ul())}async _openRedirect(e,n,s,r){return await this._originValidation(e),Kb(Vh(e,n,s,Sc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(dn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await P0(e),s=new y0(e);return n.register("authEvent",r=>(W(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ha,{type:Ha},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ha];o!==void 0&&n(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=b0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Op()||Pl()||Qo()}}const K0=H0;var jh="@firebase/auth",qh="0.21.3";/**
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
 */class z0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function W0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function G0(t){us(new Fn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{W(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),W(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pp(t)},u=new _b(a,c,l);return JE(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),us(new Fn("auth-internal",e=>{const n=Zs(e.getProvider("auth").getImmediate());return(s=>new z0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(jh,qh,W0(t)),Gt(jh,qh,"esm2017")}/**
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
 */const Q0=5*60,X0=hp("authIdTokenMaxAge")||Q0;let Hh=null;const Y0=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>X0)return;const r=n==null?void 0:n.token;Hh!==r&&(Hh=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function J0(t=kl()){const e=Go(t,"auth");if(e.isInitialized())return e.getImmediate();const n=YE(t,{popupRedirectResolver:K0,persistence:[e0,jb,$p]}),s=hp("authTokenSyncURL");if(s){const i=Y0(s);Ub(n,i,()=>i(n.currentUser)),Mb(n,o=>i(o))}const r=lp("auth");return r&&wb(n,`http://${r}`),n}G0("Browser");var Z0="firebase",eT="9.17.1";/**
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
 */Gt(Z0,eT,"app");var tT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,Bl=Bl||{},Q=tT||self;function mo(){}function Zo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function li(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function nT(t){return Object.prototype.hasOwnProperty.call(t,Ka)&&t[Ka]||(t[Ka]=++sT)}var Ka="closure_uid_"+(1e9*Math.random()>>>0),sT=0;function rT(t,e,n){return t.call.apply(t.bind,arguments)}function iT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function it(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?it=rT:it=iT,it.apply(null,arguments)}function Li(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function et(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function jn(){this.s=this.s,this.o=this.o}var oT=0;jn.prototype.s=!1;jn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),oT!=0)&&nT(this)};jn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Gp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function $l(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Kh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Zo(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var aT=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",mo,e),Q.removeEventListener("test",mo,e)}catch{}return t}();function yo(t){return/^[\s\xa0]*$/.test(t)}var zh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function za(t,e){return t<e?-1:t>e?1:0}function ea(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function Kt(t){return ea().indexOf(t)!=-1}function Vl(t){return Vl[" "](t),t}Vl[" "]=mo;function cT(t){var e=hT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var lT=Kt("Opera"),Fs=Kt("Trident")||Kt("MSIE"),Qp=Kt("Edge"),kc=Qp||Fs,Xp=Kt("Gecko")&&!(ea().toLowerCase().indexOf("webkit")!=-1&&!Kt("Edge"))&&!(Kt("Trident")||Kt("MSIE"))&&!Kt("Edge"),uT=ea().toLowerCase().indexOf("webkit")!=-1&&!Kt("Edge");function Yp(){var t=Q.document;return t?t.documentMode:void 0}var vo;e:{var Wa="",Ga=function(){var t=ea();if(Xp)return/rv:([^\);]+)(\)|;)/.exec(t);if(Qp)return/Edge\/([\d\.]+)/.exec(t);if(Fs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(uT)return/WebKit\/(\S+)/.exec(t);if(lT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ga&&(Wa=Ga?Ga[1]:""),Fs){var Qa=Yp();if(Qa!=null&&Qa>parseFloat(Wa)){vo=String(Qa);break e}}vo=Wa}var hT={};function dT(){return cT(function(){let t=0;const e=zh(String(vo)).split("."),n=zh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=za(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||za(r[2].length==0,i[2].length==0)||za(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Rc;if(Q.document&&Fs){var Wh=Yp();Rc=Wh||parseInt(vo,10)||void 0}else Rc=void 0;var fT=Rc;function Vr(t,e){if(ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Xp){e:{try{Vl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:pT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Vr.X.h.call(this)}}et(Vr,ot);var pT={2:"touch",3:"pen",4:"mouse"};Vr.prototype.h=function(){Vr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ui="closure_listenable_"+(1e6*Math.random()|0),gT=0;function mT(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++gT,this.ba=this.ea=!1}function ta(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function jl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Jp(t){const e={};for(const n in t)e[n]=t[n];return e}const Gh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Gh.length;i++)n=Gh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function na(t){this.src=t,this.g={},this.h=0}na.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Nc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new mT(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Dc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Gp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ta(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Nc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var ql="closure_lm_"+(1e6*Math.random()|0),Xa={};function eg(t,e,n,s,r){if(s&&s.once)return ng(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)eg(t,e[i],n,s,r);return null}return n=zl(n),t&&t[ui]?t.N(e,n,li(s)?!!s.capture:!!s,r):tg(t,e,n,!1,s,r)}function tg(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=li(r)?!!r.capture:!!r,a=Kl(t);if(a||(t[ql]=a=new na(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=yT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)aT||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(rg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function yT(){function t(n){return e.call(t.src,t.listener,n)}const e=vT;return t}function ng(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ng(t,e[i],n,s,r);return null}return n=zl(n),t&&t[ui]?t.O(e,n,li(s)?!!s.capture:!!s,r):tg(t,e,n,!0,s,r)}function sg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)sg(t,e[i],n,s,r);else s=li(s)?!!s.capture:!!s,n=zl(n),t&&t[ui]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Nc(i,n,s,r),-1<n&&(ta(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Kl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Nc(e,n,s,r)),(n=-1<t?e[t]:null)&&Hl(n))}function Hl(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ui])Dc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(rg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Kl(e))?(Dc(n,t),n.h==0&&(n.src=null,e[ql]=null)):ta(t)}}}function rg(t){return t in Xa?Xa[t]:Xa[t]="on"+t}function vT(t,e){if(t.ba)t=!0;else{e=new Vr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Hl(t),t=n.call(s,e)}return t}function Kl(t){return t=t[ql],t instanceof na?t:null}var Ya="__closure_events_fn_"+(1e9*Math.random()>>>0);function zl(t){return typeof t=="function"?t:(t[Ya]||(t[Ya]=function(e){return t.handleEvent(e)}),t[Ya])}function Xe(){jn.call(this),this.i=new na(this),this.P=this,this.I=null}et(Xe,jn);Xe.prototype[ui]=!0;Xe.prototype.removeEventListener=function(t,e,n,s){sg(this,t,e,n,s)};function Ze(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new ot(e,t);else if(e instanceof ot)e.target=e.target||t;else{var r=e;e=new ot(s,t),Zp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Mi(o,s,!0,e)&&r}if(o=e.g=t,r=Mi(o,s,!0,e)&&r,r=Mi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Mi(o,s,!1,e)&&r}Xe.prototype.M=function(){if(Xe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ta(n[s]);delete t.g[e],t.h--}}this.I=null};Xe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Xe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Mi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Dc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Wl=Q.JSON.stringify;function _T(){var t=ag;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class wT{constructor(){this.h=this.g=null}add(e,n){const s=ig.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ig=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new ET,t=>t.reset());class ET{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function bT(t){Q.setTimeout(()=>{throw t},0)}function og(t,e){Oc||TT(),Pc||(Oc(),Pc=!0),ag.add(t,e)}var Oc;function TT(){var t=Q.Promise.resolve(void 0);Oc=function(){t.then(IT)}}var Pc=!1,ag=new wT;function IT(){for(var t;t=_T();){try{t.h.call(t.g)}catch(n){bT(n)}var e=ig;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Pc=!1}function sa(t,e){Xe.call(this),this.h=t||1,this.g=e||Q,this.j=it(this.lb,this),this.l=Date.now()}et(sa,Xe);F=sa.prototype;F.ca=!1;F.R=null;F.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ze(this,"tick"),this.ca&&(Gl(this),this.start()))}};F.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gl(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}F.M=function(){sa.X.M.call(this),Gl(this),delete this.g};function Ql(t,e,n){if(typeof t=="function")n&&(t=it(t,n));else if(t&&typeof t.handleEvent=="function")t=it(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function cg(t){t.g=Ql(()=>{t.g=null,t.i&&(t.i=!1,cg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class CT extends jn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:cg(this)}M(){super.M(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jr(t){jn.call(this),this.h=t,this.g={}}et(jr,jn);var Qh=[];function lg(t,e,n,s){Array.isArray(n)||(n&&(Qh[0]=n.toString()),n=Qh);for(var r=0;r<n.length;r++){var i=eg(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function ug(t){jl(t.g,function(e,n){this.g.hasOwnProperty(n)&&Hl(e)},t),t.g={}}jr.prototype.M=function(){jr.X.M.call(this),ug(this)};jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ra(){this.g=!0}ra.prototype.Aa=function(){this.g=!1};function ST(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function AT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Ss(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+RT(t,n)+(s?" "+s:"")})}function kT(t,e){t.info(function(){return"TIMEOUT: "+e})}ra.prototype.info=function(){};function RT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Wl(n)}catch{return e}}var ms={},Xh=null;function ia(){return Xh=Xh||new Xe}ms.Pa="serverreachability";function hg(t){ot.call(this,ms.Pa,t)}et(hg,ot);function qr(t){const e=ia();Ze(e,new hg(e))}ms.STAT_EVENT="statevent";function dg(t,e){ot.call(this,ms.STAT_EVENT,t),this.stat=e}et(dg,ot);function dt(t){const e=ia();Ze(e,new dg(e,t))}ms.Qa="timingevent";function fg(t,e){ot.call(this,ms.Qa,t),this.size=e}et(fg,ot);function hi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var oa={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},pg={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Xl(){}Xl.prototype.h=null;function Yh(t){return t.h||(t.h=t.i())}function gg(){}var di={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Yl(){ot.call(this,"d")}et(Yl,ot);function Jl(){ot.call(this,"c")}et(Jl,ot);var xc;function aa(){}et(aa,Xl);aa.prototype.g=function(){return new XMLHttpRequest};aa.prototype.i=function(){return{}};xc=new aa;function fi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new jr(this),this.O=DT,t=kc?125:void 0,this.T=new sa(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new mg}function mg(){this.i=null,this.g="",this.h=!1}var DT=45e3,Lc={},_o={};F=fi.prototype;F.setTimeout=function(t){this.O=t};function Mc(t,e,n){t.K=1,t.v=la(fn(e)),t.s=n,t.P=!0,yg(t,null)}function yg(t,e){t.F=Date.now(),pi(t),t.A=fn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Cg(n.i,"t",s),t.C=0,n=t.l.H,t.h=new mg,t.g=zg(t.l,n?e:null,!t.s),0<t.N&&(t.L=new CT(it(t.La,t,t.g),t.N)),lg(t.S,t.g,"readystatechange",t.ib),e=t.H?Jp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),qr(),ST(t.j,t.u,t.A,t.m,t.U,t.s)}F.ib=function(t){t=t.target;const e=this.L;e&&ln(t)==3?e.l():this.La(t)};F.La=function(t){try{if(t==this.g)e:{const u=ln(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||kc||this.g&&(this.h.h||this.g.fa()||td(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?qr(3):qr(2)),ca(this);var n=this.g.aa();this.Y=n;t:if(vg(this)){var s=td(this.g);t="";var r=s.length,i=ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){es(this),br(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,AT(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yo(a)){var l=a;break t}}l=null}if(n=l)Ss(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Uc(this,n);else{this.i=!1,this.o=3,dt(12),es(this),br(this);break e}}this.P?(_g(this,u,o),kc&&this.i&&u==3&&(lg(this.S,this.T,"tick",this.hb),this.T.start())):(Ss(this.j,this.m,o,null),Uc(this,o)),u==4&&es(this),this.i&&!this.I&&(u==4?jg(this.l,this):(this.i=!1,pi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,dt(12)):(this.o=0,dt(13)),es(this),br(this)}}}catch{}finally{}};function vg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function _g(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=NT(t,n),r==_o){e==4&&(t.o=4,dt(14),s=!1),Ss(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Lc){t.o=4,dt(15),Ss(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ss(t.j,t.m,r,null),Uc(t,r);vg(t)&&r!=_o&&r!=Lc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,dt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),iu(e),e.K=!0,dt(11))):(Ss(t.j,t.m,n,"[Invalid Chunked Response]"),es(t),br(t))}F.hb=function(){if(this.g){var t=ln(this.g),e=this.g.fa();this.C<e.length&&(ca(this),_g(this,t,e),this.i&&t!=4&&pi(this))}};function NT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?_o:(n=Number(e.substring(n,s)),isNaN(n)?Lc:(s+=1,s+n>e.length?_o:(e=e.substr(s,n),t.C=s+n,e)))}F.cancel=function(){this.I=!0,es(this)};function pi(t){t.V=Date.now()+t.O,wg(t,t.O)}function wg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=hi(it(t.gb,t),e)}function ca(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}F.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(kT(this.j,this.A),this.K!=2&&(qr(),dt(17)),es(this),this.o=2,br(this)):wg(this,this.V-t)};function br(t){t.l.G==0||t.I||jg(t.l,t)}function es(t){ca(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Gl(t.T),ug(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Uc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Fc(n.h,t))){if(!t.J&&Fc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)bo(n),da(n);else break e;ru(n),dt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=hi(it(n.cb,n),6e3));if(1>=kg(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ts(n,11)}else if((t.J||n.g==t)&&bo(n),!yo(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Zl(i,i.h),i.h=null))}if(s.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,Se(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Kg(s,s.H?s.ka:null,s.V),o.J){Rg(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ca(a),pi(a)),s.g=o}else $g(s);0<n.i.length&&fa(n)}else l[0]!="stop"&&l[0]!="close"||ts(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ts(n,7):su(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}qr(4)}catch{}}function OT(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Zo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function PT(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Zo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Eg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Zo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=PT(t),s=OT(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var bg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function is(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof is){this.h=e!==void 0?e:t.h,wo(this,t.j),this.s=t.s,this.g=t.g,Eo(this,t.m),this.l=t.l,e=t.i;var n=new Hr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Jh(this,n),this.o=t.o}else t&&(n=String(t).match(bg))?(this.h=!!e,wo(this,n[1]||"",!0),this.s=gr(n[2]||""),this.g=gr(n[3]||"",!0),Eo(this,n[4]),this.l=gr(n[5]||"",!0),Jh(this,n[6]||"",!0),this.o=gr(n[7]||"")):(this.h=!!e,this.i=new Hr(null,this.h))}is.prototype.toString=function(){var t=[],e=this.j;e&&t.push(mr(e,Zh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(mr(e,Zh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(mr(n,n.charAt(0)=="/"?UT:MT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",mr(n,BT)),t.join("")};function fn(t){return new is(t)}function wo(t,e,n){t.j=n?gr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Eo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Jh(t,e,n){e instanceof Hr?(t.i=e,$T(t.i,t.h)):(n||(e=mr(e,FT)),t.i=new Hr(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function la(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function gr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function mr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,LT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function LT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Zh=/[#\/\?@]/g,MT=/[#\?:]/g,UT=/[#\?]/g,FT=/[#\?@]/g,BT=/#/g;function Hr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function qn(t){t.g||(t.g=new Map,t.h=0,t.i&&xT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=Hr.prototype;F.add=function(t,e){qn(this),this.i=null,t=tr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Tg(t,e){qn(t),e=tr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ig(t,e){return qn(t),e=tr(t,e),t.g.has(e)}F.forEach=function(t,e){qn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};F.oa=function(){qn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};F.W=function(t){qn(this);let e=[];if(typeof t=="string")Ig(this,t)&&(e=e.concat(this.g.get(tr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return qn(this),this.i=null,t=tr(this,t),Ig(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Cg(t,e,n){Tg(t,e),0<n.length&&(t.i=null,t.g.set(tr(t,e),$l(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function tr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function $T(t,e){e&&!t.j&&(qn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Tg(this,s),Cg(this,r,n))},t)),t.j=e}var VT=class{constructor(e,n){this.h=e,this.g=n}};function Sg(t){this.l=t||jT,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ga&&Q.g.Ga()&&Q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var jT=10;function Ag(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function kg(t){return t.h?1:t.g?t.g.size:0}function Fc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Zl(t,e){t.g?t.g.add(e):t.h=e}function Rg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Sg.prototype.cancel=function(){if(this.i=Dg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Dg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return $l(t.i)}function eu(){}eu.prototype.stringify=function(t){return Q.JSON.stringify(t,void 0)};eu.prototype.parse=function(t){return Q.JSON.parse(t,void 0)};function qT(){this.g=new eu}function HT(t,e,n){const s=n||"";try{Eg(t,function(r,i){let o=r;li(r)&&(o=Wl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function KT(t,e){const n=new ra;if(Q.Image){const s=new Image;s.onload=Li(Ui,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Li(Ui,n,s,"TestLoadImage: error",!1,e),s.onabort=Li(Ui,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Li(Ui,n,s,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ui(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function gi(t){this.l=t.ac||null,this.j=t.jb||!1}et(gi,Xl);gi.prototype.g=function(){return new ua(this.l,this.j)};gi.prototype.i=function(t){return function(){return t}}({});function ua(t,e){Xe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=tu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}et(ua,Xe);var tu=0;F=ua.prototype;F.open=function(t,e){if(this.readyState!=tu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Kr(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mi(this)),this.readyState=tu};F.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Kr(this)),this.g&&(this.readyState=3,Kr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ng(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Ng(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}F.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?mi(this):Kr(this),this.readyState==3&&Ng(this)}};F.Va=function(t){this.g&&(this.response=this.responseText=t,mi(this))};F.Ua=function(t){this.g&&(this.response=t,mi(this))};F.ga=function(){this.g&&mi(this)};function mi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Kr(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Kr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ua.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var zT=Q.JSON.parse;function Ne(t){Xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Og,this.K=this.L=!1}et(Ne,Xe);var Og="",WT=/^https?$/i,GT=["POST","PUT"];F=Ne.prototype;F.Ka=function(t){this.L=t};F.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():xc.g(),this.C=this.u?Yh(this.u):Yh(xc),this.g.onreadystatechange=it(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){ed(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=Q.FormData&&t instanceof Q.FormData,!(0<=Gp(GT,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Lg(this),0<this.B&&((this.K=QT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=it(this.qa,this)):this.A=Ql(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){ed(this,i)}};function QT(t){return Fs&&dT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.qa=function(){typeof Bl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ze(this,"timeout"),this.abort(8))};function ed(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Pg(t),ha(t)}function Pg(t){t.D||(t.D=!0,Ze(t,"complete"),Ze(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ze(this,"complete"),Ze(this,"abort"),ha(this))};F.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ha(this,!0)),Ne.X.M.call(this)};F.Ha=function(){this.s||(this.F||this.v||this.l?xg(this):this.fb())};F.fb=function(){xg(this)};function xg(t){if(t.h&&typeof Bl<"u"&&(!t.C[1]||ln(t)!=4||t.aa()!=2)){if(t.v&&ln(t)==4)Ql(t.Ha,0,t);else if(Ze(t,"readystatechange"),ln(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(bg)[1]||null;if(!r&&Q.self&&Q.self.location){var i=Q.self.location.protocol;r=i.substr(0,i.length-1)}s=!WT.test(r?r.toLowerCase():"")}n=s}if(n)Ze(t,"complete"),Ze(t,"success");else{t.m=6;try{var o=2<ln(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Pg(t)}}finally{ha(t)}}}}function ha(t,e){if(t.g){Lg(t);const n=t.g,s=t.C[0]?mo:null;t.g=null,t.C=null,e||Ze(t,"ready");try{n.onreadystatechange=s}catch{}}}function Lg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}function ln(t){return t.g?t.g.readyState:0}F.aa=function(){try{return 2<ln(this)?this.g.status:-1}catch{return-1}};F.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),zT(e)}};function td(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Og:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}F.Ea=function(){return this.m};F.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Mg(t){let e="";return jl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function nu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Mg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function lr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ug(t){this.Ca=0,this.i=[],this.j=new ra,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=lr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=lr("baseRetryDelayMs",5e3,t),this.bb=lr("retryDelaySeedMs",1e4,t),this.$a=lr("forwardChannelMaxRetries",2,t),this.ta=lr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Sg(t&&t.concurrentRequestLimit),this.Fa=new qT,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}F=Ug.prototype;F.ma=8;F.G=1;function su(t){if(Fg(t),t.G==3){var e=t.U++,n=fn(t.F);Se(n,"SID",t.I),Se(n,"RID",e),Se(n,"TYPE","terminate"),yi(t,n),e=new fi(t,t.j,e,void 0),e.K=2,e.v=la(fn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon&&(n=Q.navigator.sendBeacon(e.v.toString(),"")),!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=zg(e.l,null),e.g.da(e.v)),e.F=Date.now(),pi(e)}Hg(t)}function da(t){t.g&&(iu(t),t.g.cancel(),t.g=null)}function Fg(t){da(t),t.u&&(Q.clearTimeout(t.u),t.u=null),bo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function fa(t){Ag(t.h)||t.m||(t.m=!0,og(t.Ja,t),t.C=0)}function XT(t,e){return kg(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=hi(it(t.Ja,t,e),qg(t,t.C)),t.C++,!0)}F.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new fi(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Jp(i),Zp(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Bg(this,r,e),n=fn(this.F),Se(n,"RID",t),Se(n,"CVER",22),this.D&&Se(n,"X-HTTP-Session-Id",this.D),yi(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Mg(i)))+"&"+e:this.o&&nu(n,this.o,i)),Zl(this.h,r),this.Ya&&Se(n,"TYPE","init"),this.O?(Se(n,"$req",e),Se(n,"SID","null"),r.Z=!0,Mc(r,n,null)):Mc(r,n,e),this.G=2}}else this.G==3&&(t?nd(this,t):this.i.length==0||Ag(this.h)||nd(this))};function nd(t,e){var n;e?n=e.m:n=t.U++;const s=fn(t.F);Se(s,"SID",t.I),Se(s,"RID",n),Se(s,"AID",t.T),yi(t,s),t.o&&t.s&&nu(s,t.o,t.s),n=new fi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Bg(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Zl(t.h,n),Mc(n,s,e)}function yi(t,e){t.ia&&jl(t.ia,function(n,s){Se(e,s,n)}),t.l&&Eg({},function(n,s){Se(e,s,n)})}function Bg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?it(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{HT(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function $g(t){t.g||t.u||(t.Z=1,og(t.Ia,t),t.A=0)}function ru(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=hi(it(t.Ia,t),qg(t,t.A)),t.A++,!0)}F.Ia=function(){if(this.u=null,Vg(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=hi(it(this.eb,this),t)}};F.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,dt(10),da(this),Vg(this))};function iu(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function Vg(t){t.g=new fi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=fn(t.sa);Se(e,"RID","rpc"),Se(e,"SID",t.I),Se(e,"CI",t.L?"0":"1"),Se(e,"AID",t.T),Se(e,"TYPE","xmlhttp"),yi(t,e),t.o&&t.s&&nu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=la(fn(e)),n.s=null,n.P=!0,yg(n,t)}F.cb=function(){this.v!=null&&(this.v=null,da(this),ru(this),dt(19))};function bo(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function jg(t,e){var n=null;if(t.g==e){bo(t),iu(t),t.g=null;var s=2}else if(Fc(t.h,e))n=e.D,Rg(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ia(),Ze(s,new fg(s,n)),fa(t)}else $g(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&XT(t,e)||s==2&&ru(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:ts(t,5);break;case 4:ts(t,10);break;case 3:ts(t,6);break;default:ts(t,2)}}}function qg(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ts(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=it(t.kb,t);n||(n=new is("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||wo(n,"https"),la(n)),KT(n.toString(),s)}else dt(2);t.G=0,t.l&&t.l.va(e),Hg(t),Fg(t)}F.kb=function(t){t?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function Hg(t){if(t.G=0,t.la=[],t.l){const e=Dg(t.h);(e.length!=0||t.i.length!=0)&&(Kh(t.la,e),Kh(t.la,t.i),t.h.i.length=0,$l(t.i),t.i.length=0),t.l.ua()}}function Kg(t,e,n){var s=n instanceof is?fn(n):new is(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Eo(s,s.m);else{var r=Q.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new is(null,void 0);s&&wo(i,s),e&&(i.g=e),r&&Eo(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Se(s,n,e),Se(s,"VER",t.ma),yi(t,s),s}function zg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ne(new gi({jb:!0})):new Ne(t.ra),e.Ka(t.H),e}function Wg(){}F=Wg.prototype;F.xa=function(){};F.wa=function(){};F.va=function(){};F.ua=function(){};F.Ra=function(){};function To(){if(Fs&&!(10<=Number(fT)))throw Error("Environmental error: no available transport.")}To.prototype.g=function(t,e){return new Tt(t,e)};function Tt(t,e){Xe.call(this),this.g=new Ug(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!yo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!yo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new nr(this)}et(Tt,Xe);Tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;dt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Kg(t,null,t.V),fa(t)};Tt.prototype.close=function(){su(this.g)};Tt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Wl(t),t=n);e.i.push(new VT(e.ab++,t)),e.G==3&&fa(e)};Tt.prototype.M=function(){this.g.l=null,delete this.j,su(this.g),delete this.g,Tt.X.M.call(this)};function Gg(t){Yl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}et(Gg,Yl);function Qg(){Jl.call(this),this.status=1}et(Qg,Jl);function nr(t){this.g=t}et(nr,Wg);nr.prototype.xa=function(){Ze(this.g,"a")};nr.prototype.wa=function(t){Ze(this.g,new Gg(t))};nr.prototype.va=function(t){Ze(this.g,new Qg)};nr.prototype.ua=function(){Ze(this.g,"b")};To.prototype.createWebChannel=To.prototype.g;Tt.prototype.send=Tt.prototype.u;Tt.prototype.open=Tt.prototype.m;Tt.prototype.close=Tt.prototype.close;oa.NO_ERROR=0;oa.TIMEOUT=8;oa.HTTP_ERROR=6;pg.COMPLETE="complete";gg.EventType=di;di.OPEN="a";di.CLOSE="b";di.ERROR="c";di.MESSAGE="d";Xe.prototype.listen=Xe.prototype.N;Ne.prototype.listenOnce=Ne.prototype.O;Ne.prototype.getLastError=Ne.prototype.Oa;Ne.prototype.getLastErrorCode=Ne.prototype.Ea;Ne.prototype.getStatus=Ne.prototype.aa;Ne.prototype.getResponseJson=Ne.prototype.Sa;Ne.prototype.getResponseText=Ne.prototype.fa;Ne.prototype.send=Ne.prototype.da;Ne.prototype.setWithCredentials=Ne.prototype.Ka;var YT=function(){return new To},JT=function(){return ia()},Ja=oa,ZT=pg,eI=ms,sd={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},tI=gi,Fi=gg,nI=Ne;const rd="@firebase/firestore";/**
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
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
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
 */let sr="9.17.1";/**
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
 */const fs=new Sl("@firebase/firestore");function id(){return fs.logLevel}function B(t,...e){if(fs.logLevel<=fe.DEBUG){const n=e.map(ou);fs.debug(`Firestore (${sr}): ${t}`,...n)}}function pn(t,...e){if(fs.logLevel<=fe.ERROR){const n=e.map(ou);fs.error(`Firestore (${sr}): ${t}`,...n)}}function Bc(t,...e){if(fs.logLevel<=fe.WARN){const n=e.map(ou);fs.warn(`Firestore (${sr}): ${t}`,...n)}}function ou(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${sr}) INTERNAL ASSERTION FAILED: `+t;throw pn(e),new Error(e)}function be(t,e){t||G()}function ee(t,e){return t}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class On{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Xg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class rI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class iI{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new On;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new On,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new On)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string"),new Xg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new tt(e)}}class oI{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(be(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class aI{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new oI(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lI{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.A=n.token,new cI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function uI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Yg{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=uI(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ge(t,e){return t<e?-1:t>e?1:0}function Bs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ze(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new ze(0,0))}static max(){return new J(new ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class zr{constructor(e,n,s){n===void 0?n=0:n>e.length&&G(),s===void 0?s=e.length-n:s>e.length-n&&G(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return zr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends zr{construct(e,n,s){return new Ae(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new z(S.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const hI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends zr{construct(e,n,s){return new rt(e,n,s)}static isValidIdentifier(e){return hI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new z(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new z(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new z(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ae.fromString(e))}static fromName(e){return new K(Ae.fromString(e).popFirst(5))}static empty(){return new K(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ae(e.slice()))}}function dI(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=J.fromTimestamp(s===1e9?new ze(n+1,0):new ze(n,s));return new Bn(r,K.empty(),e)}function fI(t){return new Bn(t.readTime,t.key,-1)}class Bn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Bn(J.min(),K.empty(),-1)}static max(){return new Bn(J.max(),K.empty(),-1)}}function pI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const gI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function vi(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==gI)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(r=>r?A.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new A((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new A((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function _i(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class au{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}au.at=-1;/**
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
 */class yI{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Wr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Wr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function od(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ys(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Jg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function pa(t){return t==null}function Io(t){return t===0&&1/t==-1/0}function vI(t){return typeof t=="number"&&Number.isInteger(t)&&!Io(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new lt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const _I=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $n(t){if(be(!!t),typeof t=="string"){let e=0;const n=_I.exec(t);if(be(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $s(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
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
 */function Zg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function em(t){const e=t.mapValue.fields.__previous_value__;return Zg(e)?em(e):e}function Gr(t){const e=$n(t.mapValue.fields.__local_write_time__.timestampValue);return new ze(e.seconds,e.nanos)}/**
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
 */const Bi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zg(t)?4:wI(t)?9007199254740991:10:G()}function en(t,e){if(t===e)return!0;const n=ps(t);if(n!==ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gr(t).isEqual(Gr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=$n(s.timestampValue),o=$n(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return $s(s.bytesValue).isEqual($s(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Be(s.geoPointValue.latitude)===Be(r.geoPointValue.latitude)&&Be(s.geoPointValue.longitude)===Be(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Be(s.integerValue)===Be(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Be(s.doubleValue),o=Be(r.doubleValue);return i===o?Io(i)===Io(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Bs(t.arrayValue.values||[],e.arrayValue.values||[],en);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(od(i)!==od(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!en(i[a],o[a])))return!1;return!0}(t,e);default:return G()}}function Qr(t,e){return(t.values||[]).find(n=>en(n,e))!==void 0}function Vs(t,e){if(t===e)return 0;const n=ps(t),s=ps(e);if(n!==s)return ge(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Be(r.integerValue||r.doubleValue),a=Be(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ad(t.timestampValue,e.timestampValue);case 4:return ad(Gr(t),Gr(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(r,i){const o=$s(r),a=$s(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ge(o[c],a[c]);if(l!==0)return l}return ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ge(Be(r.latitude),Be(i.latitude));return o!==0?o:ge(Be(r.longitude),Be(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Vs(o[c],a[c]);if(l)return l}return ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Bi.mapValue&&i===Bi.mapValue)return 0;if(r===Bi.mapValue)return 1;if(i===Bi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ge(a[u],l[u]);if(h!==0)return h;const d=Vs(o[a[u]],c[l[u]]);if(d!==0)return d}return ge(a.length,l.length)}(t.mapValue,e.mapValue);default:throw G()}}function ad(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=$n(t),s=$n(e),r=ge(n.seconds,s.seconds);return r!==0?r:ge(n.nanos,s.nanos)}function js(t){return $c(t)}function $c(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=$n(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?$s(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,K.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=$c(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${$c(s.fields[a])}`;return i+"}"}(t.mapValue):G();var e,n}function Vc(t){return!!t&&"integerValue"in t}function cu(t){return!!t&&"arrayValue"in t}function cd(t){return!!t&&"nullValue"in t}function ld(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function eo(t){return!!t&&"mapValue"in t}function Tr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ys(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Tr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Tr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function wI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Co{constructor(e,n){this.position=e,this.inclusive=n}}function ud(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=K.comparator(K.fromName(o.referenceValue),n.key):s=Vs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function hd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!en(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class tm{}class He extends tm{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new bI(e,n,s):n==="array-contains"?new CI(e,s):n==="in"?new SI(e,s):n==="not-in"?new AI(e,s):n==="array-contains-any"?new kI(e,s):new He(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new TI(e,s):new II(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Vs(n,this.value)):n!==null&&ps(this.value)===ps(n)&&this.matchesComparison(Vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class tn extends tm{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new tn(e,n)}matches(e){return nm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function nm(t){return t.op==="and"}function sm(t){return EI(t)&&nm(t)}function EI(t){for(const e of t.filters)if(e instanceof tn)return!1;return!0}function jc(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+js(t.value);if(sm(t))return t.filters.map(e=>jc(e)).join(",");{const e=t.filters.map(n=>jc(n)).join(",");return`${t.op}(${e})`}}function rm(t,e){return t instanceof He?function(n,s){return s instanceof He&&n.op===s.op&&n.field.isEqual(s.field)&&en(n.value,s.value)}(t,e):t instanceof tn?function(n,s){return s instanceof tn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&rm(i,s.filters[o]),!0):!1}(t,e):void G()}function im(t){return t instanceof He?function(e){return`${e.field.canonicalString()} ${e.op} ${js(e.value)}`}(t):t instanceof tn?function(e){return e.op.toString()+" {"+e.getFilters().map(im).join(" ,")+"}"}(t):"Filter"}class bI extends He{constructor(e,n,s){super(e,n,s),this.key=K.fromName(s.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class TI extends He{constructor(e,n){super(e,"in",n),this.keys=om("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class II extends He{constructor(e,n){super(e,"not-in",n),this.keys=om("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function om(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>K.fromName(s.referenceValue))}class CI extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cu(n)&&Qr(n.arrayValue,this.value)}}class SI extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qr(this.value.arrayValue,n)}}class AI extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Qr(this.value.arrayValue,n)}}class kI extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Qr(this.value.arrayValue,s))}}/**
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
 */class Ir{constructor(e,n="asc"){this.field=e,this.dir=n}}function RI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $i(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $i(this.root,e,this.comparator,!1)}getReverseIterator(){return new $i(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $i(this.root,e,this.comparator,!0)}}class $i{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ye.RED,this.left=r??Ye.EMPTY,this.right=i??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ye(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ye.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ye(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class We{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new dd(this.data.getIterator())}getIteratorFrom(e){return new dd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class dd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Et{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new Et([])}unionWith(e){let n=new We(rt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Et(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!eo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Tr(n)}setAll(e){let n=rt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Tr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());eo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];eo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ys(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new mt(Tr(this.value))}}function am(t){const e=[];return ys(t.fields,(n,s)=>{const r=new rt([n]);if(eo(s)){const i=am(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Et(e)}/**
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
 */class nt{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new nt(e,0,J.min(),J.min(),J.min(),mt.empty(),0)}static newFoundDocument(e,n,s,r){return new nt(e,1,n,J.min(),s,r,0)}static newNoDocument(e,n){return new nt(e,2,n,J.min(),J.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,J.min(),J.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class DI{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function fd(t,e=null,n=[],s=[],r=null,i=null,o=null){return new DI(t,e,n,s,r,i,o)}function lu(t){const e=ee(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>jc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),pa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>js(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>js(s)).join(",")),e.ft=n}return e.ft}function uu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!RI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!rm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hd(t.startAt,e.startAt)&&hd(t.endAt,e.endAt)}function qc(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ga{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function NI(t,e,n,s,r,i,o,a){return new ga(t,e,n,s,r,i,o,a)}function cm(t){return new ga(t)}function pd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function OI(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function PI(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function xI(t){return t.collectionGroup!==null}function xs(t){const e=ee(t);if(e.dt===null){e.dt=[];const n=PI(e),s=OI(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Ir(n)),e.dt.push(new Ir(rt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ir(rt.keyField(),i))}}}return e.dt}function gn(t){const e=ee(t);if(!e._t)if(e.limitType==="F")e._t=fd(e.path,e.collectionGroup,xs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of xs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ir(i.field,o))}const s=e.endAt?new Co(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Co(e.startAt.position,e.startAt.inclusive):null;e._t=fd(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Hc(t,e,n){return new ga(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ma(t,e){return uu(gn(t),gn(e))&&t.limitType===e.limitType}function lm(t){return`${lu(gn(t))}|lt:${t.limitType}`}function Kc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>im(s)).join(", ")}]`),pa(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>js(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>js(s)).join(",")),`Target(${n})`}(gn(t))}; limitType=${t.limitType})`}function ya(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):K.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of xs(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=ud(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,xs(n),s)||n.endAt&&!function(r,i,o){const a=ud(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,xs(n),s))}(t,e)}function LI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function um(t){return(e,n)=>{let s=!1;for(const r of xs(t)){const i=MI(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function MI(t,e,n){const s=t.field.isKeyField()?K.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Vs(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return G()}}/**
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
 */function hm(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Io(e)?"-0":e}}function dm(t){return{integerValue:""+t}}function UI(t,e){return vI(e)?dm(e):hm(t,e)}/**
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
 */class va{constructor(){this._=void 0}}function FI(t,e,n){return t instanceof So?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Xr?pm(t,e):t instanceof Yr?gm(t,e):function(s,r){const i=fm(s,r),o=gd(i)+gd(s.gt);return Vc(i)&&Vc(s.gt)?dm(o):hm(s.yt,o)}(t,e)}function BI(t,e,n){return t instanceof Xr?pm(t,e):t instanceof Yr?gm(t,e):n}function fm(t,e){return t instanceof Ao?Vc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class So extends va{}class Xr extends va{constructor(e){super(),this.elements=e}}function pm(t,e){const n=mm(e);for(const s of t.elements)n.some(r=>en(r,s))||n.push(s);return{arrayValue:{values:n}}}class Yr extends va{constructor(e){super(),this.elements=e}}function gm(t,e){let n=mm(e);for(const s of t.elements)n=n.filter(r=>!en(r,s));return{arrayValue:{values:n}}}class Ao extends va{constructor(e,n){super(),this.yt=e,this.gt=n}}function gd(t){return Be(t.integerValue||t.doubleValue)}function mm(t){return cu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function $I(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Xr&&s instanceof Xr||n instanceof Yr&&s instanceof Yr?Bs(n.elements,s.elements,en):n instanceof Ao&&s instanceof Ao?en(n.gt,s.gt):n instanceof So&&s instanceof So}(t.transform,e.transform)}class VI{constructor(e,n){this.version=e,this.transformResults=n}}class Yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function to(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _a{}function ym(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _m(t.key,Yt.none()):new wi(t.key,t.data,Yt.none());{const n=t.data,s=mt.empty();let r=new We(rt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Hn(t.key,s,new Et(r.toArray()),Yt.none())}}function jI(t,e,n){t instanceof wi?function(s,r,i){const o=s.value.clone(),a=yd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Hn?function(s,r,i){if(!to(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=yd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(vm(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Cr(t,e,n,s){return t instanceof wi?function(r,i,o,a){if(!to(r.precondition,i))return o;const c=r.value.clone(),l=vd(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Hn?function(r,i,o,a){if(!to(r.precondition,i))return o;const c=vd(r.fieldTransforms,a,i),l=i.data;return l.setAll(vm(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return to(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function qI(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=fm(s.transform,r||null);i!=null&&(n===null&&(n=mt.empty()),n.set(s.field,i))}return n||null}function md(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Bs(n,s,(r,i)=>$I(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wi extends _a{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Hn extends _a{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function yd(t,e,n){const s=new Map;be(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,BI(o,a,n[r]))}return s}function vd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,FI(i,o,e))}return s}class _m extends _a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class HI extends _a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class KI{constructor(e){this.count=e}}/**
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
 */var Fe,oe;function zI(t){switch(t){default:return G();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function wm(t){if(t===void 0)return pn("GRPC error has no .code"),S.UNKNOWN;switch(t){case Fe.OK:return S.OK;case Fe.CANCELLED:return S.CANCELLED;case Fe.UNKNOWN:return S.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return S.INTERNAL;case Fe.UNAVAILABLE:return S.UNAVAILABLE;case Fe.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Fe.NOT_FOUND:return S.NOT_FOUND;case Fe.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Fe.ABORTED:return S.ABORTED;case Fe.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Fe.DATA_LOSS:return S.DATA_LOSS;default:return G()}}(oe=Fe||(Fe={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class rr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ys(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Jg(this.inner)}size(){return this.innerSize}}/**
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
 */const WI=new Ge(K.comparator);function mn(){return WI}const Em=new Ge(K.comparator);function yr(...t){let e=Em;for(const n of t)e=e.insert(n.key,n);return e}function bm(t){let e=Em;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ns(){return Sr()}function Tm(){return Sr()}function Sr(){return new rr(t=>t.toString(),(t,e)=>t.isEqual(e))}const GI=new Ge(K.comparator),QI=new We(K.comparator);function re(...t){let e=QI;for(const n of t)e=e.add(n);return e}const XI=new We(ge);function Im(){return XI}/**
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
 */class wa{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Ei.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new wa(J.min(),r,Im(),mn(),re())}}class Ei{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ei(s,n,re(),re(),re())}}/**
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
 */class no{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Cm{constructor(e,n){this.targetId=e,this.Et=n}}class Sm{constructor(e,n,s=lt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class _d{constructor(){this.At=0,this.Rt=Ed(),this.bt=lt.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=re(),n=re(),s=re();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:G()}}),new Ei(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Ed()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class YI{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=mn(),this.qt=wd(),this.Ut=new We(ge)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(qc(i))if(s===0){const o=new K(i.path);this.Qt(n,o,nt.newNoDocument(o,J.min()))}else be(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&qc(a.target)){const c=new K(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,nt.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=re();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new wa(e,n,this.Ut,this.Lt,s);return this.Lt=mn(),this.qt=wd(),this.Ut=new We(ge),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new _d,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new We(ge),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new _d),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function wd(){return new Ge(K.comparator)}function Ed(){return new Ge(K.comparator)}/**
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
 */const JI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ZI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),eC=(()=>({and:"AND",or:"OR"}))();class tC{constructor(e,n){this.databaseId=e,this.wt=n}}function ko(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Am(t,e){return t.wt?e.toBase64():e.toUint8Array()}function nC(t,e){return ko(t,e.toTimestamp())}function Jt(t){return be(!!t),J.fromTimestamp(function(e){const n=$n(e);return new ze(n.seconds,n.nanos)}(t))}function hu(t,e){return function(n){return new Ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function km(t){const e=Ae.fromString(t);return be(Om(e)),e}function zc(t,e){return hu(t.databaseId,e.path)}function Za(t,e){const n=km(e);if(n.get(1)!==t.databaseId.projectId)throw new z(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Rm(n))}function Wc(t,e){return hu(t.databaseId,e)}function sC(t){const e=km(t);return e.length===4?Ae.emptyPath():Rm(e)}function Gc(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rm(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function bd(t,e,n){return{name:zc(t,e),fields:n.value.mapValue.fields}}function rC(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.wt?(be(l===void 0||typeof l=="string"),lt.fromBase64String(l||"")):(be(l===void 0||l instanceof Uint8Array),lt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?S.UNKNOWN:wm(c.code);return new z(l,c.message||"")}(o);n=new Sm(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Za(t,s.document.name),i=Jt(s.document.updateTime),o=s.document.createTime?Jt(s.document.createTime):J.min(),a=new mt({mapValue:{fields:s.document.fields}}),c=nt.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new no(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Za(t,s.document),i=s.readTime?Jt(s.readTime):J.min(),o=nt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new no([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Za(t,s.document),i=s.removedTargetIds||[];n=new no([],i,r,null)}else{if(!("filter"in e))return G();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new KI(r),o=s.targetId;n=new Cm(o,i)}}return n}function iC(t,e){let n;if(e instanceof wi)n={update:bd(t,e.key,e.value)};else if(e instanceof _m)n={delete:zc(t,e.key)};else if(e instanceof Hn)n={update:bd(t,e.key,e.data),updateMask:pC(e.fieldMask)};else{if(!(e instanceof HI))return G();n={verify:zc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof So)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Xr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Yr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ao)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw G()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:nC(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:G()}(t,e.precondition)),n}function oC(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Jt(s.updateTime):Jt(r);return i.isEqual(J.min())&&(i=Jt(r)),new VI(i,s.transformResults||[])}(n,e))):[]}function aC(t,e){return{documents:[Wc(t,e.path)]}}function cC(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Wc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Wc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Nm(tn.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ts(u.field),direction:hC(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.wt||pa(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function lC(t){let e=sC(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){be(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Dm(u);return h instanceof tn&&sm(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Ir(Is(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,pa(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Co(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Co(d,h)}(n.endAt)),NI(e,r,o,i,a,"F",c,l)}function uC(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Dm(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Is(e.unaryFilter.field);return He.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Is(e.unaryFilter.field);return He.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Is(e.unaryFilter.field);return He.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Is(e.unaryFilter.field);return He.create(i,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return He.create(Is(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return tn.create(e.compositeFilter.filters.map(n=>Dm(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function hC(t){return JI[t]}function dC(t){return ZI[t]}function fC(t){return eC[t]}function Ts(t){return{fieldPath:t.canonicalString()}}function Is(t){return rt.fromServerFormat(t.fieldPath)}function Nm(t){return t instanceof He?function(e){if(e.op==="=="){if(ld(e.value))return{unaryFilter:{field:Ts(e.field),op:"IS_NAN"}};if(cd(e.value))return{unaryFilter:{field:Ts(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ld(e.value))return{unaryFilter:{field:Ts(e.field),op:"IS_NOT_NAN"}};if(cd(e.value))return{unaryFilter:{field:Ts(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ts(e.field),op:dC(e.op),value:e.value}}}(t):t instanceof tn?function(e){const n=e.getFilters().map(s=>Nm(s));return n.length===1?n[0]:{compositeFilter:{op:fC(e.op),filters:n}}}(t):G()}function pC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Om(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class gC{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&jI(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Cr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Cr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Tm();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=ym(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Bs(this.mutations,e.mutations,(n,s)=>md(n,s))&&Bs(this.baseMutations,e.baseMutations,(n,s)=>md(n,s))}}class du{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){be(e.mutations.length===s.length);let r=GI;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new du(e,n,s,r)}}/**
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
 */class mC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class os{constructor(e,n,s,r,i=J.min(),o=J.min(),a=lt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new os(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new os(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new os(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class yC{constructor(e){this.ie=e}}function vC(t){const e=lC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hc(e,e.limit,"L"):e}/**
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
 */class _C{constructor(){this.Je=new wC}addToCollectionParentIndex(e,n){return this.Je.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Bn.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(Bn.min())}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class wC{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new We(Ae.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new We(Ae.comparator)).toArray()}}/**
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
 */class qs{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new qs(0)}static vn(){return new qs(-1)}}/**
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
 */class EC{constructor(){this.changes=new rr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class bC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class TC{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Cr(s.mutation,r,Et.empty(),ze.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,re()).next(()=>s))}getLocalViewOfDocuments(e,n,s=re()){const r=ns();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=yr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ns();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,re()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=mn();const o=Sr(),a=Sr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Hn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Cr(u.mutation,l,u.mutation.getFieldMask(),ze.now())):o.set(l.key,Et.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new bC(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Sr();let r=new Ge((o,a)=>o-a),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Et.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||re()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Tm();u.forEach(d=>{if(!i.has(d)){const g=ym(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return A.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return K.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):A.resolve(ns());let a=-1,c=i;return o.next(l=>A.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,re())).next(u=>({batchId:a,changes:bm(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(s=>{let r=yr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=yr();return this.indexManager.getCollectionParents(e,r).next(o=>A.forEach(o,a=>{const c=function(l,u){return new ga(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,nt.newInvalidDocument(l)))});let o=yr();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Cr(l.mutation,c,Et.empty(),ze.now()),ya(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class IC{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return A.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Jt(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:vC(s.bundledQuery),readTime:Jt(s.readTime)}}(n)),A.resolve()}}/**
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
 */class CC{constructor(){this.overlays=new Ge(K.comparator),this.es=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ns();return A.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const r=ns(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return A.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ge((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=ns(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ns(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return A.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new mC(n,s));let i=this.es.get(n);i===void 0&&(i=re(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class fu{constructor(){this.ns=new We(Qe.ss),this.rs=new We(Qe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Qe(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Qe(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new K(new Ae([])),s=new Qe(n,e),r=new Qe(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new K(new Ae([])),s=new Qe(n,e),r=new Qe(n,e+1);let i=re();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Qe(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Qe{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return K.comparator(e.key,n.key)||ge(e._s,n._s)}static os(e,n){return ge(e._s,n._s)||K.comparator(e.key,n.key)}}/**
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
 */class SC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new We(Qe.ss)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gC(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Qe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Qe(n,0),r=new Qe(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new We(ge);return n.forEach(r=>{const i=new Qe(r,0),o=new Qe(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),A.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;K.isDocumentKey(i)||(i=i.child(""));const o=new Qe(new K(i),0);let a=new We(ge);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),A.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){be(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return A.forEach(n.mutations,r=>{const i=new Qe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Qe(n,0),r=this.gs.firstAfterOrEqual(s);return A.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class AC{constructor(e){this.Es=e,this.docs=new Ge(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let s=mn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():nt.newInvalidDocument(r))}),A.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=mn();const o=n.path,a=new K(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||pI(fI(u),s)<=0||(r.has(u.key)||ya(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,s,r){G()}As(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new kC(this)}getSize(e){return A.resolve(this.size)}}class kC extends EC{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class RC{constructor(e){this.persistence=e,this.Rs=new rr(n=>lu(n),uu),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.bs=0,this.Ps=new fu,this.targetCount=0,this.vs=qs.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),A.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new qs(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Dn(n),A.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),A.waitFor(i).next(()=>r)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.Ps.containsKey(n))}}/**
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
 */class DC{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new au(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new RC(this),this.indexManager=new _C,this.remoteDocumentCache=function(s){return new AC(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new yC(n),this.Ns=new IC(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new CC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new SC(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){B("MemoryPersistence","Starting transaction:",e);const r=new NC(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return A.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class NC extends mI{constructor(e){super(),this.currentSequenceNumber=e}}class pu{constructor(e){this.persistence=e,this.Fs=new fu,this.$s=null}static Bs(e){return new pu(e)}get Ls(){if(this.$s)return this.$s;throw G()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),A.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Ls,s=>{const r=K.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,J.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return A.or([()=>A.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class gu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=re(),r=re();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new gu(e,n.fromCache,s,r)}}/**
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
 */class OC{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(pd(n))return A.resolve(null);let s=gn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Hc(n,null,"F"),s=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=re(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,Hc(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,s,r){return pd(n)||r.isEqual(J.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(id()<=fe.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Kc(n)),this.Bi(e,o,n,dI(r,-1)))})}Fi(e,n){let s=new We(um(e));return n.forEach((r,i)=>{ya(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return id()<=fe.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Kc(n)),this.Ni.getDocumentsMatchingQuery(e,n,Bn.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class PC{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new Ge(ge),this.Ui=new rr(i=>lu(i),uu),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TC(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function xC(t,e,n,s){return new PC(t,e,n,s)}async function Pm(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=re();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function LC(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=A.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(m=>{const v=c.docVersions.get(g);be(v!==null),m.version.compareTo(v)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=re();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function xm(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function MC(t,e){const n=ee(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(lt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(m,v,I){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,g,u)&&a.push(n.Cs.updateTargetData(i,g))});let c=mn(),l=re();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(UC(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(J.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.qi=r,i))}function UC(t,e,n){let s=re(),r=re();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=mn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function FC(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function BC(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,A.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new os(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function Qc(t,e,n){const s=ee(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!_i(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function Td(t,e,n){const s=ee(t);let r=J.min(),i=re();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ee(a),h=u.Ui.get(l);return h!==void 0?A.resolve(u.qi.get(h)):u.Cs.getTargetData(c,l)}(s,o,gn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:J.min(),n?i:re())).next(a=>($C(s,LI(e),a),{documents:a,Hi:i})))}function $C(t,e,n){let s=t.Ki.get(e)||J.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Id{constructor(){this.activeTargetIds=Im()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VC{constructor(){this.Lr=new Id,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Id,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class jC{Ur(e){}shutdown(){}}/**
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
 */class Cd{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const qC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class HC{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class KC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);B("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(B("RestConnection","Received: ",c),c),c=>{throw Bc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+sr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=qC[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new nI;a.setWithCredentials(!0),a.listenOnce(ZT.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ja.NO_ERROR:const l=a.getResponseJson();B("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Ja.TIMEOUT:B("Connection",'RPC "'+e+'" timed out'),o(new z(S.DEADLINE_EXCEEDED,"Request time out"));break;case Ja.HTTP_ERROR:const u=a.getStatus();if(B("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const g=function(m){const v=m.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(v)>=0?v:S.UNKNOWN}(d.status);o(new z(g,d.message))}else o(new z(S.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new z(S.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{B("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=YT(),o=JT(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new tI({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");B("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new HC({Hr:m=>{h?B("Connection","Not sending because WebChannel is closed:",m):(u||(B("Connection","Opening WebChannel transport."),l.open(),u=!0),B("Connection","WebChannel sending:",m),l.send(m))},Jr:()=>l.close()}),g=(m,v,I)=>{m.listen(v,k=>{try{I(k)}catch(w){setTimeout(()=>{throw w},0)}})};return g(l,Fi.EventType.OPEN,()=>{h||B("Connection","WebChannel transport opened.")}),g(l,Fi.EventType.CLOSE,()=>{h||(h=!0,B("Connection","WebChannel transport closed"),d.io())}),g(l,Fi.EventType.ERROR,m=>{h||(h=!0,Bc("Connection","WebChannel transport errored:",m),d.io(new z(S.UNAVAILABLE,"The operation could not be completed")))}),g(l,Fi.EventType.MESSAGE,m=>{var v;if(!h){const I=m.data[0];be(!!I);const k=I,w=k.error||((v=k[0])===null||v===void 0?void 0:v.error);if(w){B("Connection","WebChannel received error:",w);const b=w.status;let P=function(te){const pe=Fe[te];if(pe!==void 0)return wm(pe)}(b),H=w.message;P===void 0&&(P=S.INTERNAL,H="Unknown error status: "+b+" with message "+w.message),h=!0,d.io(new z(P,H)),l.close()}else B("Connection","WebChannel received:",I),d.ro(I)}}),g(o,eI.STAT_EVENT,m=>{m.stat===sd.PROXY?B("Connection","Detected buffering proxy"):m.stat===sd.NOPROXY&&B("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function ec(){return typeof document<"u"?document:null}/**
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
 */function Ea(t){return new tC(t,!0)}class Lm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&B("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Mm{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Lm(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(pn(n.toString()),pn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new z(S.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zC extends Mm{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=rC(this.yt,e),s=function(r){if(!("targetChange"in r))return J.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?J.min():i.readTime?Jt(i.readTime):J.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Gc(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=qc(a)?{documents:aC(r,a)}:{query:cC(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Am(r,i.resumeToken):i.snapshotVersion.compareTo(J.min())>0&&(o.readTime=ko(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=uC(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Gc(this.yt),n.removeTarget=e,this.Bo(n)}}class WC extends Mm{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=oC(e.writeResults,e.commitTime),s=Jt(e.commitTime);return this.listener.Zo(s,n)}return be(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Gc(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>iC(this.yt,s))};this.Bo(n)}}/**
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
 */class GC extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new z(S.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new z(S.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(S.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class QC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(pn(n),this.ou=!1):B("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class XC{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{vs(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ee(a);c._u.add(4),await bi(c),c.gu.set("Unknown"),c._u.delete(4),await ba(c)}(this))})}),this.gu=new QC(s,r)}}async function ba(t){if(vs(t))for(const e of t.wu)await e(!0)}async function bi(t){for(const e of t.wu)await e(!1)}function Um(t,e){const n=ee(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),vu(n)?yu(n):ir(n).ko()&&mu(n,e))}function Fm(t,e){const n=ee(t),s=ir(n);n.du.delete(e),s.ko()&&Bm(n,e),n.du.size===0&&(s.ko()?s.Fo():vs(n)&&n.gu.set("Unknown"))}function mu(t,e){t.yu.Ot(e.targetId),ir(t).zo(e)}function Bm(t,e){t.yu.Ot(e),ir(t).Ho(e)}function yu(t){t.yu=new YI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),ir(t).start(),t.gu.uu()}function vu(t){return vs(t)&&!ir(t).No()&&t.du.size>0}function vs(t){return ee(t)._u.size===0}function $m(t){t.yu=void 0}async function YC(t){t.du.forEach((e,n)=>{mu(t,e)})}async function JC(t,e){$m(t),vu(t)?(t.gu.hu(e),yu(t)):t.gu.set("Unknown")}async function ZC(t,e,n){if(t.gu.set("Online"),e instanceof Sm&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ro(t,s)}else if(e instanceof no?t.yu.Kt(e):e instanceof Cm?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(J.min()))try{const s=await xm(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(lt.EMPTY_BYTE_STRING,c.snapshotVersion)),Bm(r,a);const l=new os(c.target,a,1,c.sequenceNumber);mu(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){B("RemoteStore","Failed to raise snapshot:",s),await Ro(t,s)}}async function Ro(t,e,n){if(!_i(e))throw e;t._u.add(1),await bi(t),t.gu.set("Offline"),n||(n=()=>xm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await ba(t)})}function Vm(t,e){return e().catch(n=>Ro(t,n,e))}async function Ta(t){const e=ee(t),n=Vn(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;eS(e);)try{const r=await FC(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,tS(e,r)}catch(r){await Ro(e,r)}jm(e)&&qm(e)}function eS(t){return vs(t)&&t.fu.length<10}function tS(t,e){t.fu.push(e);const n=Vn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function jm(t){return vs(t)&&!Vn(t).No()&&t.fu.length>0}function qm(t){Vn(t).start()}async function nS(t){Vn(t).eu()}async function sS(t){const e=Vn(t);for(const n of t.fu)e.Xo(n.mutations)}async function rS(t,e,n){const s=t.fu.shift(),r=du.from(s,e,n);await Vm(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ta(t)}async function iS(t,e){e&&Vn(t).Yo&&await async function(n,s){if(r=s.code,zI(r)&&r!==S.ABORTED){const i=n.fu.shift();Vn(n).Mo(),await Vm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ta(n)}var r}(t,e),jm(t)&&qm(t)}async function Sd(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const s=vs(n);n._u.add(3),await bi(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await ba(n)}async function oS(t,e){const n=ee(t);e?(n._u.delete(2),await ba(n)):e||(n._u.add(2),await bi(n),n.gu.set("Unknown"))}function ir(t){return t.pu||(t.pu=function(e,n,s){const r=ee(e);return r.su(),new zC(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:YC.bind(null,t),Zr:JC.bind(null,t),Wo:ZC.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),vu(t)?yu(t):t.gu.set("Unknown")):(await t.pu.stop(),$m(t))})),t.pu}function Vn(t){return t.Iu||(t.Iu=function(e,n,s){const r=ee(e);return r.su(),new WC(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:nS.bind(null,t),Zr:iS.bind(null,t),tu:sS.bind(null,t),Zo:rS.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Ta(t)):(await t.Iu.stop(),t.fu.length>0&&(B("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class _u{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new On,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new _u(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wu(t,e){if(pn("AsyncQueue",`${e}: ${t}`),_i(t))return new z(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ls{constructor(e){this.comparator=e?(n,s)=>e(n,s)||K.comparator(n.key,s.key):(n,s)=>K.comparator(n.key,s.key),this.keyedMap=yr(),this.sortedSet=new Ge(this.comparator)}static emptySet(e){return new Ls(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ls;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Ad{constructor(){this.Tu=new Ge(K.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):G():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Hs{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Hs(e,n,Ls.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ma(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class aS{constructor(){this.Au=void 0,this.listeners=[]}}class cS{constructor(){this.queries=new rr(e=>lm(e),ma),this.onlineState="Unknown",this.Ru=new Set}}async function lS(t,e){const n=ee(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new aS),r)try{i.Au=await n.onListen(s)}catch(o){const a=wu(o,`Initialization of query '${Kc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Eu(n)}async function uS(t,e){const n=ee(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function hS(t,e){const n=ee(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Eu(n)}function dS(t,e,n){const s=ee(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Eu(t){t.Ru.forEach(e=>{e.next()})}class fS{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Hs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class Hm{constructor(e){this.key=e}}class Km{constructor(e){this.key=e}}class pS{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=re(),this.mutatedKeys=re(),this.Gu=um(e),this.Qu=new Ls(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Ad,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=ya(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let I=!1;d&&g?d.data.isEqual(g.data)?m!==v&&(s.track({type:3,doc:g}),I=!0):this.Hu(d,g)||(s.track({type:2,doc:g}),I=!0,(c&&this.Gu(g,c)>0||l&&this.Gu(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),I=!0):d&&!g&&(s.track({type:1,doc:d}),I=!0,(c||l)&&(a=!0)),I&&(g?(o=o.add(g),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(h,d){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return g(h)-g(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new Hs(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Ad,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=re(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Km(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Hm(s))}),n}tc(e){this.qu=e.Hi,this.Ku=re();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Hs.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class gS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class mS{constructor(e){this.key=e,this.nc=!1}}class yS{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new rr(a=>lm(a),ma),this.rc=new Map,this.oc=new Set,this.uc=new Ge(K.comparator),this.cc=new Map,this.ac=new fu,this.hc={},this.lc=new Map,this.fc=qs.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function vS(t,e){const n=kS(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await BC(n.localStore,gn(e));n.isPrimaryClient&&Um(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await _S(n,e,s,a==="current",o.resumeToken)}return r}async function _S(t,e,n,s,r){t._c=(h,d,g)=>async function(m,v,I,k){let w=v.view.Wu(I);w.$i&&(w=await Td(m.localStore,v.query,!1).then(({documents:H})=>v.view.Wu(H,w)));const b=k&&k.targetChanges.get(v.targetId),P=v.view.applyChanges(w,m.isPrimaryClient,b);return Rd(m,v.targetId,P.Xu),P.snapshot}(t,h,d,g);const i=await Td(t.localStore,e,!0),o=new pS(e,i.Hi),a=o.Wu(i.documents),c=Ei.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Rd(t,n,l.Xu);const u=new gS(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function wS(t,e){const n=ee(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!ma(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Qc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Fm(n.remoteStore,s.targetId),Xc(n,s.targetId)}).catch(vi)):(Xc(n,s.targetId),await Qc(n.localStore,s.targetId,!0))}async function ES(t,e,n){const s=RS(t);try{const r=await function(i,o){const a=ee(i),c=ze.now(),l=o.reduce((d,g)=>d.add(g.key),re());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=mn(),m=re();return a.Gi.getEntries(d,l).next(v=>{g=v,g.forEach((I,k)=>{k.isValidDocument()||(m=m.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(v=>{u=v;const I=[];for(const k of o){const w=qI(k,u.get(k.key).overlayedDocument);w!=null&&I.push(new Hn(k.key,w,am(w.value.mapValue),Yt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,I,o)}).next(v=>{h=v;const I=v.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,v.batchId,I)})}).then(()=>({batchId:h.batchId,changes:bm(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Ge(ge)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ti(s,r.changes),await Ta(s.remoteStore)}catch(r){const i=wu(r,"Failed to persist write");n.reject(i)}}async function zm(t,e){const n=ee(t);try{const s=await MC(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(be(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?be(o.nc):r.removedDocuments.size>0&&(be(o.nc),o.nc=!1))}),await Ti(n,s,e)}catch(s){await vi(s)}}function kd(t,e,n){const s=ee(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=ee(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Eu(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function bS(t,e,n){const s=ee(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Ge(K.comparator);o=o.insert(i,nt.newNoDocument(i,J.min()));const a=re().add(i),c=new wa(J.min(),new Map,new We(ge),o,a);await zm(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),bu(s)}else await Qc(s.localStore,e,!1).then(()=>Xc(s,e,n)).catch(vi)}async function TS(t,e){const n=ee(t),s=e.batch.batchId;try{const r=await LC(n.localStore,e);Gm(n,s,null),Wm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ti(n,r)}catch(r){await vi(r)}}async function IS(t,e,n){const s=ee(t);try{const r=await function(i,o){const a=ee(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(be(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Gm(s,e,n),Wm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ti(s,r)}catch(r){await vi(r)}}function Wm(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Gm(t,e,n){const s=ee(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Xc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Qm(t,s)})}function Qm(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Fm(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),bu(t))}function Rd(t,e,n){for(const s of n)s instanceof Hm?(t.ac.addReference(s.key,e),CS(t,s)):s instanceof Km?(B("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Qm(t,s.key)):G()}function CS(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(B("SyncEngine","New document in limbo: "+n),t.oc.add(s),bu(t))}function bu(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new K(Ae.fromString(e)),s=t.fc.next();t.cc.set(s,new mS(n)),t.uc=t.uc.insert(n,s),Um(t.remoteStore,new os(gn(cm(n.path)),s,2,au.at))}}async function Ti(t,e,n){const s=ee(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=gu.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const l=ee(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(c,h=>A.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>A.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!_i(u))throw u;B("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.qi.get(h),g=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(g);l.qi=l.qi.insert(h,m)}}}(s.localStore,i))}async function SS(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const s=await Pm(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new z(S.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ti(n,s.ji)}}function AS(t,e){const n=ee(t),s=n.cc.get(e);if(s&&s.nc)return re().add(s.key);{let r=re();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function kS(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bS.bind(null,e),e.sc.Wo=hS.bind(null,e.eventManager),e.sc.wc=dS.bind(null,e.eventManager),e}function RS(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=IS.bind(null,e),e}class DS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Ea(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return xC(this.persistence,new OC,e.initialUser,this.yt)}yc(e){return new DC(pu.Bs,this.yt)}gc(e){return new VC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class NS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>kd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=SS.bind(null,this.syncEngine),await oS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new cS}createDatastore(e){const n=Ea(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new KC(r));var r;return function(i,o,a,c){return new GC(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>kd(this.syncEngine,a,0),o=Cd.C()?new Cd:new jC,new XC(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new yS(s,r,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);B("RemoteStore","RemoteStore shutting down."),n._u.add(5),await bi(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Xm(t,e,n){if(!n)throw new z(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function OS(t,e,n,s){if(e===!0&&s===!0)throw new z(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dd(t){if(!K.isDocumentKey(t))throw new z(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Nd(t){if(K.isDocumentKey(t))throw new z(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Tu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Ks(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tu(t);throw new z(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Od=new Map;class Pd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new z(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,OS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ia{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new sI;switch(n.type){case"gapi":const s=n.client;return new aI(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Od.get(e);n&&(B("ComponentProvider","Removing Datastore"),Od.delete(e),n.terminate())}(this),Promise.resolve()}}function PS(t,e,n,s={}){var r;const i=(t=Ks(t,Ia))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Bc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=tt.MOCK_USER;else{o=dp(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new z(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new tt(c)}t._authCredentials=new rI(new Xg(o,a))}}/**
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
 */class kt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kt(this.firestore,e,this._key)}}class Ca{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ca(this.firestore,e,this._query)}}class Pn extends Ca{constructor(e,n,s){super(e,n,cm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kt(this.firestore,null,new K(e))}withConverter(e){return new Pn(this.firestore,e,this._path)}}function Ii(t,e,...n){if(t=Le(t),Xm("collection","path",e),t instanceof Ia){const s=Ae.fromString(e,...n);return Nd(s),new Pn(t,null,s)}{if(!(t instanceof kt||t instanceof Pn))throw new z(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ae.fromString(e,...n));return Nd(s),new Pn(t.firestore,null,s)}}function Yc(t,e,...n){if(t=Le(t),arguments.length===1&&(e=Yg.R()),Xm("doc","path",e),t instanceof Ia){const s=Ae.fromString(e,...n);return Dd(s),new kt(t,null,new K(s))}{if(!(t instanceof kt||t instanceof Pn))throw new z(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ae.fromString(e,...n));return Dd(s),new kt(t.firestore,t instanceof Pn?t.converter:null,new K(s))}}/**
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
 */class xS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):pn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class LS{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=tt.UNAUTHENTICATED,this.clientId=Yg.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{B("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(B("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new On;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=wu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function MS(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Pm(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function US(t,e){t.asyncQueue.verifyOperationInProgress();const n=await FS(t);B("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Sd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Sd(e.remoteStore,i)),t.onlineComponents=e}async function FS(t){return t.offlineComponents||(B("FirestoreClient","Using default OfflineComponentProvider"),await MS(t,new DS)),t.offlineComponents}async function Ym(t){return t.onlineComponents||(B("FirestoreClient","Using default OnlineComponentProvider"),await US(t,new NS)),t.onlineComponents}function BS(t){return Ym(t).then(e=>e.syncEngine)}async function $S(t){const e=await Ym(t),n=e.eventManager;return n.onListen=vS.bind(null,e.syncEngine),n.onUnlisten=wS.bind(null,e.syncEngine),n}function VS(t,e,n={}){const s=new On;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new xS({next:h=>{i.enqueueAndForget(()=>uS(r,u)),h.fromCache&&a.source==="server"?c.reject(new z(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new fS(o,l,{includeMetadataChanges:!0,Nu:!0});return lS(r,u)}(await $S(t),t.asyncQueue,e,n,s)),s.promise}class jS{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Lm(this,"async_queue_retry"),this.Wc=()=>{const n=ec();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=ec();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=ec();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new On;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!_i(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw pn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=_u.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&G()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Sa extends Ia{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new jS,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Zm(this),this._firestoreClient.terminate()}}function qS(t,e){const n=typeof t=="object"?t:kl(),s=typeof t=="string"?t:e||"(default)",r=Go(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=up("firestore");i&&PS(r,...i)}return r}function Jm(t){return t._firestoreClient||Zm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Zm(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new yI(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new LS(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class zs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zs(lt.fromBase64String(e))}catch(n){throw new z(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zs(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Aa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Iu{constructor(e){this._methodName=e}}/**
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
 */class Cu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */const HS=/^__.*__$/;class KS{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Hn(e,this.data,this.fieldMask,n,this.fieldTransforms):new wi(e,this.data,n,this.fieldTransforms)}}class ey{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Hn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ty(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Su{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Su(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Do(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(ty(this.sa)&&HS.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class zS{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||Ea(e)}da(e,n,s,r=!1){return new Su({sa:e,methodName:n,fa:s,path:rt.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function ny(t){const e=t._freezeSettings(),n=Ea(t._databaseId);return new zS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function WS(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);Au("Data must be an object, but it was:",o,s);const a=sy(s,o);let c,l;if(i.merge)c=new Et(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Jc(e,h,n);if(!o.contains(d))throw new z(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);iy(u,d)||u.push(d)}c=new Et(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new KS(new mt(a),c,l)}class Ci extends Iu{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ci}}function GS(t,e,n,s){const r=t.da(1,e,n);Au("Data must be an object, but it was:",r,s);const i=[],o=mt.empty();ys(s,(c,l)=>{const u=ku(e,c,n);l=Le(l);const h=r.ca(u);if(l instanceof Ci)i.push(u);else{const d=ka(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Et(i);return new ey(o,a,r.fieldTransforms)}function QS(t,e,n,s,r,i){const o=t.da(1,e,n),a=[Jc(e,s,n)],c=[r];if(i.length%2!=0)throw new z(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Jc(e,i[d])),c.push(i[d+1]);const l=[],u=mt.empty();for(let d=a.length-1;d>=0;--d)if(!iy(l,a[d])){const g=a[d];let m=c[d];m=Le(m);const v=o.ca(g);if(m instanceof Ci)l.push(g);else{const I=ka(m,v);I!=null&&(l.push(g),u.set(g,I))}}const h=new Et(l);return new ey(u,h,o.fieldTransforms)}function ka(t,e){if(ry(t=Le(t)))return Au("Unsupported field value:",e,t),sy(t,e);if(t instanceof Iu)return function(n,s){if(!ty(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=ka(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Le(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return UI(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ze.fromDate(n);return{timestampValue:ko(s.yt,r)}}if(n instanceof ze){const r=new ze(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ko(s.yt,r)}}if(n instanceof Cu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof zs)return{bytesValue:Am(s.yt,n._byteString)};if(n instanceof kt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:hu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Tu(n)}`)}(t,e)}function sy(t,e){const n={};return Jg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ys(t,(s,r)=>{const i=ka(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function ry(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ze||t instanceof Cu||t instanceof zs||t instanceof kt||t instanceof Iu)}function Au(t,e,n){if(!ry(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Tu(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Jc(t,e,n){if((e=Le(e))instanceof Aa)return e._internalPath;if(typeof e=="string")return ku(t,e);throw Do("Field path arguments must be of type string or ",t,!1,void 0,n)}const XS=new RegExp("[~\\*/\\[\\]]");function ku(t,e,n){if(e.search(XS)>=0)throw Do(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Aa(...e.split("."))._internalPath}catch{throw Do(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Do(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new z(S.INVALID_ARGUMENT,a+t+c)}function iy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class oy{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ay("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class YS extends oy{data(){return super.data()}}function ay(t,e){return typeof e=="string"?ku(t,e):e instanceof Aa?e._internalPath:e._delegate._internalPath}/**
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
 */function JS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ZS{convertValue(e,n="none"){switch(ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($s(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const s={};return ys(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Cu(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=em(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Gr(e));default:return null}}convertTimestamp(e){const n=$n(e);return new ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ae.fromString(e);be(Om(s));const r=new Wr(s.get(1),s.get(3)),i=new K(s.popFirst(5));return r.isEqual(n)||pn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function eA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class Vi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tA extends oy{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new so(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ay("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class so extends tA{data(e={}){return super.data(e)}}class nA{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Vi(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new so(this._firestore,this._userDataWriter,s.key,s,new Vi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new so(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Vi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new so(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Vi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:sA(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class rA extends ZS{constructor(e){super(),this.firestore=e}convertBytes(e){return new zs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new kt(this.firestore,null,n)}}function Ra(t){t=Ks(t,Ca);const e=Ks(t.firestore,Sa),n=Jm(e),s=new rA(e);return JS(t._query),VS(n,t._query).then(r=>new nA(e,s,t,r))}function xd(t,e,n,...s){t=Ks(t,kt);const r=Ks(t.firestore,Sa),i=ny(r);let o;return o=typeof(e=Le(e))=="string"||e instanceof Aa?QS(i,"updateDoc",t._key,e,n,s):GS(i,"updateDoc",t._key,e),cy(r,[o.toMutation(t._key,Yt.exists(!0))])}function iA(t,e){const n=Ks(t.firestore,Sa),s=Yc(t),r=eA(t.converter,e);return cy(n,[WS(ny(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Yt.exists(!1))]).then(()=>s)}function cy(t,e){return function(n,s){const r=new On;return n.asyncQueue.enqueueAndForget(async()=>ES(await BS(n),s,r)),r.promise}(Jm(t),e)}/**
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
 */function oA(){return new Ci("deleteField")}(function(t,e=!0){(function(n){sr=n})(Js),us(new Fn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Sa(new iI(n.getProvider("auth-internal")),new lI(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new z(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Gt(rd,"3.8.3",t),Gt(rd,"3.8.3","esm2017")})();const ly=gp({apiKey:"AIzaSyDZ4MMbVH5GTWWU_QIcnImnBisdtkDEZ4Q",authDomain:"autentificacion-6e56f.firebaseapp.com",projectId:"autentificacion-6e56f",storageBucket:"autentificacion-6e56f.appspot.com",messagingSenderId:"986000935330",appId:"1:986000935330:web:551d625a52738d7e3fcafb"}),xn=J0(ly),as=qS(ly);const or=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Ru=t=>(Bo("data-v-ea8a235b"),t=t(),$o(),t),aA=Ru(()=>L("fieldset",null,"Iniciar Sesión",-1)),cA=Ru(()=>L("fieldset",null,"Cerrar Sesión",-1)),lA={key:0},uA=Ru(()=>L("div",{class:"preload"},null,-1)),hA=[uA],dA={key:1},fA={__name:"cabecera",setup(t){let e=Rt("");Xo(xn,r=>{e.value=!!r});function n(){Fb(xn).then(()=>{console.log("Sesion cerrada")}).catch(r=>{console.log(r)})}let s=Rt(!1);return setTimeout(()=>{s.value=!0},1e3),(r,i)=>{const o=eh("router-link"),a=eh("router-view");return ie(),Ce(qe,null,[L("header",null,[L("nav",null,[ue(o,{to:"/"},{default:ye(()=>[De("Inicio")]),_:1}),ue(o,{to:"/ofimatica"},{default:ye(()=>[De("Ofimática")]),_:1}),ue(o,{to:"/programacion"},{default:ye(()=>[De("Programación")]),_:1}),ue(o,{to:"/sos"},{default:ye(()=>[De("SOs")]),_:1}),$e(e)?(ie(),on(o,{key:0,to:"/admin"},{default:ye(()=>[De("Administración")]),_:1})):tp("",!0),$e(e)?(ie(),on(o,{key:2,to:"/registro",onClick:n},{default:ye(()=>[cA]),_:1})):(ie(),on(o,{key:1,to:"/registro"},{default:ye(()=>[aA]),_:1}))])]),L("main",null,[$e(s)?(ie(),Ce("div",dA,[(ie(),on(Zv,null,{default:ye(()=>[ue(a)]),_:1}))])):(ie(),Ce("div",lA,hA))])],64)}}},pA=or(fA,[["__scopeId","data-v-ea8a235b"]]);const gA={},uy=t=>(Bo("data-v-05635691"),t=t(),$o(),t),mA=uy(()=>L("div",{class:"copy"},[L("p",null,[L("a",{href:"https://github.com/DavNotDab"},"© DavNotDab"),De(" - Todos los derechos reservados")])],-1)),yA=uy(()=>L("div",{class:"privacy"},[L("p",null,"A través de este sitio web no se recaban datos de carácter personal de las personas usuarias sin su conocimiento, ni se ceden a terceros."),L("p",null,"Contacto: +34 657 889 123 | help.cursos@vue.com")],-1)),vA=[mA,yA];function _A(t,e){return ie(),Ce("footer",null,vA)}const wA=or(gA,[["render",_A],["__scopeId","data-v-05635691"]]),EA={__name:"App",setup(t){return(e,n)=>(ie(),Ce(qe,null,[ue(pA),ue(wA)],64))}},bA="/assets/bienvenida2-ed4b03c9.png";const TA={},IA={class:"item"},CA={class:"details"};function SA(t,e){return ie(),Ce("div",IA,[L("i",null,[qt(t.$slots,"icon",{},void 0,!0)]),L("div",CA,[L("h3",null,[qt(t.$slots,"heading",{},void 0,!0)]),qt(t.$slots,"default",{},void 0,!0)])])}const AA=or(TA,[["render",SA],["__scopeId","data-v-f1b0f727"]]),kA={},RA={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},DA=L("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),NA=[DA];function OA(t,e){return ie(),Ce("svg",RA,NA)}const PA=or(kA,[["render",OA]]);const xA=L("h1",null,"Bienvenido",-1),LA=L("div",{class:"bienvenida"},[L("section",{class:"texto"},[L("article",null,[L("h2",null,"Esta es una web de cursos online"),L("p",null,"Te enseñamos cosas relacionadas con la informática para que desarrolles tu carrera tecnológica.")]),L("p",null,"Este es un proyecto de Vue realizado para la asignatura de Desarrollo Web en Entorno Cliente."),L("p",null,"Aquí debemos mostrar que sabemos hacer algo con Vue. Aunque sea muy simple.")]),L("section",{class:"imagen"},[L("img",{src:bA,alt:"Logo-Bienvenida"})])],-1),MA={__name:"Bienvenida",setup(t){return(e,n)=>(ie(),Ce(qe,null,[ue(AA,null,{icon:ye(()=>[ue(PA)]),heading:ye(()=>[xA]),_:1}),LA],64))}};const Si=t=>(Bo("data-v-537735f0"),t=t(),$o(),t),UA=Si(()=>L("h1",null,"Registro / Login",-1)),FA=Si(()=>L("label",{for:"usuario"},"Usuario: ",-1)),BA=Si(()=>L("br",null,null,-1)),$A=Si(()=>L("label",{for:"password"},"Password: ",-1)),VA=Si(()=>L("br",null,null,-1)),jA={__name:"registro",setup(t){let e=Rt(""),n=Rt("");const s=new Ut;function r(){xb(xn,e.value,n.value).then(a=>{const c=a.user;console.log(c),window.location.href="/"}).catch(a=>{const c=a.code,l=a.message;console.log(c,l)})}function i(){Lb(xn,e.value,n.value).then(a=>{const c=a.user;console.log(c),window.location.href="/"}).catch(a=>{const c=a.code,l=a.message;console.log(c,l)})}function o(){c0(xn,s).then(a=>{Ut.credentialFromResult(a).accessToken,a.user}).catch(a=>{a.code,a.message,a.customData.email,Ut.credentialFromError(a)})}return(a,c)=>(ie(),Ce("div",null,[UA,FA,Zu(L("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=l=>Ke(e)?e.value=l:e=l),placeholder:"usuario",id:"usuario",name:"usuario"},null,512),[[vh,$e(e)]]),De(),BA,$A,Zu(L("input",{type:"password","onUpdate:modelValue":c[1]||(c[1]=l=>Ke(n)?n.value=l:n=l),placeholder:"password",id:"password",name:"password"},null,512),[[vh,$e(n)]]),De(),VA,L("button",{onClick:r},"Registrar"),L("button",{onClick:i},"Iniciar Sesión"),L("button",{onClick:o},"Login Google")]))}},qA=or(jA,[["__scopeId","data-v-537735f0"]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Cs=typeof window<"u";function HA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const me=Object.assign;function tc(t,e){const n={};for(const s in e){const r=e[s];n[s]=Bt(r)?r.map(t):t(r)}return n}const Ar=()=>{},Bt=Array.isArray,KA=/\/$/,zA=t=>t.replace(KA,"");function nc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=XA(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function WA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ld(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function GA(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ws(e.matched[s],n.matched[r])&&hy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ws(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function hy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!QA(t[n],e[n]))return!1;return!0}function QA(t,e){return Bt(t)?Md(t,e):Bt(e)?Md(e,t):t===e}function Md(t,e){return Bt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function XA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Jr;(function(t){t.pop="pop",t.push="push"})(Jr||(Jr={}));var kr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(kr||(kr={}));function YA(t){if(!t)if(Cs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),zA(t)}const JA=/^[^#]+#/;function ZA(t,e){return t.replace(JA,"#")+e}function ek(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Da=()=>({left:window.pageXOffset,top:window.pageYOffset});function tk(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=ek(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ud(t,e){return(history.state?history.state.position-e:-1)+t}const Zc=new Map;function nk(t,e){Zc.set(t,e)}function sk(t){const e=Zc.get(t);return Zc.delete(t),e}let rk=()=>location.protocol+"//"+location.host;function dy(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Ld(c,"")}return Ld(n,t)+s+r}function ik(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=dy(t,location),m=n.value,v=e.value;let I=0;if(d){if(n.value=g,e.value=d,o&&o===m){o=null;return}I=v?d.position-v.position:0}else s(g);r.forEach(k=>{k(n.value,m,{delta:I,type:Jr.pop,direction:I?I>0?kr.forward:kr.back:kr.unknown})})};function c(){o=n.value}function l(d){r.push(d);const g=()=>{const m=r.indexOf(d);m>-1&&r.splice(m,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(me({},d.state,{scroll:Da()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Fd(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Da():null}}function ok(t){const{history:e,location:n}=window,s={value:dy(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:rk()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=me({},e.state,Fd(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=me({},r.value,e.state,{forward:c,scroll:Da()});i(u.current,u,!0);const h=me({},Fd(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function ak(t){t=YA(t);const e=ok(t),n=ik(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=me({location:"",base:t,go:s,createHref:ZA.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function ck(t){return typeof t=="string"||t&&typeof t=="object"}function fy(t){return typeof t=="string"||typeof t=="symbol"}const wn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},py=Symbol("");var Bd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Bd||(Bd={}));function Gs(t,e){return me(new Error,{type:t,[py]:!0},e)}function sn(t,e){return t instanceof Error&&py in t&&(e==null||!!(t.type&e))}const $d="[^/]+?",lk={sensitive:!1,strict:!1,start:!0,end:!0},uk=/[.+*?^${}()[\]/\\]/g;function hk(t,e){const n=me({},lk,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(uk,"\\$&"),g+=40;else if(d.type===1){const{value:m,repeatable:v,optional:I,regexp:k}=d;i.push({name:m,repeatable:v,optional:I});const w=k||$d;if(w!==$d){g+=10;try{new RegExp(`(${w})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${m}" (${w}): `+P.message)}}let b=v?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(b=I&&l.length<2?`(?:/${b})`:"/"+b),I&&(b+="?"),r+=b,g+=20,I&&(g+=-8),v&&(g+=-20),w===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",m=i[d-1];h[m.name]=g&&m.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:m,repeatable:v,optional:I}=g,k=m in l?l[m]:"";if(Bt(k)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const w=Bt(k)?k.join("/"):k;if(!w)if(I)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=w}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function dk(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function fk(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=dk(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Vd(s))return 1;if(Vd(r))return-1}return r.length-s.length}function Vd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const pk={type:0,value:""},gk=/[a-zA-Z0-9_]/;function mk(t){if(!t)return[[]];if(t==="/")return[[pk]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:gk.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function yk(t,e,n){const s=hk(mk(t.path),n),r=me(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function vk(t,e){const n=[],s=new Map;e=Hd({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const g=!d,m=_k(u);m.aliasOf=d&&d.record;const v=Hd(e,u),I=[m];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of b)I.push(me({},m,{components:d?d.record.components:m.components,path:P,aliasOf:d?d.record:m}))}let k,w;for(const b of I){const{path:P}=b;if(h&&P[0]!=="/"){const H=h.record.path,te=H[H.length-1]==="/"?"":"/";b.path=h.record.path+(P&&te+P)}if(k=yk(b,h,v),d?d.alias.push(k):(w=w||k,w!==k&&w.alias.push(k),g&&u.name&&!qd(k)&&o(u.name)),m.children){const H=m.children;for(let te=0;te<H.length;te++)i(H[te],k,d&&d.children[te])}d=d||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return w?()=>{o(w)}:Ar}function o(u){if(fy(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&fk(u,n[h])>=0&&(u.record.path!==n[h].record.path||!gy(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!qd(u)&&s.set(u.record.name,u)}function l(u,h){let d,g={},m,v;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Gs(1,{location:u});v=d.record.name,g=me(jd(h.params,d.keys.filter(w=>!w.optional).map(w=>w.name)),u.params&&jd(u.params,d.keys.map(w=>w.name))),m=d.stringify(g)}else if("path"in u)m=u.path,d=n.find(w=>w.re.test(m)),d&&(g=d.parse(m),v=d.record.name);else{if(d=h.name?s.get(h.name):n.find(w=>w.re.test(h.path)),!d)throw Gs(1,{location:u,currentLocation:h});v=d.record.name,g=me({},h.params,u.params),m=d.stringify(g)}const I=[];let k=d;for(;k;)I.unshift(k.record),k=k.parent;return{name:v,path:m,params:g,matched:I,meta:Ek(I)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function jd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function _k(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:wk(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function wk(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function qd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ek(t){return t.reduce((e,n)=>me(e,n.meta),{})}function Hd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function gy(t,e){return e.children.some(n=>n===t||gy(t,n))}const my=/#/g,bk=/&/g,Tk=/\//g,Ik=/=/g,Ck=/\?/g,yy=/\+/g,Sk=/%5B/g,Ak=/%5D/g,vy=/%5E/g,kk=/%60/g,_y=/%7B/g,Rk=/%7C/g,wy=/%7D/g,Dk=/%20/g;function Du(t){return encodeURI(""+t).replace(Rk,"|").replace(Sk,"[").replace(Ak,"]")}function Nk(t){return Du(t).replace(_y,"{").replace(wy,"}").replace(vy,"^")}function el(t){return Du(t).replace(yy,"%2B").replace(Dk,"+").replace(my,"%23").replace(bk,"%26").replace(kk,"`").replace(_y,"{").replace(wy,"}").replace(vy,"^")}function Ok(t){return el(t).replace(Ik,"%3D")}function Pk(t){return Du(t).replace(my,"%23").replace(Ck,"%3F")}function xk(t){return t==null?"":Pk(t).replace(Tk,"%2F")}function No(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Lk(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(yy," "),o=i.indexOf("="),a=No(o<0?i:i.slice(0,o)),c=o<0?null:No(i.slice(o+1));if(a in e){let l=e[a];Bt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Kd(t){let e="";for(let n in t){const s=t[n];if(n=Ok(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Bt(s)?s.map(i=>i&&el(i)):[s&&el(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Mk(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Bt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Uk=Symbol(""),zd=Symbol(""),Nu=Symbol(""),Ey=Symbol(""),tl=Symbol("");function ur(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function bn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Gs(4,{from:n,to:e})):h instanceof Error?a(h):ck(h)?a(Gs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function sc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Fk(a)){const l=(a.__vccOpts||a)[e];l&&r.push(bn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=HA(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&bn(d,n,s,i,o)()}))}}return r}function Fk(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Wd(t){const e=un(Nu),n=un(Ey),s=Ct(()=>e.resolve($e(t.to))),r=Ct(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Ws.bind(null,u));if(d>-1)return d;const g=Gd(c[l-2]);return l>1&&Gd(u)===g&&h[h.length-1].path!==g?h.findIndex(Ws.bind(null,c[l-2])):d}),i=Ct(()=>r.value>-1&&jk(n.params,s.value.params)),o=Ct(()=>r.value>-1&&r.value===n.matched.length-1&&hy(n.params,s.value.params));function a(c={}){return Vk(c)?e[$e(t.replace)?"replace":"push"]($e(t.to)).catch(Ar):Promise.resolve()}return{route:s,href:Ct(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Bk=Uf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wd,setup(t,{slots:e}){const n=Zr(Wd(t)),{options:s}=un(Nu),r=Ct(()=>({[Qd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Qd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ip("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),$k=Bk;function Vk(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function jk(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Bt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Gd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qd=(t,e,n)=>t??e??n,qk=Uf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=un(tl),r=Ct(()=>t.route||s.value),i=un(zd,0),o=Ct(()=>{let l=$e(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ct(()=>r.value.matched[o.value]);zi(zd,Ct(()=>o.value+1)),zi(Uk,a),zi(tl,r);const c=Rt();return Wi(()=>[c.value,a.value,t.name],([l,u,h],[d,g,m])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Ws(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Xd(n.default,{Component:d,route:l});const g=h.props[u],m=g?g===!0?l.params:typeof g=="function"?g(l):g:null,I=ip(d,me({},m,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Xd(n.default,{Component:I,route:l})||I}}});function Xd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Hk=qk;function Kk(t){const e=vk(t.routes,t),n=t.parseQuery||Lk,s=t.stringifyQuery||Kd,r=t.history,i=ur(),o=ur(),a=ur(),c=Uv(wn);let l=wn;Cs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tc.bind(null,E=>""+E),h=tc.bind(null,xk),d=tc.bind(null,No);function g(E,M){let O,$;return fy(E)?(O=e.getRecordMatcher(E),$=M):$=E,e.addRoute($,O)}function m(E){const M=e.getRecordMatcher(E);M&&e.removeRoute(M)}function v(){return e.getRoutes().map(E=>E.record)}function I(E){return!!e.getRecordMatcher(E)}function k(E,M){if(M=me({},M||c.value),typeof E=="string"){const f=nc(n,E,M.path),p=e.resolve({path:f.path},M),y=r.createHref(f.fullPath);return me(f,p,{params:d(p.params),hash:No(f.hash),redirectedFrom:void 0,href:y})}let O;if("path"in E)O=me({},E,{path:nc(n,E.path,M.path).path});else{const f=me({},E.params);for(const p in f)f[p]==null&&delete f[p];O=me({},E,{params:h(E.params)}),M.params=h(M.params)}const $=e.resolve(O,M),ce=E.hash||"";$.params=u(d($.params));const Re=WA(s,me({},E,{hash:Nk(ce),path:$.path})),ne=r.createHref(Re);return me({fullPath:Re,hash:ce,query:s===Kd?Mk(E.query):E.query||{}},$,{redirectedFrom:void 0,href:ne})}function w(E){return typeof E=="string"?nc(n,E,c.value.path):me({},E)}function b(E,M){if(l!==E)return Gs(8,{from:M,to:E})}function P(E){return pe(E)}function H(E){return P(me(w(E),{replace:!0}))}function te(E){const M=E.matched[E.matched.length-1];if(M&&M.redirect){const{redirect:O}=M;let $=typeof O=="function"?O(E):O;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=w($):{path:$},$.params={}),me({query:E.query,hash:E.hash,params:"path"in $?{}:E.params},$)}}function pe(E,M){const O=l=k(E),$=c.value,ce=E.state,Re=E.force,ne=E.replace===!0,f=te(O);if(f)return pe(me(w(f),{state:typeof f=="object"?me({},ce,f.state):ce,force:Re,replace:ne}),M||O);const p=O;p.redirectedFrom=M;let y;return!Re&&GA(s,$,O)&&(y=Gs(16,{to:p,from:$}),Kn($,$,!0,!1)),(y?Promise.resolve(y):he(p,$)).catch(_=>sn(_)?sn(_,2)?_:Nt(_):we(_,p,$)).then(_=>{if(_){if(sn(_,2))return pe(me({replace:ne},w(_.to),{state:typeof _.to=="object"?me({},ce,_.to.state):ce,force:Re}),M||p)}else _=Te(p,$,!0,ne,ce);return ae(p,$,_),_})}function V(E,M){const O=b(E,M);return O?Promise.reject(O):Promise.resolve()}function he(E,M){let O;const[$,ce,Re]=zk(E,M);O=sc($.reverse(),"beforeRouteLeave",E,M);for(const f of $)f.leaveGuards.forEach(p=>{O.push(bn(p,E,M))});const ne=V.bind(null,E,M);return O.push(ne),Es(O).then(()=>{O=[];for(const f of i.list())O.push(bn(f,E,M));return O.push(ne),Es(O)}).then(()=>{O=sc(ce,"beforeRouteUpdate",E,M);for(const f of ce)f.updateGuards.forEach(p=>{O.push(bn(p,E,M))});return O.push(ne),Es(O)}).then(()=>{O=[];for(const f of E.matched)if(f.beforeEnter&&!M.matched.includes(f))if(Bt(f.beforeEnter))for(const p of f.beforeEnter)O.push(bn(p,E,M));else O.push(bn(f.beforeEnter,E,M));return O.push(ne),Es(O)}).then(()=>(E.matched.forEach(f=>f.enterCallbacks={}),O=sc(Re,"beforeRouteEnter",E,M),O.push(ne),Es(O))).then(()=>{O=[];for(const f of o.list())O.push(bn(f,E,M));return O.push(ne),Es(O)}).catch(f=>sn(f,8)?f:Promise.reject(f))}function ae(E,M,O){for(const $ of a.list())$(E,M,O)}function Te(E,M,O,$,ce){const Re=b(E,M);if(Re)return Re;const ne=M===wn,f=Cs?history.state:{};O&&($||ne?r.replace(E.fullPath,me({scroll:ne&&f&&f.scroll},ce)):r.push(E.fullPath,ce)),c.value=E,Kn(E,M,O,ne),Nt()}let je;function ft(){je||(je=r.listen((E,M,O)=>{if(!Ai.listening)return;const $=k(E),ce=te($);if(ce){pe(me(ce,{replace:!0}),$).catch(Ar);return}l=$;const Re=c.value;Cs&&nk(Ud(Re.fullPath,O.delta),Da()),he($,Re).catch(ne=>sn(ne,12)?ne:sn(ne,2)?(pe(ne.to,$).then(f=>{sn(f,20)&&!O.delta&&O.type===Jr.pop&&r.go(-1,!1)}).catch(Ar),Promise.reject()):(O.delta&&r.go(-O.delta,!1),we(ne,$,Re))).then(ne=>{ne=ne||Te($,Re,!1),ne&&(O.delta&&!sn(ne,8)?r.go(-O.delta,!1):O.type===Jr.pop&&sn(ne,20)&&r.go(-1,!1)),ae($,Re,ne)}).catch(Ar)}))}let _t=ur(),ar=ur(),Me;function we(E,M,O){Nt(E);const $=ar.list();return $.length?$.forEach(ce=>ce(E,M,O)):console.error(E),Promise.reject(E)}function ve(){return Me&&c.value!==wn?Promise.resolve():new Promise((E,M)=>{_t.add([E,M])})}function Nt(E){return Me||(Me=!E,ft(),_t.list().forEach(([M,O])=>E?O(E):M()),_t.reset()),E}function Kn(E,M,O,$){const{scrollBehavior:ce}=t;if(!Cs||!ce)return Promise.resolve();const Re=!O&&sk(Ud(E.fullPath,0))||($||!O)&&history.state&&history.state.scroll||null;return Af().then(()=>ce(E,M,Re)).then(ne=>ne&&tk(ne)).catch(ne=>we(ne,E,M))}const Ot=E=>r.go(E);let pt;const _s=new Set,Ai={currentRoute:c,listening:!0,addRoute:g,removeRoute:m,hasRoute:I,getRoutes:v,resolve:k,options:t,push:P,replace:H,go:Ot,back:()=>Ot(-1),forward:()=>Ot(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ar.add,isReady:ve,install(E){const M=this;E.component("RouterLink",$k),E.component("RouterView",Hk),E.config.globalProperties.$router=M,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>$e(c)}),Cs&&!pt&&c.value===wn&&(pt=!0,P(r.location).catch(ce=>{}));const O={};for(const ce in wn)O[ce]=Ct(()=>c.value[ce]);E.provide(Nu,M),E.provide(Ey,Zr(O)),E.provide(tl,c);const $=E.unmount;_s.add(E),E.unmount=function(){_s.delete(E),_s.size<1&&(l=wn,je&&je(),je=null,c.value=wn,pt=!1,Me=!1),$()}}};return Ai}function Es(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function zk(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Ws(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Ws(l,c))||r.push(c))}return[n,s,r]}/**
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
 */const by="firebasestorage.googleapis.com",Ty="storageBucket",Wk=2*60*1e3,Gk=10*60*1e3;/**
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
 */class Pe extends nn{constructor(e,n,s=0){super(rc(e),`Firebase Storage: ${n} (${rc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Pe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return rc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Oe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Oe||(Oe={}));function rc(t){return"storage/"+t}function Ou(){const t="An unknown error occurred, please check the error payload for server response.";return new Pe(Oe.UNKNOWN,t)}function Qk(t){return new Pe(Oe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Xk(t){return new Pe(Oe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Yk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Pe(Oe.UNAUTHENTICATED,t)}function Jk(){return new Pe(Oe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Zk(t){return new Pe(Oe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function eR(){return new Pe(Oe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function tR(){return new Pe(Oe.CANCELED,"User canceled the upload/download.")}function nR(t){return new Pe(Oe.INVALID_URL,"Invalid URL '"+t+"'.")}function sR(t){return new Pe(Oe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function rR(){return new Pe(Oe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ty+"' property when initializing the app?")}function iR(){return new Pe(Oe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function oR(){return new Pe(Oe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function aR(t){return new Pe(Oe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function nl(t){return new Pe(Oe.INVALID_ARGUMENT,t)}function Iy(){return new Pe(Oe.APP_DELETED,"The Firebase app was deleted.")}function cR(t){return new Pe(Oe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Rr(t,e){return new Pe(Oe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function hr(t){throw new Pe(Oe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class bt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=bt.makeFromUrl(e,n)}catch{return new bt(e,"")}if(s.path==="")return s;throw sR(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(P){P.path_=decodeURIComponent(P.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),m={bucket:1,path:3},v=n===by?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",k=new RegExp(`^https?://${v}/${r}/${I}`,"i"),b=[{regex:a,indices:c,postModify:i},{regex:g,indices:m,postModify:l},{regex:k,indices:{bucket:1,path:2},postModify:l}];for(let P=0;P<b.length;P++){const H=b[P],te=H.regex.exec(e);if(te){const pe=te[H.indices.bucket];let V=te[H.indices.path];V||(V=""),s=new bt(pe,V),H.postModify(s);break}}if(s==null)throw nR(e);return s}}class lR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function uR(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...I){l||(l=!0,e.apply(null,I))}function h(I){r=setTimeout(()=>{r=null,t(g,c())},I)}function d(){i&&clearTimeout(i)}function g(I,...k){if(l){d();return}if(I){d(),u.call(null,I,...k);return}if(c()||o){d(),u.call(null,I,...k);return}s<64&&(s*=2);let b;a===1?(a=2,b=0):b=(s+Math.random())*1e3,h(b)}let m=!1;function v(I){m||(m=!0,d(),!l&&(r!==null?(I||(a=2),clearTimeout(r),h(0)):I||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function hR(t){t(!1)}/**
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
 */function dR(t){return t!==void 0}function fR(t){return typeof t=="object"&&!Array.isArray(t)}function Pu(t){return typeof t=="string"||t instanceof String}function Yd(t){return xu()&&t instanceof Blob}function xu(){return typeof Blob<"u"&&!Nw()}function Jd(t,e,n,s){if(s<e)throw nl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw nl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Lu(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Cy(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var cs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(cs||(cs={}));/**
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
 */function pR(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class gR{constructor(e,n,s,r,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,m)=>{this.resolve_=g,this.reject_=m,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new ji(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===cs.NO_ERROR,c=i.getStatus();if(!a||pR(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===cs.ABORT;s(!1,new ji(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new ji(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());dR(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Ou();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Iy():tR();o(c)}else{const c=eR();o(c)}};this.canceled_?n(!1,new ji(!1,null,!0)):this.backoffId_=uR(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&hR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ji{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function mR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function yR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function vR(t,e){e&&(t["X-Firebase-GMPID"]=e)}function _R(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function wR(t,e,n,s,r,i,o=!0){const a=Cy(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return vR(l,e),mR(l,n),yR(l,i),_R(l,s),new gR(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function ER(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function bR(...t){const e=ER();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(xu())return new Blob(t);throw new Pe(Oe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function TR(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function IR(t){if(typeof atob>"u")throw aR("base-64");return atob(t)}/**
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
 */const zt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ic{constructor(e,n){this.data=e,this.contentType=n||null}}function CR(t,e){switch(t){case zt.RAW:return new ic(Sy(e));case zt.BASE64:case zt.BASE64URL:return new ic(Ay(t,e));case zt.DATA_URL:return new ic(AR(e),kR(e))}throw Ou()}function Sy(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function SR(t){let e;try{e=decodeURIComponent(t)}catch{throw Rr(zt.DATA_URL,"Malformed data URL.")}return Sy(e)}function Ay(t,e){switch(t){case zt.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Rr(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case zt.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Rr(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=IR(e)}catch(r){throw r.message.includes("polyfill")?r:Rr(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class ky{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Rr(zt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=RR(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function AR(t){const e=new ky(t);return e.base64?Ay(zt.BASE64,e.rest):SR(e.rest)}function kR(t){return new ky(t).contentType}function RR(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Sn{constructor(e,n){let s=0,r="";Yd(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Yd(this.data_)){const s=this.data_,r=TR(s,e,n);return r===null?null:new Sn(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Sn(s,!0)}}static getBlob(...e){if(xu()){const n=e.map(s=>s instanceof Sn?s.data_:s);return new Sn(bR.apply(null,n))}else{const n=e.map(o=>Pu(o)?CR(zt.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new Sn(r,!0)}}uploadData(){return this.data_}}/**
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
 */function Ry(t){let e;try{e=JSON.parse(t)}catch{return null}return fR(e)?e:null}/**
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
 */function DR(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function NR(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Dy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function OR(t,e){return e}class ut{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||OR}}let qi=null;function PR(t){return!Pu(t)||t.length<2?t:Dy(t)}function Ny(){if(qi)return qi;const t=[];t.push(new ut("bucket")),t.push(new ut("generation")),t.push(new ut("metageneration")),t.push(new ut("name","fullPath",!0));function e(i,o){return PR(o)}const n=new ut("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new ut("size");return r.xform=s,t.push(r),t.push(new ut("timeCreated")),t.push(new ut("updated")),t.push(new ut("md5Hash",null,!0)),t.push(new ut("cacheControl",null,!0)),t.push(new ut("contentDisposition",null,!0)),t.push(new ut("contentEncoding",null,!0)),t.push(new ut("contentLanguage",null,!0)),t.push(new ut("contentType",null,!0)),t.push(new ut("metadata","customMetadata",!0)),qi=t,qi}function xR(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new bt(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function LR(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return xR(s,t),s}function Oy(t,e,n){const s=Ry(e);return s===null?null:LR(t,s,n)}function MR(t,e,n,s){const r=Ry(e);if(r===null||!Pu(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),g=Lu(d,n,s),m=Cy({alt:"media",token:l});return g+m})[0]}function UR(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Py{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function xy(t){if(!t)throw Ou()}function FR(t,e){function n(s,r){const i=Oy(t,r,e);return xy(i!==null),i}return n}function BR(t,e){function n(s,r){const i=Oy(t,r,e);return xy(i!==null),MR(i,r,t.host,t._protocol)}return n}function Ly(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Jk():r=Yk():n.getStatus()===402?r=Xk(t.bucket):n.getStatus()===403?r=Zk(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function $R(t){const e=Ly(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=Qk(t.path)),i.serverResponse=r.serverResponse,i}return n}function VR(t,e,n){const s=e.fullServerUrl(),r=Lu(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Py(r,i,BR(t,n),o);return a.errorHandler=$R(e),a}function jR(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function qR(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=jR(null,e)),s}function HR(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let b="";for(let P=0;P<2;P++)b=b+Math.random().toString().slice(2);return b}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=qR(e,s,r),u=UR(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",g=Sn.getBlob(h,s,d);if(g===null)throw iR();const m={name:l.fullPath},v=Lu(i,t.host,t._protocol),I="POST",k=t.maxUploadRetryTime,w=new Py(v,I,FR(t,n),k);return w.urlParams=m,w.headers=o,w.body=g.uploadData(),w.errorHandler=Ly(e),w}class KR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=cs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=cs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=cs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw hr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw hr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw hr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw hr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw hr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class zR extends KR{initXhr(){this.xhr_.responseType="text"}}function My(){return new zR}/**
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
 */class gs{constructor(e,n){this._service=e,n instanceof bt?this._location=n:this._location=bt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new gs(e,n)}get root(){const e=new bt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Dy(this._location.path)}get storage(){return this._service}get parent(){const e=DR(this._location.path);if(e===null)return null;const n=new bt(this._location.bucket,e);return new gs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw cR(e)}}function WR(t,e,n){t._throwIfRoot("uploadBytes");const s=HR(t.storage,t._location,Ny(),new Sn(e,!0),n);return t.storage.makeRequestWithTokens(s,My).then(r=>({metadata:r,ref:t}))}function GR(t){t._throwIfRoot("getDownloadURL");const e=VR(t.storage,t._location,Ny());return t.storage.makeRequestWithTokens(e,My).then(n=>{if(n===null)throw oR();return n})}function QR(t,e){const n=NR(t._location.path,e),s=new bt(t._location.bucket,n);return new gs(t.storage,s)}/**
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
 */function XR(t){return/^[A-Za-z]+:\/\//.test(t)}function YR(t,e){return new gs(t,e)}function Uy(t,e){if(t instanceof Mu){const n=t;if(n._bucket==null)throw rR();const s=new gs(n,n._bucket);return e!=null?Uy(s,e):s}else return e!==void 0?QR(t,e):t}function JR(t,e){if(e&&XR(e)){if(t instanceof Mu)return YR(t,e);throw nl("To use ref(service, url), the first argument must be a Storage instance.")}else return Uy(t,e)}function Zd(t,e){const n=e==null?void 0:e[Ty];return n==null?null:bt.makeFromBucketSpec(n,t)}function ZR(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:dp(r,t.app.options.projectId))}class Mu{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=by,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Wk,this._maxUploadRetryTime=Gk,this._requests=new Set,r!=null?this._bucket=bt.makeFromBucketSpec(r,this._host):this._bucket=Zd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=bt.makeFromBucketSpec(this._url,e):this._bucket=Zd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Jd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Jd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new gs(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new lR(Iy());{const o=wR(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const ef="@firebase/storage",tf="0.11.1";/**
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
 */const Fy="storage";function e1(t,e,n){return t=Le(t),WR(t,e,n)}function By(t){return t=Le(t),GR(t)}function $y(t,e){return t=Le(t),JR(t,e)}function Vy(t=kl(),e){t=Le(t);const s=Go(t,Fy).getImmediate({identifier:e}),r=up("storage");return r&&t1(s,...r),s}function t1(t,e,n,s={}){ZR(t,e,n,s)}function n1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Mu(n,s,r,e,Js)}function s1(){us(new Fn(Fy,n1,"PUBLIC").setMultipleInstances(!0)),Gt(ef,tf,""),Gt(ef,tf,"esm2017")}s1();const r1=t=>(Bo("data-v-21923bc9"),t=t(),$o(),t),i1={key:0,class:"curso-content"},o1={class:"curso-img"},a1={class:"curso-name"},c1={class:"curso-descripcion"},l1={class:"curso-duracion"},u1={key:0},h1={key:1},d1=r1(()=>L("embed",{id:"myimg",src:"",type:"image/jpg"},null,-1)),f1={__name:"curso",setup(t){const e=Vy();let n=Rt("");Xo(xn,i=>{n.value=!!i});let s=Rt("");function r(){document.querySelectorAll(".curso-content").forEach(i=>{i.addEventListener("click",()=>{s.value=i.querySelector(".curso-name").textContent,console.log(s.value),By($y(e,s.value+".jpg")).then(o=>{document.getElementById("myimg").setAttribute("src",o)}).catch(o=>{console.log(o)})})})}return(i,o)=>(ie(),Ce("fieldset",{onClick:o[1]||(o[1]=a=>r())},[$e(s)===""?(ie(),Ce("section",i1,[qt(i.$slots,"curso",{},void 0,!0),L("div",o1,[qt(i.$slots,"curso-img",{},void 0,!0)]),L("h2",a1,[qt(i.$slots,"curso-name",{},void 0,!0)]),L("p",c1,[qt(i.$slots,"curso-descripcion",{},void 0,!0)]),L("p",l1,[De(" Duración: "),L("b",null,[qt(i.$slots,"curso-duracion",{},void 0,!0)])]),$e(n)?(ie(),Ce("button",u1,"Apúntate")):tp("",!0)])):(ie(),Ce("section",h1,[L("div",{onClick:o[0]||(o[0]=a=>Ke(s)?s.value="":s="")},"CERRAR"),d1]))]))}},Na=or(f1,[["__scopeId","data-v-21923bc9"]]);const p1={class:"body-content"},g1={class:"titulo"},m1={class:"cursos"},Uu={__name:"cursos",setup(t){return(e,n)=>(ie(),Ce("div",p1,[L("h1",g1,[qt(e.$slots,"titulo")]),L("div",m1,[qt(e.$slots,"default",{},()=>[ue(Na)])])]))}},y1={key:0},v1=L("div",{class:"preload"},null,-1),_1=[v1],w1={key:1},E1=["src"],jy={__name:"ofimatica",async setup(t){let e,n,s=Rt(!1),r;return([e,n]=zo(()=>Ra(Ii(as,"cursos"))),e=await e,n(),e).forEach(o=>{r=o.data().ofimatica,s.value=!0}),console.log(r),(o,a)=>$e(s)?(ie(),Ce("div",w1,[ue(Uu,null,{titulo:ye(()=>[De(" Cursos de ofimática ")]),default:ye(()=>[(ie(!0),Ce(qe,null,bl($e(r),c=>(ie(),on(Na,null,{"curso-img":ye(()=>[L("img",{src:"/src/media/"+c.imagen,alt:"curso-icon"},null,8,E1)]),"curso-name":ye(()=>[De(Wt(c.nombre),1)]),"curso-descripcion":ye(()=>[De(Wt(c.descripcion),1)]),"curso-duracion":ye(()=>[De(Wt(c.duracion),1)]),_:2},1024))),256))]),_:1})])):(ie(),Ce("div",y1,_1))}},b1={key:0},T1=L("div",{class:"preload"},null,-1),I1=[T1],C1={key:1},S1=["src"],qy={__name:"programacion",async setup(t){let e,n,s=Rt(!1),r;return([e,n]=zo(()=>Ra(Ii(as,"cursos"))),e=await e,n(),e).forEach(o=>{r=o.data().programacion,s.value=!0}),console.log(r),(o,a)=>$e(s)?(ie(),Ce("div",C1,[ue(Uu,null,{titulo:ye(()=>[De(" Cursos de ofimática ")]),default:ye(()=>[(ie(!0),Ce(qe,null,bl($e(r),c=>(ie(),on(Na,null,{"curso-img":ye(()=>[L("img",{src:"/src/media/"+c.imagen,alt:"curso-icon"},null,8,S1)]),"curso-name":ye(()=>[De(Wt(c.nombre),1)]),"curso-descripcion":ye(()=>[De(Wt(c.descripcion),1)]),"curso-duracion":ye(()=>[De(Wt(c.duracion),1)]),_:2},1024))),256))]),_:1})])):(ie(),Ce("div",b1,I1))}},A1={key:0},k1=L("div",{class:"preload"},null,-1),R1=[k1],D1={key:1},N1=["src"],Hy={__name:"sistemas",async setup(t){let e,n,s=Rt(!1),r;return([e,n]=zo(()=>Ra(Ii(as,"cursos"))),e=await e,n(),e).forEach(o=>{r=o.data().sistemas,s.value=!0}),console.log(r),(o,a)=>$e(s)?(ie(),Ce("div",D1,[ue(Uu,null,{titulo:ye(()=>[De(" Cursos de ofimática ")]),default:ye(()=>[(ie(!0),Ce(qe,null,bl($e(r),c=>(ie(),on(Na,null,{"curso-img":ye(()=>[L("img",{src:"/src/media/"+c.imagen,alt:"curso-icon"},null,8,N1)]),"curso-name":ye(()=>[De(Wt(c.nombre),1)]),"curso-descripcion":ye(()=>[De(Wt(c.descripcion),1)]),"curso-duracion":ye(()=>[De(Wt(c.duracion),1)]),_:2},1024))),256))]),_:1})])):(ie(),Ce("div",A1,R1))}},O1=$_('<h3>Nuevo Curso: </h3><br><label for="categoria">Categoria: </label><select name="categoria" id="categoria"><option value="programacion">Programación</option><option value="SOs">Sistemas Operativos</option><option value="ofimatica">Ofimatica</option></select><br><br><label for="nombre">Nombre: </label><input type="text" name="nombre" id="nombre"><br><br><label for="descripcion">Descripción: </label><input type="text" name="descripcion" id="descripcion"><br><br><label for="horas">Horas: </label><input type="number" min="10" max="999" name="horas" id="horas"><br><br><label for="imagen">Imagen: </label>',19),P1=L("br",null,null,-1),x1=L("br",null,null,-1),L1={__name:"nuevoCurso",setup(t){let e=Rt("");function n(){const o=Vy(),a=$y(o,e.value.files[0].name);e1(a,e.value.files[0]).then(()=>{console.log("Uploaded a blob or file!"),By(a).then(c=>{console.log(c)})})}async function s(){let o=document.getElementById("categoria").value,a=document.getElementById("nombre").value,c=document.getElementById("horas").value,l=document.getElementById("descripcion").value,u=document.getElementById("imagen").value;const h=await iA(Ii(as,"cursos"),{categoria:o,nombre:a,horas:c,descripcion:l,imagen:u});console.log("Document written with ID: ",h.id)}async function r(){const o=Yc(as,"cursos");await xd(o,{categoria:"programacion",nombre:"Curso de programacion",horas:100,descripcion:"Curso de programacion",imagen:"programacion.png"}),console.log("Document updated")}async function i(){const o=Yc(as,"cursos");await xd(o,{ofimatica:oA()})}return(o,a)=>(ie(),Ce("fieldset",null,[O1,L("input",{type:"file",name:"file",id:"imagen",ref_key:"file",ref:e,onChange:a[0]||(a[0]=c=>n())},null,544),P1,x1,L("button",{onClick:a[1]||(a[1]=c=>s())},"Crear Curso"),L("button",{onClick:a[2]||(a[2]=c=>r())},"Actualizar Curso"),L("button",{onClick:a[3]||(a[3]=c=>i())},"Borrar Curso")]))}},M1={class:"header"},U1=L("h1",null,"Area privada",-1),F1={class:"main"},B1={class:"cursos"},$1={class:"cursos-ofimatica"},V1={class:"cursos-programacion"},j1={class:"cursos-sistemas"},q1=L("br",null,null,-1),H1=L("br",null,null,-1),K1={__name:"admin",async setup(t){let e,n,s=Rt("");return Xo(xn,i=>{i&&(s.value=i.email)}),([e,n]=zo(()=>Ra(Ii(as,"cursos"))),e=await e,n(),e).forEach(i=>{console.log(i.data())}),(i,o)=>(ie(),Ce(qe,null,[L("div",M1,[U1,L("h3",null,"Bienvenido "+Wt($e(s)),1)]),L("div",F1,[L("div",B1,[L("section",$1,[ue(jy)]),L("section",V1,[ue(qy)]),L("section",j1,[ue(Hy)])]),q1,H1,ue(L1)])],64))}},z1=[{path:"/",name:"Home",component:MA},{path:"/ofimatica",name:"Ofimatica",component:jy},{path:"/programacion",name:"Programacion",component:qy},{path:"/sos",name:"SOs",component:Hy},{path:"/registro",name:"Registro",component:qA},{path:"/admin",name:"Administración",component:K1,meta:{autenticado:!0}}],Ky=Kk({history:ak(),routes:z1});Xo(xn,t=>{t?t.uid:Ky.push("/")});const zy=ww(EA);zy.use(Ky);zy.mount("#app");
