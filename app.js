
let tower = null;
let selectedFloor = 1;
let query = "";
let selectedRange = 0;

const el = id => document.getElementById(id);

async function init() {
  const res = await fetch("data.json?v=20260814-3", { cache: "no-store" });
  const raw = await res.json();
  tower = raw.battle_tower;

  el("formatText").textContent = `${tower.format} · Lv.${tower.level} · IV 6V · EV 미투자`;
  el("restText").textContent = tower.rest_rule;

  buildFloorNav();
  el("searchInput").addEventListener("input", e => {
    query = e.target.value.trim().toLowerCase();
    render();
  });
  render();
}

function buildFloorNav() {
  const rangeNav = el("rangeNav");
  const nav = el("floorNav");
  rangeNav.innerHTML = "";
  nav.innerHTML = "";

  const ranges = [
    [1, 10],
    [11, 20],
    [21, 30],
    [31, 40],
    [41, 50]
  ];

  ranges.forEach(([start, end], idx) => {
    const rangeBtn = document.createElement("button");
    rangeBtn.className = "range-btn";
    rangeBtn.classList.toggle("active", idx === selectedRange);
    rangeBtn.textContent = `${start}~${end}F`;
    rangeBtn.onclick = () => {
      selectedRange = idx;
      selectedFloor = start;
      query = "";
      el("searchInput").value = "";
      buildFloorNav();
      render();
    };
    rangeNav.appendChild(rangeBtn);
  });

  const [start, end] = ranges[selectedRange];
  tower.floors
    .filter(f => f.floor >= start && f.floor <= end)
    .forEach(f => {
      const btn = document.createElement("button");
      btn.className = "floor-btn";
      btn.textContent = `${f.floor}F`;
      btn.dataset.floor = f.floor;
      btn.onclick = () => {
        selectedFloor = f.floor;
        query = "";
        el("searchInput").value = "";
        render();
        window.scrollTo({top: 0, behavior: "smooth"});
      };
      nav.appendChild(btn);
    });
}

function searchableText(p) {
  return [
    p.pokemon, p.ability, p.held_item, p.level, p.ivs, p.evs,
    ...(p.moves || [])
  ].join(" ").toLowerCase();
}

function render() {
  const floor = tower.floors.find(f => f.floor === selectedFloor);
  document.querySelectorAll(".floor-btn").forEach(b => {
    b.classList.toggle("active", Number(b.dataset.floor) === selectedFloor);
  });

  el("floorHeader").innerHTML = `
    <h2>${floor.floor}층 · ${floor.trainer_theme}</h2>
    <p>${floor.description}</p>
    <div class="badges">
      ${floor.fixed_lead ? `<span class="badge">선봉 고정: ${floor.fixed_lead}</span>` : `<span class="badge">선봉 랜덤</span>`}
      ${floor.boss ? `<span class="badge boss">BOSS FLOOR</span>` : ``}
      ${floor.rest_after ? `<span class="badge rest">클리어 후 ${floor.floor}.5층 휴식터</span>` : ``}
      <span class="badge">6 vs 6 싱글</span>
    </div>
  `;

  const filtered = floor.team.filter(p => !query || searchableText(p).includes(query));
  el("emptyMessage").hidden = filtered.length !== 0;

  el("teamGrid").innerHTML = filtered.map((p, idx) => `
    <article class="poke-card">
      <div class="card-top">
        <div>
          <span class="slot">SLOT ${idx + 1}</span>
          <h3 class="poke-name">${p.pokemon}</h3>
        </div>
        <span class="badge">Lv.${p.level}</span>
      </div>
      <div class="info">
        <div class="info-item"><span class="info-label">특성</span><span class="info-value">${p.ability}</span></div>
        <div class="info-item"><span class="info-label">도구</span><span class="info-value">${p.held_item}</span></div>
        <div class="info-item"><span class="info-label">개체값</span><span class="info-value">${p.ivs}</span></div>
        <div class="info-item"><span class="info-label">노력치</span><span class="info-value">${p.evs}</span></div>
      </div>
      <div class="moves">
        <h4>Moves</h4>
        <div class="move-list">
          ${(p.moves || []).map(m => `<div class="move">${m}</div>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

init().catch(err => {
  console.error(err);
  document.body.innerHTML = `<main class="container"><h1>데이터를 불러오지 못했습니다.</h1><p>GitHub Pages 또는 로컬 웹 서버에서 실행해주세요.</p></main>`;
});
