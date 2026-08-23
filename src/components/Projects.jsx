const projects = [
  {
    title: "Food Bank Dashboard",
    description:
      "A React-PowerBI-based dashboard designed to manage food bank information, reports, applications, referrals, and analytics.",
    technologies: [
      "React",
      "JavaScript",
      "REST API",
      "Power BI",
      "Microsoft Azure"

    ],
    github: "https://github.com/LBaas2/Wrap-Around-Support-Initiative-Data-Dashboard",
    demo: "#"
  },

  {
    title: "Bouncer Management System",
    description:
      "A Jakarta EE application featuring JSF pages, JPA persistence, REST services, authentication, and database integration.",
    technologies: [
      "Java",
      "Jakarta EE",
      "JSF",
      "JPA",
      "REST"
    ],
    github: "https://github.com/JCoakeley/CST8128-Assignment-2",
    demo: "#"
  },

  {
    title: "Smart Room Automation",
    description:
      "An Arduino-based environmental monitoring and automation system using sensors, displays, LEDs, a motor, and Node-RED.",
    technologies: [
      "Arduino",
      "C++",
      "I2C",
      "Sensors",
      "Node-RED"
    ],
    github: "https://github.com/Alexvu31/Arduino-Smart-Room",
    demo: "#"
  },

  {
    title: "Structural — Civil Engineering DSL Compiler",
    description:
      "A compiler for a Prolog-based domain-specific language targeting civil engineering, featuring a full pipeline with reader, scanner, parser, coder, and writer stages.",
    technologies: [
      "C",
      "Compilers",
      "Prolog",
      "DSL",
      "Visual Studio"
    ],
    github: "https://github.com/wwwportal/Structural",
    demo: "#"
  },

  {
    title: "AI Security Chatbot",
    description:
      "A fully local, multi-document-aware AI security chatbot with RAG pipeline and an integrated security and chaos testing dashboard that remembers every PDF uploaded. Upload PDFs, ask questions, and run automated security tests.",
    technologies: [
      "React",
      "Flask",
      "Ollama",
      "RAG",
      "ChromaDB",
      "Python"
    ],
    github: "https://github.com/CanadaDevOpsCommunity2025/DevOps-For-Gen-AI--Ottawa-2026--Team-1-The-Hallucinators",
    demo: "#"
  },

  {
    title: "Inventory Management System",
    description:
      "A C++ desktop application with a GUI built using the Nana library for managing inventory data stored in text and JSON files.",
    technologies: [
      "C++",
      "Nana GUI",
      "JSON",
      "Visual Studio"
    ],
    github: "https://github.com/Alexvu31/Inventory-Management-System",
    demo: "#"
  },

  {
    title: "QubitTouchdown",
    description:
      "An interactive card game built in Java with a SQLite database backend for persisting game state and player data.",
    technologies: [
      "Java",
      "SQLite",
      "Eclipse"
    ],
    github: "https://github.com/Alexvu31/QubitTouchdown",
    demo: "#"
  }
];

function Projects() {
  return (
    <section id="projects" className="section">

      <div className="section-container">

        <div className="section-heading">
          <p>What I've built</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <article
              className="project-card"
              key={project.title}
            >

              <div className="project-top">

                <div className="project-number">
                  0{index + 1}
                </div>

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>

                </div>

              </div>

              <h3>{project.title}</h3>

              <p>
                {project.description}
              </p>

              <div className="project-technologies">

                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;