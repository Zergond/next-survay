export interface UserAnswersState {
  answers: Record<string, string>;
  history: string[];
}

export interface AppStates {
  userAnswers: UserAnswersState;
}
