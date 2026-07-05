import { NextPage } from "next";
import { Container, Stack } from "@mui/material";

import Navbar from "@/components/Navbar";
import Intro from "@/components/sections/Intro";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
  return (
    <Container maxWidth="md" sx={{ maxWidth: { md: "44rem" }, px: 3 }}>
      <Navbar />
      <Stack spacing={{ xs: 8, md: 12 }}>
        <Intro />
        <Work />
        <Experience />
        <Contact />
      </Stack>
      <Footer />
    </Container>
  );
};

export default Home;
