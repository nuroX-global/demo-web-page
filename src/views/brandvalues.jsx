import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Environment from "../components/brandValues/Environment";
import Culture from "../components/brandValues/Culture";
import Innovation from "../components/brandValues/Innovation";
import Quality from "../components/brandValues/Quality";
import glyphs from "../assests/images/glyphs.webp";

export default function BrandValues() {
  return (
    <Grid container direction="row" spacing={2} justifyContent="center" p={3} m={1}>
      <Grid item xs={12} md={4}>
        <Box component="img" sx={{ width: 1 }} alt="glyphs" src={glyphs} />
      </Grid>
      <Grid container rowSpacing={5} direction={"column"} xs={12} md={8} alignItems="center">
        <Grid item>
          <Typography variant="h2">Brand Values</Typography>
        </Grid>
        <Grid item>
          <Environment />
        </Grid>
        <Grid item>
          <Culture />
        </Grid>
        <Grid item>
          <Innovation />
        </Grid>
        <Grid item>
          <Quality />
        </Grid>
      </Grid>
    </Grid>
  );
}
