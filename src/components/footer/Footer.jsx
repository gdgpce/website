import { GithubOutlined, InstagramOutlined, LinkedinFilled } from "@ant-design/icons";
import styles from './footer.module.css'
import About from '../home/About';
import Visions from'../home/Visions'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerIntro}>
          <h2>Fun Events, talks and a lot more for upcoming developers.</h2>
          <a href="https://gdg.community.dev/gdg-on-campus-pillai-college-of-engineering-navi-mumbai-india/" 
              className={styles.joinButton} 
              target="_blank" 
              rel="noopener noreferrer"
          >
            Join Our Chapter
          </a>
        </div>

        <div className={`${styles.footerSection} ${styles.about}`}>
        <a href="#about"><h3>
            About
            </h3>
        </a>
          <ul>
            <li><a href="#vision"className="scroll-offset">Vision</a></li>
            <li><a href="#about">Google Technologies</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </div>

        <div className={`${styles.footerSection} ${styles.event}`}>
          
          <h3>
           <a href="/events">Events</a>
          </h3>
          <ul>
            <li><a href="/events#upcoming">Upcoming Events</a></li>
            <li><a href="/events#previous">Previous Events</a></li>
            <li><a href="/events#timeline">Timeline</a></li>
          </ul>
        </div>

        <div className={`${styles.footerSection} ${styles.team}`}>
          <h3>
           <a href="/team"> Team</a>
          </h3>
          <ul>
            <li><a href="/team#faculty">Faculty</a></li>
            <li><a href="/team#core">Core Team</a></li>
            <li><a href="/team#members">Members</a></li>
          </ul>
        </div>

        <div className={`${styles.footerSection} ${styles.contact}`}>
          <h3>
            <a href="contact">Contact</a>
          </h3>
          <ul>
            <li><a href="contact">Reach Us</a></li>
            <li><a href="contact">Developers</a></li>
            <li><a href="mailto:gdscpce@mes.ac.in">gdgpce@mes.ac.in</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.subfooter}>
        <div className={styles.subfooterContent}>
          <div className={styles.subfooterContentTitle}>Google Developer Groups On Campus • Pillai College of Engineering, New Panvel</div>
          <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/company/gdgpce/" target="_blank" 
              rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              {/* <Linkedin size={20} /> */}
              <LinkedinFilled />
            </a>
            <a href="https://github.com/gdgpce" target="_blank" rel="noopener noreferrer"className={styles.socialIcon} aria-label="GitHub">
              {/* <Github size={20} /> */}
              <GithubOutlined />
            </a>
            <a href="https://www.instagram.com/gdgpce?igsh=YnhvaWFpeDk2bTdj" target="_blank" rel="noopener noreferrer"className={styles.socialIcon} aria-label="Instagram">
              {/* <Instagram size={20} /> */}
              <InstagramOutlined />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

