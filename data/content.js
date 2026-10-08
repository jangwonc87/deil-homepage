// ============================================================
// Research Institute of Data Economy and Innovation — Content Data (KR / EN)
// ============================================================
// 이 파일의 데이터를 수정하면 홈페이지 콘텐츠가 변경됩니다.
// Edit this file to update website content.
// ============================================================

const content = {

  // ── Navigation ──────────────────────────────────────────────
  nav: {
    ko: {
      home: '홈', about: '소개', research: '연구 영역', projects: '프로젝트',
      dataInfra: '데이터 인프라', people: '구성원', alumni: 'Placement',
      outputs: '연구 성과', news: '소식', contact: '문의',
    },
    en: {
      home: 'Home', about: 'About', research: 'Research', projects: 'Projects',
      dataInfra: 'Infrastructure', people: 'People', alumni: 'Placement',
      outputs: 'Outputs', news: 'News', contact: 'Contact',
    },
  },

  // ── Hero Section ────────────────────────────────────────────
  hero: {
    ko: {
      labName: '데이터 경제 및 혁신 연구소',
      mainCopy: '혁신과 기업가정신 연구를 위한 데이터셋 팩토리',
      subCopy: '다양한 원천 데이터를 수집·전처리·변환·검증하여, 혁신과 기업가정신 연구에 활용 가능한 고품질 연구 데이터셋을 구축합니다.',
      cta1: '연구 살펴보기',
      cta2: '문의하기',
    },
    en: {
      labName: 'Research Institute of Data Economy and Innovation',
      mainCopy: 'Dataset Factory for Innovation, Entrepreneurship, and Entrepreneurial Ecosystem',
      subCopy: 'We build research-ready datasets by collecting, preprocessing, transforming, and validating diverse data sources for research on innovation, entrepreneurship, and entrepreneurial ecosystems.',
      cta1: 'Explore Research',
      cta2: 'Contact Us',
    },
  },

  // ── About Section ───────────────────────────────────────────
  about: {
    ko: {
      title: '연구소 소개',
      subtitle: '데이터 기반 혁신 연구의 새로운 기반을 구축합니다.',
      description: [
        '데이터 경제 및 혁신 연구소는 혁신, 기업가정신, 기업 생태계 연구에 필요한 데이터를 체계적으로 구축하기 위해 설립되었습니다.',
        '오늘날 연구의 경쟁력은 단순히 데이터를 보유하는 것에서 그치지 않고, 데이터를 연구자가 실제로 분석 가능한 형태로 정제하고 연결하는 역량에서 결정됩니다. 본 연구소는 논문, 특허, 기업정보, 기관정보 등 다양한 데이터를 기반으로 연구 목적에 맞는 데이터 파이프라인을 설계하고, 최종적으로 분석 가능한 형태의 데이터셋과 코드북을 생산하는 것을 목표로 합니다.',
        '연구소는 데이터를 단순히 수집하는 조직이 아니라, 연구 아이디어가 실제 분석 가능한 데이터셋으로 연결될 수 있도록 데이터 처리 구조, 검증 체계, 거버넌스, 연구 인프라를 함께 구축하는 것을 지향합니다.',
      ],
      mission: { title: 'Mission', text: '혁신과 기업가정신 연구에 필요한 데이터를 체계적으로 구축하고, 연구자가 신뢰할 수 있는 분석 가능한 데이터셋으로 전환한다.' },
      vision: { title: 'Vision', text: '데이터 기반 혁신 연구를 위한 글로벌 수준의 연구 인프라를 구축하고, 국내외 연구자들이 활용할 수 있는 지속 가능한 데이터 생산 체계를 만든다.' },
      whatWeBuildTitle: 'What We Build',
      whatWeBuildItems: [
        { title: 'Research-ready Dataset', desc: '연구자가 바로 분석에 활용할 수 있는 정제된 데이터셋' },
        { title: 'Data Pipeline', desc: 'Raw data에서 최종 산출물까지 이어지는 전처리·변환·검증 프로세스' },
        { title: 'Codebook & Data Dictionary', desc: '변수 정의, 생성 방식, 데이터 구조를 설명하는 문서' },
        { title: 'Stata / Analysis-ready Output', desc: '학술 연구에 활용 가능한 통계 분석용 데이터 산출물' },
        { title: 'Data Governance Framework', desc: '민감 데이터의 접근권한, 보안, 로그, 반출 통제 기준' },
      ],
    },
    en: {
      title: 'About the Lab',
      subtitle: 'Building a new foundation for data-driven innovation research.',
      description: [
        'The Research Institute of Data Economy and Innovation was established to systematically build the data necessary for research on innovation, entrepreneurship, and entrepreneurial ecosystems.',
        'Today, research competitiveness is determined not merely by having data, but by the ability to refine and connect data into forms that researchers can actually analyze. Our lab designs data pipelines tailored to research purposes based on diverse data sources\u2014publications, patents, corporate information, and institutional data\u2014with the ultimate goal of producing analysis-ready datasets and codebooks.',
        'The lab is not simply a data collection organization\u2014we aim to build data processing structures, validation systems, governance frameworks, and research infrastructure so that research ideas can be connected to actually analyzable datasets.',
      ],
      mission: { title: 'Mission', text: 'To transform diverse raw data sources into reliable, research-ready datasets for innovation and entrepreneurship research.' },
      vision: { title: 'Vision', text: 'To build a global research infrastructure for data-driven studies of innovation, entrepreneurship, and entrepreneurial ecosystems.' },
      whatWeBuildTitle: 'What We Build',
      whatWeBuildItems: [
        { title: 'Research-ready Dataset', desc: 'Curated datasets ready for immediate analytical use by researchers' },
        { title: 'Data Pipeline', desc: 'End-to-end preprocessing, transformation, and validation processes from raw data to final outputs' },
        { title: 'Codebook & Data Dictionary', desc: 'Documentation defining variables, generation methods, and data structures' },
        { title: 'Stata / Analysis-ready Output', desc: 'Statistical analysis outputs suitable for academic research' },
        { title: 'Data Governance Framework', desc: 'Standards for access control, security, logging, and export management of sensitive data' },
      ],
    },
  },

  // ── Research Areas ──────────────────────────────────────────
  researchAreas: {
    ko: { title: '연구 영역', subtitle: '데이터 경제와 혁신 생태계를 탐구합니다.' },
    en: { title: 'Research Areas', subtitle: 'Exploring the data economy and innovation ecosystem.' },
    items: [
      {
        id: 'innovation-data',
        title: { ko: '혁신 데이터', en: 'Innovation Data' },
        desc: {
          ko: '기업과 기관의 혁신 활동을 설명할 수 있는 데이터셋을 구축합니다. 특허, 논문, 연구개발, 기업 성과 데이터를 연결하여 혁신의 패턴과 성과를 분석할 수 있는 기반을 마련합니다.',
          en: 'Building datasets that explain innovation activities of firms and institutions. We connect patents, publications, R&D, and corporate performance data to establish a foundation for analyzing patterns and outcomes of innovation.',
        },
        status: { ko: '진행 중', en: 'In Progress' },
      },
      {
        id: 'entrepreneurship',
        title: { ko: '창업', en: 'Entrepreneurship' },
        desc: {
          ko: '창업, 기업 성장, 기업 생존, 고용 변화 등 기업가정신과 관련된 데이터를 분석 가능한 형태로 정리합니다.',
          en: 'Organizing data related to entrepreneurship\u2014startups, firm growth, firm survival, and employment changes\u2014into analyzable formats.',
        },
        status: { ko: '진행 중', en: 'In Progress' },
      },
      {
        id: 'ecosystem',
        title: { ko: '창업 생태계', en: 'Entrepreneurial Ecosystem' },
        desc: {
          ko: '기업, 대학, 연구기관, 투자자, 정책기관 등 다양한 주체가 연결되는 창업·혁신 생태계의 구조를 데이터로 파악합니다.',
          en: 'Using data to understand the structure of entrepreneurial and innovation ecosystems where firms, universities, research institutions, investors, and policy agencies are interconnected.',
        },
        status: { ko: '기획 중', en: 'Planning' },
      },
      {
        id: 'firm-data',
        title: { ko: '기업 수준 데이터셋', en: 'Firm-level Dataset' },
        desc: {
          ko: '기업 단위의 재무, 고용, 특허, 등기, 대표자 및 경영진 정보를 연결하여 기업 패널 데이터 구축을 목표로 합니다.',
          en: 'Building firm-level panel data by linking financial, employment, patent, registration, and executive information at the firm level.',
        },
        status: { ko: '진행 중', en: 'In Progress' },
      },
      {
        id: 'pub-patent',
        title: { ko: '논문·특허 데이터', en: 'Publication & Patent Data' },
        desc: {
          ko: '논문 데이터와 특허 데이터를 활용하여 지식 생산, 기술 개발, 기관 간 협력 구조를 분석합니다.',
          en: 'Analyzing knowledge production, technology development, and inter-institutional collaboration structures using publication and patent data.',
        },
        status: { ko: '진행 중', en: 'In Progress' },
      },
      {
        id: 'pipeline',
        title: { ko: '데이터 파이프라인 & 거버넌스', en: 'Data Pipeline & Governance' },
        desc: {
          ko: '데이터 수집부터 최종 산출물까지의 전 과정을 체계화하고, 보안과 재현 가능성을 고려한 데이터 거버넌스 체계를 구축합니다.',
          en: 'Systematizing the entire process from data collection to final outputs, and building data governance frameworks that consider security and reproducibility.',
        },
        status: { ko: '구축 중', en: 'Building' },
      },
    ],
  },

  // ── Projects ────────────────────────────────────────────────
  projects: {
    ko: { title: '프로젝트', subtitle: '현재 진행 중인 주요 프로젝트입니다.' },
    en: { title: 'Projects', subtitle: 'Major ongoing projects.' },
    items: [
      {
        id: 'pubmed',
        title: { ko: 'PubMed 데이터 파이프라인', en: 'PubMed Data Pipeline Project' },
        desc: {
          ko: 'PubMed 데이터를 기반으로 논문, 저자, 소속기관, 기관 매칭 정보를 정리하는 프로젝트입니다. Affiliation 정보를 정제하고 ROR 등 기관 식별체계와 연결하여 연구자가 활용 가능한 데이터셋을 구축하는 것을 목표로 합니다.',
          en: 'A project to organize publication, author, affiliation, and institution matching information based on PubMed data. The goal is to refine affiliation data and link it to institutional identification systems like ROR to build researcher-ready datasets.',
        },
        details: [
          { ko: 'PubMed 데이터 수집', en: 'PubMed data collection' },
          { ko: '저자 및 affiliation 정보 정리', en: 'Author and affiliation data organization' },
          { ko: 'ROR 기반 기관 매칭', en: 'ROR-based institution matching' },
          { ko: 'OpenAlex 포함 / 미포함 버전 비교', en: 'Comparison of versions with/without OpenAlex' },
          { ko: 'Stata 결과물 및 Codebook 생성', en: 'Stata output and codebook generation' },
        ],
        dataSource: { ko: 'PubMed / NIH', en: 'PubMed / NIH' },
        status: { ko: '진행 중', en: 'In Progress' },
        output: { ko: '연구용 데이터셋 + Codebook', en: 'Research-ready dataset + Codebook' },
      },
      {
        id: 'ror',
        title: { ko: 'ROR / 소속 매칭 프로젝트', en: 'ROR / Affiliation Matching Project' },
        desc: {
          ko: '논문 내 저자 소속 정보를 표준 기관 식별자와 연결하는 프로젝트입니다. 기관명 표기 차이, 약칭, 영문명, 유사도 매칭 문제를 다루며, 연구기관 단위 분석이 가능한 구조를 만드는 것을 목표로 합니다.',
          en: 'A project linking author affiliation information in publications to standard institutional identifiers. It addresses institution name variations, abbreviations, English names, and similarity matching to enable institution-level analysis.',
        },
        details: [
          { ko: 'Affiliation 텍스트 전처리', en: 'Affiliation text preprocessing' },
          { ko: '기관명 정규화', en: 'Institution name normalization' },
          { ko: 'ROR ID 매칭', en: 'ROR ID matching' },
          { ko: '매칭률 및 품질 검증', en: 'Match rate and quality validation' },
          { ko: '중간 Output 구조 정의', en: 'Intermediate output structure definition' },
        ],
        dataSource: { ko: 'ROR / OpenAlex', en: 'ROR / OpenAlex' },
        status: { ko: '진행 중', en: 'In Progress' },
        output: { ko: '매칭된 소속 데이터셋', en: 'Matched affiliation dataset' },
      },
      {
        id: 'kodata',
        title: { ko: 'Kodata 기업 수준 데이터셋', en: 'Kodata Firm-level Dataset Project' },
        desc: {
          ko: 'Kodata 기업정보를 활용하여 기업 단위의 연구 데이터셋을 구축하는 프로젝트입니다. 기업개요, 재무정보, 고용정보, 특허정보, 법인등기정보 등을 연결하여 기업 성장과 혁신 연구에 활용 가능한 패널 데이터를 만드는 것을 목표로 합니다.',
          en: 'A project to build firm-level research datasets using Kodata corporate information. The goal is to create panel data for firm growth and innovation research by linking corporate overview, financial, employment, patent, and registration information.',
        },
        details: [
          { ko: '기업 식별자 정리', en: 'Corporate identifier organization' },
          { ko: '기업명 / 영문명 / 법인명 정규화', en: 'Company name / English name / corporate name normalization' },
          { ko: '재무·고용·특허·등기 데이터 연결', en: 'Financial, employment, patent, and registration data linkage' },
          { ko: 'PubMed 또는 특허 데이터와의 연계 가능성 검토', en: 'Review of linkage possibilities with PubMed or patent data' },
          { ko: '보안 및 데이터 거버넌스 체계 수립', en: 'Security and data governance framework establishment' },
        ],
        dataSource: { ko: 'Confidential \u2014 비공개', en: 'Confidential \u2014 not disclosed' },
        status: { ko: '진행 중', en: 'In Progress' },
        output: { ko: '기업 패널 데이터셋', en: 'Firm panel dataset' },
      },
      {
        id: 'patent-pub',
        title: { ko: '특허·논문 매칭 프로젝트', en: 'Patent / Publication Matching Project' },
        desc: {
          ko: '기업의 특허 활동과 논문 활동을 연결하여 지식 생산과 기술혁신 간 관계를 분석하기 위한 프로젝트입니다.',
          en: 'A project to analyze the relationship between knowledge production and technological innovation by linking corporate patent and publication activities.',
        },
        details: [
          { ko: '특허 assignee 정보 정리', en: 'Patent assignee information organization' },
          { ko: '영문 법인명 기반 매칭 검토', en: 'English corporate name-based matching review' },
          { ko: 'Publication affiliation과 기업명 연결 가능성 비교', en: 'Comparison of publication affiliation and corporate name linkage' },
          { ko: '한글·영문 기관명 매칭 방식 검토', en: 'Korean-English institution name matching method review' },
        ],
        dataSource: { ko: 'KIPRIS / PubMed / OpenAlex', en: 'KIPRIS / PubMed / OpenAlex' },
        status: { ko: '기획 중', en: 'Planning' },
        output: { ko: '매칭 데이터셋', en: 'Matched dataset' },
      },
      {
        id: 'dataset-factory',
        title: { ko: '연구용 데이터셋 팩토리', en: 'Research-ready Dataset Factory Project' },
        desc: {
          ko: '다양한 원천 데이터가 들어오더라도 일정한 처리 절차를 거쳐 최종 분석 가능한 데이터셋으로 전환하는 공통 프레임워크를 구축하는 프로젝트입니다.',
          en: 'A project to build a common framework that converts diverse raw data sources into final analysis-ready datasets through standardized processing procedures.',
        },
        details: [
          { ko: 'Raw \u2192 Preprocess \u2192 Transform \u2192 Validation \u2192 Output 구조 설계', en: 'Raw \u2192 Preprocess \u2192 Transform \u2192 Validation \u2192 Output structure design' },
          { ko: '테이블 기반 데이터 관리', en: 'Table-based data management' },
          { ko: 'Task 기반 작업 관리', en: 'Task-based workflow management' },
          { ko: 'Codebook 및 처리 프로토콜 작성', en: 'Codebook and processing protocol documentation' },
          { ko: '반복 가능한 데이터 생산 체계 구축', en: 'Building reproducible data production systems' },
        ],
        dataSource: { ko: '다중 소스', en: 'Multiple Sources' },
        status: { ko: '설계 중', en: 'Designing' },
        output: { ko: '연구용 데이터셋 + Codebook', en: 'Research-ready datasets + Codebooks' },
      },
    ],
    conferencesTitle: {
      ko: '데이터 경제 컨퍼런스',
      en: 'Data Economy Conferences',
    },
    conferencesSubtitle: {
      ko: '서강대학교 기술경영전문대학원과 데이터경제포럼이 주관하는 연례 글로벌 학술·정책 컨퍼런스 아카이브입니다.',
      en: 'Annual academic and policy conference archive hosted by Sogang MOT and Data Economy Forum.',
    },
    conferences: [
      {
        id: 'conf-7th',
        edition: '7',
        editionLabel: { ko: '제7회', en: '7th' },
        date: '2026.04.10',
        title: {
          ko: '제7회 데이터 경제 컨퍼런스: 데이터가 여는 미래 의료',
          en: '7th Data Economy Conference: Future Healthcare Opened by Data',
        },
        subtitle: {
          ko: '대학 과학기술사업화의 전략과 과제 (과학기술정보통신부 후원)',
          en: 'Strategies & Challenges of University Science & Technology Commercialization',
        },
        venue: { ko: '대한상공회의소 중회의실 A', en: 'KCCI Conference Room A' },
        desc: {
          ko: 'AI 바이오헬스 산업의 핵심 동력으로 부상한 대학과 대학병원의 기술사업화 구조와 데이터 활용 체계를 점검하고 정책 방향을 모색한 컨퍼런스입니다.',
          en: 'A conference exploring technology commercialization frameworks and health data ecosystems driven by universities and medical centers.',
        },
        highlights: [
          {
            label: { ko: '기조 세션', en: 'Plenary' },
            speaker: { ko: '문성욱 교수 (서강대 MOT 원장 / 데이터경제포럼 대표)', en: 'Prof. Sungwook Moon (Sogang MOT / DEF)' },
            topic: { ko: '대학의 과학기술 사업화, 데이터, AI 기반 바이오헬스: 희망과 쟁점', en: 'Science Commercialization, Data & AI Bio-Health' },
          },
          {
            label: { ko: '기술사업화', en: 'Session 1' },
            speaker: { ko: '정수용 대표 (한국아이큐비아) · 박상민 교수 (서울대병원)', en: 'Sooyong Jung (IQVIA) · Prof. Sangmin Park (SNU)' },
            topic: { ko: 'AI와 신약 개발, AI 3.0 시대 의료기기 기술사업화 전략 및 과제', en: 'AI Drug Discovery & Medical Device Commercialization' },
          },
          {
            label: { ko: 'AI 헬스케어', en: 'Session 2' },
            speaker: { ko: '민경필 박사 (케어마루나) · 김재겸 교수 (고려대)', en: 'Dr. Kyungpil Min · Prof. Jaekyeom Kim' },
            topic: { ko: 'AI-Native 헬스케어 부상과 정밀영양·마이크로바이옴 데이터 플랫폼', en: 'AI-Native Healthcare & Precision Nutrition Platform' },
          },
          {
            label: { ko: '패널 토론', en: 'Panel' },
            speaker: { ko: '오상우 교수(좌장), 양성일 전 복지부 차관, 정병선 전 과기부 차관, 최상대 전 OECD 대사', en: 'Prof. Sangwoo Oh & Former Vice Ministers' },
            topic: { ko: '데이터 경제 시대, 대학 기술사업화의 새 패러다임 논의', en: 'New Paradigm for University Tech Commercialization' },
          },
        ],
      },
      {
        id: 'conf-6th',
        edition: '6',
        editionLabel: { ko: '제6회', en: '6th' },
        date: '2025.09.09',
        title: {
          ko: '2025 데이터경제 학술 컨퍼런스: AI 시대 과학연구 혁신',
          en: '2025 Data Economy Academic Conference: AI & Science of Science',
        },
        subtitle: {
          ko: 'Measuring & Maximizing Research Impact (KISTEP 공동 주최)',
          en: 'Measuring & Maximizing Research Impact (Co-hosted with KISTEP)',
        },
        venue: { ko: '한국과학기술회관 / 서강대 베르크만스 우정원', en: 'Korea Science & Tech Center / Sogang Univ.' },
        desc: {
          ko: '미국 노스웨스턴 대학교의 세계적 석학들을 초청하여, AI가 과학 연구개발의 새로운 파트너로서 미치는 영향과 과학의 구조를 분석한 국제 학술 컨퍼런스입니다.',
          en: 'An academic conference featuring world-renowned scholars from Northwestern University discussing AI in R&D and the science of science.',
        },
        highlights: [
          {
            label: { ko: '해외 석학 초청', en: 'Keynote 1' },
            speaker: { ko: 'Prof. Benjamin F. Jones (Northwestern University Kellogg)', en: 'Prof. Benjamin F. Jones (Northwestern Kellogg)' },
            topic: { ko: 'Artificial Intelligence in R&D: 연구개발의 새로운 파트너와 혁신 가속화', en: 'Artificial Intelligence in R&D' },
          },
          {
            label: { ko: '해외 석학 초청', en: 'Keynote 2' },
            speaker: { ko: 'Prof. Dashun Wang (Northwestern University Kellogg / CSSI)', en: 'Prof. Dashun Wang (Northwestern Kellogg / CSSI)' },
            topic: { ko: 'Distilling Lessons from the Science of Science: 과학 연구의 구조와 협업 네트워크', en: 'Distilling Lessons from the Science of Science' },
          },
          {
            label: { ko: '국내 전문가', en: 'Session' },
            speaker: { ko: '이경하 센터장 (KISTI) · 김지홍 부연구위원 (KISTEP)', en: 'KISTI & KISTEP Senior Researchers' },
            topic: { ko: 'Generative AI와 AI for Science, 데이터 기반 과학기술 인재정책 전략', en: 'Generative AI for Science & Talent Policies' },
          },
        ],
      },
      {
        id: 'conf-5th',
        edition: '5',
        editionLabel: { ko: '제5회', en: '5th' },
        date: '2024.12.23',
        title: {
          ko: '제5회 데이터 경제 컨퍼런스: 데이터 기반 서비스 산업',
          en: '5th Data Economy Conference: Data-Driven Service Industry',
        },
        subtitle: {
          ko: '데이터 거래와 경쟁 (데이터 가치평가 및 산업 정책)',
          en: 'Data Transactions and Market Competition',
        },
        venue: { ko: '대한상공회의소 중회의실 A', en: 'KCCI Conference Room A' },
        desc: {
          ko: '서비스 산업에서의 데이터 경제 전환과 데이터 유통·거래 생태계 구축, 데이터 가치평가 및 공정 경쟁을 위한 정책 과제를 집중 논의했습니다.',
          en: 'A policy conference focused on data-driven transformation in service sectors, data valuation, and fair market competition.',
        },
        highlights: [
          {
            label: { ko: '기조 세션', en: 'Plenary' },
            speaker: { ko: '서강대 기술경영전문대학원 & 데이터경제포럼', en: 'Sogang MOT & Data Economy Forum' },
            topic: { ko: '서비스 산업에서의 데이터 경제 전환과 플랫폼 경쟁 구도', en: 'Data Economy Transition in Services & Platform Competition' },
          },
          {
            label: { ko: '데이터 거래', en: 'Session 1' },
            speaker: { ko: '데이터 거래소 및 산업계 데이터 책임자', en: 'Data Exchange & Industry Leaders' },
            topic: { ko: '데이터 유통·거래 생태계 조성 및 데이터 자산 가치평가 체계', en: 'Data Market Ecosystem & Asset Valuation Framework' },
          },
          {
            label: { ko: '시장과 규제', en: 'Session 2' },
            speaker: { ko: '학계 및 정책 연구진', en: 'Academic & Policy Researchers' },
            topic: { ko: '데이터 결합과 독점 방지, 서비스 산업 경쟁 촉진을 위한 제도적 과제', en: 'Data Bundling, Anti-monopoly & Policy Challenges' },
          },
        ],
      },
      {
        id: 'conf-4th',
        edition: '4',
        editionLabel: { ko: '제4회', en: '4th' },
        date: '2024.01.18',
        title: {
          ko: '제4회 데이터 경제 컨퍼런스: 혁신, 시장과 데이터',
          en: '4th Data Economy Conference: Innovation, Markets and Data',
        },
        subtitle: {
          ko: '사회 발전의 동력 (서강대학교 LINC 3.0 사업단 후원)',
          en: 'Drivers of Social Advancement (Sponsored by LINC 3.0)',
        },
        venue: { ko: '대한상공회의소 중회의실 A', en: 'KCCI Conference Room A' },
        desc: {
          ko: '생성형 AI를 포함한 데이터 기반 디지털 기술이 금융, 정밀의료, 공공 분야에 미치는 기회와 위험, 그리고 사회적 대응 방향을 심도 있게 다루었습니다.',
          en: 'In-depth exploration of generative AI, precision healthcare data, and digital government data infrastructure.',
        },
        highlights: [
          {
            label: { ko: '기조 세션', en: 'Plenary' },
            speaker: { ko: '문성욱 교수 (서강대 MOT) · 조만 교수 (KDI 대학원)', en: 'Prof. Sungwook Moon · Prof. Man Cho' },
            topic: { ko: '생성형 AI: 기회와 위험 그리고 대응 / 빅데이터·머신러닝 기반 금융 혁신', en: 'Generative AI Opportunities & Big Data ML in Finance' },
          },
          {
            label: { ko: '정밀의료', en: 'Session 1' },
            speaker: { ko: '이민섭 대표 (이원다이애그노믹스) · 김동완 교수 (서울대병원)', en: 'EDGC · SNU Hospital' },
            topic: { ko: '유전자 DTC와 정밀의료 환경의 변화, 암치료 정밀의료 데이터 현황', en: 'Genetic DTC, Precision Healthcare & Clinical Data' },
          },
          {
            label: { ko: '인프라·거버넌스', en: 'Session 2' },
            speaker: { ko: '이승현 국장 (디지털플랫폼정부) · 곽범준 국장 (금융감독원)', en: 'Digital Platform Gov · FSS' },
            topic: { ko: '디지털플랫폼정부 AI·데이터 활용 기반 구축과 금융권 AI 과제', en: 'Gov AI Infrastructure & Financial AI Challenges' },
          },
          {
            label: { ko: '패널 토론', en: 'Panel' },
            speaker: { ko: '김경선 회장(전 여가부 차관), 오태석 전 과기부 차관, 네이버, KODATA', en: 'Policy Leaders, Naver & KODATA' },
            topic: { ko: '시장의 데이터 활용을 위한 기반 구축과 보호', en: 'Market Data Utilization & Governance' },
          },
        ],
      },
      {
        id: 'conf-3rd',
        edition: '3',
        editionLabel: { ko: '제3회', en: '3rd' },
        date: '2023.01.05',
        title: {
          ko: '제3회 데이터 경제 컨퍼런스: 데이터 경제 혁신과 규제',
          en: '3rd Data Economy Conference: Data Economy Innovation & Regulation',
        },
        subtitle: {
          ko: '글로벌 트렌드와 한국의 과제 — 한국의 사회 및 직업 특성 변화 시리즈',
          en: 'Global Trends and Implications for Korea — Social & Occupational Dynamics',
        },
        venue: { ko: '대한상공회의소 중회의실 A', en: 'KCCI Conference Room A' },
        desc: {
          ko: '인공지능과 데이터 혁신에 대응하는 스마트 규제 및 글로벌 정책 트렌드를 논의한 국제 컨퍼런스입니다.',
          en: 'An international conference discussing smart regulations and global trends responding to AI and data innovation.',
        },
        highlights: [
          {
            label: { ko: '기조강연', en: 'Keynote' },
            speaker: { ko: 'Prof. Scott Stern (MIT Sloan)', en: 'Prof. Scott Stern (MIT Sloan)' },
            topic: { ko: 'The Artificial Intelligence "Shift": Implications for Smart Regulations', en: 'The AI Shift: Implications for Smart Regulations' },
          },
          {
            label: { ko: '글로벌 세션', en: 'Global' },
            speaker: { ko: 'Sangbu Kim 디렉터 (Google Asia Pacific)', en: 'Sangbu Kim (Google Asia Pacific)' },
            topic: { ko: '데이터 경제 혁신과 규제: APAC 글로벌 트렌드', en: 'Data Innovation & Global Trends in APAC' },
          },
          {
            label: { ko: '국내 전문가', en: 'Domestic' },
            speaker: { ko: '문성욱 교수 (서강대 MOT) · 고학수 위원장 (개인정보보호위원회)', en: 'Prof. Sungwook Moon · Haksoo Ko (PIPC)' },
            topic: { ko: '데이터 혁신을 위한 스마트 규제와 개인정보 보호 정책 과제', en: 'Smart Regulation for Innovation & Privacy' },
          },
        ],
      },
    ],
  },

  // ── Data Infrastructure ─────────────────────────────────────
  dataInfra: {
    ko: {
      title: '데이터 인프라',
      subtitle: '데이터 처리 파이프라인의 전체 흐름입니다.',
      disclaimer: '기밀 데이터는 본 웹사이트에 공개되지 않습니다. 메타데이터, 방법론, 연구용 산출물만 검토 후 공개될 수 있습니다.',
    },
    en: {
      title: 'Data Infrastructure',
      subtitle: 'End-to-end data processing pipeline.',
      disclaimer: 'Confidential data is not disclosed on this website. Only metadata, methodology, and research-ready outputs may be shared publicly after review.',
    },
    steps: [
      { label: { ko: 'Raw Data', en: 'Raw Data' }, desc: { ko: '원천 데이터를 안전하게 보관하고, 원본 구조를 유지합니다.', en: 'Securely storing raw data while preserving original structure.' } },
      { label: { ko: 'Ingestion', en: 'Ingestion' }, desc: { ko: '원천 데이터를 분석 가능한 작업 환경으로 적재합니다.', en: 'Loading raw data into an analyzable working environment.' } },
      { label: { ko: 'Preprocess', en: 'Preprocess' }, desc: { ko: '불필요한 문자열, 중복, 오류, 민감정보 등을 정리합니다.', en: 'Cleaning unnecessary strings, duplicates, errors, and sensitive information.' } },
      { label: { ko: 'Transform', en: 'Transform' }, desc: { ko: '연구 목적에 맞게 테이블을 연결하고 변수를 생성합니다.', en: 'Joining tables and creating variables aligned with research objectives.' } },
      { label: { ko: 'Validation', en: 'Validation' }, desc: { ko: '결측, 중복, row count, 매칭률, 변수 생성 결과 등을 검증합니다.', en: 'Verifying missing values, duplicates, row counts, match rates, and variable generation results.' } },
      { label: { ko: 'Output', en: 'Output' }, desc: { ko: 'Stata 파일, Codebook, Data Dictionary, 샘플 데이터 등 연구자가 활용 가능한 산출물을 생성합니다.', en: 'Generating Stata files, codebooks, data dictionaries, sample data, and other researcher-ready outputs.' } },
    ],
    governance: {
      ko: {
        title: 'Data Governance',
        description: '연구소는 데이터의 보안과 책임 있는 활용을 중요하게 생각합니다. 민감하거나 가치가 높은 데이터는 외부에 직접 공개하지 않으며, 연구 목적에 따라 필요한 범위 내에서만 접근 권한을 부여합니다.',
        principles: [
          '원천 데이터는 외부 공개하지 않음',
          '사용자별 접근 권한 관리',
          '작업 로그 및 export 이력 관리',
          '민감정보 비식별화 및 마스킹 확인',
          '연구 목적 외 사용 금지',
          '공개 전 교수님 및 리더진 검토',
        ],
      },
      en: {
        title: 'Data Governance',
        description: 'The lab places high importance on data security and responsible use. Sensitive or high-value data is not disclosed externally, and access is granted only within the scope necessary for research purposes.',
        principles: [
          'Raw data is not disclosed externally',
          'Per-user access permission management',
          'Work log and export history management',
          'Sensitive information de-identification and masking verification',
          'Prohibited use beyond research purposes',
          'Review by faculty and leadership before public release',
        ],
      },
    },
  },

  // ── People ──────────────────────────────────────────────────
  people: {
    ko: { title: '구성원', subtitle: '연구소의 교수진 및 자문위원입니다.' },
    en: { title: 'People', subtitle: 'Faculty and advisory board of the institute.' },
    categories: [
      {
        id: 'director',
        label: { ko: '연구소장', en: 'Director' },
        members: [
          {
            name: { ko: '문성욱', en: 'Sungwook Moon' },
            affiliation: { ko: '서강대학교 기술경영전문대학원 정교수 / 원장', en: 'Professor & Dean, Sogang University Graduate School of MOT' },
            role: { ko: '연구소장', en: 'Lab Director' },
            interest: { ko: 'Entrepreneurial Ecosystem, 디지털 전환, 과학기술기반 혁신, 전략경제학, 산업조직론', en: 'Entrepreneurial Ecosystem, Digital Transformation, Science & Technology-based Innovation, Strategic Economics, Industrial Organization' },
            education: { ko: '노스웨스턴대 켈로그 경영대학원 박사 / 미시간대 응용경제학 석사 / 서울대 경영학사', en: 'Ph.D. Kellogg School of Management, Northwestern / M.A. Applied Economics, U of Michigan / B.A. Seoul National University' },
            photo: 'images/prof-moon.jpg',
            link: 'https://sgmot.sogang.ac.kr/sogangmot/new_faculties_16.html',
          },
        ],
      },
      {
        id: 'internal',
        label: { ko: '내부 교수진', en: 'Internal Faculty' },
        members: [
          {
            name: { ko: '우한균', en: 'Hankyun Woo' },
            affiliation: { ko: '서강대학교 기술경영전문대학원 교수', en: 'Professor, Sogang University Graduate School of MOT' },
            role: { ko: '내부 교수진', en: 'Internal Faculty' },
            interest: { ko: 'AI Adoption, Industrial Applications of AI, Technology Forecasting with ML', en: 'AI Adoption, Industrial Applications of AI, Technology Forecasting with ML' },
            education: { ko: 'Georgia State University 경영정보시스템 박사 / 서울대 경영학 석사·학사', en: 'Ph.D. Computer Information Systems, Georgia State University / M.A. & B.A. Seoul National University' },
            photo: 'images/prof-woo.jpg',
            link: 'https://scc.sogang.ac.kr/sogangmot/new_faculties_13.html',
          },
          {
            name: { ko: '이규태', en: 'Gyutae Lee' },
            affiliation: { ko: '서강대학교 기술경영전문대학원 교수 / 연구처장', en: 'Professor & Director of Research Affairs, Sogang University Graduate School of MOT' },
            role: { ko: '내부 교수진', en: 'Internal Faculty' },
            interest: { ko: '경영혁신전략, 혁신성, 신제품 개발', en: 'Innovation Strategy, Innovativeness, New Product Development' },
            education: { ko: '미주리대학교 세인트루이스 경영학 박사', en: 'Ph.D. Business Administration, University of Missouri-St. Louis' },
            photo: 'images/prof-lee-gt.jpg',
            link: 'https://sgmot.sogang.ac.kr/sogangmot/new_faculties_18.html',
          },
          {
            name: { ko: '정병선', en: 'Byungsun Jung' },
            affiliation: { ko: '서강대학교 기술경영전문대학원 부교수', en: 'Associate Professor, Sogang University Graduate School of MOT' },
            role: { ko: '내부 교수진', en: 'Internal Faculty' },
            interest: { ko: '기술과 개발, 과학기술정책, 국가 R&D 프로그램', en: 'Technology & Development, S&T Policy, National R&D Programs' },
            education: { ko: 'Sussex대 SPRU 연구석사 / 서울대 정책학 석사 · 경제학 학사', en: 'M.Res. SPRU, University of Sussex / M.A. & B.A. Seoul National University' },
            photo: 'images/prof-jung-bs.jpg',
            link: 'https://sgmot.sogang.ac.kr/sogangmot/new_faculties_12.html',
          },
          {
            name: { ko: '김문환', en: 'Moonhwan Kim' },
            affiliation: { ko: '서강대학교 기술경영전문대학원 부교수', en: 'Associate Professor, Sogang University Graduate School of MOT' },
            role: { ko: '내부 교수진', en: 'Internal Faculty' },
            interest: { ko: '기술혁신, 창업 및 신산업 전략/정책, 벤처금융, 스타트업 생태계', en: 'Technology Innovation, Entrepreneurship & New Industry Strategy, Venture Finance, Startup Ecosystem' },
            education: { ko: '한남대 기술경제 박사 / University of Colorado MBA / 연세대 경제학 학사', en: 'Ph.D. Technology Economics, Hannam Univ / MBA, U of Colorado / B.A. Economics, Yonsei University' },
            photo: 'images/prof-kim.jpg',
            link: 'https://sgmot.sogang.ac.kr/sogangmot/new_faculties_10.html',
          },
        ],
      },
      {
        id: 'special',
        label: { ko: '특임교수 / 자문위원', en: 'Special Faculty / Advisors' },
        members: [
          {
            name: { ko: '최상대', en: 'Sangdae Choi' },
            affiliation: { ko: '전 기획재정부 제2차관 / 전 주 OECD 대사', en: 'Former 2nd Vice Minister of Economy & Finance / Former Ambassador to OECD' },
            role: { ko: '특임교수', en: 'Special Faculty' },
            interest: { ko: '재정정책, 공공정책, 경제협력', en: 'Fiscal Policy, Public Policy, Economic Cooperation' },
            education: { ko: '미 메릴랜드대 공공정책학 석사 / 서울대 행정대학원 행정학 석사 / 연세대 경제학과', en: 'M.P.P. University of Maryland / M.P.A. Seoul National University / B.A. Economics, Yonsei University' },
            photo: 'images/prof-choi.jpg',
            link: '#',
          },
          {
            name: { ko: '이호동', en: 'Hodong Lee' },
            affiliation: { ko: '한국평가데이터(코데이터) 고문 / 전 대표이사', en: 'Advisor, Korea Evaluation Data (CoDATA) / Former CEO' },
            role: { ko: '특임교수', en: 'Special Faculty' },
            interest: { ko: '산업조직론, 무역, 화폐경제학, 데이터 거버넌스', en: 'Industrial Organization, Trade, Monetary Economics, Data Governance' },
            education: { ko: '미국 인디애나대 경제학 박사 / 서울대 경제학과', en: 'Ph.D. Economics, Indiana University / B.A. Economics, Seoul National University' },
            photo: 'images/prof-lee-hd.jpg',
            link: '#',
          },
          {
            name: { ko: '용호성', en: 'Hosung Yong' },
            affiliation: { ko: '전 문화체육관광부 제1차관', en: 'Former 1st Vice Minister, Ministry of Culture, Sports and Tourism' },
            role: { ko: '특임교수', en: 'Special Faculty' },
            interest: { ko: '문화정책, 예술경영, 공공정책, AI 비즈니스', en: 'Cultural Policy, Arts Management, Public Policy, AI Business' },
            education: { ko: '경희대 예술경영학 박사 / 서울대 행정대학원 행정학 석사 / 미국 American Univ. 예술경영학 석사 / 고려대 행정학과', en: 'Ph.D. Arts Management, Kyung Hee Univ / M.P.A. Seoul National Univ / M.A. Arts Management, American Univ / B.A. Public Administration, Korea Univ' },
            photo: 'images/prof-yong.jpg',
            link: '#',
          },
        ],
      },
    ],
  },

  // ── Research Team ───────────────────────────────────────────
  // Keep supplied portraits null until the Library originals are available
  // locally and visually checked. Do not infer identities from other photos.
  team: {
    ko: {
      title: '연구 참여 구성원',
      roleLabel: '담당 업무',
      interestLabel: '관심 분야',
      noPhoto: '사진 없음',
      emailLabel: '이메일',
      newWindow: '새 창',
    },
    en: {
      title: 'Research Team',
      roleLabel: 'Responsibilities',
      interestLabel: 'Interests',
      noPhoto: 'No photo',
      emailLabel: 'Email',
      newWindow: 'opens in a new tab',
    },
    members: [
      {
        id: 'joon-mo-park',
        name: { ko: '박준모', en: 'Joon Mo Park' },
        initials: 'JP',
        affiliation: {
          ko: '서강대학교 일반대학원 기술경영 박사과정',
          en: 'Ph.D. student in Management of Technology, Graduate School, Sogang University',
        },
        interest: { ko: '창업 생태계 분석, 기업 데이터 분석', en: 'Entrepreneurial ecosystem analysis, corporate data analysis' },
        role: {
          ko: '데이터 셋 구축 업무 총괄(공공데이터, 기업 데이터 구축)',
          en: 'Overseeing dataset development (public and corporate data)',
        },
        email: 'jmpark@wednus.com',
        photo: 'images/researcher-park-jm.jpg',
      },
      {
        id: 'jangwon-choi',
        name: { ko: '최장원', en: 'Jangwon Choi' },
        initials: 'JC',
        affiliation: {
          ko: '서강대학교 일반대학원 기술경영 석사졸업 / 폰드그룹 주식회사 이사',
          en: 'Master’s graduate in Management of Technology, Graduate School, Sogang University / Director, Pond Group Co., Ltd.',
        },
        interest: { ko: '조직관리, 사업개발', en: 'Organizational management, business development' },
        role: { ko: '팀 커뮤니케이션 및 조율, 프로젝트 관리', en: 'Team communication and coordination, project management' },
        email: 'jangwonc87@gmail.com',
        photo: 'images/researcher-choi-jw.png',
      },
      {
        id: 'seyoung-chung',
        name: { ko: '정세영', en: 'Seyoung Chung' },
        initials: 'SC',
        affiliation: { ko: '서강대 경제학과 석사과정', en: 'Master’s student in Economics, Sogang University' },
        interest: { ko: 'AI금융, LLM', en: 'AI in finance, LLMs' },
        role: { ko: '데이터 수집 및 전처리', en: 'Data collection and preprocessing' },
        linkedin: 'https://www.linkedin.com/in/chung-seyoung/',
        photo: 'images/researcher-chung-sy.jpg',
      },
      {
        id: 'seoyoon-jeong',
        name: { ko: '정서윤', en: 'Seoyoon Jeong' },
        initials: 'SJ',
        affiliation: { ko: '서강대학교 경제학부', en: 'School of Economics, Sogang University' },
        interest: { ko: '과학기술·산업 빅데이터 분석, AI·데이터 활용', en: 'Big data analysis in science, technology and industry; applications of AI and data' },
        role: { ko: '공공데이터 수집 및 전처리', en: 'Public data collection and preprocessing' },
        email: 'zzh12@sogang.ac.kr',
        photo: null,
      },
      {
        id: 'haeun-kim',
        name: { ko: '김하은', en: 'Haeun Kim' },
        initials: 'HK',
        affiliation: { ko: '서강대학교 일반대학원 경제학과 석사과정', en: 'Master’s student in Economics, Graduate School, Sogang University' },
        interest: { ko: '금융데이터 분석 / AI 활용 경제분석 / 디지털 금융', en: 'Financial data analysis / AI-assisted economic analysis / digital finance' },
        role: {
          ko: '연구 문헌 및 공공데이터 수집·정리, 연구용 데이터 확보 지원',
          en: 'Collecting and organizing research literature and public data; supporting research data acquisition',
        },
        email: 'hgkdms0810@gmail.com',
        photo: 'images/researcher-kim-he.jpg',
      },
      {
        id: 'yuna-lee',
        name: { ko: '이유나', en: 'Yuna Lee' },
        initials: 'YL',
        affiliation: { ko: '서강대학교 영문학부(영미어문전공), 심리학과', en: 'School of English (English Language and Literature), Department of Psychology, Sogang University' },
        interest: { ko: '고급 분석 및 통계 모델링, 빅데이터', en: 'Advanced analytics and statistical modeling, big data' },
        role: { ko: '공공데이터 수집 및 전처리', en: 'Public data collection and preprocessing' },
        email: 'chloelee9513@gmail.com',
        photo: 'images/researcher-lee-yn.jpg',
      },
    ],
  },

  // ── Alumni / Student Placement ──────────────────────────────
  alumni: {
    ko: {
      title: 'Student Placement',
      subtitle: '연구소 참여 학생들의 진학, 취업, 연구 성과를 정리하는 공간입니다.',
      description: '본 섹션은 연구소 참여 경험이 학생들의 성장과 진로에 어떻게 기여했는지 보여주는 것을 목적으로 합니다.',
      consentNote: '※ 실제 학생 정보는 본인 동의 후 공개합니다.',
      testimonialLabel: '연구원 후기',
    },
    en: {
      title: 'Student Placement',
      subtitle: 'Career paths and achievements of our student researchers.',
      description: 'This section showcases how lab experience has contributed to students\' growth and career development.',
      consentNote: '※ Student information is published only with individual consent.',
      testimonialLabel: 'Testimonials',
    },
    careerPaths: [
      { label: { ko: '대학원 진학', en: 'Graduate School Admission' } },
      { label: { ko: '연구 인턴십', en: 'Research Internship' } },
      { label: { ko: '산업체 취업', en: 'Industry Placement' } },
      { label: { ko: '연구 기여', en: 'Research Contribution' } },
      { label: { ko: '프로젝트 경험', en: 'Project Experience' } },
    ],
    items: [
      {
        name: { ko: '전창민', en: 'Changmin Jeon' },
        degree: { ko: '학사 졸업', en: 'B.S. Graduate' },
        period: '2025.04\u20132026.07',
        labRole: { ko: '데이터 전처리 및 검증', en: 'Data Preprocessing & Validation' },
        placement: { ko: 'KAIST 수리과학과 석사과정', en: 'KAIST Mathematical Sciences M.S. Program' },
        placementType: { ko: '대학원 진학', en: 'Graduate School' },
        photo: 'images/alumni-jeon.png',
        quote: {
          ko: '학부 연구원으로 참여하며 실제 데이터를 전처리하고 검증하는 과정을 경험했습니다. 연구 과정에서 결과의 정확성을 확인하는 습관을 기를 수 있었고, 이러한 경험은 이후 대학원에 진학해 연구를 이어가는 데 좋은 기반이 되었습니다.',
          en: 'As an undergraduate researcher, I gained hands-on experience in data preprocessing and validation. I developed a habit of verifying the accuracy of results, which became a strong foundation for continuing my research in graduate school.',
        },
      },
      {
        name: { ko: '정희수', en: 'Heesu Jung' },
        degree: { ko: '학사 졸업', en: 'B.S. Graduate' },
        period: '2024.11\u20132025.12',
        labRole: { ko: '데이터 전처리 및 검증', en: 'Data Preprocessing & Validation' },
        placement: { ko: 'KB국민카드 퍼포먼스 마케터', en: 'KB Kookmin Card — Performance Marketer' },
        placementType: { ko: '산업체 취업', en: 'Industry' },
        photo: 'images/alumni-jung.jpg',
        quote: {
          ko: '학부 연구원으로 참여하여 데이터를 연구 목적에 맞게 수집한 후 전처리, 표준화하여 DB에 적재하는 전 과정을 함께하며 도메인에 대한 이해와 데이터 기반 의사결정의 중요성을 배웠습니다. 데이터를 근거로 문제를 정의하고 의사결정을 내리는 역량을 키운 경험은 카드사의 퍼포먼스 마케터로서 고객의 행동 데이터 분석을 기반으로 마케팅 성과를 판단하여 효과적인 전략을 도출하는데 큰 도움이 되었습니다.',
          en: 'As an undergraduate researcher, I participated in the entire process of collecting data aligned with research objectives, preprocessing and standardizing it, and loading it into databases. This experience taught me the importance of domain understanding and data-driven decision-making. The ability to define problems and make decisions based on data has been invaluable in my role as a performance marketer at a credit card company, where I analyze customer behavioral data to evaluate marketing effectiveness and develop impactful strategies.',
        },
      },
    ],
  },

  // ── Outputs ─────────────────────────────────────────────────
  outputs: {
    ko: { title: '연구 성과', subtitle: '연구소의 산출물 및 공개 예정 자료입니다.', comingSoon: '준비 중' },
    en: { title: 'Outputs', subtitle: 'Lab outputs and upcoming publications.', comingSoon: 'Coming Soon' },
    categories: [
      { label: { ko: 'Publications', en: 'Publications' } },
      { label: { ko: 'Working Papers', en: 'Working Papers' } },
      { label: { ko: 'Research-ready Datasets', en: 'Research-ready Datasets' } },
      { label: { ko: 'Codebooks', en: 'Codebooks' } },
      { label: { ko: 'Reports', en: 'Reports' } },
      { label: { ko: 'Presentations', en: 'Presentations' } },
      { label: { ko: 'Student Placement', en: 'Student Placement' } },
    ],
  },

  // ── News ────────────────────────────────────────────────────
  news: {
    ko: { title: '소식', subtitle: '연구소 활동 기록입니다.', demoNote: '※ 위 내용은 초기 예시이며, 실제 활동 이력은 검토 후 반영 예정' },
    en: { title: 'News & Activities', subtitle: 'Lab activity timeline.', demoNote: '※ The above is a preliminary example; actual activity history will be reflected after review.' },
    items: [
      { date: '2026.08', text: { ko: '연구소 국문·영문 홈페이지 1차 공개 예정', en: 'Lab Korean/English website initial public launch' } },
      { date: '2026.07', text: { ko: '연구소 업무 분장 및 운영 체계 정비', en: 'Lab role assignment and operational system restructuring' } },
      { date: '2026.06', text: { ko: 'PubMed 데이터 파이프라인 및 Codebook 검토', en: 'PubMed data pipeline and codebook review' } },
      { date: '2026.05', text: { ko: 'OpenAlex / ROR 기반 데이터 처리 구조 정리', en: 'OpenAlex / ROR-based data processing structure organization' } },
    ],
  },

  // ── Contact ─────────────────────────────────────────────────
  contact: {
    ko: {
      title: '문의',
      subtitle: '연구소에 대한 문의 사항은 아래로 연락해주세요.',
      email: '이메일', emailValue: 'sgmot@sogang.ac.kr',
      dept: '소속', deptValue: '서강대학교 기술경영전문대학원',
      location: '위치', locationValue: '서울특별시 마포구 백범로 35(신수동) 서강대학교',
      collabBtn: '협력 문의',
      collabNote: '연구 협력, 데이터 인프라, 공동 프로젝트에 관심이 있으신 분은 문의해 주세요.',
      formName: '이름', formEmail: '이메일', formMessage: '메시지', formSubmit: '보내기',
      formNote: '※ 연구 및 협력 문의는 위 대표 이메일로 연락주시면 가장 빠르게 회신드립니다.',
    },
    en: {
      title: 'Contact',
      subtitle: 'For inquiries about the lab, please reach out below.',
      email: 'Email', emailValue: 'sgmot@sogang.ac.kr',
      dept: 'Department', deptValue: 'Sogang University, Graduate School of Management of Technology',
      location: 'Location', locationValue: '35 Baekbeom-ro, Mapo-gu, Seoul, Korea (Sogang University)',
      collabBtn: 'Collaboration Inquiry',
      collabNote: 'For research collaboration, data infrastructure, or joint projects, please contact us.',
      formName: 'Name', formEmail: 'Email', formMessage: 'Message', formSubmit: 'Send',
      formNote: '※ For inquiries, please reach out via the email above for prompt response.',
    },
  },

  // ── Footer ──────────────────────────────────────────────────
  footer: {
    ko: {
      demo: '',
      copyright: '© Research Institute of Data Economy and Innovation. All rights reserved.',
      confidentiality: 'Confidential raw data is not disclosed. Research outputs are shared only after appropriate review and approval.',
    },
    en: {
      demo: '',
      copyright: '© Research Institute of Data Economy and Innovation. All rights reserved.',
      confidentiality: 'Confidential raw data is not disclosed. Research outputs are shared only after appropriate review and approval.',
    },
  },
};
