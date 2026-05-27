import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  tags: string[];
  content: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const modules = import.meta.glob('../../content/blog/*.md', { query: '?raw', import: 'default', eager: true });

  const posts = Object.entries(modules).map(([filepath, content]) => {
    const slug = filepath.split('/').pop()?.replace('.md', '') || '';
    const { data, content: body } = matter(content as string);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      image: data.image,
      category: data.category,
      tags: data.tags || [],
      content: body,
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}
