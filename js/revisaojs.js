console.log("Olá, Mundo! ");

//material 16 - página 07

/* constante - valor não varia*/
const nomeLoja = "Minha Loja Online"; 

/* let -> variáveis - valor pode ser alterado*/
let produto1 = "Smartphone";
let preco1 = 1500;
let emPromocao = true;

//nomeLoja = "Loja Grande"; ERRO - não posso alterar valor de uma CONSTANTE
console.log(`Nome da loja: ${nomeLoja}`);

produto1 = "Samsung Galaxy S26"; //alterei o valor da variável
let promoMsg;
if (emPromocao){
    promoMsg = "Em Promoção";
} else {
    promoMsg = "Fora da Promoção";
}
console.log(`Produto: ${produto1} | Preço: R$ ${preco1.toFixed(2)} | ${promoMsg}`);


//material 16 - página 08

//OPERADORES ARITMÉTICOS
console.log("---Operadores Aritméticos---")