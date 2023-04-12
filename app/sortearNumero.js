
const menorValor = 1;

const maiorValor = 100;

const numeroSecreto = gerarNumeroSecreto();

console.log('%csortearNumero.js line:8 numeroSecreto', 'color: #007acc;', numeroSecreto);

function gerarNumeroSecreto() {
    return parseInt(Math.random() * maiorValor + 1);
}


const elementoMenorValor = document.querySelector('#menor-valor');
elementoMenorValor.innerText = menorValor;

const elementoMaiorValor = document.querySelector('#maior-valor');
elementoMaiorValor.innerText = maiorValor;

document.querySelector('#maior-valor').innerText = maiorValor;