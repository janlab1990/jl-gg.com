(()=>{'use strict';
const KEY='jl_site_language_v4';
let lang='pl';try{lang=localStorage.getItem(KEY)==='en'?'en':'pl'}catch(e){}
function apply(){document.documentElement.lang=lang;
 document.querySelectorAll('[data-pl][data-en]').forEach(el=>{el.textContent=el.getAttribute('data-'+lang)});
 document.querySelectorAll('.lang-choice').forEach(b=>{let active=b.dataset.lang===lang;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
 document.title=lang==='pl'?'JL GLOBAL GROUP | Międzynarodowy handel surowcami':'JL GLOBAL GROUP | International Commodity Trading';
 document.querySelectorAll('img[data-alt-pl][data-alt-en]').forEach(i=>i.alt=i.getAttribute('data-alt-'+lang));
}
document.querySelectorAll('.lang-choice').forEach(b=>b.addEventListener('click',()=>{lang=b.dataset.lang;try{localStorage.setItem(KEY,lang)}catch(e){}apply()}));apply();
})();