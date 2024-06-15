import React from "react";
import Grid from "@mui/material/Grid";

export default function Knowledgeable() {
  return (
    <Grid container spacing={1}>
      <Grid item md={2}>
        <span>Knowledgeable</span>
      </Grid>
      <Grid item md={10}>
        <span>
          We convey our expertise and deep understanding of technology
          principles and practices, establishing ourselves as trusted
          authorities in the industry.
        </span>
      </Grid>
    </Grid>
  );
}
