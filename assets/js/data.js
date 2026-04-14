const PROJECTS = {
  vivarium: {
    title: 'Vivarium',
    desc: 'XR 자연 생태계 체험 게임. GPU Instancing·Compute Shader 최적화, Boids 군집 AI, META·PICO 멀티플랫폼 대응. Meta Store 4.6/5 · PICO Store 유료 1위 · Webby Awards 수상.',
    tags: ['Unity', 'META SDK', 'PICO SDK', 'XR', 'C#', 'Compute Shader'],
    platforms: [
      { label: 'Website', text: 'vivariumxr.com', url: 'https://www.vivariumxr.com/' },
      { label: 'Meta Store', text: 'Meta Quest Store ↗', url: 'https://www.meta.com/ko-kr/experiences/vivarium/8899809286723631/' },
      { label: 'PICO Store', text: 'PICO Store ↗', url: 'https://store-global.picoxr.com/kr/detail/1/7374645554388664325' },
    ]
  },
  twinworld: {
    title: 'Twinworld',
    desc: 'XR 소셜 게임 플랫폼. 3D Recording 바이너리 직렬화, GLB 런타임 Import/Export, Photon Fusion 아바타 IK 동기화, Voxel 에디터 구현.',
    tags: ['Unity', 'Photon Fusion', 'Hololens', 'C#', 'GLTFast'],
    platforms: [
      { label: 'Website', text: 'twin.world ↗', url: 'https://www.twin.world/ko' },
      { label: 'Meta Store', text: 'Meta Quest Store ↗', url: 'https://www.meta.com/ko-kr/experiences/twinworld/6464922583573383/' },
      { label: 'MS Store', text: 'Microsoft Store ↗', url: 'https://apps.microsoft.com/detail/9ncbr51c5m67?hl=ko-kr&gl=KR' },
    ]
  },
  dopamino: {
    title: 'Dopamino',
    desc: 'META XR SDK 기반 MR 도미노 게임. 공간 인식·패스스루 게임 메카닉, 핸드 트래킹 인터랙션 구현. Meta Horizon Start Developer Competition 참가작.',
    tags: ['Unity', 'META XR SDK', 'MR', 'C#'],
    platforms: []
  }
};
