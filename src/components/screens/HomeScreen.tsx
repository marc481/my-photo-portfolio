export default function HomeScreen() {
  return (
    <section className="space-y-10">
      {/* Intro section with headline and description */}
      <div className="space-y-4 max-w03xl">
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
          Landscape and Quite Moments
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
          Photographer exploring quiet and everyday moments.
        </h1>

        <p className="text-sm text-neutral-300 leading-relaxed max-w-xl">
          I create photographs that focuses on the ambience, colour, and small
          details found in every day life. This is the website where I share
          selected worksm notes about my creating process, and the tools I use -
          built from scratch using React, TypeScritpt, and Tailwind CSS
        </p>
      </div>

      {/* Quick link cards to main sections of the site */}
      <div className="grid gap-4 sm:grid-cols-3">
        {/* Portfolio card */}
        <a
          href="/gallery"
          className="group rounded-xl border border-neutral-800 bg-neutral-900/40 px-4 py-3 text-sm transition hover:border-neutral-500 hover:bg-neutral-900"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">
            Portfolio
          </p>
          <p className="mt-2 font-medium">Selected photographs</p>
          <p className="mt-1 text-xs text-neutral-400 group-hover:text-neutral-300">
            Landscapes, city scenes, and quiet in-between moments.
          </p>
        </a>

        {/* Journal placeholder – you can turn this into a real page later */}
        <div className="rounded-xl border border-neutral-900 bg-neutral-950/60 px-4 py-3 text-sm">
          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
            Journal (soon)
          </p>
          <p className="mt-2 font-medium">Notes & process</p>
          <p className="mt-1 text-xs text-neutral-500">
            Writing about projects, locations, and what I&apos;m learning.
          </p>
        </div>

        {/* Prints / contact card */}
        <a
          href="/contact"
          className="group rounded-xl border border-neutral-800 bg-neutral-900/40 px-4 py-3 text-sm transition hover:border-neutral-500 hover:bg-neutral-900"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">
            Get in touch
          </p>
          <p className="mt-2 font-medium">Prints & enquiries</p>
          <p className="mt-1 text-xs text-neutral-400 group-hover:text-neutral-300">
            Reach out about collaborations, prints, or commissions.
          </p>
        </a>
      </div>
    </section>
  );
}
