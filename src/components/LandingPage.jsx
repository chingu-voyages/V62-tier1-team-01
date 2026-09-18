import bannerImg from "/src/assets/banner-img.svg";
import playButton from "/src/assets/play-button.svg";

function LandingPage({ onNextStep }) {
  return (
    <div className="container">
      <div className="lp-box">
        <div className="lp-text-section">
          <div>
            <span className="lp-title-small">AI-POWERED LEARNING PATHS</span>
            <h2 className="lp-title">From Curiosity<br/>to Career.</h2>
            <p className="lp-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem aliquid rerum dolor vitae voluptas minima harum, in quam corporis consectetur debitis molestias recusandae, explicabo distinctio.
            </p>
          </div>
          <div className="buttons-box">
            <button className="button-next-page" onClick={onNextStep}>
              <span>Generate your path</span>
            </button>
            <button className="button-play">
              <img className="icon-play" src={playButton} alt="play button" />
              <span>Watch demo</span>
            </button>
          </div>
        </div>
        <img className="banner-img" src={bannerImg} alt="banner image" />
      </div>
    </div>
  );
}

export default LandingPage;
