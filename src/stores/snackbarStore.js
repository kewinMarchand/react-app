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
            snackbarIsOpen: false,
            success: false
        }
    }

    get snackbarBackgroundColor() {
        const { primary, error } = Theme.palette 
        let snackbarBackgroundColor = true === this.snackbar.success ? primary.main : error.dark
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