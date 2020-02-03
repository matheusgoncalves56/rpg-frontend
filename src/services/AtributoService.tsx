import Atributo from '../model/Atributo'

export default class AtributoService {

    obterAtributos = () => {
        const atributos = [];

        atributos.push(new Atributo(1, "Dano", 10, 0, false));
        atributos.push(new Atributo(2, "Ameaça", 0, 0, true));
        atributos.push(new Atributo(3, "Crítico", 0, 0, true));
        atributos.push(new Atributo(4, "Iniciativa", 0, 0, false));
        atributos.push(new Atributo(5, "Redução de dano", 0, 0, false));

        return atributos;
    }
}