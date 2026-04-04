"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Calendar, Clock, Rocket } from "lucide-react";

const TARGET_DATE = new Date("2026-08-31T00:00:00").getTime();

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [TARGET_DATE]);

  if (!mounted) return null;

  const devStatus = [
    { label: "PoC & Validation", status: "Finished", icon: <CheckCircle2 size={16} />, color: "var(--secondary)" },
    { label: "Product Dev", status: "Ongoing", icon: <Loader2 size={16} className="animate-spin" />, color: "#fbbf24" },
    { label: "Core AI Testing", status: "Upcoming", icon: <Clock size={16} />, color: "rgba(255,255,255,0.4)" },
    { label: "Launch", status: "Upcoming", icon: <Rocket size={16} />, color: "rgba(255,255,255,0.4)" }
  ];

  const units = [
    { label: "HARI", value: timeLeft.days },
    { label: "JAM", value: timeLeft.hours },
    { label: "MENIT", value: timeLeft.minutes },
    { label: "DETIK", value: timeLeft.seconds }
  ];

  return (
    <section id="countdown" suppressHydrationWarning style={{ padding: "0 24px 100px", position: "relative" }}>
      <div style={{ 
        background: "var(--primary)", 
        borderRadius: "40px", 
        overflow: "hidden", 
        position: "relative",
        padding: "100px 40px",
        textAlign: "center",
        boxShadow: "var(--shadow-lg)"
      }} className="countdown-box">
        {/* Video Background Layer */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.15, zIndex: 0 }}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src="/build.mp4" type="video/mp4" />
          </video>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "8px", 
              background: "rgba(255,255,255,0.1)", 
              color: "white", 
              padding: "8px 18px", 
              borderRadius: "50px", 
              marginBottom: "30px",
              backdropFilter: "blur(10px)",
              fontSize: "0.85rem",
              fontWeight: "700"
            }}
          >
            <Calendar size={16} />
            TARGET LAUNCH: AUGUST 2026
          </motion.div>

          <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "white", fontWeight: "900", marginBottom: "50px", letterSpacing: "-0.04em" }}>
            The Global Export Revolution <br /> Starts Now.
          </h2>

          <div style={{ 
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            maxWidth: "900px",
            margin: "0 auto 60px"
          }} className="countdown-grid">
            {units.map((unit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="countdown-card"
                style={{ 
                  background: "white", 
                  padding: "25px 10px", 
                  borderRadius: "24px", 
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  width: "100%"
                }}
              >
                <div style={{ fontSize: "3rem", fontWeight: "950", color: "var(--primary)", lineHeight: "1" }} className="unit-value">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div style={{ color: "rgba(0, 59, 92, 0.4)", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.75rem", fontWeight: "800", marginTop: "10px" }} className="unit-label">
                  {unit.label}
                </div>
              </motion.div>
            ))}
          </div>

          <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "0 auto 50px", fontSize: "1.1rem" }} className="countdown-desc">
            Kami sedang mematangkan "Export OS Engine" untuk menjamin presisi Audit AI di seluruh wilayah Indonesia.
          </p>
          
          {/* Development Status Tracker */}
          <div style={{ 
            marginTop: "60px", 
            borderTop: "1px solid rgba(255,255,255,0.1)", 
            paddingTop: "50px",
            maxWidth: "900px",
            margin: "60px auto 0"
          }}>
            <h4 style={{ color: "white", fontWeight: "800", fontSize: "0.85rem", letterSpacing: "0.15em", marginBottom: "30px", textTransform: "uppercase" }}>
              Development Lifecycle Status
            </h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "15px" }} className="lifecycle-grid">
              {devStatus.map((step, idx) => (
                <div key={idx} style={{ 
                  background: "rgba(255,255,255,0.03)", 
                  padding: "18px", 
                  borderRadius: "20px", 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "10px",
                  border: "1px solid rgba(255,255,255,0.05)",
                  textAlign: "left"
                }}>
                  <div style={{ color: step.color }}>{step.icon}</div>
                  <div>
                    <div style={{ color: "white", fontSize: "0.85rem", fontWeight: "700" }}>{step.label}</div>
                    <div style={{ color: step.color, fontSize: "0.7rem", fontWeight: "800", textTransform: "uppercase" }}>{step.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .countdown-grid { 
            gap: 5px !important; 
            padding: 0 4px !important;
            margin-bottom: 40px !important;
          }
          .countdown-card { 
            padding: 15px 4px !important; 
            border-radius: 12px !important; 
            min-width: 0 !important;
          }
          .unit-value { font-size: 1.3rem !important; }
          .unit-label { font-size: 0.45rem !important; margin-top: 4px !important; letter-spacing: 0px !important; }
          
          .countdown-box { padding: 40px 8px !important; }
          h2 { font-size: 1.7rem !important; margin-bottom: 30px !important; }
          .countdown-desc { font-size: 0.85rem !important; padding: 0 8px !important; }
          .lifecycle-grid { 
            grid-template-columns: repeat(2, 1fr) !important; 
            gap: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
