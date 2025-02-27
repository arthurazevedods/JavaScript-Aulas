/**
 * São estruturas que fazem bom uso das closures.
 */

function ModSomaSub(){
    var x = 0;
    function somaUm(){
        x++;
        console.log(x);
    }
    function subtraiUm(){
        x--;
        console.log(x);
    }
    return{
        somaUm: somaUm, subtraiUm:subtraiUm
    }
}

var teste = ModSomaSub();
teste.somaUm(); //1
teste.somaUm(); //2
teste.somaUm(); //3
teste.subtraiUm(); //2
teste.subtraiUm(); //1
teste.somaUm(); //2