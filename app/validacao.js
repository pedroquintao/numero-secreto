function verificaSeChuteEValido(chute) {
    const numero = +chute; //esse "+chute" tenta converter a a string recebida em inteiro

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += `
        <div>Este valor é inválido!</div>
        `;
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>O número deve estar entre ${menorValor} e ${maiorValor}!</div>
        `;
    }

    if(numeroFaladoEMenor(numero)) {
        elementoChute.innerHTML += `
        <div>O número é menor!</div>
        `;
    }

    if(numeroFaladoEMaior(numero)) {
        elementoChute.innerHTML += `
        <div>O número é maior!</div>
        `;
    }

    if(numeroFaladoEIgual(numero)) {
        document.body.innerHTML = `
        <h2>Parabens! Você Acertou!</h2>
        <h3>O numero secreto é ${numeroSecreto}</h3>`;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

function numeroFaladoEMenor(numero) {
    return numero > numeroSecreto;
}

function numeroFaladoEMaior(numero) {
    return numero < numeroSecreto;
}

function numeroFaladoEIgual(numero) {
    return numero === numeroSecreto;
}