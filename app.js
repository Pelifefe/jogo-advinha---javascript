function exibirTextoHtml(tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

function mensagemInicial() {
    exibirTextoHtml('h1', 'Jogo do número secreto!');
    exibirTextoHtml('p', 'Tente advinhar o número secreto entre 1 e 10.');
}

function reiniciar() {
    tentativas = 0;
    numeroSecreto = gerarNumeroAleatorio();
    mensagemInicial();
    document.getElementById('reiniciar').disabled = true;
    document.querySelector('input').value = '';
}

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    let msgNumero = 4 - tentativas;

    if (tentativas > 4) {
        exibirTextoHtml('h1', 'Que pena! Suas tentativas acabaram!');
        exibirTextoHtml('p', 'O número secreto era ' + numeroSecreto);
        document.getElementById('reiniciar').disabled = false;
        return;
    } else {
        tentativas++;
        if (chute == numeroSecreto) {
            exibirTextoHtml('h1', 'Parabéns! Você acertou!');
            exibirTextoHtml('p', 'O número secreto é ' + numeroSecreto);
            document.getElementById('reiniciar').disabled = false;
            return;
        } else {
            if(chute < numeroSecreto){
                exibirTextoHtml('h1', 'Número menor que o numero secreto!');
                exibirTextoHtml('p', 'Tente novamente! Número de tentativas restantes: ' + msgNumero);
            }else{
                exibirTextoHtml('h1', 'Número maior que o numero secreto!');
                exibirTextoHtml('p', 'Tente novamente! Número de tentativas restantes: ' + msgNumero);
            }
        }
    }
}
