class ClienteController {

    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputConta: HTMLInputElement;
    private inputSaldo: HTMLInputElement;
    private clientes: Clientes;
    private quantClientes: number = 0;

    constructor() {
        this.inputNome = <HTMLInputElement>document.querySelector("#nome");
        this.inputCpf = <HTMLInputElement>document.querySelector("#cpf");
        this.inputConta = <HTMLInputElement>document.querySelector("#conta");
        this.inputSaldo = <HTMLInputElement>document.querySelector("#saldo");
        this.clientes = new Clientes();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNome.value,
                        parseInt(this.inputCpf.value),
                        new Conta(this.inputConta.value,
                        parseFloat(this.inputSaldo.value)));

        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }

    listar() {
        this.clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }

    inserirClienteNoHTML(cliente: Cliente) {
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
            td.innerHTML = array[i]
            tr.append(td)
            i++;
        })

        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
        );
        tr.appendChild(botaoApagar);
        tbody.appendChild(tr);
    }


}