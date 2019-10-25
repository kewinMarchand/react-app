// mobx & stores
import { action, decorate, observable } from "mobx"

class uiStore {

    authenticated = false

    authenticate = () => {
        this.authenticated = true
    }
}

decorate(uiStore, {
    authenticated: observable,
    authenticate: action
})

export default uiStore