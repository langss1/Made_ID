"use client";

import { motion } from "framer-motion";
import { UserCheck, FileText, Search, Ship, CheckCircle2, Factory } from "lucide-react";

export default function Flow() {
  const umkmFlow = [
    { title: "Onboarding & Audit AI", icon: <UserCheck />, desc: "Daftar & biarkan AI mengaudit kesiapan ekspor produk Anda secara mendalam." },
    { title: "Standardisasi Produk", icon: <FileText />, desc: "AI merekomendasikan perbaikan & standardisasi sesuai target pasar global." },
    { title: "Global Matching", icon: <Ship />, desc: "MADE.id menghubungkan produk Anda langsung dengan buyer yang relevan." }
  ];

  const buyerFlow = [
    { title: "Cari Produk Terverifikasi", icon: <Search />, desc: "Temukan produk Indonesia yang sudah melewati audit AI & verifikasi digital." },
    { title: "Verifikasi Pabrik Digital", icon: <Factory />, desc: "Lihat data pabrik, kepatuhan etika, & ESG secara real-time dari platform." },
    { title: "Transaksi Aman", icon: <CheckCircle2 />, desc: "Lakukan negosiasi & transaksi dengan jaminan transparansi dari sistem." }
  ];

  return (
    <section id="flow" style={{ background: "white", padding: "120px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "var(--primary)", fontWeight: "900" }}>The MADE.id Ecosystem Flow</h2>
        <p style={{ color: "var(--gray-dark)", fontSize: "1.2rem", maxWidth: "800px", margin: "15px auto" }}>
          Dirancang untuk menyederhanakan ekspor konvensional yang rumit menjadi transaksi cerdas.
        </p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", justifyContent: "center" }}>
        {/* UMKM Flow */}
        <div style={{ flex: "1 1 500px", maxWidth: "600px" }}>
          <div style={{ 
            display: "inline-block", 
            padding: "8px 20px", 
            background: "rgba(0, 163, 108, 0.1)", 
            color: "var(--secondary)", 
            borderRadius: "50px", 
            fontWeight: "800",
            marginBottom: "30px",
            fontSize: "0.9rem"
          }}>
            UNTUK UMKM INDONESIA
          </div>
          <div style={{ paddingLeft: "20px" }}>
            {umkmFlow.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flow-step"
              >
                <div className="flow-number">{idx + 1}</div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "5px" }}>
                  <span style={{ color: "var(--secondary)" }}>{step.icon}</span>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: "800" }}>{step.title}</h3>
                </div>
                <p style={{ color: "var(--gray-dark)", fontSize: "1rem", lineHeight: "1.6" }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Buyer Flow */}
        <div style={{ flex: "1 1 500px", maxWidth: "600px" }}>
          <div style={{ 
            display: "inline-block", 
            padding: "8px 20px", 
            background: "rgba(0, 59, 92, 0.1)", 
            color: "var(--primary)", 
            borderRadius: "50px", 
            fontWeight: "800",
            marginBottom: "30px",
            fontSize: "0.9rem"
          }}>
            UNTUK GLOBAL BUYERS
          </div>
          <div style={{ paddingLeft: "20px" }}>
            {buyerFlow.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flow-step"
              >
                <div className="flow-number" style={{ background: "var(--primary)" }}>{idx + 1}</div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "5px" }}>
                  <span style={{ color: "var(--primary)" }}>{step.icon}</span>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: "800" }}>{step.title}</h3>
                </div>
                <p style={{ color: "var(--gray-dark)", fontSize: "1rem", lineHeight: "1.6" }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
