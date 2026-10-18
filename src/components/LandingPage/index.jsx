import Hero from "../Hero";
import Modal from "../Modal";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LearningPathContext } from "../../App";

function LandingPage() {
  const navigate = useNavigate();
  const { inLocalStorage, goToTop } = useContext(LearningPathContext);

  function onNextStep() {
    navigate("/career-quiz");
    goToTop();
  }
  return (
    <>
      <Hero onNextStep={onNextStep} />
      <Modal onNextStep={onNextStep} />
    </>
  );
}

export default LandingPage;
