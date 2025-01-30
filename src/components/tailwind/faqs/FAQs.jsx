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
                     GDG PCE also known as Google developer Group PCE is a developer community which provides you with opportunities to learn, share knowledge and collaborate with tech enthusiasts. Our group organizes
                     technical workshops, competitions, hackathons, and other events aimed at fostering learning and collaboration in the tech space.
                  </p>
        </AccordionItem>
          
          <AccordionItem key="2" aria-label="Accordion 2" title="What are the benefits of joining GDG PCE?">
            <p>
              Joining GDG PCE is simple!! Simply visit our page on the gdg.community.dev/gdg-on-campus-pillai-college-of-engineering-navi-mumbai-india/ and click the “Join Us” button. Membership is open to everyone who shares a passion 
              for technology and is eager to learn, regardless of their background or expertise level.
            </p>
          </AccordionItem>
          
          <AccordionItem key="3" aria-label="Accordion 3" title="How can i become a member of GDG PCE?">
            <p>
              To become a member, you can visit our group page gdg.community.dev/gdg-on-campus-pillai-college-of-engineering-navi-mumbai-india/ and click on the “Join Us” button and you will start getting mails from our committee. Everyone who is passionate for tech 
              and the curiosity to learrn more about  technology can become a member of our committee.
            </p>
          </AccordionItem>

          <AccordionItem key="4" aria-label="Accordion 4" title="How can I come to know about the GDG PCE events?">
            <p>
              Events conducted by GDG PCE are frequently announced on our official website and our official Instagram page and the members of our committe recieve updates related to all the events.
            </p>
          </AccordionItem>

          <AccordionItem key="5" aria-label="Accordion 6" title="How can I contact GDG PCE?">
            <p>
             You can reach out to us through our officiaal email ID: gdscpce@mes.ac.in
             Do follow our Instagram page @gdgpce for more updates. 
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </NextUIProvider>
  );
}
