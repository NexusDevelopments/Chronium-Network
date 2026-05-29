import{E as c}from"./events.tQB_qcWR.js";import{c as l,a as p,b as m,S as u}from"./serviceWorker.CuH8JwTj.js";import{S as f}from"./settings.DCFICEa6.js";import{l as t}from"./index.BDGy3wOt.js";import{M as g}from"./marketplace.Dj2ujoll.js";import{S as _}from"./values.C09ptiB_.js";const w=` 
     _   _      _           _         ____                  _               
    | \\ | | ___| |__  _   _| | __ _  / ___|  ___ _ ____   _(_) ___ ___  ___ 
    |  \\| |/ _ \\ '_ \\| | | | |/ _' | \\___ \\ / _ \\ '__\\ \\ / / |/ __/ _ \\/ __|
    | |\\  |  __/ |_) | |_| | | (_| |  ___) |  __/ |   \\ V /| | (_|  __/\\__ \\
    |_| \\_|\\___|_.__/ \\__,_|_|\\__,_| |____/ \\___|_|    \\_/ |_|\\___\\___||___/
    `,d=`Hello developer or curious individual & welcome to the console! 
There isn't a whole lot here for you unless you have run into an error.`,v=`In which case please include the info below when opening the issue: 

OS: ${navigator.platform} 
Browser: ${navigator.userAgent} 
Service workers: ${"serviceWorker"in navigator?"Yes":"No"}`,y=async()=>{t({type:"normal",bg:!1,prefix:!1},w),t({type:"normal",bg:!0,prefix:!1},d),t({type:"normal",bg:!0,prefix:!1},v),t({type:"info",bg:!0,prefix:!0},"General init...");for(const s of l())document.body.appendChild(s);await p();const e=await m("/baremux/worker.js"),a=new u(e),o=new g,{serviceWorker:r,bareMuxConn:n,sj:i}=await a.getSWInfo();return t({type:"info",bg:!0,prefix:!0},`General init completed! 

ServiceWorker: ${r.active?.state} 
BareMuxConn: ${n?"Active":"Not active"} 
ScramjetController: ${i?"Active":"Not active"}`),o},S=async e=>{const a=await e.getValueFromStore(_.marketPlace.appearance.theme.name),o=await e.getValueFromStore(_.marketPlace.appearance.theme.payload),r=await e.getValueFromStore(_.marketPlace.appearance.video),n=await e.getValueFromStore(_.marketPlace.appearance.image);a!==null&&e.theme({type:"normal",name:a,payload:o,sources:{video:r,bg:n}})},h=async e=>{t({type:"info",bg:!0,prefix:!0},"Initializing settings...");for await(const a of f.initDefaults());await S(e),t({type:"info",bg:!0,prefix:!0},"Initialized Settings!")},b=new c({events:{DOMContentLoaded:async()=>{const e=await y();await h(e)}},logging:!0});b.bind();
