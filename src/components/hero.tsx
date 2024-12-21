"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false); // Track loading state

  const images = [
    "/bg.png",
    "/bg2.png",
    "/bg3.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoaded(false); // Reset loading before switching
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      {/* Background Image */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <Image
          src={images[currentImage]}
          alt="Background"
          fill
          style={{
            objectFit: "cover",
            transition: "filter 0.5s ease-in-out, opacity 0.5s ease-in-out", // Smooth transition
            filter: isLoaded ? "blur(0px)" : "blur(10px)", // Blur effect while loading
            opacity: isLoaded ? 1 : 0.7, // Fade-in effect
          }}
          onLoadingComplete={() => setIsLoaded(true)} // Set loaded state
          priority // Loads fast
        />
      </div>

      {/* Backdrop Blur */}
      <div className="fixed w-screen z-[-1] h-screen bg-black opacity-60" />

      {/* Text Content */}
      <div className="flex flex-col p-24 justify-center h-screen text-9xl
      max-sm:text-7xl max-sm:p-4
      ">
        <div>Events.</div>
        <div>Parties.</div>
        <div>Nightlife.</div>
      </div>
    </div>
  );
};

export default Home;
