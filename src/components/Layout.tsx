import { useEffect, useState, type ReactNode } from "react";
import { isCanonicalProductionHost, siteConfig } from "../config/site";

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
};

const primary = [
  [siteConfig.routes.the45, "The 45"],
  [siteConfig.routes.standard, "The Standard"],
  [siteConfig.routes.journal, "Journal"],
  [siteConfig.routes.about, "About"],
] as const;

function Seo({ title, description }: { title?: string; description?: string }) {
  useEffect(() => {
    const resolvedTitle = title ? `${title} — ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.tagline}`;
    document.title = resolvedTitle;

    const setMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMeta("description", description ?? siteConfig.description);
    setMeta("robots", isCanonicalProductionHost() ? "index, follow" : "noindex, nofollow");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${siteConfig.canonicalOrigin}${window.location.pathname === "/" ? "" : window.location.pathname}`;
  }, [title, description]);

  return null;
}

export default function Layout({ children, title, description }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="site-shell">
      <Seo title={title} description={description} />
      <a className="skip-link" href="#content">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="EndureLuxe home">
          <span className="wordmark-mark" aria-hidden="true">E/L</span>
          <span>EndureLuxe</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {primary.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="text-link desktop-join" href={siteConfig.routes.join}>Join The 45</a>
          <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu">
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>
      {menuOpen && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation">
          {primary.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          <a href={siteConfig.routes.join}>Join The 45</a>
        </nav>
      )}
      <main id="content">{children}</main>
      <footer className="site-footer">
        <div>
          <a className="wordmark footer-wordmark" href="/">EndureLuxe</a>
          <p>Physical capability · consistency · community</p>
        </div>
        <div className="footer-links">
          <a href={siteConfig.routes.privacy}>Privacy</a>
          <a href={siteConfig.routes.terms}>Terms</a>
          <a href={siteConfig.routes.health}>Health disclaimer</a>
        </div>
        <p className="legal-line">EndureLuxe Limited · United Kingdom</p>
      </footer>
    </div>
  );
}
