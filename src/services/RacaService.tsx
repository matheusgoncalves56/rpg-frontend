import Raca from '../model/Raca'

export default class RacaService {
    obterRacas = () => {
        const racas: Raca [] = [];
        
        racas.push(new Raca(1, "Humano"));
        racas.push(new Raca(2, "Elfo"));
        racas.push(new Raca(3, "Anão"));
        
        return racas;
    }
}