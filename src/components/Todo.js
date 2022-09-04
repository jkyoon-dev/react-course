import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const deleteHandle = () => {
    setModalIsOpen(true);
  };
  const closeHandle = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandle}>
          Delete
        </button>
        {modalIsOpen && (
          <Modal onCancel={closeHandle} onConfirm={closeHandle} />
        )}
        {modalIsOpen && <Backdrop onCancel={closeHandle} />}
      </div>
    </div>
  );
};

export default Todo;
