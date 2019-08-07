import React from 'react';
import {Text} from 'react-native';
import Padrao from '../estilo/Padrao';

export const Inverter = props => {
    const inv = props.texto.split('').reverse().join('');
    return <Text style={Padrao.ex}>{inv}</Text>
}


export const MegaSena = props => {
    const [min, max] = [1, 60]
    const numero = Array(props.numeros || 6).fill(0);

    for(let i = 0; i < numero.length; i++){
        let novo = 0;

        while (numero.includes(novo)){
            novo = Math.floor(Math.random() * (max - min +1) + min);
        }
        numero[i] = novo;

        numero.sort((a, b) => a-b)
        return <Text style={Padrao.ex}>{numero.join(', ')}</Text>
    }
}


export default Inverter;