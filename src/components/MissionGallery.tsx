import React from 'react';

const missionImages = [
  '/mission/Screenshot_20251118_120948.png',
  '/mission/Screenshot_20251130_135311.png',
  '/mission/Screenshot_20251130_135443.png',
  '/mission/Screenshot_20251130_135813.png',
  '/mission/Screenshot_20251130_140121.png',
  '/mission/Screenshot_20251202_064106.png',
  '/mission/Screenshot_20251202_065221.png',
  '/mission/Screenshot_20251202_065258.png',
];

// Add some images from major trek folders (public/*) to enrich the landing page gallery.
// Note: keep these paths as public URLs (no import needed in Vite).
const trekFolderImages = [
  // Manaslu
  '/Manaslu/erik-OwJ6Cn_DnHM-unsplash.jpg',
  '/Manaslu/Screenshot_20251118_122302.png',
  '/Manaslu/erik-xeIH7VK8XOc-unsplash.jpg',
  // Tamang Heritage Trail
  '/tamang heritage trail/Tamang-Heritage-treak.jpg',
  '/tamang heritage trail/Screenshot_20251107_190253.png',
  // Annapurna
  '/Annapurna/francesca-varisco-r7IBk3kt5hc-unsplash.jpg',
  '/Annapurna/Screenshot_20251124_120855.png',
  // Chitwan
  '/Chitwan/kedar-bhusal-_rHplGon_uU-unsplash.jpg',
  '/Chitwan/vince-russell-FXVY6ZIOkhM-unsplash.jpg',
  // Everest
  '/Everest/ben-lowe-UOj_xa6Qp0A-unsplash.jpg',
  '/Everest/Screenshot_20251124_121649.png',
];

const allImages = [...missionImages, ...trekFolderImages];

const placeholderSrc = '/placeholder.svg';

const MissionGallery: React.FC = () => {
  const [activeSrc, setActiveSrc] = React.useState<string | null>(null);
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    if (!activeSrc) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveSrc(null);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeSrc]);

  // Show a compact set first to avoid excessive scrolling.
  const initialCount = 8;
  const visibleImages = expanded ? allImages : allImages.slice(0, initialCount);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Gallery — Mission & Uploads</h2>
          <p className="text-gray-600 mt-2">Click any photo to view it larger.</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {visibleImages.map((src, idx) => (
              <button
                key={src + idx}
                type="button"
                className="group rounded-lg overflow-hidden bg-gray-100 h-44 md:h-56 text-left relative"
                onClick={() => setActiveSrc(src)}
                aria-label={`Open image ${idx + 1}`}
              >
                <img
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding={idx === 0 ? 'sync' : 'async'}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = placeholderSrc;
                  }}
                />
                <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" aria-hidden="true" />
              </button>
            ))}
          </div>

          {/* Creative fade hint + quick expand (reduces scroll, still discoverable) */}
          {!expanded && allImages.length > initialCount && (
            <div className="pointer-events-none absolute inset-x-0 -bottom-2 h-20 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
          )}
        </div>

        {allImages.length > initialCount && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
              aria-expanded={expanded}
            >
              {expanded ? 'Show less' : `Show more (${allImages.length - initialCount})`}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox modal */}
      {activeSrc && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 p-4 md:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveSrc(null)}
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveSrc(null)}
              className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-10 h-10 rounded-full bg-white text-gray-900 shadow flex items-center justify-center"
              aria-label="Close"
            >
              ×
            </button>
            <div className="rounded-xl overflow-hidden bg-black">
              <img
                src={activeSrc}
                alt="Enlarged gallery"
                className="w-full h-auto max-h-[80vh] object-contain bg-black"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = placeholderSrc;
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MissionGallery;
