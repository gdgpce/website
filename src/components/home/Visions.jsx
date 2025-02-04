import styles from "./page.module.css";

export default function Visions() {
    return (
        <div id="vision"className={styles.visions}>
            <div className={styles.visionItem}>
                <h2>Explore</h2>
                <p>
                    Explore the future of technology with GDG PCE through immersive workshops, talk sessions and hackathons. 
                </p>
            </div>
            <div className={styles.visionItem}>
                <h2>Engage</h2>
                <p>
                    Engage, collaborate, and grow with GDG-PCE and connect with tech leaders and like-minded innovators.                
                </p>
            </div>
            <div className={styles.visionItem}>
                <h2>Evolve</h2>
                <p>
                    Evolve your tech skills through our coding challenges and opportunities to interact with industry experts.
                </p>
            </div>
        </div>
    );
}
