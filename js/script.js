// ==========================
 // VARIÁVEIS
 // ==========================
 const nomeLoja = "Minha Loja Online";

 let produto1 = "Smartphone";
 let preco1 = 1500;
 let emPromocao = true;

// ==========================
// FUNÇÃO DE DESCONTO
 // ==========================
 function calcularDesconto(preco, desconto) {
 return preco - (preco * desconto);
 }

// ==========================
 // USANDO CONDICIONAL
// ==========================
let precoFinal;

if (emPromocao) {
 precoFinal = calcularDesconto(preco1, 0.1); // 10% desconto
 } else {
 precoFinal = preco1;
 }

console.log(`Produto: ${produto1}`);
console.log(`Preço final: R$ ${precoFinal}`);

 // ==========================
// LISTA DE PRODUTOS (SIMULAÇÃO)
 // ==========================
 const produtos = [
 { nome: "Smartphone", preco: 1500 },
 { nome: "Camiseta", preco: 80 },
 { nome: "Relógio", preco: 250 }
 ];

 // ==========================
 // LOOP
 // ==========================
 for (let i = 0; i < produtos.length; i++) {
 console.log(`Produto: ${produtos[i].nome} - R$ ${produtos[i].preco}`);
 }

 // ==========================
 // ARROW FUNCTION
// ==========================
 const exibirProduto = (produto) => {
 return `Produto: ${produto.nome} - R$ ${produto.preco}`;
 };

 console.log(exibirProduto(produtos[0]));