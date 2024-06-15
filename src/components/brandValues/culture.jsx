import React from "react";
import Grid from "@mui/material/Grid";

export default function Culture() {
  return (
    <Grid container spacing={1}>
      <Grid item md={2}>
        <span>Cultural Integrity</span>
      </Grid>
      <Grid item md={10}>
        <span>
          Blending tradition and modernity, respecting and honouring the
          ownership of materials, traditions, and knowledges that originate from
          a particular culture or community.
        </span>
      </Grid>
    </Grid>
  );
}
