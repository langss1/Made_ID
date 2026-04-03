"use client";

import { motion } from "framer-motion";
import { Bot, ShieldCheck, PieChart, Zap, Search, Fingerprint } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Agentic AI Audit",
      desc: "Sistem cerdas yang mengaudit produk UMKM secara otomatis untuk kesiapan ekspor, standardisasi, dan kepatuhan global.",
      icon: <Bot size={28} />,
      color: "var(--secondary)"
    },
    {
      title: "Self-Verifying Network",
      desc: "Buyer global dapat memverifikasi kualitas pabrik dan etika kerja secara mendalam tanpa harus datang ke lokasi.",
      icon: <ShieldCheck size={28} />,
      color: "#3b82f6"
    },
    {
      title: "Real-time Compliance",
      desc: "Monitoring berkelanjutan untuk memastikan regulasi ekspor yang sering berubah tetap dipenuhi secara presisi.",
      icon: <Fingerprint size={28} />,
      color: "#8b5cf6"
    },
    {
      title: "Strategic Impact Hub",
      desc: "Platform khusus pemerintah untuk memonitor dampak hilirisasi, devisa, dan soft power diplomasi niaga Indonesia.",
      icon: <PieChart size={28} />,
      color: "#f59e0b"
    }
  ];

  return (
    <section id="features" style={{ padding: "120px 24px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "80px", gap: "30px" }}>
        <div style={{ maxWidth: "600px" }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ 
              color: "var(--secondary)", 
              fontWeight: "800", 
              letterSpacing: "0.1em", 
              marginBottom: "15px",
              fontSize: "0.9rem"
            }}
          >
            MADE.ID OS ENGINE
          </motion.div>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: "1.1", fontWeight: "900" }}>
            The Intelligence <br /> 
            <span style={{ color: "var(--secondary)" }}>Behind the Export.</span>
          </h2>
        </div>
        <p style={{ color: "var(--gray-dark)", fontSize: "1.1rem", maxWidth: "400px", lineHeight: "1.6" }}>
          Kami menggabungkan data intelijen dan Agentic AI untuk membangun jembatan kepercayaan niaga internasional.
        </p>
      </div>

      <div className="grid-3">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glowing-card"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div className="feature-icon-wrapper" style={{ 
              background: `rgba(${feature.color}, 0.1)`, 
              color: feature.color 
            }}>
              {feature.icon}
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", fontWeight: "800", color: "var(--primary)" }}>{feature.title}</h3>
            <p style={{ color: "var(--gray-dark)", lineHeight: "1.6", fontSize: "1rem" }}>{feature.desc}</p>
            
            <motion.div 
              whileHover={{ x: 5 }}
              style={{ 
                marginTop: "25px", 
                display: "flex", 
                alignItems: "center", 
                gap: "8px", 
                color: "var(--primary)", 
                fontWeight: "700", 
                cursor: "pointer",
                fontSize: "0.95rem"
              }}
            >
              Pelajari lebih lanjut <Zap size={16} fill="var(--primary)" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .glowing-card::after {
          content: "";
          position: absolute;
          top: -20px;
          right: -20px;
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, rgba(var(--secondary-rgb), 0.1) 0%, transparent 70%);
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .glowing-card:hover::after {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
