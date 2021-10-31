let contaController = new ContaController();
contaController.listar();

const Con_c1 = new Conta('1', 100);
const Con_p1 = new Poupanca('2', 100);
const Con_cb1 = new ContaBonificada('3', 0);
const Con_clientes = new Clientes();
const Con_cliente1 = new Cliente("jose",213, Con_c1);
const Con_cliente2 = new Cliente("maria",142, Con_p1);
const Con_cliente3 = new Cliente("joao", 924, Con_cb1);

Con_clientes.inserir(Con_cliente1);
Con_clientes.inserir(Con_cliente2);
Con_clientes.inserir(Con_cliente3);
console.log(Con_clientes.listar())
console.log(Con_clientes.pesquisar(142));
Con_clientes.remover(142)
console.log(Con_clientes.listar())

console.log('Conta: ' + Con_c1.saldo);

Con_p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + Con_p1.saldo);

Con_cb1.creditar(100);
console.log('Conta Bonificada: ' + Con_cb1.saldo);



