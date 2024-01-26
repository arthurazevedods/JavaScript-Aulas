const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    saldo:200,
    efetuaPagamento: function (valor){
        if (valor > this.saldo){
            console.log(`Saldo: ${this.saldo}`);
            console.log(`Valor do Pagamento: ${valor}`);
            console.log("Saldo Insuficiente\n")
        }else{
            this.saldo -= valor;
            console.log("Pagamento realizado");
            console.log(`Novo saldo: ${this.saldo}\n`);
        }
    }
};

cliente.efetuaPagamento(250);
cliente.efetuaPagamento(120);