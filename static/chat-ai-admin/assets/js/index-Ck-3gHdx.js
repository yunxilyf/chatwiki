import{Y as F,Z as L,b8 as O,Q as w,a0 as V,a1 as A,aj as W,ak as X,ba as j,aC as v,ac as R,V as I,a4 as K,L as N,av as b,bm as U,S as c,O as x}from"../../index-BRxqhTX0.js";import{u as Q}from"./FormItemContext-VrUvw7Ec.js";import{f as G,b as m,v as Y,e as C,w as Z,x as q,z as J,k as o}from"./vue-chunks-Chs-lyDX.js";const k=i=>{const{componentCls:n}=i,e=`${n}-inner`;return{[n]:{[`&${n}-small`]:{minWidth:i.switchMinWidthSM,height:i.switchHeightSM,lineHeight:`${i.switchHeightSM}px`,[`${n}-inner`]:{paddingInlineStart:i.switchInnerMarginMaxSM,paddingInlineEnd:i.switchInnerMarginMinSM,[`${e}-checked`]:{marginInlineStart:`calc(-100% + ${i.switchPinSizeSM+i.switchPadding*2}px - ${i.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(100% - ${i.switchPinSizeSM+i.switchPadding*2}px + ${i.switchInnerMarginMaxSM*2}px)`},[`${e}-unchecked`]:{marginTop:-i.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}},[`${n}-handle`]:{width:i.switchPinSizeSM,height:i.switchPinSizeSM},[`${n}-loading-icon`]:{top:(i.switchPinSizeSM-i.switchLoadingIconSize)/2,fontSize:i.switchLoadingIconSize},[`&${n}-checked`]:{[`${n}-inner`]:{paddingInlineStart:i.switchInnerMarginMinSM,paddingInlineEnd:i.switchInnerMarginMaxSM,[`${e}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${e}-unchecked`]:{marginInlineStart:`calc(100% - ${i.switchPinSizeSM+i.switchPadding*2}px + ${i.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(-100% + ${i.switchPinSizeSM+i.switchPadding*2}px - ${i.switchInnerMarginMaxSM*2}px)`}},[`${n}-handle`]:{insetInlineStart:`calc(100% - ${i.switchPinSizeSM+i.switchPadding}px)`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${e}`]:{[`${e}-unchecked`]:{marginInlineStart:i.marginXXS/2,marginInlineEnd:-i.marginXXS/2}},[`&${n}-checked ${e}`]:{[`${e}-checked`]:{marginInlineStart:-i.marginXXS/2,marginInlineEnd:i.marginXXS/2}}}}}}},ii=i=>{const{componentCls:n}=i;return{[n]:{[`${n}-loading-icon${i.iconCls}`]:{position:"relative",top:(i.switchPinSize-i.fontSize)/2,color:i.switchLoadingIconColor,verticalAlign:"top"},[`&${n}-checked ${n}-loading-icon`]:{color:i.switchColor}}}},ni=i=>{const{componentCls:n}=i,e=`${n}-handle`;return{[n]:{[e]:{position:"absolute",top:i.switchPadding,insetInlineStart:i.switchPadding,width:i.switchPinSize,height:i.switchPinSize,transition:`all ${i.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:i.colorWhite,borderRadius:i.switchPinSize/2,boxShadow:i.switchHandleShadow,transition:`all ${i.switchDuration} ease-in-out`,content:'""'}},[`&${n}-checked ${e}`]:{insetInlineStart:`calc(100% - ${i.switchPinSize+i.switchPadding}px)`},[`&:not(${n}-disabled):active`]:{[`${e}::before`]:{insetInlineEnd:i.switchHandleActiveInset,insetInlineStart:0},[`&${n}-checked ${e}::before`]:{insetInlineEnd:0,insetInlineStart:i.switchHandleActiveInset}}}}},ei=i=>{const{componentCls:n}=i,e=`${n}-inner`;return{[n]:{[e]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:i.switchInnerMarginMax,paddingInlineEnd:i.switchInnerMarginMin,transition:`padding-inline-start ${i.switchDuration} ease-in-out, padding-inline-end ${i.switchDuration} ease-in-out`,[`${e}-checked, ${e}-unchecked`]:{display:"block",color:i.colorTextLightSolid,fontSize:i.fontSizeSM,transition:`margin-inline-start ${i.switchDuration} ease-in-out, margin-inline-end ${i.switchDuration} ease-in-out`,pointerEvents:"none"},[`${e}-checked`]:{marginInlineStart:`calc(-100% + ${i.switchPinSize+i.switchPadding*2}px - ${i.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(100% - ${i.switchPinSize+i.switchPadding*2}px + ${i.switchInnerMarginMax*2}px)`},[`${e}-unchecked`]:{marginTop:-i.switchHeight,marginInlineStart:0,marginInlineEnd:0}},[`&${n}-checked ${e}`]:{paddingInlineStart:i.switchInnerMarginMin,paddingInlineEnd:i.switchInnerMarginMax,[`${e}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${e}-unchecked`]:{marginInlineStart:`calc(100% - ${i.switchPinSize+i.switchPadding*2}px + ${i.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(-100% + ${i.switchPinSize+i.switchPadding*2}px - ${i.switchInnerMarginMax*2}px)`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${e}`]:{[`${e}-unchecked`]:{marginInlineStart:i.switchPadding*2,marginInlineEnd:-i.switchPadding*2}},[`&${n}-checked ${e}`]:{[`${e}-checked`]:{marginInlineStart:-i.switchPadding*2,marginInlineEnd:i.switchPadding*2}}}}}},ai=i=>{const{componentCls:n}=i;return{[n]:w(w(w(w({},V(i)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:i.switchMinWidth,height:i.switchHeight,lineHeight:`${i.switchHeight}px`,verticalAlign:"middle",background:i.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${i.motionDurationMid}`,userSelect:"none",[`&:hover:not(${n}-disabled)`]:{background:i.colorTextTertiary}}),A(i)),{[`&${n}-checked`]:{background:i.switchColor,[`&:hover:not(${n}-disabled)`]:{background:i.colorPrimaryHover}},[`&${n}-loading, &${n}-disabled`]:{cursor:"not-allowed",opacity:i.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${n}-rtl`]:{direction:"rtl"}})}},ci=F("Switch",i=>{const n=i.fontSize*i.lineHeight,e=i.controlHeight/2,t=2,h=n-t*2,l=e-t*2,d=L(i,{switchMinWidth:h*2+t*4,switchHeight:n,switchDuration:i.motionDurationMid,switchColor:i.colorPrimary,switchDisabledOpacity:i.opacityLoading,switchInnerMarginMin:h/2,switchInnerMarginMax:h+t+t*2,switchPadding:t,switchPinSize:h,switchBg:i.colorBgContainer,switchMinWidthSM:l*2+t*2,switchHeightSM:e,switchInnerMarginMinSM:l/2,switchInnerMarginMaxSM:l+t+t*2,switchPinSizeSM:l,switchHandleShadow:`0 2px 4px 0 ${new O("#00230b").setAlpha(.2).toRgbString()}`,switchLoadingIconSize:i.fontSizeIcon*.75,switchLoadingIconColor:`rgba(0, 0, 0, ${i.opacityLoading})`,switchHandleActiveInset:"-30%"});return[ai(d),ei(d),ni(d),ii(d),k(d)]}),ti=X("small","default"),si=()=>({id:String,prefixCls:String,size:c.oneOf(ti),disabled:{type:Boolean,default:void 0},checkedChildren:c.any,unCheckedChildren:c.any,tabindex:c.oneOfType([c.string,c.number]),autofocus:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},checked:c.oneOfType([c.string,c.number,c.looseBool]),checkedValue:c.oneOfType([c.string,c.number,c.looseBool]).def(!0),unCheckedValue:c.oneOfType([c.string,c.number,c.looseBool]).def(!1),onChange:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onMouseup:{type:Function},"onUpdate:checked":{type:Function},onBlur:Function,onFocus:Function}),li=G({compatConfig:{MODE:3},name:"ASwitch",__ANT_SWITCH:!0,inheritAttrs:!1,props:si(),slots:Object,setup(i,n){let{attrs:e,slots:t,expose:h,emit:l}=n;const d=Q(),f=j(),g=m(()=>{var a;return(a=i.disabled)!==null&&a!==void 0?a:f.value});Y(()=>{v(),v()});const S=C(i.checked!==void 0?i.checked:e.defaultChecked),M=m(()=>S.value===i.checkedValue);Z(()=>i.checked,()=>{S.value=i.checked});const{prefixCls:s,direction:y,size:P}=R("switch",i),[z,H]=ci(s),u=C(),p=()=>{var a;(a=u.value)===null||a===void 0||a.focus()};h({focus:p,blur:()=>{var a;(a=u.value)===null||a===void 0||a.blur()}}),q(()=>{J(()=>{i.autofocus&&!g.value&&u.value.focus()})});const $=(a,r)=>{g.value||(l("update:checked",a),l("change",a,r),d.onFieldChange())},E=a=>{l("blur",a)},T=a=>{p();const r=M.value?i.unCheckedValue:i.checkedValue;$(r,a),l("click",r,a)},D=a=>{a.keyCode===x.LEFT?$(i.unCheckedValue,a):a.keyCode===x.RIGHT&&$(i.checkedValue,a),l("keydown",a)},_=a=>{var r;(r=u.value)===null||r===void 0||r.blur(),l("mouseup",a)},B=m(()=>({[`${s.value}-small`]:P.value==="small",[`${s.value}-loading`]:i.loading,[`${s.value}-checked`]:M.value,[`${s.value}-disabled`]:g.value,[s.value]:!0,[`${s.value}-rtl`]:y.value==="rtl",[H.value]:!0}));return()=>{var a;return z(o(U,null,{default:()=>[o("button",I(I(I({},K(i,["prefixCls","checkedChildren","unCheckedChildren","checked","autofocus","checkedValue","unCheckedValue","id","onChange","onUpdate:checked"])),e),{},{id:(a=i.id)!==null&&a!==void 0?a:d.id.value,onKeydown:D,onClick:T,onBlur:E,onMouseup:_,type:"button",role:"switch","aria-checked":S.value,disabled:g.value||i.loading,class:[e.class,B.value],ref:u}),[o("div",{class:`${s.value}-handle`},[i.loading?o(N,{class:`${s.value}-loading-icon`},null):null]),o("span",{class:`${s.value}-inner`},[o("span",{class:`${s.value}-inner-checked`},[b(t,i,"checkedChildren")]),o("span",{class:`${s.value}-inner-unchecked`},[b(t,i,"unCheckedChildren")])])])]}))}}}),ui=W(li);export{ui as _};
