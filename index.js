import{a as w,S,i as n}from"./assets/vendor-C2ySes1p.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const P="55034469-fe8c7c81350cc4405e2a2064a",f=15;async function m(t,a){const r={key:P,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:f};return(await w.get("https://pixabay.com/api/",{params:r})).data}const y=document.querySelector(".gallery"),h=new S(".gallery a",{captionsData:"alt",captionDelay:250});h.refresh();function g(t){const r=t.map(o=>`
      <li class="gallery__item">
        <a href="${o.largeImageURL}">
          <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
        </a>
        <div class="info">
  <p class="info-item">
    <span class="info-title">Likes</span>
    <span class="info-value">${o.likes}</span>
  </p>
  <p class="info-item">
    <span class="info-title">Views</span>
    <span class="info-value">${o.views}</span>
  </p>
  <p class="info-item">
    <span class="info-title">Comments</span>
    <span class="info-value">${o.comments}</span>
  </p>
  <p class="info-item">
    <span class="info-title">Downloads</span>
    <span class="info-value">${o.downloads}</span>
  </p>
</div>
      </li>
    `).join("");y.insertAdjacentHTML("beforeend",r),h.refresh()}function q(){y.innerHTML=""}function L(){document.querySelector(".loader").classList.add("active")}function v(){document.querySelector(".loader").classList.remove("active")}function b(){document.querySelector(".button-load-more").classList.add("is-hidden")}function u(){document.querySelector(".button-load-more").classList.remove("is-hidden")}const p=document.querySelector(".form"),_=document.querySelector(".button-load-more");let i=1,c="",d=0;p.addEventListener("submit",async t=>{if(t.preventDefault(),c=p.querySelector('input[name="search-text"]').value.trim(),!c){n.warning({message:"Please enter a search term!"});return}i=1,q(),b(),L();try{const r=await m(c,i);if(d=r.totalHits,r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(r.hits),d>f?u():n.info({message:"We're sorry, but you've reached the end of search results."})}catch{n.error({message:"Something went wrong. Please try again later!"})}finally{v()}});_.addEventListener("click",async()=>{i+=1,b(),L();try{const t=await m(c,i);g(t.hits);const a=Math.ceil(d/f);i<a?u():n.info({message:"We're sorry, but you've reached the end of search results."});const r=document.querySelector(".gallery__item");if(r){const o=r.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}catch{n.error({message:"Something went wrong. Please try again later!"}),u()}finally{v()}});
//# sourceMappingURL=index.js.map
