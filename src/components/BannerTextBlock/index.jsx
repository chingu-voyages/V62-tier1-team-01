import styles from "./styles.module.css";
import playButton from "/src/assets/play-button.svg";
import separationBar from "/src/assets/separation-bar.svg";

function BannerTextBlock({ onNextStep }) {
  return (
    <div className={styles.textSection}>
      <div>
        <span className={styles.smallTitle}>AI-POWERED LEARNING PATHS</span>
        <h2 className={styles.mainTitle}>
          From Curiosity
          <br />
          to Career.
        </h2>
        <p className={styles.text}>
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
      <div className={styles.reviewBox}>
        <div className={styles.reviewCard}>
          <span>50K+</span>
          <p className={styles.reviewText}>Active Learners</p>
        </div>
        <img src={separationBar} />
        <div className={styles.reviewCard}>
          <span>95%</span>
          <p className={styles.reviewText}>Recommended Us</p>
        </div>
        <img src={separationBar} />
        <div className={styles.reviewCard}>
          <span>200+</span>
          <p className={styles.reviewText}>Learning Resources</p>
        </div>
      </div>
    </div>
  );
}

export default BannerTextBlock;
