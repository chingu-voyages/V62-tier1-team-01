import Hero from "../Hero";
import Modal from "../Modal";

function LandingPage({ onNextStep }) {
  return (
    <>
      <Hero onNextStep={onNextStep} />
      <Modal onNextStep={onNextStep} />
    </>
  );
}

export default LandingPage;
