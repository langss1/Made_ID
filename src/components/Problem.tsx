"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Zap, Store, Globe, Landmark, Newspaper, FileCheck, Search, Database as LucideDatabase, ShieldAlert, AlertCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

// Mobile Slider Component for each category
const MobileCategorySlider = ({ items, color }: { items: any[], color: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  if (!mounted) return null;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="mobile-gap-slider" style={{ position: "relative", width: "100%" }}>
      <div style={{ position: "relative", minHeight: "580px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="gap-card"
            style={{ 
              background: "white",
              borderRadius: "40px",
              border: `1px solid ${color}44`,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0, 59, 92, 0.08)"
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "200px" }}>
              <Image 
                src={items[currentIndex].image} 
                alt={items[currentIndex].title} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))" }} />
            </div>

            <div style={{ padding: "30px" }}>
              <div style={{ display: "inline-block", background: "rgba(255, 0, 0, 0.05)", color: "#ef4444", padding: "6px 14px", borderRadius: "8px", fontSize: "0.7rem", fontWeight: "900", marginBottom: "15px" }}>
                OBSTACLE ACTIVE
              </div>
              <h4 style={{ fontSize: "1.3rem", fontWeight: "950", color: "var(--primary)", marginBottom: "10px", lineHeight: "1.2" }}>
                {items[currentIndex].title}
              </h4>
              <p style={{ fontSize: "0.95rem", color: "#4A5568", lineHeight: "1.6", marginBottom: "25px" }}>
                {items[currentIndex].desc}
              </p>
              <a href={items[currentIndex].link} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%", padding: "14px", background: "white", border: "2px solid var(--gray-medium)", borderRadius: "16px", color: "var(--primary)", fontWeight: "800", textDecoration: "none", fontSize: "0.9rem" }}>
                Investigate Source <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px", marginTop: "20px" }}>
        <button 
          onClick={prevSlide} 
          suppressHydrationWarning
          style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid var(--gray-medium)", background: "white", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <ChevronLeft size={20} style={{ marginLeft: "-2px" }} />
        </button>
        <div style={{ display: "flex", gap: "6px" }}>
          {items.map((_, i) => (
            <div key={i} style={{ width: i === currentIndex ? "16px" : "6px", height: "6px", borderRadius: "10px", background: i === currentIndex ? color : "var(--gray-medium)", transition: "0.3s" }} />
          ))}
        </div>
        <button 
          onClick={nextSlide} 
          suppressHydrationWarning
          style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid var(--gray-medium)", background: "white", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <ChevronRight size={20} style={{ marginLeft: "2px" }} />
        </button>
      </div>
    </div>
  );
};

export default function Problem() {
  const categories = [
    {
      label: "GAP: UMKM INDONESIA",
      icon: <Store size={22} />,
      color: "var(--secondary)",
      items: [
        { 
          title: "Critical Traceability Gap", 
          icon: <Search size={22} color="var(--secondary)" />,
          image: "/umkm_traceability_v2_1775302714290.png",
          desc: "UMKM Indonesia terancam gagal ekspor total ke Uni Eropa karena belum mampu menyajikan data geo-tagging & compliance EUDR yang presisi.",
          link: "https://ukmindonesia.id/baca-deskripsi-posts/peluang-ekspor-umkm-indonesia-terancam-tanpa-geo-tagging-dan-sistem-traceability-produk" 
        },
        { 
          title: "Low Literacy & Quality Bottleneck", 
          icon: <FileCheck size={22} color="var(--secondary)" />,
          image: "/umkm_literacy_v2_1775302732537.png",
          desc: "Target kontribusi ekspor 17% jalan di tempat akibat rendahnya pemahaman standar kualitas internasional & sertifikasi bagi pelaku UMKM lokal.",
          link: "https://umkm.kompas.com/read/2022/12/17/090000283/tahun-2024-pemerintah-targetkan-kontribusi-ekspor-produk-umkm-tembus-17-persen" 
        },
        { 
          title: "Inaccessible Mentorship", 
          icon: <Zap size={22} color="var(--secondary)" />,
          image: "/umkm_mentorship_v2_1775302753025.png",
          desc: "Metode pendampingan (handholding) konvensional tidak mampu menjangkau jutaan UMKM di pelosok, membuat kesiapan mereka tertinggal jauh.",
          link: "https://www.indonesiaeximbank.go.id/public-information/umkm-indonesia-tembus-pasar-eropa-melalui-marketing-handholding" 
        }
      ]
    },
    {
      label: "GAP: GLOBAL BUYERS",
      icon: <Globe size={22} />,
      color: "var(--primary)",
      items: [
        { 
          title: "Opaque Supply Chain Risks", 
          icon: <LucideDatabase size={22} color="var(--primary)" />,
          image: "/buyer_supply_chain_v2_1775302768707.png",
          desc: "Buyer global kesulitan memvalidasi asal-usul komoditas kopi/sawit, meningkatkan risiko denda regulasi antideforestasi di negara tujuan.",
          link: "https://www.cnbcindonesia.com/news/20251017162336-4-676882/sistem-traceability-komoditas-jadi-jawaban-perdagangan-berkelanjutan" 
        },
        { 
          title: "ESG Trust Deficit", 
          icon: <ShieldAlert size={22} color="var(--primary)" />,
          image: "/buyer_esg_trust_v2_1775302787101.png",
          desc: "Ketidakpastian verifikasi standar etika & lingkungan pada supplier Indonesia membuat buyer dari pasar AS enggan melakukan transaksi jangka panjang.",
          link: "https://www.vibizmedia.com/index.php/2026/03/27/strategi-keberlanjutan-dan-ketertelusuran-perkuat-ekspor-tuna-indonesia-di-as/" 
        },
        { 
          title: "Verification Friction", 
          icon: <AlertCircle size={22} color="var(--primary)" />,
          image: "/buyer_verification_v2_1775302803817.png",
          desc: "Proses audit manual yang mahal & lambat menghambat buyer Eropa untuk memverifikasi kelayakan teknis UMKM dengan cepat & efisien.",
          link: "https://www.cnbcindonesia.com/news/20251019161635-4-677226/mau-produk-pertanian-tembus-eropa-ini-yang-harus-disiapkan" 
        }
      ]
    },
    {
      label: "GAP: GOVERNMENT RI",
      icon: <Landmark size={22} />,
      color: "#6366f1",
      items: [
        { 
          title: "Data Silo Paralysis", 
          icon: <LucideDatabase size={22} color="#6366f1" />,
          image: "/govt_data_silos_v2_1775302821504.png",
          desc: "Data potensi ekspor terfragmentasi di lintas lembaga, mengakibatkan tumpang tindih kebijakan & intervensi yang tidak tepat sasaran.",
          link: "https://kilaskementerian.kompas.com/kemendag/read/2024/12/07/120748026/kemendag-sinergikan-program-umkm-bisa-ekspor-dengan-perguruan-tinggi-dan" 
        },
        { 
          title: "Disconnected Digital Ecosystem", 
          icon: <Newspaper size={22} color="#6366f1" />,
          image: "/govt_disconnected_v2_1775302840836.png",
          desc: "Ekosistem promosi ekspor belum terintegrasi secara nasional, memperlambat proses sertifikasi & validasi UMKM di mata dunia.",
          link: "https://kilaskementerian.kompas.com/kemendag/read/2024/12/03/212625026/gencarkan-umkm-bisa-ekspor-kemendag-gelar-pekan-pengembangan-ekspor-di-jatim" 
        },
        { 
          title: "Rural-Urban Inclusion Gap", 
          icon: <Store size={22} color="#6366f1" />,
          image: "/govt_rural_urban_v2_1775302859459.png",
          desc: "Potensi besar produk desa belum terdigitalisasi dengan baik, membuat mereka tertahan oleh masalah 'akses digital' untuk pasar global.",
          link: "https://nasional.kompas.com/read/2025/09/10/09225641/program-desa-bisa-ekspor-siap-jadi-lokomotif-ekspor-indonesia" 
        }
      ]
    }
  ];

  return (
    <section id="problem" suppressHydrationWarning style={{ padding: "0 24px 140px", background: "#fcfcfc", position: "relative" }}>
      <div style={{ textAlign: "center", marginBottom: "100px" }}>
        <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "var(--primary)", fontWeight: "900", letterSpacing: "-0.05em", lineHeight: "1.1" }}>
          Unresolved Export <br /> <span style={{ color: "var(--secondary)" }}>Bottlenecks.</span>
        </h2>
        <p style={{ color: "var(--gray-dark)", fontSize: "1.2rem", maxWidth: "700px", margin: "20px auto", lineHeight: "1.7", fontWeight: "500" }}>
          Menganalisis penghambat mendasar yang menghentikan potensi ekspor Indonesia dari skala global yang seharusnya.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
        {categories.map((cat, idx) => (
          <div key={idx}>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between",
              marginBottom: "40px",
              paddingLeft: "25px",
              position: "relative"
            }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "6px", background: cat.color, borderRadius: "10px" }} />
              <div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "950", color: "var(--primary)", letterSpacing: "-0.02em" }}>{cat.label}</h3>
              </div>
              <div style={{ background: "white", padding: "14px", borderRadius: "18px", color: cat.color, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                {cat.icon}
              </div>
            </div>

            {/* PC Desktop Grid */}
            <div className="desktop-gap-grid">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "35px" }}>
                {cat.items.map((item, iIdx) => (
                  <motion.div
                    key={iIdx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: iIdx * 0.1 }}
                    className="gap-card"
                    style={{ 
                      background: "white",
                      borderRadius: "40px",
                      border: "1px solid rgba(0, 59, 92, 0.08)",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.4s cubic-bezier(0.19, 1, 0.22, 1)"
                    }}
                  >
                    <div style={{ position: "relative", width: "100%", height: "220px", background: "#eee" }}>
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "cover" }} 
                      />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))" }} />
                      <div style={{ position: "absolute", top: "20px", left: "20px", background: "white", color: cat.color, padding: "10px", borderRadius: "14px" }}>
                        {item.icon}
                      </div>
                    </div>
                    <div style={{ padding: "35px" }}>
                      <div style={{ display: "inline-block", background: "rgba(255, 0, 0, 0.05)", color: "#ef4444", padding: "6px 14px", borderRadius: "8px", fontSize: "0.75rem", fontWeight: "900", marginBottom: "20px" }}>OBSTACLE ACTIVE</div>
                      <h4 style={{ fontSize: "1.45rem", fontWeight: "950", color: "var(--primary)", marginBottom: "15px", lineHeight: "1.2" }}>{item.title}</h4>
                      <p style={{ fontSize: "1.05rem", color: "#4A5568", lineHeight: "1.65", marginBottom: "30px" }}>{item.desc}</p>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="source-btn" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", color: "var(--primary)", fontSize: "0.95rem", fontWeight: "800", background: "white", width: "100%", padding: "16px", borderRadius: "18px", border: "2px solid var(--gray-medium)", textDecoration: "none" }}>Investigate Source <ExternalLink size={16} /></a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Slider */}
            <div className="mobile-gap-slider-wrapper">
              <MobileCategorySlider items={cat.items} color={cat.color} />
            </div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .gap-card:hover {
          border-color: var(--secondary);
          box-shadow: 0 40px 80px -20px rgba(0, 59, 92, 0.12);
          transform: translateY(-12px);
        }
        .mobile-gap-slider-wrapper { display: none; }
        @media (max-width: 900px) {
          .desktop-gap-grid { display: none !important; }
          .mobile-gap-slider-wrapper { display: block !important; }
        }
      `}</style>
    </section>
  );
}
