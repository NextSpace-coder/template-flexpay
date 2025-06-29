import { Navbar, Footer } from "../components/layout";
import { AboutHero, StatsCards, AboutContent, Values, Team, Partners } from "../components/sections/about";
import { CTA, Container } from "../components/shared";
import { FC } from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="">
        <Container withGradient>
          <AboutHero />
          <StatsCards />
        </Container>
        <Container>
          <AboutContent />
        </Container>
        <Container>
          <Values />
        </Container>
        <Container>
          <Team />
        </Container>
        <Container>
          <Partners />
        </Container>
        <Container withGradient>
          <CTA />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage; 