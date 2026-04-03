"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Calendar, Zap } from "lucide-react";

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const targetDate = new Date("2026-08-31T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

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
  }, [targetDate]);

  if (!mounted) return null;

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds }
  ];

  return (
    <section id="countdown" style={{ padding: "0 24px 100px", position: "relative" }}>
      <div style={{ 
        background: "var(--primary)", 
        borderRadius: "40px", 
        overflow: "hidden", 
        position: "relative",
        padding: "100px 40px",
        textAlign: "center",
        boxShadow: "var(--shadow-lg)"
      }}>
        {/* Video Background Layer */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.2, zIndex: 0 }}>
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
              gap: "10px", 
              background: "rgba(255,255,255,0.1)", 
              color: "white", 
              padding: "10px 25px", 
              borderRadius: "50px", 
              marginBottom: "30px",
              backdropFilter: "blur(10px)",
              fontSize: "0.9rem",
              fontWeight: "700"
            }}
          >
            <Calendar size={18} />
            TARGET LAUNCH: AUGUST 31, 2026
          </motion.div>

          <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "white", fontWeight: "900", marginBottom: "40px" }}>
            The Global Export Revolution <br /> Starts Now.
          </h2>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
            {units.map((unit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{ 
                  background: "rgba(255,255,255,0.05)", 
                  padding: "30px", 
                  borderRadius: "24px", 
                  minWidth: "140px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)"
                }}
              >
                <div style={{ fontSize: "3rem", fontWeight: "900", color: "var(--secondary)", display: "block" }}>
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div style={{ color: "white", textTransform: "uppercase", letterSpacing: "2px", fontSize: "0.75rem", fontWeight: "700", marginTop: "5px" }}>
                  {unit.label}
                </div>
              </motion.div>
            ))}
          </div>

          <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "50px auto 0", fontSize: "1.1rem" }}>
            Kami sedang mematangkan "Export OS Engine" untuk menjamin presisi Audit AI di seluruh wilayah Indonesia.
          </p>
          
          <div style={{ marginTop: "40px", display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
             <button className="btn-primary" style={{ background: "white", color: "var(--primary)" }}>
                Watch Teaser <Play size={18} fill="var(--primary)" />
             </button>
             <button className="btn-primary" style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.3)" }}>
                View Build Log <Zap size={18} />
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
