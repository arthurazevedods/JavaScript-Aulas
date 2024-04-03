const numero = 456;
const numeroString = "456";

console.log(numero == numeroString);

console.log(numero === numeroString);

console.log(numero + numeroString);

console.log(numero + parseInt(numeroString));

let telefone = 12341234;
telefone = 12341234;
console.log("O telefone é " + telefone.toString()); // o .toString() é uma forma para  fazer essa conversão de número para string, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado).toUpperCase()); // agora teremos uma string “true” em caixa alta