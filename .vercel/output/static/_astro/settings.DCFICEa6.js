import{d as o,S as a}from"./values.C09ptiB_.js";import{S as c,s as l}from"./serviceWorker.CuH8JwTj.js";const d={ab:e=>{const r=window.open();if(!r)return;window.location.replace(e);const t=r.document.createElement("iframe");r.document.body.setAttribute("style","margin: 0; height: 100vh; width: 100%;"),t.setAttribute("style","border: none; width: 100%; height: 100%; margin: 0;"),t.src=window.location.href,r.document.body.appendChild(t)},blob:e=>{const r=window.open();if(!r)return;window.location.replace(e);const t=`
        <!DOCTYPE html>
        <html>
            <head>
                <style type="text/css">
                    body, html {
                        margin: 0;
                        padding: 0;
                        height: 100%;
                        width: 100%;
                        overflow: hidden;
                    }
                </style>
            </head>
            <body>
                <iframe style="border: none; width: 100%; height: 100%;" src="${window.location.href}"></iframe>
            </body>
        </html>
    `,s=new Blob([t],{type:"text/html"}),i=URL.createObjectURL(s);r.location.href=i},cloak:e=>{const r=document.getElementById("favicon"),t=(s,i)=>{document.title=s,r.href=i};switch(e){case"google":{t("Google","/cloaks/google.png");break}case"wikipedia":{t("Wikipedia","/cloaks/wikipedia.ico");break}case"canvas":{t("Dashboard","/cloaks/canvas.ico");break}case"classroom":{t("Home","/cloaks/classroom.png");break}case"powerschool":{t("PowerSchool","/cloaks/ps.ico");break}case"reset":o.setVal(a.tab.cloak,"default"),window.location.reload();default:return}}},n={change:e=>{o.setVal(a.proxy.proxy.key,e)},searchEngine:e=>{o.setVal(a.proxy.searchEngine,e)},wisp:e=>{o.setVal(a.proxy.wispServer,e)},transport:async e=>{const r=c.getInstances().next().value,{bareMuxConn:t}=await r.getSWInfo();await l(t,e),o.setVal(a.proxy.transport.key,e)}};async function*p(){yield n.change(o.getVal(a.proxy.proxy.key)?o.getVal(a.proxy.proxy.key):"automatic"),yield n.wisp(o.getVal(a.proxy.wispServer)?o.getVal(a.proxy.wispServer):"default"),yield n.transport(o.getVal(a.proxy.transport.key)?o.getVal(a.proxy.transport.key):"libcurl"),yield n.searchEngine(o.getVal(a.proxy.searchEngine)?o.getVal(a.proxy.searchEngine):"ddg")}const g={tab:d,proxy:n,initDefaults:p};export{g as S};
