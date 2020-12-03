import React, {useState} from 'react';
import {Paper} from '@material-ui/core';
import '../css/education.css';

function EducationItem({org, level, branch, percentage, dur, des}){

    const [ paperElevation, setPaperElevation ] = useState(2); 
    return(
        <div className = 'eduItem'>
            <Paper className = 'eduPaper' elevation={paperElevation} onMouseOver = {()=>setPaperElevation(10)} onMouseOut = {()=>setPaperElevation(2)}>
                {org}
                <div className='sub-content'>
                    <br></br>{level}, {branch}, {percentage} 
                </div> 
                <div className = 'eduDescription'>
                    {dur}<br></br> 
                    {des}
                </div>
            </Paper>
        </div>
        
    );
    
}

export default EducationItem