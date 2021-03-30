import React from "react";
import Album from "./pages/landing";
import Arks from "./pages/Arks";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue, red } from "@material-ui/core/colors"
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: red[500],
    }
  }
})

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography>
        <Router>
          <div>
            <Nav />
            <Switch>
            <Route exact path="/">
            <Album />
            </Route>
            <Route exact path="/arks">
            <Arks />
            </Route>
            <Route exact path="/arks/:id">
              <Detail />
            </Route>
            <Route>
              <NoMatch />
            </Route>
            </Switch>
          </div>
        </Router>
      </Typography>
    </ThemeProvider>
  );
}

export default App;
