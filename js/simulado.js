const DISC_LABELS = {port:"Português", mat:"Matemática", cg:"Conhecimentos Gerais", ce:"Conhecimentos Específicos"};
const FONTE_LABEL = "Auctor · Chácara-MG, 2022";
const LETTERS = ["A","B","C","D"];

const ALL_QUESTIONS = [
/* ==================== PORTUGUÊS ==================== */
{id:1,disc:"port",topic:"Interpretação de texto",
q:`Leia o trecho: "A Câmara Municipal, como casa legislativa, exerce função primordial na democracia representativa: ela traduz a vontade popular em normas jurídicas, fiscaliza o Executivo e aprova o orçamento que define as prioridades da cidade."

Com base exclusivamente no texto, a Câmara Municipal:`,
opts:["É responsável pela execução das políticas públicas municipais.","Exerce apenas função fiscalizatória sobre o Poder Executivo.","Tem entre suas atribuições converter a vontade dos cidadãos em leis.","Aprova o orçamento municipal de forma independente do Poder Executivo."],
ans:2,exp:"O texto afirma que a Câmara \"traduz a vontade popular em normas jurídicas\" — ou seja, converte a vontade dos cidadãos em leis (C). As demais alternativas distorcem ou extrapolam o que o trecho diz."},

{id:2,disc:"port",topic:"Ortografia",
q:`Assinale a alternativa em que TODAS as palavras estão corretamente grafadas:`,
opts:["assessoria, burocracia, privilégio, comissão","asseçoria, burocracia, privilégio, comissão","assessoria, burocraçia, privilégio, comissão","assessoria, burocracia, privelério, comissão"],
ans:0,exp:"\"Assessoria\" (ss), \"burocracia\" (c, não ç), \"privilégio\" (é), \"comissão\" (ss). Todas corretas em A."},

{id:3,disc:"port",topic:"Acentuação gráfica",
q:`Assinale a alternativa em que há ERRO de acentuação:`,
opts:["O analista leu vários relatórios.","O secretário entregou o parecer ao vereador.","A reunião foi adiada para a próxima semana.","Os servidores devem agir com etica e responsabilidade."],
ans:3,exp:"\"Ética\" é proparoxítona (é-ti-ca) e deve ser acentuada. Todas as proparoxítonas são obrigatoriamente acentuadas."},

{id:4,disc:"port",topic:"Concordância verbal",
q:`Assinale a alternativa em que há ERRO de concordância verbal:`,
opts:["Fazem três anos que o servidor foi admitido.","Os analistas e o diretor participaram da reunião.","É necessário que todos cumpram o regulamento interno.","A comissão aprovou todos os projetos de lei."],
ans:0,exp:"\"Fazer\" indicando tempo decorrido é verbo impessoal e fica sempre no singular: \"Faz três anos\". Usar \"fazem\" é erro clássico em provas."},

{id:5,disc:"port",topic:"Concordância nominal",
q:`Assinale a alternativa com concordância nominal CORRETA:`,
opts:["Os servidores ficaram satisfeitos e animadas com a decisão.","As servidoras ficaram satisfeitas e animadas com a decisão.","As servidoras ficaram satisfeito e animadas com a decisão.","Os servidores ficaram satisfeito e animada com a decisão."],
ans:1,exp:"Com sujeito feminino plural (\"as servidoras\"), os predicativos devem estar no feminino plural: \"satisfeitas e animadas\"."},

{id:6,disc:"port",topic:"Regência verbal",
q:`Assinale a alternativa em que a regência verbal está CORRETA:`,
opts:["O vereador aspirava o cargo de presidente da Câmara.","O servidor obedeceu as normas do regimento interno.","O diretor visava ao cumprimento das metas anuais.","O secretário assistiu o vereador durante toda a sessão."],
ans:2,exp:"\"Visar\" no sentido de \"ter como objetivo\" é transitivo indireto (visar a). As demais: \"aspirar\" a (não diretamente); \"obedecer\" a; \"assistir\" a (presenciar). Apenas C está correto."},

{id:7,disc:"port",topic:"Uso da crase",
q:`Em qual alternativa o emprego da crase está INCORRETO?`,
opts:["Entregou o relatório à Câmara Municipal.","O servidor assistiu à sessão de votação.","Ele se referiu à ela durante o pronunciamento.","As sessões ocorrem às terças-feiras."],
ans:2,exp:"Pronomes pessoais do caso reto (ele, ela, eu, tu, nós, vós) não admitem crase antes deles. O correto é \"a ela\", sem acento grave."},

{id:8,disc:"port",topic:"Colocação pronominal",
q:`Assinale a alternativa com ERRO de colocação pronominal segundo a norma culta escrita:`,
opts:["Entregou-me os documentos no prazo estipulado.","Não nos informaram sobre a mudança no horário.","Me disseram que a reunião foi adiada.","Jamais lhe direi o que aconteceu naquela sessão."],
ans:2,exp:"Em início de oração não se usa pronome oblíquo átono. O correto seria \"Disseram-me\" (ênclise) ou, com palavra atrativa antes: \"Não me disseram\"."},

{id:9,disc:"port",topic:"Pontuação",
q:`Assinale a alternativa em que o uso da vírgula está CORRETO:`,
opts:["O vereador, disse que votaria contra o projeto.","As sessões ordinárias, ocorrem toda terça-feira.","O projeto, aprovado por unanimidade, seguiu para promulgação.","Os vereadores votaram, e o presidente da Câmara, assinou o projeto."],
ans:2,exp:"Em C, a oração adjetiva explicativa \"aprovado por unanimidade\" está corretamente isolada por vírgulas. Em A e B, há vírgula separando sujeito do predicado (erro). Em D, há vírgula entre sujeito composto e verbo."},

{id:10,disc:"port",topic:"Figuras de linguagem",
q:`"O orçamento municipal é o esqueleto que sustenta o corpo das políticas públicas."

A figura de linguagem empregada no trecho é:`,
opts:["Metonímia","Antítese","Metáfora","Hipérbole"],
ans:2,exp:"Metáfora é a comparação implícita sem conectivo comparativo. O orçamento é comparado a um esqueleto e as políticas públicas a um corpo, de forma implícita — característica da metáfora."},

{id:11,disc:"port",topic:"Semântica",
q:`As palavras \"legislar\" e \"executar\", no contexto da administração pública, são:`,
opts:["Sinônimas, pois ambas indicam ação governamental.","Antônimas, pois representam funções opostas na tripartição de poderes.","Parônimas, pois têm origem etimológica semelhante.","Homônimas, pois possuem grafias parecidas."],
ans:1,exp:"\"Legislar\" (criar leis, função do Legislativo) e \"executar\" (implementar políticas, função do Executivo) representam funções distintas e opostas na tripartição dos poderes. São antônimas nesse contexto."},

{id:12,disc:"port",topic:"Morfologia — classes de palavras",
q:`"O leal servidor público sempre cumpre seus deveres com diligência."

Nessa oração, a palavra \"diligência\" é:`,
opts:["Adjetivo","Advérbio","Substantivo","Verbo"],
ans:2,exp:"\"Diligência\" é substantivo feminino abstrato, aqui funcionando como objeto da preposição \"com\". O adjetivo da oração é \"leal\" e o advérbio é \"sempre\"."},

{id:13,disc:"port",topic:"Sintaxe — análise",
q:`"Os vereadores aprovaram o projeto de lei."

Na oração acima, \"o projeto de lei\" exerce a função de:`,
opts:["Sujeito","Objeto direto","Objeto indireto","Complemento nominal"],
ans:1,exp:"\"Os vereadores\" é o sujeito; \"aprovaram\" é verbo transitivo direto; \"o projeto de lei\" é objeto direto (completa o sentido do verbo sem preposição)."},

{id:14,disc:"port",topic:"Coesão e coerência",
q:`"O vereador apresentou o projeto. Entretanto, o projeto foi aprovado por unanimidade."

O uso do conectivo \"entretanto\" está:`,
opts:["Correto, pois indica adição de uma ideia à anterior.","Correto, pois indica conclusão lógica.","Incorreto, pois indica oposição onde não há contraste real entre as orações.","Incorreto, pois deveria ser substituído por \"portanto\"."],
ans:2,exp:"\"Entretanto\" é adversativo (indica contraste/oposição). No trecho, as duas orações não se opõem: o projeto foi apresentado e, em seguida, aprovado — relação de sequência, não de contraste."},

{id:15,disc:"port",topic:"Interpretação de texto",
q:`"A transparência é pressuposto indispensável da boa gestão pública, pois sem acesso à informação, o cidadão não pode exercer seu papel de fiscal da administração."

Segundo o texto, a relação entre transparência e controle social é:`,
opts:["A transparência é consequência do controle exercido pelos cidadãos.","O controle social pelos cidadãos é viabilizado pela transparência.","A transparência dispensa o controle social, tornando-o desnecessário.","O controle social prescinde da transparência para ser efetivo."],
ans:1,exp:"O texto afirma que \"sem acesso à informação, o cidadão não pode exercer seu papel de fiscal\" — a transparência é, portanto, condição (pressuposto) para que o cidadão exerça o controle social."},

/* ==================== CONHECIMENTOS GERAIS ==================== */
{id:16,disc:"cg",topic:"Santana de Cataguases — localização",
q:`Santana de Cataguases é um município de Minas Gerais pertencente à mesorregião:`,
opts:["Vale do Rio Doce","Zona da Mata","Sul e Sudoeste de Minas","Triângulo Mineiro"],
ans:1,exp:"Santana de Cataguases integra a mesorregião da Zona da Mata Mineira, que compreende municípios do leste de Minas Gerais, próximos à fronteira com os estados do Rio de Janeiro e Espírito Santo."},

{id:17,disc:"cg",topic:"Câmara Municipal — função",
q:`Qual é a principal função legislativa da Câmara Municipal?`,
opts:["Executar as leis municipais aprovadas pelo prefeito.","Elaborar, discutir e votar leis de interesse local.","Fiscalizar os tribunais de contas em âmbito municipal.","Nomear e exonerar os secretários municipais."],
ans:1,exp:"A Câmara Municipal exerce a função legislativa: elaborar, discutir e votar leis de interesse local. A execução das leis é função do Executivo (prefeitura); a nomeação de secretários é prerrogativa do prefeito."},

{id:18,disc:"cg",topic:"Minas Gerais — história",
q:`A Inconfidência Mineira (1789), movimento que visava à independência do Brasil, teve como epicentro a cidade de:`,
opts:["Belo Horizonte","Mariana","Vila Rica (atual Ouro Preto)","São João del-Rei"],
ans:2,exp:"A Inconfidência Mineira eclodiu em Vila Rica, atual Ouro Preto, que era a capital da capitania à época. Tiradentes (Joaquim José da Silva Xavier) é o principal mártir do movimento."},

{id:19,disc:"cg",topic:"Organização político-administrativa",
q:`De acordo com a Constituição Federal de 1988, a República Federativa do Brasil é formada por:`,
opts:["União, estados e municípios","União, estados e Distrito Federal","União, estados, Distrito Federal e municípios","União, estados, territórios e municípios"],
ans:2,exp:"O art. 1º da CF/88 define que a República Federativa do Brasil é formada pela União, estados, Distrito Federal e municípios, todos autônomos nos termos da Constituição."},

{id:20,disc:"cg",topic:"Atualidades — meio ambiente",
q:`A COP30, Conferência das Nações Unidas sobre Mudança do Clima de 2025, foi realizada na cidade brasileira de:`,
opts:["São Paulo","Brasília","Belém","Manaus"],
ans:2,exp:"A COP30 foi realizada em Belém (PA) em novembro de 2025. A escolha da cidade amazônica foi simbólica, reforçando a importância da Amazônia para o debate climático global."},

{id:21,disc:"cg",topic:"Atualidades — tecnologia",
q:`Os Objetivos de Desenvolvimento Sustentável (ODS), adotados pela ONU pela Agenda 2030, são compostos por:`,
opts:["8 objetivos","15 objetivos","17 objetivos","21 objetivos"],
ans:2,exp:"A Agenda 2030 da ONU prevê 17 Objetivos de Desenvolvimento Sustentável (ODS) e 169 metas, abrangendo temas como erradicação da pobreza, educação, saúde, igualdade de gênero e ação climática."},

{id:22,disc:"cg",topic:"Minas Gerais — cultura",
q:`O movimento literário que floresceu em Minas Gerais no século XVIII, tendo Tomás Antônio Gonzaga como principal expoente, é denominado:`,
opts:["Romantismo","Arcadismo (Neoclassicismo)","Barroco","Modernismo"],
ans:1,exp:"Tomás Antônio Gonzaga foi poeta do Arcadismo (Neoclassicismo) brasileiro, autor de \"Marília de Dirceu\". O movimento surgiu como reação ao Barroco, valorizando razão, natureza e modelos greco-latinos."},

{id:23,disc:"cg",topic:"CF/88 — princípios",
q:`O princípio da impessoalidade que rege a administração pública (art. 37, CF/88) tem como objetivo central:`,
opts:["Assegurar que os atos administrativos sejam praticados sempre pelo mesmo servidor.","Vedar o uso da máquina pública para promoção pessoal ou benefício de grupos.","Garantir que todos os servidores recebam a mesma remuneração.","Exigir que todos os atos administrativos sejam publicados no Diário Oficial."],
ans:1,exp:"A impessoalidade determina que a Administração deve agir voltada ao interesse público, sem discriminação ou favorecimento pessoal. Veda a promoção pessoal do agente por meio de atos, programas e obras oficiais."},

{id:24,disc:"cg",topic:"Atualidades — saúde",
q:`São princípios doutrinários do Sistema Único de Saúde (SUS), EXCETO:`,
opts:["Universalidade de acesso","Integralidade da assistência","Equidade","Privatização dos serviços essenciais"],
ans:3,exp:"Os princípios doutrinários do SUS são: universalidade (acesso para todos), integralidade (atendimento completo) e equidade (tratar desiguais de forma desigual, priorizando quem mais necessita). A privatização é oposta aos princípios do SUS."},

{id:25,disc:"cg",topic:"CF/88 — processo legislativo",
q:`A aprovação de Emenda à Constituição Federal exige, em cada Casa do Congresso Nacional:`,
opts:["Maioria simples em votação única","Maioria absoluta em dois turnos de votação","Maioria de três quintos em dois turnos de votação","Unanimidade em sessão conjunta do Congresso"],
ans:2,exp:"Conforme o art. 60, §2º, da CF/88, a PEC deve ser aprovada em dois turnos em cada Casa, com três quintos dos votos dos respectivos membros (não apenas dos presentes)."},

{id:26,disc:"cg",topic:"Atualidades — energia",
q:`O Brasil ocupa posição de destaque mundial em energia renovável. O principal tipo de energia elétrica gerada no país é proveniente de:`,
opts:["Energia eólica","Energia solar","Energia hidrelétrica","Energia nuclear"],
ans:2,exp:"A matriz elétrica brasileira é majoritariamente renovável, com a energia hidrelétrica respondendo por mais de 60% da geração. O Brasil possui uma das matrizes mais limpas do mundo."},

{id:27,disc:"cg",topic:"Atualidades — educação",
q:`O Índice de Desenvolvimento da Educação Básica (IDEB) é calculado com base em:`,
opts:["Número de matrículas e taxa de analfabetismo","Taxa de aprovação dos alunos e desempenho nas avaliações do SAEB","Investimento per capita em educação e número de professores por aluno","Taxa de formação no ensino superior e acesso à internet"],
ans:1,exp:"O IDEB (criado em 2007 pelo INEP/MEC) combina dois componentes: a taxa de aprovação (fluxo escolar) e o desempenho dos alunos no SAEB (Sistema de Avaliação da Educação Básica)."},

{id:28,disc:"cg",topic:"Atualidades — finanças públicas",
q:`A Lei Complementar nº 200/2023, que instituiu o novo arcabouço fiscal, substituiu qual instrumento anterior de controle de gastos?`,
opts:["Lei de Responsabilidade Fiscal (LC 101/2000)","Emenda Constitucional do Teto de Gastos (EC 95/2016)","Lei de Diretrizes Orçamentárias (LDO)","Plano Plurianual (PPA)"],
ans:1,exp:"A EC 95/2016 (\"teto de gastos\") limitava o crescimento das despesas primárias federais à variação do IPCA por 20 anos. O novo arcabouço fiscal (LC 200/2023) substituiu esse mecanismo por regras mais flexíveis, mas ainda com tetos de crescimento de despesas."},

{id:29,disc:"cg",topic:"Câmara Municipal — composição",
q:`A presidência da Câmara Municipal é exercida por:`,
opts:["O prefeito municipal, como chefe do Executivo local.","Um vereador eleito pelos próprios vereadores.","Um servidor efetivo indicado pelo Tribunal de Contas do Estado.","Um juiz indicado pelo Tribunal de Justiça de Minas Gerais."],
ans:1,exp:"A Câmara Municipal é presidida por um vereador eleito pelos próprios pares para exercer a mesa diretora. O prefeito é chefe do Poder Executivo municipal e não tem função na presidência do Legislativo."},

{id:30,disc:"cg",topic:"Atualidades — legislativo",
q:`Na estrutura constitucional brasileira, é competência EXCLUSIVA do município:`,
opts:["Legislar sobre direito civil e comercial.","Instituir e arrecadar tributos de sua competência e aplicar suas rendas.","Legislar sobre direito do trabalho.","Organizar e manter a polícia civil e militar."],
ans:1,exp:"Conforme a CF/88, é competência exclusiva dos municípios, entre outras: legislar sobre assuntos de interesse local, suplementar legislação federal/estadual, e instituir e arrecadar os tributos de sua competência (IPTU, ISS, ITBI)."},

/* ==================== CONHECIMENTOS GERAIS — HISTÓRIA DO MUNICÍPIO (IBGE) ==================== */
{id:79,disc:"cg",topic:"Santana de Cataguases — emancipação",
q:`O município de Santana de Cataguases (MG) foi elevado à categoria de município, com território desmembrado de Cataguases, pela Lei Estadual nº 2764, de:`,
opts:["30 de dezembro de 1962","14 de setembro de 1891","27 de dezembro de 1948","1º de março de 1963"],
ans:0,exp:"Segundo o IBGE, Santana de Cataguases foi elevado a município pela Lei Estadual nº 2764, de 30/12/1962, desmembrado de Cataguases. A instalação do município ocorreu em 01/03/1963; as demais datas referem-se à criação do distrito (1891) e à retificação da grafia (1948)."},

{id:80,disc:"cg",topic:"Santana de Cataguases — origem e gentílico",
q:`Sobre a origem do município de Santana de Cataguases (MG), é correto afirmar que:`,
opts:["Surgiu de um arraial formado em torno da capela de Santana, e seu gentílico é 'santanense'.","Foi fundado por imigrantes italianos, e seu gentílico é 'cataguasense'.","Nasceu como sede da capitania de Minas, e seu gentílico é 'mineiro'.","Originou-se de uma colônia agrícola alemã, e seu gentílico é 'santista'."],
ans:0,exp:"Pelo IBGE, o município teve origem no arraial formado nos arredores da capela de Santana, filiada à matriz de Cataguases. O gentílico do município é 'santanense'."},

{id:81,disc:"cg",topic:"Santana de Cataguases — localização",
q:`Santana de Cataguases localiza-se no estado de Minas Gerais, na microrregião de Cataguases, pertencente à mesorregião:`,
opts:["Triângulo Mineiro/Alto Paranaíba","Zona da Mata","Vale do Rio Doce","Sul/Sudoeste de Minas"],
ans:1,exp:"Santana de Cataguases integra a microrregião de Cataguases, na mesorregião da Zona da Mata mineira, no leste de Minas Gerais, próxima à divisa com o Rio de Janeiro."},

/* ==================== MATEMÁTICA ==================== */
{id:67,disc:"mat",topic:"Porcentagem",
q:`Um servidor recebeu um abono de 15% sobre seu salário de R$ 3.000,00. O valor do abono é de:`,
opts:["R$ 300,00","R$ 350,00","R$ 450,00","R$ 600,00"],
ans:2,exp:"15% de 3.000 = 0,15 × 3.000 = 450. O abono é de R$ 450,00."},

{id:68,disc:"mat",topic:"Acréscimos e descontos",
q:`Um produto que custava R$ 80,00 teve aumento de 25%. Qual o novo preço?`,
opts:["R$ 95,00","R$ 100,00","R$ 105,00","R$ 120,00"],
ans:1,exp:"Aumento de 25% equivale a multiplicar por 1,25: 80 × 1,25 = 100. O novo preço é R$ 100,00."},

{id:69,disc:"mat",topic:"Juros simples",
q:`Um capital de R$ 2.000,00 foi aplicado a juros simples de 2% ao mês durante 6 meses. Qual o valor dos juros?`,
opts:["R$ 200,00","R$ 240,00","R$ 120,00","R$ 480,00"],
ans:1,exp:"Juros simples: J = C·i·t = 2.000 × 0,02 × 6 = 240. Os juros são de R$ 240,00."},

{id:70,disc:"mat",topic:"Juros compostos",
q:`Qual o montante de R$ 1.000,00 aplicados a juros compostos de 10% ao ano durante 2 anos?`,
opts:["R$ 1.200,00","R$ 1.210,00","R$ 1.100,00","R$ 1.220,00"],
ans:1,exp:"Montante composto: M = C(1+i)^t = 1.000 × (1,10)² = 1.000 × 1,21 = 1.210. O montante é R$ 1.210,00."},

{id:71,disc:"mat",topic:"Regra de três",
q:`Se 4 funcionários organizam um arquivo em 6 dias, quantos dias levarão 8 funcionários, no mesmo ritmo?`,
opts:["12 dias","3 dias","4 dias","2 dias"],
ans:1,exp:"Grandezas inversamente proporcionais (mais funcionários, menos dias): 4×6 = 8×x → x = 24/8 = 3 dias."},

{id:72,disc:"mat",topic:"Equação do 1º grau",
q:`Resolvendo a equação 3x − 7 = 2x + 5, o valor de x é:`,
opts:["−2","5","12","2"],
ans:2,exp:"3x − 7 = 2x + 5 → 3x − 2x = 5 + 7 → x = 12."},

{id:73,disc:"mat",topic:"Equação do 2º grau",
q:`As raízes da equação x² − 5x + 6 = 0 são:`,
opts:["2 e 3","−2 e −3","1 e 6","−1 e 6"],
ans:0,exp:"Δ = (−5)² − 4·1·6 = 25 − 24 = 1. x = (5 ± 1)/2 → x = 3 ou x = 2. (Conferindo: soma = 5, produto = 6.)"},

{id:74,disc:"mat",topic:"Função do 1º grau",
q:`Na função f(x) = 2x + 3, o valor de f(4) é:`,
opts:["8","11","14","7"],
ans:1,exp:"f(4) = 2·4 + 3 = 8 + 3 = 11."},

{id:75,disc:"mat",topic:"Progressão aritmética",
q:`Em uma PA de primeiro termo 5 e razão 4, o quinto termo (a₅) vale:`,
opts:["17","20","21","25"],
ans:2,exp:"aₙ = a₁ + (n−1)·r → a₅ = 5 + (5−1)·4 = 5 + 16 = 21."},

{id:76,disc:"mat",topic:"Geometria plana — área",
q:`Um terreno retangular tem 12 m de comprimento por 8 m de largura. Sua área é:`,
opts:["20 m²","40 m²","96 m²","48 m²"],
ans:2,exp:"Área do retângulo = base × altura = 12 × 8 = 96 m²."},

{id:77,disc:"mat",topic:"Estatística — média",
q:`As notas de um candidato foram 6, 8, 7 e 9. A média aritmética dessas notas é:`,
opts:["7,0","7,5","8,0","7,75"],
ans:1,exp:"Média = (6 + 8 + 7 + 9) / 4 = 30 / 4 = 7,5."},

{id:78,disc:"mat",topic:"Probabilidade",
q:`Ao lançar um dado comum de 6 faces, qual a probabilidade de sair um número maior que 4?`,
opts:["1/6","1/3","1/2","2/3"],
ans:1,exp:"Números maiores que 4: 5 e 6 (2 casos favoráveis). P = 2/6 = 1/3."},

/* ==================== QUESTÕES REAIS — AUCTOR CONSULTORIA (Chácara-MG, 2022) ==================== */
/* Português Q1-Q10 e Conhecimentos Gerais Q11-Q20 extraídos do caderno do Procurador Municipal.     */
/* Gabarito oficial verificado. Conhecimentos Específicos mantidos como elaborados por cargo.          */

{id:51,disc:"port",real:true,topic:"Interpretação de texto",
q:`Leia o texto e responda:\n\n"DISCURSOS REVELAM NOVA LINGUAGEM DA ESPLANADA — Com a mudança de governo, novas palavras ganharam força no vocabulário do poder. A análise dos discursos dos 34 ministros que tomaram posse mostra que temas escanteados na gestão do ex-presidente Jair Bolsonaro ganharam protagonismo. A palavra 'ciência' foi citada 66 vezes; 'cultura', 81 vezes; 'democracia', 93 vezes. O nome do presidente Lula apareceu 256 vezes — o sexto mais lembrado. A palavra 'todes' foi utilizada em pelo menos seis eventos de transmissão de cargo. Simone Tebet afirmou: 'Nos últimos anos, faltou vacina, faltou comida, faltou remédio, faltou emprego, faltou educação, faltou cultura. Faltou sustentabilidade. Faltou vida.'" (O Globo, 08/01/23)\n\nO principal objetivo comunicativo do texto é:`,
opts:["Apresentar os prós e contras da adoção de uma nova linguagem utilizada na cerimônia de posse dos novos ministros.","Refletir sobre o vocabulário utilizado durante o governo de Jair Bolsonaro.","Informar a nova linguagem utilizada no Governo Lula que marca o reaparecimento de termos como 'cultura' e 'ciência'.","Exaltar o personalismo em torno do presidente Lula, apresentando-o como uma liderança mundial."],
ans:2,exp:"O texto tem caráter informativo: relata e analisa as palavras em destaque nos discursos dos ministros, mostrando as mudanças de vocabulário em relação ao governo anterior. Não apresenta prós/contras (A), não tem como foco o governo Bolsonaro (B) e não exalta o personalismo (D)."},

{id:52,disc:"port",real:true,topic:"Figuras de linguagem",
q:`Considere o trecho do mesmo texto:\n\n"Nos últimos anos, faltou vacina, faltou comida, faltou remédio, faltou emprego, faltou educação, faltou cultura. Faltou sustentabilidade. Faltou vida." (Simone Tebet)\n\nNeste trecho, a palavra "faltou" é repetida no início de cada oração para intensificar seu significado. A esse recurso dá-se o nome de:`,
opts:["Anáfora.","Ironia.","Eufemismo.","Prosopopeia."],
ans:0,exp:"Anáfora é a figura de linguagem que consiste na repetição intencional de um termo no início de orações ou versos consecutivos, criando ênfase e ritmo. A repetição de 'faltou' é exemplo clássico de anáfora com efeito expressivo e emotivo."},

{id:53,disc:"port",real:true,topic:"Interpretação de texto",
q:`Considerando o mesmo texto sobre a linguagem da Esplanada, são exemplos de linguagem mais inclusiva citados no texto, EXCETO:`,
opts:["A utilização da palavra 'todes'.","A referência a indígenas e à comunidade LGBTQIAP+.","O emprego de expressões como 'homens e mulheres pretos e pretas do Brasil'.","O aparecimento da palavra 'Deus' em 27 vezes."],
ans:3,exp:"O texto menciona 'Deus' como herança do vocabulário do governo anterior (lema 'Deus acima de tudo'), sem relacioná-lo à linguagem inclusiva. As alternativas A, B e C descrevem diretamente iniciativas de linguagem inclusiva mencionadas no texto."},

{id:54,disc:"port",real:true,topic:"Morfossintaxe — análise de texto",
q:`Leia o poema de Yulia Novytska, ucraniana de 18 anos:\n\n"Escrevo o que não germinará nesta terra.\nA terra que pertence ao meu povo e a mim,\nonde soa minha língua, onde vibram meus pensamentos.\nVolto com eles à terra que amo e,\nsempre que penso na estepe, sou atingida pelo medo,\ncomo o vento da primavera que ressoa\ncom mísseis amaldiçoados que caem ao chão.\nMorte, medo e ódio.\nQuando há guerra, não há vento calmo no horizonte,\nnão há narcisos ao redor da escola."\n\nAnalise as afirmações:\nI – Em 'Escrevo o que não germinará nesta terra', a palavra 'nesta' é um artigo definido.\nII – O pronome 'onde', em suas duas ocorrências, retoma anaforicamente o substantivo 'terra'.\nIII – A oração subordinada adverbial temporal 'Quando há guerra...' é acompanhada por duas orações principais.\nIV – Em 'Volto com eles à terra que amo...', o emprego da crase é facultativo.\nEstá certo o que se afirma em:`,
opts:["I e III","II e III","II e IV","I e IV"],
ans:1,exp:"I – FALSA: 'nesta' é pronome demonstrativo (ne + esta), não artigo. II – VERDADEIRA: 'onde' retoma 'terra' anaforicamente. III – VERDADEIRA: 'Quando há guerra, [não há vento calmo...], [não há narcisos...]' — duas orações principais. IV – FALSA: crase é obrigatória antes de substantivo feminino com artigo ('à terra')."},

{id:55,disc:"port",real:true,topic:"Pontuação",
q:`Observe o emprego das vírgulas nos fragmentos do mesmo poema:\nI – 'Quando há guerra, não há vento calmo no horizonte...'\nII – 'Em breve, as escolas podem nem mais existir.'\nIII – 'Busco força para pensar uma nova realidade, mas a mente alcança o que era antes...'\nIV – 'Aqui, o mundo está quieto e a terra é doce.'\n\nA vírgula foi empregada corretamente em:`,
opts:["I, II e III.","II, III e IV.","I, III e IV.","I, II, III e IV."],
ans:0,exp:"I – correta: vírgula após oração adverbial temporal anteposta. II – correta: vírgula após adjunto adverbial de uma só palavra anteposto. III – correta: vírgula antes de conjunção adversativa 'mas'. IV – discutível/incorreta pela banca: 'Aqui', adjunto curto e integrado, não exigiria vírgula nesse contexto segundo o critério adotado."},

{id:56,disc:"port",real:true,topic:"Semântica — modalização",
q:`Leia o trecho:\n"Infelizmente, os exemplos citados não refletem as dificuldades vividas por mais de dois milhões de brasileiros, mas sinalizam que o autismo [...] pode e deve ser tratado."\n\nAssinale a alternativa em que a palavra destacada denota um estado emocional momentâneo da enunciadora:`,
opts:["'Depoimentos demonstram como pessoas com o diagnóstico do transtorno surpreendem positivamente...'","'Frequentemente a mesma sociedade que desconsidera a diversidade...'","'Infelizmente, os exemplos citados não refletem as dificuldades vividas por mais de dois milhões de brasileiros...'","'As atenções humanas deixam a humanização de lado e buscam individualmente...'"],
ans:2,exp:"'Infelizmente' é advérbio modal afetivo que expressa a avaliação subjetiva e o estado emocional da autora diante do que afirma. 'Positivamente' (modo), 'frequentemente' (frequência) e 'individualmente' (modo) são advérbios que não exprimem emoção da enunciadora."},

{id:57,disc:"port",real:true,topic:"Sintaxe — aposto",
q:`No fragmento: "Qual a relação de Lionel Messi, jogador de futebol argentino, a cantora Courtney Love, o nadador Michael Phelps e o cineasta Tim Burton? Os quatro são pessoas com certo grau de autismo [...]"\n\nÉ possível encontrar quatro apostos no fragmento. Está INCORRETAMENTE indicado como aposto:`,
opts:["Lionel Messi","Courtney Love","Michael Phelps","Tim Burton"],
ans:0,exp:"Na construção 'Lionel Messi, jogador de futebol argentino', 'Lionel Messi' é o termo principal e 'jogador de futebol argentino' é o aposto. Nas demais construções ('a cantora Courtney Love', 'o nadador Michael Phelps', 'o cineasta Tim Burton'), os nomes próprios são os apostos que identificam os substantivos comuns precedentes."},

{id:58,disc:"port",real:true,topic:"Morfossintaxe — conjunção integrante vs. pronome relativo",
q:`Sobre o texto do autismo, assinale a alternativa em que a palavra 'que' NÃO é um pronome relativo:`,
opts:["'...que é considerado um transtorno e não se encaixa na definição de doença'","'...que não os impediu de conseguir sucesso e bom desempenho na carreira...'","'...deixa de refletir que todos têm ou terão um dia uma deficiência...'","'...buscando direitos que inclusive estão previstos em lei...'"],
ans:2,exp:"Em C, 'que' introduz uma oração subordinada substantiva objetiva direta (objeto de 'refletir') — é conjunção integrante, não pronome relativo. Nas demais, 'que' retoma um antecedente nominal (o autismo, os quatro, direitos), sendo pronome relativo."},

{id:59,disc:"port",real:true,topic:"Colocação pronominal",
q:`Leia o fragmento do Hino Municipal de Chácara-MG:\n\n"Cumprimento-te Chácara amada, / o seu povo querido e viril. / Não te troco no Mundo por nada. / Tu és grandeza do meu Brasil! / Deus te deu a beleza e a fama, / e o povo se encanta ao te ver. / Ao sentir tua voz que me chama, / juro que sinto por ti, um prazer!"\n\nSobre o emprego de pronomes, identifique (V) para verdadeiras e (F) para falsas:\n( ) No título 'Te amo cidade querida!', há falha na colocação do pronome oblíquo átono.\n( ) Ao referir-se à cidade, os pronomes foram utilizados de maneira uniforme.\n( ) Em 'o povo se encanta ao te ver', o pronome 'se' é reflexivo.\n( ) Em 'Tu tens Matas!', o pronome 'Tu' é pessoal do caso reto.\nSequência correta, de cima para baixo:`,
opts:["V – F – V – F","V – F – V – V","F – F – V – V","F – V – V – F"],
ans:1,exp:"(V) 'Te amo' em início absoluto de oração viola a norma culta escrita — deveria ser 'Amo-te'. (F) O hino alterna 'te/tua' (2ª pessoa) e 'seu' (3ª pessoa) ao referir-se à cidade — há inconsistência. (V) 'se encanta' é voz reflexiva. (V) 'Tu' é pronome pessoal do caso reto (sujeito)."},

{id:60,disc:"port",real:true,topic:"Morfologia — estrutura do verbo",
q:`Leia: "Um discurso de Barack Obama — 'se trouxerem facas, levaremos armas' — foi estrela da noite." (Folha de S. Paulo, 13/01/2011)\n\nAssinale a alternativa em que NÃO foi identificado corretamente um elemento estrutural do verbo 'levaremos':`,
opts:["Radical – lev","Vogal temática – a","Desinência modo-temporal – re","Desinência número-pessoal – os"],
ans:3,exp:"'levaremos' = lev (radical) + a (vogal temática) + re (desinência modo-temporal do futuro do presente) + mos (desinência número-pessoal da 1ª pessoa do plural). A alternativa D afirma que a DNP é 'os', o que é incorreto — a desinência é 'mos'."},

{id:61,disc:"cg",real:true,topic:"Matriz energética brasileira",
q:`Leia: "Com 23,9 gigawatts (GW) de potência instalada, a energia solar se tornou a segunda maior fonte energética do Brasil em 2022, segundo a ABSOLAR. A fonte solar já trouxe ao Brasil mais de R$120,8 bilhões em investimentos e gerou mais de 705 mil empregos." (Brasil61)\n\nMesmo com o crescimento da energia solar, a principal fonte energética do Brasil é:`,
opts:["Energia hídrica.","Energia eólica.","Energia nuclear.","Energia termoelétrica."],
ans:0,exp:"O texto afirma que a energia solar se tornou a segunda maior fonte, confirmando que a energia hídrica (hidroelétrica) permanece como primeira. O Brasil possui uma das matrizes elétricas mais limpas do mundo, com a hidroeletricidade respondendo por mais de 60% da geração nacional."},

{id:62,disc:"cg",real:true,topic:"Defesa Civil e federalismo",
q:`"Após desastres naturais, seis cidades brasileiras vão receber repasse de mais de R$ 3,2 milhões do Governo Federal por meio da Defesa Civil Nacional. Cidades em situação de emergência ou estado de calamidade pública reconhecido pela Defesa Civil Nacional estão aptas a solicitar recursos."\n\nOs repasses desses recursos são autorizados pelo:`,
opts:["Ministério da Saúde.","Ministério da Justiça e Segurança Pública.","Ministério da Agricultura e Pecuária.","Ministério da Integração e do Desenvolvimento Regional."],
ans:3,exp:"A Defesa Civil Nacional é vinculada ao Ministério da Integração e do Desenvolvimento Regional (MIDR), responsável pela coordenação das ações de proteção e defesa civil, prevenção e resposta a desastres."},

{id:63,disc:"cg",real:true,topic:"Fundo de Participação dos Municípios",
q:`"A prévia do Censo Demográfico de 2022 causou a diminuição do coeficiente de 863 cidades no Fundo de Participação dos Municípios (FPM), levando-as a receber menos recursos a partir de janeiro de 2023."\n\nEm relação à aplicação dos recursos do FPM pelos municípios:`,
opts:["Devem ser aplicados exclusivamente na manutenção e desenvolvimento da educação básica pública.","Devem ser aplicados exclusivamente no enfrentamento de emergências de saúde pública.","Devem ser aplicados exclusivamente na universalização do saneamento básico.","Não há vinculações específicas obrigatórias para a aplicação desses recursos."],
ans:3,exp:"O FPM é transferência constitucional de livre aplicação pelos municípios, diferentemente do FUNDEB (vinculado à educação) ou repasses do SUS (saúde). Os municípios têm autonomia para alocar os recursos conforme suas prioridades, respeitando as regras gerais da LRF."},

{id:64,disc:"cg",real:true,topic:"Atualidades — posse presidencial",
q:`"A posse do presidente eleito Luiz Inácio Lula da Silva foi a última realizada no dia 1º de janeiro. A mudança da data está prevista em emenda constitucional aprovada em setembro de 2022."\n\nDe acordo com a nova regra, a partir de 2027 a posse dos presidentes e vices ocorrerá no dia:`,
opts:["6 de janeiro.","15 de novembro.","5 de janeiro.","31 de janeiro."],
ans:2,exp:"A EC aprovada em 2022 fixou o dia 5 de janeiro como nova data de posse presidencial a partir de 2027. A mudança visa dar mais tempo para a transição de governo após a eleição de outubro."},

{id:65,disc:"cg",real:true,topic:"Atualidades — Pix",
q:`"O Banco Central anunciou mudanças no Pix para oferecer mais segurança e flexibilidade ao mecanismo de pagamento."\n\nSão mudanças anunciadas pelo BC, EXCETO:`,
opts:["O limite individual por transação deixa de existir.","A fixação de cobrança de taxa para transações comuns de pessoa física.","O horário noturno passou a ser personalizado pelo usuário.","Os valores das modalidades Pix Saque e Pix Troco foram aumentados."],
ans:1,exp:"O Pix é gratuito para pessoas físicas por determinação do Banco Central — nenhuma taxa foi cobrada para transações comuns de PF. As demais mudanças (fim do limite fixo por transação, personalização do horário noturno e aumento dos limites do Pix Saque/Troco) foram efetivamente implementadas."},

{id:66,disc:"cg",real:true,topic:"Atualidades — transferência de renda",
q:`"O Auxílio Brasil impactou diretamente na economia das cidades brasileiras e de milhões de pessoas em situação de vulnerabilidade. Em 2022, o programa bateu recorde, com 21,6 milhões de famílias contempladas."\n\nDas cinco regiões do país, aquela que reúne o maior número de famílias contempladas pelos benefícios sociais é:`,
opts:["Nordeste.","Sudeste.","Norte.","Sul."],
ans:0,exp:"O Nordeste concentra o maior número de beneficiários de programas de transferência de renda, reflexo dos maiores índices de pobreza e vulnerabilidade da região. Estados como Bahia, Ceará, Maranhão e Pernambuco lideram historicamente o número de famílias beneficiadas."},

/* ==================== CONHECIMENTOS ESPECÍFICOS ==================== */
{id:31,disc:"ce",topic:"Protocolo e expedição",
q:`No serviço de protocolo de uma repartição pública, a atividade de receber, registrar e encaminhar documentos aos setores competentes é chamada de:`,
opts:["Arquivamento permanente","Tramitação (distribuição)","Eliminação","Desclassificação"],
ans:1,exp:"O protocolo recebe, registra, classifica e distribui (encaminha) os documentos, controlando sua tramitação entre os setores. Arquivamento e eliminação são fases posteriores da gestão documental."},

{id:32,disc:"ce",topic:"Arquivo — teoria das três idades",
q:`Os documentos de uso pouco frequente, que aguardam o cumprimento de prazos antes de sua destinação final, pertencem ao arquivo:`,
opts:["Corrente","Intermediário","Permanente","Setorial"],
ans:1,exp:"Pela teoria das três idades: arquivo corrente (uso frequente), intermediário (uso esporádico, aguardando destinação) e permanente (valor histórico, guarda definitiva). Os que aguardam prazos estão no intermediário."},

{id:33,disc:"ce",topic:"Gestão documental — temporalidade",
q:`O instrumento que estabelece os prazos de guarda e a destinação final (eliminação ou guarda permanente) dos documentos é a:`,
opts:["Tabela de temporalidade","Lista de presença","Folha de rosto","Ata de reunião"],
ans:0,exp:"A tabela de temporalidade documental define, para cada tipo de documento, por quanto tempo deve ser guardado e qual sua destinação final: eliminação ou recolhimento ao arquivo permanente."},

{id:34,disc:"ce",topic:"Redação oficial — princípios",
q:`Constitui princípio fundamental da redação oficial:`,
opts:["O uso de linguagem rebuscada e regionalismos.","A impessoalidade e o emprego do padrão culto da língua.","A manifestação de opiniões pessoais do redator.","A informalidade no tratamento das autoridades."],
ans:1,exp:"A redação oficial pauta-se por impessoalidade, clareza, concisão, formalidade/padronização e uso do padrão culto da língua. Não admite impressões pessoais, gírias ou informalidade."},

{id:35,disc:"ce",topic:"Documentos oficiais",
q:`O documento de comunicação oficial utilizado para tratar de assuntos entre órgãos, ou destes com o público externo, é o:`,
opts:["Ofício","Atestado","Recibo","Edital de leilão"],
ans:0,exp:"O ofício é o expediente de comunicação oficial entre órgãos públicos e destes com particulares. No Manual de Redação da Presidência, o memorando foi unificado ao padrão ofício."},

{id:36,disc:"ce",topic:"Formas de tratamento",
q:`A forma de tratamento adequada e o vocativo correto para dirigir-se a um Vereador são, respectivamente:`,
opts:["Vossa Senhoria / Caro amigo","Vossa Excelência / Senhor Vereador","Vossa Magnificência / Ilustre","Vossa Reverendíssima / Nobre"],
ans:1,exp:"Vereadores, como autoridades do Legislativo, recebem o tratamento Vossa Excelência (V. Exa.), com vocativo 'Senhor Vereador,'. Vossa Magnificência é para reitores e Vossa Reverendíssima para sacerdotes."},

{id:37,disc:"ce",topic:"Concordância com pronome de tratamento",
q:`Assinale a frase correta quanto ao emprego do pronome de tratamento:`,
opts:["Vossa Excelência deveis comparecer à sessão.","Vossa Excelência e vossos assessores estão convidados.","Vossa Excelência e seus assessores estão convidados.","Vossa Excelência precisas assinar o documento."],
ans:2,exp:"Os pronomes de tratamento concordam com o verbo e os possessivos na 3ª pessoa: 'Vossa Excelência e SEUS assessores ESTÃO convidados'. As demais usam 2ª pessoa (deveis, vossos, precisas), o que é incorreto."},

{id:38,disc:"ce",topic:"Processo administrativo — autuação",
q:`No âmbito dos processos administrativos, o ato de registrar, numerar e formar os autos a partir dos documentos recebidos denomina-se:`,
opts:["Expedição","Autuação","Desarquivamento","Publicação"],
ans:1,exp:"Autuar é formar os autos do processo: registrar, numerar as folhas e organizar os documentos em uma capa própria, dando início formal à tramitação do processo administrativo."},

{id:39,disc:"ce",topic:"Almoxarifado e controle de estoque",
q:`O documento por meio do qual um setor solicita a retirada de materiais do almoxarifado é a:`,
opts:["Nota fiscal","Requisição de material","Tabela de temporalidade","Folha de pagamento"],
ans:1,exp:"A requisição de material é o documento interno que formaliza o pedido de retirada de itens do almoxarifado, permitindo o controle das saídas e a baixa no estoque."},

{id:40,disc:"ce",topic:"Atendimento ao público",
q:`Sobre a qualidade no atendimento ao público no serviço administrativo, assinale a alternativa correta:`,
opts:["O atendente deve priorizar a rapidez, ignorando a clareza das informações.","Idosos, gestantes e pessoas com deficiência têm prioridade legal de atendimento.","O atendimento por telefone dispensa cortesia e atenção.","Informações sigilosas podem ser repassadas a qualquer cidadão que solicitar."],
ans:1,exp:"A legislação assegura atendimento prioritário a idosos, gestantes, pessoas com deficiência e com crianças de colo. O atendimento de qualidade exige cortesia e clareza em todos os canais, e o sigilo de informações restritas deve ser preservado."},

{id:41,disc:"ce",topic:"Sigilo e acesso à informação",
q:`De acordo com a Lei de Acesso à Informação (Lei nº 12.527/2011), em regra:`,
opts:["O sigilo é a regra e o acesso à informação é a exceção.","O acesso à informação pública é a regra e o sigilo, a exceção.","Toda informação pública é sempre sigilosa.","O cidadão deve justificar o motivo do pedido de informação."],
ans:1,exp:"A LAI consagra a publicidade como regra e o sigilo como exceção. O acesso à informação pública independe de justificativa do solicitante, ressalvadas as hipóteses legais de sigilo."},

{id:42,disc:"ce",topic:"Informática — hardware e software",
q:`Assinale a alternativa que apresenta apenas componentes de hardware:`,
opts:["Windows, Word e Excel","Memória RAM, teclado e impressora","Navegador, e-mail e planilha","Sistema operacional e antivírus"],
ans:1,exp:"Hardware é a parte física do computador (memória RAM, teclado, impressora, monitor). Windows, Word, Excel, navegadores e antivírus são softwares (programas)."},

{id:43,disc:"ce",topic:"Informática — MS Excel",
q:`No MS Excel, a fórmula digitada na célula para somar os valores do intervalo de A1 até A10 é:`,
opts:["=SOMA(A1:A10)","SOMA A1+A10","=TOTAL(A1-A10)","+A1 ATÉ A10"],
ans:0,exp:"No Excel, toda fórmula começa com '=' e a soma de um intervalo usa a função SOMA com os limites separados por dois-pontos: =SOMA(A1:A10)."},

{id:44,disc:"ce",topic:"Informática — internet e intranet",
q:`A rede de uso interno e restrito de uma organização, com tecnologia semelhante à da internet, é denominada:`,
opts:["Extranet pública","Intranet","Provedor","Servidor de impressão"],
ans:1,exp:"A intranet é a rede interna e restrita de uma organização, usada para comunicação e compartilhamento de informações entre seus membros. A internet, por sua vez, é a rede mundial e pública."},

{id:45,disc:"ce",topic:"Informática — backup",
q:`A cópia de segurança de arquivos, feita para permitir a recuperação dos dados em caso de perda ou falha, é conhecida como:`,
opts:["Download","Backup","Firewall","Spam"],
ans:1,exp:"Backup é a cópia de segurança dos dados, idealmente guardada em local separado (nuvem ou mídia externa), permitindo restaurar as informações em caso de perda, falha ou ataque."}
];

/* ==================== QUIZ LOGIC ==================== */
let filtered = [], current = 0, score = 0, answered = [];
let activeDisc = "all";

const DISC_COLORS = {
  port:"Português · Língua Portuguesa",
  mat:"Matemática",
  cg:"Conhecimentos Gerais",
  ce:"Conhecimentos Específicos"
};

function shuffle(arr){
  for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]]}
  return arr;
}

function updateStartMeta(){
  let pool;
  if(activeDisc === "all") pool = ALL_QUESTIONS;
  else if(activeDisc === "real") pool = ALL_QUESTIONS.filter(q=>q.real);
  else pool = ALL_QUESTIONS.filter(q=>q.disc===activeDisc);
  const n = pool.length;
  document.getElementById("startMeta").innerHTML = `Serão exibidas <b>${n} questão${n!==1?"s":""}</b> em ordem aleatória.`;
}

document.querySelectorAll(".filter-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    activeDisc = btn.dataset.disc;
    updateStartMeta();
  });
});

document.getElementById("startBtn").addEventListener("click", startQuiz);
document.getElementById("nextBtn").addEventListener("click", nextQ);
document.getElementById("restartBtn").addEventListener("click", ()=>{ restartQuiz(); });
document.getElementById("backBtn").addEventListener("click", ()=>{
  document.getElementById("resultsScreen").style.display="none";
  document.getElementById("startScreen").style.display="block";
});

function startQuiz(){
  let pool;
  if(activeDisc === "all") pool = [...ALL_QUESTIONS];
  else if(activeDisc === "real") pool = ALL_QUESTIONS.filter(q=>q.real);
  else pool = ALL_QUESTIONS.filter(q=>q.disc===activeDisc);
  filtered = shuffle(pool);
  current = 0; score = 0; answered = new Array(filtered.length).fill(null);
  document.getElementById("startScreen").style.display="none";
  document.getElementById("quizScreen").style.display="block";
  renderQ();
}

function restartQuiz(){
  document.getElementById("resultsScreen").style.display="none";
  startQuiz();
}

function renderQ(){
  const q = filtered[current];
  const n = filtered.length;
  document.getElementById("progressText").textContent = `Questão ${current+1} de ${n}`;
  document.getElementById("progressBar").style.width = ((current/n)*100)+"%";
  document.getElementById("scoreBadge").textContent = `${score} / ${current}`;
  document.getElementById("qDisc").textContent = DISC_LABELS[q.disc];
  const topicEl = document.getElementById("qTopic");
  topicEl.textContent = q.topic;
  const existing = topicEl.querySelector(".real-badge");
  if(existing) existing.remove();
  if(q.real){
    const badge = document.createElement("span");
    badge.className = "real-badge";
    badge.textContent = "Prova real · " + FONTE_LABEL;
    topicEl.appendChild(badge);
  }
  document.getElementById("qText").textContent = q.q;
  const fb = document.getElementById("feedback");
  fb.style.display="none"; fb.className="feedback";
  document.getElementById("nextBtn").style.display="none";
  const opts = document.getElementById("opts");
  opts.innerHTML="";
  q.opts.forEach((opt,i)=>{
    const btn = document.createElement("button");
    btn.className="opt-btn";
    btn.innerHTML=`<span class="opt-letter">${LETTERS[i]}</span><span>${opt}</span>`;
    btn.addEventListener("click",()=>selectAnswer(i));
    opts.appendChild(btn);
  });
}

function selectAnswer(chosen){
  const q = filtered[current];
  answered[current] = chosen;
  const correct = q.ans;
  if(chosen===correct) score++;
  document.querySelectorAll(".opt-btn").forEach((btn,i)=>{
    btn.disabled=true;
    if(i===correct) btn.classList.add(chosen===correct?"correct":"reveal");
    if(i===chosen && chosen!==correct) btn.classList.add("wrong");
  });
  const fb = document.getElementById("feedback");
  fb.style.display="block";
  if(chosen===correct){
    fb.classList.add("correct-fb");
    document.getElementById("fbTitle").textContent="Correto!";
  } else {
    fb.classList.add("wrong-fb");
    document.getElementById("fbTitle").textContent=`Incorreto — resposta correta: ${LETTERS[correct]}`;
  }
  document.getElementById("fbText").textContent=q.exp;
  document.getElementById("scoreBadge").textContent=`${score} / ${current+1}`;
  const nxt = document.getElementById("nextBtn");
  nxt.style.display="block";
  nxt.textContent = current+1 < filtered.length ? "Próxima questão →" : "Ver resultado →";
}

function nextQ(){
  current++;
  if(current >= filtered.length){ showResults(); return; }
  renderQ();
}

function showResults(){
  document.getElementById("quizScreen").style.display="none";
  document.getElementById("resultsScreen").style.display="block";
  const n = filtered.length;
  const pct = Math.round(score/n*100);
  document.getElementById("rScore").textContent = pct+"%";
  document.getElementById("rSubtitle").textContent = `${score} de ${n} questões corretas · ${pct>=60?"Aprovado no critério geral (60%)":"Abaixo do mínimo de 60%"}`;

  // Per-discipline breakdown
  const byDisc = {};
  filtered.forEach((q,i)=>{
    if(!byDisc[q.disc]) byDisc[q.disc]={total:0,correct:0};
    byDisc[q.disc].total++;
    if(answered[i]===q.ans) byDisc[q.disc].correct++;
  });
  const grid = document.getElementById("resultGrid");
  grid.innerHTML="";
  // Overall
  const overall = document.createElement("div");
  const passClass = pct>=60?"pass":"fail";
  overall.className=`result-card ${passClass}`;
  overall.innerHTML=`<div class="rc-label">Geral</div><div class="rc-val">${pct}%</div><div class="rc-sub">${score}/${n} questões</div>`;
  grid.appendChild(overall);
  Object.entries(byDisc).forEach(([disc,data])=>{
    const dp = Math.round(data.correct/data.total*100);
    const minPass = disc==="cg" ? 50 : 50;
    const card = document.createElement("div");
    card.className=`result-card ${dp>=minPass?"pass":"fail"}`;
    card.innerHTML=`<div class="rc-label">${DISC_LABELS[disc]}</div><div class="rc-val">${dp}%</div><div class="rc-sub">${data.correct}/${data.total} questões</div>`;
    grid.appendChild(card);
  });

  // Review
  const reviewList = document.getElementById("reviewList");
  reviewList.innerHTML="";
  filtered.forEach((q,i)=>{
    const ok = answered[i]===q.ans;
    const item = document.createElement("div");
    item.className="review-item";
    item.innerHTML=`
      <div class="review-item-head">
        <span class="ri-num">Q${i+1}</span>
        <span class="ri-tag ${ok?"correct-tag":"wrong-tag"}">${ok?"Correta":"Errada"}</span>
        <span style="font-size:12px;color:var(--ink-soft);flex:1;text-align:right">${DISC_LABELS[q.disc]} · ${q.topic}</span>
      </div>
      <div class="review-item-body">
        <div class="ri-q">${q.q.split('\n')[0]}</div>
        ${!ok?`<div class="ri-ans" style="color:var(--red)">Sua resposta: ${answered[i]!==null?LETTERS[answered[i]]+" — "+q.opts[answered[i]]:"não respondida"}</div>`:""}
        <div class="ri-ans" style="color:var(--green)">Correta: ${LETTERS[q.ans]} — ${q.opts[q.ans]}</div>
        <div class="ri-exp">${q.exp}</div>
      </div>`;
    reviewList.appendChild(item);
  });
  window.scrollTo({top:0,behavior:"smooth"});
}