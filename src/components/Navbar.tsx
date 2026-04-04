"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Flow", href: "#flow" },
    { name: "Manfaat", href: "#manfaat" },
    { name: "Impact", href: "#impact" },
  ];

  return (
    <nav style={{ 
      position: "fixed", 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 1000, 
      padding: isScrolled ? "15px 0" : "25px 0",
      transition: "all 0.4s cubic-bezier(0.19, 1, 0.22, 1)"
    }}>
      <div style={{ 
        maxWidth: "1400px", 
        margin: "0 auto", 
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        {/* Glassmorphism Container */}
        <div style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: isScrolled ? "95%" : "100%",
          height: "100%",
          background: isScrolled ? "rgba(255, 255, 255, 0.8)" : "transparent",
          backdropFilter: isScrolled ? "blur(15px)" : "none",
          borderRadius: isScrolled ? "24px" : "0",
          border: isScrolled ? "1px solid rgba(0, 59, 92, 0.08)" : "none",
          boxShadow: isScrolled ? "0 10px 30px rgba(0, 59, 92, 0.05)" : "none",
          zIndex: -1,
          transition: "all 0.4s ease"
        }} />

        {/* Logo */}
        <Link href="/" style={{ fontSize: "1.75rem", fontWeight: "950", color: "var(--primary)", letterSpacing: "-1.5px", textDecoration: "none", zIndex: 1001 }}>
          MADE<span style={{ color: "var(--secondary)" }}>.id</span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              style={{ 
                color: "var(--primary)", 
                textDecoration: "none", 
                fontWeight: "700", 
                fontSize: "0.95rem", 
                transition: "0.3s",
                opacity: 0.8
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ background: "none", border: "none", color: "var(--primary)", cursor: "pointer", display: "none" }}
          className="mobile-toggle"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ 
              position: "absolute", 
              top: "100%", 
              left: "24px", 
              right: "24px", 
              background: "white", 
              padding: "30px", 
              borderRadius: "24px", 
              boxShadow: "0 20px 50px rgba(0, 59, 92, 0.15)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              border: "1px solid var(--gray-light)",
              zIndex: 999
            }}
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ color: "var(--primary)", textDecoration: "none", fontWeight: "800", fontSize: "1.2rem" }}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
