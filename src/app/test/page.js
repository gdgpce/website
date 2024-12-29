"use client";

import { useState } from "react";
import Image from "next/image";

export default function Test() {
  const [imgSrc, setImgSrc] = useState("/temp/imyg.webp"); // Original image source

  // Handle image load success
  const handleLoad = () => {
    setImgLoaded(true);
    console.log("Image loaded successfully");
  };

  // Handle image load failure
  const handleError = () => {
    console.log("Image failed to load, applying fallback image.");
    setImgSrc("/temp/blue.png"); // Path to fallback image
  };

  return (
    <div>
      <div>
        <Image
          width={500}
          height={500}
          src={imgSrc}
          alt="Hex Card Image"
          onError={handleError} // Handle image loading error
        />
      </div>
    </div>
  );
}
