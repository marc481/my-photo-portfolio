import { photos } from "../../data/photos"; // Import the photo data

// This screen displays a grid of photo cards using the photos array
export default function GalleryScreen() {
  return (
    <section className="space-y-4">
      {/* Header for the gallery page */}
      <header className="space-y-1">
        <h2 className="text-2xl font-semibold">Portfolio</h2>
        <p className="text-sm text-neutral-300">
          A selection of my favourite images from street, travel, and landscape
          work.
        </p>
      </header>

      {/* Grid layout: 1 column on mobile, 2 on small screens, 3 on medium+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Loop through each photo and render a card */}
        {photos.map((photo) => (
          <article
            key={photo.id} // React uses this key to track list items
            className="group overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/40"
          >
            {/* Image container with fixed aspect ratio so cards stay consistent */}
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={photo.src} // Path from the photos.ts data
                alt={photo.title} // Helpful for accessibility and SEO
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Text information below the image */}
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
