import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, X, Mail, MessageCircle, Phone
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./TalkButton.css";
import { socialLinks } from "../../../data/socialLinks";

export default function TalkButton() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  useEffect(() => {
    if (!isContactOpen) return;
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsContactOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [isContactOpen]);

  return (
    <>
      <AnimatePresence>
        {!isContactOpen && (
          <motion.button
            type="button"
            className="floating-contact-button"
            onClick={() => setIsContactOpen(true)}
            aria-label="Let's Talk — open contact options"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="floating-contact-indicator" />
            <span className="floating-contact-label">Let's Talk</span>
            <span className="floating-contact-arrow"><ArrowRight size={18} /></span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            className="contact-overlay"
            onClick={(event) => event.stopPropagation()}
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
              <button type="button" className="contact-modal-close"
                onClick={() => {
                  setIsContactOpen(false);
                  setShowPhoneNumber(false);
                }} aria-label="Close contact modal">
                <X size={20} />
              </button>
              <div className="contact-modal-glow" />
              <div className="contact-modal-content">
                <div className="contact-modal-icon"><MessageCircle size={25} /></div>
                <span className="contact-eyebrow"><span className="contact-status-dot" />LET'S CONNECT</span>
                <h2 id="contact-modal-title">Let's build something<span> great together.</span></h2>
                <p className="contact-description">
                  Have an idea, an exciting opportunity, or just want to say hello?
                  Find me on your favorite platform.
                </p>
                <div className="contact-social-links">
                  <a href={`mailto:${socialLinks.email}`} className="contact-social-link email">
                    <Mail size={21} /><span>Email</span><ArrowUpRight size={17} className="social-arrow" />
                  </a>
                  <motion.button type="button"
                    className={`contact-social-link phone ${showPhoneNumber ? "phone-revealed" : ""}`}
                    onClick={() => setShowPhoneNumber((prev) => !prev)}
                    aria-expanded={showPhoneNumber}>
                    <Phone size={21} />
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span key={showPhoneNumber ? "phone-number" : "phone-label"}
                        initial={{ opacity: 0, y: 7, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -7, filter: "blur(4px)" }}
                        transition={{ duration: 0.2, ease: "easeOut" }}>
                        {showPhoneNumber ? socialLinks.phone : "Call me"}
                      </motion.span>
                    </AnimatePresence>
                    <motion.span className="social-arrow"
                      animate={{ rotate: showPhoneNumber ? 45 : 0, color: showPhoneNumber ? "#78ffd0" : "#7e89a9" }}
                      transition={{ duration: 0.25 }}><ArrowUpRight size={17} /></motion.span>
                  </motion.button>
                  <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="contact-social-link facebook">
                    <FaFacebookF size={21} /><span>Facebook</span><ArrowUpRight size={17} className="social-arrow" />
                  </a>
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="contact-social-link instagram">
                    <FaInstagram size={21} /><span>Instagram</span><ArrowUpRight size={17} className="social-arrow" />
                  </a>
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="contact-social-link linkedin">
                    <FaLinkedinIn size={21} /><span>LinkedIn</span><ArrowUpRight size={17} className="social-arrow" />
                  </a>
                  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="contact-social-link twitter">
                    <FaXTwitter size={21} /><span>Twitter / X</span><ArrowUpRight size={17} className="social-arrow" />
                  </a>
                </div>
                <div className="contact-modal-footer"><span className="contact-status-dot" />Looking forward to connecting with you!</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
