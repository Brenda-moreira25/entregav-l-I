//Agora, realize as seguintes operações SEM UTILIZAR FOR, WHILE ou FOREACH. UTILIZE SOMENTE ARROW FUNCTIONS SEM ESCOPO ONE-LINER.

const personagensNaruto = [
  {
    nome: "Naruto",
    sobrenome: "Uzumaki",
    idade: 17,
    chakra: 100,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Genin",
  },
  {
    nome: "Sasuke",
    sobrenome: "Uchiha",
    idade: 17,
    chakra: 85,
    ehDaFolha: false,
    possuiKekkeiGenkai: true,
    nivel: "Ninja Renegado",
  },
  {
    nome: "Sakura",
    sobrenome: "Haruno",
    idade: 17,
    chakra: 40,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Kakashi",
    sobrenome: "Hatake",
    idade: 31,
    chakra: 50,
    ehDaFolha: true,
    possuiKekkeiGenkai: true,
    nivel: "Jonin",
  },
  {
    nome: "Gaara",
    sobrenome: null,
    idade: 17,
    chakra: 90,
    ehDaFolha: false,
    possuiKekkeiGenkai: true,
    nivel: "Kazekage",
  },
  {
    nome: "Rock",
    sobrenome: "Lee",
    idade: 18,
    chakra: 20,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Hinata",
    sobrenome: "Hyuga",
    idade: 16,
    chakra: 45,
    ehDaFolha: true,
    possuiKekkeiGenkai: true,
    nivel: "Chunin",
  },
  {
    nome: "Shikamaru",
    sobrenome: "Nara",
    idade: 17,
    chakra: 35,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Tsunade",
    sobrenome: null,
    idade: 55,
    chakra: 95,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Hokage",
  },
  {
    nome: "Jiraiya",
    sobrenome: null,
    idade: 54,
    chakra: 88,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Sannin",
  },
  {
    nome: "Orochimaru",
    sobrenome: null,
    idade: 54,
    chakra: 92,
    ehDaFolha: false,
    possuiKekkeiGenkai: false,
    nivel: "Sannin",
  },
  {
    nome: "Itachi",
    sobrenome: "Uchiha",
    idade: 21,
    chakra: 60,
    ehDaFolha: false,
    possuiKekkeiGenkai: true,
    nivel: "Ninja Renegado",
  },
  {
    nome: "Neji",
    sobrenome: "Hyuga",
    idade: 18,
    chakra: 55,
    ehDaFolha: true,
    possuiKekkeiGenkai: true,
    nivel: "Jonin",
  },
  {
    nome: "Tenten",
    sobrenome: null,
    idade: 18,
    chakra: 30,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Ino",
    sobrenome: "Yamanaka",
    idade: 17,
    chakra: 40,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Choji",
    sobrenome: "Akimichi",
    idade: 17,
    chakra: 75,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Kiba",
    sobrenome: "Inuzuka",
    idade: 17,
    chakra: 45,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Shino",
    sobrenome: "Aburame",
    idade: 17,
    chakra: 65,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Sai",
    sobrenome: null,
    idade: 17,
    chakra: 50,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Anbu",
  },

  {
    nome: "Temari",
    sobrenome: null,
    idade: 20,
    chakra: 70,
    ehDaFolha: false,
    possuiKekkeiGenkai: false,
    nivel: "Jonin",
  }
];

// cria vetor com map (tratando sobrenome nulo)
const pessoas = personagensNaruto.map(personas => personas.nome + personas.sobrenome)

//Crie um vetor somente com os personagens da Folha que são menores de idade usando filter.
const menoresDeIdade = personagensNaruto.filter (p => p.idade < 18) 

//separar se é do clã da folha:
const grupo = personagensNaruto.filter(classes => classes.ehDaFolha === true).map( classes.nome)

//Quantos personagens possuem kekkei-gengai?
const nivelalto = personagensNaruto.filter(nivel => nivel.possuiKekkeiGenkai === true).map(nivel.possuiKekkeiGenkai)

//Utilize chaining para construir um one-liner com map e filter para selecionar os chakras dos personagens 
const chakras = personagensNaruto.filter(p => p.chakra > 50).map(p => p.chakra);

//Qual o chakra total dos personagens? E a média? Quem possui o menor chakra? E o maior?
const totalchkras = personagens.filter(p => p.nivel === "Jonin").map(p => p.chakra).reduce((total, chakra) => total + chakra, 0); 

//Descubra a razão chakra-idade média dos Chunin. Utilize filter para selecionar somente os Chunin, map para o vetor de razões (a razão é chakra / idade) e reduce para realizar o somatório necessário pra calcular a média.
const razao = personagensNaruto.filter(p => p.chakra / p.idade).map(p => p.razao)


//Mostre o nome do personagem com a maior e com a menor razão chakra-idade.
//Crie um endpoint de API para cada uma das operações acima.
get
Push


//Faça deploy da sua API para o Vercel.
//Ao finalizar, envie o link do seu repositório no GitHub, com o arquivo de especificação do Bruno.

console.log(pessoas);
console.log(menoresDeIdade);
console.log(grupo);
console.log(nivelalto);
console.log(totalChakraJonin);
