"use client";

import { motion } from 'framer-motion';
import { SendHorizontal, Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [message, setMessage] = useState("");

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Virtual Audit', href: '#features' },
      { name: 'Compliance Score', href: '#features' },
      { name: 'Waitlist', href: '#countdown' },
    ],
    Company: [
      { name: 'About Us', href: '/' },
      { name: 'Careers', href: '/' },
      { name: 'Impact Report', href: '#impact' },
      { name: 'Privacy Policy', href: '/' },
    ],
  };

  const handleSend = () => {
    if (message.trim()) {
      window.location.href = `mailto:alphadeveloper.it@gmail.com?subject=Inquiry from MADE.id&body=${encodeURIComponent(message)}`;
    }
  };

  return (
    <footer style={{ padding: '100px 24px 50px', background: 'white' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Chat-Like CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="footer-cta-card"
          style={{ 
            background: 'white', 
            padding: '80px 40px', 
            borderRadius: '40px', 
            textAlign: 'center',
            marginBottom: '100px',
            boxShadow: '0 40px 100px -20px rgba(0, 59, 92, 0.1)',
            border: '1px solid var(--gray-light)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div style={{ background: 'rgba(0, 163, 108, 0.05)', color: 'var(--secondary)', padding: '12px', borderRadius: '50%', marginBottom: '25px' }}>
             <MessageSquare size={32} />
          </div>
          
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--primary)', fontWeight: '900', marginBottom: '15px', letterSpacing: '-0.02em' }}>
            Questions or <span style={{ color: 'var(--secondary)' }}>suggestions?</span>
          </h2>
          <p style={{ color: 'var(--gray-dark)', fontSize: '1.1rem', marginBottom: '40px', fontWeight: '500' }}>
            Your feedback builds the future of Indonesia's export engine.
          </p>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            maxWidth: '650px', 
            width: '100%',
            background: 'var(--gray-light)',
            padding: '8px 8px 8px 15px',
            borderRadius: '24px',
            border: '1px solid var(--gray-medium)',
            position: 'relative'
          }}>
             <input 
               type="text" 
               placeholder="Type your question or suggestion here..."
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               suppressHydrationWarning
               style={{ 
                 flex: 1, 
                 background: 'transparent', 
                 border: 'none', 
                 outline: 'none', 
                 padding: '12px 10px', 
                 fontSize: '1.05rem',
                 color: 'var(--primary)',
                 fontWeight: '500',
                 width: '100%'
               }} 
             />
             <motion.button 
               whileHover={{ scale: 1.02, background: 'var(--secondary)' }}
               whileTap={{ scale: 0.98 }}
               onClick={handleSend}
               suppressHydrationWarning
               style={{ 
                 background: 'var(--primary)', 
                 color: 'white', 
                 width: '48px', 
                 height: '48px', 
                 borderRadius: '16px', 
                 border: 'none', 
                 display: 'flex', 
                 alignItems: 'center', 
                 justifyContent: 'center',
                 cursor: 'pointer',
                 boxShadow: '0 8px 15px rgba(0, 59, 92, 0.2)',
                 flexShrink: 0
               }}
             >
                <SendHorizontal size={22} style={{ marginLeft: '2px' }} />
             </motion.button>
          </div>

          <div style={{ marginTop: '25px' }}>
             <p style={{ fontSize: '0.85rem', color: 'var(--gray-dark)', fontWeight: '600' }}>
                Or email us directly at <a href="mailto:alphadeveloper.it@gmail.com" style={{ color: 'var(--secondary)', textDecoration: 'none', fontWeight: '800' }}>alphadeveloper.it@gmail.com</a>
             </p>
          </div>
        </motion.div>

        {/* Global Footer Links */}
        <div className="footer-links-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '80px' }}>
          <div className="footer-brand-col" style={{ gridColumn: 'span 2' }}>
            <Link href="/" style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary)', letterSpacing: '-1px', display: 'block', marginBottom: '30px' }}>
              MADE<span style={{ color: 'var(--secondary)' }}>.id</span>
            </Link>
            <p style={{ color: 'var(--gray-dark)', fontSize: '1.1rem', maxWidth: '400px', lineHeight: '1.7', fontWeight: '500' }}>
              Transforming Indonesia’s Export with AI-Driven Intelligence and Agentic Operating Systems.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ color: 'var(--primary)', fontWeight: '900', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '30px', textTransform: 'uppercase' }}>{title}</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {links.map((link) => (
                  <li key={link.name} style={{ marginBottom: '15px' }}>
                    <Link href={link.href} style={{ color: 'var(--gray-dark)', textDecoration: 'none', fontWeight: '500', fontSize: '1rem', transition: '0.3s' }}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom" style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <p style={{ color: 'var(--gray-dark)', fontWeight: '500', fontSize: '0.95rem' }} suppressHydrationWarning>
            &copy; {currentYear} MADE.id. All rights reserved.
          </p>
          <div style={{ color: 'var(--gray-dark)', fontSize: '0.85rem' }}>
             Designed for Future Indonesia.
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
           footer { padding: 80px 20px 40px !important; }
           .footer-cta-card { padding: 60px 20px !important; margin-bottom: 60px !important; border-radius: 32px !important; }
           input { font-size: 0.9rem !important; }
           h2 { font-size: 1.8rem !important; }
           
           .footer-links-grid { 
             display: grid !important; 
             grid-template-columns: 1fr 1fr !important; 
             gap: 30px !important; 
           }
           .footer-brand-col { 
             grid-column: span 2 !important; 
             margin-bottom: 20px !important;
           }
           .footer-brand-col p { font-size: 1rem !important; max-width: 100% !important; }
           
           .footer-bottom {
             flex-direction: column !important;
             text-align: center !important;
             gap: 15px !important;
             padding-top: 30px !important;
           }
        }
      `}</style>
    </footer>
  );
}
