import { createSlice } from '@reduxjs/toolkit';

export interface IToDo{
  id?: number;
  task: string;
  completed: boolean;
  description: string
}

export interface ITodos {
  todos: IToDo[];
}

const initialState = {todos: []} satisfies ITodos as ITodos;

const todosSlice = createSlice({
  name: 'Todos',
  initialState,
  reducers: {

    addToDo: (state, action) =>{
      state.todos.push({id: Date.now().toString(36), ...action.payload});
    },

    removeToDo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    
    updateToDo: (state, action) => {
      const todos = [...state.todos];
      const selectedTodoIndex = todos.findIndex(item => item.id === action.payload.id);
      if(selectedTodoIndex !== -1){
        todos[selectedTodoIndex] = {...action.payload};
      }
      state.todos = [...todos];
    }
  }
})

export const {addToDo, removeToDo, updateToDo} = todosSlice.actions;

export default todosSlice.reducer;


 