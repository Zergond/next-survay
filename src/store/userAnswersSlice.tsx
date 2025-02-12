import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserAnswersState } from "../types/store";

const initialState: UserAnswersState = {
  answers: {},
  history: [],
};

interface AnswerPayload {
  questionId: string;
  answer: string;
}

const userAnswersSlice = createSlice({
  name: "userAnswers",
  initialState,
  reducers: {
    setAnswer(state, action: PayloadAction<AnswerPayload>) {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
    },

    goBack(state) {
      if (state.history.length > 1) {
        state.history.pop();
      }
    },

    goForward(state, action: PayloadAction<{ questionId: string }>) {
      const { questionId } = action.payload;

      if (!state.history.includes(questionId)) {
        state.history.push(questionId);
      }
    },

    clearState(state) {
      state.answers = initialState.answers;
      state.history = initialState.history;
    },
  },
});

export { initialState };
export const { setAnswer, goBack, goForward, clearState } =
  userAnswersSlice.actions;
export default userAnswersSlice.reducer;
