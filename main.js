(()=>{"use strict";var e={99:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),s=n.n(r),o=n(645),a=n.n(o)()(s());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]),a.push([e.id,'*{padding:0;margin:0;box-sizing:content-box;font-family:"Poppins",sans-serif;transition:300ms}header{margin:30px 5% 20px}input,button{padding:5px 10px;border:3px solid #000;border-radius:5px}ul{list-style:none}main{padding:70px 10% 20px;display:flex;justify-content:space-around}main #recent-scores{display:flex;flex-direction:column;flex-grow:1;max-width:500px;gap:40px}main #recent-scores #scores-heading{display:flex;justify-content:space-between}main #recent-scores #scores-table{border:3px solid #000;border-radius:5px;min-height:150px;display:flex;flex-direction:column;max-height:300px}main #recent-scores #scores-table li{padding:5px 10px}main #recent-scores #scores-table li:nth-child(2n+1){background-color:#bebebe}main #recent-scores #scores-table .centered-text{margin:auto}main #add-your-score{flex-grow:1;display:flex;flex-direction:column;align-items:center;gap:40px;max-width:300px}main #add-your-score #score-form{display:flex;flex-direction:column;gap:20px}main #add-your-score #score-form button[type=submit]{align-self:end}',""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,s,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(a[i]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],c=0;c<e.length;c++){var i=e[c],l=r.base?i[0]+r.base:i[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=n(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=s(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var o=r(e=e||[],s=s||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var c=n(o[a]);t[c].references--}for(var i=r(e,s),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=i}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,s&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),s=n.n(r),o=n(569),a=n.n(o),c=n(565),i=n.n(c),l=n(216),d=n.n(l),u=n(589),p=n.n(u),m=n(99),f={};f.styleTagTransform=p(),f.setAttributes=i(),f.insert=a().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=d(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;class h{name;score;constructor(e,t){this.name=e,this.score=t}}class y{static baseURL="https://us-central1-js-capstone-backend.cloudfunctions.net/api";static getScores=async e=>fetch(`${this.baseURL}/games/${e}/scores/`,{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8"}}).then((async e=>200===e.status?(await e.json()).result:null));static addNewScore=async(e,{user:t,score:n})=>fetch(`${this.baseURL}/games/${e}/scores/`,{method:"POST",body:JSON.stringify({user:t,score:n}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((e=>201===e.status||null))}const g=(e,{name:t,score:n})=>{const r=document.getElementById("scores-table"),s=document.createElement("li");s.innerHTML=`\n    <p>${t}: ${n}</p>\n  `,0===e.scores.length&&(r.innerHTML=""),r.appendChild(s),e.addNewScore(new h(t,n))},x=new class{scores=[];gameID="lXsI44Imhn886rk4uGOx";addNewScore=e=>{this.scores.push(e)};clearArray=()=>{this.scores=this.scores.splice(0,this.scores.length)}};document.getElementById("scores-table").innerHTML='\n  <p class="centered-text">Press Refresh to get the Latest Scores.</p>\n',document.getElementById("score-form").addEventListener("submit",(async e=>{e.preventDefault(),await(async e=>{const t=document.getElementById("score-form"),n=new h(t.elements.name.value,t.elements.score.value);document.getElementById("submit-button").innerText="Sending Score ...";const r=await y.addNewScore(e.gameID,{user:n.name,score:n.score});document.getElementById("submit-button").innerText="Submit",null!==r&&(g(e,{name:n.name,score:n.score}),t.reset())})(x)})),document.getElementById("refresh-button").addEventListener("click",(async e=>{e.preventDefault(),await(async e=>{const t=document.getElementById("scores-table");t.innerHTML='\n    <p class="centered-text">Loading ...</p>\n  ';const n=await y.getScores(e.gameID);null!==n&&(n.sort(((e,t)=>t.score-e.score)),e.clearArray(),t.innerHTML="",n.forEach((t=>{g(e,{name:t.user,score:t.score})})),0===e.scores.length&&(document.getElementById("scores-table").innerHTML='\n      <p class="centered-text">No Scores yet.</p>\n    '))})(x)}))})()})();