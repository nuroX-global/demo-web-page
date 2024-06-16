import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function Approachable() {
  return (
    <Grid container spacing={2}>
      <Grid item md={4}>
        <Typography variant="h5">Approachable</Typography>
      </Grid>
      <Grid item md={8}>
        <Typography variant="body1">
          Our tone is warm, friendly, and inviting, fostering open communication
          and building strong relationships with clients and partners.
        </Typography>
      </Grid>
    </Grid>
  );
}
