"use strict";function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}var ajaxHistory={memory:{},length:0,add:function(t){var e=t.data,a=t.url,n=t.title;return this.memory[n]={data:e,url:a},this.length+=1,this.length},urlParser:function(t){var e=t||window.location.href,a=e.split("/"),n=a.reduce(function(t,e){return"team"===e||"menu"===e?t+e:t},"");return{title:a[a.length-2],subPage:n,url:e}},assemble:function(t){var e=this.urlParser();return this.add({title:e.title,url:e.url,data:t})},init:function(){var t=this.urlParser();if(!this.memory[t.title]){var e=document.getElementById("load").outerHTML;this.assemble(e)}return t}},ajaxReq=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.LINK,a=t.callback,n=t.resetEvents,r=void 0!==n&&n,s=new XMLHttpRequest;return s.onreadystatechange=function(){s.readyState===XMLHttpRequest.DONE&&(s.status>=200&&s.status<300?a({resp:s.response,link:e,events:r}):s.status>=400&&s.status)},s.open("GET",e,!0),s.setRequestHeader("Content-Type","application/json"),s.send(),!0},setNavClasses=function(t){var e=document.getElementsByClassName("list-link");Array.prototype.forEach.call(e,function(t){t.classList.remove("active")});var a=document.getElementsByClassName("menu-link");Array.prototype.forEach.call(a,function(t){t.children[0].classList.remove("active")});var n=document.getElementsByClassName("ajax-load");Array.prototype.forEach.call(n,function(e){var a=e.getAttribute("href"),n=a.indexOf("/menu/");if(n<0&&a===t&&e.closest(".list-link"))e.closest(".list-link").classList.add("active");else if(n>0&&a===t){var r=document.getElementById("pg-food");r.classList.add("active"),e.closest(".link").classList.add("active")}})},mountComponents=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.resp,a=t.link,n=t.popState,r=void 0!==n&&n,s=t.events,o=void 0!==s&&s,l=function(){var t=document.getElementById("load");return ajaxHistory.assemble(t.outerHTML),t},i=function(){var t,e,a=document.body.classList,n=document.getElementById("body_classes").classList;return(t=document.body.classList).remove.apply(t,_toConsumableArray(a)),(e=document.body.classList).add.apply(e,_toConsumableArray(n)),n};!function(t){var e=document.getElementById("ham-close"),a=document.getElementById("ham-menu"),n=a.classList.contains("active");setTimeout(function(){t.parentNode.removeChild(t),n&&e.click(),i(),l()},250)}(function(t){var e=document.getElementById("load"),a=document.getElementById("feet");return e.classList.toggle("mount"),t.classList.toggle("mount"),e.parentNode.insertBefore(t,a),setTimeout(function(){t.classList.toggle("mount")},400),e}(function(t){var e=document.createElement("html");return e.innerHTML=t,o&&o(e),e.querySelector("#load")}(e))),setNavClasses(a),r||function(t){var e=ajaxHistory.urlParser(),a={title:e.title,url:e.url};window.history.pushState(a,"",t)}(a)},setAjaxEvents=function t(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=e?e.getElementsByClassName("ajax-load"):document.getElementsByClassName("ajax-load"),n=function(e,a){e.preventDefault();var n=ajaxHistory.urlParser(a.getAttribute("href")),r=window.location.href,s=ajaxHistory.memory[n.title];n.url!==r&&(s?mountComponents({resp:ajaxHistory.memory[n.title].data,link:ajaxHistory.memory[n.title].url,events:t}):ajaxReq({LINK:n.url,callback:mountComponents,resetEvents:t}))};Array.prototype.forEach.call(a,function(t){t.addEventListener("click",function(e){n(e,t)},{capture:!0})})},popStateMethods=function(){var t=function(t){var e=ajaxHistory.memory[t.title];e?mountComponents({resp:e.data,link:e.url,popState:!0}):ajaxReq({LINK:t.url,callback:mountComponents})};window.addEventListener("popstate",function(e){t(e.state)})};setAjaxEvents(),popStateMethods(),ajaxHistory.init();