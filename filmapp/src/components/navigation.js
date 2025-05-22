import './../App.css'

const Navigation = () => {
    return (
        <nav>
            <h2>External Links</h2>
            <ul className="btn-group">
                <li className="btn btn-warning"><a href="https://github.com/cathy-french">GitHub</a></li>
                <li className="btn btn-warning"><a href="https://linkedin.com/in/cathy-french-a2452528//">LinkedIn</a></li>
            </ul>
            <h2>Internal Links</h2>
            <ul>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#work-experience">Work Experience</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#skills">Skills</a></li>
            </ul>
        </nav>
    );

}

export default Navigation;