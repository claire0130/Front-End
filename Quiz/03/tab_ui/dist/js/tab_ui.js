!function(e,t){"use strict";for(var n={STATUSERROR:"문제가 발생 되었습니다!"},a={tabUi:document.querySelector(".tab-list"),tabLink:document.querySelectorAll(".tab-list a"),tabActive:document.querySelector(".tab-list .tab-active"),tabContent:document.querySelector(".tab-content"),tabSection:document.querySelector(".tab-contents .tab-content"),selectMenuItem:null},i={xhrStatus:function(){if(200!==this.status)return void(a.tabSection.innerHTML=n.STATUSERROR);if(200===this.status){var e=JSON.parse(this.responseText),t=document.querySelector("#exampleTemplate"),i=t.innerText,s=i.replace("{{name}}",e.title),c=i.replace("{{name}}",e.body);a.tabContent.innerHTML=s+c}},viewPage:function(t){t.preventDefault();var n=[1,2,3,4],s=n[this.index],c="http://jsonplaceholder.typicode.com/posts/"+s;null!=a.selectMenuItem&&a.selectMenuItem.classList.remove("tab-active"),a.selectMenuItem=t.target,a.selectMenuItem.classList.add("tab-active");var o=new XMLHttpRequest;o.open("GET",c),o.send(),o.addEventListener("load",i.xhrStatus),e.location.hash=s}},s=0;s<a.tabLink.length;s++){var c=a.tabLink[s];c.index=s,c.addEventListener("click",i.viewPage)}c.addEventListener("load",i.viewPage)}(this,this.XMLHttpRequest||this.ActiveXObject("Microsoft.XMLHTTP"));