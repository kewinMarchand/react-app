import React, { Component } from "react"
// custom components
import AppLayout from './components/app/AppLayout'
// routes
import Routes from './routes/Routes'

class App extends Component {

  render() {
    return (
      <AppLayout>
        <Routes/>
      </AppLayout>
    )
  }
}

export default App
