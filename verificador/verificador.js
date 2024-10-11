let pessoas = []
function AdicionarPessoa(){
    let nomeInput = document.getElementById("nomeInput").value;
    let idadeInput = parseInt(document.getElementById("idadeSelect").value);
    
    if (nomeInput === ""){
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }
    if (pessoas.length >= 5) {
        alert("Você já cadastrou 5 pessoas.");
        return;
    }

    let novaPessoa = {
            nome: nomeInput,
            idade: idadeInput
        };
    
    pessoas.push(novaPessoa);
        
    document.getElementById("nomeInput").value = '';
    document.getElementById("idadeSelect").value = '';
    mostrarPessoas();
    }
    
    function mostrarPessoas() {
        let resultadosHtml = "<h2>Pessoas cadastradas com mais de 18 anos:</h2>";
    
        for (let i = 0; i < pessoas.length; i++) {
            if (pessoas[i].idade > 18) {
                resultadosHtml += `<span class="pessoa">${pessoas[i].nome} - Idade: ${pessoas[i].idade}</span>`;
            }
        }
    
        document.getElementById("resultados").innerHTML = resultadosHtml;
    }

function resetar() {
    pessoas = []
    document.getElementById("notasTodas").textContent = '';
    document.getElementById("nomeInput").value = '';
    document.getElementById("idadeSelect").value = '';
    }