import { ArrowDown, Envelope, Linkedin } from "react-bootstrap-icons";
import './Landing.scss';

const Landing: React.FC = () => {
    const scrollTo = (section: string) => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section id="landing" className="landing-container" aria-label="Mark Caldropoli, Senior Software Engineer">
            <div className="landing-grid" aria-hidden="true" />
            <div className="landing-content max-w-7xl mx-auto px-6">
                <div className="landing-copy">
                    <div className="landing-status">
                        <span className="status-dot" />
                        Senior Software Engineer
                    </div>

                    <h1>
                        Mark
                        <span>Caldropoli</span>
                    </h1>

                    <p className="landing-role">Engineering leader developing modern applications, platforms, and financial workflows.</p>
                    <p className="landing-summary">
                        I lead global structured-finance initiatives from concept to production, delivering modern web applications and APIs while using AI to accelerate engineering work.
                    </p>

                    <div className="landing-actions">
                        <button type="button" className="primary-action" onClick={() => scrollTo('experience')}>
                            View Experience
                            <ArrowDown aria-hidden="true" />
                        </button>
                        <a
                            href="https://www.linkedin.com/in/markcaldropoli"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="secondary-action"
                        >
                            <Linkedin aria-hidden="true" />
                            LinkedIn
                        </a>
                        <a href="mailto:markcaldropoli@gmail.com" className="icon-action" aria-label="Email Mark">
                            <Envelope aria-hidden="true" />
                        </a>
                    </div>

                    <dl className="landing-facts">
                        <div>
                            <dt>Location</dt>
                            <dd>New York, United States</dd>
                        </div>
                        <div>
                            <dt>Specialties</dt>
                            <dd>Full-Stack .NET &amp; React</dd>
                        </div>
                        <div>
                            <dt>Domain</dt>
                            <dd>Structured Finance</dd>
                        </div>
                    </dl>
                </div>

                <div className="engineering-panel" aria-label="Engineering profile">
                    <div className="panel-header">
                        <span className="panel-label">profile</span>
                        <span className="panel-state">active</span>
                    </div>
                    <div className="panel-content">
                        <div className="profile-row">
                            <span className="profile-key">role</span>
                            <span>Vice President, Senior Programmer Analyst</span>
                        </div>
                        <div className="profile-row">
                            <span className="profile-key">company</span>
                            <span>Société Générale</span>
                        </div>
                        <div className="profile-row">
                            <span className="profile-key">focus</span>
                            <span>.NET · React · SQL</span>
                        </div>
                    </div>
                    <div className="panel-stack" aria-label="Engineering focus areas">
                        <div className="stack-card">
                            <span>01</span>
                            <strong>Modernize</strong>
                            <small>React webpages and domain-driven .NET APIs</small>
                        </div>
                        <div className="stack-card">
                            <span>02</span>
                            <strong>Accelerate</strong>
                            <small>Cloud migration and CI/CD automation</small>
                        </div>
                        <div className="stack-card">
                            <span>03</span>
                            <strong>Streamline</strong>
                            <small>Data, analytics, and reporting processes</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;