import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function NotFound() {
  return (
    <Container style={{ textAlign: "center" }}>
      <Typography gutterBottom variant="h3" color="textPrimary">
        Oops, page not found!
      </Typography>
    </Container>
  );
}
