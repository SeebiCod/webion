import { Link } from "react-router-dom";

export const LandingPage: React.FC = () => {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Build a modern web presence that converts.</h1>
            <p>
              Webion helps you showcase what you do, capture leads, and make it
              easy for clients to book time with you.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Book a meeting
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Contact us
              </Link>
            </div>
            <p className="hero-meta">
              Trusted partner for small businesses going online.
            </p>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <p className="hero-card-title">Your new digital home</p>
              <p className="hero-card-body">
                Clean, responsive design with clear calls to action and simple
                onboarding for your clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2>About</h2>
          <p className="section-lead">
            We design and build lightweight, high-performing websites tailored
            to service businesses that need clarity, trust, and simplicity.
          </p>
          <div className="grid three">
            <div className="card">
              <h3>Clarity first</h3>
              <p>We help you explain what you do in seconds.</p>
            </div>
            <div className="card">
              <h3>Conversion focused</h3>
              <p>Every page nudges visitors toward contact or booking.</p>
            </div>
            <div className="card">
              <h3>Long term partner</h3>
              <p>We stay with you as your business and site evolve.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="section section-alt">
        <div className="container">
          <h2>What we do</h2>
          <div className="grid four">
            <div className="card">
              <h3>Landing pages</h3>
              <p>High-impact first impressions that tell your story.</p>
            </div>
            <div className="card">
              <h3>Contact funnels</h3>
              <p>Forms and booking flows that respect your time.</p>
            </div>
            <div className="card">
              <h3>Member areas</h3>
              <p>Simple portals for your clients and partners.</p>
            </div>
            <div className="card">
              <h3>Ongoing care</h3>
              <p>Updates, tweaks, and improvements as you grow.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section">
        <div className="container">
          <h2>Testimonials</h2>
          <div className="grid three">
            <div className="card">
              <p>
                “Our new site doubled inbound leads within the first month.”
              </p>
              <p className="card-meta">Alex — Agency owner</p>
            </div>
            <div className="card">
              <p>
                “Clients finally understand what we do and book calls
                themselves.”
              </p>
              <p className="card-meta">Jordan — Consultant</p>
            </div>
            <div className="card">
              <p>
                “The member area gives our clients one simple place to go for
                everything.”
              </p>
              <p className="card-meta">Taylor — Coach</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

