import React from "react";
import { Grid } from "@material-ui/core";
import Contact from "./contact";
import BottomNav from "../../navigation/js/bottomNav";

function ContactContainer() {
  return (
    <Grid
      container
      justify="center"
      id="contactComp"
      className="contactContainer"
    >
      <Grid item xs={12} className="sectionTitle blue">
        <h2>Get in Touch</h2>
      </Grid>
      <Grid item xs={2} sm={4}></Grid>
      <Grid item xs={8} sm={4}>
        <Contact />
      </Grid>
      <Grid item xs={2} sm={4}></Grid>
      <BottomNav />
    </Grid>
  );
}

export default ContactContainer;
