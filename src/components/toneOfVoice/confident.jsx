import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function Confident() {
  return (
    <Grid container spacing={2}>
      <Grid item md={4}>
        <Typography variant="h5">Confident</Typography>
      </Grid>
      <Grid item md={8}>
        <Typography variant="body1">
          Our tone reflects a sense of assurance and expertise in our field,
          showcasing our confidence in delivering exceptional services.
        </Typography>
      </Grid>
    </Grid>
  );
}
