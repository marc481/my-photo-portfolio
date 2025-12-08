// src/components/screens/GalleryScreen.tsx

import { photos } from "../../data/photos"; // Make sure this path is correct

// This screen shows a grid of photo cards using the photos array
export default function GalleryScreen() {
  return (
    <section className="space-y-4">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold">Portfolio</h2>
        <p className="text-sm text-neutral-300">
          A selection of my favourite images from travel, street, and landscape.
        </p>
      </header>

      {/* Responsive grid: 1 col on mobile, 2 on small screens, 3 on medium+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* ^ was md:grid=cols 3 which Tailwind doesn't understand */}

        {/* Loop through each photo object and render a card */}
        {photos.map((photo) => (
          <article
            key={photo.id}
            className="group overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/40"
          >
            {/* Image area with fixed aspect ratio so cards stay consistent */}
            <div className="w-full bg-neutral-900 rounded-lg overflow-hidden">
              <img
                src={photo.src}
                alt={photo.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Caption area under the image */}
            <div className="p-3 space-y-1">
              <h3 className="text-sm font-medium">{photo.title}</h3>
              <p className="text-xs text-neutral-400">
                {photo.category} · {photo.location}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
