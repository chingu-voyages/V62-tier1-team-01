import Hero from "../Hero/Hero";
import BlushEffect from "../BlushEffect/BlushEffect";

// Hero, HowItWorks
function LandingPage({ onNextStep }) {
  return (
    <div className="container">
      <BlushEffect />
      <Hero onNextStep={onNextStep} />
      <div>
        <span>HOW IT WORKS</span>
        <h4>A Smarter Way to Learn</h4>
        <p>From your goals to real progress - all in a few simple steps.</p>
      </div>
    </div>
  );
}

export default LandingPage;
