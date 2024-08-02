import{bY as xe,bI as be,bZ as Ce,a2 as H,$ as S,a4 as z,az as q,W as T,Z as he,aw as we,bh as ye,I as $e,aG as te}from"../../index-pGVpQMA0.js";import{u as Ie,F as _e,N as le}from"./FormItemContext-Da_jkx0v.js";import{e as Oe,d as Se,u as je,c as Y}from"./index-Z11VoXTE.js";import{b as Ne,h as Q,a as G,c as Pe,f as oe,t as Ae,r as ne,i as Be}from"./inputProps-DZRcc7xF.js";import{e as X,r as J,j as d,s as U,w as se,v as ie,E as Fe,F as ce,y as re,b as ue,ai as Re,o as ze}from"./vue-chunks-XeeYQ2kA.js";var Ee=xe(Object.getPrototypeOf,Object),Ve="[object Object]",Me=Function.prototype,Te=Object.prototype,de=Me.toString,ke=Te.hasOwnProperty,De=de.call(Object);function Je(e){if(!be(e)||Ce(e)!=Ve)return!1;var g=Ee(e);if(g===null)return!0;var t=ke.call(g,"constructor")&&g.constructor;return typeof t=="function"&&t instanceof t&&de.call(t)==De}const We=X({name:"BaseInput",inheritAttrs:!1,props:Ne(),setup(e,g){let{slots:t,attrs:o}=g;const i=J(),h=f=>{var r;if(!((r=i.value)===null||r===void 0)&&r.contains(f.target)){const{triggerFocus:b}=e;b==null||b()}},u=()=>{var f;const{allowClear:r,value:b,disabled:x,readonly:N,handleReset:P,suffix:R=t.suffix,prefixCls:I}=e;if(!r)return null;const w=!x&&!N&&b,v=`${I}-clear-icon`,_=((f=t.clearIcon)===null||f===void 0?void 0:f.call(t))||"*";return d("span",{onClick:P,onMousedown:C=>C.preventDefault(),class:S({[`${v}-hidden`]:!w,[`${v}-has-suffix`]:!!R},v),role:"button",tabindex:-1},[_])};return()=>{var f,r;const{focused:b,value:x,disabled:N,allowClear:P,readonly:R,hidden:I,prefixCls:w,prefix:v=(f=t.prefix)===null||f===void 0?void 0:f.call(t),suffix:_=(r=t.suffix)===null||r===void 0?void 0:r.call(t),addonAfter:C=t.addonAfter,addonBefore:j=t.addonBefore,inputElement:E,affixWrapperClassName:k,wrapperClassName:D,groupClassName:a}=e;let s=H(E,{value:x,hidden:I});if(Q({prefix:v,suffix:_,allowClear:P})){const n=`${w}-affix-wrapper`,c=S(n,{[`${n}-disabled`]:N,[`${n}-focused`]:b,[`${n}-readonly`]:R,[`${n}-input-with-clear-btn`]:_&&P&&x},!G({addonAfter:C,addonBefore:j})&&o.class,k),O=(_||P)&&d("span",{class:`${w}-suffix`},[u(),_]);s=d("span",{class:c,style:o.style,hidden:!G({addonAfter:C,addonBefore:j})&&I,onMousedown:h,ref:i},[v&&d("span",{class:`${w}-prefix`},[v]),H(E,{style:null,value:x,hidden:null}),O])}if(G({addonAfter:C,addonBefore:j})){const n=`${w}-group`,c=`${n}-addon`,O=S(`${w}-wrapper`,n,D),A=S(`${w}-group-wrapper`,o.class,a);return d("span",{class:A,style:o.style,hidden:I},[d("span",{class:O},[j&&d("span",{class:c},[j]),H(s,{style:null,hidden:null}),C&&d("span",{class:c},[C])])])}return s}}});var Ue=function(e,g){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&g.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)g.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]]);return t};const Ge=X({name:"VCInput",inheritAttrs:!1,props:Pe(),setup(e,g){let{slots:t,attrs:o,expose:i,emit:h}=g;const u=U(e.value===void 0?e.defaultValue:e.value),f=U(!1),r=U(),b=U();se(()=>e.value,()=>{u.value=e.value}),se(()=>e.disabled,()=>{e.disabled&&(f.value=!1)});const x=a=>{r.value&&Ae(r.value,a)};i({focus:x,blur:()=>{var a;(a=r.value)===null||a===void 0||a.blur()},input:r,stateValue:u,setSelectionRange:(a,s,n)=>{var c;(c=r.value)===null||c===void 0||c.setSelectionRange(a,s,n)},select:()=>{var a;(a=r.value)===null||a===void 0||a.select()}});const I=a=>{h("change",a)},w=(a,s)=>{u.value!==a&&(e.value===void 0?u.value=a:re(()=>{var n;r.value.value!==u.value&&((n=b.value)===null||n===void 0||n.$forceUpdate())}),re(()=>{s&&s()}))},v=a=>{const{value:s,composing:n}=a.target;if((a.isComposing||n)&&e.lazy||u.value===s)return;const c=a.target.value;ne(r.value,a,I),w(c)},_=a=>{a.keyCode===13&&h("pressEnter",a),h("keydown",a)},C=a=>{f.value=!0,h("focus",a)},j=a=>{f.value=!1,h("blur",a)},E=a=>{ne(r.value,a,I),w("",()=>{x()})},k=()=>{var a,s;const{addonBefore:n=t.addonBefore,addonAfter:c=t.addonAfter,disabled:O,valueModifiers:A={},htmlSize:l,autocomplete:p,prefixCls:$,inputClassName:y,prefix:V=(a=t.prefix)===null||a===void 0?void 0:a.call(t),suffix:M=(s=t.suffix)===null||s===void 0?void 0:s.call(t),allowClear:B,type:L="text"}=e,K=q(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","size","bordered","htmlSize","lazy","showCount","valueModifiers","showCount","affixWrapperClassName","groupClassName","inputClassName","wrapperClassName"]),F=T(T(T({},K),o),{autocomplete:p,onChange:v,onInput:v,onFocus:C,onBlur:j,onKeydown:_,class:S($,{[`${$}-disabled`]:O},y,!G({addonAfter:c,addonBefore:n})&&!Q({prefix:V,suffix:M,allowClear:B})&&o.class),ref:r,key:"ant-input",size:l,type:L});A.lazy&&delete F.onInput,F.autofocus||delete F.autofocus;const W=d("input",q(F,["size"]),null);return Fe(W,[[Oe]])},D=()=>{var a;const{maxlength:s,suffix:n=(a=t.suffix)===null||a===void 0?void 0:a.call(t),showCount:c,prefixCls:O}=e,A=Number(s)>0;if(n||c){const l=[...oe(u.value)].length,p=typeof c=="object"?c.formatter({count:l,maxlength:s}):`${l}${A?` / ${s}`:""}`;return d(ce,null,[!!c&&d("span",{class:S(`${O}-show-count-suffix`,{[`${O}-show-count-has-suffix`]:!!n})},[p]),n])}return null};return ie(()=>{}),()=>{const{prefixCls:a,disabled:s}=e,n=Ue(e,["prefixCls","disabled"]);return d(We,z(z(z({},n),o),{},{ref:b,prefixCls:a,inputElement:k(),handleReset:E,value:oe(u.value),focused:f.value,triggerFocus:x,suffix:D(),disabled:s}),t)}}});var Le=function(e,g){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&g.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)g.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]]);return t};const Qe=X({compatConfig:{MODE:3},name:"AInput",inheritAttrs:!1,props:Be(),setup(e,g){let{slots:t,attrs:o,expose:i,emit:h}=g;const u=J(),f=Ie(),r=_e.useInject(),b=ue(()=>Se(r.status,e.status)),{direction:x,prefixCls:N,size:P,autocomplete:R}=he("input",e),{compactSize:I,compactItemClassnames:w}=we(N,x),v=ue(()=>I.value||P.value),[_,C]=je(N),j=ye();i({focus:l=>{var p;(p=u.value)===null||p===void 0||p.focus(l)},blur:()=>{var l;(l=u.value)===null||l===void 0||l.blur()},input:u,setSelectionRange:(l,p,$)=>{var y;(y=u.value)===null||y===void 0||y.setSelectionRange(l,p,$)},select:()=>{var l;(l=u.value)===null||l===void 0||l.select()}});const s=J([]),n=()=>{s.value.push(setTimeout(()=>{var l,p,$,y;!((l=u.value)===null||l===void 0)&&l.input&&((p=u.value)===null||p===void 0?void 0:p.input.getAttribute("type"))==="password"&&(!(($=u.value)===null||$===void 0)&&$.input.hasAttribute("value"))&&((y=u.value)===null||y===void 0||y.input.removeAttribute("value"))}))};ie(()=>{n()}),Re(()=>{s.value.forEach(l=>clearTimeout(l))}),ze(()=>{s.value.forEach(l=>clearTimeout(l))});const c=l=>{n(),h("blur",l),f.onFieldBlur()},O=l=>{n(),h("focus",l)},A=l=>{h("update:value",l.target.value),h("change",l),h("input",l),f.onFieldChange()};return()=>{var l,p,$,y,V,M;const{hasFeedback:B,feedbackIcon:L}=r,{allowClear:K,bordered:F=!0,prefix:W=(l=t.prefix)===null||l===void 0?void 0:l.call(t),suffix:Z=(p=t.suffix)===null||p===void 0?void 0:p.call(t),addonAfter:ee=($=t.addonAfter)===null||$===void 0?void 0:$.call(t),addonBefore:ae=(y=t.addonBefore)===null||y===void 0?void 0:y.call(t),id:fe=(V=f.id)===null||V===void 0?void 0:V.value}=e,ve=Le(e,["allowClear","bordered","prefix","suffix","addonAfter","addonBefore","id"]),pe=(B||Z)&&d(ce,null,[Z,B&&L]),m=N.value,me=Q({prefix:W,suffix:Z})||!!B,ge=t.clearIcon||(()=>d($e,null,null));return _(d(Ge,z(z(z({},o),q(ve,["onUpdate:value","onChange","onInput"])),{},{onChange:A,id:fe,disabled:(M=e.disabled)!==null&&M!==void 0?M:j.value,ref:u,prefixCls:m,autocomplete:R.value,onBlur:c,onFocus:O,prefix:W,suffix:pe,allowClear:K,addonAfter:ee&&d(te,null,{default:()=>[d(le,null,{default:()=>[ee]})]}),addonBefore:ae&&d(te,null,{default:()=>[d(le,null,{default:()=>[ae]})]}),class:[o.class,w.value],inputClassName:S({[`${m}-sm`]:v.value==="small",[`${m}-lg`]:v.value==="large",[`${m}-rtl`]:x.value==="rtl",[`${m}-borderless`]:!F},!me&&Y(m,b.value),C.value),affixWrapperClassName:S({[`${m}-affix-wrapper-sm`]:v.value==="small",[`${m}-affix-wrapper-lg`]:v.value==="large",[`${m}-affix-wrapper-rtl`]:x.value==="rtl",[`${m}-affix-wrapper-borderless`]:!F},Y(`${m}-affix-wrapper`,b.value,B),C.value),wrapperClassName:S({[`${m}-group-rtl`]:x.value==="rtl"},C.value),groupClassName:S({[`${m}-group-wrapper-sm`]:v.value==="small",[`${m}-group-wrapper-lg`]:v.value==="large",[`${m}-group-wrapper-rtl`]:x.value==="rtl"},Y(`${m}-group-wrapper`,b.value,B),C.value)}),T(T({},t),{clearIcon:ge})))}}});export{Qe as I,Ee as g,Je as i};
