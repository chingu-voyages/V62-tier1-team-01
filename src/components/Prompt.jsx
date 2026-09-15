import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import UserInputForm from "./UserInputForm";
import LearningPathResult from "./LearningPathResult";
import LearningPathBanner from "./LearningPathBanner";

function Prompt() {
  const [aiAnswer, setAiAnswer] = useState("");
  const [career, setCareer] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [timeCommitment, setTimeCommitment] = useState(0);
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

      3. The user's career goal is: ${career}
         The user's current skill level is: ${skillLevel}
         The user time commitment (hours per week) is: ${timeCommitment}

      4. Generate a structured learning path that:
        - Is practical and actionable
        - Progresses step by step from the user's current level and based on his weekly commitment
        - Includes relevant skills, tools, and technologies
        - Is aligned with real-world job requirements

      5. If the user input is not a valid career goal, ask the user to reformulate the request.

      6. Output format:
        - Write everything in a single line
        - Separate each step or sentence using the '$' character
    `;

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({
        model: "gemini-3.1-flash-lite",
      });
      const result = await model.generateContent(
        contextInfo.concat(" ", prompt)
      );

      setAiAnswer(result.response.text());
      console.log(prompt);
    } catch (err) {
      alert("Error while generating content, please try again later");
    }
    setIsWaiting(false);
  }

  if (step === 0) {
    return <LearningPathBanner step={step} setStep={setStep} />;
  }

  return (
    <div>
      <div>
        <UserInputForm
          onSubmit={handleSubmit}
          career={career}
          setCareer={setCareer}
          timeCommitment={timeCommitment}
          setTimeCommitment={setTimeCommitment}
          skillLevel={skillLevel}
          setSkillLevel={setSkillLevel}
        />
        <LearningPathResult isWaiting={isWaiting} aiAnswer={aiAnswer} />
      </div>
      <button onClick={() => setStep(step - 1)}>Previous</button>
    </div>
  );
}

export default Prompt;
