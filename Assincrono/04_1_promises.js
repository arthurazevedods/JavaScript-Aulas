// Função que retorna uma Promise
function obterDadosAssincronos() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // Simulação de sucesso
            let sucesso = true;
            if (sucesso) {
                resolve('Dados recuperados com sucesso!');
            } else {
                // Simulação de erro
                reject("Ocorreu um erro."); 
            }
        }, 2000);
    });
}

// Usando then e catch para lidar com a Promise
console.log('Iniciando operação assíncrona...');
obterDadosAssincronos()
    .then(function(resultado) {
        console.log('Resultado:', resultado);
    })
    .catch(function(erro) {
        console.error('Erro:', erro);
    });
console.log('Operação assíncrona em andamento...');
