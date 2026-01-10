import PageLayout from "../layout/PageLayout";

export default function HomeScreen() {
  return (
    <PageLayout>
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-3/5">
            <img
              src="/images/sitting-room-sunlight.JPG"
              alt="Featured photo"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-4 md:w-1/2">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-neutral-500">
              Landscape and quite moments
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-neutral-900">
              Photographer exporing quiet and everyday moments.
            </h1>

            <p className="text-sm md:text-base text-neutral-700 leading-relaxed max-w-xl">
              I create photographs that focus on ambience, colour, and small
              details found in everyday life. This is the website where I share
              selected works, notes about my process, and the tools I use built
              from scratch using React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
