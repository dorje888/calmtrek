import React from 'react';
import { Helmet } from 'react-helmet';

const IndexSEO: React.FC = () => {
  const title = 'Calm Trek Nepal | Best Trekking Company in Nepal';
  const description = 'Calm Trek Nepal — licensed Nepal trekking company offering Everest Base Camp trek, Annapurna trek and custom Himalayan adventures with experienced local guides.';
  const url = typeof window !== 'undefined' ? window.location.href : 'https://calmtrek.com/';
  const image = `${typeof window !== 'undefined' ? window.location.origin : 'https://calmtrek.com'}/og-image.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href="https://calmtrek.com/" />
    </Helmet>
  );
};

export default IndexSEO;
