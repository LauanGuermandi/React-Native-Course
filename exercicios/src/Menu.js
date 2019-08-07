import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Inverter, { MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador';
import Plataforma from './componentes/Plataforma';
import ValidarProps from './componentes/ValidarProps';
import Evento from './componentes/Evento';
import { Avo } from './componentes/ComunicacaoDireta';
import TextoSincronizado from './componentes/ComunicacaoIndireta';
import ListaFlex from './componentes/ListaFlex';
import Flex from './componentes/Flex'

export default createDrawerNavigator({
    Flex: {
        screen: Flex
    },
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: { title: 'Lista de alunos'}
    },
    TextoSincronizado: {
        screen: TextoSincronizado
    },
    Avo: {
        screen: () => <Avo nome='Joao' sobrenome='Silva'></Avo>
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: () => {
        return <ValidarProps ano={19}/>
    },
    Plataforma: {
        screen: Plataforma
    },
    Contador: {
        screen: () => <Contador numero={8} />,
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: {
            title: "Mega Sena"
        }
    }, 
    Inverter: {
        screen: () => <Inverter texto="React native" />
    }
}, {drawerWidth: 300})