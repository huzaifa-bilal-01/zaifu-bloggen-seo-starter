// import { siteConfig } from '@/lib/config/site';

// import type { Blog, WithContext } from 'schema-dts';

// const blogUrl = `${siteConfig.baseUrl}/blog`;

// const blogSchema: WithContext<Blog> = {
//     '@context': 'https://schema.org',
//     '@type': 'Blog',
//     name: 'Blog',
//     description: siteConfig.description,
//     url: blogUrl,
//     author: {
//         '@type': 'Organization',
//         name: siteConfig.author.name,
//         url: siteConfig.author.url,
//         logo: {
//             '@type': 'ImageObject',
//             url: siteConfig.author.logo
//         }
//     },
//     publisher: {
//         '@type': 'Organization',
//         name: siteConfig.author.name,
//         logo: {
//             '@type': 'ImageObject',
//             url: siteConfig.author.logo
//         }
//     },
//     image: {
//         '@type': 'ImageObject',
//         url: `${siteConfig.baseUrl}/og?title=${encodeURIComponent(siteConfig.title)}`,
//         width: '1200',
//         height: '630',
//         description: `Blog | ${siteConfig.title}`
//     },
//     keywords: siteConfig.keywords,
//     sameAs: siteConfig.social.sameAs,
//     potentialAction: {
//         '@type': 'ReadAction',
//         target: [
//             {
//                 '@type': 'EntryPoint',
//                 urlTemplate: blogUrl
//             }
//         ]
//     }
// };

// const BlogSchema: React.FC = () => {
//     return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />;
// };

// export default BlogSchema;


// src/components/BlogSchema.jsx
import { siteConfig } from '@/lib/config/site';
import { Blog, WithContext } from 'schema-dts';

const blogSchema: WithContext<Blog> = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "url": `${siteConfig.baseUrl}/blog`,
  "name": `Blog - ${siteConfig.title}`,
  "description":  'Learn how to build, customize, and grow your site with Bloggen SEO Starter and Bloggen AI. Setup guides, tips, and SEO content strategies—all in one place.',
  "author": {
    "@type": "Person",
    "name": "Silverthread Labs"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Silverthread Labs",
    "logo": {
      "@type": "ImageObject",
      "url": siteConfig.author.logo
    }
  },
  "image": {
    "@type": "ImageObject",
    "url": siteConfig.getImageConfig(`Blog | ${siteConfig.title}`).url,
    "width": siteConfig.getImageConfig(`Blog | ${siteConfig.title}`).width.toString(), 
    "height": siteConfig.getImageConfig(`Blog | ${siteConfig.title}`).height.toString(), 
    "description": siteConfig.getImageConfig(`Blog | ${siteConfig.title}`).description,
  },
  "keywords": siteConfig.keywords,
  "sameAs": siteConfig.social.sameAs,
  "potentialAction": {
    "@type": "ReadAction",
    "target": [
      {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.baseUrl}/blog`
      }
    ]
  }
};

const BlogSchema = () => (
  <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
  />
);

export default BlogSchema;

