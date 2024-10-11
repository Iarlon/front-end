let aluno = {
nome: "",
notas: [],
media: function() {
    let soma = 0;
    for (let i = 0; i < this.notas.length; i++) {
        soma += this.notas[i];
    }
    return soma / this.notas.length;
}
}
function AdicionarInf(){
    let nomeInput = document.getElementById("nomeInput");
    aluno.nome = nomeInput.value;
    document.getElementById("nomeAluno").textContent = aluno.nome;

    let nota = parseFloat(document.getElementById("selectNota").value);

    if (!isNaN(nota)) {
        if (aluno.notas.length >= 3) {
            console.log("Está cheio, exclua alguma tarefa");
            alert("Você já adicionou 3 notas. Exclua uma antes de adicionar outra.");
        } else {
            aluno.notas.push(nota);
            console.log(`Nota adicionada: ${nota}`);
            document.getElementById("notasTodas").textContent = aluno.notas.join(', ');

            let media = aluno.media();
            document.getElementById("mediaNota").textContent = media.toFixed(2);
        }
    document.getElementById("selectNota").value = '';
}
}

function resetar() {
    aluno.nome = "";
    aluno.notas = [];
    document.getElementById("notasTodas").textContent = '';
    document.getElementById("nomeInput").value = '';
    document.getElementById("selectNota").value = '';
}