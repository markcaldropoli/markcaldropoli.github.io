import { ArrowUp } from "react-bootstrap-icons";
import "./Footer.scss";

const Footer: React.FC = () => {
    const scrollToTop = () => {
        document.getElementById("landing")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <footer className="footer-container" aria-label="Footer">
            <div className="footer-meta">
                <p>&copy; {new Date().getFullYear()} Mark Caldropoli</p>
                <button type="button" onClick={scrollToTop} aria-label="Back to top">
                    <ArrowUp aria-hidden="true" />
                </button>
            </div>
        </footer>
    );
};

export default Footer;