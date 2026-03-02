import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';

const EverestThreePasses = () => {
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';
  const imgs = [
    '/Everest/ben-lowe-UOj_xa6Qp0A-unsplash.jpg',
    '/Everest/kalle-kortelainen-TiIRgk9-xcs-unsplash.jpg',
    '/Everest/nepal-visuals-JjytBsXOj30-unsplash.jpg',
  ].map((p) => `${p}${bust}`);

  const [api, setApi] = React.useState<CarouselApi | null>(null);
  React.useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 3500);
    return () => clearInterval(id);
  }, [api]);

  React.useEffect(() => {
    const title = 'Everest Three Passes Trek (Renjo La, Cho La, Kongma La) | TrekFinity';
    const description = 'Everest Three Passes Trek: Renjo La, Cho La and Kongma La link Gokyo and Everest Base Camp on a challenging 18–21 day circuit in Khumbu.';
    const keywords = 'Everest Three Passes, Renjo La, Cho La, Kongma La, Everest circuit trek, Khumbu three passes';
    document.title = title;
    const setMeta = (name: string, content: string) => {
      let m = document.querySelector(`meta[name="${name}"]`);
      if (!m) { m = document.createElement('meta'); m.setAttribute('name', name); document.head.appendChild(m); }
      m.setAttribute('content', content);
    };
    setMeta('description', description);
    setMeta('keywords', keywords);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20">
        {/* Hero - match ABC layout */}
        <div className="relative h-[60vh] overflow-hidden" role="img" aria-label="Everest Three Passes panorama">
          <Carousel className="absolute inset-0 z-0" opts={{ loop: true }} setApi={setApi}>
            <CarouselContent className="h-full">
              {imgs.map((src, idx) => (
                <CarouselItem key={idx} className="h-[60vh] relative">
                  <img src={src} alt={`Everest Three Passes gallery ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover" loading={idx === 0 ? 'eager' : 'lazy'} />
                  <div className="absolute inset-0 bg-black/35" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Everest Three Passes Trek</h1>
              <p className="text-lg md:text-xl">Cross Renjo La, Cho La and Kongma La — the most complete Khumbu circuit (18–21 days)</p>
              <div className="mt-6">
                <Link to="#booking" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition">
                  Book This Trek <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Overview + Details */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-foreground mb-6">Trek Overview</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The Everest Three Passes Trek is a challenging, highly rewarding circuit that links the Gokyo Valley with the classic Everest Base Camp trail. Over 18–21 days you will cross three high passes (Renjo La, Cho La and Kongma La), experience remote valleys, turquoise lakes and classic Sherpa culture.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Three high passes with panoramic Himalayan vistas</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Gokyo Lakes, glaciers and quieter trails</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Cultural stops in Namche, Tengboche and Dingboche</span></li>
                </ul>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Why choose this route?</h4>
                    <p className="text-muted-foreground">It offers the most complete Everest region experience — varied scenery, remote lakes and a demanding alpine challenge for experienced trekkers.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Best seasons</h4>
                    <p className="text-muted-foreground">Spring (Mar–May) and Autumn (Sep–Nov) for stable weather and clear views. Shoulder months are possible with flexibility.</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-border/40">
                  <h3 className="text-xl font-bold text-foreground mb-6">Trek Details</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3"><Calendar className="h-5 w-5 text-primary" /><div><p className="font-medium">Duration</p><p className="text-sm text-muted-foreground">18–21 days</p></div></div>
                    <div className="flex items-center space-x-3"><Mountain className="h-5 w-5 text-primary" /><div><p className="font-medium">Max Altitude</p><p className="text-sm text-muted-foreground">~5,535 m (Kongma La)</p></div></div>
                    <div className="flex items-center space-x-3"><Clock className="h-5 w-5 text-primary" /><div><p className="font-medium">Difficulty</p><p className="text-sm text-muted-foreground">Hard / Strenuous</p></div></div>
                    <div className="flex items-center space-x-3"><Users className="h-5 w-5 text-primary" /><div><p className="font-medium">Group Size</p><p className="text-sm text-muted-foreground">2–10</p></div></div>
                    <div className="flex items-center space-x-3"><MapPin className="h-5 w-5 text-primary" /><div><p className="font-medium">Start/End</p><p className="text-sm text-muted-foreground">Kathmandu / Lukla (flexible)</p></div></div>
                    <div className="flex items-center space-x-3"><Compass className="h-5 w-5 text-primary" /><div><p className="font-medium">Best Seasons</p><p className="text-sm text-muted-foreground">Mar–May & Sep–Nov</p></div></div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p><span className="font-medium text-foreground">Accommodation:</span> Tea houses & mountain lodges</p>
                      <p><span className="font-medium text-foreground">Permits:</span> Sagarmatha NP, local permits & TIMS</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-lg font-semibold">From</span>
                      <span className="text-2xl font-bold text-primary">USD 1,950</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Estimated per person (min. 2). Varies by service level.</p>
                    <div className="mt-4">
                      <Link to="#booking" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition">
                        Book Now <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary timeline matching ABC style */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Suggested Itinerary (18–21 days)</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>
                <div className="space-y-8" aria-label="Everest Three Passes daily itinerary">
                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">1</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Arrival in Kathmandu — preparation</h3>
                    <p className="text-muted-foreground">Arrival, permit checks, equipment briefing and overnight in Kathmandu.</p>
                  </div>

                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">2</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Flight to Lukla; trek to Phakding (2–3 hrs)</h3>
                    <p className="text-muted-foreground">Short, scenic flight to Lukla and gentle walk to Phakding to begin the trek.</p>
                  </div>

                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">3–5</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Namche Bazaar and acclimatisation</h3>
                    <p className="text-muted-foreground">Progress to Namche with acclimatisation day for hikes to nearby viewpoints and markets.</p>
                  </div>

                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">6–9</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Gokyo Valley approach & Renjo La option</h3>
                    <p className="text-muted-foreground">Ascend into Gokyo Valley, optional Renjo La crossing to reach Gokyo lakes and viewpoints.</p>
                  </div>

                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">10–12</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Cross Cho La (5,420 m) and traverse towards Everest EBC trail</h3>
                    <p className="text-muted-foreground">Technical pass crossing with glacier sections; descend to classic EBC villages like Dzongla and Lobuche.</p>
                  </div>

                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">13</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Kongma La (5,535 m) option and summit viewpoints</h3>
                    <p className="text-muted-foreground">Final high pass option offering panoramic views; acclimatisation and careful glacier travel as needed.</p>
                  </div>

                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">14–18</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Descend via Everest Base Camp route and return to Lukla</h3>
                    <p className="text-muted-foreground">Pass through Periche, Dingboche and Namche, then trek back to Lukla for flight to Kathmandu.</p>
                  </div>

                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">19–21</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Buffer days & return to Kathmandu</h3>
                    <p className="text-muted-foreground">Extra days for weather delays, acclimatisation or optional extensions in the Khumbu region.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking */}
        <section id="booking" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Book Everest Three Passes</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-border/40">
                <form className="space-y-6" aria-label="Everest Three Passes booking form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#6F60A1] mb-1">Full Name</label>
                      <input id="name" className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#6F60A1] mb-1">Email Address</label>
                      <input id="email" type="email" className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-[#6F60A1] mb-1">Preferred Trek Date</label>
                      <input id="date" type="date" className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none" />
                    </div>
                    <div>
                      <label htmlFor="group" className="block text-sm font-medium text-[#6F60A1] mb-1">Group Size</label>
                      <select id="group" className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none">
                        <option>1 person</option>
                        <option>2 people</option>
                        <option>3–5 people</option>
                        <option>6–10 people</option>
                        <option>10+ people</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#6F60A1] mb-1">Questions or Requirements</label>
                    <textarea id="message" rows={4} className="w-full px-6 py-4 bg-[#DCD6EB] text-[#4B3F73] rounded-2xl border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" placeholder="Tell us your preferred dates, group size, or any special requests."></textarea>
                  </div>
                  <button type="submit" className="w-full inline-flex justify-center items-center gap-2 px-6 h-11 bg-[#7E6DB0] hover:bg-[#6F60A1] text-white rounded-full font-medium transition" aria-label="Submit booking request for Everest Three Passes">
                    Submit Booking Request
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default EverestThreePasses;
