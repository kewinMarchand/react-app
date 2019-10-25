import React, { Component } from "react"
// mobx & stores
import { inject, observer } from 'mobx-react'
// UI components
import {Card, CardActions, CardContent, Grid, IconButton, TextField} from '@material-ui/core'
// Icons
import SendIcon from '@material-ui/icons/Send'

class NewsletterForm extends Component {

    handleSubmit = (e) => {
        const {openSnackbar} = this.props.stores.snackbarStore,
            { encode, newsletterForm } = this.props.stores.formsStore,
            errorMessage = 'Oups, quelque chose s\'est mal passé !',
            successMessage = 'Votre abonnement à notre newsletter est pris en compte'
        
        fetch("/", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: encode({"form-name": "newsletter subscription", ...newsletterForm})
        })
            .then(resp => {openSnackbar(resp.ok ? successMessage : errorMessage, resp.ok)})
            .catch(error => {openSnackbar(errorMessage, !error)});
        e.preventDefault();
    }

    render() {
        const { handleChange, newsletterEmailError, newsletterForm, newsletterFormError } = this.props.stores.formsStore
        const { email } = newsletterForm

        return (     
            <Grid container component={'form'}>
                <TextField
                    autoComplete="email"
                    error={newsletterEmailError}
                    fullWidth
                    helperText={newsletterEmailError ? "L'email n'est pas valide" : ' '}
                    id="formEmailInput"
                    label="Votre email"
                    margin="normal"
                    name="email"
                    onChange={e => handleChange(e, 'newsletter')}
                    placeholder="email"
                    required
                    style={{marginBottom: 2, width: 380}}
                    type="email"
                    value={email}
                    variant={'outlined'}
                    InputProps={{
                        endAdornment:
                            <IconButton 
                                aria-label="envoyer le formulaire"
                                autoFocus
                                color={'secondary'}
                                disabled={newsletterFormError}
                                onClick={this.handleSubmit}
                                type={'submit'}
                            >
                                <SendIcon/>
                            </IconButton>                        
                    }}
                />
            </Grid>
        )
    }
}

export default inject('stores')(observer(NewsletterForm))
