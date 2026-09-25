import styles from "./styles.module.css";
import separationBar from "/src/assets/separation-bar.svg";
import heroImg from "/src/assets/banner-img.svg";
import Button from "../Button";
import VideoButton from "../VideoButton";
import { useState } from "react";

function Hero({ onNextStep }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((o) => !o);
  }

  return (
    <div className="container">
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
              Turn your goals into a clear, step-by-step learning journey. Our
              AI analyzes your current level, identifies the most relevant
              skills, and builds a personalized roadmap to help you grow faster
              and with confidence—no more guessing what to learn next.
            </p>
          </div>

          <div className={styles.buttons}>
            <Button onNext={onNextStep}>
              <span>Generate your path</span>
            </Button>
            <VideoButton onOpen={handleOpen}>
              <span>{isOpen ? "Close video" : "Watch demo"}</span>
            </VideoButton>
          </div>

          <div className={styles.infos}>
            <div className={styles.cardInfo}>
              <p className={styles.cardText}>A roadmap that fits your goals</p>
            </div>
            <img src={separationBar} />
            <div className={styles.cardInfo}>
              <p className={styles.cardText}>
                Help you focus on what really matters
              </p>
            </div>
            <img src={separationBar} />
            <div className={styles.cardInfo}>
              <p className={styles.cardText}>
                Clear, structured, and easy to follow
              </p>
            </div>
          </div>

          <div className={isOpen ? styles.showVideo : styles.hideVideo}>
            <iframe
              className={styles.iframe}
              src="https://placehold.co/480x320"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <img className={styles.img} src={heroImg} alt="hero image" />
      </div>
    </div>
  );
}

export default Hero;
