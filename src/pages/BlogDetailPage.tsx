import { useParams } from "react-router-dom";
import { Navbar, Footer } from "../components/layout";
import { BlogDetailContent } from "../components/sections/blog";
import { NewsletterSignup } from "../components/forms";
import { Container } from "../components/shared";

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Container>
          <BlogDetailContent slug={slug || ""} />
        </Container>
        <Container>
          <NewsletterSignup />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetailPage; 