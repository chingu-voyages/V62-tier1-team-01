import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <span>NEXA · Chingu Voyage 62</span>
        <a
          href="https://github.com/chingu-voyages/V62-tier1-team-01"
          target="_blank"
          rel="noopener noreferrer"
        >
          Team GitHub repository
        </a>
      </div>
    </footer>
  );
}

export default Footer;
