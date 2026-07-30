// PONTO DE PARTIDA - Seleção dos elementos do HTML
const form = document.getElementById("form-feedback");
const inputNome = document.getElementById("nome");  // captura a caixa e texto "nome"
const inputComentario = document.getElementById("comentario");
const mensagem = document.getElementById("mensagem-feedback");
const listaComentarios = document.getElementById("lista-comentarios");

// SEU CÓDIGO COMEÇA AQUI:
console.log("1. 2. 3... Testando JS");

// ETAPA 1 - Interceptando o Envio do Formulário
//form vem do const form
form.addEventListener("submit", function(event){
    event.preventDefault();  //mesmo event do function ; impede o recarregamento da página

    // ETAPA 2 - Pegando os Valores Digitados
    // value -> captura o conteúdo inserido na caixa
    //trim -> limpa espaços no início ou no fim
    const nomeDigitado = inputNome.value.trim();
    const comentarioDigitado = inputComentario.value.trim();
       
    // ETAPA 3 - Criando a validação
    if(nomeDigitado === "" || comentarioDigitado === ""){
        // Regra do erro
        // ETAPA 4 - Feedback de erro
        mensagem.textContent = "ERRO: Preencha todos os campos!";
        mensagem.style.color = "red"; 
      

  
    } else {
        // Regra do sucesso
        mensagem.textContent = "Feedback enviado com sucesso";
        mensagem.style.color = "green";
    }


    // ETAPA 5 - Renderizando o Novo Item na Tela

    //criando tag com HTML
    const novoItem = document.createElement("li");

    //inserindo texto no li
    novoItem.textContent = `${nomeDigitado} disse: ${comentarioDigitado}`;

    //adiciona o li como filho da ul do HTML
    listaComentarios.appendChild(novoItem);


    //Limpeza dos campos
    inputNome.value = "";
    inputComentario.value = "";
});


