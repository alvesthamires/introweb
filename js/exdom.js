// Os dados existem, mas não aparecem na tela (O problema inicial)
const filmes = [
    { id: 1, titulo: "O Senhor dos Anéis", diretor: "Peter Jackson", ano: 2001 },
    { id: 2, titulo: "Matrix", diretor: "Lana e Lilly Wachowski", ano: 1999 },
    { id: 3, titulo: "De Volta para o Futuro", diretor: "Robert Zemeckis", ano: 1985 }
];

// Aplique as soluções necessárias abaixo desta linha!
console.log("Início da atividade Manipulação do DOM");


// ETAPA 1 - Selecionando elementos:
const container = document.getElementById("lista-filmes")   //document é o "DOM" - falando c/ o HTML pelo JS
//capturou a div com id lista-filmes, a partir de agora toda modificação que eu fizer altera toda a minha div


// ETAPA 2 - Laço de Repetição:
filmes.forEach((filme) => {

    // ETAPA 3 - Criando Elementos:
    const card = document.createElement("div");  // digo dentro das aspas o que eu quero criar, nesse caso, cria uma div
    card.classList.add("filme-card")  // insiro dentro das aspas a classe de CSS "filme-card" na div

    // ETAPA 4 - Alterando o Conteúdo:
    card.innerHTML = `               
        <h3>${filme.titulo}</h3>
        <p>Diretor: ${filme.diretor}</p>
        <p>Ano: ${filme.ano}</p>
        `;  // crio um texto HTML dentro da minha div (a cada volta da minha div (forEach)) 

    // ETAPA 5 - Inserindo no DOM:
        container.appendChild(card);

});  //fim do forEach

// ETAPA 6 - Manipulando Classes:
const primeiroFilme = document.querySelector(".filme-card");  //querySelector pega do HTML o primeiro item da classe que eu apontar dentro das aspas
primeiroFilme.classList.add("destaque");

// ETAPA 7 - Removendo Elementos:
const todosOsFilmes = document.querySelectorAll(".filme-card");  //querySelectorAll seleciona do HTML TODOS os itens da classe que eu apontar dentro das aspas
const ultimoFilme = todosOsFilmes[2]; // o último filme
ultimoFilme.remove(); //remove diretamente da árvore do DOM