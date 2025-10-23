function exibirTextoNaTela(tag, Texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = Texto;
}

exibirTextoNaTela('h1','Jogo do número secreto')
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')

function verificarChute() {
    console.log('O Botão foi clicado!');
}

function gerarNúmeroAleatorio() {
    Math.random()
}
