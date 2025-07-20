import{a as f,S as d,i as a}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="51404467-f83bfef3a4452826493eb29c6",m="https://pixabay.com/api/";async function y(s){return(await f.get(m,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.getElementById("loader"),h=new d(".gallery a");function g(s){const o=s.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <div class="info">
        <p>👍 ${t.likes}</p>
        <p>👁️ ${t.views}</p>
        <p>💬 ${t.comments}</p>
        <p>⬇️ ${t.downloads}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){c.innerHTML=""}function b(){l.classList.remove("hidden")}function v(){l.classList.add("hidden")}const u=document.querySelector(".form"),w=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const o=w.value.trim();if(!o){a.warning({message:"Please enter a search term.",position:"topRight"});return}L(),b();try{const t=await y(o);if(t.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits)}catch{a.error({message:"Error fetching images. Please try again later.",position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
