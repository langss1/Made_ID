"use client";

import { motion } from "framer-motion";
import { UserPlus, Settings, Globe, Search, ShieldCheck, CreditCard, ChevronRight, Activity } from "lucide-react";

export default function Flow() {
  const umkmFlow = [
    { title: "Onboarding & Audit AI", desc: "Daftar & biarkan AI mengaudit kesiapan ekspor produk Anda secara mendalam.", icon: <UserPlus /> },
    { title: "Standardisasi Produk", desc: "AI merekomendasikan perbaikan & standardisasi sesuai target pasar global.", icon: <Settings /> },
    { title: "Global Matching", desc: "MADE.id menghubungkan produk Anda langsung dengan buyer yang relevan.", icon: <Activity /> }
  ];

  const buyerFlow = [
    { title: "Cari Produk Terverifikasi", desc: "Temukan produk Indonesia yang sudah melewati audit AI & verifikasi digital.", icon: <Search /> },
    { title: "Verifikasi Pabrik Digital", desc: "Lihat data pabrik, kepatuhan etika, & ESG secara real-time dari platform.", icon: <ShieldCheck /> },
    { title: "Transaksi Aman", desc: "Lakukan negosiasi & transaksi dengan jaminan transparansi dari sistem.", icon: <CreditCard /> }
  ];

  return (
    <section id="flow" style={{ padding: "140px 24px", background: "var(--gray-light)", borderRadius: "64px" }}>
      <div style={{ textAlign: "center", marginBottom: "100px" }}>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           style={{ 
             display: "inline-flex", 
             alignItems: "center", 
             gap: "10px",
             background: "rgba(0, 59, 92, 0.05)",
             color: "var(--primary)",
             padding: "8px 20px",
             borderRadius: "100px",
             fontSize: "0.85rem",
             fontWeight: "800",
             letterSpacing: "0.1em",
             marginBottom: "20px"
           }}
        >
          <Activity size={16} /> WORKFLOW AUTOMATION
        </motion.div>
        
        <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "900", color: "var(--primary)", letterSpacing: "-0.04em", lineHeight: "1.1" }}>
          The MADE.id <br /> <span style={{ color: "var(--secondary)" }}>Ecosystem Flow.</span>
        </h2>
        <p style={{ color: "var(--gray-dark)", fontSize: "1.1rem", maxWidth: "600px", margin: "20px auto", fontWeight: "500" }}>
          Sederhanakan ekspor konvensional yang rumit menjadi transaksi cerdas yang terukur.
        </p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", maxWidth: "1200px", margin: "0 auto" }}>
        {/* UMKM Flow */}
        <div style={{ flex: "1 1 500px" }}>
           <div style={{ display: "inline-block", background: "white", padding: "10px 24px", borderRadius: "50px", marginBottom: "40px", fontSize: "0.9rem", fontWeight: "800", color: "var(--secondary)", border: "1px solid var(--gray-medium)" }}>
             UNTUK UMKM INDONESIA
           </div>
           
           <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              {umkmFlow.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="flow-step-v2"
                  style={{ 
                    background: "white", 
                    padding: "30px", 
                    borderRadius: "32px",
                    display: "flex",
                    alignItems: "center",
                    gap: "25px",
                    border: "1px solid var(--gray-medium)",
                    position: "relative"
                  }}
                >
                  <div style={{ fontSize: "1.5rem", fontWeight: "900", color: "rgba(0, 163, 108, 0.1)", position: "absolute", top: "20px", right: "30px" }}>0{idx + 1}</div>
                  <div style={{ background: "rgba(0, 163, 108, 0.1)", color: "var(--secondary)", width: "56px", height: "56px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{step.icon}</div>
                  <div>
                    <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginBottom: "8px" }}>{step.title}</h4>
                    <p style={{ fontSize: "0.95rem", color: "var(--gray-dark)", lineHeight: "1.5" }}>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Global Buyer Flow */}
        <div style={{ flex: "1 1 500px" }}>
           <div style={{ display: "inline-block", background: "white", padding: "10px 24px", borderRadius: "50px", marginBottom: "40px", fontSize: "0.9rem", fontWeight: "800", color: "var(--primary)", border: "1px solid var(--gray-medium)" }}>
             UNTUK GLOBAL BUYERS
           </div>
           
           <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              {buyerFlow.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="flow-step-v2"
                  style={{ 
                    background: "white", 
                    padding: "30px", 
                    borderRadius: "32px",
                    display: "flex",
                    alignItems: "center",
                    gap: "25px",
                    border: "1px solid var(--gray-medium)",
                    position: "relative"
                  }}
                >
                  <div style={{ fontSize: "1.5rem", fontWeight: "900", color: "rgba(0, 59, 92, 0.1)", position: "absolute", top: "20px", right: "30px" }}>0{idx + 1}</div>
                  <div style={{ background: "rgba(0, 59, 92, 0.05)", color: "var(--primary)", width: "56px", height: "56px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{step.icon}</div>
                  <div>
                    <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--primary)", marginBottom: "8px" }}>{step.title}</h4>
                    <p style={{ fontSize: "0.95rem", color: "var(--gray-dark)", lineHeight: "1.5" }}>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>

      <style jsx>{`
        .flow-step-v2 { transition: all 0.4s ease; }
        .flow-step-v2:hover {
          border-color: var(--secondary);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </section>
  );
}
