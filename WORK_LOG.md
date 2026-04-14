# 작업 로그

> 최대 100개 유지. 초과 시 오래된 항목부터 삭제.

---

### [011] 2026-04-14 — Contact 섹션 및 Footer 추가
- #contact: 이메일·GitHub·LinkedIn 링크 카드 (hover 애니메이션, scroll reveal)
- 개인 정보: b. 1998 · Seoul, Korea + "함께 만들고 싶은 게 있다면 편하게 연락 주세요."
- footer: © 2026 Sunmin KIM 카피라이트
- contact.css, footer.css 신규 작성

### [010] 2026-04-14 — 커리어 dot 정렬·회사명 수정·스킬칩 정리·빵빵하게 추가
- career.css: 타임라인 dot left 보정 (-26px→-23px, mobile -22px→-19px)
- index.html: (주)스페이스아웃게임즈 회사명 수정, about-role "XR (VR/AR)"로 변경
- index.html: XR Platform 칩 SDK 제거(META XR, PICO), MRTK 제거
- index.html: Voxel Editor→Voxel, ARUCO 제거, OpenCV→OpenCV/OpenGL
- project.js: 호텔마블러스 FSM·절차적맵생성·UGUI·1인개발 상세 추가
- project.js: 빵빵하게 프로젝트 추가 (bbang-1~6, SNS로그인, CSV대화, 3매치퍼즐)

### [009] 2026-04-14 — 프로젝트 슬라이더 · 이미지 업데이트 · 호텔 마블러스 추가
- 프로젝트 그리드: 4개 단위 페이지 슬라이더 (2×2, 화살표+도트+터치스와이프)
- KIRO: 1·4번째 이미지 제거, 마크추적+보고서 이미지 추가
- LiDAR: 논문초록·논문상세 이미지로 교체
- Omok: 대회1·대회2 이미지로 교체
- 호텔 마블러스 프로젝트 추가 (7번째, 이미지 5장)

### [008] 2026-04-14 — 스크롤 reveal 반복 애니메이션
- scroll-reveal.js: unobserve 제거, 뷰포트 이탈 시 .visible 제거
- 스크롤 올리고 내릴 때마다 애니메이션 반복 재생

### [007] 2026-04-14 — 모달 버그 수정 · 2×2 그리드 · 커리어 정리
- 모달 재열기 버그: gallery-slides 컨테이너 분리 (galleryEl.innerHTML=''가 prev/next/dots 삭제하던 문제)
- 프로젝트 그리드: 1×4 가로 스크롤 → 2×2 정적 그리드
- 커리어: project-achievements 불릿 리스트 제거 (상세 내역은 프로젝트 모달로 이동)
- 캐러셀 화살표 및 setupNav 제거

### [006] 2026-04-14 — About 2열 복원 + 기술 스택 추가
- about-inner: 2열 그리드 복원 (1fr 1fr, gap 72px, align-items: start)
- 오른쪽 컬럼: 카테고리별 기술 스택 칩 (Engine, XR Platform, Rendering, Network, 3D/Tools)
- 주요 기술에 highlight 스타일 적용 (Unity, C#, META XR SDK 등)

### [005] 2026-04-14 — About 섹션 재구성
- about role: "Unity · Game · XR · VR · MR" → "Unity · Game · XR"
- 캐러셀: 2열 사이드 컬럼 → 1열 배경 스트립 (상단~Sunmin KIM 레벨, 좌측 그라디언트 마스크)
- 스포트라이트 scale/brightness 효과 제거 (carousel-spotlight.js 비활성화)
- about-inner: 2열 그리드 → 단일 컬럼

### [004] 2026-04-14 — Project 섹션 추가
- `project.css`: 4열 스와이프 그리드, 카드 스타일, 모달 오버레이 (갤러리+정보 패널)
- `project.js`: 6개 프로젝트 데이터, 그리드 렌더, 캐러셀 화살표, 모달 (이미지/영상 슬라이더 + 키보드/터치 스와이프)
- 이미지 추가: dopamino(2장), kiro(5장), vivarium extras(award/rank/rating)
- 영상 추가: vivarium.mp4, twinworld.mp4
- `scroll-reveal.js`: window._revealObserver 노출 (동적 요소 등록용)

### [003] 2026-04-14 — UI 다수 수정
- `nav.css`: 상단 바 불투명 처리 (background: var(--bg) + border-bottom)
- `index.html`: 네비게이션에 Career 메뉴 추가
- `about-label`: "안녕하세요! 유니티 개발자 김선민 입니다" → "About"
- `about.css`: about-name 폰트 크기 축소 (clamp 44-88 → 34-64px)
- `career.css`: 세로 타임라인 + 도트 디자인, 전체 사이즈 축소
- `index.html`: 커리어 첫 항목 회사명 → 스페이스아웃 게임즈

### [002] 2026-04-14 — About 캐러셀 개선 (A+E 조합)
- `about.css`: 단일 행 → 2행 구조 (위: vivarium 왼쪽 스크롤 / 아래: twinworld 오른쪽 스크롤)
- `carousel-spotlight.js` 신규 생성: rAF 기반 스포트라이트 효과 (중앙 이미지 크고 밝게, 가장자리 어둡게)
- `index.html`: carousel-row 구조로 변경, carousel-spotlight.js 스크립트 추가

### [001] 2026-04-14 — 작업 로그 규칙 추가
- `CLAUDE.md`에 "작업 로그" 섹션 추가 (최대 100개 유지 규칙 포함)
- `WORK_LOG.md` 파일 생성
