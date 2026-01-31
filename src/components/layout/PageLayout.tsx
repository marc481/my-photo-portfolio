// PageLayout.tsx
type PageLayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <main
      className="
        w-full
        max-w-6xl
        mx-auto

        /* Mobile spacing */
        px-4 py-6 pt-20

        /* Slightly bigger on small tablets */
        sm:px-6 sm:py-10

        /* On desktop, push content right to make room for the fixed sidebar (w-56 = 14rem) */
        md:pl-56 md:px-10 md:py-12 md:pt-12
      "
    >
      {children}
    </main>
  );
}
