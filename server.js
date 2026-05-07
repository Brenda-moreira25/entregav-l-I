import express from "express";
import cors from "cors";
import personagensNaruto from "./narutinhoum.js";

const port = 8080;
const app = express();

app.use(cors());
app.use(express.json());

// Rota de nomes: Adicionado chaves {}
app.get("/nomes", (req, res) => {
  const nomes = personagensNaruto.map(p => `${p.nome}${p.sobrenome ? " " + p.sobrenome : ""}`);
  res.json(nomes);
});


app.get("/menores-folha", (req, res) => {
  const menoresDeIdade = personagensNaruto.filter(p => p.ehDaFolha && p.idade < 18);  
  res.json(menoresDeIdade);
});

app.get("/grupo-folha", (req, res) => {
  const grupo = personagensNaruto.filter(p => p.ehDaFolha);
  res.json(grupo);
});

app.get("/kekkei-genkai", (req, res) => {
  const totalKekkeiGenkai = personagensNaruto.reduce((acc, p) => acc + (p.possuiKekkeiGenkai ? 1 : 0), 0);
  res.json({ totalKekkeiGenkai });
});

app.get("/chakras", (req, res) => {
  const chakras = personagensNaruto.filter(p => p.chakra > 50).map(p => p.chakra);
  res.json(chakras);
});

app.get("/chakra-total", (req, res) => {
  const chakraTotal = personagensNaruto.reduce((acc, p) => acc + p.chakra, 0); 
  res.json({ chakraTotal });
});

app.get("/media-chakra", (req, res) => {
  const chakraTotal = personagensNaruto.reduce((acc, p) => acc + p.chakra, 0);
  const mediaChakra = personagensNaruto.length > 0 ? chakraTotal / personagensNaruto.length : 0;
  res.json({ mediaChakra });
});

app.get("/menor-chakra", (req, res) => {
  const menorChakra = personagensNaruto.reduce((min, p) => p.chakra < min.chakra ? p : min);
  res.json(menorChakra);
});

app.get("/maior-chakra", (req, res) => {
  const maiorChakra = personagensNaruto.reduce((max, p) => p.chakra > max.chakra ? p : max);
  res.json(maiorChakra);
});

app.get("/media-razao-chunin", (req, res) => {
  const chunins = personagensNaruto.filter(p => p.nivel === "Chunin");
  // Adicionada verificação para não dividir por zero caso não existam Chunins
  const mediaRazaoChunin = chunins.length > 0 
    ? chunins.map(p => p.chakra / p.idade).reduce((acc, r) => acc + r, 0) / chunins.length 
    : 0;
  res.json({ mediaRazaoChunin });
});

app.get("/maior-razao", (req, res) => {
  const maiorRazao = personagensNaruto.reduce((max, p) => (p.chakra / p.idade) > (max.chakra / max.idade) ? p : max);
  res.json(maiorRazao);
});

app.get("/menor-razao", (req, res) => {
  const menorRazao = personagensNaruto.reduce((min, p) => (p.chakra / p.idade) < (min.chakra / min.idade) ? p : min);
  res.json(menorRazao);
});

app.listen(port, () => {
  console.log(`Server running http://localhost:${port}`);
});