import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function Innovation() {
  return (
    <Grid container spacing={2}>
      <Grid item md={4}>
      <Typography variant="h5">Innovation & Creativity</Typography>
      </Grid>
      <Grid item md={8}>
        <Typography variant="body1">
          We continuously push the boundaries of Tech solutions, delivering
          unique and inspiring spaces that challenge norms and captivate the
          imagination.
        </Typography>
      </Grid>
    </Grid>
  );
}
