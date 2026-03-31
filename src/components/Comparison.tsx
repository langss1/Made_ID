"use client";

import { motion } from 'framer-motion';
import { Check, X, ShieldAlert, Sparkle } from 'lucide-react';

export default function Comparison() {
  return (
    <section id="comparison" style={{ padding: '100px 20px', background: 'white' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.8rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '15px' }}>
          Why We Are <span style={{ color: 'var(--secondary)' }}>Different</span>
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          More than a marketplace. An intelligent decision system.
        </p>
      </div>

      <div className="comparison-container">
        <table>
          <thead>
            <tr>
              <th style={{ width: '40%' }}>FEATURE</th>
              <th style={{ width: '30%', textAlign: 'center', color: '#666' }}>TRADITIONAL MARKETPLACES</th>
              <th className="made-id-col" style={{ width: '30%', textAlign: 'center', color: 'var(--secondary)' }}>
                MADE.id <Sparkle size={14} style={{ display: 'inline', marginLeft: '5px' }} />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Discovery Method</td>
              <td style={{ textAlign: 'center', color: '#555' }}>Passive Keyword Search</td>
              <td className="made-id-col" style={{ textAlign: 'center' }}>AI Decision Engine (Active)</td>
            </tr>
            <tr>
              <td>Compliance Check</td>
              <td style={{ textAlign: 'center' }}><X color="#E53E3E" style={{ margin: '0 auto' }} /></td>
              <td className="made-id-col" style={{ textAlign: 'center' }}><Check color="var(--secondary)" style={{ margin: '0 auto' }} /> (Automated)</td>
            </tr>
            <tr>
              <td>Product Focus</td>
              <td style={{ textAlign: 'center', color: '#555' }}>Volume & Price Wars</td>
              <td className="made-id-col" style={{ textAlign: 'center' }}>Quality & Certification</td>
            </tr>
            <tr>
              <td>Verification</td>
              <td style={{ textAlign: 'center' }}>Self-declared information</td>
              <td className="made-id-col" style={{ textAlign: 'center' }}>Virtual Audit & Score (AI Twin)</td>
            </tr>
            <tr>
              <td>Strategic Value</td>
              <td style={{ textAlign: 'center' }}>One-off transactions</td>
              <td className="made-id-col" style={{ textAlign: 'center' }}>Continuous Supply Chain Intelligence</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        borderRadius: '12px', 
        background: 'rgba(235, 248, 255, 1)',
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        color: 'var(--primary)',
        fontWeight: '500'
      }}>
        <ShieldAlert size={20} />
        <span>Traditional marketplaces are 90% passive catalogs. MADE.id is the 100% active Agentic Operating System for global trade.</span>
      </div>
    </section>
  );
}
