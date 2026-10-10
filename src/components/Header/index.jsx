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
        <a href="/">Home</a>
        <a href="/">My Learning</a>
      </nav>

      {/* <button className={style.btn}>
        <img src={searchIcon} alt="Search" />
      </button> */}
    </header>
  );
}
