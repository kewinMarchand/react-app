import React, { Component } from "react"

class FormAbstract extends Component {
    constructor(props) {
        super(props);
    }

    encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    handleSubmit = (e, form, formName, openSnackbar, successMessage) => {
        const errorMessage = 'Oups, quelque chose s\'est mal passé !'

        fetch("/", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: this.encode({"form-name": formName, ...form})
        })
            .then(resp => {
                let snackbarMessage = resp.ok ? successMessage : errorMessage
                openSnackbar(snackbarMessage, resp.ok)
            })
            .catch((error) => {
                openSnackbar(errorMessage, !error)
            });
  
        e.preventDefault();
    }

    validateName(name) {
        const re = /^[a-zA-Z0-9\s]{2,}$/;
        return '' !== name && re.test(name);
    }

    errorName(name) {
        if ('' === name) {
            return false
        }

        return !this.validateName(name)
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    errorEmail(email) {
        if ('' === email) {
            return false
        }

        return !this.validateEmail(email)
    }
}

export default FormAbstract
