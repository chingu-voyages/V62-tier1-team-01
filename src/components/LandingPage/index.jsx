import Hero from "../Hero";
import BlushEffect from "../BlushEffect";
import Modal from "../Modal";

function LandingPage({ onNextStep }) {
  return (
    <>
      <BlushEffect />
      <Hero onNextStep={onNextStep} />
      <Modal onNextStep={onNextStep} />
    </>
  );
}

export default LandingPage;
