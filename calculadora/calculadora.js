function calculadora() {
    let num1 = parseFloat(document.getElementById("numberInput1").value);
    let num2 = parseFloat(document.getElementById("numberInput2").value);
    let operacao = document.getElementById("operationInput").value;
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Por favor, insira números válidos!";
    }
    else{
    switch (operacao) {
        case 'soma':
                resultado = num1 + num2;
                break;
            case 'subtracao':
                resultado = num1 - num2;
                break;
            case 'multiplicacao':
                resultado = num1 * num2;
                break;
            case 'divisao':
                if (num2 !== 0) {
                    resultado = num1 / num2;
                } else {
                    resultado = "Erro: Divisão por zero!";
                }
                break;
            default:
                resultado = "Operação inválida!";
    }
}
    document.getElementById("resultado").textContent = resultado;
}