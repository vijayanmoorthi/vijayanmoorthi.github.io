import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowDownRight, ArrowRight, Download, BriefcaseBusiness, Layers3,
  Code2, Database, GitBranch, Braces, Server, Cylinder, LoaderCircle,
  PanelsTopLeft, CodeXml, Palette, Grid2X2
} from "lucide-react";
import "./Intro.css";

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


  return (
    <section className="hero" id="home">
      <div className="hero-background-grid" />

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
            I turn complex ideas into reliable, scalable digital experiences using Node.js, Laravel, PHP, MongoDB, and MySQL — combining clean code, optimized performance, and thoughtful engineering to build solutions that make a real impact.
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



    </section>
  );
}
