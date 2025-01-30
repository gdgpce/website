"use client";

import "@/app/tailwind.css"
import { NextUIProvider } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Page() {
  //const defaultContent =
  //"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <NextUIProvider>
      <div className="dark text-foreground bg-background" style={{ padding: "20px", maxWidth: "900px", margin: "0px auto 100px", color: "white" }}>
        <Accordion>
          
          <AccordionItem key="1" aria-label="Accordion 1" title="What is GDG PCE, and what do they do?">
                  <p>
                     GDG PCE stands for Google Developer Group on Campus, Pillai College of Engineering. We are a community of tech enthusiasts and innovators passionate about exploring and leveraging Google technologies. Our group organizes
                     technical workshops, competitions, hackathons, and other events aimed at fostering learning and collaboration in the tech space.
                  </p>
        </AccordionItem>
          
          <AccordionItem key="2" aria-label="Accordion 2" title="How can I join GDG PCE?">
            <p>
              Joining GDG PCE is simple!! Simply visit our page on the gdg.community.dev/gdg-on-campus-pillai-college-of-engineering-navi-mumbai-india/ and click the “Join Us” button. Membership is open to everyone who shares a passion 
              for technology and is eager to learn, regardless of their background or expertise level.
            </p>
          </AccordionItem>
          
          <AccordionItem key="3" aria-label="Accordion 3" title="What are the benefits of joining GDG PCE?">
            <p>
              Members of GDG PCE gain access to exclusive learning opportunities, including hands-on workshops on emerging technologies, participation in exciting coding competitions and hackathons, and mentorship from experienced professionals. 
              Additionally, it’s a fantastic platform to network with peers and industry experts, hone both technical and soft skills, and become part of a thriving tech community.
            </p>
          </AccordionItem>

          <AccordionItem key="4" aria-label="Accordion 4" title="Is there a membership fee for GDG PCE?">
            <p>
              No, there is no membership fee for joining GDG PCE. The group is committed to making technology learning and opportunities accessible to all, without any membership fee.
            </p>
          </AccordionItem>

          <AccordionItem key="5" aria-label="Accordion 5" title="Do I need to be a student of Pillai College of Engineering to join?">
            <p>
              While the group primarily caters to students of Pillai College of Engineering, we welcome anyone interested in technology to participate in many of our events and activities.
            </p>
          </AccordionItem>

          <AccordionItem key="6" aria-label="Accordion 6" title="How can sponsors or collaborators engage with GDG PCE?">
            <p>
              GDG PCE is always open to collaborations and sponsorships. Organizations or individuals interested in partnering with us can reach out through the contact form available on our website or via email. Collaborating with GDG PCE 
              provides an excellent opportunity to engage with a vibrant and skilled tech community.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </NextUIProvider>
  );
}
