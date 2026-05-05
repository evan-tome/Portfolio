import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="section-label">{'// Contact'}</div>
            <h3>Get In Touch</h3>
            <p>Open to internships, co-ops, and interesting projects. Feel free to reach out.</p>
            <div className="socials">
                <a href="mailto:evtome05@gmail.com">
                    <FaEnvelope /> Email
                </a>
                <a href="https://github.com/evan-tome" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                </a>
                <a href="https://linkedin.com/in/evan-tome" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn /> LinkedIn
                </a>
            </div>
        </section>
    );
}
