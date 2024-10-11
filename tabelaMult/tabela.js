function gerarTabelaMultiplicacao() {
    const numeroInput = document.getElementById("numeroInput").value;
    const numero = parseInt(numeroInput);
    
    if (numero <= 0) {
        console.log("Por favor, insira um número positivo.");
    }

    let resultadosHtml = `<h2>Tabela de multiplicação de ${numero}:</h2>`;
    
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        resultadosHtml += `<span class="resultado">${numero} x ${i} = ${resultado}</span>`;
    }
    document.getElementById("tabelaMultiplicacao").innerHTML = resultadosHtml;
}
