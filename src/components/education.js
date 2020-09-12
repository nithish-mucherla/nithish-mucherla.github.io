import React from 'react';
import Grid from '@material-ui/core/Grid';
import EducationItem from './educationItem';

function Education() {
    return(
        <Grid 
            container 
            id = "educationComp"
        >    
            <Grid item xs ={12} className = "xpTitleBlue">
                <h2>Education</h2>
            </Grid>
            <Grid item xs={1} lg={1}></Grid>
            <Grid container item xs={10} lg={10} justify="space-evenly">
                <Grid item xs={12} lg={5}>
                    <EducationItem 
                        org = {"VIT, Vellore."}
                        level = {"Bachelor of Technology"}
                        branch = {"Computer Science and Engineering"}
                        percentage = {"CGPA : 9.41"}
                        dur = {"2017 - present"}
                        des = {"Activities & Societies : Chairperson of IEEE TEMS"}
                    />
                </Grid> 
                <Grid item xs={12} lg={5}>
                    <EducationItem 
                        org = {"Sri Chaitanya Jr. College"}
                        level = {"Class 12"}
                        branch = {"Maths, Physics, Chemistry"}
                        percentage = {"Percentage : 98.3%"}
                        dur = {"2015 - 2017"}
                    />
                </Grid>
            </Grid>
            
            <Grid item xs={1} lg={1}></Grid>
        </Grid>
    );
}

export default Education