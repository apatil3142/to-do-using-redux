import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { useDispatch } from 'react-redux';
import { IToDo, addToDo, updateToDo } from './redux/ToDoSlice';
import Card from './components/Card';
import Modal from './components/Modal';

function App() {

  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();
  const [currentTodoItem, setCurrentToDoItem] = useState<IToDo>({task: '', completed: false, description: ''});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleAddTodo = useCallback(() => {
    if(isEdit){
      dispatch(updateToDo(currentTodoItem))
      setIsEdit(false);
    }else{
      dispatch(addToDo(currentTodoItem));
    }
    setCurrentToDoItem({task: '', completed: false, description: ''});
    setIsModalOpen(prev => !prev);
  },[currentTodoItem, dispatch, isEdit]);

  const handleEditClick = useCallback((id: number) => {
    if(id){
      const selectedCardToEdit = todos.find(item => item.id === id);
      if(selectedCardToEdit){
        setCurrentToDoItem({...selectedCardToEdit});
        setIsEdit(true);
        setIsModalOpen(prev => !prev);
      }
    }
  },[todos]);

  return (
    <div className="main">
      <div className="todosContainer">
        <button className='add-new-btn' onClick={() => setIsModalOpen(!isModalOpen)}>Add New</button>
        {isModalOpen && 
        <Modal {...{isModalOpen, setIsModalOpen}}>
          <form className='form'>
            <label htmlFor="task">Title</label>
            <input autoFocus placeholder='Add title' value={currentTodoItem.task} onChange={(e) => setCurrentToDoItem(prev => ({...prev, task: e.target.value}))} name='task' type="text" className="task-input" />
            <label htmlFor="description">Description</label>
            <textarea placeholder='Add description' value={currentTodoItem.description} onChange={(e) => setCurrentToDoItem(prev => ({...prev, description: e.target.value}))} name='description' className='textArea' id="" cols={30} rows={10} />
            <button className="save-btn" onClick={handleAddTodo}>Save</button>
          </form>
        </Modal>}
        <div className='search'>

        </div>

        <div className='todoList'>
          {todos && todos.map(item => (
            <Card key={item.id} todo={item} editClickCallback={handleEditClick} />
          ))}
          
        </div>
        <ul className='todolist'>
          
        </ul>
      </div>
    </div>
  );
}

export default App;
