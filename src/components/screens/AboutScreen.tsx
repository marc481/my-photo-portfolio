export default function AboutScreen() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Image */}
        <img
          src="/images/me.jpg"
          alt="me"
          className="w-full md:w-1/2 h-auto object-cover"
        />

        {/* Text */}
        <div className="space-y-4 md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Marcus Ocampo
          </h1>

          <p className="text-sm text-neutral-600 leading-relaxed">
            I’m Marcus Ocampo, a hobbyist photographer based in London,UK. My
            work focuses on quiet moments, subtle colour, and the small details
            of everyday life. This website brings together my interest in
            photography and my background in programming.
          </p>
        </div>
      </div>
    </section>
  );
}
