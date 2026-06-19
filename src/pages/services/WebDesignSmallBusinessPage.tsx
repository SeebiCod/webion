import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const WebDesignSmallBusinessPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Web Design for Small Businesses UK | Webion Studio</title>
        <meta name="description" content="Custom web design for UK small businesses. Fast, conversion-focused websites built to generate leads and grow your business — without the agency price tag." />
        <link rel="canonical" href="https://www.webion-studio.co.uk/services/web-design-small-business" />
        <meta property="og:title" content="Web Design for Small Businesses UK | Webion Studio" />
        <meta property="og:description" content="Custom web design for UK small businesses. Fast, conversion-focused websites built to generate leads and grow your business." />
        <meta property="og:url" content="https://www.webion-studio.co.uk/services/web-design-small-business" />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="hero-meta">Services</p>
            <h1>Web Design for Small Businesses in the UK</h1>
            <p>
              We build clean, fast, conversion-focused websites for UK small
              businesses — without the agency price tag or the DIY headache.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Book a free consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Why your small business needs a proper website</h2>
          <p className="section-lead">
            A well-built website is your best salesperson — working 24/7,
            answering questions, and turning visitors into paying clients.
          </p>
          <div className="grid three">
            <div className="card">
              <h3>First impressions matter</h3>
              <p>
                75% of people judge a business's credibility by its website.
                A poor site loses clients before you've said a word.
              </p>
            </div>
            <div className="card">
              <h3>Generate leads while you sleep</h3>
              <p>
                A site with clear CTAs and a contact funnel captures enquiries
                around the clock — no extra effort from you.
              </p>
            </div>
            <div className="card">
              <h3>Beat your local competition</h3>
              <p>
                Most small business websites are outdated. A modern, fast site
                immediately puts you ahead in search results and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>What's included</h2>
          <p className="section-lead">
            Every Webion Studio site comes with everything a small business
            needs to look professional and convert visitors.
          </p>
          <div className="grid four">
            <div className="card">
              <h3>Custom design</h3>
              <p>No templates. Your site is designed to match your brand and audience.</p>
            </div>
            <div className="card">
              <h3>Mobile-first</h3>
              <p>Over 60% of web traffic is mobile. Your site will look great on every screen.</p>
            </div>
            <div className="card">
              <h3>SEO foundations</h3>
              <p>Proper meta tags, schema markup, fast loading — built in from day one.</p>
            </div>
            <div className="card">
              <h3>Contact & booking</h3>
              <p>Forms and booking flows that make it easy for clients to reach you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Who we work with</h2>
          <p className="section-lead">
            We specialise in service-based UK small businesses that need a
            site that works — not just one that looks nice.
          </p>
          <div className="grid three">
            <div className="card">
              <h3>Tradespeople & contractors</h3>
              <p>Plumbers, electricians, builders — get found locally and turn searches into calls.</p>
            </div>
            <div className="card">
              <h3>Independent retailers</h3>
              <p>Showcase your products, tell your story, and drive footfall or online orders.</p>
            </div>
            <div className="card">
              <h3>Professional services</h3>
              <p>Accountants, solicitors, therapists — build trust and fill your calendar.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Ready to get a website that works?</h2>
          <p className="section-lead">
            Book a free 30-minute consultation and we'll map out exactly what
            your business needs.
          </p>
          <Link to="/contact" className="btn btn-primary">Book a free consultation</Link>
        </div>
      </section>
    </>
  );
};
