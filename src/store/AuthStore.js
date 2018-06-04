import { observable, action } from 'mobx';


export default class AuthStore {


    constructor(rootStore) {
        this.rootStore = rootStore;
        // this.chatStore = rootStore.chatStore;
        // console.log(rootStore.chatStore);
    }

    @observable phoneNumber = 'a';
}