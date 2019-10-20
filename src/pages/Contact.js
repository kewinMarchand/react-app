import React, { Component } from "react"
// Theme
import Theme from "../theme/Theme"
// custom components
import ContactForm from '../components/contact/ContactForm'
import PageLayout from '../components/page/PageLayout'

class Contact extends Component {
    render() {
        return (
            <PageLayout
                backgroundColor={Theme.palette.secondary.main}
                title={'Contact'}
                subtitle={'Entrons en contact'}
            >
                <ContactForm/>
            </PageLayout>
        )
    }
}

export default Contact
