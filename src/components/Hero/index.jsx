import styles from "./styles.module.css";
import playButton from "/src/assets/play-button.svg";
import separationBar from "/src/assets/separation-bar.svg";
import heroImg from "/src/assets/banner-img.svg";
import NextButton from "../NextButton";

function Hero({ onNextStep }) {
  return (
    <div className={styles.card}>
      <div className={styles.textSection}>

        <div>
          <span className={styles.subtitle}>AI-POWERED LEARNING PATHS</span>
          <h2 className={styles.title}>
            From Curiosity
            <br />
            to Career.
          </h2>
          <p className={styles.text}>
            Turn your goals into a clear, step-by-step learning journey. Our AI analyzes your current level, identifies the most relevant skills, and builds a personalized roadmap to help you grow faster and with confidence—no more guessing what to learn next.
          </p>
        </div>
        
        <div className={styles.buttons}>
          <NextButton nextStep={onNextStep}>
            <span>Generate your path</span>
          </NextButton>
          <button className={styles.buttonPlay}>
            <img className={styles.iconPlay} src={playButton} alt="play button" />
            <span>Watch demo</span>
          </button>
        </div>
        
        <div className={styles.infos}>
          <div className={styles.cardInfo}>
            <p className={styles.cardText}>A roadmap that fits your goals</p>
          </div>
          <img src={separationBar} />
          <div className={styles.cardInfo}>
            <p className={styles.cardText}>Help you focus on what really matters</p>
          </div>
          <img src={separationBar} />
          <div className={styles.cardInfo}>
            <p className={styles.cardText}>Clear, structured, and easy to follow</p>
          </div>
        </div>
      </div>
      
      <img className={styles.img} src={heroImg} alt="hero image" />
    </div>
  );
}

export default Hero;
