
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Download,
  Send,
  BriefcaseBusiness,
  Layers3,
  Code2,
  Database,
  GitBranch,
  Braces,
  Server,
  Cylinder,
  LoaderCircle,
  X,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  ArrowUpRight,
  Phone,
  PanelsTopLeft,
  CodeXml,
  Palette,
  Grid2X2,
  Monitor,
} from "lucide-react";
import "./Intro.css";

import useActiveSection from "../../hooks/useActiveSection";

const technologies = [
  { name: "Node.js", icon: Server, color: "#339933" },
  { name: "Laravel", icon: PanelsTopLeft, color: "#ff5148" },
  { name: "PHP", icon: CodeXml, color: "#a9a2ff" },
  { name: "MySQL", icon: Cylinder, color: "#20b9ff" },
  { name: "MongoDB", icon: Database, color: "#47A248" },
  { name: "JavaScript", icon: Braces, color: "#ffe05c" },
  { name: "Git", icon: GitBranch, color: "#ff5148" },
  { name: "HTML", icon: Code2, color: "#E34F26" },
  { name: "CSS", icon: Palette, color: "#1572B6" },
  { name: "Bootstrap", icon: Grid2X2, color: "#7952B3" },
  // { name: "Vibe Code", icon: Monitor, color: "#007ACC" },
];

const stats = [
  { value: "6+", label: "Years Experience", icon: BriefcaseBusiness },
  { value: "20+", label: "Projects", icon: Layers3 },
  { value: "Node.js / Laravel", label: "Specialization", icon: Code2 },
];

export default function Intro() {
  const sectionIds = [
    "home",
    "about",
    "experience",
    "portfolio",
    "contact",
  ];

  const activeSection = useActiveSection(sectionIds);


  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState("");
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const handleResumeDownload = async () => {
    if (downloading) return;

    setDownloading(true);
    setDownloadError("");
    setDownloadSuccess(false);

    let objectUrl;

    try {
      const response = await fetch("/resume.pdf", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(
          response.status === 404
            ? "Resume not found. Please try again later."
            : "Unable to download the resume. Please try again."
        );
      }

      const blob = await response.blob();

      if (
        blob.type !== "application/pdf" &&
        !blob.type.includes("application/octet-stream")
      ) {
        throw new Error("The requested file is not a valid PDF.");
      }

      // Let the loading animation become visible.
      await new Promise((resolve) => setTimeout(resolve, 700));

      objectUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = "Vijayan-Resume.pdf";

      document.body.appendChild(link);
      link.click();
      link.remove();

      setDownloadSuccess(true);

      // Allow the browser to begin processing the download.
      setTimeout(() => URL.revokeObjectURL(objectUrl), 2000);
    } catch (error) {
      console.error("Resume download failed:", error);

      setDownloadError(
        error instanceof TypeError
          ? "Network error. Check your connection and try again."
          : error.message || "Something went wrong. Please try again."
      );
    } finally {
      setDownloading(false);
    }
  };

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (!isContactOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsContactOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isContactOpen]);

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${contactForm.name}`
    );

    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\n${contactForm.message}`
    );

    window.location.href =
      `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`;
  };

  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  return (
    <section className="hero" id="home">
      <div className="hero-background-grid" />

      <header className="hero-header">
        <a href="#home" className="hero-brand" aria-label="Vijayan S home">
          <span className="hero-logo">VS</span>
          {/* <span>Vijayan S</span> */}
        </a>


        {/* <nav className="hero-nav" aria-label="Main navigation">
          {[
            { label: "Home", id: "home" },
            { label: "About", id: "about" },
            { label: "Experience", id: "experience" },
            // { label: "Portfolio", id: "portfolio" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              type="button"
              key={item.id}
              className={`hero-nav-link ${activeSection === item.id ? "active" : ""
                }`}
              onClick={() => {
                const target = document.getElementById(item.id);

                if (target) {
                  target.scrollIntoView({
                    behavior: window.matchMedia(
                      "(prefers-reduced-motion: reduce)"
                    ).matches
                      ? "auto"
                      : "smooth",
                    block: "start",
                  });
                }
              }}
            >
              {item.label}
            </button>
          ))}
        </nav> */}

        <AnimatePresence>
          {!isContactOpen && (
            <motion.button
              type="button"
              className="floating-contact-button"
              onClick={() => setIsContactOpen(true)}
              aria-label="Let's Talk — open contact form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
            >
              <span className="floating-contact-indicator" />

              <span className="floating-contact-label">
                Let's Talk
              </span>

              <span className="floating-contact-arrow">
                <ArrowRight size={18} />
              </span>
            </motion.button>
          )}
        </AnimatePresence>

      </header>

      <main className="hero-main">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
        >
          <div className="hero-badge">
            <span className="hero-pulse" />
            FULL STACK DEVELOPER
          </div>

          <h1>
            Hi, I'm <span className="hero-name">Vijayan S</span>
            <br />
            I build scalable applications
            <br />
            that solve real-world problems.
          </h1>

          <p className="hero-description">
            I turn complex ideas into reliable digital experiences using Laravel, PHP, React, Node.js, and MySQL — building applications designed to perform, scale, and last.
          </p>

          <div className="hero-buttons">
            <button
              type="button"
              className="hero-button hero-button-primary"
              onClick={() =>
                document.getElementById("experience")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              Explore My Experience
              <ArrowRight size={21} />
            </button>

            <button
              type="button"
              className="hero-button hero-button-secondary"
              onClick={handleResumeDownload}
              disabled={downloading}
              whileHover={downloading ? {} : { y: -3 }}
              whileTap={downloading ? {} : { scale: 0.98 }}
            >
              {downloading ? (
                <LoaderCircle size={21} className="download-spinner" />
              ) : (
                <Download size={21} />
              )}

              {downloading ? "Downloading..." : "Download Resume"}
            </button>
          </div>

          <div className="hero-stats">
            {stats.map(({ value, label, icon: Icon }) => (
              <div className="hero-stat" key={label}>
                <Icon className="hero-stat-icon" size={31} />
                <div>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="visual-orbit visual-orbit-one" />
          <div className="visual-orbit visual-orbit-two" />

          <img
            className="hero-artwork"
            src="/hero-tech.png"
            alt="Developer workspace featuring Laravel, PHP, Node.js, Claude, MySQL, JavaScript and Git"
          />
        </motion.div>
      </main>


      <motion.section
        className="tech-section"
        aria-label="Technologies I work with"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              staggerChildren: 0.12,
            },
          },
        }}
      >
        <motion.div
          className="tech-heading"
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            },
          }}
        >
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "right" }}
          />

          <p>TECHNOLOGIES I WORK WITH</p>

          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        <div className="tech-list">
          {technologies.map(({ name, icon: Icon, color }, index) => (
            <motion.div
              className="tech-item"
              key={name}
              variants={{
                hidden: { opacity: 0, y: 18, scale: 0.94 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.45,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
              }}
              custom={index}
            >
              <motion.div
                initial={{ scale: 0.7, rotate: -12 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.15 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                <Icon
                  size={34}
                  strokeWidth={1.8}
                  style={{ color }}
                />
              </motion.div>

              <span>{name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>


      <motion.button
        type="button"
        className="about-scroll-button"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({
            behavior: window.matchMedia(
              "(prefers-reduced-motion: reduce)"
            ).matches
              ? "auto"
              : "smooth",
            block: "start",
          });
        }}
      >
        <span className="about-scroll-icon">
          <ArrowDownRight size={19} />
        </span>

        <span className="about-scroll-text">
          <strong>Discover More About Me</strong>
          <small>SCROLL TO EXPLORE</small>
        </span>

        <span className="about-scroll-arrow">
          <ArrowDownRight size={21} />
        </span>
      </motion.button>

      <AnimatePresence>
        {downloadError && (
          <motion.div
            className="download-toast"
            role="alert"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="download-toast-icon">!</div>

            <div className="download-toast-content">
              <strong>Download failed</strong>
              <span>{downloadError}</span>
            </div>

            <button
              type="button"
              className="download-toast-close"
              onClick={() => setDownloadError("")}
              aria-label="Close notification"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            className="contact-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="contact-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              initial={{ opacity: 0, y: 28, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Close button: the only way to close the modal */}
              <button
                type="button"
                className="contact-modal-close"
                onClick={() => setIsContactOpen(false)}
                aria-label="Close contact modal"
              >
                <X size={20} />
              </button>

              <div className="contact-modal-glow" />

              <div className="contact-modal-content">
                <div className="contact-modal-icon">
                  <MessageCircle size={25} />
                </div>

                <span className="contact-eyebrow">
                  <span className="contact-status-dot" />
                  LET'S CONNECT
                </span>

                <h2 id="contact-modal-title">
                  Let's build something
                  <span> great together.</span>
                </h2>

                <p className="contact-description">
                  Have an idea, an exciting opportunity, or just want to say hello?
                  Find me on your favorite platform.
                </p>

                <div className="contact-social-links">
                  
                  <a
                    href="mailto:YOUR_EMAIL@example.com"
                    className="contact-social-link email"
                  >
                    <Mail size={21} />
                    <span>Email</span>
                    <ArrowUpRight size={17} className="social-arrow" />
                  </a>

                  <motion.button
                    type="button"
                    className={`contact-social-link phone ${showPhoneNumber ? "phone-revealed" : ""
                      }`}
                    onClick={() => setShowPhoneNumber((prev) => !prev)}
                    aria-expanded={showPhoneNumber}
                  >
                    <Phone size={21} />

                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={showPhoneNumber ? "phone-number" : "phone-label"}
                        initial={{ opacity: 0, y: 7, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -7, filter: "blur(4px)" }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        {showPhoneNumber
                          ? "+91 72991-33872"
                          : "Call me"}
                      </motion.span>
                    </AnimatePresence>

                    <motion.span
                      className="social-arrow"
                      animate={{
                        rotate: showPhoneNumber ? 45 : 0,
                        color: showPhoneNumber ? "#78ffd0" : "#7e89a9",
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      <ArrowUpRight size={17} />
                    </motion.span>
                  </motion.button>

                  <a
                    href="https://www.facebook.com/YOUR_PROFILE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link facebook"
                  >
                    <Facebook size={21} />
                    <span>Facebook</span>
                    <ArrowUpRight size={17} className="social-arrow" />
                  </a>

                  <a
                    href="https://www.instagram.com/YOUR_PROFILE/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link instagram"
                  >
                    <Instagram size={21} />
                    <span>Instagram</span>
                    <ArrowUpRight size={17} className="social-arrow" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/YOUR_PROFILE/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link linkedin"
                  >
                    <Linkedin size={21} />
                    <span>LinkedIn</span>
                    <ArrowUpRight size={17} className="social-arrow" />
                  </a>

                  <a
                    href="https://x.com/YOUR_PROFILE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link twitter"
                  >
                    <Twitter size={21} />
                    <span>Twitter / X</span>
                    <ArrowUpRight size={17} className="social-arrow" />
                  </a>


                </div>

                <div className="contact-modal-footer">
                  <span className="contact-status-dot" />
                  Looking forward to connecting with you!
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
