import Script from 'next/script';

export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does process serving cost in Tulsa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Process serving in Tulsa costs $40-$150 depending on urgency. Standard service (3-5 days) is $40, rush service (1-2 days) is $60, same-day service is $75, and emergency 2-hour service is $100."
        }
      },
      {
        "@type": "Question", 
        "name": "How long does process serving take in Oklahoma?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard process serving takes 3-5 business days in Oklahoma. Rush service is available in 1-2 days, and same-day service is available for urgent documents. Emergency 2-hour service is offered for critical legal deadlines."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve for process serving?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all of Tulsa County including Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, Sapulpa, Glenpool, and surrounding areas. We also cover Rogers County, Wagoner County, and Creek County."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide same-day process serving?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer same-day process serving for $75 throughout Tulsa County. Emergency 2-hour service is available for $100 when you need urgent legal document delivery."
        }
      },
      {
        "@type": "Question",
        "name": "Are you licensed process servers in Oklahoma?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are fully licensed and bonded process servers in Oklahoma. We comply with all state and local requirements for legal document service and provide detailed affidavits of service."
        }
      },
      {
        "@type": "Question",
        "name": "What documents can you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all legal documents including subpoenas, summons, complaints, eviction notices, divorce papers, child custody documents, and court orders. We handle both civil and family court documents."
        }
      }
    ]
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
