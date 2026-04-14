function animateCount(el) {
  const target = parseInt(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  if (isNaN(target) || target <= 0) return;
  const duration = 1000;
  const interval = duration / target;
  let cur = 0;
  const timer = setInterval(() => {
    cur = Math.min(cur + 1, target);
    el.textContent = cur + suffix;
    if (cur >= target) clearInterval(timer);
  }, interval);
}

const statsGrid = document.querySelector('.about-stats');
if (statsGrid) {
  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('[data-count]').forEach(animateCount);
        countObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  countObserver.observe(statsGrid);
}
