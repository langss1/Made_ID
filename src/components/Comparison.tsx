"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, Shield, Zap, Globe, Cpu, Sparkles } from "lucide-react";

export default function Comparison() {
  const comparisonData = [
    { 
      feature: "Discovery Method", 
      market: "Passive Keyword Search", 
      made: "AI Decision Engine (Active)", 
      madeSub: "Agen cerdas yang proaktif mencari & memfilter data."
    },
    { 
      feature: "Compliance Check", 
      market: "N/A (Manual Risk)", 
      made: "Automated Evidence-based Scan", 
      madeSub: "Verifikasi standar EUDR, ESG, dan HACCP instan.",
      icon: true
    },
    { 
      feature: "Product Focus", 
      market: "Volume & Price Wars", 
      made: "Quality & High-Value Output", 
      madeSub: "Hilirisasi produk dengan nilai tambah tinggi."
    },
    { 
      feature: "Verification", 
      market: "Self-declared information", 
      made: "Virtual Audit & AI Score", 
      madeSub: "Audit pabrik digital tanpa harus ke lokasi."
    },
    { 
      feature: "Strategic Value", 
      market: "One-off transactions", 
      made: "Continuous Supply Chain Intel", 
      madeSub: "Membangun hubungan niaga jangka panjang."
    },
  ];

  return (
    <section id="comparison" style={{ padding: "140px 24px", background: "white" }}>
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "900", color: "var(--primary)", letterSpacing: "-0.04em" }}>
          Why We Are <span style={{ color: "var(--secondary)" }}>Different.</span>
        </h2>
        <p style={{ color: "var(--gray-dark)", fontSize: "1.15rem", maxWidth: "600px", margin: "20px auto", fontWeight: "500" }}>
          Lebih dari sekadar marketplace. Kami adalah sistem pendukung keputusan yang cerdas.
        </p>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Comparison Desktop Grid */}
        <div className="desktop-comparison-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1.2fr", gap: "2px", background: "var(--gray-medium)", borderRadius: "32px", overflow: "hidden", border: "1px solid var(--gray-medium)" }}>
          {/* Header Row */}
          <div style={{ background: "white", padding: "35px", fontWeight: "900", color: "var(--gray-dark)", letterSpacing: "0.1em", fontSize: "0.85rem", textTransform: "uppercase" }}>Key Feature</div>
          <div style={{ background: "white", padding: "35px", fontWeight: "900", color: "var(--gray-dark)", letterSpacing: "0.1em", fontSize: "0.85rem", textTransform: "uppercase" }}>Traditional Marketplaces</div>
          <div style={{ background: "var(--primary)", padding: "35px", color: "white", fontWeight: "900", letterSpacing: "0.1em", fontSize: "0.85rem", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "10px" }}>
            <Sparkles size={18} color="var(--secondary)" /> MADE.id Engine
          </div>

          {/* Data Rows */}
          {comparisonData.map((row, idx) => (
            <React.Fragment key={idx}>
              <div style={{ background: "white", padding: "35px", borderBottom: "1px solid var(--gray-light)", display: "flex", alignItems: "center" }}>
                <span style={{ fontWeight: "800", color: "var(--primary)", fontSize: "1.1rem" }}>{row.feature}</span>
              </div>
              <div style={{ background: "rgba(255,255,255,0.7)", padding: "35px", borderBottom: "1px solid var(--gray-light)", color: "var(--gray-dark)", fontWeight: "500", display: "flex", alignItems: "center", gap: "10px" }}>
                {row.feature === "Compliance Check" ? <X size={20} color="#ef4444" /> : null}
                {row.market}
              </div>
              <div style={{ background: "rgba(0, 59, 92, 0.02)", padding: "35px", borderBottom: "1px solid var(--gray-light)", position: "relative" }}>
                 <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--primary)", fontWeight: "800", fontSize: "1.15rem", marginBottom: "8px" }}>
                    <Check size={22} color="var(--secondary)" /> {row.made}
                 </div>
                 <p style={{ fontSize: "0.9rem", color: "var(--gray-dark)", fontWeight: "500" }}>{row.madeSub}</p>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Comparison View: Condensed Cards */}
        <div className="mobile-comparison-view" style={{ display: "none", flexDirection: "column", gap: "25px" }}>
           {comparisonData.map((row, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, x: -10 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               style={{ 
                 background: "white", 
                 borderRadius: "28px", 
                 border: "1px solid var(--gray-medium)",
                 overflow: "hidden",
                 boxShadow: "0 10px 30px rgba(0, 59, 92, 0.05)"
               }}
             >
                <div style={{ background: "var(--gray-light)", padding: "18px 24px", borderBottom: "1px solid var(--gray-medium)" }}>
                   <span style={{ fontWeight: "900", color: "var(--primary)", fontSize: "1rem", letterSpacing: "-0.01em" }}>{row.feature}</span>
                </div>
                <div style={{ padding: "24px" }}>
                   <div style={{ marginBottom: "20px" }}>
                      <div style={{ fontSize: "0.7rem", fontWeight: "800", color: "var(--gray-dark)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>Traditional Marketplace</div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gray-dark)", fontWeight: "600", fontSize: "0.95rem" }}>
                         <X size={16} color="#ef4444" /> {row.market}
                      </div>
                   </div>
                   <div style={{ background: "rgba(0, 163, 108, 0.03)", padding: "15px", borderRadius: "18px", border: "1px solid rgba(0, 163, 108, 0.1)" }}>
                      <div style={{ fontSize: "0.7rem", fontWeight: "900", color: "var(--secondary)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>MADE.id Engine</div>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "var(--primary)", fontWeight: "900", fontSize: "1rem", lineHeight: "1.3" }}>
                         <Check size={18} color="var(--secondary)" style={{ marginTop: "2px" }} /> 
                         <div>
                            {row.made}
                            <p style={{ fontSize: "0.85rem", color: "var(--gray-dark)", fontWeight: "500", marginTop: "6px", lineHeight: "1.4" }}>{row.madeSub}</p>
                         </div>
                      </div>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Info Banner */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           style={{ 
             marginTop: "60px", 
             background: "rgba(0, 59, 92, 0.03)", 
             padding: "30px", 
             borderRadius: "28px", 
             display: "flex", 
             alignItems: "center", 
             gap: "20px",
             border: "1px solid rgba(0, 59, 92, 0.08)"
           }}
           className="comparison-banner"
        >
          <div style={{ background: "var(--primary)", color: "white", padding: "12px", borderRadius: "14px", flexShrink: 0 }}>
             <Cpu size={24} />
          </div>
          <p style={{ fontSize: "1.1rem", color: "var(--primary)", fontWeight: "700", lineHeight: "1.5" }}>
            Traditional marketplaces are **90% passive catalogs**. <br />
            MADE.id is the **100% active Agentic Operating System** for global trade.
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
           .desktop-comparison-grid { display: none !important; }
           .mobile-comparison-view { display: flex !important; }
           .comparison-banner { flex-direction: column; text-align: center; padding: 25px !important; }
           .comparison-banner p { font-size: 0.95rem !important; }
        }
      `}</style>
    </section>
  );
}
