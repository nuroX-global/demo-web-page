import React from "react";
import Grid from "@mui/material/Grid";
import Confident from "../components/toneOfVoice/Confident";
import Inspirational from "../components/toneOfVoice/Inspirational";
import Approachable from "../components/toneOfVoice/Approachable";
import Knowledgeable from "../components/toneOfVoice/Knowledgeable";

export default function ToneOfVoice() {
  return (
    <section>
      <h2>Tone Of Voice</h2>
      <Grid container rowSpacing={2} direction={"column"}>
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
    </section>
  );
}
