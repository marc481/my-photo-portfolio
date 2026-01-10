type PageLayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return <div className="mx-auto w-full max-w-6xl px-12 py-12">{children}</div>;
}
