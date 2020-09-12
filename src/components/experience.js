import React from 'react';
import ExperienceItem from '../components/experienceItem';
import { Grid } from '@material-ui/core';
import {experiences} from '../static/experiences.js'

class Experience extends React.Component
{
    render(){
        return(
            <Grid 
                container
                direction="column"
                className="content xpDiv"
                id="experienceComp"
            > 
                <Grid item className = "xpTitleWhite">
                    <h2>Experience</h2>
                </Grid>

                    {
                        experiences.map( xp => 
                            <React.Fragment key={xp.alt}>
                                <ExperienceItem 
                                    alt = {xp.alt} 
                                    weblink ={xp.weblink}
                                    org = {xp.org}
                                    role = {xp.role}
                                    dur = {xp.dur}
                                    des = {xp.des}
                                    proof = {xp.proof}
                                    src = {xp.src}
                                />
                                <hr></hr>
                            </React.Fragment>
                            )
                    }
            </Grid>
        );
    }
}

export default Experience