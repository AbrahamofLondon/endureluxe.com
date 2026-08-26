import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout title="About">
      <section className="page-hero section-pad"><p className="eyebrow">About EndureLuxe</p><h1>A consumer brand for durable physical capability.</h1><p className="hero-body">EndureLuxe exists for a simple reason: fitness should remain useful when life becomes inconvenient.</p></section>
      <section className="section-pad split-section light-rule"><div><p className="eyebrow">Independent by design</p><h2>Related by founder. Separate by purpose.</h2></div><div className="prose-stack"><p>EndureLuxe is independently operated. It shares a founder and a standard of disciplined craft with other Abraham Adaramola ventures, but it has its own consumer purpose, data boundary and commercial proposition.</p><p>Abraham of London is a separate intellectual, research and publishing estate. Alomarada Ltd is a separate institutional commercial firm. EndureLuxe is neither an operating arm of those estates nor a consumer expression of their methodology.</p></div></section>
      <section className="dark-band section-pad split-section"><div><p className="eyebrow inverse">What we are building</p><h2>Practice first. Products later.</h2></div><div className="prose-stack inverse-prose"><p>The first offer is The 45: a structured consistency programme. Recurring membership, community events and carefully selected physical products may follow only after real demand justifies them.</p><p>This sequence keeps the business focused on usefulness rather than inventory, catalogue size or lifestyle theatre.</p></div></section>
    </Layout>
  );
}
