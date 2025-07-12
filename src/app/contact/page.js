"use client";
import { useRouter } from "next/navigation";

export default function Contact() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #e7f3ff 0%, #fff6f6 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem' }}>
      <div style={{
        background: '#fff',
        borderRadius: 32,
        boxShadow: '0 8px 32px #1976d222, 0 1.5px 8px #1976d222',
        padding: '3rem 2.5rem',
        maxWidth: 600,
        width: '100%',
        textAlign: 'center',
      }}>
        <div style={{ color: '#1976d2', fontWeight: 800, fontSize: 40, marginBottom: 32, letterSpacing: 2 }}>
          CONTACT US
        </div>
        <div style={{ background: '#fff', borderRadius: 32, padding: '32px 24px', maxWidth: 500, margin: '0 auto', boxShadow: '0 4px 24px #0001', textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}>
            <span style={{ fontSize: 36, marginRight: 24 }}>📞</span>
            <span style={{ fontWeight: 700, fontSize: 24, color: '#222' }}>+91-9777718050</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}>
            <span style={{ fontSize: 36, marginRight: 24 }}>📧</span>
            <span style={{ fontWeight: 700, fontSize: 24, color: '#222' }}>sahurks1234@gmail.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontSize: 36, marginRight: 24 }}>📍</span>
            <span style={{ fontWeight: 700, fontSize: 24, color: '#222' }}>Masudpur, Jajpur, Odisha, 755043</span>
          </div>
        </div>
      </div>
    </div>
  );
} 