import { observable, action } from 'mobx';
import firebase from 'react-native-firebase';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { Actions } from 'react-native-router-flux';
export default class AuthStore {


    constructor(rootStore) {
        this.rootStore = rootStore;
        // this.chatStore = rootStore.chatStore;
        // console.log(rootStore.chatStore);
    }

    @observable phoneNumber = 'a';
    @observable user = {};
    
    onLoginOrRegister() {
        console.log("entered!");
        
        GoogleSignin.signIn()
            .then((data) => {
                // Create a new Firebase credential with the token
                const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
                // Login with the credential
                return firebase.auth().signInAndRetrieveDataWithCredential(credential);
                
            })
            .then((user) => {
                console.log(user);
                this.user = user;
                if (user.additionalUserInfo.isNewUser) {
                    Actions.SignUp();
                } else {
                    Actions.Qpage();
                }
                // if (user.emailVerified) {
                //     Actions.Qpage();
                // } else {
                    
                // }
                // If you need to do anything with the user, do it here
                // The user will be logged in automatically by the
                // `onAuthStateChanged` listener we set up in App.js earlier
            })
            .catch((error) => {
                const { code, message } = error;
                console.log(error);
                // For details of error codes, see the docs
                // The message contains the default Firebase string
                // representation of the error
            });
    }
}