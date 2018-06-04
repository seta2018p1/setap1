import AuthStore from './AuthStore';

let index = 0

export default class RootStore {
  
    constructor() {
        this.authStore = new AuthStore(this);
    }
    addItem(item) {
        list.push(item);
    }
}



