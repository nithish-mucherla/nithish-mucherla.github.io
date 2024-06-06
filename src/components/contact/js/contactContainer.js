import React from "react";
import { Grid } from "@material-ui/core";
import BottomNav from "../../navigation/js/bottomNav";

function ContactContainer() {
  return (
    <Grid
      container
      justifyContent="center"
      id="contactComp"
      className="contactContainer"
    >
      <BottomNav />
    </Grid>
  );
}

export default ContactContainer;
