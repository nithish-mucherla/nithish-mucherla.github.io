import React from 'react';
import {Grid} from '@material-ui/core';
import ReactTypingEffect from 'react-typing-effect';

class About extends React.Component
{
    quote = `"It's better to fail trying rather than not trying at all!"`;
    render(){
        return(
            <Grid container className="content">
                <Grid item xs={1} lg={1}></Grid>
                <Grid container item xs={10} lg={10} justify = "space-evenly">
                    <Grid item xs={12} lg={6}>
                        <div className='main-content'>
                            <span className="heading" color = 'secondary'>About Me</span>
                            <div className='sub-content'>
                                <br></br>
                                <b>{this.quote}</b>
                                <div className='signature'>
                                    <h2 className="heading2">- Sai Nithish Mucherla<br/>Chairperson at IEEE TEMS, VIT Vellore.</h2>
                                </div>
                            </div>
                        </div>  
                    </Grid>
                    <Grid item xs={12} lg={6}>
                            <span className='heading'>I'm a </span><ReactTypingEffect className="typingeffect" text={['Full-stack developer','React Developer','Photographer', 'Tech-Enthusiast']} speed={100} eraseDelay={500}/>
                            <div className='sub-content'>
                                <p>
                                    <br/>
                                    A Tech enthusiast motivated by the inner self. An experienced committee member with a demonstrated history of working with many other techies
                                    <a href="https://www.linkedin.com/in/sai-nithish-mucherla" className="outboundLink" rel='noopener'> <wbr />(www.linkedin.com/in/sai-nithish-mucherla)<wbr /></a>.
                                    Web Developer, <a href="https://www.hackerrank.com/NithishMucherla" className="outboundLink" rel='noopener'>Enthusiastic coder</a>, Content Writer, Photographer and an Enthusiastic Leader. 
                                    <br/><br/>
                                    <b>Working to develop my skills as a techie.</b>
                                    <br/><br/>
                                    Being an active part of a chapter <a href="https://www.linkedin.com/company/ieee-tems-vit-vellore" className="outboundLink" rel='noopener'>(IEEE TEMS)</a>, starting my journey as a committee member, made me know my potential and push my limits furthermore.  
                                    It also helped me guide my peers in a way that motivates me to work more and contribute to the community at the same time.
                                    A graduate to be, with a Bachelor of Technology focused in Computer Science from <a href="https://vit.ac.in" className="outboundLink" rel='noopener'>VIT, Vellore.</a>
                                </p>
                            </div>
                    </Grid>
                </Grid>
                <Grid item xs={1} lg={1}></Grid>
            </Grid>
        );
    }
}

export default About