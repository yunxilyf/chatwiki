import{m as y,e as X,_ as I,a2 as G,c as j,ac as K,ad as W,B as Z,ae as ee}from"../../index-BINWO267.js";import{r as g,A as L,v as A,w as te,L as c,M as p,V as e,j as o,Q as b,F as S,a1 as F,u as E,P as N,X as x,Y as _,$ as se,a8 as M,a3 as R,a4 as T,a0 as J}from"./vue-chunks-DrvJJrR0.js";import{a as ae,_ as oe}from"./RadioButton-CY-OwTcO.js";import{R as ne}from"./dayjs-Y3LcNPRa.js";import{_ as le}from"./index-CcDf_mTI.js";import{S as ie,_ as ce}from"./index-Du5sGAGF.js";import{_ as de}from"./index-CwR6zc2s.js";import{_ as _e,a as re}from"./index-DPoWaq3q.js";import"./dayjs-Bv4VEw_C.js";import"./axios-Cm0UX6qg.js";import"./qs-QntUJHOZ.js";import"./crypto-js-BpV8n4kc.js";import"./FormItemContext-fqdpzKAO.js";import"./colors-CyWHJ-EZ.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./CheckOutlined-GnpRIqUc.js";import"./shallowequal-CfnxU2uU.js";import"./index-DFf7jiiy.js";import"./move--x7cRhrx.js";import"./slide-D2L77aHc.js";import"./index-BLqqhZtH.js";import"./DownOutlined-qDbJVP7w.js";import"./SearchOutlined-BvrHXi-S.js";import"./index-Bz-RZoOb.js";import"./LeftOutlined-BXBNAmWw.js";import"./RightOutlined-BiDlhszv.js";import"./responsiveObserve-s1gn2_rL.js";import"./index-C_RsEIkW.js";import"./index-DLSYftlN.js";import"./index-DOp9C4hb.js";import"./dropdown-DuQkgh_3.js";import"./Dropdown-DofCOG9v.js";import"./index-CXnkjJr5.js";import"./collapseMotion-DfZt1qrJ.js";import"./index-mZoGzn-s.js";import"./index-Cs81fhOJ.js";import"./Input-gc981REw.js";import"./inputProps-DHBdRt_-.js";import"./Search-BpbBI4OK.js";import"./TextArea-ywChf0Jv.js";import"./Password-Cgs71VlW.js";const ue={class:"zm-date"},pe={class:"date-btn"},me={class:"date-content"},ve={__name:"date",props:{datekey:{type:String,default:"1"}},emits:["dateChange"],setup(f,{emit:D}){const C=f,m=g(1),s=D;let $=L([{label:"今日",value:!0,key:2,start_time:y().startOf("day"),end_time:y().endOf("day")},{label:"昨日",value:!1,key:3,start_time:y().subtract(1,"day").startOf("day"),end_time:y().startOf("day").subtract(1,"millisecond")},{label:"近7日",value:!1,key:4,start_time:y().subtract(6,"day").startOf("day"),end_time:y().endOf("day").subtract(1,"millisecond")}]);const t=g(null),n=g(null),r=g([]),l=a=>a>=y().subtract(0,"day"),i=()=>{let a=m.value,u=null;$.forEach(d=>{d.key==a&&(u=d)}),u?(r.value=[u.start_time,u.end_time],t.value=u.start_time.format("YYYY-MM-DD"),n.value=u.end_time.format("YYYY-MM-DD")):(r.value=[],t.value=null,n.value=null),O()},Y=a=>{const u=y(a[0]).startOf("day");if(y(a[1]).endOf("day").diff(u,"days")>29)r.value[0]=a[0].startOf("day"),r.value[1]=u.add(29,"days").endOf("day"),t.value=r.value[0].format("YYYY-MM-DD"),n.value=r.value[1].format("YYYY-MM-DD"),X.error("最多只能选择30天");else{const k=y(a[0]).startOf("day").format("YYYY-MM-DD"),w=y(a[1]).endOf("day").format("YYYY-MM-DD");r.value=a,t.value=k,n.value=w}m.value=1,O()},O=()=>{s("dateChange",{start_date:t.value,end_date:n.value})};return A(()=>{m.value=parseInt(C.datekey),i()}),te(()=>C.datekey,(a,u)=>{m.value=parseInt(C.datekey.split("-")[0]),i()}),(a,u)=>{const d=ae,k=oe,w=ne;return c(),p("div",ue,[e("div",pe,[o(k,{value:m.value,"onUpdate:value":u[0]||(u[0]=h=>m.value=h),onChange:i},{default:b(()=>[(c(!0),p(S,null,F(E($),h=>(c(),N(d,{class:"date-btn-button",value:h.key,key:h.key},{default:b(()=>[x(_(h.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),e("div",me,[o(w,{value:r.value,"onUpdate:value":u[1]||(u[1]=h=>r.value=h),onChange:Y,format:"YYYY-MM-DD",disabledDate:l,allowClear:!1},null,8,["value"])])])}}},z=f=>(R("data-v-3949ccd6"),f=f(),T(),f),fe={class:"feedbacks-log-content"},he={class:"feedbacks-log-items"},be=z(()=>e("div",{class:"feedbacks-log-label"},[e("span",null,"问题 ")],-1)),ye={class:"feedbacks-log-item"},ke={class:"feedbacks-log-items"},ge=z(()=>e("div",{class:"feedbacks-log-label"},[e("span",null,"回答 ")],-1)),xe={class:"feedbacks-log-item"},Ce={class:"feedbacks-log-items"},$e=z(()=>e("div",{class:"feedbacks-log-label"},[e("span",null,"反馈 ")],-1)),Ye={class:"feedbacks-log-item"},we={key:0,class:"item-type"},De={key:1,class:"item-type"},Oe={class:"feedbacks-log-label"},Me={class:"feedbacks-log-item"},qe={class:"quotes-box"},ze={key:0,class:"document-content"},Se={key:1},Fe={class:"document-content"},Ie={class:"document-content"},je=["onClick"],Le={class:"feedbacks-log-items"},Ae=z(()=>e("div",{class:"feedbacks-log-label"},[e("span",null,"聊天模式 ")],-1)),Ne={class:"feedbacks-log-item"},Re={key:0},Te={key:1},Be={key:2},Qe={class:"feedbacks-log-items"},Ve=z(()=>e("div",{class:"feedbacks-log-label"},[e("span",null,"使用模型 ")],-1)),Ue={class:"feedbacks-log-item"},Ee={__name:"feedbacks-log-alert",setup(f,{expose:D}){const C=se(),m=g(!1),s=L({question:"",library:[],context_qa:[],cur_question:"",cur_answer:"",error:""}),$=()=>{m.value=!1},t=()=>{s.question="",s.library=[],s.context_qa=[],s.cur_question="",s.cur_answer="",s.error=""},n=l=>{t();for(const i in l)s[i]=l[i],i=="robot"&&(s[i]=JSON.parse(l[i])),i=="quotes"&&(s[i]=JSON.parse(l[i]));m.value=!0},r=l=>{C.push("/library/preview?id="+l.FileId)};return D({open:n}),(l,i)=>{const Y=j,O=le;return c(),N(O,{class:"feedbacks-log-alert",open:m.value,"onUpdate:open":i[0]||(i[0]=a=>m.value=a),title:"反馈详情",placement:"right",width:"746px",closable:!1},{extra:b(()=>[e("span",{class:"close-btn",onClick:$},[o(E(G))])]),default:b(()=>[e("div",fe,[e("div",he,[be,e("div",ye,[e("p",null,_(s.question),1)])]),e("div",ke,[ge,e("div",xe,[e("p",null,_(s.answer),1)])]),e("div",Ce,[$e,e("div",Ye,[s.type=="1"?(c(),p("div",we,[o(Y,{style:{"font-size":"16px",color:"#2475FC","margin-right":"4px"},name:"like-active"}),x("点赞")])):M("",!0),s.type=="2"?(c(),p("div",De,[o(Y,{style:{"font-size":"16px",color:"#2475FC","margin-right":"4px"},name:"dislike-active"}),x("点踩")])):M("",!0),e("p",null,_(s.content),1)])]),(c(!0),p(S,null,F(s.quotes,(a,u)=>(c(),p("div",{class:"feedbacks-log-items",key:a.FileId},[e("div",Oe,[e("span",null,"参考内容"+_(u+1),1)]),e("div",Me,[e("div",qe,[a.Type==1?(c(),p("div",ze,_(a.Content),1)):a.Type==2?(c(),p("div",Se,[e("div",Fe,"Q："+_(a.Question),1),e("div",Ie,"A："+_(a.Answer),1)])):M("",!0),e("div",{class:"quotes-title",onClick:d=>r(a)},[o(Y,{style:{"font-size":"16px",color:"#2475FC","margin-right":"4px"},name:"quotes"}),x(_(a.FileName),1)],8,je)])])]))),128)),e("div",Le,[Ae,e("div",Ne,[s.robot.chat_type=="1"?(c(),p("p",Re,"仅知识库")):s.robot.chat_type=="2"?(c(),p("p",Te,"直连")):s.robot.chat_type=="3"?(c(),p("p",Be,"混合")):M("",!0)])]),e("div",Qe,[Ve,e("div",Ue,[e("p",null,_(s.robot.use_model)+"("+_(s.robot.corp_name)+")",1)])])])]),_:1},8,["open"])}}},Je=I(Ee,[["__scopeId","data-v-3949ccd6"]]),B=f=>(R("data-v-e51b0e6b"),f=f(),T(),f),Pe={class:"team-members-pages"},He={class:"total"},Xe=B(()=>e("div",{class:"label total-label"},"共计：",-1)),Ge={class:"total-num"},Ke={class:"set-model"},We=B(()=>e("div",{class:"label set-model-label"},"类型：",-1)),Ze={class:"set-model-body"},et={class:"set-date"},tt=B(()=>e("div",{class:"label set-date-label"},[e("span",null,"日期：")],-1)),st={class:"set-date-body"},at={class:"set-reset"},ot={class:"list-box"},nt={class:"user-box"},lt={class:"name-info"},it={class:"user-name"},ct={class:"user-info"},dt={key:0,class:"item-type"},_t={key:1,class:"item-type"},rt={class:"item-content"},ut={class:"item-date"},pt={__name:"qa-feedback",setup(f){const D=g(null),C=J(),m=g("1"),s=C.query,$=g([{key:"all",id:"all",label:"全部类型",title:"全部类型"},{key:"1",id:"1",label:"点赞",title:"点赞"},{key:"2",id:"2",label:"点踩",title:"点踩"}]),t=L({robot_id:s.id,page:1,size:20,total:0,type:"all",start_date:"",end_date:""}),n=d=>{t.start_date=d.start_date,t.end_date=d.end_date,Y()},r=async d=>{const k=await K({id:d.id});D.value.open(k.data)},l=()=>{t.type="all",t.start_date="",t.end_date="",m.value="1-"+Math.random()},i=d=>{t.page=d.current,t.size=d.pageSize,a()},Y=()=>{t.page=1,a()},O=g([]),a=()=>{let d={robot_id:t.robot_id,page:t.page,size:t.size,start_date:t.start_date,end_date:t.end_date};t.type!="all"&&(d.type=t.type),W(d).then(k=>{let w=k.data.list;w.forEach(h=>{h.create_time=h.create_time>0?y(h.create_time*1e3).format("YYYY-MM-DD HH:mm"):"--",h.content=h.content?h.content:"--"}),O.value=w,t.total=+k.data.total})},u=d=>{t.type=d,Y()};return A(()=>{}),(d,k)=>{const w=ie,h=ce,Q=Z,V=de,q=_e,U=j,H=re;return c(),p("div",Pe,[o(V,{justify:"flex-end"},{default:b(()=>[e("div",He,[Xe,e("div",Ge,_(t.total)+"条",1)]),e("div",Ke,[We,e("div",Ze,[o(h,{value:t.type,"onUpdate:value":k[0]||(k[0]=v=>t.type=v),placeholder:"全部类型",onChange:u,style:{width:"130px"}},{default:b(()=>[(c(!0),p(S,null,F($.value,v=>(c(),N(w,{key:v.key,value:v.id},{default:b(()=>[e("span",null,_(v.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])]),e("div",et,[tt,e("div",st,[o(ve,{onDateChange:n,datekey:m.value},null,8,["datekey"])])]),e("div",at,[o(Q,{onClick:l},{default:b(()=>[x("重置")]),_:1})])]),_:1}),e("div",ot,[o(H,{"data-source":O.value,pagination:t.total>t.size?{current:t.page,total:t.total,pageSize:t.size,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"]}:!1,onChange:i},{default:b(()=>[o(q,{title:"问答","data-index":"question",width:"411px"},{default:b(({record:v})=>[e("div",nt,[e("div",lt,[e("div",it,_(v.question),1),e("div",ct,_(v.answer),1)])])]),_:1}),o(q,{title:"回答反馈","data-index":"type",width:"160px"},{default:b(({record:v})=>[v.type=="1"?(c(),p("div",dt,[o(U,{style:{"font-size":"24px",color:"#8C8C8C"},name:"like"}),x("点赞")])):M("",!0),v.type=="2"?(c(),p("div",_t,[o(U,{style:{"font-size":"24px",color:"#8C8C8C"},name:"dislike"}),x("点踩")])):M("",!0)]),_:1}),o(q,{title:"反馈内容","data-index":"content",width:"264px"},{default:b(({record:v})=>[e("div",rt,_(v.content),1)]),_:1}),o(q,{title:"时间","data-index":"create_time",width:"200px"},{default:b(({record:v})=>[e("div",ut,_(v.create_time),1)]),_:1}),o(q,{title:"操作","data-index":"action",width:"88px"},{default:b(({record:v})=>[o(V,{gap:16,class:"action-box"},{default:b(()=>[o(Q,{type:"link",onClick:$t=>r(v)},{default:b(()=>[x("查看详情")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1})]),_:1},8,["data-source","pagination"])]),o(Je,{ref_key:"feedbacksLogAlertRef",ref:D},null,512)])}}},mt=I(pt,[["__scopeId","data-v-e51b0e6b"]]),P=f=>(R("data-v-80174709"),f=f(),T(),f),vt={class:"user-model-page"},ft=P(()=>e("div",{class:"page-title"},"数据概览",-1)),ht={class:"overview-box"},bt={class:"item-info"},yt={class:"item-icon-content item-like"},kt={class:"item-icon-content item-dislike"},gt=P(()=>e("div",{class:"page-title"},"反馈记录",-1)),xt={class:"list-wrapper"},Ct={__name:"index",setup(f){const C=J().query,m=g([]),s=t=>{let n={title:"",id:0};switch(t){case"today_stats":n.title="今日",n.id=1;break;case"yesterday_stats":n.title="昨日",n.id=2;break;case"week_stats":n.title="近7日",n.id=3;break;case"total_stats":n.title="总计",n.id=4;break}return n},$=()=>{let t={robot_id:C.id};ee(t).then(n=>{const r=[];for(const l in n.data){const i=n.data[l];r.push({key:l,dislike:i.dislike,like_count:i.like_count,titleObj:s(l)})}m.value=r.sort((l,i)=>l.titleObj.id-i.titleObj.id)})};return A(()=>{$()}),(t,n)=>{const r=j;return c(),p("div",vt,[ft,e("div",ht,[(c(!0),p(S,null,F(m.value,l=>(c(),p("div",{class:"item-box",key:l.titleObj.id},[e("div",bt,_(l.titleObj.title),1),e("div",yt,[o(r,{style:{"font-size":"24px",color:"#8C8C8C"},name:"like"}),x(_(l.like_count),1)]),e("div",kt,[o(r,{style:{"font-size":"24px",color:"#8C8C8C"},name:"dislike"}),x(_(l.dislike),1)])]))),128))]),gt,e("div",xt,[o(mt)])])}}},us=I(Ct,[["__scopeId","data-v-80174709"]]);export{us as default};
