const track    = document.getElementById('sliderTrack');
const prevBtn  = document.getElementById('sliderPrev');
const nextBtn  = document.getElementById('sliderNext');
const countEl  = document.getElementById('sliderCount');

if (track && prevBtn && nextBtn && countEl) {
  const pages      = track.querySelectorAll('.slider-page');
  const totalPages = pages.length;
  let current      = 0;

  function goTo(page) {
    current = page;
    track.style.transform = `translateX(-${current * 100}%)`;

    const cur  = String(current + 1).padStart(2, '0');
    const tot  = String(totalPages).padStart(2, '0');
    countEl.textContent = `${cur} / ${tot}`;

    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === totalPages - 1;
  }

  prevBtn.addEventListener('click', () => { if (current > 0) goTo(current - 1); });
  nextBtn.addEventListener('click', () => { if (current < totalPages - 1) goTo(current + 1); });

  goTo(0);
}
