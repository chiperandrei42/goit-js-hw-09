var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("1GAPJ");const u=document.querySelector("[name='delay']"),l=document.querySelector("[name='step']"),i=document.querySelector("[name='amount']");function c(e,t){return new Promise(((n,r)=>{const o=Math.random()>.3;setTimeout((()=>{o?n(`Fulfilled promise ${e} in ${t}ms`):r(`Rejected promise ${e} in ${t}ms`)}),t)}))}document.querySelector("[type='submit']").addEventListener("click",(e=>{e.preventDefault();const t=Number(i.value);let n=Number(u.value);const r=Number(l.value);for(let e=0;e<t;e++)c(t,n).then((e=>o.Notify.success(e))).catch((e=>o.Notify.failure(e))),n+=r}));
//# sourceMappingURL=03-promises.d67dff48.js.map
