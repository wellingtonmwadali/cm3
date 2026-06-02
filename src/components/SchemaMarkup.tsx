import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const SchemaMarkup: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    // Clear any existing json-ld schemas
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Master Corporate Schema Details (Mega Enterprises Limited)
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.megaenterprises.co.ke/#organization",
      "name": "Mega Enterprises Limited",
      "legalName": "Mega Enterprises Limited",
      "alternateName": "Mega Enterprises",
      "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800",
      "logo": "https://www.megaenterprises.co.ke/logo.png",
      "telephone": "+254712652679",
      "email": "info@megaenterprises.co.ke",
      "url": "https://www.megaenterprises.co.ke",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Land Mawe",
        "addressLocality": "Nairobi",
        "addressCountry": "KE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-1.2981", // Coordinates for Land Mawe Nairobi
        "longitude": "36.8315"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://twitter.com/megaenterprises",
        "https://facebook.com/megaenterprises",
        "https://youtube.com/megaenterprises"
      ]
    };

    const schemas: any[] = [organizationSchema];

    // Inject dynamic contextual scripts per page
    if (currentPath === '/') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.megaenterprises.co.ke",
        "name": "Mega Enterprises Limited | Building & Civil Engineers",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.megaenterprises.co.ke/search?q={search_term}",
          "query-input": "required name=search_term"
        }
      });
    } else if (currentPath.startsWith('/services/')) {
      const serviceName = currentPath.split('/').pop()?.replace(/-/g, ' ');
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Mega Enterprises Limited"
        },
        "name": serviceName,
        "description": `Professional ${serviceName} solutions delivered by certified civil and structural engineers at Mega Enterprises Limited Kenya.`,
        "areaServed": "KE",
        "serviceType": "Engineering"
      });
    } else if (currentPath.startsWith('/portfolio/')) {
      const projectTitle = currentPath.split('/').pop()?.replace(/-/g, ' ');
      schemas.push({
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "author": {
          "@type": "Organization",
          "name": "Mega Enterprises Limited"
        },
        "name": projectTitle,
        "description": `Completed landmark infrastructure project: ${projectTitle} by Mega Enterprises Limited.`
      });
    }

    // Inject to HTML head
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [currentPath]);

  return null;
};
export default SchemaMarkup;
