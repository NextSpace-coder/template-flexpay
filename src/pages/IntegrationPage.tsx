import { Navbar, Footer } from "../components/layout";
import { IntegrationHero, AllIntegrations } from "../components/sections/integration";
import { CTA } from "../components/shared";
import { Container } from "../components/shared";

const IntegrationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <IntegrationHero />
        <Container>
          <AllIntegrations />
        </Container>
        <Container withGradient>
          <CTA />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default IntegrationPage; 