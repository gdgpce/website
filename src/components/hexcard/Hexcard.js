import styles from './page.module.css';

export default function Hexcard() {
  return (
    <div className={styles.hexCardWrapper}>
      <div className={styles.hexCard}>
        <img
          src="/temp/blue1.png"
          alt="Hex Card Image"
          className={styles.image}
        />
        {/* <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="113.951" y="194.951" width="80" height="29" rx="14.5" transform="rotate(-30 113.951 194.951)" fill="#40ACFF" stroke="#0E0023" stroke-width="3"/>
          <rect x="128.451" y="179.951" width="80" height="29" rx="14.5" transform="rotate(30 128.451 179.951)" fill="#40ACFF" stroke="#0E0023" stroke-width="3"/>
          <rect x="201.951" y="219.951" width="80" height="29" rx="14.5" transform="rotate(-30 201.951 219.951)" fill="#40ACFF" stroke="#0E0023" stroke-width="3"/>
          <rect x="216.451" y="154.951" width="80" height="29" rx="14.5" transform="rotate(30 216.451 154.951)" fill="#40ACFF" stroke="#0E0023" stroke-width="3"/>
        </svg> */}

      </div>
    </div>
  );
}
