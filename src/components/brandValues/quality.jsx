import React from "react";
import Grid from "@mui/material/Grid";

export default function Quality() {
  return (
    <Grid container spacing={1}>
      <Grid item md={2}>
        <span>Quality and Craftsmanship</span>
      </Grid>
      <Grid item md={10}>
        <span>
          Meticulous attention to detail and collaboration with skilled experts
          result in technology that showcase the highest standards of quality
          and craftsmanship.
        </span>
      </Grid>
    </Grid>
  );
}
