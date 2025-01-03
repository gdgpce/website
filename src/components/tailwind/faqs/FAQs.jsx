"use client";

import "@/app/tailwind.css"
import { NextUIProvider } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Page() {
  const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <NextUIProvider>
      <div className="dark text-foreground bg-background" style={{ padding: "20px", maxWidth: "900px", margin: "0px auto 100px", color: "white" }}>
        <Accordion>
          <AccordionItem key="1" aria-label="Accordion 1" title="Who Should Join GDG-PCE">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Who Should Join GDG-PCE">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </NextUIProvider>
  );
}
