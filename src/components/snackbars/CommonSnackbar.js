import React, { Component } from "react"
// contexts
import  {SnackbarConsumer}  from './SnackbarContext'
// Theme
import Theme from "../../theme/Theme"
// UI components
import {IconButton, Snackbar, SnackbarContent} from '@material-ui/core'
// Icons
import CloseIcon from '@material-ui/icons/Close'

class CommonSnackbar extends Component {
    render() {
        return (
            <SnackbarConsumer>
                {({ snackbarIsOpen, message, closeSnackbar, success }) => (
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
                                backgroundColor: success ? Theme.palette.primary.main : Theme.palette.error.dark
                            }}
                        />
                    </Snackbar>
                )}
            </SnackbarConsumer>
        )
    }
}

export default CommonSnackbar
