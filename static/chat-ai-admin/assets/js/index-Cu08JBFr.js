import{a1 as h,b as A,e as v,l as e,a6 as y,M as c,N as d,k as m,S as _,F as B,a2 as L,Q as g,u as b,Y as R,Z as k,a0 as C,W as t}from"./vue-chunks-Chs-lyDX.js";import{_ as x,c as o,aF as F}from"../../index-BRxqhTX0.js";import{_ as N,M as V}from"./index-C2U3xRWB.js";import{h as K}from"./index-ClsKim4H.js";import"./dayjs-CkLU8sYs.js";import"./axios-Cm0UX6qg.js";import"./qs-DjYKlG5V.js";import"./crypto-js-BUUKnz8c.js";import"./index-BKmN8VmO.js";import"./collapseMotion-DN2MDQ98.js";import"./slide-Dp7-2q38.js";import"./index-DYUnQ0Fx.js";const T={class:"left-menu-box"},D={__name:"left-menus",emits:["changeMenu"],setup(w,{emit:i}){const l=i,n=h(),p=n.query,s=A(()=>[n.path.split("/")[3]]),f=v([{key:"knowledge-document",id:"knowledge-document",icon:()=>e("span",{},[e(o,{name:"doc-menu-icon",class:"menu-icon"}),e(o,{name:"doc-active-menu-icon",class:"menu-icon-active"})]),label:"知识库文档",title:"知识库文档",path:"/library/details/knowledge-document"},{key:"recall-testing",id:"recall-testing",icon:()=>e("span",{},[e(o,{name:"test-menu-icon",class:"menu-icon"}),e(o,{name:"test-active-menu-icon",class:"menu-icon-active"})]),label:"召回测试",title:"召回测试",path:"/library/details/recall-testing"},{key:"knowledge-config",id:"knowledge-config",icon:()=>e("span",{},[e(o,{name:"knowledge-config-icon",class:"menu-icon"}),e(o,{name:"knowledge-config-active-icon",class:"menu-icon-active"})]),label:"知识库配置",title:"知识库配置",path:"/library/details/knowledge-config"}]),r=({item:u})=>{s.value.includes(u.id)||l("changeMenu",u)};return(u,G)=>{const I=N,M=y("router-link"),q=V;return c(),d("div",T,[m(q,{class:"left-menu",selectedKeys:s.value,onClick:r},{default:_(()=>[(c(!0),d(B,null,L(f.value,a=>(c(),g(M,{class:"default-color",to:{path:a.path,query:b(p)},key:a.key},{default:_(()=>[(c(),g(I,{icon:a.icon,path:a.path,key:a.key},{default:_(()=>[R(k(a.label),1)]),_:2},1032,["icon","path"]))]),_:2},1032,["to"]))),128))]),_:1},8,["selectedKeys"])])}}},E=x(D,[["__scopeId","data-v-87e09c31"]]),S={class:"details-library-page"},Y={class:"between-content-box"},$={class:"layout-left"},Q={class:"library-name-box"},U=["src"],W={class:"name"},Z={class:"left-menu-box"},j={class:"right-content-box"},z={__name:"index",setup(w){const i=h();C();const l=i.query,n=v({library_name:"",avatar:"",library_intro:""});return(()=>{K({id:l.id}).then(s=>{n.value=s.data})})(),(s,f)=>{const r=y("router-view");return c(),d("div",S,[t("div",Y,[t("div",$,[t("div",Q,[t("img",{class:"avatar",src:n.value.avatar||b(F),alt:""},null,8,U),t("div",W,k(n.value.library_name),1)]),t("div",Z,[m(E)])]),t("div",j,[m(r)])])])}}},ie=x(z,[["__scopeId","data-v-2c92b6f6"]]);export{ie as default};
