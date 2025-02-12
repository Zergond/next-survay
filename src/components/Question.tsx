"use client";
import { replacePlaceholders } from "@/src/utils/replacePlaceholders";
import { SurveyQuestion } from "../types/survey";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { setAnswer } from "../store/userAnswersSlice";
import Button from "./ui/Button";
import { keyQuestions } from "@/src/data/surveyConfig.json";

interface QuestionScreenProps {
  question: SurveyQuestion;
}

export default function Question({ question }: QuestionScreenProps) {
  const dispatch = useAppDispatch();
  const { answers } = useAppSelector((state: RootState) => state.userAnswers);

  const text = question.conditionalText
    ? replacePlaceholders(
        question.questionText,
        question.conditionalText,
        answers,
        keyQuestions,
      )
    : question.questionText;

  const onAnswer = (answer: string) => {
    dispatch(setAnswer({ questionId: question.id, answer }));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-bold">{text}</h2>
        {question?.additionalText && (
          <h3 className="text-lg font-bold">{question?.additionalText}</h3>
        )}
      </div>

      {question.screenType === "select" &&
        question.options?.map((option) => (
          <Button
            active={option === answers[question.id]}
            key={option}
            className="w-full"
            onClick={() => onAnswer(option)}
          >
            {option}
          </Button>
        ))}
      {question.screenType === "input" && (
        <input
          type="text"
          className="rounded border p-2"
          onBlur={(e) => onAnswer(e.target.value)}
        />
      )}
    </div>
  );
}
