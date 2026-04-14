(function () {
  const wrap = document.querySelector('.carousel-wrap');
  if (!wrap) return;

  function tick() {
    const wrapRect = wrap.getBoundingClientRect();
    const centerX  = wrapRect.left + wrapRect.width / 2;
    const halfW    = wrapRect.width * 0.48;

    wrap.querySelectorAll('img').forEach(function (img) {
      const r      = img.getBoundingClientRect();
      const imgCx  = r.left + r.width / 2;
      const dist   = Math.abs(imgCx - centerX);
      const t      = Math.min(dist / halfW, 1);   // 0 = center, 1 = edge

      const scale  = (1.10 - t * 0.24).toFixed(3); // 1.10 → 0.86
      const bright = (1.15 - t * 0.60).toFixed(3); // 1.15 → 0.55

      img.style.transform = 'scale(' + scale + ')';
      img.style.filter    = 'brightness(' + bright + ')';
    });

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();
