import getAboutMeData from '@/utils/api/getAboutMeData';
import getBlogData from '@/utils/api/getBlogData';
import { NextResponse } from 'next/server';

export async function GET() {
  const siteUrl = process.env.BASE_URL;

  const aboutMeData = await getAboutMeData();
  let staticDate = new Date('2024-12-17').toISOString();
  if (aboutMeData) {
    staticDate = new Date(aboutMeData.data.publishedAt).toISOString();
  }

  // Static routes
  const staticRoutes = ['/', '/blog'].map((path) => {
    return { url: `${siteUrl}${path}`, lastmod: staticDate, prio: 0.9 };
  });

  // Dynamic routes
  const posts = await getBlogData();

  let dynamicRoutes = <{ url: string; lastmod: string; prio: number }[]>[];

  if (posts) {
    dynamicRoutes = posts?.data.map((post) => {
      return {
        url: `${siteUrl}/blog/${post.documentId}`,
        lastmod: new Date(post.publishedAt).toISOString(),
        prio: 0.7,
      };
    });
  }

  // Combine routes
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  // Build sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allRoutes
      .map((item) => {
        return `<url>
      <loc>${item.url}</loc>
      <lastmod>${item.lastmod}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${item.prio}</priority>
    </url>`;
      })
      .join('')}
  </urlset>`;

  // Return response as XML
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
