import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Users, Mountain, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import upperMustangImg from '@/assets/upper-mustang.jpg';
import gokyoImg from '@/assets/gokyo-lakes.jpg';

const FeaturedTreks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Dev cache buster so public images update during development
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';

  const treks = [
    {
      id: 1,
      title: 'Everest Base Camp',
      // Match hero images used on the Everest page
      image: `/Everest/geetangey-ra4NJidcK1A-unsplash.jpg${bust}`,
      description:
        "Walk in the footsteps of legends to the base of the world's highest peak at 5,364m. Experience breathtaking mountain vistas, visit centuries-old monasteries, and immerse yourself in authentic Sherpa culture.",
      duration: '14 days',
      difficulty: 'Challenging',
      groupSize: '2-12',
      elevation: '5,364m',
      route: '/treks/everest-base-camp',
      highlights: ['Namche Bazaar - Sherpa capital', 'Tengboche Monastery', 'Kala Patthar viewpoint', 'Everest Base Camp'],
      bestSeason: 'March-May, September-November',
      fallback: '/placeholder.svg',
      price: 1150,
      oldPrice: 1199,
      currency: 'US$',
      rating: 5.0,
      reviews: 3,
      badge: 'Best Selling Trip'
    },
    {
      id: 2,
      title: 'Annapurna Circuit',
      // Match hero images used on the Annapurna page
      image: `/Annapurna/francesca-varisco-r7IBk3kt5hc-unsplash.jpg${bust}`,
      description:
        "Journey through Nepal's most diverse trekking route, crossing the dramatic Thorong La Pass at 5,416m.",
      duration: '18 days',
      difficulty: 'Moderate to Challenging',
      groupSize: '2-10',
      elevation: '5,416m',
      route: '/treks/annapurna-circuit',
      highlights: ['Thorong La Pass', 'Muktinath Temple', 'Manang village', 'Diverse ecosystems'],
      bestSeason: 'March-May, September-November',
      fallback: '/placeholder.svg',
      price: 650,
      oldPrice: 750,
      currency: 'US$',
      rating: 4.9,
      reviews: 12,
      badge: null
    },
    {
      id: 3,
      title: 'Langtang Valley',
      // Match hero images used on the Langtang page
      image: `/Langtang/himalayan-local-guide-xc2GggytytA-unsplash.jpg${bust}`,
      description:
        "Discover the 'Valley of Glaciers' with its unique blend of Himalayan and Tibetan cultures.",
      duration: '10 days',
      difficulty: 'Moderate',
      groupSize: '2-8',
      elevation: '4,984m',
      route: '/treks/langtang-valley',
      highlights: ['Kyanjin Gompa monastery', 'Langtang Lirung views', 'Tamang culture', 'Red panda habitat'],
      bestSeason: 'March-May, September-November',
      fallback: '/placeholder.svg',
      price: 580,
      oldPrice: 650,
      currency: 'US$',
      rating: 5.0,
      reviews: 12,
      badge: null
    },
    {
      id: 4,
      title: 'Manaslu Circuit',
      // Match hero images used on the Manaslu page
      image: `/Manaslu/erik-OwJ6Cn_DnHM-unsplash.jpg${bust}`,
      description:
        "Trek around the world's eighth highest mountain (8,163m) on this spectacular yet less-crowded circuit.",
      duration: '16 days',
      difficulty: 'Challenging',
      groupSize: '2-8',
      elevation: '5,106m',
      route: '/treks/manaslu-circuit',
      highlights: ['Larkya La Pass', 'Samagaon village', 'Manaslu views', 'Restricted area permit'],
      bestSeason: 'March-May, September-November',
      fallback: '/placeholder.svg',
      price: 950,
      oldPrice: 1095,
      currency: 'US$',
      rating: 5.0,
      reviews: 26,
      badge: 'One of the less crowded trek in Nepal'
    },
    {
      id: 5,
      title: 'Upper Mustang',
      image: upperMustangImg,
      description:
        'Explore the forbidden kingdom of Mustang, a mystical high-altitude desert that was once an independent Tibetan kingdom.',
      duration: '12 days',
      difficulty: 'Moderate',
      groupSize: '2-10',
      elevation: '4,000m',
      route: '/treks/upper-mustang',
      highlights: ['Lo Manthang palace', 'Ancient cave monasteries', 'Tibetan culture', 'Desert landscapes'],
      bestSeason: 'March-November',
      fallback: '/placeholder.svg',
      price: 1795,
      oldPrice: null,
      currency: 'US$',
      rating: 5.0,
      reviews: 1,
      badge: null
    },
    {
      id: 6,
      title: 'Gokyo Lakes',
      image: gokyoImg,
      description:
        "Trek to the stunning turquoise Gokyo Lakes, the world's highest freshwater lake system.",
      duration: '12 days',
      difficulty: 'Moderate to Challenging',
      groupSize: '2-10',
      elevation: '5,357m',
      route: '/treks/gokyo-lakes',
      highlights: ['Six sacred lakes', 'Gokyo Ri summit', 'Four 8000m+ peaks view', 'Ngozumpa Glacier'],
      bestSeason: 'March-May, September-November',
      fallback: '/placeholder.svg',
      price: 2435,
      oldPrice: 2575,
      currency: 'US$',
      rating: 4.8,
      reviews: 8,
      badge: 'EBC via Gokyo'
    },
  ];

  // Helper to return color classes based on difficulty
  const difficultyClass = (d: string) => {
    if (!d) return 'bg-gray-100 text-gray-800';
    const lower = d.toLowerCase();
    if (lower.includes('challenging')) return 'bg-red-100 text-red-700';
    if (lower.includes('moderate') && lower.includes('challenging')) return 'bg-amber-100 text-amber-800';
    if (lower.includes('moderate')) return 'bg-yellow-100 text-yellow-800';
    if (lower.includes('easy')) return 'bg-green-100 text-green-700';
    return 'bg-gray-100 text-gray-800';
  };

  const stats = [
    { icon: Calendar, label: 'Duration', value: treks[activeIndex].duration },
    { icon: Mountain, label: 'Elevation', value: treks[activeIndex].elevation },
    { icon: Clock, label: 'Difficulty', value: treks[activeIndex].difficulty },
    { icon: Users, label: 'Group Size', value: treks[activeIndex].groupSize },
  ];

  return (
    <section id="treks" className="section-padding">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium bg-background rounded-full border">
            Featured Treks
          </div>
          <h2 className="text-section-title mb-6">Iconic Himalayan Adventures</h2>
          <p className="text-body max-w-2xl mx-auto">
            Discover our most sought-after trekking experiences, each designed to showcase 
            Nepal's diverse landscapes and rich mountain cultures.
          </p>
        </div>

        {/* Trek Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 p-1 bg-muted rounded-lg">
            {treks.map((trek, index) => (
              <button
                key={trek.id}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  index === activeIndex
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {trek.title}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Trek */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden modern-card">
              <img
                src={treks[activeIndex].image}
                alt={treks[activeIndex].title}
                className="w-full h-full object-cover transition-transform duration-[6000ms] ease-in-out animate-kenburns-soft"
                loading="lazy"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.src !== window.location.origin + treks[activeIndex].fallback) {
                    img.src = treks[activeIndex].fallback;
                  }
                }}
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-section-title mb-4">{treks[activeIndex].title}</h3>
              <p className="text-body leading-relaxed">{treks[activeIndex].description}</p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="modern-card p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <stat.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</p>
                      {/* Render difficulty as a colored badge */}
                      {stat.label === 'Difficulty' ? (
                        <span className={`inline-block px-2 py-1 text-xs rounded ${difficultyClass(stat.value as string)}`}>{stat.value}</span>
                      ) : (
                        <p className="font-medium">{stat.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex items-center gap-2" asChild>
                <Link to={treks[activeIndex].route}>
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              
              <Button variant="outline" asChild>
                <a href="#contact">Book Now</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Trek Grid - All Treks */}
        <div className="mt-24">
          <h3 className="text-card-title text-center mb-12">All Trek Options</h3>
          {/* 3 columns on large screens so 6 items show as 3 up and 3 down */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treks.map((trek) => (
              <div key={trek.id} className="modern-card overflow-hidden group flex flex-col h-full">
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={trek.image}
                      alt={trek.title}
                      className="w-full h-full object-cover transition-transform duration-[6000ms] ease-in-out group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        const img = e.currentTarget;
                        if (img.src !== window.location.origin + trek.fallback) {
                          img.src = trek.fallback;
                        }
                      }}
                    />
                  </div>

                  {/* Heart Icon */}
                  <button className="absolute top-3 left-3 bg-white/90 dark:bg-black/60 w-9 h-9 rounded-full flex items-center justify-center shadow-sm">
                    <Heart className="w-4 h-4 text-muted-foreground" />
                  </button>

                  {/* Optional Badge */}
                  {trek.badge && (
                    <span className="absolute top-3 right-3 bg-emerald-600 text-white text-xs px-2 py-1 rounded">{trek.badge}</span>
                  )}
                </div>

                {/* Make content stretch so all cards are same height */}
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Emphasize primary name and add a special attraction character */}
                    <h4 className="mb-1 text-sm">
                      <span className="font-extrabold capitalize">{trek.title.split(' ')[0]}</span>
                      {trek.title.split(' ').slice(1).join(' ') && (
                        <span className="ml-1 text-muted-foreground"> {trek.title.split(' ').slice(1).join(' ')}</span>
                      )}
                      <span className="ml-2 text-amber-500" aria-hidden>⛰️</span>
                    </h4>

                    <p className="text-xs text-muted-foreground line-clamp-2 hidden">{trek.description}</p>

                    {/* Difficulty pill for each card */}
                    <div className="mt-2">
                      <span className={`inline-block px-2 py-0.5 text-xs rounded ${difficultyClass(trek.difficulty)}`}>{trek.difficulty}</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <div className="text-primary font-semibold">Starting from {trek.currency}{trek.price}</div>
                      {trek.oldPrice && (
                        <div className="text-red-600 text-xs line-through font-medium">{trek.currency}{trek.oldPrice}</div>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{trek.duration}</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">Difficulty: <span className="font-medium text-muted-foreground">{trek.difficulty}</span></div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-emerald-600" />
                        <span className="font-medium text-emerald-600">{trek.rating}</span>
                        <span className="text-xs">({trek.reviews})</span>
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full mt-2" asChild>
                      <Link to={trek.route}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreks;
