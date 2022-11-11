import React from "react";
import { Container, Main, Footer,  Navbar, Banner, Stat } from "@components";
import { Travel } from "@components/travel";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Main title={'Uttrakhand Tourism'} />
      <Travel />
      <Banner />
      <Stat />
      <Footer />
    </Container>
  );
};

export default Home;
