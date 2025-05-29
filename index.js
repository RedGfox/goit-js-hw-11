import{a as u,S as f,i as n}from"./assets/vendor-BMHzDZyJ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="40648930-ea5840ed6517cb2256052da6b",m="https://pixabay.com/api/";async function y(s){return(await u.get(m,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),d=document.querySelector(".loader");let h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(t=>`
        <li class="gallery-item">
          <a href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${t.likes}</p>
            <p><b>Views:</b> ${t.views}</p>
            <p><b>Comments:</b> ${t.comments}</p>
            <p><b>Downloads:</b> ${t.downloads}</p>
          </div>
        </li>`).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function b(){l.innerHTML=""}function L(){d.classList.add("is-hidden")}function w(){d.classList.remove("is-hidden")}const c=document.querySelector(".search-form");document.querySelector(".gallery");document.querySelector(".loader");c.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){n.warning({title:"Увага",message:"Будь ласка, введіть пошуковий запит."});return}b(),w();try{const t=await y(o);t.hits.length===0?n.info({title:"Інформація",message:"За вашим запитом нічого не знайдено."}):g(t.hits),c.reset()}catch{n.error({title:"Помилка",message:"Сталася помилка при завантаженні зображень."})}finally{L()}});
//# sourceMappingURL=index.js.map
