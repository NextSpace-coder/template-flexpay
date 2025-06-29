import { Navbar, Footer } from "../components/layout";
import { BlogHero, BlogGrid } from "../components/sections/blog";
import { CTA } from "../components/shared";
import { Container } from "../components/shared";

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <BlogHero />
        <Container>
          <BlogGrid />
        </Container>
        <Container withGradient>
          <CTA />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage; 