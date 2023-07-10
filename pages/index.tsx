import { NextPage } from "next";

import { Box, Grid, Stack, useMediaQuery } from "@mui/material";

import MainTitle from "@/components/ui/MainTitle";
import InfoButton from "@/components/home-page-components/InfoButton";
import ProjectsButton from "@/components/home-page-components/ProjectsButton";
import ContactButton from "@/components/home-page-components/ContactButton";

const Home: NextPage = () => {
  const w540 = useMediaQuery("(min-width:540px)");

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#202025",
      }}
    >
      <MainTitle />

      <Grid
        container
        justifyContent="flex-end"
        alignItems="flex-end"
        spacing={1}
        sx={{ height: "100%" }}
      >
        <Grid p={w540 ? "4rem" : "1rem"} item xs={4}>
          <Stack alignItems="flex-end">
            <InfoButton />
            <ProjectsButton />
            <ContactButton />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
