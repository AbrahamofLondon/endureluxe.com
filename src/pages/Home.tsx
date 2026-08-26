import Layout from "../components/Layout";
import { offerConfig, siteConfig } from "../config/site";

const pillars = [
  ["01", "Move", "Keep ordinary movement present, even when the week compresses."],
  ["02", "Strengthen", "Build and preserve usable strength without making every session maximal."],
  ["03", "Recover", "Treat rest, sleep and recovery as part of the practice, not time away from it."],
  ["04", "Return", "Missed days are information. Restart quickly instead of beginning again from zero."],
  ["05", "Continue", "Build a practice that can remain available through ordinary life."],
] as const;

export default function Home() {
  return (
    <Layout>
      <section className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow">EndureLuxe · Physical resilience</p>
          <h1>Stay capable.</h1>
          <p className="hero-kicker">Fitness that survives real life.</p>
          <p className="hero-body">A durable fitness practice for people whose weeks include work, travel, family, pressure and imperfect energy. The aim is not a perfect plan. It is a practice you can return to.</p>
          <div className="button-row">
            <a className="button button-dark" href={siteConfig.routes.join}>Join The 45</a>
            <a className="button button-quiet" href={siteConfig.routes.the45}>See how it works</a>
          </div>
        </div>
        <div className="hero-field" aria-hidden="true">
          <div className="field-line line-a" />
          <div className="field-line line-b" />
          <div className="field-line line-c" />
          <div className="field-marker marker-a">DAY 01</div>
          <div className="field-marker marker-b">RETURN</div>
          <div className="field-marker marker-c">DAY 45</div>
        </div>
      </section>

      <section className="dark-band section-pad split-section">
        <div>
          <p className="eyebrow inverse">The actual problem</p>
          <h2>The problem is usually not knowing what to do.</h2>
        </div>
        <div className="prose-stack inverse-prose">
          <p>Most adults already know that movement, strength and recovery matter. The harder problem is keeping them present when life becomes ordinary, crowded or inconvenient.</p>
          <p>EndureLuxe is organised around adherence without shame: define a credible floor, build above it when capacity is available, and make return part of the system before disruption happens.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-heading">
          <p className="eyebrow">The Endure Standard</p>
          <h2>Five things worth keeping.</h2>
        </div>
        <div className="pillar-grid">
          {pillars.map(([index, title, copy]) => (
            <article key={title} className="pillar-card">
              <span className="index-label">{index}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <a className="text-link section-link" href={siteConfig.routes.standard}>Read The Endure Standard →</a>
      </section>

      <section className="programme-panel section-pad">
        <div className="programme-title">
          <p className="eyebrow">The first programme</p>
          <h2>The 45</h2>
          <p className="display-note">45 days to build a practice worth keeping.</p>
        </div>
        <div className="programme-metrics">
          <div><span>45</span><small>days</small></div>
          <div><span>6+3</span><small>weeks + days</small></div>
          <div><span>1</span><small>weekly review</small></div>
          <div><span>∞</span><small>returns allowed</small></div>
        </div>
        <div className="timeline" aria-label="The 45 programme timeline">
          {["Baseline", "Build", "Pressure", "Return", "Consolidate", "Record"].map((item, index) => (
            <div className="timeline-step" key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>
          ))}
        </div>
        <a className="button button-dark" href={siteConfig.routes.the45}>Explore The 45</a>
      </section>

      <section className="section-pad real-weeks">
        <div className="section-heading narrow">
          <p className="eyebrow">Built for real weeks</p>
          <h2>The system should bend before it breaks.</h2>
        </div>
        <div className="scenario-grid">
          {[
            ["Travel", "A different place does not have to mean a vanished practice."],
            ["Work pressure", "Compressed sessions and credible minimums keep the thread intact."],
            ["Family demands", "Flexibility is designed in, not treated as evidence of weak commitment."],
            ["Low-energy days", "Recovery and minimum movement can be the correct training decision."],
            ["Missed sessions", "The return protocol begins with the next credible action, not punishment."],
            ["Good weeks", "When capacity is available, build above the floor without confusing more with better."],
          ].map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="price-section section-pad">
        <div>
          <p className="eyebrow">Founding cohort</p>
          <h2>{offerConfig.priceLabel}</h2>
          <p>{offerConfig.priceQualifier}</p>
        </div>
        <div className="price-copy">
          <p>One structured 45-day practice. No fake discount, no countdown timer and no promise that six weeks will remake your body. The founding price exists because the first cohort will help us refine what deserves to continue.</p>
          <a className="button button-accent" href={siteConfig.routes.join}>Request a founding place</a>
        </div>
      </section>

      <section className="section-pad faq-section">
        <div className="section-heading"><p className="eyebrow">Questions</p><h2>Before you join.</h2></div>
        <div className="faq-list">
          {[
            ["Is this a workout plan?", "Not in the narrow sense. The 45 gives you a consistency structure around movement, strength and recovery. You choose activity appropriate to you; qualified advice should be used where necessary."],
            ["What if I miss days?", "You use the return protocol. Missed days are not erased or punished. The aim is to restore a credible practice quickly."],
            ["Is weight loss the goal?", "No. Participants may have their own goals, but EndureLuxe is organised around durable physical capability and consistency rather than guaranteed aesthetic outcomes."],
            ["Do I need a gym?", "No. The programme is intentionally compatible with walking, home training, gym training and other appropriate forms of activity."],
            ["Is this medical advice?", "No. The programme is general fitness information and accountability. It does not diagnose or treat medical conditions."],
          ].map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </div>
      </section>
    </Layout>
  );
}
