import React, { Component } from "react"
// mobx & stores
import {inject, observer} from 'mobx-react'
// UI components
import {IconButton, Slide, Snackbar, SnackbarContent} from '@material-ui/core'
// Icons
import CloseIcon from '@material-ui/icons/Close'

class CommonSnackbar extends Component {
    render() {
        const {closeSnackbar, snackbar, snackbarBackgroundColor} = this.props.stores.snackbarStore,
            {message, snackbarIsOpen} = snackbar

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
                onClose={closeSnackbar}
                open={snackbarIsOpen}
                TransitionComponent={Slide}
            >
                <SnackbarContent
                    action={
                        <IconButton 
                            aria-label="close"
                            color="inherit"
                            onClick={closeSnackbar}
                            size={'small'}
                        >
                            <CloseIcon/>
                        </IconButton>      
                    }
                    message={
                        <span id="message-id">
                            {message}
                        </span>
                    }
                    role={'alertdialog'}
                    style={{
                        backgroundColor: snackbarBackgroundColor
                    }}
                />
            </Snackbar>
        )
    }
}

export default inject('stores')(observer(CommonSnackbar))
