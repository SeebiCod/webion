import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const WebsitesForCoachesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Websites for Coaches UK | Webion Studio</title>
        <meta name="description" content="Custom websites for UK coaches. Attract the right clients, showcase your programmes, and fill your sessions with a site built around your coaching business." />
        <link rel="canonical" href="https://www.webion-studio.co.uk/services/websites-for-coaches" />
        <meta property="og:title" content="Websites for Coaches UK | Webion Studio" />
        <meta property="og:description" content="Custom websites for UK coaches. Attract the right clients, showcase your programmes, and fill your sessions." />
        <meta property="og:url" content="https://www.webion-studio.co.uk/services/websites-for-coaches" />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="hero-meta">Services</p>
            <h1>Websites for Coaches in the UK</h1>
            <p>
              You help people transform their lives — your website should
              reflect that power. We build coaching websites that attract the
              right clients and fill your sessions.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Book a free consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Why coaches need a dedicated website</h2>
          <p className="section-lead">
            Social media gets you visibility. Your website converts that
            visibility into paying clients.
          </p>
          <div className="grid three">
            <div className="card">
              <h3>Your home base online</h3>
              <p>
                Platforms come and go. Your website is the one place you fully
                own and control your brand and client journey.
              </p>
            </div>
            <div className="card">
              <h3>Filters the right clients</h3>
              <p>
                A clear site that explains your method and ideal client means
                enquiries come pre-qualified — saving you hours of calls.
              </p>
            </div>
            <div className="card">
              <h3>Books sessions automatically</h3>
              <p>
                Integrated booking flows let clients schedule sessions without
                going back and forth on DMs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Everything your coaching website needs</h2>
          <div className="grid four">
            <div className="card">
              <h3>Your story & method</h3>
              <p>Communicate your coaching philosophy and what makes your approach unique.</p>
            </div>
            <div className="card">
              <h3>Programme pages</h3>
              <p>Detail your packages, what clients get, and the transformation they can expect.</p>
            </div>
            <div className="card">
              <h3>Booking & discovery calls</h3>
              <p>A seamless way for potential clients to book their first call with you.</p>
            </div>
            <div className="card">
              <h3>Testimonials & results</h3>
              <p>Real stories from real clients that build trust and overcome hesitation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>We work with all types of coaches</h2>
          <div className="grid three">
            <div className="card">
              <h3>Life & mindset coaches</h3>
              <p>Help people break through mental barriers and build the life they want.</p>
            </div>
            <div className="card">
              <h3>Business & executive coaches</h3>
              <p>Work with entrepreneurs and leaders to reach their next level.</p>
            </div>
            <div className="card">
              <h3>Health & wellness coaches</h3>
              <p>Fitness, nutrition, and wellbeing coaches growing their client base online.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Ready to attract more of the right clients?</h2>
          <p className="section-lead">
            Book a free 30-minute call and we'll map out a website that does
            justice to the transformation you offer.
          </p>
          <Link to="/contact" className="btn btn-primary">Book a free consultation</Link>
        </div>
      </section>
    </>
  );
};
