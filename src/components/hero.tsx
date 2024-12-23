"use client";
import {motion} from 'motion/react'
import { useEffect, useState } from "react";
import Image from "next/image";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false); // Track loading state

  const images = [
    "/bg4.png",
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
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <Image
          src={images[currentImage]}
          alt="Background"
          fill
          style={{
            objectFit: "cover",
            transition: "filter 0.5s ease-in-out, opacity 0.5s ease-in-out", 
            filter: isLoaded ? "blur(0px)" : "blur(100px)", 
            opacity: isLoaded ? 1 : 0.7, 
          }}
          onLoad={() => setIsLoaded(true)} 
          priority // Loads fast
        />
      </div>

      {/* Backdrop Blur */}
      <div className="fixed w-screen z-[-1] h-screen bg-black opacity-60" />

      {/* Text Content */}
      <div className="flex flex-col p-24 justify-center h-screen text-9xl
      max-sm:text-7xl max-sm:p-4
      ">
        <motion.div
        initial={{
          opacity:0
        }}
        animate={{
          opacity:100,
        }}
        transition={{
          delay:0.50
        }}
        >Events.</motion.div>

        <motion.div
        initial={{
          opacity:0
        }}
        animate={{
          opacity:100,
        }}
        transition={{
          delay:0.75
        }}
        >Parties.</motion.div>

        <motion.div
        initial={{
          opacity:0
        }}
        animate={{
          opacity:100,
        }}
        transition={{
          delay:1
        }}
        >Nightlife.</motion.div>
      </div>
    </div>
  );
};

export default Home;
