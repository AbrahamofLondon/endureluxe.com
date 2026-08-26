import Home from "./pages/Home";
import The45 from "./pages/The45";
import Standard from "./pages/Standard";
import { JournalArticle, JournalIndex } from "./pages/Journal";
import About from "./pages/About";
import Join from "./pages/Join";
import { HealthDisclaimer, Privacy, Terms } from "./pages/Legal";
import Layout from "./components/Layout";

function normalise(path: string) {
  const cleaned = path.split(/[?#]/)[0]?.replace(/\/+$/, "");
  return cleaned || "/";
}

export default function App() {
  const path = normalise(window.location.pathname);
  if (path === "/") return <Home />;
  if (path === "/the-45") return <The45 />;
  if (path === "/standard") return <Standard />;
  if (path === "/journal") return <JournalIndex />;
  if (path.startsWith("/journal/")) return <JournalArticle slug={path.replace("/journal/", "")} />;
  if (path === "/about") return <About />;
  if (path === "/join") return <Join />;
  if (path === "/privacy") return <Privacy />;
  if (path === "/terms") return <Terms />;
  if (path === "/health-disclaimer") return <HealthDisclaimer />;
  return <Layout title="Not found"><section className="page-hero section-pad"><p className="eyebrow">404</p><h1>This page is not part of the practice.</h1><a className="text-link" href="/">Return home →</a></section></Layout>;
}
