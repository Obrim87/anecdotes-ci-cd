import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterSlice from './reducers/filterReducer';
import anecdotesSlice from './reducers/anecdoteReducer';
import notificationSlice from './reducers/notificationReducer';

const store = configureStore({
  reducer: {
    anecdotes: anecdotesSlice,
    filter: filterSlice,
    notification: notificationSlice
  }
});

const rootReducer = combineReducers({
  anecdotes: anecdotesSlice,
  filter: filterSlice,
  notification: notificationSlice
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
};
export default store;
