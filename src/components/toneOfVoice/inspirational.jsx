import React from "react";
import Grid from "@mui/material/Grid";

export default function Inspirational() {
  return (
    <Grid container spacing={1}>
      <Grid item md={2}>
        <span>Inspirational</span>
      </Grid>
      <Grid item md={10}>
        <span>
          We aim to inspire and ignite creativity through our tone, encouraging
          clients and stakeholders to envision possibilities and embrace
          innovation.
        </span>
      </Grid>
    </Grid>
  );
}
