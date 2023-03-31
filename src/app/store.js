import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../features/filter/filterSlice';
import jobsReducer from '../features/jobs/jobsSlice';

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    filter: filterReducer
  },
});
