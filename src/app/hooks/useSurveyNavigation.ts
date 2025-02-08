import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyQuestion } from '../types/survey';
import { RootState } from '../store';
import { goBack } from '../store/userAnswersSlice';

interface UseSurveyNavigation {
  getNextQuestionId: (currentQuestion: SurveyQuestion) => string | null;
  handlePrevious: () => void;
  handleNext: (question: SurveyQuestion) => void;
  isSurveyComplete: (currentQuestion: SurveyQuestion) => boolean;
}

export function useSurveyNavigation(): UseSurveyNavigation {
  const router = useRouter();
  const dispatch = useDispatch();
  const answers = useSelector((state: RootState) => state.userAnswers.answers);
  const history = useSelector((state: RootState) => state.userAnswers.history);

  const isSurveyComplete = useCallback((currentQuestion: SurveyQuestion): boolean => {
    return currentQuestion.screenType === 'summary';
  }, []);

  const getNextQuestionId = useCallback(
    (currentQuestion: SurveyQuestion): string | null => {
      if (typeof currentQuestion.next === 'string') {
        return currentQuestion.next;
      }

      if (typeof currentQuestion.next === 'object') {
        const answer = answers[currentQuestion.id];
        return currentQuestion.next[answer] || null;
      }

      return null;
    },
    [answers],
  );

  const handlePrevious = useCallback(() => {
    if (history.length > 1) {
      dispatch(goBack());
      router.push(`/${history[history.length - 2]}`);
    }
  }, [dispatch, history, router]);

  const handleNext = useCallback(
    (question: SurveyQuestion) => {
      if (isSurveyComplete(question)) {
        console.log('Survey Completed:', answers);
        return;
      }

      const nextQuestionId = getNextQuestionId(question);
      if (nextQuestionId) {
        router.push(`/${nextQuestionId}`);
      }
    },
    [answers, getNextQuestionId, isSurveyComplete, router],
  );

  return { getNextQuestionId, handlePrevious, handleNext, isSurveyComplete };
}
