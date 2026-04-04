"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Award, Users, Globe, PieChart, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Impact() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const impacts = [
    { label: "Pertumbuhan Devisa", value: "+24%", desc: "Target kenaikan devisa riil dari ekspor non-migas UMKM melalui efisiensi audit AI.", icon: <TrendingUp /> },
    { label: "Hilirisasi Digital", value: "3.500+", desc: "UMKM bertransformasi dari penjual produk mentah menjadi produk bernilai tambah tinggi.", icon: <Award /> },
    { label: "Penyerapan Kerja", value: "1.2jt", desc: "Menciptakan lapangan kerja baru di sektor produksi & pengolahan ekspor yang berkelanjutan.", icon: <Users /> },
    { label: "Soft Power Niaga", value: "Global", desc: "Meningkatkan kepercayaan dunia pada produk asli Indonesia (Made in Indonesia).", icon: <Globe /> }
  ];

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % impacts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [impacts.length]);

  if (!mounted) return null;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % impacts.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + impacts.length) % impacts.length);

  return (
    <section id="impact" suppressHydrationWarning style={{ padding: "160px 40px", background: "var(--primary)", borderRadius: "80px 80px 0 0", overflow: "hidden" }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "60px", marginBottom: "100px", maxWidth: "1400px", margin: "0 auto 100px" }}>
        <div style={{ flex: "1 1 600px" }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "12px", 
              color: "rgba(255,255,255,0.6)", 
              fontWeight: "800", 
              letterSpacing: "0.25em",
              fontSize: "0.9rem",
              marginBottom: "30px",
              textTransform: "uppercase"
            }}
          >
            <div style={{ width: "40px", height: "2px", background: "var(--secondary)" }} />
            National Strategic Impact
          </motion.div>
          <h2 style={{ fontSize: "clamp(2.5rem, 6.5vw, 4.5rem)", color: "white", fontWeight: "900", lineHeight: "1.05", letterSpacing: "-0.04em" }}>
            Infrastruktur Masa Depan <br />
            <span style={{ color: "var(--secondary)" }}>Ekonomi Nasional.</span>
          </h2>
        </div>
        <div className="impact-text-decor" style={{ flex: "1 1 350px" }}>
           <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.2rem", lineHeight: "1.8", fontWeight: "400", borderLeft: "2px solid rgba(0, 163, 108, 0.3)", paddingLeft: "30px" }}>
             Mendukung kemandirian data ekspor & kedaulatan UMKM melalui infrastruktur **Agentic AI** yang presisi dan transparan.
           </p>
        </div>
      </div>

      {/* PC Version Grid */}
      <div className="desktop-impact-grid">
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(4, 1fr)", 
          gap: "35px",
          maxWidth: "1400px",
          margin: "0 auto"
        }}>
          {impacts.map((impact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="impact-card"
              style={{ 
                padding: "50px 40px", 
                background: "rgba(255,255,255,0.04)", 
                borderRadius: "44px",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                position: "relative",
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <div style={{ 
                  width: "56px", 
                  height: "56px", 
                  borderRadius: "16px", 
                  background: "rgba(255,255,255,0.08)", 
                  color: "var(--secondary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "40px"
                }}>
                  {impact.icon}
                </div>
                <div style={{ fontSize: "3.5rem", fontWeight: "950", color: "white", marginBottom: "15px", lineHeight: "1" }}>{impact.value}</div>
                <div style={{ fontWeight: "800", color: "var(--secondary)", fontSize: "0.85rem", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.15em" }}>{impact.label}</div>
                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: "1.6", fontWeight: "500" }}>{impact.desc}</p>
              </div>
              <div style={{ position: "absolute", bottom: "-30px", right: "-30px", opacity: 0.05, color: "white" }}>
                {idx % 2 === 0 ? <PieChart size={140} /> : <BarChart3 size={140} />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Version Slider */}
      <div className="mobile-impact-slider" style={{ display: "none", position: "relative" }}>
        <div style={{ position: "relative", height: "450px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="impact-card-mobile"
              style={{ 
                padding: "60px 40px", 
                background: "rgba(255,255,255,0.06)", 
                borderRadius: "48px",
                border: "1px solid rgba(255,255,255,0.15)",
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
                  background: "rgba(255,255,255,0.1)", 
                  color: "var(--secondary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "40px"
                }}>
                  {impacts[currentIndex].icon}
                </div>
                <div style={{ fontSize: "3.75rem", fontWeight: "950", color: "white", marginBottom: "15px", lineHeight: "1" }}>{impacts[currentIndex].value}</div>
                <div style={{ fontWeight: "800", color: "var(--secondary)", fontSize: "0.9rem", marginBottom: "20px", textTransform: "uppercase" }}>{impacts[currentIndex].label}</div>
                <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", lineHeight: "1.6" }}>{impacts[currentIndex].desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginTop: "40px" }}>
           <button 
             onClick={prevSlide} 
             suppressHydrationWarning
             style={{ width: "50px", height: "50px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}
           >
             <ChevronLeft size={24} style={{ marginLeft: "-2px" }} />
           </button>
           <div style={{ display: "flex", gap: "10px" }}>
             {impacts.map((_, i) => (
                <div key={i} style={{ width: i === currentIndex ? "32px" : "10px", height: "10px", borderRadius: "10px", background: i === currentIndex ? "var(--secondary)" : "rgba(255,255,255,0.2)", transition: "0.4s" }} />
             ))}
           </div>
           <button 
             onClick={nextSlide} 
             suppressHydrationWarning
             style={{ width: "50px", height: "50px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}
           >
             <ChevronRight size={24} style={{ marginLeft: "2px" }} />
           </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-impact-grid, .impact-text-decor { display: none !important; }
          .mobile-impact-slider { display: block !important; }
        }
      `}</style>
    </section>
  );
}
