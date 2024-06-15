import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Confident from "../components/toneOfVoice/Confident";
import Inspirational from "../components/toneOfVoice/Inspirational";
import Approachable from "../components/toneOfVoice/Approachable";
import Knowledgeable from "../components/toneOfVoice/Knowledgeable";

export default function ToneOfVoice() {
  return (
    <Grid container direction="row-reverse" spacing={2} justifyContent="center" m={1} pt={2}>
      <Grid item xs={12} md={4}>
        <Typography variant="h2">Tone of Voice</Typography>
      </Grid>
      <Grid container rowSpacing={2} direction={"column"} xs={12} md={8}>
        <Grid item>
          <Confident />
        </Grid>
        <Grid item>
          <Inspirational />
        </Grid>
        <Grid item>
          <Approachable />
        </Grid>
        <Grid item>
          <Knowledgeable />
        </Grid>
      </Grid>
    </Grid>
  );
}
