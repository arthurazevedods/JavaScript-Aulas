/*
async é uma palavra-chave em JavaScript que é usada para definir funções assíncronas. 

Quando você marca uma função como async, ela sempre retorna uma Promise. 
Isso permite que você use o await dentro da função para esperar que outras Promises 
sejam resolvidas ou rejeitadas. O await suspende a execução da função assíncrona até que a Promise 
seja resolvida, permitindo que você escreva um código mais síncrono em uma função assíncrona.

Ao usar async e await, você pode escrever código assíncrono de uma maneira que parece síncrona, 
o que pode tornar o código mais legível e fácil de entender, especialmente em casos onde há múltiplas
operações assíncronas sequenciais.
*/


// Função assíncrona que simula uma operação demorada
async function minhaFuncaoAssincrona() {
    // Simula uma pausa de 2 segundos
    await new Promise(resolve => setTimeout(resolve, 2000));
    return 'Dados importantes aqui!';
}

// Chamando a função assíncrona
async function main() {
    console.log('Iniciando...');
    try {
        const resultado = await minhaFuncaoAssincrona();
        console.log('Resultado:', resultado);
    } catch (erro) {
        console.error('Erro:', erro);
    }
    console.log('Concluído.');
}

main();


/*
A principal diferença entre usar then/catch e async/await é que o await permite que você escreva 
um código que parece mais síncrono, enquanto o uso de then e catch pode levar a um estilo de 
código mais encadeado.
*/