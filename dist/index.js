"use strict";var i=function(a,t){return function(){try{return t||a((t={exports:{}}).exports,t),t.exports}catch(e){throw (t=0, e)}};};var u=i(function(I,o){
var g="row-major";function j(a,t,e,n,f){var r,s;for(r=a-1;r>n;r--)f[r]=e[r];for(r=n;r>=0&&(s=(e[r]+1)%t[r],f[r]=s,!(s>0));r--);for(r-=1;r>=0;r--)f[r]=e[r];return f}function q(a,t,e,n,f){var r,s;for(r=0;r<n;r++)f[r]=e[r];for(r=n;r<a&&(s=(e[r]+1)%t[r],f[r]=s,!(s>0));r++);for(r+=1;r<a;r++)f[r]=e[r];return f}function O(a,t,e,n,f){var r=a.length;if(r===0)return null;if(n<0){if(n+=r,n<0)return null}else if(n>=r)return null;return t===g?j(r,a,e,n,f):q(r,a,e,n,f)}o.exports=O
});var v=i(function(y,l){
var R=require('@stdlib/array-base-zeros/dist'),b=u();function k(a,t,e,n){return b(a,t,e,n,R(a.length))}l.exports=k
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=v(),x=u();w(c,"assign",x);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
