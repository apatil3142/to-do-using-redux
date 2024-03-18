import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { useDispatch } from 'react-redux';
import { IToDo, addToDo } from './redux/ToDoSlice';
import Card from './components/Card';

function App() {

  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();
  const [currentTodoItem, setCurrentToDoItem] = useState<IToDo>({task: '', completed: false});

  const handleAddTodo = useCallback(() => {
    const res = dispatch(addToDo(currentTodoItem));
    setCurrentToDoItem({task: '', completed: false});
    console.log(res, 'fdeuuhe')
  },[currentTodoItem, dispatch]);

  useEffect(() => {

    console.log(todos, 'efrhfh');
  },[todos]);


  return (
    <div className="main">
      <div className="todosContainer">
        <div className='search'></div>
        <div className='todoList'>
          {todos && todos.map(item => (
            <Card />
          ))}
        </div>
        <input type="text" value={currentTodoItem.task} onChange={(e) => setCurrentToDoItem(prev => ({...prev, task: e.target.value}))}  />
        <button onClick={handleAddTodo}>Add</button>
        <ul className='todolist'>
          
        </ul>
      </div>
    </div>
  );
}

export default App;
