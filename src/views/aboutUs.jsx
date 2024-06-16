import React from "react";
import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Mission from "../components/aboutUs/Mission";
import Vision from "../components/aboutUs/Vision";

export default function AboutUs() {
  return (
    <Grid
      container
      direction="row"
      spacing={2}
      justifyContent="center"
      p={3}
      m={1}
    >
      <Grid item>
        <Typography variant="h2">Who are we?</Typography>
      </Grid>
      <Grid item>
        <Mission />
      </Grid>
      <Grid item>
        <Vision />
      </Grid>
    </Grid>
  );
}
