import React from "react";
import Grid from "@mui/material/Grid";

export default function Environment() {
  return (
    <Grid container spacing={1}>
      <Grid item md={2}>
        <span>Environmental Consciousness</span>
      </Grid>
      <Grid item md={10}>
        <span>
          We prioritize sustainability and eco-friendly practices, having an
          understanding of the environment, the impacts of human behaviors on
          it, and the importance of its protection.
        </span>
      </Grid>
    </Grid>
  );
}
