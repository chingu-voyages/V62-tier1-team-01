import bannerImg from "/src/assets/banner-img.svg";
import styles from "./styles.module.css";
import BannerTextBlock from "../BannerTextBlock";
import BlushGroup from "../BlushGroup";

function LandingPage({ onNextStep }) {
  return (
    <div className="container">
      <div className={styles.box}>
        <BlushGroup />
        <BannerTextBlock onNextStep={onNextStep} />
        <img className={styles.bannerImg} src={bannerImg} alt="banner image" />
      </div>
    </div>
  );
}

export default LandingPage;
