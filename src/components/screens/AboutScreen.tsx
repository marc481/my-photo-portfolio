import PageLayout from "../layout/PageLayout";

export default function AboutScreen() {
  return (
    <PageLayout>
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
              John
            </h1>

            <p className="text-sm text-neutral-600 leading-relaxed">
              I’m John, a hobbyist photographer based in London, UK. My work
              focuses on quiet moments, subtle colour, and the small details of
              everyday life. This portfolio brings together my passion for
              photography and my background in programming, combining visual
              storytelling with thoughtful technical approach.
            </p>

            {/* Contact */}
            <div className="pt-4 text-sm text-neutral-700">
              <p className="font-medium mb-3">Contact</p>

              {/* Email */}
              <a
                href="mailto:marcusocampo0101@proton.me"
                className="block text-neutral-600 hover:text-neutral-900 underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-900"
              >
                marcusocampo0101@proton.me
              </a>

              {/* Socials grid */}
              <div className="mt-4 grid grid-cols gap-x-6 gap-y-3 max-w-sm">
                <a
                  href="https://www.linkedin.com/in/marcus-ocampo-3435b0264/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900 underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-900"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/marc481"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900 underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-900"
                >
                  GitHub
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900 underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-900"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
