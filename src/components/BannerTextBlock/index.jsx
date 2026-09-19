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
          <p className={styles.reviewText}>Lorem ipsum</p>
        </div>
        <img src={separationBar} />
        <div className={styles.reviewCard}>
          <p className={styles.reviewText}>Lorem ipsum</p>
        </div>
        <img src={separationBar} />
        <div className={styles.reviewCard}>
          <p className={styles.reviewText}>Lorem ipsum</p>
        </div>
      </div>
    </div>
  );
}

export default BannerTextBlock;
