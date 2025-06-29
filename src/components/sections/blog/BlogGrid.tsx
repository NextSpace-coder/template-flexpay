import { Link } from "react-router-dom";

const BlogGrid = () => {
  const blogPosts = [
    {
      id: "unforeseen-positive-impacts-ai",
      title: "The Unforeseen Positive Impacts AI",
      category: "Management",
      date: "1/1/23",
      author: "Anna White",
      description: "Benefits of social media integration.",
      image: "https://picsum.photos/id/1020/400/300"
    },
    {
      id: "ai-transforming-lives",
      title: "AI Transforming Lives for the Better",
      category: "Design",
      date: "8/10/23", 
      author: "Chris Black",
      description: "Supports e-commerce businesses.",
      image: "https://picsum.photos/id/1021/400/300"
    },
    {
      id: "hide-advantage-ai",
      title: "Hide Advantage Artificial Intelligence",
      category: "Management",
      date: "9/10/23",
      author: "Anna White", 
      description: "Benefits of social media integration.",
      image: "https://picsum.photos/id/1022/400/300"
    },
    {
      id: "integrating-cms-social-media",
      title: "Integrating CMS with Social Media",
      category: "Management",
      date: "9/10/23",
      author: "Anna White",
      description: "Benefits of social media integration.",
      image: "https://picsum.photos/id/1023/400/300"
    },
    {
      id: "good-that-bring-everyday-life",
      title: "The Good That Bring Everyday Life",
      category: "Design",
      date: "8/10/23",
      author: "Chris Black",
      description: "CMS support e-commerce businesse.",
      image: "https://picsum.photos/id/1024/400/300"
    },
    {
      id: "ai-catalyst-positive-change",
      title: "AI as a Catalyst for Positive Change",
      category: "Web Design",
      date: "7/10/23",
      author: "Laura Green",
      description: "Strategies to improve user experience.",
      image: "https://picsum.photos/id/1025/400/300"
    },
    {
      id: "uplifting-side-ai-influence",
      title: "The Uplifting Side of AI's Influence",
      category: "Design",
      date: "6/10/23",
      author: "David Lee",
      description: "How CMS affects SEO performance.",
      image: "https://picsum.photos/id/1026/400/300"
    },
    {
      id: "ai-unlocking-new-possibilities",
      title: "How AI is Unlocking New Possibilities",
      category: "Development",
      date: "5/10/23",
      author: "Sarah Wilson",
      description: "Emerging trends in the CMS landscape.",
      image: "https://picsum.photos/id/1027/400/300"
    },
    {
      id: "inspiring-benefits-ai-modern-life",
      title: "Inspiring Benefits of AI in Modern Life",
      category: "Customizing",
      date: "4/10/23",
      author: "Michael Brown",
      description: "Developing a successful content strategy.",
      image: "https://picsum.photos/id/1028/400/300"
    },
    {
      id: "bright-side-artificial-intelligence",
      title: "The Bright Side of Artificial Intelligence",
      category: "Animation",
      date: "3/10/23",
      author: "Emily Johnson",
      description: "Tips enhance your CMS performance.",
      image: "https://picsum.photos/id/1029/400/300"
    },
    {
      id: "surprising-contributions-better-future",
      title: "Surprising Contributions Better Future",
      category: "UI Design",
      date: "2/10/23",
      author: "Jane Smith",
      description: "How to secure your CMS effectively.",
      image: "https://picsum.photos/id/1030/400/300"
    },
    {
      id: "surprising-ways-can-positively",
      title: "The Surprising Ways Can Positively",
      category: "UI Design",
      date: "1/10/23",
      author: "John Doe",
      description: "A comprehensive guide to CMS.",
      image: "https://picsum.photos/id/1031/400/300"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Management": "bg-blue-100 text-blue-800",
      "Design": "bg-green-100 text-green-800",
      "Web Design": "bg-purple-100 text-purple-800",
      "Development": "bg-orange-100 text-orange-800",
      "Customizing": "bg-pink-100 text-pink-800",
      "Animation": "bg-yellow-100 text-yellow-800",
      "UI Design": "bg-indigo-100 text-indigo-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white text-black rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <div className="text-xs text-gray-500">
                    {post.date}
                  </div>
                </div>
                
                <div className="text-xs text-gray-500 mb-2">
                  {post.author}
                </div>
                
                <h3 className="text-lg font-bold mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.description}
                </p>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-300 transition-colors"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid; 