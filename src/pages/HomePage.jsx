import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";

const backgrounds = [bg1, bg2, bg3, bg4];

const catchyTexts = [
  {
    main: "FLASH SALE",
    sub: "Buy 1 Get 1 FREE",
    accent: "Limited Time Only!",
  },
  {
    main: "MEGA DEALS",
    sub: "Up to 70% OFF",
    accent: "Don't Miss Out!",
  },
  {
    main: "EXCLUSIVE OFFERS",
    sub: "Members Only Prices",
    accent: "Join Now & Save!",
  },
  {
    main: "WEEKEND SPECIAL",
    sub: "Double the Value",
    accent: "This Weekend Only!",
  },
];

export default function HomePage() {
  const [currentBg, setCurrentBg] = useState(0);
  const navigate = useNavigate();
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
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentBg ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${bg})` }}
        />
      ))}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-6xl mx-auto">
          <div className="mb-6">
            <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-black mb-4 drop-shadow-2xl">
              {catchyTexts[currentBg].main}
            </h1>
            <h2 className="text-yellow-400 text-2xl md:text-3xl lg:text-5xl font-bold mb-4 drop-shadow-xl">
              {catchyTexts[currentBg].sub}
            </h2>
            <p className="text-cyan-500 text-lg md:text-xl lg:text-2xl font-semibold drop-shadow-lg animate-bounce">
              {catchyTexts[currentBg].accent}
            </p>
          </div>

          <div className="mt-8 space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <button
              onClick={() => navigate("/products")}
              className="cursor-pointer bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white text-xl font-bold py-4 px-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 w-full md:w-auto"
            >
              SHOP NOW
            </button>
            <button
              onClick={() => navigate("/products")}
              className=" cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-xl font-bold py-4 px-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 w-full md:w-auto"
            >
              VIEW DEALS
            </button>
          </div>

          <div className="mt-8">
            <div className="flex justify-center space-x-2">
              {backgrounds.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBg(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentBg ? "bg-white scale-125" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-32 flex items-end justify-center pb-6 z-10">
        <p className="text-white/80 text-2xl  font-medium animate-pulse [animation-duration:5s]">
          🔥 Hurry! Offers expire in 24 hours 🔥
        </p>
      </div>
    </div>
  );
}
