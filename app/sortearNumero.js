const numeroSecreto = gerarNumeroSecreto();

function gerarNumeroSecreto() {
    return parseInt(Math.random() * 100)
}

console.log('%csortearNumero.js line:7 numeroSecreto', 'color: #007acc;', numeroSecreto);