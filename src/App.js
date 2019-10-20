import React, { Component } from "react"
// custom components
import AppLayout from './components/AppLayout'
// routes
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Home/>
      </AppLayout>
    )
  }
}

export default App
