import{r as f,A as te,v as Q,w as W,L as c,M as d,V as e,j as v,Q as $,F as R,a1 as V,u as F,P as se,X as M,Y as I,ag as oe,a3 as xe,E as G,a4 as q,a5 as z,a9 as O,y as ee,$ as De,a0 as we,a7 as Ce,B as Ee}from"./vue-chunks-9-6Doc_H.js";import{m as x,e as Ie,_ as j,B as Le,M as He}from"../../index-YaKOZGEl.js";import{a as Me,_ as Be}from"./RadioButton-acDMr2AG.js";import{R as Oe}from"./dayjs-BjYjfezm.js";import{_ as ae}from"./empty-DkpCLaix.js";import{_ as Re,u as Ae}from"./chat-Cr9NUR9O.js";import{S as Ue}from"./index-Dhh3MdDP.js";import{u as Pe}from"./robot-D-rF4DKe.js";import{c as Ve}from"./index-BCjK0Z0o.js";import{_ as qe}from"./index-ySUN2NCD.js";import{S as ze,_ as je}from"./index-D7s-BX8u.js";import{_ as Ne}from"./Search-tuNVBayS.js";import{_ as Ye}from"./index-CKe28bqM.js";import"./dayjs-Dq7XQf5A.js";import"./axios-Cm0UX6qg.js";import"./qs-tejSZiZr.js";import"./crypto-js-YZwHLGT_.js";import"./FormItemContext-DsDOunns.js";import"./colors-CSZxJ6kX.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./CheckOutlined-o_otxabW.js";import"./shallowequal-DMLHqxCH.js";import"./index-CQ0WrsSk.js";import"./move-CdnRcwUD.js";import"./slide-LBxkhKjR.js";import"./index-D2gbm7WA.js";import"./index-BN0N4vIU.js";import"./index-BaG9nSYV.js";import"./DownOutlined-C8EBRx-y.js";import"./SearchOutlined-DXxk9XC7.js";import"./Input-BJx7ZRPO.js";import"./inputProps-Dm5FUC2d.js";const Fe={class:"zm-date"},Ge={class:"date-btn"},Qe={class:"date-content"},We={__name:"date",props:{datekey:{type:String,default:"1"}},emits:["dateChange"],setup(r,{emit:C}){const D=r,i=f(1),u=C;let S=te([{label:"今日",value:!0,key:2,start_time:x().startOf("day"),end_time:x().endOf("day")},{label:"昨日",value:!1,key:3,start_time:x().subtract(1,"day").startOf("day"),end_time:x().startOf("day").subtract(1,"millisecond")},{label:"近7日",value:!1,key:4,start_time:x().subtract(6,"day").startOf("day"),end_time:x().endOf("day").subtract(1,"millisecond")}]);const p=f(null),a=f(null),s=f([]),h=m=>m>=x().subtract(0,"day"),E=()=>{let m=i.value,t=null;S.forEach(g=>{g.key==m&&(t=g)}),t&&(s.value=[t.start_time,t.end_time],p.value=t.start_time.unix(),a.value=t.end_time.unix()),H()},L=m=>{const t=x(m[0]).startOf("day");if(x(m[1]).endOf("day").diff(t,"days")>29)s.value[0]=m[0].startOf("day"),s.value[1]=t.add(29,"days").endOf("day"),p.value=s.value[0].unix(),a.value=s.value[1].unix(),Ie.error("最多只能选择30天");else{const b=x(m[0]).startOf("day").unix(),l=x(m[1]).endOf("day").unix();s.value=m,p.value=b,a.value=l}i.value=1,H()},H=()=>{u("dateChange",{start_time:p.value,end_time:a.value})};return Q(()=>{i.value=parseInt(D.datekey),E()}),W(()=>D.datekey,(m,t)=>{i.value=parseInt(D.datekey.split("-")[0]),E()}),(m,t)=>{const g=Me,b=Be,l=Oe;return c(),d("div",Fe,[e("div",Ge,[v(b,{value:i.value,"onUpdate:value":t[0]||(t[0]=_=>i.value=_),onChange:E},{default:$(()=>[(c(!0),d(R,null,V(F(S),_=>(c(),se(g,{class:"date-btn-button",value:_.key,key:_.key},{default:$(()=>[M(I(_.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),e("div",Qe,[v(l,{value:s.value,"onUpdate:value":t[1]||(t[1]=_=>s.value=_),onChange:L,format:"YYYY-MM-DD",disabledDate:h,allowClear:!1},null,8,["value"])])])}}},X=r=>(q("data-v-5eff2794"),r=r(),z(),r),Xe={key:0,class:"empty-box"},Je=X(()=>e("img",{src:ae,alt:""},null,-1)),Ke=X(()=>e("div",{class:"title"},"暂无结果，请重试",-1)),Ze=[Je,Ke],et=["onClick"],tt={class:"user-item-left"},st=["src"],ot={class:"user-item-right"},at={class:"user-name-box"},lt={class:"user-name"},nt={class:"user-timer"},rt={class:"user-info"},ct={class:"user-source-box"},it=X(()=>e("div",{class:"user-source-title"},"来自：",-1)),ut={class:"user-source-content"},dt={__name:"user",props:{userList:{type:Array,default:[]}},emits:["userClick","userScroll","userScrollStart","userScrollEnd"],setup(r,{emit:C}){const D=f(null),i=r,u=C,S=f([]),p=f({}),a=t=>{p.value=t,u("userClick",t)},s={scrollTop:0,scrollHeight:0,clientHeight:0,scrollStartDiff:60,scrollEndDiff:60,scrollDirection:""};let h=null;function E(t){h&&(clearTimeout(h),h=null),h=setTimeout(()=>{s.scrollTop-t.target.scrollTop>0&&(s.scrollDirection="up"),s.scrollTop-t.target.scrollTop<0&&(s.scrollDirection="down"),s.scrollTop=t.target.scrollTop,s.scrollHeight=t.target.scrollHeight,s.clientHeight=t.target.clientHeight,u("userScroll",{...s}),Math.abs(s.scrollTop)<=s.scrollStartDiff+100&&s.scrollDirection==="up"&&L(),Math.abs(s.scrollHeight-s.scrollTop-s.clientHeight)<=s.scrollEndDiff&&s.scrollDirection==="down"&&H()},50)}function L(){i.userList.length!=0&&u("userScrollStart",{msg:i.userList[0]})}function H(){i.userList.length!=0&&u("userScrollEnd",{msg:i.userList[i.userList.length-1]})}W(()=>i.userList,t=>{S.value=t,S.value.length>0&&S.value.length<=20&&(a(S.value[0]),p.value=S.value[0])},{immediate:!0});const m=t=>{let g;switch(t){case"yun_h5":g="WebAPP";break;case"yun_pc":g="嵌入网站";break}return g};return Q(()=>{S.value=i.userList}),(t,g)=>{const b=oe("ftime");return c(),d("div",{class:"user-content",ref_key:"scrollUserBoxRef",ref:D,onScroll:E},[S.value.length===0?(c(),d("div",Xe,Ze)):(c(!0),d(R,{key:1},V(S.value,l=>(c(),d("div",{class:xe(["user-item",{active:l.openid==p.value.openid}]),onClick:_=>a(l),key:l.session_id},[e("div",tt,[e("img",{class:"user-img",src:l.avatar,alt:""},null,8,st)]),e("div",ot,[e("div",at,[e("div",lt,I(l.name),1),G((c(),d("div",nt,[M(I(l.last_chat_time),1)])),[[b,"MM-DD HH:mm"]])]),e("div",rt,I(l.last_chat_message),1),e("div",ct,[it,e("div",ut,I(m(l.app_type)),1)])])],10,et))),128))],544)}}},_t=j(dt,[["__scopeId","data-v-5eff2794"]]),le=r=>(q("data-v-6cb95dd7"),r=r(),z(),r),pt={class:"message-box"},mt={class:"message-top-box"},vt={class:"message-top-title"},ft={key:0,class:"message-top-source"},gt={class:"message-list"},ht={key:0,class:"empty-box"},yt=le(()=>e("img",{src:ae,alt:""},null,-1)),St=le(()=>e("div",{class:"title"},"暂无结果，请重试",-1)),bt=[yt,St],Tt=["id"],kt={class:"itme-right"},$t={class:"item-body"},xt={class:"message-content"},Dt={class:"user-avatar-box"},wt=["src"],Ct=["id"],Et={class:"itme-left"},It=["src"],Lt={class:"itme-right"},Ht={class:"item-body"},Mt={key:0,class:"message-content"},Bt=["innerHTML"],Ot={key:2,class:"message-content"},Rt=["src"],At={key:2,class:"loading-box"},Ut={__name:"message-list",props:{messages:{type:Array,default:()=>[]},robotInfo:{type:Object,default:()=>{}},isEmpty:{type:Boolean,default:()=>!1},sessionSource:{type:String,default:()=>null},channelItem:{type:Array,default:()=>[]}},emits:["scroll","scrollStart","scrollEnd"],setup(r,{expose:C,emit:D}){const i=D,u=r,S=f(!1),p=f(null),a={scrollTop:0,scrollHeight:0,clientHeight:0,scrollStartDiff:60,scrollEndDiff:60,scrollDirection:""};let s=null,h=!1;const E=l=>{let _;for(let o=0;o<u.channelItem.length;o++){const T=u.channelItem[o];T.app_type===l&&(_=T.app_name)}return _};function L(l){h||(s&&(clearTimeout(s),s=null),s=setTimeout(()=>{a.scrollTop-l.target.scrollTop>0&&(a.scrollDirection="up"),a.scrollTop-l.target.scrollTop<0&&(a.scrollDirection="down"),a.scrollTop=l.target.scrollTop,a.scrollHeight=l.target.scrollHeight,a.clientHeight=l.target.clientHeight,i("scroll",{...a}),Math.abs(a.scrollTop)<=a.scrollStartDiff&&a.scrollDirection==="up"&&H(),Math.abs(a.scrollHeight-a.scrollTop-a.clientHeight)<=a.scrollEndDiff&&a.scrollDirection==="down"&&m()},100))}function H(){u.messages.length!=0&&i("scrollStart",{msg:u.messages[0]})}function m(){u.messages.length!=0&&i("scrollEnd",{msg:u.messages[u.messages.length-1]})}const t=()=>{p.value&&ee(()=>{h=!0,p.value.scrollTop=p.value.scrollHeight+1,setTimeout(()=>{a.scrollTop=p.value.scrollTop,h=!1},50)})};function g(l,_){ee(()=>{h=!0,_||(_="top");let o=p.value,T=document.querySelector("#msg-"+l);T&&(_=="top"?o.scrollTop=T.offsetTop:o.scrollTop=T.offsetTop-o.clientHeight+T.clientHeight),setTimeout(()=>{a.scrollTop=p.value.scrollTop,h=!1},50)})}function b(){a.scrollTop=0,a.scrollDirection=""}return C({scrollToBottom:t,scrollToMessage:g,resetScroll:b}),(l,_)=>{const o=Ue,T=oe("viewer");return c(),d("div",pt,[e("div",mt,[e("div",vt,I(u.robotInfo.robot_name),1),r.sessionSource?(c(),d("div",ft,"("+I(E(r.sessionSource))+")",1)):O("",!0)]),e("div",{class:"message-list-wrapper",ref_key:"scrollBoxRef",ref:p,onScroll:L},[e("div",gt,[u.isEmpty||!u.messages?(c(),d("div",ht,bt)):(c(!0),d(R,{key:1},V(u.messages,y=>(c(),d(R,{key:y.uid},[y.is_customer==1?(c(),d("div",{key:0,class:"message-item user-message",id:"msg-"+y.uid},[e("div",kt,[e("div",$t,[e("div",xt,I(y.content),1)])]),e("div",Dt,[e("img",{class:"user-avatar",src:y.avatar},null,8,wt)])],8,Tt)):(c(),d("div",{key:1,class:"message-item robot-message",id:"msg-"+y.uid},[e("div",Et,[v(o,{size:"small",spinning:y.loading},{default:$(()=>[e("img",{class:"robot-avatar",src:y.robot_avatar},null,8,It)]),_:2},1032,["spinning"])]),e("div",Lt,[e("div",Ht,[y.msg_type==1?G((c(),d("div",Mt,[v(Re,{content:y.content},null,8,["content"])])),[[T]]):O("",!0),y.msg_type==2?(c(),d("div",{key:1,class:"message-content",innerHTML:y.menu_json.content},null,8,Bt)):O("",!0),y.msg_type==3?(c(),d("div",Ot,[G(e("img",{class:"msg-img",src:y.content,alt:""},null,8,Rt),[[T]])])):O("",!0)])])],8,Ct))],64))),128)),S.value?(c(),d("div",At,[v(o)])):O("",!0)])],544)])}}},Pt=j(Ut,[["__scopeId","data-v-6cb95dd7"]]),ne=r=>(q("data-v-9f69c2d1"),r=r(),z(),r),Vt={class:"team-members-pages"},qt={class:"set-model"},zt=ne(()=>e("div",{class:"label set-model-label"},"渠道：",-1)),jt={class:"set-model-body"},Nt={class:"set-date"},Yt=ne(()=>e("div",{class:"label set-date-label"},[e("span",null,"日期：")],-1)),Ft={class:"set-date-body"},Gt={class:"set-name"},Qt={class:"set-reset"},Wt={class:"list-box"},Xt={class:"user-box"},Jt={class:"records-box"},Kt={__name:"session-record",setup(r){const C=f(!1),D=De(),i=we(),u=i.query,S=Pe(),{robotInfo:p}=S,a=Ae(),{messageList:s}=Ce(a);let h=!0;const{createMsg:E,onGetChatMessage:L,getRecordList:H,getChannelList:m}=a,t=f(null),g=f([]),b=f([]),l=f(""),_=f("1"),o=te({robot_id:u.id,app_type:"all",app_id:"",start_time:"",end_time:"",name:"",page:1,size:20}),T=f(!1),y=n=>{o.start_time=n.start_time,o.end_time=n.end_time,Y()},re=()=>{o.app_type="all",o.name="",o.page=1,_.value="1-"+Math.random()},A=f(!1),N=f(!1),ce=async()=>{let n=J();N.value=!0,await Ve(n),A.value=!0,N.value=!1},ie=()=>{D.push({path:"/robot/config/export-record",query:u})},Y=()=>{o.page=1,K()},ue=n=>{o.app_type=n,Y()},de=()=>{},_e=n=>{l.value=n.app_type,ye(n)},pe=async()=>{},me=()=>{T.value&&(o.page++,K())},ve=async()=>{h=!1;let n=s.value[0].uid;await L()&&ge(n)},fe=()=>{t.value&&h&&t.value.scrollToBottom()},ge=n=>{t.value&&t.value.scrollToMessage(n)},he=()=>{t.value&&t.value.resetScroll()};let U=null;const ye=async n=>{h=!0;let B={robot_key:(i.query||{}).robot_key,avatar:n.avatar,name:n.name,nickname:n.name,is_background:1,openid:n.openid};he(),await E(B),U&&(clearTimeout(U),U=null),U=setTimeout(async()=>{await L()&&fe()},100)},Se=async()=>{const n=await m();g.value=[{app_type:"all",app_name:"全部渠道"},...n.data]},J=()=>{let n={robot_id:o.robot_id,start_time:o.start_time,end_time:o.end_time,name:o.name,page:o.page,size:o.size};return o.app_type!=="all"&&(n.app_type=o.app_type),n},K=async()=>{let n=J(),k=await H(n),B=k.data.list||[];o.page==1&&(b.value=[]),b.value=[...b.value,...B],C.value=b.value.length==0,T.value=k.data.has_more};return W(()=>s.value,()=>{}),Q(async()=>{Se()}),Ee(()=>{}),(n,k)=>{const B=ze,Z=je,be=Ne,P=Le,Te=Ye,ke=qe,$e=He;return c(),d("div",Vt,[v(Te,{justify:"flex-start",class:"screen-box"},{default:$(()=>[e("div",qt,[zt,e("div",jt,[v(Z,{value:o.app_type,"onUpdate:value":k[0]||(k[0]=w=>o.app_type=w),placeholder:"全部渠道",onChange:ue,style:{width:"200px"}},{default:$(()=>[(c(!0),d(R,null,V(g.value,w=>(c(),se(B,{key:w.app_type,value:w.app_type},{default:$(()=>[e("span",null,I(w.app_name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])]),e("div",Nt,[Yt,e("div",Ft,[v(We,{onDateChange:y,datekey:_.value},null,8,["datekey"])])]),e("div",Gt,[v(be,{value:o.name,"onUpdate:value":k[1]||(k[1]=w=>o.name=w),placeholder:"请输入用户名称搜索",style:{width:"200px"},onSearch:Y},null,8,["value"])]),e("div",Qt,[v(P,{onClick:re},{default:$(()=>[M("重置")]),_:1}),v(P,{onClick:ce,loading:N.value},{default:$(()=>[M("导出")]),_:1},8,["loading"])])]),_:1}),e("div",Wt,[e("div",Xt,[v(_t,{userList:b.value,onUserScrollStart:pe,onUserScrollEnd:me,onUserClick:_e},null,8,["userList"])]),e("div",Jt,[v(Pt,{ref_key:"messageListRef",ref:t,isEmpty:C.value,messages:F(s),robotInfo:F(p),channelItem:g.value,sessionSource:l.value,onScrollStart:ve,onScrollEnd:de},null,8,["isEmpty","messages","robotInfo","channelItem","sessionSource"])])]),v($e,{open:A.value,"onUpdate:open":k[3]||(k[3]=w=>A.value=w),title:null,footer:null,width:640},{default:$(()=>[v(ke,{status:"success",title:"导出任务创建成功","sub-title":"系统会在后台导出。导出数据量越大，耗时越久。您可以稍后点击导出记录查看并下载导出的文件。"},{extra:$(()=>[v(P,{style:{"margin-right":"16px"},onClick:k[2]||(k[2]=w=>A.value=!1)},{default:$(()=>[M("知道了")]),_:1}),v(P,{onClick:ie,type:"primary"},{default:$(()=>[M("去下载")]),_:1})]),_:1})]),_:1},8,["open"])])}}},Zt=j(Kt,[["__scopeId","data-v-9f69c2d1"]]),es=r=>(q("data-v-705cfb21"),r=r(),z(),r),ts={class:"user-model-page"},ss=es(()=>e("div",{class:"page-title"},"会话记录",-1)),os={class:"list-wrapper"},as={__name:"index",setup(r){return(C,D)=>(c(),d("div",ts,[ss,e("div",os,[v(Zt)])]))}},As=j(as,[["__scopeId","data-v-705cfb21"]]);export{As as default};
