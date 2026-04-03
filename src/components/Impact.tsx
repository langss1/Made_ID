"use client";

import { motion } from "framer-motion";
import { TrendingUp, Award, Users, Globe } from "lucide-react";

export default function Impact() {
  const impacts = [
    { label: "Pertumbuhan Devisa", value: "+24%", desc: "Target kenaikan devisa riil dari ekspor non-migas UMKM melalui efisiensi audit AI.", icon: <TrendingUp /> },
    { label: "Hilirisasi Digital", value: "3.500+", desc: "UMKM bertransformasi dari penjual produk mentah menjadi produk bernilai tambah tinggi.", icon: <Award /> },
    { label: "Penyerapan Kerja", value: "1.2jt", desc: "Menciptakan lapangan kerja baru di sektor produksi & pengolahan ekspor yang berkelanjutan.", icon: <Users /> },
    { label: "Soft Power Niaga", value: "Global", desc: "Meningkatkan kepercayaan dunia pada produk asli Indonesia (Made in Indonesia).", icon: <Globe /> }
  ];

  return (
    <section id="impact" style={{ padding: "100px 24px", background: "white" }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "60px", marginBottom: "80px" }}>
        <div style={{ flex: "1 1 500px" }}>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "var(--primary)", fontWeight: "900", marginBottom: "20px" }}>National Strategic Impact</h2>
          <p style={{ color: "var(--gray-dark)", fontSize: "1.2rem", lineHeight: "1.6" }}>
            MADE.id bukan sekadar platform dagang; kami adalah infrastruktur bagi transformasi ekonomi nasional. 
            Membangun kedaulatan data ekspor & kemandirian UMKM Indonesia.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "25px", flex: "1 1 500px" }}>
          {impacts.map((impact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{ padding: "30px", background: "var(--gray-light)", borderRadius: "24px" }}
            >
              <div style={{ color: idx % 2 === 0 ? "var(--secondary)" : "var(--primary)", marginBottom: "15px" }}>
                {impact.icon}
              </div>
              <div style={{ fontSize: "2rem", fontWeight: "900", color: "var(--primary)", marginBottom: "5px" }}>{impact.value}</div>
              <div style={{ fontWeight: "800", color: "var(--secondary)", fontSize: "0.9rem", marginBottom: "10px", textTransform: "uppercase" }}>{impact.label}</div>
              <p style={{ fontSize: "0.85rem", color: "var(--gray-dark)", lineHeight: "1.4" }}>{impact.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
