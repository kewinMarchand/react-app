import React, { Component, Fragment } from "react"
// Theme
import Theme from "../../theme/Theme"
// UI components
import {Fab, Snackbar, SnackbarContent} from '@material-ui/core'

class ContactSnackbar extends Component {
    render() {
        const { handleClose, snackbarIsOpen, snackbarMessage, success } = this.props
        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                autoHideDuration={6000}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                onClose={handleClose}
                open={snackbarIsOpen}
            >
                <SnackbarContent
                    action={
                        <Fab
                            aria-label="close"
                            color="default"
                            onClick={handleClose}
                            size={'small'}
                        >
                            ×
                        </Fab>
                    }
                    message={
                        <span id="message-id">
                            {snackbarMessage}
                        </span>
                    }
                    style={{
                        backgroundColor: success ? Theme.palette.primary.main : Theme.palette.error.dark
                    }}
                />
            </Snackbar>
        )
    }
}

export default ContactSnackbar
