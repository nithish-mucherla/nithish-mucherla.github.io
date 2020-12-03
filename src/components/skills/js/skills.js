import React from 'react';
import {  Grid } from '@material-ui/core';
import SkillItem from './skillItem';
import {skillList} from '../../../static/skills.js';
import '../css/skills.css'

class Skills extends React.Component{
    render(){
        return(
            <Grid container 
                className = "skillDiv"
                id = "skillsComp"
            > 

                <Grid item xs ={12} className = "sectionTitle blue">
                    <h2>Skills</h2>
                </Grid>
                <Grid item xs={1} lg={2}></Grid>

                <Grid container item xs={10} lg={8} justify="space-evenly">
                    {
                        skillList.map(skill => <SkillItem key={skill.label} label ={skill.label} avatar = {skill.avatar} /> )
                    }
                </Grid>
                <Grid item xs={1} lg={2}></Grid>
                <Grid item xs={12}><br/></Grid>
            </Grid>
        );
    }
}

export default Skills