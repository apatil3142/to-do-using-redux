import { createSlice } from '@reduxjs/toolkit';

export interface IToDo{
  id?: number;
  task: string;
  completed: boolean;
}

export interface ITodos {
  todos: IToDo[];
}

const initialState = {todos: []} satisfies ITodos as ITodos;

const todosSlice = createSlice({
  name: 'Todos',
  initialState,
  reducers: {
    addToDo(state, action){
      state.todos.push({id: Date.now().toString(36), ...action.payload});
      return state;
    },
    removeToDo(state, action){
      state.todos.filter(todo => todo.id !== action.payload);
      return state;
    }
  }
})

export const {addToDo, removeToDo} = todosSlice.actions;

export default todosSlice.reducer;


 