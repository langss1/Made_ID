"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return (
    <nav className="glass-nav" style={{ padding: "1.25rem 1.5rem" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontSize: "1.75rem", fontWeight: "800", color: "var(--primary)" }}>MADE<span style={{ color: "var(--secondary)" }}>.id</span></div>
      </div>
    </nav>
  );

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "For Buyers", href: "#buyers" },
    { name: "For UMKM", href: "#umkm" },
    { name: "Impact", href: "#impact" },
  ];

  return (
    <nav className={`glass-nav ${scrolled ? "scrolled" : ""}`} style={{ 
      transition: "padding 0.4s ease", 
      padding: scrolled ? "0.75rem 1.5rem" : "1.25rem 1.5rem" 
    }}>
      <div style={{ 
        maxWidth: "1400px", 
        margin: "0 auto", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center" 
      }}>
        <Link href="/" style={{ 
          fontSize: "1.75rem", 
          fontWeight: "800", 
          color: "var(--primary)", 
          letterSpacing: "-0.75px"
        }}>
          MADE<span style={{ color: "var(--secondary)" }}>.id</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="desktop-links" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="nav-link">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-btn"
          onClick={() => setIsOpen(!isOpen)} 
          style={{ background: "transparent", border: "none", color: "var(--primary)", cursor: "pointer", display: "none" }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ 
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "white", 
              borderTop: "1px solid var(--gray-medium)", 
              padding: "2rem 1.5rem",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem"
            }}
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--primary)" }}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .nav-link {
          font-weight: 700;
          color: var(--gray-dark);
          transition: 0.3s;
          font-size: 0.95rem;
        }
        .nav-link:hover { color: var(--secondary); }
        
        @media (max-width: 991px) {
          .desktop-links { display: none !important; }
          .mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
