import LearningPathItem from "./LearningPathItem"

// todo
function LearningPathResult({ isWaiting, aiAnswer }) {

  if (aiAnswer === "") {
    return null
  }

  return (
    <div>
      <h2>Results:</h2>
      {isWaiting && <div className="loader"></div>}
      {aiAnswer !== "" && 
        aiAnswer
          .split("$")
          .map(item => (
            <LearningPathItem key={item} item={item}/>
          ))
      }
    </div>
  )
}

export default LearningPathResult