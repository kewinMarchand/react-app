import React, { Component, Fragment } from "react"
import { withRouter } from 'react-router-dom'
// UI components
import {Button, Grid} from '@material-ui/core'

class GoBackBtn extends Component {
  render() {
    const {history} = this.props
    return (
      <Fragment>
        {'/' !== history.location.pathname && 2 < history.length &&
          <Grid container style={{marginBottom: 32}}>
              <Button 
                variant={'text'} 
                color={'default'}
                onClick={() => history.goBack()}
              >
                  ← Retour
              </Button>
          </Grid>
        }
      </Fragment>
    )
  }
}

export default withRouter(GoBackBtn)
