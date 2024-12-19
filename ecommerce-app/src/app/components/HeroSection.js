"use client"; // Ensure this component is client-side

import React, { useState, useEffect } from "react";
import banner1 from "../assets/banner1.jpg";
import sale from "../assets/sale.jpg";
import online_shopping from "../assets/online_shopping.jpg";
import Image from 'next/image'; 

export default function HeroSection() {
  const slides = [banner1, sale, online_shopping];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 3000);
    return () => clearInterval(timer); // Clear timer on unmount
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative overflow-hidden w-full">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            style={{ minWidth: "100%" }}
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] object-cover"  // Set fixed height
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 focus:outline-none"
        onClick={goToPrevSlide}
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 focus:outline-none"
        onClick={goToNextSlide}
      >
        &#8250;
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
