import{m as u,_ as F,a as M,L as T,$ as V,K as L}from"../../index-B7hMzf9q.js";import{r as D,A as z,v as B,w as N,L as s,M as n,V as f,j as i,Q as w,F as Y,a1 as Q,u as k,P as O,X as h,Y as E,a0 as U,a8 as p,a3 as q,a4 as P}from"./vue-chunks-DrvJJrR0.js";import{a as R,_ as j}from"./RadioButton-h3SKy_Yn.js";import{R as A}from"./dayjs-Bgeg_U03.js";import{g as H}from"./index-CZ5T3VMv.js";import{C as J}from"./ClockCircleFilled-CtP58Z9-.js";import{a as K}from"./index-CNSG4DFw.js";import{Q as X}from"./QuestionCircleOutlined-yzwF_I28.js";import{_ as G}from"./index-DH0pEAAK.js";import{_ as W}from"./index-fgx08nOg.js";import"./dayjs-Bv4VEw_C.js";import"./axios-Cm0UX6qg.js";import"./qs-QntUJHOZ.js";import"./crypto-js-BpV8n4kc.js";import"./FormItemContext-DpTNEgKz.js";import"./colors-AwmC3pbR.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./CheckOutlined-C9DwVUk4.js";import"./index-NynCXQ0s.js";import"./index-CBMSGrct.js";import"./slide-CiMyoPxP.js";import"./index-Dvj-et0N.js";import"./DownOutlined-B5dBaul-.js";import"./SearchOutlined-BgR6uuBy.js";import"./move-CNAILSVj.js";import"./shallowequal-CfnxU2uU.js";import"./index-ZVG0aRlo.js";import"./LeftOutlined-CA0JWJxB.js";import"./RightOutlined-CMGSfS0w.js";import"./responsiveObserve-DuhiEUQX.js";import"./index-BqR9ma3k.js";import"./index-Zn_D09PO.js";import"./dropdown-BiEW6MsM.js";import"./Dropdown-Cwmk4BWs.js";import"./index-B74dmqu4.js";import"./collapseMotion-ChcyS4Km.js";import"./index-BB88hu_2.js";import"./index-Dw_8Y6aL.js";import"./Input-CL6tjIMU.js";import"./inputProps-D8s__VTw.js";import"./Search-CVTK-J_z.js";import"./TextArea-CG0P41dy.js";import"./Password-gTEcwCfD.js";const Z={class:"zm-date"},tt={class:"date-btn"},et={class:"date-content"},at={__name:"date",props:{datekey:{type:String,default:""}},emits:["dateChange"],setup(m,{emit:I}){const y=m,l=D(1),o=I;let S=z([{label:"近7日",value:!0,key:2,start_date:u().subtract(6,"day"),end_date:u().subtract(0,"day")},{label:"近14日",value:!1,key:3,start_date:u().subtract(13,"day"),end_date:u().subtract(0,"day")},{label:"近30日",value:!1,key:4,start_date:u().subtract(29,"day"),end_date:u().subtract(0,"day")}]);const b=D(null),C=D(null),v=D([]),$=e=>e>=u().subtract(0,"day"),x=()=>{let e=l.value,t=null;S.forEach(_=>{_.key==e&&(t=_)}),v.value=[t.start_date,t.end_date],b.value=t.start_date.startOf("day").unix(),C.value=t.end_date.endOf("day").unix(),d()},a=(e,t)=>{b.value=e[0].startOf("day").unix(),C.value=e[1].endOf("day").unix(),l.value=1,d()},d=()=>{o("dateChange",{start_time:b.value,end_time:C.value})};return B(()=>{l.value=parseInt(y.datekey),x()}),N(()=>y.datekey,(e,t)=>{l.value=parseInt(y.datekey.split("-")[0]),x()}),(e,t)=>{const _=R,g=j,r=A;return s(),n("div",Z,[f("div",tt,[i(g,{value:l.value,"onUpdate:value":t[0]||(t[0]=c=>l.value=c),onChange:x},{default:w(()=>[(s(!0),n(Y,null,Q(k(S),c=>(s(),O(_,{class:"date-btn-button",value:c.key,key:c.key},{default:w(()=>[h(E(c.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),f("div",et,[i(r,{value:v.value,"onUpdate:value":t[1]||(t[1]=c=>v.value=c),onChange:a,format:"YYYY-MM-DD",disabledDate:$,allowClear:!1},null,8,["value"])])])}}},st=m=>(q("data-v-bb16126b"),m=m(),P(),m),ot={class:"user-model-page"},nt=st(()=>f("div",{class:"page-title"},"导出记录",-1)),rt={class:"list-wrapper"},it={class:"content-wrapper"},lt={class:"search-block"},_t={key:0,class:"status-item status-0"},dt={key:1,class:"status-item status-1"},ct={key:2,class:"status-item status-2"},ut={key:3,class:"status-item status-3"},pt=["onClick"],mt={key:1},yt={__name:"index",setup(m){const I=M(),y=U().query,l=D([]),o=z({robot_id:y.id,page:1,size:10,total:0,start_time:"",end_time:""}),S=a=>{o.page=a.current,o.size=a.pageSize,v()},b=()=>{o.page=1,v()},C=a=>{o.start_time=a.start_time,o.end_time=a.end_time,b()},v=()=>{H({...o}).then(a=>{let d=a.data.list,e=a.data.map;d.forEach(t=>{var _;t.create_time_desc=u(t.create_time*1e3).format("YYYY/MM/DD HH:mm"),t.source_desc=(_=e.filter(g=>g.source==t.source)[0])==null?void 0:_.source_name,t.is_over_7_days=t.create_time<Date.now()/1e3-7*24*60*60}),l.value=d,o.total=+a.data.total})},$=a=>{let d=`/manage/downloadExportFile?id=${a.id}&robot_id=${y.id}&token=${I.getToken}`;var e=document.createElement("a");e.href=d,e.style.display="none",e.click()},x=[{title:"导出时间",dataIndex:"create_time_desc",key:"create_time_desc"},{title:"导出文件名称",dataIndex:"file_name",key:"file_name"},{title:"来源",key:"source_desc",dataIndex:"source_desc"},{title:"状态",key:"status",dataIndex:"status"},{title:"操作",key:"action"}];return(a,d)=>{const e=G,t=W,_=K;return s(),n("div",ot,[nt,f("div",rt,[f("div",it,[i(e,{"show-icon":"",message:"导出文件仅保留7天，7天后自动删除，请及时下载到本地"}),f("div",lt,[i(at,{datekey:"2",onDateChange:C})]),i(_,{class:"table-list",columns:x,"data-source":l.value,pagination:{current:o.page,total:o.total,pageSize:o.size,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"]},onChange:S},{bodyCell:w(({column:g,record:r})=>[g.key==="status"?(s(),n(Y,{key:0},[r.status==0?(s(),n("div",_t,[i(k(J)),h("等待导出 ")])):p("",!0),r.status==1?(s(),n("div",dt,[i(k(T)),h("导出中 ")])):p("",!0),r.status==2?(s(),n("div",ct,[i(k(V)),h("导出成功 ")])):p("",!0),r.status==3?(s(),n("div",ut,[i(k(L)),h("导出失败 "),r.err_msg?(s(),O(t,{key:0},{title:w(()=>[h(E(r.err_msg),1)]),default:w(()=>[i(k(X))]),_:2},1024)):p("",!0)])):p("",!0)],64)):p("",!0),g.key==="action"?(s(),n(Y,{key:1},[r.is_over_7_days?(s(),n("span",mt,"--")):(s(),n("a",{key:0,onClick:c=>$(r)},"下载",8,pt))],64)):p("",!0)]),_:1},8,["data-source","pagination"])])])])}}},ne=F(yt,[["__scopeId","data-v-bb16126b"]]);export{ne as default};
