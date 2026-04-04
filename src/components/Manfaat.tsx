"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Target, TrendingUp, ShieldCheck, Zap, BarChart3, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Manfaat() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const benefits = [
    {
      role: "Untuk UMKM Indonesia",
      image: "/value_prop_umkm_v2_1775303654440.png",
      points: [
        { title: "Akses Pasar Global Tanpa Perantara", icon: <Globe size={18} /> },
        { title: "Sertifikasi Ekspor yang Lebih Mudah", icon: <ShieldCheck size={18} /> },
        { title: "Peningkatan Kualitas Melalui Audit AI", icon: <Zap size={18} /> },
        { title: "Pendanaan Berbasis Transaksi Nyata", icon: <TrendingUp size={18} /> }
      ],
      color: "var(--secondary)"
    },
    {
      role: "Untuk Global Buyers",
      image: "/value_prop_buyer_v2_1775303680622.png",
      points: [
        { title: "Supplier Indonesia yang Terverifikasi", icon: <ShieldCheck size={18} /> },
        { title: "Minimalisir Risiko Pengadaan Barang", icon: <Target size={18} /> },
        { title: "Laporan Kepatuhan ESG Real-time", icon: <BarChart3 size={18} /> },
        { title: "Integrasi Rantai Pasok yang Efisien", icon: <Zap size={18} /> }
      ],
      color: "var(--primary)"
    }
  ];

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % benefits.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [benefits.length]);

  if (!mounted) return null;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % benefits.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + benefits.length) % benefits.length);

  return (
    <section id="manfaat" suppressHydrationWarning style={{ padding: "140px 24px", background: "white" }}>
      <div style={{ textAlign: "center", marginBottom: "100px" }}>
        <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "900", color: "var(--primary)", letterSpacing: "-0.04em" }}>
          Strategic Value <br /> <span style={{ color: "var(--secondary)" }}>Proposition.</span>
        </h2>
        <p style={{ color: "var(--gray-dark)", fontSize: "1.2rem", maxWidth: "600px", margin: "20px auto", fontWeight: "500", lineHeight: "1.7" }}>
          Menciptakan nilai tambah nyata bagi UMKM Indonesia dan Buyer Global dalam ekosistem niaga modern.
        </p>
      </div>

      <div style={{ maxWidth: "1350px", margin: "0 auto" }}>
        {/* PC Desktop Version */}
        <div className="desktop-manfaat-grid" style={{ display: "flex", flexWrap: "wrap", gap: "50px" }}>
          {benefits.map((b, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              style={{ 
                 flex: "1 1 550px", 
                 background: "white", 
                 borderRadius: "56px", 
                 overflow: "hidden", 
                 boxShadow: "0 40px 100px -20px rgba(0, 59, 92, 0.08)",
                 border: "1px solid var(--gray-medium)",
                 position: "relative"
              }}
            >
              <div style={{ height: "480px", position: "relative", overflow: "hidden" }}>
                <Image src={b.image} alt={b.role} fill sizes="(max-width: 1350px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "60px 40px 40px", background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 40%, transparent 100%)", display: "flex", alignItems: "flex-end" }}>
                  <h3 style={{ color: "white", fontSize: "2.2rem", fontWeight: "950", letterSpacing: "-0.02em" }}>{b.role}</h3>
                </div>
              </div>
              <div style={{ padding: "50px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "25px" }}>
                  {b.points.map((p, pIdx) => (
                    <div key={pIdx} style={{ display: "flex", alignItems: "center", gap: "15px", background: "#f8fafc", padding: "24px", borderRadius: "28px", border: "1px solid rgba(0, 59, 92, 0.05)" }}>
                      <div style={{ background: b.color, color: "white", width: "40px", height: "40px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><div style={{ marginLeft: "10px" }}>{p.icon}</div></div>
                      <span style={{ fontSize: "1rem", fontWeight: "800", color: "var(--primary)", lineHeight: "1.25" }}>{p.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: "absolute", top: "40px", right: "40px", color: "white", opacity: 0.3, zIndex: 1 }}>
                 <Star size={40} fill="white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider Version */}
        <div className="mobile-manfaat-slider" style={{ position: "relative" }}>
          <div style={{ position: "relative", height: "auto" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                style={{ 
                   background: "white", 
                   borderRadius: "48px", 
                   overflow: "hidden", 
                   boxShadow: "0 20px 50px rgba(0, 59, 92, 0.1)",
                   border: `1px solid ${benefits[currentIndex].color}44`,
                   position: "relative"
                }}
              >
                <div style={{ height: "300px", position: "relative" }}>
                   <Image src={benefits[currentIndex].image} alt={benefits[currentIndex].role} fill style={{ objectFit: "cover" }} />
                   <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }} />
                   <div style={{ position: "absolute", bottom: "30px", left: "30px" }}>
                     <h3 style={{ color: "white", fontSize: "1.5rem", fontWeight: "950" }}>{benefits[currentIndex].role}</h3>
                   </div>
                </div>
                <div style={{ padding: "30px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    {benefits[currentIndex].points.map((p, pIdx) => (
                      <div key={pIdx} style={{ display: "flex", alignItems: "center", gap: "12px", background: "#f8fafc", padding: "18px", borderRadius: "20px" }}>
                        <div style={{ background: benefits[currentIndex].color, color: "white", width: "32px", height: "32px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><div style={{ marginLeft: "7px" }}>{p.icon}</div></div>
                        <span style={{ fontSize: "0.9rem", fontWeight: "800", color: "var(--primary)", lineHeight: "1.2" }}>{p.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginTop: "30px" }}>
             <button 
               onClick={prevSlide} 
               suppressHydrationWarning
               style={{ width: "50px", height: "50px", borderRadius: "50%", border: "1px solid var(--gray-medium)", background: "white", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}
             >
               <ChevronLeft size={24} style={{ marginLeft: "-2px" }} />
             </button>
             <div style={{ display: "flex", gap: "8px" }}>
               {benefits.map((_, i) => (
                  <div key={i} style={{ width: i === currentIndex ? "30px" : "10px", height: "10px", borderRadius: "10px", background: i === currentIndex ? "var(--secondary)" : "var(--gray-medium)", transition: "0.4s" }} />
               ))}
             </div>
             <button 
               onClick={nextSlide} 
               suppressHydrationWarning
               style={{ width: "50px", height: "50px", borderRadius: "50%", border: "1px solid var(--gray-medium)", background: "white", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}
             >
               <ChevronRight size={24} style={{ marginLeft: "2px" }} />
             </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mobile-manfaat-slider { display: none; }
        @media (max-width: 900px) {
          .desktop-manfaat-grid { display: none !important; }
          .mobile-manfaat-slider { display: block !important; }
        }
      `}</style>
    </section>
  );
}
