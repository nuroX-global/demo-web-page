import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import whiteTree from "../../assests/images/tree_white.jpg";
import Box from "@mui/material/Box";

export default function Welcome() {
  return (
    <Grid container direction="column" spacing={2} justifyContent="center" alignItems="center">
      <Grid item>
        <Typography variant="h1" align="center">Welcome To Nurox!</Typography>
      </Grid>
      <Grid item>
        <Box component="img" sx={{ height: 512 }} alt="tree" src={whiteTree} />
      </Grid>
    </Grid>
  );
}
