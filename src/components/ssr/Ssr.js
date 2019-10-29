import React, { Component } from "react"
// Helmet
import { Helmet } from 'react-helmet'

class Ssr extends Component {
    render() {
        const {backgroundColor, backgroundImage, subtitle, title} = this.props
        return (
            <Helmet>
                <title>react app | {title} | {subtitle}</title>
                <meta name="description" content={"Mon app react page " + title} />
                <meta name="theme-color" content={backgroundColor ? backgroundColor : "#008f68"} />
            </Helmet>
        )
    }
}

export default Ssr
