const livros = require('./listaLivros.json');
console.log(livros);

function troca(vetor, analise) {
    let itemAnalise = vetor[analise];
    let itemAnterior = vetor[analise - 1];

    vetor[analise] = itemAnterior
    vetor[analise - 1] = itemAnalise
}

function insertionSort(vetor) {
    for (let atual = 0; atual < vetor.length; atual++) {
        let analise = atual;
        while (analise > 0 && vetor[analise].preco < vetor[analise - 1].preco) {
            troca(vetor, analise);
            analise--
        }
    }
    return vetor
}

console.log(insertionSort(livros));