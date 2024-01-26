let numerosImpares = [1,3,5];
let numerosPares = [2,4,6];

let numeros = [numerosImpares, numerosPares];

console.log(numeros); //[ [ 1, 3, 5 ], [ 2, 4, 6 ] ]

numeros = [...numerosImpares, ...numerosPares];

console.log(numeros); //[ 1, 3, 5,  2, 4, 6  ]

const [num1,num2, ...outros] = [ 1, 3, 5,  2, 4, 6  ];

console.log(num1,num2,outros);//1 3 [ 5, 2, 4, 6 ]

const pessoa = {
    nome:"Honório",
    idade:"85"
};

const pessoaComNacionalidade1 = {
    pessoa,
    nacionalidade: "Brasileiro"
};
console.log(pessoaComNacionalidade1);
/*
{
  pessoa: { nome: 'Honório', idade: '85' },
  nacionalidade: 'Brasileiro'
}
*/

const pessoaComNacionalidade2 = {
    ...pessoa,
    nacionalidade: "Brasileiro"
};

console.log(pessoaComNacionalidade2);
/*
{ nome: 'Honório', idade: '85', nacionalidade: 'Brasileiro' }
*/