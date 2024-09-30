// Função para formatar números com separadores de milhar
function formatarNumero(valor) {
    return valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Função para atualizar o total e os resultados
function atualizarTotal() {
    // Obtendo valores dos inputs e convertendo para número
    let moeda5 = parseFloat(document.getElementById("moeda5").value) || 0;
    let moeda10 = parseFloat(document.getElementById("moeda10").value) || 0;
    let moeda25 = parseFloat(document.getElementById("moeda25").value) || 0;
    let moeda50 = parseFloat(document.getElementById("moeda50").value) || 0;
    let moeda1 = parseFloat(document.getElementById("moeda1").value) || 0;
    let nota2 = parseFloat(document.getElementById("nota2").value) || 0;
    let nota5 = parseFloat(document.getElementById("nota5").value) || 0;
    let nota10 = parseFloat(document.getElementById("nota10").value) || 0;
    let nota20 = parseFloat(document.getElementById("nota20").value) || 0;
    let nota50 = parseFloat(document.getElementById("nota50").value) || 0;
    let nota100 = parseFloat(document.getElementById("nota100").value) || 0;
    let nota200 = parseFloat(document.getElementById("nota200").value) || 0;

    // Calculando o total
    let totalValue = (moeda5 * 0.05) + (moeda10 * 0.10) + (moeda25 * 0.25) + (moeda50 * 0.50) + (moeda1 * 1.00) +
                      (nota2 * 2.00) + (nota5 * 5.00) + (nota10 * 10.00) + (nota20 * 20.00) +
                      (nota50 * 50.00) + (nota100 * 100.00) + (nota200 * 200.00);

    // Atualizando o total na tela
    document.getElementById("total").innerText = `Total: R$ ${formatarNumero(totalValue.toFixed(2))}`;

    // Atualizando os resultados de cada tipo de moeda e nota
    document.getElementById("resultadoMoeda5").innerText = `R$ ${formatarNumero((moeda5 * 0.05).toFixed(2))}`;
    document.getElementById("resultadoMoeda10").innerText = `R$ ${formatarNumero((moeda10 * 0.10).toFixed(2))}`;
    document.getElementById("resultadoMoeda25").innerText = `R$ ${formatarNumero((moeda25 * 0.25).toFixed(2))}`;
    document.getElementById("resultadoMoeda50").innerText = `R$ ${formatarNumero((moeda50 * 0.50).toFixed(2))}`;
    document.getElementById("resultadoMoeda1").innerText = `R$ ${formatarNumero((moeda1 * 1.00).toFixed(2))}`;
    document.getElementById("resultadoNota2").innerText = `R$ ${formatarNumero((nota2 * 2.00).toFixed(2))}`;
    document.getElementById("resultadoNota5").innerText = `R$ ${formatarNumero((nota5 * 5.00).toFixed(2))}`;
    document.getElementById("resultadoNota10").innerText = `R$ ${formatarNumero((nota10 * 10.00).toFixed(2))}`;
    document.getElementById("resultadoNota20").innerText = `R$ ${formatarNumero((nota20 * 20.00).toFixed(2))}`;
    document.getElementById("resultadoNota50").innerText = `R$ ${formatarNumero((nota50 * 50.00).toFixed(2))}`;
    document.getElementById("resultadoNota100").innerText = `R$ ${formatarNumero((nota100 * 100.00).toFixed(2))}`;
    document.getElementById("resultadoNota200").innerText = `R$ ${formatarNumero((nota200 * 200.00).toFixed(2))}`;
}

// Adiciona event listeners para chamar a função atualizarTotal sempre que os inputs mudarem
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', atualizarTotal);
});

// Chama a função para inicializar os valores na primeira carga
atualizarTotal();
