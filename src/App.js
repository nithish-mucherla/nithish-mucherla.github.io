import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navigation/js/navBar";
import Home from "./components/home/js/home";
import About from "./components/about/js/about";
import Experience from "./components/experience/js/experience";
import Education from "./components/education/js/education";
import Skills from "./components/skills/js/skills";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Fab, Zoom, makeStyles, useScrollTrigger } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ContactContainer from "./components/contact/js/contactContainer";

function App(props) {
  //This is a Hook that we are using to swith between dark and light themes.
  // Hook being used : useState()
  // Hooks allow us to use state and other react features without defining a class.

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") || "true"
  );
  const theme = createMuiTheme({
    palette: {
      type: darkMode === "true" ? "dark" : "light",
      primary: {
        main: "#0586ff",
      },
    },
  });
  const appClass = darkMode === "true" ? "App dark" : "App";

  React.useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const switchTheme = () => {
    darkMode === "true" ? setDarkMode("false") : setDarkMode("true");
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      position: "fixed",
      bottom: theme.spacing(3),
      right: theme.spacing(3),
    },
  }));

  function ScrollTop(props) {
    const { children } = props;
    const classes = useStyles();

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = (event) => {
      const anchor = document.querySelector("#back-to-top-anchor");

      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };

    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={appClass}>
        <Navbar switchTheme={switchTheme} mode={darkMode} />
        <span id="back-to-top-anchor"></span>
        <Home />
        <About />
        <Experience />
        <Education />
        <Skills />
        <ContactContainer />
        <ScrollTop {...props}>
          <Fab color="secondary" size="medium" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </div>
    </ThemeProvider>
  );
}

export default App;
