const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);
console.log('\n');
const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);
console.log('\n');
const objetoClienteJSON  = JSON.parse(clienteEmString)
console.log(objetoClienteJSON);
console.log(typeof objetoClienteJSON);