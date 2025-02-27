/*
 * CLOSURES É A FORMA CORRETA COM QUE AS VARIÁVEIS DENTRO DE UMA
 * FUNÇÃO SEJAM PRIVADAS E PERSISTENTES
 */

/**
 * pai() atribui filho() como retorno para var contador
 * a função filho tem uma referência ao escopo pai,
 * e essa referência se chama closure
 *
 * Pelo fato dessas variáveis serem persistentes,
 * o valor de x é incrementado a cada chamada.
 *
 * Persistência: é a capacidade de um objeto de
 * sobreviver fora dos limites da aplicação que o criou
 */
function pai(){
    var x = 1
    
    function filho(){
        console.log(x);
        x++   
    }
    return filho;
}
var contador = pai();

contador(); //1
contador(); //2