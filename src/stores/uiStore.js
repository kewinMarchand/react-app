// mobx & stores
import { action, decorate, observable } from "mobx"

class uiStore {

    authenticated = false

    posts = null

    users = null

    authenticate = () => {
        this.authenticated = true
    }

    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

}

decorate(uiStore, {
    authenticated: observable,
    posts: observable,
    users: observable,
    authenticate: action
})

export default uiStore