class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this._dependentes = new Array();
    }
    inserir(dependente) {
        this._dependentes.push(dependente);
    }
    remover(clienteCpf) {
        this._dependentes.splice(this._dependentes.findIndex(cliente => cliente.cpf === clienteCpf), 1);
    }
}
