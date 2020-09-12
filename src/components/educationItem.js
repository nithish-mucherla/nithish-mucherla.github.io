import React, {useState} from 'react';
import {Paper} from '@material-ui/core';

function EducationItem(props){

    const [ paperElevation, setPaperElevation ] = useState(2); 
    return(
        <div className = 'eduItem'>
            <Paper className = 'xpPaper' elevation={paperElevation} onMouseOver = {()=>setPaperElevation(10)} onMouseOut = {()=>setPaperElevation(2)}>
                {props.org}
                <div className='sub-content'>
                    <br></br>{props.level}, {props.branch}, {props.percentage} 
                </div> 
                <div className = 'xpDes'>
                    {props.dur}<br></br> 
                    {props.des}
                </div>
            </Paper>
        </div>
        
    );
    
}

export default EducationItem