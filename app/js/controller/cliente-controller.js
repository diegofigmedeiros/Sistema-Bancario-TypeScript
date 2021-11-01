class ClienteController {
    constructor() {
        this.quantClientes = 0;
        this.inputNome = document.querySelector("#nome");
        this.inputCpf = document.querySelector("#cpf");
        this.inputConta = document.querySelector("#conta");
        this.inputSaldo = document.querySelector("#saldo");
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNome.value, parseInt(this.inputCpf.value), new Conta(this.inputConta.value, parseFloat(this.inputSaldo.value)));
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }
    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    inserirClienteNoHTML(cliente) {
        this.quantClientes++;
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        let tbody = document.querySelector('#tabelinha');
        let i = 0;
        let array = cliente.toString();
        console.log(array);
        console.log(this.quantClientes.toString());
        th.innerHTML = this.quantClientes.toString();
        tr.append(th);
        array.forEach(elemento => {
            let td = document.createElement('td');
            td.innerHTML = array[i];
            tr.append(td);
            i++;
        });
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        tr.appendChild(botaoApagar);
        tbody.appendChild(tr);
    }
}
