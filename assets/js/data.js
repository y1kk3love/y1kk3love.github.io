const PROJECTS = {
  vivarium: {
    title: 'Vivarium',
    desc: 'XR 자연 생태계 체험 게임. GPU Instancing·Compute Shader로 20~30배 최적화, Boids 군집 AI, FSM 5종 동물 행동, META·PICO 멀티플랫폼 대응. UniTask 비동기 처리, REST API 클라이언트, GitHub Actions CI/CD 구축.',
    tags: ['Unity', 'META SDK', 'PICO SDK', 'XR', 'C#', 'Compute Shader'],
    images: [
      'assets/images/vivarium/vivarium-1.jpg',
      'assets/images/vivarium/vivarium-2.jpg',
      'assets/images/vivarium/vivarium-3.jpg',
      'assets/images/vivarium/vivarium-4.jpg',
      'assets/images/vivarium/vivarium-5.jpg',
    ],
    platforms: [
      { label: 'Website', text: 'vivariumxr.com ↗', url: 'https://www.vivariumxr.com/' },
      { label: 'Meta Store', text: 'Meta Quest Store ↗', url: 'https://www.meta.com/ko-kr/experiences/vivarium/8899809286723631/' },
      { label: 'PICO Store', text: 'PICO Store ↗', url: 'https://store-global.picoxr.com/kr/detail/1/7374645554388664325' },
    ]
  },
  twinworld: {
    title: 'Twinworld',
    desc: 'XR 소셜 메타버스 플랫폼. 3D Recording 바이너리 직렬화, GLB 런타임 Import/Export (GLTFast), Photon Fusion 아바타 IK·BlendShape 동기화, Voxel 에디터 구현. Hololens 2 포팅.',
    tags: ['Unity', 'Photon Fusion', 'Hololens 2', 'C#', 'GLTFast'],
    images: [
      'assets/images/twinworld/twinworld-1.webp',
      'assets/images/twinworld/twinworld-2.webp',
      'assets/images/twinworld/twinworld-3.png',
      'assets/images/twinworld/twinworld-4.png',
      'assets/images/twinworld/twinworld-5.png',
    ],
    platforms: [
      { label: 'Website', text: 'twin.world ↗', url: 'https://www.twin.world/ko' },
      { label: 'Meta Store', text: 'Meta Quest Store ↗', url: 'https://www.meta.com/ko-kr/experiences/twinworld/6464922583573383/' },
      { label: 'MS Store', text: 'Microsoft Store ↗', url: 'https://apps.microsoft.com/detail/9ncbr51c5m67?hl=ko-kr&gl=KR' },
    ]
  },
  dopamino: {
    title: 'Dopamino',
    desc: 'META XR SDK 기반 MR 도미노 게임. 공간 인식·패스스루 게임 메카닉, 핸드 트래킹 인터랙션 구현. Meta Horizon Start Developer Competition 참가작.',
    tags: ['Unity', 'META XR SDK', 'MR', 'C#', 'Hand Tracking'],
    images: [],
    platforms: []
  }
};

// 프로젝트 카드 썸네일 세팅
document.querySelectorAll('.project-card[data-project]').forEach(card => {
  const p = PROJECTS[card.dataset.project];
  if (p && p.images && p.images.length > 0) {
    const thumb = card.querySelector('.project-thumb');
    if (thumb) {
      thumb.style.backgroundImage = `url('${p.images[0]}')`;
      thumb.style.backgroundSize = 'cover';
      thumb.style.backgroundPosition = 'center';
      thumb.classList.add('has-image');
    }
  }
});
