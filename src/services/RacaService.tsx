import Raca from '../model/Raca'

export default class RacaService {
    obterRacas = () => {
        const racas: Raca [] = [];
        
        racas.push(new Raca(1, "Humano", 0, 0, 1));
        racas.push(new Raca(2, "Elfo", 0, 1, 0));
        racas.push(new Raca(3, "Anão", 1, 0, 0));
        
        return racas;
    }
}