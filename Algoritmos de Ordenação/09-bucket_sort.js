const listaLivros = require('./listaLivros.json');
const insertionSort = require('./03-insertion_sort.js');

function bucketSort(array, numBaldes = 5) {
    if (array.length === 0) {
        return array;
    }

    // Determinar os limites mínimo e máximo
    const min = Math.min(...array.map(item => item.preco));
    const max = Math.max(...array.map(item => item.preco));

    // Criar os baldes
    const intervalo = (max - min) / numBaldes;
    const baldes = Array.from({ length: numBaldes }, () => []);

    // Distribuir os elementos nos baldes
    for (const item of array) {
        const indice = Math.floor((item.preco - min) / intervalo);
        if (indice === numBaldes) { // Garante que o máximo vá para o último balde
            baldes[numBaldes - 1].push(item);
        } else {
            baldes[indice].push(item);
        }
    }

    // Ordenar cada balde e combinar os resultados
    return baldes.reduce((ordenado, balde) => {
        return ordenado.concat(insertionSort(balde, 'preco '));
    }, []);
}

console.log(bucketSort(listaLivros));
