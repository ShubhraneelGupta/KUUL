"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

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

  return (<div>
    <div
      className={clsx(
        "fixed inset-0 bg-cover bg-center z-[-1]")}
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    ></div>
    <div className="fixed w-screen z-[-1] h-screen backdrop-blur-[5px]" />
    <div className="flex flex-col p-24 justify-center h-screen text-9xl">
        <div>Events.</div>
        <div>Parties.</div>
        <div>Nightlife.</div>
    </div>
    </div>
  );
};

export default Home;
