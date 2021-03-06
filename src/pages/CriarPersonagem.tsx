import { IonContent, IonPage, IonButton, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonHeader,  IonTitle, IonToolbar, IonItem } from '@ionic/react';

import React from 'react';

import PersonalidadeService from '../services/PersonalidadeService'
import RacaService from '../services/RacaService'
import ProfissaoService from '../services/ProfissaoService'
import AtributoService from '../services/AtributoService'

import Personalidade from '../model/Personalidade'
import Raca from '../model/Raca';
import Profissao from '../model/Profissao'
import Atributo from '../model/Atributo'

import icon_vida from '../assets/img/icon_vida.png'
import icon_mana from '../assets/img/icon_mana.png'
export default class CriarPersonagem extends React.Component {
    personalidadeService: PersonalidadeService;
    racaService: RacaService;
    profissaoService: ProfissaoService;
    atributoService: AtributoService;

    constructor(props: any) {
        super(props);
        this.personalidadeService = new PersonalidadeService();
        this.racaService = new RacaService();
        this.profissaoService = new ProfissaoService();
        this.atributoService = new AtributoService();
    }

    state = {
        personalidades: [],
        racas: [],
        profissoes: [],
        atributos: [],
        profissaoSelecionada: new Profissao(0, '', 0, 0, 0),
        personalidadeSelecionada: new Personalidade(0, '', 0, 0, 0),
        racaSelecionada: new Raca(0, '', 0, 0, 0),
        caracteristicaPrincipal: {
            corpo: 2,
            sentidos: 2,
            mente: 2
        }
    }

    componentDidMount() {
        const personalidades = this.personalidadeService.obterPersonalidades();
        const racas = this.racaService.obterRacas();
        const profissoes = this.profissaoService.obterProfissoes();

        const tamanhoPersonalidades = personalidades.length;
        const tamanhoProfissoes = profissoes.length;
        const tamanhoRacas = racas.length;

        const atributos = this.atributoService.obterAtributos();

            const personalidadeSelecionada = personalidades[Math.floor(Math.random() * tamanhoPersonalidades)];
            const racaSelecionada = racas[Math.floor(Math.random() * tamanhoRacas)];
            const profissaoSelecionada = profissoes[Math.floor(Math.random() * tamanhoProfissoes)];
        
            this.setState({
                personalidades,
                racas,
                profissoes,
                atributos,
                personalidadeSelecionada,
                racaSelecionada,
                profissaoSelecionada,
            })

        this.atualizarCaracteristicas(profissaoSelecionada, personalidadeSelecionada, racaSelecionada);
    }

    atualizarCaracteristicas = (profissaoSelecionada: Profissao, personalidadeSelecionada: Personalidade, racaSelecionada: Raca) => {
        const corpo = this.state.caracteristicaPrincipal.corpo 
            + profissaoSelecionada.corpo
            + personalidadeSelecionada.corpo
            + racaSelecionada.corpo;
        
        const mente = this.state.caracteristicaPrincipal.mente 
            + profissaoSelecionada.mente
            + personalidadeSelecionada.mente
            + racaSelecionada.mente;

        const sentidos = this.state.caracteristicaPrincipal.sentidos 
            + profissaoSelecionada.sentidos
            + personalidadeSelecionada.sentidos
            + racaSelecionada.sentidos;
        
        console.log(corpo)
        this.setState({caracteristicaPrincipal: {
            corpo, mente, sentidos
        }})
    }

    atualizarAtributos = () => {

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
                                    <IonRow style={{marginBottom: '10px'}}>
                                        <IonCol>
                                            <div style={{backgroundColor: '#AD1E19', textAlign: 'center', paddingTop: 10, paddingBottom: 10, margin: 1, color: 'white'}} >{this.state.caracteristicaPrincipal.corpo}</div>
                                        </IonCol>
                                        <IonCol>
                                            <div style={{backgroundColor: '#1D930C', textAlign: 'center', paddingTop: 10, paddingBottom: 10, margin: 1, color: 'white'}} >{this.state.caracteristicaPrincipal.sentidos}</div>
                                        </IonCol>
                                        <IonCol>
                                        <div style={{backgroundColor: '#0A5E98', textAlign: 'center', paddingTop: 10, paddingBottom: 10, margin: 1, color: 'white'}} >{this.state.caracteristicaPrincipal.mente}</div>
                                        </IonCol>
                                    </IonRow>   
                                    
                                    
                                    {
                                        this.state.atributos.map((atributo: Atributo, index) => {
                                            return (
                                                <IonRow key={index}>
                                                    <IonCol size="2">
                                                        <div style={{background: 'black', width: '16x', height: '16px'}}></div>
                                                    </IonCol>
                                                    <IonCol>
                                                        <div style={{float: 'left'}}>{atributo.nome}</div>
                                                    </IonCol>
                                                    <IonCol size="1">
                                                        <div style={{float: 'right'}}>{atributo.valor1}</div>
                                                    </IonCol>
                                                </IonRow>
                                            )
                                        })
                                    }
                                </IonGrid>
                                
                            </IonCol>
                        </IonRow>
                        <IonRow style={{paddingTop: '20px'}}>
                            <IonCol size="1">
                                <div style={{width: '100%', height: '20px'}}>
                                    <img src={icon_vida}></img>
                                </div>
                            </IonCol>
                            <IonCol >
                                <div style={{background: '#b61d1d', width: '100%', height: '18px', textAlign: 'center'}}>
                                    <p style={{margin: 0, paddingTop: '1px', color: 'white'}}>190/190</p>
                                </div>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size="1">
                                <div style={{width: '100%', height: '20px'}}>
                                    <img src={icon_mana}></img>
                                </div>
                            </IonCol>
                            <IonCol >
                                <div style={{background: '#464caf', width: '100%', height: '18px', textAlign: 'center'}}>
                                    <p style={{margin: 0, paddingTop: '1px', color: 'white'}}>100/100</p>
                                </div>
                            </IonCol>
                        </IonRow>
                        <IonRow style={{marginTop: '10px'}}>
                            <IonCol style={{padding: 0}}>
                                <IonButton expand="full">1</IonButton>
                            </IonCol>
                            <IonCol style={{padding: 0}}>
                                <IonButton expand="full"> 2</IonButton>
                            </IonCol>
                            <IonCol style={{padding: 0}}>
                                <IonButton expand="full">3</IonButton>
                            </IonCol>
                            <IonCol style={{padding: 0}}>
                                <IonButton expand="full">4</IonButton>
                            </IonCol>
                            <IonCol style={{padding: 0}}>
                                <IonButton expand="full">5</IonButton>
                            </IonCol>
                            <IonCol style={{padding: 0}}>
                                <IonButton expand="full">6</IonButton>
                            </IonCol>
                        </IonRow>
                        <IonRow style={{marginTop: '10px'}}>
                            <IonCol>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but al
                            </IonCol>

                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        );
    }
    
};

