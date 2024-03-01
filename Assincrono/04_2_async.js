// Função assíncrona que retorna uma Promise
async function obterDadosAssincronos() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // Simulação de sucesso
            let sucesso = true; // Alterne para false para simular erro
            if (sucesso) {
                resolve('Dados recuperados com sucesso!');
            } else {
                // Simulação de erro
                reject("Ocorreu um erro."); 
            }
        }, 3000);
    });
}

// Usando async e await para lidar com a Promise
async function main() {
    console.log('Iniciando operação assíncrona...');
    try {
        const resultado = await obterDadosAssincronos();
        console.log('Resultado:', resultado);
        console.log('Operação assíncrona concluída com sucesso');
    } catch (erro) {
        console.error('Erro:', erro);
        console.log('Operação assíncrona concluída com erro');
    }
    
}

main();
