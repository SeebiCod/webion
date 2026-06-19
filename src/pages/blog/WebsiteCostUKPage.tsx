import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const WebsiteCostUKPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>How Much Does a Website Cost in the UK? (2026 Guide) | Webion Studio</title>
        <meta name="description" content="UK website pricing explained — from DIY builders at £10/month to custom agencies at £5,000+. Find out what you actually need and what it should cost." />
        <link rel="canonical" href="https://www.webion-studio.co.uk/blog/how-much-does-a-website-cost-uk" />
        <meta property="og:title" content="How Much Does a Website Cost in the UK? (2026 Guide)" />
        <meta property="og:description" content="UK website pricing explained — from DIY builders at £10/month to custom agencies at £5,000+. Find out what you actually need and what it should cost." />
        <meta property="og:url" content="https://www.webion-studio.co.uk/blog/how-much-does-a-website-cost-uk" />
        <meta property="og:type" content="article" />
      </Helmet>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="hero-meta">Blog · June 2026</p>
            <h1>How Much Does a Website Cost in the UK? (2026 Guide)</h1>
            <p>
              Website pricing in the UK varies wildly — from £0 with a free
              builder to £50,000+ for enterprise development. Here's an honest
              breakdown of what you'll actually pay, and what you get at each
              level.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>UK Website Cost Summary</h2>
          <p className="section-lead">
            The short answer: most small business websites in the UK cost
            between £500 and £5,000 for a custom build, or £10–£50/month for a
            DIY builder subscription.
          </p>
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Typical Cost</th>
                  <th>Best For</th>
                  <th>Limitations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>DIY builder (Wix, Squarespace)</td>
                  <td>£10–£50/month</td>
                  <td>Hobbyists, very early stage</td>
                  <td>Poor SEO, generic look, you own nothing</td>
                </tr>
                <tr>
                  <td>WordPress + hosting</td>
                  <td>£5–£30/month + setup time</td>
                  <td>Bloggers, those with tech skills</td>
                  <td>Steep learning curve, security risks</td>
                </tr>
                <tr>
                  <td>Freelance developer</td>
                  <td>£500–£3,000 one-off</td>
                  <td>Small projects, tight budgets</td>
                  <td>Variable quality, limited support</td>
                </tr>
                <tr>
                  <td>Small agency (like Webion)</td>
                  <td>£1,000–£5,000 one-off</td>
                  <td>Service businesses, consultants, coaches</td>
                  <td>Higher upfront cost</td>
                </tr>
                <tr>
                  <td>Large agency / enterprise</td>
                  <td>£10,000–£50,000+</td>
                  <td>Complex platforms, e-commerce</td>
                  <td>Overkill for most small businesses</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>What affects the price?</h2>
          <div className="grid three">
            <div className="card">
              <h3>Number of pages</h3>
              <p>
                A 5-page brochure site costs far less than a 30-page service
                site with individual landing pages for each offering.
              </p>
            </div>
            <div className="card">
              <h3>Custom design vs template</h3>
              <p>
                A fully custom design built from scratch takes more time and
                costs more — but stands out and performs better.
              </p>
            </div>
            <div className="card">
              <h3>Functionality</h3>
              <p>
                Booking systems, member portals, e-commerce, and CRM
                integrations all add to the cost and time required.
              </p>
            </div>
            <div className="card">
              <h3>Copywriting</h3>
              <p>
                If you provide the copy, costs stay lower. If you need a
                copywriter, budget an extra £300–£1,000 depending on page count.
              </p>
            </div>
            <div className="card">
              <h3>SEO setup</h3>
              <p>
                A site built with SEO from day one costs slightly more but
                saves you thousands in paid ads later.
              </p>
            </div>
            <div className="card">
              <h3>Ongoing support</h3>
              <p>
                Monthly retainers for updates, hosting, and improvements
                typically run £50–£300/month depending on scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Is a cheap website worth it?</h2>
          <p className="section-lead">
            Not usually. Here's why cutting corners costs more in the long run:
          </p>
          <div className="grid two">
            <div className="card">
              <h3>Lost leads = lost revenue</h3>
              <p>
                A confusing or slow website drives visitors away. If you lose
                even one client per month due to a poor site, that's thousands
                of pounds a year in lost revenue.
              </p>
            </div>
            <div className="card">
              <h3>Rebuilds are expensive</h3>
              <p>
                Many businesses start cheap, then pay to rebuild 12 months
                later. Doing it right the first time is almost always cheaper
                overall.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>What does Webion Studio charge?</h2>
          <p className="section-lead">
            We build custom websites for UK small businesses, consultants, and
            coaches. Book a free consultation and we'll give you a clear, no-
            obligation quote based on exactly what you need.
          </p>
          <Link to="/contact" className="btn btn-primary">Get a free quote</Link>
        </div>
      </section>
    </>
  );
};
