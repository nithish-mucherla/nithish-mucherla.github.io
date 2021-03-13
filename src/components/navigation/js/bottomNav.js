import { Grid, IconButton } from "@material-ui/core";
import React from "react";
import "../css/navigation.css";
import { Facebook, Instagram, LinkedIn, GitHub } from "@material-ui/icons";

function BottomNav(props) {
  return (
    <Grid container className="bottomNav" justify="center">
      <Grid item>
        <IconButton>
          <a href="https://www.instagram.com/nithish_msn/" rel="noopener">
            <Instagram style={{ color: "grey" }} />
          </a>
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <a href="https://www.facebook.com/nithu.mucherla" rel="noopener">
            <Facebook style={{ color: "grey" }} />
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
