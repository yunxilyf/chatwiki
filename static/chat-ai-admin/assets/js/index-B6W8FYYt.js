import{A as C,_ as F,d as x,b as L,C as V,e as h,F as z,G as D,H as I}from"../../index-CKV2YGM_.js";import{_ as P}from"./index-xMq1oqUK.js";import{j as _,r as c,L as v,M as w,u as g,a8 as j,V as o,a2 as B,Y as A,a3 as N,a4 as q}from"./vue-chunks-BakLQ6XW.js";import"./dayjs--xR4C_bb.js";import"./axios-Cm0UX6qg.js";import"./qs-nPXSgJGS.js";import"./crypto-js-KGFlroD9.js";import"./FormItemContext-DR8sO-Ed.js";var E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M523.8 191.4v288.9h382V128.1zm0 642.2l382 62.2v-352h-382zM120.1 480.2H443V201.9l-322.9 53.5zm0 290.4L443 823.2V543.8H120.1z"}}]},name:"windows",theme:"filled"};const H=E;function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable}))),i.forEach(function(s){M(e,s,n[s])})}return e}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(t,n){var i=b({},t,n.attrs);return _(C,b({},i,{icon:H}),null)};p.displayName="WindowsFilled";p.inheritAttrs=!1;const T=p,R="/assets/img/client-download-pic-D_c9zEa_.png",r=e=>(N("data-v-ab1de799"),e=e(),q(),e),$={class:"client-download-page"},G={key:0,class:"login-required-switch"},U=r(()=>o("span",null,"需要登录：",-1)),Y=r(()=>o("h3",{class:"page-title"},"客户端下载",-1)),J={class:"page-body"},Q={class:"app-info"},X=r(()=>o("div",{class:"app-name"},"ChatWiki电脑客户端",-1)),Z={class:"banner"},K=r(()=>o("img",{src:R,alt:""},null,-1)),ee={__name:"index",setup(e){const t=x();let{role_type:n}=t;const{t:i}=L(),s=c(!1),S=()=>{V({client_side_login_switch:s.value?1:0}).then(()=>{h.success(i("common.saveSuccess"))})},y=c(""),d=c("Windows下载"),l=c(!1);let u=null;const m=()=>I({domain:""}).then(a=>(a.data.file_url?(l.value=!1,d.value="Windows下载",y.value=a.data.file_url,clearTimeout(u),u=null):(d.value="打包中...",l.value=!0,u=setTimeout(()=>{m()},5e3)),a)),O=()=>{l.value||m().then(a=>{a.data.file_url?z("",a.data.file_url):h.error("下载文件还没有准备好")})};return(()=>{D().then(a=>{s.value=a.data.client_side_login_switch==1})})(),(a,f)=>{const W=P;return v(),w("div",$,[g(n)!="3"?(v(),w("div",G,[U,_(W,{checked:s.value,"onUpdate:checked":f[0]||(f[0]=k=>s.value=k),onChange:S},null,8,["checked"])])):j("",!0),Y,o("div",J,[o("div",Q,[X,o("div",Z,[K,o("div",{class:B(["download-btn",{disabled:l.value}]),onClick:O},[_(g(T),{class:"windows-icon"}),o("span",null,A(d.value),1)],2)])])])])}}},de=F(ee,[["__scopeId","data-v-ab1de799"]]);export{de as default};
