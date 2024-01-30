const listaLivros = require('./ordenados.json');

function busca(array, left, right, valorBuscado) {
    const meio = Math.floor((left + right) / 2);
    const atual = array[meio];

    if (left > right) {
        return -1;
    }

    if (valorBuscado === atual.preco) {
        return meio;
    }

    if (valorBuscado < atual.preco) {
        return busca(array, left, meio - 1, valorBuscado);
    }

    if (valorBuscado > atual.preco) {
        return busca(array, meio + 1, right, valorBuscado);
    }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 30));



