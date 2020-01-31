import Personalidade from '../model/Personalidade'

export default class PersonalidadeService {
    obterPersonalidades = () => {
        const personalidades: Personalidade [] = [];
        
        personalidades.push(new Personalidade(1, "Atleta", 0, 0, 0));
        personalidades.push(new Personalidade(2, "Líder de torcida", 0, 0, 0));
        personalidades.push(new Personalidade(3, "Surfista", 0, 0, 0));
        personalidades.push(new Personalidade(4, "Riquinho", 0, 0, 0));
        personalidades.push(new Personalidade(5, "Roqueiro", 0, 0, 0));
        personalidades.push(new Personalidade(6, "Gótico", 0, 0, 0));
        personalidades.push(new Personalidade(7, "Nerd", 0, 0, 0));
        personalidades.push(new Personalidade(8, "Hipster", 0, 0, 0));

        return personalidades;
    }
}