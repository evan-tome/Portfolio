export default function Projects() {
    const projects = [
        { title: "Calendar", description: "Dynamic calendar web application", link: "file:///C:/Users/evant/OneDrive/Documents/Calender%20Assignment/calendar.html"},
        { title: "FreshLens", description: "A meal planning tool that lets you generate healthy recipes from photos of the food in your fridge", link: "http://localhost:3001/"},
        { title: "Minezone Website", description: "Website for the Minezone Minecraft server", link: "http://localhost:5173/"},
        { title: "EV DAQ Interface", description: "Web interface for reading measurements from an electric vehical via serial port communication", link: "http://localhost:3002/"},
        { title: "U-Challenge", description: "A trivia and games platform to compete against other universities", link: "http://localhost/U-Challenge/index.html"}
    ]
    return (
        <section id="projects" className="projects">
            <h3>Projects</h3>
            <div className="project-grid">
                {projects.map((p, i) => (
                    <div key={i} className="project-card">
                        <h4>{p.title}</h4>
                        <p>{p.description}</p>
                        <a href={p.link} target="_blank" className="btn">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
}