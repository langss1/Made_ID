"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, PieChart, Zap, Fingerprint, ArrowUpRight, SearchCode, Cpu, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const features = [
    {
      title: "Agentic AI Audit",
      desc: "Sistem cerdas yang mengaudit produk UMKM secara otomatis untuk kesiapan ekspor, standardisasi, dan kepatuhan global secara instan.",
      icon: <Bot size={28} />,
      btnLabel: "Explore Audit",
      color: "var(--secondary)"
    },
    {
      title: "Precision Agentic AI Matching",
      desc: "Algoritma pencarian berbasis prompt AI yang menghubungkan buyer global dengan supplier Indonesia secara akurat dan tervalidasi melalui agen cerdas.",
      icon: <SearchCode size={28} />,
      btnLabel: "Find Matches",
      color: "#3b82f6"
    },
    {
      title: "Real-time Compliance",
      desc: "Monitoring berkelanjutan untuk memastikan regulasi ekspor yang sering berubah tetap dipenuhi secara presisi di seluruh wilayah.",
      icon: <Fingerprint size={28} />,
      btnLabel: "Check Regs",
      color: "#8b5cf6"
    },
    {
      title: "Strategic Impact Hub",
      desc: "Platform khusus pemerintah untuk memonitor dampak hilirisasi, devisa, dan soft power diplomasi niaga melalui dasbor intelijen.",
      icon: <PieChart size={28} />,
      btnLabel: "View Dash",
      color: "#f59e0b"
    }
  ];

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [features.length]);

  if (!mounted) return null;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % features.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);

  return (
    <section id="features" suppressHydrationWarning style={{ padding: "140px 24px", position: "relative", overflow: "hidden" }}>
      {/* Background Decor */}
      <div style={{ 
        position: "absolute", 
        top: "10%", 
        right: "-5%", 
        width: "500px", 
        height: "500px", 
        background: "radial-gradient(circle, rgba(0, 163, 108, 0.05) 0%, transparent 70%)",
        zIndex: -1 
      }} />
      
      <div style={{ marginBottom: "100px" }}>
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           style={{ 
             display: "inline-flex", 
             alignItems: "center", 
             gap: "10px",
             color: "var(--secondary)",
             fontWeight: "800",
             fontSize: "0.85rem",
             letterSpacing: "0.2em",
             marginBottom: "20px"
           }}
        >
          <Cpu size={18} /> AGENTIC ECOSYSTEM
        </motion.div>
        
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "40px" }}>
           <h2 style={{ 
             fontSize: "clamp(2.5rem, 6vw, 4rem)", 
             fontWeight: "900", 
             lineHeight: "1.1", 
             color: "var(--primary)",
             maxWidth: "850px",
             letterSpacing: "-0.04em"
           }}>
             Introducing MADE.id:<br />
             <span style={{ color: "var(--secondary)" }}>The Premier Agentic Solution for Global Export.</span>
           </h2>
           <p style={{ color: "var(--gray-dark)", fontSize: "1.1rem", maxWidth: "450px", lineHeight: "1.7", fontWeight: "500" }}>
             Menghubungkan UMKM Indonesia ke rantai pasok dunia dengan transparansi intelijen dan kecepatan yang belum pernah ada sebelumnya.
           </p>
        </div>
      </div>

      {/* PC Version: Desktop Grid */}
      <div className="desktop-features-grid">
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(4, 1fr)", 
          gap: "25px" 
        }}>
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="feature-v2-card"
              style={{ 
                background: "white",
                padding: "40px 25px",
                borderRadius: "32px",
                border: "1px solid var(--gray-medium)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%"
              }}
            >
              <div>
                <div style={{ 
                  width: "56px", 
                  height: "56px", 
                  borderRadius: "16px", 
                  background: f.color, 
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "30px",
                  boxShadow: `0 8px 15px -4px ${f.color}44`
                }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: "900", color: "var(--primary)", marginBottom: "15px", lineHeight: "1.2" }}>{f.title}</h3>
                <p style={{ color: "var(--gray-dark)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "30px" }}>{f.desc}</p>
              </div>
              
              <motion.button 
                whileHover={{ x: 5, color: f.color }}
                suppressHydrationWarning
                style={{ 
                  background: "transparent", 
                  border: "none", 
                  color: "var(--primary)", 
                  fontWeight: "800", 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "8px", 
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  padding: 0
                }}
              >
                {f.btnLabel} <ArrowUpRight size={16} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Version: Slider */}
      <div className="mobile-features-slider" style={{ position: "relative" }}>
        <div style={{ position: "relative", height: "420px", display: "flex", alignItems: "center" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              style={{ 
                background: "white",
                padding: "40px 30px",
                borderRadius: "32px",
                border: "1px solid var(--secondary)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                width: "100%",
                boxShadow: "0 20px 40px rgba(0, 59, 92, 0.08)"
              }}
            >
              <div>
                <div style={{ 
                  width: "56px", 
                  height: "56px", 
                  borderRadius: "16px", 
                  background: features[currentIndex].color, 
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "30px"
                }}>
                  {features[currentIndex].icon}
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary)", marginBottom: "15px" }}>{features[currentIndex].title}</h3>
                <p style={{ color: "var(--gray-dark)", fontSize: "1rem", lineHeight: "1.6" }}>{features[currentIndex].desc}</p>
              </div>
              
              <button 
                style={{ 
                  background: "transparent", 
                  border: "none", 
                  color: "var(--primary)", 
                  fontWeight: "800", 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "8px", 
                  fontSize: "1rem",
                  padding: 0
                }}
              >
                {features[currentIndex].btnLabel} <ArrowUpRight size={18} />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px" }}>
           <button 
             onClick={prevSlide}
             suppressHydrationWarning
             style={{ 
               width: "50px", 
               height: "50px", 
               borderRadius: "50%", 
               border: "1px solid var(--gray-medium)", 
               background: "white",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               color: "var(--primary)"
             }}
           >
             <ChevronLeft size={24} style={{ marginLeft: "-2px" }} />
           </button>
           <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
             {features.map((_, i) => (
                <div key={i} style={{ width: i === currentIndex ? "24px" : "8px", height: "8px", borderRadius: "10px", background: i === currentIndex ? "var(--secondary)" : "var(--gray-medium)", transition: "0.3s" }} />
             ))}
           </div>
           <button 
             onClick={nextSlide}
             suppressHydrationWarning
             style={{ 
               width: "50px", 
               height: "50px", 
               borderRadius: "50%", 
               border: "1px solid var(--gray-medium)", 
               background: "white",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               color: "var(--primary)"
             }}
           >
             <ChevronRight size={24} style={{ marginLeft: "2px" }} />
           </button>
        </div>
      </div>

      <style jsx>{`
        .feature-v2-card { transition: all 0.5s ease; }
        .feature-v2-card:hover {
           border-color: var(--secondary);
           transform: translateY(-8px);
           box-shadow: 0 30px 60px -15px rgba(0, 59, 92, 0.1);
        }
        .mobile-features-slider { display: none; }
        @media (max-width: 900px) {
          .desktop-features-grid { display: none !important; }
          .mobile-features-slider { display: block !important; }
        }
      `}</style>
    </section>
  );
}
