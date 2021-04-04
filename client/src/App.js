import React from "react";
import About from "./pages/AboutUs/AboutUs";
import Arks from "./pages/Form/Form";
import Detail from "./pages/ArkCard/ArkCard";
import NoMatch from "./pages/NoMatch/NoMatch";
import Landing from "./pages/Landing/Landing"
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { grey, blue } from "@material-ui/core/colors";
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";
import Provider from "./pages/Provider/Provider";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: grey[500],
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
      minHeight: '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/charity.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
  },
}));

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <ThemeProvider theme={theme}>
        <Router>
          <div>
          <CssBaseline />
          <Typography>
            <Nav />
            <Switch>
            <Route exact path="/">
            <Landing />
            </Route>
            <Route exact path="/About">
            <About />
            </Route>
            <Route exact path="/arks">
            <Arks />
            </Route>
            <Route exact path="/arks/:id">
              <Detail />
            </Route>
            <Route exact path="/provider">
              <Provider />
            </Route>
            <Route>
              <NoMatch />
            </Route>
            </Switch>
            </Typography>
          </div>
        </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
