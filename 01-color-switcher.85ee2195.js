const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),a=document.querySelector("body");let r=null;function n(){a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(()=>{t.dataset.start>0||(t.setAttribute("class","btn btn-secondary"),r=setInterval((()=>{n(),t.dataset.start=1}),1e3))})),t.addEventListener("click",n),e.addEventListener("click",(()=>{clearInterval(r),t.dataset.start=0,t.removeAttribute("class","btn-secondary"),t.setAttribute("class","btn btn-primary ")}));
//# sourceMappingURL=01-color-switcher.85ee2195.js.map
