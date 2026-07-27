import { NextPage } from "next";

import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Capabilities from "@/components/sections/Capabilities";
import Experience from "@/components/sections/Experience";
import Publications from "@/components/sections/Publications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import CursorDot from "@/components/ui/CursorDot";

const Home: NextPage = () => (
  <>
    <Header />
    {/* tabIndex -1 so the skip link can actually move focus here */}
    <main id="main" tabIndex={-1}>
      <Hero />
      <Work />
      <Capabilities />
      <Experience />
      <Publications />
      <Contact />
    </main>
    <Footer />
    <CursorDot />
  </>
);

export default Home;
