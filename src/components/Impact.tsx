"use client";

import { motion } from 'framer-motion';
import { TrendingUp, Factory, Users, Globe2 } from 'lucide-react';
import Image from 'next/image';

const impactItems = [
  { icon: <TrendingUp size={28} />, title: "Peningkatan Devisa", desc: "Boosting national foreign exchange reserves through AI-optimized exports." },
  { icon: <Factory size={28} />, title: "Hilirisasi Industri", desc: "Accelerating industrial downstreaming by connecting local factories to global demand." },
  { icon: <Users size={28} />, title: "Lapangan Kerja", desc: "Creating high-value jobs by empowering local SMEs with global reach." },
  { icon: <Globe2 size={28} />, title: "Soft Power Indonesia", desc: "Projecting Indonesian quality and reliability on the world stage." }
];

export default function Impact() {
  return (
    <section id="impact" style={{ padding: '100px 20px', background: 'var(--primary)', color: 'white', opacity: 1 }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '20px' }}>
          National Strategic <span style={{ color: 'var(--secondary)' }}>Impact</span>
        </h2>
        <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '700px', margin: '0 auto' }}>
          Moving beyond trade. Building Indonesia into a global export powerhouse.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
        gap: '40px' 
      }}>
        {impactItems.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ 
              width: '80px', height: '80px', borderRadius: '50%', 
              background: 'rgba(255, 255, 255, 0.1)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', 
              margin: '0 auto 25px', color: 'var(--secondary)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              {item.icon}
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '15px' }}>{item.title}</h3>
            <p style={{ opacity: 0.7, lineHeight: '1.6', fontSize: '0.95rem' }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div style={{ 
        marginTop: '80px', 
        padding: '40px', 
        background: 'rgba(0, 0, 0, 0.2)', 
        borderRadius: '24px', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px'
      }}>
        <div style={{ width: '100%', height: '150px', position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
          <Image src="/impact.png" alt="national impact" layout="fill" objectFit="contain" />
        </div>
        <p style={{ textAlign: 'center', fontStyle: 'italic', opacity: 0.6 }}>
          "Leading Indonesia towards the Golden Era 2045 through data-driven export excellence."
        </p>
      </div>
    </section>
  );
}
