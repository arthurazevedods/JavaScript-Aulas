const pessoa = {
    nome: "Luana",
    profissao:"Juíza"
};

console.log(pessoa.nome);
console.log(pessoa.telefone);

pessoa.telefone = '11 999990000';

console.log(pessoa.telefone);
pessoa.nome = 'Luana Andrade';

console.log(pessoa);

const pessoa = {
    nome: "Pedro",
};
//não pode reatribuir um valor a uma constante
//é diferente de mudar um atributo de um objeto constante
//pessoa = novaPessoa;