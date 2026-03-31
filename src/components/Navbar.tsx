"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="glass-nav">
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '1.2rem 1.5rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)', letterSpacing: '-0.5px' }}>
          MADE<span style={{ color: 'var(--secondary)' }}>.id</span>
        </Link>
        
        <ul style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', fontWeight: '500' }}>
          <li><Link href="#features">Features</Link></li>
          <li><Link href="#buyers">For Buyers</Link></li>
          <li><Link href="#umkm">For UMKM</Link></li>
          <li><Link href="#impact">Impact</Link></li>
        </ul>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary"
        >
          Join Waitlist
        </motion.button>
      </div>
    </nav>
  );
}
