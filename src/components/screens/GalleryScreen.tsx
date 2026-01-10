import PageLayout from "../layout/PageLayout";
import { photos } from "../../data/photos";
import { useState } from "react";
import FullscreenImage from "../UI/FullScreenImage";

export default function GalleryScreen() {
  const [activePhoto, setActivePhoto] = useState<{
    src: string;
    alt: string;
  } | null>(null);

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

        <div className="columns-1 sm:columns-2 lg:columns-2 gap-8">
          {photos.map((photo) => (
            <article
              key={photo.id}
              className="mb-8 break-inside-avoid overflow-hidden border border-neutral-200 bg-white"
            >
              <div className="w-full bg-neutral-900 overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-auto cursor-pointer"
                  onClick={() =>
                    setActivePhoto({
                      src: photo.src,
                      alt: photo.title,
                    })
                  }
                />
              </div>
            </article>
          ))}
        </div>
      </section>
      <FullscreenImage
        isOpen={activePhoto !== null}
        src={activePhoto?.src ?? ""}
        alt={activePhoto?.alt ?? ""}
        onClose={() => setActivePhoto(null)}
      />
    </PageLayout>
  );
}
