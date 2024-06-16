import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function Quality() {
  return (
    <Grid container spacing={2}>
      <Grid item md={4}>
      <Typography variant="h5">Quality and Craftsmanship</Typography>
      </Grid>
      <Grid item md={8}>
        <Typography variant="body1">
          Meticulous attention to detail and collaboration with skilled experts
          result in technology that showcase the highest standards of quality
          and craftsmanship.
        </Typography>
      </Grid>
    </Grid>
  );
}
