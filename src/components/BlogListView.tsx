import { useState, useEffect } from "react";
import { getAllPosts, BlogPost } from "../lib/blog";
import { Calendar, Tag, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

interface BlogListViewProps {
  onNavigate: (path: string) => void;
}

export default function BlogListView({ onNavigate }: BlogListViewProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Tutti");

  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
      setFilteredPosts(allPosts);

      const cats = ["Tutti", ...new Set(allPosts.map(post => post.category))];
      setCategories(cats);
    }
    fetchPosts();
  }, []);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    if (category === "Tutti") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.category === category));
    }
  };

  return (
    <div id="blog-list-view" className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-app-bg-main border-b-4 border-app-text-primary w-full text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="font-mono text-xs md:text-sm font-bold text-app-text-primary tracking-widest uppercase bg-app-accent-green px-3 py-1 border-2 border-app-text-primary">
              Blog & Strategia
            </span>
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-app-text-primary leading-[0.9] uppercase">
              Umanesimo <br/> <span className="text-app-accent-purple">Digitale</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 mb-12">
        <div className="flex flex-wrap items-center gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-6 py-3 border-4 font-sans font-black text-xs uppercase tracking-tighter transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-app-accent-purple text-white border-app-text-primary"
                  : "bg-white text-app-text-primary border-app-text-primary hover:bg-app-accent-lime"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-4 border-app-text-primary bg-app-text-primary">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-app-bg-main border-app-text-primary md:border-r-4 border-b-4 last:border-r-0 flex flex-col h-full"
              >
                <div
                  className="aspect-video w-full overflow-hidden cursor-pointer"
                  onClick={() => onNavigate(`/blog/${post.slug}`)}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width="800"
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow space-y-6">
                  <div className="flex items-center gap-4 text-[10px] font-mono text-app-text-primary uppercase tracking-widest font-black">
                    <span className="flex items-center gap-1.5 bg-app-accent-orange px-2 py-0.5 border border-app-text-primary">
                      <Calendar size={12} strokeWidth={3} />
                      {new Date(post.date).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1.5 bg-app-accent-lime px-2 py-0.5 border border-app-text-primary">
                      <Tag size={12} strokeWidth={3} />
                      {post.category}
                    </span>
                  </div>

                  <h3
                    className="font-sans text-2xl font-black text-app-text-primary group-hover:text-app-accent-purple transition-colors cursor-pointer leading-[0.9] uppercase tracking-tighter"
                    onClick={() => onNavigate(`/blog/${post.slug}`)}
                  >
                    {post.title}
                  </h3>

                  <p className="font-sans text-sm text-app-text-primary font-bold leading-tight line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-6">
                    <button
                      onClick={() => onNavigate(`/blog/${post.slug}`)}
                      className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-tighter text-app-text-primary hover:text-app-accent-purple transition-colors cursor-pointer group/btn"
                    >
                      Leggi Articolo
                      <ChevronRight size={18} strokeWidth={3} className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-app-text-30/60 font-serif italic">Nessun articolo trovato per questa categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
