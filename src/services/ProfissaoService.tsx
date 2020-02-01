import Profissao from '../model/Profissao'


export default class ProfissaoService {
    obterProfissoes = () => {
        const profissoes: Profissao [] = [];

        profissoes.push(new Profissao(1, "Clérigo", 0, 0, 0));
        profissoes.push(new Profissao(2, "Paladino", 0, 0, 0));
        profissoes.push(new Profissao(3, "Guerreiro", 0, 0, 0));
        profissoes.push(new Profissao(4, "Mago", 0, 0, 0));
        profissoes.push(new Profissao(5, "Ladrão", 0, 0, 0));
        profissoes.push(new Profissao(6, "Caçador", 0, 0, 0));

        return profissoes;
    }
}