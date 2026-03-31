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

const placeholderSrc = '/placeholder.svg';

const MissionGallery: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Gallery — Mission & Uploads</h2>
          <p className="text-gray-600 mt-2">A curated display of recent uploads documenting our mission, community work and on-the-ground operations.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {missionImages.map((src, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden bg-gray-100 h-44 md:h-56">
              <img
                src={src}
                alt={`Mission upload ${idx + 1}`}
                className="w-full h-full object-cover"
                loading={idx === 0 ? 'eager' : 'lazy'}
                decoding={idx === 0 ? 'sync' : 'async'}
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = placeholderSrc; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionGallery;
