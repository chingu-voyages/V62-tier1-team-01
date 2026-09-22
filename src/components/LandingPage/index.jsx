import Hero from "../Hero";
import BlushEffect from "../BlushEffect";
import Modal from "../Modal";

function LandingPage({ onNextStep }) {
  return (
    <div className="container">
      <BlushEffect />
      <Hero onNextStep={onNextStep} />
      <Modal onNextStep={onNextStep} />
    </div>
  );
}

export default LandingPage;
