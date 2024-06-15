import React from "react";
import Grid from "@mui/material/Grid";
import Environment from "../components/brandValues/Environment";
import Culture from "../components/brandValues/Culture";
import Innovation from "../components/brandValues/Innovation";
import Quality from "../components/brandValues/Quality";
import { Typography } from "@mui/material";

export default function BrandValues() {
  return (
    <Grid container direction="row" spacing={2} justifyContent="center" pt={2}>
      <Grid item xs={12} md={4}>
        <Typography variant="h2">Brand Values</Typography>
      </Grid>
      <Grid container rowSpacing={2} direction={"column"} xs={12} md={8}>
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
