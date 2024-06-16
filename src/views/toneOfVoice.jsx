import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Confident from "../components/toneOfVoice/Confident";
import Inspirational from "../components/toneOfVoice/Inspirational";
import Approachable from "../components/toneOfVoice/Approachable";
import Knowledgeable from "../components/toneOfVoice/Knowledgeable";
import blackTree from "../assests/images/tree_black.jpg";

export default function ToneOfVoice() {
  return (
    <Grid
      container
      direction="row-reverse"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      ml={-1}
      pl={6}
      bgcolor="#000"
      color="#fff"
    >
      <Grid item xs={12} md={4}>
        <Box component="img" sx={{ width: 1 }} alt="tree" src={blackTree} />
      </Grid>
      <Grid container rowSpacing={5} direction={"column"} xs={12} md={8} justifyContent="space-between">
        <Typography variant="h2">Tone of Voice</Typography>
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
