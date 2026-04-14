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
        { type: 'img', src: 'assets/images/kiro/kiro-1.png' },
        { type: 'img', src: 'assets/images/kiro/kiro-2.png' },
        { type: 'img', src: 'assets/images/kiro/kiro-3.png' },
        { type: 'img', src: 'assets/images/kiro/kiro-4.png' },
        { type: 'img', src: 'assets/images/kiro/kiro-5.png' },
      ],
      thumb: 'assets/images/kiro/kiro-1.png',
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
        { type: 'placeholder', icon: '🚗', label: '3D LiDAR Sim' },
      ],
      thumb: null,
      thumbIcon: '🚗',
      thumbBg: 'linear-gradient(135deg, #1a1714 0%, #2d2620 100%)',
    },
    {
      id: 'omok',
      tag: 'Paper · 학술대회',
      name: '준학습 기반 오목 AI',
      desc: '유전자 알고리즘의 확률 맵과 실제 게임 데이터에서 추출한 확률 맵을 병합한 준학습(Semi-Learning) 기반 오목 AI. 순수 휴리스틱의 예측 가능한 연산량을 유지하면서 실전 데이터로 점진적 강화.',
      period: '2021.12 ~ 2022.05 · 개인 연구',
      tech: ['C++', 'OpenGL', 'Python', 'Genetic Algorithm', 'Game AI', 'Heuristic'],
      achievements: [
        '한국정보처리학회 2022 ASK 춘계학술대회 AI 분야 논문 발표',
        '준학습(Semi-Learning) — 휴리스틱 + 실전 게임 데이터 병합',
        '게임 기록 기반 보드 패턴 → 다음 착수 가중치 바이너리 저장',
        'C++ OpenGL 2D 게임 엔진 직접 구현',
      ],
      media: [
        { type: 'placeholder', icon: '⚫', label: '오목 AI' },
      ],
      thumb: null,
      thumbIcon: '⚫',
      thumbBg: 'linear-gradient(135deg, #f7f4ef 0%, #e8e2d9 100%)',
    },
  ];

  /* ── 그리드 렌더 ── */
  function buildGrid() {
    var grid = document.getElementById('proj-grid');
    if (!grid) return;

    PROJECTS.forEach(function (p, i) {
      var card = document.createElement('div');
      card.className = 'proj-card reveal';
      card.dataset.idx = i;

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

      card.addEventListener('click', function () { openModal(i); });
      grid.appendChild(card);
    });

    // reveal 등록
    if (window._revealObserver) {
      grid.querySelectorAll('.reveal').forEach(function (el) {
        window._revealObserver.observe(el);
      });
    }
  }

  /* ── 모달 ── */
  var currentSlide = 0;
  var currentProject = null;
  var totalSlides = 0;

  function openModal(idx) {
    var p = PROJECTS[idx];
    currentProject = p;
    currentSlide = 0;
    totalSlides = p.media.length;

    var backdrop = document.getElementById('proj-modal-backdrop');
    var info = document.getElementById('modal-info');

    // 갤러리 빌드
    buildGallery(p);

    // 정보 빌드
    info.innerHTML =
      '<p class="modal-tag">' + p.tag + '</p>'
      + '<p class="modal-title">' + p.name + '</p>'
      + '<p class="modal-period">' + p.period + '</p>'
      + '<p class="modal-desc">' + p.desc + '</p>'
      + '<div>'
      +   '<p class="modal-section-label">Tech Stack</p>'
      +   '<div class="modal-tech">' + p.tech.map(function(t){ return '<span class="tech-chip">'+t+'</span>'; }).join('') + '</div>'
      + '</div>'
      + '<div>'
      +   '<p class="modal-section-label">Achievements</p>'
      +   '<ul class="modal-achievements">' + p.achievements.map(function(a){ return '<li>'+a+'</li>'; }).join('') + '</ul>'
      + '</div>';

    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function buildGallery(p) {
    var slidesEl = document.getElementById('gallery-slides'); // prev/next/dots 건드리지 않음
    var dotsEl = document.getElementById('gallery-dots');
    slidesEl.innerHTML = '';
    dotsEl.innerHTML = '';

    p.media.forEach(function (m, i) {
      var slide = document.createElement('div');
      slide.className = 'gallery-slide' + (i === 0 ? ' active' : '');

      if (m.type === 'img') {
        var img = document.createElement('img');
        img.src = m.src;
        img.alt = p.name;
        slide.appendChild(img);
      } else if (m.type === 'video') {
        var vid = document.createElement('video');
        vid.src = m.src;
        vid.controls = true;
        vid.muted = true;
        vid.loop = true;
        vid.style.cssText = 'width:100%;height:100%;object-fit:contain;';
        slide.appendChild(vid);
      } else {
        slide.innerHTML = '<div class="gallery-slide-placeholder"><span style="font-size:56px">' + m.icon + '</span></div>';
      }

      slidesEl.appendChild(slide);

      var dot = document.createElement('div');
      dot.className = 'gallery-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', function () { goSlide(i); });
      dotsEl.appendChild(dot);
    });
  }

  function goSlide(idx) {
    if (idx < 0 || idx >= totalSlides) return;
    var slides = document.getElementById('gallery-slides').querySelectorAll('.gallery-slide');
    var dots = document.getElementById('gallery-dots').querySelectorAll('.gallery-dot');

    // 이전 비디오 정지
    var prevVid = slides[currentSlide].querySelector('video');
    if (prevVid) prevVid.pause();

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = idx;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');

    // 새 슬라이드 비디오 자동재생
    var newVid = slides[currentSlide].querySelector('video');
    if (newVid) newVid.play().catch(function(){});
  }

  function closeModal() {
    var backdrop = document.getElementById('proj-modal-backdrop');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';

    // 모든 비디오 정지
    backdrop.querySelectorAll('video').forEach(function(v){ v.pause(); });
  }

  /* ── 이벤트 연결 ── */
  function setupModal() {
    var backdrop = document.getElementById('proj-modal-backdrop');
    var btnClose = document.getElementById('modal-close');
    var btnPrev = document.getElementById('gallery-prev');
    var btnNext = document.getElementById('gallery-next');

    btnClose.addEventListener('click', closeModal);
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) closeModal();
    });

    btnPrev.addEventListener('click', function () { goSlide(currentSlide - 1); });
    btnNext.addEventListener('click', function () { goSlide(currentSlide + 1); });

    document.addEventListener('keydown', function (e) {
      if (!backdrop.classList.contains('open')) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') goSlide(currentSlide - 1);
      if (e.key === 'ArrowRight') goSlide(currentSlide + 1);
    });

    // 터치 스와이프
    var touchStartX = 0;
    var gallery = document.getElementById('modal-gallery');
    gallery.addEventListener('touchstart', function (e) { touchStartX = e.touches[0].clientX; });
    gallery.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) goSlide(currentSlide + (dx < 0 ? 1 : -1));
    });
  }

  /* ── init ── */
  document.addEventListener('DOMContentLoaded', function () {
    buildGrid();
    setupModal();
  });

})();
