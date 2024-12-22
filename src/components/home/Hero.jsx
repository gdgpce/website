import styles from "./page.module.css";

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.con}>
                <div className={styles.left}>
                    <div className={styles.heading}>
                        Google Developer Groups
                    </div>
                    <div className={styles.subHeading}>
                        On Campus • Pillai College of Engineering
                    </div>
                    <div className={styles.para}>
                        Dive into a vibrant community of creative minds and tech enthusiasts driving innovation across diverse fields.
                    </div>
                    <div className={styles.join}>
                        Join our community
                    </div>
                </div>
                <div className={styles.right}>
                    
                </div>
            </div>
            <img src="/hero-bg.svg" alt="bg" />
        </div>
    );
}