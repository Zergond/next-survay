"use client";
import { questions, keyQuestions } from "@/src/data/surveyConfig.json";
import { useAppDispatch, useAppSelector } from "@/src/store";
import Button from "@/src/components/ui/Button";
import { clearState } from "@/src/store/userAnswersSlice";
import { replacePlaceholders } from "@/src/utils/replacePlaceholders";
import { BaseSurveyQuestion } from "@/src/types/survey";

const Summary = () => {
  const { answers } = useAppSelector((state) => state.userAnswers);
  const dispatch = useAppDispatch();

  const answeredQuestions = Object.entries(answers).map(
    ([questionId, answer]) => {
      const question = questions.find(
        (q) => q.id === questionId,
      ) as BaseSurveyQuestion;

      const text = question.conditionalText
        ? replacePlaceholders(
            question.questionText,
            question.conditionalText,
            answers,
            keyQuestions,
          )
        : question.questionText;

      return { question: text, answer };
    },
  );

  const onFinish = () => {
    dispatch(clearState());
  };

  return (
    <div className="flex min-h-screen flex-col gap-6 bg-purple-gradient text-white">
      <div className="mt mt-8 grid grid-cols-[320px] justify-center gap-4">
        {answeredQuestions.map(({ question, answer }, index) => (
          <div key={question}>
            <div>
              {`${index + 1}.`}
              {question} - <span className="font-bold">{answer}</span>
            </div>
          </div>
        ))}
        <Button onClick={onFinish}>Finish</Button>
      </div>
    </div>
  );
};

export default Summary;
