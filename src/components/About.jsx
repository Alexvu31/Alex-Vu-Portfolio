function About() {
  return (
    <section id="about" className="section">
      <div className="section-container">

        <div className="section-heading">
          <p>Get to know me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">

          <div className="about-text">
            <p>
              I'm a Computer Programming student at Algonquin College
              with an interest in software development, web applications,
              backend systems, emerging technologies, and games.
            </p>

            <p>
              Through my coursework and projects, I've worked with Java, 
              JavaScript, React, C/C++, SQL, Arduino, REST APIs, Jakarta EE, 
              Python, HTML, CSS, Git, GitHub, Linux, networking, data structures, 
              algorithms, object-oriented programming, databases, web development, 
              software testing, debugging, embedded systems, microcontrollers, 
              computer architecture, operating systems, cybersecurity video games. 
              My studies in Computer Engineering Technology have also given 
              me hands-on experience designing, developing, testing, and 
              troubleshooting software and hardware systems.

            </p>

            <p>
              I'm particularly interested in building applications that
              combine software engineering with artificial intelligence
              and cybersecurity.
            </p>
          </div>

          <div className="about-card">

            <div className="about-card-item">
              <span>Focus</span>
              <strong>Software Development</strong>
            </div>

            <div className="about-card-item">
              <span>Interests</span>
              <strong>AI & Cybersecurity</strong>
            </div>

            <div className="about-card-item">
              <span>Currently</span>
              <strong>Building Projects</strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;