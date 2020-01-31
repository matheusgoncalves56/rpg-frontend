import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonHeader,  IonTitle, IonToolbar } from '@ionic/react';

import React from 'react';

import PersonalidadeService from '../services/PersonalidadeService'
import RacaService from '../services/RacaService'

import Personalidade from '../model/Personalidade'
import Raca from '../model/Raca';

export default class CriarPersonagem extends React.Component {
    personalidadeService: PersonalidadeService;
    racaService: RacaService;

    constructor(props: any) {
        super(props);
        this.personalidadeService = new PersonalidadeService();
        this.racaService = new RacaService();
    }

    state = {
        personalidades: [],
        racas: [],
        profissoes: [
            "Clérigo",
            "Paladino",
            "Guerreiro",
            "Mago",
            "Ladrão",
            "Caçador"
        ],
        profissaoAleatoria: null,
        personalidadeSelecionada: new Personalidade(0, '', 0, 0, 0),
        racaSelecionada: new Raca(0, '')
    }

    componentDidMount() {
        const personalidades = this.personalidadeService.obterPersonalidades();
        const racas = this.racaService.obterRacas();

        const tamanhoPersonalidades = personalidades.length;
        const tamanhoProfissoes = this.state.profissoes.length;
        const tamanhoRacas = racas.length;

        this.setState({
            personalidades,
            racas,
            personalidadeSelecionada: personalidades[Math.floor(Math.random() * tamanhoPersonalidades)],
            racaSelecionada: racas[Math.floor(Math.random() * tamanhoRacas)],
            profissaoAleatoria: Math.floor(Math.random() * tamanhoProfissoes),
            
        })
    }

    render(){
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Criar Personagem</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonGrid>
                        <IonRow>
                            <IonCol size="4">
                                <IonSelect onIonChange={(event) => {
                                    console.log()
                                }}>
                                { this.state.personalidades.length > 0 &&
                                        this.state.personalidades.map((personalidade: Personalidade, index) => {
                                            return (
                                                <IonSelectOption 
                                                    key={index}
                                                    selected={personalidade.id === this.state.personalidadeSelecionada.id}
                                                    value={personalidade}>{personalidade.nome}</IonSelectOption>
                                                )
                                        })
                                    }
                                </IonSelect>
                            </IonCol>
                            <IonCol size="4">
                                <IonSelect>
                                    {
                                        this.state.racas.map((raca: Raca, index) => {
                                            return (
                                                <IonSelectOption
                                                    key={index} 
                                                    selected={raca.id === this.state.racaSelecionada.id}
                                                    value={raca}>{raca.nome}</IonSelectOption>
                                                )
                                        })
                                    }
                                </IonSelect>
                            </IonCol>
                            <IonCol size="4">
                                <IonSelect onIonChange={(event) => {
                                    console.log(event)
                                }}>
                                    {
                                        this.state.profissoes.map((profissao, index) => {
                                            return (
                                                <IonSelectOption
                                                    key={index} 
                                                    selected={index == this.state.profissaoAleatoria    }
                                                    value={profissao}>{profissao}</IonSelectOption>
                                                )
                                        })
                                    }
                                </IonSelect>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        );
    }
    
};

