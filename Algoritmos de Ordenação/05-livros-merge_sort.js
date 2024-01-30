const listaDeLivros = require('./listaLivros.json')

function merge(left,right){
    let index_left = 0
    let index_right = 0
    const lista = []

    while(index_left < left.length && index_right < right.length){

        if(left[index_left].preco < right[index_right].preco){
            lista.push(left.shift())
            index_left++
        }else{
            lista.push(right.shift())
            index_right++
        }
    }
    return [...lista,...left,...right]
}

function mergeSort(vetor) {
    if (vetor.length > 1) {
        const mid = Math.floor(vetor.length / 2)
        const left = mergeSort(vetor.slice(0, mid))
        const right = mergeSort(vetor.slice(mid, vetor.length))

        vetor = merge(left, right)
    }

    return vetor
}

console.log(mergeSort(listaDeLivros))