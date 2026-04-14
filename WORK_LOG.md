# 작업 로그

> 최대 100개 유지. 초과 시 오래된 항목부터 삭제.

---

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
