import { Hero, Benefits, Testimonials } from "../components/sections/home";
import { Partners } from "../components/sections/about";
import { Features } from "../components/sections/features";
import { Integration } from "../components/sections/integration";
import { Pricing } from "../components/sections/pricing";
import { FAQ, CTA } from "../components/shared";
import { Blog } from "../components/sections/blog";
import { Container } from "../components/shared";

const HomePage = () => {
  return (
    <main className="main">
      <Hero />
      <Container>
        <Partners />
      </Container>
      <Features />
      <Integration />
      <Benefits />
      <Testimonials />
      <Pricing />
      <Container>
        <FAQ />
      </Container>
      <Blog />
      <Container withGradient>
        <CTA />
      </Container>
    </main>
  );
};

export default HomePage; 