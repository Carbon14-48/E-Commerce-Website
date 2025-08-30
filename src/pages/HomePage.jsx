import React, { useState, useEffect } from "react";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";

const backgrounds = [bg1, bg2, bg3, bg4];

export default function HomePage() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentBg ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
      ))}

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold">
          Welcome to My Landing Page
        </h1>
      </div>
    </div>
  );
}
