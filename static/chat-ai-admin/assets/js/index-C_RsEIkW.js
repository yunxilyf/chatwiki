import{ab as O,Y as l,as as lt,ai as B,a1 as H,W as it,X as K,aI as st,Z as pt,an as ft,a0 as ct,aP as W,aJ as ut,a3 as dt,bT as mt,aq as gt,a4 as U,bU as vt,T as bt}from"../../index-BINWO267.js";import{T as yt,l as ht,r as wt,m as Ot}from"./colors-CyWHJ-EZ.js";import{e as M,j as T,s as X,h as Ct,b as R,r as q,w as _t}from"./vue-chunks-DrvJJrR0.js";const h={adjustX:1,adjustY:1},w=[0,0],Q={left:{points:["cr","cl"],overflow:h,offset:[-4,0],targetOffset:w},right:{points:["cl","cr"],overflow:h,offset:[4,0],targetOffset:w},top:{points:["bc","tc"],overflow:h,offset:[0,-4],targetOffset:w},bottom:{points:["tc","bc"],overflow:h,offset:[0,4],targetOffset:w},topLeft:{points:["bl","tl"],overflow:h,offset:[0,-4],targetOffset:w},leftTop:{points:["tr","tl"],overflow:h,offset:[-4,0],targetOffset:w},topRight:{points:["br","tr"],overflow:h,offset:[0,-4],targetOffset:w},rightTop:{points:["tl","tr"],overflow:h,offset:[4,0],targetOffset:w},bottomRight:{points:["tr","br"],overflow:h,offset:[0,4],targetOffset:w},rightBottom:{points:["bl","br"],overflow:h,offset:[4,0],targetOffset:w},bottomLeft:{points:["tl","bl"],overflow:h,offset:[0,4],targetOffset:w},leftBottom:{points:["br","bl"],overflow:h,offset:[-4,0],targetOffset:w}},Pt={prefixCls:String,id:String,overlayInnerStyle:O.any},St=M({compatConfig:{MODE:3},name:"TooltipContent",props:Pt,setup(t,o){let{slots:e}=o;return()=>{var r;return T("div",{class:`${t.prefixCls}-inner`,id:t.id,role:"tooltip",style:t.overlayInnerStyle},[(r=e.overlay)===null||r===void 0?void 0:r.call(e)])}}});var Tt=function(t,o){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&o.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(t);a<r.length;a++)o.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(e[r[a]]=t[r[a]]);return e};function Z(){}const $t=M({compatConfig:{MODE:3},name:"Tooltip",inheritAttrs:!1,props:{trigger:O.any.def(["hover"]),defaultVisible:{type:Boolean,default:void 0},visible:{type:Boolean,default:void 0},placement:O.string.def("right"),transitionName:String,animation:O.any,afterVisibleChange:O.func.def(()=>{}),overlayStyle:{type:Object,default:void 0},overlayClassName:String,prefixCls:O.string.def("rc-tooltip"),mouseEnterDelay:O.number.def(.1),mouseLeaveDelay:O.number.def(.1),getPopupContainer:Function,destroyTooltipOnHide:{type:Boolean,default:!1},align:O.object.def(()=>({})),arrowContent:O.any.def(null),tipId:String,builtinPlacements:O.object,overlayInnerStyle:{type:Object,default:void 0},popupVisible:{type:Boolean,default:void 0},onVisibleChange:Function,onPopupAlign:Function},setup(t,o){let{slots:e,attrs:r,expose:a}=o;const p=X(),s=()=>{const{prefixCls:f,tipId:u,overlayInnerStyle:g}=t;return[T("div",{class:`${f}-arrow`,key:"arrow"},[lt(e,t,"arrowContent")]),T(St,{key:"content",prefixCls:f,id:u,overlayInnerStyle:g},{overlay:e.overlay})]};a({getPopupDomNode:()=>p.value.getPopupDomNode(),triggerDOM:p,forcePopupAlign:()=>{var f;return(f=p.value)===null||f===void 0?void 0:f.forcePopupAlign()}});const m=X(!1),C=X(!1);return Ct(()=>{const{destroyTooltipOnHide:f}=t;if(typeof f=="boolean")m.value=f;else if(f&&typeof f=="object"){const{keepParent:u}=f;m.value=u===!0,C.value=u===!1}}),()=>{const{overlayClassName:f,trigger:u,mouseEnterDelay:g,mouseLeaveDelay:_,overlayStyle:y,prefixCls:j,afterVisibleChange:z,transitionName:k,animation:$,placement:I,align:V,destroyTooltipOnHide:F,defaultVisible:x}=t,E=Tt(t,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","afterVisibleChange","transitionName","animation","placement","align","destroyTooltipOnHide","defaultVisible"]),N=l({},E);t.visible!==void 0&&(N.popupVisible=t.visible);const L=l(l(l({popupClassName:f,prefixCls:j,action:u,builtinPlacements:Q,popupPlacement:I,popupAlign:V,afterPopupVisibleChange:z,popupTransitionName:k,popupAnimation:$,defaultPopupVisible:x,destroyPopupOnHide:m.value,autoDestroy:C.value,mouseLeaveDelay:_,popupStyle:y,mouseEnterDelay:g},N),r),{onPopupVisibleChange:t.onVisibleChange||Z,onPopupAlign:t.onPopupAlign||Z,ref:p,popup:s()});return T(yt,L,{default:e.default})}}}),At=()=>({trigger:[String,Array],open:{type:Boolean,default:void 0},visible:{type:Boolean,default:void 0},placement:String,color:String,transitionName:String,overlayStyle:B(),overlayInnerStyle:B(),overlayClassName:String,openClassName:String,prefixCls:String,mouseEnterDelay:Number,mouseLeaveDelay:Number,getPopupContainer:Function,arrowPointAtCenter:{type:Boolean,default:void 0},autoAdjustOverflow:{type:[Boolean,Object],default:void 0},destroyTooltipOnHide:{type:Boolean,default:void 0},align:B(),builtinPlacements:B(),children:Array,onVisibleChange:Function,"onUpdate:visible":Function,onOpenChange:Function,"onUpdate:open":Function}),xt={adjustX:1,adjustY:1},G={adjustX:0,adjustY:0},Rt=[0,0];function J(t){return typeof t=="boolean"?t?xt:G:l(l({},G),t)}function kt(t){const{arrowWidth:o=4,horizontalArrowShift:e=16,verticalArrowShift:r=8,autoAdjustOverflow:a,arrowPointAtCenter:p}=t,s={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(e+o),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(r+o)]},topRight:{points:["br","tc"],offset:[e+o,-4]},rightTop:{points:["tl","cr"],offset:[4,-(r+o)]},bottomRight:{points:["tr","bc"],offset:[e+o,4]},rightBottom:{points:["bl","cr"],offset:[4,r+o]},bottomLeft:{points:["tl","bc"],offset:[-(e+o),4]},leftBottom:{points:["br","cl"],offset:[-4,r+o]}};return Object.keys(s).forEach(c=>{s[c]=p?l(l({},s[c]),{overflow:J(a),targetOffset:Rt}):l(l({},Q[c]),{overflow:J(a)}),s[c].ignoreShake=!0}),s}function Nt(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];for(let o=0,e=t.length;o<e;o++)if(t[o]!==void 0)return t[o]}function Bt(t,o){const e=ht(o),r=H({[`${t}-${o}`]:o&&e}),a={},p={};return o&&!e&&(a.background=o,p["--antd-arrow-background-color"]=o),{className:r,overlayStyle:a,arrowStyle:p}}function D(t){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return t.map(e=>`${o}${e}`).join(",")}const tt=8;function Dt(t){const o=tt,{sizePopupArrow:e,contentRadius:r,borderRadiusOuter:a,limitVerticalRadius:p}=t,s=e/2-Math.ceil(a*(Math.sqrt(2)-1)),c=(r>12?r+2:12)-s,m=p?o-s:c;return{dropdownArrowOffset:c,dropdownArrowOffsetVertical:m}}function jt(t,o){const{componentCls:e,sizePopupArrow:r,marginXXS:a,borderRadiusXS:p,borderRadiusOuter:s,boxShadowPopoverArrow:c}=t,{colorBg:m,showArrowCls:C,contentRadius:f=t.borderRadiusLG,limitVerticalRadius:u}=o,{dropdownArrowOffsetVertical:g,dropdownArrowOffset:_}=Dt({sizePopupArrow:r,contentRadius:f,borderRadiusOuter:s,limitVerticalRadius:u}),y=r/2+a;return{[e]:{[`${e}-arrow`]:[l(l({position:"absolute",zIndex:1,display:"block"},wt(r,p,s,m,c)),{"&:before":{background:m}})],[[`&-placement-top ${e}-arrow`,`&-placement-topLeft ${e}-arrow`,`&-placement-topRight ${e}-arrow`].join(",")]:{bottom:0,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top ${e}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},[`&-placement-topLeft ${e}-arrow`]:{left:{_skip_check_:!0,value:_}},[`&-placement-topRight ${e}-arrow`]:{right:{_skip_check_:!0,value:_}},[[`&-placement-bottom ${e}-arrow`,`&-placement-bottomLeft ${e}-arrow`,`&-placement-bottomRight ${e}-arrow`].join(",")]:{top:0,transform:"translateY(-100%)"},[`&-placement-bottom ${e}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},[`&-placement-bottomLeft ${e}-arrow`]:{left:{_skip_check_:!0,value:_}},[`&-placement-bottomRight ${e}-arrow`]:{right:{_skip_check_:!0,value:_}},[[`&-placement-left ${e}-arrow`,`&-placement-leftTop ${e}-arrow`,`&-placement-leftBottom ${e}-arrow`].join(",")]:{right:{_skip_check_:!0,value:0},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left ${e}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop ${e}-arrow`]:{top:g},[`&-placement-leftBottom ${e}-arrow`]:{bottom:g},[[`&-placement-right ${e}-arrow`,`&-placement-rightTop ${e}-arrow`,`&-placement-rightBottom ${e}-arrow`].join(",")]:{left:{_skip_check_:!0,value:0},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right ${e}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop ${e}-arrow`]:{top:g},[`&-placement-rightBottom ${e}-arrow`]:{bottom:g},[D(["&-placement-topLeft","&-placement-top","&-placement-topRight"],C)]:{paddingBottom:y},[D(["&-placement-bottomLeft","&-placement-bottom","&-placement-bottomRight"],C)]:{paddingTop:y},[D(["&-placement-leftTop","&-placement-left","&-placement-leftBottom"],C)]:{paddingRight:{_skip_check_:!0,value:y}},[D(["&-placement-rightTop","&-placement-right","&-placement-rightBottom"],C)]:{paddingLeft:{_skip_check_:!0,value:y}}}}}const It=t=>{const{componentCls:o,tooltipMaxWidth:e,tooltipColor:r,tooltipBg:a,tooltipBorderRadius:p,zIndexPopup:s,controlHeight:c,boxShadowSecondary:m,paddingSM:C,paddingXS:f,tooltipRadiusOuter:u}=t;return[{[o]:l(l(l(l({},pt(t)),{position:"absolute",zIndex:s,display:"block","&":[{width:"max-content"},{width:"intrinsic"}],maxWidth:e,visibility:"visible","&-hidden":{display:"none"},"--antd-arrow-background-color":a,[`${o}-inner`]:{minWidth:c,minHeight:c,padding:`${C/2}px ${f}px`,color:r,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:a,borderRadius:p,boxShadow:m},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${o}-inner`]:{borderRadius:Math.min(p,tt)}},[`${o}-content`]:{position:"relative"}}),Ot(t,(g,_)=>{let{darkColor:y}=_;return{[`&${o}-${g}`]:{[`${o}-inner`]:{backgroundColor:y},[`${o}-arrow`]:{"--antd-arrow-background-color":y}}}})),{"&-rtl":{direction:"rtl"}})},jt(K(t,{borderRadiusOuter:u}),{colorBg:"var(--antd-arrow-background-color)",showArrowCls:"",contentRadius:p,limitVerticalRadius:!0}),{[`${o}-pure`]:{position:"relative",maxWidth:"none"}}]},Vt=(t,o)=>it("Tooltip",r=>{if((o==null?void 0:o.value)===!1)return[];const{borderRadius:a,colorTextLightSolid:p,colorBgDefault:s,borderRadiusOuter:c}=r,m=K(r,{tooltipMaxWidth:250,tooltipColor:p,tooltipBorderRadius:a,tooltipBg:s,tooltipRadiusOuter:c>4?4:c});return[It(m),st(r,"zoom-big-fast")]},r=>{let{zIndexPopupBase:a,colorBgSpotlight:p}=r;return{zIndexPopup:a+70,colorBgDefault:p}})(t),Et=(t,o)=>{const e={},r=l({},t);return o.forEach(a=>{t&&a in t&&(e[a]=t[a],delete r[a])}),{picked:e,omitted:r}},Lt=()=>l(l({},At()),{title:O.any}),Ft=()=>({trigger:"hover",align:{},placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0}),Xt=M({compatConfig:{MODE:3},name:"ATooltip",inheritAttrs:!1,props:ft(Lt(),{trigger:"hover",align:{},placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0}),slots:Object,setup(t,o){let{slots:e,emit:r,attrs:a,expose:p}=o;const{prefixCls:s,getPopupContainer:c,direction:m,rootPrefixCls:C}=ct("tooltip",t),f=R(()=>{var n;return(n=t.open)!==null&&n!==void 0?n:t.visible}),u=q(Nt([t.open,t.visible])),g=q();let _;_t(f,n=>{W.cancel(_),_=W(()=>{u.value=!!n})});const y=()=>{var n;const i=(n=t.title)!==null&&n!==void 0?n:e.title;return!i&&i!==0},j=n=>{const i=y();f.value===void 0&&(u.value=i?!1:n),i||(r("update:visible",n),r("visibleChange",n),r("update:open",n),r("openChange",n))};p({getPopupDomNode:()=>g.value.getPopupDomNode(),open:u,forcePopupAlign:()=>{var n;return(n=g.value)===null||n===void 0?void 0:n.forcePopupAlign()}});const k=R(()=>{const{builtinPlacements:n,arrowPointAtCenter:i,autoAdjustOverflow:P}=t;return n||kt({arrowPointAtCenter:i,autoAdjustOverflow:P})}),$=n=>n||n==="",I=n=>{const i=n.type;if(typeof i=="object"&&n.props&&((i.__ANT_BUTTON===!0||i==="button")&&$(n.props.disabled)||i.__ANT_SWITCH===!0&&($(n.props.disabled)||$(n.props.loading))||i.__ANT_RADIO===!0&&$(n.props.disabled))){const{picked:P,omitted:b}=Et(vt(n),["position","left","right","top","bottom","float","display","zIndex"]),S=l(l({display:"inline-block"},P),{cursor:"not-allowed",lineHeight:1,width:n.props&&n.props.block?"100%":void 0}),v=l(l({},b),{pointerEvents:"none"}),d=U(n,{style:v},!0);return T("span",{style:S,class:`${s.value}-disabled-compatible-wrapper`},[d])}return n},V=()=>{var n,i;return(n=t.title)!==null&&n!==void 0?n:(i=e.title)===null||i===void 0?void 0:i.call(e)},F=(n,i)=>{const P=k.value,b=Object.keys(P).find(S=>{var v,d;return P[S].points[0]===((v=i.points)===null||v===void 0?void 0:v[0])&&P[S].points[1]===((d=i.points)===null||d===void 0?void 0:d[1])});if(b){const S=n.getBoundingClientRect(),v={top:"50%",left:"50%"};b.indexOf("top")>=0||b.indexOf("Bottom")>=0?v.top=`${S.height-i.offset[1]}px`:(b.indexOf("Top")>=0||b.indexOf("bottom")>=0)&&(v.top=`${-i.offset[1]}px`),b.indexOf("left")>=0||b.indexOf("Right")>=0?v.left=`${S.width-i.offset[0]}px`:(b.indexOf("right")>=0||b.indexOf("Left")>=0)&&(v.left=`${-i.offset[0]}px`),n.style.transformOrigin=`${v.left} ${v.top}`}},x=R(()=>Bt(s.value,t.color)),E=R(()=>a["data-popover-inject"]),[N,L]=Vt(s,R(()=>!E.value));return()=>{var n,i;const{openClassName:P,overlayClassName:b,overlayStyle:S,overlayInnerStyle:v}=t;let d=(i=ut((n=e.default)===null||n===void 0?void 0:n.call(e)))!==null&&i!==void 0?i:null;d=d.length===1?d[0]:d;let Y=u.value;if(f.value===void 0&&y()&&(Y=!1),!d)return null;const A=I(dt(d)&&!mt(d)?d:T("span",null,[d])),et=H({[P||`${s.value}-open`]:!0,[A.props&&A.props.class]:A.props&&A.props.class}),ot=H(b,{[`${s.value}-rtl`]:m.value==="rtl"},x.value.className,L.value),nt=l(l({},x.value.overlayStyle),v),rt=x.value.arrowStyle,at=l(l(l({},a),t),{prefixCls:s.value,getPopupContainer:c==null?void 0:c.value,builtinPlacements:k.value,visible:Y,ref:g,overlayClassName:ot,overlayStyle:l(l({},rt),S),overlayInnerStyle:nt,onVisibleChange:j,onPopupAlign:F,transitionName:gt(C.value,"zoom-big-fast",t.transitionName)});return N(T($t,at,{default:()=>[u.value?U(A,{class:et}):A],arrowContent:()=>T("span",{class:`${s.value}-arrow-content`},null),overlay:V}))}}}),Yt=bt(Xt);export{Yt as _,At as a,Lt as b,Dt as c,kt as d,Nt as f,jt as g,Ft as t};
