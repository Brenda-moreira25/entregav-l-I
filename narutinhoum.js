export const personagensNaruto = [
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

//Realize as seguintes operações SEM UTILIZAR FOR, WHILE ou FOREACH. UTILIZE SOMENTE ARROW FUNCTIONS SEM ESCOPO ONE-LINER.

// 1. Vetor com nome completo 
const pessoas = personagensNaruto.map(p => `${p.nome}${p.sobrenome ? " " + p.sobrenome : ""}`);

// 2. Personagens da Folha menores de idade
const menoresDeIdadeFolha = personagensNaruto.filter(p => p.ehDaFolha && p.idade < 18);

// 3. Somente os nomes dos personagens que são da Folha
const nomesDaFolha = personagensNaruto.filter(p => p.ehDaFolha).map(p => p.nome);

// 4. Quantidade de personagens com Kekkei Genkai 
const qtdKekkeiGenkai = personagensNaruto.filter(p => p.possuiKekkeiGenkai).length;

// 5. Chakras dos personagens (filtrar quem tem mais de 50 de chakra)
const chakrasAltos = personagensNaruto.filter(p => p.chakra > 50).map(p => p.chakra);

// 6. Chakra Total, Média, Menor e Maior
const chakraTotal = personagensNaruto.reduce((acc, p) => acc + p.chakra, 0);
const chakraMedia = chakraTotal / personagensNaruto.length;
const menorChakra = personagensNaruto.reduce((min, p) => p.chakra < min.chakra ? p : min);
const maiorChakra = personagensNaruto.reduce((max, p) => p.chakra > max.chakra ? p : max);

// 7. Razão chakra-idade média dos Chunin
const chunins = personagensNaruto.filter(p => p.nivel === "Chunin");
const mediaRazaoChunin = chunins.map(p => p.chakra / p.idade).reduce((acc, r) => acc + r, 0) / chunins.length;

// 8. Personagem com Maior e Menor razão chakra-idade
const maiorRazao = personagensNaruto.reduce((max, p) => (p.chakra / p.idade) > (max.chakra / max.idade) ? p : max);
const menorRazao = personagensNaruto.reduce((min, p) => (p.chakra / p.idade) < (min.chakra / min.idade) ? p : min);


console.log("Nomes:", pessoas);
console.log("Qtd Kekkei Genkai:", qtdKekkeiGenkai);
console.log("Média Razão Chunin:", mediaRazaoChunin.toFixed(2));
console.log("Maior Razão:", maiorRazao.nome);
