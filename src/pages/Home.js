import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  banner: { backgroundColor: theme.palette.secondary.dark, padding: "2em" },
  what: { backgroundColor: theme.palette.primary.light, padding: "2em" },
  why: { backgroundColor: theme.palette.primary.main, padding: "2em" },
  how: { backgroundColor: theme.palette.secondary.dark, padding: "2em" },
  pitch: { backgroundColor: theme.palette.primary.light, padding: "2em" },
  benefit: { backgroundColor: theme.palette.primary.light },
}));

export default function Home() {
  const classes = useStyles();
  const history = useHistory();

  const banner = (
    <div className={classes.banner}>
      <Container>
        <Grid
          container
          spacing={2}
          direction="row-reverse"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={10} md={7} lg={6}>
            <img
              src={process.env.PUBLIC_URL + "/images/banner.svg"}
              style={{ width: "100%", borderRadius: "2em" }}
            />
          </Grid>
          <Grid item xs={12} sm={10} md={7} lg={6}>
            <Typography gutterBottom variant="h2" color="textSecondary">
              Out-of-this-world Python performance.
            </Typography>
            <Typography gutterBottom variant="h4" color="textSecondary">
              High-speed, multi-platform Python without compromise.
            </Typography>
            <div style={{ textAlign: "center", padding: "2em" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => history.push("get-moonpy")}
              >
                Try Moonpy
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );

  const features = [
    {
      tagline: "Blazingly fast.",
      description: "10-to-100x speedup compared to CPython.",
      icon: process.env.PUBLIC_URL + "/images/fast.png",
    },
    {
      tagline: "Light on memory.",
      description: "Uses 38% less memory doing the same tasks",
      icon: process.env.PUBLIC_URL + "/images/light.png",
    },
    {
      tagline: "Multiplatform.",
      description: "Run anywhere, even in the browser",
      icon: process.env.PUBLIC_URL + "/images/multiplatform.png",
    },
    {
      tagline: "Advanced Packaging.",
      description: "Improved package management makes developer's lives easier",
      icon: process.env.PUBLIC_URL + "/images/packaging.png",
    },
  ];

  const what = (
    <div className={classes.what}>
      <Container>
        <Typography gutterBottom variant="h3" color="textPrimary">
          What is Moonpy?
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {features.map((feature) => (
            <Grid item xs={12} sm={10} md={6} lg={6}>
              <Card>
                <CardContent style={{ textAlign: "center" }}>
                  <img src={feature.icon} style={{ height: "4em" }} />
                  <Typography gutterBottom variant="h4" color="textPrimary">
                    {feature.tagline}
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <br />
        <Typography paragraph variant="body1" color="textPrimary">
          Moonpy is a Python distribution that allows for rapid code development
          without sacrificing performance. By dramatically increasing the
          performance of Python, Moonpy enables companies to reduce
          time-to-market, save on developer expenses, and reduce compute
          resources while opening up new opportunities in AI, web development,
          and edge computing.
        </Typography>
      </Container>
    </div>
  );

  const benefits = [
    {
      tagline: "Increase productivity.",
      description:
        "Get the full benefit of developing with Python without any of the speed and memory constraints that come with it.",
      icon: process.env.PUBLIC_URL + "/images/productivity.png",
    },
    {
      tagline: "Compute at the edge.",
      description:
        "Open up new doors for localized artificial intelligence, data science, and IoT devices.",
      icon: process.env.PUBLIC_URL + "/images/edge.png",
    },
    {
      tagline: "Save on resources.",
      description:
        "Cut costs on both hardware and electricity without changing your codebase.",
      icon: process.env.PUBLIC_URL + "/images/resources.png",
    },
  ];

  const why = (
    <div className={classes.why}>
      <Container>
        <Typography paragraph variant="h3" color="textPrimary">
          Why Moonpy?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid
            container
            item
            xs={12}
            sm={10}
            md={6}
            lg={6}
            spacing={2}
            justifyContent="center"
          >
            {benefits.map((benefit) => (
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Card className={classes.benefit} elevation={2}>
                  <CardContent>
                    <Grid container spacing={2} justifyContent="center">
                      <Grid item xs={4} sm={4} md={4} lg={4}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                          }}
                        >
                          <img
                            src={benefit.icon}
                            style={{
                              height: "4em",
                              paddingTop: "2em",
                              paddingBottom: "2em",
                            }}
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={12} md={8} lg={8}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                          }}
                        >
                          <div>
                            <Typography
                              gutterBottom
                              variant="h4"
                              color="textPrimary"
                            >
                              {benefit.tagline}
                            </Typography>
                            <Typography variant="subtitle1" color="textPrimary">
                              {benefit.description}
                            </Typography>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography paragraph variant="body1" color="textPrimary">
              These new features make Moonpy a great choice for developers and
              companies alike. Using Moonpy dramatically reduces the amount of
              time and work that goes into the development of an application,
              allowing developers to focus on what matters in a project without
              having to worry about performance limitations. No longer will
              companies be forced to choose between a costly development and a
              costly production; with Moonpy they can get the full benefit of
              developing with Python without any of the speed and memory
              constraints that come with it. Furthermore, software implemented
              in Python will now require less processing power, cutting costs on
              both hardware and electricity without requiring any changes to the
              codebase.
            </Typography>
            <Typography paragraph variant="body1" color="textPrimary">
              Moonpy also opens up many new opportunities to use the Python
              programming language. Because of its increased speed and lower
              memory overhead, Python can now be used efficiently for many small
              embedded systems such as those in IoT and other real-time
              computing devices. Python code can also be converted to an
              efficient WebAssembly binary that can be run in the browser, often
              with far greater performance than JavaScript or PHP. These
              abilities open up the opportunity to finally bring the wonders of
              Python and its incredible ecosystem to the world of web
              development and edge computing.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );

  const how = (
    <div className={classes.how}>
      <Container>
        <Typography gutterBottom variant="h3" color="textSecondary">
          How does Moonpy work?
        </Typography>
        <div style={{ textAlign: "center" }}>
          <img
            src="https://docs.google.com/drawings/d/e/2PACX-1vTwwIElE_8IEJTQZTSAaGBIOK1qAmU3nUNdeXfBLFzqmyop3kw9iopUvad-ox8FDJUuDY1r8hC550tj/pub?w=1065&amp;h=1129"
            style={{ width: "100%", maxWidth: "800px" }}
          />
        </div>
      </Container>
    </div>
  );

  const pitch = (
    <div className={classes.pitch}>
      <Container>
        <Typography gutterBottom variant="h3" color="textPrimary">
          Watch the pitch:
        </Typography>
        <Typography paragraph variant="body1" color="textPrimary">
          See Moonpy's first-prize entry to CMU's 2021 Mcginnis Venture
          Competition.
        </Typography>
        <div style={{ textAlign: "center", backgroundColor: "#000" }}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/CN4URQYR0IQ"
            title="YouTube video player"
            frameborder="0px"
            allow={
              "accelerometer;" +
              "clipboard-write;" +
              "encrypted-media;" +
              "gyroscope;" +
              "picture-in-picture"
            }
            allowfullscreen
          ></iframe>
        </div>
      </Container>
    </div>
  );

  return (
    <div>
      {banner}
      {what}
      {why}
      {how}
      {pitch}
    </div>
  );
}
