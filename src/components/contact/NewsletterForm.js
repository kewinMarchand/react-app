import React, { Component, Fragment } from "react"
// Theme
import Theme from "../../theme/Theme"
// UI components
import {Button, Card, CardActions, CardContent, Grid, TextField} from '@material-ui/core'
// custom components
import ContactSnackbar from './ContactSnackbar'

class NewsletterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
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
            name: '', 
            email: '',
            message: '',
            snackbarIsOpen: true, 
            snackbarMessage: 'Votre abonnement à notre newsletter est pris en compte',
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
        const {email} = this.state
        const hasEmail = '' !== email && this.validateEmail(email)
        return hasEmail 
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
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
                        style={{width: 380}}
                        type="email"
                        value={email}
                        InputProps={{
                            endAdornment:
                                <Button
                                    color={'secondary'}
                                    disabled={!this.validForm()}
                                    style={{color: '#FFF'}}
                                    type={'submit'}
                                    size={'small'}
                                    variant={'contained'}
                                >
                                    Ok
                                </Button>
                            }
                        }
                        
                    />
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

export default NewsletterForm
