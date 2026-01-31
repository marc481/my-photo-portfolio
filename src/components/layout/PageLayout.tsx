export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-10 md:py-12">
      {children}
    </main>
  );
}
