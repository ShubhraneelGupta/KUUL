"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/bg.png",
    "/bg2.png",
    "/bg3.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      {/* Background Image */}
      <div className="fixed inset-0 z-[-1]">
        <Image
          src={images[currentImage]}
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          placeholder="blur"
          blurDataURL={images[currentImage]} // Low-quality placeholder
          priority // Ensures it's loaded ASAP
        />
      </div>

      {/* Backdrop Blur */}
      <div className="fixed w-screen z-[-1] h-screen backdrop-blur-[5px]" />

      {/* Text Content */}
      <div className="flex flex-col p-24 justify-center h-screen text-9xl">
        <div>Events.</div>
        <div>Parties.</div>
        <div>Nightlife.</div>
      </div>
    </div>
  );
};

export default Home;
