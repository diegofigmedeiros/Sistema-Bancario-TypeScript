class Clientes {
    constructor() {
        this._clientes = new Array();
    }
    listar() {
        return this._clientes;
    }
    pesquisar(clienteCpf) {
        return this._clientes.find(cliente => cliente.cpf === clienteCpf);
    }
    inserir(clienteNovo) {
        this._clientes.push(clienteNovo);
    }
    remover(clienteCpf) {
        this._clientes.splice(this._clientes.findIndex(cliente => cliente.cpf === clienteCpf), 1);
        /*
        
                let index: number;
                this._clientes.forEach(cliente => {
                    if (cliente.cpf === clienteCpf) {
                        index = this._clientes.indexOf(cliente);
                        this._clientes.splice(index, 1)
                    }
                })
        */
        /*
                const objetoCliente = this.pesquisar(clienteCpf)
                if (objetoCliente) {
                    const indexDoCliente = this._clientes.indexOf(objetoCliente);
                    if (indexDoCliente > -1) {
                        this._clientes.splice(indexDoCliente, 1)
                    }
                    else {
                        alert("Tem ninguem aq não ferinha")
                    }
                }
                else {
                    alert("Tem ninguem aq não fera")
                }
        */
    }
}
