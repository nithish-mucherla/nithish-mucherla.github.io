import React , {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LinkIcon from '@material-ui/icons/Link';

function ExperienceItem(props) {

    const [ paperElevation, setPaperElevation ] = useState(3);
    return(
        <Grid container alignItems="center" className = 'xpItem'>
            <Grid item xs={1} lg={2}></Grid>
            <Grid item xs={10} lg={8}>
                <a href={props.weblink} rel='noopener'>
                    <img alt={props.alt} src={props.src} className = "xpLogo"></img>
                </a>
                <Paper className = 'xpPaper' elevation={paperElevation} onMouseOver = {()=>setPaperElevation(20)} onMouseOut = {()=>setPaperElevation(3)}>
                    {props.org}
                    <div className='sub-content'>
                        <br></br>{props.role} {displayProofLink(props.proof)} 
                        <br></br>{props.dur} 
                    </div> 
                    <div className = 'xpDes'>
                        {props.des}
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={1} lg={2}></Grid>
        </Grid>
    );
    
}

function displayProofLink(param) {
    if(param!=='')
    return <a href={param} rel='noopener noreferrer' target="_blank"><LinkIcon color = "disabled"/></a>;
    
}
export default ExperienceItem