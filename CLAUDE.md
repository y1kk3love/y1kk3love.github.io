# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# 프로젝트 규칙

## 작업 전 확인
- 작업에 들어가기 전, 디테일을 더하기 위한 질문이 있다면 먼저 물어본다.
- 질문이 없으면 바로 작업을 시작한다.

## Git 워크플로우
- 각 작업이 끝나면 작업 브랜치를 main에 머지하고 push한다.
- 머지 전 사용자에게 확인하지 않아도 된다 (사용자가 명시적으로 요청하는 경우는 제외).
- 머지 후 작업 브랜치는 로컬/원격 모두 삭제하지 않아도 된다.
- 모든 작업이 끝나면 반드시 main에 머지하고 origin에 push한다.

## 작업 품질
- 사용자의 명령을 받으면 작업의 완성도를 높이기 위해 필요한 질문을 먼저 한다.

## 작업 로그
- 매 작업이 끝나면 `WORK_LOG.md`에 작업 내용을 기록한다.
- 로그 형식: `### [순번] YYYY-MM-DD — 작업 내용 요약` + 세부 변경 사항 bullet
- 로그는 최대 100개까지만 유지한다. 100개 초과 시 가장 오래된 항목부터 삭제한다.
- 최신 항목을 파일 상단(`---` 바로 아래)에 추가하고, 순번은 직전 최대 번호 + 1 (3자리, 예: `[021]`).

# 프로젝트 개요

Unity XR 클라이언트 개발자 김선민의 개인 포트폴리오. GitHub Pages(`y1kk3love.github.io`)로 `main` 브랜치 루트가 그대로 배포되는 순수 정적 사이트다. 빌드 도구·패키지 매니저·테스트·린트가 없다.

## 로컬 확인
```bash
python3 -m http.server 8000   # http://localhost:8000
```
`file://`로 열어도 동작하지만, 영상/상대경로 확인은 로컬 서버 권장.

## 구조

- `index.html` — 단일 페이지. 섹션 순서: About → Career → Project → Contact → Blog → Footer. About/Career/Contact/Blog 내용은 HTML에 직접 하드코딩되어 있다.
- `assets/js/project.js` — **실제로 쓰이는 프로젝트 데이터와 로직**. IIFE 내부의 `PROJECTS` 배열(`id, tag, name, desc, period, tech[], achievements[], media[{type:'img'|'video', src}], thumb`)로 Project 섹션 슬라이더(`ITEMS_PER_PAGE = 4`, 페이지 dot·스와이프)와 상세 모달(갤러리, 키보드/스와이프, 영상 자동재생·정지)을 렌더한다. 프로젝트 추가·수정·이미지 순서 변경은 여기서 한다. 배열 순서 = 표시 순서, `media[0]` = 모달 첫 슬라이드, `thumb` = 카드 썸네일.
- `assets/js/scroll-reveal.js` — `.reveal` 요소에 IntersectionObserver로 `visible` 클래스를 토글. 동적으로 생성한 요소는 `window._revealObserver.observe(el)`로 등록.
- `assets/css/` — 섹션별 CSS 파일. 디자인 토큰(`--bg`, `--text`, `--muted`, `--accent` 등)과 `.wrapper`는 `base.css`의 `:root`에 있다. 폰트는 CDN의 Pretendard.
- `assets/images/<project-id>/`, `assets/video/` — 프로젝트 미디어. 폴더명은 `PROJECTS[].id`와 맞춘다.

### 주의: 로드되지 않는 레거시 파일
`index.html`이 실제로 불러오는 것은 CSS 8개(base, nav, about, career, project, contact, footer, blog)와 JS 2개(`scroll-reveal.js`, `project.js`)뿐이다. 다음은 이전 디자인의 잔재로 **어디서도 로드되지 않는다**: `data.js`(별도의 구 `PROJECTS` 객체 — 수정해도 사이트에 반영 안 됨), `overlay.js`, `slider.js`, `count-up.js`, `typing.js`, `scroll-progress.js`, `carousel-spotlight.js`(의도적으로 비활성화), 그리고 `hero.css`, `projects.css`, `overlay.css`, `awards.css`, `skills.css`, `animations.css`, `scroll-progress.css`. 새 CSS/JS 파일을 만들면 `index.html`에 `<link>`/`<script>`를 직접 추가해야 한다.

### About 배경 캐러셀
`.about-bg-track`은 무한 루프를 위해 이미지 목록을 **두 번** 나열한다(“루프용 복제” 주석). 이미지를 추가/삭제할 때 양쪽을 동일하게 맞춘다.

## 콘텐츠 언어
화면 텍스트와 커밋 메시지, 작업 로그는 한국어. 커밋 메시지는 `feat:` / `fix:` / `docs:` 접두어를 사용한다.
