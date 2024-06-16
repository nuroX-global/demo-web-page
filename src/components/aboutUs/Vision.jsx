import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function Vision() {
  return (
    <Grid container spacing={2}>
      <Grid item md={3}>
        <Typography variant="h5">Vision:</Typography>
      </Grid>
      <Grid item md={9}>
        <Typography variant="body">
          A future where nuroX is at the heart of a data revolution, bringing
          consciousness to datasets worldwide, driving progress, enabling
          lifecycle capitalization of assets and information, and fostering an
          era of responsible technological advancement with sustainability at
          its core
        </Typography>
      </Grid>
    </Grid>
  );
}
