import { GeoAlt } from "react-bootstrap-icons";
import './About.scss';

const About: React.FC = () => {
    return (
        <section id="about" className="about-container py-32 px-6 relative" aria-label="About Me">
            <div className="mx-auto">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-3 py-2 rounded-full text-sm font-medium">
                    <GeoAlt />
                    New York, NY
                </div>
            </div>
            <br />
            <h2 className="text-5xl font-bold">About Me</h2>
            <br />
            <p className="text-lg text-gray-300 leading-relaxed">
                Full-stack software engineer passionate about designing and developing software architecture solutions involving web applications, desktop applications, APIs, and data ingestion.
                Experienced in leading projects from start to finish in both a collaborative and individual setting.
                Always motivated to learn new skills and technologies to deliver the best solution.
            </p>
            <br />
            <p className="text-lg text-gray-300 leading-relaxed">
                Currently working at <span className="societe-generale">Societe Generale</span> as a Vice President, Senior Software Engineer, where I'm developing modern web applications and APIs for global credit structured financing teams (ABS, Bond, Capital Call, Commercial Real Estate, Fund Financing, Loan) across the US, Europe, and Asia. 
            </p>
        </section>
    );
};

export default About;