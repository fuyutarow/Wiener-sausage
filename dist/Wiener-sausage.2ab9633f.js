parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"x0Dm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.__wbindgen_object_drop_ref=exports.add=exports.default=void 0;var e=r(require("./pkg/module_bg.wasm"));function r(e){return e&&e.__esModule?e:{default:e}}var d=e.default;exports.default=d;var t=e.default.add;exports.add=t;var _=e.default.__wbindgen_object_drop_ref;exports.__wbindgen_object_drop_ref=_;
},{"./pkg/module_bg.wasm":"fSRs"}],"Focm":[function(require,module,exports) {
"use strict";var e=o(require("./module/Cargo.toml"));function o(e){return e&&e.__esModule?e:{default:e}}var r=e.default.add(1.2,.03);console.log("a",r);
},{"./module/Cargo.toml":"x0Dm"}],"Bh1I":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"z1Am":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"Bh1I"}],"sC8V":[function(require,module,exports) {

},{}],"6ocK":[function(require,module,exports) {
var __dirname = "/Users/yufukuda/Wiener-sausage/node_modules/parcel-plugin-wasm.rs";
var e,n="/Users/yufukuda/Wiener-sausage/node_modules/parcel-plugin-wasm.rs";const t={add:function(n,t){return e.add(n,t)}},s=new Array(32);s.fill(void 0),s.push(void 0,null,!0,!1);let i=s.length;function r(e){e<36||(s[e]=i,i=e)}function o(n){const s=fetch(n);let i;return(i="function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(s,{"./module":t}):s.then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,{"./module":t}))).then(({instance:n})=>{e=o.wasm=n.exports})}function u(s){const i=require("fs");return new Promise(function(e,t){i.readFile(n+s,function(n,s){n?t(n):e(s.buffer)})}).then(e=>WebAssembly.instantiate(e,{"./module":t})).then(({instance:n})=>{e=o.wasm=n.exports})}t.__wbindgen_object_drop_ref=function(e){r(e)};const a=Object.assign(o,t);module.exports=function(e){return a(e).then(()=>t)};
},{"fs":"sC8V"}],0:[function(require,module,exports) {
var b=require("z1Am");b.register("wasm",require("6ocK"));b.load([["module_bg.690e283d.wasm","fSRs"]]).then(function(){require("Focm");});
},{}]},{},[0], null)
//# sourceMappingURL=/Wiener-sausage.2ab9633f.js.map