import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Calendar Web App",
      description: "Dynamic calendar application with event booking and navigation.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/yourusername/calendar-app",
    },
    {
      title: "FreshLens",
      description: "Meal planning tool that generates recipes from fridge photos.",
      tech: ["React", "Node.js", "CSS"],
      github: "https://github.com/yourusername/freshlens",
    },
    {
      title: "Minezone Website",
      description: "Promotional website for a Minecraft server.",
      tech: ["React", "Node.js", "CSS"],
      github: "https://github.com/yourusername/minezone-website",
    },
    {
      title: "Portfolio Website",
      description: "Portfolio website.",
      tech: ["React", "Node.js", "CSS"],
      github: "https://github.com/yourusername/portfolio-website",
    },
    {
      title: "Race-cycle E-Waste Tracker",
      description: "Full-stack website for locating e-waste recycling centres and tracking recycled material in a gamified manner.",
      tech: ["React", "Node.js", "CSS", "MySQL"],
      github: "https://github.com/yourusername/portfolio-website",
    },
    {
      title: "EV DAQ Interface",
      description: "Web interface for real-time EV sensor data via serial communication.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/yourusername/ev-daq-interface",
    },
    {
      title: "U-Challenge",
      description: "Trivia and mini-games platform for inter-university competition.",
      tech: ["JavaScript", "PHP", "MySQL"],
      github: "https://github.com/yourusername/u-challenge",
    },
  ];

  const allTech = ["All", ...new Set(projects.flatMap(p => p.tech))];
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(p => p.tech.includes(filter));

  return (
    <section id="projects" className="projects">
      <h3>Projects</h3>

      <div className="filter-bar">
        {allTech.map(t => (
          <button
            key={t}
            className={`filter-btn ${filter === t ? "active" : ""}`}
            onClick={() => setFilter(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((p, i) => (
          <div key={i} className="project-card">
            <div className="project-content">
              <h4>{p.title}</h4>
              <p>{p.description}</p>

              <div className="tech-stack">
                {p.tech.map((t, idx) => (
                  <span key={idx} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>

            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}