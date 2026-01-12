export function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ali Ataf',
    url: 'https://aliataf.com',
    image: 'https://aliataf.com/images/personal.webp',
    jobTitle: 'Senior Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Tradeling',
      url: 'https://www.tradeling.com',
    },
    email: 'ali@aliataf.com',
    sameAs: [
      'https://www.github.com/aliataf',
      'https://www.linkedin.com/in/aliataf',
      'https://stackoverflow.com/users/7024690/ali-ataf',
      'https://twitter.com/aliataf_x',
      'https://aliataf.medium.com',
      'https://www.facebook.com/aliataf8',
      'https://leetcode.com/u/aliataf',
    ],
    description:
      'Senior Software Engineer with over 6 years of experience in web development, specializing in React, Next.js, Angular, Vue.js, TypeScript, and Nest.js.',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Software Engineering',
    },
    knowsAbout: [
      'React',
      'Next.js',
      'Angular',
      'Vue.js',
      'TypeScript',
      'Nest.js',
      'Tailwind CSS',
      'Sass',
      'JavaScript',
      'Web Development',
    ],
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      '@id': 'https://aliataf.com/#person',
      name: 'Ali Ataf',
    },
    url: 'https://aliataf.com',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: "Ali Ataf's website",
    url: 'https://aliataf.com',
    author: {
      '@type': 'Person',
      name: 'Ali Ataf',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
