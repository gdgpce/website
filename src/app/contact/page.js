"use client";
import styles from "./page.module.css";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { SideDash } from "@/components/dash/Dash";
import { HomeFilled, MailFilled } from "@ant-design/icons";
import { useState } from "react";
import { message } from "antd";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSeU_PJ57Qj2hzK_EgQggCH0S12PwU7DTQXUv-XK0_8jYElhQA/formResponse";

    const formBody = new URLSearchParams({
      "entry.1152386456": formData.name,
      "entry.56516829": formData.email,
      "entry.560721354": formData.message,
    });

    try {
      await fetch(googleFormURL, {
        method: "POST",
        body: formBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        mode: "no-cors",
      });
      message.success("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting the form:", error);
      message.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div>
      <Breadcrumb title="Contact" />
      <div className={styles.contactPage}>
        <div className={styles.contactContent}>
          <div className={styles.leftContainer}>
            <div className={styles.headings}>
              <div className={styles.mainhead}>Get in Touch</div>
              <SideDash />
            </div>
            <p className={styles.description}>
              Have questions, need assistance, or want to share your feedback?
              Reach out to us, and we’ll be delighted to assist you!
            </p>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="johndoe@example.com"
              />
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here"
                rows="4"
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className={styles.rightContainer}>
            <img src="/assets/contacts.png" className={styles.contactImage} />
            <div className={styles.contactInfo}>
              <div className={styles.contactInfoItem}>
                <HomeFilled />
                <p>
                  Dr. K. M. Vasudevan Pillai Campus, <br /> Plot No. 10, Sector 16, New
                  Panvel, <br /> Navi Mumbai, India – 410 206
                </p>
              </div>
              <div className={styles.contactInfoItem}>
                <MailFilled />
                <a href="mailto:gdscpce@mes.ac.in" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <p>gdgpce@mes.ac.in</p>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
