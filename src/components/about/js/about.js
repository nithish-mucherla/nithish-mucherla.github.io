import React from "react";
import { Grid } from "@material-ui/core";
import ReactTypingEffect from "react-typing-effect";
import "../css/about.css";

const About = () => {
  const quote = `"It's better to fail trying rather than not trying at all!"`;
  const experience = new Date().getFullYear() - 2021;
  return (
    <Grid container className="content">
      <Grid item xs={1} lg={1}></Grid>
      <Grid container item xs={10} lg={10} justifyContent="space-evenly">
        <Grid item xs={12} lg={6}>
          <div className="main-content">
            <span className="heading" color="secondary">
              About Me
            </span>
            <div className="sub-content">
              <br></br>
              <b>{quote}</b>
              <div className="signature">
                <h2 className="heading2">
                  - Sai Nithish Mucherla
                  <br />
                </h2>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <span className="heading">I'm a </span>
          <ReactTypingEffect
            className="typingEffect"
            text={[
              "Full-stack Web developer",
              "React Developer",
              "Tech-Enthusiast",
              "Aspiring leader",
            ]}
            speed={100}
            eraseDelay={500}
          />
          <div className="sub-content">
            <p>
              <br />A tech enthusiast driven by a passion for exploring various
              technologies and a firm believer in
              <a
                href="https://github.com/nithish-mucherla"
                className="outboundLink"
                rel="noopener"
              >
                <b> learning by implementation.</b>
              </a>{" "}
              With {experience} years of professional experience as a Software
              Developer{" "}
              <a
                href="https://www.linkedin.com/in/sai-nithish-mucherla"
                className="outboundLink"
                rel="noopener"
              >
                {" "}
                <wbr />
                <b>(www.linkedin.com/in/sai-nithish-mucherla)</b>
                <wbr />
              </a>
              , I specialize in designing, developing, and deploying robust and
              scalable web applications.
              <br />
              <br />
              <b>
                Professional Philosophy: To continuously enhance my skills while
                delivering consistent value to the business!
              </b>
              <br />
              <br />
              With comprehensive expertise across the entire Software
              Development Life Cycle (SDLC), I am dedicated to staying
              up-to-date with industry trends and best practices. This
              commitment allows me to be a highly versatile and invaluable
              member of any development team, consistently contributing to the
              success of our projects.
            </p>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={1} lg={1}></Grid>
    </Grid>
  );
};

export default About;
