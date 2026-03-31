"use client";

import { motion } from 'framer-motion';
import { SendHorizontal, MessageSquare, Mail, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

// Custom Brand Icons as SVGs to replace missing lucide-react brand icons
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: 'var(--gray-light)', padding: '80px 20px 40px', borderTop: '1px solid var(--gray-medium)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Final CTA Section */}
        <section style={{ 
          background: 'white', 
          borderRadius: '32px', 
          padding: '60px 40px', 
          textAlign: 'center', 
          boxShadow: 'var(--shadow-lg)',
          marginBottom: '80px',
          border: '1px solid var(--gray-medium)'
        }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '15px' }}>
            Be Part of the <span style={{ color: 'var(--secondary)' }}>Export Revolution.</span>
          </h2>
          <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Join the waitlist today and get early access to the MADE.id ecosystem.
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '15px', 
            maxWidth: '500px', 
            margin: '0 auto',
            flexWrap: 'wrap'
          }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{ 
                flex: 1, 
                padding: '15px 25px', 
                borderRadius: '12px', 
                border: '1px solid var(--gray-medium)', 
                outline: 'none',
                fontSize: '1rem',
                minWidth: '250px'
              }} 
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary" 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px',
                padding: '15px 30px',
                borderRadius: '12px'
              }}
            >
              Request Early Access
              <SendHorizontal size={18} />
            </motion.button>
          </div>
        </section>

        {/* Footer Links */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '40px',
          paddingBottom: '60px',
          borderBottom: '1px solid var(--gray-medium)'
        }}>
          <div>
            <Link href="/" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)', letterSpacing: '-0.5px' }}>
              MADE<span style={{ color: 'var(--secondary)' }}>.id</span>
            </Link>
            <p style={{ marginTop: '20px', color: '#666', lineHeight: '1.6' }}>
              Transforming Indonesia’s Export with AI-Driven Intelligence.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'var(--primary)', fontWeight: '700', marginBottom: '20px' }}>Product</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#666' }}>
              <li>Features</li>
              <li>Virtual Audit</li>
              <li>Compliance Score</li>
              <li>Waitlist</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--primary)', fontWeight: '700', marginBottom: '20px' }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#666' }}>
              <li>About Us</li>
              <li>Careers</li>
              <li>Impact Report</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--primary)', fontWeight: '700', marginBottom: '20px' }}>Connect</h4>
            <div style={{ display: 'flex', gap: '20px', color: '#666' }}>
              <LinkedInIcon />
              <XIcon />
              <MessageSquare size={20} />
            </div>
          </div>
        </div>

        <div style={{ padding: '30px 0', textAlign: 'center', color: '#999', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} MADE.id (Indonesian Export Operating System). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
