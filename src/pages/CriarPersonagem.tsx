import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonHeader,  IonTitle, IonToolbar } from '@ionic/react';

import React from 'react';

import PersonalidadeService from '../services/PersonalidadeService'
import Personalidade from '../model/Personalidade'

export default class CriarPersonagem extends React.Component {
    personalidadeService: PersonalidadeService;

    constructor(props: any) {
        super(props);
        this.personalidadeService = new PersonalidadeService();
    }

    state = {
        personalidades:  [],
        racas: [
            "Humano",
            "Elfo",
            "Anão"
        ],
        profissoes: [
            "Clérigo",
            "Paladino",
            "Guerreiro",
            "Mago",
            "Ladrão",
            "Caçador"
        ],
        personalidadeAleatoria: null,
        racaAleatoria: null,
        profissaoAleatoria: null,
        personalidadeSelecionada: new Personalidade(0, '', 0, 0, 0)
    }

    componentDidMount() {
        const personalidades = this.personalidadeService.obterPersonalidades();
        
        const tamanhoPersonalidades = personalidades.length;
        const tamanhoProfissoes = this.state.profissoes.length;
        const tamanhoRacas = this.state.racas.length;

        this.setState({
            personalidades,
            personalidadeSelecionada: personalidades[Math.floor(Math.random() * tamanhoPersonalidades)],
            profissaoAleatoria: Math.floor(Math.random() * tamanhoProfissoes),
            racaAleatoria: Math.floor(Math.random() * tamanhoRacas),
            
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
                                        this.state.racas.map((raca, index) => {
                                            return (
                                                <IonSelectOption
                                                    key={index} 
                                                    selected={index == this.state.racaAleatoria}
                                                    value={raca}>{raca}</IonSelectOption>
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

