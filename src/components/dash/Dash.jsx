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
  
  const SideDash = (props) => {
    return (
        <div className={styles.dash}>
            <div className={styles.a} style={{ backgroundColor: props.color }}></div>
            <div className={styles.b} style={{ backgroundColor: props.color }}></div>
        </div>
    );
  };

  const LongDash = (props) => {
    return (
        <div className={styles.dash}>
            <div className={styles.c} style={{ backgroundColor: props.color }}></div>
        </div>
    );
  };
  
  // Export the components
  export { CenteredDash, DottedDash, SideDash, LongDash };
  