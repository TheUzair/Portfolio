const JsonLd = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mohd Uzair',
    url: 'https://mohd-uzair.vercel.app',
    jobTitle: 'Full-Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Delhi-NCR',
      addressCountry: 'IN',
    },
    email: 'mailto:mohujer90@gmail.com',
    sameAs: [
      'https://github.com/TheUzair',
      'https://linkedin.com/in/mohd-uzair-33b166204',
      'https://leetcode.com/u/Mohd_Uzair',
      'https://twitter.com/TheUzair4',
    ],
    knowsAbout: [
      'Next.js',
      'React.js',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'GCP',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;
