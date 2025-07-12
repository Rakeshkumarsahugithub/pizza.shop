"use client";
import { useRouter } from "next/navigation";

export default function About() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #fff6f6 0%, #f3e7ff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 1rem 3rem 1rem' }}>
      <div style={{
        background: '#fff',
        borderRadius: 32,
        boxShadow: '0 8px 32px #d100b622, 0 1.5px 8px #d100b622',
        padding: '2.5rem 2rem',
        maxWidth: 900,
        width: '100%',
        textAlign: 'center',
      }}>
        <div style={{ color: '#d100b6', fontWeight: 800, fontSize: 40, marginBottom: 16, letterSpacing: 1 }}>
          About Us
        </div>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
          {/* Animated Pizza SVG with glowing arc */}
          <div style={{ position: 'relative', width: 105, height: 105, display: 'flex', alignItems: 'center', borderRadius: 90 , boxShadow: '0 0 20px 10px rgba(243, 4, 227, 0.6)', justifyContent: 'center' }}>
            {/* Glowing arc/halo */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 120,
              height: 120,
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #ffd6f7 0deg, #ffe5f1 120deg, #fff0fa 240deg, #ffd6f7 360deg)',
              filter: 'blur(18px) brightness(1.2)',
              zIndex: 0,
              opacity: 0.7,
            }} />
            <div style={{ width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
              <svg width="100" height="100" viewBox="0 0 100 100" style={{ animation: 'spin 3s linear infinite' }}>
                <circle cx="50" cy="50" r="48" fill="#ffe5b4" stroke="#d100b6" strokeWidth="4" />
                <path d="M50 50 L50 10 A40 40 0 0 1 90 50 Z" fill="#ff9800" />
                <circle cx="70" cy="30" r="6" fill="#d100b6" />
                <circle cx="80" cy="55" r="5" fill="#b0008b" />
                <circle cx="60" cy="20" r="4" fill="#fff" />
                <circle cx="75" cy="40" r="3" fill="#fff" />
              </svg>
              <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
            </div>
          </div>
          {/* Tagline below the animation */}
          <div style={{ marginTop: 18, fontWeight: 600, color: '#d100b6', fontSize: 20, letterSpacing: 1, textShadow: '0 2px 8px #fff6' }}>
            Fresh, Fun & 100% Veggie Pizza!
          </div>
        </div>
        <div style={{ color: '#b0008b', fontWeight: 700, fontSize: 32, marginBottom: 16 }}>
          Welcome to Rakesh’s Pizza Shop
        </div>
        <div style={{ maxWidth: 700, margin: '0 auto', fontSize: 20, color: '#222', textAlign: 'left' }}>
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontWeight: 600, fontSize: 26, color: '#d100b6' }}>Our Story</div>
            <div>
              Rakesh’s pizza shop started with a love for fresh, high-quality ingredients and a passion for making a positive impact on the world. Founded by a team of dedicated food enthusiasts, we set out to challenge the idea that vegetarian pizza is bland or boring. By focusing on vibrant vegetables, unique flavors, and creative recipes, we aim to elevate the vegetarian pizza experience and prove that you don't have to sacrifice taste for ethics.
            </div>
          </div>
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontWeight: 600, fontSize: 26, color: '#d100b6' }}>Our Ingredients</div>
            <div>
              We source only the best, locally grown vegetables, and our cheeses are crafted to perfection to ensure every bite is satisfying. Our dough is made fresh daily, and we never use artificial additives or preservatives. Each pizza is a celebration of flavor and a testament to the quality of our ingredients.
            </div>
          </div>
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontWeight: 600, fontSize: 26, color: '#d100b6' }}>Our Values</div>
            <div>
              At Rakesh’s pizza shop, sustainability and community are at the heart of everything we do. We’re committed to reducing our environmental footprint, supporting local farmers, and giving back to the community. Every pizza purchase helps support various initiatives aimed at promoting a healthier planet and a more compassionate world.
            </div>
          </div>
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontWeight: 600, fontSize: 26, color: '#d100b6' }}>Join Us on This Journey</div>
            <div>
              We invite you to explore our menu, try our creations, and share your experiences with us. Together, we can enjoy delicious food while making a positive impact.<br />
              Thank you for being a part of the Rakesh’s pizza shop family. We look forward to serving you!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 