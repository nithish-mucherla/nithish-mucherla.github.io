import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

function Navbar(props){

    const dispThemeButton = (mode) =>{
        return (mode==='true') ? <Brightness7Icon/> : <Brightness4Icon/>
    }
    return(
        <Breadcrumbs 
            maxItems={2} 
            aria-label="breadcrumb"
            className = "navbar"
        >
            <Link 
                className = 'link'  
                color="inherit" 
                underline = 'none'
                onClick = {() => document.querySelector('#experienceComp').scrollIntoView({ behavior: 'smooth', block: 'start' })}  
            >
                Experience
            </Link>
            <Link 
                className = 'link' 
                color="inherit"
                underline = 'none' 
                onClick = {() => document.querySelector('#educationComp').scrollIntoView({ behavior: 'smooth', block: 'start' })}    
            >
                Education
            </Link>
            <Link 
                className = 'link' 
                color="inherit" 
                underline = 'none'
                onClick = {() => document.querySelector('#skillsComp').scrollIntoView({ behavior: 'smooth', block: 'center' })}
                
            >
                Skills
            </Link>
            <Link 
                className = 'link' 
                color="inherit" 
                underline = 'none'
                onClick = {() => document.querySelector('#contactComp').scrollIntoView({ behavior: 'smooth', block: 'center' })}
                
            >
                Contact
            </Link>
            <span onClick ={props.switchTheme} className="switchThemeButton">
                {dispThemeButton(props.mode)}
            </span>
        </Breadcrumbs>
    );
}
export default Navbar