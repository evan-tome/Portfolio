import { FaCode, FaLayerGroup, FaServer, FaTools } from 'react-icons/fa';

const skillGroups = [
    {
        category: 'Languages',
        icon: <FaCode />,
        skills: ['JavaScript', 'Python', 'Java', 'C++', 'C', 'PHP', 'SQL'],
    },
    {
        category: 'Frontend',
        icon: <FaLayerGroup />,
        skills: ['React', 'HTML', 'CSS'],
    },
    {
        category: 'Backend',
        icon: <FaServer />,
        skills: ['Node.js', 'Express', 'REST APIs', 'Spring Boot'],
    },
    {
        category: 'Tools',
        icon: <FaTools />,
        skills: ['Git', 'GitHub', 'MySQL', 'Linux', 'Jira'],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="section-label">{'// Skills'}</div>
            <h3>Tech Stack</h3>
            <div className="skills-grid">
                {skillGroups.map(group => (
                    <div className="skill-group" key={group.category}>
                        <div className="skill-group-header">
                            <span className="skill-icon">{group.icon}</span>
                            <h4>{group.category}</h4>
                        </div>
                        <div className="skill-list">
                            {group.skills.map(skill => (
                                <span className="skill-badge" key={skill}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
