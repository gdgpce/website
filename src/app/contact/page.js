"use client";
import styles from "./page.module.css";
import "@/app/tailwind.css";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { NextUIProvider } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

export default function Contact() {
    return (
        <NextUIProvider>
            <Breadcrumb title="Contact" />
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input
                    classNames={{
                        label: "text-black/50 dark:text-white/90",
                        input: [
                            "bg-transparent",
                            "text-black/90 dark:text-white/90",
                            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                        ],
                        innerWrapper: ["bg-transparent"],
                        inputWrapper: [
                            "shadow-xl",
                            // "bg-default-200/50",
                            // "dark:bg-default/60",
                            "backdrop-blur-xl",
                            "backdrop-saturate-200",
                            // "hover:bg-default-200/70",
                            // "dark:hover:bg-default/70",
                            "group-data-[focus=true]:bg-[#00ff00]",
                            // "dark:group-data-[focus=true]:bg-default/60",
                            "!cursor-text",
                            // "border-b", // Adds a border
                            "border-[#ff0000]", // Sets border color to #eeeeee
                            "after:border-[#0000ff]",
                        ],
                    }}
                    variant="underlined"
                    label="Email"
                    type="email"
                />
            </div>
        </NextUIProvider>
    );
}
