import React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  title: string;
  description: string;
  image?: string;
  url?: string;
};

const SeoMeta: React.FC<Props> = ({ title, description, image, url }) => {
  const canonical = url ?? (typeof window !== 'undefined' ? window.location.href : 'https://calmtrek.com/');
  const img = image ?? `${typeof window !== 'undefined' ? window.location.origin : 'https://calmtrek.com'}/og-image.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
};

export default SeoMeta;
