import { Navbar, Footer } from "../components/layout";
import { PricingHero, PricingPlans, PricingBenefits } from "../components/sections/pricing";
import { Partners } from "../components/sections/about";
import { CTA } from "../components/shared";
import { Container } from "../components/shared";

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PricingHero />
        <PricingPlans />
        <Container>
          <Partners />
        </Container>
        <Container>
          <PricingBenefits />
        </Container>
        <Container withGradient>
          <CTA />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage; 