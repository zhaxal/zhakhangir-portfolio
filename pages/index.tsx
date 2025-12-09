import { NextPage } from "next";

import { Box, Grid, Stack, useMediaQuery } from "@mui/material";

import MainTitle from "@/components/ui/MainTitle";
import InfoButton from "@/components/home-page-components/InfoButton";
import ProjectsButton from "@/components/home-page-components/ProjectsButton";
import ContactButton from "@/components/home-page-components/ContactButton";
import MenuButton from "@/components/ui/MenuButton";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
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
            <MenuButton onClick={() => router.push("/projects")}>
              Projects
            </MenuButton>
            <ContactButton />
            <MenuButton onClick={() => router.push("/experience")}>
              Experience
            </MenuButton>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
