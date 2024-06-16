import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function Environment() {
  return (
    <Grid container spacing={2}>
      <Grid item md={4}>
      <Typography variant="h5">Environmental Consciousness</Typography>
      </Grid>
      <Grid item md={8}>
        <Typography variant="body1">
          We prioritize sustainability and eco-friendly practices, having an
          understanding of the environment, the impacts of human behaviors on
          it, and the importance of its protection.
        </Typography>
      </Grid>
    </Grid>
  );
}
