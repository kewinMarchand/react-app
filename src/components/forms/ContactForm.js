import React, { Fragment } from "react"
// Abstract
import FormAbstract from './FormAbstract'
// UI components
import {Button, Card, CardActions, CardContent, Grid, TextField} from '@material-ui/core'
// custom components
import { SnackbarConsumer } from '../snackbars/SnackbarContext'

class ContactForm extends FormAbstract {
    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            email: '',
            message: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    validForm = () => {
        const {name, email, message} = this.state
        return this.validateName(name) && ('' !== email && this.validateEmail(email)) && '' !== message
    }

    render() {
        const { name, email, message } = this.state
        return (
            <Grid container>
                <Card 
                    style={{
                        margin: 'auto', 
                        marginBottom: 40, 
                        marginTop: 24, 
                        maxWidth: 600
                    }}
                >
                    <CardContent 
                        component={'form'}
                        method="post"
                        name="contact form"
                    >
                        <TextField
                            autoComplete="name"
                            error={this.errorName(name)}
                            fullWidth
                            helperText={this.errorName(name) ? "Le nom doit comporter au moins 2 caractères" : ' '}
                            id="formNameInput"
                            label="Votre nom"
                            margin="normal"
                            name="name"
                            onChange={this.handleChange}
                            placeholder="nom"
                            required
                            type="text"
                            value={name}
                            variant={'outlined'}
                        />
                        <TextField
                            autoComplete="email"
                            error={this.errorEmail(email)}
                            fullWidth
                            helperText={this.errorEmail(email) ? "L'email n'est pas valide" : ' '}
                            id="formEmailInput"
                            label="Votre email"
                            margin="normal"
                            name="email"
                            onChange={this.handleChange}
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
                            onChange={this.handleChange}
                            placeholder="message"
                            required
                            rows={8}
                            type="text"
                            value={message}
                            variant={'outlined'}                                   
                        />
                        <CardActions>
                            <Grid container justify={'center'} style={{paddingTop: 16}}>
                                <SnackbarConsumer>
                                    {({ openSnackbar }) => (
                                        <Button
                                            aria-label="envoyer le formulaire"
                                            autoFocus
                                            color={'secondary'}
                                            disabled={!this.validForm()}
                                            style={{color: '#FFF'}}
                                            onClick={e => this.handleSubmit(
                                                e, 
                                                this.state, 
                                                "contact form", 
                                                openSnackbar, 
                                                'Votre demande de contact est prise en compte'
                                            )}
                                            type={'submit'}
                                            variant={'contained'}
                                        >
                                            Envoyer
                                        </Button>
                                    )}
                                </SnackbarConsumer>
                            </Grid>
                        </CardActions> 
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}

export default ContactForm
