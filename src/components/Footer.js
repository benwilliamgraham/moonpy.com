import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  page: {
    background: theme.palette.primary.main,
    padding: "2em",
  },
}));

const messages = [
  "Benjamin Graham - benwilliamgraham@gmail.com",
  "Copyright © 2021 Beneficium, LLC.",
  "All rights reserved.",
];

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <Container>
        {messages.map((message) => (
          <Typography variant="subtitle1" align="right" color="textPrimary">
            {message}
          </Typography>
        ))}
      </Container>
    </div>
  );
}
