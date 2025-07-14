import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BreadcrumbSchema, { VisualBreadcrumbs } from '@/components/ui/breadcrumb-schema';
import ServiceSchema from '@/components/ui/service-schema';

export const metadata: Metadata = {
  title: 'Process Serving Resources & Legal Guides | Just Legal Solutions',
  description: 'Expert legal guides, process serving tips, and Oklahoma legal resources. Professional insights from licensed process servers in Tulsa County.',
  keywords: ['process serving guide', 'legal resources Oklahoma', 'court document help', 'process server tips', 'legal education Tulsa'],
  robots: 'index, follow'
};

export default function LegalResources() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    month: 'numeric', 
    day: 'numeric', 
    year: 'numeric',
    timeZone: 'America/Chicago' 
  });

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' }
  ];

  const resourceCategories = [
    {
      title: "Process Serving Guides",
      description: "Everything you need to know about legal document delivery",
      articles: [
        { title: "What is a Process Server?", url: "/seo/what-is-a-process-server", preview: "Complete guide to process servers and legal document delivery" },
        { title: "Oklahoma Process Server Requirements", url: "/seo/oklahoma-process-server-requirements", preview: "Legal requirements for process servers in Oklahoma" },
        { title: "Process Serving FAQ", url: "/seo/process-serving-faq", preview: "Frequently asked questions about process serving" }
      ]
    },
    {
      title: "Court Document Types",
      description: "Understanding different legal documents and their service requirements",
      articles: [
        { title: "Divorce Papers Service", url: "/seo/divorce-papers-tulsa", preview: "Professional divorce document delivery in Tulsa" },
        { title: "Eviction Process Serving", url: "/seo/eviction-process-serving", preview: "Landlord document delivery and eviction notices" },
        { title: "Subpoena Service", url: "/seo/subpoena-service", preview: "Court-ordered document delivery and witness service" }
      ]
    },
    {
      title: "Service Areas",
      description: "Process serving coverage throughout Oklahoma",
      articles: [
        { title: "Tulsa County Process Server", url: "/seo/process-server-tulsa", preview: "Professional service throughout Tulsa County" },
        { title: "Broken Arrow Process Server", url: "/seo/process-server-broken-arrow", preview: "Document delivery in Broken Arrow and Wagoner County" },
        { title: "Sapulpa Process Server", url: "/seo/process-server-sapulpa", preview: "Legal document service in Sapulpa and Creek County" }
      ]
    },
    {
      title: "Business Services",
      description: "Specialized services for legal professionals and businesses",
      articles: [
        { title: "Skip Tracing Services", url: "/seo/skip-tracing-services", preview: "Professional people location and investigation services" },
        { title: "Court Document Filing", url: "/seo/court-document-filing", preview: "Professional courthouse filing assistance" },
        { title: "Legal Courier Service", url: "/seo/legal-courier-service", preview: "Secure legal document transport and delivery" }
      ]
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        serviceName="Legal Document Resources"
        serviceDescription="Educational resources and guides for legal document delivery and process serving in Oklahoma"
        serviceArea="Tulsa County, Oklahoma"
        serviceType="Legal Education"
      />
      
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16 pt-24">
          <VisualBreadcrumbs items={breadcrumbItems} />
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Legal Resources & Process Serving Guides
            </h1>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 max-w-2xl mx-auto">
              <p className="text-lg text-blue-800">
                <strong>Expert Legal Guidance</strong> | Last Updated: {lastUpdated} | Professional Insights
              </p>
            </div>

            <div className="mb-8">
              <Image 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&auto=format" 
                alt="Legal resources and process serving guides for Oklahoma"
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg shadow-md mx-auto"
                priority={false}
              />
            </div>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Access comprehensive guides, legal insights, and educational resources from licensed 
              process servers in Oklahoma. Learn about legal document delivery, court procedures, 
              and professional process serving throughout Tulsa County.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {category.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                
                <div className="space-y-3">
                  {category.articles.map((article, articleIndex) => (
                    <Link 
                      key={articleIndex}
                      href={article.url}
                      className="block p-3 bg-white border border-gray-200 rounded hover:border-blue-300 hover:shadow-sm transition-all"
                    >
                      <h3 className="font-semibold text-blue-600 hover:text-blue-800 mb-1">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {article.preview}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-3">
              Need Professional Process Serving?
            </h2>
            <p className="text-green-700 mb-4">
              While our resources provide valuable information, nothing replaces professional 
              service. Contact Just Legal Solutions for expert process serving throughout Oklahoma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="tel:(539) 367-6832" 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block text-center font-semibold"
              >
                Call (539) 367-6832
              </Link>
              <Link 
                href="/pricing" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg inline-block text-center font-semibold"
              >
                View Pricing
              </Link>
              <Link 
                href="/card/" 
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg inline-block text-center font-semibold"
              >
                Schedule Service
              </Link>
            </div>
          </div>

          <div className="text-sm text-gray-500 border-t pt-4 mt-8">
            <p>
              <strong>Content Freshness:</strong> This legal resources page updates daily 
              for SEO optimization. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
