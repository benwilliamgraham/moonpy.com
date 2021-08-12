import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default function Performance() {
  return (
    <Container style={{ padding: "2em" }}>
      <Typography gutterBottom variant="h3" color="textPrimary">
        How Moonpy compares to CPython:
      </Typography>
      <div style={{ textAlign: "center", overflow: "auto" }}>
        <iframe
          width="691"
          height="428"
          seamless
          frameborder="0"
          scrolling="no"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQAf3_vpZBT3LjZocpJ1nrnTO9J4TBxXZL8wkF16Yc2i6aPNapKI0k03JlBWkdyatflfEQ-6bi-YGD4/pubchart?oid=2140795582&amp;format=interactive"
        ></iframe>
        <Typography gutterBottom variant="subtitle1" color="textPrimary">
          View the benchmarks{" "}
          <Link
            color="textPrimary"
            underline="always"
            href="https://github.com/benwilliamgraham/moonpy/tree/main/benchmarks"
          >
            here
          </Link>
          .
        </Typography>
      </div>
      <br />
      <br />
      <Typography gutterBottom variant="body1" color="textPrimary">
        Moonpy is able to run Python code extremely efficiently without
        compromising any of its features. Being an independent distribution,
        Moonpy is not hampered by the limitations of CPython. Its combination of
        ahead-of-time compiler, novel data-oriented runtime, and expanded C/C++
        interface make Moonpy a one-of-a-kind programming environment.
      </Typography>
    </Container>
  );
}
