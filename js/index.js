/* ---------------- DATA ---------------- */
const DISCIPLINES = [
  { id:"port", name:"Português", abbr:"Português", groups:[
    { g:"Fonética & Ortografia", items:[
      "Dígrafos e divisão silábica",
      "Ortografia: conceitos, alfabeto e orientações ortográficas",
    ]},
    { g:"Acentuação", items:[
      "Acentuação tônica e gráfica; os acentos",
      "Regras básicas e especiais; hiatos e ditongos",
      "Formas verbais com pronomes; acentos diferenciais",
    ]},
    { g:"Morfologia", items:[
      "Estrutura e formação das palavras; derivação e composição",
      "Prefixos, sufixos e tipos de composição",
      "Verbos regulares e irregulares; classes de palavras",
    ]},
    { g:"Sintaxe", items:[
      "Termos essenciais, integrantes e acessórios da oração",
      "Período simples e composto",
      "Concordância, regência e crase",
      "Colocação pronominal; empregos de \u201cque\u201d e \u201cse\u201d",
      "Sinais de pontuação",
    ]},
    { g:"Língua culta & texto", items:[
      "Uso do hífen e da crase",
      "Interpretação e análise de textos",
      "Tipos de comunicação (descrição, narração, dissertação) e de discurso",
      "Qualidades e defeitos do texto; coesão textual",
    ]},
    { g:"Estilística & semântica", items:[
      "Figuras de linguagem; denotação e conotação",
      "Vícios de linguagem; variedades linguísticas; funções da linguagem",
      "Texto e discurso: intertextualidade, paráfrase, paródia, plágio, citação",
      "Semântica: hiponímia/hiperonímia, polissemia, ambiguidade",
    ]},
  ]},
  { id:"cg", name:"Conhecimentos Gerais", abbr:"Conh. Gerais", groups:[
    { g:"História & geografia", items:[
      "Santana de Cataguases: história, geografia, cultura, economia, executivo/legislativo e símbolos",
      "Minas Gerais e Brasil: história e geografia",
    ]},
    { g:"Atualidades", items:[
      "Desenvolvimento sustentável, ecologia, tecnologia e inovação",
      "Energia, política, sociedade e relações internacionais",
      "Educação, saúde, segurança, artes e literatura",
      "Fatos relevantes no Brasil e no mundo; temas da imprensa",
    ]},
  ]},
  { id:"ce", name:"Conhecimentos Específicos", abbr:"Conh. Específicos", groups:[
    { g:"Administração Pública", items:[
      "Atividade administrativa; conceito, natureza e fins da Administração",
      "Princípios básicos da Administração",
      "Poderes e deveres do administrador; uso e abuso do poder",
      "Poderes administrativos",
      "Atos administrativos",
      "Administração e utilização dos bens públicos",
    ]},
    { g:"Contratos & licitações", items:[
      "Contratos administrativos: considerações, formalização e execução",
      "Inexecução, revisão e rescisão do contrato",
      "Principais contratos administrativos",
      "Modalidades de licitação; sanções penais; pregão",
    ]},
    { g:"Administração de RH", items:[
      "Sistema de RH: conceito, objetivos, administração e padronização",
      "Avaliação de cargos: atribuições, requisitos, fatores e métodos",
      "Recrutamento: conceito, etapas e fontes",
      "Seleção: ficha profissiográfica, testes e entrevistas",
      "Treinamento: necessidades, planejamento e avaliação de resultados",
      "Planejamento de carreira e avaliação de desempenho",
    ]},
    { g:"Organização", items:[
      "Desenvolvimento organizacional; processo organizador (conceito e fases)",
      "Análise estrutural e funcional",
      "Formulários e manuais",
    ]},
    { g:"Finanças públicas & orçamento", items:[
      "Conceitos básicos; teoria das finanças; funções do Estado; bens públicos",
      "Orçamento público: conceito e princípios orçamentários",
      "Plano Plurianual (PPA) e Lei de Diretrizes Orçamentárias (LDO)",
      "Classificação e conceituação da receita orçamentária brasileira",
      "Lei de Responsabilidade Fiscal: princípios, limites de pessoal e dívida",
    ]},
    { g:"Gestão estratégica", items:[
      "Desempenho organizacional; governança corporativa e liderança estratégica",
      "Auditoria de resultados e avaliação estratégica",
    ]},
  ]},
];

const TIMELINE = [
  ["16/03/2026","Publicação do edital"],
  ["17–19/03/2026","Prazo para impugnação do edital"],
  ["15/06 – 14/07/2026","Inscrições", true],
  ["15/06 – 19/06/2026","Pedido de isenção da taxa"],
  ["26/06/2026","Resultado das isenções"],
  ["29/06 – 01/07/2026","Recurso contra indeferimento da isenção"],
  ["14/07/2026","Último dia: tratamento especial e comprovação PcD"],
  ["21/07/2026","Publicação da relação de inscritos"],
  ["22–24/07/2026","Recurso de confirmação de inscrição"],
  ["31/07/2026","Cartão definitivo + locais de prova"],
  ["16/08/2026","Prova objetiva (40 questões · 3h)", true],
  ["17/08/2026","Gabaritos preliminares"],
  ["18–20/08/2026","Recurso contra os gabaritos"],
  ["08/09/2026","Gabaritos definitivos + resultado preliminar"],
  ["09–11/09/2026","Recurso contra o resultado preliminar"],
  ["18/09/2026","Resultado FINAL do concurso", true],
];

/* keys for past-date detection (end date) */
const TL_DATES = ["2026-03-16","2026-03-19","2026-07-14","2026-06-19","2026-06-26","2026-07-01","2026-07-14","2026-07-21","2026-07-24","2026-07-31","2026-08-16","2026-08-17","2026-08-20","2026-09-08","2026-09-11","2026-09-18"];

const STORE_KEY = "analista_legislativo_progress";
let state = {};

/* ---------------- BUILD ---------------- */
function itemId(di, gi, ii){ return DISCIPLINES[di].id + "_" + gi + "_" + ii; }

function buildContent(){
  const root = document.getElementById("content");
  DISCIPLINES.forEach((d, di)=>{
    const disc = document.createElement("div");
    disc.className = "disc anim";
    disc.style.animationDelay = (0.16 + di*0.04) + "s";
    let total=0;
    let groupsHTML = "";
    d.groups.forEach((grp, gi)=>{
      let itemsHTML = "";
      grp.items.forEach((it, ii)=>{
        const id = itemId(di,gi,ii);
        total++;
        itemsHTML += `<div class="item" data-id="${id}">
          <span class="box"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span>
          <span class="txt">${it}</span></div>`;
      });
      groupsHTML += `<div class="group"><div class="gname">${grp.g}</div>${itemsHTML}</div>`;
    });
    disc.innerHTML = `
      <div class="disc-head">
        <span class="chev">▼</span>
        <h3>${d.name}</h3>
        <span class="mini" data-mini="${d.id}">0 / ${total}</span>
      </div>
      <div class="disc-body">
        ${groupsHTML}
        <div class="disc-foot"><div class="dtrack"><div class="dfill" data-dfill="${d.id}"></div></div></div>
      </div>`;
    root.appendChild(disc);
    d._total = total;

    disc.querySelector(".disc-head").addEventListener("click", ()=> disc.classList.toggle("collapsed"));
    disc.querySelectorAll(".item").forEach(el=>{
      el.addEventListener("click", ()=>{
        const id = el.dataset.id;
        state[id] = !state[id];
        el.classList.toggle("done", state[id]);
        save(); refresh();
      });
    });
  });
}

function buildBars(){
  const wrap = document.getElementById("discBars");
  DISCIPLINES.forEach(d=>{
    const row = document.createElement("div");
    row.className = "barrow";
    row.innerHTML = `<span class="nm">${d.abbr}</span>
      <span class="track"><span class="fill" data-fill="${d.id}"></span></span>
      <span class="n" data-n="${d.id}">0%</span>`;
    wrap.appendChild(row);
  });
}

function buildTimeline(){
  const tl = document.getElementById("timeline");
  const today = new Date("2026-05-31");
  TIMELINE.forEach((row, i)=>{
    const [dt, ev, key] = row;
    const end = new Date(TL_DATES[i]);
    const past = end < today;
    const div = document.createElement("div");
    div.className = "tl" + (key?" key":"") + (past?" past":"");
    div.innerHTML = `<div class="dt">${dt}</div>
      <div class="ev">${ev}${key?'<span class="tag">marco</span>':''}</div>`;
    tl.appendChild(div);
  });
}

/* ---------------- STATE / RENDER ---------------- */
function applyState(){
  document.querySelectorAll(".item").forEach(el=>{
    el.classList.toggle("done", !!state[el.dataset.id]);
  });
}

function countDone(d, di){
  let done=0;
  d.groups.forEach((grp, gi)=> grp.items.forEach((it, ii)=>{
    if(state[itemId(di,gi,ii)]) done++;
  }));
  return done;
}

function refresh(){
  let grandTotal=0, grandDone=0;
  DISCIPLINES.forEach((d, di)=>{
    const done = countDone(d, di);
    const pct = d._total? Math.round(done/d._total*100):0;
    grandTotal += d._total; grandDone += done;
    const fill = document.querySelector(`[data-fill="${d.id}"]`);
    if(fill) fill.style.width = pct + "%";
    const n = document.querySelector(`[data-n="${d.id}"]`);
    if(n) n.textContent = pct + "%";
    const mini = document.querySelector(`[data-mini="${d.id}"]`);
    if(mini) mini.textContent = done + " / " + d._total;
    const df = document.querySelector(`[data-dfill="${d.id}"]`);
    if(df) df.style.width = pct + "%";
  });
  const gp = grandTotal? Math.round(grandDone/grandTotal*100):0;
  document.getElementById("pctNum").textContent = gp;
  document.getElementById("pctCount").textContent = ` · ${grandDone} de ${grandTotal} tópicos`;
}

function countdown(){
  const exam = new Date("2026-08-16");
  const today = new Date("2026-05-31");
  const days = Math.max(0, Math.round((exam - today)/86400000));
  document.getElementById("countNum").innerHTML = days + '<small> dias</small>';
}

/* ---------------- PERSISTENCE ---------------- */
async function load(){
  try{
    const res = await window.storage.get(STORE_KEY);
    if(res && res.value){ state = JSON.parse(res.value); return; }
  }catch(e){}
  try{
    const saved = localStorage.getItem(STORE_KEY);
    if(saved) state = JSON.parse(saved);
  }catch(e){ state = {}; }
}
let saveTimer;
function save(){
  clearTimeout(saveTimer);
  saveTimer = setTimeout(async ()=>{
    try{ await window.storage.set(STORE_KEY, JSON.stringify(state)); return; }catch(e){}
    try{ localStorage.setItem(STORE_KEY, JSON.stringify(state)); }catch(e){}
  }, 150);
}

/* ---------------- INIT ---------------- */
(async function init(){
  buildContent();
  buildBars();
  buildTimeline();
  countdown();
  if(typeof window.storage !== "undefined"){ await load(); }
  applyState();
  refresh();

  document.getElementById("resetBtn").addEventListener("click", async ()=>{
    if(!confirm("Zerar todo o progresso de estudos?")) return;
    state = {};
    try{ await window.storage.delete(STORE_KEY); }catch(e){}
    try{ localStorage.removeItem(STORE_KEY); }catch(e){}
    applyState(); refresh();
  });
})();