import{Y as b,Z as w,Q as s,a0 as z,aj as y,ac as C,a3 as M,V as f}from"../../index-BRxqhTX0.js";import{f as B,b as d,k as u}from"./vue-chunks-Chs-lyDX.js";const I=t=>{const{componentCls:e,sizePaddingEdgeHorizontal:o,colorSplit:r,lineWidth:i}=t;return{[e]:s(s({},z(t)),{borderBlockStart:`${i}px solid ${r}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${t.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${i}px solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${t.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${e}-with-text`]:{display:"flex",alignItems:"center",margin:`${t.dividerHorizontalWithTextGutterMargin}px 0`,color:t.colorTextHeading,fontWeight:500,fontSize:t.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${i}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${e}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${e}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${e}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${i}px 0 0`},[`&-horizontal${e}-with-text${e}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${e}-dashed`]:{borderInlineStartWidth:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${e}-with-text`]:{color:t.colorText,fontWeight:"normal",fontSize:t.fontSize},[`&-horizontal${e}-with-text-left${e}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${e}-inner-text`]:{paddingInlineStart:o}},[`&-horizontal${e}-with-text-right${e}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${e}-inner-text`]:{paddingInlineEnd:o}}})}},G=b("Divider",t=>{const e=w(t,{dividerVerticalGutterMargin:t.marginXS,dividerHorizontalWithTextGutterMargin:t.margin,dividerHorizontalGutterMargin:t.marginLG});return[I(e)]},{sizePaddingEdgeHorizontal:0}),H=()=>({prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"},plain:{type:Boolean,default:!1},orientationMargin:[String,Number]}),W=B({name:"ADivider",inheritAttrs:!1,compatConfig:{MODE:3},props:H(),setup(t,e){let{slots:o,attrs:r}=e;const{prefixCls:i,direction:m}=C("divider",t),[v,h]=G(i),g=d(()=>t.orientation==="left"&&t.orientationMargin!=null),c=d(()=>t.orientation==="right"&&t.orientationMargin!=null),$=d(()=>{const{type:n,dashed:l,plain:S}=t,a=i.value;return{[a]:!0,[h.value]:!!h.value,[`${a}-${n}`]:!0,[`${a}-dashed`]:!!l,[`${a}-plain`]:!!S,[`${a}-rtl`]:m.value==="rtl",[`${a}-no-default-orientation-margin-left`]:g.value,[`${a}-no-default-orientation-margin-right`]:c.value}}),p=d(()=>{const n=typeof t.orientationMargin=="number"?`${t.orientationMargin}px`:t.orientationMargin;return s(s({},g.value&&{marginLeft:n}),c.value&&{marginRight:n})}),x=d(()=>t.orientation.length>0?"-"+t.orientation:t.orientation);return()=>{var n;const l=M((n=o.default)===null||n===void 0?void 0:n.call(o));return v(u("div",f(f({},r),{},{class:[$.value,l.length?`${i.value}-with-text ${i.value}-with-text${x.value}`:"",r.class],role:"separator"}),[l.length?u("span",{class:`${i.value}-inner-text`,style:p.value},[l]):null]))}}}),T=y(W);export{T as _};
