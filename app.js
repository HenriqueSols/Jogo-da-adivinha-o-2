// let titulo = document.querySelector('hi');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p')
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirTextoNaTela(tag, Texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = Texto;
}

exibirTextoNaTela('h1','Jogo do número secreto')
exibirTextoNaTela('p', 'E')

function verificarChute() {
    console.log('O Botão foi clicado!');
}