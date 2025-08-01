import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Broken Arrow Process Server - Professional Legal Document Delivery',
  description: 'Professional process server in Broken Arrow, Tulsa County. Same-day legal document delivery.',
};

export default function ProcessServerBrokenArrowPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Professional Process Server Broken Arrow</h1>
        <p className="text-xl mb-8">Same-Day Legal Document Delivery in Broken Arrow, Oklahoma</p>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Serving Broken Arrow Residents & Businesses</h2>
          <p className="mb-4">Expert process servers familiar with Broken Arrow courts and procedures.</p>
          <p className="mb-4">We serve all areas of Broken Arrow including ZIP code 74012.</p>
          <a href="tel:5393676832" className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block">
            Call Now: (539) 367-6832
          </a>
        </div>
      </div>
    </div>
  );
}
