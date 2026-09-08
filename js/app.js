// ============================================================
// DEIL Homepage — Main Application Script
// Data Economy & Innovation Lab
// ============================================================

let currentLang = 'ko';

// ── Navigation mapping ────────────────────────────────────────
const navKeys = ['home', 'about', 'research', 'projects', 'dataInfra', 'people', 'alumni', 'outputs', 'news', 'contact'];
const sectionIds = ['home', 'about', 'research', 'projects', 'data-infra', 'people', 'alumni', 'outputs', 'news', 'contact'];

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
  renderResearch();
  renderProjects();
  renderDataInfra();
  renderPeople();
  renderAlumni();
  renderOutputs();
  renderNews();
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
    `<a href="#${sectionIds[i]}" onclick="toggleMobileMenu()" class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-sg-600 hover:bg-gray-50 rounded-md transition-all">${nav[key]}</a>`
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
    ${sectionHeader(a.title, a.subtitle)}

    <!-- Description -->
    <div class="max-w-4xl mx-auto mb-16">
      ${a.description.map(p => `
        <p class="section-reveal text-gray-600 text-base leading-relaxed mb-5">${p}</p>
      `).join('')}
    </div>

    <!-- Mission & Vision -->
    <div class="grid sm:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
      <div class="section-reveal bg-white rounded-xl border border-gray-100 shadow-sm p-6 border-l-4 border-l-sg-500 card-hover">
        <h3 class="font-semibold text-sg-800 text-lg mb-2">${a.mission.title}</h3>
        <p class="text-gray-500 text-sm leading-relaxed">${a.mission.text}</p>
      </div>
      <div class="section-reveal bg-white rounded-xl border border-gray-100 shadow-sm p-6 border-l-4 border-l-sg-500 card-hover">
        <h3 class="font-semibold text-sg-800 text-lg mb-2">${a.vision.title}</h3>
        <p class="text-gray-500 text-sm leading-relaxed">${a.vision.text}</p>
      </div>
    </div>

    <!-- What We Build -->
    <div class="max-w-5xl mx-auto">
      <h3 class="section-reveal text-xl font-semibold text-sg-800 text-center mb-8">${a.whatWeBuildTitle}</h3>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${a.whatWeBuildItems.map((item, i) => `
          <div class="section-reveal bg-white rounded-xl border border-gray-100 shadow-sm p-6 card-hover ${i >= 3 ? 'sm:col-span-1 lg:col-span-1' : ''}">
            <div class="w-8 h-8 rounded-lg bg-sg-50 flex items-center justify-center mb-4">
              <span class="text-sg-400 text-xs font-bold">${String(i + 1).padStart(2, '0')}</span>
            </div>
            <h4 class="font-semibold text-sg-800 text-base mb-2">${item.title}</h4>
            <p class="text-gray-500 text-sm leading-relaxed">${item.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ── Research Areas ────────────────────────────────────────────
function renderResearch() {
  const r = content.researchAreas;
  const t = r[currentLang];

  document.getElementById('research-content').innerHTML = `
    ${sectionHeader(t.title, t.subtitle)}
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      ${r.items.map(item => {
        const status = item.status[currentLang];
        return `
          <div class="section-reveal bg-white rounded-xl border border-gray-100 shadow-sm p-6 card-hover">
            <div class="flex items-start justify-between mb-4">
              <div class="w-10 h-10 rounded-lg bg-sg-50 flex items-center justify-center"><div class="w-2.5 h-2.5 rounded-full bg-sg-400"></div></div>
              <span class="${badgeClass(status)}">${status}</span>
            </div>
            <h3 class="font-semibold text-sg-800 text-lg mb-2">${item.title[currentLang]}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">${item.desc[currentLang]}</p>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ── Projects ──────────────────────────────────────────────────
function renderProjects() {
  const p = content.projects;
  const t = p[currentLang];
  const dsLabel = currentLang === 'ko' ? '데이터 소스' : 'Data Source';
  const outLabel = currentLang === 'ko' ? '예상 산출물' : 'Expected Output';
  const detailLabel = currentLang === 'ko' ? '주요 내용' : 'Key Activities';

  document.getElementById('projects-content').innerHTML = `
    ${sectionHeader(t.title, t.subtitle)}
    <div class="grid lg:grid-cols-2 gap-6">
      ${p.items.map(item => {
        const status = item.status[currentLang];
        const detailsHtml = item.details ? `
          <div class="mt-4 pt-4 border-t border-gray-100">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">${detailLabel}</p>
            <ul class="space-y-1.5">
              ${item.details.map(d => `
                <li class="flex items-start gap-2 text-sm text-gray-600">
                  <svg class="w-4 h-4 text-sg-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                  ${d[currentLang]}
                </li>
              `).join('')}
            </ul>
          </div>
        ` : '';

        return `
          <div class="section-reveal bg-white rounded-xl border border-gray-100 shadow-sm p-6 card-hover">
            <div class="flex items-start justify-between mb-3">
              <h3 class="font-semibold text-sg-800 text-lg pr-4">${item.title[currentLang]}</h3>
              <span class="${badgeClass(status)} whitespace-nowrap">${status}</span>
            </div>
            <p class="text-gray-500 text-sm mb-4 leading-relaxed">${item.desc[currentLang]}</p>
            <div class="space-y-2 text-sm">
              <div class="flex gap-2">
                <span class="text-gray-400 font-medium min-w-[100px]">${dsLabel}</span>
                <span class="text-gray-600">${item.dataSource[currentLang]}</span>
              </div>
              <div class="flex gap-2">
                <span class="text-gray-400 font-medium min-w-[100px]">${outLabel}</span>
                <span class="text-gray-600">${item.output[currentLang]}</span>
              </div>
            </div>
            ${detailsHtml}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ── Data Infrastructure ───────────────────────────────────────
function renderDataInfra() {
  const d = content.dataInfra;
  const t = d[currentLang];
  const g = d.governance[currentLang];

  document.getElementById('data-infra-content').innerHTML = `
    ${sectionHeader(t.title, t.subtitle, true)}

    <!-- Pipeline Steps with descriptions -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
      ${d.steps.map((step, i) => `
        <div class="section-reveal bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15 card-hover">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-gray-200 text-xs font-bold flex-shrink-0">${String(i + 1).padStart(2, '0')}</div>
            <h4 class="text-white text-sm font-semibold">${step.label[currentLang]}</h4>
          </div>
          <p class="text-gray-200/80 text-xs leading-relaxed">${step.desc[currentLang]}</p>
        </div>
      `).join('')}
    </div>

    <!-- Disclaimer -->
    <div class="section-reveal bg-white/5 border border-white/15 rounded-xl p-6 mb-12 max-w-3xl mx-auto">
      <div class="flex items-start gap-3">
        <svg class="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/></svg>
        <p class="text-gray-200 text-sm leading-relaxed">${t.disclaimer}</p>
      </div>
    </div>

    <!-- Data Governance -->
    <div class="max-w-4xl mx-auto">
      <h3 class="section-reveal text-xl font-semibold text-white text-center mb-3">${g.title}</h3>
      <p class="section-reveal text-gray-200/80 text-sm text-center mb-8 max-w-2xl mx-auto leading-relaxed">${g.description}</p>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        ${g.principles.map(p => `
          <div class="section-reveal flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/10">
            <svg class="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
            </svg>
            <span class="text-gray-100 text-sm">${p}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ── People ────────────────────────────────────────────────────
function renderPeople() {
  const p = content.people;
  const t = p[currentLang];

  document.getElementById('people-content').innerHTML = `
    ${sectionHeader(t.title, t.subtitle)}
    ${p.categories.map(cat => `
      <div class="mb-12">
        <h3 class="text-xl font-semibold text-sg-700 mb-2 pb-2 border-b border-gray-200">${cat.label[currentLang]}</h3>
        ${cat.note ? `<p class="text-xs text-gray-400 italic mb-4">${cat.note[currentLang]}</p>` : ''}
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          ${cat.members.map(m => `
            <div class="section-reveal bg-white rounded-xl border border-gray-100 shadow-sm p-5 card-hover">
              <div class="flex items-start gap-4">
                <div class="photo-placeholder">
                  <span>${m.name[currentLang].charAt(0)}</span>
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="font-semibold text-sg-800 text-base">${m.link && m.link !== '#' ? `<a href="${m.link}" target="_blank" class="hover:text-sg-500 transition-colors">${m.name[currentLang]}</a>` : m.name[currentLang]}</h4>
                  <p class="text-gray-400 text-xs mt-0.5">${m.role[currentLang]}</p>
                  <p class="text-gray-500 text-xs mt-1">${m.affiliation[currentLang]}</p>
                  <p class="text-gray-400 text-xs mt-2 italic">${m.interest[currentLang]}</p>
                  ${m.education ? `<p class="text-gray-400 text-xs mt-1">${m.education[currentLang]}</p>` : ''}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('')}
  `;
}

// ── Alumni / Student Placement ────────────────────────────────
function renderAlumni() {
  const al = content.alumni;
  const t = al[currentLang];

  document.getElementById('alumni-content').innerHTML = `
    ${sectionHeader(t.title, t.subtitle)}

    <!-- Description -->
    <p class="section-reveal text-gray-600 text-base text-center max-w-3xl mx-auto mb-10">${t.description}</p>

    <!-- Career Path Categories -->
    <div class="section-reveal flex flex-wrap justify-center gap-3 mb-14">
      ${al.careerPaths.map(cp => `
        <span class="px-4 py-2 bg-white rounded-full text-sm font-medium text-sg-600 border border-sg-100 shadow-sm">${cp.label[currentLang]}</span>
      `).join('')}
    </div>

    <!-- Testimonial Label -->
    <h3 class="section-reveal text-lg font-semibold text-sg-700 text-center mb-8">${t.testimonialLabel}</h3>

    <!-- Alumni Cards -->
    <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      ${al.items.map(item => `
        <div class="section-reveal bg-white rounded-xl border border-gray-100 shadow-sm p-6 card-hover">
          <div class="flex items-start gap-4 mb-4">
            ${item.photo
              ? `<img src="${item.photo}" alt="${item.name[currentLang]}" class="w-20 h-20 rounded-full object-cover flex-shrink-0 border-2 border-sg-100">`
              : `<div class="photo-placeholder flex-shrink-0"><span>${item.name[currentLang].charAt(0)}</span></div>`
            }
            <div class="flex-1 min-w-0">
              <h4 class="font-semibold text-sg-800 text-base">${item.name[currentLang]}</h4>
              <p class="text-gray-400 text-xs mt-0.5">${item.degree[currentLang]} · ${item.period}</p>
              <p class="text-gray-500 text-xs mt-1">${item.labRole[currentLang]}</p>
            </div>
          </div>

          <!-- Placement -->
          <div class="flex items-center gap-2 mb-4 bg-sg-50 rounded-lg px-4 py-2.5">
            <svg class="w-4 h-4 text-sg-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
            </svg>
            <span class="text-sg-700 text-sm font-medium">${item.placement[currentLang]}</span>
          </div>

          <!-- Quote -->
          <div class="relative pl-4 border-l-2 border-sg-200">
            <svg class="absolute -left-1.5 -top-1 w-3 h-3 text-sg-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.998 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.986z"/>
            </svg>
            <p class="text-gray-500 text-sm italic leading-relaxed">${item.quote[currentLang]}</p>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Consent Note -->
    <p class="section-reveal text-center text-xs text-gray-400 italic mt-10">${t.consentNote}</p>
  `;
}

// ── Outputs ───────────────────────────────────────────────────
function renderOutputs() {
  const o = content.outputs;
  const t = o[currentLang];

  // SVG icons per category for visual variety
  const icons = [
    '<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>',
    '<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>',
    '<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"/>',
    '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>',
    '<path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>',
    '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"/>',
    '<path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>',
  ];

  document.getElementById('outputs-content').innerHTML = `
    ${sectionHeader(t.title, t.subtitle)}
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      ${o.categories.map((cat, i) => `
        <div class="section-reveal bg-white rounded-xl border border-gray-100 shadow-sm p-8 text-center card-hover">
          <div class="w-10 h-10 rounded-lg bg-sg-50 flex items-center justify-center mx-auto mb-4">
            <svg class="w-5 h-5 text-sg-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">${icons[i] || icons[0]}</svg>
          </div>
          <h3 class="font-semibold text-sg-800 text-base mb-3">${cat.label[currentLang]}</h3>
          <span class="badge badge-coming">${t.comingSoon}</span>
        </div>
      `).join('')}
    </div>
  `;
}

// ── News ──────────────────────────────────────────────────────
function renderNews() {
  const n = content.news;
  const t = n[currentLang];

  document.getElementById('news-content').innerHTML = `
    ${sectionHeader(t.title, t.subtitle)}
    <div class="max-w-2xl mx-auto">
      <div class="timeline-line space-y-8">
        ${n.items.map(item => `
          <div class="section-reveal relative pl-6">
            <div class="timeline-dot"></div>
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5 card-hover">
              <span class="text-sm font-semibold text-sg-600">${item.date}</span>
              <p class="text-gray-700 mt-1">${item.text[currentLang]}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    <p class="text-center text-xs text-gray-400 italic mt-8">${t.demoNote}</p>
  `;
}

// ── Contact ───────────────────────────────────────────────────
function renderContact() {
  const c = content.contact[currentLang];

  document.getElementById('contact-content').innerHTML = `
    ${sectionHeader(c.title, c.subtitle)}
    <div class="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
      <!-- Contact Info -->
      <div class="space-y-6">
        <div class="section-reveal bg-white rounded-xl border border-gray-100 shadow-sm p-6 card-hover">
          <div class="flex items-center gap-3 mb-2">
            <svg class="w-5 h-5 text-sg-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
            <span class="font-medium text-sg-800">${c.email}</span>
          </div>
          <p class="text-gray-500 text-sm pl-9">${c.emailValue}</p>
        </div>

        <div class="section-reveal bg-white rounded-xl border border-gray-100 shadow-sm p-6 card-hover">
          <div class="flex items-center gap-3 mb-2">
            <svg class="w-5 h-5 text-sg-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/></svg>
            <span class="font-medium text-sg-800">${c.dept}</span>
          </div>
          <p class="text-gray-500 text-sm pl-9">${c.deptValue}</p>
        </div>

        <div class="section-reveal bg-white rounded-xl border border-gray-100 shadow-sm p-6 card-hover">
          <div class="flex items-center gap-3 mb-2">
            <svg class="w-5 h-5 text-sg-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
            <span class="font-medium text-sg-800">${c.location}</span>
          </div>
          <p class="text-gray-500 text-sm pl-9">${c.locationValue}</p>
        </div>

        <p class="section-reveal text-gray-500 text-sm leading-relaxed">${c.collabNote}</p>

        <button class="section-reveal w-full px-6 py-3 bg-sg-600 text-white font-semibold rounded-lg hover:bg-sg-700 transition-all shadow-md hover:shadow-lg">
          ${c.collabBtn}
        </button>
      </div>

      <!-- Contact Form -->
      <div class="section-reveal bg-white rounded-xl border border-gray-100 shadow-sm p-8">
        <form onsubmit="event.preventDefault(); alert('This form is for demo purposes only.');" class="space-y-5">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">${c.formName}</label>
            <input type="text" placeholder="${c.formName}" class="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white transition-colors">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">${c.formEmail}</label>
            <input type="email" placeholder="${c.formEmail}" class="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white transition-colors">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">${c.formMessage}</label>
            <textarea rows="4" placeholder="${c.formMessage}" class="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white transition-colors resize-none"></textarea>
          </div>
          <button type="submit" class="w-full px-6 py-3 bg-sg-500 text-white font-semibold rounded-lg hover:bg-sg-600 transition-all shadow-md hover:shadow-lg">
            ${c.formSubmit}
          </button>
          <p class="text-xs text-gray-400 text-center">${c.formNote}</p>
        </form>
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
