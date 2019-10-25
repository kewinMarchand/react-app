// mobx & stores
import { action, computed, decorate, observable } from "mobx"
// Theme
import Theme from "../theme/Theme"

class snackbarStore {

    snackbar = {
        message: '',
        snackbarColor: '',
        snackbarIsOpen: false,
        success: false
    }

    openSnackbar = (message, success) => {
        this.snackbar = {
            message,
            snackbarIsOpen: true,
            success
        }
    }

    closeSnackbar = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.snackbar = {
            message: '',
            snackbarIsOpen: false 
        }
    }

    get snackbarBackgroundColor() {
        let snackbarBackgroundColor = this.success ? Theme.palette.primary.main : Theme.palette.error.dark
        return snackbarBackgroundColor
    }
}

decorate(snackbarStore, {
    snackbar: observable,
    openSnackbar: action,
    closeSnackbar: action,
    snackbarBackgroundColor: computed
})

export default snackbarStore