import React, { Component } from "react"
// image
import logo from "../assets/images/logo.svg"
// style
import "../assets/css/App-logo.css"

class AppLogo extends Component {
  render() {
    return (
        <img src={logo} className="App-logo" alt="logo" height={this.props.height}/>
    )
  }
}

export default AppLogo
