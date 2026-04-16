import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import SeoIntro from '@/components/SeoIntro';
import SeoMeta from '@/components/SeoMeta';

const AnnapurnaCircuit = () => {
  // Dev cache buster
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';
  const annapurnaImages = [
    '/Annapurna/francesca-varisco-r7IBk3kt5hc-unsplash.jpg',
    '/Annapurna/neha-maheen-mahfin-_sbkVaT19ko-unsplash.jpg',
    '/Annapurna/sanjay-hona-qAA6INniUNg-unsplash.jpg',
    '/Annapurna/touann-gatouillat-vergos-QFY3Tv5_12M-unsplash.jpg',
  ].map((p) => `${p}${bust}`);
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  React.useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 3500);
    return () => clearInterval(id);
  }, [api]);

  // SEO: title, description, keywords
  React.useEffect(() => {
    const title = 'Annapurna Circuit Trek | Classic Annapurna Circuit 14–18 Days | TrekFinity';
    const description = 'Annapurna Circuit Trek: classic trans‑Himalayan route offering dramatic landscapes, Thorong La pass (5,416 m), diverse cultures and remote valleys.';
    const keywords = 'Annapurna Circuit trek, Thorong La pass, Annapurna trekking itinerary, Annapurna circuit cost, Nepal circuit trek 2025';
    document.title = title;
    const setMeta = (name: string, content: string) => {
      let m = document.querySelector(`meta[name="${name}"]`);
      if (!m) {
        m = document.createElement('meta');
        m.setAttribute('name', name);
        document.head.appendChild(m);
      }
      m.setAttribute('content', content);
    };
    setMeta('description', description);
    setMeta('keywords', keywords);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SeoMeta
        title="Annapurna Circuit trek | Calm Trek Nepal — Thorong La 14–18 days"
        description="Annapurna Circuit: trans‑Himalayan adventure crossing Thorong La. Diverse cultures, high passes and dramatic scenery guided by an experienced Nepal trekking company."
        url="https://calmtrek.com/treks/annapurna-circuit"
      />
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <div className="relative h-[60vh] overflow-hidden" role="img" aria-label="Annapurna Circuit panorama">
          <Carousel className="absolute inset-0 z-0" opts={{ loop: true }} setApi={setApi}>
            <CarouselContent className="h-full">
              {annapurnaImages.map((src, idx) => (
                <CarouselItem key={idx} className="h-[60vh] relative">
                  <img src={src} alt={`Annapurna Circuit gallery image ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover" loading={idx === 0 ? 'eager' : 'lazy'} />
                  <div className="absolute inset-0 bg-black/35" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Annapurna Circuit Trek</h1>
              <p className="text-lg md:text-xl">Classic trans‑Himalayan circuit crossing Thorong La (5,416 m) with diverse landscapes and cultures</p>
              <div className="mt-6">
                <Link aria-label="Book Annapurna Circuit Trek" to="#booking" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition">
                  Book This Trek <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Intro */}
        <SeoIntro
          sections={[
            { heading: 'Why trek the Annapurna Circuit?', text: 'The Annapurna Circuit is a top Nepal trekking route offering cultural variety, dramatic mountain transitions and the iconic Thorong La pass—perfect for adventurous trekkers.' },
            { heading: 'Who is it for?', text: 'This Nepal trekking company recommends the circuit for trekkers with moderate fitness looking for a mix of culture, scenery and high alpine experience.' },
          ]}
        />

        {/* Overview + Details (match ABC layout) */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-foreground mb-6">Trek Overview</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The Annapurna Circuit is one of Nepal’s most varied and rewarding trekking routes. Over two weeks you traverse subtropical valleys, terraced farmland, alpine ridges and high desert before crossing Thorong La (5,416 m) and descending to the Marsyangdi and Kali Gandaki valleys.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Expect cultural diversity, from Gurung & Thakali villages to remote Mustang‑style landscapes. The circuit can be customised (shorter/longer) and combined with Poon Hill or ABC variations.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8" aria-label="Annapurna Circuit highlights">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Cross the iconic Thorong La Pass (5,416 m)</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Dramatic change of scenery from lush valleys to high alpine deserts</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Visit Muktinath pilgrimage site and local Thakali culture</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Options to extend to Tilicho Lake, Annapurna Sanctuary or Upper Mustang</span></li>
                </ul>

                {/* FAQs / Informational content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Why choose the Circuit?</h4>
                    <p className="text-muted-foreground">The Circuit offers enormous variety and a deeper cultural experience than single-route treks—great for people who love exploration and diverse mountain ecosystems.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Best seasons</h4>
                    <p className="text-muted-foreground">Spring (Mar–May) and Autumn (Sep–Nov) are ideal for stable weather and clear views. Monsoon months are wetter; winter brings cold nights.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Difficulty</h4>
                    <p className="text-muted-foreground">Moderate to Challenging depending on itinerary and pace—Thorong La is the highest point and requires good fitness and acclimatisation.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Permits</h4>
                    <p className="text-muted-foreground">ACAP permit and TIMS card are required for most Circuit routes; some variations may require additional permits.</p>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold mb-2">Packing essentials</h4>
                    <p className="text-muted-foreground">Layered clothing, sturdy boots, down jacket, sleeping bag rated to -10°C, water purification, trekking poles, sun protection, and insurance covering high‑altitude trekking.</p>
                  </div>
                </div>
              </div>

              {/* Details Card */}
              <div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-border/40" aria-labelledby="ac-details">
                  <h3 id="ac-details" className="text-xl font-bold text-foreground mb-6">Trek Details</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3"><Calendar className="h-5 w-5 text-primary" /><div><p className="font-medium">Duration</p><p className="text-sm text-muted-foreground">14–18 days</p></div></div>
                    <div className="flex items-center space-x-3"><Mountain className="h-5 w-5 text-primary" /><div><p className="font-medium">Max Altitude</p><p className="text-sm text-muted-foreground">~5,416 m (Thorong La)</p></div></div>
                    <div className="flex items-center space-x-3"><Clock className="h-5 w-5 text-primary" /><div><p className="font-medium">Difficulty</p><p className="text-sm text-muted-foreground">Moderate — Challenging</p></div></div>
                    <div className="flex items-center space-x-3"><Users className="h-5 w-5 text-primary" /><div><p className="font-medium">Group Size</p><p className="text-sm text-muted-foreground">2–10 people</p></div></div>
                    <div className="flex items-center space-x-3"><MapPin className="h-5 w-5 text-primary" /><div><p className="font-medium">Start/End</p><p className="text-sm text-muted-foreground">Kathmandu / Pokhara (flexible)</p></div></div>
                    <div className="flex items-center space-x-3"><Compass className="h-5 w-5 text-primary" /><div><p className="font-medium">Best Seasons</p><p className="text-sm text-muted-foreground">Mar–May & Sep–Nov</p></div></div>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p><span className="font-medium text-foreground">Accommodation:</span> Tea houses & mountain lodges</p>
                      <p><span className="font-medium text-foreground">Permits:</span> ACAP & TIMS</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-lg font-semibold">Estimated cost</span>
                      <span className="text-2xl font-bold text-primary">USD 1,200–1,900</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Depends on season and service level</p>
                    <div className="mt-4">
                      <Link to="#booking" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition" aria-label="Book Annapurna Circuit Trek">
                        Book Now <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary (match ABC timeline style) */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Suggested Itinerary (14–18 days)</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>
                <div className="space-y-8" aria-label="Annapurna Circuit daily itinerary">
                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">1</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Arrival in Kathmandu — preparation</h3>
                    <p className="text-muted-foreground">Arrival, equipment check, briefing and overnight in Kathmandu.</p>
                  </div>

                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">2</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Drive or fly to Pokhara</h3>
                    <p className="text-muted-foreground">Transfer to Pokhara, final gear checks and rest.</p>
                  </div>

                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">3</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Drive to Besishahar / Manang side approach and trek start</h3>
                    <p className="text-muted-foreground">Begin trekking through villages and terraced fields towards the foothills.</p>
                  </div>

                  <details className="group rounded-xl border border-border/60 bg-white/70 overflow-hidden">
                    <summary className="list-none cursor-pointer select-none px-5 py-4 flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-xl text-foreground">Itinerary — expand day-by-day</h3>
                        <p className="text-muted-foreground text-sm">Tap to show remaining days (reduces page length).</p>
                      </div>
                      <span className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-mountain-100 text-mountain-700 font-bold group-open:rotate-180 transition">⌄</span>
                    </summary>

                    <div className="px-5 pb-5">
                      <div className="relative">
                        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>
                        <div className="space-y-8" aria-label="Annapurna Circuit daily itinerary (expanded)">
                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">4</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Trek deeper into the Marsyangdi Valley</h4>
                            <p className="text-muted-foreground">Walk through villages and terraced fields with a steady gain in altitude.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">5</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Continue towards Manang region</h4>
                            <p className="text-muted-foreground">Scenery becomes more alpine; the air drier as you approach the high valley.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">6</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Acclimatisation day in/around Manang</h4>
                            <p className="text-muted-foreground">Short hikes to viewpoints (e.g., Gangapurna Lake / Ice Lake area) and rest for Thorong La.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">7</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Approach to Thorong Phedi / High Camp</h4>
                            <p className="text-muted-foreground">Prepare for the pass; keep the day shorter to conserve energy.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">8</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Cross Thorong La (5,416 m) and descend to Muktinath</h4>
                            <p className="text-muted-foreground">Early start for the pass crossing; time for a cultural visit at Muktinath.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">9</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Descend into the Kali Gandaki valley</h4>
                            <p className="text-muted-foreground">Head down toward Kagbeni/Jomsom area through wind‑sculpted, Mustang‑like landscapes.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">10</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Explore Jomsom region (or optional flight)</h4>
                            <p className="text-muted-foreground">Continue walking the valley floor, or fly Jomsom → Pokhara if you prefer a shorter finish.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">11</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Final valley day and wrap-up</h4>
                            <p className="text-muted-foreground">One more walking day through Tibetan‑influenced villages before exiting the trail.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">12</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Return to Pokhara</h4>
                            <p className="text-muted-foreground">Drive/transfer back to Pokhara; rest by Phewa Lake.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">13</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Transfer to Kathmandu</h4>
                            <p className="text-muted-foreground">Road or flight back to Kathmandu; free evening for dinner and shopping.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">14</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Trip concludes / optional city time</h4>
                            <p className="text-muted-foreground">Departure day or optional sightseeing in Kathmandu depending on schedule.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">15</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Buffer/extension day</h4>
                            <p className="text-muted-foreground">Use as contingency or a planned extension day.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">16</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Optional Tilicho Lake add‑on</h4>
                            <p className="text-muted-foreground">Popular side trip for high‑alpine scenery (adds days depending on route).</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">17</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Optional cultural / rest day</h4>
                            <p className="text-muted-foreground">Extra day for flexibility, weather, or a slower pace.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">18</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Optional short trek extension (e.g., Poon Hill)</h4>
                            <p className="text-muted-foreground">Add a classic sunrise viewpoint trek if you want more walking after the circuit.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking (match ABC booking structure) */}
        <section id="booking" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Book Annapurna Circuit</h2>
              <div className="bg-white rounded-xl p-8 shadow-md border border-border/40">
                <form className="space-y-6" aria-label="Annapurna Circuit booking form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#6F60A1] mb-1">Full Name</label>
                      <input type="text" id="name" className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#6F60A1] mb-1">Email Address</label>
                      <input type="email" id="email" className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" placeholder="your@email.com" />
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
                    <label htmlFor="message" className="block text-sm font-medium text-[#6F60A1] mb-1">Special Requests or Questions</label>
                    <textarea id="message" rows={4} className="w-full px-6 py-4 bg-[#DCD6EB] text-[#4B3F73] rounded-2xl border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" placeholder="Tell us your preferred dates, group size, or any special requests."></textarea>
                  </div>
                  <button type="submit" className="w-full inline-flex justify-center items-center gap-2 px-6 h-11 bg-[#7E6DB0] hover:bg-[#6F60A1] text-white rounded-full font-medium transition" aria-label="Submit booking request for Annapurna Circuit Trek">
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

export default AnnapurnaCircuit;
