
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowDown,
    ArrowUp,
    ArrowUpRight,
    Check,
    Code2,
    Coffee,
    Copy,
    Heart,
    Mail,
    Sparkles,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";
import "./Footer.css";
import { socialLinks } from "../../data/socialLinks";

const EMAIL = socialLinks.email;

const socials = [
    {
        label: "Fackbook",
        href: socialLinks.facebook,
        icon: FaFacebookF,
    },
    {
        label: "Instagram",
        href: socialLinks.instagram,
        icon: FaInstagram,
    },
    {
        label: "Twitter/X",
        href: socialLinks.twitter,
        icon: FaXTwitter,
    },
    {
        label: "LinkedIn",
        href: socialLinks.linkedin,
        icon: FaLinkedinIn
    },
];

export default function Footer() {
    const reduceMotion = useReducedMotion();
    const [copied, setCopied] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: reduceMotion ? "auto" : "smooth",
        });
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);

            window.setTimeout(() => setCopied(false), 1800);
        } catch {
            window.location.href = `mailto:${EMAIL}`;
        }
    };

    const year = new Date().getFullYear();

    return (
        <footer className="portfolio-footer">
            <div className="footer-container">
                <div className="footer-top-line">
                    <a
                        className="footer-brand"
                        href="/"
                        aria-label="Portfolio home"
                        onClick={(event) => {
                            event.preventDefault();
                            scrollToTop();
                        }}
                    >
                        <span className="footer-brand-icon">
                            <Code2 size={19} />
                        </span>
                        <span>
                            vijayan<span className="footer-brand-dot">.</span>
                        </span>
                    </a>

                    <span className="footer-status">
                        <span className="footer-status-dot" />
                        OPEN TO INTERESTING IDEAS
                    </span>
                </div>

                <div className="footer-main">
                    <div className="footer-message">
                        <span className="footer-eyebrow">
                            <Sparkles size={13} />
                            THAT'S A WRAP
                        </span>

                        <h2>
                            You've reached
                            <br />
                            <span>the end.</span>
                            <span className="footer-wave" role="img" aria-label="wave">
                                👋
                            </span>
                        </h2>

                        <p>
                            Thanks for stopping by. Got an idea, a question, or just want to
                            talk tech? My inbox is always a good place to start.
                        </p>

                        <div className="footer-actions">
                            <a className="footer-contact-button" href={`mailto:${EMAIL}`}>
                                <Mail size={16} />
                                Say hello
                                <ArrowUpRight size={16} />
                            </a>

                            <button
                                className={`footer-copy-button ${copied ? "is-copied" : ""}`}
                                type="button"
                                onClick={copyEmail}
                            >
                                {copied ? <Check size={15} /> : <Copy size={15} />}
                                {copied ? "Email copied!" : "Copy email"}
                            </button>
                        </div>
                    </div>

                    <div className="footer-fun-card">
                        <div className="footer-fun-card-top">
                            <span className="footer-terminal-label">
                                <Code2 size={14} />
                                DEVELOPER.LOG
                            </span>
                            <span className="footer-terminal-live">● LIVE</span>
                        </div>

                        <div className="footer-code-lines" aria-label="Developer motto">
                            <p>
                                <span className="footer-code-muted">01</span>
                                <span className="footer-code-purple">const</span> passion =
                                <span className="footer-code-green"> "building"</span>;
                            </p>
                            <p>
                                <span className="footer-code-muted">02</span>
                                <span className="footer-code-purple">const</span> fuel =
                                <span className="footer-code-green"> "coffee"</span>;
                            </p>
                            <p>
                                <span className="footer-code-muted">03</span>
                                <span className="footer-code-purple">const</span> bugs =
                                <span className="footer-code-orange"> "temporary"</span>;
                            </p>
                            <p className="footer-code-comment">
                                <span className="footer-code-muted">04</span>
                                // keep learning. keep shipping.
                            </p>
                        </div>

                        <div className="footer-coffee-note">
                            <span className="footer-coffee-icon">
                                <Coffee size={17} />
                            </span>
                            <span>
                                Powered by coffee
                                <br />
                                <strong>and curiosity.</strong>
                            </span>
                            <Heart className="footer-heart" size={17} />
                        </div>

                        <div className="footer-card-glow" />
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <span>© {year} Vijayan</span>
                        <span className="footer-bottom-separator">/</span>
                        <span>Designed & built with care</span>
                    </div>

                    <div className="footer-socials">
                        <span className="footer-social-label">FIND ME ON</span>

                        {socials.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                className="footer-social-link"
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                title={label}
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>

                    <motion.button
                        className="footer-top-button"
                        type="button"
                        onClick={scrollToTop}
                        whileHover={reduceMotion ? undefined : { y: -3 }}
                        whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                        aria-label="Back to top"
                        title="Back to top"
                    >
                        <ArrowUp size={17} />
                    </motion.button>
                </div>

                <div className="footer-last-line">
                    <span>CRAFTED WITH CODE</span>
                    <span className="footer-last-heart">
                        <Heart size={10} fill="currentColor" />
                    </span>
                    <span>FINISHED WITH A SMILE</span>
                    <ArrowDown size={12} className="footer-last-arrow" />
                </div>
            </div>
        </footer>
    );
}