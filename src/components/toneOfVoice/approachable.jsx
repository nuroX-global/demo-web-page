import React from "react";
import Grid from "@mui/material/Grid";

export default function Approachable() {
  return (
    <Grid container spacing={1}>
      <Grid item md={2}>
        <span>Approachable</span>
      </Grid>
      <Grid item md={10}>
        <span>
          Our tone is warm, friendly, and inviting, fostering open communication
          and building strong relationships with clients and partners.
        </span>
      </Grid>
    </Grid>
  );
}
