import React, { Component } from "react"
// mobx & stores
import {inject, observer} from 'mobx-react'
// UI components
import {Button, Card, CardActions, CardContent, Grid, TextField} from '@material-ui/core'

class ContactForm extends Component {

    handleSubmit = (e) => {
        const {openSnackbar} = this.props.stores.snackbarStore,
            { encode, contactForm } = this.props.stores.formsStore,
            errorMessage = 'Oups, quelque chose s\'est mal passé !',
            successMessage = 'Votre demande de contact est prise en compte'
        
        fetch("/", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: encode({"form-name": "contact form", ...contactForm})
        })
            .then(resp => {openSnackbar(resp.ok ? successMessage : errorMessage, resp.ok)})
            .catch((error) => {openSnackbar(errorMessage, !error)});
        e.preventDefault();
    }

    render() {
        const {contactForm, contactEmailError, contactFormError, contactNameError, handleChange} = this.props.stores.formsStore,
            {email, message, name} = contactForm

        return (
            <Grid container>
                <Card
                    component={'form'}
                    style={{
                        margin: 'auto', 
                        marginBottom: 40, 
                        marginTop: 24, 
                        maxWidth: 600
                    }}
                >
                    <CardContent>
                        <TextField
                            autoComplete="name"
                            error={contactNameError}
                            fullWidth
                            helperText={contactNameError ? "Le nom doit comporter au moins 2 caractères" : ' '}
                            id="formNameInput"
                            label="Votre nom"
                            margin="normal"
                            name="name"
                            onChange={e => handleChange(e, 'contact')}
                            placeholder="nom"
                            required
                            type="text"
                            value={name}
                            variant={'outlined'}
                        />
                        <TextField
                            autoComplete="email"
                            error={contactEmailError}
                            fullWidth
                            helperText={contactEmailError ? "L'email n'est pas valide" : ' '}
                            id="formEmailInput"
                            label="Votre email"
                            margin="normal"
                            name="email"
                            onChange={e => handleChange(e, 'contact')}
                            placeholder="email"
                            required
                            type="email"
                            value={email}
                            variant={'outlined'}
                        />
                        <TextField
                            error={false}
                            fullWidth
                            id="formMessageInput"    
                            label="Votre message"
                            margin="normal"
                            multiline
                            name="message"
                            onChange={e => handleChange(e, 'contact')}
                            placeholder="message"
                            required
                            rows={8}
                            type="text"
                            value={message}
                            variant={'outlined'}                                   
                        />
                        <CardActions>
                            <Grid container justify={'center'} style={{paddingTop: 16}}>
                                <Button
                                    aria-label="envoyer le formulaire"
                                    autoFocus
                                    color={'secondary'}
                                    disabled={!contactFormError}
                                    style={{color: '#FFF'}}
                                    onClick={this.handleSubmit}
                                    type={'submit'}
                                    variant={'contained'}
                                >
                                    Envoyer
                                </Button>
                            </Grid>
                        </CardActions> 
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}

export default inject('stores')(observer(ContactForm))
