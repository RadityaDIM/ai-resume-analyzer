import { AlertCircle, CheckCircle, FileDetail } from "@boxicons/react";

const FeedbackType = ({
  type,
  tip,
}: {
  type: "good" | "improve";
  tip: string;
}) => {
  const textColor = type === "good" ? "text-green-500" : "text-yellow-500";

  const icon =
    type === "good" ? (
      <CheckCircle className={`size-7 ${textColor}`} />
    ) : (
      <AlertCircle className={`size-7 ${textColor}`} />
    );

  return (
    <div className="flex flex-row items-start gap-2 mt-2">
      <div>{icon}</div>
      <span className={`text-lg font-mono ${textColor}`}>{tip}</span>
    </div>
  );
};

const Ats = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="bg-linear-to-b from-green-100 to-white rounded-2xl shadow-md w-full p-8 py-10">
      <div className="flex flex-row items-center p-4 gap-4">
        <FileDetail className="size-20 text-blue-800 animate-pulse" />
        <div className="flex flex-col gap-2">
          <span className="text-3xl font-semibold text-gray-700">
            ATS Score -{" "}
            <span className="text-blue-800 text-4xl font-sans">
              {feedback.ATS.score}/100
            </span>
          </span>
        </div>
      </div>
      <p className="text-xl font-semibold text-gray-700">
        How well does your resume pass the Applicant Tracking System (ATS)?
      </p>
      <div className="text-lg text-gray-500 mt-2">
        <p>
          Your resume was scanned like an employer would. Here's how well it
          performed:
        </p>
        <div className="mt-4">
          {feedback.ATS.tips.map((item, index) => (
            <FeedbackType key={index} type={item.type} tip={item.tip} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ats;
