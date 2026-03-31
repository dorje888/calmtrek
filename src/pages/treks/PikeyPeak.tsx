import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import SeoMeta from '@/components/SeoMeta';

const PikeyPeak = () => {
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';
  const heroImages = [
    '/Everest/success-dhamala-5MYcazoWGLI-unsplash.jpg',
  ].map((p) => `${p}${bust}`);

  const title = 'Pikey Peak Trek (4,065m) | Best Short Trekking in Nepal (6–9 Days) | Calm Trek Nepal';
  const description =
    'Pikey Peak Trek is one of the best short treks in Nepal for Everest sunrise views. Walk through Sherpa villages and rhododendron forests with a flexible 6–9 day itinerary from Kathmandu.';

  const [api, setApi] = React.useState<CarouselApi | null>(null);
  React.useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 3500);
    return () => clearInterval(id);
  }, [api]);

  return (
    <div className="min-h-screen bg-background">
      <SeoMeta title={title} description={description} />
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <div className="relative h-[55vh] overflow-hidden" role="img" aria-label="Pikey Peak panorama">
          <Carousel className="absolute inset-0 z-0" opts={{ loop: true }} setApi={setApi}>
            <CarouselContent className="h-full">
              {heroImages.map((src, idx) => (
                <CarouselItem key={idx} className="h-[55vh] relative">
                  <img
                    src={src}
                    alt={`Pikey Peak hero ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Pikey Peak Trek</h1>
              <p className="text-lg md:text-xl">
                A short Khumbu sunrise trek with panoramic views of Everest and surrounding peaks (6–9 days)
              </p>
              <div className="mt-6">
                <Link
                  to="#booking"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition"
                >
                  Book This Trek <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Overview + Details */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Pikey Peak (4,065 m) is a fantastic short trek in the lower Khumbu that rewards early-morning hikers with
                  expansive sunrise panoramas including Everest, Numbur and distant Kanchenjunga. The route passes through
                  Sherpa villages, rhododendron forests and comfortable teahouses.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-muted-foreground">Spectacular sunrise views over Everest and surrounding peaks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-muted-foreground">Short, accessible itinerary ideal for photographers & families</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-muted-foreground">Cultural experiences in Sherpa villages</span>
                  </li>
                </ul>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Why choose Pikey Peak?</h4>
                    <p className="text-muted-foreground">Short logistics, big mountain views — ideal when time is limited but you still want classic Khumbu panoramas.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Best seasons</h4>
                    <p className="text-muted-foreground">Spring and Autumn offer the clearest skies for sunrise photography; shoulder months are possible with flexibility.</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-border/40">
                  <h3 className="text-xl font-bold text-foreground mb-6">Trek Details</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3"><Calendar className="h-5 w-5 text-primary" /><div><p className="font-medium">Duration</p><p className="text-sm text-muted-foreground">6–9 days</p></div></div>
                    <div className="flex items-center space-x-3"><Mountain className="h-5 w-5 text-primary" /><div><p className="font-medium">Max Altitude</p><p className="text-sm text-muted-foreground">4,065 m</p></div></div>
                    <div className="flex items-center space-x-3"><Clock className="h-5 w-5 text-primary" /><div><p className="font-medium">Difficulty</p><p className="text-sm text-muted-foreground">Moderate</p></div></div>
                    <div className="flex items-center space-x-3"><Users className="h-5 w-5 text-primary" /><div><p className="font-medium">Group Size</p><p className="text-sm text-muted-foreground">1–12</p></div></div>
                    <div className="flex items-center space-x-3"><MapPin className="h-5 w-5 text-primary" /><div><p className="font-medium">Start/End</p><p className="text-sm text-muted-foreground">Kathmandu / Lukla or Jiri</p></div></div>
                    <div className="flex items-center space-x-3"><Compass className="h-5 w-5 text-primary" /><div><p className="font-medium">Best Seasons</p><p className="text-sm text-muted-foreground">Mar–May & Sep–Nov</p></div></div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p><span className="font-medium text-foreground">Accommodation:</span> Teahouses & lodges</p>
                      <p><span className="font-medium text-foreground">Permits:</span> Sagarmatha NP / Local permits & TIMS</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-lg font-semibold">From</span>
                      <span className="text-2xl font-bold text-primary">USD 650</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Estimated per person; seasonal variation applies.</p>
                    <div className="mt-4">
                      <Link to="#booking" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition">Book Now <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary timeline */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Suggested Itinerary (6–9 days)</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>
                <div className="space-y-6" aria-label="Pikey Peak daily itinerary">
                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">1</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Arrival in Kathmandu — transfer to Lukla or drive to trailhead</h3>
                    <p className="text-muted-foreground">Flight to Lukla (if chosen) and short trek to starting village or drive from Jiri/Namche approach depending on itinerary.</p>
                  </div>

                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">2–3</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Trek through Sherpa villages to reach Pikey area</h3>
                    <p className="text-muted-foreground">Follow scenic trails through rhododendron forests with gradual ascent, staying in comfortable lodges.</p>
                  </div>

                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">4</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Summit Pikey Peak for sunrise; return to village</h3>
                    <p className="text-muted-foreground">Early morning climb to catch sunrise panoramas, then descend and relax in local tea houses.</p>
                  </div>

                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">5–6</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Return trek and transfer back to Kathmandu or Pokhara</h3>
                    <p className="text-muted-foreground">Finish the route, transfer to road/flight as per plan. Add buffer days if needed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking section */}
        <section id="booking" className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg border border-border/40">
              <h2 className="text-2xl font-bold text-center mb-6">Book Pikey Peak</h2>
              <form className="space-y-4">
                <input className="w-full px-6 py-3 bg-[#DCD6EB] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40" placeholder="Full Name" />
                <input type="email" className="w-full px-6 py-3 bg-[#DCD6EB] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40" placeholder="Email" />
                <button className="w-full inline-flex justify-center items-center gap-2 px-6 h-11 bg-[#7E6DB0] hover:bg-[#6F60A1] text-white rounded-full font-medium transition">
                  Submit Booking Request
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default PikeyPeak;
