const overlay    = document.getElementById('projectOverlay');
const backdrop   = document.getElementById('overlayBackdrop');
const panelClose = document.getElementById('panelClose');

function openProject(key) {
  const p = PROJECTS[key];
  if (!p) return;

  document.getElementById('panelTitle').textContent = p.title;
  document.getElementById('panelDesc').textContent  = p.desc;

  document.getElementById('panelTags').innerHTML =
    p.tags.map(t => `<span class="tag">${t}</span>`).join('');

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
