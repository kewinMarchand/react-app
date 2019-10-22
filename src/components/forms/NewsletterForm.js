import React, { Fragment } from "react"
// Abstract
import FormAbstract from './FormAbstract'
// Theme
import Theme from "../../theme/Theme"
// UI components
import {Card, CardActions, CardContent, Grid, IconButton, TextField} from '@material-ui/core'
// Icons
import SendIcon from '@material-ui/icons/Send'
// custom components
import CommonSnackbar from '../snackbars/CommonSnackbar'

class NewsletterForm extends FormAbstract {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            snackbarIsOpen: false,
            snackbarMessage: '',
            success: true
        }
    }

    handleSubmit = e => {
        const {email} = this.state
        fetch("/", {
            method: "POST",
            headers: { 
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: this.encode({ 
                "form-name": "newsletter subscription",
                email: email,
            })
            
        })
            .then(resp => {
                resp.ok ?
                    this.openSuccessSnackbar(resp)
                :
                    this.openErrorSnackbar(resp)
            })
            .catch(error => {
                this.openErrorSnackbar(error)
            });
  
        e.preventDefault();
    }

    openSuccessSnackbar = (resp) => {
        this.setState({
            email: '',
            snackbarIsOpen: true, 
            snackbarMessage: 'Votre abonnement à notre newsletter est pris en compte',
            success: resp
        })
    }

    openErrorSnackbar = (error) => {
        this.setState({
            snackbarIsOpen: true, 
            snackbarMessage: 'Oups, quelque chose s\'est mal passé !',
            success: !error
        })
    }
  
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleClose = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ snackbarIsOpen: false })
    }

    validForm = () => {
        return this.validateEmail(this.state.email) 
    }

    render() {
        const { email, snackbarIsOpen, snackbarMessage, success } = this.state
        return (
            <Fragment>
                <Grid container
                    component={'form'}
                    method="post"
                    name="newsletter subscription"
                    onSubmit={this.handleSubmit}
                >
                    <TextField
                        autoComplete="email"
                        error={false}
                        fullWidth
                        id="formEmailInput"
                        label="Votre email"
                        margin="normal"
                        name="email"
                        onChange={this.handleChange}
                        placeholder="email"
                        required
                        style={{marginBottom: 16, width: 380}}
                        type="email"
                        value={email}
                        variant={'outlined'}
                        InputProps={{
                            endAdornment:
                                <IconButton 
                                    aria-label="validate form"
                                    color={'secondary'}
                                    disabled={!this.validForm()}
                                    type={'submit'}
                                >
                                    <SendIcon/>
                                </IconButton>  
                            }
                        }
                        
                    />
                </Grid>
                <CommonSnackbar
                    handleClose={() => this.handleClose()}
                    snackbarIsOpen={snackbarIsOpen}
                    snackbarMessage={snackbarMessage}
                    success={success}
                />
            </Fragment>
        )
    }
}

export default NewsletterForm
