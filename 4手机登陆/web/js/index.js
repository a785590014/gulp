"use strict";var dom=document.querySelector(".right"),i=60;dom.onclick=function(){if("red"!==dom.style.background){dom.value=i+"S",dom.style.background="red";var e=setInterval(function(){i--,dom.value=i+"S",0==i&&(i=60,clearInterval(e),dom.value="重新获取",dom.style.background="#FFD27C")},1e3)}};