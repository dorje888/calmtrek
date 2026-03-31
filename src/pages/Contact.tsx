import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { CircuitBoard, MapPinned, Sparkles } from 'lucide-react';
import SeoIntro from '@/components/SeoIntro';
import SeoMeta from '@/components/SeoMeta';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SeoMeta
        title="Contact Calm Trek Nepal — Plan your trekking in Nepal"
        description="Contact Calm Trek Nepal to plan Everest Base Camp, Annapurna and tailor-made Himalayan treks. We assist with permits, licensed guides, and clear booking steps for a safe, well-organized adventure."
      />
      <Navbar />
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6">
              <CircuitBoard className="h-8 w-8 text-nebula-500 animate-pulse-subtle" />
            </div>

            <SeoIntro
              sections={[
                {
                  heading: 'Contact Calm Trek Nepal',
                  text: 'Contact our team to plan Everest Base Camp, Annapurna and tailor-made Himalayan treks. We assist with permits, licensed guides, clear booking steps, and pre-trek briefings to ensure a safe, well-organized adventure.'
                },
                {
                  heading: 'Book with confidence',
                  text: 'Send your inquiry or request a custom itinerary — we respond promptly and provide transparent pricing and permit guidance so you can focus on the adventure.'
                }
              ]}
            />
          </div>
        </div>

        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
