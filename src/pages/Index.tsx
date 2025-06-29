import { Navbar, Footer } from '../components/layout';
import { Hero, Benefits, Testimonials } from '../components/sections/home';
import { Partners } from '../components/sections/about';
import { Features } from '../components/sections/features';
import { Integration } from '../components/sections/integration';
import { Pricing } from '../components/sections/pricing';
import { FAQ } from '../components/shared';
import { Container } from '../components/shared';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
