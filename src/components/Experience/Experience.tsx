import { CaretDown } from "react-bootstrap-icons";
import './Experience.scss';

const formatDuration = (dateRange: string): string => {
    const [startText, endText] = dateRange.split(' - ');
    const parseMonth = (value: string): Date => {
        const [month, year] = value.split('/').map(Number);
        return new Date(year, month - 1, 1);
    };

    const start = parseMonth(startText);
    const end = endText === 'Present' ? new Date() : parseMonth(endText);
    const elapsedMonths = (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth();
    const years = Math.floor(elapsedMonths / 12);
    const months = elapsedMonths % 12;

    if (years === 0) {
        return `${months} ${months === 1 ? 'month' : 'months'}`;
    }

    if (months === 0) {
        return `${years} ${years === 1 ? 'year' : 'years'}`;
    }

    return `${years} ${years === 1 ? 'year' : 'years'} ${months} ${months === 1 ? 'month' : 'months'}`;
};

const experience = [
    {
        title: 'Vice President, Senior Programmer Analyst',
        company: 'Société Générale',
        location: 'New York, NY',
        date: '04/2026 - Present',
        shortDate: '2026 - Now',
        summary: 'Leading the modernization of global applications for credit structured finance teams to web, database migration to cloud infrastructure, and overhaul of CI/CD processes.',
        bullets: [
            'Full-stack software engineer developing modern web applications and APIs for hundreds of users on the global credit structured financing teams (ABS, Bond, Capital Call, Commercial Real Estate, Fund Financing, Loan) across the US, Europe, and Asia',
            'Lead the migration of legacy .NET Framework WPF UI modules to containerized React webpages, supported by brand new domain-driven .NET 10 APIs, providing a central web portal for trading and analytics tools',
            'Created a brand new change management webpage which interfaces with Jira and OpenText ITSM to automatically retrieve associated Jira tickets and seamlessly progress through all steps of the change workflow in minutes, saving hours of manual input while also being able to monitor live progress from a SignalR release status page',
            'Manage the migration of large on-premises SQL databases to cloud infrastructure, ensuring no service interruption to users across our entire suite of modern and legacy applications',
            'Collaborate directly with business stakeholders to translate complex financial workflows into scalable, intuitive tools that enhance analytics, reporting, and operational efficiency',
            'Configure and maintain quality/build/deployment pipelines for modern applications using GitHub Actions, Docker, and Kubernetes, while migrating legacy applications using TeamCity and Octopus Deploy onto the new stack to ensure reliable CI/CD and consistent releases across environments',
            'Serve as the development point of contact for the support team, handling updates, enhancements, and fixes to the data processes that feed our applications and databases',
            'Oversee agile sprint planning, Jira task management, and change management to ensure the most important tasks are prioritized and completed accordingly',
            'Support team growth through mentorship, interviewing, onboarding, training, knowledge-sharing, and maintenance of documentation'
        ],
        tags: ['.NET', 'React', 'SQL', 'WPF', 'GitHub Actions', 'SonarQube', 'Docker', 'Kubernetes', 'Entity Framework', 'SignalR'],
    },
    {
        title: 'Associate, Programmer Analyst',
        company: 'Société Générale',
        location: 'New York, NY',
        date: '04/2023 - 04/2026',
        shortDate: '2023 - 2026',
        summary: 'Led the global delivery of an originate-to-distribute web platform, re-engineered data-driven applications for annual six-figure savings, and continued supporting existing applications within the team\'s scope.',
        bullets: [
            'Designed a proof-of-concept web application that provides data management, forecasting, and monitoring capabilities for Societe Generale\'s new originate-to-distribute (OTD) business model, which led to full-scale global adoption, earning me the development lead role for the project',
            'Presented the OTD web application in internal executive committees and town hall meetings during the development process, and following the completion of the major deliverables, showcasing the application\'s ability to enable top management to make key business decisions',
            'Frequently liaised with Front Office, COOs, and management to drive the fast-paced development of the OTD web application and gather additional functional needs and enhancements',
            'Overhauled two data-driven desktop applications by changing the primary data source and re-engineering features, resulting in over $100k of yearly savings',
            'Aggregated data from multiple internal and external data providers to display analytics, portfolio monitoring, and risk management through centralized views in web applications and desktop applications',
            'Supported team growth through mentorship, interviewing, onboarding, training, knowledge-sharing, and maintenance of documentation'
        ],
        tags: ['Blazor', '.NET', 'React', 'WPF', 'SQL', 'AG Grid', 'TeamCity', 'SonarQube', 'Octopus Deploy'],
    },
    {
        title: 'Programmer Analyst',
        company: 'Société Générale',
        location: 'New York, NY',
        date: '07/2020 - 04/2023',
        shortDate: '2020 - 2023',
        summary: 'Rapidly delivered full-stack applications and APIs for global credit financing teams, partnering with stakeholders and supporting daily production operations.',
        bullets: [
            'Full-stack commando developer rapidly creating and designing applications and APIs for global credit structured financing teams (ABS, Bond, Capital Call, Commercial Real Estate, Fund Financing, and Loan) in the US and Europe',
            'Built end-to-end solutions using C# (.NET Framework), Windows Presentation Foundation (WPF), and SQL, while also maintaining a few Python jobs',
            'Aggregated data from multiple internal and external data providers to display analytics, portfolio monitoring, and risk management through centralized views in web applications and desktop applications',
            'Designed and developed a new PnL dashboard aggregating daily metrics for commercial real estate loans via a nested grid layout to display loans and associated funding/hedge positions',
            'Refactored a core data integration process that was heavily dependent on multiple daily file deliveries to instead rely solely on direct API calls to our trade booking system, eliminating data failures caused by inconsistent file deliveries',
            'Collaborated directly with business stakeholders to identify points of need for new projects and improvements',
            'Handled production support tasks for our hundreds of daily data processes that feed our databases and client-facing applications',
            'Configured and maintained TeamCity and Octopus Deploy pipelines to ensure reliable CI/CD and consistent releases across environments',
            'Supported team growth by upskilling, knowledge-sharing, maintaining documentation on our internal Wiki, and contributing to task management in Jira'
        ],
        tags: ['.NET Framework', 'WPF', 'SQL', 'Python', 'TeamCity', 'Octopus Deploy', 'Documentation', 'Jira'],
    },
    {
        title: 'Front Office Developer Intern',
        company: 'Société Générale',
        location: 'New York, NY',
        date: '05/2019 - 08/2019',
        shortDate: '2019 - 2019',
        summary: 'Built full-stack trading and reporting tools for asset-backed product and commercial real estate teams, while supporting daily production processes.',
        bullets: [
            'Designed and developed full-stack applications for asset-backed product (ABP) traders using C# (.NET Framework), Windows Presentation Foundation (WPF), SQL, and DevExpress',
            'Created a new configuration-based, highly customizable reporting application that distributes dozens of daily financial reports to external clients, providing key insights into product prices, market value, and security information',
            'Developed a new screen that tracks historical commercial real estate (CRE) loans that have entered the warehouse and exited via a securitized commercial mortgage-backed security (CMBS), enabling the team to analyze loan performance and PnL to make future loan decisions',
            'Handled production support tasks for hundreds of daily data processes that feed our databases and client-facing applications',
            'Configured TeamCity and Octopus Deploy to facilitate continuous builds, new releases, and application deployments',
            'Contributed to the team\'s knowledge by creating a brand new internal Wiki to document processes, applications, and workflows for future reference'
        ],
        tags: ['.NET Framework', 'WPF', 'SQL', 'TeamCity', 'Octopus Deploy', 'DevExpress', 'Documentation'],
    },
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className="experience-container py-32 px-6" aria-label="Experience">
            <div className="max-w-7xl mx-auto">
                <header className="experience-heading">
                    <div>
                        <p className="section-kicker">02 / Experience</p>
                        <h2>Career Progression</h2>
                    </div>
                    <p>
                        Six plus years of full-stack development and platform modernization for global credit structured
                        finance teams, spanning cloud migration, CI/CD, and engineering leadership
                    </p>
                </header>

                <div className="experience-timeline">
                    {experience.map((role, index) => (
                        <article className="timeline-entry" key={role.title}>
                            <div className="timeline-marker" aria-hidden="true">
                                <span>{String(index + 1).padStart(2, '0')}</span>
                            </div>
                            <details>
                                <summary>
                                    <div className="role-heading">
                                        <div>
                                            <p className="role-period">
                                                <span>{role.date}</span>
                                                <span className="role-duration">{formatDuration(role.date)}</span>
                                            </p>
                                            <h3>{role.title}</h3>
                                            <p className="role-company">
                                                <span>{role.company}</span> · {role.location}
                                            </p>
                                        </div>
                                        <CaretDown className="detail-icon" aria-hidden="true" />
                                    </div>
                                </summary>
                                <div className="role-details">
                                    <p className="role-summary">{role.summary}</p>
                                    <ul>
                                        {role.bullets.map((bullet) => (
                                            <li key={bullet}>
                                                <span className="role-bullet-marker" aria-hidden="true" />
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="role-tags" aria-label="Technology and domain tags">
                                        {role.tags.map((tag) => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </details>
                        </article>
                    ))}
                </div>

                <div className="education-strip">
                    <div>
                        <p className="section-kicker">Education</p>
                        <h3>Binghamton University</h3>
                    </div>
                    <div className="education-records">
                        <div className="degree-list">
                            <p><strong>Bachelor of Science</strong><span>Computer Science</span></p>
                            <p><strong>Bachelor of Arts</strong><span>Mathematics</span></p>
                        </div>
                        <p className="education-date">Aug 2016 - May 2020</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;