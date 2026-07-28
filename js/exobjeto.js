//Exemplo de um objeto JS
const prod = {
  // nome do objeto
  // atributos do objeto
  id: 1,
  nome: "Smartphone",
  preco: 1500,
  categoria: "Eletrônicos",
  imagem: "https://via.placeholder.com/150",
};



// Exemplo de um array (vetor) de objetos JV
const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: 1500,
    categoria: "Eletrônicos",
    imagem: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    nome: "Camiseta",
    preco: 80,
    categoria: "Roupas",
    imagem: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    nome: "Relógio",
    preco: 250,
    categoria: "Acessórios",
    imagem: "https://via.placeholder.com/150",
  },

   {
    id: 4,
    nome: "TV",
    preco: 4000,
    categoria: "Eletrônicos",
    imagem: "https://via.placeholder.com/150",
  },
];

/*console.log(produtos[0]);
console.log(produtos[0].nome); */

console.log(
  `Nome do produto: ${produtos[0].nome} - Categoria: ${produtos[0].categoria}`,
);
console.log("\n");



// for para percorrer o vetor de objetos
console.log("for para percorrer o vetor de objetos");
for (let cont = 0; cont < produtos.length; cont++) {
  console.log(
    `Nome do produto: ${produtos[cont].nome} - Categoria: ${produtos[cont].categoria}`,
  );
}
console.log("\n");



// Usando o formato "destructuring" (desconstruindo)
const { nome, categoria } = produtos[0]; //const {parâmetros}
console.log(`Nome do produto: ${nome} - Categoria: ${categoria}`);
console.log("\n");


// Utilizando "destructuring" em arrays
console.log("Utilizando 'destructuring' em arrays");
function filtrarPorCategoria(categoria) {
  return produtos.filter((produto) => produto.categoria === categoria);
}

const eletronicos = filtrarPorCategoria("Eletrônicos");
console.log(eletronicos);

const roupas = filtrarPorCategoria("Roupas");
console.log(roupas);
