import { Link } from "react-router-dom";
import brandIcon from "../../assets/brandlogo.svg";
// import searchIcon from "../../assets/search-icon.svg";
import style from "./header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.brandLogo}>
        <img src={brandIcon} alt="Brand Icon" className={style.brandIcon} />
      </div>

      <nav className={style.navigation}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/">My Learning</Link>
      </nav>

      {/* <button className={style.btn}>
        <img src={searchIcon} alt="Search" />
      </button> */}
    </header>
  );
}