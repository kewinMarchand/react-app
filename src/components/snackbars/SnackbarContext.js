import React, { Component } from 'react';
// custom components
import CommonSnackbar from './CommonSnackbar'

const SnackbarContext = React.createContext();

export class SnackbarProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            snackbarIsOpen: false,
            success: false
        };
    }

    openSnackbar = (message, success) => {
        this.setState({
            message,
            snackbarIsOpen: true,
            success
        });
    };

    closeSnackbar = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({
            message: '',
            snackbarIsOpen: false 
        })
    }

  render() {
    const { children } = this.props;

    return (
      <SnackbarContext.Provider
        value={{
          openSnackbar: this.openSnackbar,
          closeSnackbar: this.closeSnackbar,
          snackbarIsOpen: this.state.snackbarIsOpen,
          message: this.state.message,
          success: this.state.success
        }}
      >
        {children}
      </SnackbarContext.Provider>
    );
  }
}

export const SnackbarConsumer = SnackbarContext.Consumer