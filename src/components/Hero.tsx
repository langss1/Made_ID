"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Saya butuh supplier furniture eco-friendly untuk pasar EU...";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        setTimeout(() => { i = 0; }, 2000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-gradient" style={{ textAlign: 'center', padding: '120px 20px', position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span style={{ 
          background: 'rgba(0, 163, 108, 0.1)', 
          color: 'var(--secondary)', 
          padding: '8px 16px', 
          borderRadius: '50px', 
          fontSize: '0.9rem', 
          fontWeight: '700',
          marginBottom: '20px',
          display: 'inline-block'
        }}>
          INTUIGENT EXPORT OS
        </span>
        
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
          fontWeight: '800', 
          color: 'var(--primary)', 
          lineHeight: '1.1',
          marginBottom: '20px',
          letterSpacing: '-1.5px'
        }}>
          Bridging UMKM Indonesia <br />
          <span style={{ color: 'var(--secondary)' }}>to the World</span>
        </h1>
        
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#555', 
          maxWidth: '700px', 
          margin: '0 auto 50px',
          lineHeight: '1.6'
        }}>
          Transforming Indonesia’s Export with AI-Driven Intelligence. 
          Connect, verify, and trade globally with Agentic AI.
        </p>

        {/* AI Prompt Simulator */}
        <div className="ai-search-bar">
          <Search size={22} color="var(--primary)" />
          <div style={{ position: 'relative', flex: 1, textAlign: 'left' }}>
            <span style={{ fontSize: '1.1rem', color: '#333' }}>
              {displayText}
            </span>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              style={{ width: '2px', height: '1.2rem', background: 'var(--secondary)', display: 'inline-block', verticalAlign: 'middle', marginLeft: '2px' }}
            />
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            className="btn-primary" 
            style={{ borderRadius: '40px', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Sparkles size={18} />
            Generate Matches
          </motion.button>
        </div>
        
        <div style={{ marginTop: '30px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#666', fontSize: '0.9rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--secondary)' }} />
            Agentic AI Verification
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#666', fontSize: '0.9rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--secondary)' }} />
            Real-time Compliance
          </div>
        </div>
      </motion.div>
    </section>
  );
}
