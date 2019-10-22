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

    validateName(name) {
        const re = /^[a-zA-Z0-9\s]{2,}$/;
        return '' !== name && re.test(name);
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return '' !== email && re.test(email);
    }
}

export default FormAbstract
