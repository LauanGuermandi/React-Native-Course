import React from 'react';
import { View, Text } from 'react-native';

const font = { style: { fontSize: 30 }}

function filhosComProps (props) {
    return React.Children.map(props.children, 
        c => React.cloneElement(c, { ...props, ...c.props})
    )
}

export const Filho = props => 
    <View>
        <Text
        {...font}
        >
            Filho: {props.nome} {props.sobrenome}
        </Text>
    </View>

export const Pai = props =>
    <View>
        <Text {...font}>
            Pai: {props.nome} {props.sobrenome}
        </Text>
        {/* {props.children} */}

        {filhosComProps(props)}
    </View>

export const Avo = props =>
    <View>
        <Text {...font}>
            Avô: {props.nome} {props.sobrenome}
        </Text>
        <Pai nome='André' sobrenome={props.sobrenome}>
            <Filho nome='Davi'></Filho>
        </Pai>
        <Pai {...props} nome='Pedro'>
            <Filho nome='Joao'></Filho>
        </Pai>
    </View>
