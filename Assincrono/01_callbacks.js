/*
A programação assíncrona é fundamental em JavaScript, especialmente para lidar com operações que 
podem levar tempo, como fazer solicitações de rede, ler arquivos do sistema, ou interagir 
com bancos de dados.

Um callback é uma função que é passada como argumento para outra função e é executada após a 
conclusão de uma operação assíncrona ou de outro tipo de evento.
*/

// Função que recebe um callback como argumento
function fazerAlgoAsync(callback) {
    // Simulação de uma operação assíncrona
    setTimeout(function () {
        console.log("Operação assíncrona concluída!");
        // Chama o callback após a operação assíncrona
        callback();
    }, 2000);
}

// Função de callback
function meuCallback() {
    console.log("Callback chamado após a conclusão da operação assíncrona.");
}

// Chamando a função e passando o callback
console.log("Iniciando operação assíncrona...");
fazerAlgoAsync(meuCallback);
console.log("Operação assíncrona em andamento...");
