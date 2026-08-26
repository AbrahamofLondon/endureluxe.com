import { FormEvent, useState } from "react";
import Layout from "../components/Layout";
import { offerConfig } from "../config/site";
import { paymentAdapter, registrationAdapter } from "../lib/adapters";

export default function Join() {
  const [status, setStatus] = useState<"idle" | "sending" | "preview" | "live" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (form.get("healthAcknowledged") !== "on") {
      setStatus("error");
      setMessage("Please acknowledge the health disclaimer before continuing.");
      return;
    }
    setStatus("sending");
    const result = await registrationAdapter.submit({
      firstName: String(form.get("firstName") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      location: String(form.get("location") ?? "").trim() || undefined,
      healthAcknowledged: true,
      marketingConsent: form.get("marketingConsent") === "on",
    });
    if (!result.ok) {
      setStatus("error");
      setMessage(result.message);
      return;
    }
    setStatus(result.mode);
    setMessage(result.mode === "preview" ? "Preview only — your details were not sent or stored. Live registration will be connected before launch." : "Your founding-cohort request has been received.");
  }

  return (
    <Layout title="Join The 45">
      <section className="join-layout section-pad">
        <div className="join-copy"><p className="eyebrow">Founding cohort</p><h1>Join The 45.</h1><p className="hero-kicker">{offerConfig.priceLabel} · one-off introductory price</p><p>Request a place in the first EndureLuxe cohort. We collect only what is needed to contact you about programme access. Health information is deliberately not collected in this form.</p><div className="join-boundary"><strong>Payment status</strong><p>{paymentAdapter.checkoutUrl ? "Checkout is configured for the live environment." : "Payment is not active in this preview. No money can be taken from this page."}</p></div></div>
        <form className="join-form" onSubmit={submit} noValidate>
          <label><span>First name</span><input name="firstName" autoComplete="given-name" required /></label>
          <label><span>Email</span><input name="email" type="email" autoComplete="email" required /></label>
          <label><span>City / country <small>optional</small></span><input name="location" autoComplete="address-level2" /></label>
          <label className="check-row"><input name="healthAcknowledged" type="checkbox" required /><span>I have read the health disclaimer and understand that EndureLuxe provides general fitness structure, not medical diagnosis or treatment.</span></label>
          <label className="check-row"><input name="marketingConsent" type="checkbox" /><span>I would also like occasional EndureLuxe news and future programme updates. This is optional.</span></label>
          <button className="button button-dark" type="submit" disabled={status === "sending"}>{status === "sending" ? "Submitting…" : "Request a founding place"}</button>
          {message && <p className={`form-message ${status === "error" ? "error" : ""}`} role="status">{message}</p>}
          <p className="form-note">No medical history, weight, diagnosis or other health details are requested here.</p>
        </form>
      </section>
    </Layout>
  );
}
