import LearningPathItem from "../LearningPathItem";

// todo
function LearningPathResult({ isWaiting, aiAnswer }) {
  return (
    <div>
      {isWaiting && <div className="loader"></div>}
      {aiAnswer.split("$").map((item) => (
        <LearningPathItem key={item} item={item} />
      ))}
    </div>
  );
}

export default LearningPathResult;
