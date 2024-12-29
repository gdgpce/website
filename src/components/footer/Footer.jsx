import { Github, Instagram, Linkedin } from 'lucide-react'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerIntro}>
          <h2>Fun Events, talks and a lot more for upcoming developers.</h2>
          <a href="#join" className={styles.joinButton}>Join Our Chapter</a>
        </div>

        <div className={`${styles.footerSection} ${styles.about}`}>
          <h3>About</h3>
          <ul>
            <li><a href="#vision">Vision</a></li>
            <li><a href="#technologies">Google Technologies</a></li>
          </ul>
        </div>

        <div className={`${styles.footerSection} ${styles.event}`}>
          <h3>Event</h3>
          <ul>
            <li><a href="#upcoming">Upcoming Events</a></li>
            <li><a href="#previous">Previous Events</a></li>
          </ul>
        </div>

        <div className={`${styles.footerSection} ${styles.team}`}>
          <h3>Team</h3>
          <ul>
            <li><a href="#faculty">Faculty</a></li>
            <li><a href="#members">Members</a></li>
          </ul>
        </div>

        <div className={`${styles.footerSection} ${styles.contact}`}>
          <h3>Contact</h3>
          <ul>
            <li><a href="mailto:gdgpce@mes.ac.in">gdgpce@mes.ac.in</a></li>
            <li><a href="#join-us">Join us</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.subfooter}>
        <div className={styles.subfooterContent}>
          <div>Google Developer Groups On Campus • Pillai College of Engineering</div>
          <div className={styles.socialIcons}>
            <a href="#instagram" className={styles.socialIcon} aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#linkedin" className={styles.socialIcon} aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#github" className={styles.socialIcon} aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

