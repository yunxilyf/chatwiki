import{_ as I,m as j,B as E}from"../../index-pGVpQMA0.js";import{a as u}from"./dayjs-oAino27R.js";import{b as R}from"./index-BiBRpeT6.js";import{a as F,_ as H}from"./RadioButton-DhVApLrq.js";import"./index-Dg5FoGFr.js";import{R as O}from"./dayjs-BoTKFBbi.js";import{r as f,A as L,v as B,L as v,M as x,V as o,j as r,Q as _,F as A,a1 as N,u as Q,P as T,X as k,Y as m,a3 as P,a4 as U}from"./vue-chunks-XeeYQ2kA.js";import{_ as q}from"./index-D9Oeu4M4.js";import{S as J,_ as X}from"./index-CpXIlpHQ.js";import{_ as G,a as K}from"./index-CJjzQLgI.js";import"./axios-Cm0UX6qg.js";import"./qs-DfimNey5.js";import"./crypto-js-CuiFEUvY.js";import"./FormItemContext-Da_jkx0v.js";import"./colors-DCZEizLq.js";import"./CheckOutlined-_VUPY4GZ.js";import"./shallowequal-Da0otATl.js";import"./index-Z11VoXTE.js";import"./move-jqhYINnj.js";import"./slide-D6W0LxJh.js";import"./index-Bruf23Oc.js";import"./DownOutlined-C8Q6Kr-5.js";import"./SearchOutlined-C_Q6hh1x.js";import"./index-DwwRbEJn.js";import"./LeftOutlined-CO6JLRKk.js";import"./RightOutlined-DJ2Olgkf.js";import"./responsiveObserve-Cdlm3rJ_.js";import"./index-zLXV6DVR.js";import"./index-43HoJZDy.js";import"./index-DkJY3DLr.js";import"./dropdown-CkB_t3kv.js";import"./Dropdown-CcwauEi-.js";import"./index-Cxpqycif.js";import"./collapseMotion-Bep1tU8X.js";import"./index-BPzZ8HYg.js";import"./Input-BpoOlxnx.js";import"./inputProps-DZRcc7xF.js";import"./Search-CpOmfbSY.js";import"./TextArea-DvqYUUpc.js";import"./Password-BTEAOcTM.js";const W={class:"zm-date"},Z={class:"date-btn"},tt={class:"date-content"},et={__name:"date",props:{dateType:{type:Number,default:1},rangeData:{type:Array,default:null}},emits:["dateChange"],setup(l,{emit:b}){const g=l,t=f(1),w=b;let D=L([{label:"今日",value:!1,key:2,start_date:u(),end_date:u()},{label:"昨日",value:!1,key:3,start_date:u().subtract(1,"day"),end_date:u().subtract(1,"day")},{label:"近七日",value:!0,key:4,start_date:u().subtract(6,"day"),end_date:u().subtract(0,"day")}]);const y=f(null),c=f(null),p=f([]),S=e=>e>=u().subtract(0,"day"),Y=()=>{let e=t.value,a=null;D.forEach(d=>{d.key==e&&(a=d)}),p.value=[a.start_date,a.end_date],y.value=a.start_date.format("YYYY-MM-DD"),c.value=a.end_date.format("YYYY-MM-DD"),C()},z=(e,a)=>{t.value=1,p.value=e,y.value=a[0],c.value=a[1],C()},C=()=>{w("dateChange",{start_date:y.value,end_date:c.value})};return B(()=>{t.value=g.dateType,p.value=g.rangeData}),(e,a)=>{const d=F,n=H,h=O;return v(),x("div",W,[o("div",Z,[r(n,{value:t.value,"onUpdate:value":a[0]||(a[0]=i=>t.value=i),onChange:Y},{default:_(()=>[(v(!0),x(A,null,N(Q(D),i=>(v(),T(d,{class:"date-btn-button",value:i.key,key:i.key},{default:_(()=>[k(m(i.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),o("div",tt,[r(h,{value:p.value,"onUpdate:value":a[1]||(a[1]=i=>p.value=i),onChange:z,format:"YYYY-MM-DD",disabledDate:S},null,8,["value"])])])}}},$=l=>(P("data-v-be2fc97c"),l=l(),U(),l),at={class:"team-members-pages"},ot={class:"total"},st=$(()=>o("div",{class:"label total-label"},"共计：",-1)),nt={class:"total-num"},lt={class:"set-model"},dt=$(()=>o("div",{class:"label set-model-label"},"选择模型：",-1)),_t={class:"set-model-body"},rt={class:"set-date"},it=$(()=>o("div",{class:"label set-date-label"},[o("span",null,"统计日期：")],-1)),ct={class:"set-date-body"},pt={class:"set-reset"},ut={class:"list-box"},mt={class:"user-box"},vt={class:"name-info"},ht={class:"user-name"},ft={__name:"use-token",setup(l){const b=f(Date.now()),g=f(["全部模型"]),t=L({page:1,size:10,total:0,use_model:"全部模型",start_date:"",end_date:""}),w=e=>{t.start_date=e.start_date,t.end_date=e.end_date,c()},D=()=>{t.use_model="全部模型",t.start_date="",t.end_date="",b.value=Date.now(),c()},y=e=>{t.page=e.current,t.size=e.pageSize,Y()},c=()=>{t.page=1,Y()},p=f([]),S=(e,a)=>{const d=(e.split(".")[1]?e.split(".")[1]:e.split(".")[0]).length,n=(a.split(".")[1]?a.split(".")[1]:a.split(".")[0]).length,h=Math.pow(10,Math.max(d,n));return(e*h+a*h)/h/1e3},Y=()=>{let e={page:t.page,size:t.size,start_date:t.start_date,end_date:t.end_date};t.use_model!="全部模型"&&(e.model=t.use_model),j(e).then(a=>{let d=a.data.list;d.forEach(n=>{n.create_time=n.create_time>0?u(n.create_time*1e3).format("YYYY-MM-DD HH:mm"):"--",n.amount=S(n.prompt_token,n.completion_token)}),p.value=d,t.total=+a.data.total})},z=e=>{t.use_model=e,c()},C=()=>{R({}).then(e=>{g.value=["全部模型",...e.data]})};return B(()=>{C(),c()}),(e,a)=>{const d=J,n=X,h=E,i=q,M=G,V=K;return v(),x("div",at,[r(i,{justify:"flex-end"},{default:_(()=>[o("div",ot,[st,o("div",nt,m(t.total)+"条",1)]),o("div",lt,[dt,o("div",_t,[r(n,{value:t.use_model,"onUpdate:value":a[0]||(a[0]=s=>t.use_model=s),placeholder:"全部模型",onChange:z,style:{width:"200px"}},{default:_(()=>[(v(!0),x(A,null,N(g.value,s=>(v(),T(d,{key:s,value:s},{default:_(()=>[o("span",null,m(s),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])]),o("div",rt,[it,o("div",ct,[(v(),T(et,{onDateChange:w,key:b.value}))])]),o("div",pt,[r(h,{onClick:D},{default:_(()=>[k("重置")]),_:1})])]),_:1}),o("div",ut,[r(V,{"data-source":p.value,pagination:t.total>t.size?{current:t.page,total:t.total,pageSize:t.size,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"]}:!1,onChange:y},{default:_(()=>[r(M,{title:"模型名称","data-index":"model",width:"300px"},{default:_(({record:s})=>[o("div",mt,[o("div",vt,[o("div",ht,m(s.corp)+"（"+m(s.model)+"）",1)])])]),_:1}),r(M,{title:"类型","data-index":"IP",width:"190px"},{default:_(({record:s})=>[k(m(s.type),1)]),_:1}),r(M,{title:"Token消耗(k)","data-index":"amount",width:"190px"},{default:_(({record:s})=>[k(m(s.amount),1)]),_:1}),r(M,{title:"日期","data-index":"date",width:"190px"},{default:_(({record:s})=>[k(m(s.date),1)]),_:1})]),_:1},8,["data-source","pagination"])])])}}},gt=I(ft,[["__scopeId","data-v-be2fc97c"]]),bt=l=>(P("data-v-0449483b"),l=l(),U(),l),yt={class:"user-model-page"},kt=bt(()=>o("div",{class:"page-title"},"Token使用",-1)),xt={class:"list-wrapper"},Dt={__name:"index",setup(l){return(b,g)=>(v(),x("div",yt,[kt,o("div",xt,[r(gt)])]))}},ie=I(Dt,[["__scopeId","data-v-0449483b"]]);export{ie as default};
