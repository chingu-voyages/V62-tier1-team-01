import searchIcon from "../assets/search-icon.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>NEXA</h1>

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
