import Layout from "../components/Layout";

const principles = [
  ["01", "Move", "Movement is the baseline. Walking, ordinary activity and intentional training all count when they serve a credible physical life. The objective is not to make every day impressive; it is to make inactivity less automatic."],
  ["02", "Strengthen", "Strength is practical capacity. Build it progressively and appropriately, with enough restraint that the work can continue. More is not always better, and maximal effort is not the only evidence of useful training."],
  ["03", "Recover", "Adaptation requires recovery. Sleep, rest, mobility and lower-intensity days belong inside the practice. Recovery is not a reward earned after exhaustion; it is part of how capability is maintained."],
  ["04", "Return", "Disruption will happen. A durable system defines the way back before it is needed. The first task after interruption is not to repay missed work. It is to restore the practice."],
  ["05", "Continue", "The long horizon matters. A programme succeeds when its useful parts can survive beyond the programme. Continue means keeping enough structure to make physical capability a normal responsibility rather than a seasonal project."],
] as const;

export default function Standard() {
  return (
    <Layout title="The Endure Standard">
      <section className="page-hero section-pad"><p className="eyebrow">The Endure Standard</p><h1>Five things worth keeping.</h1><p className="hero-body">A deliberately simple standard for physical practice: move, strengthen, recover, return and continue.</p></section>
      <section className="standard-list section-pad">
        {principles.map(([n,title,copy]) => <article key={title}><span className="index-label">{n}</span><div><h2>{title}</h2><p>{copy}</p></div></article>)}
      </section>
      <section className="dark-band section-pad split-section"><div><p className="eyebrow inverse">What this standard refuses</p><h2>No punishment theatre.</h2></div><div className="prose-stack inverse-prose"><p>No fake certainty, guaranteed outcomes, compulsory suffering, body shame or claim that physical discipline proves moral or professional worth.</p><p>EndureLuxe can be demanding without being demeaning. The standard is continuity with judgement.</p></div></section>
    </Layout>
  );
}
