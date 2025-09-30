export default function NavBar({ dark, setDark }) {
    return (
        <nav className="navbar">
            <h1 className="logo">Evan Tome</h1>
            <div className="nav-links">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <button onClick={() => setDark(!dark)} className="theme-toggle">{dark ? "☀️" : "🌙"}</button>
            </div>
        </nav>
    );
}