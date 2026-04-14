(function () {

  /* ── 프로젝트 데이터 ── */
  var PROJECTS = [
    {
      id: 'dopamino',
      tag: 'VR / MR Game',
      name: 'Dopamino',
      desc: 'META XR SDK 기반 MR 도미노 게임. 공간 인식과 패스스루를 활용해 실제 공간에 도미노를 배치하고 무너뜨리는 MR 게임.',
      period: '2025.12 · 스페이스아웃 게임즈',
      tech: ['Unity', 'META XR SDK', 'XRI', 'MR Passthrough', 'Hand Tracking', 'C#'],
      achievements: [
        'Meta Horizon Start Developer Competition 참가작',
        '공간 인식 · 패스스루 기반 게임 메카닉 구현',
        '핸드 트래킹 인터랙션 및 월드 스페이스 VR UI/UX 설계',
        'META Quest 2 / Pro / 3 멀티 디바이스 대응',
      ],
      media: [
        { type: 'img', src: 'assets/images/dopamino/dopamino-1.jpg' },
        { type: 'img', src: 'assets/images/dopamino/dopamino-2.jpg' },
      ],
      thumb: 'assets/images/dopamino/dopamino-1.jpg',
    },
    {
      id: 'vivarium',
      tag: 'XR Game',
      name: 'Vivarium',
      desc: 'XR 자연 생태계 체험 게임. 동물과 식물을 키우며 나만의 수족관·비바리움을 완성하는 VR 콘텐츠. META Quest 2/Pro/3 · PICO 4 멀티플랫폼 대응.',
      period: '2024.04 ~ 2025.09 · 더블미 StudioX',
      tech: ['Unity', 'META SDK', 'PICO SDK', 'XRI', 'GPU Compute Shader', 'UniTask', 'Addressable', 'GitHub Actions CI/CD', 'C#'],
      achievements: [
        'Webby Awards 2025 · Best VR Headset Experience 수상',
        'Auggie Awards · Best Game or Toy 파이널리스트',
        'PICO Store 유료 앱 1위 2주 연속',
        'Meta Store 평점 4.6 / 5.0',
        'GPU Compute Shader로 텍스처 클리닝 병렬 처리 — 72fps 유지',
        'Boids 군집 AI + GPU Instancing — 드로우 콜 절감',
        'GitHub Actions CI/CD — 브랜치 푸시 시 자동 빌드',
        'META · PICO 멀티플랫폼 모듈 분리 아키텍처',
      ],
      media: [
        { type: 'video', src: 'assets/video/vivarium.mp4' },
        { type: 'img', src: 'assets/images/vivarium/vivarium-1.jpg' },
        { type: 'img', src: 'assets/images/vivarium/vivarium-2.jpg' },
        { type: 'img', src: 'assets/images/vivarium/vivarium-3.jpg' },
        { type: 'img', src: 'assets/images/vivarium/vivarium-4.jpg' },
        { type: 'img', src: 'assets/images/vivarium/vivarium-5.jpg' },
        { type: 'img', src: 'assets/images/vivarium/vivarium-award.png' },
        { type: 'img', src: 'assets/images/vivarium/vivarium-rank.png' },
        { type: 'img', src: 'assets/images/vivarium/vivarium-rating.png' },
      ],
      thumb: 'assets/images/vivarium/vivarium-1.jpg',
    },
    {
      id: 'twinworld',
      tag: 'XR Metaverse',
      name: 'Twinworld',
      desc: 'XR 소셜 메타버스 플랫폼. 유저가 직접 3D 공간을 제작하고 타인과 실시간으로 공유·탐험하는 크로스 플랫폼 VR 플랫폼.',
      period: '2022.08 ~ 2024.01 · 더블미 TwinWorld',
      tech: ['Unity', 'Photon Fusion', 'GLTFast', 'MRTK', 'Hololens 2', 'Binary Serialization', 'Voxel Editor', 'C#'],
      achievements: [
        'Microsoft Store · Meta Quest Store 출시 · 라이브 서비스 전 주기',
        '3D Recording 바이너리 직렬화 — JSON 대비 용량 대폭 절감',
        'GLB 런타임 Import/Export — Sketchfab API 원스톱 파이프라인',
        'Photon Fusion 아바타 IK · 10손가락 · BlendShape 네트워크 동기화',
        'Voxel 에디터 청크 기반 메시 관리 — Hololens 2 대응',
        '오브젝트 풀 ActiveTime 기반 만료 자동 정리',
      ],
      media: [
        { type: 'video', src: 'assets/video/twinworld.mp4' },
        { type: 'img', src: 'assets/images/twinworld/twinworld-1.webp' },
        { type: 'img', src: 'assets/images/twinworld/twinworld-2.webp' },
        { type: 'img', src: 'assets/images/twinworld/twinworld-3.png' },
        { type: 'img', src: 'assets/images/twinworld/twinworld-4.png' },
        { type: 'img', src: 'assets/images/twinworld/twinworld-5.png' },
      ],
      thumb: 'assets/images/twinworld/twinworld-1.webp',
    },
    {
      id: 'kiro',
      tag: 'Research',
      name: 'KIRO 로봇 위치 인식',
      desc: 'ARUCO 마크 이미지 프로세싱으로 로봇의 실시간 위치를 역산하는 연구. 마크의 프레임별 변화량으로 경로를 예측하는 두 가지 방식을 구현.',
      period: '2022 · KIRO (한국로봇융합연구원)',
      tech: ['Unity', 'C#', 'OpenCV', 'ARUCO', 'Image Processing', 'SVR'],
      achievements: [
        'ARUCO 마크 가상화 — 로봇 위치 역산 알고리즘 구현',
        '프레임별 마크 변화량 기반 경로 예측 시스템',
        'SVR(Support Vector Regression) 적용 위치 추정 정확도 향상',
        '1280×800 영상 기반 실시간 이미지 프로세싱',
      ],
      media: [
        { type: 'img', src: 'assets/images/kiro/kiro-2.png' },
        { type: 'img', src: 'assets/images/kiro/kiro-3.png' },
        { type: 'img', src: 'assets/images/kiro/kiro-5.png' },
        { type: 'img', src: 'assets/images/kiro/kiro-mark.png' },
        { type: 'img', src: 'assets/images/kiro/kiro-report.png' },
      ],
      thumb: 'assets/images/kiro/kiro-2.png',
    },
    {
      id: 'lidar',
      tag: 'Paper · KCI',
      name: '3D LiDAR 자율주행 시뮬레이터',
      desc: 'Unity 3D와 C++ DLL로 구현한 저비용 3D LiDAR 기반 자율주행 시뮬레이터. Depth Camera 8개를 45° 간격 배치해 Point Cloud를 생성하고 LPP·GPP 알고리즘으로 주행 방향을 결정.',
      period: '2022.03 · (주)일렉콤 용역',
      tech: ['Unity 3D', 'C++', 'C# P/Invoke', 'LiDAR Simulation', 'Point Cloud', 'Path Planning'],
      achievements: [
        'KSCG 2022 KCI 등재 논문 게재 (Vol.35 No.1)',
        'Depth Camera 8개 45° 배치 — DepthMap 역투영으로 거리 계산',
        'LPP (Local Path Planning) + GPP (Global Path Planning) 통합',
        '21×21 / 31×31 / 41×41 미로 × 4가지 해상도 — 총 120회 실험',
        '노이즈 맵 기반 실제 LiDAR 오차 모사',
      ],
      media: [
        { type: 'img', src: 'assets/images/lidar/lidar-1.png' },
        { type: 'img', src: 'assets/images/lidar/lidar-2.png' },
      ],
      thumb: 'assets/images/lidar/lidar-1.png',
    },
    {
      id: 'omok',
      tag: 'Paper · 학술대회',
      name: '준학습 기반 오목 AI',
      desc: '유전자 알고리즘의 확률 맵과 실제 게임 데이터에서 추출한 확률 맵을 병합한 준학습(Semi-Learning) 기반 오목 AI.',
      period: '2021.12 ~ 2022.05 · 개인 연구',
      tech: ['C++', 'OpenGL', 'Python', 'Genetic Algorithm', 'Game AI', 'Heuristic'],
      achievements: [
        '한국정보처리학회 2022 ASK 춘계학술대회 AI 분야 논문 발표',
        '준학습(Semi-Learning) — 휴리스틱 + 실전 게임 데이터 병합',
        '게임 기록 기반 보드 패턴 → 다음 착수 가중치 바이너리 저장',
        'C++ OpenGL 2D 게임 엔진 직접 구현',
      ],
      media: [
        { type: 'img', src: 'assets/images/omok/omok-1.png' },
        { type: 'img', src: 'assets/images/omok/omok-2.png' },
      ],
      thumb: 'assets/images/omok/omok-1.png',
    },
    {
      id: 'hotel',
      tag: 'Game · Capstone',
      name: '호텔 마블러스',
      desc: '대학교 캡스톤 경진대회 제출작. 호텔 경영 시뮬레이션 게임. 몬스터 FSM, 미로 탐색 기반 절차적 맵 생성, 카툰 렌더링을 직접 구현.',
      period: '2021 · 캡스톤 경진대회',
      tech: ['Unity', 'C#', 'A* Pathfinding', 'Monster FSM', 'Procedural Generation', 'UGUI', 'CG/HLSL'],
      achievements: [
        '캡스톤 경진대회 출품 · 클라이언트 개발 1인',
        '몬스터 FSM 기반 적 AI 설계 (순찰·추격·공격 상태)',
        '미로 탐색 알고리즘 기반 절차적 맵 생성',
        'A* 경로탐색 NPC 이동 구현',
        'UGUI 기반 HUD 및 인게임 UI 시스템',
        '커스텀 카툰 쉐이더 직접 제작 (CG/HLSL)',
      ],
      media: [
        { type: 'img', src: 'assets/images/hotel/hotel-1.png' },
        { type: 'img', src: 'assets/images/hotel/hotel-2.png' },
        { type: 'img', src: 'assets/images/hotel/hotel-3.png' },
        { type: 'img', src: 'assets/images/hotel/hotel-4.png' },
        { type: 'img', src: 'assets/images/hotel/hotel-5.png' },
      ],
      thumb: 'assets/images/hotel/hotel-1.png',
    },
    {
      id: 'bbang',
      tag: 'Mobile Game',
      name: '빵빵하게',
      desc: 'Unity 기반 모바일 캐주얼 게임. SNS 소셜 로그인, CSV 기반 대화 진행 시스템, 3매치 퍼즐 등 핵심 클라이언트 기능을 1인으로 개발.',
      period: '개인 프로젝트',
      tech: ['Unity', 'C#', 'UGUI', 'Firebase', 'SNS Login', 'CSV Parser', '3-Match Puzzle'],
      achievements: [
        '클라이언트 개발 1인',
        'SNS 소셜 로그인 연동 (Google / Apple)',
        'CSV 파싱 기반 대화 시나리오 진행 시스템 구현',
        '3매치 퍼즐 매칭·연쇄·특수 타일 로직 구현',
      ],
      media: [
        { type: 'img', src: 'assets/images/bbang/bbang-1.png' },
        { type: 'img', src: 'assets/images/bbang/bbang-2.png' },
        { type: 'img', src: 'assets/images/bbang/bbang-3.png' },
        { type: 'img', src: 'assets/images/bbang/bbang-4.png' },
        { type: 'img', src: 'assets/images/bbang/bbang-5.png' },
        { type: 'img', src: 'assets/images/bbang/bbang-6.png' },
      ],
      thumb: 'assets/images/bbang/bbang-1.png',
    },
  ];

  var ITEMS_PER_PAGE = 4;
  var currentPage = 0;
  var totalPages = Math.ceil(PROJECTS.length / ITEMS_PER_PAGE);

  /* ── 카드 생성 ── */
  function buildCard(p, idx) {
    var card = document.createElement('div');
    card.className = 'proj-card';

    var thumbHtml;
    if (p.thumb) {
      thumbHtml = '<img class="proj-thumb" src="' + p.thumb + '" alt="' + p.name + '" loading="lazy">';
    } else {
      thumbHtml = '<div class="proj-thumb-placeholder" style="background:' + p.thumbBg + '">'
        + '<span>' + p.thumbIcon + '</span></div>';
    }

    card.innerHTML = thumbHtml
      + '<div class="proj-card-body">'
      +   '<p class="proj-card-tag">' + p.tag + '</p>'
      +   '<p class="proj-card-name">' + p.name + '</p>'
      +   '<p class="proj-card-desc">' + p.desc + '</p>'
      + '</div>';

    card.addEventListener('click', (function(i){ return function(){ openModal(i); }; })(idx));
    return card;
  }

  /* ── 페이지 슬라이더 빌드 ── */
  function buildSlider() {
    var track = document.getElementById('proj-track');
    var dotsWrap = document.getElementById('proj-page-dots');
    if (!track) return;

    for (var p = 0; p < totalPages; p++) {
      var page = document.createElement('div');
      page.className = 'proj-page';

      var grid = document.createElement('div');
      grid.className = 'project-grid';

      var start = p * ITEMS_PER_PAGE;
      var end = Math.min(start + ITEMS_PER_PAGE, PROJECTS.length);
      for (var i = start; i < end; i++) {
        grid.appendChild(buildCard(PROJECTS[i], i));
      }

      page.appendChild(grid);
      track.appendChild(page);

      // 페이지 도트
      var dot = document.createElement('div');
      dot.className = 'page-dot' + (p === 0 ? ' active' : '');
      (function(pi){ dot.addEventListener('click', function(){ goPage(pi); }); })(p);
      dotsWrap.appendChild(dot);
    }

    updateNavBtns();
  }

  /* ── 페이지 이동 ── */
  function goPage(idx) {
    if (idx < 0 || idx >= totalPages) return;
    var track = document.getElementById('proj-track');
    var dots  = document.getElementById('proj-page-dots').querySelectorAll('.page-dot');

    dots[currentPage].classList.remove('active');
    currentPage = idx;
    dots[currentPage].classList.add('active');
    track.style.transform = 'translateX(-' + (currentPage * 100) + '%)';
    updateNavBtns();
  }

  function updateNavBtns() {
    var btnPrev = document.getElementById('proj-prev');
    var btnNext = document.getElementById('proj-next');
    if (btnPrev) btnPrev.disabled = currentPage === 0;
    if (btnNext) btnNext.disabled = currentPage >= totalPages - 1;
  }

  /* ── 슬라이더 터치 스와이프 ── */
  function setupSliderSwipe() {
    var wrap = document.querySelector('.proj-slider-wrap');
    if (!wrap) return;
    var startX = 0;
    wrap.addEventListener('touchstart', function(e){ startX = e.touches[0].clientX; }, {passive: true});
    wrap.addEventListener('touchend', function(e){
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) goPage(currentPage + (dx < 0 ? 1 : -1));
    });
  }

  /* ── 모달 ── */
  var currentSlide = 0;
  var totalSlides = 0;

  function openModal(idx) {
    var p = PROJECTS[idx];
    currentSlide = 0;
    totalSlides = p.media.length;

    buildGallery(p);

    document.getElementById('modal-info').innerHTML =
      '<p class="modal-tag">' + p.tag + '</p>'
      + '<p class="modal-title">' + p.name + '</p>'
      + '<p class="modal-period">' + p.period + '</p>'
      + '<p class="modal-desc">' + p.desc + '</p>'
      + '<div><p class="modal-section-label">Tech Stack</p>'
      +   '<div class="modal-tech">' + p.tech.map(function(t){ return '<span class="tech-chip">'+t+'</span>'; }).join('') + '</div></div>'
      + '<div><p class="modal-section-label">Achievements</p>'
      +   '<ul class="modal-achievements">' + p.achievements.map(function(a){ return '<li>'+a+'</li>'; }).join('') + '</ul></div>';

    document.getElementById('proj-modal-backdrop').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function buildGallery(p) {
    var slidesEl = document.getElementById('gallery-slides');
    var dotsEl   = document.getElementById('gallery-dots');
    slidesEl.innerHTML = '';
    dotsEl.innerHTML   = '';

    p.media.forEach(function(m, i) {
      var slide = document.createElement('div');
      slide.className = 'gallery-slide' + (i === 0 ? ' active' : '');

      if (m.type === 'img') {
        var img = document.createElement('img');
        img.src = m.src; img.alt = p.name;
        slide.appendChild(img);
      } else if (m.type === 'video') {
        var vid = document.createElement('video');
        vid.src = m.src; vid.controls = true; vid.muted = true; vid.loop = true;
        vid.style.cssText = 'width:100%;height:100%;object-fit:contain;';
        slide.appendChild(vid);
      } else {
        slide.innerHTML = '<div class="gallery-slide-placeholder"><span style="font-size:56px">' + m.icon + '</span></div>';
      }
      slidesEl.appendChild(slide);

      var dot = document.createElement('div');
      dot.className = 'gallery-dot' + (i === 0 ? ' active' : '');
      (function(di){ dot.addEventListener('click', function(){ goSlide(di); }); })(i);
      dotsEl.appendChild(dot);
    });
  }

  function goSlide(idx) {
    if (idx < 0 || idx >= totalSlides) return;
    var slides = document.getElementById('gallery-slides').querySelectorAll('.gallery-slide');
    var dots   = document.getElementById('gallery-dots').querySelectorAll('.gallery-dot');
    var prevVid = slides[currentSlide].querySelector('video');
    if (prevVid) prevVid.pause();
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = idx;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    var newVid = slides[currentSlide].querySelector('video');
    if (newVid) newVid.play().catch(function(){});
  }

  function closeModal() {
    document.getElementById('proj-modal-backdrop').classList.remove('open');
    document.body.style.overflow = '';
    document.getElementById('proj-modal-backdrop').querySelectorAll('video').forEach(function(v){ v.pause(); });
  }

  function setupModal() {
    var backdrop = document.getElementById('proj-modal-backdrop');
    document.getElementById('modal-close').addEventListener('click', closeModal);
    backdrop.addEventListener('click', function(e){ if (e.target === backdrop) closeModal(); });
    document.getElementById('gallery-prev').addEventListener('click', function(){ goSlide(currentSlide - 1); });
    document.getElementById('gallery-next').addEventListener('click', function(){ goSlide(currentSlide + 1); });
    document.addEventListener('keydown', function(e){
      if (!backdrop.classList.contains('open')) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft')  goSlide(currentSlide - 1);
      if (e.key === 'ArrowRight') goSlide(currentSlide + 1);
    });
    var touchStartX = 0;
    var gallery = document.getElementById('modal-gallery');
    gallery.addEventListener('touchstart', function(e){ touchStartX = e.touches[0].clientX; }, {passive:true});
    gallery.addEventListener('touchend', function(e){
      var dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) goSlide(currentSlide + (dx < 0 ? 1 : -1));
    });
  }

  function setupSliderNav() {
    document.getElementById('proj-prev').addEventListener('click', function(){ goPage(currentPage - 1); });
    document.getElementById('proj-next').addEventListener('click', function(){ goPage(currentPage + 1); });
  }

  /* ── init ── */
  document.addEventListener('DOMContentLoaded', function() {
    buildSlider();
    setupSliderNav();
    setupSliderSwipe();
    setupModal();
  });

})();
