class Cliente {

    private _nome: string;
    private _cpf: number;
    private _conta: Conta;

    constructor(nome: string, cpf: number, conta: Conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get cpf(): number {
        return this._cpf;
    }

    set cpf(value: number) {
        this._cpf = value;
    }

    get conta(): Conta {
        return this._conta;
    }

    set conta(value: Conta) {
        this._conta = value;
    }

    toString(): Array<any> {
        return [this.nome, this.cpf, this.conta.numero, this.conta.saldo]
    }
}