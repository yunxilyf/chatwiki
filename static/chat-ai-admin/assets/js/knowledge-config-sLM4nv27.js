import{_ as G,d as x,c as P}from"../../index-BRxqhTX0.js";import{a1 as Q,B as C,e as c,M as t,N as i,W as n,k as l,S as r,V as I,u as B,F as d,a2 as p,a3 as N,Z as f,Q as v,a9 as R}from"./vue-chunks-Chs-lyDX.js";import{h as W,n as Z}from"./index-ClsKim4H.js";/* empty css                                                                         */import{F as S,_ as j}from"./index-BpmDo9gD.js";import"./index-BxFCEOhs.js";import{I as H}from"./Password-IO9yCNMV.js";import{_ as J}from"./TextArea-DXf3OI0w.js";import{S as K,a as T,_ as X}from"./index-DvlsFstf.js";import"./dayjs-CkLU8sYs.js";import"./axios-Cm0UX6qg.js";import"./qs-DjYKlG5V.js";import"./crypto-js-BUUKnz8c.js";import"./index-BKmN8VmO.js";import"./collapseMotion-DN2MDQ98.js";import"./QuestionCircleOutlined-D20_EtSI.js";import"./FormItemContext-VrUvw7Ec.js";import"./inputProps-C625v0VH.js";import"./index-DYUnQ0Fx.js";import"./slide-Dp7-2q38.js";import"./CheckOutlined-CvMo00tT.js";import"./DownOutlined-bMEBWO_G.js";import"./move-DuzEngAP.js";const Y={class:"add-library-page"},ee={class:"form-box"},oe={class:"card-box"},ae=["onClick"],te=["src"],ne={__name:"knowledge-config",setup(le){const b=Q(),F=b.query,o=C({library_name:"",library_intro:"",use_model:"",is_offline:""}),_=c(0),y=c({});(()=>{W({id:F.id}).then(a=>{y.value=a.data,_.value=y.value.is_offline?2:1,o.library_name=a.data.library_name,o.library_intro=a.data.library_intro,o.use_model=a.data.use_model,o.is_offline=a.data.is_offline})})();const L=c([{iconName:"high",title:"高质量",value:1,is_offline:!1,desc:"使用在线的嵌入模型，在召回时具有更高的准确度，但需要花费token"},{iconName:"economic",title:"经济",value:2,is_offline:!0,desc:"使用离线的向量模型，较在线模型准确度稍低，但是不需要消耗token"}]),q=S.useForm,w=C({library_name:[{required:!0,message:"请输入库名称",trigger:"blur"}],use_model:[{required:!0,message:"请选择嵌入模型",trigger:"change"}]}),{validateInfos:g}=q(o,w),V=()=>!1,M=()=>!1,U=c([]),h=()=>{if(!o.library_name)return x.error("请输入知识库名称");let a={library_name:o.library_name,library_intro:o.library_intro,id:b.query.id};Z(a).then(s=>{x.success("修改成功")})};return(a,s)=>{const z=H,m=j,E=J,k=P,O=K,$=T,A=X,D=S;return t(),i("div",Y,[n("div",ee,[l(D,{"label-col":{span:4}},{default:r(()=>[l(m,I({ref:"name",label:"知识库名称"},B(g).library_name),{default:r(()=>[l(z,{onBlur:h,value:o.library_name,"onUpdate:value":s[0]||(s[0]=e=>o.library_name=e),placeholder:"请输入知识库名称，最多20个字"},null,8,["value"])]),_:1},16),l(m,{label:"知识库简介"},{default:r(()=>[l(E,{onBlur:h,value:o.library_intro,"onUpdate:value":s[1]||(s[1]=e=>o.library_intro=e),placeholder:"请输入知识库介绍"},null,8,["value"])]),_:1}),l(m,I({label:"嵌入模型"},B(g).use_model),{default:r(()=>[n("div",oe,[(t(!0),i(d,null,p(L.value,e=>(t(),i("div",{class:N(["use-model-item",{active:_.value==e.value}]),key:e.value,onClick:u=>M(e)},[n("div",{class:N(["use-model-item-top",{active:_.value==e.value}])},[l(k,{class:"use-model-item-top-icon",style:{color:"red"},name:e.iconName},null,8,["name"]),n("p",null,f(e.title),1)],2),n("p",null,f(e.desc),1),_.value==e.value?(t(),v(k,{key:0,class:"check-arrow",name:"select-disabled",style:{"font-size":"24px",color:"#fff"}})):R("",!0)],10,ae))),128))]),l(A,{disabled:"",value:o.use_model,"onUpdate:value":s[2]||(s[2]=e=>o.use_model=e),placeholder:"请选择嵌入模型",onChange:V},{default:r(()=>[(t(!0),i(d,null,p(U.value,e=>(t(),v($,{key:e.id},{label:r(()=>[n("span",null,[n("img",{class:"model-icon",src:e.icon,alt:""},null,8,te)])]),default:r(()=>[(t(!0),i(d,null,p(e.children,u=>(t(),v(O,{value:u,model_config_id:e.id,key:u},{default:r(()=>[n("span",null,f(u),1)]),_:2},1032,["value","model_config_id"]))),128))]),_:2},1024))),128))]),_:1},8,["value"])]),_:1},16)]),_:1})])])}}},qe=G(ne,[["__scopeId","data-v-1f0ac929"]]);export{qe as default};
