import React, { Component } from "react"
// UI components
import {Button, Card, CardActions, CardContent, Grid, TextField} from '@material-ui/core'


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '', 
            email: '',
            message: ''
        }
    }

    encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: this.encode({ "form-name": "contact", ...this.state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
  
        e.preventDefault();
    }
  
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    validForm = () => {
        const hasName = '' !== this.state.name,
            hasEmail = '' !== this.state.email,
            hasMessage = '' !== this.state.message
        return hasName && hasEmail && hasMessage
    }
  

    render() {
        const { name, email, message } = this.state
        return (
            <Grid container>
                <Card style={{margin: 'auto', marginBottom: 40, marginTop: 24, maxWidth: 600}}>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="hidden" 
                            name="form-name"
                            value="contact" 
                        />
                        <CardContent>
                            <TextField
                                autoComplete="name"
                                autoFocus
                                error={false}
                                fullWidth
                                id="formNameInput"
                                label="nom"
                                margin="normal"
                                name="name"
                                onChange={this.handleChange}
                                placeholder="Votre nom"
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
                                label="email"
                                margin="normal"
                                name="email"
                                onChange={this.handleChange}
                                placeholder="Votre email"
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
                                placeholder="Votre message"
                                required
                                rows={8}
                                type="text"
                                value={message}
                                variant={'outlined'}                                   
                            />
                        </CardContent>
                        <CardActions>
                            <Grid container justify={'flex-end'}>
                                <Button
                                    color={'secondary'}
                                    disabled={!this.validForm()}
                                    type={'submit'}
                                    variant={'text'}
                                >
                                    Envoyer
                                </Button>
                            </Grid>
                        </CardActions> 
                    </form>
                </Card>
            </Grid>
        )
    }
}

export default ContactForm
