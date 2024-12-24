"use client";

import Hero from "@/components/home/Hero";
import Visions from "@/components/home/Visions";
import About from "@/components/home/About";
import WhatWeDo from "@/components/home/WhatWeDo";

export default function Home() {
  return (
      <div>
        <Hero />
        <Visions />
        <About />
        <WhatWeDo />
      </div>
  );
}
