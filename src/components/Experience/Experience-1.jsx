
import { useState } from "react";
import {
    motion,
    AnimatePresence,
    useReducedMotion,
} from "framer-motion";
import {
    BriefcaseBusiness,
    CalendarDays,
    MapPin,
    ArrowUpRight,
    ChevronDown,
    Code2,
    Database,
    Workflow,
    Gauge,
    Layers3,
    Sparkles,
    CheckCircle2,
    Terminal,
} from "lucide-react";
import "./Experience.css";

const experiences = [
    {
        id: "creativeeye",
        label: "CURRENT / MOST RECENT",
        role: "Senior Software Developer",
        company: "Creativeeye Software Technologies Pvt Ltd",
        period: "Dec 2025 — Present",
        location: "Chennai / Remote",
        summary:
            "Developing secure, backend services, and high-performance transaction processing workflows.",
        overview:
            "Developed merchant onboarding solutions with PAN and Aadhaar verification, secure encryption-based data vaults, and bank account validation. Built and optimized a reconciliation engine to compare RUGR, NPCI, and bank reports, detect transaction discrepancies, and streamline investigation workflows while improving data security, accuracy, and processing efficiency.",
        technologies: [
            "Laravel",
            "PHP",
            "MySQL",
            "JavaScript",
            "Git",
        ],
        highlights: [
            "Implemented PAN and Aadhaar document verification using OCR technology and IDfy APIs, along with penny-drop verification to validate merchant bank account details and improve onboarding accuracy.",
            "eveloped a secure vault mechanism to store sensitive merchant information, including PAN, Aadhaar, and bank account details, using custom encryption and OpenSSL encryption/decryption methods to enhance data security and support UIDAI standards.",
            "Developed and optimized a reconciliation engine to process and compare transaction data from three source files, identify discrepancies, and notify users for further action. Improved reconciliation accuracy and processing efficiency through workflow and performance optimization.",
        ],
        focus: "Backend Engineering · Data Security · Reconciliation Systems",
        color: "purple",
    },
    {
        id: "rifluxyss",
        label: "PREVIOUS CHAPTER",
        role: "Senior Software Developer",
        company: "Rifluxyss Softwares Pvt Ltd",
        period: "Jun 2023 — Nov 2025",
        location: "Chennai / OnSite",
        summary:
            "Developed SaaS design tools and optimized document generation workflows.",
        overview:
            "Spearheaded a Canva-like SaaS design editor for customizable templates, image replacement, and text editing. Implemented PDF and PNG export pipelines using wkhtmltopdf and Puppeteer, reducing generation time by 40%. Improved responsive layouts and design workflows, enhancing usability and increasing user adoption by 25%.",
        technologies: ["PHP", "SQL", "JavaScript", "Git"],
        highlights: [
            "Spearheaded the development of a Canva-like SaaS design editor, enabling users to customize templates, replace images, edit text, and generate personalized designs through an intuitive interface.",
            "Implemented PDF and PNG export pipelines using wkhtmltopdf and Puppeteer, optimizing rendering workflows and reducing document generation time by 40%.",
            "Developed responsive layouts and an intuitive design customization engine, improving usability, streamlining the design workflow, and increasing user adoption by 25%.",
        ],
        focus: "SaaS Development · Document Automation",
        color: "blue",
    },
    {
        id: "fido",
        label: "PREVIOUS CHAPTER",
        role: "Senior Software Developer",
        company: "Fido Groups of Companies",
        period: "Nov 2021 — Jun 2023",
        location: "Chennai / OnSite",
        summary:
            "Developed financial platforms, integrated payment systems, and mentored developers.",
        overview:
            "Led development of CRM, LMS, and financial platforms, building scalable modules and multi-currency wallets supporting fiat and cryptocurrency. Integrated payment gateways, SMS services, and MT5 Trading APIs for secure transactions and automated notifications. Mentored junior developers, conducted code reviews, and promoted coding best practices to improve team productivity.",
        technologies: ["PHP", "SQL", "JavaScript", "Git"],
        highlights: [
            "Led the development and maintenance of CRM, LMS, and financial web platforms, building scalable application modules and wallet systems supporting multi-currency transactions, including fiat and cryptocurrency.",
            "Integrated payment gateways, SMS gateways, and MT5 Trading APIs to enable secure payment processing, real-time trading operations, and automated notifications across financial applications.",
            "Mentored junior developers, conducted code reviews, enforced coding best practices, and facilitated knowledge sharing to improve code quality, maintainability, and overall team productivity.",
        ],
        focus: "Financial Platforms · Payment Integration · Team Leadership",
        color: "green",
    },
    {
        id: "mu3",
        label: "PREVIOUS CHAPTER",
        role: "Junior Web Developer",
        company: "MU3 Innovative Solutions Pvt Ltd",
        period: "Sept 2019 — Nov 2021",
        location: "Chennai / OnSite",
        summary:
            "Built scalable Laravel websites, custom CMS solutions, and RESTful APIs.",
        overview:
            "Developed and deployed dynamic websites and custom CMS solutions using PHP and Laravel. Collaborated with UI/UX teams to create responsive layouts and improve usability across devices. Designed and integrated RESTful APIs, enabling seamless communication between internal applications and external systems while improving interoperability and maintainability.",
        technologies: ["PHP", "SQL", "JavaScript", "Git"],
        highlights: [
            "Developed and deployed dynamic websites and custom CMS solutions using PHP and Laravel, delivering scalable, maintainable, and business-focused web applications.",
            "Collaborated with UI/UX teams to implement responsive layouts and improve application usability, ensuring a consistent user experience across devices and enhancing client satisfaction.",
            "Developed and integrated RESTful APIs for client applications, improving interoperability and enabling seamless communication between internal applications and external systems.",
        ],
        focus: "Laravel Development · Responsive Web Design · RESTful API Integration",
        color: "pink",
    },
];

const principles = [
    {
        icon: Workflow,
        title: "Problem solving",
        description:
            "Breaking complex requirements into clear, practical solutions that address real-world challenges.",
        color: "purple",
    },
    {
        icon: Database,
        title: "Data & performance",
        description:
            "Optimizing database queries, improving processing efficiency, and building reliable workflows.",
        color: "blue",
    },
    {
        icon: Layers3,
        title: "Maintainable systems",
        description:
            "Designing modular, reusable systems that remain flexible, scalable, and easy to maintain.",
        color: "green",
    },
    {
        icon: Gauge,
        title: "Continuous Improvement",
        description:
            "Learning new technologies, refining existing systems, and improving through every challenge.",
        color: "pink",
    },
];

const reveal = {
    hidden: { opacity: 0, y: 22 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const stagger = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.09 },
    },
};

export default function Experience() {
    const [activeId, setActiveId] = useState(experiences[0].id);
    const [expandedId, setExpandedId] = useState(experiences[0].id);
    const reduceMotion = useReducedMotion();

    const activeExperience =
        experiences.find((item) => item.id === activeId) ??
        experiences[0];

    const motionProps = reduceMotion
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, amount: 0.12 },
        };

    const selectExperience = (id) => {
        setActiveId(id);
        setExpandedId((current) => (current === id ? null : id));
    };

    return (
        <section id="experience" className="experience-section">
            <div
                className="experience-background-glow"
                aria-hidden="true"
            />

            <div className="experience-container">
                {/* Section introduction */}
                <motion.div
                    className="experience-heading"
                    {...motionProps}
                    variants={stagger}
                >
                    <motion.div
                        className="experience-eyebrow"
                        variants={reveal}
                    >
                        <span className="experience-eyebrow-line" />
                        MY PROFESSIONAL JOURNEY
                    </motion.div>

                    <motion.h2 variants={reveal}>
                        Turning experience
                        <span> into impact.</span>
                    </motion.h2>

                    <motion.p variants={reveal}>
                        Every role has strengthened my problem-solving and engineering skills, helping me build scalable applications, optimize workflows, deliver meaningful results, and continuously grow as a developer.
                    </motion.p>
                </motion.div>

                {/* Timeline + selected chapter */}
                <div className="experience-main-grid">
                    <motion.div
                        className="experience-timeline"
                        {...motionProps}
                        variants={stagger}
                    >
                        <div
                            className="experience-timeline-line"
                            aria-hidden="true"
                        >
                            <motion.div
                                className="experience-timeline-progress"
                                initial={reduceMotion ? false : { scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 1.1, ease: "easeOut" }}
                            />
                        </div>

                        {experiences.map((item, index) => {
                            const selected = item.id === activeId;
                            const expanded = item.id === expandedId;

                            return (
                                <motion.article
                                    key={item.id}
                                    className={`experience-timeline-item ${selected ? "is-active" : ""
                                        }`}
                                    variants={reveal}
                                >
                                    <span
                                        className={`experience-timeline-node ${selected ? "is-active" : ""
                                            }`}
                                        aria-hidden="true"
                                    >
                                        {selected && (
                                            <span className="experience-node-core" />
                                        )}
                                    </span>

                                    <button
                                        type="button"
                                        className="experience-chapter-button"
                                        onClick={() => selectExperience(item.id)}
                                        aria-expanded={expanded}
                                        aria-controls={`experience-details-${item.id}`}
                                    >
                                        <div className="experience-chapter-top">
                                            <span className="experience-chapter-label">
                                                {item.label}
                                            </span>

                                            <span className="experience-chapter-index">
                                                0{index + 1}
                                            </span>
                                        </div>

                                        <h3>{item.role}</h3>

                                        <p className="experience-company">
                                            {item.company}
                                        </p>

                                        <div className="experience-chapter-meta">
                                            <span>
                                                <CalendarDays size={14} />
                                                {item.period}
                                            </span>

                                            <span>
                                                <MapPin size={14} />
                                                {item.location}
                                            </span>
                                        </div>

                                        <div className="experience-chapter-bottom">
                                            <span>
                                                {expanded ? "CLOSE CHAPTER" : "EXPLORE CHAPTER"}
                                            </span>

                                            <motion.span
                                                animate={{
                                                    rotate: expanded ? 180 : 0,
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ChevronDown size={17} />
                                            </motion.span>
                                        </div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {expanded && (
                                            <motion.div
                                                id={`experience-details-${item.id}`}
                                                className="experience-expanded-details"
                                                initial={
                                                    reduceMotion
                                                        ? false
                                                        : { height: 0, opacity: 0 }
                                                }
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{
                                                    duration: reduceMotion ? 0 : 0.3,
                                                    ease: "easeInOut",
                                                }}
                                            >
                                                <div className="experience-expanded-inner">
                                                    <p>{item.summary}</p>

                                                    <div className="experience-expanded-focus">
                                                        <Sparkles size={15} />
                                                        <span>{item.focus}</span>
                                                    </div>

                                                    {/* <button
                                                        type="button"
                                                        className="experience-view-details"
                                                        onClick={() => setActiveId(item.id)}
                                                    >
                                                        View chapter details
                                                        <ArrowUpRight size={16} />
                                                    </button> */}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.article>
                            );
                        })}
                    </motion.div>

                    {/* Interactive detail panel */}
                    <motion.div
                        className="experience-detail-panel"
                        {...motionProps}
                        variants={reveal}
                    >
                        <div className="experience-panel-topbar">
                            <div className="experience-panel-icon">
                                <BriefcaseBusiness size={21} />
                            </div>

                            <div className="experience-panel-heading">
                                <span>SELECTED CHAPTER</span>
                                <strong>Professional experience</strong>
                            </div>

                            <div className="experience-panel-status">
                                <span />
                                DETAILS
                            </div>
                        </div>

                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={activeExperience.id}
                                className="experience-detail-content"
                                initial={
                                    reduceMotion ? false : { opacity: 0, y: 12 }
                                }
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: reduceMotion ? 0 : 0.22 }}
                            >
                                <div className="experience-detail-label">
                                    {activeExperience.label}
                                </div>

                                <h3>{activeExperience.role}</h3>

                                <p className="experience-detail-company">
                                    {activeExperience.company}
                                </p>

                                <p className="experience-detail-overview">
                                    {activeExperience.overview}
                                </p>

                                <div className="experience-detail-divider" />

                                <div className="experience-responsibilities-title">
                                    <Terminal size={16} />
                                    KEY CONTRIBUTIONS
                                </div>

                                <ul className="experience-responsibilities">
                                    {activeExperience.highlights.map((highlight) => (
                                        <li key={highlight}>
                                            <CheckCircle2 size={16} />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* <div className="experience-detail-divider" /> */}

                                {/* <div className="experience-responsibilities-title">
                                    <Code2 size={16} />
                                    TECHNOLOGIES
                                </div>

                                <div className="experience-technologies">
                                    {activeExperience.technologies.map((technology) => (
                                        <span key={technology}>{technology}</span>
                                    ))}
                                </div> */}
                            </motion.div>
                        </AnimatePresence>

                        {/* <div className="experience-panel-footer">
                            <span className="experience-footer-mark">
                                <Code2 size={17} />
                            </span>

                            <span>
                                <strong>Engineering mindset</strong>
                                <small>Build with purpose. Improve continuously.</small>
                            </span>

                            <ArrowUpRight size={18} />
                        </div> */}
                    </motion.div>
                </div>

                {/* Approach / engineering principles */}
                <motion.div
                    className="experience-approach"
                    {...motionProps}
                    variants={stagger}
                >
                    <motion.div
                        className="experience-approach-heading"
                        variants={reveal}
                    >
                        <div className="experience-eyebrow">
                            <span className="experience-eyebrow-line" />
                            HOW I APPROACH ENGINEERING
                        </div>

                        <h3>
                            Beyond the job title.
                            <span> It's how I build.</span>
                        </h3>
                    </motion.div>

                    <div className="experience-principles-grid">
                        {principles.map((principle) => {
                            const Icon = principle.icon;

                            return (
                                <motion.article
                                    key={principle.title}
                                    className={`experience-principle experience-principle-${principle.color}`}
                                    variants={reveal}
                                    whileHover={reduceMotion ? undefined : { y: -4 }}
                                >
                                    <div className="experience-principle-icon">
                                        <Icon size={21} />
                                    </div>

                                    <h4>{principle.title}</h4>
                                    <p>{principle.description}</p>
                                </motion.article>
                            );
                        })}
                    </div>
                </motion.div>

                <motion.div
                    className="experience-closing"
                    {...motionProps}
                    variants={reveal}
                >
                    <div className="experience-closing-icon">
                        <Sparkles size={20} />
                    </div>

                    <p>
                        Every challenge brings a new opportunity to grow.
                        <span>I believe better engineering starts with better thinking.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
