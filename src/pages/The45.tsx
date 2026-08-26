import Layout from "../components/Layout";
import { offerConfig, siteConfig } from "../config/site";

const receives = [
  "A starting baseline and a clear personal minimum",
  "A weekly movement, strength and recovery structure",
  "Daily consistency check-ins without calorie or body policing",
  "A weekly review that records what actually happened",
  "A restart protocol for missed days or disrupted weeks",
  "A final 45-day consistency record",
];

export default function The45() {
  return (
    <Layout title="The 45" description="The 45 by EndureLuxe is a structured 45-day practice for building durable movement, strength, recovery and consistency.">
      <section className="page-hero section-pad">
        <p className="eyebrow">EndureLuxe programme 01</p>
        <h1>The 45</h1>
        <p className="hero-kicker">Build a practice worth keeping.</p>
        <p className="hero-body">Forty-five days of structure around the part of fitness most plans leave to chance: continuing when the week stops cooperating.</p>
        <div className="button-row"><a className="button button-dark" href={siteConfig.routes.join}>Join the founding cohort · {offerConfig.priceLabel}</a><a className="button button-quiet" href="#structure">See the structure</a></div>
      </section>

      <section className="section-pad split-section light-rule">
        <div><p className="eyebrow">Who it is for</p><h2>People who want fitness to belong to ordinary life.</h2></div>
        <div className="prose-stack"><p>You may already train, be restarting after a long gap, or simply be tired of routines that disappear as soon as work or family becomes demanding.</p><p>The programme is for adults able to choose suitable general physical activity for themselves. It is not a substitute for individual medical, physiotherapy or qualified coaching advice where that is needed.</p></div>
      </section>

      <section id="structure" className="dark-band section-pad">
        <div className="section-heading"><p className="eyebrow inverse">What you receive</p><h2>Enough structure to continue. Enough freedom to make it yours.</h2></div>
        <div className="receive-list">{receives.map((item, i) => <div key={item}><span>{String(i + 1).padStart(2,"0")}</span><p>{item}</p></div>)}</div>
      </section>

      <section className="section-pad week-grid-section">
        <div className="section-heading"><p className="eyebrow">The sequence</p><h2>Six weeks, then three days to close the record.</h2></div>
        <div className="week-grid">
          {[
            ["Week 1", "Baseline", "Define the minimum you can honestly keep."],
            ["Week 2", "Build", "Add structure without making the plan brittle."],
            ["Week 3", "Pressure", "Notice what changes when the week gets crowded."],
            ["Week 4", "Return", "Practise restarting without compensatory punishment."],
            ["Week 5", "Consolidate", "Keep what works; remove what only looked impressive."],
            ["Week 6", "Continue", "Shift from challenge logic to ongoing practice."],
            ["Days 43–45", "Record", "Close the first cycle and decide what continues."],
          ].map(([week,title,copy]) => <article key={week}><span>{week}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="restart-section section-pad">
        <div><p className="eyebrow">The return protocol</p><h2>Restart, don’t repay.</h2></div>
        <div className="restart-steps">
          {[
            ["01", "Notice", "Record the interruption without turning it into a verdict on yourself."],
            ["02", "Reduce", "Choose the smallest useful action that is credible now."],
            ["03", "Resume", "Perform that action before trying to recover lost volume."],
            ["04", "Rebuild", "Increase from a restored rhythm, not from guilt."],
          ].map(([n,t,c]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}
        </div>
      </section>

      <section className="price-section section-pad">
        <div><p className="eyebrow">Founding cohort</p><h2>{offerConfig.priceLabel}</h2><p>{offerConfig.priceQualifier}</p></div>
        <div className="price-copy"><p>Payment is not active in this preview build. Registration is separated from payment so the programme can connect a real checkout later without compromising the product or data boundary.</p><a className="button button-accent" href={siteConfig.routes.join}>Request a founding place</a></div>
      </section>

      <section className="section-pad health-boundary">
        <p className="eyebrow">Health boundary</p>
        <h2>General fitness structure, not medical treatment.</h2>
        <p>The 45 does not diagnose conditions, provide emergency guidance or replace individual professional advice. Choose activity appropriate to your circumstances, obtain medical or qualified fitness advice where appropriate, and stop activity and seek appropriate medical attention if you experience concerning symptoms.</p>
        <a className="text-link" href={siteConfig.routes.health}>Read the health disclaimer →</a>
      </section>
    </Layout>
  );
}
