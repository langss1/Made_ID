"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "For Buyers", href: "#buyers" },
    { name: "For UMKM", href: "#umkm" },
    { name: "Impact", href: "#impact" },
  ];

  return (
    <nav className={`glass-nav ${scrolled ? "scrolled" : ""}`}>
      <div style={{ 
        maxWidth: "1400px", 
        margin: "0 auto", 
        padding: "1rem 1.5rem", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center" 
      }}>
        <Link href="/" style={{ 
          fontSize: "1.75rem", 
          fontWeight: "800", 
          color: "var(--primary)", 
          letterSpacing: "-0.75px",
          display: "flex",
          alignItems: "center"
        }}>
          MADE<span style={{ color: "var(--secondary)" }}>.id</span>
        </Link>
        
        {/* Desktop Menu */}
        <ul style={{ display: "none", gap: "2.5rem", alignItems: "center", fontWeight: "600", color: "var(--gray-dark)" }} className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="nav-link-hover">
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Join Waitlist
              <ArrowRight size={18} />
            </motion.button>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div style={{ display: "none" }} className="mobile-toggle">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            style={{ background: "transparent", border: "none", color: "var(--primary)", cursor: "pointer" }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ 
              background: "white", 
              borderTop: "1px solid var(--gray-medium)", 
              overflow: "hidden", 
              boxShadow: "var(--shadow-lg)"
            }}
          >
            <ul style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    style={{ 
                      fontSize: "1.2rem", 
                      fontWeight: "600", 
                      color: "var(--primary)",
                      display: "block",
                      padding: "0.5rem 0"
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: "0.5rem" }}>
                <button className="btn-primary" style={{ width: "100%", padding: "1rem" }}>
                  Join Waitlist
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 991px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        .nav-link-hover {
          transition: color 0.3s ease;
        }
        .nav-link-hover:hover {
          color: var(--secondary);
        }
        .scrolled {
          padding: 0.5rem 0 !important;
          box-shadow: var(--shadow);
        }
      `}</style>
    </nav>
  );
}
