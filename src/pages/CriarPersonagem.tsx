import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonHeader,  IonTitle, IonToolbar, IonItem } from '@ionic/react';

import React from 'react';

import PersonalidadeService from '../services/PersonalidadeService'
import RacaService from '../services/RacaService'
import ProfissaoService from '../services/ProfissaoService'

import Personalidade from '../model/Personalidade'
import Raca from '../model/Raca';
import Profissao from '../model/Profissao'

export default class CriarPersonagem extends React.Component {
    personalidadeService: PersonalidadeService;
    racaService: RacaService;
    profissaoService: ProfissaoService;

    constructor(props: any) {
        super(props);
        this.personalidadeService = new PersonalidadeService();
        this.racaService = new RacaService();
        this.profissaoService = new ProfissaoService();
    }

    state = {
        personalidades: [],
        racas: [],
        profissoes: [],
        profissaoSelecionada: new Profissao(0, '', 0, 0, 0),
        personalidadeSelecionada: new Personalidade(0, '', 0, 0, 0),
        racaSelecionada: new Raca(0, '', 0, 0, 0)
    }

    componentDidMount() {
        const personalidades = this.personalidadeService.obterPersonalidades();
        const racas = this.racaService.obterRacas();
        const profissoes = this.profissaoService.obterProfissoes();

        const tamanhoPersonalidades = personalidades.length;
        const tamanhoProfissoes = profissoes.length;
        const tamanhoRacas = racas.length;

        this.setState({
            personalidades,
            racas,
            profissoes,
            personalidadeSelecionada: personalidades[Math.floor(Math.random() * tamanhoPersonalidades)],
            racaSelecionada: racas[Math.floor(Math.random() * tamanhoRacas)],
            profissaoSelecionada: profissoes[Math.floor(Math.random() * tamanhoProfissoes)],
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
                                        this.state.profissoes.map((profissao: Profissao, index) => {
                                            return (
                                                <IonSelectOption
                                                    key={index} 
                                                    selected={profissao.id == this.state.profissaoSelecionada.id    }
                                                    value={profissao}>{profissao.nome}</IonSelectOption>
                                                )
                                        })
                                    }
                                </IonSelect>
                            </IonCol>
                        </IonRow>

                        <IonRow style={{paddingTop: 20  }}>
                            <IonCol size="6"></IonCol>
                            <IonCol size="6" style={{padding: 0}}>
                                <IonGrid style={{padding: 0}}>
                                    <IonRow>
                                        <IonCol>
                                            <div style={{backgroundColor: '#AD1E19', textAlign: 'center', paddingTop: 10, paddingBottom: 10, margin: 1, color: 'white'}} >3</div>
                                        </IonCol>
                                        <IonCol>
                                            <div style={{backgroundColor: '#1D930C', textAlign: 'center', paddingTop: 10, paddingBottom: 10, margin: 1, color: 'white'}} >3</div>
                                        </IonCol>
                                        <IonCol>
                                        <div style={{backgroundColor: '#0A5E98', textAlign: 'center', paddingTop: 10, paddingBottom: 10, margin: 1, color: 'white'}} >3</div>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow style={{paddingTop: 20}}>
                                        <IonCol size="2">
                                            <div style={{background: 'black', width: '100%', height: '100%'}}></div>
                                        </IonCol>
                                        <IonCol>
                                            <div style={{float: 'left'}}>Dano</div>
                                        </IonCol>
                                        <IonCol>
                                            <div style={{float: 'right'}}>20</div>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol size="2">
                                            <div style={{background: 'black', width: '100%', height: '100%'}}></div>
                                        </IonCol>
                                        <IonCol>
                                            <div style={{float: 'left'}}>Dano</div>
                                        </IonCol>
                                        <IonCol>
                                            <div style={{float: 'right'}}>20</div>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol size="2">
                                            <div style={{background: 'black', width: '100%', height: '100%'}}></div>
                                        </IonCol>
                                        <IonCol>
                                            <div style={{float: 'left'}}>Dano</div>
                                        </IonCol>
                                        <IonCol>
                                            <div style={{float: 'right'}}>20</div>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol size="2">
                                            <div style={{background: 'black', width: '100%', height: '100%'}}></div>
                                        </IonCol>
                                        <IonCol>
                                            <div style={{float: 'left'}}>Dano</div>
                                        </IonCol>
                                        <IonCol>
                                            <div style={{float: 'right'}}>20</div>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol size="2">
                                            <div style={{background: 'black', width: '100%', height: '100%'}}></div>
                                        </IonCol>
                                        <IonCol>
                                            <div style={{float: 'left'}}>Dano</div>
                                        </IonCol>
                                        <IonCol>
                                            <div style={{float: 'right'}}>20</div>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                                
                            </IonCol>
                        
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        );
    }
    
};

