/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { observer, inject } from 'mobx-react';
import {
    Scene,
    Router,
    Tabs,
    Stack,
    Actions,
    Drawer,
} from 'react-native-router-flux';
import RNFetchBlob from 'react-native-fetch-blob';

import Qpage from './screens/Qpage';
import Login from './screens/Login';
import RootStore from './store/rootStore';



@inject('rootStore')
@observer
export default class MainPage extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {

        return (
            <Router>
                <Stack key='root'>
                    <Scene
                        key='Login'
                        component={Login}
                        initial
                    />
                
                    <Scene
                        key='Qpage'
                       
                        component={Qpage}
                    />
                

                </Stack>

                
            </Router>



        );
    }
}
