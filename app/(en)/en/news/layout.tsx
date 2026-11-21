const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <div className="journal">
    <header className="journal-header">
      <a href={base + "/en/"} aria-label="Masterskaya Remonta — Home"><img src={base + "/images/logo-approved-horizontal.png"} alt="Masterskaya Remonta" /></a>
      <nav aria-label="Blog navigation"><a href={base + "/en/#projects"}>Projects</a><a href={base + "/en/news/"}>Blog</a><a href={base + "/news/"} hrefLang="ru" lang="ru">Русский</a></nav>
    </header>
    {children}
    <footer className="journal-footer"><a href={base + "/en/"}>← Home</a><span>© 2026 Masterskaya Remonta</span></footer>
  </div>;
}
