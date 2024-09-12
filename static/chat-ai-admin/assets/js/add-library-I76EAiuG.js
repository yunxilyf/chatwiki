import{_ as le,L as be,e as J,M as xe,ax as K,N as ke,ay as we,O as qe,c as Ne,B as Ce}from"../../index-Bc8KTUFY.js";import{r as g,w as Ae,L as d,M as v,a8 as E,j as l,Q as n,V as c,P as A,u as q,a3 as te,a4 as ne,$ as Se,b as Oe,A as ae,v as Ue,U as S,F as P,a1 as M,a2 as B,Y as w,E as V,G as z,X as k,a7 as Ie}from"./vue-chunks-BakLQ6XW.js";import{U as Le}from"./upload-input-WMlUZwSw.js";import{c as Fe}from"./index-Doj40Wkz.js";import{c as Pe}from"./index-BSuRh2vJ.js";import{F as W,_ as Me}from"./index-BWkNam7s.js";import{P as Ee}from"./PlusOutlined-DiTTFoUm.js";import{_ as je}from"./index-57YHACE2.js";import{t as oe}from"./validate-8MtiUsxW.js";import"./index-1uZLR3Pf.js";import{I as De}from"./Input-BK3q4YWU.js";import"./index-DbaTKdvb.js";import{R as Te,_ as $e}from"./RadioButton-pGk0VwL5.js";import{_ as Re}from"./TextArea-BhzicizE.js";import{S as Be,_ as Ve,a as ze}from"./index-Z5a0faaY.js";import{_ as Je}from"./index-Dj1z1bv1.js";import"./dayjs--xR4C_bb.js";import"./axios-Cm0UX6qg.js";import"./qs-nPXSgJGS.js";import"./crypto-js-KGFlroD9.js";import"./colors-CICyRGaE.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./responsiveObserve-CMJawdf-.js";import"./collapseMotion-0mJ0KE5h.js";import"./index-BROQp6fJ.js";import"./QuestionCircleOutlined-C838eyOB.js";import"./FormItemContext-YfSm8opW.js";import"./Password-CbUwh_lR.js";import"./inputProps-FEkMEdZt.js";import"./CheckOutlined-Ms9KLnkZ.js";import"./useRefs-CQ-aQ9X3.js";import"./index-DHA8PT5X.js";import"./Search-ah3Lvub8.js";import"./SearchOutlined-V-OxLGfe.js";import"./index-rw2zoXGZ.js";import"./slide-CnwuM7um.js";import"./DownOutlined-BKEHkEGo.js";import"./move-d4e_yxKL.js";const Ge=y=>(te("data-v-c59d7bc3"),y=y(),ne(),y),Qe={class:"avatar-uploader"},Xe=["src"],Ye=Ge(()=>c("div",{class:"ant-upload-text"},"上传照片",-1)),He=["src"],Ke={__name:"avatar-input",props:{value:{type:String,default:""}},emits:["update:value","change"],setup(y,{emit:G}){function j(s){return new Promise((O,U)=>{const x=new FileReader;x.readAsDataURL(s),x.onload=()=>O(x.result),x.onerror=h=>U(h)})}const I=G,D=y,N=g([]),T=g(!1),L=g("");Ae(()=>D.value,s=>{L.value=s},{immediate:!0});const Q=W.useInjectFormItemContext(),X=()=>{let s={imageUrl:L.value,file:N.value[0].originFileObj};I("change",s),I("update:value",s.imageUrl),Q.onFieldChange()},Y=s=>s.type==="image/jpeg"||s.type==="image/png"?s.size/1024<100?(N.value=[s],j(s).then(x=>{L.value=x,T.value=!1,X()}),!1):(J.error("知识库封面图片大小不能超过100kb"),!1):(J.error("知识库封面只支持JPG、PNG格式的图片"),!1),C=g(!1),u=g(""),b=g(""),e=()=>{C.value=!1,b.value=""},$=async s=>{!s.url&&!s.preview&&(s.preview=await j(s.originFileObj)),u.value=s.url||s.preview,C.value=!0,b.value=s.name||s.url.substring(s.url.lastIndexOf("/")+1)};return(s,O)=>{const U=je,x=xe;return d(),v("div",Qe,[y.value?(d(),v("img",{key:0,class:"avatar",src:y.value,alt:"avatar"},null,8,Xe)):E("",!0),l(U,{class:"upload-upload","file-list":N.value,"onUpdate:fileList":O[0]||(O[0]=h=>N.value=h),"list-type":"picture-card","show-upload-list":!1,"before-upload":Y,accept:".jpg,.png,.jpeg",onPreview:$},{default:n(()=>[c("div",null,[T.value?(d(),A(q(be),{key:0})):(d(),A(q(Ee),{key:1})),Ye])]),_:1},8,["file-list"]),l(x,{open:C.value,title:b.value,footer:null,onCancel:e},{default:n(()=>[c("img",{alt:"example",style:{width:"100%"},src:u.value},null,8,He)]),_:1},8,["open","title"])])}}},We=le(Ke,[["__scopeId","data-v-c59d7bc3"]]),Ze=y=>(te("data-v-d817fc8b"),y=y(),ne(),y),ea={class:"add-library-page"},aa={class:"form-box"},oa=Ze(()=>c("div",{class:"form-item-tip"},"请上传知识库封面，建议尺寸为100*100px.大小不超过100kb",-1)),la={class:"upload-document-type-box"},ta=["onClick"],na={class:"right-block"},ia={class:"title-block"},ra={class:"title-text"},sa={class:"desc"},da={class:"upload-document-type-box"},ca=["onClick"],_a={class:"right-block"},ua={class:"title-block"},ma={class:"title-text"},pa={class:"desc"},fa={class:"card-box"},va=["onClick"],ga=["src"],ya={key:0},ha={key:1},ba={__name:"add-library",setup(y){const{getStorage:G,setStorage:j,removeStorage:I}=we("localStorage");J.config({duration:2});const D=Se(),N=["azure","ollama","xinference","openaiAgent"],T=["azure"],L=g([{iconName:"high",iconNameActive:"high-active",title:"高质量",value:1,is_offline:!1,desc:"使用在线的嵌入模型，在召回时具有更高的准确度，但需要花费token"},{iconName:"economic",iconNameActive:"economic-active",title:"经济",value:2,is_offline:!0,desc:"使用离线的向量模型，较在线模型准确度稍低，但是不需要消耗token"}]),Q=g([{iconName:"doc-icon",iconNameActive:"doc-icon-active",title:"本地文档",value:1,desc:"上传本地 text/pdf/doc/docx/xlsx 等格式文件"},{iconName:"link-icon",iconNameActive:"link-icon-active",title:"在线数据",value:2,desc:"获取在线网页内容"},{iconName:"cu-doc-icon",iconNameActive:"cu-doc-active",title:"自定义文档",value:3,desc:"自定义一个空文档，手动添加或编辑内容"}]),X=g([{iconName:"file-search",iconNameActive:"file-search",title:"问题与答案一起生成索引",value:1,desc:"回答用户提问时，将用户提问与导入的问题和答案一起对比相似度，根据相似度高的问题和答案回复"},{iconName:"comment-search",iconNameActive:"comment-search",title:"仅对问题生成索引",value:2,desc:"回答用户提问时，将用户提问与导入的问题一起对比相似度，再根据相似度高的问题和对应的答案来回复"}]),Y=W.useForm,C=g(!1),u=Oe(()=>G("lastEmbeddedModel")||{}),b=g(u.value.isActive?u.value.isActive:2),e=ae({library_name:"",library_intro:"",use_model:u.value.use_model?u.value.use_model:void 0,model_config_id:u.value.model_config_id?u.value.model_config_id:"",library_files:void 0,avatar:K,robot_avatar_url:K,is_offline:Object.prototype.hasOwnProperty.call(u.value,"is_offline")?u.value.is_offline:!1,urls:"",doc_type:1,file_name:"",is_qa_doc:0,qa_index_type:1,doc_auto_renew_frequency:1}),$=g(""),U=ae({library_name:[{required:!0,message:"请输入库名称",trigger:"change"}],library_intro:[{required:!0,message:"请输入库简介",trigger:"change"}],use_model:[{required:!0,message:"请选择嵌入模型",trigger:"change"}],library_files:[{required:!0,message:"请选择文件",trigger:"change",validator:(o,t)=>t&&t.length>0||e.doc_type!=1?Promise.resolve():Promise.reject(new Error("请上传文件"))}],urls:[{required:!0,validator:(o,t)=>e.doc_type!=2?Promise.resolve():oe(t)===!1?Promise.reject(new Error("网页地址不合法")):Promise.resolve()}],file_name:[{required:!0,validator:(o,t)=>e.doc_type!=3||t?Promise.resolve():Promise.reject(new Error("请输入文档名称"))}]}),{validate:x,validateInfos:h}=Y(e,U),ie=o=>{e.library_files=o},re=(o,t)=>{const _=t.current_obj;e.use_model=N.indexOf(_.model_define)>-1&&_.deployment_name?_.deployment_name:_.name,$.value=_.model_define,e.model_config_id=_.id||t.model_config_id},se=o=>{e.avatar=o.file},de=o=>{e.is_offline=o.is_offline,b.value=o.value,e.use_model=void 0,H(o.is_offline)},ce=o=>{e.doc_type=o},_e=o=>{e.qa_index_type=o},ue=()=>{D.back()},me=()=>{x().then(()=>{pe()}).catch(o=>{})},pe=()=>{let o=new FormData,t=JSON.parse(JSON.stringify(e));T.indexOf($.value)>-1&&(t.use_model="默认"),o.append("library_name",e.library_name),o.append("library_intro",e.library_intro),o.append("use_model",t.use_model),o.append("model_config_id",e.model_config_id),o.append("avatar",e.avatar||K),o.append("is_offline",e.is_offline),o.append("urls",JSON.stringify(oe(e.urls))),o.append("doc_type",e.doc_type),o.append("file_name",e.file_name),o.append("is_qa_doc",e.is_qa_doc),o.append("qa_index_type",e.qa_index_type),o.append("doc_auto_renew_frequency",e.doc_auto_renew_frequency),j("lastEmbeddedModel",{model_config_id:e.model_config_id,is_offline:e.is_offline,use_model:e.use_model,isActive:b.value});let _=!1;e.doc_type==1&&e.library_files.forEach(i=>{(i.name.includes(".xlsx")||i.name.includes(".csv"))&&(_=!0),o.append("library_files",i)}),C.value=!0,Fe(o).then(i=>{J.success("创建成功");let m="/library/details/knowledge-document",r={id:i.data.id};_&&(m="/library/document-segmentation",r={document_id:i.data.file_ids[0]}),e.doc_type==3&&(m="/library/preview",r={id:i.data.file_ids[0]}),D.replace({path:m,query:r}),C.value=!1}).catch(()=>{C.value=!1})},F=g([]);function fe(o,t,_){const i=new Set(o.map(m=>m.model_define));return t.filter(m=>{let r=m[_];i.has(r)&&o.filter(p=>{if(p.model_define==r)return p.children=qe(p.children,m.children),!1})}),o}const H=o=>{Pe({model_type:"TEXT EMBEDDING",is_offline:o}).then(t=>{let _=t.data||[],i=[],m=!1;!_.length&&u.value.model_config_id&&(e.use_model=void 0,I("lastEmbeddedModel")),F.value=_.map(r=>{i=[];for(let p=0;p<r.model_info.vector_model_list.length;p++){const R=r.model_info.vector_model_list[p];i.push({name:R,deployment_name:r.model_config.deployment_name,id:r.model_config.id,model_define:r.model_info.model_define})}return r.model_config.id==u.value.model_config_id&&(m=!0),{id:r.model_config.id,name:r.model_info.model_name,model_define:r.model_info.model_define,icon:r.model_info.model_icon_url,children:i,deployment_name:r.model_config.deployment_name}}),m||(e.use_model=void 0,I("lastEmbeddedModel")),F.value=fe(ke(F.value,"model_define"),F.value,"model_define")})};return Ue(()=>{Object.prototype.hasOwnProperty.call(u.value,"is_offline")?H(u.value.is_offline):H(!0)}),(o,t)=>{const _=De,i=Me,m=Re,r=Ne,p=Be,R=Ve,Z=Te,ve=$e,ge=Je,ye=ze,ee=Ce,he=W;return d(),v("div",ea,[c("div",aa,[l(he,{"label-col":{span:5}},{default:n(()=>[l(i,S({ref:"name",label:"知识库名称"},q(h).library_name),{default:n(()=>[l(_,{value:e.library_name,"onUpdate:value":t[0]||(t[0]=a=>e.library_name=a),placeholder:"请输入知识库名称，最多20个字"},null,8,["value"])]),_:1},16),l(i,S({label:"知识库简介"},q(h).library_intro),{default:n(()=>[l(m,{value:e.library_intro,"onUpdate:value":t[1]||(t[1]=a=>e.library_intro=a),placeholder:"请输入知识库介绍"},null,8,["value"])]),_:1},16),l(i,S({ref:"name",label:"知识库封面"},q(h).robot_avatar_url),{default:n(()=>[l(We,{value:e.robot_avatar_url,"onUpdate:value":t[2]||(t[2]=a=>e.robot_avatar_url=a),onChange:se},null,8,["value"]),oa]),_:1},16),l(i,{label:"导入文档类型",required:""},{default:n(()=>[c("div",la,[(d(!0),v(P,null,M(Q.value,a=>(d(),v("div",{class:B(["type-item",{active:e.doc_type==a.value}]),key:a.value,onClick:f=>ce(a.value)},[c("div",na,[c("div",ia,[l(r,{name:e.doc_type==a.value?a.iconNameActive:a.iconName},null,8,["name"]),c("div",ra,w(a.title),1)]),c("div",sa,w(a.desc),1)]),e.doc_type==a.value?(d(),A(r,{key:0,class:"check-arrow",name:"check-arrow-filled",style:{"font-size":"24px",color:"#fff"}})):E("",!0)],10,ta))),128))])]),_:1}),V(l(i,S({ref:"name",label:"知识库文档"},q(h).library_files),{default:n(()=>[l(Le,{onChange:ie})]),_:1},16),[[z,e.doc_type==1]]),V(l(i,S({ref:"urls",label:"网页链接"},q(h).urls),{default:n(()=>[l(m,{style:{height:"120px"},value:e.urls,"onUpdate:value":t[3]||(t[3]=a=>e.urls=a),placeholder:"请输入网页链接,形式：一行标题一行网页链接"},null,8,["value"])]),_:1},16),[[z,e.doc_type==2]]),V(l(i,{ref:"doc_auto_renew_frequency",label:"更新频率",required:""},{default:n(()=>[l(R,{value:e.doc_auto_renew_frequency,"onUpdate:value":t[4]||(t[4]=a=>e.doc_auto_renew_frequency=a),style:{width:"100%"}},{default:n(()=>[l(p,{value:1},{default:n(()=>[k("不自动更新")]),_:1}),l(p,{value:2},{default:n(()=>[k("每天")]),_:1}),l(p,{value:3},{default:n(()=>[k("每3天")]),_:1}),l(p,{value:4},{default:n(()=>[k("每7天")]),_:1}),l(p,{value:5},{default:n(()=>[k("每30天")]),_:1})]),_:1},8,["value"])]),_:1},512),[[z,e.doc_type==2]]),V(c("div",null,[l(i,S({ref:"file_name",label:"文档名称"},q(h).file_name),{default:n(()=>[l(_,{placeholder:"请输入文档名称",value:e.file_name,"onUpdate:value":t[5]||(t[5]=a=>e.file_name=a)},null,8,["value"])]),_:1},16),l(i,{label:"文档类型",required:""},{default:n(()=>[l(ve,{value:e.is_qa_doc,"onUpdate:value":t[6]||(t[6]=a=>e.is_qa_doc=a)},{default:n(()=>[l(Z,{value:0},{default:n(()=>[k("普通文档")]),_:1}),l(Z,{value:1},{default:n(()=>[k("QA文档")]),_:1})]),_:1},8,["value"])]),_:1}),e.is_qa_doc==1?(d(),A(i,{key:0,label:"索引方式",required:""},{default:n(()=>[c("div",da,[(d(!0),v(P,null,M(X.value,a=>(d(),v("div",{class:B(["type-item",{active:e.qa_index_type==a.value}]),key:a.value,onClick:f=>_e(a.value)},[c("div",_a,[c("div",ua,[l(r,{name:e.qa_index_type==a.value?a.iconNameActive:a.iconName},null,8,["name"]),c("div",ma,w(a.title),1)]),c("div",pa,w(a.desc),1)]),e.qa_index_type==a.value?(d(),A(r,{key:0,class:"check-arrow",name:"check-arrow-filled",style:{"font-size":"24px",color:"#fff"}})):E("",!0)],10,ca))),128))])]),_:1})):E("",!0)],512),[[z,e.doc_type==3]]),l(i,S({label:"嵌入模型 "},q(h).use_model),{default:n(()=>[c("div",fa,[(d(!0),v(P,null,M(L.value,a=>(d(),v("div",{class:B(["use-model-item",{active:b.value==a.value}]),key:a.value,onClick:f=>de(a)},[c("div",{class:B(["use-model-item-top",{active:b.value==a.value}])},[l(r,{class:"use-model-item-top-icon",style:{color:"red"},name:b.value==a.value?a.iconNameActive:a.iconName},null,8,["name"]),c("p",null,w(a.title),1)],2),c("p",null,w(a.desc),1),b.value==a.value?(d(),A(r,{key:0,class:"check-arrow",name:"check-arrow-filled",style:{"font-size":"24px",color:"#fff"}})):E("",!0)],10,va))),128))]),l(R,{value:e.use_model,"onUpdate:value":t[7]||(t[7]=a=>e.use_model=a),placeholder:"请选择嵌入模型",onChange:re},{default:n(()=>[(d(!0),v(P,null,M(F.value,a=>(d(),A(ye,{key:a.id},{label:n(()=>[l(ge,{align:"center",gap:6},{default:n(()=>[c("img",{class:"model-icon",src:a.icon,alt:""},null,8,ga),k(w(a.name),1)]),_:2},1024)]),default:n(()=>[(d(!0),v(P,null,M(a.children,f=>(d(),A(p,{value:N.indexOf(a.model_define)>-1&&f.deployment_name?f.deployment_name:f.name+f.id,model_config_id:a.id,current_obj:f,key:f.name+f.id},{default:n(()=>[N.indexOf(a.model_define)>-1&&f.deployment_name?(d(),v("span",ya,w(f.deployment_name),1)):(d(),v("span",ha,w(f.name),1))]),_:2},1032,["value","model_config_id","current_obj"]))),128))]),_:2},1024))),128))]),_:1},8,["value"])]),_:1},16),l(i,{"wrapper-col":{span:14,offset:4}},{default:n(()=>[l(ee,{onClick:ue},{default:n(()=>[k("取 消")]),_:1}),l(ee,{type:"primary",style:{"margin-left":"16px"},loading:C.value,onClick:Ie(me,["prevent"])},{default:n(()=>[k("下一步")]),_:1},8,["loading"])]),_:1})]),_:1})])])}}},no=le(ba,[["__scopeId","data-v-d817fc8b"]]);export{no as default};
