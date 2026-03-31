"use client";

import { motion } from 'framer-motion';
import { Globe, PackageOpen } from 'lucide-react';

export default function Problem() {
  return (
    <section id="problem" style={{ padding: '100px 20px', background: 'var(--gray-light)' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '15px' }}>
          Conventional Trade is <span style={{ color: '#E53E3E' }}>Broken</span>
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          Traditional marketplaces aren't built for complex export compliance.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
        gap: '40px',
        maxWidth: '1000px',
        margin: '0 auto' 
      }}>
        {/* Card 1: Buyers */}
        <motion.div 
          whileHover={{ y: -10 }}
          style={{ 
            background: 'white', 
            padding: '40px', 
            borderRadius: '24px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            border: '1px solid var(--gray-medium)'
          }}
        >
          <div style={{ background: 'rgba(235, 248, 255, 1)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
            <Globe color="#3182CE" />
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '15px' }}>Global Buyers</h3>
          <p style={{ color: '#555', lineHeight: '1.6', fontSize: '1.1rem' }}>
            "Struggling to find verified, compliant products? Tired of manually auditing factories across the ocean?"
          </p>
        </motion.div>

        {/* Card 2: UMKM */}
        <motion.div 
          whileHover={{ y: -10 }}
          style={{ 
            background: 'white', 
            padding: '40px', 
            borderRadius: '24px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            border: '1px solid var(--gray-medium)'
          }}
        >
          <div style={{ background: 'rgba(240, 255, 244, 1)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
            <PackageOpen color="#38A169" />
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '15px' }}>Indonesian UMKM</h3>
          <p style={{ color: '#555', lineHeight: '1.6', fontSize: '1.1rem' }}>
            "Confused by complex export regulations? Quality certifications keeping you away from global markets?"
          </p>
        </motion.div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <p style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary)' }}>
          MADE.id solves both with <span style={{ color: 'var(--secondary)' }}>Agentic AI.</span>
        </p>
      </div>
    </section>
  );
}
