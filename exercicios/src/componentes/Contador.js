import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Contador extends Component {
    state = {
        numero: this.props.numero
    }
    
    maisUm = () => {
        this.setState({numero: this.state.numero +1})
    }

    limpar = () => {
        this.setState({numero: 0})

    }

    render() {
        return (
            <View>
                <TouchableHighlight
                    onPress={this.maisUm}
                    onLongPress={this.limpar}
                >
                    <Text>Incrementar/Zerar</Text>    
                </TouchableHighlight>  
                <Text>{this.state.numero}</Text>
            </View>
        )
    }
}
