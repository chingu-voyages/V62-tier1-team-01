import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import UserInputForm from "../UserInputForm";
import LearningPathResult from "../LearningPathResult";
import LandingPage from "../LandingPage";
import Button from "../Button";
import styles from "./styles.module.css";

const initialState = {
  career: "Front-end Development",
  skills: "HTML, CSS, JavaScript",
  experienceLevel: "Complete Beginner",
  timeCommitment: "Less than 3 hrs",
}

function AiGeneratedPath() {
  const [aiAnswer, setAiAnswer] = useState("");
  const [userPrompt, setUserPrompt] = useState(initialState);
  const [isWaiting, setIsWaiting] = useState(false);
  const [step, setStep] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();

    setAiAnswer("");
    setIsWaiting(true);

    const contextInfo = `
      You are an AI Career Path Generator.

      1. Your role is to transform a user's career goal into a clear, personalized, step-by-step learning journey.

      2. This is a web application that helps users understand what to learn next, removing guesswork by providing a tailored path based on their current skill level and desired career.

      3. The user's career goal is: ${userPrompt.career}
         The user's background and existing skills are: ${userPrompt.skills}
         The user's current skill level is: ${userPrompt.experienceLevel}
         The user time commitment is: ${userPrompt.timeCommitment} per week

      4. Generate a structured learning path that:
        - Is practical and actionable
        - Progresses step by step from the user's current level and based on his weekly commitment
        - Includes relevant skills, tools, and technologies
        - Is aligned with real-world job requirements

      5. If the user input is not a valid career goal, ask the user to reformulate the request.

      6. Output format:
        - Write everything in a single line
        - Separate each step of the learning path using the '$' character
    `;

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({
        model: "gemini-3.1-flash-lite",
      });
      const result = await model.generateContent(contextInfo);

      setAiAnswer(result.response.text());
    } catch (err) {
      alert("Error while generating content, please try again later");
    }
    setIsWaiting(false);
  }

  function handleNext() {
    setStep((s) => s + 1);
  }

  function handlePrevious() {
    setStep((s) => s - 1);
  }

  if (step === 0) {
    return <LandingPage onNextStep={handleNext} />;
  }

  if (step === 1) {
    return (
      <div className="container">
        <UserInputForm
          onSubmit={handleSubmit}
          userPrompt={userPrompt}
          setUserPrompt={setUserPrompt}
          aiAnswer={aiAnswer}
        />
        <div className={styles["buttons"]}>
          {!isWaiting && (
            <Button onPrevious={handlePrevious} marginRight={"8px"}>
              Previous
            </Button>
          )}
          {aiAnswer === "" ? null : (
            <Button onNext={handleNext} marginRight={"8px"}>
              Next
            </Button>
          )}
        </div>
        {isWaiting && (
          <div className={styles["loadingArea"]}>
            <div className="loader"></div>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <LearningPathResult aiAnswer={aiAnswer} />
      <button onClick={handlePrevious}>Previous</button>
    </>
  );
}

export default AiGeneratedPath;
