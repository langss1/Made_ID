"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, Monitor } from "lucide-react";

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
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" style={{ 
      textAlign: "center", 
      paddingTop: "180px",
      paddingBottom: "120px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      overflow: "hidden"
    }}>
      {/* Abstract Background SVG Animation */}
      <div className="hero-bg-lines"></div>
      <div className="hero-abstract-line"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "circOut" }}
        style={{ position: "relative", zIndex: 10 }}
      >
        <span className="sub-header">AI-DRIVEN EXPORT OS</span>
        
        <h1 style={{ 
          fontSize: "clamp(2.75rem, 8vw, 5.5rem)", 
          fontWeight: "900", 
          color: "var(--primary)", 
          lineHeight: "1.05",
          marginBottom: "24px",
          letterSpacing: "-0.04em"
        }}>
          Bridging UMKM Indonesia <br />
          <span style={{ 
            color: "var(--secondary)",
            background: "linear-gradient(135deg, var(--secondary) 0%, #00e090 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>to the World.</span>
        </h1>
        
        <p style={{ 
          fontSize: "clamp(1.1rem, 2vw, 1.4rem)", 
          color: "var(--gray-dark)", 
          maxWidth: "750px", 
          margin: "0 auto 60px",
          lineHeight: "1.6",
          fontWeight: "500",
          padding: "0 20px"
        }}>
          Transforming Indonesia’s Export with **Agentic AI**. 
          Simplify compliance, verify suppliers, and scale your global impact with one platform.
        </p>

        {/* AI Prompt Simulator */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="search-container"
          style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}
        >
          <div className="ai-search-bar" style={{ 
            background: "white", 
            padding: "10px 10px 10px 24px", 
            borderRadius: "50px", 
            display: "flex", 
            alignItems: "center", 
            gap: "15px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            border: "1px solid var(--gray-medium)"
          }}>
            <Search size={24} color="var(--secondary)" />
            <div style={{ flex: 1, textAlign: "left", fontSize: "1.1rem", fontWeight: "600", color: "var(--primary)" }}>
              {displayText}
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} 
                style={{ width: "2px", height: "1.4rem", background: "var(--secondary)", display: "inline-block", verticalAlign: "middle", marginLeft: "4px" }} />
            </div>
            <button className="btn-primary" style={{ borderRadius: "40px", padding: "12px 28px", boxShadow: "none" }}>
              <Sparkles size={18} /> <span>Generate Matches</span>
            </button>
          </div>
        </motion.div>
        
        {/* Verification Badges */}
        <div style={{ marginTop: "60px", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap", padding: "0 20px" }}>
          {[
            { label: "Agentic AI Audit", icon: <Monitor size={16} /> },
            { label: "Real-time Compliance", icon: <Monitor size={16} /> },
            { label: "B2B Verification", icon: <Monitor size={16} /> }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + (idx * 0.1) }}
              style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--primary)", fontSize: "0.9rem", fontWeight: "700" }}
            >
              <div style={{ background: "rgba(0, 163, 108, 0.1)", padding: "10px", borderRadius: "10px", display: "flex" }}>
                {item.icon}
              </div>
              {item.label}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          .ai-search-bar button span { display: none; }
          .ai-search-bar { padding: 8px 8px 8px 18px !important; }
        }
      `}</style>
    </section>
  );
}
