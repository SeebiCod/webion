import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const WixVsWordPressPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Wix vs WordPress: Which is Right for Your Business? | Webion Studio</title>
        <meta name="description" content="Wix vs WordPress compared for UK small businesses — ease of use, SEO, ownership, cost, and which platform actually grows your revenue." />
        <link rel="canonical" href="https://www.webion-studio.co.uk/compare/wix-vs-wordpress" />
        <meta property="og:title" content="Wix vs WordPress: Which is Right for Your Business?" />
        <meta property="og:description" content="Wix vs WordPress compared for UK small businesses — ease of use, SEO, ownership, cost, and which platform actually grows your revenue." />
        <meta property="og:url" content="https://www.webion-studio.co.uk/compare/wix-vs-wordpress" />
        <meta property="og:type" content="article" />
      </Helmet>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="hero-meta">Comparison Guide</p>
            <h1>Wix vs WordPress: Which is Right for Your Business?</h1>
            <p>
              Wix promises simplicity. WordPress promises power. But for UK
              service businesses, the real question is: which one actually
              grows your revenue? Here's an honest comparison.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Quick Comparison</h2>
          <p className="section-lead">
            Wix and WordPress are fundamentally different tools built for
            different needs. Understanding that difference saves you months of
            frustration.
          </p>
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Wix</th>
                  <th>WordPress</th>
                  <th>Webion Studio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ease of use</td>
                  <td>✅ Very easy</td>
                  <td>⚠️ Steep learning curve</td>
                  <td>✅ We handle everything</td>
                </tr>
                <tr>
                  <td>Design flexibility</td>
                  <td>⚠️ Template-limited</td>
                  <td>✅ Unlimited with dev</td>
                  <td>✅ Custom to your brand</td>
                </tr>
                <tr>
                  <td>SEO capability</td>
                  <td>⚠️ Basic</td>
                  <td>✅ Full control</td>
                  <td>✅ Full control + GEO</td>
                </tr>
                <tr>
                  <td>Performance / speed</td>
                  <td>⚠️ Moderate</td>
                  <td>⚠️ Depends on plugins</td>
                  <td>✅ Optimised & fast</td>
                </tr>
                <tr>
                  <td>Security & maintenance</td>
                  <td>✅ Managed for you</td>
                  <td>❌ Your responsibility</td>
                  <td>✅ Handled by us</td>
                </tr>
                <tr>
                  <td>Plugins / extensions</td>
                  <td>⚠️ App market</td>
                  <td>✅ 60,000+ plugins</td>
                  <td>✅ Built to spec, no bloat</td>
                </tr>
                <tr>
                  <td>Monthly cost</td>
                  <td>£13–£22/mo</td>
                  <td>£5–£50+/mo (hosting + plugins)</td>
                  <td>One-off or retainer</td>
                </tr>
                <tr>
                  <td>Ownership</td>
                  <td>❌ Wix owns your site</td>
                  <td>✅ You own everything</td>
                  <td>✅ You own everything</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Wix — Pros & Cons</h2>
          <div className="grid two">
            <div className="card">
              <h3>✅ Pros</h3>
              <ul>
                <li>No technical knowledge required</li>
                <li>Fast to get a basic site live</li>
                <li>Hosting and security handled automatically</li>
                <li>Good for simple brochure or portfolio sites</li>
              </ul>
            </div>
            <div className="card">
              <h3>❌ Cons</h3>
              <ul>
                <li>You don't truly own the site — Wix does</li>
                <li>Limited SEO = limited Google rankings</li>
                <li>Slow page speeds hurt conversion and rankings</li>
                <li>Cannot migrate easily if you want to leave</li>
                <li>Looks like thousands of other Wix sites</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>WordPress — Pros & Cons</h2>
          <div className="grid two">
            <div className="card">
              <h3>✅ Pros</h3>
              <ul>
                <li>Most powerful and flexible CMS on the web</li>
                <li>You own your site and all your data</li>
                <li>Excellent SEO capabilities with the right setup</li>
                <li>60,000+ plugins for almost any feature</li>
                <li>Powers 43% of all websites worldwide</li>
              </ul>
            </div>
            <div className="card">
              <h3>❌ Cons</h3>
              <ul>
                <li>Steep learning curve — takes time to master</li>
                <li>Security vulnerabilities if not maintained</li>
                <li>Plugin conflicts can break your site</li>
                <li>Needs regular updates and backups</li>
                <li>Speed suffers with too many plugins</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>So Which Should You Pick?</h2>
          <p className="section-lead">
            The honest answer: it depends on your situation. Here's a simple
            guide for UK small businesses:
          </p>
          <div className="grid three">
            <div className="card">
              <h3>Choose Wix if…</h3>
              <p>
                You need something live today, you have a very tight budget, and
                you're okay with a simple brochure site that won't rank highly
                on Google.
              </p>
            </div>
            <div className="card">
              <h3>Choose WordPress if…</h3>
              <p>
                You want full ownership, strong SEO potential, and you're
                comfortable managing updates — or you have a developer on hand.
              </p>
            </div>
            <div className="card">
              <h3>Choose Webion Studio if…</h3>
              <p>
                You want a high-converting, fast, SEO-ready site without
                spending weeks learning a platform. We build it, you grow it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Skip the builder. Get a site that works.</h2>
          <p className="section-lead">
            Webion Studio builds custom websites for UK small businesses,
            consultants, and coaches — without the DIY headaches.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Book a free consultation
          </Link>
        </div>
      </section>
    </>
  );
};
