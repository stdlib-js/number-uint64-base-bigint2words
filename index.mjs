// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/bigint-ctor@v0.2.3-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@v0.2.3-esm/index.mjs";function s(t,s,r,i){var d=e.asUintN(64,t);return s[i]=n(d>>e(32))>>>0,s[i+r]=n(d&e(4294967295))>>>0,s}function r(t){return s(t,[0,0],1,0)}t(r,"assign",s);export{s as assign,r as default};
//# sourceMappingURL=index.mjs.map
