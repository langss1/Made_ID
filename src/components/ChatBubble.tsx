"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, X } from "lucide-react";
import { useState } from "react";

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: "30px", right: "30px", zIndex: 1000 }}>
      {/* Pop-up Info */}
      {isOpen && (
        <motion.div
           initial={{ opacity: 0, y: 20, scale: 0.8 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           exit={{ opacity: 0, y: 20, scale: 0.8 }}
           style={{ 
             background: "white", 
             padding: "20px 25px", 
             borderRadius: "24px", 
             boxShadow: "0 20px 50px rgba(0, 59, 92, 0.15)",
             marginBottom: "15px",
             width: "280px",
             border: "1px solid var(--gray-light)",
             position: "relative"
           }}
        >
           <button 
             onClick={() => setIsOpen(false)}
             style={{ position: "absolute", top: "15px", right: "15px", background: "none", border: "none", color: "var(--gray-dark)", cursor: "pointer" }}
           >
             <X size={16} />
           </button>
           <h4 style={{ color: "var(--primary)", fontWeight: "800", fontSize: "1rem", marginBottom: "8px" }}>Any questions?</h4>
           <p style={{ fontSize: "0.85rem", color: "var(--gray-dark)", lineHeight: "1.4", marginBottom: "15px" }}>
             Got any suggestions or partnership inquiries? Chat with our team!
           </p>
           <a 
             href="mailto:alphadeveloper.it@gmail.com"
             style={{ 
               display: "flex", 
               alignItems: "center", 
               gap: "8px", 
               background: "var(--secondary)", 
               color: "white", 
               padding: "10px 15px", 
               borderRadius: "12px", 
               textDecoration: "none",
               fontSize: "0.85rem",
               fontWeight: "700",
               textAlign: "center",
               justifyContent: "center"
             }}
           >
             <Mail size={16} /> alphadeveloper.it@gmail.com
           </a>
        </motion.div>
      )}

      {/* Main Bubble Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          width: "64px", 
          height: "64px", 
          borderRadius: "50%", 
          background: "var(--secondary)", 
          color: "white", 
          border: "none", 
          boxShadow: "0 10px 30px rgba(0, 163, 108, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer"
        }}
      >
        <MessageCircle size={30} fill="white" />
      </motion.button>
    </div>
  );
}
