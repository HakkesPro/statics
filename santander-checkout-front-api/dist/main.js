(()=>{"use strict";var e={607:function(e,t,i){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var r=i(307),o=i(823),s=function(){function e(e,t){this.iframeId="_CHECKOUT_WIDGET_IFRAME_",this.containerHeight="150px",this.containerWidth="430px";var i=n({},t),r=n({},t.theme&&n({},t.theme)),s=n({},t.paymentDetails&&n({},t.paymentDetails));delete i.theme,delete i.paymentDetails,this.elId=e,this.config=i,this.hostedOrigin=this.setEnvironment(),this.iframeUrl=o.buildUrl(this.hostedOrigin,i,r,s),this.setFrameAndContainerMeasures({containerHeight:this.config.iframeHeight||this.config.containerHeight||this.containerHeight,containerWidth:this.config.containerWidth||this.containerWidth},Boolean(this.config.iframeHeight)),this.buildIframe()}return e.prototype.setEnvironment=function(){return this.config.environment&&this.config.environment===r.environment.DEVELOPMENT?r.hostedUrls.DEVELOPMENT:r.hostedUrls.PRODUCTION},e.prototype.buildIframe=function(){var e=document.querySelector("#"+this.elId),t=document.createElement("iframe");t.src=this.iframeUrl,t.id=this.iframeId,t.style.height=this.containerHeight,t.style.maxWidth=this.containerWidth,t.style.width="100%",t.style.border="0",t.style.overflow="hidden",t.style.position="absolute",t.style.top="0",t.style.left="0",e&&(e.appendChild(t),e.style.position="relative",e.style.display="inline-block",e.style.height=this.containerHeight,e.style.width=this.containerWidth)},e.prototype.increaseFrameMeasures=function(e){return Number(e.split("px")[0])+10+"px"},e.prototype.setFrameAndContainerMeasures=function(e,t){var i=e.containerHeight,n=e.containerWidth;i&&(this.containerHeight=t?i:this.increaseFrameMeasures(i)),n&&(this.containerWidth=this.increaseFrameMeasures(n))},e}();window.SANTANDER_CHECKOUT_WIDGET=s},823:function(e,t,i){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.buildUrl=t.serialize=t.x=void 0;var r=i(307);t.x={},t.serialize=function(e,t){var i=[];for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=t?t+"."+n:n;i.push(encodeURIComponent(r)+"="+encodeURIComponent(e[n]))}return i.join("&")};t.buildUrl=function(e,i,o,s){var a=t.serialize(i),l=t.serialize(o,r.UrlPrefixes.THEME),h=n({},s&&s.countrySpecifics);delete s.countrySpecifics;var c=function(e,i){var o=n({},i),s=function(e){return Object.entries(e).map((function(e){var i=e[1],n=e[0],o=r.UrlPrefixes.PAYMENT+"."+n;return t.serialize(i,o)})).reduce((function(e,t){return e+"&"+t}),"")}(e);return t.serialize(o,r.UrlPrefixes.PAYMENT)+(s?"&"+s:"")}(h,s);return e+"?"+a+(l?"&"+l:"")+(c?"&"+c:"")}},307:(e,t)=>{var i,n,r,o,s,a,l;Object.defineProperty(t,"__esModule",{value:!0}),t.environment=t.LabelPosition=t.Countries=t.LocaleIds=t.hostedUrls=t.Mode=t.UrlPrefixes=void 0,(l=t.UrlPrefixes||(t.UrlPrefixes={})).PAYMENT="payment",l.THEME="theme",(a=t.Mode||(t.Mode={})).MODERN="modern",a.CLASSIC="classic",(s=t.hostedUrls||(t.hostedUrls={})).DEVELOPMENT="http://localhost:3000/",s.PRODUCTION="https://gallant-bhabha-93a576.netlify.app/",(o=t.LocaleIds||(t.LocaleIds={})).SV_SE="sv_SE",o.NO_NO="no_NO",o.DA_DK="da_DK",o.EN_GB="en_GB",(r=t.Countries||(t.Countries={})).SWE="SWE",r.NOR="NOR",r.DNK="DNK",r.GBR="GBR",(n=t.LabelPosition||(t.LabelPosition={})).LEFT="left",n.RIGHT="right",(i=t.environment||(t.environment={})).DEVELOPMENT="development",i.PRODUCTION="production"}},t={};!function i(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,i),o.exports}(607)})();