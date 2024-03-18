import { configureStore } from '@reduxjs/toolkit'
import ToDoSlice from './ToDoSlice';

const store = configureStore({
  reducer: {
    todo: ToDoSlice
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
export default store;