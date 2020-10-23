import React from 'react';
import {Grid} from '@material-ui/core';
import Contact from './contact';

function ContactContainer(){
    return(
        <Grid
            container 
            justify = "center"
            id = 'contactComp'
        >
            <Grid item xs={12}  className = "sectionTitle blue">
                <h2>Get in Touch</h2>
            </Grid>
            <Grid item xs={1} sm={4}></Grid>
            <Grid item xs={10} sm={4}>
                <Contact />
            </Grid>
            <Grid item xs={1} sm={4}></Grid>
        </Grid>
    );
}

export default ContactContainer