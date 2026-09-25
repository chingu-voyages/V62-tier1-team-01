import LearningPathItem from "../LearningPathItem";

// todo
function LearningPathResult({ aiAnswer }) {
  return (
    <div>
      {aiAnswer.split("$").map((item) => (
        <LearningPathItem key={item} item={item} />
      ))}
    </div>
  );
}

export default LearningPathResult;
