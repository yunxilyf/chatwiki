import{aw as a}from"../../index-BRxqhTX0.js";const s=({file:t,category:r})=>a.post({headers:{"Content-Type":"multipart/form-data"},url:"/manage/upload",data:{file:t,category:r}}),o=({openid:t})=>a.get({url:"/chat/getWsUrl",params:{openid:t,debug:0}});export{o as g,s as u};
