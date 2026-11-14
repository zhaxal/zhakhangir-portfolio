import { NextPage } from "next";

import Header from "@/components/Header";
import Approach from "@/components/sections/Approach";
import Junction from "@/components/sections/Junction";
import Background from "@/components/sections/Background";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const Home: NextPage = () => (
  <>
    <Header />
    {/* tabIndex -1 so the skip link can actually move focus here */}
    <main id="main" tabIndex={-1}>
      <Approach />
      <Junction />
      <Background />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Home;
