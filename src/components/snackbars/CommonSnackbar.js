import React, { Component } from "react"
// Theme
import Theme from "../../theme/Theme"
// UI components
import {IconButton, Snackbar, SnackbarContent} from '@material-ui/core'
// Icons
import CloseIcon from '@material-ui/icons/Close'

class CommonSnackbar extends Component {
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
                        <IconButton 
                            aria-label="close"
                            color="inherit"
                            onClick={handleClose}
                            size={'small'}
                        >
                            <CloseIcon/>
                        </IconButton>      
                    }
                    message={
                        <span id="message-id">
                            {snackbarMessage}
                        </span>
                    }
                    role={'alertdialog'}
                    style={{
                        backgroundColor: success ? Theme.palette.primary.main : Theme.palette.error.dark
                    }}
                />
            </Snackbar>
        )
    }
}

export default CommonSnackbar
