import{bj as Pe,A as Mt,Q as p,ab as ye,a3 as it,V as E,X as De,S as he,W as Ae,O as wt,a8 as at,N as ke,al as Ot,P as Ie,bk as Ne,av as rt,aX as Kt,$ as Pt,Y as kt,Z as je,b8 as Ve,bb as _t,b9 as We,a0 as Et,bl as Tt,ac as Bt}from"../../index-BRxqhTX0.js";import{k as f,d as ae,p as de,b as v,aa as Ge,f as Z,ag as Xe,h as st,s as H,o as Se,w as X,e as L,q as Dt,G as At,H as Rt,F as Te,x as zt,j as _e,u as be,A as Ht}from"./vue-chunks-Chs-lyDX.js";import{s as ut,S as Ft,d as Lt,_ as Nt,T as jt}from"./index-BKmN8VmO.js";import{a as Vt,b as Wt,g as Gt,c as Xt}from"./collapseMotion-DN2MDQ98.js";import{O as fe,i as Ye}from"./slide-Dp7-2q38.js";function Yt(){}var qt=1/0,Ut=Pe&&1/ut(new Pe([,-0]))[1]==qt?function(t){return new Pe(t)}:Yt,Zt=200;function Qt(t,n,e){var o=-1,l=Vt,u=t.length,d=!0,a=[],r=a;if(e)d=!1,l=Wt;else if(u>=Zt){var m=n?null:Ut(t);if(m)return ut(m);d=!1,l=Lt,r=new Ft}else r=n?[]:a;e:for(;++o<u;){var c=t[o],i=n?n(c):c;if(c=e||c!==0?c:0,d&&i===i){for(var $=r.length;$--;)if(r[$]===i)continue e;n&&r.push(i),a.push(c)}else l(r,i,e)||(r!==a&&r.push(i),a.push(c))}return a}function Ee(t){return t&&t.length?Qt(t):[]}var Jt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};const en=Jt;function qe(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?Object(arguments[n]):{},o=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),o.forEach(function(l){tn(t,l,e[l])})}return t}function tn(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var Re=function(n,e){var o=qe({},n,e.attrs);return f(Mt,qe({},o,{icon:en}),null)};Re.displayName="EllipsisOutlined";Re.inheritAttrs=!1;const nn=Re,ct=Symbol("OverrideContextKey"),dt=()=>ae(ct,void 0),Tn=t=>{var n,e,o;const{prefixCls:l,mode:u,selectable:d,validator:a,onClick:r,expandIcon:m}=dt()||{};de(ct,{prefixCls:v(()=>{var c,i;return(i=(c=t.prefixCls)===null||c===void 0?void 0:c.value)!==null&&i!==void 0?i:l==null?void 0:l.value}),mode:v(()=>{var c,i;return(i=(c=t.mode)===null||c===void 0?void 0:c.value)!==null&&i!==void 0?i:u==null?void 0:u.value}),selectable:v(()=>{var c,i;return(i=(c=t.selectable)===null||c===void 0?void 0:c.value)!==null&&i!==void 0?i:d==null?void 0:d.value}),validator:(n=t.validator)!==null&&n!==void 0?n:a,onClick:(e=t.onClick)!==null&&e!==void 0?e:r,expandIcon:(o=t.expandIcon)!==null&&o!==void 0?o:m==null?void 0:m.value})};function on(t,n,e,o){let l=e?e.call(o,t,n):void 0;if(l!==void 0)return!!l;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;const u=Object.keys(t),d=Object.keys(n);if(u.length!==d.length)return!1;const a=Object.prototype.hasOwnProperty.bind(n);for(let r=0;r<u.length;r++){const m=u[r];if(!a(m))return!1;const c=t[m],i=n[m];if(l=e?e.call(o,c,i,m):void 0,l===!1||l===void 0&&c!==i)return!1}return!0}function me(t,n){return on(Ge(t),Ge(n))}const vt=Symbol("menuContextKey"),mt=t=>{de(vt,t)},Q=()=>ae(vt),ft=Symbol("ForceRenderKey"),ln=t=>{de(ft,t)},pt=()=>ae(ft,!1),gt=Symbol("menuFirstLevelContextKey"),bt=t=>{de(gt,t)},an=()=>ae(gt,!0),Ce=Z({compatConfig:{MODE:3},name:"MenuContextProvider",inheritAttrs:!1,props:{mode:{type:String,default:void 0},overflowDisabled:{type:Boolean,default:void 0}},setup(t,n){let{slots:e}=n;const o=Q(),l=p({},o);return t.mode!==void 0&&(l.mode=Xe(t,"mode")),t.overflowDisabled!==void 0&&(l.overflowDisabled=Xe(t,"overflowDisabled")),mt(l),()=>{var u;return(u=e.default)===null||u===void 0?void 0:u.call(e)}}}),rn=mt,sn=Symbol("siderCollapsed"),$e="$$__vc-menu-more__key",$t=Symbol("KeyPathContext"),ze=()=>ae($t,{parentEventKeys:v(()=>[]),parentKeys:v(()=>[]),parentInfo:{}}),un=(t,n,e)=>{const{parentEventKeys:o,parentKeys:l}=ze(),u=v(()=>[...o.value,t]),d=v(()=>[...l.value,n]);return de($t,{parentEventKeys:u,parentKeys:d,parentInfo:e}),d},yt=Symbol("measure"),Ue=Z({compatConfig:{MODE:3},setup(t,n){let{slots:e}=n;return de(yt,!0),()=>{var o;return(o=e.default)===null||o===void 0?void 0:o.call(e)}}}),He=()=>ae(yt,!1),cn=un;function ht(t){const{mode:n,rtl:e,inlineIndent:o}=Q();return v(()=>n.value!=="inline"?null:e.value?{paddingRight:`${t.value*o.value}px`}:{paddingLeft:`${t.value*o.value}px`})}let dn=0;const vn=()=>({id:String,role:String,disabled:Boolean,danger:Boolean,title:{type:[String,Boolean],default:void 0},icon:he.any,onMouseenter:Function,onMouseleave:Function,onClick:Function,onKeydown:Function,onFocus:Function,originItemValue:Ae()}),pe=Z({compatConfig:{MODE:3},name:"AMenuItem",inheritAttrs:!1,props:vn(),slots:Object,setup(t,n){let{slots:e,emit:o,attrs:l}=n;const u=st(),d=He(),a=typeof u.vnode.key=="symbol"?String(u.vnode.key):u.vnode.key;ye(typeof u.vnode.key!="symbol","MenuItem",`MenuItem \`:key="${String(a)}"\` not support Symbol type`);const r=`menu_item_${++dn}_$$_${a}`,{parentEventKeys:m,parentKeys:c}=ze(),{prefixCls:i,activeKeys:$,disabled:y,changeActiveKeys:g,rtl:x,inlineCollapsed:M,siderCollapsed:P,onItemClick:w,selectedKeys:N,registerMenuInfo:q,unRegisterMenuInfo:I}=Q(),O=an(),R=H(!1),A=v(()=>[...c.value,a]);q(r,{eventKey:r,key:a,parentEventKeys:m,parentKeys:c,isLeaf:!0}),Se(()=>{I(r)}),X($,()=>{R.value=!!$.value.find(h=>h===a)},{immediate:!0});const K=v(()=>y.value||t.disabled),W=v(()=>N.value.includes(a)),G=v(()=>{const h=`${i.value}-item`;return{[`${h}`]:!0,[`${h}-danger`]:t.danger,[`${h}-active`]:R.value,[`${h}-selected`]:W.value,[`${h}-disabled`]:K.value}}),Y=h=>({key:a,eventKey:r,keyPath:A.value,eventKeyPath:[...m.value,r],domEvent:h,item:p(p({},t),l)}),re=h=>{if(K.value)return;const T=Y(h);o("click",h),w(T)},se=h=>{K.value||(g(A.value),o("mouseenter",h))},J=h=>{K.value||(g([]),o("mouseleave",h))},ee=h=>{if(o("keydown",h),h.which===wt.ENTER){const T=Y(h);o("click",h),w(T)}},ue=h=>{g(A.value),o("focus",h)},j=(h,T)=>{const F=f("span",{class:`${i.value}-title-content`},[T]);return(!h||at(T)&&T.type==="span")&&T&&M.value&&O&&typeof T=="string"?f("div",{class:`${i.value}-inline-collapsed-noicon`},[T.charAt(0)]):F},ve=ht(v(()=>A.value.length));return()=>{var h,T,F,U,te;if(d)return null;const s=(h=t.title)!==null&&h!==void 0?h:(T=e.title)===null||T===void 0?void 0:T.call(e),b=it((F=e.default)===null||F===void 0?void 0:F.call(e)),C=b.length;let k=s;typeof s>"u"?k=O&&C?b:"":s===!1&&(k="");const B={title:k};!P.value&&!M.value&&(B.title=null,B.open=!1);const z={};t.role==="option"&&(z["aria-selected"]=W.value);const _=(U=t.icon)!==null&&U!==void 0?U:(te=e.icon)===null||te===void 0?void 0:te.call(e,t);return f(Nt,E(E({},B),{},{placement:x.value?"left":"right",overlayClassName:`${i.value}-inline-collapsed-tooltip`}),{default:()=>[f(fe.Item,E(E(E({component:"li"},l),{},{id:t.id,style:p(p({},l.style||{}),ve.value),class:[G.value,{[`${l.class}`]:!!l.class,[`${i.value}-item-only-child`]:(_?C+1:C)===1}],role:t.role||"menuitem",tabindex:t.disabled?null:-1,"data-menu-id":a,"aria-disabled":t.disabled},z),{},{onMouseenter:se,onMouseleave:J,onClick:re,onKeydown:ee,onFocus:ue,title:typeof s=="string"?s:void 0}),{default:()=>[De(typeof _=="function"?_(t.originItemValue):_,{class:`${i.value}-item-icon`},!1),j(_,b)]})]})}}}),le={adjustX:1,adjustY:1},mn={topLeft:{points:["bl","tl"],overflow:le,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:le,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:le,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:le,offset:[4,0]}},fn={topLeft:{points:["bl","tl"],overflow:le,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:le,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:le,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:le,offset:[4,0]}},pn={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"},Ze=Z({compatConfig:{MODE:3},name:"PopupTrigger",inheritAttrs:!1,props:{prefixCls:String,mode:String,visible:Boolean,popupClassName:String,popupOffset:Array,disabled:Boolean,onVisibleChange:Function},slots:Object,emits:["visibleChange"],setup(t,n){let{slots:e,emit:o}=n;const l=H(!1),{getPopupContainer:u,rtl:d,subMenuOpenDelay:a,subMenuCloseDelay:r,builtinPlacements:m,triggerSubMenuAction:c,forceSubMenuRender:i,motion:$,defaultMotions:y,rootClassName:g}=Q(),x=pt(),M=v(()=>d.value?p(p({},fn),m.value):p(p({},mn),m.value)),P=v(()=>pn[t.mode]),w=H();X(()=>t.visible,I=>{ke.cancel(w.value),w.value=ke(()=>{l.value=I})},{immediate:!0}),Se(()=>{ke.cancel(w.value)});const N=I=>{o("visibleChange",I)},q=v(()=>{var I,O;const R=$.value||((I=y.value)===null||I===void 0?void 0:I[t.mode])||((O=y.value)===null||O===void 0?void 0:O.other),A=typeof R=="function"?R():R;return A?Ot(A.name,{css:!0}):void 0});return()=>{const{prefixCls:I,popupClassName:O,mode:R,popupOffset:A,disabled:V}=t;return f(jt,{prefixCls:I,popupClassName:Ie(`${I}-popup`,{[`${I}-rtl`]:d.value},O,g.value),stretch:R==="horizontal"?"minWidth":null,getPopupContainer:u.value,builtinPlacements:M.value,popupPlacement:P.value,popupVisible:l.value,popupAlign:A&&{offset:A},action:V?[]:[c.value],mouseEnterDelay:a.value,mouseLeaveDelay:r.value,onPopupVisibleChange:N,forceRender:x||i.value,popupAnimation:q.value},{popup:e.popup,default:e.default})}}}),It=(t,n)=>{let{slots:e,attrs:o}=n;var l;const{prefixCls:u,mode:d}=Q();return f("ul",E(E({},o),{},{class:Ie(u.value,`${u.value}-sub`,`${u.value}-${d.value==="inline"?"inline":"vertical"}`),"data-menu-list":!0}),[(l=e.default)===null||l===void 0?void 0:l.call(e)])};It.displayName="SubMenuList";const St=It,gn=Z({compatConfig:{MODE:3},name:"InlineSubMenuList",inheritAttrs:!1,props:{id:String,open:Boolean,keyPath:Array},setup(t,n){let{slots:e}=n;const o=v(()=>"inline"),{motion:l,mode:u,defaultMotions:d}=Q(),a=v(()=>u.value===o.value),r=L(!a.value),m=v(()=>a.value?t.open:!1);X(u,()=>{a.value&&(r.value=!1)},{flush:"post"});const c=v(()=>{var i,$;const y=l.value||((i=d.value)===null||i===void 0?void 0:i[o.value])||(($=d.value)===null||$===void 0?void 0:$.other),g=typeof y=="function"?y():y;return p(p({},g),{appear:t.keyPath.length<=1})});return()=>{var i;return r.value?null:f(Ce,{mode:o.value},{default:()=>[f(Dt,c.value,{default:()=>[At(f(St,{id:t.id},{default:()=>[(i=e.default)===null||i===void 0?void 0:i.call(e)]}),[[Rt,m.value]])]})]})}}});let Qe=0;const bn=()=>({icon:he.any,title:he.any,disabled:Boolean,level:Number,popupClassName:String,popupOffset:Array,internalPopupClose:Boolean,eventKey:String,expandIcon:Function,theme:String,onMouseenter:Function,onMouseleave:Function,onTitleClick:Function,originItemValue:Ae()}),ce=Z({compatConfig:{MODE:3},name:"ASubMenu",inheritAttrs:!1,props:bn(),slots:Object,setup(t,n){let{slots:e,attrs:o,emit:l}=n;var u,d;bt(!1);const a=He(),r=st(),m=typeof r.vnode.key=="symbol"?String(r.vnode.key):r.vnode.key;ye(typeof r.vnode.key!="symbol","SubMenu",`SubMenu \`:key="${String(m)}"\` not support Symbol type`);const c=Ne(m)?m:`sub_menu_${++Qe}_$$_not_set_key`,i=(u=t.eventKey)!==null&&u!==void 0?u:Ne(m)?`sub_menu_${++Qe}_$$_${m}`:c,{parentEventKeys:$,parentInfo:y,parentKeys:g}=ze(),x=v(()=>[...g.value,c]),M=H([]),P={eventKey:i,key:c,parentEventKeys:$,childrenEventKeys:M,parentKeys:g};(d=y.childrenEventKeys)===null||d===void 0||d.value.push(i),Se(()=>{var S;y.childrenEventKeys&&(y.childrenEventKeys.value=(S=y.childrenEventKeys)===null||S===void 0?void 0:S.value.filter(D=>D!=i))}),cn(i,c,P);const{prefixCls:w,activeKeys:N,disabled:q,changeActiveKeys:I,mode:O,inlineCollapsed:R,openKeys:A,overflowDisabled:V,onOpenChange:K,registerMenuInfo:W,unRegisterMenuInfo:G,selectedSubMenuKeys:Y,expandIcon:re,theme:se}=Q(),J=m!=null,ee=!a&&(pt()||!J);ln(ee),(a&&J||!a&&!J||ee)&&(W(i,P),Se(()=>{G(i)}));const ue=v(()=>`${w.value}-submenu`),j=v(()=>q.value||t.disabled),ve=H(),h=H(),T=v(()=>A.value.includes(c)),F=v(()=>!V.value&&T.value),U=v(()=>Y.value.includes(c)),te=H(!1);X(N,()=>{te.value=!!N.value.find(S=>S===c)},{immediate:!0});const s=S=>{j.value||(l("titleClick",S,c),O.value==="inline"&&K(c,!T.value))},b=S=>{j.value||(I(x.value),l("mouseenter",S))},C=S=>{j.value||(I([]),l("mouseleave",S))},k=ht(v(()=>x.value.length)),B=S=>{O.value!=="inline"&&K(c,S)},z=()=>{I(x.value)},_=i&&`${i}-popup`,ne=v(()=>Ie(w.value,`${w.value}-${t.theme||se.value}`,t.popupClassName)),ge=(S,D)=>{if(!D)return R.value&&!g.value.length&&S&&typeof S=="string"?f("div",{class:`${w.value}-inline-collapsed-noicon`},[S.charAt(0)]):f("span",{class:`${w.value}-title-content`},[S]);const oe=at(S)&&S.type==="span";return f(Te,null,[De(typeof D=="function"?D(t.originItemValue):D,{class:`${w.value}-item-icon`},!1),oe?S:f("span",{class:`${w.value}-title-content`},[S])])},we=v(()=>O.value!=="inline"&&x.value.length>1?"vertical":O.value),Ct=v(()=>O.value==="horizontal"?"vertical":O.value),xt=v(()=>we.value==="horizontal"?"vertical":we.value),Fe=()=>{var S,D;const oe=ue.value,Oe=(S=t.icon)!==null&&S!==void 0?S:(D=e.icon)===null||D===void 0?void 0:D.call(e,t),Le=t.expandIcon||e.expandIcon||re.value,Ke=ge(rt(e,t,"title"),Oe);return f("div",{style:k.value,class:`${oe}-title`,tabindex:j.value?null:-1,ref:ve,title:typeof Ke=="string"?Ke:null,"data-menu-id":c,"aria-expanded":F.value,"aria-haspopup":!0,"aria-controls":_,"aria-disabled":j.value,onClick:s,onFocus:z},[Ke,O.value!=="horizontal"&&Le?Le(p(p({},t),{isOpen:F.value})):f("i",{class:`${oe}-arrow`},null)])};return()=>{var S;if(a)return J?(S=e.default)===null||S===void 0?void 0:S.call(e):null;const D=ue.value;let oe=()=>null;if(!V.value&&O.value!=="inline"){const Oe=O.value==="horizontal"?[0,8]:[10,0];oe=()=>f(Ze,{mode:we.value,prefixCls:D,visible:!t.internalPopupClose&&F.value,popupClassName:ne.value,popupOffset:t.popupOffset||Oe,disabled:j.value,onVisibleChange:B},{default:()=>[Fe()],popup:()=>f(Ce,{mode:xt.value},{default:()=>[f(St,{id:_,ref:h},{default:e.default})]})})}else oe=()=>f(Ze,null,{default:Fe});return f(Ce,{mode:Ct.value},{default:()=>[f(fe.Item,E(E({component:"li"},o),{},{role:"none",class:Ie(D,`${D}-${O.value}`,o.class,{[`${D}-open`]:F.value,[`${D}-active`]:te.value,[`${D}-selected`]:U.value,[`${D}-disabled`]:j.value}),onMouseenter:b,onMouseleave:C,"data-submenu-id":c}),{default:()=>f(Te,null,[oe(),!V.value&&f(gn,{id:_,open:F.value,keyPath:x.value},{default:e.default})])})]})}}}),$n=()=>({title:he.any,originItemValue:Ae()}),xe=Z({compatConfig:{MODE:3},name:"AMenuItemGroup",inheritAttrs:!1,props:$n(),slots:Object,setup(t,n){let{slots:e,attrs:o}=n;const{prefixCls:l}=Q(),u=v(()=>`${l.value}-item-group`),d=He();return()=>{var a,r;return d?(a=e.default)===null||a===void 0?void 0:a.call(e):f("li",E(E({},o),{},{onClick:m=>m.stopPropagation(),class:u.value}),[f("div",{title:typeof t.title=="string"?t.title:void 0,class:`${u.value}-title`},[rt(e,t,"title")]),f("ul",{class:`${u.value}-list`},[(r=e.default)===null||r===void 0?void 0:r.call(e)])])}}}),yn=()=>({prefixCls:String,dashed:Boolean}),Me=Z({compatConfig:{MODE:3},name:"AMenuDivider",props:yn(),setup(t){const{prefixCls:n}=Q(),e=v(()=>({[`${n.value}-item-divider`]:!0,[`${n.value}-item-divider-dashed`]:!!t.dashed}));return()=>f("li",{class:e.value},null)}});var hn=function(t,n){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)n.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(e[o[l]]=t[o[l]]);return e};function Be(t,n,e){return(t||[]).map((o,l)=>{if(o&&typeof o=="object"){const u=o,{label:d,children:a,key:r,type:m}=u,c=hn(u,["label","children","key","type"]),i=r??`tmp-${l}`,$=e?e.parentKeys.slice():[],y=[],g={eventKey:i,key:i,parentEventKeys:L($),parentKeys:L($),childrenEventKeys:L(y),isLeaf:!1};if(a||m==="group"){if(m==="group"){const M=Be(a,n,e);return f(xe,E(E({key:i},c),{},{title:d,originItemValue:o}),{default:()=>[M]})}n.set(i,g),e&&e.childrenEventKeys.push(i);const x=Be(a,n,{childrenEventKeys:y,parentKeys:[].concat($,i)});return f(ce,E(E({key:i},c),{},{title:d,originItemValue:o}),{default:()=>[x]})}return m==="divider"?f(Me,E({key:i},c),null):(g.isLeaf=!0,n.set(i,g),f(pe,E(E({key:i},c),{},{originItemValue:o}),{default:()=>[d]}))}return null}).filter(o=>o)}function In(t){const n=H([]),e=H(!1),o=H(new Map);return X(()=>t.items,()=>{const l=new Map;e.value=!1,t.items?(e.value=!0,n.value=Be(t.items,l)):n.value=void 0,o.value=l},{immediate:!0,deep:!0}),{itemsNodes:n,store:o,hasItmes:e}}const Sn=t=>{const{componentCls:n,motionDurationSlow:e,menuHorizontalHeight:o,colorSplit:l,lineWidth:u,lineType:d,menuItemPaddingInline:a}=t;return{[`${n}-horizontal`]:{lineHeight:`${o}px`,border:0,borderBottom:`${u}px ${d} ${l}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${n}-item, ${n}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:a},[`> ${n}-item:hover,
        > ${n}-item-active,
        > ${n}-submenu ${n}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${n}-item, ${n}-submenu-title`]:{transition:[`border-color ${e}`,`background ${e}`].join(",")},[`${n}-submenu-arrow`]:{display:"none"}}}},Cn=t=>{let{componentCls:n,menuArrowOffset:e}=t;return{[`${n}-rtl`]:{direction:"rtl"},[`${n}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${n}-rtl${n}-vertical,
    ${n}-submenu-rtl ${n}-vertical`]:{[`${n}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(-${e})`},"&::after":{transform:`rotate(45deg) translateY(${e})`}}}}},Je=t=>p({},Kt(t)),et=(t,n)=>{const{componentCls:e,colorItemText:o,colorItemTextSelected:l,colorGroupTitle:u,colorItemBg:d,colorSubItemBg:a,colorItemBgSelected:r,colorActiveBarHeight:m,colorActiveBarWidth:c,colorActiveBarBorderSize:i,motionDurationSlow:$,motionEaseInOut:y,motionEaseOut:g,menuItemPaddingInline:x,motionDurationMid:M,colorItemTextHover:P,lineType:w,colorSplit:N,colorItemTextDisabled:q,colorDangerItemText:I,colorDangerItemTextHover:O,colorDangerItemTextSelected:R,colorDangerItemBgActive:A,colorDangerItemBgSelected:V,colorItemBgHover:K,menuSubMenuBg:W,colorItemTextSelectedHorizontal:G,colorItemBgSelectedHorizontal:Y}=t;return{[`${e}-${n}`]:{color:o,background:d,[`&${e}-root:focus-visible`]:p({},Je(t)),[`${e}-item-group-title`]:{color:u},[`${e}-submenu-selected`]:{[`> ${e}-submenu-title`]:{color:l}},[`${e}-item-disabled, ${e}-submenu-disabled`]:{color:`${q} !important`},[`${e}-item:hover, ${e}-submenu-title:hover`]:{[`&:not(${e}-item-selected):not(${e}-submenu-selected)`]:{color:P}},[`&:not(${e}-horizontal)`]:{[`${e}-item:not(${e}-item-selected)`]:{"&:hover":{backgroundColor:K},"&:active":{backgroundColor:r}},[`${e}-submenu-title`]:{"&:hover":{backgroundColor:K},"&:active":{backgroundColor:r}}},[`${e}-item-danger`]:{color:I,[`&${e}-item:hover`]:{[`&:not(${e}-item-selected):not(${e}-submenu-selected)`]:{color:O}},[`&${e}-item:active`]:{background:A}},[`${e}-item a`]:{"&, &:hover":{color:"inherit"}},[`${e}-item-selected`]:{color:l,[`&${e}-item-danger`]:{color:R},"a, a:hover":{color:"inherit"}},[`& ${e}-item-selected`]:{backgroundColor:r,[`&${e}-item-danger`]:{backgroundColor:V}},[`${e}-item, ${e}-submenu-title`]:{[`&:not(${e}-item-disabled):focus-visible`]:p({},Je(t))},[`&${e}-submenu > ${e}`]:{backgroundColor:W},[`&${e}-popup > ${e}`]:{backgroundColor:d},[`&${e}-horizontal`]:p(p({},n==="dark"?{borderBottom:0}:{}),{[`> ${e}-item, > ${e}-submenu`]:{top:i,marginTop:-i,marginBottom:0,borderRadius:0,"&::after":{position:"absolute",insetInline:x,bottom:0,borderBottom:`${m}px solid transparent`,transition:`border-color ${$} ${y}`,content:'""'},"&:hover, &-active, &-open":{"&::after":{borderBottomWidth:m,borderBottomColor:G}},"&-selected":{color:G,backgroundColor:Y,"&::after":{borderBottomWidth:m,borderBottomColor:G}}}}),[`&${e}-root`]:{[`&${e}-inline, &${e}-vertical`]:{borderInlineEnd:`${i}px ${w} ${N}`}},[`&${e}-inline`]:{[`${e}-sub${e}-inline`]:{background:a},[`${e}-item, ${e}-submenu-title`]:i&&c?{width:`calc(100% + ${i}px)`}:{},[`${e}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${c}px solid ${l}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${M} ${g}`,`opacity ${M} ${g}`].join(","),content:'""'},[`&${e}-item-danger`]:{"&::after":{borderInlineEndColor:R}}},[`${e}-selected, ${e}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${M} ${y}`,`opacity ${M} ${y}`].join(",")}}}}}},tt=t=>{const{componentCls:n,menuItemHeight:e,itemMarginInline:o,padding:l,menuArrowSize:u,marginXS:d,marginXXS:a}=t,r=l+u+d;return{[`${n}-item`]:{position:"relative"},[`${n}-item, ${n}-submenu-title`]:{height:e,lineHeight:`${e}px`,paddingInline:l,overflow:"hidden",textOverflow:"ellipsis",marginInline:o,marginBlock:a,width:`calc(100% - ${o*2}px)`},[`${n}-submenu`]:{paddingBottom:.02},[`> ${n}-item,
            > ${n}-submenu > ${n}-submenu-title`]:{height:e,lineHeight:`${e}px`},[`${n}-item-group-list ${n}-submenu-title,
            ${n}-submenu-title`]:{paddingInlineEnd:r}}},xn=t=>{const{componentCls:n,iconCls:e,menuItemHeight:o,colorTextLightSolid:l,dropdownWidth:u,controlHeightLG:d,motionDurationMid:a,motionEaseOut:r,paddingXL:m,fontSizeSM:c,fontSizeLG:i,motionDurationSlow:$,paddingXS:y,boxShadowSecondary:g}=t,x={height:o,lineHeight:`${o}px`,listStylePosition:"inside",listStyleType:"disc"};return[{[n]:{"&-inline, &-vertical":p({[`&${n}-root`]:{boxShadow:"none"}},tt(t))},[`${n}-submenu-popup`]:{[`${n}-vertical`]:p(p({},tt(t)),{boxShadow:g})}},{[`${n}-submenu-popup ${n}-vertical${n}-sub`]:{minWidth:u,maxHeight:`calc(100vh - ${d*2.5}px)`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${n}-inline`]:{width:"100%",[`&${n}-root`]:{[`${n}-item, ${n}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${$}`,`background ${$}`,`padding ${a} ${r}`].join(","),[`> ${n}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${n}-sub${n}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${n}-submenu > ${n}-submenu-title`]:x,[`& ${n}-item-group-title`]:{paddingInlineStart:m}},[`${n}-item`]:x}},{[`${n}-inline-collapsed`]:{width:o*2,[`&${n}-root`]:{[`${n}-item, ${n}-submenu ${n}-submenu-title`]:{[`> ${n}-inline-collapsed-noicon`]:{fontSize:i,textAlign:"center"}}},[`> ${n}-item,
          > ${n}-item-group > ${n}-item-group-list > ${n}-item,
          > ${n}-item-group > ${n}-item-group-list > ${n}-submenu > ${n}-submenu-title,
          > ${n}-submenu > ${n}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${c}px)`,textOverflow:"clip",[`
            ${n}-submenu-arrow,
            ${n}-submenu-expand-icon
          `]:{opacity:0},[`${n}-item-icon, ${e}`]:{margin:0,fontSize:i,lineHeight:`${o}px`,"+ span":{display:"inline-block",opacity:0}}},[`${n}-item-icon, ${e}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${n}-item-icon, ${e}`]:{display:"none"},"a, a:hover":{color:l}},[`${n}-item-group-title`]:p(p({},Pt),{paddingInline:y})}}]},nt=t=>{const{componentCls:n,fontSize:e,motionDurationSlow:o,motionDurationMid:l,motionEaseInOut:u,motionEaseOut:d,iconCls:a,controlHeightSM:r}=t;return{[`${n}-item, ${n}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${o}`,`background ${o}`,`padding ${o} ${u}`].join(","),[`${n}-item-icon, ${a}`]:{minWidth:e,fontSize:e,transition:[`font-size ${l} ${d}`,`margin ${o} ${u}`,`color ${o}`].join(","),"+ span":{marginInlineStart:r-e,opacity:1,transition:[`opacity ${o} ${u}`,`margin ${o}`,`color ${o}`].join(",")}},[`${n}-item-icon`]:p({},Tt()),[`&${n}-item-only-child`]:{[`> ${a}, > ${n}-item-icon`]:{marginInlineEnd:0}}},[`${n}-item-disabled, ${n}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${n}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},ot=t=>{const{componentCls:n,motionDurationSlow:e,motionEaseInOut:o,borderRadius:l,menuArrowSize:u,menuArrowOffset:d}=t;return{[`${n}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:t.margin,width:u,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${e} ${o}, opacity ${e}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:u*.6,height:u*.15,backgroundColor:"currentcolor",borderRadius:l,transition:[`background ${e} ${o}`,`transform ${e} ${o}`,`top ${e} ${o}`,`color ${e} ${o}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(-${d})`},"&::after":{transform:`rotate(-45deg) translateY(${d})`}}}}},Mn=t=>{const{antCls:n,componentCls:e,fontSize:o,motionDurationSlow:l,motionDurationMid:u,motionEaseInOut:d,lineHeight:a,paddingXS:r,padding:m,colorSplit:c,lineWidth:i,zIndexPopup:$,borderRadiusLG:y,radiusSubMenuItem:g,menuArrowSize:x,menuArrowOffset:M,lineType:P,menuPanelMaskInset:w}=t;return[{"":{[`${e}`]:p(p({},We()),{"&-hidden":{display:"none"}})},[`${e}-submenu-hidden`]:{display:"none"}},{[e]:p(p(p(p(p(p(p({},Et(t)),We()),{marginBottom:0,paddingInlineStart:0,fontSize:o,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${l} cubic-bezier(0.2, 0, 0, 1) 0s`,"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${e}-item`]:{flex:"none"}},[`${e}-item, ${e}-submenu, ${e}-submenu-title`]:{borderRadius:t.radiusItem},[`${e}-item-group-title`]:{padding:`${r}px ${m}px`,fontSize:o,lineHeight:a,transition:`all ${l}`},[`&-horizontal ${e}-submenu`]:{transition:[`border-color ${l} ${d}`,`background ${l} ${d}`].join(",")},[`${e}-submenu, ${e}-submenu-inline`]:{transition:[`border-color ${l} ${d}`,`background ${l} ${d}`,`padding ${u} ${d}`].join(",")},[`${e}-submenu ${e}-sub`]:{cursor:"initial",transition:[`background ${l} ${d}`,`padding ${l} ${d}`].join(",")},[`${e}-title-content`]:{transition:`color ${l}`},[`${e}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${e}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:c,borderStyle:P,borderWidth:0,borderTopWidth:i,marginBlock:i,padding:0,"&-dashed":{borderStyle:"dashed"}}}),nt(t)),{[`${e}-item-group`]:{[`${e}-item-group-list`]:{margin:0,padding:0,[`${e}-item, ${e}-submenu-title`]:{paddingInline:`${o*2}px ${m}px`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:$,background:"transparent",borderRadius:y,boxShadow:"none",transformOrigin:"0 0","&::before":{position:"absolute",inset:`${w}px 0 0`,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'}},"&-placement-rightTop::before":{top:0,insetInlineStart:w},[`> ${e}`]:p(p(p({borderRadius:y},nt(t)),ot(t)),{[`${e}-item, ${e}-submenu > ${e}-submenu-title`]:{borderRadius:g},[`${e}-submenu-title::after`]:{transition:`transform ${l} ${d}`}})}}),ot(t)),{[`&-inline-collapsed ${e}-submenu-arrow,
        &-inline ${e}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${M})`},"&::after":{transform:`rotate(45deg) translateX(-${M})`}},[`${e}-submenu-open${e}-submenu-inline > ${e}-submenu-title > ${e}-submenu-arrow`]:{transform:`translateY(-${x*.2}px)`,"&::after":{transform:`rotate(-45deg) translateX(-${M})`},"&::before":{transform:`rotate(45deg) translateX(${M})`}}})},{[`${n}-layout-header`]:{[e]:{lineHeight:"inherit"}}}]},wn=(t,n)=>kt("Menu",(o,l)=>{let{overrideComponentToken:u}=l;if((n==null?void 0:n.value)===!1)return[];const{colorBgElevated:d,colorPrimary:a,colorError:r,colorErrorHover:m,colorTextLightSolid:c}=o,{controlHeightLG:i,fontSize:$}=o,y=$/7*5,g=je(o,{menuItemHeight:i,menuItemPaddingInline:o.margin,menuArrowSize:y,menuHorizontalHeight:i*1.15,menuArrowOffset:`${y*.25}px`,menuPanelMaskInset:-7,menuSubMenuBg:d}),x=new Ve(c).setAlpha(.65).toRgbString(),M=je(g,{colorItemText:x,colorItemTextHover:c,colorGroupTitle:x,colorItemTextSelected:c,colorItemBg:"#001529",colorSubItemBg:"#000c17",colorItemBgActive:"transparent",colorItemBgSelected:a,colorActiveBarWidth:0,colorActiveBarHeight:0,colorActiveBarBorderSize:0,colorItemTextDisabled:new Ve(c).setAlpha(.25).toRgbString(),colorDangerItemText:r,colorDangerItemTextHover:m,colorDangerItemTextSelected:c,colorDangerItemBgActive:r,colorDangerItemBgSelected:r,menuSubMenuBg:"#001529",colorItemTextSelectedHorizontal:c,colorItemBgSelectedHorizontal:a},p({},u));return[Mn(g),Sn(g),xn(g),et(g,"light"),et(M,"dark"),Cn(g),Gt(g),Ye(g,"slide-up"),Ye(g,"slide-down"),_t(g,"zoom-big")]},o=>{const{colorPrimary:l,colorError:u,colorTextDisabled:d,colorErrorBg:a,colorText:r,colorTextDescription:m,colorBgContainer:c,colorFillAlter:i,colorFillContent:$,lineWidth:y,lineWidthBold:g,controlItemBgActive:x,colorBgTextHover:M}=o;return{dropdownWidth:160,zIndexPopup:o.zIndexPopupBase+50,radiusItem:o.borderRadiusLG,radiusSubMenuItem:o.borderRadiusSM,colorItemText:r,colorItemTextHover:r,colorItemTextHoverHorizontal:l,colorGroupTitle:m,colorItemTextSelected:l,colorItemTextSelectedHorizontal:l,colorItemBg:c,colorItemBgHover:M,colorItemBgActive:$,colorSubItemBg:i,colorItemBgSelected:x,colorItemBgSelectedHorizontal:"transparent",colorActiveBarWidth:0,colorActiveBarHeight:g,colorActiveBarBorderSize:y,colorItemTextDisabled:d,colorDangerItemText:u,colorDangerItemTextHover:u,colorDangerItemTextSelected:u,colorDangerItemBgActive:a,colorDangerItemBgSelected:a,itemMarginInline:o.marginXXS}})(t),On=()=>({id:String,prefixCls:String,items:Array,disabled:Boolean,inlineCollapsed:Boolean,disabledOverflow:Boolean,forceSubMenuRender:Boolean,openKeys:Array,selectedKeys:Array,activeKey:String,selectable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},tabindex:{type:[Number,String]},motion:Object,role:String,theme:{type:String,default:"light"},mode:{type:String,default:"vertical"},inlineIndent:{type:Number,default:24},subMenuOpenDelay:{type:Number,default:0},subMenuCloseDelay:{type:Number,default:.1},builtinPlacements:{type:Object},triggerSubMenuAction:{type:String,default:"hover"},getPopupContainer:Function,expandIcon:Function,onOpenChange:Function,onSelect:Function,onDeselect:Function,onClick:[Function,Array],onFocus:Function,onBlur:Function,onMousedown:Function,"onUpdate:openKeys":Function,"onUpdate:selectedKeys":Function,"onUpdate:activeKey":Function}),lt=[],ie=Z({compatConfig:{MODE:3},name:"AMenu",inheritAttrs:!1,props:On(),slots:Object,setup(t,n){let{slots:e,emit:o,attrs:l}=n;const{direction:u,getPrefixCls:d}=Bt("menu",t),a=dt(),r=v(()=>{var s;return d("menu",t.prefixCls||((s=a==null?void 0:a.prefixCls)===null||s===void 0?void 0:s.value))}),[m,c]=wn(r,v(()=>!a)),i=H(new Map),$=ae(sn,L(void 0)),y=v(()=>$.value!==void 0?$.value:t.inlineCollapsed),{itemsNodes:g}=In(t),x=H(!1);zt(()=>{x.value=!0}),_e(()=>{ye(!(t.inlineCollapsed===!0&&t.mode!=="inline"),"Menu","`inlineCollapsed` should only be used when `mode` is inline."),ye(!($.value!==void 0&&t.inlineCollapsed===!0),"Menu","`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.")});const M=L([]),P=L([]),w=L({});X(i,()=>{const s={};for(const b of i.value.values())s[b.key]=b;w.value=s},{flush:"post"}),_e(()=>{if(t.activeKey!==void 0){let s=[];const b=t.activeKey?w.value[t.activeKey]:void 0;b&&t.activeKey!==void 0?s=Ee([].concat(be(b.parentKeys),t.activeKey)):s=[],me(M.value,s)||(M.value=s)}}),X(()=>t.selectedKeys,s=>{s&&(P.value=s.slice())},{immediate:!0,deep:!0});const N=L([]);X([w,P],()=>{let s=[];P.value.forEach(b=>{const C=w.value[b];C&&(s=s.concat(be(C.parentKeys)))}),s=Ee(s),me(N.value,s)||(N.value=s)},{immediate:!0});const q=s=>{if(t.selectable){const{key:b}=s,C=P.value.includes(b);let k;t.multiple?C?k=P.value.filter(z=>z!==b):k=[...P.value,b]:k=[b];const B=p(p({},s),{selectedKeys:k});me(k,P.value)||(t.selectedKeys===void 0&&(P.value=k),o("update:selectedKeys",k),C&&t.multiple?o("deselect",B):o("select",B))}K.value!=="inline"&&!t.multiple&&I.value.length&&Y(lt)},I=L([]);X(()=>t.openKeys,function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:I.value;me(I.value,s)||(I.value=s.slice())},{immediate:!0,deep:!0});let O;const R=s=>{clearTimeout(O),O=setTimeout(()=>{t.activeKey===void 0&&(M.value=s),o("update:activeKey",s[s.length-1])})},A=v(()=>!!t.disabled),V=v(()=>u.value==="rtl"),K=L("vertical"),W=H(!1);_e(()=>{var s;(t.mode==="inline"||t.mode==="vertical")&&y.value?(K.value="vertical",W.value=y.value):(K.value=t.mode,W.value=!1),!((s=a==null?void 0:a.mode)===null||s===void 0)&&s.value&&(K.value=a.mode.value)});const G=v(()=>K.value==="inline"),Y=s=>{I.value=s,o("update:openKeys",s),o("openChange",s)},re=L(I.value),se=H(!1);X(I,()=>{G.value&&(re.value=I.value)},{immediate:!0}),X(G,()=>{if(!se.value){se.value=!0;return}G.value?I.value=re.value:Y(lt)},{immediate:!0});const J=v(()=>({[`${r.value}`]:!0,[`${r.value}-root`]:!0,[`${r.value}-${K.value}`]:!0,[`${r.value}-inline-collapsed`]:W.value,[`${r.value}-rtl`]:V.value,[`${r.value}-${t.theme}`]:!0})),ee=v(()=>d()),ue=v(()=>({horizontal:{name:`${ee.value}-slide-up`},inline:Xt(`${ee.value}-motion-collapse`),other:{name:`${ee.value}-zoom-big`}}));bt(!0);const j=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];const b=[],C=i.value;return s.forEach(k=>{const{key:B,childrenEventKeys:z}=C.get(k);b.push(B,...j(be(z)))}),b},ve=s=>{var b;o("click",s),q(s),(b=a==null?void 0:a.onClick)===null||b===void 0||b.call(a)},h=(s,b)=>{var C;const k=((C=w.value[s])===null||C===void 0?void 0:C.childrenEventKeys)||[];let B=I.value.filter(z=>z!==s);if(b)B.push(s);else if(K.value!=="inline"){const z=j(be(k));B=Ee(B.filter(_=>!z.includes(_)))}me(I,B)||Y(B)},T=(s,b)=>{i.value.set(s,b),i.value=new Map(i.value)},F=s=>{i.value.delete(s),i.value=new Map(i.value)},U=L(0),te=v(()=>{var s;return t.expandIcon||e.expandIcon||!((s=a==null?void 0:a.expandIcon)===null||s===void 0)&&s.value?b=>{let C=t.expandIcon||e.expandIcon;return C=typeof C=="function"?C(b):C,De(C,{class:`${r.value}-submenu-expand-icon`},!1)}:null});return rn({prefixCls:r,activeKeys:M,openKeys:I,selectedKeys:P,changeActiveKeys:R,disabled:A,rtl:V,mode:K,inlineIndent:v(()=>t.inlineIndent),subMenuCloseDelay:v(()=>t.subMenuCloseDelay),subMenuOpenDelay:v(()=>t.subMenuOpenDelay),builtinPlacements:v(()=>t.builtinPlacements),triggerSubMenuAction:v(()=>t.triggerSubMenuAction),getPopupContainer:v(()=>t.getPopupContainer),inlineCollapsed:W,theme:v(()=>t.theme),siderCollapsed:$,defaultMotions:v(()=>x.value?ue.value:null),motion:v(()=>x.value?t.motion:null),overflowDisabled:H(void 0),onOpenChange:h,onItemClick:ve,registerMenuInfo:T,unRegisterMenuInfo:F,selectedSubMenuKeys:N,expandIcon:te,forceSubMenuRender:v(()=>t.forceSubMenuRender),rootClassName:c}),()=>{var s,b;const C=g.value||it((s=e.default)===null||s===void 0?void 0:s.call(e)),k=U.value>=C.length-1||K.value!=="horizontal"||t.disabledOverflow,B=K.value!=="horizontal"||t.disabledOverflow?C:C.map((_,ne)=>f(Ce,{key:_.key,overflowDisabled:ne>U.value},{default:()=>_})),z=((b=e.overflowedIndicator)===null||b===void 0?void 0:b.call(e))||f(nn,null,null);return m(f(fe,E(E({},l),{},{onMousedown:t.onMousedown,prefixCls:`${r.value}-overflow`,component:"ul",itemComponent:pe,class:[J.value,l.class,c.value],role:"menu",id:t.id,data:B,renderRawItem:_=>_,renderRawRest:_=>{const ne=_.length,ge=ne?C.slice(-ne):null;return f(Te,null,[f(ce,{eventKey:$e,key:$e,title:z,disabled:k,internalPopupClose:ne===0},{default:()=>ge}),f(Ue,null,{default:()=>[f(ce,{eventKey:$e,key:$e,title:z,disabled:k,internalPopupClose:ne===0},{default:()=>ge})]})])},maxCount:K.value!=="horizontal"||t.disabledOverflow?fe.INVALIDATE:fe.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:_=>{U.value=_}}),{default:()=>[f(Ht,{to:"body"},{default:()=>[f("div",{style:{display:"none"},"aria-hidden":!0},[f(Ue,null,{default:()=>[B]})])]})]}))}}});ie.install=function(t){return t.component(ie.name,ie),t.component(pe.name,pe),t.component(ce.name,ce),t.component(Me.name,Me),t.component(xe.name,xe),t};ie.Item=pe;ie.Divider=Me;ie.SubMenu=ce;ie.ItemGroup=xe;export{nn as E,ie as M,pe as _,Tn as u};
