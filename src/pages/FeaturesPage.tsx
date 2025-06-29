import { Navbar, Footer } from "../components/layout";
import { FeaturesHero, Features, BuildingBlocks, EndToEndSoftware } from "../components/sections/features";
import { Values } from "../components/sections/about";
import { Integration } from "../components/sections/integration";
import { FAQ, CTA } from "../components/shared";
import { Container } from "../components/shared";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FeaturesHero />
        <Container>
          <Values />
        </Container>
        <Features />
        <Container>
          <BuildingBlocks />
        </Container>
        <Container>
          <EndToEndSoftware />
        </Container>
        <Integration />
        <Container>
          <FAQ />
        </Container>
        <Container withGradient>
          <CTA />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage; 