"use client";
// app/layout.js
import React, { useState, useEffect } from 'react';
import Loading from './loading'; // Import the Loading component

export default function MainLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loading screen after 3 seconds
    }, 2200);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />; // Show the Loading component while loading
  }

  return (
    <div>
      {/* Render your actual content after loading */}
      {children}
    </div>
  );
}
