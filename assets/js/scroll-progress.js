const scrollLine      = document.getElementById('scrollLine');
const scrollIndicator = document.getElementById('scrollIndicator');

window.addEventListener('scroll', () => {
  const scrollTop  = window.scrollY;
  const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
  const pct        = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;

  scrollLine.style.width        = pct + '%';
  scrollIndicator.textContent   = `— ${pct}%`;
}, { passive: true });
