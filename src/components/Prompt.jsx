import { useState } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai"

function Prompt() {
  const [aiAnswer, setAiAnswer] = useState("")
  const [career, setCareer] = useState("")
  const [skillLevel, setSkillLevel] = useState("")
  const [isWaiting, setIsWaiting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    setAiAnswer("")
    setIsWaiting(true)

    const contextInfo = `
      You are an AI Career Path Generator.

      1. Your role is to transform a user's career goal into a clear, personalized, step-by-step learning journey.

      2. This is a web application that helps users understand what to learn next, removing guesswork by providing a tailored path based on their current skill level and desired career.

      3. The user's career goal is: ${career}
        The user's current skill level is: ${skillLevel}

      4. Generate a structured learning path that:
        - Is practical and actionable
        - Progresses step by step from the user's current level
        - Includes relevant skills, tools, and technologies
        - Is aligned with real-world job requirements

      5. If the user input is not a valid career goal, ask the user to reformulate the request.

      6. Output format:
        - Write everything in a single line
        - Separate each step or sentence using the '$' character
    `

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)
      const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite" })
      const result = await model.generateContent(contextInfo.concat(" ", prompt))

      setAiAnswer(result.response.text())
      console.log(prompt)

    } catch (err) {
      alert("!! Error while generating content, please try again later !!")
    }
    setIsWaiting(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Your career goal: </label>
        <input type="text" value={career} onChange={e => setCareer(e.target.value)} />
        <label>Your current skill level: </label>
        <select value={skillLevel} onChange={e => setSkillLevel(e.target.value)}>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
        <button>Submit</button>
      </form>   
      <h2>Results:</h2>
      {isWaiting && <div className="loader"></div>}
      {aiAnswer !== "" && 
        aiAnswer
          .split("$")
          .map(a => (
            <p key={a} style={{ backgroundColor: "#e9db5c", marginBottom: "16px", marginTop: "16px" }}>{a}</p>
          ))
      }
    </div>
  )
}

export default Prompt