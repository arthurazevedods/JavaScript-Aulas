const listaCPFs = [1111111, 22222, 3333];

const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1111222333"];

console.log(informacoesPessoa[1]);

const objetoPessoa = {
  idade: 32,
  nome: "Jose",
};

//console.log(objetoPessoa);

//console.log(objetoPessoa.idade);

const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
};

console.log(
    `O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`
);
  
console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);