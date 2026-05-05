document.querySelectorAll('#year').forEach((el) => el.textContent = new Date().getFullYear());

async function loadJson(path) { const r = await fetch(path); return r.json(); }

async function initFolsomFinds() {
  const grid = document.getElementById('businessGrid'); if (!grid) return;
  const data = await loadJson('data/businesses.json');
  const filters = document.getElementById('categoryFilters');
  const search = document.getElementById('searchInput');
  let category = 'All'; let q = '';
  const cats = ['All', ...new Set(data.map(b => b.category))];
  filters.innerHTML = cats.map(c => `<button class='btn btn-secondary' data-cat='${c}'>${c}</button>`).join('');
  filters.onclick = (e) => { if (e.target.dataset.cat) { category = e.target.dataset.cat; render(); } };
  search?.addEventListener('input', e => { q = e.target.value.toLowerCase(); render(); });
  function render() { grid.innerHTML = data.filter(b => (category === 'All' || b.category === category) && (`${b.name} ${b.category}`.toLowerCase().includes(q))).map(b => `<article class='card'><h3>${b.name}</h3><p><strong>${b.category}</strong><br>${b.address}<br>${b.phone}<br><a href='${b.website}'>Website</a><br>Rating: ${b.rating} ★</p><p><span class='badge'>Offer: ${b.offer}</span></p><p><a class='btn btn-primary' href='contact.html'>Claim this business</a></p></article>`).join(''); }
  render();
}

async function initLabs() { const wrap = document.getElementById('projectTracks'); if (!wrap) return; const arr = await loadJson('data/projects.json'); wrap.innerHTML = arr.map(p => `<article class='card'><h3>${p}</h3></article>`).join(''); }
async function initPortfolio() { const wrap = document.getElementById('portfolioGrid'); if (!wrap) return; const arr = await loadJson('data/portfolio.json'); wrap.innerHTML = arr.map(p => `<article class='card'><h3>${p.name}</h3><p><strong>Skills:</strong> ${p.skills}<br><strong>Projects:</strong> ${p.projects}<br><a href='${p.github}'>GitHub</a> | <a href='${p.demo}'>Demo</a><br><strong>Peer review:</strong> ${p.score}<br><strong>${p.badge}</strong></p></article>`).join(''); }

initFolsomFinds(); initLabs(); initPortfolio();
