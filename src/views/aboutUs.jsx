import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Mission from "../components/aboutUs/Mission";
import Vision from "../components/aboutUs/Vision";
import tree from "../assests/images/tree_white.jpg";

export default function AboutUs() {
  return (
    <Grid
      container
      direction="row"
      spacing={5}
      justifyContent="center"
      p={3}
      pt={5}
      mt={5}
      mr={5}
    >
      <Grid item xs={12} md={4}>
        <Box component="img" sx={{ width: 1 }} alt="tree" src={tree} />
      </Grid>
      <Grid
        container
        rowSpacing={6}
        direction={"column"}
        xs={12}
        md={8}
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h2">Who are we?</Typography>
        </Grid>
        <Grid item>
          <Vision />
        </Grid>
        <Grid item>
          <Mission />
        </Grid>
      </Grid>
    </Grid>
  );
}
