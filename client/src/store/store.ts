import { configureStore } from '@reduxjs/toolkit';
import postsReducer from "../store/reducers/postsSlice";

export const store:any = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;