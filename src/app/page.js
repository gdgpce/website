"use client";

import Hero from "@/components/home/Hero";
import Visions from "@/components/home/Visions";
import About from "@/components/home/About";
import WhatWeDo from "@/components/home/WhatWeDo";
import OurTeam from "@/components/home/OurTeam";
import OurProjects from "@/components/home/OurProjects";

export default function Home() {
  return (
      <div>
        <Hero />
        <Visions />
        <About />
        <WhatWeDo />
        <OurTeam />
        <OurProjects />
      </div>
  );
}
