import styles from "./page.module.css";

export default function Visions() {
    return (
        <div id="vision"className={styles.visions}>
            <div className={styles.visionItem}>
                <h2>Explore</h2>
                <p>Dive into the world of cutting-edge tech education through our expertly curated workshops, hackathons, and speaker sessions.
                   Whether it’s learning the fundamentals of cloud computing, mastering machine learning, or understanding the latest in web development, GDG-PCE provides hands-on experiences that make complex concepts accessible to all.</p>
            </div>
            <div className={styles.visionItem}>
                <h2>Engage</h2>
                <p>Expand your network by connecting with peers, tech leaders, and professionals.
                   GDG-PCE offers a unique platform to collaborate with like-minded individuals, participate in peer-to-peer learning, and brainstorm innovative solutions for real-world challenges.
                   Build lasting relationships that can help shape your journey as a future-ready developer.</p>
            </div>
            <div className={styles.visionItem}>
                <h2>Evolve</h2>
                <p>Take your technical abilities to the next level with study jams, webinars, and the annual Solution Challenge competition.
                    Learn to design, develop, and implement impactful solutions that address local and global problems.
                    Gain hands-on experience while earning the opportunity to win exciting prizes from Google.</p>
            </div>
        </div>
    );
}
