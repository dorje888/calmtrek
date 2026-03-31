import React from 'react';

type Section = { heading: string; text: string };

type Props = {
  title?: string;
  sections: Section[];
};

const SeoIntro: React.FC<Props> = ({ title, sections }) => {
  return (
    <section aria-labelledby={title ? 'seo-intro' : undefined} className="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="prose max-w-none">
        {title && (
          <h1 id="seo-intro" className="text-3xl md:text-4xl font-extrabold">{title}</h1>
        )}
        {sections.map((s, i) => (
          <div key={i} className="mt-4">
            <h2 className="text-xl font-semibold">{s.heading}</h2>
            <p className="text-base text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeoIntro;
