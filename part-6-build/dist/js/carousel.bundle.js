!function(){"use strict";var n={865:function(n,t,e){var o=e(845),r=e(186),i=e(997),u=e(167),a=e(649),c=function(){let n;return{getInstance:function(){return n||(n=void console.log("Global script initiated...")),n}}}();e(889);const l=function(){let n;return{getInstance:function(){return n||(console.log("Carousel script initiated..."),o.Z.use([r.Z,i.Z,u.Z,a.Z]),n=void new o.Z(".demo-carousel",{spaceBetween:20,lazy:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:5e3},loop:!0})),n}}}();document.addEventListener("DOMContentLoaded",(function(){c.getInstance(),l.getInstance()}))}},t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return n[o](r,r.exports,e),r.exports}e.m=n,e.x=function(){},e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},function(){var n={369:0},t=[[865,216]],o=function(){},r=function(r,i){for(var u,a,c=i[0],l=i[1],s=i[2],f=i[3],p=0,d=[];p<c.length;p++)a=c[p],e.o(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(u in l)e.o(l,u)&&(e.m[u]=l[u]);for(s&&s(e),r&&r(i);d.length;)d.shift()();return f&&t.push.apply(t,f),o()},i=self.webpackChunkwebpack_static_site_tutorial_pt1=self.webpackChunkwebpack_static_site_tutorial_pt1||[];function u(){for(var o,r=0;r<t.length;r++){for(var i=t[r],u=!0,a=1;a<i.length;a++){var c=i[a];0!==n[c]&&(u=!1)}u&&(t.splice(r--,1),o=e(e.s=i[0]))}return 0===t.length&&(e.x(),e.x=function(){}),o}i.forEach(r.bind(null,0)),i.push=r.bind(null,i.push.bind(i));var a=e.x;e.x=function(){return e.x=a||function(){},(o=u)()}}(),e.x()}();