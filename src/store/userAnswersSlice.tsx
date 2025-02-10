import { createSlice } from '@reduxjs/toolkit';
import { UserAnswersState } from '../types/store';
import { saveState } from '../utils/sessionStorage';

const initialState: UserAnswersState = {
  answers: {},
  history: [],
};

const userAnswersSlice = createSlice({
  name: 'userAnswers',
  initialState,
  reducers: {
    setAnswer(state, action) {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;

      if (!state.history.includes(questionId)) {
        state.history.push(questionId);
      }

      saveState('userAnswers', state);
    },

    goBack(state) {
      state.history.pop();
      saveState('userAnswers', state);
    },
  },
});

export { initialState };
export const { setAnswer, goBack } = userAnswersSlice.actions;
export default userAnswersSlice.reducer;
