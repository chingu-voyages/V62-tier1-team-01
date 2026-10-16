import { FaGithub, FaLinkedin, FaYoutube, FaXTwitter } from "react-icons/fa6";
import brandIcon from "../../assets/brandlogo.svg";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.brandLogo}>
        <img src={brandIcon} alt="Brand Icon" className={style.brandIcon} />
        <p className={style.brandDescription}>
          AI-powered learning paths,<br></br>from curiosity to career.
        </p>
      </div>

      <nav className={style.footerMenu}>
          <div className={style.footerMenuColumn}>
          <h3>Pages</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/generate">Your path</a>
        </div>

        <div className={style.footerMenuColumn}>
          <h3>Project</h3>
          <a href="https://github.com/chingu-voyages/V62-tier1-team-01" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
          <a href="https://www.chingu.io/" target="_blank" rel="noopener noreferrer">
            Chingu
          </a>
        </div>

        <div className={style.footerMenuColumn}>
          <h3>Team</h3>
          <a href="https://github.com/llsy97" target="_blank" rel="noopener noreferrer">
            Claire Lee
          </a>
          <a href="https://github.com/umfrancisco" target="_blank" rel="noopener noreferrer">
            Francisco Guitler
          </a>
          <a href="https://github.com/wmurphy-collabstar" target="_blank" rel="noopener noreferrer">
            Winona Murphy
          </a>
        </div>
      </nav>

      <div className={style.footerSocialMedia}>
        <div className={style.socialIcons}>
          <a href="https://github.com/chingu-voyages/V62-tier1-team-01" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/company/18123446/?skipRedirect=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>

          <a href="https://www.youtube.com/channel/UCYFk6s_DEmtIt3kvClWZGDg" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>

          <a href="https://x.com/ChinguCollabs" target="_blank" rel="noopener noreferrer" aria-label="X">
            <FaXTwitter />
          </a>
        </div>

        <div className={style.footerCopyright}>
          <p>&copy; 2026 NEXA. A Chingu Voyage 62 project (Tier 1 · Team 1).</p>
        </div>
      </div>
    </footer>
  );
}
