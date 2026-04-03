"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, ChevronRight } from "lucide-react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Saya butuh supplier furniture eco-friendly untuk pasar EU...";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        setTimeout(() => { i = 0; }, 3000);
      }
    }, 80).on;
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" style={{ 
      textAlign: "center", 
      padding: "160px 20px", 
      position: "relative",
      minHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      overflow: "hidden"
    }}>
      {/* Abstract Background Elements */}
      <div className="hero-bg-lines"></div>
      <div className="hero-abstract-line"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 style={{ 
          fontSize: "clamp(2.75rem, 8vw, 5.5rem)", 
          fontWeight: "900", 
          color: "var(--primary)", 
          lineHeight: "1.05",
          marginBottom: "24px",
          letterSpacing: "-2px"
        }}>
          Bridging UMKM Indonesia <br />
          <span style={{ 
            color: "var(--secondary)",
            background: "linear-gradient(90deg, var(--secondary), #70e000)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>to the World</span>
        </h1>
        
        <p style={{ 
          fontSize: "clamp(1.1rem, 2vw, 1.4rem)", 
          color: "var(--gray-dark)", 
          maxWidth: "800px", 
          margin: "0 auto 60px",
          lineHeight: "1.6",
          fontWeight: "500"
        }}>
          Transforming Indonesia’s Export with AI-Driven Intelligence. 
          The first Agentic AI ecosystem that simplifies cross-border trade for everyone.
        </p>

        {/* AI Prompt Simulator */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="ai-search-bar"
        >
          <div style={{ background: "var(--accent)", padding: "10px", borderRadius: "50%", display: "flex" }}>
            <Search size={22} color="var(--secondary)" />
          </div>
          <div style={{ position: "relative", flex: 1, textAlign: "left", paddingLeft: "5px" }}>
            <span style={{ fontSize: "1.1rem", color: "var(--primary)", fontWeight: "600" }}>
              {displayText}
            </span>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              style={{ width: "2px", height: "1.3rem", background: "var(--secondary)", display: "inline-block", verticalAlign: "middle", marginLeft: "2px" }}
            />
          </div>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "var(--glow-secondary)" }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary" 
            style={{ borderRadius: "40px", padding: "12px 28px" }}
          >
            <Sparkles size={18} />
            <span>Generate Matches</span>
          </motion.button>
        </motion.div>
        
        {/* Trust Badges */}
        <div style={{ marginTop: "50px", display: "flex", gap: "30px", justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { label: "Agentic AI Audit", color: "var(--secondary)" },
            { label: "Global Compliance", color: "var(--primary)" },
            { label: "Secure Payments", color: "var(--secondary)" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + (idx * 0.1) }}
              style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--primary)", fontSize: "0.95rem", fontWeight: "700" }}
            >
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: item.color }} />
              {item.label}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        .hero-section {
          background: radial-gradient(circle at top right, rgba(0, 163, 108, 0.05), transparent 40%),
                      radial-gradient(circle at bottom left, rgba(0, 59, 92, 0.03), transparent 30%);
        }
        @media (max-width: 768px) {
          .ai-search-bar {
            padding: 10px 10px 10px 20px;
            margin: 30px 10px;
          }
          .ai-search-bar span { font-size: 0.95rem !important; }
          .ai-search-bar button span { display: none; }
          .ai-search-bar button { padding: 12px !important; }
        }
      `}</style>
    </section>
  );
}
