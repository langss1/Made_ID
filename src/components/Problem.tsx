"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, ClipboardCheck, Database, Globe2 } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      role: "UMKM Indonesia",
      icon: <TrendingDown size={32} />,
      items: [
        { title: "Standardisasi & Kontinuitas", desc: "Produk belum memenuhi standar internasional dan kontinuitas pasokan sulit dijamin." },
        { title: "Hambatan Sertifikasi", desc: "Biaya tinggi untuk HACCP/ISO & literasi digital yang rendah menghambat ekspor." },
        { title: "Gagal Repeat Order", desc: "Sebanyak 70% UMKM gagal melakukan ekspor kedua karena inkonsistensi kualitas." }
      ]
    },
    {
      role: "Global Buyer",
      icon: <Globe2 size={32} />,
      items: [
        { title: "Verifikasi Supplier", desc: "Proses verifikasi pabrik konvensional mahal, lambat, dan rawan manipulasi data." },
        { title: "Risiko Pembayaran", desc: "Kurangnya transparansi dalam negosiasi dan risiko pengiriman barang yang tidak sesuai." },
        { title: "Ketidakpastian Kualitas", desc: "Kekhawatiran akan standar etika kerja & ESG yang sulit dipantau secara remote." }
      ]
    },
    {
      role: "Government (Command Center)",
      icon: <Database size={32} />,
      items: [
        { title: "Data Silo Berantakan", desc: "Data ekspor tersebar di berbagai kementerian, mempersulit pengambilan keputusan strategis." },
        { title: "Monitoring Tidak Real-time", desc: "Intervensi kebijakan sering terlambat karena data yang tidak up-to-date dan manual." },
        { title: "Kurang Pendampingan Merata", desc: "Program sosialisasi pemerintah tidak menjangkau pelosok secara efektif dan presisi." }
      ]
    }
  ];

  return (
    <section id="problems" style={{ background: "var(--gray-light)", borderRadius: "60px 60px 0 0" }}>
      <div style={{ textAlign: "center", marginBottom: "70px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "10px", 
            background: "rgba(220, 38, 38, 0.1)", 
            color: "#dc2626", 
            padding: "8px 20px", 
            borderRadius: "50px",
            fontSize: "0.9rem",
            fontWeight: "700",
            marginBottom: "20px"
          }}
        >
          <AlertTriangle size={18} />
          REAL-WORLD CHALLENGES
        </motion.div>
        
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "var(--primary)" }}>The Current Export Bottleneck</h2>
        <p style={{ color: "var(--gray-dark)", fontSize: "1.2rem", maxWidth: "700px", margin: "15px auto" }}>
          Mengapa potensi ekspor Rp 2.500 Triliun dari Indonesia masih terhambat?
        </p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "50px", justifyContent: "center" }}>
        {problems.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            style={{ 
              flex: "1 1 350px", 
              maxWidth: "400px",
              background: "white",
              padding: "40px",
              borderRadius: "32px",
              boxShadow: "var(--shadow)",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{ 
              color: "var(--secondary)", 
              marginBottom: "30px", 
              display: "flex", 
              alignItems: "center", 
              gap: "15px" 
            }}>
              <div style={{ background: "var(--accent)", padding: "12px", borderRadius: "16px" }}>
                {group.icon}
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "800" }}>{group.role}</h3>
            </div>

            <div className="mobile-carousel">
              {group.items.map((item, iIdx) => (
                <div key={iIdx} className="carousel-item" style={{ marginBottom: "25px" }}>
                  <h4 style={{ color: "var(--primary)", fontSize: "1.1rem", marginBottom: "8px", fontWeight: "700" }}>
                    {item.title}
                  </h4>
                  <p style={{ color: "var(--gray-dark)", fontSize: "0.95rem", lineHeight: "1.5" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Mobile Carousel Indicators (Hidden on Desktop) */}
            <div className="carousel-nav" style={{ display: "none", justifyContent: "center", gap: "8px", marginTop: "10px" }}>
              <div style={{ width: "20px", height: "4px", background: "var(--secondary)", borderRadius: "2px" }} />
              <div style={{ width: "8px", height: "4px", background: "var(--gray-medium)", borderRadius: "2px" }} />
              <div style={{ width: "8px", height: "4px", background: "var(--gray-medium)", borderRadius: "2px" }} />
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-carousel {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 20px;
            padding: 10px 0;
            cursor: grab;
          }
          .carousel-item {
            flex: 0 0 100%;
            scroll-snap-align: start;
            background: var(--gray-light);
            padding: 20px;
            border-radius: 20px;
            margin-bottom: 0 !important;
          }
          .carousel-nav {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}
