import Layout from "../components/Layout";
import { journalArticles } from "../content/journal";

export function JournalIndex() {
  return (
    <Layout title="Journal">
      <section className="page-hero section-pad"><p className="eyebrow">EndureLuxe Journal</p><h1>Notes on staying capable.</h1><p className="hero-body">Writing on consistency, physical capability, recovery and the practical design of fitness around ordinary life.</p></section>
      <section className="journal-grid section-pad">
        {journalArticles.map((article, index) => <a className="journal-card" href={`/journal/${article.slug}`} key={article.slug}><span className="index-label">{String(index + 1).padStart(2,"0")} · {article.readTime}</span><h2>{article.title}</h2><p>{article.dek}</p><span className="text-link">Read →</span></a>)}
      </section>
    </Layout>
  );
}

export function JournalArticle({ slug }: { slug: string }) {
  const article = journalArticles.find((entry) => entry.slug === slug);
  if (!article) return <Layout title="Not found"><section className="page-hero section-pad"><h1>Article not found.</h1><a className="text-link" href="/journal">Return to Journal →</a></section></Layout>;
  return (
    <Layout title={article.title} description={article.dek}>
      <article className="article-page section-pad"><a className="eyebrow" href="/journal">← Journal</a><h1>{article.title}</h1><p className="article-dek">{article.dek}</p><span className="index-label">{article.readTime} read</span><div className="article-body">{article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></article>
    </Layout>
  );
}
