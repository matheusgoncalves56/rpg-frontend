import Profissao from '../model/Profissao'


export default class ProfissaoService {
    obterRacas = () => {
        const racas: Profissao [] = [];
        
        racas.push(new Profissao(1, "Humano", 0, 0, 0));
        racas.push(new Profissao(2, "Elfo", 0, 0, 0));
        racas.push(new Profissao(3, "Anão", 0, 0, 0));
        
        return racas;
    }
}