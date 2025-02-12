export type QuestionType = "select" | "input";

export interface ConditionalText {
  [key: string]: {
    [option: string]: string;
  };
}
export interface KeyQuestions {
  [key: string]: string;
}
export interface BaseSurveyQuestion {
  id: string;
  screenType: string;
  additionalText?: string;
  conditionalText?: ConditionalText;
  questionText: string;
  next: string | Record<string, string> | null;
}

export interface SelectQuestion extends BaseSurveyQuestion {
  screenType: "select";
  options: string[];
}

export interface InputQuestion extends BaseSurveyQuestion {
  screenType: "input";
  placeholder?: string;
}

export type SurveyQuestion = SelectQuestion | InputQuestion;
