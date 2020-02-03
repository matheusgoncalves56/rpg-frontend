export default class Atributo {
    id: number;
    nome: string;
    valor1: number;
    valor2: number;
    porcentagem: boolean;


    constructor(id: number, nome: string, valor1: number, valor2: number, porcentagem: boolean) {
        this.id = id;
        this.nome = nome;
        this.valor1 = valor1;
        this.valor2 = valor2;
        this.porcentagem = porcentagem;
    }
}