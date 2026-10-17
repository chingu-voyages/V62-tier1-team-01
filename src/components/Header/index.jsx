import { Link } from "react-router-dom";
import brandIcon from "../../assets/brandlogo.svg";
// import searchIcon from "../../assets/search-icon.svg";
import menuButton from "../../assets/burger-menu.svg";
import styles from "./header.module.css";
import { useState } from "react";

export default function Header() {
  const isMobileScreen = window.innerWidth <= 768;
  const [isOpen, setIsOpen] = useState(isMobileScreen ? false : true);

  function handleOpen() {
    setIsOpen(o => !o);
  }

  return (
    <div className="container">
      <header className={styles["header"]}>
        <div>
          <img src={brandIcon} alt="Brand Icon" className={styles["logo"]} />
          <div className={styles["button"]} onClick={handleOpen}>
            <img src={menuButton} alt="Menu Button"/>
          </div>
        </div>
        <nav className={isOpen ? styles["navbar"] : styles["hide"]}>
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/about">About</Link>
          </span>
          <span>
            <Link to="/my-learning">My Learning</Link>
          </span>
        </nav>
      </header>
    </div>
  );
}

{/* <button className={style.btn}>
  <img src={searchIcon} alt="Search" />
</button> */}
