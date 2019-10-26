import React, { Component } from "react"
// history
import { withRouter } from 'react-router-dom'
// Theme
import Theme from "../theme/Theme"
// UI components
import {Button, Card, CardActions, CardContent, CardHeader, Grid, Typography} from '@material-ui/core'
// custom components
import PageLayout from '../components/page/PageLayout'

class Blog extends Component {
  render() {
    const { history } = this.props
    return (
        <PageLayout
            backgroundColor={Theme.palette.primary.main}
            title={'Blog'}
            subtitle={'Dernières actualités'}
        >
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader
                title={'Article n° 01'}
              />
              <CardContent>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem dolorum laboriosam nostrum distinctio recusandae? Incidunt, quibusdam blanditiis sunt magnam quas tempora odio ea corrupti sapiente ducimus necessitatibus ipsum, culpa eos optio? Repellendus pariatur odio, animi sit facilis ex soluta nobis sint eligendi molestias tempora quo cum ullam fugit amet.
                </Typography>
                <CardActions>
                  <Grid container justify={'flex-end'}>
                    <Button
                      color={'secondary'}
                      onClick={() => history.push('article/01')}
                      variant={'contained'}
                    >
                      Voir plus
                    </Button>
                  </Grid>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader
                title={'Article n° 02'}
              />
              <CardContent>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem dolorum laboriosam nostrum distinctio recusandae? Incidunt, quibusdam blanditiis sunt magnam quas tempora odio ea corrupti sapiente ducimus necessitatibus ipsum, culpa eos optio? Repellendus pariatur odio, animi sit facilis ex soluta nobis sint eligendi molestias tempora quo cum ullam fugit amet.
                </Typography>
                <CardActions>
                  <Grid container justify={'flex-end'}>
                    <Button
                      color={'secondary'}
                      onClick={() => history.push('article/02')}
                      variant={'contained'}
                    >
                      Voir plus
                    </Button>
                  </Grid>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader
                title={'Article n° 03'}
              />
              <CardContent>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem dolorum laboriosam nostrum distinctio recusandae? Incidunt, quibusdam blanditiis sunt magnam quas tempora odio ea corrupti sapiente ducimus necessitatibus ipsum, culpa eos optio? Repellendus pariatur odio, animi sit facilis ex soluta nobis sint eligendi molestias tempora quo cum ullam fugit amet.
                </Typography>
                <CardActions>
                  <Grid container justify={'flex-end'}>
                    <Button
                      color={'secondary'}
                      onClick={() => history.push('article/03')}
                      variant={'contained'}
                    >
                      Voir plus
                    </Button>
                  </Grid>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </PageLayout>
    )
  }
}

export default withRouter(Blog)
