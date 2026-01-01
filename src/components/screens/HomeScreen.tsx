// src/components/screens/HomeScreen.tsx

export default function HomeScreen() {
  return (
    <section className="space-y-10">
      <div className="mt-10 overflow-hidden border border-neutral-200 bg-neutral-50">
        <img
          src="/images/sitting-room-sunlight.JPG"
          alt="Featured photo"
          className="w-full h-auto"
        ></img>
      </div>

      {/* Intro section with headline and description */}
      <div className="space-y-4 max-w-3xl">
        {/* ^ was max-w03xl (missing dash) so Tailwind ignored it */}
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
          Landscape and Quiet Moments
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
          Photographer exploring quiet and everyday moments.
        </h1>

        <p className="text-sm text-neutral-600 leading-relaxed max-w-xl">
          I create photographs that focus on ambience, colour, and small details
          found in everyday life. This is the website where I share selected
          works, notes about my process, and the tools I use – built from
          scratch using React, TypeScript, and Tailwind CSS.
        </p>
      </div>

      {/* Quick link cards to main sections of the site */}
      <div className="grid gap-4 sm:grid-cols-3"></div>
    </section>
  );
}
