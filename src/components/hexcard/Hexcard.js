"use client";
import styles from './page.module.css';
import Image from 'next/image'
import { useState } from 'react';


export default function Hexcard({color, src}) {
  const [imgSrc, setImgSrc] = useState(src); // Original image source

  const handleError = () => {
    console.log("Image failed to load, applying fallback image.");
    setImgSrc("/temp/blue.png"); // Path to fallback image
  };

  return (
    <div className={styles.hexCardWrapper} style={{background:"linear-gradient(to right, #0E0023 0%, #0E0023 10%,  " + color +  " 55%, #0E0023 90%, #0E0023 100%)"}}>
      <div className={styles.hexCard}>
        {src ? (
        <Image
          width={400}
          height={400}
          src={imgSrc}
          alt="Hex Card Image"
          className={styles.image}
          onError={handleError}
        />
        ):(
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="113.951" y="194.951" width="80" height="29" rx="14.5" transform="rotate(-30 113.951 194.951)" fill={color} stroke="#0E0023" strokeWidth="3"/>
          <rect x="128.451" y="179.951" width="80" height="29" rx="14.5" transform="rotate(30 128.451 179.951)" fill={color} stroke="#0E0023" strokeWidth="3"/>
          <rect x="201.951" y="219.951" width="80" height="29" rx="14.5" transform="rotate(-30 201.951 219.951)" fill={color} stroke="#0E0023" strokeWidth="3"/>
          <rect x="216.451" y="154.951" width="80" height="29" rx="14.5" transform="rotate(30 216.451 154.951)" fill={color} stroke="#0E0023" strokeWidth="3"/>
        </svg> 

        )}
        
       

      </div>
    </div>
  );
}
