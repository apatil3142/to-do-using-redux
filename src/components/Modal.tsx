import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { IoMdClose } from "react-icons/io";


interface IModalProps{
  isModalOpen: boolean;
  setIsModalOpen: (a: boolean) => void;
  children: ReactNode;
}

const Modal: React.FC<IModalProps> = ({isModalOpen,setIsModalOpen, children}) => {
  return isModalOpen ? ReactDOM.createPortal(
  <div className='modal-container'>
    <div className="modal-content">
      <span className='modal-close' onClick={() => setIsModalOpen(!isModalOpen)}>
        <IoMdClose size={24} />
      </span>
      {children}
    </div>
  </div>, document.body) : null
}

export default Modal;
