export default function Projects() {
    const projects = [
        { title: "Battleship Game", description: "Singleplayer Battleship built in Java", link: "#"},
        { title: "Hex-Bin-Dec Converter", description: "", link: "#"},
        { title: "Calendar App", description: "", link: "#"},
        { title: "EV DAQ Interface", description: "", link: "#"}
    ]
    return (
        <section id="projects" className="projects">
            <h3>Projects</h3>
            <div className="project-grid">
                {projects.map((p, i) => (
                    <div key={i} className="project-card">
                        <h4>{p.title}</h4>
                        <p>{p.description}</p>
                        <a href={p.link} className="btn">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
}