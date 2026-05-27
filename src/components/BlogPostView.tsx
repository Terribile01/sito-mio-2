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
      <div className="max-w-4xl mx-auto px-6 lg:px-12 pt-32 pb-12">
        <button
          onClick={() => onNavigate("/blog")}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-app-accent-olive hover:text-app-accent-charcoal transition-colors mb-8 cursor-pointer group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Torna al Blog
        </button>

        <div className="space-y-6">
          <div className="flex items-center gap-4 text-xs font-mono text-app-accent-olive uppercase tracking-widest font-bold">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag size={14} />
              {post.category}
            </span>
          </div>

          <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-app-accent-charcoal leading-tight">
            {post.title}
          </h1>

          <p className="font-sans text-lg text-app-text-30/90 leading-relaxed italic border-l-4 border-app-accent-khaki pl-6">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 mb-16">
        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-app-accent-charcoal/5">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
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
          <div className="mt-12 pt-8 border-t border-app-accent-charcoal/10 flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-app-accent-khaki/10 text-app-accent-charcoal text-[10px] font-bold uppercase tracking-wider rounded-md">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar / Sharing */}
        <div className="lg:col-span-3 lg:sticky lg:top-32 space-y-8">
          <div className="bg-app-accent-khaki/20 p-6 rounded-xl border border-app-accent-charcoal/5">
            <h4 className="font-sans font-bold text-sm text-app-accent-charcoal mb-4 flex items-center gap-2">
              <Share2 size={16} />
              Condividi
            </h4>
            <div className="flex flex-col gap-2">
              {shareLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-2 rounded-lg text-xs font-semibold text-app-accent-charcoal transition-all bg-app-bg-60/50 ${link.color} hover:text-white`}
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-app-text-30 text-app-bg-60 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-app-accent-olive/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10 space-y-6">
            <h2 className="font-sans text-2xl md:text-3xl font-bold">Vuoi abbattere le tue barriere tecnologiche?</h2>
            <p className="font-sans text-app-bg-60/80 max-w-xl mx-auto">
              Ogni grande progetto digitale inizia con un piccolo passo. Parliamo della tua visione e trasformiamola in realtà.
            </p>
            <button
              onClick={() => onNavigate("/contatti")}
              className="inline-flex items-center gap-2 bg-app-accent-olive text-app-bg-60 px-8 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-sm hover:bg-app-accent-khaki-2 transition-all shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              Inizia il Dialogo
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
