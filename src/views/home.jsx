import React from "react";
import Grid from "@mui/material/Grid";
import Welcome from "../components/mainArticles/Welcome";
import BrandValues from "./BrandValues";
import ToneOfVoice from "./ToneOfVoice";
import Box from "@mui/material/Box";
import Intro from "../components/mainArticles/Intro";
import cyborg from "../assests/images/Cyborg.jpg";

export default function Home() {
  return (
    <Grid container direction="column" spacing={5}>
      <Grid item>
        <Welcome />
      </Grid>
      <Grid
        container
        direction="row"
        spacing={1}
        bgcolor="#000"
        color="#fff"
        ml={2}
        p={1}
      >
        <Grid item xs={12} md={6}>
          <Intro />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{ width: 1 }}
            alt="logo black"
            src={cyborg}
          />
        </Grid>
      </Grid>
      <Grid item>
        <BrandValues />
      </Grid>
      <Grid item>
        <ToneOfVoice />
      </Grid>
    </Grid>
  );
}
