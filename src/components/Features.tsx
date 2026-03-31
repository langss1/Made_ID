"use client";

import { motion } from 'framer-motion';
import { Cpu, Eye, ShieldCheck, BarChart4, Headphones, LayoutDashboard } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    title: "For Global Buyers",
    subtitle: "AI Prompt-Based Engine & Virtual Audit",
    description: "Search for suppliers using natural language. Our AI evaluates, verifies, and provides virtual on-site audits via multi-modal AI and VR ready interfaces.",
    icons: [<Cpu key="1" />, <Eye key="2" />],
    images: ["/ai_brain.png", "/vr_headset.png"]
  },
  {
    title: "For Indonesian UMKM",
    subtitle: "Export Readiness & Compliance Twin",
    description: "Automated Export Readiness Score and Compliance Gap Analysis. Get your SME ready for global certification in days, not months.",
    icons: [<ShieldCheck key="1" />, <Headphones key="2" />]
  },
  {
    title: "For Government",
    subtitle: "Export Command Center",
    description: "Real-time national export dashboard providing data-driven policy insights and hilirisasi monitoring at a glance.",
    icons: [<BarChart4 key="1" />, <LayoutDashboard key="2" />]
  }
];

export default function Features() {
  return (
    <section id="features" style={{ padding: '100px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '20px' }}>
          Core Infrastructure
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
          Three dedicated engines driving the future of Indonesian trade.
        </p>
      </div>

      <div className="grid-3">
        {features.map((feature, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="glowing-card"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '20px',
              border: idx === 0 ? '2px solid var(--secondary)' : '1px solid var(--gray-medium)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {idx === 0 && (
              <div style={{ 
                position: 'absolute', top: '15px', right: '15px', 
                background: 'var(--secondary)', color: 'white', 
                padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '700'
              }}>
                POPULAR
              </div>
            )}
            
            <div style={{ display: 'flex', gap: '10px' }}>
              <div className="feature-icon">
                {feature.icons[0]}
              </div>
              {feature.icons[1] && (
                <div className="feature-icon" style={{ background: 'rgba(0, 59, 92, 0.1)', color: 'var(--primary)' }}>
                  {feature.icons[1]}
                </div>
              )}
            </div>

            <div>
              <h4 style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '10px' }}>
                {feature.title}
              </h4>
              <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '15px' }}>
                {feature.subtitle}
              </h3>
              <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                {feature.description}
              </p>
            </div>

            <div style={{ marginTop: 'auto' }}>
              {feature.images && (
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                  {feature.images.map((img, i) => (
                    <div key={i} style={{ width: '40px', height: '40px', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #eee' }}>
                      <Image src={img} alt="icon" layout="fill" objectFit="cover" />
                    </div>
                  ))}
                </div>
              )}
              <button style={{ 
                background: 'transparent', border: 'none', color: 'var(--secondary)', 
                fontWeight: '700', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px',
                padding: '0'
              }}>
                Learn More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
