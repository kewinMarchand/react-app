import React, { Component, Fragment } from "react"
// Theme
import Theme from "../../theme/Theme"
// UI components
import {Button, Card, CardActions, CardContent, Grid, TextField} from '@material-ui/core'
// custom components
import ContactSnackbar from './ContactSnackbar'

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            email: '',
            message: '',
            snackbarIsOpen: false,
            snackbarMessage: '',
            success: true
        }
    }

    encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    handleSubmit = e => {
        const {name, email, message} = this.state
        fetch("/", {
            method: "POST",
            headers: { 
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: this.encode({ 
                "form-name": "contact",
                name: name, 
                email: email,
                message: message
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
            name: '', 
            email: '',
            message: '',
            snackbarIsOpen: true, 
            snackbarMessage: 'Bravo, votre demande de contact est envoyée',
            success: resp
        })
    }

    openErrorSnackbar = (error) => {
        this.setState({
            snackbarIsOpen: true, 
            snackbarMessage: 'Oups, quelque chose s\'est mal passé',
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
        const {name, email, message} = this.state
        const hasName = '' !== name && this.validateName(name),
            hasEmail = '' !== email && this.validateEmail(email),
            hasMessage = '' !== message
        return hasName && hasEmail && hasMessage
    }

    validateName(name) {
        const re = /^[a-zA-Z0-9\s]{2,}$/;
        return re.test(name);
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    render() {
        const { name, email, message, snackbarIsOpen, snackbarMessage, success } = this.state
        return (
            <Fragment>
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
                            name="contact"
                            onSubmit={this.handleSubmit}
                        >
                            <TextField
                                autoComplete="name"
                                autoFocus
                                error={false}
                                fullWidth
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
                                error={false}
                                fullWidth
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
                                    <Button
                                        color={'secondary'}
                                        disabled={!this.validForm()}
                                        style={{color: '#FFF'}}
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
                <ContactSnackbar
                    handleClose={() => this.handleClose()}
                    snackbarIsOpen={snackbarIsOpen}
                    snackbarMessage={snackbarMessage}
                    success={success}
                />
            </Fragment>
        )
    }
}

export default ContactForm
