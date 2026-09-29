import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.content}`}>
        <a className={styles.brand} href="/" aria-label="NEXA home">
          NEXA
        </a>
      </div>
    </header>
  );
}

export default Header;
