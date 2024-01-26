const livros = require('./listaLivros.json');

function menorValor(vetor,valor,posInicial){
    let menor = posInicial;
    for (let atual = posInicial; atual < vetor.length; atual++) {
        if (vetor[atual][valor] < vetor[menor][valor]) {
            menor = atual
        }
    }
    return menor
}

let maisBarato = menorValor(livros,'preco',0);
console.log(`o livro mais barato custa ${livros[maisBarato].preco} e o título é ${livros[maisBarato].titulo}`)

module.exports = menorValor;