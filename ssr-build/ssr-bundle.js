module.exports=function(t){var n={},r={0:0};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.e=function(n){if(0!==r[n]){var e=require("./"+({}[n]||n)+".chunk."+{1:"6c947"}[n]+".js"),o=e.modules,i=e.ids;for(var u in o)t[u]=o[u];for(var a=0;a<i.length;a++)r[i[a]]=0}return Promise.all([])},e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",e.oe=function(t){process.nextTick((function(){throw t}))},e(e.s="QfWi")}({"4rbZ":function(t,n,r){"use strict";r.d(n,"a",(function(){return u}));var e=r("QRet");function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var e,o,i=[],u=!0,a=!1;try{for(r=r.call(t);!(u=(e=r.next()).done)&&(i.push(e.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==r.return||r.return()}finally{if(a)throw o}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var u=function(){var t=o(Object(e.c)([]),2),n=t[0],i=t[1];Object(e.a)((function(){return r.e(1).then(r.t.bind(null,"NGEB",3)).then((function(t){return i(t.default)}))}),[]);var u=Math.floor((Date.now()-new Date(2022,0,23,0,0,0).getTime())/864e5)%365;return{answer:n[u]||"",answerIndex:u,isGuessValid:function(t){return n.includes(t)}}}},DyVL:function(t,n,r){"use strict";r.d(n,"a",(function(){return u}));var e=r("QRet");function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var e,o,i=[],u=!0,a=!1;try{for(r=r.call(t);!(u=(e=r.next()).done)&&(i.push(e.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==r.return||r.return()}finally{if(a)throw o}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var u=function(t){var n=o(Object(e.c)([""]),2),r=n[0],i=n[1];return Object(e.a)((function(){var n=function(){return i(JSON.parse(localStorage.getItem(t))||[""])};return n(),window.addEventListener("storage",n),window.addEventListener("visibilitychange",n),function(){window.removeEventListener("storage",n),window.removeEventListener("visibilitychange",n)}}),[t]),[r,function(n){i((function(r){var e=n(r);return localStorage.setItem(t,JSON.stringify(e)),e}))}]}},HteQ:function(t,n){t.exports=require("preact")},JEpg:function(t,n,r){"use strict";(function(t){r.d(n,"a",(function(){return e}));var e=function(n){var r=n.onInput,e=n.onSubmit,o=n.guesses,i=n.isDone,u=n.matrix,a="qwertyuiopasdfghjklzxc⌫vbnm⏎".split(""),c=u.slice(0,o.length-1).reduce((function(t,n){var r=n.guess,e=n.states;return(void 0===e?[]:e).forEach((function(n,e){var o=null==r?void 0:r[e];"🟩"===n||"🟩"===t[o]?t[o]="🟩":"🟨"===n&&"🟩"!==t[o]?t[o]="🟨":"⬛"===n&&"🟨"!==t[o]&&(t[o]="⬛")})),t}),{});return t("div",{class:"keyboard"},a.map((function(n){return t("button",{class:"key ".concat(c[n]),"data-key":n,onClick:function(){if("⏎"===n)e();else{var t=o[o.length-1]||"";t="⌫"===n?t.slice(0,-1):(t+n).slice(0,5),r({target:{value:t}})}},disabled:i},n)})))}}).call(this,r("HteQ").h)},QRet:function(t,n,r){"use strict";r.d(n,"c",(function(){return d})),r.d(n,"a",(function(){return h})),r.d(n,"b",(function(){return m}));var e,o,i,u=r("HteQ"),a=0,c=[],l=u.options.__b,f=u.options.__r,s=u.options.diffed,_=u.options.__c,v=u.options.unmount;function p(t,n){u.options.__h&&u.options.__h(o,t,a||n),a=0;var r=o.__H||(o.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({}),r.__[t]}function d(t){return a=1,function(t,n,r){var i=p(e++,2);return i.t=t,i.__c||(i.__=[r?r(n):j(void 0,n),function(t){var n=i.t(i.__[0],t);i.__[0]!==n&&(i.__=[n,i.__[1]],i.__c.setState({}))}],i.__c=o),i.__}(j,t)}function h(t,n){var r=p(e++,3);!u.options.__s&&S(r.__H,n)&&(r.__=t,r.__H=n,o.__H.__h.push(r))}function m(t){return a=5,y((function(){return{current:t}}),[])}function y(t,n){var r=p(e++,7);return S(r.__H,n)&&(r.__=t(),r.__H=n,r.__h=t),r.__}function b(){var t;for(c.sort((function(t,n){return t.__v.__b-n.__v.__b}));t=c.pop();)if(t.__P)try{t.__H.__h.forEach(A),t.__H.__h.forEach(w),t.__H.__h=[]}catch(n){t.__H.__h=[],u.options.__e(n,t.__v)}}u.options.__b=function(t){o=null,l&&l(t)},u.options.__r=function(t){f&&f(t),e=0;var n=(o=t.__c).__H;n&&(n.__h.forEach(A),n.__h.forEach(w),n.__h=[])},u.options.diffed=function(t){s&&s(t);var n=t.__c;n&&n.__H&&n.__H.__h.length&&(1!==c.push(n)&&i===u.options.requestAnimationFrame||((i=u.options.requestAnimationFrame)||function(t){var n,r=function(){clearTimeout(e),g&&cancelAnimationFrame(n),setTimeout(t)},e=setTimeout(r,100);g&&(n=requestAnimationFrame(r))})(b)),o=null},u.options.__c=function(t,n){n.some((function(t){try{t.__h.forEach(A),t.__h=t.__h.filter((function(t){return!t.__||w(t)}))}catch(r){n.some((function(t){t.__h&&(t.__h=[])})),n=[],u.options.__e(r,t.__v)}})),_&&_(t,n)},u.options.unmount=function(t){v&&v(t);var n,r=t.__c;r&&r.__H&&(r.__H.__.forEach((function(t){try{A(t)}catch(t){n=t}})),n&&u.options.__e(n,r.__v))};var g="function"==typeof requestAnimationFrame;function A(t){var n=o,r=t.__c;"function"==typeof r&&(t.__c=void 0,r()),o=n}function w(t){var n=o;t.__c=t.__(),o=n}function S(t,n){return!t||t.length!==n.length||n.some((function(n,r){return n!==t[r]}))}function j(t,n){return"function"==typeof n?n(t):n}},QfWi:function(t,n,r){"use strict";r.r(n),function(t){r.d(n,"default",(function(){return s}));var e=r("QRet"),o=(r("pyAK"),r("4rbZ")),i=r("DyVL"),u=r("JEpg");function a(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||l(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var e,o,i=[],u=!0,a=!1;try{for(r=r.call(t);!(u=(e=r.next()).done)&&(i.push(e.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==r.return||r.return()}finally{if(a)throw o}}return i}(t,n)||l(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,n){if(t){if("string"==typeof t)return f(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,n):void 0}}function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function s(){var n=Object(e.b)(),r=Object(o.a)(),l=r.answer,f=r.answerIndex,s=r.isGuessValid,_=c(Object(i.a)(l),2),v=_[0],p=_[1],d=c(Object(e.c)(""),2),h=d[0],m=d[1],y=c(Object(e.c)(!1),2),b=y[0],g=y[1],A=v[v.length-2]===l,w=A||7===v.length,S=function(t){return!w&&p((function(n){return[].concat(a(n.slice(0,-1)),[t.target.value.replace(/[^a-z]/gi,"").toLowerCase()])}))},j=function(t){null==t||t.preventDefault();var n=v[v.length-1];w||5!==n.length||(s(n)?p((function(t){return[].concat(a(t),[""])})):m('"'.concat(n,'" немає в словнику')))};Object(e.a)((function(){n.current.selectionStart=5,m(v[v.length-2]===l?"Гарна робота! Натисніть, щоб поділитися 📋":7===v.length?"Хай щастить завтра!":"")}),[l,v]);var O=Array.from({length:6},(function(t,n){var r=v[n],e=n<v.length-1,o=n===v.length-1,i=l.split("").filter((function(t,n){return t&&t!==(null==r?void 0:r[n])})),u=Array.from({length:5},(function(t,n){var e=null==r?void 0:r[n];if(e&&e===l[n])return"🟩";var o=i.indexOf(e);return-1!==o?(i.splice(o,1),"🟨"):"⬛"}));return{guess:r,states:u,isSubmitted:e,isActive:o}}));return t("label",{class:"app",for:"guess-input"},t("header",null,t("svg",{viewBox:"0 0 24 24",role:"button",onClick:function(){return g(!0)}},t("path",{fill:"currentColor",d:"M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"})),t("span",null,"👻 Game 🇺🇦"),t("a",{href:"https://github.com/kzncvaa",title:"Github"},t("svg",{role:"img",viewBox:"0 0 512 512"},t("rect",{width:"512",height:"512",rx:"15%",fill:"#fff"}),t("path",{fill:"#181717",d:"M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-44c-71 16-86-34-86-34-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"})))),t("form",{onSubmit:j,class:"guesses"},O.map((function(n){var r=n.guess,e=n.states,o=n.isActive,i=n.isSubmitted;return e.map((function(n,e){return t("div",{class:"letter ".concat(i?"submitted ".concat(n):o&&e===r.length&&!w?"active":"")},null==r?void 0:r[e])}))})),t("input",{id:"guess-input",autoFocus:!0,inputmode:"none",maxLength:5,onInput:S,autoComplete:"off",autoCorrect:"off",value:v[v.length-1],ref:n,disabled:w,"aria-label":"Gissning"})),t("div",{class:"message",onClick:function(){if(A){m("Скопійовано та готове поділитися! 📋");var t="Swordle ".concat(f," ").concat(v.length-1,"/").concat(6,"\n\n            ").concat(O.slice(0,v.length-1).map((function(t){return t.states.join("")})).join("\n"));navigator.clipboard.writeText(t)}}},h),t(u.a,{onSubmit:j,onInput:S,guesses:v,isDone:w,matrix:O}),t("div",{class:"help ".concat(b?"help--visible":""),onClick:function(){return g(!1)}},t("p",null,"Arina Kzncvaa ","\n","Test Game"," ","🎉")))}}.call(this,r("HteQ").h)},pyAK:function(t,n,r){}});
//# sourceMappingURL=ssr-bundle.js.map