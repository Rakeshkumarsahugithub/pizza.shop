"use client";
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';

const images = [
  "https://b.zmtcdn.com/data/pictures/chains/3/18687613/7b4ce7f12a029437bc789052ab310aa0.jpg",
  
  "/istockphoto-1189363940-1024x1024.jpg",
  "https://png.pngtree.com/png-clipart/20210711/original/pngtree-dark-creative-pizza-promotional-banner-template-png-image_6510570.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
  "/istockphoto-1144383005-1024x1024.jpg",
  "https://www.dominos.co.in/theme2/front/assets/banner2.webp",
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(nextImage, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #fff6f6 0%, #f3e7ff 100%)",
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    }}>
      {/* Heading and description */}
      <div style={{
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto 1.5rem auto",
        textAlign: "center",
        zIndex: 20,
      }}>
        <h1 style={{
          fontSize: "2.5rem",
          fontWeight: 800,
          color: "#d100b6",
          margin: 0,
          letterSpacing: 1,
        }}>
          Welcome to Rakesh&apos;s Pizza Shop!
        </h1>
        <p style={{
          fontSize: "1.25rem",
          color: "#333",
          margin: "1rem 0 0 0",
          fontWeight: 500,
        }}>
          Enjoy our delicious pizzas and fast food specials. Scroll through our featured menu!
        </p>
      </div>
      {/* Carousel container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1100,
          height: "60vh",
          minHeight: 350,
          margin: "0 auto 2rem auto",
          borderRadius: 40,
          boxShadow: "0 8px 32px 0 rgba(209,0,182,0.18), 0 1.5px 8px #d100b622, 0 2px 16px #0001",
          overflow: "hidden",
          background: "linear-gradient(120deg,rgba(169, 148, 161, 0.85) 60%,rgba(209,0,182,0.08) 100%)",
          border: "2.5px solid rgba(255,255,255,0.45)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem 1.5rem 2.5rem 1.5rem",
          transition: "box-shadow 0.3s, transform 0.3s",
        }}
        onMouseOver={e => e.currentTarget.style.boxShadow = "0 16px 48px 0 rgba(209,0,182,0.22), 0 2px 16px #d100b655"}
        onMouseOut={e => e.currentTarget.style.boxShadow = "0 8px 32px 0 rgba(209,0,182,0.18), 0 1.5px 8px #d100b622, 0 2px 16px #0001"}
      >
        {/* Glassmorphism overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(255,255,255,0.18)",
          zIndex: 1,
          pointerEvents: "none",
        }} />
        {/* Carousel images */}
        {images.map((img, idx) => (
          <div key={img} style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: idx === current ? 1 : 0,
            transition: "opacity 0.7s cubic-bezier(.4,0,.2,1)",
            zIndex: idx === current ? 2 : 1,
          }}>
            <Image
              src={img}
              alt={`carousel-img-${idx}`}
              width={img.startsWith('http') ? 800 : 800}
              height={img.startsWith('http') ? 400 : 800}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: 32,
                filter: "brightness(1)",
              }}
              priority={idx === 0}
            />
            {/* Overlay for contrast */}
            {/* <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(90deg,rgba(255,255,255,0.12) 0%,rgba(0,0,0,0.18) 100%)",
              borderRadius: 32,
              zIndex: 3,
            }} /> */}
          </div>
        ))}
        {/* Left Arrow */}
        <button
          onClick={prevImage}
          style={{
            position: "absolute",
            top: "50%",
            left: 24,
            transform: "translateY(-50%)",
            background: "linear-gradient(135deg, #fff6f6 0%, #d100b6 100%)",
            border: "none",
            borderRadius: "50%",
            width: 60,
            height: 60,
            color: "#fff",
            fontSize: 36,
            fontWeight: 900,
            cursor: "pointer",
            zIndex: 10,
            boxShadow: "0 4px 16px #d100b655, 0 1.5px 8px #d100b622",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
          }}
          aria-label="Previous image"
          onMouseOver={e => e.currentTarget.style.transform = "scale(1.12)"}
          onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
        >
          <span style={{fontSize: 40, fontWeight: 900, lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>&#x2039;</span>
        </button>
        {/* Right Arrow */}
        <button
          onClick={nextImage}
          style={{
            position: "absolute",
            top: "50%",
            right: 24,
            transform: "translateY(-50%)",
            background: "linear-gradient(135deg, #fff6f6 0%, #d100b6 100%)",
            border: "none",
            borderRadius: "50%",
            width: 60,
            height: 60,
            color: "#fff",
            fontSize: 36,
            fontWeight: 900,
            cursor: "pointer",
            zIndex: 10,
            boxShadow: "0 4px 16px #d100b655, 0 1.5px 8px #d100b622",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
          }}
          aria-label="Next image"
          onMouseOver={e => e.currentTarget.style.transform = "scale(1.12)"}
          onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
        >
          <span style={{fontSize: 40, fontWeight: 900, lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>&#x203A;</span>
        </button>
        {/* Dots */}
        <div style={{
          position: "absolute",
          bottom: 24,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 24,
          zIndex: 10,
        }}>
          {images.map((_, idx) => (
            <span
              key={idx}
              style={{
                display: "inline-block",
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: idx === current ? "#d100b6" : "#fff",
                border: idx === current ? "4px solid #fff" : "3px solid #d100b6",
                boxShadow: idx === current ? "0 2px 8px #d100b655" : "0 1px 4px #bbb8",
                opacity: 1,
                transition: "background 0.3s, border 0.3s, box-shadow 0.3s",
                margin: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
