let makeSlideshow=function(e){let o=document.querySelectorAll(e+" img");console.log(o),o[0].classList.add("show");let l=0,s=document.querySelector(".next");console.log(s);let t=document.querySelector(".back");console.log(t),s.onclick=function(){c()},t.onclick=function(){n()};let c=function(){o[l].classList.remove("show"),l++,l===o.length&&(l=0),o[l].classList.add("show")},n=function(){o[l].classList.remove("show"),l--,0==l&&o.length,o[l].classList.add("show")}};makeSlideshow(".sunset"),makeSlideshow(".other");
//# sourceMappingURL=main.js.map