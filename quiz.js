// Perguntas e respostas
const questions = [
    {
        question: 'Para identificar uma entidade, deve-se focar no problema em pauta e perguntar-se: “Quais são as ‘coisas’ neste problema?”. Assim, uma competição, como uma corrida de Fórmula 1, por exemplo, representa uma entidade do tipo:',
        alternatives: [
            'Coisa tangível.',
            'Classe.',
            'Interação.',
            'Função.',
            'Incidente.'
        ],
        correct: 4
    },
    {
        question: 'A frase “É uma subdivisão da linguagem SQL utilizada para definir as estruturas de dados.”, refere-se à linguagem:',
        alternatives: [
            'DTL',
            'DML',
            'DQL',
            'DDL',
            'DCL'
        ],
        correct: 3
    },
    {
        question: 'O endereço completo de uma pessoa é um exemplo de atributo:',
        alternatives: [
            'Monovalorado.',
            'Determinante.',
            'Composto.',
            'Multivalorado.',
            'Simples.'
        ],
        correct: 2
    },
    {
        question: 'Em relação ao Modelo Entidade Relacionamento são feitas as seguintes afirmações:\n\n1. Define-se como entidade aquele objeto que existe no mundo real com uma identificação distinta e com um significado próprio.\n2. A existência de uma entidade pode ser física ou conceitual.\n3. A entidade forte possui atributos candidatos a chave primária.\n4. O MER permite a descrição dos elementos como entidades, atributos, identificadores únicos, relacionamentos, cardinalidade e normalização.\n\nAssinale a opção correta:',
        alternatives: [
            'Todas as afirmações estão corretas.',
            'Apenas as afirmações 1, 2 e 3 estão corretas.',
            'Apenas as afirmações 1, 2 e 4 estão corretas.',
            'Apenas as afirmações 1 e 4 estão corretas.',
            'Apenas as afirmações 1, 3 e 4 estão corretas.'
        ],
        correct: 0
    },
    {
        question: 'Em relação ao Modelo Entidade-Relacionamento, um atributo que pode possuir várias ocorrências é chamado de atributo:',
        alternatives: [
            'Composto.',
            'Determinante',
            'Múltiplo.',
            'Simples.',
            'Multivalorado.'
        ],
        correct: 4
    },
    {
        question: 'Em relação ao relacionamento Um-para-Muitos (1:N), assinale a alternativa correta:',
        alternatives: [
            'Para cada registro da primeira tabela, pode existir um ou mais correspondentes na segunda tabela, e vice-versa.',
            'Para cada registro da primeira tabela, pode existir um ou mais correspondentes na segunda tabela, e para cada registro na segunda tabela existe apenas um registro correspondente na primeira tabela.',
            'Para cada registro da primeira tabela, existirá obrigatoriamente um ou mais correspondentes na segunda tabela, e vice-versa.',
            'Para cada registro da primeira tabela, existe no máximo um correspondente na segunda tabela, e vice-versa.',
            'Para cada registro da primeira tabela, existe obrigatoriamente um correspondente na segunda tabela, e vice-versa.'
        ],
        correct: 1
    },
    {
        question: 'Assinale a alternativa que complete corretamente a frase a seguir: “Na modelagem de dados, são utilizados três tipos de modelos de dados, que são os modelos _____________, _____________ e _____________.”.',
        alternatives: [
            'Conceitual, abstrato e real.',
            'Relacional, lógico e físico.',
            'Conceitual, lógico e físico.',
            'Descritivo, funcional e técnico.',
            'Conceitual, funcional e físico.'
        ],
        correct: 2
    },
    {
        question: 'Assinale a alternativa que complete corretamente a frase a seguir: “A herança de atributos é uma consequência do processo de _____________.”.',
        alternatives: [
            'Cardinalidade.',
            'Agregação.',
            'Normatização.',
            'Junção.',
            'Especialização.'
        ],
        correct: 4
    },
    {
        question: 'Considere as seguintes afirmações:\n\nI – Um Banco de Dados representa algum aspecto do mundo real, às vezes chamado de minimundo. As mudanças no minimundo são refletidas no Banco de Dados.\nII – Um Banco de Dados é uma coleção logicamente coerente de dados com algum significado inerente.\nIII – Um Banco de Dados é projetado, construído e populado com dados para uma finalidade específica.\n\nEm relação às afirmações acima, assinale a alternativa correta:',
        alternatives: [
            'Todas as afirmações estão corretas.',
            'Apenas a afirmação I está correta.',
            'Apenas as afirmações I e III estão corretas.',
            'Apenas as afirmações I e II estão corretas.',
            'Apenas as afirmações II e III estão corretas.'
        ],
        correct: 0
    },
    {
        question: 'Assinale a alternativa que complete corretamente a frase a seguir: “As formas normais são as técnicas que _____________.”.',
        alternatives: [
            'Evitam a redundância dos dados.',
            'Garantem que todas as atualizações sejam efetivadas no bando de dados.',
            'Evitam a perda de dados.',
            'Evitam acessos indevidos aos dados.',
            'Garantem a ordem de execução dos comandos enviados ao banco de dados.'
        ],
        correct: 0
    },
    {
        question: 'Em relação à normalização de dados, considere as seguintes afirmações:\n\nI – Normalizar o banco diminui ou elimina as anomalias dos dados.\nII – Geralmente, aumenta o número de tabelas do banco de dados.\nIII – É baseada em 5 etapas, conhecidas como Formas Normais.\n\nEm relação às afirmações acima, assinale a alternativa correta:',
        alternatives: [
            'Apenas a afirmação I está correta.',
            'Apenas as afirmações II e III estão corretas.',
            'Todas as afirmações estão corretas.',
            'Apenas as afirmações I e II estão corretas.',
            'Apenas as afirmações I e III estão corretas.'
        ],
        correct: 2
    },
    {
        question: 'A linguagem DML é responsável por:',
        alternatives: [
            'Manter a consistência dos dados.',
            'Gerenciar conjuntos de operações sobre os dados.',
            'Gerenciar o acesso aos dados',
            'Definir as estruturas de dados.',
            'Manipular os dados.'
        ],
        correct: 4
    },
    {
        question: 'Um objeto que existe no mundo real, com uma identificação distinta e com um significado próprio é chamado de:',
        alternatives: [
            'Peça.',
            'Espécie.',
            'Entidade.',
            'Artefato.',
            'Componente.'
        ],
        correct: 2
    },
    {
        question: 'Em relação às Extensões do Modelo Entidade Relacionamento, assinale a alternativa incorreta:',
        alternatives: [
            'Herança de atributos é uma consequência do processo de especialização.',
            'As principais extensões do MER são Agregação, Especialização, Generalização e Herança de Atributos.',
            'Especialização é o conceito que permite atribuir propriedades particulares a um subconjunto das ocorrências (mais específicas) de uma entidade genérica.',
            'Um dos pontos fortes do MER é a possibilidade de se expressar relacionamento entre relacionamentos.',
            'Agregação é uma abstração através da qual relacionamentos são tratados como entidades de nível superior.'
        ],
        correct: 3
    },
    {
        question: 'Em relação às chaves, assinale a alternativa correta:',
        alternatives: [
            'Não é possível criar uma tabela sem chave primária.',
            'Não é possível criar uma tabela sem chave estrangeira.',
            'Chaves estrangeiras podem apresentar valores repetidos entre diferentes registros.',
            'Chaves estrangeiras não repetem informações para diferentes registros.',
            'Chaves são colunas exclusivamente numéricas.'
        ],
        correct: 2
    },
    {
        question: 'Em relação às chaves, assinale a alternativa correta:',
        alternatives: [
            'Chaves tornam o banco de dados lento, por isto é melhor não utilizar.',
            'O uso de chaves traz benefícios e consistências para o banco de dados.',
            'Não é possível criar uma tabela sem chave primária.',
            'Criar chaves de tipos de dado string é recomendado pois assim pode armazenar valores strings e numéricos.',
            'O uso de chaves só deve ser realizado em bancos de dados multiusuários.'
        ],
        correct: 1
    },
    {
        question: 'Em relação à normalização de dados, assinale a alternativa INCORRETA:',
        alternatives: [
            'Normalizar o banco diminui ou elimina as anomalias dos dados.',
            'Devemos obrigatoriamente aplicar todas as Formas Normais em nossos bancos de dados.',
            'Seu uso impacta o desempenho do banco pois há mais informações para processar.',
            'Geralmente aumenta o número de tabelas do banco de dados.',
            'É baseada em 5 etapas, conhecidas como Formas Normais.'
        ],
        correct: 1
    },
    {
        question: 'Considere a seguinte situação da vida real: “Um médico atende muitos pacientes, e um paciente pode realizar consultas com vários médicos (várias especialidades médicas).” Assim, na modelagem de um banco de dados, para melhor descrever o relacionamento entre médico e paciente, podemos incluir a consulta como um atributo do relacionamento entre eles. Esta situação representa um exemplo de:',
        alternatives: [
            'Segmentação.',
            'Agregação.',
            'Especialização.',
            'Customização.',
            'Generalização.'
        ],
        correct: 1
    },
    {
        question: 'Em relação ao Modelo Entidade Relacionamento são feitas as seguintes afirmações:\n\n1. Atributo Simples: Guarda em si um único valor indivisível.\n2. Atributo Composto: É o resultado da soma de vários atributos.\n3. Atributo Multivalorado: Pode possuir várias ocorrências.\n4. Atributo Determinante: É o atributo que garante a unicidade de cada ocorrência da entidade.\n\nAssinale a opção correta:',
        alternatives: [
            'Apenas as afirmações 1, 2 e 4 estão corretas.',
            'Apenas as afirmações 1, 2 e 3 estão corretas.',
            'Apenas as afirmações 1 e 4 estão corretas.',
            'Todas as afirmações estão corretas.',
            'Apenas as afirmações 1, 3 e 4 estão corretas.'
        ],
        correct: 3
    },
    {
        question: 'Ao analisar a combinação de notas que são sacadas nos caixas eletrônicos instalados nos vários bairros da cidade de São Paulo, um analista de sistemas chegou à conclusão de que seria mais interessante abastecer os caixas eletrônicos instalados no bairro Pinheiros apenas com cédulas de R$ 100. No contexto de dados versus informações, tal conclusão representa um(a):',
        alternatives: [
            'Informação.',
            'Medida.',
            'Experiência.',
            'Dado.',
            'Inferência.'
        ],
        correct: 0
    },
    // --- INÍCIO DAS PERGUNTAS DA FASE 4 ---
    {
        question: 'A comunicação entre as redes espalhadas por todo o mundo é possível pelo uso do conjunto de protocolos conhecido como:',
        alternatives: [
            'POP3',
            'ARPANET',
            'TCP/IP',
            'Telnet',
            'IPv6'
        ],
        correct: 2
    },
    {
        question: 'Quando trabalhamos com HTML, temos que sempre ter em mente que ela é uma linguagem de:',
        alternatives: [
            'Marcação.',
            'Definição de interfaces.',
            'Programação modular.',
            'Programação estruturada.',
            'Programação orientada a objetos.'
        ],
        correct: 0
    },
    {
        question: 'Assinale a alternativa que melhor completa a frase a seguir: “Como cientista responsável por várias pesquisas que estavam sendo realizadas pelo CERN (European Organization for Nuclear Research), em diferentes partes do mundo, Tim Berners-Lee teve a ideia de criar um padrão para ser usado pelos cientistas na submissão dos documentos. Para tanto, ele utilizou a linguagem _____________, que já possuía uma padronização de formatação para textos.”:',
        alternatives: [
            'Multipurpose Internet Mail Extensions (MIME)',
            'Extensible Markup Language (XML)',
            'Geography Markup Language (GML)',
            'Mathematical Markup Language (MathML)',
            'Standard Generalized Markup Language (SGML)'
        ],
        correct: 4
    },
    {
        question: 'Segundo o Statcounter, um dos principais sites de análise de tráfego da Web, atualmente, o browser mais utilizado no mundo é:',
        alternatives: [
            'Firefox',
            'Safari',
            'Netscape',
            'Chrome',
            'Edge'
        ],
        correct: 3
    },
    {
        question: 'Para facilitar a memorização dos endereços de equipamentos conectados à Internet, são utilizados os nomes de domínios, que promovem a tradução para endereços IP. A associação de nomes de domínio para endereços IP é feita por um conjunto de servidores de DNS. Aliás, DNS significa:',
        alternatives: [
            'Domain Name System',
            'Data Nomenclature System',
            'Domain Nomenclature System',
            'Domain Name Server',
            'Data Name System'
        ],
        correct: 0
    },
    {
        question: 'Assinale a alternativa que completa corretamente a frase a seguir: “O atributo _____________ define o que acontecerá com os dados digitados quando o usuário pressionar o botão de envio, ou seja, submeter o formulário.”:',
        alternatives: [
            'Post',
            'Action',
            'Issue',
            'Send',
            'Publish'
        ],
        correct: 1
    },
    {
        question: 'No início da década de 1990, Timothy John Berners-Lee desenvolveu a World Wide Web (WWW) utilizando uma linguagem de programação que viria a revolucionar o mundo. No caso, estamos falando da linguagem de programação:',
        alternatives: [
            'C',
            'Java',
            'HTML',
            'PHP',
            'Python'
        ],
        correct: 2
    },
    {
        question: 'Em um formulário, qual atributo é utilizado para definir uma palavra ou frase que ficará visível dentro dos campos, de modo a sugerir aos usuários como efetuar o preenchimento destes campos?',
        alternatives: [
            'fieldfill',
            'autofill',
            'placeholder',
            'fulfillment',
            'legend'
        ],
        correct: 2
    },
    {
        question: 'Para que uma pessoa localizada em São Paulo possa acessar um site disponibilizado na Austrália, o acesso é feito através dos(as)?',
        alternatives: [
            'Bridges',
            'Backbones',
            'Hubs',
            'Switches',
            'Routers'
        ],
        correct: 1
    },
    {
        question: 'Qual tag é responsável pela inserção da maioria dos componentes de um formulário?',
        alternatives: [
            'form',
            'input',
            'entry',
            'insertion',
            'inlet'
        ],
        correct: 1
    },
    {
        question: 'A frase “É a principal organização internacional para padronização da World Wide Web. Consiste em um consórcio internacional que agrega empresas, órgãos governamentais e organizações independentes com a finalidade de estabelecer padrões para a criação e a interpretação de conteúdo para a Web.”, refere-se a:',
        alternatives: [
            'ISO',
            'W3C',
            'Web-Policy',
            'Web Standards',
            'NIST'
        ],
        correct: 1
    },
    {
        question: 'Para que o navegador Web (browser) entenda a formatação da página, é necessário colocar as regras CSS dentro da tag:',
        alternatives: [
            '&lt;select&gt;',
            '&lt;style&gt;',
            '&lt;html&gt;',
            '&lt;body&gt;',
            '&lt;head&gt;'
        ],
        correct: 1
    },
    {
        question: 'Qual é a primeira linha de código necessária em qualquer documento HTML?',
        alternatives: [
            '&lt;!DOCTYPE html&gt;',
            '&lt;!WEBTYPE html&gt;',
            '&lt;!TEXTTYPE html&gt;',
            '&lt;!WEBPAGE html&gt;',
            '&lt;!CODETYPE html&gt;'
        ],
        correct: 0
    },
    {
        question: 'Considerar a tipologia que será utilizada em um projeto é fundamental para que o usuário tenha uma experiência agradável ao acessar a página Web. Neste contexto, a maioria dos navegadores Web (browsers) têm como fonte padrão:',
        alternatives: [
            'Verdana',
            'Arial',
            'Times New Roman',
            'Consolas',
            'Courier New'
        ],
        correct: 2
    },
    {
        question: 'O Bootstrap é um framework front-end responsivo, elegante e de fácil aprendizado que permite uma maior agilidade no desenvolvimento de páginas Web. Originalmente, o Bootstrap foi criado como um projeto interno de qual empresa:',
        alternatives: [
            'LinkedIn',
            'Instagram',
            'Twitter',
            'Google',
            'Facebook'
        ],
        correct: 2
    },
    {
        question: 'Graças a uma convenção multiplataforma conhecida como DOM, todos os elementos em documentos HTML podem ser manipulados em JavaScript como se fossem objetos. Aliás, DOM significa:',
        alternatives: [
            'Document Object Model',
            'Data Object Model',
            'Driven Object Model',
            'Device Object Model',
            'Dynamic Object Model'
        ],
        correct: 0
    },
    {
        question: 'Muitas vezes chamada de “caixa mágica”, qual tag é um contêiner que poderá ser criado para armazenar qualquer tipo de conteúdo?',
        alternatives: [
            '&lt;div&gt;',
            '&lt;web&gt;',
            '&lt;all&gt;',
            '&lt;www&gt;',
            '&lt;any&gt;'
        ],
        correct: 0
    },
    {
        question: 'Em relação às camadas de desenvolvimento Web, qual tecnologia está associada à camada de apresentação?',
        alternatives: [
            'JavaScript',
            'Browser',
            'CSS',
            'URL',
            'HTTP'
        ],
        correct: 2
    },
    {
        question: 'Assinale a alternativa que melhor completa a frase a seguir: “Para que os sites e aplicações Web fiquem disponíveis na Internet, eles devem estar _____________ servidores, computadores de alta capacidade de processamento e armazenamento.”:',
        alternatives: [
            'associados a',
            'vinculados a',
            'afiliados a',
            'subordinados a',
            'hospedados em'
        ],
        correct: 4
    },
    {
        question: 'Por meio de um conjunto de regras CSS, é possível determinar como o layout de uma página Web será exibido em diferentes tamanhos de telas. Este conceito é chamado de:',
        alternatives: [
            'Design responsivo',
            'Web design',
            'Motion design',
            'Acessibilidade digital',
            'Design thinking'
        ],
        correct: 0
    }
    // --- FIM DAS PERGUNTAS DA FASE 4 ---
];

let quizOrder = [];
let current = 0;
let finished = false;
let startTime = null;
let timerInterval = null;
let elapsed = 0;
let history = [];
let quizStarted = false;
let canAdvance = false;
let firstTry = true;
let attemptNumber = 1;
let correctCount = 0;
let wrongCount = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showStartButton() {
    quizStarted = false;
    const quizArea = document.getElementById('quiz-area');
    quizArea.innerHTML = `
    <button class="block mx-auto mt-8 bg-purple-600 hover:bg-purple-800 text-white rounded-lg px-8 py-3 text-lg font-semibold transition" onclick="startQuiz()">Iniciar Quiz</button>
  `;
    document.getElementById('timer').textContent = '';
}

function startQuiz() {
    quizStarted = true;
    quizOrder = Array.from({ length: questions.length }, (_, i) => i);
    shuffle(quizOrder);
    current = 0;
    finished = false;
    startTime = Date.now();
    elapsed = 0;
    canAdvance = false;
    firstTry = true;
    attemptNumber = history.length + 1;
    correctCount = 0;
    wrongCount = 0;
    renderQuestion();
    startTimer();
}

function renderQuestion() {
    const quizArea = document.getElementById('quiz-area');
    canAdvance = false;
    firstTry = true;
    if (current >= questions.length) {
        finished = true;
        stopTimer();
        const timeStr = formatTime(elapsed);
        history.push(`Tempo: ${timeStr} | Acertos: ${correctCount} | Erros: ${wrongCount}`);
        quizArea.innerHTML = `
      <h2 class="text-2xl font-bold text-purple-500 text-center">Revisão Terminada!</h2>
      <div class="score text-center mt-6 text-lg">Tempo gasto: <b>${timeStr}</b></div>
      <div class="score text-center mt-2 text-lg">Acertos: <b>${correctCount}</b> | Erros: <b>${wrongCount}</b></div>
      <button class="restart-btn block mx-auto mt-6 bg-purple-600 hover:bg-purple-800 text-white rounded-lg px-8 py-3 text-lg font-semibold transition" onclick="startQuiz()">Recomeçar e Embaralhar</button>
    `;
        renderHistory();
        return;
    }
    const qIndex = quizOrder[current];
    const q = questions[qIndex];
    let fase = '';
    if (qIndex < questions.length - 20) {
        fase = 'Fase 3';
    } else {
        fase = 'Fase 4';
    }
    quizArea.innerHTML = '';
    const progressDiv = document.createElement('div');
    progressDiv.className = 'progress text-center mb-4 text-lg text-white';
    progressDiv.textContent = `Pergunta ${current + 1} de ${questions.length} — ${fase}`;
    quizArea.appendChild(progressDiv);

    const questionDiv = document.createElement('div');
    questionDiv.className = 'question mb-4 text-xl font-semibold text-white';
    questionDiv.textContent = q.question;
    quizArea.appendChild(questionDiv);

    const ul = document.createElement('ul');
    ul.className = 'alternatives list-none p-0 flex flex-col gap-2 sm:gap-3';
    for (let i = 0; i < q.alternatives.length; i++) {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.className = 'alt-btn w-full bg-zinc-800 text-white border-2 border-purple-600 rounded-lg py-3 px-2 sm:px-4 text-base font-medium transition hover:bg-purple-600 hover:text-white focus:outline-none';
        btn.id = `alt-btn-${i}`;
        btn.onclick = () => checkAnswer(i);
        btn.textContent = q.alternatives[i];
        li.appendChild(btn);
        ul.appendChild(li);
    }
    quizArea.appendChild(ul);

    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = 'feedback my-4 font-bold text-purple-500 text-center min-h-[24px]';
    feedbackDiv.id = 'feedback';
    quizArea.appendChild(feedbackDiv);

    const nextBtnArea = document.createElement('div');
    nextBtnArea.id = 'next-btn-area';
    quizArea.appendChild(nextBtnArea);
}

function checkAnswer(selected) {
    if (finished || canAdvance) return;
    const qIndex = quizOrder[current];
    const q = questions[qIndex];
    const feedback = document.getElementById('feedback');
    const correctBtn = document.getElementById(`alt-btn-${q.correct}`);
    for (let i = 0; i < q.alternatives.length; i++) {
        document.getElementById(`alt-btn-${i}`).disabled = true;
    }
    if (selected === q.correct) {
        correctBtn.classList.add('bg-green-200', 'text-green-900', 'border-green-600');
        feedback.textContent = 'Resposta correta!';
        correctCount++;
        canAdvance = true;
        setTimeout(() => {
            for (let i = 0; i < q.alternatives.length; i++) {
                const btn = document.getElementById(`alt-btn-${i}`);
                if (btn) {
                    btn.className = 'alt-btn w-full bg-zinc-800 text-white border-2 border-purple-600 rounded-lg py-3 px-2 sm:px-4 text-base font-medium transition hover:bg-purple-600 hover:text-white focus:outline-none';
                }
            }
            current++;
            renderQuestion();
        }, 700);
    } else {
        wrongCount++;
        feedback.textContent = 'Resposta errada! A correta está destacada.';
        correctBtn.classList.add('bg-green-200', 'text-green-900', 'border-green-600');
        const selectedBtn = document.getElementById(`alt-btn-${selected}`);
        if (selectedBtn) {
            selectedBtn.classList.add('bg-purple-600', 'text-white', 'border-purple-600');
        }
        setTimeout(() => {
            for (let i = 0; i < q.alternatives.length; i++) {
                const btn = document.getElementById(`alt-btn-${i}`);
                if (btn) {
                    btn.className = 'alt-btn w-full bg-zinc-800 text-white border-2 border-purple-600 rounded-lg py-3 px-2 sm:px-4 text-base font-medium transition hover:bg-purple-600 hover:text-white focus:outline-none';
                }
            }
            current++;
            renderQuestion();
        }, 5000);
    }
}

function nextQuestion() {
    if (!canAdvance) return;
    current++;
    renderQuestion();
}

function startTimer() {
    stopTimer();
    updateTimer();
    timerInterval = setInterval(() => {
        updateTimer();
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    updateTimer();
}

function updateTimer() {
    const timerDiv = document.getElementById('timer');
    if (!quizStarted) {
        timerDiv.textContent = '';
        return;
    }
    if (!finished && startTime) {
        elapsed = Math.floor((Date.now() - startTime) / 1000);
    }
    timerDiv.textContent = 'Tempo: ' + formatTime(elapsed);
}

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

function renderHistory() {
    const historyDiv = document.getElementById('history');
    if (history.length === 0) {
        historyDiv.innerHTML = '';
        return;
    }
    historyDiv.innerHTML = '<div class="history-title text-purple-500 font-bold mb-2">Histórico de Tempos:</div>' +
        history.map((t, i) => `Tentativa ${i + 1}: <b>${t}</b>`).join('<br>');
}

// Expor funções globalmente
window.startQuiz = startQuiz;
window.checkAnswer = checkAnswer;
window.nextQuestion = nextQuestion;

document.addEventListener('DOMContentLoaded', showStartButton); 