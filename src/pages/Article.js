import React, { Component } from "react"
// mobx & stores
import {inject, observer} from 'mobx-react'
// Theme
import Theme from "../theme/Theme"
// UI components
import {Card, CardContent, CardHeader, Grid, Typography} from '@material-ui/core'
// custom components
import PageLayout from '../components/page/PageLayout'

class Article extends Component {

  render() {
    const { match, stores } = this.props,
      post = stores.uiStore.posts[match.params.id]

    return (
        <PageLayout
            backgroundColor={Theme.palette.primary.main}
            title={'Blog'}
            subtitle={stores.uiStore.capitalize(post.title)}
        >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography>
                  {stores.uiStore.capitalize(post.body)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </PageLayout>
    )
  }
}

export default inject('stores')(observer(Article))