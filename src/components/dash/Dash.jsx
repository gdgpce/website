// components/dash/Dash.jsx
import styles from "./page.module.css";

const CenteredDash = () => {
    return (
        <div className={styles.dash}>
            <div className={styles.a}></div>
            <div className={styles.b}></div>
            <div className={styles.a}></div>
        </div>
    );
  };

  const DottedDash = () => {
    return (
        <div className={styles.dash}>
            <div className={styles.b}></div>
            <div className={styles.a}></div>
            <div className={styles.b}></div>
        </div>
    );
  };
  
  const SideDash = () => {
    return (
        <div className={styles.dash}>
            <div className={styles.a}></div>
            <div className={styles.b}></div>
        </div>
    );
  };

  const LongDash = () => {
    return (
        <div className={styles.dash}>
            <div className={styles.c}></div>
        </div>
    );
  };
  
  // Export the components
  export { CenteredDash, DottedDash, SideDash, LongDash };
  