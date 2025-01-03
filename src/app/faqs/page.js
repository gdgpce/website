"use client";

// import "@/app/tailwind.css"
// import { NextUIProvider } from "@nextui-org/react";
// import { Accordion, AccordionItem } from "@nextui-org/react";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import dynamic from "next/dynamic";
const FAQs = dynamic(() => import("@/components/tailwind/faqs/FAQs"), { ssr: true });
// import FAQs from "@/components/tailwind/faqs/FAQs";

export default function Page() {

  return (
    <div>
      <Breadcrumb title="FAQs" />
      <h2>Frequently Asked Questions</h2>
      <FAQs />
    </div>
  );
}
