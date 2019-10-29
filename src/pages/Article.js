import React, { Component } from "react"
// mobx & stores
import {inject, observer} from 'mobx-react'
// Theme
import Theme from "../theme/Theme"
// UI components
import {Box, Card, CardContent, Grid, Typography} from '@material-ui/core'
// custom components
import PageLayout from '../components/page/PageLayout'

const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum temporibus dicta a beatae dolorem itaque maxime ipsum ipsa numquam, tenetur sequi eligendi odit soluta ratione. In facilis illum perferendis consectetur recusandae rerum libero ullam non nobis, ipsa dolorem soluta facere nulla, reiciendis quidem blanditiis impedit eligendi, atque eveniet. Similique, corporis placeat. Esse fugiat sint vel odio nesciunt nam cum totam placeat, consequuntur expedita consequatur, architecto facere vitae illum. Quasi, optio nobis voluptates cumque animi accusamus quia ex temporibus. Natus exercitationem aliquid molestias, dolorem nemo eaque praesentium commodi voluptas magnam architecto illo facere aperiam, pariatur nulla nobis eligendi aspernatur incidunt?'

class Article extends Component {

  render() {
    const { match, stores } = this.props,
      { capitalize, posts } = stores.uiStore,
      post = posts[match.params.id],
      { body, title } = post

    return (
        <PageLayout
            backgroundColor={Theme.palette.primary.main}
            title={'Blog'}
            subtitle={capitalize(title)}
        >
        <Grid container spacing={4}>
          <Grid item xs={12} align={'center'}>
            <Card style={{maxWidth: 600}}>
              <CardContent>
                <Grid container >
                  <Typography gutterBottom>
                    {capitalize(body)}
                  </Typography>
                </Grid>
                <Box 
                  display={{ 
                    xs: 'none', 
                    sm: 'block',
                    md: 'block', 
                    lg: 'block', 
                    xl: 'block' 
                  }}
                >
                  <Grid 
                    container
                    style={{marginTop: 40}}
                  >
                    <Typography gutterBottom>
                      {text}
                    </Typography>
                  </Grid>
                </Box>
                <Box 
                  display={{ 
                    xs: 'none', 
                    sm: 'none', 
                    md: 'block', 
                    lg: 'block', 
                    xl: 'block' 
                  }}
                >
                  <Grid 
                    container
                    style={{marginTop: 40}}
                  >
                    <Typography gutterBottom>
                      {text}
                    </Typography>
                  </Grid>
                </Box>
                <Box 
                  display={{ 
                    xs: 'none', 
                    sm: 'none', 
                    md: 'none', 
                    lg: 'block',
                    xl: 'block' 
                  }}
                >
                  <Grid 
                    container
                    style={{marginTop: 40}}
                  >
                    <Typography gutterBottom>
                      {text}
                    </Typography>
                  </Grid>
                </Box>
                <Box 
                  display={{ 
                    xs: 'none', 
                    sm: 'none', 
                    md: 'none', 
                    lg: 'none', 
                    xl: 'block' 
                  }}
                >
                  <Grid 
                    container
                    style={{marginTop: 40}}
                  >
                    <Typography gutterBottom>
                      {text}
                    </Typography>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </PageLayout>
    )
  }
}

export default inject('stores')(observer(Article))