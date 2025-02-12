import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { BaseSurveyQuestion } from "../types/survey";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { goBack, goForward } from "../store/userAnswersSlice";
import survey from "../data/surveyConfig.json";

interface UseSurveyNavigation {
  getNextQuestionId: (currentQuestion: BaseSurveyQuestion) => string | null;
  handlePrevious: () => void;
  handleNext: () => void;
  isAnswered: boolean;
  hasPrevious: boolean;
}

export function useSurveyNavigation(
  currentQuestion: BaseSurveyQuestion,
): UseSurveyNavigation {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const answers = useAppSelector(
    (state: RootState) => state.userAnswers.answers,
  );

  const history = useAppSelector(
    (state: RootState) => state.userAnswers.history,
  );

  const isFirstQuestion =
    survey.questions.findIndex((q) => q.id === currentQuestion.id) === 0;
  const isAnswered = !!answers[currentQuestion.id];
  const hasPrevious = !isFirstQuestion && history.length >= 1;

  const getNextQuestionId = useCallback((): string | null => {
    if (typeof currentQuestion.next === "string") {
      return currentQuestion.next;
    }

    if (typeof currentQuestion.next === "object") {
      const answer = answers[currentQuestion.id];
      return currentQuestion.next?.[answer] || null;
    }

    return null;
  }, [answers, currentQuestion]);

  const handlePrevious = useCallback(() => {
    if (history.length === 1) {
      dispatch(goBack());
      router.push(`/question/${history[0]}`);
    }
    if (history.length > 1) {
      dispatch(goBack());
      router.push(`/question/${history[history.length - 1]}`);
    }
  }, [dispatch, history, router]);

  const handleNext = useCallback(() => {
    if (currentQuestion.next === "summary") {
      router.push("/summary");
      return;
    }

    dispatch(goForward({ questionId: currentQuestion.id }));

    const nextQuestionId = getNextQuestionId();
    if (nextQuestionId) {
      router.push(`/question/${nextQuestionId}`);
    }
  }, [
    currentQuestion.id,
    currentQuestion.next,
    dispatch,
    getNextQuestionId,
    router,
  ]);

  return {
    getNextQuestionId,
    handlePrevious,
    handleNext,
    isAnswered,
    hasPrevious,
  };
}
