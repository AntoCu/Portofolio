// =========================================
// ✨ GÉNÉRATION DU DÉCOR
// =========================================
const field = document.getElementById('stars');
for (let i = 0; i < 80; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  const size = Math.floor(Math.random() * 2) + 2;
  star.style.width = size + 'px'; star.style.height = size + 'px';
  star.style.top = Math.random() * 100 + '%'; star.style.left = Math.random() * 100 + '%';
  star.style.setProperty('--d', (Math.random() * 3 + 1) + 's');
  field.appendChild(star);
}

// Le petit badge planétaire : 100% opaque, bien calé en haut à droite !
const planetBadge = (src) => `
  <div class="hidden md:block absolute top-8 right-10 w-20 h-20 md:w-28 md:h-28 opacity-100 pointer-events-none z-10">
    <img src="${src}" class="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(78,212,230,0.6)]" style="image-rendering: pixelated;">
  </div>
`;

// =========================================
// 📝 MOTEUR DE RENDU DU CONTENU
// =========================================
let currentLang = 'fr';
let typeTimer;

function renderContent(lang) {
  const data = portfolioData[lang];

  for(let i=1; i<=5; i++) document.getElementById(`nav-${i}`).innerText = data.nav[`p${i}`];

  // P1 : MOI
  // On ajoute un md:mt-20 pour pousser le contenu en dessous du badge
  document.getElementById('panel-1').innerHTML = planetBadge('img/test.gif') + `
    <div class="flex flex-col md:flex-row gap-8 items-center text-center md:text-left mt-4 md:mt-20">
      <div class="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden border-4 border-spaceBlue/50 shadow-[0_0_15px_rgba(43,108,140,0.5)]"><img src="${data.moi.photo}" class="w-full h-full object-cover"></div>
      <div>
        <h1 class="text-4xl md:text-6xl font-black mb-2 uppercase leading-none text-white">${data.moi.titre} <br><span class="font-serif italic text-spaceAccent">${data.moi.accent}</span></h1>
        <p class="text-lg font-bold mb-4 flex items-center justify-center md:justify-start gap-2"><span class="text-spaceAccent">></span><span id="typed-text"></span><span class="cursor"></span></p>
        <p class="text-sm font-medium text-spaceLight/80">${data.moi.description}</p>
      </div>
    </div>
  `;

  // P2 : TECH
  let techHtml = data.tech.categories?.map(c => `
    <div class="border border-spaceBlue/50 p-4 bg-spaceBlue/10 rounded-xl">
      <h3 class="font-black uppercase border-b border-spaceBlue/50 mb-2 text-spaceAccent flex items-center gap-2"><span>${c.icon}</span> ${c.nom}</h3>
      <p class="text-xs font-bold mt-3">${c.skills}</p>
    </div>
  `).join('') || '';

  document.getElementById('panel-2').innerHTML = planetBadge('img/sombronce3.gif') + `
    <div class="mt-4 md:mt-20">
      <h2 class="text-4xl md:text-5xl font-serif italic mb-8 text-center text-white">${data.tech.titre}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${techHtml}</div>
    </div>
  `;

  // P3 : PROJETS
  let mainProjHtml = data.projets.principaux?.map(p => `
    <div class="border border-spaceBlue/50 rounded-xl overflow-hidden bg-spaceBlue/10 flex flex-col md:flex-row mb-4">
      <div class="bg-spaceBlue/30 text-white p-4 md:w-1/3 flex items-center justify-center border-b md:border-b-0 md:border-r border-spaceBlue/50 font-black italic text-center uppercase">${p.nom}</div>
      <div class="p-4 md:w-2/3 flex flex-col justify-between">
        <p class="text-xs font-bold mb-4">${p.desc}</p>
        <a href="${p.github}" target="_blank" class="brutal-btn w-full py-2 text-[10px] text-center block uppercase tracking-widest">Voir les logs</a>
      </div>
    </div>
  `).join('') || '';

  let secProjHtml = data.projets.secondaires?.map(p => `
    <div class="border border-spaceBlue/30 rounded-xl p-4 bg-spaceBlue/5 flex flex-col justify-between hover:bg-spaceBlue/20 transition">
      <div><h3 class="font-black italic text-spaceAccent mb-2 uppercase text-sm">${p.nom}</h3><p class="text-xs font-bold mb-4 ">${p.desc}</p></div>
      <a href="${p.github}" target="_blank" class="brutal-btn w-full py-1 text-[9px] text-center block uppercase tracking-widest border-spaceBlue/40 text-spaceBlue">Code</a>
    </div>
  `).join('') || '';

  document.getElementById('panel-3').innerHTML = planetBadge('img/sablieres.gif') + `
    <div class="mt-4 md:mt-20">
      <h2 class="text-4xl md:text-5xl font-serif italic mb-8 text-center text-white">${data.projets.titre}</h2>
      <div class="mb-8">${mainProjHtml}</div>
      <div class="flex items-center gap-4 mb-6 opacity-60"><div class="h-px bg-spaceBlue flex-1"></div><h3 class="text-xs font-black tracking-widest uppercase text-spaceBlue">Autres expéditions</h3><div class="h-px bg-spaceBlue flex-1"></div></div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${secProjHtml}</div>
    </div>
  `;

  // P4 : CONTACT
  let contactHtml = data.contact.liens?.map(l => `
    <a href="${l.url}" target="_blank" class="brutal-btn w-full py-4 text-center block uppercase tracking-widest text-sm hover:text-spaceAccent border-spaceBlue/50">${l.nom} : <span class="text-white">${l.texte}</span></a>
  `).join('') || '';

  document.getElementById('panel-4').innerHTML = planetBadge('img/atrebois.gif') + `
    <div class="mt-4 md:mt-20">
      <h2 class="text-4xl md:text-5xl font-serif italic mb-2 text-center text-white">${data.contact.titre}</h2>
      <p class="text-center font-bold mb-8 text-spaceLight/60">${data.contact.sous_titre}</p>
      <div class="space-y-4 max-w-md mx-auto">${contactHtml}</div>
    </div>
  `;

  // P5 : MOBILITÉ
  let mobHtml = data.mobilite.photos?.map((photo, index) => `
    <div class="border border-spaceBlue/50 rounded-xl overflow-hidden bg-spaceBlue/10 p-2 cursor-pointer hover:bg-spaceBlue/30 transition group" onclick="openModal(${index})">
      <div class="overflow-hidden rounded-lg mb-2"><img src="${photo.src}" alt="${photo.legende}" class="w-full h-32 object-cover group-hover:scale-110 transition duration-500"></div>
      <p class="text-xs text-center  italic group-hover:text-spaceLight transition">${photo.legende}</p>
    </div>
  `).join('') || '';

  document.getElementById('panel-5').innerHTML = planetBadge('img/Leviate.gif') + `
    <div class="mt-4 md:mt-20">
      <h2 class="text-4xl md:text-5xl font-serif italic mb-2 text-center text-spaceAccent">${data.mobilite.titre}</h2>
      <p class="text-center font-bold mb-8 text-spaceLight/60">${data.mobilite.sous_titre}</p>
      <div class="grid grid-cols-2 gap-4">${mobHtml}</div>
    </div>
  `;

  startTyping(data.moi.role);
}

function setLang(lang) {
  currentLang = lang;
  
  const btnFr = document.getElementById('lang-fr');
  const btnEn = document.getElementById('lang-en');
  if(btnFr) btnFr.className = lang === 'fr' ? 'font-black text-xs text-spaceLight' : 'font-bold text-xs text-spaceLight/40 hover:text-white cursor-pointer transition';
  if(btnEn) btnEn.className = lang === 'en' ? 'font-black text-xs text-spaceLight' : 'font-bold text-xs text-spaceLight/40 hover:text-white cursor-pointer transition';
  
  const btnFrMob = document.getElementById('lang-fr-mob');
  const btnEnMob = document.getElementById('lang-en-mob');
  if(btnFrMob) btnFrMob.className = lang === 'fr' ? 'font-black text-xs text-spaceLight' : 'font-bold text-xs text-spaceLight/40';
  if(btnEnMob) btnEnMob.className = lang === 'en' ? 'font-black text-xs text-spaceLight' : 'font-bold text-xs text-spaceLight/40';
  
  renderContent(lang);
}

function startTyping(text) {
  clearTimeout(typeTimer);
  const el = document.getElementById('typed-text');
  if(!el) return;
  el.textContent = '';
  let i = 0;
  function type() { if (i < text.length) { el.textContent += text[i++]; typeTimer = setTimeout(type, 60); } }
  type();
}

// =========================================
// 🚀 VOL DU VAISSEAU (PC UNIQUEMENT)
// =========================================
let currentPlanet = 1;
let isFlying = false;

function initShip() {
  if(window.innerWidth <= 768) return;
  const ship = document.getElementById('ship');
  const planet = document.getElementById(`p-${currentPlanet}`);
  planet.classList.add('active-planet');
  const rect = planet.getBoundingClientRect();
  ship.style.transform = `translate(${rect.left + rect.width / 2 - 24}px, ${rect.top + rect.height / 2 - 24}px) rotate(0deg)`;
}
window.addEventListener('load', initShip);
window.addEventListener('resize', initShip);

function flyTo(target) {
  if (window.innerWidth <= 768 || target === currentPlanet || isFlying) return;
  isFlying = true;
  const ship = document.getElementById('ship');
  
  document.getElementById(`panel-${currentPlanet}`).classList.remove('active');
  document.getElementById(`p-${currentPlanet}`).classList.remove('active-planet');
  ship.classList.add('engine-on');

  const targetRect = document.getElementById(`p-${target}`).getBoundingClientRect();
  const targetX = targetRect.left + targetRect.width / 2 - 24;
  const targetY = targetRect.top + targetRect.height / 2 - 24;
  const shipRect = ship.getBoundingClientRect();
  const angle = Math.atan2(targetY - shipRect.top, targetX - shipRect.left) * (180 / Math.PI) + 90;

  ship.style.transform = `translate(${shipRect.left}px, ${shipRect.top}px) rotate(${angle}deg)`;
  setTimeout(() => ship.style.transform = `translate(${targetX}px, ${targetY}px) rotate(${angle}deg)`, 50);

  for (let i = 1; i <= 5; i++) {
    const btn = document.getElementById(`nav-${i}`);
    if (i === target) btn.classList.add('active');
    else btn.classList.remove('active');
  }

  setTimeout(() => {
    ship.classList.remove('engine-on');
    document.getElementById(`panel-${target}`).classList.add('active');
    document.getElementById(`p-${target}`).classList.add('active-planet');
    currentPlanet = target;
    isFlying = false;
  }, 800);
}

// =========================================
// 📱 RADAR ET SCROLL (MOBILE UNIQUEMENT)
// =========================================
let currentMapPlanet = 1;

function toggleMap() {
  const modal = document.getElementById('mobile-map');
  const ship = document.getElementById('map-ship');
  const pTarget = document.getElementById(`map-p-${currentMapPlanet}`);
  
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden'); modal.classList.add('flex');
    setTimeout(() => modal.classList.remove('opacity-0'), 10);
    ship.style.top = pTarget.style.top; ship.style.left = pTarget.style.left;
  } else {
    modal.classList.add('opacity-0');
    setTimeout(() => { modal.classList.add('hidden'); modal.classList.remove('flex'); }, 300);
  }
}

function flyOnMap(target) {
  if (target === currentMapPlanet) {
    document.getElementById(`section-${target}`).scrollIntoView({ behavior: 'smooth' });
    toggleMap(); return;
  }
  const ship = document.getElementById('map-ship');
  const pTarget = document.getElementById(`map-p-${target}`);
  ship.classList.add('engine-on');

  const tRect = pTarget.getBoundingClientRect();
  const sRect = ship.getBoundingClientRect();
  const angle = Math.atan2(tRect.top - sRect.top, tRect.left - sRect.left) * (180 / Math.PI) + 90;

  ship.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
  setTimeout(() => { ship.style.top = pTarget.style.top; ship.style.left = pTarget.style.left; }, 50);

  setTimeout(() => {
    ship.classList.remove('engine-on');
    currentMapPlanet = target;
    document.getElementById(`section-${target}`).scrollIntoView({ behavior: 'smooth' });
    setTimeout(toggleMap, 400); 
  }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  const mainScroll = document.getElementById('main-scroll');
  mainScroll.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.view-section');
    sections.forEach((sec, index) => {
      const rect = sec.getBoundingClientRect();
      if(rect.top >= -10 && rect.top <= window.innerHeight / 2) currentMapPlanet = index + 1;
    });
  });
});

// =========================================
// 🖼️ LIGHTBOX PHOTOS
// =========================================
function openModal(index) {
  const photoData = portfolioData[currentLang].mobilite.photos[index];
  const modal = document.getElementById('image-modal');
  document.getElementById('modal-img').src = photoData.src;
  document.getElementById('modal-caption').innerText = photoData.legende;
  
  modal.classList.remove('hidden'); modal.classList.add('flex');
  setTimeout(() => modal.classList.remove('opacity-0'), 10);
}

function closeModal() {
  const modal = document.getElementById('image-modal');
  modal.classList.add('opacity-0');
  setTimeout(() => {
    modal.classList.add('hidden'); modal.classList.remove('flex');
    document.getElementById('modal-img').src = '';
  }, 300);
}

// Lancement
setLang('fr');