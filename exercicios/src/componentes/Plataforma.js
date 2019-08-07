import React, { Component } from 'react';
import { Button, Alert, ToastAndroid, Platform } from 'react-native';

export default props => {
    const notificar = msg => {
        if(Platform.os === 'android'){ // ios
            ToastAndroid.show(msg, ToastAndroid.LONG);
        }else{
            Alert.alert('Informação', msg);
        }
    }

    return (
        <Button title="Plataforma?"
            onPress={() => notificar('Parabéns!')}
        ></Button>
    )
}