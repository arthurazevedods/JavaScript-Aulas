/*
O insertion sort é um algoritmo de ordenação que 
percorre o vetor e "insere" cada elemento na posição correta,
garantindo que os elementos à esquerda estejam sempre ordenados.
Ele funciona comparando cada elemento com os elementos à sua 
esquerda e movendo-o para a posição correta dentro do subvetor 
ordenado. O processo continua até que todos os elementos estejam 
ordenados. É um algoritmo eficiente para pequenos conjuntos de dados.
*/
const livros = require('./listaLivros.json');
console.log(livros);

function insertionSort(vetor,valor) {

    for (let i = 1; i < vetor.length; i++) {
        let current = vetor[i];
        let j = i - 1;
        while ((j > -1) && (current[valor] < vetor[j][valor])) {
            vetor[j + 1] = vetor[j];
            j--;
        }
        vetor[j + 1] = current;
    }
    return vetor;
}

console.log('\n');
console.log(insertionSort(livros,'preco '));