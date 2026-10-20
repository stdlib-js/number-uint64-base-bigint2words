"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var n=u(function(N,v){
var s=require('@stdlib/bigint-ctor/dist'),f=require('@stdlib/number-ctor/dist');function x(e,r,i,a){var t=s.asUintN(64,e);return r[a]=f(t>>s(32))>>>0,r[a+i]=f(t&s(4294967295))>>>0,r}v.exports=x
});var q=u(function(l,g){
var o=n();function p(e){return o(e,[0,0],1,0)}g.exports=p
});var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=n(),c=q();b(c,"assign",d);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
