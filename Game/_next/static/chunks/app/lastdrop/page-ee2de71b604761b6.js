(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[421],{2480:function(e,a,n){Promise.resolve().then(n.bind(n,6425))},6425:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return c}});var s=n(7437),t=n(8358),l=n(2792),i=n(2265),o=n(7323);function c(){let e="".concat("./Game","/"),{unityProvider:a,loadingProgression:n,isLoaded:c,sendMessage:d,addEventListener:r,removeEventListener:u}=(0,o.JM)({loaderUrl:"".concat(e,"WebGLBuild/Build/WebGLBuild.loader.js"),dataUrl:"".concat(e,"/WebGLBuild/Build/WebGLBuild.data.gz"),frameworkUrl:"".concat(e,"WebGLBuild/Build/WebGLBuild.framework.js.gz"),codeUrl:"".concat(e,"WebGLBuild/Build/WebGLBuild.wasm.gz"),streamingAssetsUrl:"".concat(e,"WebGLBuild/StreamingAssets"),cacheControl:function(e){return e.match(/\.bundle/)?"immutable":"no-store"}}),[f,g]=(0,i.useState)(window.devicePixelRatio);return(0,i.useCallback)(function(){let e=function(){g(window.devicePixelRatio)},a=window.matchMedia("screen and (resolution: ".concat(f,"dppx)"));return a.addEventListener("change",e),function(){a.removeEventListener("change",e)}},[f]),(0,i.useEffect)(()=>{c&&(d("SceneLoader","ChangeSceneById",2),d("ClientBridge","SetTelemetryUrl","https://ekg.riotgames.com/messages"))},[c]),(0,s.jsxs)(l.Z,{children:[!c&&(0,s.jsx)(t.Z,{}),(0,s.jsx)(o.Y4,{className:"w-[1055px] h-[636px] absolute",unityProvider:a,devicePixelRatio:f})]})}},8358:function(e,a,n){"use strict";n.d(a,{Z:function(){return i}});var s=n(7437),t=n(6258),l=n.n(t);function i(){return(0,s.jsxs)("div",{className:l().loading,children:[(0,s.jsx)("img",{className:l().wall,src:"".concat("./Game","/images/loading/UI_LoadingScreen_Wall_00000.png"),alt:"Wall",draggable:"false"}),(0,s.jsx)("img",{className:l().grass,src:"".concat("./Game","/images/loading/UI_LoadingScreen_Grass_00000.png"),alt:"Wall",draggable:"false"}),(0,s.jsx)("img",{className:l().bar,src:"".concat("./Game","/images/loading/UI_LoadingScreen_ProgressBar_Empty_00000.png"),alt:"Empty Loading Bar",draggable:"false"}),(0,s.jsx)("video",{className:l().monkey,autoPlay:!0,muted:!0,loop:!0,children:(0,s.jsx)("source",{src:"".concat("./Game","/videos/loading/Monkey.webm"),type:"video/webm"})})]})}},2792:function(e,a,n){"use strict";n.d(a,{Z:function(){return i}});var s=n(7437),t=n(2265);let l=!1;function i(e){return(0,t.useEffect)(()=>{l||(l=!0,window.addEventListener("message",e=>{"rcp-fe-lol-home-hub-settings-observe"==e.data.messageType?e.data.data.testKey:e.data.messageType}))}),(0,s.jsx)("div",{className:"absolute w-[1055px] h-[636px] top-[82px] bg-gray-600",children:e.children})}},6258:function(e){e.exports={loading:"loading_loading__sPsDe",wall:"loading_wall__4AexV",grass:"loading_grass__z_YAz",bar:"loading_bar__XwcGU",monkey:"loading_monkey__7uovC"}}},function(e){e.O(0,[123,971,596,744],function(){return e(e.s=2480)}),_N_E=e.O()}]);