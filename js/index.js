/* ---------------- DATA ---------------- */
const DISCIPLINES = [
  { id:"port", name:"Português", abbr:"Português", groups:[
    { g:"Ortografia", items:[
      "Conceitos básicos; o alfabeto; orientações ortográficas",
      "Emprego de S/Z, X/CH, SS/Ç e demais casos",
    ]},
    { g:"Morfologia", items:[
      "Estrutura e formação das palavras; derivação e composição",
      "Prefixos, sufixos e tipos de composição",
      "Verbos regulares e irregulares; classes de palavras",
    ]},
    { g:"Sintaxe", items:[
      "Termos essenciais, integrantes e acessórios da oração",
      "Período simples e composto",
      "Sintaxe de concordância e de regência",
      "Colocação pronominal; empregos de \u201cque\u201d e \u201cse\u201d",
      "Sinais de pontuação",
    ]},
    { g:"Língua culta & texto", items:[
      "Uso do hífen e da crase",
      "Interpretação e análise de textos",
      "Tipos de comunicação (descrição, narração, dissertação) e de discurso",
      "Qualidades e defeitos do texto; coerência e coesão textual",
    ]},
    { g:"Estilística & semântica", items:[
      "Figuras de linguagem; denotação e conotação",
      "Vícios de linguagem; variedades linguísticas; funções da linguagem",
      "Texto e discurso: intertextualidade, paráfrase, paródia, plágio, citação",
      "Semântica: hiponímia/hiperonímia, polissemia, ambiguidade",
    ]},
  ]},
  { id:"mat", name:"Matemática", abbr:"Matemática", groups:[
    { g:"Números & álgebra", items:[
      "Conjuntos e conjuntos numéricos",
      "Equação e inequação do 1º grau; sistemas do 1º grau",
      "Equação e inequação do 2º grau",
      "Potenciação, radiciação e operações com radicais; polinômios",
    ]},
    { g:"Funções & sequências", items:[
      "Relação e funções; função do 1º e do 2º graus",
      "Função polinomial, exponencial e logarítmica",
      "Progressão aritmética (PA) e progressão geométrica (PG)",
    ]},
    { g:"Trigonometria & geometria", items:[
      "Trigonometria no triângulo retângulo",
      "Circunferência; seno, cosseno e tangente de um arco",
      "Geometria plana: triângulos e proporcionalidade; áreas",
    ]},
    { g:"Matemática aplicada", items:[
      "Porcentagem; lucro e prejuízo; acréscimos e descontos",
      "Juros simples e juros compostos",
      "Noções básicas de estatística",
      "Probabilidade",
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
    { g:"Protocolo, expedição & arquivo", items:[
      "Serviços e rotinas de protocolo e expedição",
      "Arquivo: gestão documental e ciclo de vida (corrente, intermediário, permanente)",
      "Classificação de documentos e correspondências; tabela de temporalidade",
    ]},
    { g:"Documentos & correspondência oficial", items:[
      "Correspondência oficial: ofício, memorando, requerimento",
      "Princípios da redação oficial (clareza, impessoalidade, formalidade, padrão culto)",
      "Formas de tratamento e endereçamento",
    ]},
    { g:"Processos & material", items:[
      "Processos administrativos: formação, autuação e tramitação",
      "Gestão de material e controle de estoques e almoxarifado",
    ]},
    { g:"Organização & atendimento", items:[
      "Organização administrativa dos serviços públicos",
      "Qualidade no atendimento ao público",
      "Imagem da instituição e profissional; sigilo e postura; ética",
    ]},
    { g:"Noções de informática", items:[
      "Conceitos básicos de hardware e software; ambiente Windows 10",
      "Editor de texto MS Word; planilhas MS Excel",
      "Internet e intranet; navegadores; correio eletrônico (webmail)",
      "Cópias de segurança (backup); organização de arquivos e pastas",
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

const STORE_KEY = "assistente_administrativo_progress";
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