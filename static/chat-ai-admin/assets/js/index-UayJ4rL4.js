import{Y as y,Z as S,bb as _,Q as d,a0 as w,aj as B,a2 as k,aC as T,ac as N,P as z,V as b,at as A,a4 as D,aO as C,aI as $}from"../../index-BRxqhTX0.js";import{g as I,P as W,t as E,_ as H,a as j}from"./index-BKmN8VmO.js";import{f as M,e as R,b as O,k as f,F}from"./vue-chunks-Chs-lyDX.js";const L=e=>{const{componentCls:o,popoverBg:r,popoverColor:t,width:a,fontWeightStrong:s,popoverPadding:l,boxShadowSecondary:c,colorTextHeading:g,borderRadiusLG:u,zIndexPopup:p,marginXS:m,colorBgElevated:n}=e;return[{[o]:d(d({},w(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:p,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--antd-arrow-background-color":n,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${o}-content`]:{position:"relative"},[`${o}-inner`]:{backgroundColor:r,backgroundClip:"padding-box",borderRadius:u,boxShadow:c,padding:l},[`${o}-title`]:{minWidth:a,marginBottom:m,color:g,fontWeight:s},[`${o}-inner-content`]:{color:t}})},I(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${o}-pure`]:{position:"relative",maxWidth:"none",[`${o}-content`]:{display:"inline-block"}}}]},V=e=>{const{componentCls:o}=e;return{[o]:W.map(r=>{const t=e[`${r}-6`];return{[`&${o}-${r}`]:{"--antd-arrow-background-color":t,[`${o}-inner`]:{backgroundColor:t},[`${o}-arrow`]:{background:"transparent"}}}})}},Z=e=>{const{componentCls:o,lineWidth:r,lineType:t,colorSplit:a,paddingSM:s,controlHeight:l,fontSize:c,lineHeight:g,padding:u}=e,p=l-Math.round(c*g),m=p/2,n=p/2-r,i=u;return{[o]:{[`${o}-inner`]:{padding:0},[`${o}-title`]:{margin:0,padding:`${m}px ${i}px ${n}px`,borderBottom:`${r}px ${t} ${a}`},[`${o}-inner-content`]:{padding:`${s}px ${i}px`}}}},G=y("Popover",e=>{const{colorBgElevated:o,colorText:r,wireframe:t}=e,a=S(e,{popoverBg:o,popoverColor:r,popoverPadding:12});return[L(a),V(a),t&&Z(a),_(a,"zoom-big")]},e=>{let{zIndexPopupBase:o}=e;return{zIndexPopup:o+30,width:177}}),Q=()=>d(d({},j()),{content:C(),title:C()}),X=M({compatConfig:{MODE:3},name:"APopover",inheritAttrs:!1,props:k(Q(),d(d({},E()),{trigger:"hover",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup(e,o){let{expose:r,slots:t,attrs:a}=o;const s=R();T(e.visible===void 0),r({getPopupDomNode:()=>{var n,i;return(i=(n=s.value)===null||n===void 0?void 0:n.getPopupDomNode)===null||i===void 0?void 0:i.call(n)}});const{prefixCls:l,configProvider:c}=N("popover",e),[g,u]=G(l),p=O(()=>c.getPrefixCls()),m=()=>{var n,i;const{title:v=$((n=t.title)===null||n===void 0?void 0:n.call(t)),content:h=$((i=t.content)===null||i===void 0?void 0:i.call(t))}=e,x=!!(Array.isArray(v)?v.length:v),P=!!(Array.isArray(h)?h.length:v);return!x&&!P?null:f(F,null,[x&&f("div",{class:`${l.value}-title`},[v]),f("div",{class:`${l.value}-inner-content`},[h])])};return()=>{const n=z(e.overlayClassName,u.value);return g(f(H,b(b(b({},D(e,["title","content"])),a),{},{prefixCls:l.value,ref:s,overlayClassName:n,transitionName:A(p.value,"zoom-big",e.transitionName),"data-popover-inject":!0}),{title:m,default:t.default}))}}}),U=B(X);export{U as _};
