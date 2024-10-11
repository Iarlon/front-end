function palindromo() {
    let input = document.getElementById("palindromoInput").value;
    let textoLow = input.toLowerCase();
    let textoInvertido = textoLow.split('').reverse().join('');
    let resultado;

    if (textoLow === textoInvertido) {
        resultado = "É um palíndromo!"
    }
    if (textoLow !== textoInvertido) {
        resultado = "Não é um palíndromo"
    }
    document.getElementById("resultado").textContent = resultado

}