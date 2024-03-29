import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Inverter, { MegaSena } from './componentes/Multi'

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.f20}>Lauan!</Text>
        <Simples texto="Fexivel"></Simples>
        <ParImpar numero="32"></ParImpar>
        <Inverter texto="lauan"></Inverter>
        <MegaSena numeros="6"></MegaSena>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  f20: {
    fontSize: 40
  }
});