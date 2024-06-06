import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
// import LinkIcon from "@material-ui/icons/Link";
import "../css/experience.css";
import Paper from "@material-ui/core/Paper";
import { Timeline } from "@material-ui/icons";
import {
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

function ExperienceItem(props) {
  const [paperElevation, setPaperElevation] = useState(3);

  const Role = ({ info }) => (
    <List>
      <ListItem>
        <ListItemIcon>
          <Timeline />
        </ListItemIcon>
        <ListItemText primary={<b>{info.role}</b>} />
      </ListItem>
      <ListItem>
        <ListItemText inset secondary={info.dur} />
      </ListItem>
      {info.des && (
        <ListItem className="sub-content">
          <ListItemText inset>{info.des}</ListItemText>
        </ListItem>
      )}
      <ListItem>
        <ListItemText inset>
          {info.skills?.map((v, i) => (
            <React.Fragment key={v}>
              <Chip className="skillChip" label={v} color="primary" />{" "}
            </React.Fragment>
          ))}
        </ListItemText>
      </ListItem>
    </List>
  );

  const Roles = ({ list }) => {
    return list.map((v, i) => <Role info={v} key={i} />);
  };

  return (
    <Paper
      elevation={paperElevation}
      onMouseOver={() => setPaperElevation(20)}
      onMouseOut={() => setPaperElevation(3)}
      className="xpItem"
    >
      <Grid container justifycontent="center" data-aos="fade-up">
        <Grid item xs={12} md={3}>
          <a href={props.weblink} rel="noopener">
            <img alt={props.alt} src={props.src} className="xpLogo" />
          </a>
        </Grid>
        <Grid item xs={12} md={9}>
          <List>
            <ListItem>
              <b>{props.org}</b>
            </ListItem>
            <Roles list={props.roles} />
          </List>
        </Grid>
      </Grid>
    </Paper>
  );
}

// function displayProofLink(param) {
//   if (param !== "")
//     return (
//       <a href={param} rel="noopener noreferrer" target="_blank">
//         <LinkIcon color="disabled" />
//       </a>
//     );
// }
export default ExperienceItem;
