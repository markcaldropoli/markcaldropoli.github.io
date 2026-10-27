import { GeoAlt } from "react-bootstrap-icons";
import './About.scss';
import './../../App.scss';

const portrait = new URL('./../../assets/mark-caldropoli-portrait.jpg', import.meta.url).href;

const capabilities = [
    'C# (.NET / .NET Framework)',
    'React & TypeScript',
    'Web Applications',
    'Desktop Applications',
    'Domain-Driven APIs',
    'Data Ingestion',
    'CI/CD Pipelines'
];

const About: React.FC = () => {
    return (
        <section id="about" className="about-container py-32 px-6 relative" aria-label="About Mark Caldropoli">
            <div className="max-w-7xl mx-auto">
                <header className="about-heading">
                    <div>
                        <p className="section-kicker">01 / About</p>
                        <h2>About Me</h2>
                        <div className="location-label">
                            <GeoAlt aria-hidden="true" />
                            New York, United States
                        </div>
                    </div>
                </header>

                <div className="about-layout">
                    <div className="about-copy">
                        <p className="about-lead">
                            I'm a senior full-stack engineer passionate about designing and developing software across
                            web applications, desktop applications, APIs, and data ingestion pipelines.
                        </p>
                        <p>
                            I lead projects from start to finish in collaborative and individual settings, learning
                            new technologies when the problem calls for them and shaping solutions around the people
                            who depend on them.
                        </p>
                        <p>
                            At Société Générale, I develop modern web applications and APIs for global credit structured
                            finance teams, modernize legacy desktop and web applications, migrate infrastructure to the
                            cloud, and build reliable CI/CD pipelines.
                        </p>
                        <p>
                            Outside of work, I'm a huge soccer fan, especially of Major League Soccer and New York
                            City FC. As a founding member, I've attended the vast majority of the club's home matches
                            since the inaugural 2015 season. I have also been to the World Cup!
                        </p>
                        <p>
                            Back in college, I was a Co-Director of <a href="https://hackbu.org/" target="_blank" rel="noopener noreferrer">HackBU</a>,
                            Binghamton University's student-run coding club and hackathon organizing committee.
                            As an organizer and co-director, I helped raise more than $80K in corporate and campus sponsorships.
                            That funding supported annual 24-hour hackathons for more than 300 participants, with free food, swag, and prizes for everyone.
                        </p>
                    </div>

                    <aside className="about-profile" aria-label="Career profile">
                        <div className="portrait-frame">
                            <div className="portrait-image">
                                <img src={portrait} alt="Mark Caldropoli" />
                            </div>
                            <span className="portrait-arrow" aria-hidden="true">&gt;&gt;&gt;</span>
                            <span className="portrait-arrow portrait-arrow--second" aria-hidden="true">&gt;&gt;&gt;</span>
                            <span className="portrait-caption">MC / 2025</span>
                        </div>
                        <div className="capability-panel">
                            <p>Core capabilities</p>
                            <ul>
                                {capabilities.map((capability) => (
                                    <li key={capability}>{capability}</li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default About;