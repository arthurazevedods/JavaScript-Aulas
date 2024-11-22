/**
 * O Merge Sort segue o paradigma de "dividir para conquistar", 
 * dividindo o array em partes menores, ordenando-as, 
 * e então mesclando os resultados ordenados
 */

const listaLivros = require('./listaLivros.json');

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const meio = Math.floor(array.length / 2);
    const parteEsquerda = mergeSort(array.slice(0, meio));
    const parteDireita = mergeSort(array.slice(meio));

    return mescla(parteEsquerda, parteDireita);
}

function mescla(esquerda, direita) {
    let resultado = [];
    let indexEsquerda = 0;
    let indexDireita = 0;

    while (indexEsquerda < esquerda.length && indexDireita < direita.length) {
        if (esquerda[indexEsquerda].preco < direita[indexDireita].preco) {
            resultado.push(esquerda[indexEsquerda]);
            indexEsquerda++;
        } else {
            resultado.push(direita[indexDireita]);
            indexDireita++;
        }
    }

    // Adiciona os itens restantes de cada lado
    return resultado.concat(esquerda.slice(indexEsquerda)).concat(direita.slice(indexDireita));
}

console.log(mergeSort(listaLivros));
