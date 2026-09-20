/* empty css                      */import{a as p,S as d,i as a}from"./assets/vendor-B4VkUtbg.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f="123123123123Y",g="https://pixabay.com/api/";function y(i){return p.get(g,{params:{key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const l=document.querySelector("#gallery"),c=document.querySelector("#loader"),L=new d(".gallery a",{captionsData:"alt",captionDelay:250});function S(i){const t=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:r,views:n,comments:h,downloads:m})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img class="gallery-image" src="${o}" alt="${e}" />
          </a>
          <ul class="gallery-info">
            <li><h3>Likes</h3><p>${r}</p></li>
            <li><h3>Views</h3><p>${n}</p></li>
            <li><h3>Comments</h3><p>${h}</p></li>
            <li><h3>Downloads</h3><p>${m}</p></li>
          </ul>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",t),L.refresh()}function b(){l.innerHTML=""}function w(){c.classList.remove("is-hidden")}function P(){c.classList.add("is-hidden")}const u=document.querySelector("#search-form");u.addEventListener("submit",q);function q(i){i.preventDefault();const t=i.currentTarget.elements.searchQuery.value.trim();if(t===""){a.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}b(),w(),y(t).then(o=>{if(o.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(o.hits)}).catch(o=>{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(o)}).finally(()=>{P(),u.reset()})}
//# sourceMappingURL=index.js.map
