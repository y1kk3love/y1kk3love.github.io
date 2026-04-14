const roles = [
  'Game Client Dev & XR Specialist',
  'Unity / VR / MR Engineer',
  'Multi-Platform XR Developer',
];
const typingEl = document.getElementById('typing-text');
let roleIdx = 0, charIdx = 0, isDeleting = false;

(function tick() {
  const current = roles[roleIdx];
  if (!isDeleting) {
    typingEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      isDeleting = true;
      return setTimeout(tick, 2400);
    }
  } else {
    typingEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      return setTimeout(tick, 380);
    }
  }
  setTimeout(tick, isDeleting ? 38 : 62);
})();
