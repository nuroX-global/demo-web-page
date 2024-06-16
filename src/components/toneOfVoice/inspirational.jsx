import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function Inspirational() {
  return (
    <Grid container spacing={2}>
      <Grid item md={4}>
        <Typography variant="h5">Inspirational</Typography>
      </Grid>
      <Grid item md={8}>
        <Typography variant="body1">
          We aim to inspire and ignite creativity through our tone, encouraging
          clients and stakeholders to envision possibilities and embrace
          innovation.
        </Typography>
      </Grid>
    </Grid>
  );
}
