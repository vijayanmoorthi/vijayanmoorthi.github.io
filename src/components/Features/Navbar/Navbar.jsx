
import { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import useActiveSection from "../../../hooks/useActiveSection";
import "./Navbar.css";

const navigationItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  const sectionIds = useMemo(
    () => navigationItems.map((item) => item.id),
    []
  );

  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);

    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  };

  return (
    <header
      className={`portfolio-navbar ${scrolled ? "is-scrolled" : ""}`}
    >
      <div className="portfolio-navbar-inner">
        <button
          type="button"
          className="portfolio-navbar-brand"
          aria-label="Go to home"
          onClick={() => scrollToSection("home")}
        >
          <span className="portfolio-navbar-logo">VS</span>

          <span className="portfolio-navbar-brand-copy">
            <span className="portfolio-navbar-brand-name">
              Vijayan<span>.</span>
            </span>
            <span className="portfolio-navbar-brand-role">
              DEVELOPER PORTFOLIO
            </span>
          </span>
        </button>

        <nav
          className={`portfolio-navbar-links ${menuOpen ? "is-open" : ""
            }`}
          id="portfolio-navigation"
          aria-label="Main navigation"
        >
          <div className="portfolio-navbar-mobile-heading">
            <span>NAVIGATION</span>
            <span className="portfolio-navbar-mobile-dot" />
          </div>

          {navigationItems.map((item, index) => {
            const isActive = activeSection === item.id;

            return (
              <motion.button
                key={item.id}
                type="button"
                className={`portfolio-navbar-link ${isActive ? "active" : ""
                  }`}
                onClick={() => scrollToSection(item.id)}
                aria-current={isActive ? "location" : undefined}
                whileHover={reduceMotion ? undefined : { y: -1 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                transition={{ duration: 0.16 }}
              >
                <span className="portfolio-navbar-link-number">
                  0{index + 1}
                </span>
                <span>{item.label}</span>
                <span className="portfolio-navbar-link-indicator" />
              </motion.button>
            );
          })}
        </nav>

        <button
          type="button"
          className={`portfolio-navbar-menu-toggle ${menuOpen ? "is-open" : ""
            }`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="portfolio-navigation"
          aria-expanded={menuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? "close" : "open"}
              initial={reduceMotion ? false : { opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, rotate: 45 }}
              transition={{ duration: 0.14 }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>
    </header>
  );
}
