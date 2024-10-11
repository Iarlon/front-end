let produtos = [];

function adicionarProduto() {
    let nomeInput = document.getElementById("nomeProduto").value;
    let precoInput = parseFloat(document.getElementById("precoProduto").value);
    let quantidadeInput = parseInt(document.getElementById("quantidadeProduto").value);

    if (nomeInput === "" || isNaN(precoInput) || isNaN(quantidadeInput)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    let novoProduto = {
        nome: nomeInput,
        preco: precoInput,
        quantidade: quantidadeInput
    };

    produtos.push(novoProduto);

    document.getElementById("nomeProduto").value = '';
    document.getElementById("precoProduto").value = '';
    document.getElementById("quantidadeProduto").value = '';

    mostrarProdutos();
}

function mostrarProdutos() {
    let produtosHtml = "<h3>Lista de Produtos:</h3>";

    for (let i = 0; i < produtos.length; i++) {
        produtosHtml += `<span class="produto">${produtos[i].nome} - Preço: R$ ${produtos[i].preco.toFixed(2)} - Quantidade: ${produtos[i].quantidade}</span><br>`;
    }

    document.getElementById("produtosListados").innerHTML = produtosHtml;
}

function calcularValorEstoque(produtos) {
    let valorTotal = 0;

    for (let i = 0; i < produtos.length; i++) {
        valorTotal += produtos[i].preco * produtos[i].quantidade;
    }

    return valorTotal;
}

function calcularEstoque() {
    const valorTotalEstoque = calcularValorEstoque(produtos);
    document.getElementById("resultadoEstoque").innerHTML = `O valor total do estoque é: R$ ${valorTotalEstoque.toFixed(2)}`;
}

function resetarEstoque() {
    produtos = [];
    document.getElementById("produtosListados").innerHTML = '';
    document.getElementById("resultadoEstoque").innerHTML = '';
    document.getElementById("nomeProduto").value = '';
    document.getElementById("precoProduto").value = '';
    document.getElementById("quantidadeProduto").value = '';
}
