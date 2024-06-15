import React from "react";
import Grid from "@mui/material/Grid";
import Environment from "../components/brandValues/Environment";
import Culture from "../components/brandValues/Culture";
import Innovation from "../components/brandValues/Innovation";
import Quality from "../components/brandValues/Quality";

export default function BrandValues() {
  return (
    <section>
      <h2>Brand Values</h2>
      <Grid container rowSpacing={2} direction={"column"}>
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
    </section>
  );
}
