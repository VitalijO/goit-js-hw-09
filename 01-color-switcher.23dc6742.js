!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),r=null;function c(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){t.disabled=!0,t.setAttribute("class","btn btn-secondary"),r=setInterval((function(){c()}),1e3)})),t.addEventListener("click",c),e.addEventListener("click",(function(){clearInterval(r),t.disabled=!1,t.removeAttribute("class","btn-secondary"),t.setAttribute("class","btn btn-primary ")}))}();
//# sourceMappingURL=01-color-switcher.23dc6742.js.map