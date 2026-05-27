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
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-app-accent-khaki/40 to-app-bg-60 w-full">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-app-accent-olive/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="font-mono text-xs md:text-sm font-semibold text-app-accent-olive tracking-widest uppercase">
              Umanesimo Digitale & Strategia
            </span>
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-app-accent-charcoal leading-tight">
              Il Blog di <span className="text-app-accent-olive italic font-serif">FacilissimoWeb</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-app-text-30/95 leading-relaxed max-w-2xl mx-auto">
              Riflessioni, guide e strategie per abbattere le barriere tecnologiche e far crescere il tuo business in modo umano e sostenibile.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 mb-8">
        <div className="flex flex-wrap items-center gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-app-accent-olive text-app-bg-60 shadow-md"
                  : "bg-app-accent-khaki/20 text-app-accent-charcoal hover:bg-app-accent-khaki/40"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/50 backdrop-blur-sm border border-app-accent-charcoal/10 rounded-xl overflow-hidden hover:shadow-xl transition-all flex flex-col h-full"
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

                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <div className="flex items-center gap-4 text-[10px] font-mono text-app-accent-olive uppercase tracking-widest font-bold">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag size={12} />
                      {post.category}
                    </span>
                  </div>

                  <h3
                    className="font-sans text-xl font-bold text-app-accent-charcoal group-hover:text-app-accent-olive transition-colors cursor-pointer leading-tight"
                    onClick={() => onNavigate(`/blog/${post.slug}`)}
                  >
                    {post.title}
                  </h3>

                  <p className="font-sans text-sm text-app-text-30/80 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-4">
                    <button
                      onClick={() => onNavigate(`/blog/${post.slug}`)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-app-accent-olive hover:text-app-accent-charcoal transition-colors cursor-pointer"
                    >
                      Leggi Articolo
                      <ChevronRight size={14} />
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
