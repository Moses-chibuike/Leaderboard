"use strict";(self.webpackChunkwebpack_setup=self.webpackChunkwebpack_setup||[]).push([[179],{426:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(81),o=e.n(t),a=e(645),s=e.n(a)()(o());s.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: #fff;\r\n}\r\n\r\nh1 {\r\n  font-size: 50px;\r\n}\r\n\r\nspan {\r\n  padding-left: 1rem;\r\n}\r\n\r\nh2 {\r\n  font-size: 30px;\r\n  margin-right: 1rem;\r\n}\r\n\r\n#main {\r\n  margin: 3rem;\r\n}\r\n\r\n.main {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.flex-end {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.button-form {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.list {\r\n  flex-direction: column;\r\n}\r\n\r\n.score-list {\r\n  border: 3px solid;\r\n}\r\n\r\n.score {\r\n  width: 100%;\r\n  font-size: 1.6rem;\r\n}\r\n\r\n.score:nth-of-type(even) {\r\n  background-color: #d3d3d3;\r\n  height: auto;\r\n}\r\n\r\n.add {\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n}\r\n\r\n.refresh {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.button-form button,\r\n.refresh {\r\n  cursor: pointer;\r\n  padding: 3px;\r\n  border: 2px solid black;\r\n  box-shadow: 3px 3px;\r\n  font-size: 1rem;\r\n  transition: transform 0.3s;\r\n}\r\n\r\nbutton:active {\r\n  font-size: 1.4rem;\r\n  transform: scale(0.95);\r\n}\r\n\r\n.form {\r\n  width: 60%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.form input {\r\n  width: 100%;\r\n  margin: 0.5rem auto;\r\n  height: 2rem;\r\n  padding-left: 1rem;\r\n  border: 2px solid black;\r\n  font-size: 1rem;\r\n}\r\n",""]);const i=s},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(t)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);t&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},s=[],i=0;i<n.length;i++){var c=n[i],u=t.base?c[0]+t.base:c[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=e(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var m=o(f,t);t.byIndex=i,r.splice(i,0,{identifier:d,updater:m,references:1})}s.push(d)}return s}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var s=0;s<a.length;s++){var i=e(a[s]);r[i].references--}for(var c=t(n,o),u=0;u<a.length;u++){var l=e(a[u]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},171:(n,r,e)=>{var t=e(379),o=e.n(t),a=e(795),s=e.n(a),i=e(569),c=e.n(i),u=e(565),l=e.n(u),d=e(216),p=e.n(d),f=e(589),m=e.n(f),h=e(426),v={};v.styleTagTransform=m(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=p(),o()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;const y="xOhJaij0iL0K3CoP6gQZ",g=document.querySelector(".score-list"),b=async()=>{try{const n=await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${y}/scores/`),r=await n.json();if(!n.ok)return r;const e=r.result;return(n=>{let r="";n.forEach((n=>{r+=`\n          <p class="score"><span>${n.user}: </span><span>${n.score}</span></p>\n          `})),g.innerHTML=r})(e),e}catch(n){return n}},x=document.querySelector(".refresh");document.querySelector(".btn").addEventListener("click",(n=>{n.preventDefault();const r=document.querySelector("#fname"),e=document.querySelector("#lname");r.value&&e.value&&(async n=>{try{const r=await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${y}/scores/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});await r.json();r.ok&&b()}catch(n){return n}})({user:r.value,score:e.value}),r.value="",e.value=""})),x.addEventListener("click",b),window.addEventListener("DOMContentLoaded",(()=>{b()}))}},n=>{n(n.s=171)}]);

