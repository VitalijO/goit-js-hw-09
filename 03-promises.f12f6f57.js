const e=document.querySelector(".form");function t(e,t){return new Promise(((o,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?console.log(`✅ Fulfilled promise ${e} in ${t}ms`):console.log(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}e.addEventListener("submit",(function(o){o.preventDefault();const n=o.currentTarget.elements;let l=Number(n.delay.value);const r=Number(n.step.value);let s=Number(n.amount.value);e.reset();for(let e=0;e<s;e++)t(e+1,l).then((({position:e,delay:t})=>{})).catch((({position:e,delay:t})=>{})),l+=r}));
//# sourceMappingURL=03-promises.f12f6f57.js.map