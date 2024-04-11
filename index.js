function verificaValor() {
    let valorA = parseInt(document.getElementById('campoA').value);
    let valorB = parseInt(document.getElementById('campoB').value);
    if (valorB > valorA) {
        alert('O formulário é válido')
    } else {
        alert('O formulário é inválido')
    }
}