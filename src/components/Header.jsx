import brandIcon from "../assets/logo.png";
import searchIcon from "../assets/search-icon.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="brand-logo">
        <img src={brandIcon} alt="Brand Icon" className="brand-icon" />
      </div>

      <nav className="navigation">
        <a href="/">Home</a>
        <a href="/">My Learning</a>

        <button className="btn">
          <img src={searchIcon} alt="Search" />
        </button>
      </nav>
    </header>
  );
}

export default Header;