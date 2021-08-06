import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function GetMoonpy() {
  return (<div>
      <Container style={{textAlign:"center", padding: "2em", paddingTop: "8em", paddingBottom: "8em"}}>
        <Typography gutterBottom variant="h3" color="textPrimary">
          Moonpy 0.9.1-Beta.
        </Typography>
        <Typography gutterBottom variant="body1" color="textPrimary">
          Public release coming soon.
        </Typography>
        <Typography gutterBottom variant="body1" color="textPrimary">
          Interested in trying Moonpy?
        </Typography>
        <br />
        <Button
          variant="contained"
          color="secondary"
          href="mailto: benwilliamgraham@gmail.com"
        >
          Get in Touch
        </Button>
      </Container>
    </div>);
}
