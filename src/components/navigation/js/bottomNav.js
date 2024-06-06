import { Grid, IconButton } from "@material-ui/core";
import React from "react";
import "../css/navigation.css";
import { LinkedIn, GitHub, Mail } from "@material-ui/icons";

function BottomNav(props) {
  return (
    <Grid container className="bottomNav" justifyContent="center">
      <Grid item>
        <IconButton>
          <a href="mailto:mucherlasainithish@gmail.com" rel="noopener">
            <Mail style={{ color: "grey" }} />
          </a>
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <a
            href="https://www.linkedin.com/in/sai-nithish-mucherla"
            rel="noopener"
          >
            <LinkedIn style={{ color: "grey" }} />
          </a>
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <a href="https://github.com/nithish-mucherla" rel="noopener">
            <GitHub style={{ color: "grey" }} />
          </a>
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default BottomNav;
