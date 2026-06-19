import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const WebsitesForConsultantsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Websites for Consultants UK | Webion Studio</title>
        <meta name="description" content="Professional websites for UK consultants. We build sites that communicate your expertise, generate leads, and fill your pipeline — done for you." />
        <link rel="canonical" href="https://www.webion-studio.co.uk/services/websites-for-consultants" />
        <meta property="og:title" content="Websites for Consultants UK | Webion Studio" />
        <meta property="og:description" content="Professional websites for UK consultants. We build sites that communicate your expertise, generate leads, and fill your pipeline." />
        <meta property="og:url" content="https://www.webion-studio.co.uk/services/websites-for-consultants" />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="hero-meta">Services</p>
            <h1>Websites for Consultants in the UK</h1>
            <p>
              Your expertise deserves a website that communicates it clearly.
              We build consultant websites that win trust, generate leads, and
              fill your pipeline — without you lifting a finger.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Book a free consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What a great consultant website does</h2>
          <p className="section-lead">
            Clients Google you before they call you. Your website needs to
            answer their questions and make the next step obvious.
          </p>
          <div className="grid three">
            <div className="card">
              <h3>Establishes credibility</h3>
              <p>
                A professional, fast site signals that you take your business
                seriously — and so should clients.
              </p>
            </div>
            <div className="card">
              <h3>Explains what you do</h3>
              <p>
                Consultants often struggle to communicate their value clearly.
                We help you say it in seconds.
              </p>
            </div>
            <div className="card">
              <h3>Converts visitors to leads</h3>
              <p>
                Clear calls to action and a smooth contact flow turn curious
                visitors into booked discovery calls.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>What's included in your consultant website</h2>
          <div className="grid four">
            <div className="card">
              <h3>Services page</h3>
              <p>Clearly outline your offerings, process, and outcomes clients can expect.</p>
            </div>
            <div className="card">
              <h3>About & credibility</h3>
              <p>Your story, credentials, and track record — presented to build instant trust.</p>
            </div>
            <div className="card">
              <h3>Booking & contact</h3>
              <p>A frictionless way for prospects to schedule a call or send an enquiry.</p>
            </div>
            <div className="card">
              <h3>Testimonials</h3>
              <p>Social proof from past clients that reinforces your expertise and results.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Built for all types of consultants</h2>
          <div className="grid three">
            <div className="card">
              <h3>Business & strategy</h3>
              <p>Management consultants, business advisors, and growth strategists.</p>
            </div>
            <div className="card">
              <h3>Marketing & digital</h3>
              <p>Marketing consultants, SEO specialists, and brand strategists.</p>
            </div>
            <div className="card">
              <h3>HR & operations</h3>
              <p>HR consultants, operations advisors, and change management specialists.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Let your website do the selling</h2>
          <p className="section-lead">
            Book a free 30-minute call and we'll design a site that positions
            you as the go-to consultant in your niche.
          </p>
          <Link to="/contact" className="btn btn-primary">Book a free consultation</Link>
        </div>
      </section>
    </>
  );
};
