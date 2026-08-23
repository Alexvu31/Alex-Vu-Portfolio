import {
  Code2,
  Database,
  Cpu,
  Globe,
  Shield,
  GitBranch,
  Gamepad2
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Programming",
    technologies: [
      "Java",
      "JavaScript",
      "C",
      "C++",
      "Python"
    ]
  },

  {
    icon: Globe,
    title: "Web Development",
    technologies: [
      "React",
      "Flask",
      "HTML",
      "CSS",
      "REST APIs"
    ]
  },

  {
    icon: Database,
    title: "Databases",
    technologies: [
      "SQLite",
      "ChromaDB",
      "SQL",
      "Power BI"
    ]
  },

  {
    icon: Cpu,
    title: "Embedded & IoT",
    technologies: [
      "Arduino",
      "Sensors",
      "I2C",
      "Node-RED"
    ]
  },

  {
    icon: Shield,
    title: "AI & Security",
    technologies: [
      "Ollama",
      "RAG",
      "Prompt Injection Testing",
      "AI Security"
    ]
  },

  {
    icon: Gamepad2,
    title: "Game Development",
    technologies: [
      "Unreal Engine",
      "C++",
      "Game Development"
    ]
  },

  {
    icon: GitBranch,
    title: "Tools & DevOps",
    technologies: [
      "Git",
      "GitHub",
      "Docker",
      "Visual Studio"
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="section section-dark">

      <div className="section-container">

        <div className="section-heading">
          <p>What I work with</p>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">

          {skills.map((skill) => {

            const Icon = skill.icon;

            return (
              <div className="skill-card" key={skill.title}>

                <Icon size={32} className="skill-icon" />

                <h3>{skill.title}</h3>

                <div className="technology-list">

                  {skill.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Skills;