"use client";

import React from "react";
import "@/app/tailwind.css"
import { NextUIProvider } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Page() {
  return (
    <NextUIProvider>
      <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
        <h1>Accordion Example</h1>
        <Accordion>
          <AccordionItem key="item-1" title="First Item">
            This is the content of the first accordion item.
          </AccordionItem>
          <AccordionItem key="item-2" title="Second Item">
            This is the content of the second accordion item.
          </AccordionItem>
          <AccordionItem key="item-3" title="Third Item">
            This is the content of the third accordion item.
          </AccordionItem>
        </Accordion>
        <div className="flex items-center justify-center min-h-screen bg-blue-500 text-black">
      <h1 className="text-4xl font-bold">Welcome to Tailwind CSS with Next.js!</h1>
    </div>
      </div>
    </NextUIProvider>
  );
}
