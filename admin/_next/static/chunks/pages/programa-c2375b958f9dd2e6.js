(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[725],{5272:function(r,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/programa",function(){return n(3537)}])},3537:function(r,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var t=n(5893);function a(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("header",{children:["Logo",(0,t.jsxs)("nav",{children:[(0,t.jsx)("a",{href:"#",children:"Inicio"}),(0,t.jsx)("a",{href:"#",children:"Programas"}),(0,t.jsx)("a",{href:"#",children:"Consultas"}),(0,t.jsx)("a",{href:"#",children:"Cerrar Sesi\xf3n"})]})]})})}function s(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("footer",{children:"Todos los derechos reservados"})})}function o(r){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{}),r.children,(0,t.jsx)(s,{})]})}var i=n(7294);function c(r){let{programas:e,setProgramas:n}=r,[a,s]=(0,i.useState)(""),[o,c]=(0,i.useState)(""),l=async r=>{try{r.preventDefault();let t=await fetch("https://pagina-voluntariado-frontend-glitch.glitch.me/programa",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nombre:a,descripcion:o})});if(!t.ok)throw Error("No se pudo guardar la categor\xeda...");let s=await t.json();console.dir(s),n([...e,s])}catch(r){console.error(r)}};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("form",{action:"form",method:"post",onSubmit:l,children:[(0,t.jsx)("label",{htmlFor:"nombre",children:"Nombre"}),(0,t.jsx)("input",{type:"text",id:"nombre",value:a,onChange:r=>s(r.target.value)}),(0,t.jsx)("label",{children:"Descripci\xf3n"}),(0,t.jsx)("textarea",{value:o,onChange:r=>c(r.target.value)}),(0,t.jsx)("button",{type:"submit",children:"Guardar"})]}),"Nombre: ",a," | Descripci\xf3n: ",o]})}function l(r){let{programas:e,setProgramas:n}=r,a=async()=>{try{let r=await fetch("https://pagina-voluntariado-frontend-glitch.glitch.me/programa");if(!r.ok)throw Error("Problemas al recuperar los programas!");let e=await r.json();n(e)}catch(r){console.error(r)}};(0,i.useEffect)(()=>{a()},[]);let s=async r=>{try{let e="https://pagina-voluntariado-frontend-glitch.glitch.me//programa?id="+r.id,n=await fetch(e,{method:"DELETE"});if(!n.ok)throw Error("Problemas al eliminar el programa!");await n.json(),console.log("Programa borrado de manera exitosa"),a()}catch(r){console.error({error:r.message})}};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{children:"Listado de Programas"}),(0,t.jsxs)("table",{border:1,children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Id"}),(0,t.jsx)("th",{children:"Nombre"}),(0,t.jsx)("th",{children:"Descripci\xf3n"}),(0,t.jsx)("th",{children:"Acciones"})]})}),(0,t.jsx)("tbody",{children:e.map(r=>(0,t.jsxs)("tr",{children:[" ",(0,t.jsx)("td",{children:r.id}),(0,t.jsx)("td",{children:r.nombre}),(0,t.jsx)("td",{children:r.descripcion}),(0,t.jsxs)("td",{children:[(0,t.jsx)("button",{children:"Editar"}),(0,t.jsx)("button",{onClick:()=>s(r),children:"Eliminar"})]})]},r.id))})]})]})}function d(r){let[e,n]=(0,i.useState)([]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c,{programas:e,setProgramas:n}),(0,t.jsx)("hr",{}),(0,t.jsx)(l,{programas:e,setProgramas:n})]})}function h(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(o,{children:[(0,t.jsx)("h1",{className:"titulo",children:"Programas"}),(0,t.jsx)(d,{})]})})}}},function(r){r.O(0,[774,888,179],function(){return r(r.s=5272)}),_N_E=r.O()}]);