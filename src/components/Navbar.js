import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbar: { backgroundColor: theme.palette.primary.light },
}));

const links = [
  {
    name: "Examples",
    path: "examples",
  },
  {
    name: "About Us",
    path: "about-us",
  },
  {
    name: "Get Moonpy",
    path: "get-moonpy",
  },
];

export default function Navbar() {
  const history = useHistory();
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <div>
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        className={classes.navbar}
      >
        <Container>
          <Toolbar disableGutters>
            <Button onClick={() => history.push("/")}>
              <img
                src={process.env.PUBLIC_URL + "/images/moonpy.svg"}
                style={{ height: "2em", paddingBottom: "0.5em" }}
              />
            </Button>
            <div style={{ marginLeft: "auto" }}>
              {links.map((item) => (
                <Button onClick={() => history.push(item.path)}>
                  {item.name}
                </Button>
              ))}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </div>
  );
}
