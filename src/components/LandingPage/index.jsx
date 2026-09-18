import bannerImg from "/src/assets/banner-img.svg";
import playButton from "/src/assets/play-button.svg";
import styles from "./LandingPage.module.css";

function LandingPage({ onNextStep }) {
  return (
    <div className="container">
      <div className={styles.lpBox}>
        <div className={styles.lpTextSection}>
          <div>
            <span className={styles.lpTitleSmall}>AI-POWERED LEARNING PATHS</span>
            <h2 className={styles.lpTitle}>
              From Curiosity
              <br />
              to Career.
            </h2>
            <p className={styles.lpText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              aliquid rerum dolor vitae voluptas minima harum, in quam corporis
              consectetur debitis molestias recusandae, explicabo distinctio.
            </p>
          </div>
          <div className={styles.buttonsBox}>
            <button className={styles.buttonNextPage} onClick={onNextStep}>
              <span>Generate your path</span>
            </button>
            <button className={styles.buttonPlay}>
              <img className={styles.iconPlay} src={playButton} alt="play button" />
              <span>Watch demo</span>
            </button>
          </div>
        </div>
        <img className={styles.bannerImg} src={bannerImg} alt="banner image" />
      </div>
    </div>
  );
}

export default LandingPage;
