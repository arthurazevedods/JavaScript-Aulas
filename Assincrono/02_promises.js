/*
As Promises são uma maneira de lidar com operações assíncronas em JavaScript de uma 
forma mais limpa e fácil de entender do que os callbacks aninhados. 
Elas representam um valor que pode estar disponível agora, no futuro, ou nunca.

A principal vantagem das Promises é que elas permitem que você encadeie chamadas de 
forma mais legível e evitem o problema de "callback hell", que pode ocorrer quando muitas
operações assíncronas são aninhadas dentro de callbacks.

Aqui está uma visão geral de como as Promises funcionam:

1. Estado: Uma Promise pode estar em um de três estados: pendente (pending), resolvida (fulfilled), ou rejeitada (rejected).

2. Resolução e Rejeição: Uma Promise é resolvida quando a operação assíncrona é concluída com sucesso. 
Se ocorrer um erro durante a operação, a Promise é rejeitada.

3. Encadeamento: As Promises podem ser encadeadas usando os métodos .then() e .catch(). 
O método .then() é usado para lidar com a resolução da Promise, enquanto o método .catch() é 
usado para lidar com a rejeição da Promise.
*/

// Função que retorna uma Promise
function fazerAlgoAsync() {
    return new Promise(function(resolve, reject) {
        // Simulação de uma operação assíncrona
        setTimeout(function() {
            let sucesso = true; // Alterne para false para simular erro
            if (sucesso) {
                console.log("Operação assíncrona concluída!");
                resolve(); // Resolve a Promise com sucesso
            } else {
                reject("Ocorreu um erro."); // Rejeita a Promise com uma mensagem de erro
            }
        }, 2000);
    });
}

// Chamada da função com encadeamento de Promises
console.log("Iniciando operação assíncrona...");
fazerAlgoAsync()
    .then(function() {
        console.log("Operação bem-sucedida!");
    })
    .catch(function(error) {
        console.error("Erro:", error);
    });
console.log("Operação assíncrona em andamento...");
