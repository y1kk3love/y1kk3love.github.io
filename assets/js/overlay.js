const overlay    = document.getElementById('projectOverlay');
const backdrop   = document.getElementById('overlayBackdrop');
const panelClose = document.getElementById('panelClose');

function openProject(key) {
  const p = PROJECTS[key];
  if (!p) return;

  document.getElementById('panelTitle').textContent = p.title;
  document.getElementById('panelDesc').textContent  = p.desc;

  // Tags
  document.getElementById('panelTags').innerHTML =
    p.tags.map(t => `<span class="tag">${t}</span>`).join('');

  // Gallery
  const galleryEl = document.getElementById('panelGallery');
  if (p.images && p.images.length > 0) {
    galleryEl.style.display = '';
    galleryEl.innerHTML = `
      <img id="galleryMain" class="gallery-main-img" src="${p.images[0]}" alt="${p.title}">
      ${p.images.length > 1 ? `<div class="gallery-thumbs">${
        p.images.map((img, i) =>
          `<img class="gallery-thumb${i === 0 ? ' active' : ''}" src="${img}" alt="" data-idx="${i}">`
        ).join('')
      }</div>` : ''}
    `;
    galleryEl.querySelectorAll('.gallery-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        document.getElementById('galleryMain').src = thumb.src;
        galleryEl.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  } else {
    galleryEl.innerHTML = '<div class="panel-no-thumb"></div>';
  }

  // Platforms
  const platEl = document.getElementById('panelPlatforms');
  if (p.platforms.length) {
    platEl.style.display = '';
    platEl.innerHTML = p.platforms.map(pl =>
      `<a href="${pl.url}" target="_blank" rel="noopener" class="platform-link">
        <span class="pl-label">${pl.label}</span>
        <span>${pl.text}</span>
      </a>`
    ).join('');
  } else {
    platEl.style.display = 'none';
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  panelClose.focus();
}

function closeProject() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => openProject(card.dataset.project));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openProject(card.dataset.project);
    }
  });
});

backdrop.addEventListener('click', closeProject);
panelClose.addEventListener('click', closeProject);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProject(); });
