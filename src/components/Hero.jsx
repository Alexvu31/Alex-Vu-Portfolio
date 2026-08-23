import profilePhoto from "../assets/1781049842732.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <p className="hero-intro">
          Hello, I'm
        </p>

        <h1>Alex Vu</h1>

        <h2>
          Computer Programmer & Software Developer
        </h2>

        <p className="hero-description">
          I build web applications, frontend-backend systems, and
          interactive software while exploring AI,
          cybersecurity, and emerging technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View My Projects
          </a>

          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/Alexvu31"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/alex-vu-595382102/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

      </div>

      <div className="hero-image">
        <img
          src={profilePhoto}
          alt="Alex Vu"
          className="profile-photo"
        />
      </div>

      <a href="#about" className="scroll-indicator">
        ↓
      </a>
    </section>
  );
}

export default Hero;