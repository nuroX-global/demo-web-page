import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function Culture() {
  return (
    <Grid container spacing={2}>
      <Grid item md={4}>
        <Typography variant="h5">Cultural Integrity</Typography>
      </Grid>
      <Grid item md={8}>
        <Typography variant="body1">
          Blending tradition and modernity, respecting and honouring the
          ownership of materials, traditions, and knowledges that originate from
          a particular culture or community.
        </Typography>
      </Grid>
    </Grid>
  );
}
