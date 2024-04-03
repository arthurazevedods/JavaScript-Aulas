let mundo = document.querySelector('h1');
let botao = document.querySelector('button')

console.log('aqui é o console');

botao.addEventListener('click', () =>{
    mundo.innerHTML = 'Olá, 305'
})


let h2 = document.querySelector('h2');
let botao2 = document.querySelector('.botao2');

botao2.addEventListener('click', () =>{
    let valor = parseInt(h2.innerHTML);
    if(valor == 9){
        botao2.innerHTML = 'Multiplicar por 2'
    }
    if(valor > 9){
        h2.innerHTML = valor * 2;
    }else{
        h2.innerHTML = valor + 1;
    }

    

});
