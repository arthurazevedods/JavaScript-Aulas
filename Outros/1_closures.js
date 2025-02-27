/**
 * Closures
 * É quando uma função é capaz de lembrar e 
 * acessar seu escopo léxico mesmo quando
 * executado fora desse escopo
 */

var a = 2;
function soma(){
    var b = 3;
    return a + b
}

console.log(soma())

/**
 * Neste caso temos 2 escopos, o global e o da função soma.
 * A engine ao executar soma acha somente var b, então, 
 * ela "sai" a procura de var a, busca feita no escopo externo.
 * CLOSURES É A FORMA CORRETA COM QUE AS VARIÁVEIS DENTRO DE UMA
 * FUNÇÃO SEJAM PRIVADAS E PERSISTENTES
 * ver closures_final.js
 */