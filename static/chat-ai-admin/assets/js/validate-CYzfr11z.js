function i(e){if(e.length<6||e.length>32)return!1;const n=/[a-zA-Z]/.test(e),l=/[0-9]/.test(e),a=/[!@#$%^&*()\-_=+{};:,<.>]/.test(e);return n&&l||n&&a||l&&a}function u(e){try{return new URL(e),!0}catch{return!1}}function f(e){const n=t=>{try{return new URL(t),!0}catch{return!1}};e=e.trim();var l=e.split(/\r?\n|\r/).map(t=>t.trim()).filter(t=>t.length>0);let a=[],r={};for(let t=0;t<l.length;t++){let s=l[t];if(n(s))r.url=s,a.push(r),r={};else if(!r.remark)r.remark=s;else if(!r.url)return!1}return a}export{u as i,f as t,i as v};
