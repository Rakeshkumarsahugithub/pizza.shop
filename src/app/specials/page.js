"use client";
import { useState } from "react";

const pizzas = [
  {
    name: "Mushroom Mix",
    img: "/Mushroom Mix.jpg",
  },
  {
    name: "Extra cheese with fruits",
    img: "/Extra cheese with fruits.jpg",
  },
  {
    name: "Tomatoes and Basil Mix",
    img: "/Tomatoes and Basil Mix.jpg",
  },
  {
    name: "Chilli Paneer Mix",
    img: "/chilli paneer mix.jpg",
  },
];

const positions = [
  { angle: 180, label: "left" },   // 1st pizza
  { angle: 270, label: "bottom" },  // 2nd pizza
  { angle: 0, label: "right" },    // 3rd pizza
  { angle: 90, label: "top" },    // 4th pizza
];

export default function Specials() {
  const [selected, setSelected] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [animating, setAnimating] = useState(false);

  // When a pizza is clicked, rotate the whole circle so that pizza comes to the left (180deg)
  const handleSelect = (idx) => {
    if (idx === selected || animating) return;
    // Find how many steps to bring idx to left (position 0)
    const diff = (idx - selected + pizzas.length) % pizzas.length;
    const rotateTo = (diff * 90) * -1; // negative for clockwise
    setAnimating(true);
    setRotation(rotateTo);
    setTimeout(() => {
      setSelected(idx);
      setRotation(0); // Reset rotation after animation
      setAnimating(false);
    }, 800);
  };

  // For each position, get the pizza that should be there
  const getPizzaAtPosition = (posIdx) => pizzas[(selected + posIdx) % pizzas.length];

  // For each position, calculate its style
  const getPizzaStyle = (angle, isSelected) => {
    const radius = 460;
    const centerX = 500;
    const centerY = 500;
    const radians = (angle * Math.PI) / 180;
    const x = centerX + radius * Math.cos(radians) - 200;
    const y = centerY + radius * Math.sin(radians) - 200;
    return {
      position: "absolute",
      left: x,
      top: y,
      width: 400,
      height: 400,
      borderRadius: "50%",
      boxShadow: "0 8px 32px #0002",
      border: isSelected ? "8px solid #fff" : "6px solid #fff",
      background: "#fff",
      zIndex: isSelected ? 3 : 2,
      transition: animating ? "all 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55)" : "none",
      transform: isSelected ? "scale(1.05)" : "scale(0.95)",
      opacity: isSelected ? 1 : 0.92,
      cursor: animating ? "default" : "pointer",
    };
  };

  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "0 0 0 40px",
          height: "calc(100vh - 130px)", 
        }}
      >
        {/* Left Content */}
        <div style={{ flex: 1, minWidth: 480, zIndex: 2 }}>
          <div style={{ marginTop: 16, fontWeight: 700, fontSize: 32, color: "#000" }}>
            Today's Special
          </div>
          <div style={{ fontSize: 20, margin: "8px 0 0 0", maxWidth: 600, color: "#000" }}>
            Pizza is an Italian food created in Italy.
            <br />
            Now you can buy in India and these are our special variants.
          </div>
          <div style={{ margin: "24px 0 0 0", fontStyle: "italic", fontWeight: 700, fontSize: 36, color: "#000" }}>
            {pizzas[selected].name}
          </div>
          <div style={{ display: "flex", alignItems: "center", margin: "106px 0 0 0", gap: 16 }}>
            {pizzas.map((pizza, idx) => (
              <img
                key={pizza.name}
                src={pizza.img}
                alt={pizza.name}
                onClick={() => handleSelect(idx)}
                style={{
                  width: 150,
                  height: 150,
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: idx === selected ? "4px solid #d100b6" : "2px solid #ccc",
                  cursor: animating ? "default" : "pointer",
                  transition: "border 0.2s, transform 0.2s",
                  transform: idx === selected ? "scale(1.1)" : "scale(1)",
                  boxShadow: idx === selected ? "0 4px 16px #d100b633" : "none",
                  background: "#fff",
                  opacity: animating ? 0.7 : 1,
                }}
              />
            ))}
          </div>
        </div>

        {/* Rotating gray circle with pizzas */}
        <div
          style={{
            position: "relative",
            width: 1000,
            height: 1000,
            bottom: 120,
            marginRight: -695,
            zIndex: 1,
          }}
        >
          {/* Rotating group */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 1000,
              height: 1000,
              transition: animating ? "transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55)" : "none",
              transform: `rotate(${rotation}deg)`,
            }}
          >
            {/* Gray circle */}
          <div
            style={{
              position: "absolute",
              top: 70,
              left: 70,
                width: 860,
                height: 860,
              borderRadius: "50%",
              background: "gray",
              zIndex: 1,
            }}
          />
            {/* Pizzas on the circle, always in the same order */}
            {positions.map((pos, i) => {
              const pizza = getPizzaAtPosition(i);
              // Find the index of this pizza in the original array
              const pizzaIdx = pizzas.findIndex(p => p.name === pizza.name);
              return (
                <img
                  key={pizza.name}
                  src={pizza.img}
                  alt={pizza.name}
                  style={getPizzaStyle(pos.angle, i === 0)}
                  onClick={() => handleSelect(pizzaIdx)}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          margin: "0 10px 90px 50px",
          width: "70%",
          background: "#943594ff",
          borderRadius: 40,
          padding: 24,
          textAlign: "center",
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: 24,
        }}
      >
        It's 100% veg. So good for vegetarian people.
      </div>
    </div>
  );
}
