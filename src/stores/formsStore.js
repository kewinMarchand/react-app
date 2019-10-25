// mobx
import { action, computed, decorate, observable } from "mobx"

class formsStore {

    contactForm = {
        name: '', 
        email: '',
        message: ''
    }

    newsletterForm = {
        email: ''
    }

    encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    handleChange = (e, form) => {
        this[form + 'Form'][e.target.name] = e.target.value
    }

    validName(name) {
        const re = /^[a-zA-Z0-9\s]{2,}$/;

        if ('' === name) {
            return true
        }
        
        return re.test(name)
    }

    validEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if ('' === email) {
            return true
        }
        
        return re.test(email)
    }

    get contactNameError() {
        let {name} = this.contactForm
        return !this.validName(name)
    }

    get contactEmailError() {
        let {email} = this.contactForm
        return !this.validEmail(email)
    }

    get contactFormError() {
        const {name, email, message} = this.contactForm
        
        return this.validName(name) && ('' !== email && this.validEmail(email)) && '' !== message
    }

    get newsletterEmailError() {
        let {email} = this.newsletterForm
        return !this.validEmail(email)
    }

    get newsletterFormError() {
        let {email} = this.newsletterForm

        return '' === email || this.newsletterEmailError
    }
}

decorate(formsStore, {
    contactForm: observable,
    newsletterForm: observable,
    handleChange: action,
    contactNameError: computed,
    contactEmailError: computed,
    contactFormError: computed,
    newsletterEmailError: computed,
    newsletterFormError: computed
})

export default formsStore