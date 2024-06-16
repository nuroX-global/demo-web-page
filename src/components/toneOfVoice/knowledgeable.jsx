import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function Knowledgeable() {
  return (
    <Grid container spacing={2}>
      <Grid item md={4}>
        <Typography variant="h5">Knowledgeable</Typography>
      </Grid>
      <Grid item md={8}>
        <Typography variant="body1">
          We convey our expertise and deep understanding of technology
          principles and practices, establishing ourselves as trusted
          authorities in the industry.
        </Typography>
      </Grid>
    </Grid>
  );
}
