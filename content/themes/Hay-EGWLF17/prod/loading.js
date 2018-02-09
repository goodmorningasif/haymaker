"use strict";function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}return Array.from(t)}var ajaxHistory={memory:{},length:0,add:function(t,e){return this.memory[e]={page_data:t},this.length+=1,this.length},init:function(){var t=window.location.href;if(!this.memory[t]){var e=document.getElementById("load");this.add(e.outerHTML,t)}return t}},ajaxReq=function(t){var e=new XMLHttpRequest;return e.onreadystatechange=function(){e.readyState===XMLHttpRequest.DONE&&(e.status>=200&&e.status<300?t.callback(e.response,t.LINK):e.status>=400&&e.status)},e.open("GET",t.LINK,!0),e.setRequestHeader("Content-Type","application/json"),e.send(),!0},setNavClasses=function(t){var e=document.getElementsByClassName("list-link");Array.prototype.forEach.call(e,function(t){t.classList.remove("active")});var o=document.getElementsByClassName("meny-link");Array.prototype.forEach.call(o,function(t){t.children[0].classList.remove("active")});var n=document.getElementsByClassName("ajax-load");Array.prototype.forEach.call(n,function(e){var o=e.getAttribute("href"),n=o.indexOf("/menu/");if(n<0&&o===t)e.closest(".list-link").classList.add("active");else if(n>0&&o===t){var a=document.getElementById("pg-food");a.classList.add("active"),e.closest(".link").classList.add("active")}})},mountComponents=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments[3];console.log("mounting Components");var a=function(t){return ajaxHistory.add(t.outerHTML,e),t},s=function(){var t,e,o=document.body.classList,n=document.getElementById("body_classes").classList;return(t=document.body.classList).remove.apply(t,_toConsumableArray(o)),(e=document.body.classList).add.apply(e,_toConsumableArray(n)),n},r=function(t){var e=document.createElement("html");return e.innerHTML=t,a(e.querySelector("#load"))}(t),l=function(t){var e=document.getElementById("load"),o=document.getElementById("feet");return e.classList.toggle("mount"),t.classList.toggle("mount"),e.parentNode.insertBefore(t,o),setTimeout(function(){t.classList.toggle("mount")},400),e}(r);!function(t){var e=document.getElementById("ham-close"),o=document.getElementById("ham-menu").classList.contains("active");setTimeout(function(){t.parentNode.removeChild(t),o&&e.click(),s()},250)}(l),setNavClasses(e),o||function(t){var e={title:null,url:window.location.href};window.history.pushState(e,"",t)}(e),console.log("pre-check for callback",n),n&&console.log("this is the callback",n)},setAjaxEvents=function(){console.log("Ajax Events Set !");var t=document.getElementsByClassName("ajax-load");Array.prototype.forEach.call(t,function(t){t.addEventListener("click",function(e){e.preventDefault();var o=t.getAttribute("href"),n=window.location.href,a=Object.prototype.hasOwnProperty.call(ajaxHistory.memory,o);o!==n&&(a?mountComponents(ajaxHistory.memory[o].page_data,o):ajaxReq(o,mountComponents))})})},popStateMethods=function(){var t=function(t){var e=Object.prototype.hasOwnProperty.call(ajaxHistory.memory,t.url),o=ajaxHistory.memory[t.url];e?mountComponents(o.page_data,t.url,!0):ajaxReq(t.url,mountComponents)};window.addEventListener("popstate",function(e){t(e.state)})};setAjaxEvents(),popStateMethods(),ajaxHistory.init();