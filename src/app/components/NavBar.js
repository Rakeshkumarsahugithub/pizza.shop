"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  const pathname = usePathname();
  
  // Always show NavBar
  return (
    <nav className="mobile-nav" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 36px', marginTop: 6, marginBottom: 8, background: '#fff', minHeight: 72 }}>
      <div className="mobile-nav-brand" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        {/* Logo placeholder */}
        <span className="mobile-nav-logo" style={{ display: 'inline-block', width: 64, height: 64, background: '#fff', borderRadius: '50%', boxShadow: '0 2px 8px #0001', border: '2px solid #ff9800', marginRight: 10, overflow: 'hidden' }}>
          <span style={{ fontSize: 40, display: 'block', textAlign: 'center', lineHeight: '64px' }}>🍕</span>
        </span>
        <span style={{ fontWeight: 700, fontSize: 28, color: '#b0008b', fontFamily: 'inherit' }}>Rakesh&apos;s Pizza Shop</span>
      </div>
      <div className="mobile-nav-links" style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
        <Link href="/" prefetch={true} className="mobile-nav-link" style={{ 
          fontWeight: 700, 
          fontSize: 20, 
          color: pathname === '/' ? '#d100b6' : 'black', 
          textDecoration: 'none', 
          letterSpacing: 1,
          transition: 'color 0.2s ease'
        }}>
          Home
        </Link>
        <Link href="/specials" prefetch={true} className="mobile-nav-link" style={{ 
          fontWeight: 700, 
          fontSize: 20, 
          color: pathname === '/specials' ? '#d100b6' : 'black', 
          textDecoration: 'none', 
          letterSpacing: 1,
          transition: 'color 0.2s ease'
        }}>
          Specials
        </Link>
        <Link href="/about" prefetch={true} className="mobile-nav-link" style={{ 
          fontWeight: 700, 
          fontSize: 20, 
          color: pathname === '/about' ? '#d100b6' : 'black', 
          textDecoration: 'none', 
          letterSpacing: 1,
          transition: 'color 0.2s ease'
        }}>
          About
        </Link>
        <Link href="/contact" prefetch={true} className="mobile-nav-link" style={{ 
          fontWeight: 700, 
          fontSize: 20, 
          color: pathname === '/contact' ? '#d100b6' : 'black', 
          textDecoration: 'none', 
          letterSpacing: 1,
          transition: 'color 0.2s ease'
        }}>
          Contact
        </Link>
      </div>
      <div>
        {/* WhatsApp profile image */}
        <span className="mobile-nav-profile" style={{ display: 'inline-block', width: 64, height: 74,  marginRight: 32, borderRadius: '50%', background: '#eee', overflow: 'hidden', border: '2px solid #222' }}>
          <Image src="/WhatsApp_Image_2023-08-06_at_10.42.18_AM-removebg-preview_auto_x2.jpg" alt="WhatsApp Profile" width={64} height={74} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
        </span>
      </div>
    </nav>
  );
} 