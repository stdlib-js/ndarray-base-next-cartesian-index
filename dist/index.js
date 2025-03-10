"use strict";var i=function(n,a){return function(){return a||n((a={exports:{}}).exports,a),a.exports}};var u=i(function(I,o){
var g="row-major";function j(n,a,t,e,f){var r,s;for(r=n-1;r>e;r--)f[r]=t[r];for(r=e;r>=0&&(s=(t[r]+1)%a[r],f[r]=s,!(s>0));r--);for(r-=1;r>=0;r--)f[r]=t[r];return f}function q(n,a,t,e,f){var r,s;for(r=0;r<e;r++)f[r]=t[r];for(r=e;r<n&&(s=(t[r]+1)%a[r],f[r]=s,!(s>0));r++);for(r+=1;r<n;r++)f[r]=t[r];return f}function O(n,a,t,e,f){var r=n.length;if(r===0)return null;if(e<0){if(e+=r,e<0)return null}else if(e>=r)return null;return a===g?j(r,n,t,e,f):q(r,n,t,e,f)}o.exports=O
});var v=i(function(y,l){
var R=require('@stdlib/array-base-zeros/dist'),b=u();function k(n,a,t,e){return b(n,a,t,e,R(n.length))}l.exports=k
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=v(),x=u();w(c,"assign",x);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
