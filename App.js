/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Platform, Linking, View, Alert, ActivityIndicator } from 'react-native';
import { Provider } from 'mobx-react';
import MainPage from './src/MainPage';
import RootStore from './src/store/rootStore';


export default class App extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = ({
      data: null,
    });
  }

  render() {
    return (
      <Provider rootStore={new RootStore()}>
         <MainPage />
      </Provider>
    );
  }
}

