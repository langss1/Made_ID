"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, Database, CheckCircle, MessageCircle, Truck, PackageCheck, Star } from "lucide-react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [stage, setStage] = useState(1); // 1: typing, 2: clicked, 3: matching, 4: results
  const fullText = "I need a organic coffee supplier from West Java...";
  
  useEffect(() => {
    if (stage === 1) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) {
          clearInterval(interval);
          setTimeout(() => setStage(2), 1500);
        }
      }, 70);
      return () => clearInterval(interval);
    }
  }, [stage]);

  useEffect(() => {
    if (stage === 2) {
      const timer = setTimeout(() => setStage(3), 800);
      return () => clearTimeout(timer);
    }
    if (stage === 3) {
      const timer = setTimeout(() => setStage(4), 4000);
      return () => clearTimeout(timer);
    }
    if (stage === 4) {
      const timer = setTimeout(() => {
        setStage(1);
        setDisplayText("");
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const flowSteps = [
    { label: "Recommend", icon: <Star size={18} />, color: "#f59e0b" },
    { label: "Review", icon: <Database size={18} />, color: "#3b82f6" },
    { label: "Chat AI", icon: <MessageCircle size={18} />, color: "var(--secondary)" },
    { label: "Delivery", icon: <Truck size={18} />, color: "#8b5cf6" },
    { label: "Success", icon: <PackageCheck size={18} />, color: "var(--secondary)" }
  ];

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
      <div className="hero-bg-lines"></div>
      <div className="hero-abstract-line"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "circOut" }}
        style={{ position: "relative", zIndex: 10 }}
      >
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
          Simpler, Faster, and Intelligent. The AI ecosystem that transforms traditional trade into a future-ready export network.
        </p>

        {/* Dynamic AI Sequence Simulator */}
        <div style={{ maxWidth: "850px", margin: "0 auto", padding: "0 20px" }}>
          <div className="ai-search-bar" style={{ 
            background: "white", 
            padding: "10px 10px 10px 24px", 
            borderRadius: "50px", 
            display: "flex", 
            alignItems: "center", 
            gap: "15px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            border: "1px solid var(--gray-medium)",
            minHeight: "75px"
          }}>
            <Search size={24} color="var(--secondary)" />
            <div style={{ flex: 1, textAlign: "left", fontSize: "1.1rem", fontWeight: "600", color: "var(--primary)" }}>
              <AnimatePresence mode="wait">
                {stage === 1 && (
                  <motion.span key="typing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {displayText}
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} 
                      style={{ width: "2px", height: "1.4rem", background: "var(--secondary)", display: "inline-block", verticalAlign: "middle", marginLeft: "4px" }} />
                  </motion.span>
                )}
                {stage >= 2 && (
                   <motion.span key="agentic" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                     {stage === 2 && "Initiating Agentic Match..."}
                     {stage === 3 && (
                       <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                          <span style={{ color: "var(--secondary)", fontSize: "1rem" }}>Processing Agents</span>
                          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}>
                             <Sparkles size={18} color="var(--secondary)" />
                          </motion.div>
                       </div>
                     )}
                     {stage === 4 && <span style={{ color: "var(--secondary)" }}>Export Lifecycle Initialized!</span>}
                   </motion.span>
                )}
              </AnimatePresence>
            </div>

            <motion.button 
              animate={stage === 2 ? { scale: 0.95, filter: "brightness(0.8)" } : { scale: 1 }}
              className="btn-primary" 
              style={{ borderRadius: "40px", padding: "12px 28px", boxShadow: "none", position: "relative" }}
            >
              <AnimatePresence mode="wait">
                {stage < 3 ? (
                  <motion.div key="btn-gen" style={{ display: "flex", alignItems: "center", gap: "8px" }}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Sparkles size={18} /> <span>Generate Matches</span>
                  </motion.div>
                ) : (
                  <motion.div key="btn-done" style={{ color: "white", display: "flex", alignItems: "center", gap: "8px" }}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <CheckCircle size={18} /> <span>Verified</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Agentic Flow Animation Overlay */}
          <div style={{ height: "100px", marginTop: "30px", position: "relative" }}>
            <AnimatePresence>
              {stage >= 3 && (
                <div style={{ display: "flex", justifyContent: "center", gap: "15px", alignItems: "center" }}>
                  {flowSteps.map((step, idx) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ 
                        opacity: stage === 3 ? (idx === 0 ? 1 : 0.4) : (stage === 4 ? 1 : 0),
                        scale: stage === 4 ? 1 : (idx === 0 ? 1.1 : 0.9),
                        y: 0
                      }}
                      transition={{ delay: idx * 0.4 }}
                      style={{ 
                        background: "white", 
                        padding: "12px 20px", 
                        borderRadius: "16px", 
                        boxShadow: "var(--shadow)",
                        border: "1px solid var(--gray-medium)",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                      }}
                    >
                      <div style={{ color: step.color }}>{step.icon}</div>
                      <span style={{ fontSize: "0.9rem", fontWeight: "700", color: "var(--primary)" }}>{step.label}</span>
                      {stage === 4 && <CheckCircle size={14} color="var(--secondary)" />}
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
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
