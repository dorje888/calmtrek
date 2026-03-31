import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturedTreks from '@/components/FeaturedTreks';
import MissionGallery from '@/components/MissionGallery';
import { MapPin, Phone, Mail, Check, CheckCircle } from 'lucide-react';
import SeoMeta from '@/components/SeoMeta';
import SeoIntro from '@/components/SeoIntro';

const Index = () => {
  return (
    <div className="min-h-screen bg-background antialiased">
      <SeoMeta
        title="Calm Trek Nepal — Guided Himalayan Treks: Everest, Annapurna, Manaslu"
        description="Calm Trek Nepal offers expert-led Everest Base Camp, Annapurna Circuit, Manaslu and Gokyo Lakes treks with licensed guides, comfortable teahouse stays, and custom itineraries for all experience levels. Plan your Himalayan adventure with trusted local operators."
      />
      <Navbar />
      <main className="pt-0">
        <HeroSection />

        {/* Place keyword-rich visible intro immediately after the hero for better content hierarchy */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="max-w-4xl mx-auto text-center">
            <SeoIntro
              sections={[
                {
                  heading: 'Calm Trek Nepal — Guided Himalayan Treks',
                  text: 'Explore Everest Base Camp, Annapurna Circuit, Gokyo Lakes, Manaslu, and Upper Mustang with experienced local guides. We provide tailored itineraries, permit assistance, and safe mountain logistics for trekkers of all levels.'
                },
                {
                  heading: 'Why choose us',
                  text: 'Local expertise, small-group departures, and flexible custom treks ensure a personalized experience. We prioritize safety, responsible travel, and authentic cultural connections in the Nepal Himalaya.'
                }
              ]}
            />
          </div>
        </section>

        <FeaturedTreks />

        {/* Ready for Your Adventure CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <a href="/contact" className="inline-block py-1 px-3 mb-4 text-xs font-medium tracking-wider uppercase bg-gray-100 text-gray-700 rounded-full">Contact Us</a>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready for Your Adventure?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">Let's plan your perfect Himalayan journey. Our expert team is here to help you create unforgettable memories in Nepal's stunning landscapes.</p>

            <div className="mt-10 max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

                {/* Get in Touch */}
                <div tabIndex={0} className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-8">Get in Touch</h3>
                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Location</div>
                        <div className="text-gray-600">Thamel, Kathmandu<br />Nepal</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Phone</div>
                        <div className="text-gray-600">+977 1 4000000<br />+977 9818129888</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Email</div>
                        <div className="text-gray-600">info@trekfinity.com<br />bookings@trekfinity.com</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose TrekFinity */}
                <div tabIndex={0} className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-8">Why Choose TrekFinity</h3>
                  <ul className="space-y-5 text-gray-600">
                    {[
                      'Expert local guides with 10+ years experience',
                      'Personalized trek planning & consultation',
                      '24/7 emergency support during treks',
                      'Sustainable and responsible tourism practices'
                    ].map((txt, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-gray-700" />
                        </div>
                        <span>{txt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* At a Glance */}
                <div tabIndex={0} className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-8">At a Glance</h3>
                  <div className="grid grid-cols-2 gap-y-10 gap-x-6 text-center">
                    <div>
                      <div className="text-3xl font-extrabold text-gray-900">1000+</div>
                      <div className="mt-1 text-sm text-gray-600">Happy Trekkers</div>
                    </div>
                    <div>
                      <div className="text-3xl font-extrabold text-gray-900">10+</div>
                      <div className="mt-1 text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-3xl font-extrabold text-gray-900">15+</div>
                      <div className="mt-1 text-sm text-gray-600">Trek Routes</div>
                    </div>
                    <div>
                      <div className="text-3xl font-extrabold text-gray-900">24/7</div>
                      <div className="mt-1 text-sm text-gray-600">Support</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        
        {/* Green banner CTA (matches uploaded design) */}
        <section className="py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl">
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/mountain/mountain.jpg')" }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-emerald-700/75" aria-hidden="true" />

              {/* Content */}
              <div className="relative px-6 py-14 md:py-16 text-center text-white">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Your Adventure Awaits!</h2>
                <p className="mt-3 text-base md:text-lg text-white/90">Book your stay now and create memories that will last a lifetime.</p>
                <div className="mt-8">
                  <a
                    href="/book"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 text-base font-semibold text-emerald-700 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/70"
                  >
                    Book Your Adventure Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

         {/* Mission gallery placed below "All trek options" (FeaturedTreks) */}
         <MissionGallery />

         {/* ...rest of page content... */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
