import React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export default function Intro() {
  return (
    <Stack spacing={2} pl={2} ml={2}>
      <Typography variant="h4" fontSize={22}>
        At NuroX, we stand at the vanguard of AI and technology, revolutionizing
        data consciousness, asset, and information lifecycle management for
        enterprises, large organizations, and governments. As a premier entity,
        our commitment transcends generic analytics; we delve deep into asset
        information as our niche, setting us apart in the market.
      </Typography>
      <Typography variant="h4" fontSize={22}>
        Our rigorous data management, coupled with cutting-edge AI solutions, is
        encapsulated in state-of-the-art software that not only meets but sets
        global benchmarks. We are not just participants but leaders in research
        and development, advocating for industry standards that resonate
        globally.
      </Typography>
      <Typography variant="h4" display="inline" fontSize={22}>
        As we push the boundaries of development, we remain conscientiously
        committed to our planet, optimizing designs and algorithms with the
        latest computational cost-cutting techniques to ensure our operations
        are efficient, advanced, and sustainable.
      </Typography>
      <Typography variant="h4" display="inline" fontSize={22}>
        At NuroX, innovation, global excellence, and environmental stewardship
        are the pillars upon which we build our legacy, aiming to stand tall
        among the giants in the tech industry
      </Typography>
    </Stack>
  );
}
