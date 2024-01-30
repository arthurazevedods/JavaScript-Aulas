//Juntar listas ordenadas
let {edFolha,edGalho} = require('./arrays')

function merge(lista1,lista2){
    let merged = []
    let index_1 = 0
    let index_2 = 0
    let index = 0
    while (index_1 < lista1.length && index_2 < lista2.length){
        let curr_livro1 = lista1[index_1]
        let curr_livro2 = lista2[index_2]

        if (curr_livro1.preco < curr_livro2.preco){
            merged[index] = curr_livro1
            index_1++
        }else{
            merged[index] = curr_livro2
            index_2++
        }

        index++
    }

    while(index_1 < lista1.length){
        merged[index] = lista1[index_1]
        index++
        index_1++
    }
    while(index_2 < lista2.length){
        merged[index] = lista2[index_2]
        index++
        index_2++
    }

    return merged
}

console.log(merge(edFolha,edGalho))
