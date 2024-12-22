import styles from "./page.module.css";

export default function Visions() {
    return (
        <div className={styles.visions}>
            <div className={styles.visionItem}>
                <h2>Explore</h2>
                <p>Explore cutting-edge technologies and enhance your skills with expert-led sessions and resources.</p>
            </div>
            <div className={styles.visionItem}>
                <h2>Engage</h2>
                <p>Network with like-minded developers and technologists from diverse backgrounds.</p>
            </div>
            <div className={styles.visionItem}>
                <h2>Evolve</h2>
                <p>Advance your skills and career by leveraging community-driven opportunities.</p>
            </div>
        </div>
    );
}