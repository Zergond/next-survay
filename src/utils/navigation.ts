import { BaseSurveyQuestion } from "../types/survey";
import { RootState } from "../store";

export function getNextQuestionId(
  currentQuestion: BaseSurveyQuestion,
  answers: RootState["userAnswers"]["answers"],
): string | null {
  if (typeof currentQuestion.next === "string") {
    return currentQuestion.next;
  }

  if (typeof currentQuestion.next === "object") {
    const answer = answers[currentQuestion.id];
    return currentQuestion.next?.[answer] || null;
  }

  return null;
}

export function isSurveyComplete(currentQuestion: BaseSurveyQuestion): boolean {
  return currentQuestion.screenType === "summary";
}
