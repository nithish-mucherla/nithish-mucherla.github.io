import { Grid } from '@material-ui/core';
import React from 'react';
import '../css/navigation.css';

function BottomNav(props) {
    return(
        <Grid 
            container 
            className="content"
            direction="column"
        >
            <Grid item>
                <footer className="bottomNav">
                    <a href="https://github.com/nithish-mucherla"  rel='noopener' ><i className="fa fa-github"></i></a>
                    <a href="https://www.instagram.com/nithish_msn/" rel='noopener' ><i className="fa fa-instagram"></i></a>
                    <a href="https://www.facebook.com/nithu.mucherla" rel='noopener'><i className="fa fa-facebook-f"></i></a>
                    <a href="https://www.linkedin.com/in/sai-nithish-mucherla" rel='noopener' ><i className="fa fa-linkedin"></i></a>
                </footer>
            </Grid>       
        </Grid>
    );
}

export default BottomNav