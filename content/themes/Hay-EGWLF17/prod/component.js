"use strict";var _slicedToArray=function(){function t(t,e){var n=[],o=!0,i=!1,c=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){i=!0,c=t}finally{try{!o&&s.return&&s.return()}finally{if(i)throw c}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),logoIndexComp={$main:document.getElementById("main-logo"),open:function(){return this.$main.classList.add("menu-up")},close:function(){return this.$main.classList.remove("menu-up")},contains:function(){return this.$main.classList.contains("menu-up")},toggle:function(){this.contains()?this.close():this.open()}},setElRotate=function(t){var e=document.getElementById(t);e.addEventListener("mouseenter",function(){e.classList.add("rotate")}),e.addEventListener("mouseleave",function(){e.classList.remove("rotate")})},burgerLogic={$hamMenu:document.getElementById("ham-menu"),$burger:document.getElementById("ham-close"),$ham1:document.getElementById("ham1"),$ham2:document.getElementById("ham2"),$ham3:document.getElementById("ham3"),$ham4:document.getElementById("ham4"),toggleActive:function(){this.$hamMenu.classList.toggle("active")},removeActive:function(){this.$hamMenu.classList.remove("active")},closeHams:function(){this.$ham1.classList.add("hide"),this.$ham4.classList.add("hide"),this.$ham2.setAttribute("transform","rotate(45,23.91,23.91)"),this.$ham3.setAttribute("transform","rotate(-45,23.91,23.91)")},openHams:function(){this.$ham1.classList.remove("hide"),this.$ham4.classList.remove("hide"),this.$ham2.setAttribute("transform",""),this.$ham3.setAttribute("transform","")},closeContact:function(){var t=document.getElementById("contact-link"),e=document.getElementById("contact-close"),n=document.getElementById("contact-menu");t.classList.remove("active"),e.classList.remove("active"),n.classList.remove("active")}},contactLogic={$link:document.getElementById("contact-link"),$close:document.getElementById("contact-close"),$menu:document.getElementById("contact-menu"),toggleContact:function(){this.$link.classList.toggle("active"),this.$close.classList.toggle("active"),this.$menu.classList.toggle("active")},closeContact:function(){this.$link.classList.remove("active"),this.$close.classList.remove("active"),this.$menu.classList.remove("active")}};burgerLogic.init=function(){var t=this;this.$burger.addEventListener("click",function(e){e.preventDefault(),t.toggleActive(),t.$hamMenu.classList.contains("active")?(t.closeHams(),logoIndexComp.open(),contactLogic.closeContact()):(t.openHams(),setTimeout(function(){logoIndexComp.close()},500))})},contactLogic.init=function(){var t=this;this.$link.addEventListener("click",function(e){e.preventDefault(),burgerLogic.removeActive(),burgerLogic.openHams(),t.toggleContact(),logoIndexComp.open()}),this.$close.addEventListener("click",function(e){e.preventDefault(),t.toggleContact(),setTimeout(function(){logoIndexComp.close()},500)})};var teamBiosLogic=function(){var t=document.getElementsByClassName("toggle");Array.prototype.forEach.call(t,function(t){t.addEventListener("click",function(e){e.preventDefault(),t.closest(".team-member").classList.toggle("active")})})},toggleRootLoad=function(){document.getElementById("root").classList.toggle("load")},toggleExpandables=function(){var t=document.getElementsByClassName("section");Array.prototype.forEach.call(t,function(t){t.addEventListener("click",function(){t.classList.toggle("expand")})})},loadCompByID=function(){var t=window.location.href;if(t.indexOf("#")>0){var e=t.split("#"),n=_slicedToArray(e,2),o=n[1];document.getElementById(o).classList.toggle("active")}},injectCompURL=function(){var t=document.getElementsByClassName("link-url-input"),e=window.location.href.indexOf("#")>0?window.location.href.substring(0,window.location.href.indexOf("#")):window.location.href;Array.prototype.forEach.call(t,function(t){var n=t,o=t.closest(".team-member");n.value=e+"#"+o.id})},copyToClipboard=function(){var t=document.getElementsByClassName("copy-to-clipboard");Array.prototype.forEach.call(t,function(t){t.addEventListener("click",function(e){e.preventDefault();var n=t.parentNode.childNodes;Array.prototype.forEach.call(n,function(t){var e=t.classList,n=t;e&&"link-url-input"===e[0]&&(n.select(),document.execCommand("copy"))})})})},activeMenu=function(){var t=window.location.pathname,e=t.split("/"),n=e[e.length-2].toLowerCase(),o=document.getElementById("pg-"+n);o&&o.classList.toggle("active")};document.onreadystatechange=function(){"complete"===document.readyState&&(toggleRootLoad(),loadCompByID(),activeMenu(),burgerLogic.init(),contactLogic.init(),teamBiosLogic(),toggleExpandables(),setElRotate("left-logo"),injectCompURL(),copyToClipboard())};