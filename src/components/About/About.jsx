
import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Terminal,
  Database,
  Layers3,
  Workflow,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Braces,
} from "lucide-react";
import "./About.css";

const strengths = [
  {
    icon: Layers3,
    number: "01",
    title: "Clean Architecture",
    description:
      "Building modular, maintainable applications with reusable components and well-structured code.",
    color: "purple",
  },
  {
    icon: Database,
    number: "02",
    title: "Performance Engineering",
    description:
      "Optimizing database queries, streamlining workflows, and building applications that scale efficiently.",
    color: "blue",
  },
  {
    icon: Workflow,
    number: "03",
    title: "Problem Solving",
    description:
      "Turning complex requirements into practical, reliable solutions through clear thinking and focused execution.",
    color: "green",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Continuous Growth",
    description:
      "Exploring new technologies, learning from challenges, and continuously improving development practices.",
    color: "pink",
  },
];

const technologies = [
  "Node.js",
  "Laravel",
  "PHP",
  "MySQL",
  "MongoDB",
  "JavaScript",
  "React",
  "Git",
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

export default function About() {
  const reduceMotion = useReducedMotion();

  const motionProps = reduceMotion
    ? {}
    : {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.12 },
    };

  return (
    <section id="about" className="about-section">
      <div className="about-background-glow" aria-hidden="true" />

      <div className="about-container">
        {/* Section heading */}
        <motion.div
          className="about-heading"
          {...motionProps}
          variants={stagger}
        >
          <motion.div className="about-eyebrow" variants={reveal}>
            <span className="about-eyebrow-line" />
            A LITTLE ABOUT ME
          </motion.div>

          <motion.h2 variants={reveal}>
            The mind behind
            <span> the code.</span>
          </motion.h2>

          <motion.p
            className="about-heading-description"
            variants={reveal}
          >
            From architecting robust backends to crafting seamless user experiences, I believe great software is built on thoughtful engineering, continuous learning, and attention to detail.
          </motion.p>
        </motion.div>

        {/* Main introduction and code panel */}
        <div className="about-main-grid">
          <motion.div
            className="about-story"
            {...motionProps}
            variants={reveal}
          >
            <div className="about-story-label">
              <span className="about-live-dot" />
              BEHIND THE CODE
            </div>

            <h3>
              Driven by curiosity.
              <span> Defined by the solutions.</span>
            </h3>

            <p className="about-story-lead">
              I'm a full-stack developer passionate about turning complex challenges into elegant, reliable, and scalable digital solutions. I enjoy going beyond the surface — understanding how things work, solving problems at their core, and building applications that deliver real value.
            </p>

            <p className="about-story-description">
              My approach combines thoughtful backend engineering, efficient database design, and clean, maintainable code. I enjoy tackling technical challenges, optimizing performance, and finding smarter ways to build applications that work better.
            </p>

            <div className="about-principles">
              <div>
                <CheckCircle2 size={17} />
                <span>Clean, maintainable code</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Performance-focused solutions</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Continuous improvement</span>
              </div>
            </div>

            <div className="about-story-divider" />

            <div className="about-tech-title">
              <Braces size={16} />
              <span>MY TECHNOLOGY STACK</span>
            </div>

            <div className="about-tech-list">
              {technologies.map((technology) => (
                <span className="about-tech-chip" key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Code-inspired visual */}
          <motion.div
            className="about-code-panel"
            {...motionProps}
            variants={reveal}
          >
            <div className="about-code-topbar">
              <div className="about-code-window-dots">
                <span />
                <span />
                <span />
              </div>

              <div className="about-code-filename">
                <Terminal size={15} />
                developer.js
              </div>

              <span className="about-code-status">PROFILE</span>
            </div>

            <div className="about-code-content">
              <div className="about-code-line">
                <span className="about-line-number">01</span>
                <code>
                  <span className="about-code-purple">class</span>{" "}
                  <span className="about-code-blue">Developer</span>
                </code>
              </div>

              <div className="about-code-line">
                <span className="about-line-number">02</span>
                <code>{"{"}</code>
              </div>

              {/* <div className="about-code-line about-code-indent">
                <span className="about-line-number">03</span>
                <code>
                  <span className="about-code-purple">public function</span>
                </code>
              </div> */}

              <div className="about-code-line about-code-indent">
                <span className="about-line-number">03</span>
                <code>
                  <span className="about-code-green">
                    buildReliableApps
                  </span>
                  ();
                </code>
              </div>

              <div className="about-code-line about-code-indent">
                <span className="about-line-number">04</span>
                <code>
                  <span className="about-code-green">
                    optimizePerformance
                  </span>
                  ();
                </code>
              </div>

              <div className="about-code-line about-code-indent">
                <span className="about-line-number">05</span>
                <code>
                  <span className="about-code-green">solveProblems</span>
                  ();
                </code>
              </div>

              <div className="about-code-line about-code-indent">
                <span className="about-line-number">06</span>
                <code>
                  <span className="about-code-green">writeCleanCode</span>
                  ();
                </code>
              </div>

              <div className="about-code-line about-code-indent">
                <span className="about-line-number">07</span>
                <code>
                  <span className="about-code-green">designScalableSystems</span>
                  ();
                </code>
              </div>

              <div className="about-code-line about-code-indent">
                <span className="about-line-number">08</span>
                <code>
                  <span className="about-code-green">manageDatabases</span>
                  ();
                </code>
              </div>

              <div className="about-code-line about-code-indent">
                <span className="about-line-number">09</span>
                <code>
                  <span className="about-code-green">buildSecureAPIs</span>
                  ();
                </code>
              </div>

              <div className="about-code-line">
                <span className="about-line-number">10</span>
                <code>{"}"}</code>
              </div>
            </div>

            <div className="about-code-bottom">
              <div className="about-code-avatar">
                <Code2 size={24} />
              </div>

              <div className="about-code-identity">
                <strong>Developer mindset</strong>
                <span>Build. Refine. Improve.</span>
              </div>

              <ArrowUpRight size={19} />
            </div>

            <div className="about-code-decoration" aria-hidden="true">
              <Braces size={120} strokeWidth={0.8} />
            </div>
          </motion.div>
        </div>

        {/* Capability cards */}
        <motion.div
          className="about-strengths"
          {...motionProps}
          variants={stagger}
        >
          {strengths.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                className={`about-strength-card about-strength-${item.color}`}
                key={item.number}
                variants={reveal}
                whileHover={
                  reduceMotion ? undefined : { y: -5 }
                }
              >
                <div className="about-strength-top">
                  <div className="about-strength-icon">
                    <Icon size={21} />
                  </div>

                  <span>{item.number}</span>
                </div>

                <h4>{item.title}</h4>
                <p>{item.description}</p>

                {/* <div className="about-strength-footer">
                  <span>MY APPROACH</span>
                  <ArrowUpRight size={16} />
                </div> */}
              </motion.article>
            );
          })}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          className="about-closing"
          {...motionProps}
          variants={reveal}
        >
          <div className="about-closing-icon">
            <Code2 size={21} />
          </div>

          <p>
            Good software is not just about making it work.
            <span> It's about making it work exceptionally well.</span>
          </p>

          <div className="about-closing-mark">
            <Sparkles size={19} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
