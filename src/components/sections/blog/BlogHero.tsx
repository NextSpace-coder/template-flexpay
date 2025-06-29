import { Link } from "react-router-dom";

const BlogHero = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="relative h-96 lg:h-[500px]">
            <img 
              src="https://picsum.photos/id/1515/1200/600" 
              alt="Featured Blog Post"
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <div className="max-w-4xl">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    #Product
                  </span>
                  <span className="text-gray-300 text-sm">
                    by: Smith | 15 Oct, 24
                  </span>
                </div>
                
                <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-4">
                  The Power of Employee Motivation: Boosting Productivity and Performance
                </h1>
                
                <Link 
                  to="/blog/employee-motivation"
                  className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero; 