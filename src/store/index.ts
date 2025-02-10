import { configureStore } from '@reduxjs/toolkit';
import userAnswersReducer, { initialState as userAnswersInitial } from './userAnswersSlice';
import { saveState, loadState } from '../utils/sessionStorage';
import { UserAnswersState } from '../types/store';

const USER_ANSWERS_KEY = 'userAnswers';

const preloadedUserAnswers: UserAnswersState | undefined = loadState(USER_ANSWERS_KEY);

const store = configureStore({
  reducer: {
    userAnswers: userAnswersReducer,
  },
  preloadedState: {
    userAnswers: preloadedUserAnswers || userAnswersInitial,
  },
});

store.subscribe(() => {
  saveState(USER_ANSWERS_KEY, store.getState().userAnswers);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
