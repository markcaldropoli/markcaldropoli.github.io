import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Github, Linkedin } from "react-bootstrap-icons";
import './Header.scss';

const navItems = [
  { label: "About", section: "about" },
  { label: "Experience", section: "experience" },
];

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <div className="flex justify-between">
          <button
            className="brand"
            onClick={() => {
              const el = document.getElementById('landing');
              el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Mark Caldropoli
          </button>
          <nav className="nav px-3 py-2" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  const el = document.getElementById(item.section);
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="px-4 py-2 text-sm font-medium transition-all relative group hover:text-white hover:bg-white/[0.06]"
              >
                {item.label}
                <span className="absolute -bottom-[2px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-300 to-amber-300 transition-all duration-300 w-0 group-hover:w-8"></span>
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://github.com/markcaldropoli" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="social-icon github-icon px-2 py-2 rounded-full bg-white/[0.04] border-white/15 flex items-center justify-center"
            >
              <Github size={30} color="var(--portfolio-muted)" />
            </a>
            <a href="https://www.linkedin.com/in/markcaldropoli" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="social-icon linkedin-icon px-2.5 py-2.5 rounded-full bg-white/[0.04] border-white/15 flex items-center justify-center">
              <Linkedin size={26} color="var(--portfolio-muted)" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;