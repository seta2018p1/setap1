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
import RNFetchBlob from 'react-native-fetch-blob'
import RootStore from './store/rootStore';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


@inject('rootStore')
@observer
export default class MainPage extends Component {
  constructor(props) {
    super(props);
  
  }
  componentDidMount() {
    // this.props.rootStore.addItem("a");
    console.log(this.props);
    RNFetchBlob.fetch('GET', 'https://ancient-journey-47007.herokuapp.com/api/mongoDB', {
      Authorization: 'Bearer access-token...',
      // more headers  ..
    })
      // when response status code is 200
      .then((res) => {
        // the conversion is done in native code
        // let base64Str = res.base64()
        // the following conversions are done in js, it's SYNC
        let text = res.text()
        let json = res.json()
        this.setState({ data: res.data });
        console.log(res);
        alert(res.data);
      })
      // Status code is not 200
      .catch((errorMessage, statusCode) => {
        // error handling
        console.log(errorMessage);
      })
  }
  render() {

    return (
    
        <View style={styles.container}>
          <Text style={styles.welcome}>
            {this.props.rootStore.authStore.phoneNumber}
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
        </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
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