import Profissao from '../model/Profissao'


export default class ProfissaoService {
    obterProfissoes = () => {
        const profissoes: Profissao [] = [];

        profissoes.push(new Profissao(1, "Clérigo", 2, 1, 3));
        profissoes.push(new Profissao(2, "Paladino", 3, 1, 2));
        profissoes.push(new Profissao(3, "Guerreiro", 3, 2, 1));
        profissoes.push(new Profissao(4, "Mago", 1, 2, 3));
        profissoes.push(new Profissao(5, "Ladrão", 1, 3, 2));
        profissoes.push(new Profissao(6, "Caçador", 2, 3, 1));

        return profissoes;
    }
}