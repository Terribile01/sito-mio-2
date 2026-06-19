import { useState, useEffect } from "react";
import { getPostBySlug, BlogPost } from "../lib/blog";
import ReactMarkdown from "react-markdown";
import {
  Calendar,
  Tag,
  ArrowLeft,
  Share2,
  Linkedin,
  Send as Telegram,
  Facebook,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import SEO from "./SEO";
import { motion } from "motion/react";

interface BlogPostViewProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export default function BlogPostView({ slug, onNavigate }: BlogPostViewProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      const data = await getPostBySlug(slug);
      setPost(data);
      setLoading(false);
      window.scrollTo(0, 0);
    }
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-app-accent-olive border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold text-app-accent-charcoal">Articolo non trovato</h2>
        <button
          onClick={() => onNavigate("/blog")}
          className="flex items-center gap-2 text-app-accent-olive font-bold hover:underline"
        >
          <ArrowLeft size={18} />
          Torna al Blog
        </button>
      </div>
    );
  }

  const shareUrl = window.location.href;
  const shareText = encodeURIComponent(post.title);

  const shareLinks = [
    {
      name: "WhatsApp",
      icon: <MessageCircle size={18} />,
      url: `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`,
      color: "hover:bg-[#25D366]"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={18} />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      color: "hover:bg-[#0077B5]"
    },
    {
      name: "Telegram",
      icon: <Telegram size={18} />,
      url: `https://t.me/share/url?url=${shareUrl}&text=${shareText}`,
      color: "hover:bg-[#0088cc]"
    },
    {
      name: "Facebook",
      icon: <Facebook size={18} />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      color: "hover:bg-[#1877F2]"
    }
  ];

  return (
    <div id="blog-post-view" className="pb-20">
      <SEO
        metadata={{
          title: `${post.title} | Blog FacilissimoWeb`,
          description: post.excerpt,
          ogTitle: post.title,
          ogDescription: post.excerpt
        }}
      />

      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 pt-40 pb-12">
        <button
          onClick={() => onNavigate("/blog")}
          className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-app-text-primary hover:text-app-accent-purple transition-all mb-12 cursor-pointer group bg-app-accent-lime px-4 py-2 border-2 border-app-text-primary"
        >
          <ArrowLeft size={18} strokeWidth={3} className="group-hover:-translate-x-2 transition-transform" />
          Indietro
        </button>

        <div className="space-y-8">
          <div className="flex items-center gap-4 text-[10px] font-mono text-app-text-primary uppercase tracking-widest font-black">
            <span className="flex items-center gap-2 bg-app-accent-orange px-3 py-1 border-2 border-app-text-primary">
              <Calendar size={14} strokeWidth={3} />
              {new Date(post.date).toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-2 bg-app-accent-green px-3 py-1 border-2 border-app-text-primary">
              <Tag size={14} strokeWidth={3} />
              {post.category}
            </span>
          </div>

          <h1 className="font-sans text-3xl sm:text-7xl font-black tracking-tighter text-app-text-primary leading-[0.9] uppercase">
            {post.title}
          </h1>

          <p className="font-sans text-xl text-app-text-primary font-bold leading-tight uppercase border-l-8 border-app-accent-purple pl-8">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 mb-20">
        <div className="aspect-video w-full rounded-none overflow-hidden shadow-none border-4 border-app-text-primary">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            width="1200"
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Main Content */}
        <div className="lg:col-span-9 prose prose-slate max-w-none prose-headings:font-sans prose-headings:text-app-accent-charcoal prose-p:font-sans prose-p:text-app-text-30 prose-p:leading-relaxed prose-strong:text-app-accent-charcoal prose-a:text-app-accent-olive prose-a:no-underline hover:prose-a:underline">
          <ReactMarkdown>{post.content}</ReactMarkdown>

          {/* Tags */}
          <div className="mt-16 pt-8 border-t-4 border-app-text-primary flex flex-wrap gap-3">
            {post.tags.map(tag => (
              <span key={tag} className="px-4 py-1 bg-app-text-primary text-white text-[10px] font-black uppercase tracking-widest border-2 border-app-text-primary">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar / Sharing */}
        <div className="lg:col-span-3 lg:sticky lg:top-40 space-y-8">
          <div className="bg-white border-4 border-app-text-primary p-8 rounded-none">
            <h4 className="font-sans font-black text-sm text-app-text-primary mb-6 flex items-center gap-3 uppercase tracking-widest">
              <Share2 size={20} strokeWidth={3} />
              Condividi
            </h4>
            <div className="flex flex-col gap-3">
              {shareLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between gap-3 p-4 border-2 border-app-text-primary text-xs font-black text-app-text-primary transition-all bg-app-bg-main hover:bg-app-accent-lime ${link.color} hover:text-app-text-primary uppercase tracking-tighter`}
                >
                  <span className="flex items-center gap-3">
                    {link.icon}
                    {link.name}
                  </span>
                  <ArrowRight size={14} strokeWidth={3} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 mt-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-app-accent-purple text-white border-4 border-app-text-primary p-12 rounded-none relative overflow-hidden text-center"
        >
          <div className="relative z-10 space-y-8">
            <h2 className="font-sans text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-[0.9]">Abbatti le <br/> barriere</h2>
            <p className="font-sans text-lg font-bold uppercase leading-tight max-w-xl mx-auto">
              Ogni grande progetto inizia con un passo. Parliamo della tua visione.
            </p>
            <button
              onClick={() => onNavigate("/contatti")}
              className="inline-flex items-center gap-3 bg-app-accent-lime text-app-text-primary px-10 py-5 rounded-none font-sans font-black uppercase tracking-tighter text-sm hover:bg-white transition-all border-4 border-app-text-primary cursor-pointer"
            >
              Inizia il Dialogo
              <ArrowRight size={20} strokeWidth={3} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
