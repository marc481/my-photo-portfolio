import PageLayout from "../layout/PageLayout";
import { photos } from "../../data/photos"; // Make sure this path is correct

export default function GalleryScreen() {
  return (
    <PageLayout>
      <section className="space-y-4">
        <header className="space-y-2">
          <h2 className="text-2xl font-semibold">Portfolio</h2>
          <p className="text-sm text-neutral-600">
            A selection of my favourite images from travel, street, and
            landscape.
          </p>
        </header>

        {/* Responsive columns: 1 col on mobile, 2 on small screens, 2 on medium+ */}
        <div className="columns-1 sm:columns-2 lg:columns-2 gap-8">
          {/* Loop through each photo object and render a card */}
          {photos.map((photo) => (
            <article
              key={photo.id}
              className="mb-8 break-inside-void overflow-hidden border border-neutral-200 bg-white"
            >
              {/* Image area with fixed aspect ratio so cards stay consistent */}
              <div className="w-full bg-neutral-900 overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-auto"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
