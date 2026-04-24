import ScoreGauge from "./ScoreGauge";

const ScoreBadge = ({ score }: { score: number }) => {
  const color =
    score > 69
      ? "text-green-500 bg-green-100"
      : score > 44
        ? "text-yellow-500 bg-yellow-100"
        : "text-red-500 bg-red-100";

  const text = score > 69 ? "Strong" : score > 44 ? "Moderate" : "Weak";
  return (
    <div className={`px-2 py-1 rounded-full text-sm font-semibold ${color}`}>
      {text}
    </div>
  );
};

const Category = ({ title, score }: { title: string; score: number }) => {
  const textColor =
    score > 69
      ? "text-green-500"
      : score > 44
        ? "text-yellow-500"
        : "text-red-500";

  return (
    <div className="resume-summary">
      <div className="category">
        <div className="flex flex-row gap-2 items-center justify-center">
          <p className="text-2xl">{title}</p>
          <ScoreBadge score={score} />
        </div>
        <p className="text-2xl">
          <span className={textColor}>{score}%</span>
        </p>
      </div>
    </div>
  );
};
const Summary = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md w-full">
      <div className="flex flex-row items-center p-4 gap-8">
        <ScoreGauge score={feedback.overallScore} />
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Your Resume Score</h2>
          <p className="text-sm text-gray-500">
            This score is calculated based on the variables listed below.
          </p>
        </div>
      </div>
      <Category title="Tone & Style" score={feedback.toneAndStyle.score} />
      <Category title="Content" score={feedback.content.score} />
      <Category title="Skills" score={feedback.skills.score} />
      <Category title="Structure" score={feedback.structure.score} />
    </div>
  );
};

export default Summary;
