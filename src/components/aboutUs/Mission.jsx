import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function Mission() {
  return (
    <Grid container spacing={2}>
      <Grid item md={3}>
        <Typography variant="h5">Mission Statement:</Typography>
      </Grid>
      <Grid item md={9}>
        <Typography variant="body1">
          At nuroX, our mission is to redefine the standards of data
          consciousness and asset information management through the power of
          cutting-edge AI and technology. We are dedicated to providing
          innovative solutions that offer unparalleled insights and operational
          excellence, ensuring our products align with and exceed global
          benchmarks.
        </Typography>
        <Typography variant="body1">
          Our commitment goes beyond technological advancement; we strive to
          drive progress and transformation with an unwavering commitment to
          environmental stewardship. Through our relentless pursuit of
          excellence, sustainability, and global leadership, we aim to be at the
          forefront of the data revolution, delivering advanced technology that
          makes a significant and responsible impact worldwide.
        </Typography>
      </Grid>
    </Grid>
  );
}
