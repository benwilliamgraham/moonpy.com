import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Examples from "./pages/Examples.js";
import AboutUs from "./pages/AboutUs.js";
import GetMoonpy from "./pages/GetMoonpy.js";
import NotFound from "./pages/NotFound.js";
import Layout from "./components/Layout";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { grey, yellow } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#FFF",
      main: "#F8F8F8",
      dark: "#ECEFF4",
    },
    secondary: {
      light: "#434C5E",
      main: "#3B4252",
      dark: "#2E3440",
    },
    text: {
      primary: "#4C566A",
      secondary: "#ECEFF4",
    },
  },
  typography: {
    fontFamily: "IBM Plex Sans",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h2: {
      fontWeight: "bold",
    },
    h3: {
      fontWeight: "bold",
    },
    body1: {
      fontSize: "1.2em",
    },
    subtitle1: {
      fontSize: "1em"
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/examples" component={Examples} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/get-moonpy" component={GetMoonpy} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
