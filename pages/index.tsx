import { NextPage } from "next";

import { Box, Typography } from "@mui/material";
import BgAnimation from "./BgAnimation";

const Home: NextPage = () => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        padding: "1rem",
      }}
    >
      <Box
        component="div"
        position="relative"
        sx={{ height: "100%", border: "1px solid white" }}
      >
        <BgAnimation />
      </Box>
    </Box>
  );
};

export default Home;
