let tarefas = [];
function AdicionarTarefas(){
    let input = document.getElementById("tarefasInput").value;
    if (typeof input !== '') {
        if (tarefas.length >= 5) {
            console.log("está cheio, exclua alguma tarefa")
        }
        else{
            tarefas.push(input)
            console.log(`Tarefa adicionada: ${input}`);
            const selectConcluir = document.getElementById("tarefasConcluir");
            const option = document.createElement('option');
            option.value = tarefas.length - 1;
            option.textContent = input;
            selectConcluir.appendChild(option);
        }
    }
    document.getElementById("tarefasRestantes").textContent = tarefas.join(', ')
    document.getElementById("tarefasInput").value = '';

}

function concluir(){
    const select = document.getElementById("tarefasConcluir");
    const tarefaIndex = select.value;

    if (tarefaIndex !== '') {
        const tarefaConcluida = tarefas.splice(tarefaIndex, 1);
        console.log(`Tarefa concluída: ${tarefaConcluida}`);
        
        select.remove(select.selectedIndex); 
        
        document.getElementById("tarefasRestantes").textContent = tarefas.join(', '); 
    } else {
        console.log("Selecione uma tarefa para concluir.");
    }
}
function resetar() {
    tarefas = [];
    document.getElementById("tarefasRestantes").textContent = ''; 
    
    const selectConcluir = document.getElementById("tarefasConcluir");
    selectConcluir.innerHTML = '';
    console.log("Todas as tarefas foram resetadas.");
    
    document.getElementById("tarefasInput").value = ''; 
}