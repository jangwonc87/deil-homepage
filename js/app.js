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
    <!-- Asymmetric 2-col -->
    <div class="grid lg:grid-cols-5 gap-16 mb-24">
      <div class="lg:col-span-2">
        <p class="text-sg-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">About</p>
        <h2 class="section-reveal text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">${a.title}</h2>
      </div>
      <div class="lg:col-span-3">
        ${a.description.map(p => `
          <p class="section-reveal text-gray-500 text-base leading-[1.8] mb-5">${p}</p>
        `).join('')}
      </div>
    </div>

    <!-- Mission & Vision — large quote blocks -->
    <div class="grid md:grid-cols-2 gap-0 mb-24">
      <div class="section-reveal border-t border-gray-200 pt-8 pr-8 md:pr-16">
        <p class="text-sg-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6">${a.mission.title}</p>
        <p class="text-gray-800 text-xl leading-relaxed font-light">${a.mission.text}</p>
      </div>
      <div class="section-reveal border-t border-gray-200 pt-8 pl-0 md:pl-16 mt-8 md:mt-0">
        <p class="text-sg-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6">${a.vision.title}</p>
        <p class="text-gray-800 text-xl leading-relaxed font-light">${a.vision.text}</p>
      </div>
    </div>

    <!-- What We Build — clean numbered list -->
    <div>
      <p class="section-reveal text-sg-400 text-xs font-semibold tracking-[0.2em] uppercase mb-10">${a.whatWeBuildTitle}</p>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
        ${a.whatWeBuildItems.map((item, i) => `
          <div class="section-reveal group">
            <span class="text-sg-200 text-5xl font-extralight tabular-nums">${String(i + 1).padStart(2, '0')}</span>
            <h4 class="font-semibold text-gray-900 text-base mt-3 mb-2">${item.title}</h4>
            <p class="text-gray-400 text-sm leading-relaxed">${item.desc}</p>
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

  document.getElementById('projects-content').innerHTML = `
    <div class="grid lg:grid-cols-5 gap-16 mb-4">
      <div class="lg:col-span-2">
        <p class="text-sg-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Projects</p>
        <h2 class="section-reveal text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">${t.title}</h2>
        <p class="section-reveal text-gray-400 text-sm mt-4 leading-relaxed">${t.subtitle}</p>
      </div>
      <div class="lg:col-span-3">
        <div class="divide-y divide-gray-100">
          ${p.items.map((item, idx) => {
            const status = item.status[currentLang];
            return `
              <div class="section-reveal py-8 ${idx === 0 ? 'pt-0' : ''}">
                <div class="flex items-start justify-between mb-3">
                  <h3 class="font-semibold text-gray-900 text-lg">${item.title[currentLang]}</h3>
                  <span class="text-xs text-sg-500 font-medium border border-sg-200 rounded-full px-3 py-1 whitespace-nowrap ml-4">${status}</span>
                </div>
                <p class="text-gray-400 text-sm leading-relaxed mb-4">${item.desc[currentLang]}</p>
                <div class="flex flex-wrap gap-x-8 gap-y-2 text-xs text-gray-400">
                  <span><span class="text-gray-300 mr-1">${dsLabel}</span> ${item.dataSource[currentLang]}</span>
                  <span><span class="text-gray-300 mr-1">${outLabel}</span> ${item.output[currentLang]}</span>
                </div>
                ${item.details ? `
                  <div class="mt-4 flex flex-wrap gap-2">
                    ${item.details.map(d => `<span class="text-xs text-gray-500 bg-gray-50 rounded px-2.5 py-1">${d[currentLang]}</span>`).join('')}
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

// ── Data Infrastructure ───────────────────────────────────────
function renderDataInfra() {
  const d = content.dataInfra;
  const t = d[currentLang];
  const g = d.governance[currentLang];

  document.getElementById('data-infra-content').innerHTML = `
    <div class="grid lg:grid-cols-5 gap-16 mb-16">
      <div class="lg:col-span-2">
        <p class="text-sg-200/60 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Infrastructure</p>
        <h2 class="section-reveal text-3xl sm:text-4xl font-bold text-white leading-tight">${t.title}</h2>
        <p class="section-reveal text-gray-300/70 text-sm mt-4 leading-relaxed">${t.disclaimer}</p>
      </div>
      <div class="lg:col-span-3">
        <div class="grid sm:grid-cols-2 gap-6">
          ${d.steps.map((step, i) => `
            <div class="section-reveal">
              <span class="text-white/20 text-4xl font-extralight">${String(i + 1).padStart(2, '0')}</span>
              <h4 class="text-white text-sm font-semibold mt-2 mb-2">${step.label[currentLang]}</h4>
              <p class="text-gray-300/60 text-xs leading-relaxed">${step.desc[currentLang]}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Governance -->
    <div class="border-t border-white/10 pt-12">
      <div class="grid lg:grid-cols-5 gap-16">
        <div class="lg:col-span-2">
          <p class="text-sg-200/60 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Governance</p>
          <h3 class="section-reveal text-xl font-semibold text-white">${g.title}</h3>
          <p class="section-reveal text-gray-300/60 text-sm mt-3 leading-relaxed">${g.description}</p>
        </div>
        <div class="lg:col-span-3">
          <div class="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            ${g.principles.map(p => `
              <div class="section-reveal flex items-center gap-3 py-2">
                <div class="w-1.5 h-1.5 rounded-full bg-sg-400 flex-shrink-0"></div>
                <span class="text-gray-200 text-sm">${p}</span>
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
  document.getElementById('people-content').innerHTML = `
    <p class="text-sg-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">People</p>
    <h2 class="section-reveal text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-16">${t.title}</h2>

    ${p.categories.map((cat, catIdx) => {
      const isDirector = cat.id === 'director';
      return `
        <div class="${catIdx > 0 ? 'mt-16' : ''}">
          <p class="section-reveal text-gray-300 text-xs font-semibold tracking-[0.2em] uppercase mb-8 border-b border-gray-100 pb-3">${cat.label[currentLang]}</p>

          ${isDirector ? `
            <!-- Director: large feature layout -->
            ${cat.members.map(m => `
              <div class="section-reveal grid md:grid-cols-3 gap-10 items-start">
                <div class="md:col-span-1">
                  ${m.photo
                    ? `<img src="${m.photo}" alt="${m.name[currentLang]}" class="w-full aspect-[3/4] object-cover object-top rounded-sm grayscale hover:grayscale-0 transition-all duration-500">`
                    : `<div class="w-full aspect-[3/4] bg-gray-100 rounded-sm flex items-center justify-center"><span class="text-4xl text-gray-300">${m.name[currentLang].charAt(0)}</span></div>`
                  }
                </div>
                <div class="md:col-span-2 py-2">
                  <h3 class="text-2xl font-bold text-gray-900 mb-1">${m.link && m.link !== '#' ? `<a href="${m.link}" target="_blank" class="hover:text-sg-500 transition-colors">${m.name[currentLang]}</a>` : m.name[currentLang]}</h3>
                  <p class="text-sg-500 text-sm font-medium mb-4">${m.role[currentLang]}</p>
                  <p class="text-gray-500 text-sm leading-relaxed mb-6">${m.affiliation[currentLang]}</p>
                  <div class="border-t border-gray-100 pt-5 space-y-3">
                    <div>
                      <p class="text-gray-300 text-xs uppercase tracking-wider mb-1">${currentLang === 'ko' ? '연구분야' : 'Research'}</p>
                      <p class="text-gray-600 text-sm">${m.interest[currentLang]}</p>
                    </div>
                    ${m.education ? `
                      <div>
                        <p class="text-gray-300 text-xs uppercase tracking-wider mb-1">${currentLang === 'ko' ? '학력' : 'Education'}</p>
                        <p class="text-gray-600 text-sm">${m.education[currentLang]}</p>
                      </div>
                    ` : ''}
                  </div>
                </div>
              </div>
            `).join('')}
          ` : `
            <!-- Faculty: compact grid -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              ${cat.members.map(m => `
                <div class="section-reveal group">
                  <div class="mb-4 overflow-hidden rounded-sm">
                    ${m.photo
                      ? `<img src="${m.photo}" alt="${m.name[currentLang]}" class="w-full aspect-[3/4] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500">`
                      : `<div class="w-full aspect-[3/4] bg-gray-100 flex items-center justify-center"><span class="text-3xl text-gray-300">${m.name[currentLang].charAt(0)}</span></div>`
                    }
                  </div>
                  <h4 class="font-semibold text-gray-900 text-sm">${m.link && m.link !== '#' ? `<a href="${m.link}" target="_blank" class="hover:text-sg-500 transition-colors">${m.name[currentLang]}</a>` : m.name[currentLang]}</h4>
                  <p class="text-gray-400 text-xs mt-1 leading-relaxed">${m.affiliation[currentLang]}</p>
                  <p class="text-gray-300 text-xs mt-1 italic">${m.interest[currentLang]}</p>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      `;
    }).join('')}
  `;
}

// ── Alumni / Student Placement ────────────────────────────────
function renderAlumni() {
  const al = content.alumni;
  const t = al[currentLang];

  document.getElementById('alumni-content').innerHTML = `
    <div class="grid lg:grid-cols-5 gap-16 mb-16">
      <div class="lg:col-span-2">
        <p class="text-sg-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Placement</p>
        <h2 class="section-reveal text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">${t.title}</h2>
        <p class="section-reveal text-gray-400 text-sm mt-4 leading-relaxed">${t.description}</p>

        <div class="section-reveal flex flex-wrap gap-2 mt-8">
          ${al.careerPaths.map(cp => `
            <span class="text-xs text-gray-500 bg-white rounded px-3 py-1.5 border border-gray-100">${cp.label[currentLang]}</span>
          `).join('')}
        </div>
      </div>

      <div class="lg:col-span-3 space-y-12">
        ${al.items.map(item => `
          <div class="section-reveal">
            <!-- Large quote -->
            <p class="text-gray-600 text-base leading-[1.9] mb-6">\u201C${item.quote[currentLang]}\u201D</p>

            <!-- Attribution -->
            <div class="flex items-center gap-4 border-t border-gray-100 pt-5">
              ${item.photo
                ? `<img src="${item.photo}" alt="${item.name[currentLang]}" class="w-12 h-12 rounded-full object-cover grayscale">`
                : `<div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center"><span class="text-sm text-gray-400">${item.name[currentLang].charAt(0)}</span></div>`
              }
              <div>
                <p class="font-semibold text-gray-900 text-sm">${item.name[currentLang]}</p>
                <p class="text-gray-400 text-xs">${item.placement[currentLang]}</p>
                <p class="text-gray-300 text-xs">${item.degree[currentLang]} · ${item.period}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <p class="section-reveal text-xs text-gray-300 italic">${t.consentNote}</p>
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
    <div class="grid lg:grid-cols-5 gap-16">
      <div class="lg:col-span-2">
        <p class="text-sg-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Contact</p>
        <h2 class="section-reveal text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">${c.title}</h2>
        <p class="section-reveal text-gray-400 text-sm mt-4 leading-relaxed">${c.collabNote}</p>
      </div>
      <div class="lg:col-span-3">
        <div class="divide-y divide-gray-100">
          <div class="section-reveal pb-6">
            <p class="text-gray-300 text-xs uppercase tracking-wider mb-2">${c.email}</p>
            <p class="text-gray-800 text-base">${c.emailValue}</p>
          </div>
          <div class="section-reveal py-6">
            <p class="text-gray-300 text-xs uppercase tracking-wider mb-2">${c.dept}</p>
            <p class="text-gray-800 text-base">${c.deptValue}</p>
          </div>
          <div class="section-reveal py-6">
            <p class="text-gray-300 text-xs uppercase tracking-wider mb-2">${c.location}</p>
            <p class="text-gray-800 text-base">${c.locationValue}</p>
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
