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

                  <details className="group rounded-xl border border-border/60 bg-white/70 overflow-hidden">
                    <summary className="list-none cursor-pointer select-none px-5 py-4 flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-xl text-foreground">Itinerary — expand day-by-day</h3>
                        <p className="text-muted-foreground text-sm">Tap to show all steps (reduces page length).</p>
                      </div>
                      <span className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-mountain-100 text-mountain-700 font-bold group-open:rotate-180 transition">⌄</span>
                    </summary>

                    <div className="px-5 pb-5">
                      <div className="relative">
                        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>
                        <div className="space-y-8" aria-label="Everest Three Passes daily itinerary (expanded)">
                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">3</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Trek to Namche Bazaar</h4>
                            <p className="text-muted-foreground">Continue up the Dudh Koshi valley to Namche, the Sherpa hub of Khumbu.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">4</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Acclimatisation day in Namche</h4>
                            <p className="text-muted-foreground">Rest + hike to viewpoints (e.g., Everest View Hotel / Khumjung) and explore markets.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">5</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Namche → Dole / Machhermo (Gokyo approach)</h4>
                            <p className="text-muted-foreground">Leave the main EBC trail and begin the quieter Gokyo Valley approach through forests and villages.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">6</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Continue up Gokyo Valley</h4>
                            <p className="text-muted-foreground">Gain altitude steadily with great views of Cho Oyu and surrounding peaks.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">7</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Arrive Gokyo Lakes</h4>
                            <p className="text-muted-foreground">Reach the turquoise lakes and settle into Gokyo village.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">8</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Gokyo Ri / acclimatisation</h4>
                            <p className="text-muted-foreground">Optional sunrise hike for one of the best panoramas in the region; rest and hydrate.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">9</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Renjo La option / reposition for Cho La</h4>
                            <p className="text-muted-foreground">Either cross Renjo La for expansive views or position towards Thagnak for the Cho La crossing.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">10</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Approach Cho La</h4>
                            <p className="text-muted-foreground">Shorter day to prepare for the pass; check conditions and start early next morning.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">11</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Cross Cho La (5,420 m) → Dzongla</h4>
                            <p className="text-muted-foreground">Glacier sections can be icy; careful footing and steady pacing.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">12</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Join the classic EBC trail (Lobuche / Gorak Shep)</h4>
                            <p className="text-muted-foreground">Reconnect with the main route and continue towards EBC villages.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">13</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Kongma La (5,535 m) option and viewpoints</h4>
                            <p className="text-muted-foreground">Final high pass option offering panoramic views; acclimatisation and careful glacier travel as needed.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">14</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Everest Base Camp / Kala Patthar options</h4>
                            <p className="text-muted-foreground">Visit EBC (seasonal) and/or hike Kala Patthar for classic Everest views.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">15</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Begin descent (Pheriche / Dingboche)</h4>
                            <p className="text-muted-foreground">Drop altitude steadily; keep an easy pace to support recovery.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">16</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Trek back through Pangboche / Tengboche area</h4>
                            <p className="text-muted-foreground">Revisit monasteries and scenic ridgelines on the way down the valley.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">17</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Return to Namche</h4>
                            <p className="text-muted-foreground">Final night in Namche; hot shower and bakery stop recommended.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">18</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Namche → Lukla</h4>
                            <p className="text-muted-foreground">Finish the trek and prepare for the flight out.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">19</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Fly to Kathmandu</h4>
                            <p className="text-muted-foreground">Morning flight (weather permitting) and transfer to your hotel.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">20</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Buffer / contingency day</h4>
                            <p className="text-muted-foreground">Extra day for flight delays, weather, or rest.</p>
                          </div>

                          <div className="relative pl-14">
                            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">21</span></div>
                            <h4 className="font-bold text-lg mb-1 text-foreground">Departure / optional city tour</h4>
                            <p className="text-muted-foreground">If time allows, explore Kathmandu before departure.</p>
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
