import { SEOs } from '@/components/Constants';

export const SeoConfig = {
  defaultTitle: SEOs.seoTitle,
  titleTemplate: `%s | Libralytic`,
  description: SEOs.seoDesciption,
  canonical: SEOs.website,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SEOs.website,
    siteName: 'Libralytic',
    title: SEOs.seoTitle,
    description: SEOs.seoDesciption,
    images: [
      {
        url: `${SEOs.website}/favicons/metatag.png`,
        width: 1200,
        height: 630,
        alt: 'Libralytic - Food Delivery Intelligence',
      },
    ],
  },
  twitter: {
    handle: '@libralytics',
    site: '@libralytics',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: SEOs.seoKeywords,
    },
  ],
};
