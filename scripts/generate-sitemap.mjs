import fs from 'fs';
import path from 'path';

const SITE_CONFIG_PATH = './src/site-config.json';
const BLOG_CONTENT_PATH = './content/blog';
const OUTPUT_SITEMAP = './public/sitemap.xml';
const BASE_URL = 'https://facilissimoweb.it'; // Base URL per la sitemap

async function generateSitemap() {
  console.log('Generazione sitemap.xml...');

  const config = JSON.parse(fs.readFileSync(SITE_CONFIG_PATH, 'utf-8'));
  const sitemapItems = config.sitemap;

  let urls = sitemapItems.map((item) => {
    // Gestione rotte statiche (rimuovendo il concetto di hash per la sitemap SEO standard,
    // anche se il sito usa hash routing, i motori preferiscono URL puliti o gli URL completi)
    return `${BASE_URL}/#${item.path === '/' ? '' : item.path}`;
  });

  // Aggiunta articoli del blog
  if (fs.existsSync(BLOG_CONTENT_PATH)) {
    const files = fs.readdirSync(BLOG_CONTENT_PATH);
    files.forEach((file) => {
      if (file.endsWith('.md')) {
        const slug = file.replace('.md', '');
        urls.push(`${BASE_URL}/#/blog/${slug}`);
      }
    });
  }

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${url === BASE_URL + '/#' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  fs.writeFileSync(OUTPUT_SITEMAP, sitemapXml);
  console.log(`Sitemap generata con successo in ${OUTPUT_SITEMAP}`);
}

generateSitemap();
