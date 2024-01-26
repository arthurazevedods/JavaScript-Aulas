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
console.log(livros);

function selectionSort(vetor){
    for (let indice = 0; indice < vetor.length; indice++) {
        let min = indice;
        for (let current = indice+1; current< vetor.length; current++){
            if(vetor[current].preco < vetor[min].preco){
                min = current;
            }
        }
        if(indice != min){
            let aux = vetor[indice];
            vetor[indice] = vetor[min];
            vetor[min] = aux;
        }
    }
    return vetor;
}

console.log('\n');
console.log(selectionSort(livros));