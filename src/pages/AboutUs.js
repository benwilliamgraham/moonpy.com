import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  members: { backgroundColor: theme.palette.primary.light, padding: "2em" },
  jobs: {
    backgroundColor: theme.palette.primary.light,
    padding: "2em",
    textAlign: "center",
  },
}));

export default function AboutUs() {
  const classes = useStyles();

  const members = [
    {
      name: "Benjamin Graham",
      position: "Chief Executive Officer",
      image: process.env.PUBLIC_URL + "/images/Benjamin Graham.png",
    },
    {
      name: "Jaxon",
      position: "Mascot",
      image: process.env.PUBLIC_URL + "/images/Jaxon.png",
    },
  ];

  return (
    <div>
      <div className={classes.members}>
        <Container>
          <Typography gutterBottom variant="h3" color="textPrimary">
            Meet the team:
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {members.map((member) => (
              <Grid item xs={12} sm={6} md={5} lg={4}>
                <Card>
                  <CardMedia
                    component="img"
                    image={member.image}
                    title={member.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" color="textPrimary">
                      {member.name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      color="textPrimary"
                    >
                      {member.position}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <br />
          <br />
          <Typography gutterBottom variant="body1" color="textPrimary">
            Benjamin Graham, the founder of Moonpy, is a senior in Electrical
            and Computer Engineering at Carnegie Mellon University. During one
            of his internships, Ben was tasked with translating prototype Python
            code to C for use on an embedded device. This, along with first-hand
            experience from other personal projects, highlighted the tradeoff
            between development speed and runtime performance and inspired him
            to begin the development of a language that could blend the ease of
            Python with the speed of C. After several months of development, Ben
            had the realization that many of the novel optimization techniques
            he developed could also be applied to unaltered Python, at which
            point he pivoted and began the development of Moonpy. For the past
            year and a half, Ben has spent his free time working on both the
            technological and business aspects of the distribution, and he can't
            wait to share his technology with the world.
          </Typography>
        </Container>
      </div>
      <div className={classes.jobs}>
        <Container>
          <Typography gutterBottom variant="body1" color="textPrimary">
            Have a love for <b>efficiency</b>? Interested in <b>cutting-edge</b>{" "}
            compiler technology?
          </Typography>
          <Typography gutterBottom variant="h5" color="textPrimary">
            <b>If so, come work at Moonpy!</b>
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
      </div>
    </div>
  );
}
