function Contact() {
  return (
    <section id="contact" className="section">

      <div className="section-container contact-container">

        <div className="section-heading">
          <p>Let's connect</p>
          <h2>Contact Me</h2>
        </div>

        <p className="contact-description">
          I'm always interested in discussing software development,
          technology, projects, and new opportunities.
        </p>

        <div className="contact-links">

          <a
            href="mailto:your-email@example.com"
            className="contact-card"
          >
            <div>
              <span>Email</span>
              <strong>alexvu31@hotmail.com</strong>
            </div>
          </a>

          <a
            href="https://github.com/Alexvu31/QubitTouchdown"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div>
              <span>GitHub</span>
              <strong>View my repositories</strong>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/alex-vu-595382102/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div>
              <span>LinkedIn</span>
              <strong>Connect with me</strong>
            </div>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;