
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
    ArrowDownRight,
    ArrowUpRight,
    Braces,
    Check,
    Code2,
    Command,
    Database,
    GitBranch,
    Layers3,
    Monitor,
    Search,
    Server,
    Sparkles,
    Terminal,
    Workflow,
    Wrench,
    X,
    PanelsTopLeft,
    CodeXml,
    Cylinder,
    Palette,
    Grid2X2,
    BrainCircuit,
    Send,
} from "lucide-react";
import "./Skills.css";

const categories = [
    { id: "all", label: "Everything", icon: Layers3 },
    { id: "backend", label: "Backend", icon: Server },
    { id: "frontend", label: "Frontend", icon: Monitor },
    { id: "database", label: "Database", icon: Database },
    { id: "tools", label: "Tools", icon: Wrench },
];

const skills = [
    {
        name: "Node.js",
        short: "NJS",
        category: "backend",
        subtitle: "JavaScript tooling",
        description:
            "Using the Node.js ecosystem and npm-based tooling to develop, run, and maintain modern JavaScript projects.",
        tags: ["Node.js", "npm", "Vite", "Tooling"],
        icon: Server,
        color: "node",
        code: "npm run dev",
    },
    {
        name: "Laravel",
        short: "LAR",
        category: "backend",
        subtitle: "Application architecture",
        description:
            "Building structured web applications with reusable services, clear responsibilities, validation, queues, and maintainable business logic.",
        tags: ["MVC", "Services", "Queues", "Eloquent"],
        icon: PanelsTopLeft,
        color: "laravel",
        code: "php artisan make:controller",
    },
    {
        name: "PHP",
        short: "PHP",
        category: "backend",
        subtitle: "Server-side engineering",
        description:
            "Writing readable, object-oriented PHP with reusable components, exception handling, and a focus on dependable application behavior.",
        tags: ["OOP", "APIs", "Validation", "Exceptions"],
        icon: CodeXml,
        color: "php",
        code: "declare(strict_types=1);",
    },
    {
        name: "MySQL",
        short: "SQL",
        category: "database",
        subtitle: "Relational data management",
        description:
            "Designing relational schemas and writing efficient SQL queries using joins, indexing, aggregations, and structured data relationships.",
        tags: ["Joins", "Indexes", "Schema", "Queries"],
        icon: Cylinder,
        color: "mysql",
        code: "SELECT * FROM users;",
    },
    {
        name: "MongoDB",
        short: "MDB",
        category: "database",
        subtitle: "Document-based data",
        description:
            "Working with document-oriented data structures to organize application data and support flexible, schema-aware data access.",
        tags: ["Documents", "Collections", "BSON", "CRUD"],
        icon: Database,
        color: "mongodb",
        code: "db.users.find({});",
    },
    {
        name: "JavaScript",
        short: "JS",
        category: "frontend",
        subtitle: "Interactive experiences",
        description:
            "Creating responsive interfaces and interactive browser behavior with modern JavaScript, asynchronous operations, and clear event handling.",
        tags: ["ES6+", "DOM", "Async", "Events"],
        icon: Braces,
        color: "javascript",
        code: "const buildInterface = () => {};",
    },
    {
        name: "Git",
        short: "GIT",
        category: "tools",
        subtitle: "Version control",
        description:
            "Managing code changes with branches, commits, and merge workflows to keep development organized and collaborative.",
        tags: ["Branches", "Merging", "Commits", "Collaboration"],
        icon: GitBranch,
        color: "git",
        code: "git switch feature/my-change",
    },
    {
        name: "HTML",
        short: "HTML",
        category: "frontend",
        subtitle: "Semantic web structure",
        description:
            "Building accessible, well-structured web pages using semantic HTML elements and organized document layouts.",
        tags: ["Semantic HTML", "Forms", "Accessibility", "SEO"],
        icon: Code2,
        color: "html",
        code: '<section class="content"></section>',
    },
    {
        name: "CSS",
        short: "CSS",
        category: "frontend",
        subtitle: "Responsive interface styling",
        description:
            "Creating polished, responsive interfaces with modern CSS layouts, reusable styles, transitions, and adaptive designs.",
        tags: ["Flexbox", "Grid", "Animations", "Responsive"],
        icon: Palette,
        color: "css",
        code: "display: grid;",
    },
    {
        name: "Bootstrap",
        short: "BS",
        category: "frontend",
        subtitle: "Rapid UI development",
        description:
            "Developing responsive user interfaces using Bootstrap's grid system, utility classes, and reusable UI components.",
        tags: ["Grid System", "Utilities", "Components", "Responsive"],
        icon: Grid2X2,
        color: "bootstrap",
        code: "className='container-fluid'",
    },
    {
        name: "VS Code",
        short: "VSC",
        category: "tools",
        subtitle: "Development environment",
        description:
            "Using Visual Studio Code for efficient development with extensions, integrated terminal workflows, debugging, and code navigation.",
        tags: ["Extensions", "Debugging", "Terminal", "Git"],
        icon: Code2,
        color: "vscode",
        code: "code .",
    },
    {
        name: "Claude",
        short: "AI",
        category: "tools",
        subtitle: "AI-assisted development",
        description:
            "Using AI assistance to explore implementation approaches, reason through complex logic, review code, and improve development workflows.",
        tags: ["Code Assistance", "Problem Solving", "Refactoring", "Review"],
        icon: BrainCircuit,
        color: "claude",
        code: "Review → Refine → Test",
    },
    {
        name: "Postman",
        short: "API",
        category: "tools",
        subtitle: "API testing",
        description:
            "Testing REST APIs, inspecting request and response payloads, validating status codes, and debugging backend integrations.",
        tags: ["REST APIs", "Requests", "Responses", "Testing"],
        icon: Send,
        color: "postman",
        code: "GET /api/resources",
    },
];

const workflow = [
    {
        number: "01",
        title: "Understand",
        text: "Clarify requirements, explore edge cases, and identify problems.",
        icon: Search,
    },
    {
        number: "02",
        title: "Structure",
        text: "Organize responsibilities, design efficient, maintainable data flows.",
        icon: Layers3,
    },
    {
        number: "03",
        title: "Build",
        text: "Create reliable features with clean code and practical solutions.",
        icon: Code2,
    },
    {
        number: "04",
        title: "Improve",
        text: "Optimize performance, resolve issues, and system reliability.",
        icon: Sparkles,
    },
];

const reveal = {
    hidden: { opacity: 0, y: 22 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: "easeOut" },
    },
};

export default function Skills() {
    const reduceMotion = useReducedMotion();
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedSkill, setSelectedSkill] = useState("Laravel");
    const [searchTerm, setSearchTerm] = useState("");

    const visibleSkills = useMemo(() => {
        const term = searchTerm.trim().toLowerCase();

        return skills.filter((skill) => {
            const matchesCategory =
                activeCategory === "all" || skill.category === activeCategory;

            const matchesSearch =
                !term ||
                skill.name.toLowerCase().includes(term) ||
                skill.tags.some((tag) => tag.toLowerCase().includes(term)) ||
                skill.subtitle.toLowerCase().includes(term);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchTerm]);

    const selected =
        visibleSkills.find((skill) => skill.name === selectedSkill) ||
        visibleSkills[0] ||
        null;

    const motionProps = reduceMotion
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, amount: 0.15 },
            variants: reveal,
        };

    const chooseCategory = (category) => {
        setActiveCategory(category);
        setSearchTerm("");

        const firstSkill =
            category === "all"
                ? skills[0]
                : skills.find((skill) => skill.category === category);

        if (firstSkill) setSelectedSkill(firstSkill.name);
    };

    return (
        <section className="skills-section" id="skills">
            <div className="skills-container">
                <motion.div className="skills-heading" {...motionProps}>
                    <motion.div className="skills-eyebrow" variants={reveal}>
                        <span className="skills-eyebrow-line" />
                        MY TECH STACK
                    </motion.div>

                    <motion.h2>
                        Tools for turning
                        <br />
                        <span>ideas into systems.</span>
                    </motion.h2>

                    <motion.p
                        className="about-heading-description"
                        variants={reveal}
                    >
                        A practical toolkit for building scalable web applications, optimizing data workflows, and creating clean, efficient, and maintainable interfaces through thoughtful engineering and modern technologies.
                    </motion.p>
                </motion.div>

                <motion.div className="skills-dashboard" {...motionProps}>
                    <div className="skills-dashboard-top">
                        <div className="skills-dashboard-label">
                            <span className="skills-terminal-icon">
                                <Command size={15} />
                            </span>
                            <span>TECHNICAL DIRECTORY</span>
                        </div>

                        <div className="skills-live-label">
                            <span />
                            SKILLS INDEX
                        </div>
                    </div>

                    <div className="skills-dashboard-body">
                        <aside className="skills-sidebar">
                            <div className="skills-sidebar-caption">FILTER BY AREA</div>

                            <div className="skills-category-list">
                                {categories.map((category) => {
                                    const Icon = category.icon;
                                    const count =
                                        category.id === "all"
                                            ? skills.length
                                            : skills.filter(
                                                (skill) => skill.category === category.id
                                            ).length;

                                    return (
                                        <button
                                            key={category.id}
                                            type="button"
                                            className={`skills-category-button ${activeCategory === category.id ? "is-active" : ""
                                                }`}
                                            onClick={() => chooseCategory(category.id)}
                                            aria-pressed={activeCategory === category.id}
                                        >
                                            <Icon size={17} strokeWidth={1.8} />
                                            <span>{category.label}</span>
                                            <span className="skills-category-count">
                                                {String(count).padStart(2, "0")}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="skills-sidebar-note">
                                <div className="skills-sidebar-note-icon">
                                    <Sparkles size={17} />
                                </div>
                                <p>
                                    The right tool matters.
                                    <br />
                                    <strong>So does how you use it.</strong>
                                </p>
                            </div>

                            <div className="skills-sidebar-footer">
                                <span className="skills-footer-dot" />
                                CONTINUOUS LEARNING
                            </div>
                        </aside>

                        <div className="skills-explorer">
                            <div className="skills-explorer-toolbar">
                                <div>
                                    <span className="skills-section-overline">EXPLORER</span>
                                    <h3>Technology library</h3>
                                </div>

                                <label className="skills-search">
                                    <Search size={15} />
                                    <input
                                        type="search"
                                        value={searchTerm}
                                        onChange={(event) => setSearchTerm(event.target.value)}
                                        placeholder="Find a technology..."
                                        aria-label="Search technologies"
                                    />
                                    {searchTerm && (
                                        <button
                                            type="button"
                                            onClick={() => setSearchTerm("")}
                                            aria-label="Clear search"
                                        >
                                            <X size={14} />
                                        </button>
                                    )}
                                </label>
                            </div>

                            <div className="skills-library-grid">
                                <AnimatePresence mode="popLayout">
                                    {visibleSkills.map((skill, index) => {
                                        const Icon = skill.icon;
                                        const isSelected = selectedSkill === skill.name;

                                        return (
                                            <motion.button
                                                layout={!reduceMotion}
                                                key={skill.name}
                                                type="button"
                                                className={`skills-tech-card tone-${skill.color} ${isSelected ? "is-selected" : ""
                                                    }`}
                                                onClick={() => setSelectedSkill(skill.name)}
                                                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={
                                                    reduceMotion
                                                        ? { opacity: 0 }
                                                        : { opacity: 0, scale: 0.96 }
                                                }
                                                transition={{
                                                    duration: reduceMotion ? 0 : 0.25,
                                                    delay: reduceMotion ? 0 : index * 0.025,
                                                }}
                                                whileHover={reduceMotion ? undefined : { y: -3 }}
                                                aria-pressed={isSelected}
                                            >
                                                <div className="skills-tech-card-top">
                                                    <span className="skills-tech-icon">
                                                        <Icon size={20} strokeWidth={1.7} />
                                                    </span>
                                                    <span className="skills-tech-arrow">
                                                        <ArrowUpRight size={15} />
                                                    </span>
                                                </div>

                                                <span className="skills-tech-short">{skill.short}</span>
                                                <span className="skills-tech-name">{skill.name}</span>
                                                <span className="skills-tech-subtitle">
                                                    {skill.subtitle}
                                                </span>

                                                <span className="skills-tech-card-bottom">
                                                    <span>{skill.category.toUpperCase()}</span>
                                                    {isSelected && <Check size={14} />}
                                                </span>
                                            </motion.button>
                                        );
                                    })}
                                </AnimatePresence>
                            </div>

                            {visibleSkills.length === 0 && (
                                <div className="skills-empty-state">
                                    <Search size={23} />
                                    <p>No matching technologies found.</p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSearchTerm("");
                                            setActiveCategory("all");
                                        }}
                                    >
                                        Reset filters
                                    </button>
                                </div>
                            )}

                            <div className="skills-library-status">
                                <span>
                                    SHOWING {String(visibleSkills.length).padStart(2, "0")} OF{" "}
                                    {String(skills.length).padStart(2, "0")} TECHNOLOGIES
                                </span>
                                <span className="skills-library-status-right">
                                    <span />
                                    SELECT A CARD TO EXPLORE
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <AnimatePresence mode="wait">
                    {selected && (
                        <motion.div
                            key={selected.name}
                            className={`skills-detail-panel tone-${selected.color}`}
                            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                            transition={{ duration: reduceMotion ? 0 : 0.25 }}
                        >
                            <div className="skills-detail-main">
                                <div className="skills-detail-icon">
                                    <selected.icon size={25} strokeWidth={1.6} />
                                </div>

                                <div className="skills-detail-copy">
                                    <span className="skills-section-overline">
                                        SELECTED TECHNOLOGY / {selected.category.toUpperCase()}
                                    </span>
                                    <h3>{selected.name}</h3>
                                    <p>{selected.description}</p>

                                    <div className="skills-detail-tags">
                                        {selected.tags.map((tag) => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="skills-code-window">
                                <div className="skills-code-window-top">
                                    <div className="skills-window-dots">
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                    <span>QUICK LOOK</span>
                                    <Terminal size={14} />
                                </div>

                                <div className="skills-code-content">
                                    <span className="skills-code-line-number">01</span>
                                    <code>{selected.code}</code>
                                </div>

                                <div className="skills-code-caption">
                                    <span className="skills-code-prompt">$</span>
                                    <span>Build. Test. Refine.</span>
                                    <span className="skills-code-cursor" />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div className="skills-approach" {...motionProps}>
                    <motion.div
                        className="skills-approach-heading"
                        variants={reveal}
                    >
                        <div className="skills-eyebrow">
                            <span className="skills-eyebrow-line" />
                            BEHIND THE TOOLKIT
                        </div>

                        <h3>
                            How I approach
                            <span> the work.</span>
                        </h3>
                    </motion.div>

                    <div className="skills-workflow">
                        {workflow.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <div className="skills-workflow-item" key={step.number}>
                                    <div className="skills-workflow-top">
                                        <span className="skills-workflow-number">
                                            {step.number}
                                        </span>
                                        <Icon size={21} strokeWidth={1.6} />
                                    </div>

                                    <h4>{step.title}</h4>
                                    <p>{step.text}</p>

                                    {index < workflow.length - 1 && (
                                        <ArrowDownRight
                                            className="skills-workflow-arrow"
                                            size={18}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                <motion.div
                    className="skills-closing"
                    {...motionProps}
                    variants={reveal}
                >
                    <div className="skills-closing-icon">
                        <Sparkles size={20} />
                    </div>

                    <p>
                        Every technology builds my skills and experience.
                        <span> Great engineering starts with strong fundamentals and continuous learning.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
