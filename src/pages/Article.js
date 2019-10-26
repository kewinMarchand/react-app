import React, { Component } from "react"
// Theme
import Theme from "../theme/Theme"
// UI components
import {Card, CardContent, CardHeader, Grid, Typography} from '@material-ui/core'
// custom components
import PageLayout from '../components/page/PageLayout'

class Article extends Component {
  render() {
    const { match } = this.props
    return (
        <PageLayout
            backgroundColor={Theme.palette.primary.main}
            title={'Blog'}
            subtitle={'Dernières actualités'}
        >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card>
              <CardHeader
                title={'Article n° ' + match.params.id}
              />
              <CardContent>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem dolorum laboriosam nostrum distinctio recusandae? Incidunt, quibusdam blanditiis sunt magnam quas tempora odio ea corrupti sapiente ducimus necessitatibus ipsum, culpa eos optio? Repellendus pariatur odio, animi sit facilis ex soluta nobis sint eligendi molestias tempora quo cum ullam fugit amet.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </PageLayout>
    )
  }
}

export default Article
