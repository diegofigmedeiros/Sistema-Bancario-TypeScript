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
        if (this.clientes.pesquisar(parseInt(this.inputCpf.value)) === undefined) {
            let novoCliente = new Cliente(this.inputNome.value, parseInt(this.inputCpf.value), new Conta(this.inputConta.value, parseFloat(this.inputSaldo.value)));
            this.clientes.inserir(novoCliente);
            this.inserirClienteNoHTML(novoCliente);
        }
        else {
            alert("Cliente ja está inserido na lista");
        }
        this.limpar();
    }
    limpar() {
        this.inputNome.value = "";
        this.inputCpf.value = "";
        this.inputConta.value = "";
        this.inputSaldo.value = "";
    }
    inserirClienteNoHTML(cliente) {
        let i = 0;
        this.quantClientes++;
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        let tbody = document.querySelector('#tabelinha');
        th.innerHTML = this.quantClientes.toString();
        tr.append(th);
        let dadosCliente = cliente.toString();
        dadosCliente.forEach(() => {
            let td = document.createElement('td');
            td.innerHTML = dadosCliente[i];
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
