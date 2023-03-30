import { Grid } from "@material-ui/core";
import React from "react";
import { experiences } from "../../../static/experiences.js";
import "../css/experience.css";
import ExperienceItem from "./experienceItem";

const Experience = () => {
  return (
    <Grid
      container
      direction="column"
      className="content xpDiv"
      id="experienceComp"
      alignItems="center"
    >
      <Grid item className="sectionTitle white">
        <h2>Experience</h2>
      </Grid>
      {experiences.map((xp) => (
        <React.Fragment key={xp.alt}>
          <ExperienceItem
            alt={xp.alt}
            weblink={xp.weblink}
            org={xp.org}
            role={xp.role}
            dur={xp.dur}
            des={xp.des}
            proof={xp.proof}
            src={xp.src}
          />
          <hr />
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Experience;
