
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { observer, inject } from 'mobx-react';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

@inject('rootStore')
@observer
export default class Login extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View>
                
                <Text> {this.props.rootStore.authStore.phoneNumber} </Text>
                <Button onPress={() => { Actions.Qpage() }}
                title='abc'/> 
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});