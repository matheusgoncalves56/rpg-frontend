import Personalidade from '../model/Personalidade'

export default class PersonalidadeService {
    obterPersonalidades = () => {
        const personalidades: Personalidade [] = [];
        
        personalidades.push(new Personalidade(1, "Atleta", 3, 0, 0));
        personalidades.push(new Personalidade(2, "Líder de torcida", 1, 2, 0));
        personalidades.push(new Personalidade(3, "Surfista", 2, 1, 0));
        personalidades.push(new Personalidade(4, "Riquinho", 0, 3, 0));
        personalidades.push(new Personalidade(5, "Roqueiro", 2, 0, 1));
        personalidades.push(new Personalidade(6, "Gótico", 0, 2, 1));
        personalidades.push(new Personalidade(7, "Nerd", 0, 0, 3));
        personalidades.push(new Personalidade(8, "Hipster", 1, 1, 1));

        return personalidades;
    }
}