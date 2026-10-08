// ============================================================
// DEIL Homepage — Main Application Script
// Data Economy & Innovation Lab
// ============================================================

let currentLang = 'ko';

// ── Navigation mapping ────────────────────────────────────────
const navKeys = ['home', 'about', 'projects', 'dataInfra', 'people', 'alumni', 'contact'];
const sectionIds = ['home', 'about', 'projects', 'data-infra', 'people', 'alumni', 'contact'];

// ── Language Toggle ───────────────────────────────────────────
function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';

  const koBtn = document.getElementById('lang-ko');
  const enBtn = document.getElementById('lang-en');

  if (lang === 'ko') {
    koBtn.className = 'px-3 py-1 text-xs font-medium rounded-full transition-all bg-white shadow-sm text-sg-700';
    enBtn.className = 'px-3 py-1 text-xs font-medium rounded-full transition-all text-gray-500';
  } else {
    enBtn.className = 'px-3 py-1 text-xs font-medium rounded-full transition-all bg-white shadow-sm text-sg-700';
    koBtn.className = 'px-3 py-1 text-xs font-medium rounded-full transition-all text-gray-500';
  }

  renderAll();
}

// ── Mobile Menu ───────────────────────────────────────────────
let mobileMenuOpen = false;
function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  const mobileNav = document.getElementById('mobile-nav');
  const menuIcon = document.getElementById('menu-icon');

  if (mobileMenuOpen) {
    mobileNav.classList.remove('hidden');
    menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
  } else {
    mobileNav.classList.add('hidden');
    menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
  }
}

// ── Helper: Section Header ────────────────────────────────────
function sectionHeader(title, subtitle, light = false) {
  const titleColor = light ? 'text-white' : 'text-sg-800';
  const subtitleColor = light ? 'text-gray-200' : 'text-gray-500';
  return `
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl font-bold ${titleColor} mb-4">${title}</h2>
      <p class="${subtitleColor} text-lg max-w-2xl mx-auto">${subtitle}</p>
    </div>
  `;
}

// ── Helper: Badge Class ───────────────────────────────────────
function badgeClass(status) {
  const s = status.toLowerCase();
  if (s.includes('progress') || s.includes('진행') || s.includes('building') || s.includes('구축')) return 'badge badge-active';
  if (s.includes('planning') || s.includes('기획') || s.includes('design') || s.includes('설계')) return 'badge badge-planning';
  return 'badge badge-coming';
}

// ── Render All ────────────────────────────────────────────────
function renderAll() {
  renderDemoBanner();
  renderHeader();
  renderHero();
  renderAbout();
  // renderResearch(); // section removed
  renderProjects();
  renderDataInfra();
  renderPeople();
  renderAlumni();
  // renderOutputs(); // section removed
  // renderNews(); // section removed
  renderContact();
  renderFooter();
  setupScrollReveal();
}

// ── Demo Banner ───────────────────────────────────────────────
function renderDemoBanner() {
  document.getElementById('demo-banner').textContent = content.footer[currentLang].demo;
}

// ── Header / Navigation ───────────────────────────────────────
function renderHeader() {
  const nav = content.nav[currentLang];

  // Desktop nav
  const desktopNav = document.getElementById('desktop-nav');
  desktopNav.innerHTML = navKeys.map((key, i) =>
    `<a href="#${sectionIds[i]}" class="nav-link px-3 py-2 text-sm font-medium text-gray-600 hover:text-sg-600 rounded-md hover:bg-gray-50 transition-all" data-section="${sectionIds[i]}">${nav[key]}</a>`
  ).join('');

  // Mobile nav
  const mobileNav = document.getElementById('mobile-nav');
  mobileNav.innerHTML = navKeys.map((key, i) =>
    `<a href="#${sectionIds[i]}" onclick="toggleMobileMenu()" class="block px-3.5 py-2.5 text-sm font-medium text-gray-700 hover:text-sg-600 hover:bg-sg-50 rounded-lg transition-all">${nav[key]}</a>`
  ).join('');
}

// ── Hero Section ──────────────────────────────────────────────
function renderHero() {
  const h = content.hero[currentLang];
  document.getElementById('hero-lab-name').textContent = h.labName;
  document.getElementById('hero-main-copy').textContent = h.mainCopy;
  document.getElementById('hero-sub-copy').textContent = h.subCopy;
  document.getElementById('hero-cta1').textContent = h.cta1;
  document.getElementById('hero-cta2').textContent = h.cta2;
}

// ── About Section ─────────────────────────────────────────────
function renderAbout() {
  const a = content.about[currentLang];

  document.getElementById('about-content').innerHTML = `
    <!-- Asymmetric 2-col -->
    <div class="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 mb-14 sm:mb-20 lg:mb-24">
      <div class="lg:col-span-2">
        <div class="flex items-center gap-3 mb-4 sm:mb-5">
          <div class="accent-line"></div>
          <p class="text-sg-400 text-xs font-semibold tracking-[0.2em] uppercase">About</p>
        </div>
        <h2 class="section-reveal text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-gray-900 leading-tight sm:leading-[1.15] break-keep">${a.title}</h2>
      </div>
      <div class="lg:col-span-3">
        ${a.description.map(p => `
          <p class="section-reveal text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 break-keep">${p}</p>
        `).join('')}
      </div>
    </div>

    <!-- Mission & Vision — large quote blocks -->
    <div class="grid md:grid-cols-2 gap-8 md:gap-0 mb-14 sm:mb-20 lg:mb-24">
      <div class="section-reveal border-t border-gray-200 pt-6 sm:pt-8 pr-0 md:pr-12 lg:pr-16">
        <p class="text-sg-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4 sm:mb-6">${a.mission.title}</p>
        <p class="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed font-light break-keep">${a.mission.text}</p>
      </div>
      <div class="section-reveal border-t border-gray-200 pt-6 sm:pt-8 pl-0 md:pl-12 lg:pl-16">
        <p class="text-sg-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4 sm:mb-6">${a.vision.title}</p>
        <p class="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed font-light break-keep">${a.vision.text}</p>
      </div>
    </div>

    <!-- What We Build — clean numbered list -->
    <div>
      <p class="section-reveal text-sg-400 text-xs font-semibold tracking-[0.2em] uppercase mb-8 sm:mb-10">${a.whatWeBuildTitle}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-12 gap-y-7 sm:gap-y-10">
        ${a.whatWeBuildItems.map((item, i) => `
          <div class="section-reveal group">
            <span class="text-sg-200 text-3xl sm:text-5xl font-extralight tabular-nums">${String(i + 1).padStart(2, '0')}</span>
            <h4 class="font-semibold text-gray-900 text-sm sm:text-base mt-2 sm:mt-3 mb-1.5 sm:mb-2 break-keep">${item.title}</h4>
            <p class="text-gray-500 text-xs sm:text-sm leading-relaxed break-keep">${item.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ── Projects ──────────────────────────────────────────────────
function renderProjects() {
  const p = content.projects;
  const t = p[currentLang];
  const dsLabel = currentLang === 'ko' ? '데이터 소스' : 'Data Source';
  const outLabel = currentLang === 'ko' ? '예상 산출물' : 'Expected Output';

  document.getElementById('projects-content').innerHTML = `
    <div class="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 mb-4">
      <div class="lg:col-span-2">
        <div class="flex items-center gap-3 mb-4 sm:mb-5">
          <div class="accent-line"></div>
          <p class="text-sg-400 text-xs font-semibold tracking-[0.2em] uppercase">Projects</p>
        </div>
        <h2 class="section-reveal text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-gray-900 leading-tight sm:leading-[1.15] break-keep">${t.title}</h2>
        <p class="section-reveal text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed break-keep">${t.subtitle}</p>
      </div>
      <div class="lg:col-span-3">
        <div class="divide-y divide-gray-100">
          ${p.items.map((item, idx) => {
            const status = item.status[currentLang];
            return `
              <div class="section-reveal py-6 sm:py-8 ${idx === 0 ? 'pt-0' : ''}">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-2 sm:mb-3">
                  <h3 class="font-semibold text-gray-900 text-base sm:text-lg break-keep">${item.title[currentLang]}</h3>
                  <span class="text-[11px] sm:text-xs text-sg-600 font-medium bg-sg-50 border border-sg-200 rounded-full px-2.5 py-0.5 whitespace-nowrap">${status}</span>
                </div>
                <p class="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 break-keep">${item.desc[currentLang]}</p>
                <div class="flex flex-col sm:flex-row gap-1.5 sm:gap-x-8 text-xs text-gray-500">
                  <span><span class="text-gray-400 font-medium mr-1.5">${dsLabel}:</span>${item.dataSource[currentLang]}</span>
                  <span><span class="text-gray-400 font-medium mr-1.5">${outLabel}:</span>${item.output[currentLang]}</span>
                </div>
                ${item.details ? `
                  <div class="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                    ${item.details.map(d => `<span class="text-[11px] sm:text-xs text-gray-600 bg-gray-50 border border-gray-100 rounded-md px-2 py-0.5 break-keep">${d[currentLang]}</span>`).join('')}
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>

    <!-- Conference Series Section -->
    ${p.conferences && p.conferences.length > 0 ? `
      <div class="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-gray-100">
        <div class="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16">
          <div class="lg:col-span-2">
            <div class="flex items-center gap-3 mb-4 sm:mb-5">
              <div class="accent-line"></div>
              <p class="text-sg-400 text-xs font-semibold tracking-[0.2em] uppercase">Conference Series</p>
            </div>
            <h3 class="section-reveal text-xl sm:text-2xl font-bold text-gray-900 leading-snug break-keep">${p.conferencesTitle[currentLang]}</h3>
            <p class="section-reveal text-gray-500 text-xs sm:text-sm mt-3 leading-relaxed break-keep">${p.conferencesSubtitle[currentLang]}</p>
            <div class="section-reveal mt-6 p-4 rounded-xl bg-sg-50/60 border border-sg-100/60 text-xs text-sg-800 leading-relaxed">
              <span class="font-semibold text-sg-700 block mb-1">📢 ${currentLang === 'ko' ? '아카이브 안내' : 'Archive Notice'}</span>
              ${currentLang === 'ko' 
                ? '제3회 컨퍼런스 자료를 시작으로, 제4회·5회·6회 컨퍼런스 및 포럼 성과도 순차적으로 업데이트됩니다.' 
                : 'Starting with the 3rd Conference, archives for the 4th, 5th, and 6th conferences will be updated sequentially.'}
            </div>
          </div>

          <div class="lg:col-span-3 space-y-8">
            ${p.conferences.map(conf => `
              <div class="section-reveal bg-white rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <!-- Media Thumbnail Banner with Play Overlay -->
                <div class="relative aspect-[16/9] bg-gray-100 overflow-hidden cursor-pointer" onclick="openVideoModal('${conf.videoUrl}', '${conf.title[currentLang]}')">
                  <img src="${conf.thumbnail[currentLang]}" alt="${conf.title[currentLang]}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                  <div class="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 text-sg-700 shadow-xl flex items-center justify-center pl-1 group-hover:scale-110 group-hover:bg-sg-600 group-hover:text-white transition-all duration-300">
                      <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  <!-- Edition & Date Badges -->
                  <div class="absolute top-3 left-3 flex items-center gap-2">
                    <span class="px-2.5 py-1 text-xs font-bold rounded-md bg-sg-700 text-white shadow-sm">${conf.editionLabel[currentLang]}</span>
                    <span class="px-2.5 py-1 text-xs font-medium rounded-md bg-black/60 backdrop-blur-xs text-white">${conf.date}</span>
                  </div>
                  <div class="absolute bottom-3 right-3">
                    <span class="px-2.5 py-1 text-[11px] font-medium rounded-full bg-white/90 text-gray-800 shadow-xs flex items-center gap-1">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      ${conf.status[currentLang]}
                    </span>
                  </div>
                </div>

                <!-- Card Body -->
                <div class="p-5 sm:p-7">
                  <h4 class="text-lg sm:text-xl font-bold text-gray-900 leading-snug break-keep">${conf.title[currentLang]}</h4>
                  <p class="text-xs sm:text-sm text-sg-600 font-medium mt-1 mb-3 break-keep">${conf.subtitle[currentLang]}</p>
                  <p class="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 break-keep">${conf.desc[currentLang]}</p>

                  <!-- Highlights List -->
                  <div class="border-t border-gray-100 pt-4 mb-6 space-y-2.5">
                    <p class="text-gray-400 text-[11px] font-semibold tracking-wider uppercase">${currentLang === 'ko' ? '주요 세션 및 연사' : 'Key Sessions & Speakers'}</p>
                    ${conf.highlights.map(hl => `
                      <div class="flex items-start gap-2.5 text-xs">
                        <span class="px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-medium text-[11px] flex-shrink-0 mt-0.5">${hl.label[currentLang]}</span>
                        <div class="min-w-0 flex-1">
                          <p class="font-semibold text-gray-800 break-keep">${hl.speaker[currentLang]}</p>
                          <p class="text-gray-500 text-[11px] italic break-keep">${hl.topic[currentLang]}</p>
                        </div>
                      </div>
                    `).join('')}
                  </div>

                  <!-- Action Buttons -->
                  <div class="flex flex-wrap items-center gap-3 pt-3 border-t border-gray-100">
                    <button onclick="openVideoModal('${conf.videoUrl}', '${conf.title[currentLang]}')" class="inline-flex items-center gap-2 px-4 py-2 bg-sg-700 hover:bg-sg-800 text-white text-xs font-semibold rounded-lg shadow-sm hover:shadow-md transition-all active:scale-98">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      <span>${currentLang === 'ko' ? '행사 영상 / 중계 보기' : 'Watch Stream / Video'}</span>
                    </button>
                    <button onclick="openPosterModal('${conf.fullPoster[currentLang]}', '${conf.title[currentLang]}')" class="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 text-xs font-semibold rounded-lg transition-all active:scale-98">
                      <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                      <span>${currentLang === 'ko' ? '초청장 및 상세 일정표 (PDF/이미지)' : 'View Official Invitation'}</span>
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    ` : ''}
  `;
}

// ── Data Infrastructure ───────────────────────────────────────
function renderDataInfra() {
  const d = content.dataInfra;
  const t = d[currentLang];
  const g = d.governance[currentLang];

  document.getElementById('data-infra-content').innerHTML = `
    <div class="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
      <div class="lg:col-span-2">
        <div class="flex items-center gap-3 mb-4 sm:mb-5">
          <div class="w-10 h-[2px] bg-gradient-to-r from-sg-400 to-sg-300"></div>
          <p class="text-sg-200/60 text-xs font-semibold tracking-[0.2em] uppercase">Infrastructure</p>
        </div>
        <h2 class="section-reveal text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-white leading-tight sm:leading-[1.15] break-keep">${t.title}</h2>
        <p class="section-reveal text-gray-300/80 text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed break-keep">${t.disclaimer}</p>
      </div>
      <div class="lg:col-span-3">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          ${d.steps.map((step, i) => `
            <div class="section-reveal bg-white/5 sm:bg-transparent rounded-xl p-4 sm:p-0 border border-white/10 sm:border-0">
              <span class="text-white/20 text-3xl sm:text-4xl font-extralight">${String(i + 1).padStart(2, '0')}</span>
              <h4 class="text-white text-sm font-semibold mt-1.5 sm:mt-2 mb-1.5 sm:mb-2 break-keep">${step.label[currentLang]}</h4>
              <p class="text-gray-300/70 text-xs leading-relaxed break-keep">${step.desc[currentLang]}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Governance -->
    <div class="border-t border-white/10 pt-8 sm:pt-12">
      <div class="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16">
        <div class="lg:col-span-2">
          <p class="text-sg-200/60 text-xs font-semibold tracking-[0.2em] uppercase mb-2 sm:mb-4">Governance</p>
          <h3 class="section-reveal text-lg sm:text-xl font-semibold text-white break-keep">${g.title}</h3>
          <p class="section-reveal text-gray-300/70 text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed break-keep">${g.description}</p>
        </div>
        <div class="lg:col-span-3">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 sm:gap-y-4">
            ${g.principles.map(p => `
              <div class="section-reveal flex items-center gap-3 py-1.5 sm:py-2">
                <div class="w-1.5 h-1.5 rounded-full bg-sg-400 flex-shrink-0"></div>
                <span class="text-gray-200 text-xs sm:text-sm break-keep">${p}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

// ── People ────────────────────────────────────────────────────
function renderPeople() {
  const p = content.people;
  const t = p[currentLang];

  document.getElementById('people-content').innerHTML = `
    <div class="flex items-center gap-3 mb-4 sm:mb-5">
      <div class="accent-line"></div>
      <p class="text-sg-400 text-xs font-semibold tracking-[0.2em] uppercase">People</p>
    </div>
    <h2 class="section-reveal text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-gray-900 leading-tight sm:leading-[1.15] mb-8 sm:mb-12 lg:mb-16 break-keep">${t.title}</h2>

    ${p.categories.map((cat, catIdx) => {
      const isDirector = cat.id === 'director';
      return `
        <div class="${catIdx > 0 ? 'mt-10 sm:mt-16' : ''}">
          <p class="section-reveal text-gray-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6 sm:mb-8 border-b border-gray-100 pb-2.5 sm:pb-3">${cat.label[currentLang]}</p>

          ${isDirector ? `
            <!-- Director: large feature layout -->
            ${cat.members.map(m => `
              <div class="section-reveal grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-start">
                <div class="md:col-span-1 max-w-[220px] sm:max-w-xs md:max-w-none mx-auto md:mx-0 w-full">
                  ${m.photo
                    ? `<img src="${m.photo}" alt="${m.name[currentLang]}" class="w-full aspect-[3/4] object-cover object-top rounded-lg sm:rounded-sm shadow-sm hover:scale-[1.02] transition-transform duration-500">`
                    : `<div class="w-full aspect-[3/4] bg-gray-100 rounded-lg sm:rounded-sm flex items-center justify-center"><span class="text-4xl text-gray-300">${m.name[currentLang].charAt(0)}</span></div>`
                  }
                </div>
                <div class="md:col-span-2 py-1 sm:py-2">
                  <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-1 text-center md:text-left">${m.link && m.link !== '#' ? `<a href="${m.link}" target="_blank" class="hover:text-sg-500 transition-colors">${m.name[currentLang]}</a>` : m.name[currentLang]}</h3>
                  <p class="text-sg-600 text-xs sm:text-sm font-medium mb-3 sm:mb-4 text-center md:text-left">${m.role[currentLang]}</p>
                  <p class="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 text-center md:text-left break-keep">${m.affiliation[currentLang]}</p>
                  <div class="border-t border-gray-100 pt-4 sm:pt-5 space-y-2.5 sm:space-y-3">
                    <div>
                      <p class="text-gray-400 text-[11px] sm:text-xs uppercase tracking-wider mb-0.5 sm:mb-1">${currentLang === 'ko' ? '연구분야' : 'Research'}</p>
                      <p class="text-gray-700 text-xs sm:text-sm break-keep">${m.interest[currentLang]}</p>
                    </div>
                    ${m.education ? `
                      <div>
                        <p class="text-gray-400 text-[11px] sm:text-xs uppercase tracking-wider mb-0.5 sm:mb-1">${currentLang === 'ko' ? '학력' : 'Education'}</p>
                        <p class="text-gray-700 text-xs sm:text-sm break-keep">${m.education[currentLang]}</p>
                      </div>
                    ` : ''}
                  </div>
                </div>
              </div>
            `).join('')}
          ` : `
            <!-- Faculty: 2-column on mobile, 3 on sm, 4 on lg -->
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-8">
              ${cat.members.map(m => `
                <div class="section-reveal group flex flex-col">
                  <div class="mb-2.5 sm:mb-4 overflow-hidden rounded-lg sm:rounded-sm bg-gray-50 shadow-2xs">
                    ${m.photo
                      ? `<img src="${m.photo}" alt="${m.name[currentLang]}" class="w-full aspect-[3/4] object-cover object-top group-hover:scale-[1.03] transition-transform duration-500">`
                      : `<div class="w-full aspect-[3/4] bg-gray-100 flex items-center justify-center"><span class="text-2xl sm:text-3xl text-gray-300">${m.name[currentLang].charAt(0)}</span></div>`
                    }
                  </div>
                  <h4 class="font-semibold text-gray-900 text-sm sm:text-base break-keep">${m.link && m.link !== '#' ? `<a href="${m.link}" target="_blank" class="hover:text-sg-500 transition-colors">${m.name[currentLang]}</a>` : m.name[currentLang]}</h4>
                  <p class="text-gray-500 text-[11px] sm:text-xs mt-0.5 sm:mt-1 leading-snug break-keep">${m.affiliation[currentLang]}</p>
                  <p class="text-gray-400 text-[11px] sm:text-xs mt-0.5 sm:mt-1 italic leading-snug break-keep line-clamp-2">${m.interest[currentLang]}</p>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      `;
    }).join('')}
    ${renderTeam()}
  `;
}

// ── Research Team ─────────────────────────────────────────────
function renderTeam() {
  const team = content.team;
  if (!team || !team.members || team.members.length === 0) return '';
  const t = team[currentLang];

  return `
    <div class="mt-12 sm:mt-16 pt-10 sm:pt-14 border-t border-gray-100">
      <p class="section-reveal text-gray-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6 sm:mb-8 border-b border-gray-100 pb-2.5 sm:pb-3">${t.title}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        ${team.members.map(member => `
          <div class="section-reveal bg-white rounded-xl border border-gray-100 shadow-2xs hover:shadow-md hover:border-sg-100 transition-all duration-300 p-5 flex flex-col justify-between group">
            <div>
              <!-- Profile Top -->
              <div class="flex items-start gap-3.5 sm:gap-4 mb-3.5">
                ${member.photo
                  ? `<img src="${member.photo}" alt="${member.name[currentLang]}" class="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0 border-2 border-white ring-1 ring-gray-100 shadow-2xs group-hover:scale-105 transition-transform duration-300">`
                  : `<div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-sg-50 text-sg-700 font-semibold flex items-center justify-center text-sm sm:text-base border border-sg-100 flex-shrink-0 shadow-2xs" role="img" aria-label="${member.name[currentLang]}">${member.initials}</div>`
                }
                <div class="min-w-0 flex-1">
                  <h4 class="font-bold text-gray-900 text-base leading-snug">${member.name[currentLang]}</h4>
                  <p class="text-gray-500 text-xs mt-1 leading-snug break-keep">${member.affiliation[currentLang]}</p>
                </div>
              </div>

              <!-- Role & Interests -->
              <div class="space-y-2 pt-3 border-t border-gray-50 text-xs">
                <div>
                  <span class="text-gray-400 text-[11px] font-medium mr-1.5">${t.roleLabel}:</span>
                  <span class="text-gray-700 break-keep leading-relaxed">${member.role[currentLang]}</span>
                </div>
                <div>
                  <span class="text-gray-400 text-[11px] font-medium mr-1.5">${t.interestLabel}:</span>
                  <span class="text-gray-600 break-keep leading-relaxed italic">${member.interest[currentLang]}</span>
                </div>
              </div>
            </div>

            <!-- Contact Footer -->
            <div class="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-xs">
              ${member.email
                ? `<a href="mailto:${member.email}" class="inline-flex items-center gap-1.5 text-sg-700 hover:text-sg-800 text-[11px] font-medium hover:underline break-all transition-colors" title="${member.name[currentLang]} ${t.emailLabel}">
                    <svg class="w-3.5 h-3.5 flex-shrink-0 text-sg-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
                    <span>${member.email}</span>
                  </a>`
                : '<span></span>'
              }
              ${member.linkedin
                ? `<a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-sg-700 hover:text-sg-800 text-[11px] font-medium hover:underline transition-colors">
                    <span>LinkedIn</span>
                    <svg class="w-3 h-3 text-sg-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>
                  </a>`
                : ''
              }
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ── Alumni / Student Placement ────────────────────────────────
function renderAlumni() {
  const al = content.alumni;
  const t = al[currentLang];

  document.getElementById('alumni-content').innerHTML = `
    <div class="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 mb-10 sm:mb-16">
      <div class="lg:col-span-2">
        <div class="flex items-center gap-3 mb-4 sm:mb-5">
          <div class="accent-line"></div>
          <p class="text-sg-400 text-xs font-semibold tracking-[0.2em] uppercase">Placement</p>
        </div>
        <h2 class="section-reveal text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-gray-900 leading-tight sm:leading-[1.15] break-keep">${t.title}</h2>
        <p class="section-reveal text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed break-keep">${t.description}</p>

        <div class="section-reveal flex flex-wrap gap-1.5 sm:gap-2 mt-5 sm:mt-8">
          ${al.careerPaths.map(cp => `
            <span class="text-[11px] sm:text-xs text-gray-600 bg-white rounded-md px-2.5 py-1 border border-gray-100 shadow-2xs">${cp.label[currentLang]}</span>
          `).join('')}
        </div>
      </div>

      <div class="lg:col-span-3 space-y-8 sm:space-y-12">
        ${al.items.map(item => `
          <div class="section-reveal">
            <!-- Large quote -->
            <p class="text-gray-700 text-sm sm:text-base leading-relaxed sm:leading-[1.9] mb-4 sm:mb-6 break-keep">\u201C${item.quote[currentLang]}\u201D</p>

            <!-- Attribution -->
            <div class="flex items-center gap-3.5 sm:gap-4 border-t border-gray-100 pt-4 sm:pt-5">
              ${item.photo
                ? `<img src="${item.photo}" alt="${item.name[currentLang]}" class="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0 border border-gray-100">`
                : `<div class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0"><span class="text-sm text-gray-400">${item.name[currentLang].charAt(0)}</span></div>`
              }
              <div class="min-w-0">
                <p class="font-semibold text-gray-900 text-sm">${item.name[currentLang]}</p>
                <p class="text-sg-700 text-xs font-medium break-keep">${item.placement[currentLang]}</p>
                <p class="text-gray-400 text-[11px] sm:text-xs">${item.degree[currentLang]} · ${item.period}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <p class="section-reveal text-[11px] sm:text-xs text-gray-400 italic break-keep">${t.consentNote}</p>
  `;
}

// ── Contact ───────────────────────────────────────────────────
function renderContact() {
  const c = content.contact[currentLang];

  document.getElementById('contact-content').innerHTML = `
    <div class="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16">
      <div class="lg:col-span-2">
        <div class="flex items-center gap-3 mb-4 sm:mb-5">
          <div class="accent-line"></div>
          <p class="text-sg-400 text-xs font-semibold tracking-[0.2em] uppercase">Contact</p>
        </div>
        <h2 class="section-reveal text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-gray-900 leading-tight sm:leading-[1.15] break-keep">${c.title}</h2>
        <p class="section-reveal text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed break-keep">${c.collabNote}</p>
      </div>
      <div class="lg:col-span-3">
        <div class="divide-y divide-gray-100">
          <div class="section-reveal pb-5 sm:pb-6">
            <p class="text-gray-400 text-[11px] sm:text-xs uppercase tracking-wider mb-1 sm:mb-2">${c.email}</p>
            <a href="mailto:${c.emailValue}" class="text-sg-700 hover:text-sg-800 hover:underline text-sm sm:text-base font-medium break-all sm:break-normal transition-colors">${c.emailValue}</a>
          </div>
          <div class="section-reveal py-5 sm:py-6">
            <p class="text-gray-400 text-[11px] sm:text-xs uppercase tracking-wider mb-1 sm:mb-2">${c.dept}</p>
            <p class="text-gray-800 text-sm sm:text-base break-keep">${c.deptValue}</p>
          </div>
          <div class="section-reveal py-5 sm:py-6">
            <p class="text-gray-400 text-[11px] sm:text-xs uppercase tracking-wider mb-1 sm:mb-2">${c.location}</p>
            <p class="text-gray-800 text-sm sm:text-base break-keep">${c.locationValue}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ── Footer ────────────────────────────────────────────────────
function renderFooter() {
  const f = content.footer[currentLang];
  document.getElementById('footer-demo').textContent = f.demo;
  document.getElementById('footer-copy').innerHTML = `${f.copyright}<br><span class="text-gray-500 text-xs">${f.confidentiality}</span>`;
}

// ── Scroll Reveal (IntersectionObserver) ──────────────────────
function setupScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.section-reveal').forEach(el => {
    observer.observe(el);
  });
}

// ── Active Nav Highlighting ───────────────────────────────────
function setupNavHighlight() {
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        document.querySelectorAll('.nav-link').forEach(link => {
          if (link.dataset.section === id) {
            link.classList.add('text-sg-700', 'bg-sg-50', 'font-semibold');
            link.classList.remove('text-gray-600');
          } else {
            link.classList.remove('text-sg-700', 'bg-sg-50', 'font-semibold');
            link.classList.add('text-gray-600');
          }
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-80px 0px -60% 0px' });

  sections.forEach(section => observer.observe(section));
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setLang('ko');
  setupNavHighlight();
});

// ── Media Modal Controllers ──────────────────────────────────
function openPosterModal(imageSrc, title) {
  const modal = document.getElementById('media-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  modalTitle.textContent = title || (currentLang === 'ko' ? '컨퍼런스 상세 초청장' : 'Conference Invitation');
  modalBody.innerHTML = `
    <div class="max-w-2xl w-full mx-auto my-auto flex flex-col items-center">
      <img src="${imageSrc}" alt="${modalTitle.textContent}" class="max-h-[76vh] w-auto object-contain rounded-lg shadow-2xl">
      <a href="${imageSrc}" download class="mt-3.5 inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-full transition-colors">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
        <span>${currentLang === 'ko' ? '고화질 원본 다운로드' : 'Download High-Res Invitation'}</span>
      </a>
    </div>
  `;
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function openVideoModal(videoUrl, title) {
  const modal = document.getElementById('media-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  modalTitle.textContent = title || (currentLang === 'ko' ? '컨퍼런스 영상' : 'Conference Video');
  modalBody.innerHTML = `
    <div class="w-full max-w-2xl bg-gray-900 rounded-xl p-8 text-center text-white my-auto flex flex-col items-center">
      <div class="w-16 h-16 rounded-full bg-sg-700 flex items-center justify-center mb-5 text-white pl-1 shadow-lg ring-4 ring-sg-600/30">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </div>
      <h4 class="text-lg sm:text-xl font-bold mb-2 break-keep">${title}</h4>
      <p class="text-xs sm:text-sm text-gray-300 max-w-md mb-6 leading-relaxed break-keep">
        ${currentLang === 'ko' 
          ? '본 컨퍼런스 세션 및 생중계 스트리밍은 웹 심포지엄 및 연구소 아카이브 플랫폼을 통해 제공됩니다.' 
          : 'Conference session streams and recordings are hosted on the webinar archive platform.'}
      </p>
      <a href="${videoUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 bg-sg-600 hover:bg-sg-500 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-98">
        <span>${currentLang === 'ko' ? '온라인 중계 아카이브 페이지 열기' : 'Open Streaming Archive'}</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
      </a>
    </div>
  `;
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeMediaModal() {
  const modal = document.getElementById('media-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

function handleModalBackdropClick(event) {
  if (event.target.id === 'media-modal') {
    closeMediaModal();
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMediaModal();
});
