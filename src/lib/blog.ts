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
    try {
      // Remove possible query parameters and extension to get the slug correctly
      const fileName = filepath.split('/').pop() || '';
      const slug = fileName.split('?')[0].replace('.md', '');

      const { data, content: body } = matter(content as string);

      return {
        slug,
        title: data.title || 'Senza Titolo',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        image: data.image || '',
        category: data.category || 'Generale',
        tags: data.tags || [],
        content: body,
      };
    } catch (error) {
      console.error(`Errore nel parsing del post ${filepath}:`, error);
      return null;
    }
  }).filter((post): post is BlogPost => post !== null);

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}
