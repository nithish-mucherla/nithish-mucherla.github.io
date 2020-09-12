import React from 'react';
import profilePic from '../images/nithish.webp'
import Grid from '@material-ui/core/Grid';

class Home extends React.Component{

    render(){
        return(
            <Grid 
                container
                direction="column"
                justify="center"
                alignItems="center"
                className="content"
            > 
                <Grid item>
                    <img src = {profilePic} alt="Sai Nithish Mucherla" className='profilePic'></img>   
                </Grid>
            </Grid>  
        );
    }
}

export default Home