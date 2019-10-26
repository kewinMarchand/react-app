import React, { Component } from "react"
// UI components
import {Grid, Typography} from '@material-ui/core'
// custom components
import PageLayout from '../components/page/PageLayout'

class Home extends Component {
    render() {
        return (
            <PageLayout 
                backgroundImage={'https://picsum.photos/id/1019/1920/300'}
                title={'Accueil'}
                subtitle={'Bienvenue'}
            >
                <Grid container>
                    <Grid item style={{margin: 'auto', maxWidth: 600}}>
                        <Typography 
                            variant={'h3'} 
                            align={'center'}
                            style={{marginBottom: 24}} 
                            gutterBottom
                        >
                            Lorem ipsum dolor sit amet
                        </Typography>
                        <Typography gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus hic natus veritatis voluptate molestiae mollitia non. Quasi unde maxime ducimus ipsa velit necessitatibus pariatur. Voluptas, tenetur itaque? Nostrum quo nesciunt mollitia tenetur magni quas, expedita maiores veniam harum! Inventore ratione corporis tempora? Iusto nisi dolorum animi quam praesentium dignissimos assumenda.
                        </Typography>
                        <Typography gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus hic natus veritatis voluptate molestiae mollitia non. Quasi unde maxime ducimus ipsa velit necessitatibus pariatur. Voluptas, tenetur itaque? Nostrum quo nesciunt mollitia tenetur magni quas, expedita maiores veniam harum! Inventore ratione corporis tempora? Iusto nisi dolorum animi quam praesentium dignissimos assumenda.
                        </Typography>
                        <Typography gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus hic natus veritatis voluptate molestiae mollitia non. Quasi unde maxime ducimus ipsa velit necessitatibus pariatur. Voluptas, tenetur itaque? Nostrum quo nesciunt mollitia tenetur magni quas, expedita maiores veniam harum! Inventore ratione corporis tempora? Iusto nisi dolorum animi quam praesentium dignissimos assumenda.
                        </Typography>
                    </Grid>
                </Grid>
            </PageLayout>
        )
    }
}

export default Home
