import React from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';

const alunos = [
    { id: 1, nome: 'Lauan1', nota: 7.8 },
    { id: 2, nome: 'Lauan2', nota: 74.8 },
    { id: 3, nome: 'Lauan3', nota: 73.8 },
    { id: 4, nome: 'Lauan4', nota: 74.8 },
    { id: 5, nome: 'Lauan5', nota: 7.88 },
    { id: 6, nome: 'Lauan6', nota: 7.8 },
    { id: 7, nome: 'Lauan7', nota: 7.658 },
    { id: 8, nome: 'Lauan8', nota: 75.8 },
    { id: 9, nome: 'Lauan9', nota: 7.8 },
    { id: 10, nome: 'Lauan10', nota: 7.8 },
    { id: 11, nome: 'Lauan11', nota: 7.8 },
    { id: 12, nome: 'Lauan12', nota: 767.8 },
    { id: 13, nome: 'Lauan13', nota: 7.8 },
    { id: 14, nome: 'Lauan14', nota: 7.8 },
    { id: 15, nome: 'Lauan15', nota: 7.8 },
    { id: 16, nome: 'Lauan16', nota: 677.8 },
    { id: 17, nome: 'Lauan17', nota: 57.8 },
    { id: 18, nome: 'Lauan18', nota: 7.8 },
    { id: 19, nome: 'Lauan19', nota: 7.8 },
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',
    // Flex

    alignItems: 'center',
    flexDirection: 'row',
}


export const Aluno = props => 
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItems = ({ item }) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList 
                data={alunos} 
                renderItem={renderItems}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}