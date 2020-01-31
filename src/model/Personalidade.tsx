export default class Personalidade {
    id: number;
    nome: string;
    corpo: number;
    sentidos: number;
    mente: number
    
    

    constructor (id: number, nome: string, corpo: number, sentidos: number, mente: number) {
        this.id = id;
        this.nome = nome;
        this.corpo = corpo;
        this.sentidos = sentidos;
        this.mente = mente;
    }
}