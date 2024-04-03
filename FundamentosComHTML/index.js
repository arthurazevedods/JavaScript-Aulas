let titulo = document.querySelector('h1');
let botao = document.querySelector('.btnMudarTitulo');


let botao2 = document.querySelector('.botao2');

botao2.addEventListener('click',()=>{
    let contador = document.querySelector('h2');
    contador.innerHTML = parseInt(contador.innerHTML)+1;
})

botao.addEventListener('click', ()=>{
    titulo.innerHTML = 'Olá, 305';
});