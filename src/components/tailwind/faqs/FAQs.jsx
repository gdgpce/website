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
          <AccordionItem key="1" aria-label="About GDG PCE" title="🚀 What is GDG PCE, and what do they do?">
            <p>
              GDG PCE (Google Developer Group on Campus, Pillai College of Engineering) is a dynamic community of tech enthusiasts and innovators passionate about exploring and leveraging Google technologies. 🎯 We organize technical workshops, 
              coding competitions, hackathons, and various events to foster learning, collaboration, and innovation in the tech space. 💡
            </p>
          </AccordionItem>
        
          <AccordionItem key="2" aria-label="Joining GDG PCE" title="📢 How can I join GDG PCE?">
            <p>
              Joining GDG PCE is super easy! 🎉 Just visit our page at  
              <a href="https://gdg.community.dev/gdg-on-campus-pillai-college-of-engineering-navi-mumbai-india/" target="_blank">
                gdg.community.dev
              </a>  
              and click the “Join Us” button. 🖱️ Membership is open to everyone who has a passion for technology and is eager to learn—no matter their background or expertise level! 💻✨
            </p>
          </AccordionItem>
        
          <AccordionItem key="3" aria-label="Benefits of joining GDG PCE" title="🎯 What are the benefits of joining GDG PCE?">
            <p>
              Being a part of GDG PCE comes with amazing perks! 🚀 Members gain access to:  
              ✅ Hands-on workshops on cutting-edge technologies 🔥  
              ✅ Exciting coding competitions and hackathons 🏆  
              ✅ Mentorship from experienced professionals 🎓  
              ✅ Networking opportunities with peers and industry experts 🤝  
              ✅ A chance to enhance both technical and soft skills 🎤🧠  
              Become a part of a thriving tech community today! 💙
            </p>
          </AccordionItem>
        
          <AccordionItem key="4" aria-label="GDG PCE Membership Fee" title="💰 Is there a membership fee for GDG PCE?">
            <p>
              Nope! ❌ There is absolutely no membership fee to join GDG PCE. We believe in making technology learning and opportunities accessible to all—completely free of cost! 🌍🎓
            </p>
          </AccordionItem>
        
          <AccordionItem key="5" aria-label="Eligibility for joining GDG PCE" title="🎓 Do I need to be a student of Pillai College of Engineering to join?">
            <p>
              While GDG PCE is primarily for students of Pillai College of Engineering, we welcome anyone interested in technology to participate in many of our events and activities. 🌟 If you're passionate about tech, you're welcome here! 🙌
            </p>
          </AccordionItem>
        
          <AccordionItem key="6" aria-label="Sponsorship and Collaboration with GDG PCE" title="🤝 How can sponsors or collaborators engage with GDG PCE?">
            <p>
              We are always open to collaborations and sponsorships! 🏢💡 If you’re an organization or individual looking to partner with us, reach out through the contact form on our website or via email. 📩  
              Partnering with GDG PCE is a fantastic way to engage with a vibrant, skilled, and passionate tech community! 🔥
            </p>
          </AccordionItem>
        </Accordion>

      </div>
    </NextUIProvider>
  );
}
