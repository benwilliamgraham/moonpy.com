import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbar: { backgroundColor: theme.palette.primary.light },
  menuBar: {
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    marginLeft: "auto",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const links = [
  {
    name: "Performance",
    path: "performance",
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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <div className={classes.menuBar}>
              {links.map((item) => (
                <Button onClick={() => history.push(item.path)}>
                  {item.name}
                </Button>
              ))}
            </div>
            <div className={classes.menuButton}>
              <Button
                aria-controls="menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MenuIcon color="secondary" />
              </Button>
              <Menu
                id="menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {links.map((item) => (
                  <MenuItem>
                    <Button
                      onClick={() => {
                        handleClose();
                        history.push(item.path);
                      }}
                    >
                      {item.name}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </div>
  );
}
