import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bixby Process Server - Professional Legal Document Delivery',
  description: 'Professional process server in Bixby, Tulsa County. Same-day legal document delivery.',
};

export default function ProcessServerBixbyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Professional Process Server Bixby</h1>
        <p className="text-xl mb-8">Same-Day Legal Document Delivery in Bixby, Oklahoma</p>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Serving Bixby Residents & Businesses</h2>
          <p className="mb-4">Expert process servers familiar with Bixby courts and procedures.</p>
          <p className="mb-4">We serve all areas of Bixby including ZIP code 74008.</p>
          <a href="tel:5393676832" className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block">
            Call Now: (539) 367-6832
          </a>
        </div>
      </div>
    </div>
  );
}
