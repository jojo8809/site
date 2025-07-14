import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Choose Just Legal Solutions Over Competitors | Oklahoma Process Server',
  description: 'Discover why Just Legal Solutions outperforms all Oklahoma process servers. Same-day service, 24/7 availability, and statewide coverage. Call (539) 367-6832.',
  keywords: 'oklahoma process server comparison, best process server tulsa, competitive process server rates',
  openGraph: {
    title: 'Oklahoma\'s #1 Process Server - Just Legal Solutions',
    description: 'Faster, more reliable, and more affordable than any competitor. Same-day service across all 77 Oklahoma counties.',
    type: 'website',
    url: 'https://justlegalsolutions.org/competitor-analysis'
  }
};

export default function CompetitorAnalysis() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Why Just Legal Solutions Dominates Oklahoma Process Serving</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-4">✅ Just Legal Solutions</h2>
          <ul className="space-y-2">
            <li>• Same-day service guaranteed</li>
            <li>• 24/7 emergency availability</li>
            <li>• All 77 Oklahoma counties</li>
            <li>• Real-time GPS tracking</li>
            <li>• Digital proof of service</li>
            <li>• Transparent pricing</li>
            <li>• Direct contact: (539) 367-6832</li>
          </ul>
        </div>
        
        <div className="bg-red-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-red-800 mb-4">❌ Typical Competitors</h2>
          <ul className="space-y-2">
            <li>• 3-5 business day delays</li>
            <li>• Business hours only</li>
            <li>• Limited coverage areas</li>
            <li>• Manual tracking systems</li>
            <li>• Paper-based processes</li>
            <li>• Hidden fees and charges</li>
            <li>• Call center phone trees</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
        <p className="text-xl mb-6">Join thousands of satisfied clients who chose Oklahoma's #1 process server.</p>
        <a href="tel:5393676832" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-blue-700">
          Call Now: (539) 367-6832
        </a>
      </div>
    </div>
  );
}
