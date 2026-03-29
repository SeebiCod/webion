import React, { useState } from "react";

type ContactStatus = "idle" | "submitting" | "success" | "error";

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  function validate() {
    if (!fullName || !email || !subject || !message) {
      setError("Please fill in all fields.");
      return false;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (message.length < 10) {
      setError("Message should be at least 10 characters.");
      return false;
    }
    return true;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!validate()) return;
    setStatus("submitting");
    try {
      // Placeholder: in a real app, POST to /api/contact here.
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setFullName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="section">
      <div className="container contact-grid">
        <div className="card">
          <h2>Contact us</h2>
          <p className="section-lead">
            Share a bit about what you need and we&apos;ll get back to you
            within one business day.
          </p>
          <form onSubmit={handleSubmit} className="form">
            <label>
              Full name
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Subject / Reason
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </label>
            <label>
              Message
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </label>
            {error && <p className="form-error">{error}</p>}
            {status === "success" && (
              <p className="form-success">
                Thanks for reaching out. We&apos;ll be in touch shortly.
              </p>
            )}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>

        <div className="card">
          <h2>Schedule a meeting</h2>
          <p className="section-lead">
            Pick a time that works for you, and we&apos;ll confirm with a
            calendar invite.
          </p>
          <div className="scheduling-widget">
            <p className="scheduling-placeholder">
              Embed your scheduling tool here (e.g. Calendly, Cal.com). For
              now, this area is a placeholder to be wired to your preferred
              provider.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

