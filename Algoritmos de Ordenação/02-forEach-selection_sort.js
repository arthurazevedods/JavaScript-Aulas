/*
O selection sort é um algoritmo de ordenação que organiza 
um vetor movendo repetidamente o menor (ou maior) elemento 
restante para sua posição final. Composto por dois laços 
(externo e interno), o laço externo controla o índice inicial,
aumentando-o a cada iteração, enquanto o interno percorre o 
vetor a partir desse índice externo + 1. Os elementos são 
comparados e trocados, se necessário, até que todo o vetor 
esteja ordenado.
*/
const livros = require('./listaLivros.json');
const menorValor = require('./01-menorValor.js');
console.log(livros);

function selectionSort(vetor, valor) {
    vetor.forEach((_, indice) => {
        let menor = menorValor(vetor, valor,indice)

        let livroAtual = vetor[indice];
        let livroMenorPreco = vetor[menor];

        vetor[indice] = livroMenorPreco
        vetor[menor] = livroAtual
    })
    return vetor
}

console.log('\n');
console.log(selectionSort(livros, 'preco'));