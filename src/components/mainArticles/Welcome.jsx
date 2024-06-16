import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import blackLogo from "../../assests/images/blackk_logo_x.png";
import Box from "@mui/material/Box";

export default function Welcome() {
  return (
    <Grid
      container
      direction="column"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      p={5}
    >
      <Grid item>
        <Typography variant="h1" align="center">
          Meet nuroX!
        </Typography>
      </Grid>
      <Grid item>
        <Box component="img" sx={{ height: 512 }} alt="logo" src={blackLogo} />
      </Grid>
    </Grid>
  );
}
