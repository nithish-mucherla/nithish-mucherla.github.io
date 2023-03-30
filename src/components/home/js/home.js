import React from "react";
import profilePic from "../../../images/nithish-1.jpg";
import Grid from "@material-ui/core/Grid";
import "../css/home.css";

class Home extends React.Component {
  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="content"
      >
        <Grid item className="round">
          <img
            src={profilePic}
            alt="Sai Nithish Mucherla"
            className="profilePic"
          ></img>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
