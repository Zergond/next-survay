export type QuestionType = 'select' | 'input' | 'summary';

export interface BaseSurveyQuestion {
  id: string;
  screenType: QuestionType;
  questionText: string;
  previous?: string;
  next?: Record<string, string> | string;
}

export interface SelectQuestion extends BaseSurveyQuestion {
  screenType: 'select';
  options: string[];
}

export interface InputQuestion extends BaseSurveyQuestion {
  screenType: 'input';
  placeholder?: string;
}

export interface SummaryQuestion extends BaseSurveyQuestion {
  screenType: 'summary';
}

export type SurveyQuestion = SelectQuestion | InputQuestion | SummaryQuestion;
