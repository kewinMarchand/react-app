import React from "react"
// Abstract
import FormAbstract from './FormAbstract'
// UI components
import {Card, CardActions, CardContent, Grid, IconButton, TextField} from '@material-ui/core'
// Icons
import SendIcon from '@material-ui/icons/Send'
// custom components
import { SnackbarConsumer } from '../snackbars/SnackbarContext'

class NewsletterForm extends FormAbstract {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    validForm = () => {
        return this.validateEmail(this.state.email) 
    }

    render() {
        const { email } = this.state
        return (     
            <Grid container
                component={'form'}
                method="post"
                name="newsletter subscription"
            >
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
                    style={{marginBottom: 2, width: 380}}
                    type="email"
                    value={email}
                    variant={'outlined'}
                    InputProps={{
                        endAdornment:
                            <SnackbarConsumer>
                                {({ openSnackbar }) => (
                                    <IconButton 
                                        aria-label="envoyer le formulaire"
                                        autoFocus
                                        color={'secondary'}
                                        disabled={!this.validForm()}
                                        onClick={e => this.handleSubmit(
                                            e, 
                                            this.state, 
                                            "newsletter subscription", 
                                            openSnackbar, 
                                            'Votre abonnement à notre newsletter est pris en compte'
                                        )}
                                        type={'submit'}
                                    >
                                        <SendIcon/>
                                    </IconButton>    
                                )}
                            </SnackbarConsumer>                    
                    }}
                />
            </Grid>
        )
    }
}

export default NewsletterForm
