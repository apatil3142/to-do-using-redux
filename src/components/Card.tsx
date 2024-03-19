import React, { useCallback } from 'react';
import { IToDo, removeToDo } from '../redux/ToDoSlice';
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';


interface ICardProps {
  todo: IToDo;
  editClickCallback: (id: number) => void;
}

const Card: React.FC<ICardProps> = ({todo, editClickCallback}) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = useCallback(() => {
    console.log('clicked');
    dispatch(removeToDo(todo.id));
  },[todo, dispatch]);

  return (
    <div className='card-container'>
      <div className="card-header">
        <span className="card-title">{todo.task}</span>
        <div className="card-action-icons">
          <input type="checkbox" name="" id="" />
          <MdOutlineEdit size={24} onClick={() => editClickCallback(todo.id as number)} />
          <MdDeleteOutline size={24} onClick={handleDeleteTodo} />
        </div>
      </div>
      <div className="card-main">
        {todo.description}
      </div>
    </div>
  )
}

export default Card
