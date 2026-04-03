"use client";

import { motion } from "framer-motion";
import { CheckCircle, Info } from "lucide-react";
import Image from "next/image";

export default function Manfaat() {
  const umkmBenefits = [
    "Akses Pasar Global Tanpa Perantara",
    "Peningkatan Kualitas Melalui Audit AI",
    "Sertifikasi Ekspor yang Lebih Mudah",
    "Pendanaan Berbasis Transaksi Nyata"
  ];

  const buyerBenefits = [
    "Supplier Indonesia yang Terverifikasi",
    "Laporan Kepatuhan ESG Real-time",
    "Minimalisir Risiko Pengadaan Barang",
    "Integrasi Rantai Pasok yang Efisien"
  ];

  return (
    <section id="manfaat" style={{ padding: "100px 24px", background: "var(--gray-light)", borderRadius: "100px 100px 0 0" }}>
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "var(--primary)", fontWeight: "900" }}>Manfaat Strategis MADE.id</h2>
        <p style={{ color: "var(--gray-dark)", fontSize: "1.2rem", maxWidth: "800px", margin: "15px auto" }}>
          Menciptakan nilai tambah nyata bagi UMKM Indonesia dan Buyer Global.
        </p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "80px", justifyContent: "center" }}>
        {/* UMKM Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ flex: "1 1 500px", maxWidth: "600px" }}
        >
          <div style={{ position: "relative", height: "350px", borderRadius: "32px", overflow: "hidden", marginBottom: "30px", boxShadow: "var(--shadow-lg)" }}>
            <img src="/umkm_owner.png" alt="Indonesian UMKM Owner" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", background: "linear-gradient(transparent, rgba(0,0,0,0.8))", padding: "30px" }}>
              <h3 style={{ color: "white", fontSize: "1.8rem", fontWeight: "800" }}>Untuk UMKM Indonesia</h3>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {umkmBenefits.map((benefit, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <CheckCircle size={20} color="var(--secondary)" />
                <p style={{ fontWeight: "600", color: "var(--primary)", fontSize: "0.95rem" }}>{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Buyer Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ flex: "1 1 500px", maxWidth: "600px" }}
        >
          <div style={{ position: "relative", height: "350px", borderRadius: "32px", overflow: "hidden", marginBottom: "30px", boxShadow: "var(--shadow-lg)" }}>
            <img src="/global_buyer.png" alt="Global B2B Buyer" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", background: "linear-gradient(transparent, rgba(var(--primary-rgb),0.8))", padding: "30px" }}>
              <h3 style={{ color: "white", fontSize: "1.8rem", fontWeight: "800" }}>Untuk Global Buyers</h3>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {buyerBenefits.map((benefit, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <CheckCircle size={20} color="var(--primary)" />
                <p style={{ fontWeight: "600", color: "var(--primary)", fontSize: "0.95rem" }}>{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
